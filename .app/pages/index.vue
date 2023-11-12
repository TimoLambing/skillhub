<script setup lang="ts">
// set compile time meta information
definePageMeta({
  // static meta information can be added to vue-router, we use it
  // to generate the search index in the demo
  title: 'AI recruiter',
  description:
  'We got the Skills your company needs',
  breadcrumb: {
    label: 'SkillHub',
  },
  layout: 'landing'
})

// meta information can also be added to the head
useHead({
  meta: [
    { name: 'description', content: 'AI recruiter' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})

// Here you can define your page logic
</script>

<template>
  <div>
    <LandingHero />
    <LandingCustomizer />
    <LandingHeroMockup />
    <!-- <LandingDemos :limit="12" />
    <LandingLayers />
    <LandingLayouts />
    <LandingFeatures />
    <LandingBenefits />
    <LandingCta />
    <LandingContent />
    <LandingFooter /> -->
  </div>
</template>
