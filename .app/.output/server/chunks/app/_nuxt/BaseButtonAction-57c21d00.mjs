import { m as useAppConfig, t as useNinjaButton, r as __nuxt_component_0$2 } from '../server.mjs';
import { defineComponent, computed, createVNode, resolveDynamicComponent, unref, mergeProps, withCtx, renderSlot, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderVNode, ssrRenderSlot, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseButtonAction",
  __ssrInlineRender: true,
  props: {
    type: { default: void 0 },
    to: { default: void 0 },
    href: { default: void 0 },
    disabled: { type: Boolean, default: false },
    rel: { default: "" },
    target: { default: "" },
    shape: { default: void 0 },
    loading: { type: Boolean, default: false },
    color: { default: "default" }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const shape = computed(
      () => props.shape ?? appConfig.nui.defaultShapes?.buttonAction
    );
    const shapeStyle = {
      straight: "",
      rounded: "nui-button-rounded",
      smooth: "nui-button-smooth",
      curved: "nui-button-curved",
      full: "nui-button-full"
    };
    const colorStyle = {
      default: "nui-button-default",
      muted: "nui-button-muted",
      primary: "nui-button-primary",
      info: "nui-button-info",
      success: "nui-button-success",
      warning: "nui-button-warning",
      danger: "nui-button-danger",
      none: ""
    };
    const classes = computed(() => [
      "nui-button-action",
      props.loading && "nui-button-loading",
      colorStyle[props.color],
      shape.value && shapeStyle[shape.value]
    ]);
    const { attributes, is } = useNinjaButton(props);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BasePlaceload = __nuxt_component_0$2;
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(is)), mergeProps(unref(attributes), { class: unref(classes) }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!props.loading) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              _push2(ssrRenderComponent(_component_BasePlaceload, { class: "h-3 w-8 rounded" }, null, _parent2, _scopeId));
            }
          } else {
            return [
              !props.loading ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createBlock(_component_BasePlaceload, {
                key: 1,
                class: "h-3 w-8 rounded"
              }))
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/base/BaseButtonAction.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=BaseButtonAction-57c21d00.mjs.map
