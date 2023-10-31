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
  _push(`<svg${ssrRenderAttrs(mergeProps({
    version: "1.1",
    id: "a",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 68 68",
    style: { "enable-background": "new 0 0 68 68" },
    "xml:space": "preserve"
  }, _attrs))}><g><g><path class="st0" d="M39.4,40.7C39.3,40.2,39,40,38.5,40H23c-1.5,0-2.9-0.4-4-1.1c-1.2-0.7-2.2-1.6-3.1-2.8
			c-0.9-1.1-1.6-2.4-2.1-3.8c-0.5-1.4-0.8-2.8-0.9-4.2h15.5c0,0.1,0.1,0.2,0.2,0.2c0.2,0.2,0.5,0.4,0.9,0.6c0.4,0.2,0.6,0.3,0.7,0.3
			h14.8c1.7,0,3.1,0.4,4.3,1.3s2.2,1.9,2.9,3.2c0.7,1.3,1.3,2.7,1.7,4.2c0.4,1.5,0.5,2.9,0.5,4.1v0.5c0,1.4-0.3,2.9-0.9,4.6
			c-0.6,1.6-1.4,3.1-2.5,4.5s-2.2,2.5-3.5,3.4c-1.3,0.9-2.7,1.4-4.1,1.4H3.5c0.3-0.5,0.8-1.4,1.6-2.6c0.8-1.2,1.7-2.4,2.6-3.7
			c0.9-1.2,1.7-2.3,2.5-3.3c0.8-1,1.2-1.4,1.4-1.4h26.5c0.8,0,1.2-0.3,1.4-0.7c0.1-0.5,0.2-1,0.2-1.6v-1
			C39.6,41.6,39.6,41.2,39.4,40.7L39.4,40.7z M60.5,18.3c-1.5,1.9-3.2,3.7-5,5.5H13.4c0.5-1.3,1.1-2.6,1.9-3.9
			c0.8-1.3,1.7-2.5,2.8-3.6c1-1.1,2.1-1.9,3.3-2.6c1.2-0.7,2.4-1,3.5-1h39.7C63.4,14.6,62.1,16.5,60.5,18.3L60.5,18.3z"></path></g></g></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/TairoLogo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=TairoLogo-688db51d.mjs.map
