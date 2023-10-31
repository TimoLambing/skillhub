import { _ as _sfc_main$1 } from './BaseCheckboxHeadless-bbfe0dde.mjs';
import { j as _sfc_main$C, s as _sfc_main$E, _ as _sfc_main$p, i as _sfc_main$D } from '../server.mjs';
import { defineComponent, ref, mergeProps, unref, isRef, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
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
    const value = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCheckboxHeadless = _sfc_main$1;
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseText = _sfc_main$D;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><form class="mx-auto w-full"><fieldset class="w-full space-y-6"><div class="border-muted-200 dark:border-muted-700 flex items-center justify-between border-b py-4"><legend class="text-muted-800 dark:text-muted-100 font-sans text-xl font-medium"> Select people </legend><button type="reset" class="text-primary-500 font-sans text-sm font-medium underline-offset-4 hover:underline"> Cancel </button></div><div class="grid gap-6 sm:grid-cols-3">`);
      _push(ssrRenderComponent(_component_BaseCheckboxHeadless, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        value: "team_member_1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCard, {
              shape: "rounded",
              class: "peer-checked:!border-primary-500 peer-checked:[&_.child]:!text-primary-500 border-2 p-4 opacity-50 peer-checked:opacity-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex w-full items-center gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseAvatar, { src: "/img/avatars/10.svg" }, null, _parent3, _scopeId2));
                  _push3(`<div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "medium",
                    lead: "none"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Kendra Wilson `);
                      } else {
                        return [
                          createTextVNode(" Kendra Wilson ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseText, {
                    size: "xs",
                    class: "text-muted-400"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Software Engineer`);
                      } else {
                        return [
                          createTextVNode("Software Engineer")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="child text-muted-300 ms-auto"${_scopeId2}><div class="h-3 w-3 rounded-full bg-current"${_scopeId2}></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex w-full items-center gap-2" }, [
                      createVNode(_component_BaseAvatar, { src: "/img/avatars/10.svg" }),
                      createVNode("div", null, [
                        createVNode(_component_BaseHeading, {
                          as: "h4",
                          size: "sm",
                          weight: "medium",
                          lead: "none"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Kendra Wilson ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseText, {
                          size: "xs",
                          class: "text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Software Engineer")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "child text-muted-300 ms-auto" }, [
                        createVNode("div", { class: "h-3 w-3 rounded-full bg-current" })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseCard, {
                shape: "rounded",
                class: "peer-checked:!border-primary-500 peer-checked:[&_.child]:!text-primary-500 border-2 p-4 opacity-50 peer-checked:opacity-100"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex w-full items-center gap-2" }, [
                    createVNode(_component_BaseAvatar, { src: "/img/avatars/10.svg" }),
                    createVNode("div", null, [
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "sm",
                        weight: "medium",
                        lead: "none"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Kendra Wilson ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseText, {
                        size: "xs",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Software Engineer")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "child text-muted-300 ms-auto" }, [
                      createVNode("div", { class: "h-3 w-3 rounded-full bg-current" })
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
      _push(ssrRenderComponent(_component_BaseCheckboxHeadless, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        value: "team_member_2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCard, {
              shape: "rounded",
              class: "peer-checked:!border-primary-500 peer-checked:[&_.child]:!text-primary-500 border-2 p-4 opacity-50 peer-checked:opacity-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex w-full items-center gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseAvatar, { src: "/img/avatars/16.svg" }, null, _parent3, _scopeId2));
                  _push3(`<div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "medium",
                    lead: "none"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Hermann Mayer `);
                      } else {
                        return [
                          createTextVNode(" Hermann Mayer ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseText, {
                    size: "xs",
                    class: "text-muted-400"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Sales Manager`);
                      } else {
                        return [
                          createTextVNode("Sales Manager")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="child text-muted-300 ms-auto"${_scopeId2}><div class="h-3 w-3 rounded-full bg-current"${_scopeId2}></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex w-full items-center gap-2" }, [
                      createVNode(_component_BaseAvatar, { src: "/img/avatars/16.svg" }),
                      createVNode("div", null, [
                        createVNode(_component_BaseHeading, {
                          as: "h4",
                          size: "sm",
                          weight: "medium",
                          lead: "none"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Hermann Mayer ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseText, {
                          size: "xs",
                          class: "text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Sales Manager")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "child text-muted-300 ms-auto" }, [
                        createVNode("div", { class: "h-3 w-3 rounded-full bg-current" })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseCard, {
                shape: "rounded",
                class: "peer-checked:!border-primary-500 peer-checked:[&_.child]:!text-primary-500 border-2 p-4 opacity-50 peer-checked:opacity-100"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex w-full items-center gap-2" }, [
                    createVNode(_component_BaseAvatar, { src: "/img/avatars/16.svg" }),
                    createVNode("div", null, [
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "sm",
                        weight: "medium",
                        lead: "none"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Hermann Mayer ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseText, {
                        size: "xs",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Sales Manager")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "child text-muted-300 ms-auto" }, [
                      createVNode("div", { class: "h-3 w-3 rounded-full bg-current" })
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
      _push(ssrRenderComponent(_component_BaseCheckboxHeadless, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        value: "team_member_3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCard, {
              shape: "rounded",
              class: "peer-checked:!border-primary-500 peer-checked:[&_.child]:!text-primary-500 border-2 p-4 opacity-50 peer-checked:opacity-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex w-full items-center gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseAvatar, { src: "/img/avatars/25.svg" }, null, _parent3, _scopeId2));
                  _push3(`<div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "medium",
                    lead: "none"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Melany Lawright `);
                      } else {
                        return [
                          createTextVNode(" Melany Lawright ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseText, {
                    size: "xs",
                    class: "text-muted-400"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`HR Manager`);
                      } else {
                        return [
                          createTextVNode("HR Manager")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="child text-muted-300 ms-auto"${_scopeId2}><div class="h-3 w-3 rounded-full bg-current"${_scopeId2}></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex w-full items-center gap-2" }, [
                      createVNode(_component_BaseAvatar, { src: "/img/avatars/25.svg" }),
                      createVNode("div", null, [
                        createVNode(_component_BaseHeading, {
                          as: "h4",
                          size: "sm",
                          weight: "medium",
                          lead: "none"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Melany Lawright ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseText, {
                          size: "xs",
                          class: "text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("HR Manager")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "child text-muted-300 ms-auto" }, [
                        createVNode("div", { class: "h-3 w-3 rounded-full bg-current" })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseCard, {
                shape: "rounded",
                class: "peer-checked:!border-primary-500 peer-checked:[&_.child]:!text-primary-500 border-2 p-4 opacity-50 peer-checked:opacity-100"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex w-full items-center gap-2" }, [
                    createVNode(_component_BaseAvatar, { src: "/img/avatars/25.svg" }),
                    createVNode("div", null, [
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "sm",
                        weight: "medium",
                        lead: "none"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Melany Lawright ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseText, {
                        size: "xs",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("HR Manager")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "child text-muted-300 ms-auto" }, [
                      createVNode("div", { class: "h-3 w-3 rounded-full bg-current" })
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
      _push(`</div></fieldset></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/checkbox-custom/base.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=base-5a52966c.mjs.map
