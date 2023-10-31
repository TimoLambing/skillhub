import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { n as useVModel, o as useNinjaId } from '../server.mjs';
import { ssrRenderAttrs, ssrLooseEqual, ssrGetDynamicModelProps, ssrRenderClass, ssrRenderAttr, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BaseRadio",
  __ssrInlineRender: true,
  props: {
    id: { default: void 0 },
    value: { default: void 0 },
    modelValue: { default: void 0 },
    label: { default: void 0 },
    error: { type: [String, Boolean], default: void 0 },
    color: { default: void 0 },
    classes: { default: () => ({}) }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const inputRef = ref();
    const value = useVModel(props, "modelValue", emits, {
      passive: true
    });
    const colorStyle = {
      default: "nui-radio-default",
      light: "nui-radio-light",
      muted: "nui-radio-muted",
      primary: "nui-radio-primary",
      info: "nui-radio-info",
      success: "nui-radio-success",
      warning: "nui-radio-warning",
      danger: "nui-radio-danger"
    };
    __expose({
      /**
       * The underlying HTMLInputElement element.
       */
      el: inputRef
    });
    const id = useNinjaId(() => props.id);
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-radio", [props.color && colorStyle[props.color], props.classes?.wrapper]]
      }, _attrs))}><div class="nui-radio-outer"><input${ssrRenderAttrs((_temp0 = mergeProps({
        id: unref(id),
        ref_key: "inputRef",
        ref: inputRef,
        checked: ssrLooseEqual(unref(value), props.value)
      }, _ctx.$attrs, {
        type: "radio",
        value: props.value,
        class: "nui-radio-input"
      }), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, unref(value)))))}><div class="${ssrRenderClass([props.classes?.inputBg, "nui-radio-inner"])}"></div><div class="${ssrRenderClass([props.classes?.inputDot, "nui-radio-dot"])}"></div></div><div class="nui-radio-label-wrapper">`);
      if (props.label || "default" in _ctx.$slots) {
        _push(`<label${ssrRenderAttr("for", unref(id))} class="${ssrRenderClass([props.classes?.label, "nui-radio-label-text"])}">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          _push(`${ssrInterpolate(props.label)}`);
        }, _push, _parent);
        _push(`</label>`);
      } else {
        _push(`<!---->`);
      }
      if (props.error && typeof props.error === "string") {
        _push(`<div class="nui-radio-error">${ssrInterpolate(props.error)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/form/BaseRadio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=BaseRadio-d9efef81.mjs.map
