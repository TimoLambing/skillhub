import { l as _export_sfc, s as _sfc_main$E } from '../server.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  const _component_BaseAvatar = _sfc_main$E;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap items-end gap-4" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_BaseAvatar, {
    text: "CT",
    size: "xs",
    "badge-src": "/img/icons/flags/united-states-of-america.svg",
    shape: "curved",
    class: "bg-muted-200 dark:bg-muted-600 text-muted-800 dark:text-muted-300"
  }, null, _parent));
  _push(ssrRenderComponent(_component_BaseAvatar, {
    text: "CT",
    size: "sm",
    "badge-src": "/img/icons/flags/united-states-of-america.svg",
    shape: "curved",
    class: "bg-muted-200 dark:bg-muted-600 text-muted-800 dark:text-muted-300"
  }, null, _parent));
  _push(ssrRenderComponent(_component_BaseAvatar, {
    text: "CT",
    size: "md",
    "badge-src": "/img/icons/flags/united-states-of-america.svg",
    shape: "curved",
    class: "bg-muted-200 dark:bg-muted-600 text-muted-800 dark:text-muted-300"
  }, null, _parent));
  _push(ssrRenderComponent(_component_BaseAvatar, {
    text: "CT",
    size: "lg",
    "badge-src": "/img/icons/flags/united-states-of-america.svg",
    shape: "curved",
    class: "bg-muted-200 dark:bg-muted-600 text-muted-800 dark:text-muted-300"
  }, null, _parent));
  _push(ssrRenderComponent(_component_BaseAvatar, {
    text: "CT",
    size: "xl",
    "badge-src": "/img/icons/flags/united-states-of-america.svg",
    shape: "curved",
    class: "bg-muted-200 dark:bg-muted-600 text-muted-800 dark:text-muted-300"
  }, null, _parent));
  _push(ssrRenderComponent(_component_BaseAvatar, {
    text: "CT",
    size: "2xl",
    "badge-src": "/img/icons/flags/united-states-of-america.svg",
    shape: "curved",
    class: "bg-muted-200 dark:bg-muted-600 text-muted-800 dark:text-muted-300"
  }, null, _parent));
  _push(ssrRenderComponent(_component_BaseAvatar, {
    text: "CT",
    size: "3xl",
    "badge-src": "/img/icons/flags/united-states-of-america.svg",
    shape: "curved",
    class: "bg-muted-200 dark:bg-muted-600 text-muted-800 dark:text-muted-300"
  }, null, _parent));
  _push(ssrRenderComponent(_component_BaseAvatar, {
    text: "CT",
    size: "4xl",
    "badge-src": "/img/icons/flags/united-states-of-america.svg",
    shape: "curved",
    class: "bg-muted-200 dark:bg-muted-600 text-muted-800 dark:text-muted-300"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/avatar/square-fake-badge.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const squareFakeBadge = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { squareFakeBadge as default };
//# sourceMappingURL=square-fake-badge-6bb56f7b.mjs.map
