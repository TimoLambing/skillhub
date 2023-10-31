import { j as _sfc_main$C, _ as _sfc_main$p, i as _sfc_main$D, d as _sfc_main$x, Q as _sfc_main$3, b as _sfc_main$o, f as __nuxt_component_2 } from '../server.mjs';
import { _ as _sfc_main$1 } from './TairoFormGroup-3552ebb0.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$2 } from './BaseDropdownItem-864908ca.mjs';
import { _ as __nuxt_component_3 } from './BaseDropdownDivider-258f8823.mjs';
import { _ as _sfc_main$4 } from './BaseButtonIcon-6150946c.mjs';
import { _ as _sfc_main$5 } from './TairoFormSave-f466246e.mjs';
import { defineComponent, withAsyncContext, mergeProps, withCtx, createTextVNode, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-45c1546c.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1 } from './placeholder-search-2-dark-e4206700.mjs';
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
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "experience",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/profile", "$9D0DOn8fc9")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseText = _sfc_main$D;
      const _component_BaseButton = _sfc_main$x;
      const _component_BasePlaceholderPage = _sfc_main$3;
      const _component_TairoFormGroup = _sfc_main$1;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseDropdown = _sfc_main$1$1;
      const _component_BaseDropdownDivider = __nuxt_component_3;
      const _component_BaseDropdownItem = _sfc_main$2;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseButtonIcon = _sfc_main$4;
      const _component_TairoFormSave = _sfc_main$5;
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "w-full pb-16" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between p-4"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              tag: "h2",
              size: "sm",
              weight: "medium",
              lead: "normal",
              class: "uppercase tracking-wider"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Work Experience `);
                } else {
                  return [
                    createTextVNode(" Work Experience ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Edit your work experience info `);
                } else {
                  return [
                    createTextVNode(" Edit your work experience info ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              class: "w-24",
              to: "/layouts/profile"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Cancel`);
                } else {
                  return [
                    createTextVNode("Cancel")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "primary",
              class: "w-24"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Save`);
                } else {
                  return [
                    createTextVNode("Save")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="p-4"${_scopeId}>`);
            if (!unref(data)) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BasePlaceholderPage, {
                title: "No experiences",
                subtitle: "Looks like you didn't add any experience yet. Share your experience to improve your profile.",
                class: "scale-90"
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
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_BaseButton, { class: "mt-4 w-40" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Add Experience`);
                        } else {
                          return [
                            createTextVNode("Add Experience")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_BaseButton, { class: "mt-4 w-40" }, {
                        default: withCtx(() => [
                          createTextVNode("Add Experience")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div class="mx-auto max-w-lg space-y-12 py-8"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_TairoFormGroup, {
                label: "Previous Experiences",
                sublabel: "This will help others assess your experience"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="space-y-8"${_scopeId2}><!--[-->`);
                    ssrRenderList(unref(data).personalInfo.experiences, (item) => {
                      _push3(`<div class="flex w-full items-center gap-2"${_scopeId2}><img${ssrRenderAttr("src", item.logo)}${ssrRenderAttr("alt", item.company)} class="border-muted-200 dark:border-muted-600 dark:bg-muted-700 max-w-[50px] rounded-full border bg-white"${_scopeId2}><div${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseHeading, {
                        tag: "h3",
                        size: "sm",
                        weight: "medium"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(item.company)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(item.company), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_BaseParagraph, {
                        size: "xs",
                        class: "text-muted-400"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<span${_scopeId3}>${ssrInterpolate(item.period)}</span>`);
                          } else {
                            return [
                              createVNode("span", null, toDisplayString(item.period), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_BaseParagraph, {
                        size: "xs",
                        class: "text-primary-500"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<span${_scopeId3}>${ssrInterpolate(item.position)}</span>`);
                          } else {
                            return [
                              createVNode("span", null, toDisplayString(item.position), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div><div class="ms-auto"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseDropdown, {
                        flavor: "context",
                        label: "Dropdown",
                        orientation: "end",
                        size: "md",
                        class: "z-20",
                        shape: "curved"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_BaseDropdownDivider, null, null, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_BaseDropdownItem, {
                              to: "#",
                              title: "Edit",
                              text: "Edit this experience"
                            }, {
                              start: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Icon, {
                                    name: "ph:pencil-duotone",
                                    class: "me-2 block h-5 w-5"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Icon, {
                                      name: "ph:pencil-duotone",
                                      class: "me-2 block h-5 w-5"
                                    })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_BaseDropdownItem, {
                              to: "#",
                              title: "Delete",
                              text: "Delete this experience"
                            }, {
                              start: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Icon, {
                                    name: "ph:trash-duotone",
                                    class: "me-2 block h-5 w-5"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Icon, {
                                      name: "ph:trash-duotone",
                                      class: "me-2 block h-5 w-5"
                                    })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_BaseDropdownDivider),
                              createVNode(_component_BaseDropdownItem, {
                                to: "#",
                                title: "Edit",
                                text: "Edit this experience"
                              }, {
                                start: withCtx(() => [
                                  createVNode(_component_Icon, {
                                    name: "ph:pencil-duotone",
                                    class: "me-2 block h-5 w-5"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BaseDropdownItem, {
                                to: "#",
                                title: "Delete",
                                text: "Delete this experience"
                              }, {
                                start: withCtx(() => [
                                  createVNode(_component_Icon, {
                                    name: "ph:trash-duotone",
                                    class: "me-2 block h-5 w-5"
                                  })
                                ]),
                                _: 1
                              })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div></div>`);
                    });
                    _push3(`<!--]--></div><div class="border-muted-200 dark:border-muted-700 mt-8 flex w-full items-center gap-2 border-t pt-8"${_scopeId2}><div class="bg-muted-100 dark:bg-muted-700/60 text-muted-400 flex h-[50px] w-[50px] items-center justify-center rounded-full"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:suitcase-duotone",
                      class: "h-5 w-5"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BaseHeading, {
                      tag: "h3",
                      size: "sm",
                      weight: "medium"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` New Experience `);
                        } else {
                          return [
                            createTextVNode(" New Experience ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseParagraph, {
                      size: "xs",
                      class: "text-muted-400"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span${_scopeId3}>Add a new work experience item</span>`);
                        } else {
                          return [
                            createVNode("span", null, "Add a new work experience item")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="ms-auto"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BaseButtonIcon, {
                      shape: "full",
                      size: "sm"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "lucide:plus",
                            class: "h-4 w-4"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "lucide:plus",
                              class: "h-4 w-4"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "space-y-8" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(data).personalInfo.experiences, (item) => {
                          return openBlock(), createBlock("div", {
                            key: item.company,
                            class: "flex w-full items-center gap-2"
                          }, [
                            createVNode("img", {
                              src: item.logo,
                              alt: item.company,
                              class: "border-muted-200 dark:border-muted-600 dark:bg-muted-700 max-w-[50px] rounded-full border bg-white"
                            }, null, 8, ["src", "alt"]),
                            createVNode("div", null, [
                              createVNode(_component_BaseHeading, {
                                tag: "h3",
                                size: "sm",
                                weight: "medium"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.company), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_BaseParagraph, {
                                size: "xs",
                                class: "text-muted-400"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, toDisplayString(item.period), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_BaseParagraph, {
                                size: "xs",
                                class: "text-primary-500"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, toDisplayString(item.position), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            createVNode("div", { class: "ms-auto" }, [
                              createVNode(_component_BaseDropdown, {
                                flavor: "context",
                                label: "Dropdown",
                                orientation: "end",
                                size: "md",
                                class: "z-20",
                                shape: "curved"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_BaseDropdownDivider),
                                  createVNode(_component_BaseDropdownItem, {
                                    to: "#",
                                    title: "Edit",
                                    text: "Edit this experience"
                                  }, {
                                    start: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "ph:pencil-duotone",
                                        class: "me-2 block h-5 w-5"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_BaseDropdownItem, {
                                    to: "#",
                                    title: "Delete",
                                    text: "Delete this experience"
                                  }, {
                                    start: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "ph:trash-duotone",
                                        class: "me-2 block h-5 w-5"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ]);
                        }), 128))
                      ]),
                      createVNode("div", { class: "border-muted-200 dark:border-muted-700 mt-8 flex w-full items-center gap-2 border-t pt-8" }, [
                        createVNode("div", { class: "bg-muted-100 dark:bg-muted-700/60 text-muted-400 flex h-[50px] w-[50px] items-center justify-center rounded-full" }, [
                          createVNode(_component_Icon, {
                            name: "ph:suitcase-duotone",
                            class: "h-5 w-5"
                          })
                        ]),
                        createVNode("div", null, [
                          createVNode(_component_BaseHeading, {
                            tag: "h3",
                            size: "sm",
                            weight: "medium"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" New Experience ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_BaseParagraph, {
                            size: "xs",
                            class: "text-muted-400"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, "Add a new work experience item")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "ms-auto" }, [
                          createVNode(_component_BaseButtonIcon, {
                            shape: "full",
                            size: "sm"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "lucide:plus",
                                class: "h-4 w-4"
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between p-4" }, [
                createVNode("div", null, [
                  createVNode(_component_BaseHeading, {
                    tag: "h2",
                    size: "sm",
                    weight: "medium",
                    lead: "normal",
                    class: "uppercase tracking-wider"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Work Experience ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseText, {
                    size: "xs",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Edit your work experience info ")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode(_component_BaseButton, {
                    class: "w-24",
                    to: "/layouts/profile"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Cancel")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseButton, {
                    color: "primary",
                    class: "w-24"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Save")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "p-4" }, [
                !unref(data) ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode(_component_BasePlaceholderPage, {
                    title: "No experiences",
                    subtitle: "Looks like you didn't add any experience yet. Share your experience to improve your profile.",
                    class: "scale-90"
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
                    default: withCtx(() => [
                      createVNode(_component_BaseButton, { class: "mt-4 w-40" }, {
                        default: withCtx(() => [
                          createTextVNode("Add Experience")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "mx-auto max-w-lg space-y-12 py-8"
                }, [
                  createVNode(_component_TairoFormGroup, {
                    label: "Previous Experiences",
                    sublabel: "This will help others assess your experience"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "space-y-8" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(data).personalInfo.experiences, (item) => {
                          return openBlock(), createBlock("div", {
                            key: item.company,
                            class: "flex w-full items-center gap-2"
                          }, [
                            createVNode("img", {
                              src: item.logo,
                              alt: item.company,
                              class: "border-muted-200 dark:border-muted-600 dark:bg-muted-700 max-w-[50px] rounded-full border bg-white"
                            }, null, 8, ["src", "alt"]),
                            createVNode("div", null, [
                              createVNode(_component_BaseHeading, {
                                tag: "h3",
                                size: "sm",
                                weight: "medium"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.company), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_BaseParagraph, {
                                size: "xs",
                                class: "text-muted-400"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, toDisplayString(item.period), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_BaseParagraph, {
                                size: "xs",
                                class: "text-primary-500"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, toDisplayString(item.position), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            createVNode("div", { class: "ms-auto" }, [
                              createVNode(_component_BaseDropdown, {
                                flavor: "context",
                                label: "Dropdown",
                                orientation: "end",
                                size: "md",
                                class: "z-20",
                                shape: "curved"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_BaseDropdownDivider),
                                  createVNode(_component_BaseDropdownItem, {
                                    to: "#",
                                    title: "Edit",
                                    text: "Edit this experience"
                                  }, {
                                    start: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "ph:pencil-duotone",
                                        class: "me-2 block h-5 w-5"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_BaseDropdownItem, {
                                    to: "#",
                                    title: "Delete",
                                    text: "Delete this experience"
                                  }, {
                                    start: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "ph:trash-duotone",
                                        class: "me-2 block h-5 w-5"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ]);
                        }), 128))
                      ]),
                      createVNode("div", { class: "border-muted-200 dark:border-muted-700 mt-8 flex w-full items-center gap-2 border-t pt-8" }, [
                        createVNode("div", { class: "bg-muted-100 dark:bg-muted-700/60 text-muted-400 flex h-[50px] w-[50px] items-center justify-center rounded-full" }, [
                          createVNode(_component_Icon, {
                            name: "ph:suitcase-duotone",
                            class: "h-5 w-5"
                          })
                        ]),
                        createVNode("div", null, [
                          createVNode(_component_BaseHeading, {
                            tag: "h3",
                            size: "sm",
                            weight: "medium"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" New Experience ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_BaseParagraph, {
                            size: "xs",
                            class: "text-muted-400"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, "Add a new work experience item")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "ms-auto" }, [
                          createVNode(_component_BaseButtonIcon, {
                            shape: "full",
                            size: "sm"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "lucide:plus",
                                class: "h-4 w-4"
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_TairoFormSave, null, null, _parent));
      _push(`</form>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/profile-edit/experience.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=experience-a43daa7b.mjs.map
