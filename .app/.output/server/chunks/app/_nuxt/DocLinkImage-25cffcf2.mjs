import { e as __nuxt_component_0$5 } from '../server.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DocLinkImage",
  __ssrInlineRender: true,
  props: {
    alt: {},
    src: {},
    srcDark: {},
    to: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: props.to,
        class: [
          props.to && "group/doc-link-img hover:[&>img]:!border-primary-500"
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="${ssrRenderClass([[
              props.to && "group-hover/doc-link-img:shadow-muted-300/30 group-hover/doc-link-img:shadow-xl"
            ], "border-muted-200 block w-full rounded-lg border transition-all duration-300 dark:hidden"])}"${ssrRenderAttr("src", props.src)}${ssrRenderAttr("alt", props.alt)}${_scopeId}><img class="${ssrRenderClass([[
              props.to && "group-hover/doc-link-img:shadow-muted-800/30 group-hover/doc-link-img:shadow-xl"
            ], "border-muted-700 hidden w-full rounded-lg border transition-all duration-300 dark:block"])}"${ssrRenderAttr("src", props.srcDark || props.src)}${ssrRenderAttr("alt", props.alt)}${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: ["border-muted-200 block w-full rounded-lg border transition-all duration-300 dark:hidden", [
                  props.to && "group-hover/doc-link-img:shadow-muted-300/30 group-hover/doc-link-img:shadow-xl"
                ]],
                src: props.src,
                alt: props.alt
              }, null, 10, ["src", "alt"]),
              createVNode("img", {
                class: ["border-muted-700 hidden w-full rounded-lg border transition-all duration-300 dark:block", [
                  props.to && "group-hover/doc-link-img:shadow-muted-800/30 group-hover/doc-link-img:shadow-xl"
                ]],
                src: props.srcDark || props.src,
                alt: props.alt
              }, null, 10, ["src", "alt"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/components/content/DocLinkImage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=DocLinkImage-25cffcf2.mjs.map
