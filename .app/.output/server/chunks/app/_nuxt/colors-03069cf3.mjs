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
  __name: "colors",
  __ssrInlineRender: true,
  setup(__props) {
    const value = ref("pink");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseRadio = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseRadio, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        name: "checkbox_colors",
        label: "indigo",
        value: "indigo",
        classes: {
          wrapper: "text-indigo-500"
        }
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseRadio, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        name: "checkbox_colors",
        label: "lime",
        value: "lime",
        classes: {
          wrapper: "text-lime-500"
        }
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseRadio, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        name: "checkbox_colors",
        label: "pink",
        value: "pink",
        classes: {
          wrapper: "text-pink-500"
        }
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseRadio, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        name: "checkbox_colors",
        label: "sky",
        value: "sky",
        classes: {
          wrapper: "text-sky-500"
        }
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseRadio, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        name: "checkbox_colors",
        label: "yellow",
        value: "yellow",
        classes: {
          wrapper: "text-yellow-500"
        }
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseRadio, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        name: "checkbox_colors",
        label: "purple",
        value: "purple",
        classes: {
          wrapper: "text-purple-500"
        }
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseRadio, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        name: "checkbox_colors",
        label: "green",
        value: "green",
        classes: {
          wrapper: "text-green-500"
        }
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseRadio, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        name: "checkbox_colors",
        label: "fuchsia",
        value: "fuchsia",
        classes: {
          wrapper: "text-fuchsia-500"
        }
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseRadio, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        name: "checkbox_colors",
        label: "rose",
        value: "rose",
        classes: {
          wrapper: "text-rose-500"
        }
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/radio/colors.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=colors-03069cf3.mjs.map
