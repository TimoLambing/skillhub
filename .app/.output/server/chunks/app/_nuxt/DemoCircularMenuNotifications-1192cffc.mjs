import { l as _export_sfc, e as __nuxt_component_0$5, f as __nuxt_component_2 } from '../server.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$5;
  const _component_Icon = __nuxt_component_2;
  _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
    to: "#",
    class: "inline-flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="bg-primary-700 flex h-9 w-9 items-center justify-center rounded-full"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Icon, {
          name: "ph:bell-duotone",
          class: "h-5 w-5 text-white"
        }, null, _parent2, _scopeId));
        _push2(`</span>`);
      } else {
        return [
          createVNode("span", { class: "bg-primary-700 flex h-9 w-9 items-center justify-center rounded-full" }, [
            createVNode(_component_Icon, {
              name: "ph:bell-duotone",
              class: "h-5 w-5 text-white"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/DemoCircularMenuNotifications.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DemoCircularMenuNotifications = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { DemoCircularMenuNotifications as default };
//# sourceMappingURL=DemoCircularMenuNotifications-1192cffc.mjs.map
