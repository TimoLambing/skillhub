import { s as _sfc_main$E, _ as _sfc_main$p, b as _sfc_main$o, e as __nuxt_component_0$5, f as __nuxt_component_2 } from '../server.mjs';
import { defineComponent, withAsyncContext, resolveComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, resolveDynamicComponent, Transition, openBlock, createBlock, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-45c1546c.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderVNode } from 'vue/server-renderer';
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
  __name: "profile-edit",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/profile", "$P5Z475ujdg")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_Icon = __nuxt_component_2;
      const _component_RouterView = resolveComponent("RouterView");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen overflow-hidden" }, _attrs))}><div class="grid gap-8 sm:grid-cols-12"><div class="col-span-12 sm:col-span-4"><div class="flex w-full items-center gap-2">`);
      _push(ssrRenderComponent(_component_BaseAvatar, {
        src: unref(data)?.personalInfo.picture,
        "badge-src": unref(data)?.personalInfo.badge,
        size: "md"
      }, null, _parent));
      _push(`<div class="">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        tag: "h2",
        size: "md",
        weight: "medium",
        lead: "none"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(data)?.personalInfo.firstName)} ${ssrInterpolate(unref(data)?.personalInfo.lastName)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(data)?.personalInfo.firstName) + " " + toDisplayString(unref(data)?.personalInfo.lastName), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "xs",
        class: "text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(data)?.personalInfo.role)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(data)?.personalInfo.role), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="mt-8 max-w-[240px]"><ul class="space-y-1 font-sans text-sm"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/layouts/profile-edit",
        "exact-active-class": "!text-primary-500 !bg-primary-500/10",
        class: "text-muted-400 hover:text-muted-600 dark:hover:text-muted-200 hover:bg-muted-50 dark:hover:bg-muted-700/50 flex items-center gap-2 rounded-lg p-3 transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:user-duotone",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>General</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ph:user-duotone",
                class: "h-4 w-4"
              }),
              createVNode("span", null, "General")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/layouts/profile-edit/experience",
        "exact-active-class": "!text-primary-500 !bg-primary-500/10",
        class: "text-muted-400 hover:text-muted-600 dark:hover:text-muted-200 hover:bg-muted-50 dark:hover:bg-muted-700/50 flex items-center gap-2 rounded-lg p-3 transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:buildings-duotone",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Experience</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ph:buildings-duotone",
                class: "h-4 w-4"
              }),
              createVNode("span", null, "Experience")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/layouts/profile-edit/skills",
        "exact-active-class": "!text-primary-500 !bg-primary-500/10",
        class: "text-muted-400 hover:text-muted-600 dark:hover:text-muted-200 hover:bg-muted-50 dark:hover:bg-muted-700/50 flex items-center gap-2 rounded-lg p-3 transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:sketch-logo-duotone",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Skills &amp; Tools</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ph:sketch-logo-duotone",
                class: "h-4 w-4"
              }),
              createVNode("span", null, "Skills & Tools")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/layouts/profile-edit/settings",
        "exact-active-class": "!text-primary-500 !bg-primary-500/10",
        class: "text-muted-400 hover:text-muted-600 dark:hover:text-muted-200 hover:bg-muted-50 dark:hover:bg-muted-700/50 flex items-center gap-2 rounded-lg p-3 transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:gear-six-duotone",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Settings</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ph:gear-six-duotone",
                class: "h-4 w-4"
              }),
              createVNode("span", null, "Settings")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div><div class="col-span-12 sm:col-span-8">`);
      _push(ssrRenderComponent(_component_RouterView, null, {
        default: withCtx(({ Component }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(``);
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(Component), null, null), _parent2, _scopeId);
          } else {
            return [
              createVNode(Transition, {
                "enter-active-class": "transition-all duration-500 ease-out",
                "enter-from-class": "translate-y-20 opacity-0",
                "enter-to-class": "translate-y-0 opacity-100",
                "leave-active-class": "transition-all duration-200 ease-in",
                "leave-from-class": "translate-y-0 opacity-100",
                "leave-to-class": "translate-y-20 opacity-0"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(Component)))
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/profile-edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=profile-edit-48b4a506.mjs.map
