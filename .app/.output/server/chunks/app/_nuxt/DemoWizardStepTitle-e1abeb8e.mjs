import { _ as _sfc_main$p, b as _sfc_main$o } from '../server.mjs';
import { u as useMultiStepForm } from './multi-step-form-008d1760.mjs';
import { defineComponent, computed, mergeProps, withCtx, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoWizardStepTitle",
  __ssrInlineRender: true,
  setup(__props) {
    const { steps, currentStep } = useMultiStepForm();
    const currentStepData = computed(() => {
      return steps.value.find((step) => step.id === currentStep.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-10 text-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        tag: "h1",
        size: "2xl",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(unref(currentStepData)?.meta?.title)}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(unref(currentStepData)?.meta?.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "sm",
        class: "text-muted-500 dark:text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(unref(currentStepData)?.meta?.subtitle)}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(unref(currentStepData)?.meta?.subtitle), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoWizardStepTitle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=DemoWizardStepTitle-e1abeb8e.mjs.map
