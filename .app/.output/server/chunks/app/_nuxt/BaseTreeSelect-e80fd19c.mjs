import { l as _export_sfc, n as useVModel, f as __nuxt_component_2 } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseCheckbox-45d3fdba.mjs';
import { useSSRContext, defineComponent, computed, ref, watch, withAsyncContext, inject, reactive, provide, mergeProps, unref, isRef, withCtx, renderSlot } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseTreeSelect",
  __ssrInlineRender: true,
  props: {
    children: { type: [Array, Function], default: void 0 },
    modelValue: { default: void 0 },
    icons: { default: () => ({
      open: "lucide:minus",
      closed: "lucide:plus",
      item: "",
      pending: ""
    }) },
    treeline: { type: [Boolean, Object], default: false },
    i18n: { default: () => ({
      pending: "pending...",
      empty: "empty"
    }) },
    classes: { default: () => ({
      pendingIcon: "",
      emptyIcon: "",
      treeIcon: "",
      itemIcon: "",
      treeline: "border-muted-300 dark:border-muted-700",
      checkbox: {
        wrapper: "text-primary-500 scale-[0.8] me-1"
      }
    }) },
    level: { default: 1 },
    parent: { default: void 0 }
  },
  emits: ["update:modelValue"],
  async setup(__props, { expose: __expose, emit: __emit }) {
    let __temp, __restore;
    const props = __props;
    const emits = __emit;
    const value = useVModel(props, "modelValue", emits, {
      passive: true
    });
    const defaultIcons = {
      open: "lucide:minus",
      closed: "lucide:plus",
      item: "",
      empty: "",
      pending: ""
    };
    const icons = computed(() => {
      if (!props.icons)
        return defaultIcons;
      return {
        ...defaultIcons,
        ...props.icons
      };
    });
    const defaultTreeline = {
      offset: "0.625rem",
      minLevel: 1
    };
    const treeline = computed(() => {
      if (props.treeline === false)
        return false;
      if (props.treeline === true)
        return defaultTreeline;
      return {
        ...defaultTreeline,
        ...props.treeline
      };
    });
    const defaultCheckboxClasses = {
      wrapper: "text-primary-500 scale-[0.8] me-1"
    };
    const checkboxClasses = computed(() => {
      if (!props.classes?.checkbox)
        return defaultCheckboxClasses;
      return {
        ...defaultCheckboxClasses,
        ...props.classes.checkbox
      };
    });
    const treeState = useTreeState();
    const subtreeState = computed(
      () => props.children ? treeState?.treeMap.get(props.children) : void 0
    );
    const openMap = ref(getDefaultOpenMap(props.children));
    const _children = computed(
      () => subtreeState.value?.tree
    );
    watch(() => props.children, initChildren);
    __expose({
      /**
       * The loaded tree items from the `children` prop.
       */
      tree: _children,
      /**
       * Force the component to load the tree from the `children` prop.
       */
      loadTree,
      /**
       * Returns all nodes from a tree source
       */
      getChildren,
      /**
       * Returns the children from a node.
       */
      getNodeChildren,
      /**
       * Check if all sub-nodes are selected from a node.
       */
      areAllChildSelected,
      /**
       * Check if some sub-nodes are selected from a node.
       */
      areSomeChildSelected,
      /**
       * Select all sub-nodes from a node.
       */
      selectAllNode,
      /**
       * Unselect all leaf nodes from a node.
       */
      unselectAllNode,
      /**
       * Is a node in undeterminate state. (some children are selected / children not loaded)
       */
      isUndeterminate,
      /**
       * Is a node loaded.
       */
      isNodeLoaded,
      /**
       * Invert the selection state from a node.
       */
      toggleNodeSelection,
      /**
       * Invert the selection state.
       */
      toggleChildrenSelection,
      /**
       * Select all nodes.
       */
      selectAllChildren,
      /**
       * Unselect all nodes.
       */
      unselectAllChildren
    });
    [__temp, __restore] = withAsyncContext(() => initChildren()), await __temp, __restore();
    async function initChildren() {
      await loadTree(props.children);
      openMap.value = getDefaultOpenMap(props.children);
    }
    function useTreeState() {
      const treeSymbol = Symbol("tree");
      let treeState2 = inject(treeSymbol, null);
      if (!treeState2) {
        treeState2 = reactive({
          treeMap: /* @__PURE__ */ new WeakMap()
        });
        provide(treeSymbol, treeState2);
      }
      if (props.children && !treeState2.treeMap.has(props.children)) {
        treeState2.treeMap.set(props.children, {
          tree: [],
          pending: false,
          loaded: false
        });
      }
      return treeState2;
    }
    function getDefaultOpenMap(source) {
      const map = {};
      const children = getChildren(source);
      if (!children)
        return map;
      for (const index in children) {
        const item = children[index];
        if ("open" in item && item.open !== void 0) {
          map[index] = item.open;
        }
      }
      return map;
    }
    async function loadTree(source) {
      if (!source)
        return;
      const _subtreeState = treeState?.treeMap.get(source);
      if (!_subtreeState) {
        return;
      }
      if (typeof source === "function") {
        _subtreeState.pending = true;
        try {
          _subtreeState.tree = await source();
        } finally {
          _subtreeState.pending = false;
          _subtreeState.loaded = true;
        }
        return;
      }
      _subtreeState.tree = source ?? [];
      _subtreeState.loaded = true;
    }
    function isNodeLoaded(node) {
      if (!node)
        return false;
      if ("children" in node) {
        if (typeof node.children === "function") {
          return treeState?.treeMap.get(node.children)?.loaded ?? false;
        }
        return true;
      }
      return true;
    }
    function getChildren(tree) {
      if (!tree)
        return;
      return treeState?.treeMap.has(tree) ? treeState?.treeMap.get(tree)?.tree : Array.isArray(tree) ? tree : void 0;
    }
    function getNodeChildren(node) {
      if (!node)
        return;
      if (!("children" in node) || !node.children)
        return;
      return getChildren(node.children);
    }
    function areAllChildSelected(node) {
      const _value = value.value;
      if (!_value)
        return false;
      if (!node)
        return false;
      const children = getNodeChildren(node);
      if (!children) {
        return false;
      }
      return isNodeLoaded(node) && children.every((child) => {
        if (!("children" in child))
          return _value.includes(child);
        const subchildren = getNodeChildren(child);
        if (subchildren && isNodeLoaded(child)) {
          return areAllChildSelected(child);
        }
        return false;
      });
    }
    function areSomeChildSelected(node) {
      const _value = value.value;
      if (!_value)
        return false;
      if (!node)
        return false;
      const children = getNodeChildren(node);
      if (!children) {
        return false;
      }
      return isNodeLoaded(node) && children.some((child) => {
        if (!("children" in child))
          return _value.includes(child);
        const subchildren = getNodeChildren(child);
        if (subchildren && isNodeLoaded(child)) {
          return areSomeChildSelected(child);
        }
        return false;
      });
    }
    function isUndeterminate(node) {
      if (!node)
        return false;
      if (!isNodeLoaded(node))
        return false;
      return areSomeChildSelected(node) && !areAllChildSelected(node);
    }
    function selectAllNode(node) {
      const _value = value.value;
      if (!_value)
        return;
      if (!node)
        return;
      if (!("children" in node) || !node.children) {
        const idx = _value.indexOf(node);
        if (idx === -1) {
          _value.push(node);
        }
        return;
      }
      if (!isNodeLoaded(node))
        return;
      const children = getNodeChildren(node);
      if (!children) {
        return;
      }
      for (const child of children) {
        if ("children" in child) {
          selectAllNode(child);
        } else {
          const idx = _value.indexOf(child);
          if (idx === -1) {
            _value.push(child);
          }
        }
      }
    }
    function selectAllChildren(tree) {
      const children = tree || _children.value;
      if (!children)
        return;
      for (const child of children) {
        selectAllNode(child);
      }
    }
    function unselectAllNode(node) {
      const _value = value.value;
      if (!_value)
        return;
      if (!node)
        return;
      if (!("children" in node) || !node.children) {
        const idx = _value.indexOf(node);
        if (idx >= 0) {
          _value.splice(idx, 1);
        }
        return;
      }
      if (!isNodeLoaded(node))
        return;
      const children = getNodeChildren(node);
      if (!children) {
        return;
      }
      for (const child of children) {
        if ("children" in child) {
          unselectAllNode(child);
        } else {
          const idx = _value.indexOf(child);
          if (idx >= 0) {
            _value.splice(idx, 1);
          }
        }
      }
    }
    function unselectAllChildren(tree) {
      const children = tree || _children.value;
      if (!children)
        return;
      for (const child of children) {
        unselectAllNode(child);
      }
    }
    function toggleNodeSelection(node, event) {
      const _value = value.value;
      if (!_value)
        return;
      if (!node)
        return;
      if ("children" in node) {
        if (!isNodeLoaded(node)) {
          event?.preventDefault();
          return;
        }
        const children = getNodeChildren(node);
        if (!children || children.length === 0) {
          event?.preventDefault();
          return;
        }
        if (areAllChildSelected(node)) {
          unselectAllNode(node);
        } else if (children.length > 0) {
          selectAllNode(node);
        }
        return;
      }
      const idx = _value.indexOf(node);
      if (idx >= 0) {
        _value.splice(idx, 1);
      } else {
        _value.push(node);
      }
    }
    function toggleChildrenSelection(tree, event) {
      const children = tree || _children.value;
      if (!children)
        return;
      for (const child of children) {
        if ("children" in child) {
          toggleChildrenSelection(getNodeChildren(child), event);
        } else {
          toggleNodeSelection(child, event);
        }
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      const _component_BaseCheckbox = _sfc_main$1;
      const _component_BaseTreeSelect = __nuxt_component_0;
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "treeview relative w-full" }, _attrs))} data-v-40c6cb26>`);
      if (unref(subtreeState)?.pending) {
        _push(`<li data-v-40c6cb26>`);
        ssrRenderSlot(_ctx.$slots, "pending", {
          level: _ctx.level,
          parent: _ctx.parent
        }, () => {
          _push(`<div class="text-muted-400 dark:text-muted-600 relative z-10 flex items-center gap-1 py-2 font-sans text-sm" data-v-40c6cb26>`);
          ssrRenderSlot(_ctx.$slots, "pending-icon", {
            level: _ctx.level,
            parent: _ctx.parent
          }, () => {
            _push(`<span class="text-muted-400 flex h-5 w-5 items-center justify-center" data-v-40c6cb26>`);
            if (unref(icons).pending) {
              _push(ssrRenderComponent(_component_Icon, {
                name: unref(icons).pending,
                class: ["h-4 w-4", props.classes?.pendingIcon]
              }, null, _parent));
            } else {
              _push(`<!---->`);
            }
            _push(`</span>`);
          }, _push, _parent);
          ssrRenderSlot(_ctx.$slots, "pending-label", {
            level: _ctx.level,
            parent: _ctx.parent
          }, () => {
            _push(`<span data-v-40c6cb26>${ssrInterpolate(props.i18n.pending)}</span>`);
          }, _push, _parent);
          _push(`</div>`);
        }, _push, _parent);
        _push(`</li>`);
      } else if (!unref(subtreeState)?.tree?.length) {
        _push(`<li data-v-40c6cb26>`);
        ssrRenderSlot(_ctx.$slots, "empty", {
          level: _ctx.level,
          parent: _ctx.parent
        }, () => {
          _push(`<div class="text-muted-400 dark:text-muted-600 relative z-10 flex items-center gap-1 py-2 font-sans text-sm" data-v-40c6cb26>`);
          ssrRenderSlot(_ctx.$slots, "empty-icon", {
            level: _ctx.level,
            parent: _ctx.parent
          }, () => {
            _push(`<span class="text-muted-400 flex h-5 w-5 items-center justify-center" data-v-40c6cb26>`);
            if (unref(icons).empty) {
              _push(ssrRenderComponent(_component_Icon, {
                name: unref(icons).empty,
                class: [props.classes?.emptyIcon, "h-4 w-4"]
              }, null, _parent));
            } else {
              _push(`<!---->`);
            }
            _push(`</span>`);
          }, _push, _parent);
          ssrRenderSlot(_ctx.$slots, "empty-label", {
            level: _ctx.level,
            parent: _ctx.parent
          }, () => {
            _push(`<span data-v-40c6cb26>${ssrInterpolate(props.i18n.empty)}</span>`);
          }, _push, _parent);
          _push(`</div>`);
        }, _push, _parent);
        _push(`</li>`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(unref(subtreeState).tree, (child, index) => {
          _push(`<li data-v-40c6cb26>`);
          ssrRenderSlot(_ctx.$slots, "item", {
            index,
            level: _ctx.level,
            child,
            parent: _ctx.parent,
            toggle: () => unref(openMap)[index] = !unref(openMap)[index],
            open: unref(openMap)[index]
          }, () => {
            _push(`<div class="text-muted-700 dark:text-muted-400 relative z-10 flex items-center gap-1 py-2 font-sans text-sm" data-v-40c6cb26>`);
            if ("children" in child) {
              _push(`<button class="text-muted-400 nui-focus me-1 flex h-5 w-5 items-center justify-center rounded" data-v-40c6cb26>`);
              if (unref(openMap)[index] && unref(icons).open) {
                _push(ssrRenderComponent(_component_Icon, {
                  name: unref(icons).open,
                  class: ["h-4 w-4", props.classes?.treeIcon]
                }, null, _parent));
              } else if (!unref(openMap)[index] && unref(icons).closed) {
                _push(ssrRenderComponent(_component_Icon, {
                  name: unref(icons).closed,
                  class: ["h-4 w-4", props.classes?.treeIcon]
                }, null, _parent));
              } else {
                _push(`<!---->`);
              }
              _push(`</button>`);
            } else {
              ssrRenderSlot(_ctx.$slots, "item-icon", {
                index,
                level: _ctx.level,
                child,
                parent: _ctx.parent,
                toggle: (event) => {
                  if ("children" in child) {
                    unref(openMap)[index] = !unref(openMap)[index];
                    return;
                  }
                  toggleNodeSelection(child, event);
                },
                open: unref(openMap)[index]
              }, () => {
                _push(`<span class="text-muted-400 me-1 flex h-5 w-5 items-center justify-center" data-v-40c6cb26>`);
                if (unref(icons).item) {
                  _push(ssrRenderComponent(_component_Icon, {
                    name: unref(icons).item,
                    class: [props.classes?.itemIcon, "h-4 w-4"]
                  }, null, _parent));
                } else {
                  _push(`<!---->`);
                }
                _push(`</span>`);
              }, _push, _parent);
            }
            if (unref(value) !== void 0) {
              ssrRenderSlot(_ctx.$slots, "item-select", {
                index,
                level: _ctx.level,
                child,
                parent: _ctx.parent,
                toggle: (event) => {
                  if ("children" in child) {
                    unref(openMap)[index] = !unref(openMap)[index];
                    return;
                  }
                  toggleNodeSelection(child, event);
                },
                open: unref(openMap)[index]
              }, () => {
                if ("children" in child) {
                  _push(ssrRenderComponent(_component_BaseCheckbox, {
                    "model-value": isNodeLoaded(child) && getNodeChildren(child)?.length && areAllChildSelected(child),
                    indeterminate: isUndeterminate(child),
                    disabled: unref(subtreeState).pending || !isNodeLoaded(child) || getNodeChildren(child)?.length === 0,
                    classes: unref(checkboxClasses),
                    onClick: (event) => toggleNodeSelection(child, event)
                  }, null, _parent));
                } else {
                  _push(ssrRenderComponent(_component_BaseCheckbox, {
                    modelValue: unref(value),
                    "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
                    disabled: unref(subtreeState).pending,
                    value: child,
                    classes: unref(checkboxClasses),
                    onClick: (event) => toggleNodeSelection(child, event)
                  }, null, _parent));
                }
              }, _push, _parent);
            } else {
              _push(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "item-label", {
              index,
              level: _ctx.level,
              child,
              parent: _ctx.parent,
              toggle: (event) => {
                if ("children" in child) {
                  unref(openMap)[index] = !unref(openMap)[index];
                  return;
                }
                toggleNodeSelection(child, event);
              },
              open: unref(openMap)[index]
            }, () => {
              _push(`<span data-v-40c6cb26>${ssrInterpolate(child.item)}</span>`);
            }, _push, _parent);
            _push(`</div>`);
          }, _push, _parent);
          if ("children" in child) {
            _push(`<!--[-->`);
            if (index in unref(openMap)) {
              _push(`<div style="${ssrRenderStyle(unref(openMap)[index] ? null : { display: "none" })}" class="relative" data-v-40c6cb26>`);
              if (unref(treeline)) {
                _push(`<div class="${ssrRenderClass([_ctx.classes?.treeline, "absolute top-0 h-full w-[1px] border-l"])}" style="${ssrRenderStyle({
                  left: unref(treeline).offset
                })}" data-v-40c6cb26></div>`);
              } else {
                _push(`<!---->`);
              }
              ssrRenderSlot(_ctx.$slots, "children", { index, level: _ctx.level, child, parent: _ctx.parent }, () => {
                _push(ssrRenderComponent(_component_BaseTreeSelect, {
                  modelValue: unref(value),
                  "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
                  level: _ctx.level + 1,
                  children: child.children,
                  i18n: props.i18n,
                  parent: child,
                  icons: props.icons,
                  treeline: props.treeline,
                  classes: props.classes
                }, {
                  pending: withCtx((ctx, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      ssrRenderSlot(_ctx.$slots, "pending", ctx, null, _push2, _parent2, _scopeId);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, "pending", ctx, void 0, true)
                      ];
                    }
                  }),
                  "pending-label": withCtx((ctx, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      ssrRenderSlot(_ctx.$slots, "pending-label", ctx, null, _push2, _parent2, _scopeId);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, "pending-label", ctx, void 0, true)
                      ];
                    }
                  }),
                  "pending-icon": withCtx((ctx, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      ssrRenderSlot(_ctx.$slots, "pending-icon", ctx, null, _push2, _parent2, _scopeId);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, "pending-icon", ctx, void 0, true)
                      ];
                    }
                  }),
                  empty: withCtx((ctx, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      ssrRenderSlot(_ctx.$slots, "empty", ctx, null, _push2, _parent2, _scopeId);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, "empty", ctx, void 0, true)
                      ];
                    }
                  }),
                  "empty-label": withCtx((ctx, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      ssrRenderSlot(_ctx.$slots, "empty-label", ctx, null, _push2, _parent2, _scopeId);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, "empty-label", ctx, void 0, true)
                      ];
                    }
                  }),
                  "empty-icon": withCtx((ctx, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      ssrRenderSlot(_ctx.$slots, "empty-icon", ctx, null, _push2, _parent2, _scopeId);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, "empty-icon", ctx, void 0, true)
                      ];
                    }
                  }),
                  item: withCtx((ctx, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      ssrRenderSlot(_ctx.$slots, "item", ctx, null, _push2, _parent2, _scopeId);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, "item", ctx, void 0, true)
                      ];
                    }
                  }),
                  "item-select": withCtx((ctx, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      ssrRenderSlot(_ctx.$slots, "item-select", ctx, null, _push2, _parent2, _scopeId);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, "item-select", ctx, void 0, true)
                      ];
                    }
                  }),
                  "item-icon": withCtx((ctx, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      ssrRenderSlot(_ctx.$slots, "item-icon", ctx, null, _push2, _parent2, _scopeId);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, "item-icon", ctx, void 0, true)
                      ];
                    }
                  }),
                  "item-label": withCtx((ctx, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      ssrRenderSlot(_ctx.$slots, "item-label", ctx, null, _push2, _parent2, _scopeId);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, "item-label", ctx, void 0, true)
                      ];
                    }
                  }),
                  children: withCtx((ctx, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      ssrRenderSlot(_ctx.$slots, "children", ctx, null, _push2, _parent2, _scopeId);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, "children", ctx, void 0, true)
                      ];
                    }
                  }),
                  _: 2
                }, _parent));
              }, _push, _parent);
              _push(`</div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`</li>`);
        });
        _push(`<!--]-->`);
      }
      _push(`</ul>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/form/BaseTreeSelect.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-40c6cb26"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=BaseTreeSelect-e80fd19c.mjs.map
