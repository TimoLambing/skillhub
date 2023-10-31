import { s as _sfc_main$E, _ as _sfc_main$p, b as _sfc_main$o, f as __nuxt_component_2, d as _sfc_main$x, e as __nuxt_component_0$5, j as _sfc_main$C } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseButtonIcon-6150946c.mjs';
import { _ as _sfc_main$2 } from './BaseButtonAction-57c21d00.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$1$1, b as _sfc_main$3 } from './DemoFlexTableCell-bbf39793.mjs';
import { _ as _sfc_main$4 } from './BaseTag-734af285.mjs';
import { _ as _sfc_main$5 } from './DemoSearchCompact-ed3fb5da.mjs';
import { _ as _sfc_main$6 } from './BaseTabSlider-c60a6176.mjs';
import { _ as _sfc_main$7 } from './DemoTeamListCompact-a2bffd9a.mjs';
import { _ as _sfc_main$8 } from './DemoTodoListCompact-21f9e043.mjs';
import { defineComponent, ref, withCtx, createVNode, unref, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { Calendar } from 'v-calendar';
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
import './BaseIconBox-642fe941.mjs';
import './BaseCheckboxAnimated-ecb67b13.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "human-resources",
  __ssrInlineRender: true,
  setup(__props) {
    const activeSetting = ref("candidates");
    const items = [
      {
        title: "Messages",
        subtitle: "Inbox messages",
        icon: "ph:envelope-duotone",
        count: 5,
        status: "new"
      },
      {
        title: "Tasks",
        subtitle: "Pending tasks",
        icon: "ph:check-circle-duotone",
        count: 2,
        status: "pending"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseButtonIcon = _sfc_main$1;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseButton = _sfc_main$x;
      const _component_BaseButtonAction = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_DemoFlexTableRow = _sfc_main$2$1;
      const _component_DemoFlexTableStart = _sfc_main$1$1;
      const _component_DemoFlexTableCell = _sfc_main$3;
      const _component_BaseTag = _sfc_main$4;
      const _component_BaseCard = _sfc_main$C;
      const _component_DemoSearchCompact = _sfc_main$5;
      const _component_BaseTabSlider = _sfc_main$6;
      const _component_DemoTeamListCompact = _sfc_main$7;
      const _component_DemoTodoListCompact = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="grid grid-cols-12 gap-6"><div class="ltablet:col-span-8 col-span-12 lg:col-span-8"><div class="flex flex-col gap-6"><div class="bg-primary-700 rounded-xl px-6 py-12"><div class="flex w-full flex-col items-center gap-y-4 sm:flex-row"><div class="flex flex-1 flex-col px-4">`);
      _push(ssrRenderComponent(_component_BaseAvatar, {
        src: "/img/avatars/2.svg",
        size: "lg",
        class: "border-primary-200/50 ring-primary-200/50 ring-offset-primary-600 mb-3 border ring-2 ring-offset-4"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "3xl",
        weight: "bold",
        lead: "none",
        class: "ltablet:!text-2xl text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Welcome back, Maya.</span>`);
          } else {
            return [
              createVNode("span", null, "Welcome back, Maya.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex h-full flex-1 flex-col px-4 sm:px-6">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "md",
        weight: "semibold",
        lead: "tight",
        class: "mb-1 text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>New Rookies</span>`);
          } else {
            return [
              createVNode("span", null, "New Rookies")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "xs",
        lead: "tight",
        class: "mb-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-white"${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praeclarae mortes. </span>`);
          } else {
            return [
              createVNode("span", { class: "text-white" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praeclarae mortes. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-auto flex gap-2">`);
      _push(ssrRenderComponent(_component_BaseAvatar, {
        size: "sm",
        shape: "straight",
        src: "/img/avatars/3.svg",
        class: "nui-mask nui-mask-blob"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseAvatar, {
        size: "sm",
        shape: "straight",
        src: "/img/avatars/9.svg",
        class: "nui-mask nui-mask-blob"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseAvatar, {
        size: "sm",
        shape: "straight",
        src: "/img/avatars/5.svg",
        class: "nui-mask nui-mask-blob"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseButtonIcon, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:plus",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
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
      }, _parent));
      _push(`</div></div><div class="border-primary-300/60 flex h-full flex-1 flex-col px-4 sm:border-l sm:px-6">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "md",
        weight: "semibold",
        lead: "tight",
        class: "mb-1 text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Job Feed</span>`);
          } else {
            return [
              createVNode("span", null, "Job Feed")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "xs",
        lead: "tight",
        class: "mb-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-white"${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praeclarae mortes. </span>`);
          } else {
            return [
              createVNode("span", { class: "text-white" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praeclarae mortes. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-auto">`);
      _push(ssrRenderComponent(_component_BaseButton, { class: "w-full" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Manage Jobs</span>`);
          } else {
            return [
              createVNode("span", null, "Manage Jobs")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><div class="flex flex-col items-center justify-between gap-6 sm:flex-row"><div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "lg",
        weight: "semibold",
        lead: "tight",
        class: "text-muted-800 dark:text-muted-100 mb-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Feed settings</span>`);
          } else {
            return [
              createVNode("span", null, "Feed settings")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex gap-2 sm:justify-end">`);
      _push(ssrRenderComponent(_component_BaseButtonAction, {
        shape: "curved",
        color: unref(activeSetting) === "all" ? "primary" : "default",
        onClick: ($event) => activeSetting.value = "all"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` All `);
          } else {
            return [
              createTextVNode(" All ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButtonAction, {
        shape: "curved",
        color: unref(activeSetting) === "candidates" ? "primary" : "default",
        onClick: ($event) => activeSetting.value = "candidates"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Candidates `);
          } else {
            return [
              createTextVNode(" Candidates ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButtonAction, {
        shape: "curved",
        color: unref(activeSetting) === "companies" ? "primary" : "default",
        onClick: ($event) => activeSetting.value = "companies"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Companies `);
          } else {
            return [
              createTextVNode(" Companies ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="mt-6 grid grid-cols-12 gap-x-6 gap-y-12"><div class="col-span-12 sm:col-span-5"><div class="flex h-full max-w-[240px] flex-col justify-center gap-2">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "md",
        weight: "medium",
        lead: "tight",
        class: "text-muted-800 dark:text-muted-100 mb-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Notifications</span>`);
          } else {
            return [
              createVNode("span", null, "Notifications")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "xs",
        lead: "tight"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-500 dark:text-muted-400"${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Perge porro; Oratio me istius philosophi non offendit; Duo Reges: constructio interrete. </span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Perge porro; Oratio me istius philosophi non offendit; Duo Reges: constructio interrete. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "text-primary-500 font-sans text-xs underline underline-offset-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Learn More</span>`);
          } else {
            return [
              createVNode("span", null, "Learn More")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="col-span-12 sm:col-span-7"><div class="space-y-2"><!--[-->`);
      ssrRenderList(items, (item, index) => {
        _push(ssrRenderComponent(_component_DemoFlexTableRow, {
          key: index,
          shape: "rounded"
        }, {
          start: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_DemoFlexTableStart, {
                label: "type",
                "hide-label": index > 0,
                title: item.title,
                subtitle: item.subtitle,
                icon: item.icon
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_DemoFlexTableStart, {
                  label: "type",
                  "hide-label": index > 0,
                  title: item.title,
                  subtitle: item.subtitle,
                  icon: item.icon
                }, null, 8, ["hide-label", "title", "subtitle", "icon"])
              ];
            }
          }),
          end: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_DemoFlexTableCell, {
                label: "count",
                "hide-label": index > 0,
                class: "w-full sm:w-10"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-muted-500 dark:text-muted-400 font-sans text-sm"${_scopeId2}>${ssrInterpolate(item.count)}</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-muted-500 dark:text-muted-400 font-sans text-sm" }, toDisplayString(item.count), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_DemoFlexTableCell, {
                label: "status",
                "hide-label": index > 0,
                class: "w-full sm:w-16"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_BaseTag, {
                      color: item.status === "new" ? "success" : "muted",
                      shape: "full",
                      flavor: "pastel",
                      size: "sm"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.status)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.status), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_BaseTag, {
                        color: item.status === "new" ? "success" : "muted",
                        shape: "full",
                        flavor: "pastel",
                        size: "sm"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.status), 1)
                        ]),
                        _: 2
                      }, 1032, ["color"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_DemoFlexTableCell, {
                label: "action",
                "hide-label": index > 0
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-primary-500 font-sans text-xs sm:pe-2"${_scopeId2}> Action </span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-primary-500 font-sans text-xs sm:pe-2" }, " Action ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_DemoFlexTableCell, {
                  label: "count",
                  "hide-label": index > 0,
                  class: "w-full sm:w-10"
                }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-muted-500 dark:text-muted-400 font-sans text-sm" }, toDisplayString(item.count), 1)
                  ]),
                  _: 2
                }, 1032, ["hide-label"]),
                createVNode(_component_DemoFlexTableCell, {
                  label: "status",
                  "hide-label": index > 0,
                  class: "w-full sm:w-16"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_BaseTag, {
                      color: item.status === "new" ? "success" : "muted",
                      shape: "full",
                      flavor: "pastel",
                      size: "sm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.status), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"])
                  ]),
                  _: 2
                }, 1032, ["hide-label"]),
                createVNode(_component_DemoFlexTableCell, {
                  label: "action",
                  "hide-label": index > 0
                }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-primary-500 font-sans text-xs sm:pe-2" }, " Action ")
                  ]),
                  _: 2
                }, 1032, ["hide-label"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div><div class="mt-6 flex items-center justify-between gap-6 sm:mt-0"><div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "lg",
        weight: "semibold",
        lead: "tight",
        class: "text-muted-800 dark:text-muted-100 mb-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>New rookies</span>`);
          } else {
            return [
              createVNode("span", null, "New rookies")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex gap-2 sm:justify-end">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg bg-white px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View All `);
          } else {
            return [
              createTextVNode(" View All ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="grid gap-6 sm:grid-cols-3"><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        class: "p-6",
        shape: "curved"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              size: "xl",
              src: "/img/avatars/5.svg",
              "badge-src": "/img/stacks/js.svg",
              alt: "Avatar",
              class: "mx-auto mb-4"
            }, null, _parent2, _scopeId));
            _push2(`<div class="text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "md",
              weight: "medium",
              lead: "tight",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Clarissa Miller</span>`);
                } else {
                  return [
                    createVNode("span", null, "Clarissa Miller")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}>UI/UX designer</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, "UI/UX designer")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              href: "/",
              shape: "curved",
              color: "default",
              class: "w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>View Profile</span>`);
                } else {
                  return [
                    createVNode("span", null, "View Profile")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col" }, [
                createVNode(_component_BaseAvatar, {
                  size: "xl",
                  src: "/img/avatars/5.svg",
                  "badge-src": "/img/stacks/js.svg",
                  alt: "Avatar",
                  class: "mx-auto mb-4"
                }),
                createVNode("div", { class: "text-center" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "md",
                    weight: "medium",
                    lead: "tight",
                    class: "text-muted-800 dark:text-muted-100"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Clarissa Miller")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseParagraph, { size: "xs" }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-muted-400" }, "UI/UX designer")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "mt-3" }, [
                    createVNode(_component_BaseButton, {
                      href: "/",
                      shape: "curved",
                      color: "default",
                      class: "w-full"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "View Profile")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        class: "p-6",
        shape: "curved"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              size: "xl",
              src: "/img/avatars/16.svg",
              "badge-src": "/img/stacks/vuejs.svg",
              alt: "Avatar",
              class: "mx-auto mb-4"
            }, null, _parent2, _scopeId));
            _push2(`<div class="text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "md",
              weight: "medium",
              lead: "tight",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Joshua Stevens</span>`);
                } else {
                  return [
                    createVNode("span", null, "Joshua Stevens")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}>Fullstack developer</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, "Fullstack developer")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              href: "/",
              shape: "curved",
              color: "default",
              class: "w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>View Profile</span>`);
                } else {
                  return [
                    createVNode("span", null, "View Profile")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col" }, [
                createVNode(_component_BaseAvatar, {
                  size: "xl",
                  src: "/img/avatars/16.svg",
                  "badge-src": "/img/stacks/vuejs.svg",
                  alt: "Avatar",
                  class: "mx-auto mb-4"
                }),
                createVNode("div", { class: "text-center" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "md",
                    weight: "medium",
                    lead: "tight",
                    class: "text-muted-800 dark:text-muted-100"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Joshua Stevens")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseParagraph, { size: "xs" }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-muted-400" }, "Fullstack developer")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "mt-3" }, [
                    createVNode(_component_BaseButton, {
                      href: "/",
                      shape: "curved",
                      color: "default",
                      class: "w-full"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "View Profile")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        class: "p-6",
        shape: "curved"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              size: "xl",
              src: "/img/avatars/12.svg",
              "badge-src": "/img/stacks/reactjs.svg",
              alt: "Avatar",
              class: "mx-auto mb-4"
            }, null, _parent2, _scopeId));
            _push2(`<div class="text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "md",
              weight: "medium",
              lead: "tight",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Margot Reinier</span>`);
                } else {
                  return [
                    createVNode("span", null, "Margot Reinier")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}>Web developer</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, "Web developer")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              href: "/",
              shape: "curved",
              color: "default",
              class: "w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>View Profile</span>`);
                } else {
                  return [
                    createVNode("span", null, "View Profile")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col" }, [
                createVNode(_component_BaseAvatar, {
                  size: "xl",
                  src: "/img/avatars/12.svg",
                  "badge-src": "/img/stacks/reactjs.svg",
                  alt: "Avatar",
                  class: "mx-auto mb-4"
                }),
                createVNode("div", { class: "text-center" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "md",
                    weight: "medium",
                    lead: "tight",
                    class: "text-muted-800 dark:text-muted-100"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Margot Reinier")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseParagraph, { size: "xs" }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-muted-400" }, "Web developer")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "mt-3" }, [
                    createVNode(_component_BaseButton, {
                      href: "/",
                      shape: "curved",
                      color: "default",
                      class: "w-full"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "View Profile")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><div class="ltablet:col-span-4 col-span-12 lg:col-span-4"><div class="flex flex-col gap-6">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex w-full items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_DemoSearchCompact, { shape: "curved" }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex w-full items-center justify-between" }, [
                createVNode(_component_DemoSearchCompact, { shape: "curved" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseTabSlider, {
              size: "sm",
              "model-value": "team",
              tabs: [
                { label: "Team", value: "team" },
                { label: "Tasks", value: "tasks" }
              ]
            }, {
              default: withCtx(({ activeValue }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (activeValue === "team") {
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_DemoTeamListCompact, { actions: "" }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else if (activeValue === "tasks") {
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_DemoTodoListCompact, null, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    activeValue === "team" ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode(_component_DemoTeamListCompact, { actions: "" })
                    ])) : activeValue === "tasks" ? (openBlock(), createBlock("div", { key: 1 }, [
                      createVNode(_component_DemoTodoListCompact)
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseTabSlider, {
                size: "sm",
                "model-value": "team",
                tabs: [
                  { label: "Team", value: "team" },
                  { label: "Tasks", value: "tasks" }
                ]
              }, {
                default: withCtx(({ activeValue }) => [
                  activeValue === "team" ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode(_component_DemoTeamListCompact, { actions: "" })
                  ])) : activeValue === "tasks" ? (openBlock(), createBlock("div", { key: 1 }, [
                    createVNode(_component_DemoTodoListCompact)
                  ])) : createCommentVNode("", true)
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
        class: "p-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Calendar), {
              attributes: [
                {
                  key: "today",
                  dot: true,
                  bar: false,
                  content: "Today",
                  customData: {},
                  event: {},
                  hashcode: "today",
                  highlight: false,
                  order: 0,
                  pinPage: false,
                  popover: {},
                  dates: [/* @__PURE__ */ new Date()]
                }
              ],
              "title-position": "left",
              expanded: "",
              borderless: "",
              transparent: "",
              "trim-weeks": "",
              class: "max-w-full rounded-xl"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Calendar), {
                attributes: [
                  {
                    key: "today",
                    dot: true,
                    bar: false,
                    content: "Today",
                    customData: {},
                    event: {},
                    hashcode: "today",
                    highlight: false,
                    order: 0,
                    pinPage: false,
                    popover: {},
                    dates: [/* @__PURE__ */ new Date()]
                  }
                ],
                "title-position": "left",
                expanded: "",
                borderless: "",
                transparent: "",
                "trim-weeks": "",
                class: "max-w-full rounded-xl"
              }, null, 8, ["attributes"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/human-resources.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=human-resources-e776e846.mjs.map
