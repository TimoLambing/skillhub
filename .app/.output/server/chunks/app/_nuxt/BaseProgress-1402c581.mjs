import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { m as useAppConfig } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseProgress",
  __ssrInlineRender: true,
  props: {
    color: { default: "primary" },
    contrast: { default: "default" },
    shape: { default: void 0 },
    size: { default: "sm" },
    value: { default: void 0 },
    max: { default: 100 }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const shape = computed(
      () => props.shape ?? appConfig.nui.defaultShapes?.progress
    );
    const colorStyle = {
      primary: "nui-progress-primary",
      info: "nui-progress-info",
      success: "nui-progress-success",
      warning: "nui-progress-warning",
      danger: "nui-progress-danger"
    };
    const contrastStyle = {
      default: "nui-progress-default",
      contrast: "nui-progress-contrast"
    };
    const shapeStyle = {
      straight: "",
      rounded: "nui-progress-rounded",
      curved: "nui-progress-curved",
      full: "nui-progress-full"
    };
    const sizeStyle = {
      xs: "nui-progress-xs",
      sm: "nui-progress-sm",
      md: "nui-progress-md",
      lg: "nui-progress-lg",
      xl: "nui-progress-xl"
    };
    const value = computed(() => {
      const { value: value2, max } = props;
      if (max === 0) {
        return 0;
      }
      return typeof value2 === "number" ? value2 / max * 100 : null;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        role: "progressbar",
        "aria-valuenow": unref(value),
        "aria-valuemax": props.max,
        class: ["nui-progress", [
          contrastStyle[props.contrast],
          colorStyle[props.color],
          sizeStyle[props.size],
          unref(shape) && shapeStyle[unref(shape)]
        ]]
      }, _attrs))}><div class="${ssrRenderClass([[
        unref(value) === null && "nui-progress-indeterminate animate-nui-progress-indeterminate"
      ], "nui-progress-bar"])}" style="${ssrRenderStyle(unref(value) !== null ? `width: ${unref(value)}%` : "width: 100%")}"></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/base/BaseProgress.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=BaseProgress-1402c581.mjs.map
