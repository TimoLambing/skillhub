import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { l as _export_sfc, a4 as useSidebar, f as __nuxt_component_2 } from '../server.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-screen flex-col" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
  _push(`<div class="nui-slimscroll relative h-full w-full overflow-y-auto"><div class="px-6 pb-8">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div><div class="dark:from-muted-800 pointer-events-none fixed bottom-0 z-10 h-10 w-[212px] bg-gradient-to-t from-white to-transparent"></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TairoSubsidebar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TairoSubsidebarHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const { current, isOpen } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-16 w-full items-center px-6" }, _attrs))}>`);
      if (unref(current)) {
        _push(`<div class="font-heading text-muted-700 text-lg font-light capitalize dark:text-white">${ssrInterpolate(unref(current).title)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="button" class="text-muted-400 hover:bg-muted-100 hover:text-muted-600 ms-auto flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 xl:hidden">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "feather:chevron-left",
        class: "h-6 w-6"
      }, null, _parent));
      _push(`</button></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TairoSubsidebarHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { __nuxt_component_0 as _, _sfc_main as a };
//# sourceMappingURL=TairoSubsidebarHeader-5f95c48d.mjs.map
