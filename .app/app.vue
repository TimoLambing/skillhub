<script setup lang="ts">
const route = useRoute()
const app = useAppConfig()

/**
 * Global head configuration
 * @see https://nuxt.com/docs/getting-started/seo-meta
 */
useHead({
  title: () => route.meta?.title ?? '',
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - ${app.tairo.title}`
      : `${app.tairo.title}`
  },
  htmlAttrs: {
    lang: 'en',
    dir: 'ltr',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png',
    },
  ],

  meta: [
    { name: 'description', content: () => route.meta.description ?? 'The only workforce platform you will ever need' },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:site',
      content: '@skillhub',
    },
    {
      name: 'og:image:type',
      content: 'image/png',
    },
    {
      name: 'og:image:width',
      content: '1200',
    },
    {
      name: 'og:image:height',
      content: '630',
    },
    {
      name: 'og:image',
      content: `https://media.cssninja.io/embed/marketplace/product/wide.png?headline=${encodeURIComponent(
        route.meta.description ||
          (route.meta.preview
            ? `${route.meta.preview?.title} - ${route.meta.preview?.description}`
            : 'AI powered workforce manager'),
      )}&url=${encodeURIComponent(
        'https://media.cssninja.io/content/products/logos/tairo-text-white.svg',
      )}&previewUrl=${encodeURIComponent(
        `https://tairo.cssninja.io${
          route.meta.preview?.src || '/img/screens/documentation-hub.png'
        }`,
      )}`,
    },
  ],
})
</script>

<template>
  <VitePwaManifest />
  <div>
    <!--
      Global app search modal
      @see .demo/components/DemoAppSearch.vue
    -->
    <DemoAppSearch />
    <!--
      Global app layout switcher
      @see .demo/components/DemoAppLayoutSwitcher.vue
    -->
    <DemoAppLayoutSwitcher />

    <!--
      Vue Axe Popup
      @see .demo/plugins/vue-axe.client.ts
    -->
    <VueAxePopup />

    <NuxtLayout>
      <NuxtLoadingIndicator color="rgb(var(--color-primary-500))" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
