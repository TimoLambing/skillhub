import { _ as _sfc_main$1, a as _sfc_main$2 } from './BaseDropdownItem-864908ca.mjs';
import { _ as __nuxt_component_3 } from './BaseDropdownDivider-258f8823.mjs';
import { f as __nuxt_component_2, s as _sfc_main$E, _ as _sfc_main$p, b as _sfc_main$o, i as _sfc_main$D, e as __nuxt_component_0$5, j as _sfc_main$C, d as _sfc_main$x } from '../server.mjs';
import { _ as __nuxt_component_0 } from './BaseProgressCircle-f74c4642.mjs';
import { _ as _sfc_main$3 } from './BaseSwitchBall-c7b340a1.mjs';
import { _ as _sfc_main$4 } from './BaseButtonIcon-6150946c.mjs';
import { defineComponent, withAsyncContext, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-45c1546c.mjs';
import { g as getRandomColor } from './colors-16c42002.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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
import './IconCheck-b31ac5c7.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "profile",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/profile", "$Qs8UrkELvf")), __temp = await __temp, __restore(), __temp);
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
      const _component_BaseProgressCircle = __nuxt_component_0;
      const _component_BaseButton = _sfc_main$x;
      const _component_BaseSwitchBall = _sfc_main$3;
      const _component_BaseButtonIcon = _sfc_main$4;
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
        _push(`<!--]--></div></div></div></div><div class="mt-6 grid grid-cols-12 gap-6"><div class="col-span-12 sm:col-span-8"><div class="flex flex-col gap-6">`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-8" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="border-muted-200 dark:border-muted-700 border-b pb-8"${_scopeId}><div class="mb-4 flex items-center gap-2"${_scopeId}><h4 class="text-muted-400 font-sans text-xs font-semibold uppercase"${_scopeId}> About me </h4></div><div class="relative"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "sm",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(data)?.personalInfo.longBio)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(data)?.personalInfo.longBio), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div><div class="border-muted-200 dark:border-muted-700 border-b py-8"${_scopeId}><div class="mb-8 flex items-center gap-2"${_scopeId}><h4 class="text-muted-400 font-sans text-xs font-semibold uppercase"${_scopeId}> Experiences </h4></div><div class="grid gap-x-4 gap-y-8 sm:grid-cols-2"${_scopeId}><!--[-->`);
              ssrRenderList(unref(data).personalInfo.experiences, (item) => {
                _push2(`<div class="flex w-full items-center gap-2"${_scopeId}><img${ssrRenderAttr("src", item.logo)}${ssrRenderAttr("alt", item.company)} class="border-muted-200 dark:border-muted-600 dark:bg-muted-700 max-w-[50px] rounded-full border bg-white"${_scopeId}><div${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseHeading, {
                  tag: "h3",
                  size: "sm",
                  weight: "medium"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item.company)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.company), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_BaseParagraph, {
                  size: "xs",
                  class: "text-muted-400"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span${_scopeId2}>${ssrInterpolate(item.period)}</span>`);
                    } else {
                      return [
                        createVNode("span", null, toDisplayString(item.period), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_BaseParagraph, {
                  size: "xs",
                  class: "text-primary-500"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span${_scopeId2}>${ssrInterpolate(item.position)}</span>`);
                    } else {
                      return [
                        createVNode("span", null, toDisplayString(item.position), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div></div>`);
              });
              _push2(`<!--]--></div></div><div class="border-muted-200 dark:border-muted-700 border-b py-8"${_scopeId}><div class="mb-8 flex items-center gap-2"${_scopeId}><h4 class="text-muted-400 font-sans text-xs font-semibold uppercase"${_scopeId}> Languages </h4></div><div class="grid gap-x-4 gap-y-8 sm:grid-cols-2"${_scopeId}><!--[-->`);
              ssrRenderList(unref(data).personalInfo.languages, (item) => {
                _push2(`<div class="flex w-full items-center gap-2"${_scopeId}><div class="border-muted-200 dark:border-muted-600 dark:bg-muted-700 relative flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border bg-white"${_scopeId}><img${ssrRenderAttr("src", item.icon)}${ssrRenderAttr("alt", item.name)} class="h-8 w-8 rounded-full"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseProgressCircle, {
                  size: 68,
                  thickness: 1.5,
                  value: item.level,
                  class: "text-primary-500 absolute -start-2.5 -top-2.5"
                }, null, _parent2, _scopeId));
                _push2(`</div><div${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseHeading, {
                  tag: "h3",
                  size: "sm",
                  weight: "medium"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item.name)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.name), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_BaseParagraph, {
                  size: "xs",
                  class: "text-muted-400"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span${_scopeId2}>${ssrInterpolate(item.mastery)}</span>`);
                    } else {
                      return [
                        createVNode("span", null, toDisplayString(item.mastery), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div></div>`);
              });
              _push2(`<!--]--></div></div><div class="py-8"${_scopeId}><div class="mb-8 flex items-center gap-2"${_scopeId}><h4 class="text-muted-400 font-sans text-xs font-semibold uppercase"${_scopeId}> Skills </h4></div><div class="space-y-8"${_scopeId}><!--[-->`);
              ssrRenderList(unref(data).personalInfo.skills, (item) => {
                _push2(`<div class="flex w-full items-center gap-2"${_scopeId}><div class="border-muted-200 dark:border-muted-600 dark:bg-muted-700 relative flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border bg-white"${_scopeId}>`);
                if ("logo" in item) {
                  _push2(`<img${ssrRenderAttr("src", item.logo)}${ssrRenderAttr("alt", item.name)} class="h-8 w-8 rounded-full"${_scopeId}>`);
                } else {
                  _push2(ssrRenderComponent(_component_Icon, {
                    name: item.icon,
                    class: "text-muted-400 h-6 w-6"
                  }, null, _parent2, _scopeId));
                }
                _push2(ssrRenderComponent(_component_BaseProgressCircle, {
                  size: 68,
                  thickness: 1.5,
                  value: item.level,
                  class: "text-primary-500 absolute -start-2.5 -top-2.5"
                }, null, _parent2, _scopeId));
                _push2(`</div><div${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseHeading, {
                  tag: "h3",
                  size: "sm",
                  weight: "medium"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item.name)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.name), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_BaseParagraph, {
                  size: "xs",
                  class: "text-muted-400"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span${_scopeId2}>${ssrInterpolate(item.experience)} years of experience</span>`);
                    } else {
                      return [
                        createVNode("span", null, toDisplayString(item.experience) + " years of experience", 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div><div class="ms-auto flex items-center gap-2"${_scopeId}><!--[-->`);
                ssrRenderList(item.related.people, (user) => {
                  _push2(ssrRenderComponent(_component_BaseAvatar, {
                    key: user.name,
                    src: "src" in user ? user.src : void 0,
                    text: user.text,
                    class: ("getRandomColor" in _ctx ? _ctx.getRandomColor : unref(getRandomColor))(),
                    "data-nui-tooltip": user.name,
                    size: "xs"
                  }, null, _parent2, _scopeId));
                });
                _push2(`<!--]--></div></div>`);
              });
              _push2(`<!--]--></div></div><div class="py-6"${_scopeId}><div class="mx-auto w-full max-w-[240px]"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButton, { class: "w-full" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Load More`);
                  } else {
                    return [
                      createTextVNode("Load More")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "border-muted-200 dark:border-muted-700 border-b pb-8" }, [
                  createVNode("div", { class: "mb-4 flex items-center gap-2" }, [
                    createVNode("h4", { class: "text-muted-400 font-sans text-xs font-semibold uppercase" }, " About me ")
                  ]),
                  createVNode("div", { class: "relative" }, [
                    createVNode(_component_BaseParagraph, {
                      size: "sm",
                      class: "text-muted-500 dark:text-muted-400"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(data)?.personalInfo.longBio), 1)
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "border-muted-200 dark:border-muted-700 border-b py-8" }, [
                  createVNode("div", { class: "mb-8 flex items-center gap-2" }, [
                    createVNode("h4", { class: "text-muted-400 font-sans text-xs font-semibold uppercase" }, " Experiences ")
                  ]),
                  createVNode("div", { class: "grid gap-x-4 gap-y-8 sm:grid-cols-2" }, [
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
                        ])
                      ]);
                    }), 128))
                  ])
                ]),
                createVNode("div", { class: "border-muted-200 dark:border-muted-700 border-b py-8" }, [
                  createVNode("div", { class: "mb-8 flex items-center gap-2" }, [
                    createVNode("h4", { class: "text-muted-400 font-sans text-xs font-semibold uppercase" }, " Languages ")
                  ]),
                  createVNode("div", { class: "grid gap-x-4 gap-y-8 sm:grid-cols-2" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(data).personalInfo.languages, (item) => {
                      return openBlock(), createBlock("div", {
                        key: item.name,
                        class: "flex w-full items-center gap-2"
                      }, [
                        createVNode("div", { class: "border-muted-200 dark:border-muted-600 dark:bg-muted-700 relative flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border bg-white" }, [
                          createVNode("img", {
                            src: item.icon,
                            alt: item.name,
                            class: "h-8 w-8 rounded-full"
                          }, null, 8, ["src", "alt"]),
                          createVNode(_component_BaseProgressCircle, {
                            size: 68,
                            thickness: 1.5,
                            value: item.level,
                            class: "text-primary-500 absolute -start-2.5 -top-2.5"
                          }, null, 8, ["value"])
                        ]),
                        createVNode("div", null, [
                          createVNode(_component_BaseHeading, {
                            tag: "h3",
                            size: "sm",
                            weight: "medium"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_BaseParagraph, {
                            size: "xs",
                            class: "text-muted-400"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, toDisplayString(item.mastery), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ])
                      ]);
                    }), 128))
                  ])
                ]),
                createVNode("div", { class: "py-8" }, [
                  createVNode("div", { class: "mb-8 flex items-center gap-2" }, [
                    createVNode("h4", { class: "text-muted-400 font-sans text-xs font-semibold uppercase" }, " Skills ")
                  ]),
                  createVNode("div", { class: "space-y-8" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(data).personalInfo.skills, (item) => {
                      return openBlock(), createBlock("div", {
                        key: item.name,
                        class: "flex w-full items-center gap-2"
                      }, [
                        createVNode("div", { class: "border-muted-200 dark:border-muted-600 dark:bg-muted-700 relative flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border bg-white" }, [
                          "logo" in item ? (openBlock(), createBlock("img", {
                            key: 0,
                            src: item.logo,
                            alt: item.name,
                            class: "h-8 w-8 rounded-full"
                          }, null, 8, ["src", "alt"])) : (openBlock(), createBlock(_component_Icon, {
                            key: 1,
                            name: item.icon,
                            class: "text-muted-400 h-6 w-6"
                          }, null, 8, ["name"])),
                          createVNode(_component_BaseProgressCircle, {
                            size: 68,
                            thickness: 1.5,
                            value: item.level,
                            class: "text-primary-500 absolute -start-2.5 -top-2.5"
                          }, null, 8, ["value"])
                        ]),
                        createVNode("div", null, [
                          createVNode(_component_BaseHeading, {
                            tag: "h3",
                            size: "sm",
                            weight: "medium"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_BaseParagraph, {
                            size: "xs",
                            class: "text-muted-400"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, toDisplayString(item.experience) + " years of experience", 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        createVNode("div", { class: "ms-auto flex items-center gap-2" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(item.related.people, (user) => {
                            return openBlock(), createBlock(_component_BaseAvatar, {
                              key: user.name,
                              src: "src" in user ? user.src : void 0,
                              text: user.text,
                              class: ("getRandomColor" in _ctx ? _ctx.getRandomColor : unref(getRandomColor))(),
                              "data-nui-tooltip": user.name,
                              size: "xs"
                            }, null, 8, ["src", "text", "class", "data-nui-tooltip"]);
                          }), 128))
                        ])
                      ]);
                    }), 128))
                  ])
                ]),
                createVNode("div", { class: "py-6" }, [
                  createVNode("div", { class: "mx-auto w-full max-w-[240px]" }, [
                    createVNode(_component_BaseButton, { class: "w-full" }, {
                      default: withCtx(() => [
                        createTextVNode("Load More")
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
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-8" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="mb-8 flex items-center gap-2"${_scopeId}><h4 class="text-muted-400 font-sans text-xs font-semibold uppercase"${_scopeId}> Recommendations </h4></div><div class="grid gap-6 sm:grid-cols-2"${_scopeId}><!--[-->`);
              ssrRenderList(unref(data).personalInfo.recommandations, (item) => {
                _push2(`<div class="bg-muted-100 dark:bg-muted-700/60 rounded-md p-5"${_scopeId}><div class="flex flex-col py-4"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseAvatar, {
                  src: item.src,
                  text: item.text,
                  size: "lg",
                  "badge-src": item.badge,
                  class: "mx-auto"
                }, null, _parent2, _scopeId));
                _push2(`<div class="py-4 text-center"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseHeading, {
                  tag: "h3",
                  size: "md",
                  weight: "medium"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item.name)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.name), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_BaseText, {
                  size: "xs",
                  class: "text-muted-400 mb-4"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span${_scopeId2}>${ssrInterpolate(item.role)}</span>`);
                    } else {
                      return [
                        createVNode("span", null, toDisplayString(item.role), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_BaseParagraph, {
                  size: "xs",
                  class: "text-muted-400"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span${_scopeId2}>${ssrInterpolate(item.text)}</span>`);
                    } else {
                      return [
                        createVNode("span", null, toDisplayString(item.text), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`<div class="mt-4"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseText, {
                  size: "xs",
                  class: "text-primary-500"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span${_scopeId2}>${ssrInterpolate(item.date)}</span>`);
                    } else {
                      return [
                        createVNode("span", null, toDisplayString(item.date), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div></div></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "mb-8 flex items-center gap-2" }, [
                  createVNode("h4", { class: "text-muted-400 font-sans text-xs font-semibold uppercase" }, " Recommendations ")
                ]),
                createVNode("div", { class: "grid gap-6 sm:grid-cols-2" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(data).personalInfo.recommandations, (item) => {
                    return openBlock(), createBlock("div", {
                      key: item.name,
                      class: "bg-muted-100 dark:bg-muted-700/60 rounded-md p-5"
                    }, [
                      createVNode("div", { class: "flex flex-col py-4" }, [
                        createVNode(_component_BaseAvatar, {
                          src: item.src,
                          text: item.text,
                          size: "lg",
                          "badge-src": item.badge,
                          class: "mx-auto"
                        }, null, 8, ["src", "text", "badge-src"]),
                        createVNode("div", { class: "py-4 text-center" }, [
                          createVNode(_component_BaseHeading, {
                            tag: "h3",
                            size: "md",
                            weight: "medium"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_BaseText, {
                            size: "xs",
                            class: "text-muted-400 mb-4"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, toDisplayString(item.role), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_BaseParagraph, {
                            size: "xs",
                            class: "text-muted-400"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, toDisplayString(item.text), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode("div", { class: "mt-4" }, [
                            createVNode(_component_BaseText, {
                              size: "xs",
                              class: "text-primary-500"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", null, toDisplayString(item.date), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ])
                      ])
                    ]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="col-span-12 sm:col-span-4"><div class="flex flex-col gap-6">`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-8" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="mb-8 flex items-center gap-2"${_scopeId}><h4 class="text-muted-400 font-sans text-xs font-semibold uppercase"${_scopeId}> Notifications </h4><div class="ms-auto"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseSwitchBall, {
                modelValue: unref(data).notifications,
                "onUpdate:modelValue": ($event) => unref(data).notifications = $event
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "xs",
                class: "text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Enable or disable this setting to manage if your network should be notified when you make changes to your profile. `);
                  } else {
                    return [
                      createTextVNode(" Enable or disable this setting to manage if your network should be notified when you make changes to your profile. ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "mb-8 flex items-center gap-2" }, [
                  createVNode("h4", { class: "text-muted-400 font-sans text-xs font-semibold uppercase" }, " Notifications "),
                  createVNode("div", { class: "ms-auto" }, [
                    createVNode(_component_BaseSwitchBall, {
                      modelValue: unref(data).notifications,
                      "onUpdate:modelValue": ($event) => unref(data).notifications = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                createVNode("div", null, [
                  createVNode(_component_BaseParagraph, {
                    size: "xs",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Enable or disable this setting to manage if your network should be notified when you make changes to your profile. ")
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-8" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="mb-8 flex items-center gap-2"${_scopeId}><h4 class="text-muted-400 font-sans text-xs font-semibold uppercase"${_scopeId}> Tools </h4></div><div class="space-y-6"${_scopeId}><!--[-->`);
              ssrRenderList(unref(data).personalInfo.tools, (item) => {
                _push2(`<div class="flex w-full items-center gap-2"${_scopeId}><div class="border-muted-200 dark:border-muted-600 dark:bg-muted-700 relative flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border bg-white"${_scopeId}><img${ssrRenderAttr("src", item.logo)}${ssrRenderAttr("alt", item.name)} class="h-8 w-8 rounded-full"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseProgressCircle, {
                  size: 68,
                  thickness: 1.5,
                  value: item.level,
                  class: "text-primary-500 absolute -start-2.5 -top-2.5"
                }, null, _parent2, _scopeId));
                _push2(`</div><div${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseHeading, {
                  tag: "h3",
                  size: "sm",
                  weight: "medium"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item.name)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.name), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_BaseParagraph, {
                  size: "xs",
                  class: "text-muted-400"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span${_scopeId2}>${ssrInterpolate(item.mastery)}</span>`);
                    } else {
                      return [
                        createVNode("span", null, toDisplayString(item.mastery), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "mb-8 flex items-center gap-2" }, [
                  createVNode("h4", { class: "text-muted-400 font-sans text-xs font-semibold uppercase" }, " Tools ")
                ]),
                createVNode("div", { class: "space-y-6" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(data).personalInfo.tools, (item) => {
                    return openBlock(), createBlock("div", {
                      key: item.name,
                      class: "flex w-full items-center gap-2"
                    }, [
                      createVNode("div", { class: "border-muted-200 dark:border-muted-600 dark:bg-muted-700 relative flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border bg-white" }, [
                        createVNode("img", {
                          src: item.logo,
                          alt: item.name,
                          class: "h-8 w-8 rounded-full"
                        }, null, 8, ["src", "alt"]),
                        createVNode(_component_BaseProgressCircle, {
                          size: 68,
                          thickness: 1.5,
                          value: item.level,
                          class: "text-primary-500 absolute -start-2.5 -top-2.5"
                        }, null, 8, ["value"])
                      ]),
                      createVNode("div", null, [
                        createVNode(_component_BaseHeading, {
                          tag: "h3",
                          size: "sm",
                          weight: "medium"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_BaseParagraph, {
                          size: "xs",
                          class: "text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, toDisplayString(item.mastery), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ])
                    ]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-8" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="mb-8 flex items-center gap-2"${_scopeId}><h4 class="text-muted-400 font-sans text-xs font-semibold uppercase"${_scopeId}> Recent Views </h4></div><div class="space-y-6"${_scopeId}><!--[-->`);
              ssrRenderList(unref(data).personalInfo.viewed, (item) => {
                _push2(`<div class="flex w-full items-center gap-2"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseAvatar, {
                  src: item.src,
                  text: item.text,
                  size: "xs",
                  "badge-src": item.badge,
                  class: ("getRandomColor" in _ctx ? _ctx.getRandomColor : unref(getRandomColor))()
                }, null, _parent2, _scopeId));
                _push2(`<div${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseHeading, {
                  tag: "h3",
                  size: "sm",
                  weight: "medium"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item.name)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.name), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_BaseParagraph, {
                  size: "xs",
                  class: "text-muted-400"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span${_scopeId2}>${ssrInterpolate(item.role)}</span>`);
                    } else {
                      return [
                        createVNode("span", null, toDisplayString(item.role), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div><div class="ms-auto"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                  to: "#",
                  size: "sm",
                  shape: "full",
                  "data-nui-tooltip": "View Profile"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "lucide:arrow-right",
                        class: "h-4 w-4"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_Icon, {
                          name: "lucide:arrow-right",
                          class: "h-4 w-4"
                        })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "mb-8 flex items-center gap-2" }, [
                  createVNode("h4", { class: "text-muted-400 font-sans text-xs font-semibold uppercase" }, " Recent Views ")
                ]),
                createVNode("div", { class: "space-y-6" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(data).personalInfo.viewed, (item) => {
                    return openBlock(), createBlock("div", {
                      key: item.name,
                      class: "flex w-full items-center gap-2"
                    }, [
                      createVNode(_component_BaseAvatar, {
                        src: item.src,
                        text: item.text,
                        size: "xs",
                        "badge-src": item.badge,
                        class: ("getRandomColor" in _ctx ? _ctx.getRandomColor : unref(getRandomColor))()
                      }, null, 8, ["src", "text", "badge-src", "class"]),
                      createVNode("div", null, [
                        createVNode(_component_BaseHeading, {
                          tag: "h3",
                          size: "sm",
                          weight: "medium"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_BaseParagraph, {
                          size: "xs",
                          class: "text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, toDisplayString(item.role), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      createVNode("div", { class: "ms-auto" }, [
                        createVNode(_component_BaseButtonIcon, {
                          to: "#",
                          size: "sm",
                          shape: "full",
                          "data-nui-tooltip": "View Profile"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_Icon, {
                              name: "lucide:arrow-right",
                              class: "h-4 w-4"
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=profile-97275f65.mjs.map
