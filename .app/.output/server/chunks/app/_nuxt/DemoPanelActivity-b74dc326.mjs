import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { D as usePanels, f as __nuxt_component_2, e as __nuxt_component_0$5 } from '../server.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './2-942b7bb5.mjs';
import { _ as _imports_1, a as _imports_8 } from './24-127aeb1f.mjs';
import { _ as _imports_2 } from './3-e6d3708e.mjs';
import { a as _imports_1$1, _ as _imports_3 } from './19-120f22ae.mjs';
import { _ as _imports_2$1, a as _imports_1$2 } from './18-062a550f.mjs';
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

const _imports_4 = "" + publicAssetsURL("img/icons/logos/slicer.svg");
const _imports_6 = "" + publicAssetsURL("img/icons/logos/metamovies.svg");
const _imports_7 = "" + publicAssetsURL("img/avatars/13.svg");
const _imports_9 = "" + publicAssetsURL("img/icons/logos/fastpizza.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoPanelActivity",
  __ssrInlineRender: true,
  setup(__props) {
    usePanels();
    const activeTab = ref("tab-1");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      const _component_NuxtLink = __nuxt_component_0$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-muted-200 dark:border-muted-700 dark:bg-muted-800 border bg-white" }, _attrs))}><div class="flex h-16 w-full items-center justify-between px-10"><h2 class="font-heading text-muted-700 text-lg font-semibold dark:text-white"> Activity </h2><button type="button" class="text-muted-400 hover:bg-muted-100 hover:text-muted-600 dark:hover:bg-muted-700 flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 dark:hover:text-white">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "feather:chevron-right",
        class: "h-6 w-6"
      }, null, _parent));
      _push(`</button></div><div class="flex h-16 items-center px-10"><div class="bg-muted-100 dark:bg-muted-700 relative flex h-10 w-full items-center rounded-lg font-sans text-sm"><button type="button" class="${ssrRenderClass([unref(activeTab) === "tab-1" ? "text-white" : "text-muted-400", "relative z-20 flex h-full flex-1 items-center justify-center"])}"><span>Team</span></button><button type="button" class="${ssrRenderClass([unref(activeTab) === "tab-2" ? "text-white" : "text-muted-400", "relative z-20 flex h-full flex-1 items-center justify-center"])}"><span>Projects</span></button><button type="button" class="${ssrRenderClass([unref(activeTab) === "tab-3" ? "text-white" : "text-muted-400", "relative z-20 flex h-full flex-1 items-center justify-center"])}"><span>Schedule</span></button><div class="${ssrRenderClass([[
        unref(activeTab) === "tab-1" && "ms-0",
        unref(activeTab) === "tab-2" && "ms-[33.3%]",
        unref(activeTab) === "tab-3" && "ms-[66.6%]"
      ], "bg-primary-600 absolute start-0 top-0 z-10 h-full w-1/3 rounded-lg transition-all duration-300"])}"></div></div></div><div class="nui-slimscroll relative h-[calc(100%_-_128px)] w-full overflow-y-auto px-10"><div class="py-6">`);
      if (unref(activeTab) === "tab-1") {
        _push(`<div class="space-y-4"><div class="border-muted-200 dark:border-muted-600 dark:bg-muted-700 flex items-center rounded-lg border bg-white p-4"><div class="relative inline-flex h-9 w-9 items-center justify-center rounded-full"><img${ssrRenderAttr("src", _imports_0)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""></div><div class="ms-3"><h6 class="font-heading text-muted-800 text-sm font-semibold dark:text-white"> You </h6><p class="text-muted-400 font-sans text-xs">Product Manager</p></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "#",
          class: "border-muted-200 text-muted-400 hover:border-primary-500 hover:text-primary-500 dark:border-muted-500 dark:hover:border-primary-500 ms-auto flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "feather:arrow-right",
                class: "h-4 w-4"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "feather:arrow-right",
                  class: "h-4 w-4"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="border-muted-200 dark:border-muted-600 dark:bg-muted-700 flex items-center rounded-lg border bg-white p-4"><div class="relative inline-flex h-9 w-9 items-center justify-center rounded-full"><img${ssrRenderAttr("src", _imports_1)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""></div><div class="ms-3"><h6 class="font-heading text-muted-800 text-sm font-semibold dark:text-white"> Aaaron Splatter </h6><p class="text-muted-400 font-sans text-xs">Mobile Developer</p></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "#",
          class: "border-muted-200 text-muted-400 hover:border-primary-500 hover:text-primary-500 dark:border-muted-500 dark:hover:border-primary-500 ms-auto flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "feather:arrow-right",
                class: "h-4 w-4"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "feather:arrow-right",
                  class: "h-4 w-4"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="border-muted-200 dark:border-muted-600 dark:bg-muted-700 flex items-center rounded-lg border bg-white p-4"><div class="relative inline-flex h-9 w-9 items-center justify-center rounded-full"><img${ssrRenderAttr("src", _imports_2)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""></div><div class="ms-3"><h6 class="font-heading text-muted-800 text-sm font-semibold dark:text-white"> Mike Miller </h6><p class="text-muted-400 font-sans text-xs">Frontend Developer</p></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "#",
          class: "border-muted-200 text-muted-400 hover:border-primary-500 hover:text-primary-500 dark:border-muted-500 dark:hover:border-primary-500 ms-auto flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "feather:arrow-right",
                class: "h-4 w-4"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "feather:arrow-right",
                  class: "h-4 w-4"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="border-muted-200 dark:border-muted-600 dark:bg-muted-700 flex items-center rounded-lg border bg-white p-4"><div class="relative inline-flex h-9 w-9 items-center justify-center rounded-full"><img${ssrRenderAttr("src", _imports_1$1)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""></div><div class="ms-3"><h6 class="font-heading text-muted-800 text-sm font-semibold dark:text-white"> Clarissa Perez </h6><p class="text-muted-400 font-sans text-xs">Sales Manager</p></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "#",
          class: "border-muted-200 text-muted-400 hover:border-primary-500 hover:text-primary-500 dark:border-muted-500 dark:hover:border-primary-500 ms-auto flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "feather:arrow-right",
                class: "h-4 w-4"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "feather:arrow-right",
                  class: "h-4 w-4"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else if (unref(activeTab) === "tab-2") {
        _push(`<div class="space-y-4"><div class="border-muted-200 dark:border-muted-600 dark:bg-muted-700 rounded-lg border bg-white p-4"><div class="mb-4 flex items-center"><div class="relative inline-flex h-9 w-9 items-center justify-center rounded-xl"><img${ssrRenderAttr("src", _imports_4)} class="max-w-full rounded-xl object-cover shadow-sm dark:border-transparent" alt=""></div><div class="ms-3"><h6 class="font-heading text-muted-800 text-sm font-semibold dark:text-white"> The slicer project </h6><p class="text-muted-400 font-sans text-xs">getslicer.io</p></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "#",
          class: "border-muted-200 text-muted-400 hover:border-primary-500 hover:text-primary-500 dark:border-muted-500 dark:hover:border-primary-500 ms-auto flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "feather:arrow-right",
                class: "h-4 w-4"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "feather:arrow-right",
                  class: "h-4 w-4"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="bg-muted-200 dark:bg-muted-800 relative mb-4 h-1 w-full overflow-hidden rounded-lg"><div class="bg-primary-500 absolute start-0 top-0 h-full w-[34%] rounded-lg transition duration-300"></div></div><div class="flex items-center justify-between"><span class="text-muted-400 font-sans">5/24</span><div class="flex items-end"><div class="dark:border-muted-700 relative -ms-2 inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white"><img${ssrRenderAttr("src", _imports_0)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""></div><div class="dark:border-muted-700 relative -ms-2 inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white"><img${ssrRenderAttr("src", _imports_2)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""></div><div class="dark:border-muted-700 relative -ms-2 inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white"><img${ssrRenderAttr("src", _imports_3)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""></div><div class="bg-muted-200 dark:border-muted-700 dark:bg-muted-800 relative -ms-2 inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white"><span class="font-alt text-muted-500 dark:text-muted-300 -ms-1 text-sm font-normal uppercase"> +3 </span></div></div></div></div><div class="border-muted-200 dark:border-muted-600 dark:bg-muted-700 rounded-lg border bg-white p-4"><div class="mb-4 flex items-center"><div class="relative inline-flex h-9 w-9 items-center justify-center rounded-xl"><img${ssrRenderAttr("src", _imports_6)} class="max-w-full rounded-xl object-cover shadow-sm dark:border-transparent" alt=""></div><div class="ms-3"><h6 class="font-heading text-muted-800 text-sm font-semibold dark:text-white"> Metamovies reworked </h6><p class="text-muted-400 font-sans text-xs">metamovies.co</p></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "#",
          class: "border-muted-200 text-muted-400 hover:border-primary-500 hover:text-primary-500 dark:border-muted-500 dark:hover:border-primary-500 ms-auto flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "feather:arrow-right",
                class: "h-4 w-4"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "feather:arrow-right",
                  class: "h-4 w-4"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="bg-muted-200 dark:bg-muted-800 relative mb-4 h-1 w-full overflow-hidden rounded-lg"><div class="bg-primary-500 absolute start-0 top-0 h-full w-[88%] rounded-lg transition duration-300"></div></div><div class="flex items-center justify-between"><span class="text-muted-400 font-sans">28/31</span><div class="flex items-end"><div class="dark:border-muted-700 relative -ms-2 inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white"><img${ssrRenderAttr("src", _imports_7)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""></div><div class="dark:border-muted-700 relative -ms-2 inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white"><img${ssrRenderAttr("src", _imports_8)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""></div></div></div></div><div class="border-muted-200 dark:border-muted-600 dark:bg-muted-700 rounded-lg border bg-white p-4"><div class="mb-4 flex items-center"><div class="relative inline-flex h-9 w-9 items-center justify-center rounded-xl"><img${ssrRenderAttr("src", _imports_9)} class="max-w-full rounded-xl object-cover shadow-sm dark:border-transparent" alt=""></div><div class="ms-3"><h6 class="font-heading text-muted-800 text-sm font-semibold dark:text-white"> Fast Pizza redesign </h6><p class="text-muted-400 font-sans text-xs">fastpizza.com</p></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "#",
          class: "border-muted-200 text-muted-400 hover:border-primary-500 hover:text-primary-500 dark:border-muted-500 dark:hover:border-primary-500 ms-auto flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "feather:arrow-right",
                class: "h-4 w-4"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "feather:arrow-right",
                  class: "h-4 w-4"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="bg-muted-200 dark:bg-muted-800 relative mb-4 h-1 w-full overflow-hidden rounded-lg"><div class="bg-primary-500 absolute start-0 top-0 h-full w-[62%] rounded-lg transition duration-300"></div></div><div class="flex items-center justify-between"><span class="text-muted-400 font-sans">25/39</span><div class="flex items-end"><div class="dark:border-muted-700 relative -ms-2 inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white"><img${ssrRenderAttr("src", _imports_2$1)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""></div><div class="dark:border-muted-700 relative -ms-2 inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white"><img${ssrRenderAttr("src", _imports_2)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""></div></div></div></div></div>`);
      } else if (unref(activeTab) === "tab-3") {
        _push(`<div class="space-y-4"><div><div class="after:border-muted-300 dark:after:border-muted-600 relative flex pb-8 after:absolute after:start-4 after:top-10 after:h-[calc(100%_-_36px)] after:w-px after:border-l after:content-[&#39;&#39;]"><div class="border-muted-200 text-muted-400 after:border-muted-300 dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600 relative flex h-9 w-9 items-center justify-center rounded-full border bg-white shadow-lg after:absolute after:-end-8 after:top-4 after:h-px after:w-5 after:border-t after:content-[&#39;&#39;]">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:phone-duotone",
          class: ""
        }, null, _parent));
        _push(`</div><div class="ms-10"><h6 class="font-heading text-muted-800 text-sm font-semibold dark:text-white"> Call Danny at Colby&#39;s </h6><p class="text-muted-400 font-sans text-xs">Today - 11:30am</p></div></div><div class="after:border-muted-300 dark:after:border-muted-600 relative flex pb-8 after:absolute after:start-4 after:top-10 after:h-[calc(100%_-_36px)] after:w-px after:border-l after:content-[&#39;&#39;]"><div class="border-muted-200 text-muted-400 after:border-muted-300 dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600 relative flex h-9 w-9 items-center justify-center rounded-full border bg-white shadow-lg after:absolute after:-end-8 after:top-4 after:h-px after:w-5 after:border-t after:content-[&#39;&#39;]"><div class="relative inline-flex h-7 w-7 items-center justify-center rounded-full"><img${ssrRenderAttr("src", _imports_2)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""></div></div><div class="ms-10"><h6 class="font-heading text-muted-800 text-sm font-semibold dark:text-white"> Meeting with Mike </h6><p class="text-muted-400 font-sans text-xs">Today - 01:00pm</p></div></div><div class="after:border-muted-300 dark:after:border-muted-600 relative flex pb-8 after:absolute after:start-4 after:top-10 after:h-[calc(100%_-_36px)] after:w-px after:border-l after:content-[&#39;&#39;]"><div class="border-muted-200 text-muted-400 after:border-muted-300 dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600 relative flex h-9 w-9 items-center justify-center rounded-full border bg-white shadow-lg after:absolute after:-end-8 after:top-4 after:h-px after:w-5 after:border-t after:content-[&#39;&#39;]">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:chat-circle-duotone",
          class: ""
        }, null, _parent));
        _push(`</div><div class="ms-10"><h6 class="font-heading text-muted-800 text-sm font-semibold dark:text-white"> Answer Annie&#39;s message </h6><p class="text-muted-400 font-sans text-xs">Today - 01:45pm</p></div></div><div class="after:border-muted-300 dark:after:border-muted-600 relative flex pb-8 after:absolute after:start-4 after:top-10 after:h-[calc(100%_-_36px)] after:w-px after:border-l after:content-[&#39;&#39;]"><div class="border-muted-200 text-muted-400 after:border-muted-300 dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600 relative flex h-9 w-9 items-center justify-center rounded-full border bg-white shadow-lg after:absolute after:-end-8 after:top-4 after:h-px after:w-5 after:border-t after:content-[&#39;&#39;]"><div class="relative inline-flex h-7 w-7 items-center justify-center rounded-full"><img${ssrRenderAttr("src", _imports_1$2)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""></div></div><div class="ms-10"><h6 class="font-heading text-muted-800 text-sm font-semibold dark:text-white"> Meeting with John </h6><p class="text-muted-400 font-sans text-xs">Today - 03:00pm</p></div></div><div class="after:border-muted-300 dark:after:border-muted-600 relative flex pb-8 after:absolute after:start-4 after:top-10 after:h-[calc(100%_-_36px)] after:w-px after:border-l after:content-[&#39;&#39;]"><div class="border-muted-200 text-muted-400 after:border-muted-300 dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600 relative flex h-9 w-9 items-center justify-center rounded-full border bg-white shadow-lg after:absolute after:-end-8 after:top-4 after:h-px after:w-5 after:border-t after:content-[&#39;&#39;]">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:envelope-duotone",
          class: ""
        }, null, _parent));
        _push(`</div><div class="ms-10"><h6 class="font-heading text-muted-800 text-sm font-semibold dark:text-white"> Send marketing campaign </h6><p class="text-muted-400 font-sans text-xs">Today - 03:30pm</p></div></div><div class="after:border-muted-300 dark:after:border-muted-600 relative flex pb-8 after:absolute after:start-4 after:top-10 after:h-[calc(100%_-_36px)] after:w-px after:border-l after:content-[&#39;&#39;]"><div class="border-muted-200 text-muted-400 after:border-muted-300 dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600 relative flex h-9 w-9 items-center justify-center rounded-full border bg-white shadow-lg after:absolute after:-end-8 after:top-4 after:h-px after:w-5 after:border-t after:content-[&#39;&#39;]">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:selection-all-duotone",
          class: ""
        }, null, _parent));
        _push(`</div><div class="ms-10"><h6 class="font-heading text-muted-800 text-sm font-semibold dark:text-white"> Project review </h6><p class="text-muted-400 font-sans text-xs">Today - 04:30pm</p></div></div><div class="after:border-muted-300 dark:after:border-muted-600 relative flex pb-8 after:absolute after:start-4 after:top-10 after:h-[calc(100%_-_36px)] after:w-px after:border-l after:content-[&#39;&#39;]"><div class="border-muted-200 text-muted-400 after:border-muted-300 dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600 relative flex h-9 w-9 items-center justify-center rounded-full border bg-white shadow-lg after:absolute after:-end-8 after:top-4 after:h-px after:w-5 after:border-t after:content-[&#39;&#39;]">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:note-duotone",
          class: ""
        }, null, _parent));
        _push(`</div><div class="ms-10"><h6 class="font-heading text-muted-800 text-sm font-semibold dark:text-white"> Write proposal for Andy </h6><p class="text-muted-400 font-sans text-xs">Today - 06:30pm</p></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/DemoPanelActivity.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=DemoPanelActivity-b74dc326.mjs.map
