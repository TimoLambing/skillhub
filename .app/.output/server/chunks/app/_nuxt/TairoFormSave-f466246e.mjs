import { W as useWindowScroll, j as _sfc_main$C, d as _sfc_main$x } from '../server.mjs';
import { defineComponent, unref, withCtx, createVNode, renderSlot, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TairoFormSave",
  __ssrInlineRender: true,
  props: {
    shape: { default: "rounded" },
    disabled: { type: Boolean },
    loading: { type: Boolean }
  },
  emits: ["reset"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { x, y } = useWindowScroll();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseButton = _sfc_main$x;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(y) > 120) {
        _push(`<div class="fixed inset-x-0 bottom-6 z-40 mx-auto w-full max-w-[304px]">`);
        _push(ssrRenderComponent(_component_BaseCard, {
          class: "shadow-muted-300/30 dark:shadow-muted-800/30 flex items-center justify-between gap-2 rounded-2xl p-4 shadow-xl",
          shape: props.shape === "full" ? "curved" : props.shape
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                _push2(ssrRenderComponent(_component_BaseButton, {
                  type: "reset",
                  shape: props.shape,
                  class: "w-full",
                  disabled: props.disabled,
                  onClick: () => emits("reset")
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span${_scopeId2}>Reset</span>`);
                    } else {
                      return [
                        createVNode("span", null, "Reset")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_BaseButton, {
                  type: "submit",
                  disabled: props.disabled,
                  loading: props.loading,
                  shape: props.shape,
                  color: "primary",
                  class: "w-full"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span${_scopeId2}>Save</span>`);
                    } else {
                      return [
                        createVNode("span", null, "Save")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              }, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default", {}, () => [
                  createVNode(_component_BaseButton, {
                    type: "reset",
                    shape: props.shape,
                    class: "w-full",
                    disabled: props.disabled,
                    onClick: withModifiers(() => emits("reset"), ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Reset")
                    ]),
                    _: 1
                  }, 8, ["shape", "disabled", "onClick"]),
                  createVNode(_component_BaseButton, {
                    type: "submit",
                    disabled: props.disabled,
                    loading: props.loading,
                    shape: props.shape,
                    color: "primary",
                    class: "w-full"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Save")
                    ]),
                    _: 1
                  }, 8, ["disabled", "loading", "shape"])
                ])
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo/components/TairoFormSave.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=TairoFormSave-f466246e.mjs.map
