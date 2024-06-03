import config from "./app-config.json";

export default defineAppConfig({
  ...config,
  nuxtIcon: {
    class: "icon shrink-0", // default <Icon> class applied
  },
});
