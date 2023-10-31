import { m as useAppConfig, t as useNinjaButton, d as _sfc_main$x, f as __nuxt_component_2 } from '../server.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, renderSlot, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Transition, useSSRContext, resolveDynamicComponent, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderVNode, ssrRenderClass } from 'vue/server-renderer';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BaseDropdown",
  __ssrInlineRender: true,
  props: {
    flavor: { default: "button" },
    buttonColor: { default: "default" },
    color: { default: "white" },
    shape: { default: void 0 },
    orientation: { default: "start" },
    size: { default: "md" },
    label: { default: "" },
    headerLabel: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const shape = computed(
      () => props.shape ?? appConfig.nui.defaultShapes?.dropdown
    );
    const orientationStyle = {
      start: "nui-dropdown-start",
      end: "nui-dropdown-end"
    };
    const sizeStyle = {
      md: "nui-menu-md",
      lg: "nui-menu-lg"
    };
    const shapeStyle = {
      straight: "",
      rounded: "nui-menu-rounded",
      smooth: "nui-menu-smooth",
      curved: "nui-menu-curved",
      full: "nui-menu-curved"
    };
    const colorStyle = {
      white: "nui-menu-white",
      "white-contrast": "nui-menu-white-contrast",
      muted: "nui-menu-muted",
      "muted-contrast": "nui-menu-muted-contrast",
      primary: "nui-menu-primary",
      info: "nui-menu-info",
      success: "nui-menu-success",
      warning: "nui-menu-warning",
      danger: "nui-menu-danger",
      none: ""
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButton = _sfc_main$x;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-dropdown", [orientationStyle[props.orientation]]]
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Menu), {
        as: "div",
        class: "nui-menu"
      }, {
        default: withCtx(({ open, close }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MenuButton), { as: "template" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "button", { open, close }, () => {
                    if (props.flavor === "button") {
                      _push3(ssrRenderComponent(_component_BaseButton, {
                        color: props.buttonColor,
                        shape: unref(shape),
                        class: "!pe-3 !ps-4"
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            ssrRenderSlot(_ctx.$slots, "label", { open, close }, () => {
                              _push4(`<span${_scopeId3}>${ssrInterpolate(props.label)}</span>`);
                            }, _push4, _parent4, _scopeId3);
                            _push4(ssrRenderComponent(_component_Icon, {
                              name: "lucide:chevron-down",
                              class: ["nui-chevron", open && "rotate-180"]
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              renderSlot(_ctx.$slots, "label", { open, close }, () => [
                                createVNode("span", null, toDisplayString(props.label), 1)
                              ]),
                              createVNode(_component_Icon, {
                                name: "lucide:chevron-down",
                                class: ["nui-chevron", open && "rotate-180"]
                              }, null, 8, ["class"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else if (props.flavor === "context") {
                      _push3(`<button type="button" class="nui-context-button"${_scopeId2}><span class="nui-context-button-inner"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "lucide:more-horizontal",
                        class: ["nui-context-icon", open && "rotate-90"]
                      }, null, _parent3, _scopeId2));
                      _push3(`</span></button>`);
                    } else if (props.flavor === "text") {
                      _push3(`<button type="button" class="nui-text-button"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "label", { open, close }, () => {
                        _push3(`<span class="nui-text-button-inner"${_scopeId2}>${ssrInterpolate(props.label)}</span>`);
                      }, _push3, _parent3, _scopeId2);
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "lucide:chevron-down",
                        class: ["nui-chevron", open && "rotate-180"]
                      }, null, _parent3, _scopeId2));
                      _push3(`</button>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  }, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "button", { open, close }, () => [
                      props.flavor === "button" ? (openBlock(), createBlock(_component_BaseButton, {
                        key: 0,
                        color: props.buttonColor,
                        shape: unref(shape),
                        class: "!pe-3 !ps-4"
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "label", { open, close }, () => [
                            createVNode("span", null, toDisplayString(props.label), 1)
                          ]),
                          createVNode(_component_Icon, {
                            name: "lucide:chevron-down",
                            class: ["nui-chevron", open && "rotate-180"]
                          }, null, 8, ["class"])
                        ]),
                        _: 2
                      }, 1032, ["color", "shape"])) : props.flavor === "context" ? (openBlock(), createBlock("button", {
                        key: 1,
                        type: "button",
                        class: "nui-context-button"
                      }, [
                        createVNode("span", { class: "nui-context-button-inner" }, [
                          createVNode(_component_Icon, {
                            name: "lucide:more-horizontal",
                            class: ["nui-context-icon", open && "rotate-90"]
                          }, null, 8, ["class"])
                        ])
                      ])) : props.flavor === "text" ? (openBlock(), createBlock("button", {
                        key: 2,
                        type: "button",
                        class: "nui-text-button"
                      }, [
                        renderSlot(_ctx.$slots, "label", { open, close }, () => [
                          createVNode("span", { class: "nui-text-button-inner" }, toDisplayString(props.label), 1)
                        ]),
                        createVNode(_component_Icon, {
                          name: "lucide:chevron-down",
                          class: ["nui-chevron", open && "rotate-180"]
                        }, null, 8, ["class"])
                      ])) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(``);
            _push2(ssrRenderComponent(unref(MenuItems), {
              class: ["nui-dropdown-menu", [
                unref(shape) && shapeStyle[unref(shape)],
                sizeStyle[props.size],
                colorStyle[props.color]
              ]]
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (props.headerLabel) {
                    _push3(`<div class="nui-menu-header"${_scopeId2}><div class="nui-menu-header-inner"${_scopeId2}><h4 class="nui-menu-header-title"${_scopeId2}>${ssrInterpolate(props.headerLabel)}</h4></div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="nui-menu-content"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "default", { open, close }, null, _push3, _parent3, _scopeId2);
                  _push3(`</div>`);
                } else {
                  return [
                    props.headerLabel ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "nui-menu-header"
                    }, [
                      createVNode("div", { class: "nui-menu-header-inner" }, [
                        createVNode("h4", { class: "nui-menu-header-title" }, toDisplayString(props.headerLabel), 1)
                      ])
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "nui-menu-content" }, [
                      renderSlot(_ctx.$slots, "default", { open, close })
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(MenuButton), { as: "template" }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "button", { open, close }, () => [
                    props.flavor === "button" ? (openBlock(), createBlock(_component_BaseButton, {
                      key: 0,
                      color: props.buttonColor,
                      shape: unref(shape),
                      class: "!pe-3 !ps-4"
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "label", { open, close }, () => [
                          createVNode("span", null, toDisplayString(props.label), 1)
                        ]),
                        createVNode(_component_Icon, {
                          name: "lucide:chevron-down",
                          class: ["nui-chevron", open && "rotate-180"]
                        }, null, 8, ["class"])
                      ]),
                      _: 2
                    }, 1032, ["color", "shape"])) : props.flavor === "context" ? (openBlock(), createBlock("button", {
                      key: 1,
                      type: "button",
                      class: "nui-context-button"
                    }, [
                      createVNode("span", { class: "nui-context-button-inner" }, [
                        createVNode(_component_Icon, {
                          name: "lucide:more-horizontal",
                          class: ["nui-context-icon", open && "rotate-90"]
                        }, null, 8, ["class"])
                      ])
                    ])) : props.flavor === "text" ? (openBlock(), createBlock("button", {
                      key: 2,
                      type: "button",
                      class: "nui-text-button"
                    }, [
                      renderSlot(_ctx.$slots, "label", { open, close }, () => [
                        createVNode("span", { class: "nui-text-button-inner" }, toDisplayString(props.label), 1)
                      ]),
                      createVNode(_component_Icon, {
                        name: "lucide:chevron-down",
                        class: ["nui-chevron", open && "rotate-180"]
                      }, null, 8, ["class"])
                    ])) : createCommentVNode("", true)
                  ])
                ]),
                _: 2
              }, 1024),
              createVNode(Transition, {
                "enter-active-class": "transition duration-100 ease-out",
                "enter-from-class": "transform scale-95 opacity-0",
                "enter-to-class": "transform scale-100 opacity-100",
                "leave-active-class": "transition duration-75 ease-in",
                "leave-from-class": "transform scale-100 opacity-100",
                "leave-to-class": "transform scale-95 opacity-0"
              }, {
                default: withCtx(() => [
                  createVNode(unref(MenuItems), {
                    class: ["nui-dropdown-menu", [
                      unref(shape) && shapeStyle[unref(shape)],
                      sizeStyle[props.size],
                      colorStyle[props.color]
                    ]]
                  }, {
                    default: withCtx(() => [
                      props.headerLabel ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "nui-menu-header"
                      }, [
                        createVNode("div", { class: "nui-menu-header-inner" }, [
                          createVNode("h4", { class: "nui-menu-header-title" }, toDisplayString(props.headerLabel), 1)
                        ])
                      ])) : createCommentVNode("", true),
                      createVNode("div", { class: "nui-menu-content" }, [
                        renderSlot(_ctx.$slots, "default", { open, close })
                      ])
                    ]),
                    _: 2
                  }, 1032, ["class"])
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/base/BaseDropdown.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseDropdownItem",
  __ssrInlineRender: true,
  props: {
    type: { default: void 0 },
    to: { default: void 0 },
    href: { default: void 0 },
    disabled: { type: Boolean, default: false },
    shape: { default: void 0 },
    color: { default: "default" },
    rel: { default: void 0 },
    target: { default: void 0 },
    title: { default: void 0 },
    text: { default: void 0 },
    classes: { default: () => ({
      title: "font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white",
      text: "text-muted-400 font-sans text-xs"
    }) }
  },
  setup(__props) {
    const props = __props;
    const shapeStyle = {
      straight: "",
      rounded: "nui-item-rounded",
      smooth: "nui-item-smooth",
      curved: "nui-item-curved"
    };
    const colorStyle = {
      default: "nui-item-default",
      contrast: "nui-item-contrast"
    };
    const { is, attributes } = useNinjaButton(props);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(MenuItem), mergeProps({ as: "div" }, _attrs), {
        default: withCtx(({ active, close }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(is)), mergeProps(unref(attributes), {
              class: ["nui-dropdown-item", [
                active && "nui-active",
                props.shape && shapeStyle[props.shape],
                colorStyle[props.color]
              ]],
              onClick: close
            }), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "start", {}, null, _push3, _parent3, _scopeId2);
                  _push3(`<div class="nui-item-content"${_scopeId2}><div class="${ssrRenderClass(props.classes.title)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                    _push3(`${ssrInterpolate(props.title)}`);
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</div>`);
                  if ("text" in _ctx.$slots || props.text) {
                    _push3(`<p class="text-muted-400 font-sans text-xs"${_scopeId2}>`);
                    ssrRenderSlot(_ctx.$slots, "text", {}, () => {
                      _push3(`${ssrInterpolate(props.text)}`);
                    }, _push3, _parent3, _scopeId2);
                    _push3(`</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                  ssrRenderSlot(_ctx.$slots, "end", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "start"),
                    createVNode("div", { class: "nui-item-content" }, [
                      createVNode("div", {
                        class: props.classes.title
                      }, [
                        renderSlot(_ctx.$slots, "default", {}, () => [
                          createTextVNode(toDisplayString(props.title), 1)
                        ])
                      ], 2),
                      "text" in _ctx.$slots || props.text ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-muted-400 font-sans text-xs"
                      }, [
                        renderSlot(_ctx.$slots, "text", {}, () => [
                          createTextVNode(toDisplayString(props.text), 1)
                        ])
                      ])) : createCommentVNode("", true)
                    ]),
                    renderSlot(_ctx.$slots, "end")
                  ];
                }
              }),
              _: 2
            }), _parent2, _scopeId);
          } else {
            return [
              (openBlock(), createBlock(resolveDynamicComponent(unref(is)), mergeProps(unref(attributes), {
                class: ["nui-dropdown-item", [
                  active && "nui-active",
                  props.shape && shapeStyle[props.shape],
                  colorStyle[props.color]
                ]],
                onClickPassive: close
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "start"),
                  createVNode("div", { class: "nui-item-content" }, [
                    createVNode("div", {
                      class: props.classes.title
                    }, [
                      renderSlot(_ctx.$slots, "default", {}, () => [
                        createTextVNode(toDisplayString(props.title), 1)
                      ])
                    ], 2),
                    "text" in _ctx.$slots || props.text ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "text-muted-400 font-sans text-xs"
                    }, [
                      renderSlot(_ctx.$slots, "text", {}, () => [
                        createTextVNode(toDisplayString(props.text), 1)
                      ])
                    ])) : createCommentVNode("", true)
                  ]),
                  renderSlot(_ctx.$slots, "end")
                ]),
                _: 2
              }, 1040, ["class", "onClickPassive"]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/base/BaseDropdownItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$1 as _, _sfc_main as a };
//# sourceMappingURL=BaseDropdownItem-864908ca.mjs.map
