import { m as useAppConfig, n as useVModel, o as useNinjaId, r as __nuxt_component_0$2, f as __nuxt_component_2 } from '../server.mjs';
import { _ as __nuxt_component_2$1 } from './IconChevronDown-af6375e6.mjs';
import { defineComponent, computed, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderSlot, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BaseSelect",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: void 0 },
    id: { default: void 0 },
    shape: { default: void 0 },
    label: { default: "" },
    placeholder: { default: "" },
    labelFloat: { type: Boolean },
    icon: { default: void 0 },
    loading: { type: Boolean },
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    error: { type: [String, Boolean], default: false },
    size: { default: "md" },
    contrast: { default: "default" },
    classes: { default: () => ({}) }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const appConfig = useAppConfig();
    const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.input);
    const shapeStyle = {
      straight: "",
      rounded: "nui-select-rounded",
      smooth: "nui-select-smooth",
      curved: "nui-select-curved",
      full: "nui-select-full"
    };
    const sizeStyle = {
      sm: "nui-select-sm",
      md: "nui-select-md",
      lg: "nui-select-lg"
    };
    const contrastStyle = {
      default: "nui-select-default",
      "default-contrast": "nui-select-default-contrast",
      muted: "nui-select-muted",
      "muted-contrast": "nui-select-muted-contrast"
    };
    const selectRef = ref();
    useVModel(props, "modelValue", emits, {
      passive: true
    });
    __expose({
      /**
       * The underlying HTMLInputElement element.
       */
      el: selectRef
    });
    const id = useNinjaId(() => props.id);
    const placeholder = computed(() => {
      if (props.loading) {
        return;
      }
      if (props.labelFloat) {
        return props.label;
      }
      return props.placeholder;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BasePlaceload = __nuxt_component_0$2;
      const _component_Icon = __nuxt_component_2;
      const _component_IconChevronDown = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-select-wrapper", [
          contrastStyle[props.contrast],
          sizeStyle[props.size],
          unref(shape) && shapeStyle[unref(shape)],
          props.error && !props.loading && "nui-select-error",
          props.loading && "nui-select-loading",
          props.labelFloat && "nui-select-label-float",
          props.icon && "nui-has-icon",
          props.classes?.wrapper
        ]]
      }, _attrs))}>`);
      if ("label" in _ctx.$slots && !props.labelFloat || props.label && !props.labelFloat) {
        _push(`<label${ssrRenderAttr("for", unref(id))} class="${ssrRenderClass([props.classes.label, "nui-select-label"])}">`);
        ssrRenderSlot(_ctx.$slots, "label", {}, () => {
          _push(`${ssrInterpolate(props.label)}`);
        }, _push, _parent);
        _push(`</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="nui-select-outer"><select${ssrRenderAttrs(mergeProps({
        id: unref(id),
        ref_key: "selectRef",
        ref: selectRef
      }, _ctx.$attrs, {
        disabled: props.disabled,
        readonly: props.readonly,
        class: ["nui-select", props.classes.select]
      }))}>`);
      if (unref(placeholder)) {
        _push(`<option value="" disabled hidden>${ssrInterpolate(unref(placeholder))}</option>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</select>`);
      if ("label" in _ctx.$slots && props.labelFloat || props.label && props.labelFloat) {
        _push(`<label${ssrRenderAttr("for", unref(id))} class="${ssrRenderClass([props.classes.label, "nui-label-float"])}">`);
        ssrRenderSlot(_ctx.$slots, "label", {}, () => {
          _push(`${ssrInterpolate(props.label)}`);
        }, _push, _parent);
        _push(`</label>`);
      } else {
        _push(`<!---->`);
      }
      if (props.loading) {
        _push(`<div class="nui-select-placeload">`);
        _push(ssrRenderComponent(_component_BasePlaceload, { class: "nui-placeload" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.icon) {
        _push(`<div class="${ssrRenderClass([props.classes.icon, "nui-select-icon"])}">`);
        ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
          _push(ssrRenderComponent(_component_Icon, {
            class: "nui-select-icon-inner",
            name: props.icon
          }, null, _parent));
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([props.classes?.chevron, "nui-select-chevron"])}">`);
      _push(ssrRenderComponent(_component_IconChevronDown, { class: "nui-select-chevron-inner" }, null, _parent));
      _push(`</div>`);
      if (props.error && typeof props.error === "string") {
        _push(`<span class="${ssrRenderClass([props.classes?.error, "nui-select-error-text"])}">${ssrInterpolate(props.error)}</span>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/form/BaseSelect.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=BaseSelect-50588309.mjs.map
