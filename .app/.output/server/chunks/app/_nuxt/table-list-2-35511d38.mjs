import { _ as _sfc_main$1 } from './TairoContentWrapper-00ef8dfe.mjs';
import { J as useRoute, u as useRouter, g as _sfc_main$z, Q as _sfc_main$3 } from '../server.mjs';
import { _ as _sfc_main$2 } from './BaseSelect-50588309.mjs';
import { _ as _sfc_main$3$1, a as _sfc_main$2$1, b as _sfc_main$1$1, c as _sfc_main$4 } from './TairoTableCell-13e62d75.mjs';
import { _ as _sfc_main$5 } from './BaseButtonAction-57c21d00.mjs';
import { _ as _sfc_main$6 } from './BasePagination-2a742261.mjs';
import { defineComponent, computed, ref, watch, withAsyncContext, withCtx, unref, isRef, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-45c1546c.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1 } from './placeholder-search-4-dark-8ea6a3c1.mjs';
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
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "table-list-2",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const router = useRouter();
    const page = computed(() => parseInt(route.query.page ?? "1"));
    const filter = ref("");
    const perPage = ref(10);
    watch([filter, perPage], () => {
      router.push({
        query: {
          page: void 0
        }
      });
    });
    const query = computed(() => {
      return {
        filter: filter.value,
        perPage: perPage.value,
        page: page.value
      };
    });
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/products", {
      query
    }, "$R4X2J2b8Yv")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoContentWrapper = _sfc_main$1;
      const _component_BaseInput = _sfc_main$z;
      const _component_BaseSelect = _sfc_main$2;
      const _component_BasePlaceholderPage = _sfc_main$3;
      const _component_TairoTable = _sfc_main$3$1;
      const _component_TairoTableHeading = _sfc_main$2$1;
      const _component_TairoTableRow = _sfc_main$1$1;
      const _component_TairoTableCell = _sfc_main$4;
      const _component_BaseButtonAction = _sfc_main$5;
      const _component_BasePagination = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_TairoContentWrapper, null, {
        left: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseInput, {
              modelValue: unref(filter),
              "onUpdate:modelValue": ($event) => isRef(filter) ? filter.value = $event : null,
              icon: "lucide:search",
              placeholder: "Filter products...",
              classes: {
                wrapper: "w-full sm:w-auto"
              }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseInput, {
                modelValue: unref(filter),
                "onUpdate:modelValue": ($event) => isRef(filter) ? filter.value = $event : null,
                icon: "lucide:search",
                placeholder: "Filter products...",
                classes: {
                  wrapper: "w-full sm:w-auto"
                }
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        right: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseSelect, {
              modelValue: unref(perPage),
              "onUpdate:modelValue": ($event) => isRef(perPage) ? perPage.value = $event : null,
              label: "",
              classes: {
                wrapper: "w-full sm:w-40"
              }
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
                modelValue: unref(perPage),
                "onUpdate:modelValue": ($event) => isRef(perPage) ? perPage.value = $event : null,
                label: "",
                classes: {
                  wrapper: "w-full sm:w-40"
                }
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
            _push2(`<div${_scopeId}>`);
            if (!unref(pending) && unref(data)?.data.length === 0) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BasePlaceholderPage, {
                title: "No matching results",
                subtitle: "Looks like we couldn't find any matching results for your search terms. Try other search terms."
              }, {
                image: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img class="block dark:hidden"${ssrRenderAttr("src", _imports_0)} alt="Placeholder image"${_scopeId2}><img class="hidden dark:block"${ssrRenderAttr("src", _imports_1)} alt="Placeholder image"${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "block dark:hidden",
                        src: _imports_0,
                        alt: "Placeholder image"
                      }),
                      createVNode("img", {
                        class: "hidden dark:block",
                        src: _imports_1,
                        alt: "Placeholder image"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div${_scopeId}><div class="w-full"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_TairoTable, { shape: "rounded" }, {
                header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_TairoTableHeading, {
                      uppercase: "",
                      spaced: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Product`);
                        } else {
                          return [
                            createTextVNode("Product")
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
                          _push4(`Sku`);
                        } else {
                          return [
                            createTextVNode("Sku")
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
                          _push4(`Price`);
                        } else {
                          return [
                            createTextVNode("Price")
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
                          _push4(`Stock`);
                        } else {
                          return [
                            createTextVNode("Stock")
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
                          _push4(`Category`);
                        } else {
                          return [
                            createTextVNode("Category")
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
                        spaced: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Product")
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
                          createTextVNode("Sku")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TairoTableHeading, {
                        uppercase: "",
                        spaced: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Price")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TairoTableHeading, {
                        uppercase: "",
                        spaced: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Stock")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TairoTableHeading, {
                        uppercase: "",
                        spaced: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Category")
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
                    ssrRenderList(unref(data)?.data, (item) => {
                      _push3(ssrRenderComponent(_component_TairoTableRow, {
                        key: item.id
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="flex items-center"${_scopeId4}><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.name)} class="max-w-[80px]"${_scopeId4}></div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "flex items-center" }, [
                                      createVNode("img", {
                                        src: item.image,
                                        alt: item.name,
                                        class: "max-w-[80px]"
                                      }, null, 8, ["src", "alt"])
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.name)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.name), 1)
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
                                  _push5(`${ssrInterpolate(item.sku)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.sku), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<span class="font-semibold"${_scopeId4}>$${ssrInterpolate(item.price)}</span>`);
                                } else {
                                  return [
                                    createVNode("span", { class: "font-semibold" }, "$" + toDisplayString(item.price), 1)
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
                                  _push5(`${ssrInterpolate(item.stock)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.stock), 1)
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
                                  _push5(`<span class="text-primary-500 text-sm font-medium"${_scopeId4}>${ssrInterpolate(item.category)}</span>`);
                                } else {
                                  return [
                                    createVNode("span", { class: "text-primary-500 text-sm font-medium" }, toDisplayString(item.category), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_BaseButtonAction, { muted: "" }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`Manage`);
                                      } else {
                                        return [
                                          createTextVNode("Manage")
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_BaseButtonAction, { muted: "" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Manage")
                                      ]),
                                      _: 1
                                    })
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
                                    createVNode("img", {
                                      src: item.image,
                                      alt: item.name,
                                      class: "max-w-[80px]"
                                    }, null, 8, ["src", "alt"])
                                  ])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, { spaced: "" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.name), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, {
                                light: "",
                                spaced: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.sku), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, { spaced: "" }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "font-semibold" }, "$" + toDisplayString(item.price), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, {
                                light: "",
                                spaced: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.stock), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, {
                                light: "",
                                spaced: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-primary-500 text-sm font-medium" }, toDisplayString(item.category), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, { spaced: "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_BaseButtonAction, { muted: "" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Manage")
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
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(data)?.data, (item) => {
                        return openBlock(), createBlock(_component_TairoTableRow, {
                          key: item.id
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center" }, [
                                  createVNode("img", {
                                    src: item.image,
                                    alt: item.name,
                                    class: "max-w-[80px]"
                                  }, null, 8, ["src", "alt"])
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TairoTableCell, {
                              light: "",
                              spaced: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.sku), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "font-semibold" }, "$" + toDisplayString(item.price), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TairoTableCell, {
                              light: "",
                              spaced: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.stock), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TairoTableCell, {
                              light: "",
                              spaced: ""
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-primary-500 text-sm font-medium" }, toDisplayString(item.category), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_BaseButtonAction, { muted: "" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Manage")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="mt-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BasePagination, {
                "total-items": unref(data)?.total ?? 0,
                "item-per-page": unref(perPage),
                "current-page": unref(page),
                shape: "curved"
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                !unref(pending) && unref(data)?.data.length === 0 ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode(_component_BasePlaceholderPage, {
                    title: "No matching results",
                    subtitle: "Looks like we couldn't find any matching results for your search terms. Try other search terms."
                  }, {
                    image: withCtx(() => [
                      createVNode("img", {
                        class: "block dark:hidden",
                        src: _imports_0,
                        alt: "Placeholder image"
                      }),
                      createVNode("img", {
                        class: "hidden dark:block",
                        src: _imports_1,
                        alt: "Placeholder image"
                      })
                    ]),
                    _: 1
                  })
                ])) : (openBlock(), createBlock("div", { key: 1 }, [
                  createVNode("div", { class: "w-full" }, [
                    createVNode(_component_TairoTable, { shape: "rounded" }, {
                      header: withCtx(() => [
                        createVNode(_component_TairoTableHeading, {
                          uppercase: "",
                          spaced: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Product")
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
                            createTextVNode("Sku")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TairoTableHeading, {
                          uppercase: "",
                          spaced: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Price")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TairoTableHeading, {
                          uppercase: "",
                          spaced: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Stock")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TairoTableHeading, {
                          uppercase: "",
                          spaced: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Category")
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
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(data)?.data, (item) => {
                          return openBlock(), createBlock(_component_TairoTableRow, {
                            key: item.id
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_TairoTableCell, { spaced: "" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode("img", {
                                      src: item.image,
                                      alt: item.name,
                                      class: "max-w-[80px]"
                                    }, null, 8, ["src", "alt"])
                                  ])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, { spaced: "" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.name), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, {
                                light: "",
                                spaced: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.sku), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, { spaced: "" }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "font-semibold" }, "$" + toDisplayString(item.price), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, {
                                light: "",
                                spaced: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.stock), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, {
                                light: "",
                                spaced: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-primary-500 text-sm font-medium" }, toDisplayString(item.category), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, { spaced: "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_BaseButtonAction, { muted: "" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Manage")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "mt-6" }, [
                    createVNode(_component_BasePagination, {
                      "total-items": unref(data)?.total ?? 0,
                      "item-per-page": unref(perPage),
                      "current-page": unref(page),
                      shape: "curved"
                    }, null, 8, ["total-items", "item-per-page", "current-page"])
                  ])
                ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/table-list-2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=table-list-2-35511d38.mjs.map
