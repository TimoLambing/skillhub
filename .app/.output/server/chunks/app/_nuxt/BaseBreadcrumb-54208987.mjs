import { _ as _sfc_main$1, a as _sfc_main$2 } from './BaseDropdownItem-864908ca.mjs';
import { J as useRoute, u as useRouter, e as __nuxt_component_0$5, f as __nuxt_component_2 } from '../server.mjs';
import { defineComponent, computed, mergeProps, withCtx, unref, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseBreadcrumb",
  __ssrInlineRender: true,
  props: {
    items: {}
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const router = useRouter();
    const items = computed(() => {
      if (props.items) {
        return props.items;
      }
      const breadcrumbItems = [];
      const indexRoute = router.resolve("/");
      if (indexRoute.meta.breadcrumb === false)
        ;
      else if (indexRoute.meta.breadcrumb) {
        const breadcrumbItem = indexRoute.meta.breadcrumb;
        breadcrumbItems.push({
          to: indexRoute.path,
          ...breadcrumbItem
        });
      } else if (indexRoute.meta.title) {
        breadcrumbItems.push({
          label: indexRoute.meta.title,
          to: indexRoute.path
        });
      }
      for (const matched of route.matched) {
        if (matched.meta.breadcrumb === false)
          ;
        else if (matched.meta.breadcrumb) {
          const breadcrumbItem = matched.meta.breadcrumb;
          breadcrumbItems.push({
            to: matched.path,
            ...breadcrumbItem
          });
        } else if (matched.meta.title) {
          breadcrumbItems.push({
            label: matched.meta.title,
            to: matched.path
          });
        }
      }
      return breadcrumbItems;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseDropdown = _sfc_main$1;
      const _component_BaseDropdownItem = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_Icon = __nuxt_component_2;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "nui-breadcrumb" }, _attrs))}><ul class="nui-breadcrumb-list"><li class="nui-breadcrumb-item-mobile">`);
      _push(ssrRenderComponent(_component_BaseDropdown, {
        flavor: "context",
        compact: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(items).slice(0, unref(items).length - 1), (item, index) => {
              _push2(ssrRenderComponent(_component_BaseDropdownItem, {
                key: index,
                to: item.to,
                class: "flex items-center gap-x-1"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.label)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.label), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(items).slice(0, unref(items).length - 1), (item, index) => {
                return openBlock(), createBlock(_component_BaseDropdownItem, {
                  key: index,
                  to: item.to,
                  class: "flex items-center gap-x-1"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.label), 1)
                  ]),
                  _: 2
                }, 1032, ["to"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><!--[-->`);
      ssrRenderList(unref(items), (item, index) => {
        _push(`<!--[--><li class="${ssrRenderClass([index !== unref(items).length - 1 ? "hidden sm:flex" : "flex", "nui-breadcrumb-item"])}">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item.to,
          class: ["nui-item-inner", [item.to && "nui-has-link"]]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (item.icon) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: item.icon,
                  class: "nui-item-icon"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span class="${ssrRenderClass([item.hideLabel && "sr-only"])}"${_scopeId}>${ssrInterpolate(item.label)}</span>`);
            } else {
              return [
                item.icon ? (openBlock(), createBlock(_component_Icon, {
                  key: 0,
                  name: item.icon,
                  class: "nui-item-icon"
                }, null, 8, ["name"])) : createCommentVNode("", true),
                createVNode("span", {
                  class: [item.hideLabel && "sr-only"]
                }, toDisplayString(item.label), 3)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li><li class="nui-breadcrumb-item"><div class="nui-item-inner">`);
        if (index < unref(items).length - 1) {
          _push(`<span class="nui-item-text">`);
          ssrRenderSlot(_ctx.$slots, "default", {}, () => {
            _push(`\xB7`);
          }, _push, _parent);
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></li><!--]-->`);
      });
      _push(`<!--]--></ul></nav>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/base/BaseBreadcrumb.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=BaseBreadcrumb-54208987.mjs.map
