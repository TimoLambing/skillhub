import { useSSRContext, defineComponent, mergeProps, withCtx, createVNode, toDisplayString, ref, computed, watchEffect, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { a4 as useSidebar, C as useTailwindBreakpoints, J as useRoute, l as _export_sfc, e as __nuxt_component_0$5, f as __nuxt_component_2 } from '../server.mjs';

const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<li${ssrRenderAttrs(mergeProps({ class: "border-muted-200 dark:border-muted-700 my-3 h-px w-full border-t" }, _attrs))}></li>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TairoSubsidebarMenuDivider.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TairoSubsidebarMenuLink",
  __ssrInlineRender: true,
  props: {
    name: {},
    to: {}
  },
  setup(__props) {
    const props = __props;
    const { toggle } = useSidebar();
    const { xl } = useTailwindBreakpoints();
    function onClick() {
      console.log("onClick", props.name, xl.value);
      if (xl.value) {
        return;
      }
      toggle();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$5;
      _push(`<li${ssrRenderAttrs(mergeProps({ class: "mb-1 flex min-h-[2rem] items-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: props.to,
        class: "nui-focus text-muted-400 hover:text-primary-500 flex w-full items-center transition-colors duration-300",
        onClick
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="font-sans text-sm"${_scopeId}>${ssrInterpolate(props.name)}</span>`);
          } else {
            return [
              createVNode("span", { class: "font-sans text-sm" }, toDisplayString(props.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TairoSubsidebarMenuLink.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TairoSubsidebarMenuCollapseLinks",
  __ssrInlineRender: true,
  props: {
    name: {},
    children: {}
  },
  setup(__props) {
    const props = __props;
    const open = ref(false);
    const route = useRoute();
    ref();
    const hasActiveChild = computed(() => {
      return props.children.some((item) => {
        if (item.exact === true) {
          return route.path === item.to;
        }
        return route.path.startsWith(item.to);
      });
    });
    watchEffect(() => {
      if (hasActiveChild.value) {
        open.value = true;
      }
    });
    function isChildActive(link) {
      return link.exact && route.path === link.to || !link.exact && route.path.startsWith(link.to);
    }
    const { toggle } = useSidebar();
    const { xl } = useTailwindBreakpoints();
    function onLinkClick() {
      if (xl.value) {
        return;
      }
      toggle();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      const _component_NuxtLink = __nuxt_component_0$5;
      _push(`<li${ssrRenderAttrs(mergeProps({ class: "group mb-1 min-h-[2rem]" }, _attrs))}><a href="#" class="nui-focus relative top-0.5 flex items-center"><span class="text-muted-400 group-hover:text-primary-500 relative inline-flex items-center gap-2 font-sans text-sm transition-colors duration-300">`);
      if (unref(hasActiveChild)) {
        _push(`<span class="bg-primary-500 absolute -start-3 top-2 h-1 w-1 rounded-full"></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span>${ssrInterpolate(props.name)}</span></span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "feather:chevron-down",
        class: ["text-muted-400 ms-auto block h-4 w-4 transition-transform duration-300", {
          "group-focus-within:rotate-180": !unref(open),
          "rotate-180": unref(open)
        }]
      }, null, _parent));
      _push(`</a><div class="${ssrRenderClass([{
        "max-h-0 overflow-hidden opacity-0 group-focus-within:max-h-max group-focus-within:overflow-visible group-focus-within:opacity-100": !unref(open),
        "max-h-max opacity-100": unref(open)
      }, "transition-all duration-150"])}">`);
      if (props?.children) {
        _push(`<ul class="py-2"><!--[-->`);
        ssrRenderList(props.children, (link) => {
          _push(`<li class="flex h-8 w-full items-center">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: link.to,
            class: [{
              "text-primary-500": isChildActive(link)
            }, "nui-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"],
            onClick: onLinkClick
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: link.icon,
                  class: "me-2 h-5 w-5"
                }, null, _parent2, _scopeId));
                _push2(`<span class="font-sans text-xs"${_scopeId}>${ssrInterpolate(link.name)}</span>`);
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: link.icon,
                    class: "me-2 h-5 w-5"
                  }, null, 8, ["name"]),
                  createVNode("span", { class: "font-sans text-xs" }, toDisplayString(link.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></li>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TairoSubsidebarMenuCollapseLinks.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TairoSubsidebarMenu",
  __ssrInlineRender: true,
  props: {
    navigation: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoSubsidebarMenuDivider = __nuxt_component_0;
      const _component_TairoSubsidebarMenuLink = _sfc_main$2;
      const _component_TairoSubsidebarMenuCollapseLinks = _sfc_main$1;
      _push(`<ul${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(props.navigation, (group, index) => {
        _push(`<!--[-->`);
        if ("divider" in group) {
          _push(ssrRenderComponent(_component_TairoSubsidebarMenuDivider, {
            key: `${index}-divider`
          }, null, _parent));
        } else if ("to" in group) {
          _push(ssrRenderComponent(_component_TairoSubsidebarMenuLink, mergeProps(group, {
            key: `${index}-link`
          }), null, _parent));
        } else if ("children" in group) {
          _push(ssrRenderComponent(_component_TairoSubsidebarMenuCollapseLinks, mergeProps(group, {
            key: `${index}-collapse`
          }), null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TairoSubsidebarMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=TairoSubsidebarMenu-a3504e6d.mjs.map
