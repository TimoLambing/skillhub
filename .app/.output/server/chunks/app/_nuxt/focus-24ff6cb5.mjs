const focus = `<template>
  <div class="grid gap-6 md:max-w-xl md:grid-cols-2">
    <BaseTextarea
      v-model="value"
      label="Message"
      shape="rounded"
      placeholder="Write a message..."
      color-focus
    />
  </div>
</template>

<script setup lang="ts">
const value = ref('')
<\/script>
`;

export { focus as default };
//# sourceMappingURL=focus-24ff6cb5.mjs.map
