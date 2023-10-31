import { _ as _sfc_main$1 } from './BasePagination-2a742261.mjs';
import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { J as useRoute } from '../server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "curved",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const currentPage = computed(() => {
      try {
        return Number.parseInt(route.query.page) || 1;
      } catch {
      }
      return 1;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BasePagination = _sfc_main$1;
      _push(ssrRenderComponent(_component_BasePagination, mergeProps({
        "item-per-page": 8,
        "total-items": 512,
        "current-page": unref(currentPage),
        "max-links-displayed": 5,
        shape: "curved"
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/pagination/curved.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=curved-b1978e0a.mjs.map