import { _ as _sfc_main$3, a as _sfc_main$2, b as _sfc_main$1$1, c as _sfc_main$4 } from './TairoTableCell-13e62d75.mjs';
import { _ as _sfc_main$1 } from './BaseCheckbox-45d3fdba.mjs';
import { _ as _sfc_main$5 } from './BaseTag-734af285.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, isRef, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import './IconCheck-b31ac5c7.mjs';
import '../server.mjs';
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
  __name: "curved",
  __ssrInlineRender: true,
  setup(__props) {
    const selected = ref([]);
    const selectAll = ref(false);
    const team = [
      {
        id: 0,
        src: "/img/avatars/22.svg",
        name: "Anna Vrinkof",
        role: "UI/UX designer",
        expertise: "UX Design",
        rate: 49,
        status: "Available"
      },
      {
        id: 1,
        src: "/img/avatars/3.svg",
        name: "John Cambell",
        role: "Sales manager",
        expertise: "Management",
        rate: 74,
        status: "Hired"
      },
      {
        id: 2,
        src: "/img/avatars/9.svg",
        name: "Beth Delanoe",
        role: "Product designer",
        expertise: "Product",
        rate: 43,
        status: "Available"
      },
      {
        id: 3,
        src: "/img/avatars/14.svg",
        name: "Andrew Higgs",
        role: "Project manager",
        expertise: "Project",
        rate: 69,
        status: "New"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoTable = _sfc_main$3;
      const _component_TairoTableHeading = _sfc_main$2;
      const _component_BaseCheckbox = _sfc_main$1;
      const _component_TairoTableRow = _sfc_main$1$1;
      const _component_TairoTableCell = _sfc_main$4;
      const _component_BaseTag = _sfc_main$5;
      _push(ssrRenderComponent(_component_TairoTable, mergeProps({ shape: "curved" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TairoTableHeading, {
              uppercase: "",
              class: "p-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseCheckbox, {
                    modelValue: unref(selectAll),
                    "onUpdate:modelValue": ($event) => isRef(selectAll) ? selectAll.value = $event : null,
                    shape: "curved",
                    class: "text-primary-500"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center" }, [
                      createVNode(_component_BaseCheckbox, {
                        modelValue: unref(selectAll),
                        "onUpdate:modelValue": ($event) => isRef(selectAll) ? selectAll.value = $event : null,
                        shape: "curved",
                        class: "text-primary-500"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TairoTableHeading, { uppercase: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Collaborator`);
                } else {
                  return [
                    createTextVNode("Collaborator")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TairoTableHeading, { uppercase: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Expertise`);
                } else {
                  return [
                    createTextVNode("Expertise")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TairoTableHeading, { uppercase: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Rate`);
                } else {
                  return [
                    createTextVNode("Rate")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TairoTableHeading, { uppercase: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Status`);
                } else {
                  return [
                    createTextVNode("Status")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TairoTableHeading, {
              uppercase: "",
              class: "p-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="sr-only"${_scopeId2}>View</span>`);
                } else {
                  return [
                    createVNode("span", { class: "sr-only" }, "View")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TairoTableHeading, {
                uppercase: "",
                class: "p-4"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode(_component_BaseCheckbox, {
                      modelValue: unref(selectAll),
                      "onUpdate:modelValue": ($event) => isRef(selectAll) ? selectAll.value = $event : null,
                      shape: "curved",
                      class: "text-primary-500"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_TairoTableHeading, { uppercase: "" }, {
                default: withCtx(() => [
                  createTextVNode("Collaborator")
                ]),
                _: 1
              }),
              createVNode(_component_TairoTableHeading, { uppercase: "" }, {
                default: withCtx(() => [
                  createTextVNode("Expertise")
                ]),
                _: 1
              }),
              createVNode(_component_TairoTableHeading, { uppercase: "" }, {
                default: withCtx(() => [
                  createTextVNode("Rate")
                ]),
                _: 1
              }),
              createVNode(_component_TairoTableHeading, { uppercase: "" }, {
                default: withCtx(() => [
                  createTextVNode("Status")
                ]),
                _: 1
              }),
              createVNode(_component_TairoTableHeading, {
                uppercase: "",
                class: "p-4"
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "sr-only" }, "View")
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(team, (member) => {
              _push2(ssrRenderComponent(_component_TairoTableRow, {
                key: member.id
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_TairoTableCell, { class: "p-4" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex items-center"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_BaseCheckbox, {
                            modelValue: unref(selected),
                            "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                            value: `table-6-${member.id}`,
                            shape: "curved",
                            class: "text-primary-500"
                          }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode(_component_BaseCheckbox, {
                                modelValue: unref(selected),
                                "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                                value: `table-6-${member.id}`,
                                shape: "curved",
                                class: "text-primary-500"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "value"])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_TairoTableCell, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(member.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(member.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_TairoTableCell, { light: "" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(member.expertise)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(member.expertise), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_TairoTableCell, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`$${ssrInterpolate(member.rate)}/hour`);
                        } else {
                          return [
                            createTextVNode("$" + toDisplayString(member.rate) + "/hour", 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_TairoTableCell, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (member.status === "Available") {
                            _push4(ssrRenderComponent(_component_BaseTag, {
                              color: "success",
                              flavor: "pastel",
                              shape: "full",
                              class: "font-medium"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(member.status)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(member.status), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else if (member.status === "New") {
                            _push4(ssrRenderComponent(_component_BaseTag, {
                              color: "info",
                              flavor: "pastel",
                              shape: "full",
                              class: "font-medium"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(member.status)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(member.status), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else if (member.status === "Hired") {
                            _push4(ssrRenderComponent(_component_BaseTag, {
                              color: "warning",
                              flavor: "pastel",
                              shape: "full",
                              class: "font-medium"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(member.status)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(member.status), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            member.status === "Available" ? (openBlock(), createBlock(_component_BaseTag, {
                              key: 0,
                              color: "success",
                              flavor: "pastel",
                              shape: "full",
                              class: "font-medium"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(member.status), 1)
                              ]),
                              _: 2
                            }, 1024)) : member.status === "New" ? (openBlock(), createBlock(_component_BaseTag, {
                              key: 1,
                              color: "info",
                              flavor: "pastel",
                              shape: "full",
                              class: "font-medium"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(member.status), 1)
                              ]),
                              _: 2
                            }, 1024)) : member.status === "Hired" ? (openBlock(), createBlock(_component_BaseTag, {
                              key: 2,
                              color: "warning",
                              flavor: "pastel",
                              shape: "full",
                              class: "font-medium"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(member.status), 1)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_TairoTableCell, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<a href="#" class="text-primary-500 dark:text-primary-400 underline-offset-4 transition-opacity duration-300 hover:underline hover:opacity-75"${_scopeId3}> View </a>`);
                        } else {
                          return [
                            createVNode("a", {
                              href: "#",
                              class: "text-primary-500 dark:text-primary-400 underline-offset-4 transition-opacity duration-300 hover:underline hover:opacity-75"
                            }, " View ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_TairoTableCell, { class: "p-4" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode(_component_BaseCheckbox, {
                              modelValue: unref(selected),
                              "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                              value: `table-6-${member.id}`,
                              shape: "curved",
                              class: "text-primary-500"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "value"])
                          ])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_TairoTableCell, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(member.name), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_TairoTableCell, { light: "" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(member.expertise), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_TairoTableCell, null, {
                        default: withCtx(() => [
                          createTextVNode("$" + toDisplayString(member.rate) + "/hour", 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_TairoTableCell, null, {
                        default: withCtx(() => [
                          member.status === "Available" ? (openBlock(), createBlock(_component_BaseTag, {
                            key: 0,
                            color: "success",
                            flavor: "pastel",
                            shape: "full",
                            class: "font-medium"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(member.status), 1)
                            ]),
                            _: 2
                          }, 1024)) : member.status === "New" ? (openBlock(), createBlock(_component_BaseTag, {
                            key: 1,
                            color: "info",
                            flavor: "pastel",
                            shape: "full",
                            class: "font-medium"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(member.status), 1)
                            ]),
                            _: 2
                          }, 1024)) : member.status === "Hired" ? (openBlock(), createBlock(_component_BaseTag, {
                            key: 2,
                            color: "warning",
                            flavor: "pastel",
                            shape: "full",
                            class: "font-medium"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(member.status), 1)
                            ]),
                            _: 2
                          }, 1024)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_TairoTableCell, null, {
                        default: withCtx(() => [
                          createVNode("a", {
                            href: "#",
                            class: "text-primary-500 dark:text-primary-400 underline-offset-4 transition-opacity duration-300 hover:underline hover:opacity-75"
                          }, " View ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(team, (member) => {
                return createVNode(_component_TairoTableRow, {
                  key: member.id
                }, {
                  default: withCtx(() => [
                    createVNode(_component_TairoTableCell, { class: "p-4" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode(_component_BaseCheckbox, {
                            modelValue: unref(selected),
                            "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                            value: `table-6-${member.id}`,
                            shape: "curved",
                            class: "text-primary-500"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "value"])
                        ])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_TairoTableCell, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(member.name), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_TairoTableCell, { light: "" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(member.expertise), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_TairoTableCell, null, {
                      default: withCtx(() => [
                        createTextVNode("$" + toDisplayString(member.rate) + "/hour", 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_TairoTableCell, null, {
                      default: withCtx(() => [
                        member.status === "Available" ? (openBlock(), createBlock(_component_BaseTag, {
                          key: 0,
                          color: "success",
                          flavor: "pastel",
                          shape: "full",
                          class: "font-medium"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(member.status), 1)
                          ]),
                          _: 2
                        }, 1024)) : member.status === "New" ? (openBlock(), createBlock(_component_BaseTag, {
                          key: 1,
                          color: "info",
                          flavor: "pastel",
                          shape: "full",
                          class: "font-medium"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(member.status), 1)
                          ]),
                          _: 2
                        }, 1024)) : member.status === "Hired" ? (openBlock(), createBlock(_component_BaseTag, {
                          key: 2,
                          color: "warning",
                          flavor: "pastel",
                          shape: "full",
                          class: "font-medium"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(member.status), 1)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_TairoTableCell, null, {
                      default: withCtx(() => [
                        createVNode("a", {
                          href: "#",
                          class: "text-primary-500 dark:text-primary-400 underline-offset-4 transition-opacity duration-300 hover:underline hover:opacity-75"
                        }, " View ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/table/curved.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=curved-72d5f22d.mjs.map
