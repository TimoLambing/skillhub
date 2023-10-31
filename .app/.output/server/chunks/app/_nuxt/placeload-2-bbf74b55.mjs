import { _ as _sfc_main$1 } from './TairoContentWrapper-00ef8dfe.mjs';
import { g as _sfc_main$z, r as __nuxt_component_0$2 } from '../server.mjs';
import { _ as _sfc_main$2 } from './BaseSelect-50588309.mjs';
import { _ as _sfc_main$3, a as _sfc_main$2$1, b as _sfc_main$1$1, c as _sfc_main$5 } from './TairoTableCell-13e62d75.mjs';
import { _ as _sfc_main$4 } from './BaseCheckbox-45d3fdba.mjs';
import { defineComponent, ref, withCtx, unref, isRef, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
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
import './IconChevronDown-af6375e6.mjs';
import './IconCheck-b31ac5c7.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "placeload-2",
  __ssrInlineRender: true,
  setup(__props) {
    const fake = ref("");
    const fakePerPage = ref("");
    const fakeAll = ref(true);
    const fakeItems = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoContentWrapper = _sfc_main$1;
      const _component_BaseInput = _sfc_main$z;
      const _component_BaseSelect = _sfc_main$2;
      const _component_TairoTable = _sfc_main$3;
      const _component_TairoTableHeading = _sfc_main$2$1;
      const _component_BaseCheckbox = _sfc_main$4;
      const _component_TairoTableRow = _sfc_main$1$1;
      const _component_TairoTableCell = _sfc_main$5;
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
            _push2(ssrRenderComponent(_component_BaseSelect, {
              modelValue: unref(fakePerPage),
              "onUpdate:modelValue": ($event) => isRef(fakePerPage) ? fakePerPage.value = $event : null,
              placeholder: "Items per page",
              label: "",
              classes: {
                wrapper: "w-full sm:w-40"
              },
              disabled: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<option${ssrRenderAttr("value", 10)}${_scopeId2}>10 per page</option><option${ssrRenderAttr("value", 25)}${_scopeId2}>25 per page</option><option${ssrRenderAttr("value", 50)}${_scopeId2}>50 per page</option><option${ssrRenderAttr("value", 100)}${_scopeId2}>100 per page</option>`);
                } else {
                  return [
                    createVNode("option", { value: 10 }, "10 per page"),
                    createVNode("option", { value: 25 }, "25 per page"),
                    createVNode("option", { value: 50 }, "50 per page"),
                    createVNode("option", { value: 100 }, "100 per page")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseSelect, {
                modelValue: unref(fakePerPage),
                "onUpdate:modelValue": ($event) => isRef(fakePerPage) ? fakePerPage.value = $event : null,
                placeholder: "Items per page",
                label: "",
                classes: {
                  wrapper: "w-full sm:w-40"
                },
                disabled: ""
              }, {
                default: withCtx(() => [
                  createVNode("option", { value: 10 }, "10 per page"),
                  createVNode("option", { value: 25 }, "25 per page"),
                  createVNode("option", { value: 50 }, "50 per page"),
                  createVNode("option", { value: 100 }, "100 per page")
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TairoTable, { shape: "rounded" }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TairoTableHeading, {
                    uppercase: "",
                    spaced: "",
                    class: "p-4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_BaseCheckbox, {
                          modelValue: unref(fakeAll),
                          "onUpdate:modelValue": ($event) => isRef(fakeAll) ? fakeAll.value = $event : null,
                          name: "table-1-main",
                          shape: "full",
                          class: "text-primary-500"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode(_component_BaseCheckbox, {
                              modelValue: unref(fakeAll),
                              "onUpdate:modelValue": ($event) => isRef(fakeAll) ? fakeAll.value = $event : null,
                              name: "table-1-main",
                              shape: "full",
                              class: "text-primary-500"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TairoTableHeading, {
                    uppercase: "",
                    spaced: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Type`);
                      } else {
                        return [
                          createTextVNode("Type")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TairoTableHeading, {
                    uppercase: "",
                    spaced: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Name`);
                      } else {
                        return [
                          createTextVNode("Name")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TairoTableHeading, {
                    uppercase: "",
                    spaced: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Size`);
                      } else {
                        return [
                          createTextVNode("Size")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TairoTableHeading, {
                    uppercase: "",
                    spaced: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Version`);
                      } else {
                        return [
                          createTextVNode("Version")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TairoTableHeading, {
                    uppercase: "",
                    spaced: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Last Updated `);
                      } else {
                        return [
                          createTextVNode(" Last Updated ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TairoTableHeading, {
                    uppercase: "",
                    spaced: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Action`);
                      } else {
                        return [
                          createTextVNode("Action")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_TairoTableHeading, {
                      uppercase: "",
                      spaced: "",
                      class: "p-4"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode(_component_BaseCheckbox, {
                            modelValue: unref(fakeAll),
                            "onUpdate:modelValue": ($event) => isRef(fakeAll) ? fakeAll.value = $event : null,
                            name: "table-1-main",
                            shape: "full",
                            class: "text-primary-500"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TairoTableHeading, {
                      uppercase: "",
                      spaced: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Type")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TairoTableHeading, {
                      uppercase: "",
                      spaced: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Name")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TairoTableHeading, {
                      uppercase: "",
                      spaced: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Size")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TairoTableHeading, {
                      uppercase: "",
                      spaced: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Version")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TairoTableHeading, {
                      uppercase: "",
                      spaced: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Last Updated ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TairoTableHeading, {
                      uppercase: "",
                      spaced: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Action")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(10, (index) => {
                    _push3(ssrRenderComponent(_component_TairoTableRow, { key: index }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_TairoTableCell, { spaced: "" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="flex items-center"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_BaseCheckbox, {
                                  modelValue: unref(fakeItems),
                                  "onUpdate:modelValue": ($event) => isRef(fakeItems) ? fakeItems.value = $event : null,
                                  name: `placeload-item-checkbox-${index}`,
                                  shape: "full",
                                  class: "text-primary-500"
                                }, null, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode(_component_BaseCheckbox, {
                                      modelValue: unref(fakeItems),
                                      "onUpdate:modelValue": ($event) => isRef(fakeItems) ? fakeItems.value = $event : null,
                                      name: `placeload-item-checkbox-${index}`,
                                      shape: "full",
                                      class: "text-primary-500"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "name"])
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TairoTableCell, {
                            light: "",
                            spaced: ""
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_BasePlaceload, { class: "h-[46px] w-[46px] shrink-0 rounded-xl" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_BasePlaceload, { class: "h-[46px] w-[46px] shrink-0 rounded-xl" })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TairoTableCell, { spaced: "" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_BasePlaceload, { class: "h-3 w-24 rounded-lg" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_BasePlaceload, { class: "h-3 w-24 rounded-lg" })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TairoTableCell, {
                            light: "",
                            spaced: ""
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_BasePlaceload, { class: "h-3 w-12 rounded-lg" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_BasePlaceload, { class: "h-3 w-12 rounded-lg" })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TairoTableCell, {
                            light: "",
                            spaced: ""
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_BasePlaceload, { class: "h-3 w-12 rounded-lg" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_BasePlaceload, { class: "h-3 w-12 rounded-lg" })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TairoTableCell, { spaced: "" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="flex items-center gap-2"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_BasePlaceload, { class: "h-8 w-8 shrink-0 rounded-full" }, null, _parent5, _scopeId4));
                                _push5(`<div class="space-y-1"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_BasePlaceload, { class: "h-2 w-[70px] rounded-lg" }, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_BasePlaceload, { class: "h-2 w-[50px] rounded-lg" }, null, _parent5, _scopeId4));
                                _push5(`</div></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "flex items-center gap-2" }, [
                                    createVNode(_component_BasePlaceload, { class: "h-8 w-8 shrink-0 rounded-full" }),
                                    createVNode("div", { class: "space-y-1" }, [
                                      createVNode(_component_BasePlaceload, { class: "h-2 w-[70px] rounded-lg" }),
                                      createVNode(_component_BasePlaceload, { class: "h-2 w-[50px] rounded-lg" })
                                    ])
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TairoTableCell, { spaced: "" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_BasePlaceload, { class: "h-8 w-16 rounded-lg" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_BasePlaceload, { class: "h-8 w-16 rounded-lg" })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center" }, [
                                  createVNode(_component_BaseCheckbox, {
                                    modelValue: unref(fakeItems),
                                    "onUpdate:modelValue": ($event) => isRef(fakeItems) ? fakeItems.value = $event : null,
                                    name: `placeload-item-checkbox-${index}`,
                                    shape: "full",
                                    class: "text-primary-500"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "name"])
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TairoTableCell, {
                              light: "",
                              spaced: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_BasePlaceload, { class: "h-[46px] w-[46px] shrink-0 rounded-xl" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_BasePlaceload, { class: "h-3 w-24 rounded-lg" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TairoTableCell, {
                              light: "",
                              spaced: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_BasePlaceload, { class: "h-3 w-12 rounded-lg" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TairoTableCell, {
                              light: "",
                              spaced: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_BasePlaceload, { class: "h-3 w-12 rounded-lg" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  createVNode(_component_BasePlaceload, { class: "h-8 w-8 shrink-0 rounded-full" }),
                                  createVNode("div", { class: "space-y-1" }, [
                                    createVNode(_component_BasePlaceload, { class: "h-2 w-[70px] rounded-lg" }),
                                    createVNode(_component_BasePlaceload, { class: "h-2 w-[50px] rounded-lg" })
                                  ])
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_BasePlaceload, { class: "h-8 w-16 rounded-lg" })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(10, (index) => {
                      return createVNode(_component_TairoTableRow, { key: index }, {
                        default: withCtx(() => [
                          createVNode(_component_TairoTableCell, { spaced: "" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center" }, [
                                createVNode(_component_BaseCheckbox, {
                                  modelValue: unref(fakeItems),
                                  "onUpdate:modelValue": ($event) => isRef(fakeItems) ? fakeItems.value = $event : null,
                                  name: `placeload-item-checkbox-${index}`,
                                  shape: "full",
                                  class: "text-primary-500"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "name"])
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TairoTableCell, {
                            light: "",
                            spaced: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_BasePlaceload, { class: "h-[46px] w-[46px] shrink-0 rounded-xl" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TairoTableCell, { spaced: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_BasePlaceload, { class: "h-3 w-24 rounded-lg" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TairoTableCell, {
                            light: "",
                            spaced: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_BasePlaceload, { class: "h-3 w-12 rounded-lg" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TairoTableCell, {
                            light: "",
                            spaced: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_BasePlaceload, { class: "h-3 w-12 rounded-lg" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TairoTableCell, { spaced: "" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center gap-2" }, [
                                createVNode(_component_BasePlaceload, { class: "h-8 w-8 shrink-0 rounded-full" }),
                                createVNode("div", { class: "space-y-1" }, [
                                  createVNode(_component_BasePlaceload, { class: "h-2 w-[70px] rounded-lg" }),
                                  createVNode(_component_BasePlaceload, { class: "h-2 w-[50px] rounded-lg" })
                                ])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TairoTableCell, { spaced: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_BasePlaceload, { class: "h-8 w-16 rounded-lg" })
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
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "w-full" }, [
                  createVNode(_component_TairoTable, { shape: "rounded" }, {
                    header: withCtx(() => [
                      createVNode(_component_TairoTableHeading, {
                        uppercase: "",
                        spaced: "",
                        class: "p-4"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode(_component_BaseCheckbox, {
                              modelValue: unref(fakeAll),
                              "onUpdate:modelValue": ($event) => isRef(fakeAll) ? fakeAll.value = $event : null,
                              name: "table-1-main",
                              shape: "full",
                              class: "text-primary-500"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TairoTableHeading, {
                        uppercase: "",
                        spaced: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Type")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TairoTableHeading, {
                        uppercase: "",
                        spaced: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Name")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TairoTableHeading, {
                        uppercase: "",
                        spaced: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Size")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TairoTableHeading, {
                        uppercase: "",
                        spaced: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Version")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TairoTableHeading, {
                        uppercase: "",
                        spaced: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Last Updated ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TairoTableHeading, {
                        uppercase: "",
                        spaced: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Action")
                        ]),
                        _: 1
                      })
                    ]),
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(10, (index) => {
                        return createVNode(_component_TairoTableRow, { key: index }, {
                          default: withCtx(() => [
                            createVNode(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center" }, [
                                  createVNode(_component_BaseCheckbox, {
                                    modelValue: unref(fakeItems),
                                    "onUpdate:modelValue": ($event) => isRef(fakeItems) ? fakeItems.value = $event : null,
                                    name: `placeload-item-checkbox-${index}`,
                                    shape: "full",
                                    class: "text-primary-500"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "name"])
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TairoTableCell, {
                              light: "",
                              spaced: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_BasePlaceload, { class: "h-[46px] w-[46px] shrink-0 rounded-xl" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_BasePlaceload, { class: "h-3 w-24 rounded-lg" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TairoTableCell, {
                              light: "",
                              spaced: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_BasePlaceload, { class: "h-3 w-12 rounded-lg" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TairoTableCell, {
                              light: "",
                              spaced: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_BasePlaceload, { class: "h-3 w-12 rounded-lg" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  createVNode(_component_BasePlaceload, { class: "h-8 w-8 shrink-0 rounded-full" }),
                                  createVNode("div", { class: "space-y-1" }, [
                                    createVNode(_component_BasePlaceload, { class: "h-2 w-[70px] rounded-lg" }),
                                    createVNode(_component_BasePlaceload, { class: "h-2 w-[50px] rounded-lg" })
                                  ])
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_BasePlaceload, { class: "h-8 w-16 rounded-lg" })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 2
                        }, 1024);
                      }), 64))
                    ]),
                    _: 1
                  })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/placeload-2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=placeload-2-bbf74b55.mjs.map
