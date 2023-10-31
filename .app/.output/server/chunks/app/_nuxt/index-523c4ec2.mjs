import { J as useRoute, u as useRouter, _ as _sfc_main$p, b as _sfc_main$o, f as __nuxt_component_2, r as __nuxt_component_0$2, e as __nuxt_component_0$5, j as _sfc_main$C, s as _sfc_main$E } from '../server.mjs';
import { _ as _sfc_main$1, a as _sfc_main$1$1 } from './BaseAutocomplete-8d21f0d1.mjs';
import { defineComponent, computed, ref, watch, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, isRef, openBlock, createBlock, createCommentVNode, createVNode, toDisplayString, Fragment, renderList, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-45c1546c.mjs';
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
import './BaseIconBox-642fe941.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
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
      "$qdbzuIDHcS"
    )), __temp = await __temp, __restore(), __temp);
    const selectedProject = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseAutocomplete = _sfc_main$1;
      const _component_BasePlaceload = __nuxt_component_0$2;
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_BaseAutocompleteItem = _sfc_main$1$1;
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseAvatar = _sfc_main$E;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "ltablet:mt-20 mx-auto max-w-4xl lg:mt-20" }, _attrs))}>`);
      if (!unref(pending) && unref(data)?.recent.length === 0) {
        _push(`<div><div class="bg-muted-200 dark:bg-muted-800/60 rounded-xl p-6">`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          tag: "h4",
          size: "lg",
          weight: "medium"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` No projects `);
            } else {
              return [
                createTextVNode(" No projects ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, {
          size: "sm",
          class: "text-muted-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Looks like you don&#39;t have any project to view. `);
            } else {
              return [
                createTextVNode(" Looks like you don't have any project to view. ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<div class="grid grid-cols-12 gap-6"><div class="ltablet:col-span-5 col-span-12 mb-6 lg:col-span-5"><div class="ltablet:max-w-sm bg-muted-200 dark:bg-muted-800/60 rounded-xl p-8 lg:max-w-sm"><div class="mb-8 max-w-sm">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:kanban-duotone",
          class: "text-primary-500 mb-2 h-10 w-10"
        }, null, _parent));
        _push(ssrRenderComponent(_component_BaseHeading, {
          tag: "h4",
          size: "xl",
          weight: "medium",
          class: "mb-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Your recent boards `);
            } else {
              return [
                createTextVNode(" Your recent boards ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, {
          size: "sm",
          class: "text-muted-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Here are the most recent projects that have been viewed in your team. Search for more by entering the project name below. `);
            } else {
              return [
                createTextVNode(" Here are the most recent projects that have been viewed in your team. Search for more by entering the project name below. ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_BaseAutocomplete, {
          modelValue: unref(selectedProject),
          "onUpdate:modelValue": ($event) => isRef(selectedProject) ? selectedProject.value = $event : null,
          items: unref(data)?.data,
          "display-value": (item) => item.name,
          shape: "curved",
          icon: "lucide:search",
          placeholder: "Search...",
          label: "Search projects",
          "label-float": "",
          clearable: ""
        }, {
          empty: withCtx(({
            pending: pendingAutocomplete,
            query: queryAutocomplete
          }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (pendingAutocomplete) {
                _push2(ssrRenderComponent(_component_BasePlaceload, null, null, _parent2, _scopeId));
              } else if (!queryAutocomplete) {
                _push2(`<span class="text-muted-700 dark:text-muted-400 cursor-default select-none"${_scopeId}> Ex: Delivery app project... </span>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                pendingAutocomplete ? (openBlock(), createBlock(_component_BasePlaceload, { key: 0 })) : !queryAutocomplete ? (openBlock(), createBlock("span", {
                  key: 1,
                  class: "text-muted-700 dark:text-muted-400 cursor-default select-none"
                }, " Ex: Delivery app project... ")) : createCommentVNode("", true)
              ];
            }
          }),
          item: withCtx(({ item, selected }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: `/layouts/projects/board/${item.slug}`,
                class: "block"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_BaseAutocompleteItem, {
                      value: {
                        name: item.name,
                        text: `${item.customer.name} | ${item.customer.text}`,
                        media: item.customer.logo
                      },
                      selected
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_BaseAutocompleteItem, {
                        value: {
                          name: item.name,
                          text: `${item.customer.name} | ${item.customer.text}`,
                          media: item.customer.logo
                        },
                        selected
                      }, null, 8, ["value", "selected"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_NuxtLink, {
                  to: `/layouts/projects/board/${item.slug}`,
                  class: "block"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_BaseAutocompleteItem, {
                      value: {
                        name: item.name,
                        text: `${item.customer.name} | ${item.customer.text}`,
                        media: item.customer.logo
                      },
                      selected
                    }, null, 8, ["value", "selected"])
                  ]),
                  _: 2
                }, 1032, ["to"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="ltablet:col-span-7 col-span-12 grid gap-4 sm:grid-cols-2 lg:col-span-7"><!--[-->`);
        ssrRenderList(unref(data)?.data.slice(0, 6), (item, r) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: r,
            class: "group block",
            to: `/layouts/projects/board/${item.slug}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_BaseCard, {
                  shape: "curved",
                  "elevated-hover": "",
                  class: "group-hover:!border-primary-500 p-5"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="mb-6 flex gap-2"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseAvatar, {
                        src: item.customer.logo,
                        size: "sm",
                        shape: "straight",
                        mask: "blob",
                        "data-nui-tooltip": item.customer.name,
                        class: "bg-muted-100 dark:bg-muted-700"
                      }, null, _parent3, _scopeId2));
                      _push3(`<div${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseHeading, {
                        tag: "h5",
                        size: "sm",
                        weight: "medium",
                        class: "line-clamp-1"
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
                        class: "text-muted-400"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(item.customer.name)} | ${ssrInterpolate(item.customer.text)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(item.customer.name) + " | " + toDisplayString(item.customer.text), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div></div><div class="flex items-center justify-between"${_scopeId2}><div class="flex items-center gap-2"${_scopeId2}><!--[-->`);
                      ssrRenderList(item.stacks, (stack) => {
                        _push3(ssrRenderComponent(_component_BaseAvatar, {
                          key: stack.name,
                          src: stack.icon,
                          size: "xxs",
                          shape: "straight",
                          mask: "blob",
                          "data-nui-tooltip": stack.name,
                          class: "bg-muted-100 dark:bg-muted-700"
                        }, null, _parent3, _scopeId2));
                      });
                      _push3(`<!--]--></div><div class="text-muted-400 flex items-center gap-4"${_scopeId2}><div class="flex items-center gap-1 text-sm"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "ph:paperclip-duotone",
                        class: "h-4 w-4"
                      }, null, _parent3, _scopeId2));
                      _push3(`<span class="font-sans"${_scopeId2}>${ssrInterpolate(item.files.length)}</span></div><div class="flex items-center gap-1 text-sm"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "ph:users-duotone",
                        class: "h-4 w-4"
                      }, null, _parent3, _scopeId2));
                      _push3(`<span class="font-sans"${_scopeId2}>${ssrInterpolate(item.team.length)}</span></div></div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "mb-6 flex gap-2" }, [
                          createVNode(_component_BaseAvatar, {
                            src: item.customer.logo,
                            size: "sm",
                            shape: "straight",
                            mask: "blob",
                            "data-nui-tooltip": item.customer.name,
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
                }, _parent2, _scopeId));
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
                          "data-nui-tooltip": item.customer.name,
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
          }, _parent));
        });
        _push(`<!--]--></div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/projects/board/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-523c4ec2.mjs.map
