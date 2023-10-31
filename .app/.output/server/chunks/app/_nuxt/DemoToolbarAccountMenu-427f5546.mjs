import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { d as _sfc_main$x, e as __nuxt_component_0$5 } from '../server.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, createTextVNode, Transition, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './2-942b7bb5.mjs';
import { _ as _imports_2 } from './3-e6d3708e.mjs';
import { _ as _imports_2$1 } from './9-ba06bafc.mjs';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import 'vue-bundle-renderer/runtime';
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
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@vee-validate/zod';
import 'vee-validate';
import 'zod';
import '@vue/shared';
import 'chroma-js';
import 'tailwindcss/colors.js';

const _imports_3 = "" + publicAssetsURL("img/avatars/14.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoToolbarAccountMenu",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButton = _sfc_main$x;
      const _component_NuxtLink = __nuxt_component_0$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "group inline-flex items-center justify-center text-right" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Menu), {
        as: "div",
        class: "relative h-9 w-9 text-left"
      }, {
        default: withCtx(({ close }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MenuButton), { as: "template" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<button type="button" class="group-hover:ring-primary-500 dark:ring-offset-muted-900 inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4"${_scopeId2}><div class="relative inline-flex h-9 w-9 items-center justify-center rounded-full"${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""${_scopeId2}></div></button>`);
                } else {
                  return [
                    createVNode("button", {
                      type: "button",
                      class: "group-hover:ring-primary-500 dark:ring-offset-muted-900 inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4"
                    }, [
                      createVNode("div", { class: "relative inline-flex h-9 w-9 items-center justify-center rounded-full" }, [
                        createVNode("img", {
                          src: _imports_0,
                          class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                          alt: ""
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(``);
            _push2(ssrRenderComponent(unref(MenuItems), { class: "divide-muted-100 border-muted-200 dark:divide-muted-700 dark:border-muted-700 dark:bg-muted-800 absolute end-0 mt-2 w-64 origin-top-right divide-y rounded-md border bg-white shadow-lg focus:outline-none" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-6 text-center"${_scopeId2}><div class="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full"${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""${_scopeId2}></div><div class="mt-3"${_scopeId2}><h6 class="font-heading text-muted-800 text-sm font-medium dark:text-white"${_scopeId2}> Maya Rosselini </h6><p class="text-muted-400 mb-4 font-sans text-xs"${_scopeId2}>maya@tairo.io</p>`);
                  _push3(ssrRenderComponent(_component_BaseButton, {
                    to: "/layouts/profile-edit",
                    shape: "curved",
                    class: "w-full",
                    onClick: close
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Manage Account`);
                      } else {
                        return [
                          createTextVNode("Manage Account")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div></div><div class="px-6 py-1.5"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(MenuItem), { as: "div" }, {
                    default: withCtx(({ active }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtLink, {
                          to: "#",
                          class: ["group flex w-full items-center rounded-md p-2 text-sm transition-colors duration-300", [
                            active ? "bg-muted-100 dark:bg-muted-700 text-primary-500" : "text-muted-500"
                          ]],
                          onClick: close
                        }, {
                          default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="relative inline-flex h-9 w-9 items-center justify-center rounded-full"${_scopeId4}><img${ssrRenderAttr("src", _imports_2)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""${_scopeId4}></div><div class="ms-2"${_scopeId4}><h6 class="font-heading text-muted-800 text-xs font-medium leading-none dark:text-white"${_scopeId4}> Mike Miller </h6><p class="text-muted-400 font-sans text-xs"${_scopeId4}>mike@tairo.io</p></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "relative inline-flex h-9 w-9 items-center justify-center rounded-full" }, [
                                  createVNode("img", {
                                    src: _imports_2,
                                    class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                                    alt: ""
                                  })
                                ]),
                                createVNode("div", { class: "ms-2" }, [
                                  createVNode("h6", { class: "font-heading text-muted-800 text-xs font-medium leading-none dark:text-white" }, " Mike Miller "),
                                  createVNode("p", { class: "text-muted-400 font-sans text-xs" }, "mike@tairo.io")
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtLink, {
                            to: "#",
                            class: ["group flex w-full items-center rounded-md p-2 text-sm transition-colors duration-300", [
                              active ? "bg-muted-100 dark:bg-muted-700 text-primary-500" : "text-muted-500"
                            ]],
                            onClickPassive: close
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "relative inline-flex h-9 w-9 items-center justify-center rounded-full" }, [
                                createVNode("img", {
                                  src: _imports_2,
                                  class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                                  alt: ""
                                })
                              ]),
                              createVNode("div", { class: "ms-2" }, [
                                createVNode("h6", { class: "font-heading text-muted-800 text-xs font-medium leading-none dark:text-white" }, " Mike Miller "),
                                createVNode("p", { class: "text-muted-400 font-sans text-xs" }, "mike@tairo.io")
                              ])
                            ]),
                            _: 2
                          }, 1032, ["class", "onClickPassive"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(MenuItem), { as: "div" }, {
                    default: withCtx(({ active }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtLink, {
                          to: "#",
                          class: ["group flex w-full items-center rounded-md p-2 text-sm transition-colors duration-300", [
                            active ? "bg-muted-100 dark:bg-muted-700 text-primary-500" : "text-muted-500"
                          ]],
                          onClick: close
                        }, {
                          default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="relative inline-flex h-9 w-9 items-center justify-center rounded-full"${_scopeId4}><img${ssrRenderAttr("src", _imports_2$1)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""${_scopeId4}></div><div class="ms-2"${_scopeId4}><h6 class="font-heading text-muted-800 text-xs font-medium leading-none dark:text-white"${_scopeId4}> Claire Baker </h6><p class="text-muted-400 font-sans text-xs"${_scopeId4}> claire@tairo.io </p></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "relative inline-flex h-9 w-9 items-center justify-center rounded-full" }, [
                                  createVNode("img", {
                                    src: _imports_2$1,
                                    class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                                    alt: ""
                                  })
                                ]),
                                createVNode("div", { class: "ms-2" }, [
                                  createVNode("h6", { class: "font-heading text-muted-800 text-xs font-medium leading-none dark:text-white" }, " Claire Baker "),
                                  createVNode("p", { class: "text-muted-400 font-sans text-xs" }, " claire@tairo.io ")
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtLink, {
                            to: "#",
                            class: ["group flex w-full items-center rounded-md p-2 text-sm transition-colors duration-300", [
                              active ? "bg-muted-100 dark:bg-muted-700 text-primary-500" : "text-muted-500"
                            ]],
                            onClickPassive: close
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "relative inline-flex h-9 w-9 items-center justify-center rounded-full" }, [
                                createVNode("img", {
                                  src: _imports_2$1,
                                  class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                                  alt: ""
                                })
                              ]),
                              createVNode("div", { class: "ms-2" }, [
                                createVNode("h6", { class: "font-heading text-muted-800 text-xs font-medium leading-none dark:text-white" }, " Claire Baker "),
                                createVNode("p", { class: "text-muted-400 font-sans text-xs" }, " claire@tairo.io ")
                              ])
                            ]),
                            _: 2
                          }, 1032, ["class", "onClickPassive"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(MenuItem), { as: "div" }, {
                    default: withCtx(({ active }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtLink, {
                          to: "#",
                          class: ["group flex w-full items-center rounded-md p-2 text-sm transition-colors duration-300", [
                            active ? "bg-muted-100 dark:bg-muted-700 text-primary-500" : "text-muted-500"
                          ]],
                          onClick: close
                        }, {
                          default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="relative inline-flex h-9 w-9 items-center justify-center rounded-full"${_scopeId4}><img${ssrRenderAttr("src", _imports_3)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""${_scopeId4}></div><div class="ms-2"${_scopeId4}><h6 class="font-heading text-muted-800 text-xs font-medium leading-none dark:text-white"${_scopeId4}> Alan Baxter </h6><p class="text-muted-400 font-sans text-xs"${_scopeId4}>alan@tairo.io</p></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "relative inline-flex h-9 w-9 items-center justify-center rounded-full" }, [
                                  createVNode("img", {
                                    src: _imports_3,
                                    class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                                    alt: ""
                                  })
                                ]),
                                createVNode("div", { class: "ms-2" }, [
                                  createVNode("h6", { class: "font-heading text-muted-800 text-xs font-medium leading-none dark:text-white" }, " Alan Baxter "),
                                  createVNode("p", { class: "text-muted-400 font-sans text-xs" }, "alan@tairo.io")
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtLink, {
                            to: "#",
                            class: ["group flex w-full items-center rounded-md p-2 text-sm transition-colors duration-300", [
                              active ? "bg-muted-100 dark:bg-muted-700 text-primary-500" : "text-muted-500"
                            ]],
                            onClickPassive: close
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "relative inline-flex h-9 w-9 items-center justify-center rounded-full" }, [
                                createVNode("img", {
                                  src: _imports_3,
                                  class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                                  alt: ""
                                })
                              ]),
                              createVNode("div", { class: "ms-2" }, [
                                createVNode("h6", { class: "font-heading text-muted-800 text-xs font-medium leading-none dark:text-white" }, " Alan Baxter "),
                                createVNode("p", { class: "text-muted-400 font-sans text-xs" }, "alan@tairo.io")
                              ])
                            ]),
                            _: 2
                          }, 1032, ["class", "onClickPassive"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="p-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseButton, {
                    onClick: close,
                    shape: "curved",
                    class: "w-full"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Logout `);
                      } else {
                        return [
                          createTextVNode(" Logout ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-6 text-center" }, [
                      createVNode("div", { class: "relative mx-auto flex h-20 w-20 items-center justify-center rounded-full" }, [
                        createVNode("img", {
                          src: _imports_0,
                          class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                          alt: ""
                        })
                      ]),
                      createVNode("div", { class: "mt-3" }, [
                        createVNode("h6", { class: "font-heading text-muted-800 text-sm font-medium dark:text-white" }, " Maya Rosselini "),
                        createVNode("p", { class: "text-muted-400 mb-4 font-sans text-xs" }, "maya@tairo.io"),
                        createVNode(_component_BaseButton, {
                          to: "/layouts/profile-edit",
                          shape: "curved",
                          class: "w-full",
                          onClickPassive: close
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Manage Account")
                          ]),
                          _: 2
                        }, 1032, ["onClickPassive"])
                      ])
                    ]),
                    createVNode("div", { class: "px-6 py-1.5" }, [
                      createVNode(unref(MenuItem), { as: "div" }, {
                        default: withCtx(({ active }) => [
                          createVNode(_component_NuxtLink, {
                            to: "#",
                            class: ["group flex w-full items-center rounded-md p-2 text-sm transition-colors duration-300", [
                              active ? "bg-muted-100 dark:bg-muted-700 text-primary-500" : "text-muted-500"
                            ]],
                            onClickPassive: close
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "relative inline-flex h-9 w-9 items-center justify-center rounded-full" }, [
                                createVNode("img", {
                                  src: _imports_2,
                                  class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                                  alt: ""
                                })
                              ]),
                              createVNode("div", { class: "ms-2" }, [
                                createVNode("h6", { class: "font-heading text-muted-800 text-xs font-medium leading-none dark:text-white" }, " Mike Miller "),
                                createVNode("p", { class: "text-muted-400 font-sans text-xs" }, "mike@tairo.io")
                              ])
                            ]),
                            _: 2
                          }, 1032, ["class", "onClickPassive"])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(MenuItem), { as: "div" }, {
                        default: withCtx(({ active }) => [
                          createVNode(_component_NuxtLink, {
                            to: "#",
                            class: ["group flex w-full items-center rounded-md p-2 text-sm transition-colors duration-300", [
                              active ? "bg-muted-100 dark:bg-muted-700 text-primary-500" : "text-muted-500"
                            ]],
                            onClickPassive: close
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "relative inline-flex h-9 w-9 items-center justify-center rounded-full" }, [
                                createVNode("img", {
                                  src: _imports_2$1,
                                  class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                                  alt: ""
                                })
                              ]),
                              createVNode("div", { class: "ms-2" }, [
                                createVNode("h6", { class: "font-heading text-muted-800 text-xs font-medium leading-none dark:text-white" }, " Claire Baker "),
                                createVNode("p", { class: "text-muted-400 font-sans text-xs" }, " claire@tairo.io ")
                              ])
                            ]),
                            _: 2
                          }, 1032, ["class", "onClickPassive"])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(MenuItem), { as: "div" }, {
                        default: withCtx(({ active }) => [
                          createVNode(_component_NuxtLink, {
                            to: "#",
                            class: ["group flex w-full items-center rounded-md p-2 text-sm transition-colors duration-300", [
                              active ? "bg-muted-100 dark:bg-muted-700 text-primary-500" : "text-muted-500"
                            ]],
                            onClickPassive: close
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "relative inline-flex h-9 w-9 items-center justify-center rounded-full" }, [
                                createVNode("img", {
                                  src: _imports_3,
                                  class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                                  alt: ""
                                })
                              ]),
                              createVNode("div", { class: "ms-2" }, [
                                createVNode("h6", { class: "font-heading text-muted-800 text-xs font-medium leading-none dark:text-white" }, " Alan Baxter "),
                                createVNode("p", { class: "text-muted-400 font-sans text-xs" }, "alan@tairo.io")
                              ])
                            ]),
                            _: 2
                          }, 1032, ["class", "onClickPassive"])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    createVNode("div", { class: "p-6" }, [
                      createVNode(_component_BaseButton, {
                        onClickPassive: close,
                        shape: "curved",
                        class: "w-full"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Logout ")
                        ]),
                        _: 2
                      }, 1032, ["onClickPassive"])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(MenuButton), { as: "template" }, {
                default: withCtx(() => [
                  createVNode("button", {
                    type: "button",
                    class: "group-hover:ring-primary-500 dark:ring-offset-muted-900 inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4"
                  }, [
                    createVNode("div", { class: "relative inline-flex h-9 w-9 items-center justify-center rounded-full" }, [
                      createVNode("img", {
                        src: _imports_0,
                        class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                        alt: ""
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(Transition, {
                "enter-active-class": "transition duration-100 ease-out",
                "enter-from-class": "transform scale-95 opacity-0",
                "enter-to-class": "transform scale-100 opacity-100",
                "leave-active-class": "transition duration-75 ease-in",
                "leave-from-class": "transform scale-100 opacity-100",
                "leave-to-class": "transform scale-95 opacity-0"
              }, {
                default: withCtx(() => [
                  createVNode(unref(MenuItems), { class: "divide-muted-100 border-muted-200 dark:divide-muted-700 dark:border-muted-700 dark:bg-muted-800 absolute end-0 mt-2 w-64 origin-top-right divide-y rounded-md border bg-white shadow-lg focus:outline-none" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "p-6 text-center" }, [
                        createVNode("div", { class: "relative mx-auto flex h-20 w-20 items-center justify-center rounded-full" }, [
                          createVNode("img", {
                            src: _imports_0,
                            class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                            alt: ""
                          })
                        ]),
                        createVNode("div", { class: "mt-3" }, [
                          createVNode("h6", { class: "font-heading text-muted-800 text-sm font-medium dark:text-white" }, " Maya Rosselini "),
                          createVNode("p", { class: "text-muted-400 mb-4 font-sans text-xs" }, "maya@tairo.io"),
                          createVNode(_component_BaseButton, {
                            to: "/layouts/profile-edit",
                            shape: "curved",
                            class: "w-full",
                            onClickPassive: close
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Manage Account")
                            ]),
                            _: 2
                          }, 1032, ["onClickPassive"])
                        ])
                      ]),
                      createVNode("div", { class: "px-6 py-1.5" }, [
                        createVNode(unref(MenuItem), { as: "div" }, {
                          default: withCtx(({ active }) => [
                            createVNode(_component_NuxtLink, {
                              to: "#",
                              class: ["group flex w-full items-center rounded-md p-2 text-sm transition-colors duration-300", [
                                active ? "bg-muted-100 dark:bg-muted-700 text-primary-500" : "text-muted-500"
                              ]],
                              onClickPassive: close
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "relative inline-flex h-9 w-9 items-center justify-center rounded-full" }, [
                                  createVNode("img", {
                                    src: _imports_2,
                                    class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                                    alt: ""
                                  })
                                ]),
                                createVNode("div", { class: "ms-2" }, [
                                  createVNode("h6", { class: "font-heading text-muted-800 text-xs font-medium leading-none dark:text-white" }, " Mike Miller "),
                                  createVNode("p", { class: "text-muted-400 font-sans text-xs" }, "mike@tairo.io")
                                ])
                              ]),
                              _: 2
                            }, 1032, ["class", "onClickPassive"])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(unref(MenuItem), { as: "div" }, {
                          default: withCtx(({ active }) => [
                            createVNode(_component_NuxtLink, {
                              to: "#",
                              class: ["group flex w-full items-center rounded-md p-2 text-sm transition-colors duration-300", [
                                active ? "bg-muted-100 dark:bg-muted-700 text-primary-500" : "text-muted-500"
                              ]],
                              onClickPassive: close
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "relative inline-flex h-9 w-9 items-center justify-center rounded-full" }, [
                                  createVNode("img", {
                                    src: _imports_2$1,
                                    class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                                    alt: ""
                                  })
                                ]),
                                createVNode("div", { class: "ms-2" }, [
                                  createVNode("h6", { class: "font-heading text-muted-800 text-xs font-medium leading-none dark:text-white" }, " Claire Baker "),
                                  createVNode("p", { class: "text-muted-400 font-sans text-xs" }, " claire@tairo.io ")
                                ])
                              ]),
                              _: 2
                            }, 1032, ["class", "onClickPassive"])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(unref(MenuItem), { as: "div" }, {
                          default: withCtx(({ active }) => [
                            createVNode(_component_NuxtLink, {
                              to: "#",
                              class: ["group flex w-full items-center rounded-md p-2 text-sm transition-colors duration-300", [
                                active ? "bg-muted-100 dark:bg-muted-700 text-primary-500" : "text-muted-500"
                              ]],
                              onClickPassive: close
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "relative inline-flex h-9 w-9 items-center justify-center rounded-full" }, [
                                  createVNode("img", {
                                    src: _imports_3,
                                    class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                                    alt: ""
                                  })
                                ]),
                                createVNode("div", { class: "ms-2" }, [
                                  createVNode("h6", { class: "font-heading text-muted-800 text-xs font-medium leading-none dark:text-white" }, " Alan Baxter "),
                                  createVNode("p", { class: "text-muted-400 font-sans text-xs" }, "alan@tairo.io")
                                ])
                              ]),
                              _: 2
                            }, 1032, ["class", "onClickPassive"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      createVNode("div", { class: "p-6" }, [
                        createVNode(_component_BaseButton, {
                          onClickPassive: close,
                          shape: "curved",
                          class: "w-full"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Logout ")
                          ]),
                          _: 2
                        }, 1032, ["onClickPassive"])
                      ])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/DemoToolbarAccountMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=DemoToolbarAccountMenu-427f5546.mjs.map
