import config from "./app-config.json";

export default defineAppConfig({
  ...config,
  mode: process.env.VERCEL_ENV || "XYZ",
  nuxtIcon: {
    class: "icon shrink-0", // default <Icon> class applied
  },
});
