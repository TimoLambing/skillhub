import { _ as _sfc_main$1 } from './BaseList-7a4c73f2.mjs';
import { _ as _sfc_main$2 } from './BaseListItem-5f313c57.mjs';
import { l as _export_sfc, s as _sfc_main$E } from '../server.mjs';
import { withCtx, createVNode, useSSRContext } from 'vue';
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
  const _component_BaseList = _sfc_main$1;
  const _component_BaseListItem = _sfc_main$2;
  const _component_BaseAvatar = _sfc_main$E;
  _push(ssrRenderComponent(_component_BaseList, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BaseListItem, {
          title: "Finish project UX",
          subtitle: "Close resubing pending tasks"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_BaseAvatar, { src: "/img/avatars/10.svg" }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_BaseAvatar, { src: "/img/avatars/10.svg" })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseListItem, {
          title: "Meet with Andy at 3:00pm",
          subtitle: "Meeting about next project steps"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_BaseAvatar, { src: "/img/avatars/25.svg" }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_BaseAvatar, { src: "/img/avatars/25.svg" })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseListItem, {
          title: "Get groceries for Anna",
          subtitle: "In preparation of next Friday's party"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_BaseAvatar, { src: "/img/avatars/15.svg" }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_BaseAvatar, { src: "/img/avatars/15.svg" })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseListItem, {
          title: "Pay water bill",
          subtitle: "Bill must be paid before next Tuesday"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_BaseAvatar, { src: "/img/avatars/4.svg" }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_BaseAvatar, { src: "/img/avatars/4.svg" })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BaseListItem, {
            title: "Finish project UX",
            subtitle: "Close resubing pending tasks"
          }, {
            default: withCtx(() => [
              createVNode(_component_BaseAvatar, { src: "/img/avatars/10.svg" })
            ]),
            _: 1
          }),
          createVNode(_component_BaseListItem, {
            title: "Meet with Andy at 3:00pm",
            subtitle: "Meeting about next project steps"
          }, {
            default: withCtx(() => [
              createVNode(_component_BaseAvatar, { src: "/img/avatars/25.svg" })
            ]),
            _: 1
          }),
          createVNode(_component_BaseListItem, {
            title: "Get groceries for Anna",
            subtitle: "In preparation of next Friday's party"
          }, {
            default: withCtx(() => [
              createVNode(_component_BaseAvatar, { src: "/img/avatars/15.svg" })
            ]),
            _: 1
          }),
          createVNode(_component_BaseListItem, {
            title: "Pay water bill",
            subtitle: "Bill must be paid before next Tuesday"
          }, {
            default: withCtx(() => [
              createVNode(_component_BaseAvatar, { src: "/img/avatars/4.svg" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/list/avatar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const avatar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { avatar as default };
//# sourceMappingURL=avatar-9b30347a.mjs.map
