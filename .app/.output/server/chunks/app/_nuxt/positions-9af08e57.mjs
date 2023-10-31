import { _ as _sfc_main$1 } from './BaseButtonIcon-6150946c.mjs';
import { l as _export_sfc, f as __nuxt_component_2 } from '../server.mjs';
import { _ as _sfc_main$2 } from './BaseButtonAction-57c21d00.mjs';
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
  const _component_BaseButtonAction = _sfc_main$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap items-end gap-2" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_BaseButtonIcon, {
    shape: "curved",
    "data-nui-tooltip": "Time for a nap!"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "ph:timer-duotone",
          class: "h-5 w-5 text-sky-500"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Icon, {
            name: "ph:timer-duotone",
            class: "h-5 w-5 text-sky-500"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseButtonIcon, {
    shape: "curved",
    "data-nui-tooltip-position": "left",
    "data-nui-tooltip": "Unlock this now!"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "ph:lock-duotone",
          class: "h-5 w-5 text-emerald-500"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Icon, {
            name: "ph:lock-duotone",
            class: "h-5 w-5 text-emerald-500"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseButtonIcon, {
    shape: "curved",
    "data-nui-tooltip-position": "right",
    "data-nui-tooltip": "Give some love!"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "ph:heartbeat-duotone",
          class: "h-5 w-5 text-rose-500"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Icon, {
            name: "ph:heartbeat-duotone",
            class: "h-5 w-5 text-rose-500"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseButtonIcon, {
    shape: "curved",
    "data-nui-tooltip-position": "down",
    "data-nui-tooltip": "The King in the North!"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "ph:crown-duotone",
          class: "h-5 w-5 text-yellow-500"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Icon, {
            name: "ph:crown-duotone",
            class: "h-5 w-5 text-yellow-500"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseButtonAction, {
    shape: "curved",
    "data-nui-tooltip": "Here we go!"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "ph:bell-ringing-duotone",
          class: "text-primary-500 -ms-1 h-4 w-4"
        }, null, _parent2, _scopeId));
        _push2(`<span class="py-2"${_scopeId}>Subscribe</span>`);
      } else {
        return [
          createVNode(_component_Icon, {
            name: "ph:bell-ringing-duotone",
            class: "text-primary-500 -ms-1 h-4 w-4"
          }),
          createVNode("span", { class: "py-2" }, "Subscribe")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/tooltip/positions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const positions = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { positions as default };
//# sourceMappingURL=positions-9af08e57.mjs.map
