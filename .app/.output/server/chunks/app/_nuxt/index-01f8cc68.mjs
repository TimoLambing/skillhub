import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as _sfc_main$1 } from './TairoContentWrapper-00ef8dfe.mjs';
import { J as useRoute, u as useRouter, g as _sfc_main$z, d as _sfc_main$x, f as __nuxt_component_2, Q as _sfc_main$3, j as _sfc_main$C, s as _sfc_main$E, _ as _sfc_main$p, b as _sfc_main$o } from '../server.mjs';
import { _ as _sfc_main$2 } from './BaseTag-734af285.mjs';
import { _ as _sfc_main$4 } from './BaseAvatarGroup-6e7b4ecf.mjs';
import { _ as _sfc_main$5 } from './BaseButtonAction-57c21d00.mjs';
import { _ as _sfc_main$6 } from './BasePagination-2a742261.mjs';
import { defineComponent, computed, ref, watch, withAsyncContext, withCtx, unref, isRef, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, TransitionGroup, Fragment, renderList, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-45c1546c.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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

const _imports_0 = "" + publicAssetsURL("img/illustrations/placeholders/flat/placeholder-search-1.svg");
const _imports_1 = "" + publicAssetsURL("img/illustrations/placeholders/flat/placeholder-search-1-dark.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
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
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/freelancers", {
      query
    }, "$O1JmbnnPIW")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoContentWrapper = _sfc_main$1;
      const _component_BaseInput = _sfc_main$z;
      const _component_BaseButton = _sfc_main$x;
      const _component_Icon = __nuxt_component_2;
      const _component_BasePlaceholderPage = _sfc_main$3;
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseTag = _sfc_main$2;
      const _component_BaseAvatarGroup = _sfc_main$4;
      const _component_BaseButtonAction = _sfc_main$5;
      const _component_BasePagination = _sfc_main$6;
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
            _push2(ssrRenderComponent(_component_BaseButton, { class: "w-full sm:w-32" }, {
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
              class: "w-full sm:w-32"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:plus",
                    class: "h-4 w-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>Add User</span>`);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:plus",
                      class: "h-4 w-4"
                    }),
                    createVNode("span", null, "Add User")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseButton, { class: "w-full sm:w-32" }, {
                default: withCtx(() => [
                  createTextVNode("Manage")
                ]),
                _: 1
              }),
              createVNode(_component_BaseButton, {
                color: "primary",
                class: "w-full sm:w-32"
              }, {
                default: withCtx(() => [
                  createVNode(_component_Icon, {
                    name: "lucide:plus",
                    class: "h-4 w-4"
                  }),
                  createVNode("span", null, "Add User")
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
              _push2(`<div class="space-y-4"${_scopeId}><!--[-->`);
              ssrRenderList(unref(data)?.data, (item) => {
                _push2(ssrRenderComponent(_component_BaseCard, {
                  key: item.id,
                  shape: "curved",
                  class: "flex flex-col p-5 sm:flex-row sm:items-center"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:justify-start sm:text-left"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseAvatar, {
                        size: "lg",
                        src: item.medias.avatar,
                        "badge-src": item.medias.flag
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
                      _push3(ssrRenderComponent(_component_BaseParagraph, {
                        size: "xs",
                        lead: "none",
                        class: "text-muted-400 flex items-end text-sm"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_Icon, {
                              name: "lucide:map-pin",
                              class: "h-4 w-4"
                            }, null, _parent4, _scopeId3));
                            _push4(`<span${_scopeId3}>${ssrInterpolate(item.location)}</span>`);
                          } else {
                            return [
                              createVNode(_component_Icon, {
                                name: "lucide:map-pin",
                                class: "h-4 w-4"
                              }),
                              createVNode("span", null, toDisplayString(item.location), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div></div><div class="flex flex-col gap-4 pt-4 sm:ms-auto sm:flex-row sm:items-center sm:justify-end sm:pt-0"${_scopeId2}><div class="flex w-full items-center justify-center sm:w-[160px] sm:justify-end"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseTag, {
                        size: "sm",
                        color: "primary",
                        flavor: "pastel",
                        shape: "full"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(item.role)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(item.role), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div><div class="divide-muted-200 dark:divide-muted-700 flex items-center justify-center divide-x"${_scopeId2}><div class="flex flex-col gap-1 px-4 text-center"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseHeading, {
                        tag: "h3",
                        size: "md",
                        weight: "semibold",
                        class: "text-muted-800 dark:text-muted-100"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<span${_scopeId3}>${ssrInterpolate(item.stats.projects)}</span>`);
                          } else {
                            return [
                              createVNode("span", null, toDisplayString(item.stats.projects), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_BaseParagraph, {
                        lead: "none",
                        weight: "semibold",
                        class: "text-muted-400 !text-[0.65rem] uppercase"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<span${_scopeId3}>Projects</span>`);
                          } else {
                            return [
                              createVNode("span", null, "Projects")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div><div class="flex flex-col gap-1 px-4 text-center"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseHeading, {
                        tag: "h3",
                        size: "md",
                        weight: "semibold",
                        class: "text-muted-800 dark:text-muted-100"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<span${_scopeId3}>${ssrInterpolate(item.stats.replies)}</span>`);
                          } else {
                            return [
                              createVNode("span", null, toDisplayString(item.stats.replies), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_BaseParagraph, {
                        lead: "none",
                        weight: "semibold",
                        class: "text-muted-400 !text-[0.65rem] uppercase"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<span${_scopeId3}>Replies</span>`);
                          } else {
                            return [
                              createVNode("span", null, "Replies")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div><div class="flex flex-col gap-1 px-4 text-center"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseHeading, {
                        tag: "h3",
                        size: "md",
                        weight: "semibold",
                        class: "text-muted-800 dark:text-muted-100"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<span${_scopeId3}>${ssrInterpolate(item.stats.posts)}</span>`);
                          } else {
                            return [
                              createVNode("span", null, toDisplayString(item.stats.posts), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_BaseParagraph, {
                        lead: "none",
                        weight: "semibold",
                        class: "text-muted-400 !text-[0.65rem] uppercase"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<span${_scopeId3}>Posts</span>`);
                          } else {
                            return [
                              createVNode("span", null, "Posts")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div></div><div class="ptablet:hidden flex w-full items-center justify-center gap-1 py-3 sm:w-[160px] sm:justify-end sm:py-0"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseAvatarGroup, {
                        size: "xs",
                        avatars: item.teams,
                        limit: 3
                      }, null, _parent3, _scopeId2));
                      _push3(`<p class="text-muted-400 font-sans text-xs"${_scopeId2}>In Team</p></div><div class="sm:ms-6"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseButtonAction, { class: "w-full sm:w-auto" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` View `);
                          } else {
                            return [
                              createTextVNode(" View ")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:justify-start sm:text-left" }, [
                          createVNode(_component_BaseAvatar, {
                            size: "lg",
                            src: item.medias.avatar,
                            "badge-src": item.medias.flag
                          }, null, 8, ["src", "badge-src"]),
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
                            createVNode(_component_BaseParagraph, {
                              size: "xs",
                              lead: "none",
                              class: "text-muted-400 flex items-end text-sm"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Icon, {
                                  name: "lucide:map-pin",
                                  class: "h-4 w-4"
                                }),
                                createVNode("span", null, toDisplayString(item.location), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ]),
                        createVNode("div", { class: "flex flex-col gap-4 pt-4 sm:ms-auto sm:flex-row sm:items-center sm:justify-end sm:pt-0" }, [
                          createVNode("div", { class: "flex w-full items-center justify-center sm:w-[160px] sm:justify-end" }, [
                            createVNode(_component_BaseTag, {
                              size: "sm",
                              color: "primary",
                              flavor: "pastel",
                              shape: "full"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.role), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          createVNode("div", { class: "divide-muted-200 dark:divide-muted-700 flex items-center justify-center divide-x" }, [
                            createVNode("div", { class: "flex flex-col gap-1 px-4 text-center" }, [
                              createVNode(_component_BaseHeading, {
                                tag: "h3",
                                size: "md",
                                weight: "semibold",
                                class: "text-muted-800 dark:text-muted-100"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, toDisplayString(item.stats.projects), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_BaseParagraph, {
                                lead: "none",
                                weight: "semibold",
                                class: "text-muted-400 !text-[0.65rem] uppercase"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, "Projects")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "flex flex-col gap-1 px-4 text-center" }, [
                              createVNode(_component_BaseHeading, {
                                tag: "h3",
                                size: "md",
                                weight: "semibold",
                                class: "text-muted-800 dark:text-muted-100"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, toDisplayString(item.stats.replies), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_BaseParagraph, {
                                lead: "none",
                                weight: "semibold",
                                class: "text-muted-400 !text-[0.65rem] uppercase"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, "Replies")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "flex flex-col gap-1 px-4 text-center" }, [
                              createVNode(_component_BaseHeading, {
                                tag: "h3",
                                size: "md",
                                weight: "semibold",
                                class: "text-muted-800 dark:text-muted-100"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, toDisplayString(item.stats.posts), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_BaseParagraph, {
                                lead: "none",
                                weight: "semibold",
                                class: "text-muted-400 !text-[0.65rem] uppercase"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, "Posts")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          createVNode("div", { class: "ptablet:hidden flex w-full items-center justify-center gap-1 py-3 sm:w-[160px] sm:justify-end sm:py-0" }, [
                            createVNode(_component_BaseAvatarGroup, {
                              size: "xs",
                              avatars: item.teams,
                              limit: 3
                            }, null, 8, ["avatars"]),
                            createVNode("p", { class: "text-muted-400 font-sans text-xs" }, "In Team")
                          ]),
                          createVNode("div", { class: "sm:ms-6" }, [
                            createVNode(_component_BaseButtonAction, { class: "w-full sm:w-auto" }, {
                              default: withCtx(() => [
                                createTextVNode(" View ")
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
              _push2(`<!--]--><div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BasePagination, {
                "total-items": unref(data)?.total ?? 0,
                "item-per-page": unref(perPage),
                "current-page": unref(page),
                shape: "full"
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
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "space-y-4"
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
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(data)?.data, (item) => {
                        return openBlock(), createBlock(_component_BaseCard, {
                          key: item.id,
                          shape: "curved",
                          class: "flex flex-col p-5 sm:flex-row sm:items-center"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:justify-start sm:text-left" }, [
                              createVNode(_component_BaseAvatar, {
                                size: "lg",
                                src: item.medias.avatar,
                                "badge-src": item.medias.flag
                              }, null, 8, ["src", "badge-src"]),
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
                                createVNode(_component_BaseParagraph, {
                                  size: "xs",
                                  lead: "none",
                                  class: "text-muted-400 flex items-end text-sm"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "lucide:map-pin",
                                      class: "h-4 w-4"
                                    }),
                                    createVNode("span", null, toDisplayString(item.location), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ]),
                            createVNode("div", { class: "flex flex-col gap-4 pt-4 sm:ms-auto sm:flex-row sm:items-center sm:justify-end sm:pt-0" }, [
                              createVNode("div", { class: "flex w-full items-center justify-center sm:w-[160px] sm:justify-end" }, [
                                createVNode(_component_BaseTag, {
                                  size: "sm",
                                  color: "primary",
                                  flavor: "pastel",
                                  shape: "full"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.role), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              createVNode("div", { class: "divide-muted-200 dark:divide-muted-700 flex items-center justify-center divide-x" }, [
                                createVNode("div", { class: "flex flex-col gap-1 px-4 text-center" }, [
                                  createVNode(_component_BaseHeading, {
                                    tag: "h3",
                                    size: "md",
                                    weight: "semibold",
                                    class: "text-muted-800 dark:text-muted-100"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", null, toDisplayString(item.stats.projects), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_BaseParagraph, {
                                    lead: "none",
                                    weight: "semibold",
                                    class: "text-muted-400 !text-[0.65rem] uppercase"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", null, "Projects")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", { class: "flex flex-col gap-1 px-4 text-center" }, [
                                  createVNode(_component_BaseHeading, {
                                    tag: "h3",
                                    size: "md",
                                    weight: "semibold",
                                    class: "text-muted-800 dark:text-muted-100"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", null, toDisplayString(item.stats.replies), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_BaseParagraph, {
                                    lead: "none",
                                    weight: "semibold",
                                    class: "text-muted-400 !text-[0.65rem] uppercase"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", null, "Replies")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", { class: "flex flex-col gap-1 px-4 text-center" }, [
                                  createVNode(_component_BaseHeading, {
                                    tag: "h3",
                                    size: "md",
                                    weight: "semibold",
                                    class: "text-muted-800 dark:text-muted-100"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", null, toDisplayString(item.stats.posts), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_BaseParagraph, {
                                    lead: "none",
                                    weight: "semibold",
                                    class: "text-muted-400 !text-[0.65rem] uppercase"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", null, "Posts")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]),
                              createVNode("div", { class: "ptablet:hidden flex w-full items-center justify-center gap-1 py-3 sm:w-[160px] sm:justify-end sm:py-0" }, [
                                createVNode(_component_BaseAvatarGroup, {
                                  size: "xs",
                                  avatars: item.teams,
                                  limit: 3
                                }, null, 8, ["avatars"]),
                                createVNode("p", { class: "text-muted-400 font-sans text-xs" }, "In Team")
                              ]),
                              createVNode("div", { class: "sm:ms-6" }, [
                                createVNode(_component_BaseButtonAction, { class: "w-full sm:w-auto" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" View ")
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
                  }),
                  createVNode("div", null, [
                    createVNode(_component_BasePagination, {
                      "total-items": unref(data)?.total ?? 0,
                      "item-per-page": unref(perPage),
                      "current-page": unref(page),
                      shape: "full"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-01f8cc68.mjs.map
