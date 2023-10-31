import { m as useAppConfig, f as __nuxt_component_2 } from '../server.mjs';
import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseMessage",
  __ssrInlineRender: true,
  props: {
    type: { default: "success" },
    shape: { default: void 0 },
    message: { default: "" },
    icon: { type: [Boolean, String], default: false },
    closable: { type: Boolean, default: false },
    closeIcon: { default: "lucide:x" }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const appConfig = useAppConfig();
    const shape = computed(
      () => props.shape ?? appConfig.nui.defaultShapes?.message
    );
    const shapeStyle = {
      straight: "",
      rounded: "nui-message-rounded",
      smooth: "nui-message-smooth",
      curved: "nui-message-curved",
      full: "nui-message-full"
    };
    const typeStyle = {
      default: "nui-message-default",
      muted: "nui-message-muted",
      primary: "nui-message-primary",
      info: "nui-message-info",
      success: "nui-message-success",
      warning: "nui-message-warning",
      danger: "nui-message-danger"
    };
    const iconTypeStyle = {
      info: "akar-icons:info-fill",
      warning: "ci:warning",
      danger: "ph:warning-octagon-fill",
      success: "carbon:checkmark-filled",
      primary: "",
      muted: "",
      default: ""
    };
    const icon = computed(
      () => typeof props.icon === "string" ? props.icon : iconTypeStyle[props.type]
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-message", [unref(shape) && shapeStyle[unref(shape)], typeStyle[props.type]]]
      }, _attrs))}>`);
      if (props.icon) {
        _push(`<div class="nui-message-icon-outer">`);
        if (unref(icon)) {
          _push(ssrRenderComponent(_component_Icon, {
            name: unref(icon),
            class: "nui-message-icon"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span class="nui-message-inner-text">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${ssrInterpolate(props.message)}`);
      }, _push, _parent);
      _push(`</span>`);
      if (props.closable) {
        _push(`<button type="button" tabindex="0" class="${ssrRenderClass([[unref(shape) && shapeStyle[unref(shape)]], "nui-message-close"])}">`);
        ssrRenderSlot(_ctx.$slots, "close-button", {}, () => {
          _push(ssrRenderComponent(_component_Icon, {
            name: _ctx.closeIcon,
            class: "nui-close-icon"
          }, null, _parent));
        }, _push, _parent);
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/base/BaseMessage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=BaseMessage-329c2647.mjs.map
