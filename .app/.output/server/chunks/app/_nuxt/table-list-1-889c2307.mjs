import { _ as _sfc_main$1 } from './TairoContentWrapper-00ef8dfe.mjs';
import { J as useRoute, u as useRouter, g as _sfc_main$z, Q as _sfc_main$3, s as _sfc_main$E } from '../server.mjs';
import { _ as _sfc_main$2 } from './BaseSelect-50588309.mjs';
import { _ as _sfc_main$3$1, a as _sfc_main$2$1, b as _sfc_main$1$1, c as _sfc_main$5 } from './TairoTableCell-13e62d75.mjs';
import { _ as _sfc_main$4 } from './BaseCheckbox-45d3fdba.mjs';
import { _ as _sfc_main$6 } from './BaseTag-734af285.mjs';
import { _ as __nuxt_component_0 } from './BaseProgressCircle-f74c4642.mjs';
import { _ as _sfc_main$1$2, a as _sfc_main$7 } from './BaseDropdownItem-864908ca.mjs';
import { _ as _sfc_main$8 } from './BasePagination-2a742261.mjs';
import { defineComponent, computed, ref, watch, withAsyncContext, withCtx, unref, isRef, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-45c1546c.mjs';
import { g as getRandomColor } from './colors-16c42002.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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
import './IconCheck-b31ac5c7.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "table-list-1",
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
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/company/members/",
      {
        query
      },
      "$SgL4zKsFeE"
    )), __temp = await __temp, __restore(), __temp);
    const selected = ref([]);
    const isAllVisibleSelected = computed(() => {
      return selected.value.length === data.value?.data.length;
    });
    function toggleAllVisibleSelection() {
      if (isAllVisibleSelected.value) {
        selected.value = [];
      } else {
        selected.value = data.value?.data.map((item) => item.id) ?? [];
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoContentWrapper = _sfc_main$1;
      const _component_BaseInput = _sfc_main$z;
      const _component_BaseSelect = _sfc_main$2;
      const _component_BasePlaceholderPage = _sfc_main$3;
      const _component_TairoTable = _sfc_main$3$1;
      const _component_TairoTableHeading = _sfc_main$2$1;
      const _component_BaseCheckbox = _sfc_main$4;
      const _component_TairoTableRow = _sfc_main$1$1;
      const _component_TairoTableCell = _sfc_main$5;
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BaseTag = _sfc_main$6;
      const _component_BaseProgressCircle = __nuxt_component_0;
      const _component_BaseDropdown = _sfc_main$1$2;
      const _component_BaseDropdownItem = _sfc_main$7;
      const _component_BasePagination = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_TairoContentWrapper, null, {
        left: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseInput, {
              modelValue: unref(filter),
              "onUpdate:modelValue": ($event) => isRef(filter) ? filter.value = $event : null,
              icon: "lucide:search",
              placeholder: "Filter users...",
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
                placeholder: "Filter users...",
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
              _push2(ssrRenderComponent(_component_TairoTable, {
                shape: "rounded",
                scrollable: false
              }, {
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
                            "model-value": unref(isAllVisibleSelected),
                            indeterminate: unref(selected).length > 0 && !unref(isAllVisibleSelected),
                            name: "table-1-main",
                            shape: "rounded",
                            class: "text-primary-500",
                            onClick: toggleAllVisibleSelection
                          }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode(_component_BaseCheckbox, {
                                "model-value": unref(isAllVisibleSelected),
                                indeterminate: unref(selected).length > 0 && !unref(isAllVisibleSelected),
                                name: "table-1-main",
                                shape: "rounded",
                                class: "text-primary-500",
                                onClick: toggleAllVisibleSelection
                              }, null, 8, ["model-value", "indeterminate"])
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
                          _push4(` Collaborator `);
                        } else {
                          return [
                            createTextVNode(" Collaborator ")
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
                          _push4(`Location`);
                        } else {
                          return [
                            createTextVNode("Location")
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
                          _push4(`Status`);
                        } else {
                          return [
                            createTextVNode("Status")
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
                          _push4(` Completed `);
                        } else {
                          return [
                            createTextVNode(" Completed ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_TairoTableHeading, {
                      uppercase: "",
                      spaced: "",
                      class: "text-end"
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
                              "model-value": unref(isAllVisibleSelected),
                              indeterminate: unref(selected).length > 0 && !unref(isAllVisibleSelected),
                              name: "table-1-main",
                              shape: "rounded",
                              class: "text-primary-500",
                              onClick: toggleAllVisibleSelection
                            }, null, 8, ["model-value", "indeterminate"])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TairoTableHeading, {
                        uppercase: "",
                        spaced: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Collaborator ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TairoTableHeading, {
                        uppercase: "",
                        spaced: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Location")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TairoTableHeading, {
                        uppercase: "",
                        spaced: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Status")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TairoTableHeading, {
                        uppercase: "",
                        spaced: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Completed ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TairoTableHeading, {
                        uppercase: "",
                        spaced: "",
                        class: "text-end"
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
                    if (unref(selected).length > 0) {
                      _push3(ssrRenderComponent(_component_TairoTableRow, { hoverable: false }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_TairoTableCell, {
                              colspan: "6",
                              class: "bg-success-100 text-success-700 dark:bg-success-700 dark:text-success-100 p-4"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(` You have selected ${ssrInterpolate(unref(selected).length)} items of the total ${ssrInterpolate(unref(data)?.total)} items. <a href="#" class="outline-none hover:underline focus:underline"${_scopeId4}>Click here to everything</a>`);
                                } else {
                                  return [
                                    createTextVNode(" You have selected " + toDisplayString(unref(selected).length) + " items of the total " + toDisplayString(unref(data)?.total) + " items. ", 1),
                                    createVNode("a", {
                                      href: "#",
                                      class: "outline-none hover:underline focus:underline"
                                    }, "Click here to everything")
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_TairoTableCell, {
                                colspan: "6",
                                class: "bg-success-100 text-success-700 dark:bg-success-700 dark:text-success-100 p-4"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" You have selected " + toDisplayString(unref(selected).length) + " items of the total " + toDisplayString(unref(data)?.total) + " items. ", 1),
                                  createVNode("a", {
                                    href: "#",
                                    class: "outline-none hover:underline focus:underline"
                                  }, "Click here to everything")
                                ]),
                                _: 1
                              })
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
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
                                  _push5(`<div class="flex items-center"${_scopeId4}>`);
                                  _push5(ssrRenderComponent(_component_BaseCheckbox, {
                                    modelValue: unref(selected),
                                    "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                                    value: item.id,
                                    name: `item-checkbox-${item.id}`,
                                    shape: "rounded",
                                    class: "text-primary-500"
                                  }, null, _parent5, _scopeId4));
                                  _push5(`</div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "flex items-center" }, [
                                      createVNode(_component_BaseCheckbox, {
                                        modelValue: unref(selected),
                                        "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                                        value: item.id,
                                        name: `item-checkbox-${item.id}`,
                                        shape: "rounded",
                                        class: "text-primary-500"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "name"])
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="flex items-center"${_scopeId4}>`);
                                  _push5(ssrRenderComponent(_component_BaseAvatar, {
                                    src: item.picture,
                                    text: item.initials,
                                    class: ("getRandomColor" in _ctx ? _ctx.getRandomColor : unref(getRandomColor))()
                                  }, null, _parent5, _scopeId4));
                                  _push5(`<div class="ms-3 leading-none"${_scopeId4}><h4 class="font-sans text-sm font-medium"${_scopeId4}>${ssrInterpolate(item.username)}</h4><p class="text-muted-400 font-sans text-xs"${_scopeId4}>${ssrInterpolate(item.position)}</p></div></div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "flex items-center" }, [
                                      createVNode(_component_BaseAvatar, {
                                        src: item.picture,
                                        text: item.initials,
                                        class: ("getRandomColor" in _ctx ? _ctx.getRandomColor : unref(getRandomColor))()
                                      }, null, 8, ["src", "text", "class"]),
                                      createVNode("div", { class: "ms-3 leading-none" }, [
                                        createVNode("h4", { class: "font-sans text-sm font-medium" }, toDisplayString(item.username), 1),
                                        createVNode("p", { class: "text-muted-400 font-sans text-xs" }, toDisplayString(item.position), 1)
                                      ])
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
                                  _push5(`${ssrInterpolate(item.location)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.location), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_TairoTableCell, {
                              spaced: "",
                              class: "capitalize"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  if (item.status === "available") {
                                    _push5(ssrRenderComponent(_component_BaseTag, {
                                      color: "success",
                                      flavor: "pastel",
                                      shape: "full",
                                      size: "sm",
                                      class: "font-medium"
                                    }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`${ssrInterpolate(item.status)}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(item.status), 1)
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  } else if (item.status === "new") {
                                    _push5(ssrRenderComponent(_component_BaseTag, {
                                      color: "info",
                                      flavor: "pastel",
                                      shape: "full",
                                      size: "sm",
                                      class: "font-medium"
                                    }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`${ssrInterpolate(item.status)}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(item.status), 1)
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  } else if (item.status === "busy") {
                                    _push5(ssrRenderComponent(_component_BaseTag, {
                                      color: "warning",
                                      flavor: "pastel",
                                      shape: "full",
                                      size: "sm",
                                      class: "font-medium"
                                    }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`${ssrInterpolate(item.status)}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(item.status), 1)
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  } else if (item.status === "offline") {
                                    _push5(ssrRenderComponent(_component_BaseTag, {
                                      color: "muted",
                                      flavor: "pastel",
                                      shape: "full",
                                      size: "sm",
                                      class: "font-medium"
                                    }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`${ssrInterpolate(item.status)}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(item.status), 1)
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                } else {
                                  return [
                                    item.status === "available" ? (openBlock(), createBlock(_component_BaseTag, {
                                      key: 0,
                                      color: "success",
                                      flavor: "pastel",
                                      shape: "full",
                                      size: "sm",
                                      class: "font-medium"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.status), 1)
                                      ]),
                                      _: 2
                                    }, 1024)) : item.status === "new" ? (openBlock(), createBlock(_component_BaseTag, {
                                      key: 1,
                                      color: "info",
                                      flavor: "pastel",
                                      shape: "full",
                                      size: "sm",
                                      class: "font-medium"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.status), 1)
                                      ]),
                                      _: 2
                                    }, 1024)) : item.status === "busy" ? (openBlock(), createBlock(_component_BaseTag, {
                                      key: 2,
                                      color: "warning",
                                      flavor: "pastel",
                                      shape: "full",
                                      size: "sm",
                                      class: "font-medium"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.status), 1)
                                      ]),
                                      _: 2
                                    }, 1024)) : item.status === "offline" ? (openBlock(), createBlock(_component_BaseTag, {
                                      key: 3,
                                      color: "muted",
                                      flavor: "pastel",
                                      shape: "full",
                                      size: "sm",
                                      class: "font-medium"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.status), 1)
                                      ]),
                                      _: 2
                                    }, 1024)) : createCommentVNode("", true)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="flex items-center"${_scopeId4}><div class="relative"${_scopeId4}>`);
                                  _push5(ssrRenderComponent(_component_BaseProgressCircle, {
                                    value: item.completed,
                                    thickness: 1,
                                    size: 50,
                                    class: "text-success-500"
                                  }, null, _parent5, _scopeId4));
                                  _push5(`<span class="absolute start-1/2 top-1/2 z-10 ms-0.5 rtl:ms-0 rtl:me-0.5 -translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 font-sans text-[0.65rem] font-semibold"${_scopeId4}>${ssrInterpolate(item.completed)}% </span></div><span class="text-muted-400 font-sans text-xs"${_scopeId4}> Tasks completed </span></div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "flex items-center" }, [
                                      createVNode("div", { class: "relative" }, [
                                        createVNode(_component_BaseProgressCircle, {
                                          value: item.completed,
                                          thickness: 1,
                                          size: 50,
                                          class: "text-success-500"
                                        }, null, 8, ["value"]),
                                        createVNode("span", { class: "absolute start-1/2 top-1/2 z-10 ms-0.5 rtl:ms-0 rtl:me-0.5 -translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 font-sans text-[0.65rem] font-semibold" }, toDisplayString(item.completed) + "% ", 1)
                                      ]),
                                      createVNode("span", { class: "text-muted-400 font-sans text-xs" }, " Tasks completed ")
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="flex justify-end"${_scopeId4}>`);
                                  _push5(ssrRenderComponent(_component_BaseDropdown, {
                                    flavor: "context",
                                    label: "Dropdown",
                                    orientation: "end",
                                    shape: "smooth"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_BaseDropdownItem, {
                                          to: "#",
                                          title: "User",
                                          text: "View details",
                                          shape: "smooth"
                                        }, null, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_component_BaseDropdownItem, {
                                            to: "#",
                                            title: "User",
                                            text: "View details",
                                            shape: "smooth"
                                          })
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(`</div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "flex justify-end" }, [
                                      createVNode(_component_BaseDropdown, {
                                        flavor: "context",
                                        label: "Dropdown",
                                        orientation: "end",
                                        shape: "smooth"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_BaseDropdownItem, {
                                            to: "#",
                                            title: "User",
                                            text: "View details",
                                            shape: "smooth"
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ])
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
                                      modelValue: unref(selected),
                                      "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                                      value: item.id,
                                      name: `item-checkbox-${item.id}`,
                                      shape: "rounded",
                                      class: "text-primary-500"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "name"])
                                  ])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, { spaced: "" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode(_component_BaseAvatar, {
                                      src: item.picture,
                                      text: item.initials,
                                      class: ("getRandomColor" in _ctx ? _ctx.getRandomColor : unref(getRandomColor))()
                                    }, null, 8, ["src", "text", "class"]),
                                    createVNode("div", { class: "ms-3 leading-none" }, [
                                      createVNode("h4", { class: "font-sans text-sm font-medium" }, toDisplayString(item.username), 1),
                                      createVNode("p", { class: "text-muted-400 font-sans text-xs" }, toDisplayString(item.position), 1)
                                    ])
                                  ])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, {
                                light: "",
                                spaced: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.location), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, {
                                spaced: "",
                                class: "capitalize"
                              }, {
                                default: withCtx(() => [
                                  item.status === "available" ? (openBlock(), createBlock(_component_BaseTag, {
                                    key: 0,
                                    color: "success",
                                    flavor: "pastel",
                                    shape: "full",
                                    size: "sm",
                                    class: "font-medium"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.status), 1)
                                    ]),
                                    _: 2
                                  }, 1024)) : item.status === "new" ? (openBlock(), createBlock(_component_BaseTag, {
                                    key: 1,
                                    color: "info",
                                    flavor: "pastel",
                                    shape: "full",
                                    size: "sm",
                                    class: "font-medium"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.status), 1)
                                    ]),
                                    _: 2
                                  }, 1024)) : item.status === "busy" ? (openBlock(), createBlock(_component_BaseTag, {
                                    key: 2,
                                    color: "warning",
                                    flavor: "pastel",
                                    shape: "full",
                                    size: "sm",
                                    class: "font-medium"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.status), 1)
                                    ]),
                                    _: 2
                                  }, 1024)) : item.status === "offline" ? (openBlock(), createBlock(_component_BaseTag, {
                                    key: 3,
                                    color: "muted",
                                    flavor: "pastel",
                                    shape: "full",
                                    size: "sm",
                                    class: "font-medium"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.status), 1)
                                    ]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, { spaced: "" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(_component_BaseProgressCircle, {
                                        value: item.completed,
                                        thickness: 1,
                                        size: 50,
                                        class: "text-success-500"
                                      }, null, 8, ["value"]),
                                      createVNode("span", { class: "absolute start-1/2 top-1/2 z-10 ms-0.5 rtl:ms-0 rtl:me-0.5 -translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 font-sans text-[0.65rem] font-semibold" }, toDisplayString(item.completed) + "% ", 1)
                                    ]),
                                    createVNode("span", { class: "text-muted-400 font-sans text-xs" }, " Tasks completed ")
                                  ])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, { spaced: "" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex justify-end" }, [
                                    createVNode(_component_BaseDropdown, {
                                      flavor: "context",
                                      label: "Dropdown",
                                      orientation: "end",
                                      shape: "smooth"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_BaseDropdownItem, {
                                          to: "#",
                                          title: "User",
                                          text: "View details",
                                          shape: "smooth"
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ])
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
                      unref(selected).length > 0 ? (openBlock(), createBlock(_component_TairoTableRow, {
                        key: 0,
                        hoverable: false
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_TairoTableCell, {
                            colspan: "6",
                            class: "bg-success-100 text-success-700 dark:bg-success-700 dark:text-success-100 p-4"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" You have selected " + toDisplayString(unref(selected).length) + " items of the total " + toDisplayString(unref(data)?.total) + " items. ", 1),
                              createVNode("a", {
                                href: "#",
                                class: "outline-none hover:underline focus:underline"
                              }, "Click here to everything")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(data)?.data, (item) => {
                        return openBlock(), createBlock(_component_TairoTableRow, {
                          key: item.id
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center" }, [
                                  createVNode(_component_BaseCheckbox, {
                                    modelValue: unref(selected),
                                    "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                                    value: item.id,
                                    name: `item-checkbox-${item.id}`,
                                    shape: "rounded",
                                    class: "text-primary-500"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "name"])
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center" }, [
                                  createVNode(_component_BaseAvatar, {
                                    src: item.picture,
                                    text: item.initials,
                                    class: ("getRandomColor" in _ctx ? _ctx.getRandomColor : unref(getRandomColor))()
                                  }, null, 8, ["src", "text", "class"]),
                                  createVNode("div", { class: "ms-3 leading-none" }, [
                                    createVNode("h4", { class: "font-sans text-sm font-medium" }, toDisplayString(item.username), 1),
                                    createVNode("p", { class: "text-muted-400 font-sans text-xs" }, toDisplayString(item.position), 1)
                                  ])
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TairoTableCell, {
                              light: "",
                              spaced: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.location), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TairoTableCell, {
                              spaced: "",
                              class: "capitalize"
                            }, {
                              default: withCtx(() => [
                                item.status === "available" ? (openBlock(), createBlock(_component_BaseTag, {
                                  key: 0,
                                  color: "success",
                                  flavor: "pastel",
                                  shape: "full",
                                  size: "sm",
                                  class: "font-medium"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.status), 1)
                                  ]),
                                  _: 2
                                }, 1024)) : item.status === "new" ? (openBlock(), createBlock(_component_BaseTag, {
                                  key: 1,
                                  color: "info",
                                  flavor: "pastel",
                                  shape: "full",
                                  size: "sm",
                                  class: "font-medium"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.status), 1)
                                  ]),
                                  _: 2
                                }, 1024)) : item.status === "busy" ? (openBlock(), createBlock(_component_BaseTag, {
                                  key: 2,
                                  color: "warning",
                                  flavor: "pastel",
                                  shape: "full",
                                  size: "sm",
                                  class: "font-medium"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.status), 1)
                                  ]),
                                  _: 2
                                }, 1024)) : item.status === "offline" ? (openBlock(), createBlock(_component_BaseTag, {
                                  key: 3,
                                  color: "muted",
                                  flavor: "pastel",
                                  shape: "full",
                                  size: "sm",
                                  class: "font-medium"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.status), 1)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center" }, [
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_BaseProgressCircle, {
                                      value: item.completed,
                                      thickness: 1,
                                      size: 50,
                                      class: "text-success-500"
                                    }, null, 8, ["value"]),
                                    createVNode("span", { class: "absolute start-1/2 top-1/2 z-10 ms-0.5 rtl:ms-0 rtl:me-0.5 -translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 font-sans text-[0.65rem] font-semibold" }, toDisplayString(item.completed) + "% ", 1)
                                  ]),
                                  createVNode("span", { class: "text-muted-400 font-sans text-xs" }, " Tasks completed ")
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex justify-end" }, [
                                  createVNode(_component_BaseDropdown, {
                                    flavor: "context",
                                    label: "Dropdown",
                                    orientation: "end",
                                    shape: "smooth"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_BaseDropdownItem, {
                                        to: "#",
                                        title: "User",
                                        text: "View details",
                                        shape: "smooth"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
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
                    createVNode(_component_TairoTable, {
                      shape: "rounded",
                      scrollable: false
                    }, {
                      header: withCtx(() => [
                        createVNode(_component_TairoTableHeading, {
                          uppercase: "",
                          spaced: "",
                          class: "p-4"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode(_component_BaseCheckbox, {
                                "model-value": unref(isAllVisibleSelected),
                                indeterminate: unref(selected).length > 0 && !unref(isAllVisibleSelected),
                                name: "table-1-main",
                                shape: "rounded",
                                class: "text-primary-500",
                                onClick: toggleAllVisibleSelection
                              }, null, 8, ["model-value", "indeterminate"])
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TairoTableHeading, {
                          uppercase: "",
                          spaced: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Collaborator ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TairoTableHeading, {
                          uppercase: "",
                          spaced: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Location")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TairoTableHeading, {
                          uppercase: "",
                          spaced: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Status")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TairoTableHeading, {
                          uppercase: "",
                          spaced: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Completed ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TairoTableHeading, {
                          uppercase: "",
                          spaced: "",
                          class: "text-end"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Action")
                          ]),
                          _: 1
                        })
                      ]),
                      default: withCtx(() => [
                        unref(selected).length > 0 ? (openBlock(), createBlock(_component_TairoTableRow, {
                          key: 0,
                          hoverable: false
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_TairoTableCell, {
                              colspan: "6",
                              class: "bg-success-100 text-success-700 dark:bg-success-700 dark:text-success-100 p-4"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" You have selected " + toDisplayString(unref(selected).length) + " items of the total " + toDisplayString(unref(data)?.total) + " items. ", 1),
                                createVNode("a", {
                                  href: "#",
                                  class: "outline-none hover:underline focus:underline"
                                }, "Click here to everything")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(data)?.data, (item) => {
                          return openBlock(), createBlock(_component_TairoTableRow, {
                            key: item.id
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_TairoTableCell, { spaced: "" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode(_component_BaseCheckbox, {
                                      modelValue: unref(selected),
                                      "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                                      value: item.id,
                                      name: `item-checkbox-${item.id}`,
                                      shape: "rounded",
                                      class: "text-primary-500"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "name"])
                                  ])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, { spaced: "" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode(_component_BaseAvatar, {
                                      src: item.picture,
                                      text: item.initials,
                                      class: ("getRandomColor" in _ctx ? _ctx.getRandomColor : unref(getRandomColor))()
                                    }, null, 8, ["src", "text", "class"]),
                                    createVNode("div", { class: "ms-3 leading-none" }, [
                                      createVNode("h4", { class: "font-sans text-sm font-medium" }, toDisplayString(item.username), 1),
                                      createVNode("p", { class: "text-muted-400 font-sans text-xs" }, toDisplayString(item.position), 1)
                                    ])
                                  ])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, {
                                light: "",
                                spaced: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.location), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, {
                                spaced: "",
                                class: "capitalize"
                              }, {
                                default: withCtx(() => [
                                  item.status === "available" ? (openBlock(), createBlock(_component_BaseTag, {
                                    key: 0,
                                    color: "success",
                                    flavor: "pastel",
                                    shape: "full",
                                    size: "sm",
                                    class: "font-medium"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.status), 1)
                                    ]),
                                    _: 2
                                  }, 1024)) : item.status === "new" ? (openBlock(), createBlock(_component_BaseTag, {
                                    key: 1,
                                    color: "info",
                                    flavor: "pastel",
                                    shape: "full",
                                    size: "sm",
                                    class: "font-medium"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.status), 1)
                                    ]),
                                    _: 2
                                  }, 1024)) : item.status === "busy" ? (openBlock(), createBlock(_component_BaseTag, {
                                    key: 2,
                                    color: "warning",
                                    flavor: "pastel",
                                    shape: "full",
                                    size: "sm",
                                    class: "font-medium"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.status), 1)
                                    ]),
                                    _: 2
                                  }, 1024)) : item.status === "offline" ? (openBlock(), createBlock(_component_BaseTag, {
                                    key: 3,
                                    color: "muted",
                                    flavor: "pastel",
                                    shape: "full",
                                    size: "sm",
                                    class: "font-medium"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.status), 1)
                                    ]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, { spaced: "" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(_component_BaseProgressCircle, {
                                        value: item.completed,
                                        thickness: 1,
                                        size: 50,
                                        class: "text-success-500"
                                      }, null, 8, ["value"]),
                                      createVNode("span", { class: "absolute start-1/2 top-1/2 z-10 ms-0.5 rtl:ms-0 rtl:me-0.5 -translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 font-sans text-[0.65rem] font-semibold" }, toDisplayString(item.completed) + "% ", 1)
                                    ]),
                                    createVNode("span", { class: "text-muted-400 font-sans text-xs" }, " Tasks completed ")
                                  ])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_TairoTableCell, { spaced: "" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex justify-end" }, [
                                    createVNode(_component_BaseDropdown, {
                                      flavor: "context",
                                      label: "Dropdown",
                                      orientation: "end",
                                      shape: "smooth"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_BaseDropdownItem, {
                                          to: "#",
                                          title: "User",
                                          text: "View details",
                                          shape: "smooth"
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/table-list-1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=table-list-1-889c2307.mjs.map
