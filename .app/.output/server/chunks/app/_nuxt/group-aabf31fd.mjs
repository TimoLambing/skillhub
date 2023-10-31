import { _ as __nuxt_component_0 } from './BaseButtonGroup-dedb8878.mjs';
import { _ as _sfc_main$1 } from './BaseButtonAction-57c21d00.mjs';
import { l as _export_sfc, f as __nuxt_component_2 } from '../server.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$2 } from './BaseDropdownItem-864908ca.mjs';
import { withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
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
  const _component_BaseButtonGroup = __nuxt_component_0;
  const _component_BaseButtonAction = _sfc_main$1;
  const _component_Icon = __nuxt_component_2;
  const _component_BaseDropdown = _sfc_main$1$1;
  const _component_BaseDropdownItem = _sfc_main$2;
  _push(ssrRenderComponent(_component_BaseButtonGroup, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BaseButtonAction, { shape: "rounded" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` View `);
            } else {
              return [
                createTextVNode(" View ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseButtonAction, { shape: "straight" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_Icon, {
                name: "ph:pen",
                class: "h-4 w-4"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "ph:pen",
                  class: "h-4 w-4"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseButtonAction, {
          muted: "",
          shape: "straight"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Muted`);
            } else {
              return [
                createTextVNode("Muted")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseDropdown, { label: "plus" }, {
          button: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_BaseButtonAction, { shape: "rounded" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` plus `);
                  } else {
                    return [
                      createTextVNode(" plus ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_BaseButtonAction, { shape: "rounded" }, {
                  default: withCtx(() => [
                    createTextVNode(" plus ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_BaseDropdownItem, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Edit `);
                  } else {
                    return [
                      createTextVNode(" Edit ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_BaseDropdownItem, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Cancel `);
                  } else {
                    return [
                      createTextVNode(" Cancel ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_BaseDropdownItem, null, {
                  default: withCtx(() => [
                    createTextVNode(" Edit ")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseDropdownItem, null, {
                  default: withCtx(() => [
                    createTextVNode(" Cancel ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseButtonAction, {
          disabled: "",
          shape: "straight"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Disabled `);
            } else {
              return [
                createTextVNode(" Disabled ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseButtonAction, { shape: "rounded" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Share `);
            } else {
              return [
                createTextVNode(" Share ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BaseButtonAction, { shape: "rounded" }, {
            default: withCtx(() => [
              createTextVNode(" View ")
            ]),
            _: 1
          }),
          createVNode(_component_BaseButtonAction, { shape: "straight" }, {
            default: withCtx(() => [
              createVNode(_component_Icon, {
                name: "ph:pen",
                class: "h-4 w-4"
              })
            ]),
            _: 1
          }),
          createVNode(_component_BaseButtonAction, {
            muted: "",
            shape: "straight"
          }, {
            default: withCtx(() => [
              createTextVNode("Muted")
            ]),
            _: 1
          }),
          createVNode(_component_BaseDropdown, { label: "plus" }, {
            button: withCtx(() => [
              createVNode(_component_BaseButtonAction, { shape: "rounded" }, {
                default: withCtx(() => [
                  createTextVNode(" plus ")
                ]),
                _: 1
              })
            ]),
            default: withCtx(() => [
              createVNode(_component_BaseDropdownItem, null, {
                default: withCtx(() => [
                  createTextVNode(" Edit ")
                ]),
                _: 1
              }),
              createVNode(_component_BaseDropdownItem, null, {
                default: withCtx(() => [
                  createTextVNode(" Cancel ")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_BaseButtonAction, {
            disabled: "",
            shape: "straight"
          }, {
            default: withCtx(() => [
              createTextVNode(" Disabled ")
            ]),
            _: 1
          }),
          createVNode(_component_BaseButtonAction, { shape: "rounded" }, {
            default: withCtx(() => [
              createTextVNode(" Share ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/action/group.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const group = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { group as default };
//# sourceMappingURL=group-aabf31fd.mjs.map
