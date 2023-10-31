import { defineComponent, ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TairoContentWrapperTabbed",
  __ssrInlineRender: true,
  props: {
    title: { default: void 0 },
    shape: { default: "rounded" },
    labels: {},
    reverse: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const activeTab = ref("tab-1");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="${ssrRenderClass([props.reverse && "sm:flex-row-reverse", "mb-6 flex w-full flex-col items-center justify-between gap-4 sm:flex-row"])}">`);
      ssrRenderSlot(_ctx.$slots, "left", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "right", {}, () => {
        _push(`<div class="w-full sm:w-auto"><div class="${ssrRenderClass([[
          props.shape === "rounded" ? "rounded-md" : "",
          props.shape === "curved" ? "rounded-xl" : "",
          props.shape === "full" ? "rounded-full" : ""
        ], "dark:bg-muted-800 relative flex h-9 w-full bg-white sm:w-40"])}"><button type="button" class="${ssrRenderClass([[
          unref(activeTab) === "tab-1" ? "text-white" : "text-muted-400",
          props.shape === "rounded" ? "rounded-md" : "",
          props.shape === "curved" ? "rounded-xl" : "",
          props.shape === "full" ? "rounded-full" : ""
        ], "nui-focus relative z-10 flex flex-1 cursor-pointer items-center justify-center font-sans text-sm transition-colors duration-300"])}">${ssrInterpolate(props.labels?.at(0))}</button><button type="button" class="${ssrRenderClass([[
          unref(activeTab) === "tab-2" ? "text-white" : "text-muted-400",
          props.shape === "rounded" ? "rounded-md" : "",
          props.shape === "curved" ? "rounded-xl" : "",
          props.shape === "full" ? "rounded-full" : ""
        ], "nui-focus relative z-10 flex flex-1 cursor-pointer items-center justify-center font-sans text-sm transition-colors duration-300"])}">${ssrInterpolate(props.labels?.at(1))}</button><div class="${ssrRenderClass([[
          unref(activeTab) === "tab-1" ? "ms-0" : "ms-[50%]",
          props.shape === "rounded" ? "rounded-md" : "",
          props.shape === "curved" ? "rounded-xl" : "",
          props.shape === "full" ? "rounded-full" : ""
        ], "bg-primary-500 absolute start-0 top-0 h-full w-1/2 transition-all duration-300 ease-in-out"])}"></div></div></div>`);
      }, _push, _parent);
      _push(`</div><div>`);
      if (unref(activeTab) === "tab-1") {
        _push(`<div>`);
        ssrRenderSlot(_ctx.$slots, "tab-1", {}, null, _push, _parent);
        _push(`</div>`);
      } else if (unref(activeTab) === "tab-2") {
        _push(`<div>`);
        ssrRenderSlot(_ctx.$slots, "tab-2", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo/components/TairoContentWrapperTabbed.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=TairoContentWrapperTabbed-ad9206d8.mjs.map
