import { _ as __nuxt_component_0, a as _sfc_main$1 } from './TairoSubsidebarHeader-5f95c48d.mjs';
import { J as useRoute, a4 as useSidebar, C as useTailwindBreakpoints, K as useAsyncData, L as queryContent, e as __nuxt_component_0$5 } from '../server.mjs';
import _sfc_main$2 from './DocSubsidebarCollapseLink-3bcd6d38.mjs';
import { defineComponent, withAsyncContext, computed, withCtx, createVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { f as fetchContentNavigation } from './navigation-9c90a93b.mjs';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'shiki-es';
import 'consola/core';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'hast-util-to-string';
import 'github-slugger';
import 'detab';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'unist-util-visit';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@vee-validate/zod';
import 'vee-validate';
import 'zod';
import '@headlessui/vue';
import '@vue/shared';
import 'chroma-js';
import 'tailwindcss/colors.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DocSubsidebarDocumentation",
  __ssrInlineRender: true,
  emits: ["close"],
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { toggle } = useSidebar();
    const { xl } = useTailwindBreakpoints();
    function onLinkClick() {
      if (xl.value) {
        return;
      }
      toggle();
    }
    const { data: navigation } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "navigation",
      () => fetchContentNavigation(queryContent("/documentation"))
    )), __temp = await __temp, __restore(), __temp);
    const docNav = computed(
      () => navigation.value?.find((n) => n._path === "/documentation")?.children
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoSubsidebar = __nuxt_component_0;
      const _component_TairoSubsidebarHeader = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_DocSubsidebarCollapseLink = _sfc_main$2;
      _push(ssrRenderComponent(_component_TairoSubsidebar, _attrs, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TairoSubsidebarHeader, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TairoSubsidebarHeader)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="pt-2"${_scopeId}><!--[-->`);
            ssrRenderList(unref(docNav), (link) => {
              _push2(`<!--[-->`);
              if (!link.children) {
                _push2(`<div class="mb-1 flex min-h-[1.5rem] w-full items-center"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: link._path,
                  class: [[unref(route).path === link._path && "text-primary-500"], "nui-focus text-muted-400 hover:text-primary-500 focus-visible:text-primary-500 group flex w-full flex-row items-center transition-colors duration-300 focus-within:outline-0 focus-visible:outline-1"],
                  "exact-active-class": "text-primary-500",
                  onClick: onLinkClick
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span class="font-sans text-[0.85rem]"${_scopeId2}>${ssrInterpolate(link?.title)}</span>`);
                    } else {
                      return [
                        createVNode("span", { class: "font-sans text-[0.85rem]" }, toDisplayString(link?.title), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<div${_scopeId}>`);
                _push2(ssrRenderComponent(_component_DocSubsidebarCollapseLink, { link }, null, _parent2, _scopeId));
                _push2(`</div>`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "pt-2" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(docNav), (link) => {
                  return openBlock(), createBlock(Fragment, {
                    key: link?._path
                  }, [
                    !link.children ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mb-1 flex min-h-[1.5rem] w-full items-center"
                    }, [
                      createVNode(_component_NuxtLink, {
                        to: link._path,
                        class: [[unref(route).path === link._path && "text-primary-500"], "nui-focus text-muted-400 hover:text-primary-500 focus-visible:text-primary-500 group flex w-full flex-row items-center transition-colors duration-300 focus-within:outline-0 focus-visible:outline-1"],
                        "exact-active-class": "text-primary-500",
                        onClickPassive: onLinkClick
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "font-sans text-[0.85rem]" }, toDisplayString(link?.title), 1)
                        ]),
                        _: 2
                      }, 1032, ["to", "class"])
                    ])) : (openBlock(), createBlock("div", { key: 1 }, [
                      createVNode(_component_DocSubsidebarCollapseLink, { link }, null, 8, ["link"])
                    ]))
                  ], 64);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/components/global/DocSubsidebarDocumentation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=DocSubsidebarDocumentation-af352d6e.mjs.map
