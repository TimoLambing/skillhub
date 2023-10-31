import { _ as _sfc_main$1 } from './BaseIconBox-642fe941.mjs';
import { m as useAppConfig, n as useVModel, f as __nuxt_component_2, s as _sfc_main$E, r as __nuxt_component_0$2, _ as _sfc_main$p, i as _sfc_main$D } from '../server.mjs';
import { defineComponent, computed, mergeProps, unref, isRef, withCtx, renderSlot, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, Transition, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { Listbox, ListboxLabel, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseListbox",
  __ssrInlineRender: true,
  props: {
    items: {},
    modelValue: { default: void 0 },
    modelModifiers: { default: () => ({}) },
    shape: { default: void 0 },
    label: { default: "" },
    labelFloat: { type: Boolean },
    loading: { type: Boolean, default: false },
    error: { type: [String, Boolean], default: false },
    disabled: { type: Boolean, default: false },
    icon: { default: "" },
    selectedIcon: { default: "lucide:check" },
    multiple: { type: Boolean, default: false },
    multipleLabel: { type: [String, Function], default: () => {
      return (value, labelProperty) => {
        if (value.length === 0) {
          return "No elements selected";
        } else if (value.length > 1) {
          return `${value.length} elements selected`;
        }
        return labelProperty ? String(value?.[0]?.[labelProperty]) : String(value?.[0]);
      };
    } },
    placeholder: { default: "" },
    size: { default: "md" },
    contrast: { default: "default" },
    properties: { default: () => ({}) }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const appConfig = useAppConfig();
    const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.input);
    const shapeStyle = {
      straight: "",
      rounded: "nui-listbox-rounded",
      smooth: "nui-listbox-smooth",
      curved: "nui-listbox-curved",
      full: "nui-listbox-full"
    };
    const sizeStyle = {
      sm: "nui-listbox-sm",
      md: "nui-listbox-md",
      lg: "nui-listbox-lg"
    };
    const contrastStyle = {
      default: "nui-listbox-default",
      "default-contrast": "nui-listbox-default-contrast",
      muted: "nui-listbox-muted",
      "muted-contrast": "nui-listbox-muted-contrast"
    };
    const vmodel = useVModel(props, "modelValue", emits, {
      passive: true
    });
    const placeholder = computed(() => {
      if (props.loading) {
        return;
      }
      if (props.labelFloat) {
        return props.label;
      }
      return props.placeholder;
    });
    const value = computed(() => {
      if (props.modelModifiers.prop && props.properties.value) {
        const attr = props.properties.value;
        return props.items.find((i) => i[attr] === vmodel.value);
      }
      return vmodel.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseIconBox = _sfc_main$1;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BasePlaceload = __nuxt_component_0$2;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseText = _sfc_main$D;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-listbox", [
          contrastStyle[props.contrast],
          sizeStyle[props.size],
          unref(shape) && shapeStyle[unref(shape)],
          props.error && !props.loading && "nui-listbox-error",
          props.loading && "nui-listbox-loading",
          props.labelFloat && "nui-listbox-label-float",
          props.icon && "nui-has-icon"
        ]]
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Listbox), {
        modelValue: unref(vmodel),
        "onUpdate:modelValue": ($event) => isRef(vmodel) ? vmodel.value = $event : null,
        by: props.modelModifiers.prop ? void 0 : props.properties.value,
        multiple: props.multiple,
        disabled: props.disabled
      }, {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if ("label" in _ctx.$slots && !props.labelFloat || props.label && !props.labelFloat) {
              _push2(ssrRenderComponent(unref(ListboxLabel), { class: "nui-listbox-label" }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "label", {}, () => {
                      _push3(`${ssrInterpolate(props.label)}`);
                    }, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "label", {}, () => [
                        createTextVNode(toDisplayString(props.label), 1)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="nui-listbox-outer"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ListboxButton), {
              disabled: props.disabled,
              class: "nui-listbox-button"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "listbox-button", {
                    value: unref(value),
                    open
                  }, () => {
                    _push3(`<div class="nui-listbox-button-inner"${_scopeId2}>`);
                    if (props.icon) {
                      _push3(ssrRenderComponent(_component_BaseIconBox, {
                        size: "xs",
                        shape: "rounded",
                        class: "nui-icon-box"
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_Icon, {
                              name: props.icon,
                              class: "nui-icon-box-inner"
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_Icon, {
                                name: props.icon,
                                class: "nui-icon-box-inner"
                              }, null, 8, ["name"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (Array.isArray(unref(value))) {
                      _push3(`<!--[-->`);
                      if (unref(value).length === 0 && unref(placeholder)) {
                        _push3(`<div class="${ssrRenderClass([props.loading && "text-transparent select-none", "nui-listbox-placeholder"])}"${_scopeId2}>${ssrInterpolate(unref(placeholder))}azeaze </div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`<div class="${ssrRenderClass([[
                        props.loading && "select-none text-transparent",
                        unref(value).length === 0 && "text-muted-300 dark:text-muted-500"
                      ], "block truncate text-left"])}"${_scopeId2}>${ssrInterpolate(typeof props.multipleLabel === "function" ? props.multipleLabel(unref(value), props.properties.label) : props.multipleLabel)}</div><!--]-->`);
                    } else if (unref(value)) {
                      _push3(`<!--[-->`);
                      if (props.properties.media && unref(value)[props.properties.media]) {
                        _push3(ssrRenderComponent(_component_BaseAvatar, {
                          src: unref(value)[props.properties.media],
                          size: "xs",
                          class: "-ms-2 me-2"
                        }, null, _parent3, _scopeId2));
                      } else if (props.properties.icon && unref(value)[props.properties.icon]) {
                        _push3(ssrRenderComponent(_component_BaseIconBox, {
                          size: "xs",
                          shape: "rounded",
                          class: "-ms-2 me-2"
                        }, {
                          default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(_component_Icon, {
                                name: unref(value)[props.properties.icon],
                                class: "h-4 w-4"
                              }, null, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(_component_Icon, {
                                  name: unref(value)[props.properties.icon],
                                  class: "h-4 w-4"
                                }, null, 8, ["name"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`<div class="${ssrRenderClass([props.loading && "text-transparent select-none", "truncate text-left"])}"${_scopeId2}>${ssrInterpolate(props.properties.label ? unref(value)[props.properties.label] : props.properties.value ? unref(value)[props.properties.value] : unref(value))}</div><!--]-->`);
                    } else {
                      _push3(`<div class="${ssrRenderClass([props.loading && "text-transparent select-none", "nui-listbox-placeholder"])}"${_scopeId2}>${ssrInterpolate(unref(placeholder))}</div>`);
                    }
                    _push3(`<span class="nui-listbox-chevron"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:chevron-down",
                      class: ["nui-listbox-chevron-inner", [open && "rotate-180"]]
                    }, null, _parent3, _scopeId2));
                    _push3(`</span>`);
                    if (props.loading) {
                      _push3(`<div class="nui-listbox-placeload"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BasePlaceload, { class: "nui-placeload" }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  }, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "listbox-button", {
                      value: unref(value),
                      open
                    }, () => [
                      createVNode("div", { class: "nui-listbox-button-inner" }, [
                        props.icon ? (openBlock(), createBlock(_component_BaseIconBox, {
                          key: 0,
                          size: "xs",
                          shape: "rounded",
                          class: "nui-icon-box"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_Icon, {
                              name: props.icon,
                              class: "nui-icon-box-inner"
                            }, null, 8, ["name"])
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        Array.isArray(unref(value)) ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                          unref(value).length === 0 && unref(placeholder) ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: ["nui-listbox-placeholder", props.loading && "text-transparent select-none"]
                          }, toDisplayString(unref(placeholder)) + "azeaze ", 3)) : createCommentVNode("", true),
                          createVNode("div", {
                            class: ["block truncate text-left", [
                              props.loading && "select-none text-transparent",
                              unref(value).length === 0 && "text-muted-300 dark:text-muted-500"
                            ]]
                          }, toDisplayString(typeof props.multipleLabel === "function" ? props.multipleLabel(unref(value), props.properties.label) : props.multipleLabel), 3)
                        ], 64)) : unref(value) ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                          props.properties.media && unref(value)[props.properties.media] ? (openBlock(), createBlock(_component_BaseAvatar, {
                            key: 0,
                            src: unref(value)[props.properties.media],
                            size: "xs",
                            class: "-ms-2 me-2"
                          }, null, 8, ["src"])) : props.properties.icon && unref(value)[props.properties.icon] ? (openBlock(), createBlock(_component_BaseIconBox, {
                            key: 1,
                            size: "xs",
                            shape: "rounded",
                            class: "-ms-2 me-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: unref(value)[props.properties.icon],
                                class: "h-4 w-4"
                              }, null, 8, ["name"])
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode("div", {
                            class: ["truncate text-left", props.loading && "text-transparent select-none"]
                          }, toDisplayString(props.properties.label ? unref(value)[props.properties.label] : props.properties.value ? unref(value)[props.properties.value] : unref(value)), 3)
                        ], 64)) : (openBlock(), createBlock("div", {
                          key: 3,
                          class: ["nui-listbox-placeholder", props.loading && "text-transparent select-none"]
                        }, toDisplayString(unref(placeholder)), 3)),
                        createVNode("span", { class: "nui-listbox-chevron" }, [
                          createVNode(_component_Icon, {
                            name: "lucide:chevron-down",
                            class: ["nui-listbox-chevron-inner", [open && "rotate-180"]]
                          }, null, 8, ["class"])
                        ]),
                        props.loading ? (openBlock(), createBlock("div", {
                          key: 4,
                          class: "nui-listbox-placeload"
                        }, [
                          createVNode(_component_BasePlaceload, { class: "nui-placeload" })
                        ])) : createCommentVNode("", true)
                      ])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ListboxOptions), { class: "nui-listbox-options" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(props.items, (item) => {
                    _push3(ssrRenderComponent(unref(ListboxOption), {
                      key: props.properties.value ? item[props.properties.value] : item,
                      value: props.modelModifiers.prop && props.properties.value ? item[props.properties.value] : item,
                      as: "template"
                    }, {
                      default: withCtx(({ active, selected }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<li class="${ssrRenderClass([[active && "nui-active"], "nui-listbox-option group/nui-listbox-option"])}"${_scopeId3}>`);
                          ssrRenderSlot(_ctx.$slots, "listbox-item", {
                            item,
                            open,
                            active,
                            selected
                          }, () => {
                            if (props.properties.media && item[props.properties.media]) {
                              _push4(ssrRenderComponent(_component_BaseAvatar, {
                                src: item[props.properties.media],
                                size: "xs"
                              }, null, _parent4, _scopeId3));
                            } else if (props.properties.icon && item[props.properties.icon]) {
                              _push4(ssrRenderComponent(_component_BaseIconBox, {
                                size: "sm",
                                shape: "rounded"
                              }, {
                                default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(_component_Icon, {
                                      name: item[props.properties.icon],
                                      class: "text-muted-400 group-hover/nui-listbox-option:text-primary-500 h-5 w-5 transition-colors duration-200"
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(_component_Icon, {
                                        name: item[props.properties.icon],
                                        class: "text-muted-400 group-hover/nui-listbox-option:text-primary-500 h-5 w-5 transition-colors duration-200"
                                      }, null, 8, ["name"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`<div class="nui-listbox-option-inner"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_BaseHeading, {
                              as: "h4",
                              weight: selected ? "semibold" : "normal",
                              size: "sm",
                              class: "nui-listbox-heading"
                            }, {
                              default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(props.properties.label ? item[props.properties.label] : props.properties.value ? item[props.properties.value] : item)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(props.properties.label ? item[props.properties.label] : props.properties.value ? item[props.properties.value] : item), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            if (props.properties.sublabel && item[props.properties.sublabel]) {
                              _push4(ssrRenderComponent(_component_BaseText, {
                                size: "xs",
                                class: "nui-listbox-text"
                              }, {
                                default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`${ssrInterpolate(item[props.properties.sublabel])}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(item[props.properties.sublabel]), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`</div>`);
                            if (selected) {
                              _push4(`<span class="nui-listbox-selected-icon"${_scopeId3}>`);
                              _push4(ssrRenderComponent(_component_Icon, {
                                name: _ctx.selectedIcon,
                                class: "nui-listbobx-selected-icon-inner"
                              }, null, _parent4, _scopeId3));
                              _push4(`</span>`);
                            } else {
                              _push4(`<!---->`);
                            }
                          }, _push4, _parent4, _scopeId3);
                          _push4(`</li>`);
                        } else {
                          return [
                            createVNode("li", {
                              class: ["nui-listbox-option group/nui-listbox-option", [active && "nui-active"]]
                            }, [
                              renderSlot(_ctx.$slots, "listbox-item", {
                                item,
                                open,
                                active,
                                selected
                              }, () => [
                                props.properties.media && item[props.properties.media] ? (openBlock(), createBlock(_component_BaseAvatar, {
                                  key: 0,
                                  src: item[props.properties.media],
                                  size: "xs"
                                }, null, 8, ["src"])) : props.properties.icon && item[props.properties.icon] ? (openBlock(), createBlock(_component_BaseIconBox, {
                                  key: 1,
                                  size: "sm",
                                  shape: "rounded"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: item[props.properties.icon],
                                      class: "text-muted-400 group-hover/nui-listbox-option:text-primary-500 h-5 w-5 transition-colors duration-200"
                                    }, null, 8, ["name"])
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true),
                                createVNode("div", { class: "nui-listbox-option-inner" }, [
                                  createVNode(_component_BaseHeading, {
                                    as: "h4",
                                    weight: selected ? "semibold" : "normal",
                                    size: "sm",
                                    class: "nui-listbox-heading"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(props.properties.label ? item[props.properties.label] : props.properties.value ? item[props.properties.value] : item), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["weight"]),
                                  props.properties.sublabel && item[props.properties.sublabel] ? (openBlock(), createBlock(_component_BaseText, {
                                    key: 0,
                                    size: "xs",
                                    class: "nui-listbox-text"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item[props.properties.sublabel]), 1)
                                    ]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true)
                                ]),
                                selected ? (openBlock(), createBlock("span", {
                                  key: 2,
                                  class: "nui-listbox-selected-icon"
                                }, [
                                  createVNode(_component_Icon, {
                                    name: _ctx.selectedIcon,
                                    class: "nui-listbobx-selected-icon-inner"
                                  }, null, 8, ["name"])
                                ])) : createCommentVNode("", true)
                              ])
                            ], 2)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(props.items, (item) => {
                      return openBlock(), createBlock(unref(ListboxOption), {
                        key: props.properties.value ? item[props.properties.value] : item,
                        value: props.modelModifiers.prop && props.properties.value ? item[props.properties.value] : item,
                        as: "template"
                      }, {
                        default: withCtx(({ active, selected }) => [
                          createVNode("li", {
                            class: ["nui-listbox-option group/nui-listbox-option", [active && "nui-active"]]
                          }, [
                            renderSlot(_ctx.$slots, "listbox-item", {
                              item,
                              open,
                              active,
                              selected
                            }, () => [
                              props.properties.media && item[props.properties.media] ? (openBlock(), createBlock(_component_BaseAvatar, {
                                key: 0,
                                src: item[props.properties.media],
                                size: "xs"
                              }, null, 8, ["src"])) : props.properties.icon && item[props.properties.icon] ? (openBlock(), createBlock(_component_BaseIconBox, {
                                key: 1,
                                size: "sm",
                                shape: "rounded"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_Icon, {
                                    name: item[props.properties.icon],
                                    class: "text-muted-400 group-hover/nui-listbox-option:text-primary-500 h-5 w-5 transition-colors duration-200"
                                  }, null, 8, ["name"])
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true),
                              createVNode("div", { class: "nui-listbox-option-inner" }, [
                                createVNode(_component_BaseHeading, {
                                  as: "h4",
                                  weight: selected ? "semibold" : "normal",
                                  size: "sm",
                                  class: "nui-listbox-heading"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(props.properties.label ? item[props.properties.label] : props.properties.value ? item[props.properties.value] : item), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["weight"]),
                                props.properties.sublabel && item[props.properties.sublabel] ? (openBlock(), createBlock(_component_BaseText, {
                                  key: 0,
                                  size: "xs",
                                  class: "nui-listbox-text"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item[props.properties.sublabel]), 1)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true)
                              ]),
                              selected ? (openBlock(), createBlock("span", {
                                key: 2,
                                class: "nui-listbox-selected-icon"
                              }, [
                                createVNode(_component_Icon, {
                                  name: _ctx.selectedIcon,
                                  class: "nui-listbobx-selected-icon-inner"
                                }, null, 8, ["name"])
                              ])) : createCommentVNode("", true)
                            ])
                          ], 2)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            if ("label" in _ctx.$slots && props.labelFloat || props.label && props.labelFloat) {
              _push2(ssrRenderComponent(unref(ListboxLabel), { class: "nui-label-float" }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "label", {}, () => {
                      _push3(`${ssrInterpolate(props.label)}`);
                    }, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "label", {}, () => [
                        createTextVNode(toDisplayString(props.label), 1)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (props.error && typeof props.error === "string") {
              _push2(`<span class="text-danger-600 mt-1 block font-sans text-[0.65rem] font-medium leading-none"${_scopeId}>${ssrInterpolate(props.error)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              "label" in _ctx.$slots && !props.labelFloat || props.label && !props.labelFloat ? (openBlock(), createBlock(unref(ListboxLabel), {
                key: 0,
                class: "nui-listbox-label"
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "label", {}, () => [
                    createTextVNode(toDisplayString(props.label), 1)
                  ])
                ]),
                _: 3
              })) : createCommentVNode("", true),
              createVNode("div", { class: "nui-listbox-outer" }, [
                createVNode(unref(ListboxButton), {
                  disabled: props.disabled,
                  class: "nui-listbox-button"
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "listbox-button", {
                      value: unref(value),
                      open
                    }, () => [
                      createVNode("div", { class: "nui-listbox-button-inner" }, [
                        props.icon ? (openBlock(), createBlock(_component_BaseIconBox, {
                          key: 0,
                          size: "xs",
                          shape: "rounded",
                          class: "nui-icon-box"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_Icon, {
                              name: props.icon,
                              class: "nui-icon-box-inner"
                            }, null, 8, ["name"])
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        Array.isArray(unref(value)) ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                          unref(value).length === 0 && unref(placeholder) ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: ["nui-listbox-placeholder", props.loading && "text-transparent select-none"]
                          }, toDisplayString(unref(placeholder)) + "azeaze ", 3)) : createCommentVNode("", true),
                          createVNode("div", {
                            class: ["block truncate text-left", [
                              props.loading && "select-none text-transparent",
                              unref(value).length === 0 && "text-muted-300 dark:text-muted-500"
                            ]]
                          }, toDisplayString(typeof props.multipleLabel === "function" ? props.multipleLabel(unref(value), props.properties.label) : props.multipleLabel), 3)
                        ], 64)) : unref(value) ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                          props.properties.media && unref(value)[props.properties.media] ? (openBlock(), createBlock(_component_BaseAvatar, {
                            key: 0,
                            src: unref(value)[props.properties.media],
                            size: "xs",
                            class: "-ms-2 me-2"
                          }, null, 8, ["src"])) : props.properties.icon && unref(value)[props.properties.icon] ? (openBlock(), createBlock(_component_BaseIconBox, {
                            key: 1,
                            size: "xs",
                            shape: "rounded",
                            class: "-ms-2 me-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: unref(value)[props.properties.icon],
                                class: "h-4 w-4"
                              }, null, 8, ["name"])
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode("div", {
                            class: ["truncate text-left", props.loading && "text-transparent select-none"]
                          }, toDisplayString(props.properties.label ? unref(value)[props.properties.label] : props.properties.value ? unref(value)[props.properties.value] : unref(value)), 3)
                        ], 64)) : (openBlock(), createBlock("div", {
                          key: 3,
                          class: ["nui-listbox-placeholder", props.loading && "text-transparent select-none"]
                        }, toDisplayString(unref(placeholder)), 3)),
                        createVNode("span", { class: "nui-listbox-chevron" }, [
                          createVNode(_component_Icon, {
                            name: "lucide:chevron-down",
                            class: ["nui-listbox-chevron-inner", [open && "rotate-180"]]
                          }, null, 8, ["class"])
                        ]),
                        props.loading ? (openBlock(), createBlock("div", {
                          key: 4,
                          class: "nui-listbox-placeload"
                        }, [
                          createVNode(_component_BasePlaceload, { class: "nui-placeload" })
                        ])) : createCommentVNode("", true)
                      ])
                    ])
                  ]),
                  _: 2
                }, 1032, ["disabled"]),
                createVNode(Transition, {
                  "leave-active-class": "transition duration-100 ease-in",
                  "leave-from-class": "opacity-100",
                  "leave-to-class": "opacity-0"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(ListboxOptions), { class: "nui-listbox-options" }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(props.items, (item) => {
                          return openBlock(), createBlock(unref(ListboxOption), {
                            key: props.properties.value ? item[props.properties.value] : item,
                            value: props.modelModifiers.prop && props.properties.value ? item[props.properties.value] : item,
                            as: "template"
                          }, {
                            default: withCtx(({ active, selected }) => [
                              createVNode("li", {
                                class: ["nui-listbox-option group/nui-listbox-option", [active && "nui-active"]]
                              }, [
                                renderSlot(_ctx.$slots, "listbox-item", {
                                  item,
                                  open,
                                  active,
                                  selected
                                }, () => [
                                  props.properties.media && item[props.properties.media] ? (openBlock(), createBlock(_component_BaseAvatar, {
                                    key: 0,
                                    src: item[props.properties.media],
                                    size: "xs"
                                  }, null, 8, ["src"])) : props.properties.icon && item[props.properties.icon] ? (openBlock(), createBlock(_component_BaseIconBox, {
                                    key: 1,
                                    size: "sm",
                                    shape: "rounded"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: item[props.properties.icon],
                                        class: "text-muted-400 group-hover/nui-listbox-option:text-primary-500 h-5 w-5 transition-colors duration-200"
                                      }, null, 8, ["name"])
                                    ]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true),
                                  createVNode("div", { class: "nui-listbox-option-inner" }, [
                                    createVNode(_component_BaseHeading, {
                                      as: "h4",
                                      weight: selected ? "semibold" : "normal",
                                      size: "sm",
                                      class: "nui-listbox-heading"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(props.properties.label ? item[props.properties.label] : props.properties.value ? item[props.properties.value] : item), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["weight"]),
                                    props.properties.sublabel && item[props.properties.sublabel] ? (openBlock(), createBlock(_component_BaseText, {
                                      key: 0,
                                      size: "xs",
                                      class: "nui-listbox-text"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item[props.properties.sublabel]), 1)
                                      ]),
                                      _: 2
                                    }, 1024)) : createCommentVNode("", true)
                                  ]),
                                  selected ? (openBlock(), createBlock("span", {
                                    key: 2,
                                    class: "nui-listbox-selected-icon"
                                  }, [
                                    createVNode(_component_Icon, {
                                      name: _ctx.selectedIcon,
                                      class: "nui-listbobx-selected-icon-inner"
                                    }, null, 8, ["name"])
                                  ])) : createCommentVNode("", true)
                                ])
                              ], 2)
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 128))
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024),
                "label" in _ctx.$slots && props.labelFloat || props.label && props.labelFloat ? (openBlock(), createBlock(unref(ListboxLabel), {
                  key: 0,
                  class: "nui-label-float"
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "label", {}, () => [
                      createTextVNode(toDisplayString(props.label), 1)
                    ])
                  ]),
                  _: 3
                })) : createCommentVNode("", true),
                props.error && typeof props.error === "string" ? (openBlock(), createBlock("span", {
                  key: 1,
                  class: "text-danger-600 mt-1 block font-sans text-[0.65rem] font-medium leading-none"
                }, toDisplayString(props.error), 1)) : createCommentVNode("", true)
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/form/BaseListbox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=BaseListbox-69fbc324.mjs.map
