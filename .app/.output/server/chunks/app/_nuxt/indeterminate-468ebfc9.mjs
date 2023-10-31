import { _ as _sfc_main$1 } from './BaseProgress-1402c581.mjs';
import { mergeProps, useSSRContext } from 'vue';
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
  const _component_BaseProgress = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-xs space-y-4" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_BaseProgress, {
    title: "indeterminate primary progress bar",
    size: "sm",
    color: "primary"
  }, null, _parent));
  _push(ssrRenderComponent(_component_BaseProgress, {
    title: "indeterminate success progress bar",
    size: "sm",
    color: "success"
  }, null, _parent));
  _push(ssrRenderComponent(_component_BaseProgress, {
    title: "indeterminate info progress bar",
    size: "sm",
    color: "info"
  }, null, _parent));
  _push(ssrRenderComponent(_component_BaseProgress, {
    title: "indeterminate warning progress bar",
    size: "sm",
    color: "warning"
  }, null, _parent));
  _push(ssrRenderComponent(_component_BaseProgress, {
    title: "indeterminate danger progress bar",
    size: "sm",
    color: "danger"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/progress/indeterminate.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const indeterminate = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { indeterminate as default };
//# sourceMappingURL=indeterminate-468ebfc9.mjs.map
