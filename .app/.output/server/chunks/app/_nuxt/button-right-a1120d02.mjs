import { _ as _sfc_main$1, a as _sfc_main$2 } from './BaseDropdownItem-864908ca.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { l as _export_sfc } from '../server.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BaseDropdown = _sfc_main$1;
  const _component_BaseDropdownItem = _sfc_main$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-end justify-end" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_BaseDropdown, {
    flavor: "button",
    label: "Dropdown",
    orientation: "end"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BaseDropdownItem, {
          to: "#",
          title: "Profile",
          text: "View your profile"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseDropdownItem, {
          to: "#",
          title: "Projects",
          text: "View your projects"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseDropdownItem, {
          to: "#",
          title: "Team",
          text: "Manage your team"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseDropdownItem, {
          to: "#",
          title: "Settings",
          text: "Set your preferences"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BaseDropdownItem, {
            to: "#",
            title: "Profile",
            text: "View your profile"
          }),
          createVNode(_component_BaseDropdownItem, {
            to: "#",
            title: "Projects",
            text: "View your projects"
          }),
          createVNode(_component_BaseDropdownItem, {
            to: "#",
            title: "Team",
            text: "Manage your team"
          }),
          createVNode(_component_BaseDropdownItem, {
            to: "#",
            title: "Settings",
            text: "Set your preferences"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/dropdown/button-right.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const buttonRight = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { buttonRight as default };
//# sourceMappingURL=button-right-a1120d02.mjs.map
