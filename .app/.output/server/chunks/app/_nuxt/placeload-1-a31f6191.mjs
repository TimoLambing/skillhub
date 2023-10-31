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
  __name: "placeload-1",
  __ssrInlineRender: true,
  setup(__props) {
    const fake = ref("");
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
              modelValue: unref(fake),
              "onUpdate:modelValue": ($event) => isRef(fake) ? fake.value = $event : null,
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
                modelValue: unref(fake),
                "onUpdate:modelValue": ($event) => isRef(fake) ? fake.value = $event : null,
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
            _push2(`<div${_scopeId}><div class="space-y-4"${_scopeId}><!--[-->`);
            ssrRenderList(10, (index) => {
              _push2(ssrRenderComponent(_component_BaseCard, {
                key: index,
                shape: "curved",
                class: "flex flex-col p-5 sm:flex-row sm:items-center"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:justify-start sm:text-left"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BasePlaceload, { class: "h-16 w-16 shrink-0 rounded-full" }, null, _parent3, _scopeId2));
                    _push3(`<div class="space-y-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BasePlaceload, { class: "mx-auto h-3 w-[100px] rounded-lg sm:mx-0" }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BasePlaceload, { class: "mx-auto h-3 w-[75px] rounded-lg sm:mx-0" }, null, _parent3, _scopeId2));
                    _push3(`</div></div><div class="flex flex-col gap-4 pt-4 sm:ms-auto sm:flex-row sm:items-center sm:justify-end sm:pt-0"${_scopeId2}><div class="flex w-full items-center justify-center sm:w-[160px] sm:justify-end"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BasePlaceload, { class: "h-6 w-24 rounded-full" }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="ptablet:hidden divide-muted-200 dark:divide-muted-700 flex items-center justify-center divide-x"${_scopeId2}><div class="flex flex-col gap-1 px-4 text-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BasePlaceload, { class: "h-3 w-16 rounded-lg" }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="flex flex-col gap-1 px-4 text-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BasePlaceload, { class: "h-3 w-16 rounded-lg" }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="flex flex-col gap-1 px-4 text-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BasePlaceload, { class: "h-3 w-16 rounded-lg" }, null, _parent3, _scopeId2));
                    _push3(`</div></div><div class="ptablet:hidden flex w-full items-center justify-center gap-1 py-3 sm:w-[160px] sm:justify-end sm:py-0"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BasePlaceload, { class: "h-8 w-8 shrink-0 rounded-full" }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BasePlaceload, { class: "h-8 w-8 shrink-0 rounded-full" }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BasePlaceload, { class: "hidden h-3 w-12 rounded-full sm:block" }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="sm:ms-6"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BasePlaceload, { class: "mx-auto h-8 w-40 rounded-lg sm:mx-0 sm:w-20" }, null, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:justify-start sm:text-left" }, [
                        createVNode(_component_BasePlaceload, { class: "h-16 w-16 shrink-0 rounded-full" }),
                        createVNode("div", { class: "space-y-2" }, [
                          createVNode(_component_BasePlaceload, { class: "mx-auto h-3 w-[100px] rounded-lg sm:mx-0" }),
                          createVNode(_component_BasePlaceload, { class: "mx-auto h-3 w-[75px] rounded-lg sm:mx-0" })
                        ])
                      ]),
                      createVNode("div", { class: "flex flex-col gap-4 pt-4 sm:ms-auto sm:flex-row sm:items-center sm:justify-end sm:pt-0" }, [
                        createVNode("div", { class: "flex w-full items-center justify-center sm:w-[160px] sm:justify-end" }, [
                          createVNode(_component_BasePlaceload, { class: "h-6 w-24 rounded-full" })
                        ]),
                        createVNode("div", { class: "ptablet:hidden divide-muted-200 dark:divide-muted-700 flex items-center justify-center divide-x" }, [
                          createVNode("div", { class: "flex flex-col gap-1 px-4 text-center" }, [
                            createVNode(_component_BasePlaceload, { class: "h-3 w-16 rounded-lg" })
                          ]),
                          createVNode("div", { class: "flex flex-col gap-1 px-4 text-center" }, [
                            createVNode(_component_BasePlaceload, { class: "h-3 w-16 rounded-lg" })
                          ]),
                          createVNode("div", { class: "flex flex-col gap-1 px-4 text-center" }, [
                            createVNode(_component_BasePlaceload, { class: "h-3 w-16 rounded-lg" })
                          ])
                        ]),
                        createVNode("div", { class: "ptablet:hidden flex w-full items-center justify-center gap-1 py-3 sm:w-[160px] sm:justify-end sm:py-0" }, [
                          createVNode(_component_BasePlaceload, { class: "h-8 w-8 shrink-0 rounded-full" }),
                          createVNode(_component_BasePlaceload, { class: "h-8 w-8 shrink-0 rounded-full" }),
                          createVNode(_component_BasePlaceload, { class: "hidden h-3 w-12 rounded-full sm:block" })
                        ]),
                        createVNode("div", { class: "sm:ms-6" }, [
                          createVNode(_component_BasePlaceload, { class: "mx-auto h-8 w-40 rounded-lg sm:mx-0 sm:w-20" })
                        ])
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
                createVNode("div", { class: "space-y-4" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(10, (index) => {
                    return createVNode(_component_BaseCard, {
                      key: index,
                      shape: "curved",
                      class: "flex flex-col p-5 sm:flex-row sm:items-center"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:justify-start sm:text-left" }, [
                          createVNode(_component_BasePlaceload, { class: "h-16 w-16 shrink-0 rounded-full" }),
                          createVNode("div", { class: "space-y-2" }, [
                            createVNode(_component_BasePlaceload, { class: "mx-auto h-3 w-[100px] rounded-lg sm:mx-0" }),
                            createVNode(_component_BasePlaceload, { class: "mx-auto h-3 w-[75px] rounded-lg sm:mx-0" })
                          ])
                        ]),
                        createVNode("div", { class: "flex flex-col gap-4 pt-4 sm:ms-auto sm:flex-row sm:items-center sm:justify-end sm:pt-0" }, [
                          createVNode("div", { class: "flex w-full items-center justify-center sm:w-[160px] sm:justify-end" }, [
                            createVNode(_component_BasePlaceload, { class: "h-6 w-24 rounded-full" })
                          ]),
                          createVNode("div", { class: "ptablet:hidden divide-muted-200 dark:divide-muted-700 flex items-center justify-center divide-x" }, [
                            createVNode("div", { class: "flex flex-col gap-1 px-4 text-center" }, [
                              createVNode(_component_BasePlaceload, { class: "h-3 w-16 rounded-lg" })
                            ]),
                            createVNode("div", { class: "flex flex-col gap-1 px-4 text-center" }, [
                              createVNode(_component_BasePlaceload, { class: "h-3 w-16 rounded-lg" })
                            ]),
                            createVNode("div", { class: "flex flex-col gap-1 px-4 text-center" }, [
                              createVNode(_component_BasePlaceload, { class: "h-3 w-16 rounded-lg" })
                            ])
                          ]),
                          createVNode("div", { class: "ptablet:hidden flex w-full items-center justify-center gap-1 py-3 sm:w-[160px] sm:justify-end sm:py-0" }, [
                            createVNode(_component_BasePlaceload, { class: "h-8 w-8 shrink-0 rounded-full" }),
                            createVNode(_component_BasePlaceload, { class: "h-8 w-8 shrink-0 rounded-full" }),
                            createVNode(_component_BasePlaceload, { class: "hidden h-3 w-12 rounded-full sm:block" })
                          ]),
                          createVNode("div", { class: "sm:ms-6" }, [
                            createVNode(_component_BasePlaceload, { class: "mx-auto h-8 w-40 rounded-lg sm:mx-0 sm:w-20" })
                          ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/placeload-1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=placeload-1-a31f6191.mjs.map
