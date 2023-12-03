<template>
  <transition name="fade">
    <BaseCard v-if="visible" class="fixed bottom-4 left-4 p-4 w-[92%] md:max-w-3xl bg-custom-color opacity-90 border-primary-400 shadow-lg rounded-md h-auto z-[50]">
      <BaseButtonClose class="absolute top-2 right-2 text-gray-500 z-50" @click="close">
        x
      </BaseButtonClose>
      <BaseHeading
            as="h2"
            size="xl"
            weight="light"
            lead="tight"
            class="text-muted-800 mx-auto mb-4 dark:text-white"
          >
          <Icon name="noto:waving-hand" class="h-8 w-8" />
          Investment opportunity. Don’t miss out!
          </BaseHeading>
      <!-- Roadmap Section -->
      <div class="roadmap-container">
        <div class="roadmap">
          <div class="radio-group">
            <div class="radio-option pr-6 text-center" @click="selectStage('sprint')">
              <input type="radio" id="sprint" value="sprint" v-model="selectedStage" />
              <label class="bg-slate-900" for="sprint"><icon name="lets-icons:compas-mini-duotone" class="h-8 w-8" /></label>
              <span class="text-center text-xs">Product <br /> Sprint</span>
            </div>

            <div class="radio-option pr-6 text-center" @click="selectStage('prototype')">
              <input type="radio" id="prototype" value="prototype" v-model="selectedStage" />
              <label class="bg-primary-800" for="prototype"><icon name="bi:phone" class="h-8 w-8" /></label>
              <span class="text-center text-xs">High-Fidelity<br /> Prototype</span>
            </div>

            <div class="radio-option pr-6 text-center" @click="selectStage('development')">
              <input type="radio" id="development" value="development" v-model="selectedStage" />
              <label class="bg-primary-800" for="development"><icon name="ion:construct-outline" class="h-8 w-8" /></label>
              <span class="text-center text-xs">Product<br /> Development</span>
            </div>

            <div class="radio-option pr-6 text-center" @click="selectStage('launch')">
              <input type="radio" id="launch" value="launch" v-model="selectedStage" />
              <label class="bg-primary-800" for="launch"><icon name="entypo:rocket" class="h-8 w-8" /></label>
              <span class="text-center text-xs">Launch</span>
            </div>

            <!-- Display Content Based on Selected Stage -->
            <div class="content-display">
              <p v-if="selectedStage === 'sprint'">Details about Product Sprint...</p>
              <p v-if="selectedStage === 'prototype'">Details about High Fidelity Prototype...</p>
              <p v-if="selectedStage === 'development'">Details about Product Development...</p>
              <p v-if="selectedStage === 'launch'">Details about Launch...</p>
            </div>

          </div>
          <div class="roadmap-line"></div>
        </div>
        <div class="flex w-full">
            <BaseButton size="sm" class="ml-auto whitespace-nowrap" @click="openModal">
              <Icon name="streamline:investment-selection-solid" class="-ms-1 h-4 w-4" />
              <span> Explore the investment opportunity</span>
            </BaseButton>
          </div>
      </div>
    </BaseCard>
  </transition>
  <TairoModalInvestment :open="isModalOpen" size="3xl" @close="closeModal" />
</template>

<script>
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
  data() {
    return {
      selectedStage: 'sprint',
      visible: true,
      autoSlideInterval: null,
    };
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeDestroy() {
    clearInterval(this.autoSlideInterval);
  },
  methods: {
    selectStage(stage) {
      this.selectedStage = stage;
    },
    startAutoSlide() {
      const stages = ['sprint', 'prototype', 'development', 'launch'];
      let currentStageIndex = 0;
      this.autoSlideInterval = setInterval(() => {
        currentStageIndex = (currentStageIndex + 1) % stages.length;
        this.selectedStage = stages[currentStageIndex];
      }, 5000);
    },
  },
});
</script>

<style scoped>
.toaster-container {
  max-width: 100%;
  padding: 2rem;
  background: #3277bc;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
}

.roadmap-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.roadmap {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.roadmap-line {
  position: absolute;
  top: 20%;
  width: 35%;
  height: 4px;
  left: 15px;
  background-color: #ddd;
  z-index: -1;
}

.radio-group {
  display: flex;
  width: 100%;
}

.radio-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
}

.radio-option input[type="radio"] {
  display: none;
}

.radio-option label {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 2px solid #ddd;
  border-radius: 50%;
  margin-bottom: 8px;
  font-size: 24px;
  color: #ddd;
  cursor: pointer;
}

.radio-group input[type="radio"] {
  opacity: 0;
  position: absolute;
}

.radio-group label {
  display: block;
  border: 1px solid #ddd;
  border-radius: 30px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
}

.radio-group input[type="radio"]:checked + label {
  background-color: #22acd3;
  color: white;
}

.content-display {
  margin-top: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
