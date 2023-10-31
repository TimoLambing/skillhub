import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as _sfc_main$p, b as _sfc_main$o, d as _sfc_main$x, f as __nuxt_component_2, j as _sfc_main$C, e as __nuxt_component_0$5, s as _sfc_main$E } from '../server.mjs';
import { _ as _sfc_main$4 } from './BaseButtonIcon-6150946c.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, withCtx, createVNode, createTextVNode, unref, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './DemoCommentListCompact-2988e3fb.mjs';
import { _ as _sfc_main$3 } from './BaseButtonAction-57c21d00.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DemoAuthorsListCompact",
  __ssrInlineRender: true,
  setup(__props) {
    const authors = [
      {
        id: 0,
        firstName: "Hermann",
        lastName: "Mayer",
        image: "/img/avatars/16.svg",
        text: "HM",
        role: "Project manager",
        articles: 39
      },
      {
        id: 1,
        firstName: "Sara",
        lastName: "Connor",
        image: "/img/avatars/12.svg",
        text: "SC",
        role: "Frontend developer",
        articles: 24
      },
      {
        id: 2,
        firstName: "Kendra",
        lastName: "Wilson",
        image: "/img/avatars/10.svg",
        text: "KW",
        role: "HR manager",
        articles: 17
      },
      {
        id: 3,
        firstName: "John",
        lastName: "Baxter",
        image: "/img/avatars/13.svg",
        text: "NL",
        role: "Business analyst",
        articles: 11
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseButtonIcon = _sfc_main$4;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-2 space-y-5" }, _attrs))}><!--[-->`);
      ssrRenderList(authors, (author) => {
        _push(`<div class="flex items-center gap-3">`);
        _push(ssrRenderComponent(_component_BaseAvatar, {
          src: author.image,
          text: author.text,
          shape: "straight",
          mask: "blob",
          class: "bg-primary-100 dark:bg-primary-500/20 text-primary-500 shrink-0"
        }, null, _parent));
        _push(`<div>`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h4",
          size: "sm",
          weight: "light",
          lead: "tight",
          class: "text-muted-800 dark:text-white"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(author.firstName)} ${ssrInterpolate(author.lastName.slice(0, 1))}.</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(author.firstName) + " " + toDisplayString(author.lastName.slice(0, 1)) + ".", 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-muted-400"${_scopeId}>${ssrInterpolate(author.role)}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-muted-400" }, toDisplayString(author.role), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="ms-auto flex items-center gap-1"><span class="text-muted-400 font-sans text-xs">${ssrInterpolate(author.articles)} articles </span>`);
        _push(ssrRenderComponent(_component_BaseButtonIcon, {
          shape: "curved",
          muted: "",
          class: "scale-75"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-right",
                class: "h-4 w-4"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "lucide:arrow-right",
                  class: "h-4 w-4"
                })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoAuthorsListCompact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_0 = "" + publicAssetsURL("img/illustrations/dashboards/writer/readers.svg");
const _imports_1 = "" + publicAssetsURL("img/illustrations/dashboards/writer/post-1.svg");
const _imports_2 = "" + publicAssetsURL("img/illustrations/dashboards/writer/post-2.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "writer",
  __ssrInlineRender: true,
  setup(__props) {
    const activePosts = ref("recent");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseButton = _sfc_main$x;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseCard = _sfc_main$C;
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_DemoAuthorsListCompact = _sfc_main$1;
      const _component_DemoCommentListCompact = _sfc_main$2;
      const _component_BaseButtonAction = _sfc_main$3;
      const _component_BaseAvatar = _sfc_main$E;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="grid grid-cols-12 gap-6"><div class="ltablet:col-span-8 col-span-12 lg:col-span-8"><div class="grid grid-cols-12 gap-6"><div class="col-span-12"><div class="bg-primary-800 flex flex-col items-center rounded-2xl p-4 sm:flex-row"><div class="relative h-[150px] w-[320px] shrink-0 sm:h-[175px]"><img class="pointer-events-none absolute start-6 top-0 sm:-start-10"${ssrRenderAttr("src", _imports_0)} alt="Readers illustration"></div><div class="mt-6 grow sm:mt-0"><div class="pb-4 text-center sm:pb-0 sm:text-left">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        tag: "h1",
        class: "text-white opacity-90"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Hello, Maya</span>`);
          } else {
            return [
              createVNode("span", null, "Hello, Maya")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "sm",
        class: "max-w-xs text-white opacity-70"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}> Have any ideas for a new article? If not, you should definitely check the feed for some inspiration. </span>`);
          } else {
            return [
              createVNode("span", null, " Have any ideas for a new article? If not, you should definitely check the feed for some inspiration. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-2">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        size: "sm",
        color: "light",
        flavor: "outline",
        class: "w-full sm:w-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:plus",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>New Article</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:plus",
                class: "h-4 w-4"
              }),
              createVNode("span", null, "New Article")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div><div class="col-span-12"><div class="grid grid-cols-12 gap-6"><div class="col-span-12 sm:col-span-6"><div class="flex flex-col gap-6"><div class="grid grid-cols-12 gap-4"><div class="col-span-4">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "p-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              weight: "medium",
              class: "text-muted-400 uppercase"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Articles</span>`);
                } else {
                  return [
                    createVNode("span", null, "Articles")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="text-muted-800 dark:text-muted-100 block font-sans text-2xl font-bold"${_scopeId}> 138 </span>`);
          } else {
            return [
              createVNode(_component_BaseParagraph, {
                size: "xs",
                weight: "medium",
                class: "text-muted-400 uppercase"
              }, {
                default: withCtx(() => [
                  createVNode("span", null, "Articles")
                ]),
                _: 1
              }),
              createVNode("span", { class: "text-muted-800 dark:text-muted-100 block font-sans text-2xl font-bold" }, " 138 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-4">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "p-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              weight: "medium",
              class: "text-muted-400 uppercase"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Readers</span>`);
                } else {
                  return [
                    createVNode("span", null, "Readers")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="text-muted-800 dark:text-muted-100 block font-sans text-2xl font-bold"${_scopeId}> 921 </span>`);
          } else {
            return [
              createVNode(_component_BaseParagraph, {
                size: "xs",
                weight: "medium",
                class: "text-muted-400 uppercase"
              }, {
                default: withCtx(() => [
                  createVNode("span", null, "Readers")
                ]),
                _: 1
              }),
              createVNode("span", { class: "text-muted-800 dark:text-muted-100 block font-sans text-2xl font-bold" }, " 921 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-4">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "p-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              weight: "medium",
              class: "text-muted-400 uppercase"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Comments</span>`);
                } else {
                  return [
                    createVNode("span", null, "Comments")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="text-muted-800 dark:text-muted-100 block font-sans text-2xl font-bold"${_scopeId}> 279 </span>`);
          } else {
            return [
              createVNode(_component_BaseParagraph, {
                size: "xs",
                weight: "medium",
                class: "text-muted-400 uppercase"
              }, {
                default: withCtx(() => [
                  createVNode("span", null, "Comments")
                ]),
                _: 1
              }),
              createVNode("span", { class: "text-muted-800 dark:text-muted-100 block font-sans text-2xl font-bold" }, " 279 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_BaseCard, {
        class: "p-6",
        shape: "curved"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-8 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Popular authors</span>`);
                } else {
                  return [
                    createVNode("span", null, "Popular authors")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` View All `);
                } else {
                  return [
                    createTextVNode(" View All ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_DemoAuthorsListCompact, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-8 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Popular authors")
                  ]),
                  _: 1
                }),
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" View All ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_DemoAuthorsListCompact)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="col-span-12 sm:col-span-6">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        class: "p-6",
        shape: "curved"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-8 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Latest comments</span>`);
                } else {
                  return [
                    createVNode("span", null, "Latest comments")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` View All `);
                } else {
                  return [
                    createTextVNode(" View All ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_DemoCommentListCompact, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-8 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Latest comments")
                  ]),
                  _: 1
                }),
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" View All ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_DemoCommentListCompact)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div><div class="ltablet:col-span-4 col-span-12 lg:col-span-4"><div class="bg-muted-200 dark:bg-muted-800/70 rounded-2xl p-6"><div class="mb-8 flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "md",
        weight: "semibold",
        lead: "tight",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>New articles</span>`);
          } else {
            return [
              createVNode("span", null, "New articles")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex scale-90 gap-2 sm:justify-end">`);
      _push(ssrRenderComponent(_component_BaseButtonAction, {
        small: "",
        color: unref(activePosts) === "recent" ? "primary" : "default",
        onClick: ($event) => activePosts.value = "recent"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Recent `);
          } else {
            return [
              createTextVNode(" Recent ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButtonAction, {
        small: "",
        color: unref(activePosts) === "popular" ? "primary" : "default",
        onClick: ($event) => activePosts.value = "popular"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Popular `);
          } else {
            return [
              createTextVNode(" Popular ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="ptablet:grid ptablet:grid-cols-2 flex flex-col gap-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "flex flex-col"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_1)} alt="Post image" class="bg-muted-200 rounded-xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseCard, { class: "shadow-muted-300/30 dark:shadow-muted-900/20 -mt-8 !rounded-2xl p-6 shadow-xl" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="mb-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseHeading, {
                    as: "h4",
                    size: "md",
                    weight: "light",
                    lead: "tight",
                    class: "text-muted-800 mb-1 dark:text-white"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>Learning the modern novel</span>`);
                      } else {
                        return [
                          createVNode("span", null, "Learning the modern novel")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-muted-400"${_scopeId3}> Some article content and lorem ipsum sit dolor amet as a nice dummy subtitle </span>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-muted-400" }, " Some article content and lorem ipsum sit dolor amet as a nice dummy subtitle ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="flex gap-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseAvatar, {
                    src: "/img/avatars/6.svg",
                    text: "BT",
                    size: "xs",
                    class: "bg-primary-100 dark:bg-primary-500/20 text-primary-500 shrink-0"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseHeading, {
                    as: "h4",
                    size: "xs",
                    weight: "light",
                    lead: "tight",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>Mike Janovski</span>`);
                      } else {
                        return [
                          createVNode("span", null, "Mike Janovski")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-muted-400"${_scopeId3}>Novel writer</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-muted-400" }, "Novel writer")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "mb-3" }, [
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "md",
                        weight: "light",
                        lead: "tight",
                        class: "text-muted-800 mb-1 dark:text-white"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, "Learning the modern novel")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseParagraph, { size: "xs" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-muted-400" }, " Some article content and lorem ipsum sit dolor amet as a nice dummy subtitle ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "flex gap-3" }, [
                      createVNode(_component_BaseAvatar, {
                        src: "/img/avatars/6.svg",
                        text: "BT",
                        size: "xs",
                        class: "bg-primary-100 dark:bg-primary-500/20 text-primary-500 shrink-0"
                      }),
                      createVNode("div", null, [
                        createVNode(_component_BaseHeading, {
                          as: "h4",
                          size: "xs",
                          weight: "light",
                          lead: "tight",
                          class: "text-muted-800 dark:text-white"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, "Mike Janovski")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseParagraph, { size: "xs" }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-muted-400" }, "Novel writer")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("img", {
                src: _imports_1,
                alt: "Post image",
                class: "bg-muted-200 rounded-xl"
              }),
              createVNode(_component_BaseCard, { class: "shadow-muted-300/30 dark:shadow-muted-900/20 -mt-8 !rounded-2xl p-6 shadow-xl" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "mb-3" }, [
                    createVNode(_component_BaseHeading, {
                      as: "h4",
                      size: "md",
                      weight: "light",
                      lead: "tight",
                      class: "text-muted-800 mb-1 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "Learning the modern novel")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, { size: "xs" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-muted-400" }, " Some article content and lorem ipsum sit dolor amet as a nice dummy subtitle ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "flex gap-3" }, [
                    createVNode(_component_BaseAvatar, {
                      src: "/img/avatars/6.svg",
                      text: "BT",
                      size: "xs",
                      class: "bg-primary-100 dark:bg-primary-500/20 text-primary-500 shrink-0"
                    }),
                    createVNode("div", null, [
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "xs",
                        weight: "light",
                        lead: "tight",
                        class: "text-muted-800 dark:text-white"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, "Mike Janovski")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseParagraph, { size: "xs" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-muted-400" }, "Novel writer")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "flex flex-col"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_2)} alt="Post image" class="bg-muted-200 rounded-xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseCard, { class: "shadow-muted-300/30 dark:shadow-muted-900/20 -mt-8 !rounded-2xl p-6 shadow-xl" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="mb-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseHeading, {
                    as: "h4",
                    size: "md",
                    weight: "light",
                    lead: "tight",
                    class: "text-muted-800 mb-1 dark:text-white"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>5 writing tips just for you</span>`);
                      } else {
                        return [
                          createVNode("span", null, "5 writing tips just for you")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-muted-400"${_scopeId3}> Some article content and lorem ipsum sit dolor amet as a nice dummy subtitle </span>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-muted-400" }, " Some article content and lorem ipsum sit dolor amet as a nice dummy subtitle ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="flex gap-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseAvatar, {
                    src: "/img/avatars/5.svg",
                    text: "BT",
                    size: "xs",
                    class: "bg-primary-100 dark:bg-primary-500/20 text-primary-500 shrink-0"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseHeading, {
                    as: "h4",
                    size: "xs",
                    weight: "light",
                    lead: "tight",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>Clarissa Miller</span>`);
                      } else {
                        return [
                          createVNode("span", null, "Clarissa Miller")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-muted-400"${_scopeId3}>Novel writer</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-muted-400" }, "Novel writer")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "mb-3" }, [
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "md",
                        weight: "light",
                        lead: "tight",
                        class: "text-muted-800 mb-1 dark:text-white"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, "5 writing tips just for you")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseParagraph, { size: "xs" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-muted-400" }, " Some article content and lorem ipsum sit dolor amet as a nice dummy subtitle ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "flex gap-3" }, [
                      createVNode(_component_BaseAvatar, {
                        src: "/img/avatars/5.svg",
                        text: "BT",
                        size: "xs",
                        class: "bg-primary-100 dark:bg-primary-500/20 text-primary-500 shrink-0"
                      }),
                      createVNode("div", null, [
                        createVNode(_component_BaseHeading, {
                          as: "h4",
                          size: "xs",
                          weight: "light",
                          lead: "tight",
                          class: "text-muted-800 dark:text-white"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, "Clarissa Miller")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseParagraph, { size: "xs" }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-muted-400" }, "Novel writer")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("img", {
                src: _imports_2,
                alt: "Post image",
                class: "bg-muted-200 rounded-xl"
              }),
              createVNode(_component_BaseCard, { class: "shadow-muted-300/30 dark:shadow-muted-900/20 -mt-8 !rounded-2xl p-6 shadow-xl" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "mb-3" }, [
                    createVNode(_component_BaseHeading, {
                      as: "h4",
                      size: "md",
                      weight: "light",
                      lead: "tight",
                      class: "text-muted-800 mb-1 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "5 writing tips just for you")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, { size: "xs" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-muted-400" }, " Some article content and lorem ipsum sit dolor amet as a nice dummy subtitle ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "flex gap-3" }, [
                    createVNode(_component_BaseAvatar, {
                      src: "/img/avatars/5.svg",
                      text: "BT",
                      size: "xs",
                      class: "bg-primary-100 dark:bg-primary-500/20 text-primary-500 shrink-0"
                    }),
                    createVNode("div", null, [
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "xs",
                        weight: "light",
                        lead: "tight",
                        class: "text-muted-800 dark:text-white"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, "Clarissa Miller")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseParagraph, { size: "xs" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-muted-400" }, "Novel writer")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/writer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=writer-32f3f5c4.mjs.map
