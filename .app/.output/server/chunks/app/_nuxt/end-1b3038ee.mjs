import { _ as _sfc_main$1 } from './BaseTabs-22f5542f.mjs';
import { mergeProps, withCtx, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  const _component_BaseTabs = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full max-w-sm" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_BaseTabs, {
    justify: "end",
    "model-value": "team",
    tabs: [
      { label: "Team", value: "team" },
      { label: "Projects", value: "projects" },
      { label: "Tasks", value: "tasks" }
    ]
  }, {
    tab: withCtx(({ activeValue }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (activeValue === "team") {
          _push2(`<p class="font-sans text-sm text-gray-500 dark:text-gray-400"${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. </p>`);
        } else if (activeValue === "projects") {
          _push2(`<p class="font-sans text-sm text-gray-500 dark:text-gray-400"${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete. </p>`);
        } else if (activeValue === "tasks") {
          _push2(`<p class="font-sans text-sm text-gray-500 dark:text-gray-400"${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra. </p>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          activeValue === "team" ? (openBlock(), createBlock("p", {
            key: 0,
            class: "font-sans text-sm text-gray-500 dark:text-gray-400"
          }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. ")) : activeValue === "projects" ? (openBlock(), createBlock("p", {
            key: 1,
            class: "font-sans text-sm text-gray-500 dark:text-gray-400"
          }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete. ")) : activeValue === "tasks" ? (openBlock(), createBlock("p", {
            key: 2,
            class: "font-sans text-sm text-gray-500 dark:text-gray-400"
          }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra. ")) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/tabs/end.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const end = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { end as default };
//# sourceMappingURL=end-1b3038ee.mjs.map
