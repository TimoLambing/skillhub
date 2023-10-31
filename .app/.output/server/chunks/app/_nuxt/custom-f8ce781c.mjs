import { _ as __nuxt_component_1 } from './BaseCheckboxAnimated-ecb67b13.mjs';
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
  __name: "custom",
  __ssrInlineRender: true,
  setup(__props) {
    const customValue = ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCheckboxAnimated = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-6 md:flex-row md:items-start" }, _attrs))}><div class="flex w-3/5 flex-wrap items-end gap-4">`);
      _push(ssrRenderComponent(_component_BaseCheckboxAnimated, {
        modelValue: unref(customValue),
        "onUpdate:modelValue": ($event) => isRef(customValue) ? customValue.value = $event : null,
        "true-value": "checked",
        "false-value": "not-checked",
        classes: { label: "text-primary-500" }
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/checkbox-animated/custom.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=custom-f8ce781c.mjs.map
