import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { m as useAppConfig } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseTag",
  __ssrInlineRender: true,
  props: {
    flavor: { default: "solid" },
    color: { default: "default" },
    shape: { default: void 0 },
    size: { default: "md" },
    shadow: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.tag);
    const flavorStyle = {
      solid: "nui-tag-solid",
      pastel: "nui-tag-pastel",
      outline: "nui-tag-outline"
    };
    const shapeStyle = {
      straight: "",
      rounded: "nui-tag-rounded",
      smooth: "nui-tag-smooth",
      curved: "nui-tag-curved",
      full: "nui-tag-full"
    };
    const colorStyle = {
      default: "nui-tag-default",
      muted: "nui-tag-muted",
      primary: "nui-tag-primary",
      info: "nui-tag-info",
      success: "nui-tag-success",
      warning: "nui-tag-warning",
      danger: "nui-tag-danger"
    };
    const shadowStyle = {
      flat: "nui-tag-shadow",
      hover: "nui-tag-shadow-hover"
    };
    const sizeStyle = {
      sm: "nui-tag-sm",
      md: "nui-tag-md"
    };
    const classes = computed(() => [
      "nui-tag",
      sizeStyle[props.size],
      flavorStyle[props.flavor],
      colorStyle[props.color],
      shape.value && shapeStyle[shape.value],
      props.shadow && props.flavor === "solid" && shadowStyle[props.shadow]
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({ class: unref(classes) }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/base/BaseTag.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=BaseTag-734af285.mjs.map
