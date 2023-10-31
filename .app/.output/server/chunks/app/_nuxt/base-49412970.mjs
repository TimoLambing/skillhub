import { l as _export_sfc, R as _sfc_main$t, d as _sfc_main$x } from '../server.mjs';
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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
  const _component_BaseFocusLoop = _sfc_main$t;
  const _component_BaseButton = _sfc_main$x;
  _push(ssrRenderComponent(_component_BaseFocusLoop, mergeProps({ class: "flex flex-wrap items-end gap-2" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BaseButton, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Button`);
            } else {
              return [
                createTextVNode("Button")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseButton, { color: "primary" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Button`);
            } else {
              return [
                createTextVNode("Button")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseButton, { color: "success" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Button`);
            } else {
              return [
                createTextVNode("Button")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseButton, { color: "info" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Button`);
            } else {
              return [
                createTextVNode("Button")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseButton, { color: "warning" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Button`);
            } else {
              return [
                createTextVNode("Button")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseButton, { color: "danger" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Button`);
            } else {
              return [
                createTextVNode("Button")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseButton, { color: "muted" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Button`);
            } else {
              return [
                createTextVNode("Button")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BaseButton, null, {
            default: withCtx(() => [
              createTextVNode("Button")
            ]),
            _: 1
          }),
          createVNode(_component_BaseButton, { color: "primary" }, {
            default: withCtx(() => [
              createTextVNode("Button")
            ]),
            _: 1
          }),
          createVNode(_component_BaseButton, { color: "success" }, {
            default: withCtx(() => [
              createTextVNode("Button")
            ]),
            _: 1
          }),
          createVNode(_component_BaseButton, { color: "info" }, {
            default: withCtx(() => [
              createTextVNode("Button")
            ]),
            _: 1
          }),
          createVNode(_component_BaseButton, { color: "warning" }, {
            default: withCtx(() => [
              createTextVNode("Button")
            ]),
            _: 1
          }),
          createVNode(_component_BaseButton, { color: "danger" }, {
            default: withCtx(() => [
              createTextVNode("Button")
            ]),
            _: 1
          }),
          createVNode(_component_BaseButton, { color: "muted" }, {
            default: withCtx(() => [
              createTextVNode("Button")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/focus-loop/base.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const base = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { base as default };
//# sourceMappingURL=base-49412970.mjs.map
