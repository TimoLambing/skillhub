import { _ as __nuxt_component_0, a as _sfc_main$2, b as _sfc_main$1$1, c as _sfc_main$3 } from './TairoFlexTableCell-da353aa2.mjs';
import { _ as _sfc_main$1 } from './BaseCheckbox-45d3fdba.mjs';
import { s as _sfc_main$E, d as _sfc_main$x } from '../server.mjs';
import { _ as _sfc_main$4 } from './BaseTag-734af285.mjs';
import { defineComponent, ref, withCtx, unref, isRef, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import './IconCheck-b31ac5c7.mjs';
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
      const _component_TairoFlexTable = __nuxt_component_0;
      const _component_TairoFlexTableHeading = _sfc_main$2;
      const _component_BaseCheckbox = _sfc_main$1;
      const _component_TairoFlexTableRow = _sfc_main$1$1;
      const _component_TairoFlexTableCell = _sfc_main$3;
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BaseTag = _sfc_main$4;
      const _component_BaseButton = _sfc_main$x;
      _push(ssrRenderComponent(_component_TairoFlexTable, _attrs, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TairoFlexTableHeading, { type: "shrink" }, {
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
            _push2(ssrRenderComponent(_component_TairoFlexTableHeading, { type: "grow" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Member`);
                } else {
                  return [
                    createTextVNode("Member")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TairoFlexTableHeading, { type: "stable" }, {
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
            _push2(ssrRenderComponent(_component_TairoFlexTableHeading, { type: "stable" }, {
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
            _push2(ssrRenderComponent(_component_TairoFlexTableHeading, { type: "stable" }, {
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
            _push2(ssrRenderComponent(_component_TairoFlexTableHeading, { type: "stable" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Actions`);
                } else {
                  return [
                    createTextVNode("Actions")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TairoFlexTableHeading, { type: "shrink" }, {
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
              createVNode(_component_TairoFlexTableHeading, { type: "grow" }, {
                default: withCtx(() => [
                  createTextVNode("Member")
                ]),
                _: 1
              }),
              createVNode(_component_TairoFlexTableHeading, { type: "stable" }, {
                default: withCtx(() => [
                  createTextVNode("Expertise")
                ]),
                _: 1
              }),
              createVNode(_component_TairoFlexTableHeading, { type: "stable" }, {
                default: withCtx(() => [
                  createTextVNode("Rate")
                ]),
                _: 1
              }),
              createVNode(_component_TairoFlexTableHeading, { type: "stable" }, {
                default: withCtx(() => [
                  createTextVNode("Status")
                ]),
                _: 1
              }),
              createVNode(_component_TairoFlexTableHeading, { type: "stable" }, {
                default: withCtx(() => [
                  createTextVNode("Actions")
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
              _push2(ssrRenderComponent(_component_TairoFlexTableRow, {
                key: member.id,
                shape: "curved"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_TairoFlexTableCell, {
                      type: "shrink",
                      "data-content": "Selection"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex items-center"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_BaseCheckbox, {
                            modelValue: unref(selected),
                            "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                            value: `checkbox-${member.id}`,
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
                                value: `checkbox-${member.id}`,
                                shape: "curved",
                                class: "text-primary-500"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "value"])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_TairoFlexTableCell, {
                      type: "grow",
                      "data-content": "Member"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex items-center"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_BaseAvatar, {
                            src: member.src,
                            size: "sm"
                          }, null, _parent4, _scopeId3));
                          _push4(`<div class="ms-3 leading-none"${_scopeId3}><h4 class="font-sans text-sm font-medium"${_scopeId3}>${ssrInterpolate(member.name)}</h4><p class="text-muted-400 font-sans text-xs font-normal"${_scopeId3}>${ssrInterpolate(member.role)}</p></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode(_component_BaseAvatar, {
                                src: member.src,
                                size: "sm"
                              }, null, 8, ["src"]),
                              createVNode("div", { class: "ms-3 leading-none" }, [
                                createVNode("h4", { class: "font-sans text-sm font-medium" }, toDisplayString(member.name), 1),
                                createVNode("p", { class: "text-muted-400 font-sans text-xs font-normal" }, toDisplayString(member.role), 1)
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_TairoFlexTableCell, {
                      type: "stable",
                      "data-content": "Expertise",
                      light: ""
                    }, {
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
                    _push3(ssrRenderComponent(_component_TairoFlexTableCell, {
                      type: "stable",
                      "data-content": "Rate"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span class="font-medium"${_scopeId3}>$${ssrInterpolate(member.rate)}/hour</span>`);
                        } else {
                          return [
                            createVNode("span", { class: "font-medium" }, "$" + toDisplayString(member.rate) + "/hour", 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_TairoFlexTableCell, {
                      type: "stable",
                      "data-content": "Status"
                    }, {
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
                    _push3(ssrRenderComponent(_component_TairoFlexTableCell, {
                      type: "stable",
                      "data-content": "Actions"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_BaseButton, {
                            color: "primary",
                            flavor: "outline",
                            shape: "curved",
                            class: "scale-90"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` View `);
                              } else {
                                return [
                                  createTextVNode(" View ")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_BaseButton, {
                              color: "primary",
                              flavor: "outline",
                              shape: "curved",
                              class: "scale-90"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" View ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_TairoFlexTableCell, {
                        type: "shrink",
                        "data-content": "Selection"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode(_component_BaseCheckbox, {
                              modelValue: unref(selected),
                              "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                              value: `checkbox-${member.id}`,
                              shape: "curved",
                              class: "text-primary-500"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "value"])
                          ])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_TairoFlexTableCell, {
                        type: "grow",
                        "data-content": "Member"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode(_component_BaseAvatar, {
                              src: member.src,
                              size: "sm"
                            }, null, 8, ["src"]),
                            createVNode("div", { class: "ms-3 leading-none" }, [
                              createVNode("h4", { class: "font-sans text-sm font-medium" }, toDisplayString(member.name), 1),
                              createVNode("p", { class: "text-muted-400 font-sans text-xs font-normal" }, toDisplayString(member.role), 1)
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_TairoFlexTableCell, {
                        type: "stable",
                        "data-content": "Expertise",
                        light: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(member.expertise), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_TairoFlexTableCell, {
                        type: "stable",
                        "data-content": "Rate"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "font-medium" }, "$" + toDisplayString(member.rate) + "/hour", 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_TairoFlexTableCell, {
                        type: "stable",
                        "data-content": "Status"
                      }, {
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
                      createVNode(_component_TairoFlexTableCell, {
                        type: "stable",
                        "data-content": "Actions"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_BaseButton, {
                            color: "primary",
                            flavor: "outline",
                            shape: "curved",
                            class: "scale-90"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" View ")
                            ]),
                            _: 1
                          })
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
                return createVNode(_component_TairoFlexTableRow, {
                  key: member.id,
                  shape: "curved"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_TairoFlexTableCell, {
                      type: "shrink",
                      "data-content": "Selection"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode(_component_BaseCheckbox, {
                            modelValue: unref(selected),
                            "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                            value: `checkbox-${member.id}`,
                            shape: "curved",
                            class: "text-primary-500"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "value"])
                        ])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_TairoFlexTableCell, {
                      type: "grow",
                      "data-content": "Member"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode(_component_BaseAvatar, {
                            src: member.src,
                            size: "sm"
                          }, null, 8, ["src"]),
                          createVNode("div", { class: "ms-3 leading-none" }, [
                            createVNode("h4", { class: "font-sans text-sm font-medium" }, toDisplayString(member.name), 1),
                            createVNode("p", { class: "text-muted-400 font-sans text-xs font-normal" }, toDisplayString(member.role), 1)
                          ])
                        ])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_TairoFlexTableCell, {
                      type: "stable",
                      "data-content": "Expertise",
                      light: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(member.expertise), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_TairoFlexTableCell, {
                      type: "stable",
                      "data-content": "Rate"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "font-medium" }, "$" + toDisplayString(member.rate) + "/hour", 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_TairoFlexTableCell, {
                      type: "stable",
                      "data-content": "Status"
                    }, {
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
                    createVNode(_component_TairoFlexTableCell, {
                      type: "stable",
                      "data-content": "Actions"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BaseButton, {
                          color: "primary",
                          flavor: "outline",
                          shape: "curved",
                          class: "scale-90"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" View ")
                          ]),
                          _: 1
                        })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/flex-table/curved.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=curved-05286d72.mjs.map
