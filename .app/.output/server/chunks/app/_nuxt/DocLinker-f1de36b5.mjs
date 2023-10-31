import { K as useAsyncData, L as queryContent, e as __nuxt_component_0$5 } from '../server.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "DocLinker",
  __ssrInlineRender: true,
  props: {
    to: {}
  },
  setup(__props) {
    const props = __props;
    const { pending, data } = useAsyncData(
      `doc-linker-to-${props.to}`,
      () => {
        if (!props.to)
          return Promise.resolve(null);
        return queryContent().where({
          components: { $contains: props.to }
        }).only(["_path"]).findOne();
      },
      {
        watch: [() => props.to]
      }
    );
    const tooltip = computed(() => {
      if (!data.value?._path)
        return `Documentation for ${props.to} is missing`;
      return `Read ${props.to} docs`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$5;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: unref(data)?._path,
        class: ["nui-focus inline-block rounded font-mono text-sm", [
          unref(pending) ? "bg-muted-100 dark:bg-muted-800/60 text-muted-500 cursor-help no-underline" : unref(data)?._path ? "nui-mark dark:decoration-primary-100/60 decoration-dotted underline-offset-4" : "bg-danger-100 dark:bg-danger-800/60 text-danger-500 cursor-help no-underline"
        ]],
        "data-nui-tooltip": unref(tooltip)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`&lt;${ssrInterpolate(props.to)}&gt;`);
          } else {
            return [
              createTextVNode("<" + toDisplayString(props.to) + ">", 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/components/content/DocLinker.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=DocLinker-f1de36b5.mjs.map
