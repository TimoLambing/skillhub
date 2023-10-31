import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TairoTable",
  __ssrInlineRender: true,
  props: {
    shape: { default: "rounded" },
    scrollable: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><div class="${ssrRenderClass([[
        props.scrollable && "overflow-x-auto nui-slimscroll",
        props.shape === "rounded" && "rounded-md",
        props.shape === "curved" && "rounded-xl"
      ], "border-muted-200 dark:border-muted-700 border"])}"><div class="inline-block min-w-full align-middle"><div class="${ssrRenderClass(props.scrollable && "overflow-hidden")}"><table class="divide-muted-200 dark:divide-muted-700 min-w-full table-fixed divide-y"><thead><tr>`);
      ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
      _push(`</tr></thead><tbody class="divide-muted-200 dark:divide-muted-700 dark:bg-muted-800 divide-y bg-white">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</tbody></table></div></div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo/components/TairoTable.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TairoTableHeading",
  __ssrInlineRender: true,
  props: {
    uppercase: { type: Boolean, default: false },
    spaced: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<th${ssrRenderAttrs(mergeProps({
        class: ["text-muted-700 dark:text-muted-400 text-left font-sans font-semibold tracking-wider", [
          props.uppercase ? "text-xs uppercase" : "text-sm",
          props.spaced ? "border-muted-200 dark:border-muted-700 last:border-e-none dark:bg-muted-800 border-r bg-white px-4 py-5" : "bg-muted-50 dark:bg-muted-800 py-3"
        ]]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</th>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo/components/TairoTableHeading.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TairoTableRow",
  __ssrInlineRender: true,
  props: {
    hoverable: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<tr${ssrRenderAttrs(mergeProps({
        class: [
          props.hoverable ? "hover:bg-muted-50 dark:hover:bg-muted-900 transition-colors duration-300" : ""
        ]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</tr>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo/components/TairoTableRow.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TairoTableCell",
  __ssrInlineRender: true,
  props: {
    light: { type: Boolean, default: false },
    spaced: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<td${ssrRenderAttrs(mergeProps({
        class: ["font-alt whitespace-nowrap text-sm", [
          props.light ? "text-muted-500 dark:text-white" : "text-muted-800 dark:text-white",
          props.spaced ? "p-4" : "py-4"
        ]]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</td>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo/components/TairoTableCell.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$3 as _, _sfc_main$2 as a, _sfc_main$1 as b, _sfc_main as c };
//# sourceMappingURL=TairoTableCell-13e62d75.mjs.map
