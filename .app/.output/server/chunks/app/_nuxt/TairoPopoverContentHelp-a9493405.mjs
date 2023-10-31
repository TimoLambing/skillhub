import { _ as _sfc_main$1 } from './BaseIconBox-642fe941.mjs';
import { f as __nuxt_component_2, _ as _sfc_main$p, i as _sfc_main$D } from '../server.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TairoPopoverContentHelp",
  __ssrInlineRender: true,
  props: {
    title: {},
    subtitle: {},
    text: {},
    icon: {},
    iconColor: { default: "primary" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseIconBox = _sfc_main$1;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseText = _sfc_main$D;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex w-full flex-col gap-1 p-4" }, _attrs))}><div class="relative mb-1"><div class="flex w-full">`);
      _push(ssrRenderComponent(_component_BaseIconBox, {
        size: "xs",
        class: ["dark:text-white", [
          props.iconColor === "primary" && "bg-primary-100 text-primary-500 dark:bg-primary-600",
          props.iconColor === "info" && "bg-info-100 text-info-500 dark:bg-info-600",
          props.iconColor === "success" && "bg-success-100 text-success-500 dark:bg-success-600",
          props.iconColor === "warning" && "bg-warning-100 text-warning-500 dark:bg-warning-600",
          props.iconColor === "danger" && "bg-danger-100 text-danger-500 dark:bg-danger-600",
          props.iconColor === "yellow" && "bg-yellow-100 text-yellow-400 dark:bg-yellow-500"
        ]]
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
      _push(`<div class="ms-2">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h4",
        size: "xs",
        weight: "semibold",
        lead: "tight",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(props.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(props.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseText, {
        size: "xs",
        class: "text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(props.subtitle)}`);
          } else {
            return [
              createTextVNode(toDisplayString(props.subtitle), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_BaseText, {
        size: "xs",
        lead: "snug",
        class: "text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(props.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(props.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo/components/TairoPopoverContentHelp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=TairoPopoverContentHelp-a9493405.mjs.map
