import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { m as useAppConfig } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseIconBox",
  __ssrInlineRender: true,
  props: {
    shape: { default: void 0 },
    size: { default: "xs" },
    color: { default: void 0 },
    flavor: { default: "pastel" },
    bordered: { type: Boolean, default: false },
    mask: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const shape = computed(
      () => props.shape ?? appConfig.nui.defaultShapes?.iconBox
    );
    const shapeStyle = {
      straight: "",
      rounded: "nui-box-rounded",
      curved: "nui-box-curved",
      full: "nui-box-full"
    };
    const sizeStyle = {
      xs: "nui-box-xs",
      sm: "nui-box-sm",
      md: "nui-box-md",
      lg: "nui-box-lg",
      xl: "nui-box-xl",
      "2xl": "nui-box-2xl"
    };
    const flavorStyle = {
      solid: "nui-box-solid",
      pastel: "nui-box-pastel",
      outline: "nui-box-outline"
    };
    const colorStyle = {
      default: "nui-box-default",
      invert: "nui-box-invert",
      primary: "nui-box-primary",
      info: "nui-box-info",
      success: "nui-box-success",
      warning: "nui-box-warning",
      danger: "nui-box-danger"
    };
    const maskStyle = {
      hex: "nui-mask nui-mask-hex",
      hexed: "nui-mask nui-mask-hexed",
      deca: "nui-mask nui-mask-deca",
      blob: "nui-mask nui-mask-blob",
      diamond: "nui-mask nui-mask-diamond"
    };
    const classes = computed(() => [
      "nui-icon-box",
      props.bordered && "nui-box-bordered",
      shape.value && shapeStyle[shape.value],
      sizeStyle[props.size],
      flavorStyle[props.flavor],
      props.color && colorStyle[props.color],
      props.mask && maskStyle[props.mask]
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: unref(classes) }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/base/BaseIconBox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=BaseIconBox-642fe941.mjs.map
