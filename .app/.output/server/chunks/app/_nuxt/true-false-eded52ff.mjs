import { l as _export_sfc, R as _sfc_main$t } from '../server.mjs';
import { _ as __nuxt_component_1 } from './BaseCheckboxAnimated-ecb67b13.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
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
  const _component_BaseFocusLoop = _sfc_main$t;
  const _component_BaseCheckboxAnimated = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-6 md:flex-row md:items-start" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_BaseFocusLoop, { class: "flex w-3/5 flex-wrap items-end gap-4" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BaseCheckboxAnimated, { classes: { label: "text-primary-500" } }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseCheckboxAnimated, {
          "model-value": true,
          classes: { label: "text-primary-500" }
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseCheckboxAnimated, {
          "model-value": true,
          disabled: "",
          classes: { label: "text-primary-500" }
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BaseCheckboxAnimated, { classes: { label: "text-primary-500" } }),
          createVNode(_component_BaseCheckboxAnimated, {
            "model-value": true,
            classes: { label: "text-primary-500" }
          }),
          createVNode(_component_BaseCheckboxAnimated, {
            "model-value": true,
            disabled: "",
            classes: { label: "text-primary-500" }
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/checkbox-animated/true-false.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const trueFalse = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { trueFalse as default };
//# sourceMappingURL=true-false-eded52ff.mjs.map
