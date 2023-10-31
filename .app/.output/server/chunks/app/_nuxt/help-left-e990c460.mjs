import { _ as _sfc_main$1 } from './TairoPopover-3d838bc4.mjs';
import { l as _export_sfc, f as __nuxt_component_2 } from '../server.mjs';
import { _ as _sfc_main$2 } from './TairoPopoverContentHelp-a9493405.mjs';
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
  const _component_Icon = __nuxt_component_2;
  const _component_TairoPopoverContentHelp = _sfc_main$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap items-end gap-6" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TairoPopover, { size: "sm" }, {
    content: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_TairoPopoverContentHelp, {
          title: "Cookies",
          subtitle: "Managing cookies",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit solor\n                      moranitur lobis em.",
          icon: "lucide:cookie"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_TairoPopoverContentHelp, {
            title: "Cookies",
            subtitle: "Managing cookies",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit solor\n                      moranitur lobis em.",
            icon: "lucide:cookie"
          })
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="text-muted-500 flex items-center"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Icon, {
          name: "lucide:help-circle",
          class: "me-1 h-4 w-4"
        }, null, _parent2, _scopeId));
        _push2(`<span class="font-sans text-sm"${_scopeId}>Help text</span></span>`);
      } else {
        return [
          createVNode("span", { class: "text-muted-500 flex items-center" }, [
            createVNode(_component_Icon, {
              name: "lucide:help-circle",
              class: "me-1 h-4 w-4"
            }),
            createVNode("span", { class: "font-sans text-sm" }, "Help text")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_TairoPopover, { size: "sm" }, {
    content: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_TairoPopoverContentHelp, {
          title: "Dashboard",
          subtitle: "Adding new widgets",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit solor\n                      moranitur lobis em.",
          icon: "lucide:layout-dashboard",
          "icon-color": "success"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_TairoPopoverContentHelp, {
            title: "Dashboard",
            subtitle: "Adding new widgets",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit solor\n                      moranitur lobis em.",
            icon: "lucide:layout-dashboard",
            "icon-color": "success"
          })
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="text-muted-500 flex items-center"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Icon, {
          name: "lucide:help-circle",
          class: "me-1 h-4 w-4"
        }, null, _parent2, _scopeId));
        _push2(`<span class="font-sans text-sm"${_scopeId}>Help text</span></span>`);
      } else {
        return [
          createVNode("span", { class: "text-muted-500 flex items-center" }, [
            createVNode(_component_Icon, {
              name: "lucide:help-circle",
              class: "me-1 h-4 w-4"
            }),
            createVNode("span", { class: "font-sans text-sm" }, "Help text")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/popover/help-left.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const helpLeft = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { helpLeft as default };
//# sourceMappingURL=help-left-e990c460.mjs.map
