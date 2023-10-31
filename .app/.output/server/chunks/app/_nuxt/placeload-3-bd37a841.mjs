import { _ as _sfc_main$1 } from './TairoContentWrapper-00ef8dfe.mjs';
import { g as _sfc_main$z, d as _sfc_main$x, f as __nuxt_component_2, j as _sfc_main$C, r as __nuxt_component_0$2 } from '../server.mjs';
import { defineComponent, ref, withCtx, unref, isRef, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
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
  __name: "placeload-3",
  __ssrInlineRender: true,
  setup(__props) {
    const input = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoContentWrapper = _sfc_main$1;
      const _component_BaseInput = _sfc_main$z;
      const _component_BaseButton = _sfc_main$x;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseCard = _sfc_main$C;
      const _component_BasePlaceload = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_TairoContentWrapper, null, {
        left: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseInput, {
              modelValue: unref(input),
              "onUpdate:modelValue": ($event) => isRef(input) ? input.value = $event : null,
              icon: "lucide:search",
              placeholder: "Filter users...",
              classes: {
                wrapper: "w-full sm:w-auto"
              },
              disabled: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseInput, {
                modelValue: unref(input),
                "onUpdate:modelValue": ($event) => isRef(input) ? input.value = $event : null,
                icon: "lucide:search",
                placeholder: "Filter users...",
                classes: {
                  wrapper: "w-full sm:w-auto"
                },
                disabled: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        right: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseButton, {
              class: "w-full sm:w-32",
              disabled: ""
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
              disabled: ""
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
                disabled: ""
              }, {
                default: withCtx(() => [
                  createTextVNode("Manage")
                ]),
                _: 1
              }),
              createVNode(_component_BaseButton, {
                color: "primary",
                class: "w-full sm:w-32",
                disabled: ""
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
            _push2(`<div${_scopeId}><div class="ltablet:grid-cols-3 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"${_scopeId}><!--[-->`);
            ssrRenderList(12, (index) => {
              _push2(ssrRenderComponent(_component_BaseCard, {
                key: index,
                class: "flex flex-col p-6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_BasePlaceload, { class: "mx-auto h-20 w-20 shrink-0 rounded-full" }, null, _parent3, _scopeId2));
                    _push3(`<div class="mb-6 mt-4 space-y-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BasePlaceload, { class: "mx-auto h-3 w-40 rounded-lg" }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BasePlaceload, { class: "mx-auto h-3 w-32 rounded-lg" }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="mb-6 flex items-center justify-center gap-3"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BasePlaceload, { class: "h-8 w-8 shrink-0 rounded-full" }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BasePlaceload, { class: "h-8 w-8 shrink-0 rounded-full" }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BasePlaceload, { class: "h-8 w-8 shrink-0 rounded-full" }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="flex items-center justify-center gap-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BaseButton, {
                      loading: "",
                      class: "w-full"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`View`);
                        } else {
                          return [
                            createTextVNode("View")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseButton, {
                      loading: "",
                      class: "w-full"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Edit`);
                        } else {
                          return [
                            createTextVNode("Edit")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode(_component_BasePlaceload, { class: "mx-auto h-20 w-20 shrink-0 rounded-full" }),
                      createVNode("div", { class: "mb-6 mt-4 space-y-2" }, [
                        createVNode(_component_BasePlaceload, { class: "mx-auto h-3 w-40 rounded-lg" }),
                        createVNode(_component_BasePlaceload, { class: "mx-auto h-3 w-32 rounded-lg" })
                      ]),
                      createVNode("div", { class: "mb-6 flex items-center justify-center gap-3" }, [
                        createVNode(_component_BasePlaceload, { class: "h-8 w-8 shrink-0 rounded-full" }),
                        createVNode(_component_BasePlaceload, { class: "h-8 w-8 shrink-0 rounded-full" }),
                        createVNode(_component_BasePlaceload, { class: "h-8 w-8 shrink-0 rounded-full" })
                      ]),
                      createVNode("div", { class: "flex items-center justify-center gap-2" }, [
                        createVNode(_component_BaseButton, {
                          loading: "",
                          class: "w-full"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("View")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseButton, {
                          loading: "",
                          class: "w-full"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Edit")
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "ltablet:grid-cols-3 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(12, (index) => {
                    return createVNode(_component_BaseCard, {
                      key: index,
                      class: "flex flex-col p-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BasePlaceload, { class: "mx-auto h-20 w-20 shrink-0 rounded-full" }),
                        createVNode("div", { class: "mb-6 mt-4 space-y-2" }, [
                          createVNode(_component_BasePlaceload, { class: "mx-auto h-3 w-40 rounded-lg" }),
                          createVNode(_component_BasePlaceload, { class: "mx-auto h-3 w-32 rounded-lg" })
                        ]),
                        createVNode("div", { class: "mb-6 flex items-center justify-center gap-3" }, [
                          createVNode(_component_BasePlaceload, { class: "h-8 w-8 shrink-0 rounded-full" }),
                          createVNode(_component_BasePlaceload, { class: "h-8 w-8 shrink-0 rounded-full" }),
                          createVNode(_component_BasePlaceload, { class: "h-8 w-8 shrink-0 rounded-full" })
                        ]),
                        createVNode("div", { class: "flex items-center justify-center gap-2" }, [
                          createVNode(_component_BaseButton, {
                            loading: "",
                            class: "w-full"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("View")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_BaseButton, {
                            loading: "",
                            class: "w-full"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Edit")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 2
                    }, 1024);
                  }), 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/placeload-3.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=placeload-3-bd37a841.mjs.map