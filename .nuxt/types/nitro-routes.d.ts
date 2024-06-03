// Generated by nitro
import type { Serialize, Simplify } from 'nitropack'
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/api/_sitemap-urls': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/_sitemap-urls').default>>>>
    }
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>>>
    }
    '/api/__sitemap__/debug': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt-simple-sitemap/dist/runtime/routes/debug').default>>>>
    }
    '/__sitemap__/style.xsl': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt-simple-sitemap/dist/runtime/routes/sitemap').default>>>>
    }
    '/7span_7span_com_sitemap.xml': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt-simple-sitemap/dist/runtime/routes/sitemap').default>>>>
    }
    '/robots.txt': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxtjs/robots/dist/runtime/server/middleware').default>>>>
    }
  }
}
export {}