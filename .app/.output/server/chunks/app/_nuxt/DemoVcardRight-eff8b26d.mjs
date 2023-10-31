import { _ as _sfc_main$p, b as _sfc_main$o, s as _sfc_main$E, f as __nuxt_component_2 } from '../server.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoVcardRight",
  __ssrInlineRender: true,
  props: {
    centered: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseAvatar = _sfc_main$E;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-full flex-col" }, _attrs))}><div class="${ssrRenderClass([props.centered && "flex-col-reverse", "mb-4 flex items-center"])}"><div class="flex-1">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "md",
        weight: "medium",
        lead: "relaxed",
        class: ["text-muted-800 dark:text-white", props.centered && "text-center"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Maya R.</span>`);
          } else {
            return [
              createVNode("span", null, "Maya R.")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (!props.centered) {
        _push(ssrRenderComponent(_component_BaseParagraph, { lead: "none" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-primary-500 text-xs"${_scopeId}>Tairo HQ</span>`);
            } else {
              return [
                createVNode("span", { class: "text-primary-500 text-xs" }, "Tairo HQ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_BaseParagraph, {
        lead: "none",
        class: props.centered && "text-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-400 text-xs"${_scopeId}>UI/UX designer</span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-400 text-xs" }, "UI/UX designer")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex-1 shrink-0"><div class="${ssrRenderClass([props.centered ? "w-16" : "w-12", "mx-auto"])}">`);
      _push(ssrRenderComponent(_component_BaseAvatar, {
        src: "/img/avatars/2.svg",
        size: props.centered ? "lg" : "md"
      }, null, _parent));
      _push(`</div></div></div><div class="mb-4 space-y-2 font-sans"><div class="${ssrRenderClass([props.centered && "justify-center", "flex items-end gap-2"])}">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:map-pin-duotone",
        class: "text-primary-500 h-4 w-4"
      }, null, _parent));
      _push(`<span class="text-muted-400 text-xs">Los Angeles, CA</span></div><div class="${ssrRenderClass([props.centered && "justify-center", "flex items-end gap-2"])}">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:phone-duotone",
        class: "text-primary-500 h-4 w-4"
      }, null, _parent));
      _push(`<span class="text-muted-400 text-xs">+1 444-751-5156</span></div></div><div class="border-muted-200 dark:border-muted-700 mt-auto flex items-end justify-between border-t pt-3"><a href="mailto:maya@tairo.io" class="text-primary-500 font-sans text-sm underline-offset-4 hover:underline"> maya@tairo.io </a>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:envelope-duotone",
        class: "text-muted-400 h-4 w-4"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoVcardRight.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=DemoVcardRight-eff8b26d.mjs.map
