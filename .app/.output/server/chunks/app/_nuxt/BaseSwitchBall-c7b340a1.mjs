import { _ as __nuxt_component_0 } from './IconCheck-b31ac5c7.mjs';
import { n as useVModel, o as useNinjaId } from '../server.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BaseSwitchBall",
  __ssrInlineRender: true,
  props: {
    id: { default: void 0 },
    modelValue: { type: Boolean, default: void 0 },
    label: { default: void 0 },
    sublabel: { default: void 0 },
    color: { default: "primary" }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const value = useVModel(props, "modelValue", emits, {
      passive: true
    });
    const id = useNinjaId(() => props.id);
    const colorStyle = {
      primary: "nui-switch-ball-primary",
      info: "nui-switch-ball-info",
      success: "nui-switch-ball-success",
      warning: "nui-switch-ball-warning",
      danger: "nui-switch-ball-danger"
    };
    const inputRef = ref();
    __expose({
      /**
       * The underlying HTMLInputElement element.
       */
      el: inputRef
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconCheck = __nuxt_component_0;
      _push(`<label${ssrRenderAttrs(mergeProps({
        for: unref(id),
        class: ["nui-switch-ball", colorStyle[props.color]]
      }, _attrs))}><span class="nui-switch-ball-outer"><input${ssrRenderAttrs(mergeProps({
        id: unref(id),
        ref_key: "inputRef",
        ref: inputRef,
        checked: unref(value)
      }, _ctx.$attrs, {
        type: "checkbox",
        class: "nui-switch-ball-input peer"
      }))}><span class="nui-switch-ball-handle"></span><span class="nui-switch-ball-track"></span>`);
      _push(ssrRenderComponent(_component_IconCheck, { class: "nui-switch-ball-icon" }, null, _parent));
      _push(`</span>`);
      if (!props.sublabel) {
        _push(`<span class="nui-switch-ball-single-label">${ssrInterpolate(props.label)}</span>`);
      } else {
        _push(`<span class="nui-switch-ball-dual-label"><span class="nui-switch-ball-label">${ssrInterpolate(props.label)}</span><span class="nui-switch-ball-sublabel">${ssrInterpolate(props.sublabel)}</span></span>`);
      }
      _push(`</label>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/form/BaseSwitchBall.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=BaseSwitchBall-c7b340a1.mjs.map
