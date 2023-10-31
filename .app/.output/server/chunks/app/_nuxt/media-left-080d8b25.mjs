import { _ as _sfc_main$1 } from './TairoPopover-3d838bc4.mjs';
import { _ as _sfc_main$2 } from './TairoPopoverContentMedia-6b767464.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { l as _export_sfc } from '../server.mjs';
import '@headlessui/vue';
import './BaseIconBox-642fe941.mjs';
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
import '@vue/shared';
import 'chroma-js';
import 'tailwindcss/colors.js';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TairoPopover = _sfc_main$1;
  const _component_TairoPopoverContentMedia = _sfc_main$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap items-end gap-6" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TairoPopover, { orientation: "start" }, {
    content: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_TairoPopoverContentMedia, {
          images: [
            "https://img.freepik.com/vector-gratis/mobiliario-sofa-ventana-mesa-plantas-interior-sala-estar_357257-356.jpg?w=300",
            "https://img.freepik.com/free-vector/home-interior-background-concept_52683-44165.jpg?w=150",
            "https://img.freepik.com/free-vector/home-interior-background-style_52683-44164.jpg?w=150"
          ],
          title: "House",
          subtitle: "5 rooms",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Istam voluptatem perpetuam quis potest praestare sapienti.",
          "footer-title": "$150/night",
          "footer-text": "14 Columbia Av., Block C",
          "link-label": "Rent Now",
          to: "#"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_TairoPopoverContentMedia, {
            images: [
              "https://img.freepik.com/vector-gratis/mobiliario-sofa-ventana-mesa-plantas-interior-sala-estar_357257-356.jpg?w=300",
              "https://img.freepik.com/free-vector/home-interior-background-concept_52683-44165.jpg?w=150",
              "https://img.freepik.com/free-vector/home-interior-background-style_52683-44164.jpg?w=150"
            ],
            title: "House",
            subtitle: "5 rooms",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Istam voluptatem perpetuam quis potest praestare sapienti.",
            "footer-title": "$150/night",
            "footer-text": "14 Columbia Av., Block C",
            "link-label": "Rent Now",
            to: "#"
          }, null, 8, ["images"])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex items-center"${_scopeId}><span class="border-muted-300 text-muted-800 dark:border-muted-600 rounded-full border px-3 py-1.5 font-sans text-sm font-medium dark:text-white"${_scopeId}> Beautiful house </span></div>`);
      } else {
        return [
          createVNode("div", { class: "flex items-center" }, [
            createVNode("span", { class: "border-muted-300 text-muted-800 dark:border-muted-600 rounded-full border px-3 py-1.5 font-sans text-sm font-medium dark:text-white" }, " Beautiful house ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/popover/media-left.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mediaLeft = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { mediaLeft as default };
//# sourceMappingURL=media-left-080d8b25.mjs.map
