import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { l as _export_sfc } from '../server.mjs';
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap items-end gap-2" }, _attrs))}><div class="bg-primary-50 h-8 w-8 rounded-lg" data-nui-tooltip="bg-primary-50"></div><div class="bg-primary-100 h-8 w-8 rounded-lg" data-nui-tooltip="bg-primary-100"></div><div class="bg-primary-200 h-8 w-8 rounded-lg" data-nui-tooltip="bg-primary-200"></div><div class="bg-primary-300 h-8 w-8 rounded-lg" data-nui-tooltip="bg-primary-300"></div><div class="bg-primary-400 h-8 w-8 rounded-lg" data-nui-tooltip="bg-primary-400"></div><div class="bg-primary-500 h-8 w-8 rounded-lg" data-nui-tooltip="bg-primary-500"></div><div class="bg-primary-600 h-8 w-8 rounded-lg" data-nui-tooltip="bg-primary-600"></div><div class="bg-primary-700 h-8 w-8 rounded-lg" data-nui-tooltip="bg-primary-700"></div><div class="bg-primary-800 h-8 w-8 rounded-lg" data-nui-tooltip="bg-primary-800"></div><div class="bg-primary-900 h-8 w-8 rounded-lg" data-nui-tooltip="bg-primary-900"></div><div class="bg-primary-950 h-8 w-8 rounded-lg" data-nui-tooltip="bg-primary-950"></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/colors/primary-color.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const primaryColor = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { primaryColor as default };
//# sourceMappingURL=primary-color-cf9f08d9.mjs.map
