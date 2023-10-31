import { _ as _sfc_main$1 } from './TairoContentWrapper-00ef8dfe.mjs';
import { J as useRoute, u as useRouter, g as _sfc_main$z, d as _sfc_main$x, f as __nuxt_component_2, Q as _sfc_main$3, j as _sfc_main$C, s as _sfc_main$E, _ as _sfc_main$p } from '../server.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$2 } from './BaseDropdownItem-864908ca.mjs';
import { _ as __nuxt_component_3 } from './BaseDropdownDivider-258f8823.mjs';
import { _ as _sfc_main$4 } from './BasePagination-2a742261.mjs';
import { defineComponent, computed, ref, watch, withAsyncContext, withCtx, unref, isRef, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, TransitionGroup, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-45c1546c.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1 } from './placeholder-search-3-dark-6d66ff32.mjs';
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
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tile-grid-3",
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
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/recipes", {
      query
    }, "$p8QRGXOhTp")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoContentWrapper = _sfc_main$1;
      const _component_BaseInput = _sfc_main$z;
      const _component_BaseButton = _sfc_main$x;
      const _component_Icon = __nuxt_component_2;
      const _component_BasePlaceholderPage = _sfc_main$3;
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseDropdown = _sfc_main$1$1;
      const _component_BaseDropdownItem = _sfc_main$2;
      const _component_BaseDropdownDivider = __nuxt_component_3;
      const _component_BasePagination = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_TairoContentWrapper, null, {
        left: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseInput, {
              modelValue: unref(filter),
              "onUpdate:modelValue": ($event) => isRef(filter) ? filter.value = $event : null,
              icon: "lucide:search",
              shape: "curved",
              placeholder: "Filter recipes...",
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
                shape: "curved",
                placeholder: "Filter recipes...",
                classes: {
                  wrapper: "w-full sm:w-auto"
                }
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        right: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseButton, {
              class: "w-full sm:w-32",
              shape: "curved"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Manage`);
                } else {
                  return [
                    createTextVNode("Manage")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "primary",
              class: "w-full sm:w-32",
              shape: "curved"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:plus",
                    class: "h-4 w-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>Upload</span>`);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:plus",
                      class: "h-4 w-4"
                    }),
                    createVNode("span", null, "Upload")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseButton, {
                class: "w-full sm:w-32",
                shape: "curved"
              }, {
                default: withCtx(() => [
                  createTextVNode("Manage")
                ]),
                _: 1
              }),
              createVNode(_component_BaseButton, {
                color: "primary",
                class: "w-full sm:w-32",
                shape: "curved"
              }, {
                default: withCtx(() => [
                  createVNode(_component_Icon, {
                    name: "lucide:plus",
                    class: "h-4 w-4"
                  }),
                  createVNode("span", null, "Upload")
                ]),
                _: 1
              })
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
              _push2(`<div class="ltablet:grid-cols-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"${_scopeId}><!--[-->`);
              ssrRenderList(unref(data)?.data, (item, index) => {
                _push2(ssrRenderComponent(_component_BaseCard, {
                  key: index,
                  shape: "curved",
                  class: "p-3"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="flex w-full items-center gap-2"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseAvatar, {
                        src: item.icon,
                        "badge-src": item.author.avatar,
                        "data-nui-tooltip": `by ${item.author.name}`,
                        size: "md",
                        class: "bg-muted-100 dark:bg-muted-700/70"
                      }, null, _parent3, _scopeId2));
                      _push3(`<div${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseHeading, {
                        tag: "h3",
                        size: "sm",
                        weight: "medium",
                        class: "text-muted-800 dark:text-muted-100"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(item.name)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(item.name), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`<div class="flex items-center justify-center gap-6 sm:justify-start sm:gap-0"${_scopeId2}><div class="text-muted-400 mt-3 flex items-center gap-1 text-left text-xs sm:mt-0"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "lucide:archive",
                        class: "h-3 w-3"
                      }, null, _parent3, _scopeId2));
                      _push3(`<span${_scopeId2}>${ssrInterpolate(item.category)}</span></div><div class="hidden px-2 sm:block"${_scopeId2}><span${_scopeId2}>\xB7</span></div><div class="text-muted-400 mt-3 flex items-center gap-1 text-left text-xs sm:mt-0"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "lucide:clock",
                        class: "h-3 w-3"
                      }, null, _parent3, _scopeId2));
                      _push3(`<span${_scopeId2}>${ssrInterpolate(item.duration)}</span></div><div class="hidden px-2 sm:block"${_scopeId2}><span${_scopeId2}>\xB7</span></div><div class="text-muted-400 mt-3 flex items-center gap-1 text-left text-xs sm:mt-0"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "lucide:paperclip",
                        class: "h-3 w-3"
                      }, null, _parent3, _scopeId2));
                      _push3(`<span${_scopeId2}>${ssrInterpolate(item.attachments)}</span></div></div></div><div class="ms-auto"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseDropdown, {
                        flavor: "context",
                        label: "Dropdown",
                        orientation: "end",
                        size: "md",
                        class: "z-20",
                        shape: "curved"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_BaseDropdownItem, {
                              to: "#",
                              title: "Download",
                              text: "Download recipe"
                            }, {
                              start: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Icon, {
                                    name: "ph:download-duotone",
                                    class: "me-2 block h-5 w-5"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Icon, {
                                      name: "ph:download-duotone",
                                      class: "me-2 block h-5 w-5"
                                    })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_BaseDropdownDivider, null, null, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_BaseDropdownItem, {
                              to: "#",
                              title: "Share",
                              text: "Share recipe"
                            }, {
                              start: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Icon, {
                                    name: "ph:share-duotone",
                                    class: "me-2 block h-5 w-5"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Icon, {
                                      name: "ph:share-duotone",
                                      class: "me-2 block h-5 w-5"
                                    })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_BaseDropdownDivider, null, null, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_BaseDropdownItem, {
                              to: "#",
                              title: "Save",
                              text: "Save recipe"
                            }, {
                              start: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Icon, {
                                    name: "ph:bookmark-simple-duotone",
                                    class: "me-2 block h-5 w-5"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Icon, {
                                      name: "ph:bookmark-simple-duotone",
                                      class: "me-2 block h-5 w-5"
                                    })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_BaseDropdownItem, {
                                to: "#",
                                title: "Download",
                                text: "Download recipe"
                              }, {
                                start: withCtx(() => [
                                  createVNode(_component_Icon, {
                                    name: "ph:download-duotone",
                                    class: "me-2 block h-5 w-5"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BaseDropdownDivider),
                              createVNode(_component_BaseDropdownItem, {
                                to: "#",
                                title: "Share",
                                text: "Share recipe"
                              }, {
                                start: withCtx(() => [
                                  createVNode(_component_Icon, {
                                    name: "ph:share-duotone",
                                    class: "me-2 block h-5 w-5"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BaseDropdownDivider),
                              createVNode(_component_BaseDropdownItem, {
                                to: "#",
                                title: "Save",
                                text: "Save recipe"
                              }, {
                                start: withCtx(() => [
                                  createVNode(_component_Icon, {
                                    name: "ph:bookmark-simple-duotone",
                                    class: "me-2 block h-5 w-5"
                                  })
                                ]),
                                _: 1
                              })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "flex w-full items-center gap-2" }, [
                          createVNode(_component_BaseAvatar, {
                            src: item.icon,
                            "badge-src": item.author.avatar,
                            "data-nui-tooltip": `by ${item.author.name}`,
                            size: "md",
                            class: "bg-muted-100 dark:bg-muted-700/70"
                          }, null, 8, ["src", "badge-src", "data-nui-tooltip"]),
                          createVNode("div", null, [
                            createVNode(_component_BaseHeading, {
                              tag: "h3",
                              size: "sm",
                              weight: "medium",
                              class: "text-muted-800 dark:text-muted-100"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("div", { class: "flex items-center justify-center gap-6 sm:justify-start sm:gap-0" }, [
                              createVNode("div", { class: "text-muted-400 mt-3 flex items-center gap-1 text-left text-xs sm:mt-0" }, [
                                createVNode(_component_Icon, {
                                  name: "lucide:archive",
                                  class: "h-3 w-3"
                                }),
                                createVNode("span", null, toDisplayString(item.category), 1)
                              ]),
                              createVNode("div", { class: "hidden px-2 sm:block" }, [
                                createVNode("span", null, "\xB7")
                              ]),
                              createVNode("div", { class: "text-muted-400 mt-3 flex items-center gap-1 text-left text-xs sm:mt-0" }, [
                                createVNode(_component_Icon, {
                                  name: "lucide:clock",
                                  class: "h-3 w-3"
                                }),
                                createVNode("span", null, toDisplayString(item.duration), 1)
                              ]),
                              createVNode("div", { class: "hidden px-2 sm:block" }, [
                                createVNode("span", null, "\xB7")
                              ]),
                              createVNode("div", { class: "text-muted-400 mt-3 flex items-center gap-1 text-left text-xs sm:mt-0" }, [
                                createVNode(_component_Icon, {
                                  name: "lucide:paperclip",
                                  class: "h-3 w-3"
                                }),
                                createVNode("span", null, toDisplayString(item.attachments), 1)
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "ms-auto" }, [
                            createVNode(_component_BaseDropdown, {
                              flavor: "context",
                              label: "Dropdown",
                              orientation: "end",
                              size: "md",
                              class: "z-20",
                              shape: "curved"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_BaseDropdownItem, {
                                  to: "#",
                                  title: "Download",
                                  text: "Download recipe"
                                }, {
                                  start: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "ph:download-duotone",
                                      class: "me-2 block h-5 w-5"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_BaseDropdownDivider),
                                createVNode(_component_BaseDropdownItem, {
                                  to: "#",
                                  title: "Share",
                                  text: "Share recipe"
                                }, {
                                  start: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "ph:share-duotone",
                                      class: "me-2 block h-5 w-5"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_BaseDropdownDivider),
                                createVNode(_component_BaseDropdownItem, {
                                  to: "#",
                                  title: "Save",
                                  text: "Save recipe"
                                }, {
                                  start: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "ph:bookmark-simple-duotone",
                                      class: "me-2 block h-5 w-5"
                                    })
                                  ]),
                                  _: 1
                                })
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
              _push2(`<!--]--></div>`);
            }
            if (!unref(pending) && unref(data)?.data.length !== 0) {
              _push2(`<div class="mt-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BasePagination, {
                "total-items": unref(data)?.total ?? 0,
                "item-per-page": unref(perPage),
                "current-page": unref(page),
                shape: "curved"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
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
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "ltablet:grid-cols-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                }, [
                  createVNode(TransitionGroup, {
                    "enter-active-class": "transform-gpu",
                    "enter-from-class": "opacity-0 -translate-x-full",
                    "enter-to-class": "opacity-100 translate-x-0",
                    "leave-active-class": "absolute transform-gpu",
                    "leave-from-class": "opacity-100 translate-x-0",
                    "leave-to-class": "opacity-0 -translate-x-full"
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(data)?.data, (item, index) => {
                        return openBlock(), createBlock(_component_BaseCard, {
                          key: index,
                          shape: "curved",
                          class: "p-3"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex w-full items-center gap-2" }, [
                              createVNode(_component_BaseAvatar, {
                                src: item.icon,
                                "badge-src": item.author.avatar,
                                "data-nui-tooltip": `by ${item.author.name}`,
                                size: "md",
                                class: "bg-muted-100 dark:bg-muted-700/70"
                              }, null, 8, ["src", "badge-src", "data-nui-tooltip"]),
                              createVNode("div", null, [
                                createVNode(_component_BaseHeading, {
                                  tag: "h3",
                                  size: "sm",
                                  weight: "medium",
                                  class: "text-muted-800 dark:text-muted-100"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.name), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("div", { class: "flex items-center justify-center gap-6 sm:justify-start sm:gap-0" }, [
                                  createVNode("div", { class: "text-muted-400 mt-3 flex items-center gap-1 text-left text-xs sm:mt-0" }, [
                                    createVNode(_component_Icon, {
                                      name: "lucide:archive",
                                      class: "h-3 w-3"
                                    }),
                                    createVNode("span", null, toDisplayString(item.category), 1)
                                  ]),
                                  createVNode("div", { class: "hidden px-2 sm:block" }, [
                                    createVNode("span", null, "\xB7")
                                  ]),
                                  createVNode("div", { class: "text-muted-400 mt-3 flex items-center gap-1 text-left text-xs sm:mt-0" }, [
                                    createVNode(_component_Icon, {
                                      name: "lucide:clock",
                                      class: "h-3 w-3"
                                    }),
                                    createVNode("span", null, toDisplayString(item.duration), 1)
                                  ]),
                                  createVNode("div", { class: "hidden px-2 sm:block" }, [
                                    createVNode("span", null, "\xB7")
                                  ]),
                                  createVNode("div", { class: "text-muted-400 mt-3 flex items-center gap-1 text-left text-xs sm:mt-0" }, [
                                    createVNode(_component_Icon, {
                                      name: "lucide:paperclip",
                                      class: "h-3 w-3"
                                    }),
                                    createVNode("span", null, toDisplayString(item.attachments), 1)
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "ms-auto" }, [
                                createVNode(_component_BaseDropdown, {
                                  flavor: "context",
                                  label: "Dropdown",
                                  orientation: "end",
                                  size: "md",
                                  class: "z-20",
                                  shape: "curved"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_BaseDropdownItem, {
                                      to: "#",
                                      title: "Download",
                                      text: "Download recipe"
                                    }, {
                                      start: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "ph:download-duotone",
                                          class: "me-2 block h-5 w-5"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_BaseDropdownDivider),
                                    createVNode(_component_BaseDropdownItem, {
                                      to: "#",
                                      title: "Share",
                                      text: "Share recipe"
                                    }, {
                                      start: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "ph:share-duotone",
                                          class: "me-2 block h-5 w-5"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_BaseDropdownDivider),
                                    createVNode(_component_BaseDropdownItem, {
                                      to: "#",
                                      title: "Save",
                                      text: "Save recipe"
                                    }, {
                                      start: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "ph:bookmark-simple-duotone",
                                          class: "me-2 block h-5 w-5"
                                        })
                                      ]),
                                      _: 1
                                    })
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
                ])),
                !unref(pending) && unref(data)?.data.length !== 0 ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "mt-4"
                }, [
                  createVNode(_component_BasePagination, {
                    "total-items": unref(data)?.total ?? 0,
                    "item-per-page": unref(perPage),
                    "current-page": unref(page),
                    shape: "curved"
                  }, null, 8, ["total-items", "item-per-page", "current-page"])
                ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/tile-grid-3.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=tile-grid-3-a582e889.mjs.map
