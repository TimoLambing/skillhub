import { defineComponent, mergeProps, unref, withCtx, renderSlot, createVNode, Transition, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderClass } from 'vue/server-renderer';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TairoPopover",
  __ssrInlineRender: true,
  props: {
    shape: { default: "rounded" },
    size: { default: "md" },
    orientation: { default: "start" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Popover), { class: "relative" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(PopoverButton), {
              class: "group inline-flex cursor-pointer font-sans focus:outline-none",
              as: "div"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(``);
            _push2(ssrRenderComponent(unref(PopoverPanel), {
              class: ["absolute z-10 mt-3 w-screen", [
                props.size === "sm" && "max-w-[240px]",
                props.size === "md" && "max-w-xs",
                props.orientation === "start" && "-start-3",
                props.orientation === "end" && "-end-3"
              ]]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="${ssrRenderClass([[
                    props.orientation === "start" && "after:start-6",
                    props.orientation === "end" && "after:end-6"
                  ], "border-muted-200 after:border-muted-200 dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600 dark:after:bg-muted-700 shadow-muted-300/30 dark:shadow-muted-800/20 relative w-full rounded-lg border bg-white shadow-xl after:absolute after:-top-2 after:h-4 after:w-4 after:rotate-[-135deg] after:border-b after:border-r after:bg-white after:content-['']"])}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "content", {}, null, _push3, _parent3, _scopeId2);
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: ["border-muted-200 after:border-muted-200 dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600 dark:after:bg-muted-700 shadow-muted-300/30 dark:shadow-muted-800/20 relative w-full rounded-lg border bg-white shadow-xl after:absolute after:-top-2 after:h-4 after:w-4 after:rotate-[-135deg] after:border-b after:border-r after:bg-white after:content-['']", [
                        props.orientation === "start" && "after:start-6",
                        props.orientation === "end" && "after:end-6"
                      ]]
                    }, [
                      renderSlot(_ctx.$slots, "content")
                    ], 2)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(PopoverButton), {
                class: "group inline-flex cursor-pointer font-sans focus:outline-none",
                as: "div"
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }),
              createVNode(Transition, {
                "enter-active-class": "transition-all duration-200 ease-out",
                "enter-from-class": "translate-y-1 opacity-0",
                "enter-to-class": "translate-y-0 opacity-100",
                "leave-active-class": "transition duration-150 ease-in",
                "leave-from-class": "translate-y-0 opacity-100",
                "leave-to-class": "translate-y-1 opacity-0"
              }, {
                default: withCtx(() => [
                  createVNode(unref(PopoverPanel), {
                    class: ["absolute z-10 mt-3 w-screen", [
                      props.size === "sm" && "max-w-[240px]",
                      props.size === "md" && "max-w-xs",
                      props.orientation === "start" && "-start-3",
                      props.orientation === "end" && "-end-3"
                    ]]
                  }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        class: ["border-muted-200 after:border-muted-200 dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600 dark:after:bg-muted-700 shadow-muted-300/30 dark:shadow-muted-800/20 relative w-full rounded-lg border bg-white shadow-xl after:absolute after:-top-2 after:h-4 after:w-4 after:rotate-[-135deg] after:border-b after:border-r after:bg-white after:content-['']", [
                          props.orientation === "start" && "after:start-6",
                          props.orientation === "end" && "after:end-6"
                        ]]
                      }, [
                        renderSlot(_ctx.$slots, "content")
                      ], 2)
                    ]),
                    _: 3
                  }, 8, ["class"])
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo/components/TairoPopover.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=TairoPopover-3d838bc4.mjs.map
