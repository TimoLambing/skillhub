const e=`<template>
  <div class="flex flex-col gap-6 md:flex-row md:items-start">
    <div class="flex w-3/5 flex-wrap items-end gap-4">
      <BaseCheckboxAnimated v-model="checked" :classes="{ label: 'text-primary-500' }" />
    </div>
  </div>
</template>

<script setup lang="ts">
const checked = ref(false)
<\/script>
`;export{e as default};
