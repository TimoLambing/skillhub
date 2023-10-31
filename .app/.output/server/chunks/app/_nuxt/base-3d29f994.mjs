import { _ as _sfc_main$1 } from './BaseRadio-d9efef81.mjs';
import { defineComponent, ref, mergeProps, unref, isRef, useSSRContext } from 'vue';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "base",
  __ssrInlineRender: true,
  setup(__props) {
    const value = ref("primary");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseRadio = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseRadio, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        name: "checkbox_base",
        label: "default",
        value: "default"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseRadio, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        name: "checkbox_base",
        label: "primary",
        value: "primary",
        color: "primary"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseRadio, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        name: "checkbox_base",
        value: "muted",
        label: "muted",
        color: "muted"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseRadio, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        name: "checkbox_base",
        value: "info",
        label: "info",
        color: "info"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseRadio, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        name: "checkbox_base",
        value: "success",
        label: "success",
        color: "success"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseRadio, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        name: "checkbox_base",
        value: "warning",
        label: "warning",
        color: "warning"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseRadio, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        name: "checkbox_base",
        value: "danger",
        label: "danger",
        color: "danger"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/radio/base.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=base-3d29f994.mjs.map
