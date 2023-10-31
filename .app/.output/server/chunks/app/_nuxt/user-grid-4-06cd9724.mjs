import { _ as _sfc_main$1 } from './TairoContentWrapper-00ef8dfe.mjs';
import { J as useRoute, u as useRouter, g as _sfc_main$z, d as _sfc_main$x, f as __nuxt_component_2, Q as _sfc_main$3, j as _sfc_main$C, _ as _sfc_main$p, b as _sfc_main$o, e as __nuxt_component_0$5, s as _sfc_main$E } from '../server.mjs';
import { _ as _sfc_main$2 } from './BasePagination-2a742261.mjs';
import { defineComponent, computed, ref, watch, withAsyncContext, withCtx, unref, isRef, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, TransitionGroup, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-45c1546c.mjs';
import { g as getRandomColor } from './colors-16c42002.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1 } from './placeholder-search-2-dark-e4206700.mjs';
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
  __name: "user-grid-4",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const router = useRouter();
    const page = computed(() => parseInt(route.query.page ?? "1"));
    const filter = ref("");
    const perPage = ref(18);
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
      "/api/company/candidates",
      {
        query
      },
      "$xzCqPP9B6X"
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoContentWrapper = _sfc_main$1;
      const _component_BaseInput = _sfc_main$z;
      const _component_BaseButton = _sfc_main$x;
      const _component_Icon = __nuxt_component_2;
      const _component_BasePlaceholderPage = _sfc_main$3;
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BasePagination = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_TairoContentWrapper, null, {
        left: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseInput, {
              modelValue: unref(filter),
              "onUpdate:modelValue": ($event) => isRef(filter) ? filter.value = $event : null,
              icon: "lucide:search",
              shape: "curved",
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
                shape: "curved",
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
              _push2(`<div class="ltablet:grid-cols-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"${_scopeId}><!--[-->`);
              ssrRenderList(unref(data)?.data, (item, index) => {
                _push2(ssrRenderComponent(_component_BaseCard, {
                  key: index,
                  shape: "curved",
                  "elevated-hover": "",
                  class: "overflow-hidden"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="nui-bg-50 p-6"${_scopeId2}><div class="flex items-center justify-between"${_scopeId2}><div${_scopeId2}>`);
                      if (item.tasks.status === 0) {
                        _push3(ssrRenderComponent(_component_BaseHeading, {
                          tag: "h3",
                          size: "md",
                          weight: "medium",
                          lead: "none"
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(` In Sync `);
                            } else {
                              return [
                                createTextVNode(" In Sync ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(ssrRenderComponent(_component_BaseHeading, {
                          tag: "h3",
                          size: "md",
                          weight: "medium",
                          lead: "none"
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`${ssrInterpolate(item.tasks.status === 1 ? "Overdue" : "Blocked")}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(item.tasks.status === 1 ? "Overdue" : "Blocked"), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      }
                      _push3(ssrRenderComponent(_component_BaseParagraph, {
                        size: "xs",
                        class: "text-muted-400"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(item.tasks.pending)} tasks remaining `);
                          } else {
                            return [
                              createTextVNode(toDisplayString(item.tasks.pending) + " tasks remaining ", 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div><div${_scopeId2}>`);
                      if (item.tasks.status === 0) {
                        _push3(ssrRenderComponent(_component_Icon, {
                          name: "ph:check-circle-duotone",
                          class: "text-success-500 h-7 w-7"
                        }, null, _parent3, _scopeId2));
                      } else if (item.tasks.status === 1) {
                        _push3(ssrRenderComponent(_component_Icon, {
                          name: "ph:warning-circle-duotone",
                          class: "text-warning-500 h-7 w-7"
                        }, null, _parent3, _scopeId2));
                      } else if (item.tasks.status === 2) {
                        _push3(ssrRenderComponent(_component_Icon, {
                          name: "ph:x-circle-duotone",
                          class: "text-danger-500 h-7 w-7"
                        }, null, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div></div><div${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_NuxtLink, {
                        to: "#",
                        class: "text-primary-500 font-sans text-xs underline-offset-4 hover:underline"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` View ${ssrInterpolate(item.username)}&#39;s tasks `);
                          } else {
                            return [
                              createTextVNode(" View " + toDisplayString(item.username) + "'s tasks ", 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div></div><div class="p-6"${_scopeId2}><div class="mb-3 flex w-full items-center justify-center"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseAvatar, {
                        size: "xl",
                        shape: "curved",
                        src: item.src,
                        "badge-src": item.badge,
                        text: item.initials,
                        class: ("getRandomColor" in _ctx ? _ctx.getRandomColor : unref(getRandomColor))()
                      }, null, _parent3, _scopeId2));
                      _push3(`</div><div class="text-center"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseHeading, {
                        tag: "h3",
                        size: "md",
                        weight: "medium",
                        lead: "none"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(item.username)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(item.username), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_BaseParagraph, {
                        size: "xs",
                        class: "text-muted-400"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(item.position)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(item.position), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div><div class="mb-6 mt-4 flex items-center justify-center gap-3"${_scopeId2}><!--[-->`);
                      ssrRenderList(item.relations.slice(0, 3), (relation) => {
                        _push3(ssrRenderComponent(_component_BaseAvatar, {
                          key: relation,
                          size: "xs",
                          shape: "curved",
                          src: relation.src,
                          text: relation.text,
                          class: ("getRandomColor" in _ctx ? _ctx.getRandomColor : unref(getRandomColor))()
                        }, null, _parent3, _scopeId2));
                      });
                      _push3(`<!--]--></div><div class="flex items-center gap-2"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseButton, {
                        shape: "curved",
                        class: "w-full"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_Icon, {
                              name: "ph:user-duotone",
                              class: "h-4 w-4"
                            }, null, _parent4, _scopeId3));
                            _push4(`<span${_scopeId3}>Profile</span>`);
                          } else {
                            return [
                              createVNode(_component_Icon, {
                                name: "ph:user-duotone",
                                class: "h-4 w-4"
                              }),
                              createVNode("span", null, "Profile")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_BaseButton, {
                        shape: "curved",
                        class: "w-full"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_Icon, {
                              name: "ph:chat-circle-duotone",
                              class: "h-4 w-4"
                            }, null, _parent4, _scopeId3));
                            _push4(`<span${_scopeId3}>Talk</span>`);
                          } else {
                            return [
                              createVNode(_component_Icon, {
                                name: "ph:chat-circle-duotone",
                                class: "h-4 w-4"
                              }),
                              createVNode("span", null, "Talk")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "nui-bg-50 p-6" }, [
                          createVNode("div", { class: "flex items-center justify-between" }, [
                            createVNode("div", null, [
                              item.tasks.status === 0 ? (openBlock(), createBlock(_component_BaseHeading, {
                                key: 0,
                                tag: "h3",
                                size: "md",
                                weight: "medium",
                                lead: "none"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" In Sync ")
                                ]),
                                _: 1
                              })) : (openBlock(), createBlock(_component_BaseHeading, {
                                key: 1,
                                tag: "h3",
                                size: "md",
                                weight: "medium",
                                lead: "none"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.tasks.status === 1 ? "Overdue" : "Blocked"), 1)
                                ]),
                                _: 2
                              }, 1024)),
                              createVNode(_component_BaseParagraph, {
                                size: "xs",
                                class: "text-muted-400"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.tasks.pending) + " tasks remaining ", 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            createVNode("div", null, [
                              item.tasks.status === 0 ? (openBlock(), createBlock(_component_Icon, {
                                key: 0,
                                name: "ph:check-circle-duotone",
                                class: "text-success-500 h-7 w-7"
                              })) : item.tasks.status === 1 ? (openBlock(), createBlock(_component_Icon, {
                                key: 1,
                                name: "ph:warning-circle-duotone",
                                class: "text-warning-500 h-7 w-7"
                              })) : item.tasks.status === 2 ? (openBlock(), createBlock(_component_Icon, {
                                key: 2,
                                name: "ph:x-circle-duotone",
                                class: "text-danger-500 h-7 w-7"
                              })) : createCommentVNode("", true)
                            ])
                          ]),
                          createVNode("div", null, [
                            createVNode(_component_NuxtLink, {
                              to: "#",
                              class: "text-primary-500 font-sans text-xs underline-offset-4 hover:underline"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" View " + toDisplayString(item.username) + "'s tasks ", 1)
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ]),
                        createVNode("div", { class: "p-6" }, [
                          createVNode("div", { class: "mb-3 flex w-full items-center justify-center" }, [
                            createVNode(_component_BaseAvatar, {
                              size: "xl",
                              shape: "curved",
                              src: item.src,
                              "badge-src": item.badge,
                              text: item.initials,
                              class: ("getRandomColor" in _ctx ? _ctx.getRandomColor : unref(getRandomColor))()
                            }, null, 8, ["src", "badge-src", "text", "class"])
                          ]),
                          createVNode("div", { class: "text-center" }, [
                            createVNode(_component_BaseHeading, {
                              tag: "h3",
                              size: "md",
                              weight: "medium",
                              lead: "none"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.username), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_BaseParagraph, {
                              size: "xs",
                              class: "text-muted-400"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.position), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          createVNode("div", { class: "mb-6 mt-4 flex items-center justify-center gap-3" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(item.relations.slice(0, 3), (relation) => {
                              return openBlock(), createBlock(_component_BaseAvatar, {
                                key: relation,
                                size: "xs",
                                shape: "curved",
                                src: relation.src,
                                text: relation.text,
                                class: ("getRandomColor" in _ctx ? _ctx.getRandomColor : unref(getRandomColor))()
                              }, null, 8, ["src", "text", "class"]);
                            }), 128))
                          ]),
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode(_component_BaseButton, {
                              shape: "curved",
                              class: "w-full"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Icon, {
                                  name: "ph:user-duotone",
                                  class: "h-4 w-4"
                                }),
                                createVNode("span", null, "Profile")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_BaseButton, {
                              shape: "curved",
                              class: "w-full"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Icon, {
                                  name: "ph:chat-circle-duotone",
                                  class: "h-4 w-4"
                                }),
                                createVNode("span", null, "Talk")
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
                  class: "ltablet:grid-cols-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
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
                          "elevated-hover": "",
                          class: "overflow-hidden"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "nui-bg-50 p-6" }, [
                              createVNode("div", { class: "flex items-center justify-between" }, [
                                createVNode("div", null, [
                                  item.tasks.status === 0 ? (openBlock(), createBlock(_component_BaseHeading, {
                                    key: 0,
                                    tag: "h3",
                                    size: "md",
                                    weight: "medium",
                                    lead: "none"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" In Sync ")
                                    ]),
                                    _: 1
                                  })) : (openBlock(), createBlock(_component_BaseHeading, {
                                    key: 1,
                                    tag: "h3",
                                    size: "md",
                                    weight: "medium",
                                    lead: "none"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.tasks.status === 1 ? "Overdue" : "Blocked"), 1)
                                    ]),
                                    _: 2
                                  }, 1024)),
                                  createVNode(_component_BaseParagraph, {
                                    size: "xs",
                                    class: "text-muted-400"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.tasks.pending) + " tasks remaining ", 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                createVNode("div", null, [
                                  item.tasks.status === 0 ? (openBlock(), createBlock(_component_Icon, {
                                    key: 0,
                                    name: "ph:check-circle-duotone",
                                    class: "text-success-500 h-7 w-7"
                                  })) : item.tasks.status === 1 ? (openBlock(), createBlock(_component_Icon, {
                                    key: 1,
                                    name: "ph:warning-circle-duotone",
                                    class: "text-warning-500 h-7 w-7"
                                  })) : item.tasks.status === 2 ? (openBlock(), createBlock(_component_Icon, {
                                    key: 2,
                                    name: "ph:x-circle-duotone",
                                    class: "text-danger-500 h-7 w-7"
                                  })) : createCommentVNode("", true)
                                ])
                              ]),
                              createVNode("div", null, [
                                createVNode(_component_NuxtLink, {
                                  to: "#",
                                  class: "text-primary-500 font-sans text-xs underline-offset-4 hover:underline"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" View " + toDisplayString(item.username) + "'s tasks ", 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ]),
                            createVNode("div", { class: "p-6" }, [
                              createVNode("div", { class: "mb-3 flex w-full items-center justify-center" }, [
                                createVNode(_component_BaseAvatar, {
                                  size: "xl",
                                  shape: "curved",
                                  src: item.src,
                                  "badge-src": item.badge,
                                  text: item.initials,
                                  class: ("getRandomColor" in _ctx ? _ctx.getRandomColor : unref(getRandomColor))()
                                }, null, 8, ["src", "badge-src", "text", "class"])
                              ]),
                              createVNode("div", { class: "text-center" }, [
                                createVNode(_component_BaseHeading, {
                                  tag: "h3",
                                  size: "md",
                                  weight: "medium",
                                  lead: "none"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.username), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_BaseParagraph, {
                                  size: "xs",
                                  class: "text-muted-400"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.position), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              createVNode("div", { class: "mb-6 mt-4 flex items-center justify-center gap-3" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(item.relations.slice(0, 3), (relation) => {
                                  return openBlock(), createBlock(_component_BaseAvatar, {
                                    key: relation,
                                    size: "xs",
                                    shape: "curved",
                                    src: relation.src,
                                    text: relation.text,
                                    class: ("getRandomColor" in _ctx ? _ctx.getRandomColor : unref(getRandomColor))()
                                  }, null, 8, ["src", "text", "class"]);
                                }), 128))
                              ]),
                              createVNode("div", { class: "flex items-center gap-2" }, [
                                createVNode(_component_BaseButton, {
                                  shape: "curved",
                                  class: "w-full"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "ph:user-duotone",
                                      class: "h-4 w-4"
                                    }),
                                    createVNode("span", null, "Profile")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_BaseButton, {
                                  shape: "curved",
                                  class: "w-full"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "ph:chat-circle-duotone",
                                      class: "h-4 w-4"
                                    }),
                                    createVNode("span", null, "Talk")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/user-grid-4.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=user-grid-4-06cd9724.mjs.map
