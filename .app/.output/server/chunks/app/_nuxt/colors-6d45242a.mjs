import { defineComponent, ref, mergeProps, unref, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { m } from '../../slider.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "colors",
  __ssrInlineRender: true,
  setup(__props) {
    const info = ref(38);
    const success = ref(84);
    const warning = ref(53);
    const danger = ref(67);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-4 md:grid-cols-2" }, _attrs))}><div class="px-4 py-6">`);
      _push(ssrRenderComponent(unref(m), {
        modelValue: unref(info),
        "onUpdate:modelValue": ($event) => isRef(info) ? info.value = $event : null,
        class: "slider-info circle-tooltip"
      }, null, _parent));
      _push(`</div><div class="px-4 py-6">`);
      _push(ssrRenderComponent(unref(m), {
        modelValue: unref(success),
        "onUpdate:modelValue": ($event) => isRef(success) ? success.value = $event : null,
        class: "slider-success circle-tooltip"
      }, null, _parent));
      _push(`</div><div class="px-4 py-6">`);
      _push(ssrRenderComponent(unref(m), {
        modelValue: unref(warning),
        "onUpdate:modelValue": ($event) => isRef(warning) ? warning.value = $event : null,
        class: "slider-warning circle-tooltip"
      }, null, _parent));
      _push(`</div><div class="px-4 py-6">`);
      _push(ssrRenderComponent(unref(m), {
        modelValue: unref(danger),
        "onUpdate:modelValue": ($event) => isRef(danger) ? danger.value = $event : null,
        class: "slider-danger circle-tooltip"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/slider/colors.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=colors-6d45242a.mjs.map
