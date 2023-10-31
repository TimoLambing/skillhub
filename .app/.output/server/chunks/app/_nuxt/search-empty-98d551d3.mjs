import { g as _sfc_main$z, i as _sfc_main$D, Q as _sfc_main$3 } from '../server.mjs';
import { defineComponent, ref, mergeProps, unref, isRef, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1 } from './placeholder-search-4-dark-8ea6a3c1.mjs';
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
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "search-empty",
  __ssrInlineRender: true,
  setup(__props) {
    const searchTerms = ref("Ice cream pizza");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseInput = _sfc_main$z;
      const _component_BaseText = _sfc_main$D;
      const _component_BasePlaceholderPage = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto w-full max-w-5xl" }, _attrs))}><div class="mx-auto mt-6 flex w-full max-w-sm items-center justify-center">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: unref(searchTerms),
        "onUpdate:modelValue": ($event) => isRef(searchTerms) ? searchTerms.value = $event : null,
        icon: "lucide:search",
        placeholder: "Search...",
        shape: "full",
        classes: {
          wrapper: "w-full",
          input: "h-12 !ps-12",
          icon: "h-12 w-12 [& > svg]:!w-7 [& > svg]:!h-7"
        }
      }, null, _parent));
      _push(`</div><div class="mb-12 mt-2 text-center">`);
      _push(ssrRenderComponent(_component_BaseText, {
        size: "sm",
        class: "text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`0 results for &quot;Ice cream pizza&quot;`);
          } else {
            return [
              createTextVNode('0 results for "Ice cream pizza"')
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_BasePlaceholderPage, {
        title: "No matching results",
        subtitle: "Looks like we couldn't find any matching results for your search terms. Try other search terms."
      }, {
        image: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="block dark:hidden"${ssrRenderAttr("src", _imports_0)} alt="Placeholder image"${_scopeId}><img class="hidden dark:block"${ssrRenderAttr("src", _imports_1)} alt="Placeholder image"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "block dark:hidden",
                src: _imports_0,
                alt: "Placeholder image"
              }),
              createVNode("img", {
                class: "hidden dark:block",
                src: _imports_1,
                alt: "Placeholder image"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/search-empty.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=search-empty-98d551d3.mjs.map
