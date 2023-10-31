import { useSSRContext, defineComponent, ref, computed, watchEffect, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import { l as _export_sfc, n as useVModel, o as useNinjaId } from '../server.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    "aria-hidden": "true",
    viewBox: "0 0 52 52"
  }, _attrs))}><circle cx="26" cy="26" r="25" fill="none" stroke="currentColor"></circle><path fill="none" stroke="currentColor" d="m14.1 27.2 7.1 7.2 16.7-16.8"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/icon/IconCheckCircle.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BaseCheckboxAnimated",
  __ssrInlineRender: true,
  props: {
    value: { default: void 0 },
    id: { default: void 0 },
    modelValue: { default: false },
    trueValue: { default: true },
    falseValue: { default: false },
    color: { default: void 0 },
    classes: { default: () => ({
      wrapper: [],
      label: [],
      input: []
    }) }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const value = useVModel(props, "modelValue", emits, {
      passive: true
    });
    const element = ref();
    const inputRef = ref();
    const innerElement = ref();
    const checked = computed(() => {
      if (value.value === props.trueValue) {
        return true;
      }
      if (value.value === props.falseValue) {
        return false;
      }
      return props.value === void 0 ? false : value.value.includes(props.value);
    });
    const colorStyle = {
      primary: "text-primary-500",
      info: "text-info-500",
      success: "text-success-500",
      warning: "text-warning-500",
      danger: "text-danger-500",
      light: "text-light-100",
      muted: "text-muted-400"
    };
    const updateCheckbox = () => {
      if (element.value && innerElement.value) {
        if (checked.value) {
          element.value.classList.add("is-checked");
          innerElement.value.classList.add("is-opaque");
          setTimeout(() => {
            element.value?.classList.remove("is-unchecked");
          }, 150);
        } else {
          element.value.classList.add("is-unchecked");
          element.value.classList.remove("is-checked");
          setTimeout(() => {
            innerElement.value?.classList.remove("is-opaque");
          }, 150);
        }
      }
    };
    watchEffect(updateCheckbox);
    const id = useNinjaId(() => props.id);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconCheckCircle = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "element",
        ref: element,
        class: ["nui-focus block focus-within:outline-current", props.classes?.wrapper]
      }, _attrs))} data-v-e7b59dd1><input${ssrRenderAttrs(mergeProps({
        id: unref(id),
        ref_key: "inputRef",
        ref: inputRef,
        type: "checkbox",
        class: ["peer cursor-pointer disabled:cursor-not-allowed", props.classes?.input],
        "true-value": props.trueValue,
        "false-value": props.falseValue,
        checked: unref(checked),
        value: props.value
      }, _ctx.$attrs))} data-v-e7b59dd1><label${ssrRenderAttr("for", unref(id))} class="${ssrRenderClass([[props.color && colorStyle[props.color], props.classes?.label], "peer-disabled:opacity-75"])}" data-v-e7b59dd1><div data-v-e7b59dd1></div>`);
      _push(ssrRenderComponent(_component_IconCheckCircle, null, null, _parent));
      _push(`</label></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/form/BaseCheckboxAnimated.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e7b59dd1"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=BaseCheckboxAnimated-ecb67b13.mjs.map
