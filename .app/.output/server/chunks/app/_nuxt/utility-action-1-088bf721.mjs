import { j as _sfc_main$C, s as _sfc_main$E, _ as _sfc_main$p, b as _sfc_main$o, i as _sfc_main$D, d as _sfc_main$x } from '../server.mjs';
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
  __name: "utility-action-1",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseText = _sfc_main$D;
      const _component_BaseButton = _sfc_main$x;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center py-8" }, _attrs))}><div class="mx-auto w-full max-w-md">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col py-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              class: "mx-auto",
              size: "xl",
              src: "/img/avatars/10.svg",
              "badge-src": "/img/stacks/reactjs.svg"
            }, null, _parent2, _scopeId));
            _push2(`<div class="mx-auto mb-4 max-w-xs text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              tag: "h2",
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
                    tag: "h3",
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
                      tag: "h3",
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
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col py-2" }, [
                createVNode(_component_BaseAvatar, {
                  class: "mx-auto",
                  size: "xl",
                  src: "/img/avatars/10.svg",
                  "badge-src": "/img/stacks/reactjs.svg"
                }),
                createVNode("div", { class: "mx-auto mb-4 max-w-xs text-center" }, [
                  createVNode(_component_BaseHeading, {
                    tag: "h2",
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
                        tag: "h3",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/utility-action-1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=utility-action-1-088bf721.mjs.map
