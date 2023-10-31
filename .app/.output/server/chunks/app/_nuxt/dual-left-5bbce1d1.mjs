import { _ as _sfc_main$1 } from './TairoPopover-3d838bc4.mjs';
import { l as _export_sfc, s as _sfc_main$E } from '../server.mjs';
import { _ as _sfc_main$2 } from './TairoPopoverContentDual-ec51d2ed.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import '@headlessui/vue';
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
import './BaseIconBox-642fe941.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TairoPopover = _sfc_main$1;
  const _component_BaseAvatar = _sfc_main$E;
  const _component_TairoPopoverContentDual = _sfc_main$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap items-end gap-6" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TairoPopover, { orientation: "start" }, {
    content: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_TairoPopoverContentDual, {
          stats: [
            {
              title: "Javascript",
              subtitle: "65 projects",
              image: "https://vuero.cssninja.io/images/icons/stacks/js.svg"
            },
            {
              title: "Projects",
              subtitle: "154 projects",
              icon: "ph:briefcase-duotone"
            }
          ],
          image: "/img/avatars/3.svg",
          title: "Mike Miller",
          subtitle: "Software Engineer",
          "footer-title": "$75/hour",
          "footer-text": "Based on the latest 5 jobs",
          "link-label": "Hire Now",
          link: "/"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_TairoPopoverContentDual, {
            stats: [
              {
                title: "Javascript",
                subtitle: "65 projects",
                image: "https://vuero.cssninja.io/images/icons/stacks/js.svg"
              },
              {
                title: "Projects",
                subtitle: "154 projects",
                icon: "ph:briefcase-duotone"
              }
            ],
            image: "/img/avatars/3.svg",
            title: "Mike Miller",
            subtitle: "Software Engineer",
            "footer-title": "$75/hour",
            "footer-text": "Based on the latest 5 jobs",
            "link-label": "Hire Now",
            link: "/"
          }, null, 8, ["stats"])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex items-center"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_BaseAvatar, { src: "/img/avatars/3.svg" }, null, _parent2, _scopeId));
        _push2(`<span class="font-heading text-muted-800 ms-3 text-sm font-medium dark:text-white"${_scopeId}> Mike Miller </span></div>`);
      } else {
        return [
          createVNode("div", { class: "flex items-center" }, [
            createVNode(_component_BaseAvatar, { src: "/img/avatars/3.svg" }),
            createVNode("span", { class: "font-heading text-muted-800 ms-3 text-sm font-medium dark:text-white" }, " Mike Miller ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/popover/dual-left.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dualLeft = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { dualLeft as default };
//# sourceMappingURL=dual-left-5bbce1d1.mjs.map
