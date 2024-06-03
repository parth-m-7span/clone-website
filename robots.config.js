import env from "./env.js";

const config = [
  {
    "User-agent": "*",
  },
  {
    Disallow: env.crawl ? "" : "/",
  },
];

export default config;
