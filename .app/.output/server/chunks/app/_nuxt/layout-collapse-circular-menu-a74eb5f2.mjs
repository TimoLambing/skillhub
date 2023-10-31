import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { l as _export_sfc, e as __nuxt_component_0$5 } from '../server.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import 'vue-bundle-renderer/runtime';
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
import 'devalue';
import '@unhead/ssr';
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

const _imports_0 = "" + publicAssetsURL("img/apps/tairo-layout-collapse-circular-menu.png");
const _imports_1 = "" + publicAssetsURL("img/apps/tairo-layout-collapse-circular-menu-dark.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$5;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#",
    class: "hover:[&>img]:!border-primary-500"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="border-muted-200 hover:shadow-muted-300/30 block w-full rounded-lg border transition-all duration-300 hover:shadow-xl dark:hidden"${ssrRenderAttr("src", _imports_0)} alt="Tairo circular menu"${_scopeId}><img class="border-muted-700 hover:shadow-muted-800/30 hidden w-full rounded-lg border transition-all duration-300 hover:shadow-xl dark:block"${ssrRenderAttr("src", _imports_1)} alt="Tairo circular menu dark"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            class: "border-muted-200 hover:shadow-muted-300/30 block w-full rounded-lg border transition-all duration-300 hover:shadow-xl dark:hidden",
            src: _imports_0,
            alt: "Tairo circular menu"
          }),
          createVNode("img", {
            class: "border-muted-700 hover:shadow-muted-800/30 hidden w-full rounded-lg border transition-all duration-300 hover:shadow-xl dark:block",
            src: _imports_1,
            alt: "Tairo circular menu dark"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/tairo/layout-collapse-circular-menu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const layoutCollapseCircularMenu = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { layoutCollapseCircularMenu as default };
//# sourceMappingURL=layout-collapse-circular-menu-a74eb5f2.mjs.map
