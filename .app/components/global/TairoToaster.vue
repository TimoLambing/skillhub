<template>
  <transition name="fade">
    <BaseCard v-if="visible" class="fixed bottom-4 left-4 p-4 w-[92%] md:max-w-3xl bg-primary-800 border-primary-400 shadow-lg rounded-md h-auto z-[50] opacity-90">
      <div class="flex flex-col md:flex-row">
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
            <BaseButton color="info" flavor="pastel" size="sm" class="ml-auto whitespace-nowrap" @click="openModal">Explore the investment opportunity</BaseButton>
          </div>
        </div>
      </div>

      <BaseButtonClose class="absolute top-2 right-2 text-gray-500" @click="close">
        x
      </BaseButtonClose>
    </BaseCard>
  </transition>

  <TairoModal :open="isModalOpen" size="3xl" @close="closeModal" />
</template>

<script lang="ts">
import { ref, defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'Toaster',
  props: {
    title: { type: String, default: null },
    message: { type: String, default: null },
    color: { type: String, default: 'muted' },
    icon: { type: String, default: null },
    closable: { type: Boolean, default: true },
  },
  setup(props) {
    const isModalOpen = ref(false);

    const openModal = () => {
      isModalOpen.value = true;
      setTimeout(() => {
    visible.value = false;
  }, 1000);
    };

    const closeModal = () => {
      isModalOpen.value = false;
    };

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
        openModal,
        closeModal,
        isModalOpen,  // Make sure to return isModalOpen from setup
    };
  },
});
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
