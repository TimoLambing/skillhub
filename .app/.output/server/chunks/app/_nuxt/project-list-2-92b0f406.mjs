import { _ as _sfc_main$1 } from './TairoContentWrapper-00ef8dfe.mjs';
import { J as useRoute, u as useRouter, g as _sfc_main$z, d as _sfc_main$x, f as __nuxt_component_2, _ as _sfc_main$p, b as _sfc_main$o, e as __nuxt_component_0$5, j as _sfc_main$C, s as _sfc_main$E, Q as _sfc_main$3 } from '../server.mjs';
import { _ as _sfc_main$2 } from './BaseAvatarGroup-6e7b4ecf.mjs';
import { defineComponent, computed, ref, watch, withAsyncContext, withCtx, unref, isRef, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, TransitionGroup, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-45c1546c.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "project-list-2",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const router = useRouter();
    const page = computed(() => parseInt(route.query.page ?? "1"));
    const filter = ref("");
    const perPage = ref(25);
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
      "/api/company/projects",
      {
        query
      },
      "$tggh0WBI4v"
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoContentWrapper = _sfc_main$1;
      const _component_BaseInput = _sfc_main$z;
      const _component_BaseButton = _sfc_main$x;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BasePlaceholderPage = _sfc_main$3;
      const _component_BaseAvatarGroup = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_TairoContentWrapper, null, {
        left: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseInput, {
              modelValue: unref(filter),
              "onUpdate:modelValue": ($event) => isRef(filter) ? filter.value = $event : null,
              icon: "lucide:search",
              shape: "curved",
              placeholder: "Filter projects...",
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
                placeholder: "Filter projects...",
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
                  _push3(`<span${_scopeId2}>New</span>`);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:plus",
                      class: "h-4 w-4"
                    }),
                    createVNode("span", null, "New")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
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
                  createVNode("span", null, "New")
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-10"${_scopeId}><div${_scopeId}>`);
            if (!unref(pending) && unref(data)?.recent.length === 0) {
              _push2(`<div${_scopeId}><div class="bg-muted-200 dark:bg-muted-800/60 rounded-xl p-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                tag: "h4",
                size: "lg",
                weight: "medium"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Empty history `);
                  } else {
                    return [
                      createTextVNode(" Empty history ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "sm",
                class: "text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Looks like you haven&#39;t viewed any projects yet. `);
                  } else {
                    return [
                      createTextVNode(" Looks like you haven't viewed any projects yet. ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<div${_scopeId}><div${_scopeId}><h4 class="text-muted-400 mb-4 font-sans text-xs font-semibold uppercase"${_scopeId}> Recently Viewed </h4></div><div class="ltablet:grid-cols-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"${_scopeId}><!--[-->`);
              ssrRenderList(unref(data)?.recent.slice(0, 4), (item, r) => {
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  key: r,
                  class: "group block",
                  to: `/layouts/projects/details/${item.slug}`
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_BaseCard, {
                        shape: "curved",
                        "elevated-hover": "",
                        class: "group-hover:!border-primary-500 p-5"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="mb-6 flex gap-2"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_BaseAvatar, {
                              src: item.customer.logo,
                              size: "sm",
                              shape: "straight",
                              mask: "blob",
                              "data-nui-tooltip": item.name,
                              class: "bg-muted-100 dark:bg-muted-700"
                            }, null, _parent4, _scopeId3));
                            _push4(`<div${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_BaseHeading, {
                              tag: "h5",
                              size: "sm",
                              weight: "medium",
                              class: "line-clamp-1"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.name)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.name), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_BaseParagraph, {
                              size: "xs",
                              class: "text-muted-400"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.customer.name)} | ${ssrInterpolate(item.customer.text)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.customer.name) + " | " + toDisplayString(item.customer.text), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</div></div><div class="flex items-center justify-between"${_scopeId3}><div class="flex items-center gap-2"${_scopeId3}><!--[-->`);
                            ssrRenderList(item.stacks, (stack) => {
                              _push4(ssrRenderComponent(_component_BaseAvatar, {
                                key: stack.name,
                                src: stack.icon,
                                size: "xxs",
                                shape: "straight",
                                mask: "blob",
                                "data-nui-tooltip": stack.name,
                                class: "bg-muted-100 dark:bg-muted-700"
                              }, null, _parent4, _scopeId3));
                            });
                            _push4(`<!--]--></div><div class="text-muted-400 flex items-center gap-4"${_scopeId3}><div class="flex items-center gap-1 text-sm"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_Icon, {
                              name: "ph:paperclip-duotone",
                              class: "h-4 w-4"
                            }, null, _parent4, _scopeId3));
                            _push4(`<span class="font-sans"${_scopeId3}>${ssrInterpolate(item.files.length)}</span></div><div class="flex items-center gap-1 text-sm"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_Icon, {
                              name: "ph:users-duotone",
                              class: "h-4 w-4"
                            }, null, _parent4, _scopeId3));
                            _push4(`<span class="font-sans"${_scopeId3}>${ssrInterpolate(item.team.length)}</span></div></div></div>`);
                          } else {
                            return [
                              createVNode("div", { class: "mb-6 flex gap-2" }, [
                                createVNode(_component_BaseAvatar, {
                                  src: item.customer.logo,
                                  size: "sm",
                                  shape: "straight",
                                  mask: "blob",
                                  "data-nui-tooltip": item.name,
                                  class: "bg-muted-100 dark:bg-muted-700"
                                }, null, 8, ["src", "data-nui-tooltip"]),
                                createVNode("div", null, [
                                  createVNode(_component_BaseHeading, {
                                    tag: "h5",
                                    size: "sm",
                                    weight: "medium",
                                    class: "line-clamp-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.name), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_BaseParagraph, {
                                    size: "xs",
                                    class: "text-muted-400"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.customer.name) + " | " + toDisplayString(item.customer.text), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ]),
                              createVNode("div", { class: "flex items-center justify-between" }, [
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(item.stacks, (stack) => {
                                    return openBlock(), createBlock(_component_BaseAvatar, {
                                      key: stack.name,
                                      src: stack.icon,
                                      size: "xxs",
                                      shape: "straight",
                                      mask: "blob",
                                      "data-nui-tooltip": stack.name,
                                      class: "bg-muted-100 dark:bg-muted-700"
                                    }, null, 8, ["src", "data-nui-tooltip"]);
                                  }), 128))
                                ]),
                                createVNode("div", { class: "text-muted-400 flex items-center gap-4" }, [
                                  createVNode("div", { class: "flex items-center gap-1 text-sm" }, [
                                    createVNode(_component_Icon, {
                                      name: "ph:paperclip-duotone",
                                      class: "h-4 w-4"
                                    }),
                                    createVNode("span", { class: "font-sans" }, toDisplayString(item.files.length), 1)
                                  ]),
                                  createVNode("div", { class: "flex items-center gap-1 text-sm" }, [
                                    createVNode(_component_Icon, {
                                      name: "ph:users-duotone",
                                      class: "h-4 w-4"
                                    }),
                                    createVNode("span", { class: "font-sans" }, toDisplayString(item.team.length), 1)
                                  ])
                                ])
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_BaseCard, {
                          shape: "curved",
                          "elevated-hover": "",
                          class: "group-hover:!border-primary-500 p-5"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "mb-6 flex gap-2" }, [
                              createVNode(_component_BaseAvatar, {
                                src: item.customer.logo,
                                size: "sm",
                                shape: "straight",
                                mask: "blob",
                                "data-nui-tooltip": item.name,
                                class: "bg-muted-100 dark:bg-muted-700"
                              }, null, 8, ["src", "data-nui-tooltip"]),
                              createVNode("div", null, [
                                createVNode(_component_BaseHeading, {
                                  tag: "h5",
                                  size: "sm",
                                  weight: "medium",
                                  class: "line-clamp-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.name), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_BaseParagraph, {
                                  size: "xs",
                                  class: "text-muted-400"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.customer.name) + " | " + toDisplayString(item.customer.text), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ]),
                            createVNode("div", { class: "flex items-center justify-between" }, [
                              createVNode("div", { class: "flex items-center gap-2" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(item.stacks, (stack) => {
                                  return openBlock(), createBlock(_component_BaseAvatar, {
                                    key: stack.name,
                                    src: stack.icon,
                                    size: "xxs",
                                    shape: "straight",
                                    mask: "blob",
                                    "data-nui-tooltip": stack.name,
                                    class: "bg-muted-100 dark:bg-muted-700"
                                  }, null, 8, ["src", "data-nui-tooltip"]);
                                }), 128))
                              ]),
                              createVNode("div", { class: "text-muted-400 flex items-center gap-4" }, [
                                createVNode("div", { class: "flex items-center gap-1 text-sm" }, [
                                  createVNode(_component_Icon, {
                                    name: "ph:paperclip-duotone",
                                    class: "h-4 w-4"
                                  }),
                                  createVNode("span", { class: "font-sans" }, toDisplayString(item.files.length), 1)
                                ]),
                                createVNode("div", { class: "flex items-center gap-1 text-sm" }, [
                                  createVNode(_component_Icon, {
                                    name: "ph:users-duotone",
                                    class: "h-4 w-4"
                                  }),
                                  createVNode("span", { class: "font-sans" }, toDisplayString(item.team.length), 1)
                                ])
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></div>`);
            }
            _push2(`</div><div${_scopeId}>`);
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
              _push2(`<div${_scopeId}><div${_scopeId}><h4 class="text-muted-400 mb-4 font-sans text-xs font-semibold uppercase"${_scopeId}> All Projects </h4></div><div class="ltablet:grid-cols-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"${_scopeId}><!--[-->`);
              ssrRenderList(unref(data)?.data, (item, index) => {
                _push2(ssrRenderComponent(_component_BaseCard, {
                  key: index,
                  shape: "curved",
                  "elevated-hover": "",
                  class: "hover:!border-primary-500"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_NuxtLink, {
                        class: "group",
                        to: `/layouts/projects/details/${item.slug}`
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="p-5"${_scopeId3}><div class="relative mb-4"${_scopeId3}><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.name)} class="rounded-lg"${_scopeId3}></div><div class="mb-6 flex gap-2"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_BaseAvatar, {
                              src: item.customer.logo,
                              size: "sm",
                              shape: "straight",
                              mask: "blob",
                              "data-nui-tooltip": item.name,
                              class: "bg-muted-100 dark:bg-muted-700"
                            }, null, _parent4, _scopeId3));
                            _push4(`<div${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_BaseHeading, {
                              tag: "h5",
                              size: "sm",
                              weight: "medium",
                              class: "line-clamp-1"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.name)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.name), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_BaseParagraph, {
                              size: "xs",
                              class: "text-muted-400"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.customer.name)} | ${ssrInterpolate(item.customer.text)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.customer.name) + " | " + toDisplayString(item.customer.text), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</div></div><div class="flex items-center justify-between"${_scopeId3}><div class="flex items-center gap-2"${_scopeId3}><!--[-->`);
                            ssrRenderList(item.stacks, (stack) => {
                              _push4(ssrRenderComponent(_component_BaseAvatar, {
                                key: stack.name,
                                src: stack.icon,
                                size: "xxs",
                                shape: "straight",
                                mask: "blob",
                                "data-nui-tooltip": stack.name,
                                class: "bg-muted-100 dark:bg-muted-700"
                              }, null, _parent4, _scopeId3));
                            });
                            _push4(`<!--]--></div><div class="text-muted-400 flex items-center gap-4"${_scopeId3}><div class="flex items-center gap-1 text-sm"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_Icon, {
                              name: "ph:paperclip-duotone",
                              class: "h-4 w-4"
                            }, null, _parent4, _scopeId3));
                            _push4(`<span class="font-sans"${_scopeId3}>${ssrInterpolate(item.files.length)}</span></div><div class="flex items-center gap-1 text-sm"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_Icon, {
                              name: "ph:users-duotone",
                              class: "h-4 w-4"
                            }, null, _parent4, _scopeId3));
                            _push4(`<span class="font-sans"${_scopeId3}>${ssrInterpolate(item.team.length)}</span></div></div></div></div><div class="border-muted-200 dark:border-muted-700 bg-muted-50 dark:bg-muted-700/50 flex items-center justify-between rounded-b-xl border-t px-5 py-3"${_scopeId3}><div${_scopeId3}><p class="text-muted-400 font-sans text-sm"${_scopeId3}>${ssrInterpolate(item.tasks.length)} tasks remaining </p></div><div${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_BaseAvatarGroup, {
                              avatars: item.team,
                              size: "xs",
                              limit: 3
                            }, null, _parent4, _scopeId3));
                            _push4(`</div></div>`);
                          } else {
                            return [
                              createVNode("div", { class: "p-5" }, [
                                createVNode("div", { class: "relative mb-4" }, [
                                  createVNode("img", {
                                    src: item.image,
                                    alt: item.name,
                                    class: "rounded-lg"
                                  }, null, 8, ["src", "alt"])
                                ]),
                                createVNode("div", { class: "mb-6 flex gap-2" }, [
                                  createVNode(_component_BaseAvatar, {
                                    src: item.customer.logo,
                                    size: "sm",
                                    shape: "straight",
                                    mask: "blob",
                                    "data-nui-tooltip": item.name,
                                    class: "bg-muted-100 dark:bg-muted-700"
                                  }, null, 8, ["src", "data-nui-tooltip"]),
                                  createVNode("div", null, [
                                    createVNode(_component_BaseHeading, {
                                      tag: "h5",
                                      size: "sm",
                                      weight: "medium",
                                      class: "line-clamp-1"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.name), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_BaseParagraph, {
                                      size: "xs",
                                      class: "text-muted-400"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.customer.name) + " | " + toDisplayString(item.customer.text), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])
                                ]),
                                createVNode("div", { class: "flex items-center justify-between" }, [
                                  createVNode("div", { class: "flex items-center gap-2" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.stacks, (stack) => {
                                      return openBlock(), createBlock(_component_BaseAvatar, {
                                        key: stack.name,
                                        src: stack.icon,
                                        size: "xxs",
                                        shape: "straight",
                                        mask: "blob",
                                        "data-nui-tooltip": stack.name,
                                        class: "bg-muted-100 dark:bg-muted-700"
                                      }, null, 8, ["src", "data-nui-tooltip"]);
                                    }), 128))
                                  ]),
                                  createVNode("div", { class: "text-muted-400 flex items-center gap-4" }, [
                                    createVNode("div", { class: "flex items-center gap-1 text-sm" }, [
                                      createVNode(_component_Icon, {
                                        name: "ph:paperclip-duotone",
                                        class: "h-4 w-4"
                                      }),
                                      createVNode("span", { class: "font-sans" }, toDisplayString(item.files.length), 1)
                                    ]),
                                    createVNode("div", { class: "flex items-center gap-1 text-sm" }, [
                                      createVNode(_component_Icon, {
                                        name: "ph:users-duotone",
                                        class: "h-4 w-4"
                                      }),
                                      createVNode("span", { class: "font-sans" }, toDisplayString(item.team.length), 1)
                                    ])
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "border-muted-200 dark:border-muted-700 bg-muted-50 dark:bg-muted-700/50 flex items-center justify-between rounded-b-xl border-t px-5 py-3" }, [
                                createVNode("div", null, [
                                  createVNode("p", { class: "text-muted-400 font-sans text-sm" }, toDisplayString(item.tasks.length) + " tasks remaining ", 1)
                                ]),
                                createVNode("div", null, [
                                  createVNode(_component_BaseAvatarGroup, {
                                    avatars: item.team,
                                    size: "xs",
                                    limit: 3
                                  }, null, 8, ["avatars"])
                                ])
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_NuxtLink, {
                          class: "group",
                          to: `/layouts/projects/details/${item.slug}`
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "p-5" }, [
                              createVNode("div", { class: "relative mb-4" }, [
                                createVNode("img", {
                                  src: item.image,
                                  alt: item.name,
                                  class: "rounded-lg"
                                }, null, 8, ["src", "alt"])
                              ]),
                              createVNode("div", { class: "mb-6 flex gap-2" }, [
                                createVNode(_component_BaseAvatar, {
                                  src: item.customer.logo,
                                  size: "sm",
                                  shape: "straight",
                                  mask: "blob",
                                  "data-nui-tooltip": item.name,
                                  class: "bg-muted-100 dark:bg-muted-700"
                                }, null, 8, ["src", "data-nui-tooltip"]),
                                createVNode("div", null, [
                                  createVNode(_component_BaseHeading, {
                                    tag: "h5",
                                    size: "sm",
                                    weight: "medium",
                                    class: "line-clamp-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.name), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_BaseParagraph, {
                                    size: "xs",
                                    class: "text-muted-400"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.customer.name) + " | " + toDisplayString(item.customer.text), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ]),
                              createVNode("div", { class: "flex items-center justify-between" }, [
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(item.stacks, (stack) => {
                                    return openBlock(), createBlock(_component_BaseAvatar, {
                                      key: stack.name,
                                      src: stack.icon,
                                      size: "xxs",
                                      shape: "straight",
                                      mask: "blob",
                                      "data-nui-tooltip": stack.name,
                                      class: "bg-muted-100 dark:bg-muted-700"
                                    }, null, 8, ["src", "data-nui-tooltip"]);
                                  }), 128))
                                ]),
                                createVNode("div", { class: "text-muted-400 flex items-center gap-4" }, [
                                  createVNode("div", { class: "flex items-center gap-1 text-sm" }, [
                                    createVNode(_component_Icon, {
                                      name: "ph:paperclip-duotone",
                                      class: "h-4 w-4"
                                    }),
                                    createVNode("span", { class: "font-sans" }, toDisplayString(item.files.length), 1)
                                  ]),
                                  createVNode("div", { class: "flex items-center gap-1 text-sm" }, [
                                    createVNode(_component_Icon, {
                                      name: "ph:users-duotone",
                                      class: "h-4 w-4"
                                    }),
                                    createVNode("span", { class: "font-sans" }, toDisplayString(item.team.length), 1)
                                  ])
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "border-muted-200 dark:border-muted-700 bg-muted-50 dark:bg-muted-700/50 flex items-center justify-between rounded-b-xl border-t px-5 py-3" }, [
                              createVNode("div", null, [
                                createVNode("p", { class: "text-muted-400 font-sans text-sm" }, toDisplayString(item.tasks.length) + " tasks remaining ", 1)
                              ]),
                              createVNode("div", null, [
                                createVNode(_component_BaseAvatarGroup, {
                                  avatars: item.team,
                                  size: "xs",
                                  limit: 3
                                }, null, 8, ["avatars"])
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></div>`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-10" }, [
                createVNode("div", null, [
                  !unref(pending) && unref(data)?.recent.length === 0 ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode("div", { class: "bg-muted-200 dark:bg-muted-800/60 rounded-xl p-6" }, [
                      createVNode(_component_BaseHeading, {
                        tag: "h4",
                        size: "lg",
                        weight: "medium"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Empty history ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseParagraph, {
                        size: "sm",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Looks like you haven't viewed any projects yet. ")
                        ]),
                        _: 1
                      })
                    ])
                  ])) : (openBlock(), createBlock("div", { key: 1 }, [
                    createVNode("div", null, [
                      createVNode("h4", { class: "text-muted-400 mb-4 font-sans text-xs font-semibold uppercase" }, " Recently Viewed ")
                    ]),
                    createVNode("div", { class: "ltablet:grid-cols-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" }, [
                      createVNode(TransitionGroup, {
                        "enter-active-class": "transform-gpu",
                        "enter-from-class": "opacity-0 -translate-x-full",
                        "enter-to-class": "opacity-100 translate-x-0",
                        "leave-active-class": "absolute transform-gpu",
                        "leave-from-class": "opacity-100 translate-x-0",
                        "leave-to-class": "opacity-0 -translate-x-full"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(data)?.recent.slice(0, 4), (item, r) => {
                            return openBlock(), createBlock(_component_NuxtLink, {
                              key: r,
                              class: "group block",
                              to: `/layouts/projects/details/${item.slug}`
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_BaseCard, {
                                  shape: "curved",
                                  "elevated-hover": "",
                                  class: "group-hover:!border-primary-500 p-5"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "mb-6 flex gap-2" }, [
                                      createVNode(_component_BaseAvatar, {
                                        src: item.customer.logo,
                                        size: "sm",
                                        shape: "straight",
                                        mask: "blob",
                                        "data-nui-tooltip": item.name,
                                        class: "bg-muted-100 dark:bg-muted-700"
                                      }, null, 8, ["src", "data-nui-tooltip"]),
                                      createVNode("div", null, [
                                        createVNode(_component_BaseHeading, {
                                          tag: "h5",
                                          size: "sm",
                                          weight: "medium",
                                          class: "line-clamp-1"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.name), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_BaseParagraph, {
                                          size: "xs",
                                          class: "text-muted-400"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.customer.name) + " | " + toDisplayString(item.customer.text), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ])
                                    ]),
                                    createVNode("div", { class: "flex items-center justify-between" }, [
                                      createVNode("div", { class: "flex items-center gap-2" }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(item.stacks, (stack) => {
                                          return openBlock(), createBlock(_component_BaseAvatar, {
                                            key: stack.name,
                                            src: stack.icon,
                                            size: "xxs",
                                            shape: "straight",
                                            mask: "blob",
                                            "data-nui-tooltip": stack.name,
                                            class: "bg-muted-100 dark:bg-muted-700"
                                          }, null, 8, ["src", "data-nui-tooltip"]);
                                        }), 128))
                                      ]),
                                      createVNode("div", { class: "text-muted-400 flex items-center gap-4" }, [
                                        createVNode("div", { class: "flex items-center gap-1 text-sm" }, [
                                          createVNode(_component_Icon, {
                                            name: "ph:paperclip-duotone",
                                            class: "h-4 w-4"
                                          }),
                                          createVNode("span", { class: "font-sans" }, toDisplayString(item.files.length), 1)
                                        ]),
                                        createVNode("div", { class: "flex items-center gap-1 text-sm" }, [
                                          createVNode(_component_Icon, {
                                            name: "ph:users-duotone",
                                            class: "h-4 w-4"
                                          }),
                                          createVNode("span", { class: "font-sans" }, toDisplayString(item.team.length), 1)
                                        ])
                                      ])
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["to"]);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ])
                  ]))
                ]),
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
                    createVNode("div", null, [
                      createVNode("h4", { class: "text-muted-400 mb-4 font-sans text-xs font-semibold uppercase" }, " All Projects ")
                    ]),
                    createVNode("div", { class: "ltablet:grid-cols-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" }, [
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
                              class: "hover:!border-primary-500"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_NuxtLink, {
                                  class: "group",
                                  to: `/layouts/projects/details/${item.slug}`
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "p-5" }, [
                                      createVNode("div", { class: "relative mb-4" }, [
                                        createVNode("img", {
                                          src: item.image,
                                          alt: item.name,
                                          class: "rounded-lg"
                                        }, null, 8, ["src", "alt"])
                                      ]),
                                      createVNode("div", { class: "mb-6 flex gap-2" }, [
                                        createVNode(_component_BaseAvatar, {
                                          src: item.customer.logo,
                                          size: "sm",
                                          shape: "straight",
                                          mask: "blob",
                                          "data-nui-tooltip": item.name,
                                          class: "bg-muted-100 dark:bg-muted-700"
                                        }, null, 8, ["src", "data-nui-tooltip"]),
                                        createVNode("div", null, [
                                          createVNode(_component_BaseHeading, {
                                            tag: "h5",
                                            size: "sm",
                                            weight: "medium",
                                            class: "line-clamp-1"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.name), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_BaseParagraph, {
                                            size: "xs",
                                            class: "text-muted-400"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.customer.name) + " | " + toDisplayString(item.customer.text), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ])
                                      ]),
                                      createVNode("div", { class: "flex items-center justify-between" }, [
                                        createVNode("div", { class: "flex items-center gap-2" }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(item.stacks, (stack) => {
                                            return openBlock(), createBlock(_component_BaseAvatar, {
                                              key: stack.name,
                                              src: stack.icon,
                                              size: "xxs",
                                              shape: "straight",
                                              mask: "blob",
                                              "data-nui-tooltip": stack.name,
                                              class: "bg-muted-100 dark:bg-muted-700"
                                            }, null, 8, ["src", "data-nui-tooltip"]);
                                          }), 128))
                                        ]),
                                        createVNode("div", { class: "text-muted-400 flex items-center gap-4" }, [
                                          createVNode("div", { class: "flex items-center gap-1 text-sm" }, [
                                            createVNode(_component_Icon, {
                                              name: "ph:paperclip-duotone",
                                              class: "h-4 w-4"
                                            }),
                                            createVNode("span", { class: "font-sans" }, toDisplayString(item.files.length), 1)
                                          ]),
                                          createVNode("div", { class: "flex items-center gap-1 text-sm" }, [
                                            createVNode(_component_Icon, {
                                              name: "ph:users-duotone",
                                              class: "h-4 w-4"
                                            }),
                                            createVNode("span", { class: "font-sans" }, toDisplayString(item.team.length), 1)
                                          ])
                                        ])
                                      ])
                                    ]),
                                    createVNode("div", { class: "border-muted-200 dark:border-muted-700 bg-muted-50 dark:bg-muted-700/50 flex items-center justify-between rounded-b-xl border-t px-5 py-3" }, [
                                      createVNode("div", null, [
                                        createVNode("p", { class: "text-muted-400 font-sans text-sm" }, toDisplayString(item.tasks.length) + " tasks remaining ", 1)
                                      ]),
                                      createVNode("div", null, [
                                        createVNode(_component_BaseAvatarGroup, {
                                          avatars: item.team,
                                          size: "xs",
                                          limit: 3
                                        }, null, 8, ["avatars"])
                                      ])
                                    ])
                                  ]),
                                  _: 2
                                }, 1032, ["to"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ])
                  ]))
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/projects/project-list-2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=project-list-2-92b0f406.mjs.map
