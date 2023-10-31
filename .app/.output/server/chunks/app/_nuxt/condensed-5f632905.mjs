import { g as _sfc_main$z } from '../server.mjs';
import { defineComponent, reactive, mergeProps, unref, useSSRContext } from 'vue';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "condensed",
  __ssrInlineRender: true,
  setup(__props) {
    const fields = reactive({
      first: "",
      second: "",
      third: "",
      fourth: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseInput = _sfc_main$z;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-2 md:max-w-lg md:grid-cols-2" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: unref(fields).first,
        "onUpdate:modelValue": ($event) => unref(fields).first = $event,
        type: "search",
        shape: "straight",
        label: "Search",
        placeholder: "Enter search terms...",
        size: "sm"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: unref(fields).second,
        "onUpdate:modelValue": ($event) => unref(fields).second = $event,
        type: "email",
        shape: "rounded",
        label: "Email Address",
        placeholder: "Your email...",
        size: "sm"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: unref(fields).third,
        "onUpdate:modelValue": ($event) => unref(fields).third = $event,
        shape: "curved",
        label: "Username",
        type: "search",
        placeholder: "Search...",
        icon: "lucide:search",
        size: "sm"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: unref(fields).fourth,
        "onUpdate:modelValue": ($event) => unref(fields).fourth = $event,
        type: "password",
        shape: "full",
        label: "Password",
        placeholder: "Enter password...",
        icon: "lucide:lock",
        size: "sm"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/input/condensed.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=condensed-5f632905.mjs.map
