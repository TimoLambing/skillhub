import { s as _sfc_main$E } from '../server.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseAvatarGroup",
  __ssrInlineRender: true,
  props: {
    limit: { default: 4 },
    size: { default: "sm" },
    avatars: {}
  },
  setup(__props) {
    const props = __props;
    const sizeStyle = {
      xxs: "nui-avatar-group-xxs",
      xs: "nui-avatar-group-xs",
      sm: "nui-avatar-group-sm",
      md: "nui-avatar-group-md",
      lg: "nui-avatar-group-lg",
      xl: "nui-avatar-group-lg",
      "2xl": "nui-avatar-group-lg",
      "3xl": "nui-avatar-group-lg",
      "4xl": "nui-avatar-group-lg"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAvatar = _sfc_main$E;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-avatar-group", [sizeStyle[props.size]]]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`<!--[-->`);
        ssrRenderList(_ctx.avatars.length <= _ctx.limit ? _ctx.avatars : _ctx.avatars.slice(0, props.limit - 1), (avatar) => {
          _push(`<div class="nui-avatar-outer">`);
          _push(ssrRenderComponent(_component_BaseAvatar, mergeProps(typeof avatar === "string" ? { src: avatar } : avatar, {
            size: props.size,
            shape: "full",
            tabindex: "0",
            class: "bg-primary-500/20 text-primary-500 !scale-90"
          }), null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]-->`);
        if (_ctx.avatars.length > props.limit) {
          _push(`<div class="nui-avatar-count"><div class="nui-avatar-count-inner"><span class="nui-avatar-count-text"> +${ssrInterpolate(_ctx.avatars.length - props.limit + 1)}</span></div></div>`);
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/base/BaseAvatarGroup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=BaseAvatarGroup-6e7b4ecf.mjs.map
