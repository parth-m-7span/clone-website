import config from "./app-config.json";

export default defineNuxtConfig({
  vue: {
    compilerOptions: {
      isCustomElement: tag => ["lottie-player"].includes(tag),
    },
  },
  app: {
    head: {
      charset: "utf-8",
      title: "7Span",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "A passionate team of designers, developers & innovators, who can visualize and develop breathtaking graphics, websites, and apps for your business. Hire our top designer & developers for your great idea!",
        },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/images/favicon.png" },
        {
          rel: "stylesheet",
          href: "https://use.typekit.net/bgp3euh.css",
          /**
           * Async Loading of CSS
           * https://stackoverflow.com/questions/32759272/how-to-load-css-asynchronously
           */
          media: "print",
          onload: "this.media='all'",
        },
        {
          rel: "dns-prefetch",
          href: "https://7span-product.b-cdn.net/",
        },
        {
          rel: "dns-prefetch",
          href: "https://use.typekit.net/",
          defer: true,
        },
        {
          rel: "dns-prefetch",
          href: "https://analytics.google.com/",
          defer: true,
        },
        {
          rel: "dns-prefetch",
          href: "https://www.clarity.ms/",
          defer: true,
        },
        {
          rel: "dns-prefetch",
          href: "https://p.typekit.net/",
          defer: true,
        },
        {
          rel: "dns-prefetch",
          href: "https://www.googletagmanager.com/",
          defer: true,
        },
      ],
      script: [
        {
          src: "/js/analytics.js",
        },
        {
          /**
           * Lottie player npm pacakge is huge in size ( ~100kb) in build bundle. Affects Pagespeed Performance.
           * Therefore using CDN JS.
           */
          src: "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js",
          async: true,
          defer: true,
        },
      ],
      htmlAttrs: {
        lang: "en",
      },
    },
  },

  runtimeConfig: {
    public: {
      apiBaseURL: "/abc",
      mode: process.env.VERCEL_ENV || "ABC",
    },
  },

  /**
   * https://nuxtseo.com/sitemap/getting-started/prerender-requirements
   */
  site: {
    url: config.siteUrl,
    name: "7Span",
  },

  sitemap: {
    sitemapName: "7span_7span_com_sitemap.xml",
    exclude: ["/playground"],
  },

  modules: [
    "nuxt-directus",
    "nuxt-icon",
    "@nuxt/image",
    "nuxt-simple-sitemap",
    "nuxt-schema-org",
    "@zadigetvoltaire/nuxt-gtm",
    "@nuxtjs/robots",
    // "nuxt-security",
    "@7span/nuxt-directus-blog",
    "@7span/nuxt-editorjs-renderer",
  ],

  robots: {
    configPath: "./robots.config.js",
  },

  /**
   * https://www.nuxt-directus.site/getting-started/options
   */
  directus: {
    url: `${config.directusUrl}/`,
  },

  /**
   * https://image.nuxtjs.org/configuration
   */
  image: {
    domains: ["products.7span.in", "7span.com"], // Whitelist the domains to allow optimization
    providers: {
      bunnyCdn: {
        name: "bunnyCdn", // optional value to overrider provider name
        provider: "~/provider/bunnycdn.js", // Path to custom provider
        options: {
          // ... provider options
        },
      },
    },
  },

  css: ["~/assets/css/index.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  devtools: {
    enabled: false,
  },

  schemaOrg: {
    host: config.siteUrl,
  },

  gtm: {
    id: "GTM-THNJFTLC",
    debug: true,
    devtools: true, // (optional)
    enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
    loadScript: true,
  },

  // gtag: {
  //   id: "GTM-THNJFTLC",
  // },

  "xxx-security": {
    headers: {
      /**
       * Ref: https://github.com/Baroshem/nuxt-security/issues/133
       */
      crossOriginEmbedderPolicy: false,
      contentSecurityPolicy: {
        "default-src": ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
        "script-src-attr": ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
        "script-src-elem": [
          "'self'",
          "'unsafe-inline'",
          "'unsafe-eval'",
          "*.googletagmanager.com",
          "vercel.live",
        ],
        "style-src": ["'self'", "'unsafe-inline'", "*.typekit.net"],
        "connect-src": [
          "'self'",
          "'unsafe-inline'",
          "products.7span.in",
          "ws:",
          "localhost:",
          "api.iconify.design",
          "vitals.vercel-analytics.com",
        ],
        "img-src": ["*", "data:"],
        "media-src": ["*", "data:"],
        "frame-src": ["vercel.live"],
        "frame-ancestors": ["'self'", "products.7span.in"],
      },
    },
  },

  plugins: ["./plugins/global", "./plugins/posthog.client.js"],

  directusBlog: {
    baseUrl: config.directusUrl,
    collection: "bg_articles",
    productId: config.blogProductKey,
  },

  /**
   * On-Demand incremental static regeneration
   * On-demand revalidation allows you to purge the cache for an ISR route whenever you want
   */
  // 🔴 WARNING DO NOT ENABLE THIS. VERCEL BILLING GOES MAD WITH THIS.
  nitro: {
    vercel: {
      config: {
        bypassToken: "cbc0eb4746d86bff2b588eaff57ad036",
      },
    },
  },
  routeRules: {
    "/**": { isr: true },
  },
  experimental: {
    asyncContext: true,
  },
});
