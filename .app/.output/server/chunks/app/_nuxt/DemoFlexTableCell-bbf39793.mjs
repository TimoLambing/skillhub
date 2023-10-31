import { j as _sfc_main$C, s as _sfc_main$E, f as __nuxt_component_2, _ as _sfc_main$p, b as _sfc_main$o } from '../server.mjs';
import { defineComponent, mergeProps, withCtx, renderSlot, createVNode, useSSRContext, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _sfc_main$3 } from './BaseIconBox-642fe941.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DemoFlexTableRow",
  __ssrInlineRender: true,
  props: {
    shape: {},
    spaced: { type: Boolean },
    condensed: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$C;
      _push(ssrRenderComponent(_component_BaseCard, mergeProps({
        shape: props.shape,
        class: ["relative", [
          props.spaced ? "px-2 py-6 sm:py-4" : "py-6 sm:py-2",
          props.condensed ? "top-px first:rounded-t-lg last:rounded-b-lg [&:not(:first-child)]:border-t-0" : ""
        ]]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`<div class="flex w-full flex-col sm:flex-row sm:items-center"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "start", {}, null, _push2, _parent2, _scopeId);
            _push2(`<div class="flex flex-col gap-2 sm:flex-row sm:items-center"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "end", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div></div>`);
          } else {
            return [
              renderSlot(_ctx.$slots, "default"),
              createVNode("div", { class: "flex w-full flex-col sm:flex-row sm:items-center" }, [
                renderSlot(_ctx.$slots, "start"),
                createVNode("div", { class: "flex flex-col gap-2 sm:flex-row sm:items-center" }, [
                  renderSlot(_ctx.$slots, "end")
                ])
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoFlexTableRow.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DemoFlexTableStart",
  __ssrInlineRender: true,
  props: {
    title: {},
    subtitle: { default: void 0 },
    icon: { default: void 0 },
    picture: { default: void 0 },
    avatar: { default: void 0 },
    badge: { default: void 0 },
    initials: { default: void 0 },
    label: { default: void 0 },
    hideLabel: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BaseIconBox = _sfc_main$3;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["relative mb-4 flex grow items-center gap-2 px-6 sm:mb-0 sm:px-2", props.picture && !props.avatar && !props.icon ? "" : "h-10"]
      }, _attrs))}>`);
      if (props.label) {
        _push(`<span class="${ssrRenderClass([props.hideLabel ? "sm:hidden" : "", "text-muted-400 absolute hidden font-sans text-xs font-medium uppercase sm:-top-10 sm:start-2 sm:block"])}">${ssrInterpolate(props.label)}</span>`);
      } else {
        _push(`<!---->`);
      }
      if (props.avatar && !props.icon && !props.picture || props.initials && !props.icon && !props.picture) {
        _push(ssrRenderComponent(_component_BaseAvatar, {
          src: props.avatar,
          "badge-src": props.badge,
          text: props.initials,
          class: "bg-primary-500/20 text-primary-500",
          size: "md"
        }, null, _parent));
      } else if (props.icon && !props.avatar && !props.picture) {
        _push(ssrRenderComponent(_component_BaseIconBox, {
          icon: props.icon,
          size: "sm",
          class: "bg-primary-500/20 text-primary-500"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: props.icon,
                class: "h-5 w-5"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: props.icon,
                  class: "h-5 w-5"
                }, null, 8, ["name"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else if (props.picture && !props.avatar && !props.icon) {
        _push(`<div class="relative shrink-0"><img${ssrRenderAttr("src", props.picture)}${ssrRenderAttr("alt", props.title)} class="h-12 w-16 rounded-lg object-cover"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h4",
        size: "sm",
        weight: "medium",
        lead: "tight",
        class: "text-muted-700 dark:text-muted-100"
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
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "xs",
        lead: "tight",
        class: "text-muted-500 dark:text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(props.subtitle)}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(props.subtitle), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoFlexTableStart.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoFlexTableCell",
  __ssrInlineRender: true,
  props: {
    label: {},
    hideLabel: { type: Boolean },
    tabletHidden: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["relative flex h-8 items-center justify-end px-6 sm:h-10 sm:justify-center sm:px-2", props.tabletHidden && "ptablet:hidden"]
      }, _attrs))}>`);
      if (props.label) {
        _push(`<span class="${ssrRenderClass([props.hideLabel ? "sm:hidden" : "", "text-muted-400 absolute start-8 top-1/2 mx-auto -translate-y-1/2 text-center font-sans text-xs font-medium uppercase sm:inset-x-0 sm:-top-10 sm:translate-y-0"])}">${ssrInterpolate(props.label)}</span>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoFlexTableCell.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$2 as _, _sfc_main$1 as a, _sfc_main as b };
//# sourceMappingURL=DemoFlexTableCell-bbf39793.mjs.map
