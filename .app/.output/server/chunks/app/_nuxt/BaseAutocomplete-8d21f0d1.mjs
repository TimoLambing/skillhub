import { m as useAppConfig, n as useVModel, B as refDebounced, A as useNinjaMark, f as __nuxt_component_2, r as __nuxt_component_0$2, s as _sfc_main$E, _ as _sfc_main$p, i as _sfc_main$D } from '../server.mjs';
import { _ as _sfc_main$2 } from './BaseIconBox-642fe941.mjs';
import { useSSRContext, defineComponent, computed, shallowRef, ref, provide, reactive, watch, unref, mergeProps, isRef, withCtx, renderSlot, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, createCommentVNode, renderList, inject } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttrs, ssrRenderStyle } from 'vue/server-renderer';
import { Combobox, ComboboxLabel, ComboboxInput, ComboboxButton, TransitionRoot, ComboboxOptions, ComboboxOption } from '@headlessui/vue';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BaseAutocompleteItem",
  __ssrInlineRender: true,
  props: {
    value: { default: () => ({}) },
    shape: { default: void 0 },
    selectedIcon: { default: "lucide:check" },
    active: { type: Boolean },
    selected: { type: Boolean },
    mark: { default: "nui-mark" }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const shape = computed(
      () => props.shape ?? appConfig.nui.defaultShapes?.autocompleteItem
    );
    const shapeStyle = {
      straight: "",
      rounded: "rounded-md",
      smooth: "rounded-lg",
      curved: "rounded-xl",
      full: "rounded-xl"
    };
    const inputContext = inject("BaseAutocompleteContext", {
      query: ""
    });
    const query = computed(() => inputContext.query);
    const mark = computed(() => props.mark);
    const markedName = useNinjaMark(() => props.value?.name, query, mark);
    const markedText = useNinjaMark(() => props.value?.text, query, mark);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BaseIconBox = _sfc_main$2;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseText = _sfc_main$D;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex cursor-pointer items-center p-2 transition-colors duration-300", [
          props.active ? "bg-muted-100 dark:bg-muted-700" : "",
          unref(shape) && shapeStyle[unref(shape)]
        ]]
      }, _attrs))}>`);
      if (props.value.media && !props.value.icon) {
        _push(ssrRenderComponent(_component_BaseAvatar, {
          src: props.value.media,
          size: "xs",
          class: "me-3"
        }, null, _parent));
      } else if (props.value.icon && !props.value.media) {
        _push(ssrRenderComponent(_component_BaseIconBox, {
          size: "sm",
          shape: "rounded",
          class: "me-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: props.value.icon,
                class: ["h-4 w-4", [props.selected ? "text-primary-500" : "text-muted-500"]]
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: props.value.icon,
                  class: ["h-4 w-4", [props.selected ? "text-primary-500" : "text-muted-500"]]
                }, null, 8, ["name", "class"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h4",
        weight: props.selected ? "semibold" : "normal",
        size: "sm",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${unref(markedName)}</span>`);
          } else {
            return [
              createVNode("span", { innerHTML: unref(markedName) }, null, 8, ["innerHTML"])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (_ctx.value.text) {
        _push(ssrRenderComponent(_component_BaseText, {
          size: "xs",
          class: "text-muted-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${unref(markedText)}</span>`);
            } else {
              return [
                createVNode("span", { innerHTML: unref(markedText) }, null, 8, ["innerHTML"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div style="${ssrRenderStyle(props.selected ? null : { display: "none" })}" class="${ssrRenderClass([[props.value.media && "h-8 w-8", props.value.icon && "h-8 w-8"], "ms-auto flex items-center justify-center"])}">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: _ctx.selectedIcon,
        class: "text-success-500 block h-4 w-4"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/form/BaseAutocompleteItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseAutocomplete",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: void 0 },
    items: { default: () => [] },
    shape: { default: void 0 },
    label: { default: "" },
    labelFloat: { type: Boolean },
    icon: { default: void 0 },
    i18n: { default: () => ({
      pending: "Loading ...",
      empty: "Nothing found."
    }) },
    placeholder: { default: "" },
    error: { type: [String, Boolean], default: "" },
    size: { default: "md" },
    contrast: { default: "default" },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    clearable: { type: Boolean, default: false },
    clearValue: { default: void 0 },
    clearIcon: { default: "lucide:x" },
    chipClearIcon: { default: "lucide:x" },
    dropdownIcon: { default: "lucide:chevron-down" },
    dropdown: { type: Boolean, default: false },
    multiple: { type: Boolean, default: false },
    displayValue: { type: Function, default: (item) => item },
    filterDebounce: { default: 0 },
    filterItems: { type: Function, default: (query, items) => {
      if (!query || !items) {
        return items ?? [];
      }
      return items.filter((item) => {
        if (typeof item !== "string") {
          return false;
        }
        return item?.toLowerCase().includes(query.toLowerCase());
      });
    } },
    classes: { default: () => ({}) }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const appConfig = useAppConfig();
    const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.input);
    const value = useVModel(props, "modelValue", emits, {
      passive: true
    });
    const items = shallowRef(props.items);
    const query = ref("");
    const debounced = refDebounced(query, props.filterDebounce);
    const filteredItems = shallowRef(
      props.dropdown ? props.items : []
    );
    const pendingFilter = ref(false);
    const pendingDebounce = computed(() => query.value !== debounced.value);
    const pending = computed(() => pendingFilter.value || pendingDebounce.value);
    const shapeStyle = {
      straight: "",
      rounded: "nui-autocomplete-rounded",
      smooth: "nui-autocomplete-smooth",
      curved: "nui-autocomplete-curved",
      full: "nui-autocomplete-full"
    };
    const sizeStyle = {
      sm: "nui-autocomplete-sm",
      md: "nui-autocomplete-md",
      lg: "nui-autocomplete-lg"
    };
    const contrastStyle = {
      default: "nui-autocomplete-default",
      "default-contrast": "nui-autocomplete-default-contrast",
      muted: "nui-autocomplete-muted",
      "muted-contrast": "nui-autocomplete-muted-contrast"
    };
    provide(
      "BaseAutocompleteContext",
      reactive({
        selected: value,
        items,
        filteredItems,
        query,
        pending,
        clear,
        removeItem
      })
    );
    __expose({
      /**
       * Current selected value.
       */
      selected: value,
      /**
       * Resolved items list.
       */
      filteredItems,
      /**
       * Current search input query.
       */
      query,
      /**
       * The filterItems pending state.
       */
      pending,
      /**
       * Clears the selected value.
       */
      clear,
      /**
       * Removes an item from the selected value.
       */
      removeItem
    });
    watch(debounced, async (value2) => {
      pendingFilter.value = true;
      try {
        filteredItems.value = await props.filterItems(value2, items.value);
      } catch (error) {
        if (error?.name === "AbortError") {
          return;
        }
        throw error;
      } finally {
        pendingFilter.value = false;
      }
    });
    function clear() {
      value.value = props.clearValue;
    }
    const iconResolved = computed(() => {
      if (value.value && typeof value.value === "object" && !Array.isArray(value.value) && "icon" in value.value && typeof value.value.icon === "string") {
        return value.value.icon;
      }
      return props.icon;
    });
    function isAutocompleteItem(item) {
      if (item && typeof item === "object" && ("name" in item && typeof item.name === "string" || "text" in item && typeof item.text === "string" || "media" in item && typeof item.media === "string" || "icon" in item && typeof item.icon === "string")) {
        return true;
      }
      return false;
    }
    function removeItem(item) {
      if (!Array.isArray(value.value)) {
        value.value = props.clearValue;
        return;
      }
      for (let i = value.value.length - 1; i >= 0; --i) {
        if (value.value[i] == item) {
          value.value.splice(i, 1);
        }
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      const _component_BasePlaceload = __nuxt_component_0$2;
      const _component_BaseAutocompleteItem = _sfc_main$1;
      _push(ssrRenderComponent(unref(Combobox), mergeProps({
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        multiple: props.multiple,
        disabled: props.disabled,
        class: [
          "nui-autocomplete",
          props.classes?.wrapper,
          sizeStyle[props.size],
          contrastStyle[props.contrast],
          unref(shape) && shapeStyle[unref(shape)],
          props.icon && "nui-has-icon",
          props.labelFloat && "nui-autocomplete-label-float",
          props.loading && "nui-autocomplete-loading"
        ],
        as: "div"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if ("label" in _ctx.$slots && !_ctx.labelFloat || props.label && !props.labelFloat) {
              _push2(ssrRenderComponent(unref(ComboboxLabel), {
                class: ["nui-autocomplete-label", _ctx.classes?.label]
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "label", { query: unref(query), filteredItems: unref(filteredItems), pending: unref(pending), items: unref(items) }, () => {
                      _push3(`${ssrInterpolate(_ctx.label)}`);
                    }, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "label", { query: unref(query), filteredItems: unref(filteredItems), pending: unref(pending), items: unref(items) }, () => [
                        createTextVNode(toDisplayString(_ctx.label), 1)
                      ])
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (props.multiple) {
              _push2(`<div class="nui-autocomplete-multiple"${_scopeId}>`);
              if (Array.isArray(unref(value)) && unref(value).length > 0) {
                _push2(`<ul class="nui-autocomplete-multiple-list"${_scopeId}><!--[-->`);
                ssrRenderList(unref(value), (item) => {
                  _push2(`<li${_scopeId}><div class="nui-autocomplete-multiple-list-item"${_scopeId}>${ssrInterpolate(props.displayValue(item))} <button type="button"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_Icon, {
                    name: _ctx.chipClearIcon,
                    class: "nui-autocomplete-multiple-list-item-icon"
                  }, null, _parent2, _scopeId));
                  _push2(`</button></div></li>`);
                });
                _push2(`<!--]--></ul>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="nui-autocomplete-outer"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ComboboxInput), {
              class: ["nui-autocomplete-input", _ctx.classes?.input],
              "display-value": props.multiple ? void 0 : props.displayValue,
              placeholder: props.placeholder,
              disabled: props.disabled,
              onChange: ($event) => query.value = $event.target.value
            }, null, _parent2, _scopeId));
            if ("label" in _ctx.$slots && props.labelFloat || props.label && props.labelFloat) {
              _push2(ssrRenderComponent(unref(ComboboxLabel), {
                class: ["nui-label-float", props.classes?.label]
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "label", { query: unref(query), filteredItems: unref(filteredItems), pending: unref(pending), items: unref(items) }, () => {
                      _push3(`${ssrInterpolate(props.label)}`);
                    }, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "label", { query: unref(query), filteredItems: unref(filteredItems), pending: unref(pending), items: unref(items) }, () => [
                        createTextVNode(toDisplayString(props.label), 1)
                      ])
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(iconResolved)) {
              _push2(`<div class="nui-autocomplete-icon"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: unref(iconResolved),
                class: "nui-autocomplete-icon-inner"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (props.clearable && unref(value)) {
              _push2(`<button type="button" class="${ssrRenderClass([[props.classes?.icon, props.dropdown && "me-6"], "nui-autocomplete-clear"])}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: props.clearIcon,
                class: "nui-autocomplete-clear-inner"
              }, null, _parent2, _scopeId));
              _push2(`</button>`);
            } else {
              _push2(`<!---->`);
            }
            if (props.dropdown) {
              _push2(ssrRenderComponent(unref(ComboboxButton), { class: "nui-autocomplete-clear" }, {
                default: withCtx(({ open }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: props.dropdownIcon,
                      class: ["nui-autocomplete-clear-inner transition-transform duration-300", [props.classes?.icon, open && "rotate-180"]]
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: props.dropdownIcon,
                        class: ["nui-autocomplete-clear-inner transition-transform duration-300", [props.classes?.icon, open && "rotate-180"]]
                      }, null, 8, ["name", "class"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (props.loading) {
              _push2(`<div class="nui-autocomplete-placeload"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BasePlaceload, {
                class: ["nui-placeload", props.icon && "ms-6"]
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (props.error && typeof props.error === "string") {
              _push2(`<span class="nui-autocomplete-error-text"${_scopeId}>${ssrInterpolate(props.error)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(TransitionRoot), {
              leave: "transition ease-in duration-100",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0",
              onAfterLeave: ($event) => query.value = ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ComboboxOptions), {
                    as: "div",
                    class: "nui-autocomplete-results"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(filteredItems).length === 0 && unref(pending)) {
                          _push4(`<div class="nui-autocomplete-results-placeholder"${_scopeId3}>`);
                          ssrRenderSlot(_ctx.$slots, "pending", { query: unref(query), filteredItems: unref(filteredItems), pending: unref(pending), items: unref(items) }, () => {
                            _push4(`<span class="nui-autocomplete-results-placeholder-text"${_scopeId3}>${ssrInterpolate(props.i18n.pending)}</span>`);
                          }, _push4, _parent4, _scopeId3);
                          _push4(`</div>`);
                        } else if (unref(filteredItems).length === 0) {
                          _push4(`<div class="nui-autocomplete-results-placeholder"${_scopeId3}>`);
                          ssrRenderSlot(_ctx.$slots, "empty", { query: unref(query), filteredItems: unref(filteredItems), pending: unref(pending), items: unref(items) }, () => {
                            _push4(`<span class="nui-autocomplete-results-placeholder-text"${_scopeId3}>${ssrInterpolate(props.i18n.empty)}</span>`);
                          }, _push4, _parent4, _scopeId3);
                          _push4(`</div>`);
                        } else {
                          _push4(`<!--[-->`);
                          if ("start-item" in _ctx.$slots) {
                            _push4(`<div class="nui-autocomplete-results-header"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "start-item", {
                              query: unref(query),
                              filteredItems: unref(filteredItems),
                              pending: unref(pending),
                              items: unref(items)
                            }, null, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<!--[-->`);
                          ssrRenderList(unref(filteredItems), (item) => {
                            _push4(ssrRenderComponent(unref(ComboboxOption), {
                              key: String(item),
                              class: "nui-autocomplete-results-item",
                              as: "div",
                              value: item
                            }, {
                              default: withCtx(({ active, selected }, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  ssrRenderSlot(_ctx.$slots, "item", {
                                    query: unref(query),
                                    filteredItems: unref(filteredItems),
                                    pending: unref(pending),
                                    items: unref(items),
                                    item,
                                    active,
                                    selected
                                  }, () => {
                                    _push5(ssrRenderComponent(_component_BaseAutocompleteItem, {
                                      shape: unref(shape),
                                      value: isAutocompleteItem(item) ? item : {
                                        name: props.displayValue(item)
                                      },
                                      active,
                                      selected
                                    }, null, _parent5, _scopeId4));
                                  }, _push5, _parent5, _scopeId4);
                                } else {
                                  return [
                                    renderSlot(_ctx.$slots, "item", {
                                      query: unref(query),
                                      filteredItems: unref(filteredItems),
                                      pending: unref(pending),
                                      items: unref(items),
                                      item,
                                      active,
                                      selected
                                    }, () => [
                                      createVNode(_component_BaseAutocompleteItem, {
                                        shape: unref(shape),
                                        value: isAutocompleteItem(item) ? item : {
                                          name: props.displayValue(item)
                                        },
                                        active,
                                        selected
                                      }, null, 8, ["shape", "value", "active", "selected"])
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                          if ("end-item" in _ctx.$slots) {
                            _push4(`<div class="nui-autocomplete-results-footer"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "end-item", {
                              query: unref(query),
                              filteredItems: unref(filteredItems),
                              pending: unref(pending),
                              items: unref(items)
                            }, null, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<!--]-->`);
                        }
                      } else {
                        return [
                          unref(filteredItems).length === 0 && unref(pending) ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "nui-autocomplete-results-placeholder"
                          }, [
                            renderSlot(_ctx.$slots, "pending", { query: unref(query), filteredItems: unref(filteredItems), pending: unref(pending), items: unref(items) }, () => [
                              createVNode("span", { class: "nui-autocomplete-results-placeholder-text" }, toDisplayString(props.i18n.pending), 1)
                            ])
                          ])) : unref(filteredItems).length === 0 ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "nui-autocomplete-results-placeholder"
                          }, [
                            renderSlot(_ctx.$slots, "empty", { query: unref(query), filteredItems: unref(filteredItems), pending: unref(pending), items: unref(items) }, () => [
                              createVNode("span", { class: "nui-autocomplete-results-placeholder-text" }, toDisplayString(props.i18n.empty), 1)
                            ])
                          ])) : (openBlock(), createBlock(Fragment, { key: 2 }, [
                            "start-item" in _ctx.$slots ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "nui-autocomplete-results-header"
                            }, [
                              renderSlot(_ctx.$slots, "start-item", {
                                query: unref(query),
                                filteredItems: unref(filteredItems),
                                pending: unref(pending),
                                items: unref(items)
                              })
                            ])) : createCommentVNode("", true),
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredItems), (item) => {
                              return openBlock(), createBlock(unref(ComboboxOption), {
                                key: String(item),
                                class: "nui-autocomplete-results-item",
                                as: "div",
                                value: item
                              }, {
                                default: withCtx(({ active, selected }) => [
                                  renderSlot(_ctx.$slots, "item", {
                                    query: unref(query),
                                    filteredItems: unref(filteredItems),
                                    pending: unref(pending),
                                    items: unref(items),
                                    item,
                                    active,
                                    selected
                                  }, () => [
                                    createVNode(_component_BaseAutocompleteItem, {
                                      shape: unref(shape),
                                      value: isAutocompleteItem(item) ? item : {
                                        name: props.displayValue(item)
                                      },
                                      active,
                                      selected
                                    }, null, 8, ["shape", "value", "active", "selected"])
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["value"]);
                            }), 128)),
                            "end-item" in _ctx.$slots ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: "nui-autocomplete-results-footer"
                            }, [
                              renderSlot(_ctx.$slots, "end-item", {
                                query: unref(query),
                                filteredItems: unref(filteredItems),
                                pending: unref(pending),
                                items: unref(items)
                              })
                            ])) : createCommentVNode("", true)
                          ], 64))
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ComboboxOptions), {
                      as: "div",
                      class: "nui-autocomplete-results"
                    }, {
                      default: withCtx(() => [
                        unref(filteredItems).length === 0 && unref(pending) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "nui-autocomplete-results-placeholder"
                        }, [
                          renderSlot(_ctx.$slots, "pending", { query: unref(query), filteredItems: unref(filteredItems), pending: unref(pending), items: unref(items) }, () => [
                            createVNode("span", { class: "nui-autocomplete-results-placeholder-text" }, toDisplayString(props.i18n.pending), 1)
                          ])
                        ])) : unref(filteredItems).length === 0 ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "nui-autocomplete-results-placeholder"
                        }, [
                          renderSlot(_ctx.$slots, "empty", { query: unref(query), filteredItems: unref(filteredItems), pending: unref(pending), items: unref(items) }, () => [
                            createVNode("span", { class: "nui-autocomplete-results-placeholder-text" }, toDisplayString(props.i18n.empty), 1)
                          ])
                        ])) : (openBlock(), createBlock(Fragment, { key: 2 }, [
                          "start-item" in _ctx.$slots ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "nui-autocomplete-results-header"
                          }, [
                            renderSlot(_ctx.$slots, "start-item", {
                              query: unref(query),
                              filteredItems: unref(filteredItems),
                              pending: unref(pending),
                              items: unref(items)
                            })
                          ])) : createCommentVNode("", true),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredItems), (item) => {
                            return openBlock(), createBlock(unref(ComboboxOption), {
                              key: String(item),
                              class: "nui-autocomplete-results-item",
                              as: "div",
                              value: item
                            }, {
                              default: withCtx(({ active, selected }) => [
                                renderSlot(_ctx.$slots, "item", {
                                  query: unref(query),
                                  filteredItems: unref(filteredItems),
                                  pending: unref(pending),
                                  items: unref(items),
                                  item,
                                  active,
                                  selected
                                }, () => [
                                  createVNode(_component_BaseAutocompleteItem, {
                                    shape: unref(shape),
                                    value: isAutocompleteItem(item) ? item : {
                                      name: props.displayValue(item)
                                    },
                                    active,
                                    selected
                                  }, null, 8, ["shape", "value", "active", "selected"])
                                ])
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 128)),
                          "end-item" in _ctx.$slots ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "nui-autocomplete-results-footer"
                          }, [
                            renderSlot(_ctx.$slots, "end-item", {
                              query: unref(query),
                              filteredItems: unref(filteredItems),
                              pending: unref(pending),
                              items: unref(items)
                            })
                          ])) : createCommentVNode("", true)
                        ], 64))
                      ]),
                      _: 3
                    })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              "label" in _ctx.$slots && !_ctx.labelFloat || props.label && !props.labelFloat ? (openBlock(), createBlock(unref(ComboboxLabel), {
                key: 0,
                class: ["nui-autocomplete-label", _ctx.classes?.label]
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "label", { query: unref(query), filteredItems: unref(filteredItems), pending: unref(pending), items: unref(items) }, () => [
                    createTextVNode(toDisplayString(_ctx.label), 1)
                  ])
                ]),
                _: 3
              }, 8, ["class"])) : createCommentVNode("", true),
              props.multiple ? (openBlock(), createBlock("div", {
                key: 1,
                class: "nui-autocomplete-multiple"
              }, [
                Array.isArray(unref(value)) && unref(value).length > 0 ? (openBlock(), createBlock("ul", {
                  key: 0,
                  class: "nui-autocomplete-multiple-list"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(value), (item) => {
                    return openBlock(), createBlock("li", {
                      key: String(item)
                    }, [
                      createVNode("div", { class: "nui-autocomplete-multiple-list-item" }, [
                        createTextVNode(toDisplayString(props.displayValue(item)) + " ", 1),
                        createVNode("button", {
                          type: "button",
                          onClick: ($event) => removeItem(item)
                        }, [
                          createVNode(_component_Icon, {
                            name: _ctx.chipClearIcon,
                            class: "nui-autocomplete-multiple-list-item-icon"
                          }, null, 8, ["name"])
                        ], 8, ["onClick"])
                      ])
                    ]);
                  }), 128))
                ])) : createCommentVNode("", true)
              ])) : createCommentVNode("", true),
              createVNode("div", { class: "nui-autocomplete-outer" }, [
                createVNode(unref(ComboboxInput), {
                  class: ["nui-autocomplete-input", _ctx.classes?.input],
                  "display-value": props.multiple ? void 0 : props.displayValue,
                  placeholder: props.placeholder,
                  disabled: props.disabled,
                  onChange: ($event) => query.value = $event.target.value
                }, null, 8, ["class", "display-value", "placeholder", "disabled", "onChange"]),
                "label" in _ctx.$slots && props.labelFloat || props.label && props.labelFloat ? (openBlock(), createBlock(unref(ComboboxLabel), {
                  key: 0,
                  class: ["nui-label-float", props.classes?.label]
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "label", { query: unref(query), filteredItems: unref(filteredItems), pending: unref(pending), items: unref(items) }, () => [
                      createTextVNode(toDisplayString(props.label), 1)
                    ])
                  ]),
                  _: 3
                }, 8, ["class"])) : createCommentVNode("", true),
                unref(iconResolved) ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "nui-autocomplete-icon"
                }, [
                  createVNode(_component_Icon, {
                    name: unref(iconResolved),
                    class: "nui-autocomplete-icon-inner"
                  }, null, 8, ["name"])
                ])) : createCommentVNode("", true),
                props.clearable && unref(value) ? (openBlock(), createBlock("button", {
                  key: 2,
                  type: "button",
                  class: ["nui-autocomplete-clear", [props.classes?.icon, props.dropdown && "me-6"]],
                  onClick: clear
                }, [
                  createVNode(_component_Icon, {
                    name: props.clearIcon,
                    class: "nui-autocomplete-clear-inner"
                  }, null, 8, ["name"])
                ], 2)) : createCommentVNode("", true),
                props.dropdown ? (openBlock(), createBlock(unref(ComboboxButton), {
                  key: 3,
                  class: "nui-autocomplete-clear"
                }, {
                  default: withCtx(({ open }) => [
                    createVNode(_component_Icon, {
                      name: props.dropdownIcon,
                      class: ["nui-autocomplete-clear-inner transition-transform duration-300", [props.classes?.icon, open && "rotate-180"]]
                    }, null, 8, ["name", "class"])
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                props.loading ? (openBlock(), createBlock("div", {
                  key: 4,
                  class: "nui-autocomplete-placeload"
                }, [
                  createVNode(_component_BasePlaceload, {
                    class: ["nui-placeload", props.icon && "ms-6"]
                  }, null, 8, ["class"])
                ])) : createCommentVNode("", true)
              ]),
              props.error && typeof props.error === "string" ? (openBlock(), createBlock("span", {
                key: 2,
                class: "nui-autocomplete-error-text"
              }, toDisplayString(props.error), 1)) : createCommentVNode("", true),
              createVNode(unref(TransitionRoot), {
                leave: "transition ease-in duration-100",
                "leave-from": "opacity-100",
                "leave-to": "opacity-0",
                onAfterLeave: ($event) => query.value = ""
              }, {
                default: withCtx(() => [
                  createVNode(unref(ComboboxOptions), {
                    as: "div",
                    class: "nui-autocomplete-results"
                  }, {
                    default: withCtx(() => [
                      unref(filteredItems).length === 0 && unref(pending) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "nui-autocomplete-results-placeholder"
                      }, [
                        renderSlot(_ctx.$slots, "pending", { query: unref(query), filteredItems: unref(filteredItems), pending: unref(pending), items: unref(items) }, () => [
                          createVNode("span", { class: "nui-autocomplete-results-placeholder-text" }, toDisplayString(props.i18n.pending), 1)
                        ])
                      ])) : unref(filteredItems).length === 0 ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "nui-autocomplete-results-placeholder"
                      }, [
                        renderSlot(_ctx.$slots, "empty", { query: unref(query), filteredItems: unref(filteredItems), pending: unref(pending), items: unref(items) }, () => [
                          createVNode("span", { class: "nui-autocomplete-results-placeholder-text" }, toDisplayString(props.i18n.empty), 1)
                        ])
                      ])) : (openBlock(), createBlock(Fragment, { key: 2 }, [
                        "start-item" in _ctx.$slots ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "nui-autocomplete-results-header"
                        }, [
                          renderSlot(_ctx.$slots, "start-item", {
                            query: unref(query),
                            filteredItems: unref(filteredItems),
                            pending: unref(pending),
                            items: unref(items)
                          })
                        ])) : createCommentVNode("", true),
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredItems), (item) => {
                          return openBlock(), createBlock(unref(ComboboxOption), {
                            key: String(item),
                            class: "nui-autocomplete-results-item",
                            as: "div",
                            value: item
                          }, {
                            default: withCtx(({ active, selected }) => [
                              renderSlot(_ctx.$slots, "item", {
                                query: unref(query),
                                filteredItems: unref(filteredItems),
                                pending: unref(pending),
                                items: unref(items),
                                item,
                                active,
                                selected
                              }, () => [
                                createVNode(_component_BaseAutocompleteItem, {
                                  shape: unref(shape),
                                  value: isAutocompleteItem(item) ? item : {
                                    name: props.displayValue(item)
                                  },
                                  active,
                                  selected
                                }, null, 8, ["shape", "value", "active", "selected"])
                              ])
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 128)),
                        "end-item" in _ctx.$slots ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "nui-autocomplete-results-footer"
                        }, [
                          renderSlot(_ctx.$slots, "end-item", {
                            query: unref(query),
                            filteredItems: unref(filteredItems),
                            pending: unref(pending),
                            items: unref(items)
                          })
                        ])) : createCommentVNode("", true)
                      ], 64))
                    ]),
                    _: 3
                  })
                ]),
                _: 3
              }, 8, ["onAfterLeave"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/form/BaseAutocomplete.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, _sfc_main$1 as a };
//# sourceMappingURL=BaseAutocomplete-8d21f0d1.mjs.map
