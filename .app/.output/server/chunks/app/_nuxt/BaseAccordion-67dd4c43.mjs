import { m as useAppConfig, R as _sfc_main$t, _ as _sfc_main$p, b as _sfc_main$o, l as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_2 } from './IconChevronDown-af6375e6.mjs';
import { defineComponent, computed, ref, withCtx, unref, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createVNode, renderSlot, withModifiers, createCommentVNode, useSSRContext, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderSlot, ssrInterpolate, ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    "aria-hidden": "true",
    viewBox: "0 0 24 24"
  }, _attrs))}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14m-7-7h14"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/icon/IconPlus.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseAccordion",
  __ssrInlineRender: true,
  props: {
    items: {},
    openItems: { default: () => [] },
    exclusive: { type: Boolean, default: false },
    shape: { default: void 0 },
    action: { default: "dot" }
  },
  emits: ["open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const appConfig = useAppConfig();
    const shape = computed(
      () => props.shape ?? appConfig.nui.defaultShapes?.accordion
    );
    const shapeStyle = {
      straight: "",
      rounded: "nui-accordion-rounded",
      smooth: "nui-accordion-smooth",
      curved: "nui-accordion-curved"
    };
    const actionStyle = {
      dot: "nui-accordion-dot",
      chevron: "nui-accordion-chevron",
      plus: "nui-accordion-plus"
    };
    const internalOpenItems = ref(props.openItems);
    const toggle = (key) => {
      const wasOpen = internalOpenItems.value.includes(key);
      if (props.exclusive) {
        internalOpenItems.value.splice(0, internalOpenItems.value.length);
        if (!wasOpen) {
          emits("open", props.items[key]);
          internalOpenItems.value.push(key);
        }
        return;
      }
      if (wasOpen) {
        internalOpenItems.value.splice(internalOpenItems.value.indexOf(key), 1);
      } else {
        emits("open", props.items[key]);
        internalOpenItems.value.push(key);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseFocusLoop = _sfc_main$t;
      const _component_BaseHeading = _sfc_main$p;
      const _component_IconChevronDown = __nuxt_component_2;
      const _component_IconPlus = __nuxt_component_3;
      const _component_BaseParagraph = _sfc_main$o;
      _push(ssrRenderComponent(_component_BaseFocusLoop, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(_ctx.items, (item, key) => {
              _push2(`<div class="${ssrRenderClass([[actionStyle[props.action], unref(shape) && shapeStyle[unref(shape)]], "nui-accordion"])}"${_scopeId}><details${ssrIncludeBooleanAttr(unref(internalOpenItems)?.includes(key) ?? void 0) ? " open" : ""} class="nui-accordion-detail"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "accordion-item", {
                item,
                index: key,
                toggle
              }, () => {
                _push2(`<summary class="nui-accordion-summary" tabindex="0"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "accordion-item-summary", {
                  item,
                  index: key,
                  toggle
                }, () => {
                  _push2(`<div class="nui-accordion-header"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "semibold",
                    lead: "none",
                    class: "nui-accordion-header-inner"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(item.title)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(item.title), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  if (props.action === "dot") {
                    _push2(`<div class="nui-accordion-dot"${_scopeId}></div>`);
                  } else if (props.action === "chevron") {
                    _push2(`<div class="nui-icon-outer"${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_IconChevronDown, { class: "nui-chevron-icon" }, null, _parent2, _scopeId));
                    _push2(`</div>`);
                  } else if (props.action === "plus") {
                    _push2(`<div class="nui-icon-outer"${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_IconPlus, { class: "nui-plus-icon" }, null, _parent2, _scopeId));
                    _push2(`</div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                }, _push2, _parent2, _scopeId);
                _push2(`</summary><div class="nui-accordion-content"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "accordion-item-content", {
                  item,
                  index: key,
                  toggle
                }, () => {
                  _push2(ssrRenderComponent(_component_BaseParagraph, {
                    size: "md",
                    lead: "tight"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(item.content)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(item.content), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              }, _push2, _parent2, _scopeId);
              _push2(`</details></div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, key) => {
                return openBlock(), createBlock("div", {
                  key,
                  class: ["nui-accordion", [actionStyle[props.action], unref(shape) && shapeStyle[unref(shape)]]]
                }, [
                  createVNode("details", {
                    open: unref(internalOpenItems)?.includes(key) ?? void 0,
                    class: "nui-accordion-detail"
                  }, [
                    renderSlot(_ctx.$slots, "accordion-item", {
                      item,
                      index: key,
                      toggle
                    }, () => [
                      createVNode("summary", {
                        class: "nui-accordion-summary",
                        tabindex: "0",
                        onClick: withModifiers(() => toggle(key), ["prevent"])
                      }, [
                        renderSlot(_ctx.$slots, "accordion-item-summary", {
                          item,
                          index: key,
                          toggle
                        }, () => [
                          createVNode("div", { class: "nui-accordion-header" }, [
                            createVNode(_component_BaseHeading, {
                              as: "h4",
                              size: "sm",
                              weight: "semibold",
                              lead: "none",
                              class: "nui-accordion-header-inner"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.title), 1)
                              ]),
                              _: 2
                            }, 1024),
                            props.action === "dot" ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "nui-accordion-dot"
                            })) : props.action === "chevron" ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: "nui-icon-outer"
                            }, [
                              createVNode(_component_IconChevronDown, { class: "nui-chevron-icon" })
                            ])) : props.action === "plus" ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: "nui-icon-outer"
                            }, [
                              createVNode(_component_IconPlus, { class: "nui-plus-icon" })
                            ])) : createCommentVNode("", true)
                          ])
                        ])
                      ], 8, ["onClick"]),
                      createVNode("div", { class: "nui-accordion-content" }, [
                        renderSlot(_ctx.$slots, "accordion-item-content", {
                          item,
                          index: key,
                          toggle
                        }, () => [
                          createVNode(_component_BaseParagraph, {
                            size: "md",
                            lead: "tight"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.content), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ])
                      ])
                    ])
                  ], 8, ["open"])
                ], 2);
              }), 128))
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/base/BaseAccordion.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=BaseAccordion-67dd4c43.mjs.map
