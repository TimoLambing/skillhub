import { _ as _sfc_main$1 } from './BaseAutocomplete-8d21f0d1.mjs';
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
import './BaseIconBox-642fe941.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "icon-result",
  __ssrInlineRender: true,
  setup(__props) {
    const value = ref();
    const hobbies = ref([
      {
        id: 1,
        name: "Movies",
        text: "Cinema & shows",
        icon: "ph:sword-duotone"
      },
      {
        id: 2,
        name: "Travel",
        text: "Tourism & travel",
        icon: "ph:airplane-duotone"
      },
      {
        id: 3,
        name: "Drinks",
        text: "Wines & fine drinks",
        icon: "ph:brandy-duotone"
      },
      {
        id: 4,
        name: "Arts",
        text: "Paintings & scultpure",
        icon: "ph:paint-brush-duotone"
      },
      {
        id: 5,
        name: "Karaoke",
        text: "singing with friends",
        icon: "ph:microphone-stage-duotone"
      }
    ]);
    function filterItems(query, items) {
      if (!query || !items) {
        return items ?? [];
      }
      return items.filter((item) => {
        const nameMatches = item?.name?.toLowerCase().includes(query.toLowerCase());
        const textMatches = item?.text?.toLowerCase().includes(query.toLowerCase());
        return nameMatches || textMatches;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAutocomplete = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-6 md:max-w-lg md:grid-cols-2" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseAutocomplete, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        items: unref(hobbies),
        "display-value": (item) => item.name,
        "filter-items": filterItems,
        icon: "ph:buildings",
        shape: "rounded",
        placeholder: "Select a hobby",
        label: "Company",
        clearable: ""
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/autocomplete/icon-result.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=icon-result-de4fbfcc.mjs.map
