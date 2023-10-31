import { n as useVModel, o as useNinjaId } from '../server.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrLooseEqual, ssrGetDynamicModelProps, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BaseRadioHeadless",
  __ssrInlineRender: true,
  props: {
    id: { default: void 0 },
    value: { default: void 0 },
    modelValue: { default: void 0 },
    name: { default: void 0 },
    label: { default: void 0 }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const value = useVModel(props, "modelValue", emits, {
      passive: true
    });
    const inputRef = ref();
    __expose({
      /**
       * The underlying HTMLInputElement element.
       */
      el: inputRef
    });
    const id = useNinjaId(() => props.id);
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "group/nui-radio-headless relative" }, _attrs))}>`);
      if (_ctx.label) {
        _push(`<label${ssrRenderAttr("for", unref(id))} class="text-muted-400 mb-1 inline-block cursor-pointer select-none font-sans text-sm">${ssrInterpolate(props.label)}</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="relative"><input${ssrRenderAttrs((_temp0 = mergeProps({
        id: unref(id),
        ref_key: "inputRef",
        ref: inputRef,
        checked: ssrLooseEqual(unref(value), props.value)
      }, _ctx.$attrs, {
        type: "radio",
        value: props.value,
        name: props.name,
        class: "peer absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0"
      }), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, unref(value)))))}>`);
      ssrRenderSlot(_ctx.$slots, "default", { value: unref(value) }, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/form/BaseRadioHeadless.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=BaseRadioHeadless-286f432f.mjs.map
