const l=`<template>
  <BaseFocusLoop class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4">
    <BaseSwitchBall v-model="values.primary" label="Primary" color="primary" />

    <BaseSwitchBall v-model="values.info" label="Info" color="info" />

    <BaseSwitchBall v-model="values.success" label="Success" color="success" />

    <BaseSwitchBall v-model="values.warning" label="Warning" color="warning" />

    <BaseSwitchBall v-model="values.danger" label="Danger" color="danger" />
  </BaseFocusLoop>
</template>

<script setup lang="ts">
const values = reactive({
  primary: true,
  info: true,
  success: true,
  warning: true,
  danger: true,
})
<\/script>
`;export{l as default};
