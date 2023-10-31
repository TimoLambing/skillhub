import { _ as _sfc_main$1 } from './BaseButtonAction-57c21d00.mjs';
import { f as __nuxt_component_2, i as _sfc_main$D } from '../server.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { s as ssrRenderSlot } from './ssrSlot-c1fbcf0b.mjs';
import { r as renderSlot } from './slot-1dd7f161.mjs';
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
import './MDCSlot-9d8a19f8.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DocLinkExternal",
  __ssrInlineRender: true,
  props: {
    icon: { default: "lucide:external-link" },
    text: { default: "" },
    label: { default: "" },
    to: { default: "" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButtonAction = _sfc_main$1;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseText = _sfc_main$D;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-4" }, _attrs))}><div>`);
      _push(ssrRenderComponent(_component_BaseButtonAction, {
        shape: "full",
        to: props.to,
        target: "_blank",
        rel: "noopener",
        class: "hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: props.icon,
              class: "h-3 w-3"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>${ssrInterpolate(props.label)}</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: props.icon,
                class: "h-3 w-3"
              }, null, 8, ["name"]),
              createVNode("span", null, toDisplayString(props.label), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hidden sm:block">`);
      _push(ssrRenderComponent(_component_BaseText, {
        size: "xs",
        class: "text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/components/content/DocLinkExternal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=DocLinkExternal-c44d7a4b.mjs.map
