const e=`<template>
  <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
    <BaseAutocomplete
      v-model="first"
      :items="frameworks"
      icon="lucide:search"
      shape="curved"
      placeholder="e.g. Nuxt"
      label="Framework"
      size="sm"
    />

    <BaseAutocomplete
      v-model="second"
      :items="frameworks"
      clearable
      shape="curved"
      placeholder="e.g. Vue.js"
      label="Framework"
      size="sm"
    />
  </div>
</template>

<script setup lang="ts">
const first = ref('')
const second = ref('')

const frameworks = ref(['Javascript', 'Nuxt', 'Vue.js', 'React.js', 'Angular', 'Alpine.js'])
<\/script>
`;export{e as default};
