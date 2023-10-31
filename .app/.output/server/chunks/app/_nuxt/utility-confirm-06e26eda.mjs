import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { Q as _sfc_main$3, d as _sfc_main$x } from '../server.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import 'vue-bundle-renderer/runtime';
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
import 'devalue';
import '@unhead/ssr';
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

const _imports_0 = "" + publicAssetsURL("img/illustrations/placeholders/flat/placeholder-launch.svg");
const _imports_1 = "" + publicAssetsURL("img/illustrations/placeholders/flat/placeholder-launch-dark.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "utility-confirm",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BasePlaceholderPage = _sfc_main$3;
      const _component_BaseButton = _sfc_main$x;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center pb-12" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BasePlaceholderPage, {
        title: "Confirm your account",
        subtitle: "Hi Maya, we're glad to have you on board! Please confirm your account to continue using our app."
      }, {
        image: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="block dark:hidden"${ssrRenderAttr("src", _imports_0)} alt="placeholder-image"${_scopeId}><img class="hidden dark:block"${ssrRenderAttr("src", _imports_1)} alt="placeholder-image"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "block dark:hidden",
                src: _imports_0,
                alt: "placeholder-image"
              }),
              createVNode("img", {
                class: "hidden dark:block",
                src: _imports_1,
                alt: "placeholder-image"
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mx-auto mt-4 flex w-full max-w-[280px] justify-between gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              shape: "curved",
              class: "h-11 w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Cancel `);
                } else {
                  return [
                    createTextVNode(" Cancel ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "primary",
              shape: "curved",
              class: "h-11 w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Confirm `);
                } else {
                  return [
                    createTextVNode(" Confirm ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mx-auto mt-4 flex w-full max-w-[280px] justify-between gap-2" }, [
                createVNode(_component_BaseButton, {
                  shape: "curved",
                  class: "h-11 w-full"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Cancel ")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseButton, {
                  color: "primary",
                  shape: "curved",
                  class: "h-11 w-full"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Confirm ")
                  ]),
                  _: 1
                })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/utility-confirm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=utility-confirm-06e26eda.mjs.map
