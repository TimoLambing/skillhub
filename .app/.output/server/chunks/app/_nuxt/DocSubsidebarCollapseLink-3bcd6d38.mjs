import { J as useRoute, a4 as useSidebar, C as useTailwindBreakpoints, f as __nuxt_component_2, e as __nuxt_component_0$5 } from '../server.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
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
  __name: "DocSubsidebarCollapseLink",
  __ssrInlineRender: true,
  props: {
    link: {}
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const isOpen = ref(true);
    const { toggle } = useSidebar();
    const { xl } = useTailwindBreakpoints();
    function onLinkClick() {
      if (xl.value) {
        return;
      }
      toggle();
    }
    ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      const _component_NuxtLink = __nuxt_component_0$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "group" }, _attrs))}><button type="button" class="nui-focus group mb-1 mt-8 flex min-h-[1.5rem] w-full items-center justify-between focus-within:outline-0 focus-visible:outline-1"><span class="text-muted-500 dark:text-muted-100 mt-1 font-sans text-[.7rem] font-medium uppercase">${ssrInterpolate(props.link?.title)}</span><div class="text-muted-400 group-hover:text-primary-400 group-focus-visible:text-primary-400 dark:text-muted-500">`);
      if (unref(isOpen)) {
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi:minus-box-outline",
          class: "h-4 w-4"
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi:plus-box-outline",
          class: "h-4 w-4"
        }, null, _parent));
      }
      _push(`</div></button><ul class="${ssrRenderClass([{
        "max-h-0 overflow-hidden opacity-0 group-focus-within:max-h-max group-focus-within:overflow-visible group-focus-within:opacity-100": !unref(isOpen),
        "max-h-max opacity-100": unref(isOpen)
      }, "transition-all duration-150"])}"><!--[-->`);
      ssrRenderList(props.link.children, (child) => {
        _push(`<!--[-->`);
        if (!child.children) {
          _push(`<li class="mb-1 flex min-h-[1.5rem] w-full items-center">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: child._path,
            class: [[unref(route).path === child._path && "text-primary-500"], "nui-focus text-muted-400 hover:text-primary-500 focus-visible:text-primary-500 group flex w-full flex-row items-center transition-colors duration-300 focus-within:outline-0 focus-visible:outline-1"],
            "exact-active-class": "text-primary-500",
            onClick: onLinkClick
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="font-sans text-[0.8rem]"${_scopeId}>${ssrInterpolate(child?.title)}</span>`);
              } else {
                return [
                  createVNode("span", { class: "font-sans text-[0.8rem]" }, toDisplayString(child?.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        } else {
          _push(`<li class="mt-2"><span class="text-muted-500 dark:text-muted-100 mb-2 mt-6 block font-sans text-[.6rem] font-semibold uppercase tracking-wider">${ssrInterpolate(child?.title)}</span><ul><!--[-->`);
          ssrRenderList(child.children, (nested) => {
            _push(`<li class="mb-1 flex min-h-[1.5rem] w-full items-center">`);
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: nested._path,
              class: [[unref(route).path === nested._path && "text-primary-500"], "nui-focus text-muted-400 hover:text-primary-500 focus-visible:text-primary-500 group flex w-full flex-row items-center transition-colors duration-300 focus-within:outline-0 focus-visible:outline-1"],
              "exact-active-class": "text-primary-500",
              onClick: onLinkClick
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<span class="font-sans text-[0.85rem]"${_scopeId}>${ssrInterpolate(nested?.title)}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "font-sans text-[0.85rem]" }, toDisplayString(nested?.title), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</li>`);
          });
          _push(`<!--]--></ul></li>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/components/global/DocSubsidebarCollapseLink.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=DocSubsidebarCollapseLink-3bcd6d38.mjs.map
