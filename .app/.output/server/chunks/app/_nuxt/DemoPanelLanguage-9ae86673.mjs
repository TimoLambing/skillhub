import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { D as usePanels, f as __nuxt_component_2 } from '../server.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './united-states-of-america-3f3fb7fc.mjs';
import 'vue-bundle-renderer/runtime';
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
import 'devalue';
import '@unhead/ssr';
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

const _imports_1 = "" + publicAssetsURL("img/icons/flags/france.svg");
const _imports_2 = "" + publicAssetsURL("img/icons/flags/spain.svg");
const _imports_3 = "" + publicAssetsURL("img/icons/flags/germany.svg");
const _imports_4 = "" + publicAssetsURL("img/icons/flags/mexico.svg");
const _imports_5 = "" + publicAssetsURL("img/icons/flags/china.svg");
const _imports_6 = "" + publicAssetsURL("img/illustrations/translation.svg");
const _imports_7 = "" + publicAssetsURL("img/illustrations/translation-dark.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoPanelLanguage",
  __ssrInlineRender: true,
  setup(__props) {
    usePanels();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-muted-200 dark:border-muted-700 dark:bg-muted-800 border bg-white" }, _attrs))}><div class="flex h-16 w-full items-center justify-between px-10"><h2 class="font-heading text-muted-700 text-lg font-semibold dark:text-white"> Select language </h2><button type="button" class="text-muted-400 hover:bg-muted-100 hover:text-muted-600 dark:hover:bg-muted-700 flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 dark:hover:text-white">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "feather:chevron-right",
        class: "h-6 w-6"
      }, null, _parent));
      _push(`</button></div><div class="relative h-[calc(100%_-_64px)] w-full px-10"><div class="grid grid-cols-3 py-6"><div class="relative my-4 flex items-center justify-center"><div class="relative"><input type="radio" name="language_selection" class="peer absolute start-0 top-0 z-20 h-full w-full cursor-pointer opacity-0" checked><div class="border-muted-200 peer-checked:border-primary-500 dark:border-muted-600 flex h-14 w-14 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300"><img class="h-10 w-10 rounded-full"${ssrRenderAttr("src", _imports_0)} alt="flag icon"></div><div class="bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 hidden h-7 w-7 items-center justify-center rounded-full border-4 border-white text-white peer-checked:flex">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "feather:check",
        class: "h-3 w-3"
      }, null, _parent));
      _push(`</div></div></div><div class="relative my-4 flex items-center justify-center"><div class="relative"><input type="radio" name="language_selection" class="peer absolute start-0 top-0 z-20 h-full w-full cursor-pointer opacity-0"><div class="border-muted-200 peer-checked:border-primary-500 dark:border-muted-600 flex h-14 w-14 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300"><img class="h-10 w-10 rounded-full"${ssrRenderAttr("src", _imports_1)} alt="flag icon"></div><div class="bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 hidden h-7 w-7 items-center justify-center rounded-full border-4 border-white text-white peer-checked:flex">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "feather:check",
        class: "h-3 w-3"
      }, null, _parent));
      _push(`</div></div></div><div class="relative my-4 flex items-center justify-center"><div class="relative"><input type="radio" name="language_selection" class="peer absolute start-0 top-0 z-20 h-full w-full cursor-pointer opacity-0"><div class="border-muted-200 peer-checked:border-primary-500 dark:border-muted-600 flex h-14 w-14 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300"><img class="h-10 w-10 rounded-full"${ssrRenderAttr("src", _imports_2)} alt="flag icon"></div><div class="bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 hidden h-7 w-7 items-center justify-center rounded-full border-4 border-white text-white peer-checked:flex">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "feather:check",
        class: "h-3 w-3"
      }, null, _parent));
      _push(`</div></div></div><div class="relative my-4 flex items-center justify-center"><div class="relative"><input type="radio" name="language_selection" class="peer absolute start-0 top-0 z-20 h-full w-full cursor-pointer opacity-0"><div class="border-muted-200 peer-checked:border-primary-500 dark:border-muted-600 flex h-14 w-14 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300"><img class="h-10 w-10 rounded-full"${ssrRenderAttr("src", _imports_3)} alt="flag icon"></div><div class="bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 hidden h-7 w-7 items-center justify-center rounded-full border-4 border-white text-white peer-checked:flex">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "feather:check",
        class: "h-3 w-3"
      }, null, _parent));
      _push(`</div></div></div><div class="relative my-4 flex items-center justify-center"><div class="relative"><input type="radio" name="language_selection" class="peer absolute start-0 top-0 z-20 h-full w-full cursor-pointer opacity-0"><div class="border-muted-200 peer-checked:border-primary-500 dark:border-muted-600 flex h-14 w-14 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300"><img class="h-10 w-10 rounded-full"${ssrRenderAttr("src", _imports_4)} alt="flag icon"></div><div class="bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 hidden h-7 w-7 items-center justify-center rounded-full border-4 border-white text-white peer-checked:flex">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "feather:check",
        class: "h-3 w-3"
      }, null, _parent));
      _push(`</div></div></div><div class="relative my-4 flex items-center justify-center"><div class="relative"><input type="radio" name="language_selection" class="peer absolute start-0 top-0 z-20 h-full w-full cursor-pointer opacity-0"><div class="border-muted-200 peer-checked:border-primary-500 dark:border-muted-600 flex h-14 w-14 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300"><img class="h-10 w-10 rounded-full"${ssrRenderAttr("src", _imports_5)} alt="flag icon"></div><div class="bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 hidden h-7 w-7 items-center justify-center rounded-full border-4 border-white text-white peer-checked:flex">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "feather:check",
        class: "h-3 w-3"
      }, null, _parent));
      _push(`</div></div></div></div><div><img${ssrRenderAttr("src", _imports_6)} class="mx-auto w-full max-w-[280px] dark:hidden" alt="illustration"><img${ssrRenderAttr("src", _imports_7)} class="mx-auto hidden w-full max-w-[280px] dark:block" alt="illustration"></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/DemoPanelLanguage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=DemoPanelLanguage-9ae86673.mjs.map
