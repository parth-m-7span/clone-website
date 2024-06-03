import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["directus"]?: typeof import("nuxt-directus").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["icon"]?: typeof import("nuxt-icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["site"]?: typeof import("/Users/parth7span/projects/clone-website/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["sitemap"]?: typeof import("nuxt-simple-sitemap").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["schemaOrg"]?: typeof import("nuxt-schema-org").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["gtm"]?: typeof import("@zadigetvoltaire/nuxt-gtm").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["robots"]?: typeof import("@nuxtjs/robots").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["directusBlog"]?: typeof import("@7span/nuxt-directus-blog").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["editorjsRenderer"]?: typeof import("@7span/nuxt-editorjs-renderer").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["nuxt-directus", Exclude<NuxtConfig["directus"], boolean>] | ["nuxt-icon", Exclude<NuxtConfig["icon"], boolean>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["/Users/parth7span/projects/clone-website/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["nuxt-simple-sitemap", Exclude<NuxtConfig["sitemap"], boolean>] | ["nuxt-schema-org", Exclude<NuxtConfig["schemaOrg"], boolean>] | ["@zadigetvoltaire/nuxt-gtm", Exclude<NuxtConfig["gtm"], boolean>] | ["@nuxtjs/robots", Exclude<NuxtConfig["robots"], boolean>] | ["@7span/nuxt-directus-blog", Exclude<NuxtConfig["directusBlog"], boolean>] | ["@7span/nuxt-editorjs-renderer", Exclude<NuxtConfig["editorjsRenderer"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   "nuxt-simple-sitemap": {
      version: string,

      moduleConfig: {
         autoLastmod: boolean,

         xsl: string,

         xslTips: boolean,

         cacheTtl: number,

         defaultSitemapsChunkSize: number,

         runtimeCacheStorage: string,

         autoAlternativeLangPrefixes: any,

         credits: boolean,

         defaults: any,

         xslColumns: Array<{

         }>,

         include: Array<any>,

         exclude: Array<string>,

         sitemaps: boolean,

         sitemapName: string,

         dynamicUrlsApiEndpoint: string,

         urls: Array<any>,

         debug: boolean,

         discoverImages: boolean,
      },

      buildTimeMeta: {
         isNuxtContentDocumentDriven: boolean,

         hasApiRoutesUrl: boolean,

         hasPrerenderedRoutesPayload: boolean,

         prerenderSitemap: boolean,

         version: string,
      },
   },
  }
  interface PublicRuntimeConfig {
   directus: {
      url: string,

      autoFetch: boolean,

      autoRefresh: boolean,

      onAutoRefreshFailure: any,

      fetchUserParams: any,

      token: any,

      devtools: boolean,

      cookieNameToken: string,

      cookieNameRefreshToken: string,

      maxAgeRefreshToken: number,
   },

   gtm: {
      devtools: boolean,

      id: string,

      debug: boolean,

      enabled: boolean,

      loadScript: boolean,
   },

   blog: {
      baseUrl: string,

      collection: string,

      productId: string,

      assetsBaseUrl: string,
   },

   site: {
      _context: {
         defaultLocale: string,

         trailingSlash: string,

         titleSeparator: string,

         name: string,

         indexable: string,

         debug: string,

         url: string,
      },

      defaultLocale: string,

      trailingSlash: boolean,

      titleSeparator: string,

      name: string,

      indexable: boolean,

      debug: boolean,

      url: string,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }