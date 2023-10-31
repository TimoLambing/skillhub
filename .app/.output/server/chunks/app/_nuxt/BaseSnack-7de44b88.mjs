import { f as __nuxt_component_2, z as _sfc_main$F } from '../server.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseSnack",
  __ssrInlineRender: true,
  props: {
    label: { default: "" },
    icon: { default: void 0 },
    image: { default: void 0 },
    size: { default: "md" },
    color: { default: "default" }
  },
  emits: ["delete"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const sizeStyle = {
      sm: "nui-snack-sm",
      md: "nui-snack-md"
    };
    const colorStyle = {
      default: "nui-snack-default",
      muted: "nui-snack-muted"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      const _component_BaseButtonClose = _sfc_main$F;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-snack", [
          sizeStyle[props.size],
          colorStyle[props.color],
          props.icon || props.image ? "nui-has-media" : ""
        ]]
      }, _attrs))}>`);
      if (props.icon && !props.image) {
        _push(`<div class="nui-snack-icon">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: props.icon,
          class: "nui-snack-icon-inner"
        }, null, _parent));
        _push(`</div>`);
      } else if (props.image && !props.icon) {
        _push(`<div class="nui-snack-image"><img${ssrRenderAttr("src", props.image)} class="nui-snack-image-inner" alt=""></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span class="nui-snack-text">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${ssrInterpolate(props.label)}`);
      }, _push, _parent);
      _push(`</span>`);
      _push(ssrRenderComponent(_component_BaseButtonClose, {
        class: "nui-snack-button",
        shape: "full",
        onClick: ($event) => emit("delete")
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/base/BaseSnack.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=BaseSnack-7de44b88.mjs.map
