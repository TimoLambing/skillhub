import { _ as _sfc_main$1 } from './TairoContentWrapper-00ef8dfe.mjs';
import { J as useRoute, u as useRouter, g as _sfc_main$z, Q as _sfc_main$3, j as _sfc_main$C, s as _sfc_main$E, e as __nuxt_component_0$5, f as __nuxt_component_2, d as _sfc_main$x } from '../server.mjs';
import { _ as _sfc_main$2 } from './BaseSelect-50588309.mjs';
import { _ as _sfc_main$4 } from './BaseProgress-1402c581.mjs';
import { _ as _sfc_main$5 } from './BasePagination-2a742261.mjs';
import { defineComponent, computed, ref, watch, withAsyncContext, withCtx, unref, isRef, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, TransitionGroup, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-45c1546c.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1 } from './placeholder-search-6-dark-4b1dcc32.mjs';
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
import './IconChevronDown-af6375e6.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "card-grid-1",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const router = useRouter();
    const page = computed(() => parseInt(route.query.page ?? "1"));
    const filter = ref("");
    const perPage = ref(10);
    watch([filter, perPage], () => {
      router.push({
        query: {
          page: void 0
        }
      });
    });
    const query = computed(() => {
      return {
        filter: filter.value,
        perPage: perPage.value,
        page: page.value
      };
    });
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/company/members/",
      {
        query
      },
      "$q3hloeDYUs"
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoContentWrapper = _sfc_main$1;
      const _component_BaseInput = _sfc_main$z;
      const _component_BaseSelect = _sfc_main$2;
      const _component_BasePlaceholderPage = _sfc_main$3;
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseAvatar = _sfc_main$E;
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseProgress = _sfc_main$4;
      const _component_BaseButton = _sfc_main$x;
      const _component_BasePagination = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_TairoContentWrapper, null, {
        left: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseInput, {
              modelValue: unref(filter),
              "onUpdate:modelValue": ($event) => isRef(filter) ? filter.value = $event : null,
              icon: "lucide:search",
              placeholder: "Filter users...",
              classes: {
                wrapper: "w-full sm:w-auto"
              }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseInput, {
                modelValue: unref(filter),
                "onUpdate:modelValue": ($event) => isRef(filter) ? filter.value = $event : null,
                icon: "lucide:search",
                placeholder: "Filter users...",
                classes: {
                  wrapper: "w-full sm:w-auto"
                }
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        right: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseSelect, {
              modelValue: unref(perPage),
              "onUpdate:modelValue": ($event) => isRef(perPage) ? perPage.value = $event : null,
              placeholder: "Items per page",
              label: "",
              classes: {
                wrapper: "w-full sm:w-40"
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<option${ssrRenderAttr("value", 10)}${_scopeId2}>10 per page</option><option${ssrRenderAttr("value", 25)}${_scopeId2}>25 per page</option><option${ssrRenderAttr("value", 50)}${_scopeId2}>50 per page</option><option${ssrRenderAttr("value", 100)}${_scopeId2}>100 per page</option>`);
                } else {
                  return [
                    createVNode("option", { value: 10 }, "10 per page"),
                    createVNode("option", { value: 25 }, "25 per page"),
                    createVNode("option", { value: 50 }, "50 per page"),
                    createVNode("option", { value: 100 }, "100 per page")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseSelect, {
                modelValue: unref(perPage),
                "onUpdate:modelValue": ($event) => isRef(perPage) ? perPage.value = $event : null,
                placeholder: "Items per page",
                label: "",
                classes: {
                  wrapper: "w-full sm:w-40"
                }
              }, {
                default: withCtx(() => [
                  createVNode("option", { value: 10 }, "10 per page"),
                  createVNode("option", { value: 25 }, "25 per page"),
                  createVNode("option", { value: 50 }, "50 per page"),
                  createVNode("option", { value: 100 }, "100 per page")
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            if (!unref(pending) && unref(data)?.data.length === 0) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BasePlaceholderPage, {
                title: "No matching results",
                subtitle: "Looks like we couldn't find any matching results for your search terms. Try other search terms."
              }, {
                image: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img class="block dark:hidden"${ssrRenderAttr("src", _imports_0)} alt="Placeholder image"${_scopeId2}><img class="hidden dark:block"${ssrRenderAttr("src", _imports_1)} alt="Placeholder image"${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "block dark:hidden",
                        src: _imports_0,
                        alt: "Placeholder image"
                      }),
                      createVNode("img", {
                        class: "hidden dark:block",
                        src: _imports_1,
                        alt: "Placeholder image"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div${_scopeId}><div class="ltablet:grid-cols-2 grid w-full gap-4 lg:grid-cols-2"${_scopeId}><!--[-->`);
              ssrRenderList(unref(data)?.data, (item) => {
                _push2(ssrRenderComponent(_component_BaseCard, {
                  key: item.id
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="border-muted-200 dark:border-muted-700 flex flex-col items-center border-b p-6 sm:flex-row"${_scopeId2}><div class="flex flex-col items-center gap-3 sm:flex-row"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseAvatar, {
                        src: item.picture,
                        "badge-src": item.badge,
                        text: item.initials,
                        size: "xl",
                        class: "bg-muted-500/20 text-muted-500"
                      }, null, _parent3, _scopeId2));
                      _push3(`<div class="text-center leading-none sm:text-left"${_scopeId2}><h4 class="text-muted-800 dark:text-muted-100 font-sans text-base font-medium"${_scopeId2}>${ssrInterpolate(item.username)}</h4><p class="text-muted-400 font-sans text-sm"${_scopeId2}>${ssrInterpolate(item.position)}</p></div></div><div class="mt-4 flex items-center gap-3 sm:ms-auto sm:mt-0"${_scopeId2}><!--[-->`);
                      ssrRenderList(item.socialProfiles, (link) => {
                        _push3(ssrRenderComponent(_component_NuxtLink, {
                          key: link.name,
                          to: link.url,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          class: "border-muted-200 dark:border-muted-700 hover:border-primary-500 dark:hover:border-primary-500 dark:bg-muted-800 text-muted-400 hover:text-primary-500 shadow-muted-300/30 dark:shadow-muted-700/30 flex h-8 w-8 items-center justify-center rounded-full border bg-white shadow-lg transition-all duration-300"
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(_component_Icon, {
                                name: link.icon,
                                class: "h-3 w-3"
                              }, null, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(_component_Icon, {
                                  name: link.icon,
                                  class: "h-3 w-3"
                                }, null, 8, ["name"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      });
                      _push3(`<!--]--></div></div><div class="flex flex-col items-center justify-between px-6 py-4 sm:flex-row"${_scopeId2}><div class="w-full grow space-y-1 sm:w-auto sm:max-w-[260px]"${_scopeId2}><div class="flex items-center justify-between"${_scopeId2}><h4 class="text-muted-700 dark:text-muted-100 font-sans text-sm font-medium"${_scopeId2}> Progress </h4><div${_scopeId2}><span class="text-muted-400 font-sans text-sm"${_scopeId2}>${ssrInterpolate(item.completed)}% </span></div></div>`);
                      _push3(ssrRenderComponent(_component_BaseProgress, {
                        size: "xs",
                        color: "primary",
                        value: item.completed
                      }, null, _parent3, _scopeId2));
                      _push3(`</div><div class="mt-4 w-full sm:mt-0 sm:w-auto"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseButton, { class: "w-full sm:w-auto" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` View profile `);
                          } else {
                            return [
                              createTextVNode(" View profile ")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "border-muted-200 dark:border-muted-700 flex flex-col items-center border-b p-6 sm:flex-row" }, [
                          createVNode("div", { class: "flex flex-col items-center gap-3 sm:flex-row" }, [
                            createVNode(_component_BaseAvatar, {
                              src: item.picture,
                              "badge-src": item.badge,
                              text: item.initials,
                              size: "xl",
                              class: "bg-muted-500/20 text-muted-500"
                            }, null, 8, ["src", "badge-src", "text"]),
                            createVNode("div", { class: "text-center leading-none sm:text-left" }, [
                              createVNode("h4", { class: "text-muted-800 dark:text-muted-100 font-sans text-base font-medium" }, toDisplayString(item.username), 1),
                              createVNode("p", { class: "text-muted-400 font-sans text-sm" }, toDisplayString(item.position), 1)
                            ])
                          ]),
                          createVNode("div", { class: "mt-4 flex items-center gap-3 sm:ms-auto sm:mt-0" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(item.socialProfiles, (link) => {
                              return openBlock(), createBlock(_component_NuxtLink, {
                                key: link.name,
                                to: link.url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                class: "border-muted-200 dark:border-muted-700 hover:border-primary-500 dark:hover:border-primary-500 dark:bg-muted-800 text-muted-400 hover:text-primary-500 shadow-muted-300/30 dark:shadow-muted-700/30 flex h-8 w-8 items-center justify-center rounded-full border bg-white shadow-lg transition-all duration-300"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_Icon, {
                                    name: link.icon,
                                    class: "h-3 w-3"
                                  }, null, 8, ["name"])
                                ]),
                                _: 2
                              }, 1032, ["to"]);
                            }), 128))
                          ])
                        ]),
                        createVNode("div", { class: "flex flex-col items-center justify-between px-6 py-4 sm:flex-row" }, [
                          createVNode("div", { class: "w-full grow space-y-1 sm:w-auto sm:max-w-[260px]" }, [
                            createVNode("div", { class: "flex items-center justify-between" }, [
                              createVNode("h4", { class: "text-muted-700 dark:text-muted-100 font-sans text-sm font-medium" }, " Progress "),
                              createVNode("div", null, [
                                createVNode("span", { class: "text-muted-400 font-sans text-sm" }, toDisplayString(item.completed) + "% ", 1)
                              ])
                            ]),
                            createVNode(_component_BaseProgress, {
                              size: "xs",
                              color: "primary",
                              value: item.completed
                            }, null, 8, ["value"])
                          ]),
                          createVNode("div", { class: "mt-4 w-full sm:mt-0 sm:w-auto" }, [
                            createVNode(_component_BaseButton, { class: "w-full sm:w-auto" }, {
                              default: withCtx(() => [
                                createTextVNode(" View profile ")
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div><div class="mt-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BasePagination, {
                "total-items": unref(data)?.total ?? 0,
                "item-per-page": unref(perPage),
                "current-page": unref(page),
                shape: "curved"
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                !unref(pending) && unref(data)?.data.length === 0 ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode(_component_BasePlaceholderPage, {
                    title: "No matching results",
                    subtitle: "Looks like we couldn't find any matching results for your search terms. Try other search terms."
                  }, {
                    image: withCtx(() => [
                      createVNode("img", {
                        class: "block dark:hidden",
                        src: _imports_0,
                        alt: "Placeholder image"
                      }),
                      createVNode("img", {
                        class: "hidden dark:block",
                        src: _imports_1,
                        alt: "Placeholder image"
                      })
                    ]),
                    _: 1
                  })
                ])) : (openBlock(), createBlock("div", { key: 1 }, [
                  createVNode("div", { class: "ltablet:grid-cols-2 grid w-full gap-4 lg:grid-cols-2" }, [
                    createVNode(TransitionGroup, {
                      "enter-active-class": "transform-gpu",
                      "enter-from-class": "opacity-0 -translate-x-full",
                      "enter-to-class": "opacity-100 translate-x-0",
                      "leave-active-class": "absolute transform-gpu",
                      "leave-from-class": "opacity-100 translate-x-0",
                      "leave-to-class": "opacity-0 -translate-x-full"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(data)?.data, (item) => {
                          return openBlock(), createBlock(_component_BaseCard, {
                            key: item.id
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "border-muted-200 dark:border-muted-700 flex flex-col items-center border-b p-6 sm:flex-row" }, [
                                createVNode("div", { class: "flex flex-col items-center gap-3 sm:flex-row" }, [
                                  createVNode(_component_BaseAvatar, {
                                    src: item.picture,
                                    "badge-src": item.badge,
                                    text: item.initials,
                                    size: "xl",
                                    class: "bg-muted-500/20 text-muted-500"
                                  }, null, 8, ["src", "badge-src", "text"]),
                                  createVNode("div", { class: "text-center leading-none sm:text-left" }, [
                                    createVNode("h4", { class: "text-muted-800 dark:text-muted-100 font-sans text-base font-medium" }, toDisplayString(item.username), 1),
                                    createVNode("p", { class: "text-muted-400 font-sans text-sm" }, toDisplayString(item.position), 1)
                                  ])
                                ]),
                                createVNode("div", { class: "mt-4 flex items-center gap-3 sm:ms-auto sm:mt-0" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(item.socialProfiles, (link) => {
                                    return openBlock(), createBlock(_component_NuxtLink, {
                                      key: link.name,
                                      to: link.url,
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      class: "border-muted-200 dark:border-muted-700 hover:border-primary-500 dark:hover:border-primary-500 dark:bg-muted-800 text-muted-400 hover:text-primary-500 shadow-muted-300/30 dark:shadow-muted-700/30 flex h-8 w-8 items-center justify-center rounded-full border bg-white shadow-lg transition-all duration-300"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: link.icon,
                                          class: "h-3 w-3"
                                        }, null, 8, ["name"])
                                      ]),
                                      _: 2
                                    }, 1032, ["to"]);
                                  }), 128))
                                ])
                              ]),
                              createVNode("div", { class: "flex flex-col items-center justify-between px-6 py-4 sm:flex-row" }, [
                                createVNode("div", { class: "w-full grow space-y-1 sm:w-auto sm:max-w-[260px]" }, [
                                  createVNode("div", { class: "flex items-center justify-between" }, [
                                    createVNode("h4", { class: "text-muted-700 dark:text-muted-100 font-sans text-sm font-medium" }, " Progress "),
                                    createVNode("div", null, [
                                      createVNode("span", { class: "text-muted-400 font-sans text-sm" }, toDisplayString(item.completed) + "% ", 1)
                                    ])
                                  ]),
                                  createVNode(_component_BaseProgress, {
                                    size: "xs",
                                    color: "primary",
                                    value: item.completed
                                  }, null, 8, ["value"])
                                ]),
                                createVNode("div", { class: "mt-4 w-full sm:mt-0 sm:w-auto" }, [
                                  createVNode(_component_BaseButton, { class: "w-full sm:w-auto" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" View profile ")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "mt-6" }, [
                    createVNode(_component_BasePagination, {
                      "total-items": unref(data)?.total ?? 0,
                      "item-per-page": unref(perPage),
                      "current-page": unref(page),
                      shape: "curved"
                    }, null, 8, ["total-items", "item-per-page", "current-page"])
                  ])
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/card-grid-1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=card-grid-1-5d84e123.mjs.map
