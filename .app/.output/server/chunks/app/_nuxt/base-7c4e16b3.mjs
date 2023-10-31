import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { l as _export_sfc, Q as _sfc_main$3, d as _sfc_main$x } from '../server.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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

const _imports_0 = "" + publicAssetsURL("img/illustrations/placeholders/people/2.svg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BasePlaceholderPage = _sfc_main$3;
  const _component_BaseButton = _sfc_main$x;
  _push(ssrRenderComponent(_component_BasePlaceholderPage, mergeProps({
    title: "Looks like you are new!",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat enim Polemonis. Duo Reges."
  }, _attrs), {
    image: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="placeholder-image"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: "placeholder-image"
          })
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="mt-2 flex justify-center gap-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_BaseButton, {
          color: "primary",
          shape: "curved",
          class: "h-11 w-40"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Take some action`);
            } else {
              return [
                createTextVNode("Take some action")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "mt-2 flex justify-center gap-2" }, [
            createVNode(_component_BaseButton, {
              color: "primary",
              shape: "curved",
              class: "h-11 w-40"
            }, {
              default: withCtx(() => [
                createTextVNode("Take some action")
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/placeholder/base.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const base = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { base as default };
//# sourceMappingURL=base-7c4e16b3.mjs.map
