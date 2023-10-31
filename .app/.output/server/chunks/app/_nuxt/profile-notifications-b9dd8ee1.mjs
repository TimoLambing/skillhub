import { i as _sfc_main$D, j as _sfc_main$C, s as _sfc_main$E, e as __nuxt_component_0$5 } from '../server.mjs';
import { defineComponent, withAsyncContext, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-45c1546c.mjs';
import { g as getRandomColor } from './colors-16c42002.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
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
  __name: "profile-notifications",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/profile/notifications",
      "$2JDdKh8vK6"
    )), __temp = await __temp, __restore(), __temp);
    const notifications = ref();
    if (data.value) {
      notifications.value = data.value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseText = _sfc_main$D;
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseAvatar = _sfc_main$E;
      const _component_NuxtLink = __nuxt_component_0$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen overflow-hidden" }, _attrs))}><div class="mx-auto w-full max-w-4xl pt-12">`);
      if (unref(notifications).length === 0) {
        _push(`<div></div>`);
      } else {
        _push(`<div class=""><!--[-->`);
        ssrRenderList(unref(notifications), (item) => {
          _push(`<div class="ltablet:after:start-[104px] after:border-muted-300 dark:after:border-muted-800 relative flex items-center gap-4 after:absolute after:start-[8px] after:top-3 after:h-full after:w-px after:border-e-2 after:content-[&#39;&#39;] lg:after:start-[104px] [&amp;:not(:first-child)]:pt-3"><div class="ltablet:block hidden w-24 text-right lg:block">`);
          _push(ssrRenderComponent(_component_BaseText, {
            size: "xs",
            class: "text-muted-400"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.date)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.date), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div><div class="dark:bg-muted-800 relative z-10 h-4 w-4 shrink-0 rounded-full bg-white"><div class="${ssrRenderClass([("getRandomColor" in _ctx ? _ctx.getRandomColor : unref(getRandomColor))(), "h-4 w-4 rounded-full border-2 border-current"])}"></div></div>`);
          _push(ssrRenderComponent(_component_BaseCard, { class: "p-4" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex w-full items-center gap-4"${_scopeId}><div class="${ssrRenderClass([
                  item.status === 0 ? "bg-primary-500" : "bg-muted-300 dark:bg-muted-700/50",
                  "h-2 w-2 shrink-0 rounded-full"
                ])}"${_scopeId}></div>`);
                _push2(ssrRenderComponent(_component_BaseAvatar, {
                  src: item.user.src,
                  size: "sm"
                }, null, _parent2, _scopeId));
                _push2(`<div${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseText, {
                  size: "sm",
                  lead: "tight"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span class="text-muted-800 dark:text-muted-100"${_scopeId2}>${ssrInterpolate(item.user.name)}\xA0</span><span class="text-muted-500 dark:text-muted-400"${_scopeId2}>${ssrInterpolate(item.target.text)}\xA0</span>`);
                      _push3(ssrRenderComponent(_component_NuxtLink, {
                        to: item.target.url,
                        class: "text-primary-500 underline-offset-4 hover:underline"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(item.target.name)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(item.target.name), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`<span class="text-muted-500 dark:text-muted-400"${_scopeId2}>\xA0${ssrInterpolate(item.target.type)}</span>`);
                    } else {
                      return [
                        createVNode("span", { class: "text-muted-800 dark:text-muted-100" }, toDisplayString(item.user.name) + "\xA0", 1),
                        createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, toDisplayString(item.target.text) + "\xA0", 1),
                        createVNode(_component_NuxtLink, {
                          to: item.target.url,
                          class: "text-primary-500 underline-offset-4 hover:underline"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.target.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"]),
                        createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, "\xA0" + toDisplayString(item.target.type), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_BaseText, {
                  size: "xs",
                  class: "text-muted-400"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span class="ltablet:hidden lg:hidden"${_scopeId2}>${ssrInterpolate(item.date)}</span><span class="ltablet:hidden px-2 lg:hidden"${_scopeId2}>\xB7</span><span${_scopeId2}>${ssrInterpolate(item.time)}</span>`);
                    } else {
                      return [
                        createVNode("span", { class: "ltablet:hidden lg:hidden" }, toDisplayString(item.date), 1),
                        createVNode("span", { class: "ltablet:hidden px-2 lg:hidden" }, "\xB7"),
                        createVNode("span", null, toDisplayString(item.time), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div><div class="ms-auto hidden items-center gap-3 sm:flex"${_scopeId}><!--[-->`);
                ssrRenderList(item.people, (user) => {
                  _push2(ssrRenderComponent(_component_BaseAvatar, {
                    key: user.name,
                    src: user.src,
                    size: "xxs"
                  }, null, _parent2, _scopeId));
                });
                _push2(`<!--]--></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "flex w-full items-center gap-4" }, [
                    createVNode("div", {
                      class: [
                        "h-2 w-2 shrink-0 rounded-full",
                        item.status === 0 ? "bg-primary-500" : "bg-muted-300 dark:bg-muted-700/50"
                      ]
                    }, null, 2),
                    createVNode(_component_BaseAvatar, {
                      src: item.user.src,
                      size: "sm"
                    }, null, 8, ["src"]),
                    createVNode("div", null, [
                      createVNode(_component_BaseText, {
                        size: "sm",
                        lead: "tight"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-muted-800 dark:text-muted-100" }, toDisplayString(item.user.name) + "\xA0", 1),
                          createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, toDisplayString(item.target.text) + "\xA0", 1),
                          createVNode(_component_NuxtLink, {
                            to: item.target.url,
                            class: "text-primary-500 underline-offset-4 hover:underline"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.target.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["to"]),
                          createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, "\xA0" + toDisplayString(item.target.type), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_BaseText, {
                        size: "xs",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "ltablet:hidden lg:hidden" }, toDisplayString(item.date), 1),
                          createVNode("span", { class: "ltablet:hidden px-2 lg:hidden" }, "\xB7"),
                          createVNode("span", null, toDisplayString(item.time), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    createVNode("div", { class: "ms-auto hidden items-center gap-3 sm:flex" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(item.people, (user) => {
                        return openBlock(), createBlock(_component_BaseAvatar, {
                          key: user.name,
                          src: user.src,
                          size: "xxs"
                        }, null, 8, ["src"]);
                      }), 128))
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/profile-notifications.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=profile-notifications-b9dd8ee1.mjs.map
