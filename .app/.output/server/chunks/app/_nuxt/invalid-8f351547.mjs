const invalid = `<template>
  <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
    <BaseInput
      v-model="value"
      type="email"
      label="Email Address"
      placeholder="Enter your email..."
      icon="lucide:mail"
      error="This email is already taken"
    />
  </div>
</template>

<script setup lang="ts">
const value = ref('')
<\/script>
`;

export { invalid as default };
//# sourceMappingURL=invalid-8f351547.mjs.map
