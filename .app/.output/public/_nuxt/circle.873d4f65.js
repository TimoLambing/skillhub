const e=`<template>
  <div class="mt-6 flex flex-col gap-6 md:flex-row md:items-end">
    <div class="w-full max-w-sm space-y-4 px-4">
      <Slider v-model="circle" class="slider-primary circle-tooltip" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Slider from '@vueform/slider'
import '~/assets/css/slider.css'

const circle = ref(20)
<\/script>
`;export{e as default};
