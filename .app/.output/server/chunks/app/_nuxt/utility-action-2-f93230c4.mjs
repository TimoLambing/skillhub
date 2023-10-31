import { j as _sfc_main$C, s as _sfc_main$E, _ as _sfc_main$p, b as _sfc_main$o, i as _sfc_main$D, d as _sfc_main$x, f as __nuxt_component_2 } from '../server.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, createVNode, unref, useSSRContext } from 'vue';
import { g as getRandomColor } from './colors-16c42002.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "utility-action-2",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseText = _sfc_main$D;
      const _component_BaseButton = _sfc_main$x;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center py-8" }, _attrs))}><div class="mx-auto w-full max-w-4xl">`);
      _push(ssrRenderComponent(_component_BaseCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="divide-muted-200 dark:divide-muted-700 grid divide-y sm:grid-cols-2 sm:divide-x sm:divide-y-0"${_scopeId}><div class="flex flex-col p-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              class: "mx-auto",
              size: "xl",
              src: "/img/avatars/10.svg",
              "badge-src": "/img/stacks/reactjs.svg"
            }, null, _parent2, _scopeId));
            _push2(`<div class="mx-auto mb-4 max-w-xs text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h2",
              size: "md",
              weight: "medium",
              class: "mt-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Kendra W. has invited you to the <span class="text-primary-500"${_scopeId2}>Banking Solution Website</span> project. `);
                } else {
                  return [
                    createTextVNode(" Kendra W. has invited you to the "),
                    createVNode("span", { class: "text-primary-500" }, "Banking Solution Website"),
                    createTextVNode(" project. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mx-auto max-w-sm"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseCard, {
              elevated: "",
              class: "p-6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseHeading, {
                    as: "h3",
                    size: "xs",
                    weight: "medium",
                    class: "text-muted-400 mb-2 !text-[0.65rem] uppercase"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Message from Kendra `);
                      } else {
                        return [
                          createTextVNode(" Message from Kendra ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseParagraph, {
                    size: "xs",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Hey Maya, It would be really cool if you could give us a hand on this project. There are a lot of tasks popping out every day and I feel the team is getting a bit overwhelmed. We&#39;d love to have you on board. `);
                      } else {
                        return [
                          createTextVNode(" Hey Maya, It would be really cool if you could give us a hand on this project. There are a lot of tasks popping out every day and I feel the team is getting a bit overwhelmed. We'd love to have you on board. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseHeading, {
                      as: "h3",
                      size: "xs",
                      weight: "medium",
                      class: "text-muted-400 mb-2 !text-[0.65rem] uppercase"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Message from Kendra ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, {
                      size: "xs",
                      class: "text-muted-500 dark:text-muted-400"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Hey Maya, It would be really cool if you could give us a hand on this project. There are a lot of tasks popping out every day and I feel the team is getting a bit overwhelmed. We'd love to have you on board. ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-6 flex items-center justify-center gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              src: "/img/avatars/25.svg",
              size: "xs",
              "data-nui-tooltip": "Melany L."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              size: "xs",
              text: "OD",
              "data-nui-tooltip": "Oliver D.",
              class: ("getRandomColor" in _ctx ? _ctx.getRandomColor : unref(getRandomColor))()
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              src: "/img/avatars/16.svg",
              size: "xs",
              "data-nui-tooltip": "Hermann M."
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-2 text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` And 5 others are members of this project `);
                } else {
                  return [
                    createTextVNode(" And 5 others are members of this project ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mt-6 flex items-center justify-between gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, { class: "w-full" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Decline`);
                } else {
                  return [
                    createTextVNode("Decline")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "primary",
              class: "w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Accept`);
                } else {
                  return [
                    createTextVNode("Accept")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div${_scopeId}><div class="flex flex-col p-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              tag: "h2",
              size: "md",
              weight: "medium",
              class: "mt-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Additional Instructions `);
                } else {
                  return [
                    createTextVNode(" Additional Instructions ")
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
                  _push3(` Please read the following instructions carefully before accepting the invitation. `);
                } else {
                  return [
                    createTextVNode(" Please read the following instructions carefully before accepting the invitation. ")
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
                  _push3(` Project Summary `);
                } else {
                  return [
                    createTextVNode(" Project Summary ")
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
                  _push3(` Please read the project summary. You&#39;ll find it in your inbox `);
                } else {
                  return [
                    createTextVNode(" Please read the project summary. You'll find it in your inbox ")
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
                  _push3(` UI Review `);
                } else {
                  return [
                    createTextVNode(" UI Review ")
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
                  _push3(` Please review the latest wireframes the team has provided `);
                } else {
                  return [
                    createTextVNode(" Please review the latest wireframes the team has provided ")
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
                  _push3(` Schedule `);
                } else {
                  return [
                    createTextVNode(" Schedule ")
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
                  _push3(` Please schedule a meeting with the team so they can ramp you up. `);
                } else {
                  return [
                    createTextVNode(" Please schedule a meeting with the team so they can ramp you up. ")
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
                  createVNode(_component_BaseAvatar, {
                    class: "mx-auto",
                    size: "xl",
                    src: "/img/avatars/10.svg",
                    "badge-src": "/img/stacks/reactjs.svg"
                  }),
                  createVNode("div", { class: "mx-auto mb-4 max-w-xs text-center" }, [
                    createVNode(_component_BaseHeading, {
                      as: "h2",
                      size: "md",
                      weight: "medium",
                      class: "mt-4"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Kendra W. has invited you to the "),
                        createVNode("span", { class: "text-primary-500" }, "Banking Solution Website"),
                        createTextVNode(" project. ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "mx-auto max-w-sm" }, [
                    createVNode(_component_BaseCard, {
                      elevated: "",
                      class: "p-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BaseHeading, {
                          as: "h3",
                          size: "xs",
                          weight: "medium",
                          class: "text-muted-400 mb-2 !text-[0.65rem] uppercase"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Message from Kendra ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseParagraph, {
                          size: "xs",
                          class: "text-muted-500 dark:text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Hey Maya, It would be really cool if you could give us a hand on this project. There are a lot of tasks popping out every day and I feel the team is getting a bit overwhelmed. We'd love to have you on board. ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "mt-6 flex items-center justify-center gap-3" }, [
                      createVNode(_component_BaseAvatar, {
                        src: "/img/avatars/25.svg",
                        size: "xs",
                        "data-nui-tooltip": "Melany L."
                      }),
                      createVNode(_component_BaseAvatar, {
                        size: "xs",
                        text: "OD",
                        "data-nui-tooltip": "Oliver D.",
                        class: ("getRandomColor" in _ctx ? _ctx.getRandomColor : unref(getRandomColor))()
                      }, null, 8, ["class"]),
                      createVNode(_component_BaseAvatar, {
                        src: "/img/avatars/16.svg",
                        size: "xs",
                        "data-nui-tooltip": "Hermann M."
                      })
                    ]),
                    createVNode("div", { class: "mt-2 text-center" }, [
                      createVNode(_component_BaseText, {
                        size: "xs",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" And 5 others are members of this project ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "mt-6 flex items-center justify-between gap-2" }, [
                      createVNode(_component_BaseButton, { class: "w-full" }, {
                        default: withCtx(() => [
                          createTextVNode("Decline")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseButton, {
                        color: "primary",
                        class: "w-full"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Accept")
                        ]),
                        _: 1
                      })
                    ])
                  ])
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
                        createTextVNode(" Additional Instructions ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseText, {
                      size: "xs",
                      class: "text-muted-500 dark:text-muted-400 max-w-xs"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Please read the following instructions carefully before accepting the invitation. ")
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
                                createTextVNode(" Project Summary ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_BaseText, {
                              size: "xs",
                              class: "text-muted-500 dark:text-muted-400 max-w-[210px]"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Please read the project summary. You'll find it in your inbox ")
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
                                createTextVNode(" UI Review ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_BaseText, {
                              size: "xs",
                              class: "text-muted-500 dark:text-muted-400 max-w-[210px]"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Please review the latest wireframes the team has provided ")
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
                                createTextVNode(" Schedule ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_BaseText, {
                              size: "xs",
                              class: "text-muted-500 dark:text-muted-400 max-w-[210px]"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Please schedule a meeting with the team so they can ramp you up. ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/utility-action-2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=utility-action-2-f93230c4.mjs.map
