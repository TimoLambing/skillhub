import { _ as _sfc_main$1 } from './TairoContentWrapper-00ef8dfe.mjs';
import { J as useRoute, u as useRouter, g as _sfc_main$z, d as _sfc_main$x, f as __nuxt_component_2, Q as _sfc_main$3 } from '../server.mjs';
import { _ as _sfc_main$2, a as _sfc_main$1$1, b as _sfc_main$4 } from './DemoFlexTableCell-bbf39793.mjs';
import { _ as _sfc_main$5 } from './BaseTag-734af285.mjs';
import { _ as _sfc_main$6 } from './BaseAvatarGroup-6e7b4ecf.mjs';
import { _ as _sfc_main$7 } from './BaseButtonAction-57c21d00.mjs';
import { _ as _sfc_main$8 } from './BasePagination-2a742261.mjs';
import { defineComponent, computed, ref, watch, withAsyncContext, withCtx, unref, isRef, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, TransitionGroup, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-45c1546c.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1 } from './placeholder-search-4-dark-8ea6a3c1.mjs';
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
import './BaseIconBox-642fe941.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "flex-list-2",
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
      "/api/company/candidates",
      {
        query
      },
      "$wYq94uGIdM"
    )), __temp = await __temp, __restore(), __temp);
    function statusColor(itemStatus) {
      switch (itemStatus) {
        case "online":
          return "success";
        case "working":
          return "info";
        case "suspended":
          return "warning";
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoContentWrapper = _sfc_main$1;
      const _component_BaseInput = _sfc_main$z;
      const _component_BaseButton = _sfc_main$x;
      const _component_Icon = __nuxt_component_2;
      const _component_BasePlaceholderPage = _sfc_main$3;
      const _component_DemoFlexTableRow = _sfc_main$2;
      const _component_DemoFlexTableStart = _sfc_main$1$1;
      const _component_DemoFlexTableCell = _sfc_main$4;
      const _component_BaseTag = _sfc_main$5;
      const _component_BaseAvatarGroup = _sfc_main$6;
      const _component_BaseButtonAction = _sfc_main$7;
      const _component_BasePagination = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_TairoContentWrapper, null, {
        left: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseInput, {
              modelValue: unref(filter),
              "onUpdate:modelValue": ($event) => isRef(filter) ? filter.value = $event : null,
              icon: "lucide:search",
              shape: "full",
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
                shape: "full",
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
              shape: "full"
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
              shape: "full",
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
              createVNode(_component_BaseButton, {
                class: "w-full sm:w-32",
                shape: "full"
              }, {
                default: withCtx(() => [
                  createTextVNode("Manage")
                ]),
                _: 1
              }),
              createVNode(_component_BaseButton, {
                color: "primary",
                shape: "full",
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
              _push2(`<div class="pt-6"${_scopeId}><!--[-->`);
              ssrRenderList(unref(data)?.data, (item, index) => {
                _push2(ssrRenderComponent(_component_DemoFlexTableRow, {
                  key: index,
                  shape: "straight",
                  condensed: "",
                  spaced: ""
                }, {
                  start: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_DemoFlexTableStart, {
                        label: "user",
                        "hide-label": index > 0,
                        title: item.username,
                        subtitle: item.position,
                        avatar: item.src,
                        badge: item.badge,
                        initials: item.initials
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_DemoFlexTableStart, {
                          label: "user",
                          "hide-label": index > 0,
                          title: item.username,
                          subtitle: item.position,
                          avatar: item.src,
                          badge: item.badge,
                          initials: item.initials
                        }, null, 8, ["hide-label", "title", "subtitle", "avatar", "badge", "initials"])
                      ];
                    }
                  }),
                  end: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_DemoFlexTableCell, {
                        label: "location",
                        "hide-label": index > 0,
                        class: "w-full sm:w-40"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<span class="text-muted-500 dark:text-muted-400 font-sans text-sm"${_scopeId3}>${ssrInterpolate(item.location)}</span>`);
                          } else {
                            return [
                              createVNode("span", { class: "text-muted-500 dark:text-muted-400 font-sans text-sm" }, toDisplayString(item.location), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_DemoFlexTableCell, {
                        label: "industry",
                        "hide-label": index > 0,
                        class: "w-full sm:w-40"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<span class="text-muted-500 dark:text-muted-400 font-sans text-sm"${_scopeId3}>${ssrInterpolate(item.industry)}</span>`);
                          } else {
                            return [
                              createVNode("span", { class: "text-muted-500 dark:text-muted-400 font-sans text-sm" }, toDisplayString(item.industry), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_DemoFlexTableCell, {
                        label: "status",
                        "hide-label": index > 0,
                        class: "w-full sm:w-16"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_BaseTag, {
                              color: statusColor(item.status),
                              shape: "full",
                              flavor: "pastel",
                              size: "sm",
                              class: "capitalize"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.status)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.status), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_BaseTag, {
                                color: statusColor(item.status),
                                shape: "full",
                                flavor: "pastel",
                                size: "sm",
                                class: "capitalize"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.status), 1)
                                ]),
                                _: 2
                              }, 1032, ["color"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_DemoFlexTableCell, {
                        label: "relations",
                        "hide-label": index > 0,
                        "tablet-hidden": "",
                        class: "w-full sm:w-[160px]"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_BaseAvatarGroup, {
                              size: "xs",
                              avatars: item.relations,
                              limit: 2
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_BaseAvatarGroup, {
                                size: "xs",
                                avatars: item.relations,
                                limit: 2
                              }, null, 8, ["avatars"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_DemoFlexTableCell, {
                        label: "action",
                        "hide-label": index > 0
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_BaseButtonAction, { color: "muted" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<span${_scopeId4}>View</span>`);
                                } else {
                                  return [
                                    createVNode("span", null, "View")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_BaseButtonAction, { color: "muted" }, {
                                default: withCtx(() => [
                                  createVNode("span", null, "View")
                                ]),
                                _: 1
                              })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_DemoFlexTableCell, {
                          label: "location",
                          "hide-label": index > 0,
                          class: "w-full sm:w-40"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-muted-500 dark:text-muted-400 font-sans text-sm" }, toDisplayString(item.location), 1)
                          ]),
                          _: 2
                        }, 1032, ["hide-label"]),
                        createVNode(_component_DemoFlexTableCell, {
                          label: "industry",
                          "hide-label": index > 0,
                          class: "w-full sm:w-40"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-muted-500 dark:text-muted-400 font-sans text-sm" }, toDisplayString(item.industry), 1)
                          ]),
                          _: 2
                        }, 1032, ["hide-label"]),
                        createVNode(_component_DemoFlexTableCell, {
                          label: "status",
                          "hide-label": index > 0,
                          class: "w-full sm:w-16"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_BaseTag, {
                              color: statusColor(item.status),
                              shape: "full",
                              flavor: "pastel",
                              size: "sm",
                              class: "capitalize"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.status), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
                          _: 2
                        }, 1032, ["hide-label"]),
                        createVNode(_component_DemoFlexTableCell, {
                          label: "relations",
                          "hide-label": index > 0,
                          "tablet-hidden": "",
                          class: "w-full sm:w-[160px]"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_BaseAvatarGroup, {
                              size: "xs",
                              avatars: item.relations,
                              limit: 2
                            }, null, 8, ["avatars"])
                          ]),
                          _: 2
                        }, 1032, ["hide-label"]),
                        createVNode(_component_DemoFlexTableCell, {
                          label: "action",
                          "hide-label": index > 0
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_BaseButtonAction, { color: "muted" }, {
                              default: withCtx(() => [
                                createVNode("span", null, "View")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 2
                        }, 1032, ["hide-label"])
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
                shape: "full"
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
                  class: "pt-6"
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
                        return openBlock(), createBlock(_component_DemoFlexTableRow, {
                          key: index,
                          shape: "straight",
                          condensed: "",
                          spaced: ""
                        }, {
                          start: withCtx(() => [
                            createVNode(_component_DemoFlexTableStart, {
                              label: "user",
                              "hide-label": index > 0,
                              title: item.username,
                              subtitle: item.position,
                              avatar: item.src,
                              badge: item.badge,
                              initials: item.initials
                            }, null, 8, ["hide-label", "title", "subtitle", "avatar", "badge", "initials"])
                          ]),
                          end: withCtx(() => [
                            createVNode(_component_DemoFlexTableCell, {
                              label: "location",
                              "hide-label": index > 0,
                              class: "w-full sm:w-40"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-muted-500 dark:text-muted-400 font-sans text-sm" }, toDisplayString(item.location), 1)
                              ]),
                              _: 2
                            }, 1032, ["hide-label"]),
                            createVNode(_component_DemoFlexTableCell, {
                              label: "industry",
                              "hide-label": index > 0,
                              class: "w-full sm:w-40"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-muted-500 dark:text-muted-400 font-sans text-sm" }, toDisplayString(item.industry), 1)
                              ]),
                              _: 2
                            }, 1032, ["hide-label"]),
                            createVNode(_component_DemoFlexTableCell, {
                              label: "status",
                              "hide-label": index > 0,
                              class: "w-full sm:w-16"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_BaseTag, {
                                  color: statusColor(item.status),
                                  shape: "full",
                                  flavor: "pastel",
                                  size: "sm",
                                  class: "capitalize"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.status), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["color"])
                              ]),
                              _: 2
                            }, 1032, ["hide-label"]),
                            createVNode(_component_DemoFlexTableCell, {
                              label: "relations",
                              "hide-label": index > 0,
                              "tablet-hidden": "",
                              class: "w-full sm:w-[160px]"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_BaseAvatarGroup, {
                                  size: "xs",
                                  avatars: item.relations,
                                  limit: 2
                                }, null, 8, ["avatars"])
                              ]),
                              _: 2
                            }, 1032, ["hide-label"]),
                            createVNode(_component_DemoFlexTableCell, {
                              label: "action",
                              "hide-label": index > 0
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_BaseButtonAction, { color: "muted" }, {
                                  default: withCtx(() => [
                                    createVNode("span", null, "View")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 2
                            }, 1032, ["hide-label"])
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
                    shape: "full"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/flex-list-2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=flex-list-2-933a8463.mjs.map
