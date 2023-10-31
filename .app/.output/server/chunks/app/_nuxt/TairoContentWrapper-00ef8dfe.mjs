import { defineComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TairoContentWrapper",
  __ssrInlineRender: true,
  props: {
    reverse: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if ("left" in _ctx.$slots || "right" in _ctx.$slots) {
        _push(`<div class="${ssrRenderClass([props.reverse && "sm:flex-row-reverse", "mb-6 flex w-full flex-col items-center justify-between gap-4 sm:flex-row"])}"><div class="flex w-full items-center gap-4 sm:w-auto">`);
        ssrRenderSlot(_ctx.$slots, "left", {}, null, _push, _parent);
        _push(`</div><div class="flex w-full items-center justify-end gap-4 sm:w-auto">`);
        ssrRenderSlot(_ctx.$slots, "right", {}, null, _push, _parent);
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo/components/TairoContentWrapper.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=TairoContentWrapper-00ef8dfe.mjs.map
