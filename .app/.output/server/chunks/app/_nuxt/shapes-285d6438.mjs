import { l as _export_sfc, j as _sfc_main$C, _ as _sfc_main$p, b as _sfc_main$o } from '../server.mjs';
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
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
  const _component_BaseCard = _sfc_main$C;
  const _component_BaseHeading = _sfc_main$p;
  const _component_BaseParagraph = _sfc_main$o;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-4 md:grid-cols-3" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_BaseCard, {
    shape: "straight",
    class: "p-6"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BaseHeading, {
          as: "h4",
          size: "sm",
          weight: "semibold",
          lead: "tight",
          class: "text-muted-800 mb-2 dark:text-white"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Iam a card `);
            } else {
              return [
                createTextVNode(" Iam a card ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseParagraph, {
          size: "sm",
          lead: "tight",
          class: "text-muted-400"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Lorem ipsum dolor sit amet, consectetur adipiscing elit. `);
            } else {
              return [
                createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BaseHeading, {
            as: "h4",
            size: "sm",
            weight: "semibold",
            lead: "tight",
            class: "text-muted-800 mb-2 dark:text-white"
          }, {
            default: withCtx(() => [
              createTextVNode(" Iam a card ")
            ]),
            _: 1
          }),
          createVNode(_component_BaseParagraph, {
            size: "sm",
            lead: "tight",
            class: "text-muted-400"
          }, {
            default: withCtx(() => [
              createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. ")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseCard, {
    shape: "rounded",
    class: "p-6"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BaseHeading, {
          as: "h4",
          size: "sm",
          weight: "semibold",
          lead: "tight",
          class: "text-muted-800 mb-2 dark:text-white"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Iam a card `);
            } else {
              return [
                createTextVNode(" Iam a card ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseParagraph, {
          size: "sm",
          lead: "tight",
          class: "text-muted-400"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Lorem ipsum dolor sit amet, consectetur adipiscing elit. `);
            } else {
              return [
                createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BaseHeading, {
            as: "h4",
            size: "sm",
            weight: "semibold",
            lead: "tight",
            class: "text-muted-800 mb-2 dark:text-white"
          }, {
            default: withCtx(() => [
              createTextVNode(" Iam a card ")
            ]),
            _: 1
          }),
          createVNode(_component_BaseParagraph, {
            size: "sm",
            lead: "tight",
            class: "text-muted-400"
          }, {
            default: withCtx(() => [
              createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. ")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseCard, {
    shape: "curved",
    class: "p-6"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BaseHeading, {
          as: "h4",
          size: "sm",
          weight: "semibold",
          lead: "tight",
          class: "text-muted-800 mb-2 dark:text-white"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Iam a card `);
            } else {
              return [
                createTextVNode(" Iam a card ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseParagraph, {
          size: "sm",
          lead: "tight",
          class: "text-muted-400"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Lorem ipsum dolor sit amet, consectetur adipiscing elit. `);
            } else {
              return [
                createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BaseHeading, {
            as: "h4",
            size: "sm",
            weight: "semibold",
            lead: "tight",
            class: "text-muted-800 mb-2 dark:text-white"
          }, {
            default: withCtx(() => [
              createTextVNode(" Iam a card ")
            ]),
            _: 1
          }),
          createVNode(_component_BaseParagraph, {
            size: "sm",
            lead: "tight",
            class: "text-muted-400"
          }, {
            default: withCtx(() => [
              createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. ")
            ]),
            _: 1
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/card/shapes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const shapes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { shapes as default };
//# sourceMappingURL=shapes-285d6438.mjs.map
