import { e as __nuxt_component_0$5, _ as _sfc_main$p, b as _sfc_main$o, f as __nuxt_component_2, s as _sfc_main$E, i as _sfc_main$D, d as _sfc_main$x } from '../server.mjs';
import __nuxt_component_0 from './TairoLogo-688db51d.mjs';
import { _ as _sfc_main$1 } from './BaseThemeToggle-8b5dbd48.mjs';
import { _ as _sfc_main$2 } from './BaseRadioHeadless-286f432f.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, createTextVNode, unref, isRef, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
import './composables-f7cb2fae.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "onboarding-3",
  __ssrInlineRender: true,
  setup(__props) {
    const roleType = ref(0);
    const roles = [
      {
        id: 0,
        name: "Javascript",
        avatar: "/img/avatars/24.svg",
        logo: "/img/stacks/js.svg"
      },
      {
        id: 1,
        name: "Vue",
        avatar: "/img/avatars/2.svg",
        logo: "/img/stacks/vuejs.svg"
      },
      {
        id: 2,
        name: "React",
        avatar: "/img/avatars/3.svg",
        logo: "/img/stacks/reactjs.svg"
      },
      {
        id: 3,
        name: "Angular",
        avatar: "/img/avatars/25.svg",
        logo: "/img/stacks/angular.svg"
      },
      {
        id: 4,
        name: "Python",
        avatar: "/img/avatars/11.svg",
        logo: "/img/stacks/python.svg"
      },
      {
        id: 5,
        name: "C#",
        avatar: "/img/avatars/16.svg",
        logo: "/img/stacks/csharp.svg"
      },
      {
        id: 6,
        name: "Ruby",
        avatar: "/img/avatars/20.svg",
        logo: "/img/stacks/ruby.svg"
      },
      {
        id: 7,
        name: "Android",
        avatar: "/img/avatars/21.svg",
        logo: "/img/stacks/android.svg"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_TairoLogo = __nuxt_component_0;
      const _component_BaseThemeToggle = _sfc_main$1;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseRadioHeadless = _sfc_main$2;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BaseText = _sfc_main$D;
      const _component_BaseButton = _sfc_main$x;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-muted-100 dark:bg-muted-900 min-h-screen" }, _attrs))}><div class="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-muted-400 hover:text-primary-500 dark:text-muted-700 dark:hover:text-primary-500 transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TairoLogo, { class: "h-10 w-10" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TairoLogo, { class: "h-10 w-10" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center gap-4">`);
      _push(ssrRenderComponent(_component_BaseThemeToggle, null, null, _parent));
      _push(`</div></div><form action="" method="POST" class="mx-auto max-w-7xl px-4"><div><div class="pt-8 text-center">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        tag: "h2",
        size: "3xl",
        weight: "medium",
        class: "mb-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Choose a profile `);
          } else {
            return [
              createTextVNode(" Choose a profile ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, { class: "text-muted-500 dark:text-muted-400 mb-8" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Pick one of the following roles based on your skills `);
          } else {
            return [
              createTextVNode(" Pick one of the following roles based on your skills ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div><div class="w-full"><div class="mx-auto w-full max-w-3xl"><div class="w-full"><div class="mb-8 grid grid-cols-3 sm:grid-cols-4"><!--[-->`);
      ssrRenderList(roles, (role) => {
        _push(`<div class="relative flex items-center justify-center p-4">`);
        _push(ssrRenderComponent(_component_BaseRadioHeadless, {
          modelValue: unref(roleType),
          "onUpdate:modelValue": ($event) => isRef(roleType) ? roleType.value = $event : null,
          name: `role-${role.id}`,
          value: role.id,
          class: "h-full w-full"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="relative mx-auto flex h-20 w-20 items-center justify-center grayscale transition-all duration-200 peer-checked:grayscale-0 peer-checked:[&amp;_.child]:opacity-100"${_scopeId}><div class="child dark:bg-muted-900 absolute end-0 top-0 z-20 flex h-6 w-6 items-center justify-center rounded-full bg-white opacity-0"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ph:check-circle-duotone",
                class: "text-primary-500 h-6 w-6"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_BaseAvatar, {
                size: "xl",
                src: role.avatar,
                "badge-src": role.logo,
                shape: "full",
                class: "group-focus-within:outline-muted-300 dark:group-focus-within:outline-muted-600 mx-auto group-focus-within:outline-dashed group-focus-within:outline-offset-2"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="mt-3 text-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseText, {
                size: "sm",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(role.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(role.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "relative mx-auto flex h-20 w-20 items-center justify-center grayscale transition-all duration-200 peer-checked:grayscale-0 peer-checked:[&_.child]:opacity-100" }, [
                  createVNode("div", { class: "child dark:bg-muted-900 absolute end-0 top-0 z-20 flex h-6 w-6 items-center justify-center rounded-full bg-white opacity-0" }, [
                    createVNode(_component_Icon, {
                      name: "ph:check-circle-duotone",
                      class: "text-primary-500 h-6 w-6"
                    })
                  ]),
                  createVNode(_component_BaseAvatar, {
                    size: "xl",
                    src: role.avatar,
                    "badge-src": role.logo,
                    shape: "full",
                    class: "group-focus-within:outline-muted-300 dark:group-focus-within:outline-muted-600 mx-auto group-focus-within:outline-dashed group-focus-within:outline-offset-2"
                  }, null, 8, ["src", "badge-src"])
                ]),
                createVNode("div", { class: "mt-3 text-center" }, [
                  createVNode(_component_BaseText, {
                    size: "sm",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(role.name), 1)
                    ]),
                    _: 2
                  }, 1024)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="mx-auto flex flex-col items-center">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        to: "/dashboards",
        type: "button",
        shape: "curved",
        class: "!h-12 w-48",
        color: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Choose Profile`);
          } else {
            return [
              createTextVNode("Choose Profile")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "text-muted-400 hover:text-primary-500 mt-4 text-xs font-medium underline-offset-4 transition-colors duration-300 hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Learn More`);
          } else {
            return [
              createTextVNode("Learn More")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></div></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/onboarding-3.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=onboarding-3-ee8232a2.mjs.map
