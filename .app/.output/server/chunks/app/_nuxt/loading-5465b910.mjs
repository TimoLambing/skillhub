const loading = `<template>
  <div class="grid gap-6 md:max-w-xl md:grid-cols-2">
    <BaseTextarea
      v-model="value"
      label="Description"
      shape="rounded"
      placeholder="Write a message..."
      loading
    />
  </div>
</template>

<script setup lang="ts">
const value = ref('')
<\/script>
`;

export { loading as default };
//# sourceMappingURL=loading-5465b910.mjs.map
