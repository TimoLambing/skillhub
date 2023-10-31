import { e as __nuxt_component_0$5, h as __nuxt_component_0$1, f as __nuxt_component_2, _ as _sfc_main$p, b as _sfc_main$o, i as _sfc_main$D, j as _sfc_main$C, s as _sfc_main$E } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseThemeToggle-8b5dbd48.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
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
import './composables-f7cb2fae.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "utility-status",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_TairoLogoText = __nuxt_component_0$1;
      const _component_BaseThemeToggle = _sfc_main$1;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseText = _sfc_main$D;
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseAvatar = _sfc_main$E;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-muted-100 dark:bg-muted-900 min-h-screen overflow-hidden px-4" }, _attrs))}><div class="mx-auto max-w-3xl"><div class="mx-auto flex h-16 w-full max-w-4xl items-center justify-between px-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-muted-400 hover:text-primary-500 dark:text-muted-700 dark:hover:text-primary-500 transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TairoLogoText, { class: "h-7" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TairoLogoText, { class: "h-7" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center gap-4">`);
      _push(ssrRenderComponent(_component_BaseThemeToggle, null, null, _parent));
      _push(`</div></div><div class="mx-auto max-w-4xl space-y-12 py-12"><div><div class="flex flex-col gap-4 pb-16 text-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:check-circle-duotone",
        class: "text-success-500 mx-auto h-8 w-8"
      }, null, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "3xl",
        weight: "medium",
        lead: "none",
        class: "mb-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` All services online `);
          } else {
            return [
              createTextVNode(" All services online ")
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
            _push2(` As of March 14, 2023 at 11:08 PM GMT `);
          } else {
            return [
              createTextVNode(" As of March 14, 2023 at 11:08 PM GMT ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="px-8 py-5"><div class="flex gap-16">`);
      _push(ssrRenderComponent(_component_BaseText, {
        size: "sm",
        class: "text-muted-500 dark:text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Service`);
          } else {
            return [
              createTextVNode("Service")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseText, {
        size: "sm",
        class: "text-muted-500 dark:text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Uptime during the last 90 days`);
          } else {
            return [
              createTextVNode("Uptime during the last 90 days")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "px-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="border-muted-200 dark:border-muted-700 py-8 [&amp;:not(:last-child)]:border-b"${_scopeId}><div class="flex items-center justify-between gap-4"${_scopeId}><div class="mb-1 flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:check-circle-duotone",
              class: "text-success-500 h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, { size: "sm" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`tairo.cssninja.io`);
                } else {
                  return [
                    createTextVNode("tairo.cssninja.io")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "sm",
              class: "text-success-600 dark:text-success-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`99.989% uptime`);
                } else {
                  return [
                    createTextVNode("99.989% uptime")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="flex w-full items-center"${_scopeId}><!--[-->`);
            ssrRenderList(90, (index) => {
              _push2(`<div class="${ssrRenderClass([[
                index !== 35 && index !== 54 && "bg-success-500 hover:bg-success-300 transition-colors duration-300",
                index === 35 && "bg-orange-300 transition-colors duration-300 hover:bg-orange-500",
                index === 54 && "bg-red-500 transition-colors duration-300 hover:bg-red-300"
              ], "dark:border-muted-800 group relative h-8 flex-1 shrink-0 cursor-pointer rounded-[2px] border-x border-white"])}"${_scopeId}><div class="absolute -top-24 start-1/2 w-40 -translate-x-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseCard, {
                shape: "curved",
                elevated: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="border-muted-200 dark:border-muted-700 flex items-center gap-1 border-b p-3"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:check-circle-duotone",
                      class: "text-success-500 h-4 w-4"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseText, {
                      size: "sm",
                      class: "text-muted-600 dark:text-muted-100"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Operational`);
                        } else {
                          return [
                            createTextVNode("Operational")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="text-muted-400 p-2 text-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BaseText, { size: "xs" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`March 23, 2023`);
                        } else {
                          return [
                            createTextVNode("March 23, 2023")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "border-muted-200 dark:border-muted-700 flex items-center gap-1 border-b p-3" }, [
                        createVNode(_component_Icon, {
                          name: "ph:check-circle-duotone",
                          class: "text-success-500 h-4 w-4"
                        }),
                        createVNode(_component_BaseText, {
                          size: "sm",
                          class: "text-muted-600 dark:text-muted-100"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Operational")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "text-muted-400 p-2 text-center" }, [
                        createVNode(_component_BaseText, { size: "xs" }, {
                          default: withCtx(() => [
                            createTextVNode("March 23, 2023")
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            });
            _push2(`<!--]--></div><div class="text-muted-400 mt-1 flex items-center justify-between gap-4"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              weight: "medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`90 days ago`);
                } else {
                  return [
                    createTextVNode("90 days ago")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              weight: "medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Today`);
                } else {
                  return [
                    createTextVNode("Today")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div class="border-muted-200 dark:border-muted-700 py-8 [&amp;:not(:last-child)]:border-b"${_scopeId}><div class="flex items-center justify-between gap-4"${_scopeId}><div class="mb-1 flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:check-circle-duotone",
              class: "text-success-500 h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, { size: "sm" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`api.tairo.cssninja.io`);
                } else {
                  return [
                    createTextVNode("api.tairo.cssninja.io")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "sm",
              class: "text-success-600 dark:text-success-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`99.989% uptime`);
                } else {
                  return [
                    createTextVNode("99.989% uptime")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="flex w-full items-center"${_scopeId}><!--[-->`);
            ssrRenderList(90, (index) => {
              _push2(`<div class="${ssrRenderClass([[
                index !== 35 && index !== 54 && "bg-success-500 hover:bg-success-300 transition-colors duration-300",
                index === 35 && "bg-orange-300 transition-colors duration-300 hover:bg-orange-500",
                index === 54 && "bg-red-500 transition-colors duration-300 hover:bg-red-300"
              ], "dark:border-muted-800 relative h-8 flex-1 shrink-0 cursor-pointer rounded-[2px] border-x border-white"])}"${_scopeId}></div>`);
            });
            _push2(`<!--]--></div><div class="text-muted-400 mt-1 flex items-center justify-between gap-4"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              weight: "medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`90 days ago`);
                } else {
                  return [
                    createTextVNode("90 days ago")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              weight: "medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Today`);
                } else {
                  return [
                    createTextVNode("Today")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div class="border-muted-200 dark:border-muted-700 py-8 [&amp;:not(:last-child)]:border-b"${_scopeId}><div class="flex items-center justify-between gap-4"${_scopeId}><div class="mb-1 flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:check-circle-duotone",
              class: "text-success-500 h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, { size: "sm" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`hooks.tairo.cssninja.io`);
                } else {
                  return [
                    createTextVNode("hooks.tairo.cssninja.io")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "sm",
              class: "text-success-600 dark:text-success-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`99.989% uptime`);
                } else {
                  return [
                    createTextVNode("99.989% uptime")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="flex w-full items-center"${_scopeId}><!--[-->`);
            ssrRenderList(90, (index) => {
              _push2(`<div class="${ssrRenderClass([[
                index !== 35 && index !== 54 && "bg-success-500 hover:bg-success-300 transition-colors duration-300",
                index === 35 && "bg-orange-300 transition-colors duration-300 hover:bg-orange-500",
                index === 54 && "bg-red-500 transition-colors duration-300 hover:bg-red-300"
              ], "dark:border-muted-800 relative h-8 flex-1 shrink-0 cursor-pointer rounded-[2px] border-x border-white"])}"${_scopeId}></div>`);
            });
            _push2(`<!--]--></div><div class="text-muted-400 mt-1 flex items-center justify-between gap-4"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              weight: "medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`90 days ago`);
                } else {
                  return [
                    createTextVNode("90 days ago")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              weight: "medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Today`);
                } else {
                  return [
                    createTextVNode("Today")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "border-muted-200 dark:border-muted-700 py-8 [&:not(:last-child)]:border-b" }, [
                  createVNode("div", { class: "flex items-center justify-between gap-4" }, [
                    createVNode("div", { class: "mb-1 flex items-center gap-2" }, [
                      createVNode(_component_Icon, {
                        name: "ph:check-circle-duotone",
                        class: "text-success-500 h-4 w-4"
                      }),
                      createVNode(_component_BaseText, { size: "sm" }, {
                        default: withCtx(() => [
                          createTextVNode("tairo.cssninja.io")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_BaseText, {
                        size: "sm",
                        class: "text-success-600 dark:text-success-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("99.989% uptime")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode("div", { class: "flex w-full items-center" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(90, (index) => {
                      return createVNode("div", {
                        key: index,
                        class: ["dark:border-muted-800 group relative h-8 flex-1 shrink-0 cursor-pointer rounded-[2px] border-x border-white", [
                          index !== 35 && index !== 54 && "bg-success-500 hover:bg-success-300 transition-colors duration-300",
                          index === 35 && "bg-orange-300 transition-colors duration-300 hover:bg-orange-500",
                          index === 54 && "bg-red-500 transition-colors duration-300 hover:bg-red-300"
                        ]]
                      }, [
                        createVNode("div", { class: "absolute -top-24 start-1/2 w-40 -translate-x-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100" }, [
                          createVNode(_component_BaseCard, {
                            shape: "curved",
                            elevated: ""
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "border-muted-200 dark:border-muted-700 flex items-center gap-1 border-b p-3" }, [
                                createVNode(_component_Icon, {
                                  name: "ph:check-circle-duotone",
                                  class: "text-success-500 h-4 w-4"
                                }),
                                createVNode(_component_BaseText, {
                                  size: "sm",
                                  class: "text-muted-600 dark:text-muted-100"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Operational")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("div", { class: "text-muted-400 p-2 text-center" }, [
                                createVNode(_component_BaseText, { size: "xs" }, {
                                  default: withCtx(() => [
                                    createTextVNode("March 23, 2023")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          })
                        ])
                      ], 2);
                    }), 64))
                  ]),
                  createVNode("div", { class: "text-muted-400 mt-1 flex items-center justify-between gap-4" }, [
                    createVNode("div", null, [
                      createVNode(_component_BaseText, {
                        size: "xs",
                        weight: "medium"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("90 days ago")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_BaseText, {
                        size: "xs",
                        weight: "medium"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Today")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                createVNode("div", { class: "border-muted-200 dark:border-muted-700 py-8 [&:not(:last-child)]:border-b" }, [
                  createVNode("div", { class: "flex items-center justify-between gap-4" }, [
                    createVNode("div", { class: "mb-1 flex items-center gap-2" }, [
                      createVNode(_component_Icon, {
                        name: "ph:check-circle-duotone",
                        class: "text-success-500 h-4 w-4"
                      }),
                      createVNode(_component_BaseText, { size: "sm" }, {
                        default: withCtx(() => [
                          createTextVNode("api.tairo.cssninja.io")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_BaseText, {
                        size: "sm",
                        class: "text-success-600 dark:text-success-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("99.989% uptime")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode("div", { class: "flex w-full items-center" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(90, (index) => {
                      return createVNode("div", {
                        key: index,
                        class: ["dark:border-muted-800 relative h-8 flex-1 shrink-0 cursor-pointer rounded-[2px] border-x border-white", [
                          index !== 35 && index !== 54 && "bg-success-500 hover:bg-success-300 transition-colors duration-300",
                          index === 35 && "bg-orange-300 transition-colors duration-300 hover:bg-orange-500",
                          index === 54 && "bg-red-500 transition-colors duration-300 hover:bg-red-300"
                        ]]
                      }, null, 2);
                    }), 64))
                  ]),
                  createVNode("div", { class: "text-muted-400 mt-1 flex items-center justify-between gap-4" }, [
                    createVNode("div", null, [
                      createVNode(_component_BaseText, {
                        size: "xs",
                        weight: "medium"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("90 days ago")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_BaseText, {
                        size: "xs",
                        weight: "medium"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Today")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                createVNode("div", { class: "border-muted-200 dark:border-muted-700 py-8 [&:not(:last-child)]:border-b" }, [
                  createVNode("div", { class: "flex items-center justify-between gap-4" }, [
                    createVNode("div", { class: "mb-1 flex items-center gap-2" }, [
                      createVNode(_component_Icon, {
                        name: "ph:check-circle-duotone",
                        class: "text-success-500 h-4 w-4"
                      }),
                      createVNode(_component_BaseText, { size: "sm" }, {
                        default: withCtx(() => [
                          createTextVNode("hooks.tairo.cssninja.io")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_BaseText, {
                        size: "sm",
                        class: "text-success-600 dark:text-success-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("99.989% uptime")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode("div", { class: "flex w-full items-center" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(90, (index) => {
                      return createVNode("div", {
                        key: index,
                        class: ["dark:border-muted-800 relative h-8 flex-1 shrink-0 cursor-pointer rounded-[2px] border-x border-white", [
                          index !== 35 && index !== 54 && "bg-success-500 hover:bg-success-300 transition-colors duration-300",
                          index === 35 && "bg-orange-300 transition-colors duration-300 hover:bg-orange-500",
                          index === 54 && "bg-red-500 transition-colors duration-300 hover:bg-red-300"
                        ]]
                      }, null, 2);
                    }), 64))
                  ]),
                  createVNode("div", { class: "text-muted-400 mt-1 flex items-center justify-between gap-4" }, [
                    createVNode("div", null, [
                      createVNode(_component_BaseText, {
                        size: "xs",
                        weight: "medium"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("90 days ago")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_BaseText, {
                        size: "xs",
                        weight: "medium"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Today")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "mt-12"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-muted-200 dark:border-muted-700 flex items-center gap-3 border-b p-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "fa6-brands:twitter",
              class: "h-6 w-6 text-sky-500"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseHeading, {
              size: "sm",
              weight: "medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` @cssninjaStudio `);
                } else {
                  return [
                    createTextVNode(" @cssninjaStudio ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="ms-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`View on Twitter`);
                } else {
                  return [
                    createTextVNode("View on Twitter")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="space-y-8 px-6 py-8"${_scopeId}><div class="flex gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              src: "/img/logos/brands/hanzo.svg",
              size: "sm"
            }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "sm",
              weight: "medium",
              class: "text-muted-400 dark:text-muted-300 mb-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` March 14 at 5:39pm `);
                } else {
                  return [
                    createTextVNode(" March 14 at 5:39pm ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-500 dark:text-muted-400 max-w-md"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` We&#39;re experiencing higher than normal load on our batch infrastructure. Webhooks are about an hour delayed. API calls are not impacted `);
                } else {
                  return [
                    createTextVNode(" We're experiencing higher than normal load on our batch infrastructure. Webhooks are about an hour delayed. API calls are not impacted ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="flex gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              src: "/img/logos/brands/hanzo.svg",
              size: "sm"
            }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "sm",
              weight: "medium",
              class: "text-muted-400 dark:text-muted-300 mb-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Dec 11 at 8:48am `);
                } else {
                  return [
                    createTextVNode(" Dec 11 at 8:48am ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-500 dark:text-muted-400 max-w-md"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Sorry about that! Our systems are showing everything as caught up now. Let us know if you&#39;re still seeing problems! `);
                } else {
                  return [
                    createTextVNode(" Sorry about that! Our systems are showing everything as caught up now. Let us know if you're still seeing problems! ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "border-muted-200 dark:border-muted-700 flex items-center gap-3 border-b p-6" }, [
                createVNode(_component_Icon, {
                  name: "fa6-brands:twitter",
                  class: "h-6 w-6 text-sky-500"
                }),
                createVNode(_component_BaseHeading, {
                  size: "sm",
                  weight: "medium"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" @cssninjaStudio ")
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "ms-auto" }, [
                  createVNode(_component_NuxtLink, {
                    to: "#",
                    class: "text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("View on Twitter")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "space-y-8 px-6 py-8" }, [
                createVNode("div", { class: "flex gap-4" }, [
                  createVNode(_component_BaseAvatar, {
                    src: "/img/logos/brands/hanzo.svg",
                    size: "sm"
                  }),
                  createVNode("div", null, [
                    createVNode(_component_BaseText, {
                      size: "sm",
                      weight: "medium",
                      class: "text-muted-400 dark:text-muted-300 mb-1"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" March 14 at 5:39pm ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, {
                      size: "sm",
                      class: "text-muted-500 dark:text-muted-400 max-w-md"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" We're experiencing higher than normal load on our batch infrastructure. Webhooks are about an hour delayed. API calls are not impacted ")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "flex gap-4" }, [
                  createVNode(_component_BaseAvatar, {
                    src: "/img/logos/brands/hanzo.svg",
                    size: "sm"
                  }),
                  createVNode("div", null, [
                    createVNode(_component_BaseText, {
                      size: "sm",
                      weight: "medium",
                      class: "text-muted-400 dark:text-muted-300 mb-1"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Dec 11 at 8:48am ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, {
                      size: "sm",
                      class: "text-muted-500 dark:text-muted-400 max-w-md"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Sorry about that! Our systems are showing everything as caught up now. Let us know if you're still seeing problems! ")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 pb-24 pt-12"><div class="flex items-center gap-8">`);
      _push(ssrRenderComponent(_component_BaseThemeToggle, null, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "text-muted-400 hover:text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Legal`);
          } else {
            return [
              createTextVNode("Legal")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "text-muted-400 hover:text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About`);
          } else {
            return [
              createTextVNode("About")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "text-muted-400 hover:text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Jobs`);
          } else {
            return [
              createTextVNode("Jobs")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><span class="text-muted-400 font-sans text-sm">\xA9 2018-${ssrInterpolate(( new Date()).getFullYear())} @cssninjaStudio</span></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/utility-status.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=utility-status-12450fc7.mjs.map
