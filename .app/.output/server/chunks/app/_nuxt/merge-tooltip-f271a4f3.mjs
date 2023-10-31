import { defineComponent, ref, mergeProps, unref, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { m } from '../../slider.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "merge-tooltip",
  __ssrInlineRender: true,
  setup(__props) {
    const mergeValue = ref([20, 50, 80]);
    const merge = ref(10);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-6 flex flex-col gap-6 md:flex-row md:items-end" }, _attrs))}><div class="w-full max-w-sm space-y-4 px-4">`);
      _push(ssrRenderComponent(unref(m), {
        modelValue: unref(mergeValue),
        "onUpdate:modelValue": ($event) => isRef(mergeValue) ? mergeValue.value = $event : null,
        merge: unref(merge),
        class: "slider-primary rounded-tooltip"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/slider/merge-tooltip.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=merge-tooltip-f271a4f3.mjs.map
