import posthog from "posthog-js";
import env from "../env.js";

export default defineNuxtPlugin(() => {
  const sdsd = useAppConfig();
  console.log("env ==> ", sdsd);
  // console.log(
  //   "env.enablePosthog ==>",
  //   env.enablePosthog,
  //   process.env.VERCEL_ENV,
  //   process.env.NUXT_ENV_VERCEL_ENV,
  // );
  // if (!env.enablePosthog) return;
  console.log("posthog start init");
  return;
  const { posthogPublicKey, posthogHost } = useAppConfig();
  const posthogClient = posthog.init(posthogPublicKey, {
    api_host: posthogHost,
    person_profiles: "always", // or 'always' to create profiles for anonymous users as well
    capture_pageview: false, // we add manual pageview capturing below
    loaded: posthog => {
      if (process.env.VERCEL_ENV === "development") posthog.debug();
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
