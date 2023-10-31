import { _ as _sfc_main$1 } from './BaseSelect-50588309.mjs';
import { defineComponent, ref, mergeProps, unref, isRef, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import '../server.mjs';
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
  __name: "float-label",
  __ssrInlineRender: true,
  setup(__props) {
    const first = ref("");
    const second = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseSelect = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-6 grid gap-6 md:max-w-lg md:grid-cols-2" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseSelect, {
        modelValue: unref(first),
        "onUpdate:modelValue": ($event) => isRef(first) ? first.value = $event : null,
        shape: "rounded",
        label: "Select a hero",
        "label-float": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<option value=""${_scopeId}>Select a hero</option><option value="Superman"${_scopeId}>Superman</option><option value="Batman"${_scopeId}>Batman</option><option value="Iron man"${_scopeId}>Iron man</option><option value="Magneto"${_scopeId}>Magneto</option><option value="Cyclops"${_scopeId}>Cyclops</option>`);
          } else {
            return [
              createVNode("option", { value: "" }, "Select a hero"),
              createVNode("option", { value: "Superman" }, "Superman"),
              createVNode("option", { value: "Batman" }, "Batman"),
              createVNode("option", { value: "Iron man" }, "Iron man"),
              createVNode("option", { value: "Magneto" }, "Magneto"),
              createVNode("option", { value: "Cyclops" }, "Cyclops")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseSelect, {
        modelValue: unref(second),
        "onUpdate:modelValue": ($event) => isRef(second) ? second.value = $event : null,
        shape: "rounded",
        label: "Select a hero",
        icon: "icon-park-outline:muscle",
        "label-float": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<option value=""${_scopeId}>Select a hero</option><option value="Superman"${_scopeId}>Superman</option><option value="Batman"${_scopeId}>Batman</option><option value="Iron man"${_scopeId}>Iron man</option><option value="Magneto"${_scopeId}>Magneto</option><option value="Cyclops"${_scopeId}>Cyclops</option>`);
          } else {
            return [
              createVNode("option", { value: "" }, "Select a hero"),
              createVNode("option", { value: "Superman" }, "Superman"),
              createVNode("option", { value: "Batman" }, "Batman"),
              createVNode("option", { value: "Iron man" }, "Iron man"),
              createVNode("option", { value: "Magneto" }, "Magneto"),
              createVNode("option", { value: "Cyclops" }, "Cyclops")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/select/float-label.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=float-label-9d26d4f9.mjs.map
