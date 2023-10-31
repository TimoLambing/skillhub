import { l as _export_sfc, i as _sfc_main$D } from '../server.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
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
  const _component_BaseText = _sfc_main$D;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-6 md:grid-cols-2" }, _attrs))}><div class="flex flex-col">`);
  _push(ssrRenderComponent(_component_BaseText, { class: "text-muted-500 dark:text-muted-400" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat enim Polemonis. Duo Reges: constructio interrete. Philosophi autem in suis lectulis plerumque moriuntur. `);
      } else {
        return [
          createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat enim Polemonis. Duo Reges: constructio interrete. Philosophi autem in suis lectulis plerumque moriuntur. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex flex-col space-y-2">`);
  _push(ssrRenderComponent(_component_BaseText, {
    size: "sm",
    class: "text-muted-400 dark:text-muted-400"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat enim Polemonis. Duo Reges: constructio interrete. Philosophi autem in suis lectulis plerumque moriuntur. `);
      } else {
        return [
          createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat enim Polemonis. Duo Reges: constructio interrete. Philosophi autem in suis lectulis plerumque moriuntur. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseText, {
    size: "xs",
    weight: "medium",
    class: "text-success-500"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Any text can have a different color `);
      } else {
        return [
          createTextVNode(" Any text can have a different color ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/typography/text.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const text = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { text as default };
//# sourceMappingURL=text-45e34411.mjs.map
