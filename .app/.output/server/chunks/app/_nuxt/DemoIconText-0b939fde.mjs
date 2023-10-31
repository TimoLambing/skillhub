import { _ as _sfc_main$2 } from './BaseProgress-1402c581.mjs';
import { defineComponent, mergeProps, useSSRContext, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _sfc_main$p, f as __nuxt_component_2, b as _sfc_main$o } from '../server.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DemoPicture",
  __ssrInlineRender: true,
  props: {
    shape: { default: "rounded" },
    src: { default: void 0 },
    srcDark: { default: void 0 },
    alt: { default: void 0 },
    width: {},
    height: {},
    loading: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseProgress = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><img${ssrRenderAttr("src", _ctx.$props.src)}${ssrRenderAttr("alt", _ctx.$props.alt)}${ssrRenderAttr("width", props.width)}${ssrRenderAttr("height", props.height)} class="${ssrRenderClass([[
        props.srcDark && "block dark:hidden",
        props.shape === "rounded" ? "rounded-md" : "",
        props.shape === "curved" ? "rounded-xl" : ""
      ], "w-full object-cover"])}">`);
      if (props.srcDark) {
        _push(`<img${ssrRenderAttr("src", _ctx.$props.srcDark)}${ssrRenderAttr("alt", _ctx.$props.alt)}${ssrRenderAttr("width", props.width)}${ssrRenderAttr("height", props.height)} class="${ssrRenderClass([[
          props.shape === "rounded" ? "rounded-md" : "",
          props.shape === "curved" ? "rounded-xl" : ""
        ], "hidden w-full object-cover dark:block"])}">`);
      } else {
        _push(`<!---->`);
      }
      if (props.loading) {
        _push(`<div class="dark absolute inset-x-0 bottom-8 flex items-center justify-center px-6">`);
        _push(ssrRenderComponent(_component_BaseProgress, {
          size: "xs",
          inderterminate: ""
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoPicture.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoIconText",
  __ssrInlineRender: true,
  props: {
    title: { default: void 0 },
    text: {},
    icon: {},
    indicator: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$p;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseParagraph = _sfc_main$o;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-4 flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "sm",
        weight: "semibold",
        lead: "tight",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(props.title)}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(props.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="relative">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: props.icon,
        class: "text-muted-400 h-4 w-4"
      }, null, _parent));
      if (_ctx.indicator) {
        _push(`<div class="absolute -end-0.5 top-0.5"><span class="relative flex h-2 w-2"><span class="bg-primary-400 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span><span class="bg-primary-500 relative inline-flex h-2 w-2 rounded-full"></span></span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div>`);
      _push(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-400"${_scopeId}>${ssrInterpolate(props.text)}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-400" }, toDisplayString(props.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoIconText.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, _sfc_main$1 as a };
//# sourceMappingURL=DemoIconText-0b939fde.mjs.map
