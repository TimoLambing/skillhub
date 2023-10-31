import _sfc_main$1 from './DocLayoutSection-827b2b8a.mjs';
import { K as useAsyncData, L as queryContent, e as __nuxt_component_0$5, j as _sfc_main$C } from '../server.mjs';
import { _ as _sfc_main$2 } from './BaseTag-734af285.mjs';
import { defineComponent, ref, withAsyncContext, watchEffect, computed, withCtx, unref, openBlock, createBlock, Fragment, createCommentVNode, createVNode, toDisplayString, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import './TairoTocAnchor-4ae1eaf7.mjs';
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

async function useDocumentationRoutes() {
  const { data } = await useAsyncData("doc-nav", () => {
    return queryContent("/documentation").only(["_path", "title", "description", "components", "icon"]).find();
  });
  const docRoutes = computed(() => {
    return data.value ?? [];
  });
  return {
    docRoutes
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DocComponentList",
  __ssrInlineRender: true,
  props: {
    prefix: {}
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const meta = ref([]);
    const componentsMeta = ([__temp, __restore] = withAsyncContext(() => $fetch(`/api/component-meta`)), __temp = await __temp, __restore(), __temp);
    const { docRoutes: routesFlat } = ([__temp, __restore] = withAsyncContext(() => useDocumentationRoutes()), __temp = await __temp, __restore(), __temp);
    watchEffect(() => {
      meta.value = Object.keys(componentsMeta ?? {})?.filter((name) => {
        if (!props.prefix)
          return true;
        return name.startsWith(props.prefix);
      });
    });
    const componentsPagesMap = computed(() => {
      return meta.value.map((name) => {
        const route = routesFlat.value.find(
          (route2) => route2.components?.includes(name)
        );
        return {
          name,
          route
        };
      });
    });
    const componentsWithoutPages = computed(() => {
      return componentsPagesMap.value.filter((c) => {
        const route = routesFlat.value.find(
          (route2) => route2.components?.includes(c.name)
        );
        return !route;
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DocLayoutSection = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseTag = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div>`);
      _push(ssrRenderComponent(_component_DocLayoutSection, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid gap-4 md:grid-cols-4"${_scopeId}><!--[-->`);
            ssrRenderList(unref(componentsPagesMap), (component) => {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                key: component.name,
                class: "nui-focus group rounded-md",
                to: component.route?._path
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_BaseCard, {
                      class: "flex h-full flex-col px-4 py-8",
                      shape: "curved"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (component.route?.icon) {
                            _push4(`<!--[-->`);
                            if (component.route?.icon?.src) {
                              _push4(`<img class="h-16 shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:hidden"${ssrRenderAttr("src", component.route?.icon?.src)}${ssrRenderAttr("alt", component.name + " Tairo Documentation")}${_scopeId3}>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            if (component.route?.icon?.src) {
                              _push4(`<img class="hidden h-16 shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-focus:opacity-100 group-focus:grayscale-0 dark:block"${ssrRenderAttr(
                                "src",
                                component.route?.icon?.srcDark || component.route?.icon?.src
                              )}${ssrRenderAttr("alt", component.name + " Tairo Documentation")}${_scopeId3}>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`<!--]-->`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<div class="mt-2 text-center font-sans"${_scopeId3}><div class="flex h-full grow flex-col justify-between"${_scopeId3}>`);
                          if (component?.name) {
                            _push4(`<span class="text-muted-800 line-clamp-1 block w-full max-w-[240px] text-sm dark:text-white"${_scopeId3}>${ssrInterpolate(component?.name)}</span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<span class="text-primary-500 font-sans text-xs font-medium opacity-60 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100"${_scopeId3}> Read documentation </span></div></div>`);
                        } else {
                          return [
                            component.route?.icon ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                              component.route?.icon?.src ? (openBlock(), createBlock("img", {
                                key: 0,
                                class: "h-16 shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:hidden",
                                src: component.route?.icon?.src,
                                alt: component.name + " Tairo Documentation"
                              }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                              component.route?.icon?.src ? (openBlock(), createBlock("img", {
                                key: 1,
                                class: "hidden h-16 shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-focus:opacity-100 group-focus:grayscale-0 dark:block",
                                src: component.route?.icon?.srcDark || component.route?.icon?.src,
                                alt: component.name + " Tairo Documentation"
                              }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                            ], 64)) : createCommentVNode("", true),
                            createVNode("div", { class: "mt-2 text-center font-sans" }, [
                              createVNode("div", { class: "flex h-full grow flex-col justify-between" }, [
                                component?.name ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "text-muted-800 line-clamp-1 block w-full max-w-[240px] text-sm dark:text-white"
                                }, toDisplayString(component?.name), 1)) : createCommentVNode("", true),
                                createVNode("span", { class: "text-primary-500 font-sans text-xs font-medium opacity-60 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100" }, " Read documentation ")
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
                        class: "flex h-full flex-col px-4 py-8",
                        shape: "curved"
                      }, {
                        default: withCtx(() => [
                          component.route?.icon ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            component.route?.icon?.src ? (openBlock(), createBlock("img", {
                              key: 0,
                              class: "h-16 shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:hidden",
                              src: component.route?.icon?.src,
                              alt: component.name + " Tairo Documentation"
                            }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                            component.route?.icon?.src ? (openBlock(), createBlock("img", {
                              key: 1,
                              class: "hidden h-16 shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-focus:opacity-100 group-focus:grayscale-0 dark:block",
                              src: component.route?.icon?.srcDark || component.route?.icon?.src,
                              alt: component.name + " Tairo Documentation"
                            }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                          ], 64)) : createCommentVNode("", true),
                          createVNode("div", { class: "mt-2 text-center font-sans" }, [
                            createVNode("div", { class: "flex h-full grow flex-col justify-between" }, [
                              component?.name ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "text-muted-800 line-clamp-1 block w-full max-w-[240px] text-sm dark:text-white"
                              }, toDisplayString(component?.name), 1)) : createCommentVNode("", true),
                              createVNode("span", { class: "text-primary-500 font-sans text-xs font-medium opacity-60 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100" }, " Read documentation ")
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
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "grid gap-4 md:grid-cols-4" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(componentsPagesMap), (component) => {
                  return openBlock(), createBlock(_component_NuxtLink, {
                    key: component.name,
                    class: "nui-focus group rounded-md",
                    to: component.route?._path
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_BaseCard, {
                        class: "flex h-full flex-col px-4 py-8",
                        shape: "curved"
                      }, {
                        default: withCtx(() => [
                          component.route?.icon ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            component.route?.icon?.src ? (openBlock(), createBlock("img", {
                              key: 0,
                              class: "h-16 shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:hidden",
                              src: component.route?.icon?.src,
                              alt: component.name + " Tairo Documentation"
                            }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                            component.route?.icon?.src ? (openBlock(), createBlock("img", {
                              key: 1,
                              class: "hidden h-16 shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-focus:opacity-100 group-focus:grayscale-0 dark:block",
                              src: component.route?.icon?.srcDark || component.route?.icon?.src,
                              alt: component.name + " Tairo Documentation"
                            }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                          ], 64)) : createCommentVNode("", true),
                          createVNode("div", { class: "mt-2 text-center font-sans" }, [
                            createVNode("div", { class: "flex h-full grow flex-col justify-between" }, [
                              component?.name ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "text-muted-800 line-clamp-1 block w-full max-w-[240px] text-sm dark:text-white"
                              }, toDisplayString(component?.name), 1)) : createCommentVNode("", true),
                              createVNode("span", { class: "text-primary-500 font-sans text-xs font-medium opacity-60 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100" }, " Read documentation ")
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["to"]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(componentsWithoutPages).length) {
        _push(`<div class="flex w-full flex-wrap justify-start gap-2"><!--[-->`);
        ssrRenderList(unref(componentsWithoutPages), (component) => {
          _push(ssrRenderComponent(_component_BaseTag, {
            key: component.name,
            size: "sm",
            class: "cursor-help opacity-60 transition-opacity duration-100 hover:opacity-100",
            "data-nui-tooltip": "This component is not documented yet."
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="font-mono text-xs"${_scopeId}>&lt;${ssrInterpolate(component.name)}&gt;</span>`);
              } else {
                return [
                  createVNode("span", { class: "font-mono text-xs" }, "<" + toDisplayString(component.name) + ">", 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/components/content/DocComponentList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=DocComponentList-8877d7fc.mjs.map
