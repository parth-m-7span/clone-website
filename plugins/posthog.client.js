import posthog from "posthog-js";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  if (!config.public.enablePosthog) return {};

  const { posthogPublicKey, posthogHost } = useAppConfig();
  const posthogClient = posthog?.init(posthogPublicKey, {
    api_host: posthogHost,
    person_profiles: "always", // or 'always' to create profiles for anonymous users as well
    capture_pageview: false, // we add manual pageview capturing below
    loaded: posthog => {
      if (!config.public.enablePosthog) posthog.debug();
    },
  });

  // Make sure that pageviews are captured with each route change
  const router = useRouter();
  router.afterEach(to => {
    nextTick(() => {
      posthog?.capture("$pageview", {
        current_url: to.fullPath,
      });
    });
  });

  return {
    provide: {
      posthog: () => posthogClient,
    },
  };
});
