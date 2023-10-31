import { _ as _sfc_main$1 } from './BaseButtonIcon-6150946c.mjs';
import { l as _export_sfc, f as __nuxt_component_2 } from '../server.mjs';
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
  const _component_BaseButtonIcon = _sfc_main$1;
  const _component_Icon = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap items-end gap-2" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_BaseButtonIcon, {
    shape: "straight",
    size: "sm"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "ph:moon-duotone",
          class: "h-5 w-5"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Icon, {
            name: "ph:moon-duotone",
            class: "h-5 w-5"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseButtonIcon, {
    shape: "rounded",
    size: "sm"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "ph:github-logo-duotone",
          class: "h-5 w-5"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Icon, {
            name: "ph:github-logo-duotone",
            class: "h-5 w-5"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseButtonIcon, {
    shape: "curved",
    size: "sm"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "ph:game-controller-duotone",
          class: "h-5 w-5"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Icon, {
            name: "ph:game-controller-duotone",
            class: "h-5 w-5"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseButtonIcon, {
    shape: "full",
    size: "sm"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "ph:heart-duotone",
          class: "h-5 w-5"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Icon, {
            name: "ph:heart-duotone",
            class: "h-5 w-5"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/icon-button/small.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const small = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { small as default };
//# sourceMappingURL=small-96d56697.mjs.map
