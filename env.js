const env = {
  development: {
    crawl: false,
    renderDraftPage: true,
  },
  preview: {
    crawl: false,
    renderDraftPage: true,
  },
  production: {
    crawl: true,
    renderDraftPage: false,
  },
};

// https://vercel.com/docs/projects/environment-variables/system-environment-variables
export default env[process.env.VERCEL_ENV || "development"];
