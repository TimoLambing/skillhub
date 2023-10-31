import { computed, ref, provide, inject } from 'vue';
import { I as toRef, u as useRouter } from '../server.mjs';
import copy from 'fast-copy';

function createMultiStepForm(rules) {
  const initialState = toRef(rules.initialState);
  const steps = computed(() => rules.steps.map((step, id) => ({ ...step, id })));
  const router = useRouter();
  const totalSteps = computed(() => steps.value.length);
  const currentStep = computed(() => {
    const step = steps.value.find(
      (step2) => step2.to === router.currentRoute.value.path
    )?.id;
    if (typeof step !== "number")
      return 0;
    return step > -1 ? step : 0;
  });
  const progress = computed(
    () => (currentStep.value + 1) / totalSteps.value * 100
  );
  const data = ref(copy(initialState.value));
  const loading = ref(false);
  const preview = ref(false);
  const complete = ref(false);
  const multiStepContext = {
    steps,
    totalSteps,
    currentStep,
    progress,
    data,
    loading,
    preview,
    complete,
    getStep,
    getNextStep,
    getPrevStep,
    goToStep,
    reset,
    handleSubmit
  };
  function getNextStep() {
    if (currentStep.value + 1 >= totalSteps.value) {
      return null;
    }
    return getStep(currentStep.value + 1);
  }
  function getPrevStep() {
    if (currentStep.value - 1 < 0) {
      return null;
    }
    return getStep(currentStep.value - 1);
  }
  function getStep(step) {
    return steps.value[step];
  }
  function goToStep(step) {
    if (step) {
      router.push(step.to);
    }
  }
  function reset() {
    data.value = copy(initialState.value);
    preview.value = false;
    complete.value = false;
  }
  async function handleSubmit() {
    if (loading.value)
      return;
    loading.value = true;
    try {
      if (rules.onSubmit) {
        await rules.onSubmit(data.value, multiStepContext);
      }
      complete.value = true;
    } catch (error) {
      if (rules.onError) {
        await rules.onError(error, multiStepContext);
      }
    } finally {
      loading.value = false;
    }
  }
  provide(multiStepFormContextInjectionKey, multiStepContext);
  return multiStepContext;
}
const multiStepFormContextInjectionKey = Symbol(
  "multi-step-form-context"
);
function useMultiStepForm() {
  const context = inject(
    multiStepFormContextInjectionKey
  );
  if (!context) {
    throw new Error(
      "MultiStepForm: no context found, did you forget to call createMultiStepForm?"
    );
  }
  return context;
}

export { createMultiStepForm as c, useMultiStepForm as u };
//# sourceMappingURL=multi-step-form-008d1760.mjs.map
