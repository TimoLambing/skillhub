import { e as __nuxt_component_0$5, f as __nuxt_component_2 } from '../server.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, Transition, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './2-942b7bb5.mjs';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
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
import '@vue/shared';
import 'chroma-js';
import 'tailwindcss/colors.js';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoAccountMenu",
  __ssrInlineRender: true,
  props: {
    horizontal: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "group inline-flex items-center justify-center text-right" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Menu), {
        as: "div",
        class: "relative h-10 w-10 text-left"
      }, {
        default: withCtx(({ close }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MenuButton), { as: "template" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<button type="button" class="group-hover:ring-primary-500 dark:ring-offset-muted-800 inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4"${_scopeId2}><div class="relative inline-flex h-10 w-10 items-center justify-center rounded-full"${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""${_scopeId2}></div></button>`);
                } else {
                  return [
                    createVNode("button", {
                      type: "button",
                      class: "group-hover:ring-primary-500 dark:ring-offset-muted-800 inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4"
                    }, [
                      createVNode("div", { class: "relative inline-flex h-10 w-10 items-center justify-center rounded-full" }, [
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
            _push2(ssrRenderComponent(unref(MenuItems), {
              class: ["border-muted-200 dark:border-muted-700 dark:bg-muted-800 absolute mt-2 w-60 origin-bottom-right rounded-md border bg-white text-left shadow-lg focus:outline-none", props.horizontal ? "top-10 end-0" : "bottom-0 -end-64"]
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-muted-50 dark:bg-muted-700/40 p-6"${_scopeId2}><div class="flex items-center"${_scopeId2}><div class="relative inline-flex h-14 w-14 items-center justify-center rounded-full"${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""${_scopeId2}></div><div class="ms-3"${_scopeId2}><h6 class="font-heading text-muted-800 text-sm font-medium dark:text-white"${_scopeId2}> Maya Rosselini </h6><p class="text-muted-400 font-sans text-xs"${_scopeId2}>Product Manager</p></div></div></div><div class="p-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(MenuItem), { as: "div" }, {
                    default: withCtx(({ active }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtLink, {
                          to: "/layouts/profile",
                          class: ["group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300", [
                            active ? "bg-muted-100 dark:bg-muted-700 text-primary-500" : "text-muted-400"
                          ]],
                          onClick: close
                        }, {
                          default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Icon, {
                                name: "ph:user-circle-duotone",
                                class: "h-5 w-5"
                              }, null, _parent5, _scopeId4));
                              _push5(`<div class="ms-3"${_scopeId4}><h6 class="font-heading text-muted-800 text-xs font-medium leading-none dark:text-white"${_scopeId4}> Profile </h6><p class="text-muted-400 font-sans text-xs"${_scopeId4}> View your profile </p></div>`);
                            } else {
                              return [
                                createVNode(_component_Icon, {
                                  name: "ph:user-circle-duotone",
                                  class: "h-5 w-5"
                                }),
                                createVNode("div", { class: "ms-3" }, [
                                  createVNode("h6", { class: "font-heading text-muted-800 text-xs font-medium leading-none dark:text-white" }, " Profile "),
                                  createVNode("p", { class: "text-muted-400 font-sans text-xs" }, " View your profile ")
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtLink, {
                            to: "/layouts/profile",
                            class: ["group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300", [
                              active ? "bg-muted-100 dark:bg-muted-700 text-primary-500" : "text-muted-400"
                            ]],
                            onClickPassive: close
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "ph:user-circle-duotone",
                                class: "h-5 w-5"
                              }),
                              createVNode("div", { class: "ms-3" }, [
                                createVNode("h6", { class: "font-heading text-muted-800 text-xs font-medium leading-none dark:text-white" }, " Profile "),
                                createVNode("p", { class: "text-muted-400 font-sans text-xs" }, " View your profile ")
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
                          to: "/layouts/projects",
                          class: ["group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300", [
                            active ? "bg-muted-100 dark:bg-muted-700 text-primary-500" : "text-muted-400"
                          ]],
                          onClick: close
                        }, {
                          default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Icon, {
                                name: "ph:briefcase-duotone",
                                class: "h-5 w-5"
                              }, null, _parent5, _scopeId4));
                              _push5(`<div class="ms-3"${_scopeId4}><h6 class="font-heading text-muted-800 text-xs font-medium leading-none dark:text-white"${_scopeId4}> Projects </h6><p class="text-muted-400 font-sans text-xs"${_scopeId4}> All my projects </p></div>`);
                            } else {
                              return [
                                createVNode(_component_Icon, {
                                  name: "ph:briefcase-duotone",
                                  class: "h-5 w-5"
                                }),
                                createVNode("div", { class: "ms-3" }, [
                                  createVNode("h6", { class: "font-heading text-muted-800 text-xs font-medium leading-none dark:text-white" }, " Projects "),
                                  createVNode("p", { class: "text-muted-400 font-sans text-xs" }, " All my projects ")
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtLink, {
                            to: "/layouts/projects",
                            class: ["group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300", [
                              active ? "bg-muted-100 dark:bg-muted-700 text-primary-500" : "text-muted-400"
                            ]],
                            onClickPassive: close
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "ph:briefcase-duotone",
                                class: "h-5 w-5"
                              }),
                              createVNode("div", { class: "ms-3" }, [
                                createVNode("h6", { class: "font-heading text-muted-800 text-xs font-medium leading-none dark:text-white" }, " Projects "),
                                createVNode("p", { class: "text-muted-400 font-sans text-xs" }, " All my projects ")
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
                          to: "/layouts/user-grid-4",
                          class: ["group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300", [
                            active ? "bg-muted-100 dark:bg-muted-700 text-primary-500" : "text-muted-400"
                          ]],
                          onClick: close
                        }, {
                          default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Icon, {
                                name: "ph:users-three-duotone",
                                class: "h-5 w-5"
                              }, null, _parent5, _scopeId4));
                              _push5(`<div class="ms-3"${_scopeId4}><h6 class="font-heading text-muted-800 text-xs font-medium leading-none dark:text-white"${_scopeId4}> Team </h6><p class="text-muted-400 font-sans text-xs"${_scopeId4}>Manage my team</p></div>`);
                            } else {
                              return [
                                createVNode(_component_Icon, {
                                  name: "ph:users-three-duotone",
                                  class: "h-5 w-5"
                                }),
                                createVNode("div", { class: "ms-3" }, [
                                  createVNode("h6", { class: "font-heading text-muted-800 text-xs font-medium leading-none dark:text-white" }, " Team "),
                                  createVNode("p", { class: "text-muted-400 font-sans text-xs" }, "Manage my team")
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtLink, {
                            to: "/layouts/user-grid-4",
                            class: ["group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300", [
                              active ? "bg-muted-100 dark:bg-muted-700 text-primary-500" : "text-muted-400"
                            ]],
                            onClickPassive: close
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "ph:users-three-duotone",
                                class: "h-5 w-5"
                              }),
                              createVNode("div", { class: "ms-3" }, [
                                createVNode("h6", { class: "font-heading text-muted-800 text-xs font-medium leading-none dark:text-white" }, " Team "),
                                createVNode("p", { class: "text-muted-400 font-sans text-xs" }, "Manage my team")
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
                          to: "/layouts/profile-edit",
                          class: ["group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300", [
                            active ? "bg-muted-100 dark:bg-muted-700 text-primary-500" : "text-muted-400"
                          ]],
                          onClick: close
                        }, {
                          default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Icon, {
                                name: "ph:gear-six-duotone",
                                class: "h-5 w-5"
                              }, null, _parent5, _scopeId4));
                              _push5(`<div class="ms-3"${_scopeId4}><h6 class="font-heading text-muted-800 text-xs font-medium leading-none dark:text-white"${_scopeId4}> Settings </h6><p class="text-muted-400 font-sans text-xs"${_scopeId4}> Account settings </p></div>`);
                            } else {
                              return [
                                createVNode(_component_Icon, {
                                  name: "ph:gear-six-duotone",
                                  class: "h-5 w-5"
                                }),
                                createVNode("div", { class: "ms-3" }, [
                                  createVNode("h6", { class: "font-heading text-muted-800 text-xs font-medium leading-none dark:text-white" }, " Settings "),
                                  createVNode("p", { class: "text-muted-400 font-sans text-xs" }, " Account settings ")
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtLink, {
                            to: "/layouts/profile-edit",
                            class: ["group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300", [
                              active ? "bg-muted-100 dark:bg-muted-700 text-primary-500" : "text-muted-400"
                            ]],
                            onClickPassive: close
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "ph:gear-six-duotone",
                                class: "h-5 w-5"
                              }),
                              createVNode("div", { class: "ms-3" }, [
                                createVNode("h6", { class: "font-heading text-muted-800 text-xs font-medium leading-none dark:text-white" }, " Settings "),
                                createVNode("p", { class: "text-muted-400 font-sans text-xs" }, " Account settings ")
                              ])
                            ]),
                            _: 2
                          }, 1032, ["class", "onClickPassive"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "bg-muted-50 dark:bg-muted-700/40 p-6" }, [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("div", { class: "relative inline-flex h-14 w-14 items-center justify-center rounded-full" }, [
                          createVNode("img", {
                            src: _imports_0,
                            class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                            alt: ""
                          })
                        ]),
                        createVNode("div", { class: "ms-3" }, [
                          createVNode("h6", { class: "font-heading text-muted-800 text-sm font-medium dark:text-white" }, " Maya Rosselini "),
                          createVNode("p", { class: "text-muted-400 font-sans text-xs" }, "Product Manager")
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "p-2" }, [
                      createVNode(unref(MenuItem), { as: "div" }, {
                        default: withCtx(({ active }) => [
                          createVNode(_component_NuxtLink, {
                            to: "/layouts/profile",
                            class: ["group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300", [
                              active ? "bg-muted-100 dark:bg-muted-700 text-primary-500" : "text-muted-400"
                            ]],
                            onClickPassive: close
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "ph:user-circle-duotone",
                                class: "h-5 w-5"
                              }),
                              createVNode("div", { class: "ms-3" }, [
                                createVNode("h6", { class: "font-heading text-muted-800 text-xs font-medium leading-none dark:text-white" }, " Profile "),
                                createVNode("p", { class: "text-muted-400 font-sans text-xs" }, " View your profile ")
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
                            to: "/layouts/projects",
                            class: ["group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300", [
                              active ? "bg-muted-100 dark:bg-muted-700 text-primary-500" : "text-muted-400"
                            ]],
                            onClickPassive: close
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "ph:briefcase-duotone",
                                class: "h-5 w-5"
                              }),
                              createVNode("div", { class: "ms-3" }, [
                                createVNode("h6", { class: "font-heading text-muted-800 text-xs font-medium leading-none dark:text-white" }, " Projects "),
                                createVNode("p", { class: "text-muted-400 font-sans text-xs" }, " All my projects ")
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
                            to: "/layouts/user-grid-4",
                            class: ["group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300", [
                              active ? "bg-muted-100 dark:bg-muted-700 text-primary-500" : "text-muted-400"
                            ]],
                            onClickPassive: close
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "ph:users-three-duotone",
                                class: "h-5 w-5"
                              }),
                              createVNode("div", { class: "ms-3" }, [
                                createVNode("h6", { class: "font-heading text-muted-800 text-xs font-medium leading-none dark:text-white" }, " Team "),
                                createVNode("p", { class: "text-muted-400 font-sans text-xs" }, "Manage my team")
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
                            to: "/layouts/profile-edit",
                            class: ["group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300", [
                              active ? "bg-muted-100 dark:bg-muted-700 text-primary-500" : "text-muted-400"
                            ]],
                            onClickPassive: close
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "ph:gear-six-duotone",
                                class: "h-5 w-5"
                              }),
                              createVNode("div", { class: "ms-3" }, [
                                createVNode("h6", { class: "font-heading text-muted-800 text-xs font-medium leading-none dark:text-white" }, " Settings "),
                                createVNode("p", { class: "text-muted-400 font-sans text-xs" }, " Account settings ")
                              ])
                            ]),
                            _: 2
                          }, 1032, ["class", "onClickPassive"])
                        ]),
                        _: 2
                      }, 1024)
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
                    class: "group-hover:ring-primary-500 dark:ring-offset-muted-800 inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4"
                  }, [
                    createVNode("div", { class: "relative inline-flex h-10 w-10 items-center justify-center rounded-full" }, [
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
                  createVNode(unref(MenuItems), {
                    class: ["border-muted-200 dark:border-muted-700 dark:bg-muted-800 absolute mt-2 w-60 origin-bottom-right rounded-md border bg-white text-left shadow-lg focus:outline-none", props.horizontal ? "top-10 end-0" : "bottom-0 -end-64"]
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "bg-muted-50 dark:bg-muted-700/40 p-6" }, [
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode("div", { class: "relative inline-flex h-14 w-14 items-center justify-center rounded-full" }, [
                            createVNode("img", {
                              src: _imports_0,
                              class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                              alt: ""
                            })
                          ]),
                          createVNode("div", { class: "ms-3" }, [
                            createVNode("h6", { class: "font-heading text-muted-800 text-sm font-medium dark:text-white" }, " Maya Rosselini "),
                            createVNode("p", { class: "text-muted-400 font-sans text-xs" }, "Product Manager")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "p-2" }, [
                        createVNode(unref(MenuItem), { as: "div" }, {
                          default: withCtx(({ active }) => [
                            createVNode(_component_NuxtLink, {
                              to: "/layouts/profile",
                              class: ["group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300", [
                                active ? "bg-muted-100 dark:bg-muted-700 text-primary-500" : "text-muted-400"
                              ]],
                              onClickPassive: close
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Icon, {
                                  name: "ph:user-circle-duotone",
                                  class: "h-5 w-5"
                                }),
                                createVNode("div", { class: "ms-3" }, [
                                  createVNode("h6", { class: "font-heading text-muted-800 text-xs font-medium leading-none dark:text-white" }, " Profile "),
                                  createVNode("p", { class: "text-muted-400 font-sans text-xs" }, " View your profile ")
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
                              to: "/layouts/projects",
                              class: ["group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300", [
                                active ? "bg-muted-100 dark:bg-muted-700 text-primary-500" : "text-muted-400"
                              ]],
                              onClickPassive: close
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Icon, {
                                  name: "ph:briefcase-duotone",
                                  class: "h-5 w-5"
                                }),
                                createVNode("div", { class: "ms-3" }, [
                                  createVNode("h6", { class: "font-heading text-muted-800 text-xs font-medium leading-none dark:text-white" }, " Projects "),
                                  createVNode("p", { class: "text-muted-400 font-sans text-xs" }, " All my projects ")
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
                              to: "/layouts/user-grid-4",
                              class: ["group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300", [
                                active ? "bg-muted-100 dark:bg-muted-700 text-primary-500" : "text-muted-400"
                              ]],
                              onClickPassive: close
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Icon, {
                                  name: "ph:users-three-duotone",
                                  class: "h-5 w-5"
                                }),
                                createVNode("div", { class: "ms-3" }, [
                                  createVNode("h6", { class: "font-heading text-muted-800 text-xs font-medium leading-none dark:text-white" }, " Team "),
                                  createVNode("p", { class: "text-muted-400 font-sans text-xs" }, "Manage my team")
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
                              to: "/layouts/profile-edit",
                              class: ["group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300", [
                                active ? "bg-muted-100 dark:bg-muted-700 text-primary-500" : "text-muted-400"
                              ]],
                              onClickPassive: close
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Icon, {
                                  name: "ph:gear-six-duotone",
                                  class: "h-5 w-5"
                                }),
                                createVNode("div", { class: "ms-3" }, [
                                  createVNode("h6", { class: "font-heading text-muted-800 text-xs font-medium leading-none dark:text-white" }, " Settings "),
                                  createVNode("p", { class: "text-muted-400 font-sans text-xs" }, " Account settings ")
                                ])
                              ]),
                              _: 2
                            }, 1032, ["class", "onClickPassive"])
                          ]),
                          _: 2
                        }, 1024)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["class"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/DemoAccountMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=DemoAccountMenu-d8e8a032.mjs.map
