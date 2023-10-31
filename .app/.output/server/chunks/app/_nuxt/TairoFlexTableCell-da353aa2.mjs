import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { l as _export_sfc } from '../server.mjs';

const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="hidden justify-between md:flex md:items-center">`);
  ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
  _push(`</div><div class="flex flex-col gap-y-4">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo/components/TairoFlexTable.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TairoFlexTableHeading",
  __ssrInlineRender: true,
  props: {
    type: { default: "stable" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["text-muted-400 p-4 font-sans text-xs font-medium uppercase", [
          props.type === "grow" && "md:grow",
          props.type === "shrink" && "md:shrink",
          props.type === "stable" && "sm:w-[90px] md:line-clamp-1 md:w-[110px] md:shrink-0"
        ]]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo/components/TairoFlexTableHeading.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TairoFlexTableRow",
  __ssrInlineRender: true,
  props: {
    shape: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["border-muted-200 dark:border-muted-700 dark:bg-muted-800 flex flex-col border bg-white md:flex-row md:items-center md:justify-between", [
          props.shape === "rounded" && "rounded-md",
          props.shape === "curved" && "rounded-xl"
        ]]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo/components/TairoFlexTableRow.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TairoFlexTableCell",
  __ssrInlineRender: true,
  props: {
    type: { default: "stable" },
    light: { type: Boolean },
    clamp: { type: [Boolean, Number], default: 1 }
  },
  setup(__props) {
    const props = __props;
    const clampMap = {
      1: "line-clamp-1",
      2: "line-clamp-2",
      3: "line-clamp-3",
      4: "line-clamp-4",
      5: "line-clamp-5",
      6: "line-clamp-6"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["font-alt before:text-muted-400 flex items-center justify-between p-5 text-sm before:font-sans before:text-xs before:font-medium before:uppercase before:content-[attr(data-content)] md:justify-start md:p-4 md:before:hidden", [
          props.type === "grow" && "md:grow",
          props.type === "shrink" && "md:shrink",
          props.type === "stable" && "sm:w-[90px] md:w-[110px] md:shrink-0",
          props.type === "stable" && props.clamp && clampMap[props.clamp],
          props.light ? "text-muted-500 dark:text-white" : "text-muted-800 dark:text-white"
        ]]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo/components/TairoFlexTableCell.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { __nuxt_component_0 as _, _sfc_main$2 as a, _sfc_main$1 as b, _sfc_main as c };
//# sourceMappingURL=TairoFlexTableCell-da353aa2.mjs.map
