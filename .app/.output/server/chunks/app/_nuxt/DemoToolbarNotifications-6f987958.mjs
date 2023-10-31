import { f as __nuxt_component_2, e as __nuxt_component_0$5 } from '../server.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, createTextVNode, Transition, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { a as _imports_0, _ as _imports_4 } from './12-1f1764e9.mjs';
import { a as _imports_1, _ as _imports_3 } from './19-120f22ae.mjs';
import { _ as _imports_2 } from './3-e6d3708e.mjs';
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
  __name: "DemoToolbarNotifications",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      const _component_NuxtLink = __nuxt_component_0$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "group inline-flex items-center justify-center text-right" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Menu), {
        as: "div",
        class: "relative h-9 w-9 text-left"
      }, {
        default: withCtx(({ close }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MenuButton), { as: "div" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<button type="button" class="group-hover:ring-muted-200 dark:group-hover:ring-muted-700 dark:ring-offset-muted-900 inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4"${_scopeId2}><span class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 flex h-9 w-9 items-center justify-center rounded-full border bg-white"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:bell-duotone",
                    class: "text-muted-400 h-5 w-5"
                  }, null, _parent3, _scopeId2));
                  _push3(`</span></button>`);
                } else {
                  return [
                    createVNode("button", {
                      type: "button",
                      class: "group-hover:ring-muted-200 dark:group-hover:ring-muted-700 dark:ring-offset-muted-900 inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4"
                    }, [
                      createVNode("span", { class: "border-muted-200 dark:border-muted-700 dark:bg-muted-800 flex h-9 w-9 items-center justify-center rounded-full border bg-white" }, [
                        createVNode(_component_Icon, {
                          name: "ph:bell-duotone",
                          class: "text-muted-400 h-5 w-5"
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(``);
            _push2(ssrRenderComponent(unref(MenuItems), { class: "divide-muted-100 border-muted-200 dark:divide-muted-700 dark:border-muted-700 dark:bg-muted-800 absolute end-0 mt-2 w-72 origin-top-right divide-y rounded-md border bg-white shadow-lg focus:outline-none" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-4"${_scopeId2}><div class="relative flex items-center justify-between"${_scopeId2}><h4 class="font-heading text-muted-500 dark:text-muted-200 text-xs uppercase"${_scopeId2}> Notifications </h4>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "#",
                    class: "font-alt text-primary-500 text-sm font-semibold",
                    onClick: close
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` View All `);
                      } else {
                        return [
                          createTextVNode(" View All ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div></div><div class="p-4"${_scopeId2}>`);
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
                              _push5(`<div class="relative inline-flex h-9 w-9 items-center justify-center rounded-full"${_scopeId4}><img${ssrRenderAttr("src", _imports_0)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""${_scopeId4}></div><div class="ms-2"${_scopeId4}><h6 class="font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white"${_scopeId4}> Helen Mariakis <span class="text-muted-500 dark:text-muted-400 font-normal"${_scopeId4}> left a comment </span></h6><p class="text-muted-400 font-sans text-xs"${_scopeId4}>1 hour ago</p></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "relative inline-flex h-9 w-9 items-center justify-center rounded-full" }, [
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                                    alt: ""
                                  })
                                ]),
                                createVNode("div", { class: "ms-2" }, [
                                  createVNode("h6", { class: "font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white" }, [
                                    createTextVNode(" Helen Mariakis "),
                                    createVNode("span", { class: "text-muted-500 dark:text-muted-400 font-normal" }, " left a comment ")
                                  ]),
                                  createVNode("p", { class: "text-muted-400 font-sans text-xs" }, "1 hour ago")
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
                                  src: _imports_0,
                                  class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                                  alt: ""
                                })
                              ]),
                              createVNode("div", { class: "ms-2" }, [
                                createVNode("h6", { class: "font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white" }, [
                                  createTextVNode(" Helen Mariakis "),
                                  createVNode("span", { class: "text-muted-500 dark:text-muted-400 font-normal" }, " left a comment ")
                                ]),
                                createVNode("p", { class: "text-muted-400 font-sans text-xs" }, "1 hour ago")
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
                            active ? "bg-muted-100 dark:bg-muted-700  text-primary-500" : "text-muted-500"
                          ]],
                          onClick: close
                        }, {
                          default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="relative inline-flex h-9 w-9 items-center justify-center rounded-full"${_scopeId4}><img${ssrRenderAttr("src", _imports_1)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""${_scopeId4}></div><div class="ms-2"${_scopeId4}><h6 class="font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white"${_scopeId4}> Clarissa Perez <span class="text-muted-500 dark:text-muted-400 font-normal"${_scopeId4}> uploaded a file </span></h6><p class="text-muted-400 font-sans text-xs"${_scopeId4}>2 hours ago</p></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "relative inline-flex h-9 w-9 items-center justify-center rounded-full" }, [
                                  createVNode("img", {
                                    src: _imports_1,
                                    class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                                    alt: ""
                                  })
                                ]),
                                createVNode("div", { class: "ms-2" }, [
                                  createVNode("h6", { class: "font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white" }, [
                                    createTextVNode(" Clarissa Perez "),
                                    createVNode("span", { class: "text-muted-500 dark:text-muted-400 font-normal" }, " uploaded a file ")
                                  ]),
                                  createVNode("p", { class: "text-muted-400 font-sans text-xs" }, "2 hours ago")
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
                              active ? "bg-muted-100 dark:bg-muted-700  text-primary-500" : "text-muted-500"
                            ]],
                            onClickPassive: close
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "relative inline-flex h-9 w-9 items-center justify-center rounded-full" }, [
                                createVNode("img", {
                                  src: _imports_1,
                                  class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                                  alt: ""
                                })
                              ]),
                              createVNode("div", { class: "ms-2" }, [
                                createVNode("h6", { class: "font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white" }, [
                                  createTextVNode(" Clarissa Perez "),
                                  createVNode("span", { class: "text-muted-500 dark:text-muted-400 font-normal" }, " uploaded a file ")
                                ]),
                                createVNode("p", { class: "text-muted-400 font-sans text-xs" }, "2 hours ago")
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
                            active ? "bg-muted-100 dark:bg-muted-700  text-primary-500" : "text-muted-500"
                          ]],
                          onClick: close
                        }, {
                          default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="relative inline-flex h-9 w-9 items-center justify-center rounded-full"${_scopeId4}><img${ssrRenderAttr("src", _imports_2)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""${_scopeId4}></div><div class="ms-2"${_scopeId4}><h6 class="font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white"${_scopeId4}> Mike Miller <span class="text-muted-500 dark:text-muted-400 font-normal"${_scopeId4}> left a comment </span></h6><p class="text-muted-400 font-sans text-xs"${_scopeId4}>3 hours ago</p></div>`);
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
                                  createVNode("h6", { class: "font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white" }, [
                                    createTextVNode(" Mike Miller "),
                                    createVNode("span", { class: "text-muted-500 dark:text-muted-400 font-normal" }, " left a comment ")
                                  ]),
                                  createVNode("p", { class: "text-muted-400 font-sans text-xs" }, "3 hours ago")
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
                              active ? "bg-muted-100 dark:bg-muted-700  text-primary-500" : "text-muted-500"
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
                                createVNode("h6", { class: "font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white" }, [
                                  createTextVNode(" Mike Miller "),
                                  createVNode("span", { class: "text-muted-500 dark:text-muted-400 font-normal" }, " left a comment ")
                                ]),
                                createVNode("p", { class: "text-muted-400 font-sans text-xs" }, "3 hours ago")
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
                            active ? "bg-muted-100 dark:bg-muted-700  text-primary-500" : "text-muted-500"
                          ]],
                          onClick: close
                        }, {
                          default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="relative inline-flex h-9 w-9 items-center justify-center rounded-full"${_scopeId4}><img${ssrRenderAttr("src", _imports_3)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""${_scopeId4}></div><div class="ms-2"${_scopeId4}><h6 class="font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white"${_scopeId4}> Lana Henriks <span class="text-muted-500 dark:text-muted-400 font-normal"${_scopeId4}> sent you a message </span></h6><p class="text-muted-400 font-sans text-xs"${_scopeId4}>Yesterday</p></div>`);
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
                                  createVNode("h6", { class: "font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white" }, [
                                    createTextVNode(" Lana Henriks "),
                                    createVNode("span", { class: "text-muted-500 dark:text-muted-400 font-normal" }, " sent you a message ")
                                  ]),
                                  createVNode("p", { class: "text-muted-400 font-sans text-xs" }, "Yesterday")
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
                              active ? "bg-muted-100 dark:bg-muted-700  text-primary-500" : "text-muted-500"
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
                                createVNode("h6", { class: "font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white" }, [
                                  createTextVNode(" Lana Henriks "),
                                  createVNode("span", { class: "text-muted-500 dark:text-muted-400 font-normal" }, " sent you a message ")
                                ]),
                                createVNode("p", { class: "text-muted-400 font-sans text-xs" }, "Yesterday")
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
                            active ? "bg-muted-100 dark:bg-muted-700  text-primary-500" : "text-muted-500"
                          ]],
                          onClick: close
                        }, {
                          default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="relative inline-flex h-9 w-9 items-center justify-center rounded-full"${_scopeId4}><img${ssrRenderAttr("src", _imports_4)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""${_scopeId4}></div><div class="ms-2"${_scopeId4}><h6 class="font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white"${_scopeId4}> Dan Walker <span class="text-muted-500 dark:text-muted-400 font-normal"${_scopeId4}> left a comment </span></h6><p class="text-muted-400 font-sans text-xs"${_scopeId4}>Yesterday</p></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "relative inline-flex h-9 w-9 items-center justify-center rounded-full" }, [
                                  createVNode("img", {
                                    src: _imports_4,
                                    class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                                    alt: ""
                                  })
                                ]),
                                createVNode("div", { class: "ms-2" }, [
                                  createVNode("h6", { class: "font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white" }, [
                                    createTextVNode(" Dan Walker "),
                                    createVNode("span", { class: "text-muted-500 dark:text-muted-400 font-normal" }, " left a comment ")
                                  ]),
                                  createVNode("p", { class: "text-muted-400 font-sans text-xs" }, "Yesterday")
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
                              active ? "bg-muted-100 dark:bg-muted-700  text-primary-500" : "text-muted-500"
                            ]],
                            onClickPassive: close
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "relative inline-flex h-9 w-9 items-center justify-center rounded-full" }, [
                                createVNode("img", {
                                  src: _imports_4,
                                  class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                                  alt: ""
                                })
                              ]),
                              createVNode("div", { class: "ms-2" }, [
                                createVNode("h6", { class: "font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white" }, [
                                  createTextVNode(" Dan Walker "),
                                  createVNode("span", { class: "text-muted-500 dark:text-muted-400 font-normal" }, " left a comment ")
                                ]),
                                createVNode("p", { class: "text-muted-400 font-sans text-xs" }, "Yesterday")
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
                    createVNode("div", { class: "p-4" }, [
                      createVNode("div", { class: "relative flex items-center justify-between" }, [
                        createVNode("h4", { class: "font-heading text-muted-500 dark:text-muted-200 text-xs uppercase" }, " Notifications "),
                        createVNode(_component_NuxtLink, {
                          to: "#",
                          class: "font-alt text-primary-500 text-sm font-semibold",
                          onClickPassive: close
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" View All ")
                          ]),
                          _: 2
                        }, 1032, ["onClickPassive"])
                      ])
                    ]),
                    createVNode("div", { class: "p-4" }, [
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
                                  src: _imports_0,
                                  class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                                  alt: ""
                                })
                              ]),
                              createVNode("div", { class: "ms-2" }, [
                                createVNode("h6", { class: "font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white" }, [
                                  createTextVNode(" Helen Mariakis "),
                                  createVNode("span", { class: "text-muted-500 dark:text-muted-400 font-normal" }, " left a comment ")
                                ]),
                                createVNode("p", { class: "text-muted-400 font-sans text-xs" }, "1 hour ago")
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
                              active ? "bg-muted-100 dark:bg-muted-700  text-primary-500" : "text-muted-500"
                            ]],
                            onClickPassive: close
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "relative inline-flex h-9 w-9 items-center justify-center rounded-full" }, [
                                createVNode("img", {
                                  src: _imports_1,
                                  class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                                  alt: ""
                                })
                              ]),
                              createVNode("div", { class: "ms-2" }, [
                                createVNode("h6", { class: "font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white" }, [
                                  createTextVNode(" Clarissa Perez "),
                                  createVNode("span", { class: "text-muted-500 dark:text-muted-400 font-normal" }, " uploaded a file ")
                                ]),
                                createVNode("p", { class: "text-muted-400 font-sans text-xs" }, "2 hours ago")
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
                              active ? "bg-muted-100 dark:bg-muted-700  text-primary-500" : "text-muted-500"
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
                                createVNode("h6", { class: "font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white" }, [
                                  createTextVNode(" Mike Miller "),
                                  createVNode("span", { class: "text-muted-500 dark:text-muted-400 font-normal" }, " left a comment ")
                                ]),
                                createVNode("p", { class: "text-muted-400 font-sans text-xs" }, "3 hours ago")
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
                              active ? "bg-muted-100 dark:bg-muted-700  text-primary-500" : "text-muted-500"
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
                                createVNode("h6", { class: "font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white" }, [
                                  createTextVNode(" Lana Henriks "),
                                  createVNode("span", { class: "text-muted-500 dark:text-muted-400 font-normal" }, " sent you a message ")
                                ]),
                                createVNode("p", { class: "text-muted-400 font-sans text-xs" }, "Yesterday")
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
                              active ? "bg-muted-100 dark:bg-muted-700  text-primary-500" : "text-muted-500"
                            ]],
                            onClickPassive: close
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "relative inline-flex h-9 w-9 items-center justify-center rounded-full" }, [
                                createVNode("img", {
                                  src: _imports_4,
                                  class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                                  alt: ""
                                })
                              ]),
                              createVNode("div", { class: "ms-2" }, [
                                createVNode("h6", { class: "font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white" }, [
                                  createTextVNode(" Dan Walker "),
                                  createVNode("span", { class: "text-muted-500 dark:text-muted-400 font-normal" }, " left a comment ")
                                ]),
                                createVNode("p", { class: "text-muted-400 font-sans text-xs" }, "Yesterday")
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
              createVNode(unref(MenuButton), { as: "div" }, {
                default: withCtx(() => [
                  createVNode("button", {
                    type: "button",
                    class: "group-hover:ring-muted-200 dark:group-hover:ring-muted-700 dark:ring-offset-muted-900 inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4"
                  }, [
                    createVNode("span", { class: "border-muted-200 dark:border-muted-700 dark:bg-muted-800 flex h-9 w-9 items-center justify-center rounded-full border bg-white" }, [
                      createVNode(_component_Icon, {
                        name: "ph:bell-duotone",
                        class: "text-muted-400 h-5 w-5"
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
                  createVNode(unref(MenuItems), { class: "divide-muted-100 border-muted-200 dark:divide-muted-700 dark:border-muted-700 dark:bg-muted-800 absolute end-0 mt-2 w-72 origin-top-right divide-y rounded-md border bg-white shadow-lg focus:outline-none" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "p-4" }, [
                        createVNode("div", { class: "relative flex items-center justify-between" }, [
                          createVNode("h4", { class: "font-heading text-muted-500 dark:text-muted-200 text-xs uppercase" }, " Notifications "),
                          createVNode(_component_NuxtLink, {
                            to: "#",
                            class: "font-alt text-primary-500 text-sm font-semibold",
                            onClickPassive: close
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" View All ")
                            ]),
                            _: 2
                          }, 1032, ["onClickPassive"])
                        ])
                      ]),
                      createVNode("div", { class: "p-4" }, [
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
                                    src: _imports_0,
                                    class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                                    alt: ""
                                  })
                                ]),
                                createVNode("div", { class: "ms-2" }, [
                                  createVNode("h6", { class: "font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white" }, [
                                    createTextVNode(" Helen Mariakis "),
                                    createVNode("span", { class: "text-muted-500 dark:text-muted-400 font-normal" }, " left a comment ")
                                  ]),
                                  createVNode("p", { class: "text-muted-400 font-sans text-xs" }, "1 hour ago")
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
                                active ? "bg-muted-100 dark:bg-muted-700  text-primary-500" : "text-muted-500"
                              ]],
                              onClickPassive: close
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "relative inline-flex h-9 w-9 items-center justify-center rounded-full" }, [
                                  createVNode("img", {
                                    src: _imports_1,
                                    class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                                    alt: ""
                                  })
                                ]),
                                createVNode("div", { class: "ms-2" }, [
                                  createVNode("h6", { class: "font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white" }, [
                                    createTextVNode(" Clarissa Perez "),
                                    createVNode("span", { class: "text-muted-500 dark:text-muted-400 font-normal" }, " uploaded a file ")
                                  ]),
                                  createVNode("p", { class: "text-muted-400 font-sans text-xs" }, "2 hours ago")
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
                                active ? "bg-muted-100 dark:bg-muted-700  text-primary-500" : "text-muted-500"
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
                                  createVNode("h6", { class: "font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white" }, [
                                    createTextVNode(" Mike Miller "),
                                    createVNode("span", { class: "text-muted-500 dark:text-muted-400 font-normal" }, " left a comment ")
                                  ]),
                                  createVNode("p", { class: "text-muted-400 font-sans text-xs" }, "3 hours ago")
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
                                active ? "bg-muted-100 dark:bg-muted-700  text-primary-500" : "text-muted-500"
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
                                  createVNode("h6", { class: "font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white" }, [
                                    createTextVNode(" Lana Henriks "),
                                    createVNode("span", { class: "text-muted-500 dark:text-muted-400 font-normal" }, " sent you a message ")
                                  ]),
                                  createVNode("p", { class: "text-muted-400 font-sans text-xs" }, "Yesterday")
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
                                active ? "bg-muted-100 dark:bg-muted-700  text-primary-500" : "text-muted-500"
                              ]],
                              onClickPassive: close
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "relative inline-flex h-9 w-9 items-center justify-center rounded-full" }, [
                                  createVNode("img", {
                                    src: _imports_4,
                                    class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                                    alt: ""
                                  })
                                ]),
                                createVNode("div", { class: "ms-2" }, [
                                  createVNode("h6", { class: "font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white" }, [
                                    createTextVNode(" Dan Walker "),
                                    createVNode("span", { class: "text-muted-500 dark:text-muted-400 font-normal" }, " left a comment ")
                                  ]),
                                  createVNode("p", { class: "text-muted-400 font-sans text-xs" }, "Yesterday")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/DemoToolbarNotifications.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=DemoToolbarNotifications-6f987958.mjs.map
