import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { j as _sfc_main$C, Q as _sfc_main$3, _ as _sfc_main$p, d as _sfc_main$x, i as _sfc_main$D, f as __nuxt_component_2 } from '../server.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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

const _imports_0 = "" + publicAssetsURL("img/illustrations/placeholders/flat/placeholder-promotion.svg");
const _imports_1 = "" + publicAssetsURL("img/illustrations/placeholders/flat/placeholder-promotion-dark.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "utility-promotion",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$C;
      const _component_BasePlaceholderPage = _sfc_main$3;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseButton = _sfc_main$x;
      const _component_BaseText = _sfc_main$D;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center py-8" }, _attrs))}><div class="mx-auto w-full max-w-4xl">`);
      _push(ssrRenderComponent(_component_BaseCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="divide-muted-200 dark:divide-muted-700 grid divide-y sm:grid-cols-2 sm:divide-x sm:divide-y-0"${_scopeId}><div class="flex flex-col p-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BasePlaceholderPage, {
              title: "Empower your team",
              subtitle: "Make your team more productive and more efficient with our premium plan. Don't miss out on this great opportunity!"
            }, {
              image: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img class="block dark:hidden"${ssrRenderAttr("src", _imports_0)} alt="placeholder-image"${_scopeId2}><img class="hidden dark:block"${ssrRenderAttr("src", _imports_1)} alt="placeholder-image"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      class: "block dark:hidden",
                      src: _imports_0,
                      alt: "placeholder-image"
                    }),
                    createVNode("img", {
                      class: "hidden dark:block",
                      src: _imports_1,
                      alt: "placeholder-image"
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="mx-auto mt-6 flex w-full max-w-[280px] items-end justify-center gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseHeading, {
                    as: "h3",
                    size: "2xl",
                    weight: "medium",
                    lead: "none"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-muted-400 text-sm"${_scopeId3}>Only</span><span class="px-1"${_scopeId3}> $44.99</span><span class="text-muted-400 text-sm"${_scopeId3}>/per month</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-muted-400 text-sm" }, "Only"),
                          createVNode("span", { class: "px-1" }, " $44.99"),
                          createVNode("span", { class: "text-muted-400 text-sm" }, "/per month")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="mt-8 flex items-center justify-between gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseButton, { class: "w-full" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Skip`);
                      } else {
                        return [
                          createTextVNode("Skip")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseButton, {
                    color: "primary",
                    class: "w-full"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Upgrade`);
                      } else {
                        return [
                          createTextVNode("Upgrade")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "mx-auto mt-6 flex w-full max-w-[280px] items-end justify-center gap-2" }, [
                      createVNode(_component_BaseHeading, {
                        as: "h3",
                        size: "2xl",
                        weight: "medium",
                        lead: "none"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-muted-400 text-sm" }, "Only"),
                          createVNode("span", { class: "px-1" }, " $44.99"),
                          createVNode("span", { class: "text-muted-400 text-sm" }, "/per month")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "mt-8 flex items-center justify-between gap-2" }, [
                      createVNode(_component_BaseButton, { class: "w-full" }, {
                        default: withCtx(() => [
                          createTextVNode("Skip")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseButton, {
                        color: "primary",
                        class: "w-full"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Upgrade")
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><div class="flex flex-col p-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              tag: "h2",
              size: "md",
              weight: "medium",
              class: "mt-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Upgrade Now `);
                } else {
                  return [
                    createTextVNode(" Upgrade Now ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              class: "text-muted-500 dark:text-muted-400 max-w-xs"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Take a look at some incredible features that have been added to our premium plan. You won&#39;t believe it! `);
                } else {
                  return [
                    createTextVNode(" Take a look at some incredible features that have been added to our premium plan. You won't believe it! ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-6"${_scopeId}><ul class="space-y-6"${_scopeId}><li class="flex gap-3"${_scopeId}><div class="border-muted-200 dark:border-muted-600 dark:bg-muted-700 shadow-muted-300/30 dark:shadow-muted-800/20 flex h-9 w-9 items-center justify-center rounded-full border bg-white shadow-xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:check",
              class: "text-success-500 h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "sm",
              weight: "medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 8 team seats `);
                } else {
                  return [
                    createTextVNode(" 8 team seats ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              class: "text-muted-500 dark:text-muted-400 max-w-[210px]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Each team member on your account can create projects and tasks. `);
                } else {
                  return [
                    createTextVNode(" Each team member on your account can create projects and tasks. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></li><li class="flex gap-3"${_scopeId}><div class="border-muted-200 dark:border-muted-600 dark:bg-muted-700 shadow-muted-300/30 dark:shadow-muted-800/20 flex h-9 w-9 items-center justify-center rounded-full border bg-white shadow-xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:check",
              class: "text-success-500 h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "sm",
              weight: "medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Integrations `);
                } else {
                  return [
                    createTextVNode(" Integrations ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              class: "text-muted-500 dark:text-muted-400 max-w-[210px]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Add up to 5 addons to your main application to help you manage. `);
                } else {
                  return [
                    createTextVNode(" Add up to 5 addons to your main application to help you manage. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></li><li class="flex gap-3"${_scopeId}><div class="border-muted-200 dark:border-muted-600 dark:bg-muted-700 shadow-muted-300/30 dark:shadow-muted-800/20 flex h-9 w-9 items-center justify-center rounded-full border bg-white shadow-xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:check",
              class: "text-success-500 h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "sm",
              weight: "medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Growth scaling `);
                } else {
                  return [
                    createTextVNode(" Growth scaling ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              class: "text-muted-500 dark:text-muted-400 max-w-[210px]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Your application grows in parallel of your business, without any effort. `);
                } else {
                  return [
                    createTextVNode(" Your application grows in parallel of your business, without any effort. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></li></ul></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "divide-muted-200 dark:divide-muted-700 grid divide-y sm:grid-cols-2 sm:divide-x sm:divide-y-0" }, [
                createVNode("div", { class: "flex flex-col p-8" }, [
                  createVNode(_component_BasePlaceholderPage, {
                    title: "Empower your team",
                    subtitle: "Make your team more productive and more efficient with our premium plan. Don't miss out on this great opportunity!"
                  }, {
                    image: withCtx(() => [
                      createVNode("img", {
                        class: "block dark:hidden",
                        src: _imports_0,
                        alt: "placeholder-image"
                      }),
                      createVNode("img", {
                        class: "hidden dark:block",
                        src: _imports_1,
                        alt: "placeholder-image"
                      })
                    ]),
                    default: withCtx(() => [
                      createVNode("div", { class: "mx-auto mt-6 flex w-full max-w-[280px] items-end justify-center gap-2" }, [
                        createVNode(_component_BaseHeading, {
                          as: "h3",
                          size: "2xl",
                          weight: "medium",
                          lead: "none"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-muted-400 text-sm" }, "Only"),
                            createVNode("span", { class: "px-1" }, " $44.99"),
                            createVNode("span", { class: "text-muted-400 text-sm" }, "/per month")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "mt-8 flex items-center justify-between gap-2" }, [
                        createVNode(_component_BaseButton, { class: "w-full" }, {
                          default: withCtx(() => [
                            createTextVNode("Skip")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseButton, {
                          color: "primary",
                          class: "w-full"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Upgrade")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "flex flex-col p-8" }, [
                    createVNode(_component_BaseHeading, {
                      tag: "h2",
                      size: "md",
                      weight: "medium",
                      class: "mt-4"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Upgrade Now ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseText, {
                      size: "xs",
                      class: "text-muted-500 dark:text-muted-400 max-w-xs"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Take a look at some incredible features that have been added to our premium plan. You won't believe it! ")
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "mt-6" }, [
                      createVNode("ul", { class: "space-y-6" }, [
                        createVNode("li", { class: "flex gap-3" }, [
                          createVNode("div", { class: "border-muted-200 dark:border-muted-600 dark:bg-muted-700 shadow-muted-300/30 dark:shadow-muted-800/20 flex h-9 w-9 items-center justify-center rounded-full border bg-white shadow-xl" }, [
                            createVNode(_component_Icon, {
                              name: "lucide:check",
                              class: "text-success-500 h-4 w-4"
                            })
                          ]),
                          createVNode("div", null, [
                            createVNode(_component_BaseHeading, {
                              as: "h3",
                              size: "sm",
                              weight: "medium"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" 8 team seats ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_BaseText, {
                              size: "xs",
                              class: "text-muted-500 dark:text-muted-400 max-w-[210px]"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Each team member on your account can create projects and tasks. ")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        createVNode("li", { class: "flex gap-3" }, [
                          createVNode("div", { class: "border-muted-200 dark:border-muted-600 dark:bg-muted-700 shadow-muted-300/30 dark:shadow-muted-800/20 flex h-9 w-9 items-center justify-center rounded-full border bg-white shadow-xl" }, [
                            createVNode(_component_Icon, {
                              name: "lucide:check",
                              class: "text-success-500 h-4 w-4"
                            })
                          ]),
                          createVNode("div", null, [
                            createVNode(_component_BaseHeading, {
                              as: "h3",
                              size: "sm",
                              weight: "medium"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Integrations ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_BaseText, {
                              size: "xs",
                              class: "text-muted-500 dark:text-muted-400 max-w-[210px]"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Add up to 5 addons to your main application to help you manage. ")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        createVNode("li", { class: "flex gap-3" }, [
                          createVNode("div", { class: "border-muted-200 dark:border-muted-600 dark:bg-muted-700 shadow-muted-300/30 dark:shadow-muted-800/20 flex h-9 w-9 items-center justify-center rounded-full border bg-white shadow-xl" }, [
                            createVNode(_component_Icon, {
                              name: "lucide:check",
                              class: "text-success-500 h-4 w-4"
                            })
                          ]),
                          createVNode("div", null, [
                            createVNode(_component_BaseHeading, {
                              as: "h3",
                              size: "sm",
                              weight: "medium"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Growth scaling ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_BaseText, {
                              size: "xs",
                              class: "text-muted-500 dark:text-muted-400 max-w-[210px]"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Your application grows in parallel of your business, without any effort. ")
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/utility-promotion.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=utility-promotion-226a4531.mjs.map
