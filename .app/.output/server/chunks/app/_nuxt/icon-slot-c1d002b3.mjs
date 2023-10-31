import { _ as _sfc_main$1, a as _sfc_main$2 } from './BaseDropdownItem-864908ca.mjs';
import { l as _export_sfc, f as __nuxt_component_2 } from '../server.mjs';
import { _ as __nuxt_component_3 } from './BaseDropdownDivider-258f8823.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import '@headlessui/vue';
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
import '@vue/shared';
import 'chroma-js';
import 'tailwindcss/colors.js';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BaseDropdown = _sfc_main$1;
  const _component_BaseDropdownItem = _sfc_main$2;
  const _component_Icon = __nuxt_component_2;
  const _component_BaseDropdownDivider = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-end" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_BaseDropdown, {
    flavor: "button",
    label: "Dropdown",
    orientation: "start"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BaseDropdownItem, {
          to: "#",
          title: "Profile",
          text: "View your profile"
        }, {
          start: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_Icon, {
                name: "ph:user-duotone",
                class: "me-2 block h-5 w-5"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "ph:user-duotone",
                  class: "me-2 block h-5 w-5"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseDropdownItem, {
          to: "#",
          title: "Projects",
          text: "View your projects"
        }, {
          start: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_Icon, {
                name: "ph:briefcase-duotone",
                class: "me-2 block h-5 w-5"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "ph:briefcase-duotone",
                  class: "me-2 block h-5 w-5"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseDropdownItem, {
          to: "#",
          title: "Team",
          text: "Manage your team"
        }, {
          start: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_Icon, {
                name: "ph:users-four-duotone",
                class: "me-2 block h-5 w-5"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "ph:users-four-duotone",
                  class: "me-2 block h-5 w-5"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseDropdownDivider, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseDropdownItem, {
          to: "#",
          title: "Settings",
          text: "Set your preferences"
        }, {
          start: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_Icon, {
                name: "ph:gear-six-duotone",
                class: "me-2 block h-5 w-5"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "ph:gear-six-duotone",
                  class: "me-2 block h-5 w-5"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BaseDropdownItem, {
            to: "#",
            title: "Profile",
            text: "View your profile"
          }, {
            start: withCtx(() => [
              createVNode(_component_Icon, {
                name: "ph:user-duotone",
                class: "me-2 block h-5 w-5"
              })
            ]),
            _: 1
          }),
          createVNode(_component_BaseDropdownItem, {
            to: "#",
            title: "Projects",
            text: "View your projects"
          }, {
            start: withCtx(() => [
              createVNode(_component_Icon, {
                name: "ph:briefcase-duotone",
                class: "me-2 block h-5 w-5"
              })
            ]),
            _: 1
          }),
          createVNode(_component_BaseDropdownItem, {
            to: "#",
            title: "Team",
            text: "Manage your team"
          }, {
            start: withCtx(() => [
              createVNode(_component_Icon, {
                name: "ph:users-four-duotone",
                class: "me-2 block h-5 w-5"
              })
            ]),
            _: 1
          }),
          createVNode(_component_BaseDropdownDivider),
          createVNode(_component_BaseDropdownItem, {
            to: "#",
            title: "Settings",
            text: "Set your preferences"
          }, {
            start: withCtx(() => [
              createVNode(_component_Icon, {
                name: "ph:gear-six-duotone",
                class: "me-2 block h-5 w-5"
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/dropdown/icon-slot.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const iconSlot = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { iconSlot as default };
//# sourceMappingURL=icon-slot-c1d002b3.mjs.map
