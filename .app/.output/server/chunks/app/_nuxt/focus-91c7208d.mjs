const focus = `<template>
  <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
    <BaseInput
      v-model="value"
      shape="rounded"
      label="Email Address"
      placeholder="Enter your email..."
      icon="lucide:mail"
      color-focus
    />
  </div>
</template>

<script setup lang="ts">
const value = ref('')
<\/script>
`;

export { focus as default };
//# sourceMappingURL=focus-91c7208d.mjs.map
