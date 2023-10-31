import { l as _export_sfc, j as _sfc_main$C, r as __nuxt_component_0$2 } from '../server.mjs';
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
  const _component_BaseCard = _sfc_main$C;
  const _component_BasePlaceload = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-sm" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_BaseCard, {
    shape: "rounded",
    class: "p-4 md:p-6"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex items-center"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_BasePlaceload, { class: "h-10 w-10 rounded-full" }, null, _parent2, _scopeId));
        _push2(`<div class="ms-3 grow space-y-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_BasePlaceload, { class: "h-3 w-full rounded" }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BasePlaceload, { class: "h-3 w-[85%] rounded" }, null, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex items-center" }, [
            createVNode(_component_BasePlaceload, { class: "h-10 w-10 rounded-full" }),
            createVNode("div", { class: "ms-3 grow space-y-2" }, [
              createVNode(_component_BasePlaceload, { class: "h-3 w-full rounded" }),
              createVNode(_component_BasePlaceload, { class: "h-3 w-[85%] rounded" })
            ])
          ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/placeload/composition.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const composition = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { composition as default };
//# sourceMappingURL=composition-6edc0d6b.mjs.map
