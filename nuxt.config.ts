// https://nuxt.com/docs/api/configuration/nuxt-config

// Helper function to conditionally load modules
function optionalModule(name: string) {
  try {
    require.resolve(name)
    return name
  } catch {
    return undefined
  }
}

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    optionalModule('@nuxt/content')
  ].filter(Boolean),

  css: [
    '~/assets/css/main.css',
    optionalModule('@nuxt/content') ? '~/assets/css/content.css' : undefined
  ].filter(Boolean),
  image: {
    format: ['webp'],
    provider: 'ipx',
    // domains: ['example.com']
  },

  // Uncomment to enable content preview (Nuxt Studio)
  // content: {
  //   preview: {
  //     api: 'https://api.nuxt.studio'
  //   }
  // },

  nitro: {
    compressPublicAssets: true
  },

  runtimeConfig: {
    public: {}
  }
})
