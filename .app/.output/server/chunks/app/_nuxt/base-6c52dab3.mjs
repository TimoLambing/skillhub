import { e as __nuxt_component_0$5, j as _sfc_main$C, f as __nuxt_component_2 } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseRadioHeadless-286f432f.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, unref, isRef, createVNode, useSSRContext } from 'vue';
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
  __name: "base",
  __ssrInlineRender: true,
  setup(__props) {
    const value = ref("value_1");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_BaseRadioHeadless = _sfc_main$1;
      const _component_BaseCard = _sfc_main$C;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex w-full items-end gap-6" }, _attrs))}><form class="mx-auto w-full"><fieldset class="w-full space-y-6"><div class="border-muted-200 dark:border-muted-700 flex items-center justify-between border-b py-4"><legend class="text-muted-800 dark:text-muted-100 font-sans text-xl font-medium"> Change Plan </legend>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "text-primary-500 font-sans text-sm font-medium underline-offset-4 hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Cancel your plan `);
          } else {
            return [
              createTextVNode(" Cancel your plan ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid gap-6 sm:grid-cols-4">`);
      _push(ssrRenderComponent(_component_BaseRadioHeadless, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        name: "radio_custom",
        value: "value_1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCard, {
              shape: "curved",
              class: "peer-checked:!border-success-500 peer-checked:!bg-success-500/10 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col"${_scopeId2}><h4 class="text-muted-500 dark:text-muted-200 mb-3 font-sans text-sm font-medium uppercase leading-tight"${_scopeId2}> Starter </h4><h3 class="text-muted-800 dark:text-muted-100 font-sans font-bold"${_scopeId2}><span class="text-4xl"${_scopeId2}>1</span><span class="text-2xl uppercase"${_scopeId2}>GB</span></h3><div class="font-sans"${_scopeId2}><span class="text-muted-800 dark:text-muted-100 text-xl font-bold"${_scopeId2}>$5</span><span class="text-muted-500 dark:text-muted-400 text-sm font-medium"${_scopeId2}>/month</span></div></div><div class="child absolute end-2 top-3 opacity-0"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:check-circle-duotone",
                    class: "text-success-500 h-7 w-7"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("h4", { class: "text-muted-500 dark:text-muted-200 mb-3 font-sans text-sm font-medium uppercase leading-tight" }, " Starter "),
                      createVNode("h3", { class: "text-muted-800 dark:text-muted-100 font-sans font-bold" }, [
                        createVNode("span", { class: "text-4xl" }, "1"),
                        createVNode("span", { class: "text-2xl uppercase" }, "GB")
                      ]),
                      createVNode("div", { class: "font-sans" }, [
                        createVNode("span", { class: "text-muted-800 dark:text-muted-100 text-xl font-bold" }, "$5"),
                        createVNode("span", { class: "text-muted-500 dark:text-muted-400 text-sm font-medium" }, "/month")
                      ])
                    ]),
                    createVNode("div", { class: "child absolute end-2 top-3 opacity-0" }, [
                      createVNode(_component_Icon, {
                        name: "ph:check-circle-duotone",
                        class: "text-success-500 h-7 w-7"
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseCard, {
                shape: "curved",
                class: "peer-checked:!border-success-500 peer-checked:!bg-success-500/10 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col" }, [
                    createVNode("h4", { class: "text-muted-500 dark:text-muted-200 mb-3 font-sans text-sm font-medium uppercase leading-tight" }, " Starter "),
                    createVNode("h3", { class: "text-muted-800 dark:text-muted-100 font-sans font-bold" }, [
                      createVNode("span", { class: "text-4xl" }, "1"),
                      createVNode("span", { class: "text-2xl uppercase" }, "GB")
                    ]),
                    createVNode("div", { class: "font-sans" }, [
                      createVNode("span", { class: "text-muted-800 dark:text-muted-100 text-xl font-bold" }, "$5"),
                      createVNode("span", { class: "text-muted-500 dark:text-muted-400 text-sm font-medium" }, "/month")
                    ])
                  ]),
                  createVNode("div", { class: "child absolute end-2 top-3 opacity-0" }, [
                    createVNode(_component_Icon, {
                      name: "ph:check-circle-duotone",
                      class: "text-success-500 h-7 w-7"
                    })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseRadioHeadless, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        name: "radio_custom",
        value: "value_2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCard, {
              shape: "curved",
              class: "peer-checked:!border-success-500 peer-checked:!bg-success-500/10 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col"${_scopeId2}><h4 class="text-muted-500 dark:text-muted-200 mb-3 font-sans text-sm font-medium uppercase leading-tight"${_scopeId2}> Freelancer </h4><h3 class="text-muted-800 dark:text-muted-100 font-sans font-bold"${_scopeId2}><span class="text-4xl"${_scopeId2}>5</span><span class="text-2xl uppercase"${_scopeId2}>GB</span></h3><div class="font-sans"${_scopeId2}><span class="text-muted-800 dark:text-muted-100 text-xl font-bold"${_scopeId2}>$10</span><span class="text-muted-500 dark:text-muted-400 text-sm font-medium"${_scopeId2}>/month</span></div></div><div class="child absolute end-2 top-3 opacity-0"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:check-circle-duotone",
                    class: "text-success-500 h-7 w-7"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("h4", { class: "text-muted-500 dark:text-muted-200 mb-3 font-sans text-sm font-medium uppercase leading-tight" }, " Freelancer "),
                      createVNode("h3", { class: "text-muted-800 dark:text-muted-100 font-sans font-bold" }, [
                        createVNode("span", { class: "text-4xl" }, "5"),
                        createVNode("span", { class: "text-2xl uppercase" }, "GB")
                      ]),
                      createVNode("div", { class: "font-sans" }, [
                        createVNode("span", { class: "text-muted-800 dark:text-muted-100 text-xl font-bold" }, "$10"),
                        createVNode("span", { class: "text-muted-500 dark:text-muted-400 text-sm font-medium" }, "/month")
                      ])
                    ]),
                    createVNode("div", { class: "child absolute end-2 top-3 opacity-0" }, [
                      createVNode(_component_Icon, {
                        name: "ph:check-circle-duotone",
                        class: "text-success-500 h-7 w-7"
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseCard, {
                shape: "curved",
                class: "peer-checked:!border-success-500 peer-checked:!bg-success-500/10 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col" }, [
                    createVNode("h4", { class: "text-muted-500 dark:text-muted-200 mb-3 font-sans text-sm font-medium uppercase leading-tight" }, " Freelancer "),
                    createVNode("h3", { class: "text-muted-800 dark:text-muted-100 font-sans font-bold" }, [
                      createVNode("span", { class: "text-4xl" }, "5"),
                      createVNode("span", { class: "text-2xl uppercase" }, "GB")
                    ]),
                    createVNode("div", { class: "font-sans" }, [
                      createVNode("span", { class: "text-muted-800 dark:text-muted-100 text-xl font-bold" }, "$10"),
                      createVNode("span", { class: "text-muted-500 dark:text-muted-400 text-sm font-medium" }, "/month")
                    ])
                  ]),
                  createVNode("div", { class: "child absolute end-2 top-3 opacity-0" }, [
                    createVNode(_component_Icon, {
                      name: "ph:check-circle-duotone",
                      class: "text-success-500 h-7 w-7"
                    })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseRadioHeadless, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        name: "radio_custom",
        value: "value_3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCard, {
              shape: "curved",
              class: "peer-checked:!border-success-500 peer-checked:!bg-success-500/10 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col"${_scopeId2}><h4 class="text-muted-500 dark:text-muted-200 mb-3 font-sans text-sm font-medium uppercase leading-tight"${_scopeId2}> Business </h4><h3 class="text-muted-800 dark:text-muted-100 font-sans font-bold"${_scopeId2}><span class="text-4xl"${_scopeId2}>10</span><span class="text-2xl uppercase"${_scopeId2}>GB</span></h3><div class="font-sans"${_scopeId2}><span class="text-muted-800 dark:text-muted-100 text-xl font-bold"${_scopeId2}>$15</span><span class="text-muted-500 dark:text-muted-400 text-sm font-medium"${_scopeId2}>/month</span></div></div><div class="child absolute end-2 top-3 opacity-0"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:check-circle-duotone",
                    class: "text-success-500 h-7 w-7"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("h4", { class: "text-muted-500 dark:text-muted-200 mb-3 font-sans text-sm font-medium uppercase leading-tight" }, " Business "),
                      createVNode("h3", { class: "text-muted-800 dark:text-muted-100 font-sans font-bold" }, [
                        createVNode("span", { class: "text-4xl" }, "10"),
                        createVNode("span", { class: "text-2xl uppercase" }, "GB")
                      ]),
                      createVNode("div", { class: "font-sans" }, [
                        createVNode("span", { class: "text-muted-800 dark:text-muted-100 text-xl font-bold" }, "$15"),
                        createVNode("span", { class: "text-muted-500 dark:text-muted-400 text-sm font-medium" }, "/month")
                      ])
                    ]),
                    createVNode("div", { class: "child absolute end-2 top-3 opacity-0" }, [
                      createVNode(_component_Icon, {
                        name: "ph:check-circle-duotone",
                        class: "text-success-500 h-7 w-7"
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseCard, {
                shape: "curved",
                class: "peer-checked:!border-success-500 peer-checked:!bg-success-500/10 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col" }, [
                    createVNode("h4", { class: "text-muted-500 dark:text-muted-200 mb-3 font-sans text-sm font-medium uppercase leading-tight" }, " Business "),
                    createVNode("h3", { class: "text-muted-800 dark:text-muted-100 font-sans font-bold" }, [
                      createVNode("span", { class: "text-4xl" }, "10"),
                      createVNode("span", { class: "text-2xl uppercase" }, "GB")
                    ]),
                    createVNode("div", { class: "font-sans" }, [
                      createVNode("span", { class: "text-muted-800 dark:text-muted-100 text-xl font-bold" }, "$15"),
                      createVNode("span", { class: "text-muted-500 dark:text-muted-400 text-sm font-medium" }, "/month")
                    ])
                  ]),
                  createVNode("div", { class: "child absolute end-2 top-3 opacity-0" }, [
                    createVNode(_component_Icon, {
                      name: "ph:check-circle-duotone",
                      class: "text-success-500 h-7 w-7"
                    })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseRadioHeadless, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        name: "radio_custom",
        value: "value_4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCard, {
              shape: "curved",
              class: "peer-checked:!border-success-500 peer-checked:!bg-success-500/10 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col"${_scopeId2}><h4 class="text-muted-500 dark:text-muted-200 mb-3 font-sans text-sm font-medium uppercase leading-tight"${_scopeId2}> Enterprise </h4><h3 class="text-muted-800 dark:text-muted-100 font-sans font-bold"${_scopeId2}><span class="text-4xl"${_scopeId2}>20</span><span class="text-2xl uppercase"${_scopeId2}>GB</span></h3><div class="font-sans"${_scopeId2}><span class="text-muted-800 dark:text-muted-100 text-xl font-bold"${_scopeId2}>$20</span><span class="text-muted-500 dark:text-muted-400 text-sm font-medium"${_scopeId2}>/month</span></div></div><div class="child absolute end-2 top-3 opacity-0"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:check-circle-duotone",
                    class: "text-success-500 h-7 w-7"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("h4", { class: "text-muted-500 dark:text-muted-200 mb-3 font-sans text-sm font-medium uppercase leading-tight" }, " Enterprise "),
                      createVNode("h3", { class: "text-muted-800 dark:text-muted-100 font-sans font-bold" }, [
                        createVNode("span", { class: "text-4xl" }, "20"),
                        createVNode("span", { class: "text-2xl uppercase" }, "GB")
                      ]),
                      createVNode("div", { class: "font-sans" }, [
                        createVNode("span", { class: "text-muted-800 dark:text-muted-100 text-xl font-bold" }, "$20"),
                        createVNode("span", { class: "text-muted-500 dark:text-muted-400 text-sm font-medium" }, "/month")
                      ])
                    ]),
                    createVNode("div", { class: "child absolute end-2 top-3 opacity-0" }, [
                      createVNode(_component_Icon, {
                        name: "ph:check-circle-duotone",
                        class: "text-success-500 h-7 w-7"
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseCard, {
                shape: "curved",
                class: "peer-checked:!border-success-500 peer-checked:!bg-success-500/10 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col" }, [
                    createVNode("h4", { class: "text-muted-500 dark:text-muted-200 mb-3 font-sans text-sm font-medium uppercase leading-tight" }, " Enterprise "),
                    createVNode("h3", { class: "text-muted-800 dark:text-muted-100 font-sans font-bold" }, [
                      createVNode("span", { class: "text-4xl" }, "20"),
                      createVNode("span", { class: "text-2xl uppercase" }, "GB")
                    ]),
                    createVNode("div", { class: "font-sans" }, [
                      createVNode("span", { class: "text-muted-800 dark:text-muted-100 text-xl font-bold" }, "$20"),
                      createVNode("span", { class: "text-muted-500 dark:text-muted-400 text-sm font-medium" }, "/month")
                    ])
                  ]),
                  createVNode("div", { class: "child absolute end-2 top-3 opacity-0" }, [
                    createVNode(_component_Icon, {
                      name: "ph:check-circle-duotone",
                      class: "text-success-500 h-7 w-7"
                    })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></fieldset></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/radio-custom/base.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=base-6c52dab3.mjs.map
