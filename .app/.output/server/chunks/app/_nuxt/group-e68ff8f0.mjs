import { _ as __nuxt_component_0 } from './BaseButtonGroup-dedb8878.mjs';
import { d as _sfc_main$x, g as _sfc_main$z } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseSelect-50588309.mjs';
import { defineComponent, ref, withCtx, createVNode, unref, isRef, useSSRContext } from 'vue';
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
import './IconChevronDown-af6375e6.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "group",
  __ssrInlineRender: true,
  setup(__props) {
    const amount = ref(void 0);
    const taxes = ref("With taxes");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButtonGroup = __nuxt_component_0;
      const _component_BaseButton = _sfc_main$x;
      const _component_BaseInput = _sfc_main$z;
      const _component_BaseSelect = _sfc_main$1;
      _push(ssrRenderComponent(_component_BaseButtonGroup, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseButton, { color: "muted" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>USD</span>`);
                } else {
                  return [
                    createVNode("span", null, "USD")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseInput, {
              modelValue: unref(amount),
              "onUpdate:modelValue": ($event) => isRef(amount) ? amount.value = $event : null,
              classes: {
                wrapper: "w-28"
              },
              type: "number",
              placeholder: "0.00"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseSelect, {
              modelValue: unref(taxes),
              "onUpdate:modelValue": ($event) => isRef(taxes) ? taxes.value = $event : null,
              classes: {
                wrapper: "w-36"
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<option value="With taxes"${_scopeId2}>With taxes</option><option value="Without taxes"${_scopeId2}>Without taxes</option>`);
                } else {
                  return [
                    createVNode("option", { value: "With taxes" }, "With taxes"),
                    createVNode("option", { value: "Without taxes" }, "Without taxes")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseButton, { color: "muted" }, {
                default: withCtx(() => [
                  createVNode("span", null, "USD")
                ]),
                _: 1
              }),
              createVNode(_component_BaseInput, {
                modelValue: unref(amount),
                "onUpdate:modelValue": ($event) => isRef(amount) ? amount.value = $event : null,
                classes: {
                  wrapper: "w-28"
                },
                type: "number",
                placeholder: "0.00"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseSelect, {
                modelValue: unref(taxes),
                "onUpdate:modelValue": ($event) => isRef(taxes) ? taxes.value = $event : null,
                classes: {
                  wrapper: "w-36"
                }
              }, {
                default: withCtx(() => [
                  createVNode("option", { value: "With taxes" }, "With taxes"),
                  createVNode("option", { value: "Without taxes" }, "Without taxes")
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/input/group.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=group-e68ff8f0.mjs.map
