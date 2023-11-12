import {
  demoRules,
  documentationRules,
  landingRules,
} from './config/routes-rules'

export default defineNuxtConfig({
  devtools: { enabled: false },
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },
  extends: [
    /**
     * This extends the base Tairo layer.
     *
     * Alternatively you can use the following:
     * 'github:cssninjaStudio/tairo/layers/xxx#v1.0.0'
     *
     * And set GIGET_AUTH=<github_token> in your .env file
     *
     * This would allows you to create an empty git repository
     * with only your source code and no demo.
     */
    '../layers/landing',
    process.env.ENABLE_DOCUMENTATION && '../layers/documentation',
    '../layers/documentation',

    // shared layers
    '../layers/tairo-layout-sidebar',
    '../layers/tairo-layout-collapse',
    '../layers/tairo-layout-topnav',
    '../layers/tairo',

    /**
     * Uncomment the following line to add the Tairo Layout Sidebar layer
     */
    // '../layers/tairo-layout-sidebar',
  ],

  pwa: {
    manifest: {
      name: 'SkillHub',
      short_name: 'SkillHub',
      description: 'Delivering verified skills to Companies',
      theme_color: '#000000',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    },
  },

  /**
   * Load local font with @fontsource packages
   * @see https://fontsource.org/
   */
  css: [
    '~/assets/css/main.css',
    '~/assets/css/colors.css',
    '@fontsource-variable/fira-code/index.css',
    '@fontsource-variable/inter/index.css',
    '@fontsource-variable/karla/index.css',
  ],

  experimental: {
    // using chokidar-granular watcher run faster
    // when using layers and/or in large projects
    watcher: 'chokidar-granular',
    // Write early hints when using node server.
    writeEarlyHints: true,
    // Render JSON payloads with support for revivifying complex types.
    renderJsonPayloads: true,
  },

  typescript: {
    tsConfig: {
      // Here you can customize the generated tsconfig.json file
    },
  },

  // nuxt behavior configuration
  runtimeConfig: {
    MAILHOST: process.env.MAILHOST,
    MAILPORT: process.env.MAILPORT,
    MAILUSER: process.env.MAILUSER,
    MAILPASSWORD: process.env.MAILPASS,
    CONTACTMAIL: process.env.MAILFROM,
    public: {
      // mapbox config
      mapboxToken: process.env.NUXT_PUBLIC_MAPBOX_TOKEN,
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
    },
  },

  routeRules: {
    ...demoRules,
    ...landingRules,
    ...(process.env.ENABLE_DOCUMENTATION ? documentationRules : {}),
  },

  // nuxt build configuration
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },

  vite: {
    define: {
      'process.test': false,
      // This is required for shiki to work (used to render markdown code blocks)
      'process.env.VSCODE_TEXTMATE_DEBUG': false,
      // This enables vue-axe to work (used to check a11y - see .demo/plugins/vue-axe.ts)
      'process.env.ENABLE_A11Y_AXE': process.env.ENABLE_A11Y_AXE,
    },
    build: {
      target: 'esnext',
    },
  },

  modules: [
    '@nuxt/image',
    '@vite-pwa/nuxt',
    '@pinia/nuxt',
    'nuxt-gtag',
    'nuxt-aos',
  ],
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  gtag: {
    id: 'G-H72N63BVW3',
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano:
        process.env.NODE_ENV === 'production'
          ? { preset: ['default', { discardComments: { removeAll: true } }] }
          : false, // disable cssnano when not in production
    },
  },
})
