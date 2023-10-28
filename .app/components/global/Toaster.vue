<template>
  <transition name="fade">
    <BaseCard v-if="visible" class="fixed bottom-4 left-4 p-4 max-w-3xl bg-primary-800 border-primary-400 shadow-lg rounded-md h-48 z-[50] opacity-90">
      <div class="flex flex-row">
        <div
          class="hover:bg-muted-100 dark:hover:bg-muted-700/50 flex h-40 w-40 items-center justify-center motion-safe:transition-colors motion-safe:duration-200"
        >
          <BaseAvatar
            shape="full"
            size="3xl"
            src="/img/ceo.jpeg"
            class="nui-mask nui-mask-blob"
          />
        </div>
        <div class="p-4">
          <BaseHeading
            as="h2"
            size="xl"
            weight="light"
            lead="tight"
            class="text-muted-800 mx-auto mb-4 dark:text-white"
          >
          <Icon name="flat-color-icons:info" class="h-8 w-8" />
          Investment opportunity
          </BaseHeading>
          <BaseParagraph
            size="sm"
            class="text-muted-500 dark:text-muted-100 mx-auto mb-4"
          >
          If you are seeking an investment opportunity, look no further. SkillHub is open to all funding possibilities. Currently in beta, SkillHub is being actively developed by our team.
          </BaseParagraph>
          <div class="flex w-full">
            <BaseButton color="info" flavor="pastel" size="sm" class="ml-auto">Explore the investment opportunity</BaseButton>
          </div>
        </div>
      </div>

      <BaseButtonClose class="absolute top-2 right-2 text-gray-500" @click="close">
        x
      </BaseButtonClose>
      <div class="flex items-center">
        <div v-if="icon" class="mr-4">
          <span :class="iconClasses">{{ icon }}</span>
        </div>
        <div>
          <div v-if="title" class="font-semibold mb-2">{{ title }}</div>
          <div v-if="message" class="text-gray-700">{{ message }}</div>
        </div>
      </div>
    </BaseCard>
  </transition>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  name: 'Toaster',
  props: {
    title: { type: String, default: null },
    message: { type: String, default: null },
    color: { type: String, default: 'muted' },
    icon: { type: String, default: null },
    closable: { type: Boolean, default: true },
  },
  setup(props) {
    const visible = ref(true);

    const close = () => {
        visible.value = false;
    };

    const wrapperClasses = computed(() => `border-${props.color}-400 bg-${props.color}-100`);

    const iconClasses = computed(() => `text-${props.color}-500`);

    return {
        visible,
        close,
        wrapperClasses,
        iconClasses,
    };
},

};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
