import { _ as _sfc_main$1, a as _sfc_main$2 } from './BaseDropdownItem-864908ca.mjs';
import { _ as __nuxt_component_3 } from './BaseDropdownDivider-258f8823.mjs';
import { f as __nuxt_component_2, s as _sfc_main$E, _ as _sfc_main$p, b as _sfc_main$o, i as _sfc_main$D, e as __nuxt_component_0$5, j as _sfc_main$C } from '../server.mjs';
import { defineComponent, withAsyncContext, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-45c1546c.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import '@headlessui/vue';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "profile-settings",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/profile", "$RPxpPd6TEy")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseDropdown = _sfc_main$1;
      const _component_BaseDropdownDivider = __nuxt_component_3;
      const _component_BaseDropdownItem = _sfc_main$2;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseText = _sfc_main$D;
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_BaseCard = _sfc_main$C;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto w-full max-w-5xl" }, _attrs))}>`);
      if (!unref(data)) {
        _push(`<div></div>`);
      } else {
        _push(`<div class="relative w-full"><div class="absolute end-0 top-2 z-20">`);
        _push(ssrRenderComponent(_component_BaseDropdown, {
          flavor: "context",
          label: "Dropdown",
          orientation: "end",
          size: "md",
          class: "z-20",
          shape: "curved"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseDropdownDivider, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseDropdownItem, {
                to: "/layouts/profile-edit",
                title: "Edit",
                text: "Edit profile"
              }, {
                start: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:pencil-duotone",
                      class: "me-2 block h-5 w-5"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "ph:pencil-duotone",
                        class: "me-2 block h-5 w-5"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseDropdownDivider, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseDropdownItem, {
                to: "#",
                title: "Security",
                text: "Security settings"
              }, {
                start: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:lock-duotone",
                      class: "me-2 block h-5 w-5"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "ph:lock-duotone",
                        class: "me-2 block h-5 w-5"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseDropdownItem, {
                to: "#",
                title: "Billing",
                text: "Manage billing"
              }, {
                start: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:bank-duotone",
                      class: "me-2 block h-5 w-5"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "ph:bank-duotone",
                        class: "me-2 block h-5 w-5"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseDropdownDivider, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseDropdownItem, {
                to: "#",
                title: "Share",
                text: "Share profile"
              }, {
                start: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:link-duotone",
                      class: "me-2 block h-5 w-5"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "ph:link-duotone",
                        class: "me-2 block h-5 w-5"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseDropdownDivider),
                createVNode(_component_BaseDropdownItem, {
                  to: "/layouts/profile-edit",
                  title: "Edit",
                  text: "Edit profile"
                }, {
                  start: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "ph:pencil-duotone",
                      class: "me-2 block h-5 w-5"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseDropdownDivider),
                createVNode(_component_BaseDropdownItem, {
                  to: "#",
                  title: "Security",
                  text: "Security settings"
                }, {
                  start: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "ph:lock-duotone",
                      class: "me-2 block h-5 w-5"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseDropdownItem, {
                  to: "#",
                  title: "Billing",
                  text: "Manage billing"
                }, {
                  start: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "ph:bank-duotone",
                      class: "me-2 block h-5 w-5"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseDropdownDivider),
                createVNode(_component_BaseDropdownItem, {
                  to: "#",
                  title: "Share",
                  text: "Share profile"
                }, {
                  start: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "ph:link-duotone",
                      class: "me-2 block h-5 w-5"
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="flex w-full flex-col">`);
        _push(ssrRenderComponent(_component_BaseAvatar, {
          src: unref(data)?.personalInfo.picture,
          "badge-src": unref(data)?.personalInfo.badge,
          size: "2xl",
          class: "mx-auto"
        }, null, _parent));
        _push(`<div class="mx-auto w-full max-w-md text-center">`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          tag: "h2",
          size: "xl",
          weight: "medium",
          class: "mt-4"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(data)?.personalInfo.firstName)} ${ssrInterpolate(unref(data)?.personalInfo.lastName)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(data)?.personalInfo.firstName) + " " + toDisplayString(unref(data)?.personalInfo.lastName), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, {
          size: "sm",
          class: "text-muted-400 mb-3 mt-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(data)?.personalInfo.shortBio)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(data)?.personalInfo.shortBio), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="divide-muted-200 dark:divide-muted-800 flex items-center justify-center divide-x"><div class="text-muted-400 flex h-8 items-center gap-1 px-4">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:circles-three-duotone",
          class: "h-5 w-5"
        }, null, _parent));
        _push(ssrRenderComponent(_component_BaseText, { size: "sm" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(data)?.personalInfo.relations)}+ relations`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(data)?.personalInfo.relations) + "+ relations", 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="text-muted-400 hidden h-8 items-center gap-1 px-4 sm:flex">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:check-circle-duotone",
          class: "h-5 w-5"
        }, null, _parent));
        _push(ssrRenderComponent(_component_BaseText, { size: "sm" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(data)?.personalInfo.projects)} projects`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(data)?.personalInfo.projects) + " projects", 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="flex h-8 items-center gap-2 px-4"><!--[-->`);
        ssrRenderList(unref(data)?.personalInfo.socials, (link) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: link.name,
            to: link.url,
            target: "_blank",
            rel: "noopener noreferrer",
            class: "border-muted-200 hover:border-primary-500 dark:border-muted-700 dark:hover:border-primary-500 dark:bg-muted-800 text-muted-400 hover:text-primary-500 flex h-8 w-8 items-center justify-center rounded-full border bg-white transition-colors duration-300"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: link.icon,
                  class: "h-3 w-3"
                }, null, _parent2, _scopeId));
                _push2(`<span class="sr-only"${_scopeId}>${ssrInterpolate(link.name)}</span>`);
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: link.icon,
                    class: "h-3 w-3"
                  }, null, 8, ["name"]),
                  createVNode("span", { class: "sr-only" }, toDisplayString(link.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div></div></div><div class="ltablet:grid-cols-5 mx-auto mt-6 grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5">`);
        _push(ssrRenderComponent(_component_BaseCard, {
          shape: "curved",
          "elevated-hover": "",
          class: "hover:!border-primary-500 group border-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "#",
                class: "block p-6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:buildings-duotone",
                      class: "group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseHeading, {
                      tag: "h3",
                      size: "sm",
                      weight: "semibold",
                      class: "mt-2 !text-[0.65rem] uppercase"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Company `);
                        } else {
                          return [
                            createTextVNode(" Company ")
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
                          _push4(` Manage company `);
                        } else {
                          return [
                            createTextVNode(" Manage company ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-center" }, [
                        createVNode(_component_Icon, {
                          name: "ph:buildings-duotone",
                          class: "group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"
                        }),
                        createVNode(_component_BaseHeading, {
                          tag: "h3",
                          size: "sm",
                          weight: "semibold",
                          class: "mt-2 !text-[0.65rem] uppercase"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Company ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseText, {
                          size: "xs",
                          class: "text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Manage company ")
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "block p-6"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text-center" }, [
                      createVNode(_component_Icon, {
                        name: "ph:buildings-duotone",
                        class: "group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"
                      }),
                      createVNode(_component_BaseHeading, {
                        tag: "h3",
                        size: "sm",
                        weight: "semibold",
                        class: "mt-2 !text-[0.65rem] uppercase"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Company ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseText, {
                        size: "xs",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Manage company ")
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
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseCard, {
          shape: "curved",
          "elevated-hover": "",
          class: "hover:!border-primary-500 group border-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "#",
                class: "block p-6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:users-four-duotone",
                      class: "group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseHeading, {
                      tag: "h3",
                      size: "sm",
                      weight: "semibold",
                      class: "mt-2 !text-[0.65rem] uppercase"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Team `);
                        } else {
                          return [
                            createTextVNode(" Team ")
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
                          _push4(` Manage team `);
                        } else {
                          return [
                            createTextVNode(" Manage team ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-center" }, [
                        createVNode(_component_Icon, {
                          name: "ph:users-four-duotone",
                          class: "group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"
                        }),
                        createVNode(_component_BaseHeading, {
                          tag: "h3",
                          size: "sm",
                          weight: "semibold",
                          class: "mt-2 !text-[0.65rem] uppercase"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Team ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseText, {
                          size: "xs",
                          class: "text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Manage team ")
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "block p-6"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text-center" }, [
                      createVNode(_component_Icon, {
                        name: "ph:users-four-duotone",
                        class: "group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"
                      }),
                      createVNode(_component_BaseHeading, {
                        tag: "h3",
                        size: "sm",
                        weight: "semibold",
                        class: "mt-2 !text-[0.65rem] uppercase"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Team ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseText, {
                        size: "xs",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Manage team ")
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
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseCard, {
          shape: "curved",
          "elevated-hover": "",
          class: "hover:!border-primary-500 group border-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "#",
                class: "block p-6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:briefcase-duotone",
                      class: "group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseHeading, {
                      tag: "h3",
                      size: "sm",
                      weight: "semibold",
                      class: "mt-2 !text-[0.65rem] uppercase"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Projects `);
                        } else {
                          return [
                            createTextVNode(" Projects ")
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
                          _push4(` Project settings `);
                        } else {
                          return [
                            createTextVNode(" Project settings ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-center" }, [
                        createVNode(_component_Icon, {
                          name: "ph:briefcase-duotone",
                          class: "group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"
                        }),
                        createVNode(_component_BaseHeading, {
                          tag: "h3",
                          size: "sm",
                          weight: "semibold",
                          class: "mt-2 !text-[0.65rem] uppercase"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Projects ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseText, {
                          size: "xs",
                          class: "text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Project settings ")
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "block p-6"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text-center" }, [
                      createVNode(_component_Icon, {
                        name: "ph:briefcase-duotone",
                        class: "group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"
                      }),
                      createVNode(_component_BaseHeading, {
                        tag: "h3",
                        size: "sm",
                        weight: "semibold",
                        class: "mt-2 !text-[0.65rem] uppercase"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Projects ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseText, {
                        size: "xs",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Project settings ")
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
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseCard, {
          shape: "curved",
          "elevated-hover": "",
          class: "hover:!border-primary-500 group border-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "#",
                class: "block p-6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:lock-open-duotone",
                      class: "group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseHeading, {
                      tag: "h3",
                      size: "xs",
                      weight: "semibold",
                      class: "mt-2 !text-[0.65rem] uppercase"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Permissions `);
                        } else {
                          return [
                            createTextVNode(" Permissions ")
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
                          _push4(` Manage permissions `);
                        } else {
                          return [
                            createTextVNode(" Manage permissions ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-center" }, [
                        createVNode(_component_Icon, {
                          name: "ph:lock-open-duotone",
                          class: "group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"
                        }),
                        createVNode(_component_BaseHeading, {
                          tag: "h3",
                          size: "xs",
                          weight: "semibold",
                          class: "mt-2 !text-[0.65rem] uppercase"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Permissions ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseText, {
                          size: "xs",
                          class: "text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Manage permissions ")
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "block p-6"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text-center" }, [
                      createVNode(_component_Icon, {
                        name: "ph:lock-open-duotone",
                        class: "group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"
                      }),
                      createVNode(_component_BaseHeading, {
                        tag: "h3",
                        size: "xs",
                        weight: "semibold",
                        class: "mt-2 !text-[0.65rem] uppercase"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Permissions ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseText, {
                        size: "xs",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Manage permissions ")
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
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseCard, {
          shape: "curved",
          "elevated-hover": "",
          class: "hover:!border-primary-500 group border-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "#",
                class: "block p-6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:note-duotone",
                      class: "group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseHeading, {
                      tag: "h3",
                      size: "xs",
                      weight: "semibold",
                      class: "mt-2 !text-[0.65rem] uppercase"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Documents `);
                        } else {
                          return [
                            createTextVNode(" Documents ")
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
                          _push4(` Data privacy `);
                        } else {
                          return [
                            createTextVNode(" Data privacy ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-center" }, [
                        createVNode(_component_Icon, {
                          name: "ph:note-duotone",
                          class: "group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"
                        }),
                        createVNode(_component_BaseHeading, {
                          tag: "h3",
                          size: "xs",
                          weight: "semibold",
                          class: "mt-2 !text-[0.65rem] uppercase"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Documents ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseText, {
                          size: "xs",
                          class: "text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Data privacy ")
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "block p-6"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text-center" }, [
                      createVNode(_component_Icon, {
                        name: "ph:note-duotone",
                        class: "group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"
                      }),
                      createVNode(_component_BaseHeading, {
                        tag: "h3",
                        size: "xs",
                        weight: "semibold",
                        class: "mt-2 !text-[0.65rem] uppercase"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Documents ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseText, {
                        size: "xs",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Data privacy ")
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
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseCard, {
          shape: "curved",
          "elevated-hover": "",
          class: "hover:!border-primary-500 group border-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "#",
                class: "block p-6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:upload-duotone",
                      class: "group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseHeading, {
                      tag: "h3",
                      size: "xs",
                      weight: "semibold",
                      class: "mt-2 !text-[0.65rem] uppercase"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Upload `);
                        } else {
                          return [
                            createTextVNode(" Upload ")
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
                          _push4(` Upload settings `);
                        } else {
                          return [
                            createTextVNode(" Upload settings ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-center" }, [
                        createVNode(_component_Icon, {
                          name: "ph:upload-duotone",
                          class: "group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"
                        }),
                        createVNode(_component_BaseHeading, {
                          tag: "h3",
                          size: "xs",
                          weight: "semibold",
                          class: "mt-2 !text-[0.65rem] uppercase"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Upload ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseText, {
                          size: "xs",
                          class: "text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Upload settings ")
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "block p-6"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text-center" }, [
                      createVNode(_component_Icon, {
                        name: "ph:upload-duotone",
                        class: "group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"
                      }),
                      createVNode(_component_BaseHeading, {
                        tag: "h3",
                        size: "xs",
                        weight: "semibold",
                        class: "mt-2 !text-[0.65rem] uppercase"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Upload ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseText, {
                        size: "xs",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Upload settings ")
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
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseCard, {
          shape: "curved",
          "elevated-hover": "",
          class: "hover:!border-primary-500 group border-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "#",
                class: "block p-6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:credit-card-duotone",
                      class: "group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseHeading, {
                      tag: "h3",
                      size: "xs",
                      weight: "semibold",
                      class: "mt-2 !text-[0.65rem] uppercase"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Billing `);
                        } else {
                          return [
                            createTextVNode(" Billing ")
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
                          _push4(` Billing and plans `);
                        } else {
                          return [
                            createTextVNode(" Billing and plans ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-center" }, [
                        createVNode(_component_Icon, {
                          name: "ph:credit-card-duotone",
                          class: "group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"
                        }),
                        createVNode(_component_BaseHeading, {
                          tag: "h3",
                          size: "xs",
                          weight: "semibold",
                          class: "mt-2 !text-[0.65rem] uppercase"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Billing ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseText, {
                          size: "xs",
                          class: "text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Billing and plans ")
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "block p-6"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text-center" }, [
                      createVNode(_component_Icon, {
                        name: "ph:credit-card-duotone",
                        class: "group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"
                      }),
                      createVNode(_component_BaseHeading, {
                        tag: "h3",
                        size: "xs",
                        weight: "semibold",
                        class: "mt-2 !text-[0.65rem] uppercase"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Billing ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseText, {
                        size: "xs",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Billing and plans ")
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
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseCard, {
          shape: "curved",
          "elevated-hover": "",
          class: "hover:!border-primary-500 group border-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "#",
                class: "block p-6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:chat-circle-duotone",
                      class: "group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseHeading, {
                      tag: "h3",
                      size: "xs",
                      weight: "semibold",
                      class: "mt-2 !text-[0.65rem] uppercase"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Messaging `);
                        } else {
                          return [
                            createTextVNode(" Messaging ")
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
                          _push4(` Chat settings `);
                        } else {
                          return [
                            createTextVNode(" Chat settings ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-center" }, [
                        createVNode(_component_Icon, {
                          name: "ph:chat-circle-duotone",
                          class: "group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"
                        }),
                        createVNode(_component_BaseHeading, {
                          tag: "h3",
                          size: "xs",
                          weight: "semibold",
                          class: "mt-2 !text-[0.65rem] uppercase"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Messaging ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseText, {
                          size: "xs",
                          class: "text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Chat settings ")
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "block p-6"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text-center" }, [
                      createVNode(_component_Icon, {
                        name: "ph:chat-circle-duotone",
                        class: "group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"
                      }),
                      createVNode(_component_BaseHeading, {
                        tag: "h3",
                        size: "xs",
                        weight: "semibold",
                        class: "mt-2 !text-[0.65rem] uppercase"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Messaging ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseText, {
                        size: "xs",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Chat settings ")
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
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseCard, {
          shape: "curved",
          "elevated-hover": "",
          class: "hover:!border-primary-500 group border-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "#",
                class: "block p-6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:shield-check-duotone",
                      class: "group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseHeading, {
                      tag: "h3",
                      size: "xs",
                      weight: "semibold",
                      class: "mt-2 !text-[0.65rem] uppercase"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Security `);
                        } else {
                          return [
                            createTextVNode(" Security ")
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
                          _push4(` Security settings `);
                        } else {
                          return [
                            createTextVNode(" Security settings ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-center" }, [
                        createVNode(_component_Icon, {
                          name: "ph:shield-check-duotone",
                          class: "group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"
                        }),
                        createVNode(_component_BaseHeading, {
                          tag: "h3",
                          size: "xs",
                          weight: "semibold",
                          class: "mt-2 !text-[0.65rem] uppercase"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Security ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseText, {
                          size: "xs",
                          class: "text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Security settings ")
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "block p-6"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text-center" }, [
                      createVNode(_component_Icon, {
                        name: "ph:shield-check-duotone",
                        class: "group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"
                      }),
                      createVNode(_component_BaseHeading, {
                        tag: "h3",
                        size: "xs",
                        weight: "semibold",
                        class: "mt-2 !text-[0.65rem] uppercase"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Security ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseText, {
                        size: "xs",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Security settings ")
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
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseCard, {
          shape: "curved",
          "elevated-hover": "",
          class: "hover:!border-primary-500 group border-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "#",
                class: "block p-6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:gear-six-duotone",
                      class: "group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseHeading, {
                      tag: "h3",
                      size: "xs",
                      weight: "semibold",
                      class: "mt-2 !text-[0.65rem] uppercase"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Preferences `);
                        } else {
                          return [
                            createTextVNode(" Preferences ")
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
                          _push4(` General settings `);
                        } else {
                          return [
                            createTextVNode(" General settings ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-center" }, [
                        createVNode(_component_Icon, {
                          name: "ph:gear-six-duotone",
                          class: "group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"
                        }),
                        createVNode(_component_BaseHeading, {
                          tag: "h3",
                          size: "xs",
                          weight: "semibold",
                          class: "mt-2 !text-[0.65rem] uppercase"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Preferences ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseText, {
                          size: "xs",
                          class: "text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" General settings ")
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "block p-6"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text-center" }, [
                      createVNode(_component_Icon, {
                        name: "ph:gear-six-duotone",
                        class: "group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"
                      }),
                      createVNode(_component_BaseHeading, {
                        tag: "h3",
                        size: "xs",
                        weight: "semibold",
                        class: "mt-2 !text-[0.65rem] uppercase"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Preferences ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseText, {
                        size: "xs",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" General settings ")
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
          _: 1
        }, _parent));
        _push(`</div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/profile-settings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=profile-settings-9d3da7fc.mjs.map
