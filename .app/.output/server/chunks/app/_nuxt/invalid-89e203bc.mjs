const invalid = `<template>
  <div class="grid gap-6 md:max-w-xl md:grid-cols-2">
    <BaseTextarea
      v-model="value"
      label="Message"
      shape="rounded"
      placeholder="Write a message..."
      error="Please fill up the message"
    />
  </div>
</template>

<script setup lang="ts">
const value = ref('')
<\/script>
`;

export { invalid as default };
//# sourceMappingURL=invalid-89e203bc.mjs.map
