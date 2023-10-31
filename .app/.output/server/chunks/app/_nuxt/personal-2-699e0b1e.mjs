import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { k as useTailwindColors, j as _sfc_main$C, s as _sfc_main$E, _ as _sfc_main$p, b as _sfc_main$o, e as __nuxt_component_0$5, f as __nuxt_component_2, d as _sfc_main$x, l as _export_sfc } from '../server.mjs';
import { _ as _sfc_main$6 } from './BaseAvatarGroup-6e7b4ecf.mjs';
import { useSSRContext, defineComponent, reactive, ref, withCtx, createVNode, createTextVNode, unref, mergeProps, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _sfc_main$3 } from './AddonApexcharts-b71489ed.mjs';
import { _ as _sfc_main$4 } from './DemoTeamListCompact-a2bffd9a.mjs';
import { _ as _sfc_main$5 } from './DemoTodoListCompact-21f9e043.mjs';
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
import '@headlessui/vue';
import '@vue/shared';
import 'chroma-js';
import 'tailwindcss/colors.js';
import './client-only-0428ba17.mjs';
import './BaseButtonIcon-6150946c.mjs';
import './BaseCheckboxAnimated-ecb67b13.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DemoProjectListCompact",
  __ssrInlineRender: true,
  setup(__props) {
    const projects = [
      {
        id: 0,
        name: "Delivery App Project",
        image: "/img/icons/logos/fastpizza.svg",
        badge: "/img/stacks/illustrator.svg",
        updated: "30m ago",
        members: [
          {
            tooltip: "Clarke Smith",
            src: "/img/avatars/3.svg"
          },
          {
            tooltip: "Clarissa Gheller",
            src: "/img/avatars/5.svg"
          }
        ]
      },
      {
        id: 1,
        name: "Health and Fitness Dashboard",
        image: "/img/icons/logos/slicer.svg",
        badge: "/img/stacks/reactjs.svg",
        updated: "30m ago",
        members: [
          {
            tooltip: "Maya (You)",
            src: "/img/avatars/2.svg"
          },
          {
            tooltip: "John Rowner",
            src: "/img/avatars/6.svg"
          },
          {
            tooltip: "Maggie Pitts",
            src: "/img/avatars/9.svg"
          }
        ]
      },
      {
        id: 2,
        name: "Learning Tracker Dashboard",
        image: "/img/icons/logos/metamovies.svg",
        badge: "/img/stacks/angular.svg",
        updated: "30m ago",
        members: [
          {
            tooltip: "Alan Mariovski",
            src: "/img/avatars/11.svg"
          },
          {
            tooltip: "Robert Mapa",
            src: "/img/avatars/7.svg"
          },
          {
            tooltip: "Chris Welling",
            src: "/img/avatars/8.svg"
          },
          {
            tooltip: "Ruth Raminov",
            src: "/img/avatars/19.svg"
          }
        ]
      },
      {
        id: 3,
        name: "Marketing Dashboard",
        image: "/img/icons/logos/envato.svg",
        badge: "/img/stacks/js.svg",
        updated: "30m ago",
        members: [
          {
            tooltip: "Maya (You)",
            src: "/img/avatars/2.svg"
          },
          {
            tooltip: "Maggie Pitts",
            src: "/img/avatars/9.svg"
          }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseAvatarGroup = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><!--[-->`);
      ssrRenderList(projects, (project) => {
        _push(`<div class="flex items-center gap-4">`);
        _push(ssrRenderComponent(_component_BaseAvatar, {
          src: project.image,
          "badge-src": project.badge,
          class: "shrink-0"
        }, null, _parent));
        _push(`<div>`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h4",
          size: "md",
          weight: "light",
          lead: "tight",
          class: "text-muted-800 dark:text-white"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(project.name)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(project.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-muted-400"${_scopeId}>Last updated ${ssrInterpolate(project.updated)}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-muted-400" }, "Last updated " + toDisplayString(project.updated), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="ms-auto hidden md:block">`);
        _push(ssrRenderComponent(_component_BaseAvatarGroup, {
          avatars: project.members,
          size: "sm",
          limit: 3
        }, null, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoProjectListCompact.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "image", {}, null, _push, _parent);
  _push(`<div class="mt-4 text-center">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<div class="mt-4">`);
  ssrRenderSlot(_ctx.$slots, "action", {}, null, _push, _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoPlaceholderCompact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_10 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _imports_0 = "" + publicAssetsURL("img/illustrations/placeholders/flat/chart-guy.svg");
const _imports_1 = "" + publicAssetsURL("img/illustrations/placeholders/flat/chart-guy-dark.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "personal-2",
  __ssrInlineRender: true,
  setup(__props) {
    const areaTaskCompletion = reactive(useAreaTaskCompletion());
    const barTeamEfficiency = reactive(useBarTeamEfficiency());
    function useAreaTaskCompletion() {
      const { primary, info, success } = useTailwindColors();
      const type = "area";
      const height = 295;
      const options = {
        chart: {
          toolbar: {
            show: false
          }
        },
        colors: [success.value, info.value, primary.value],
        legend: {
          position: "top"
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [2, 2, 2],
          curve: "smooth"
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2020-09-19T00:00:00.000Z",
            "2020-09-20T01:30:00.000Z",
            "2020-09-21T02:30:00.000Z",
            "2020-09-22T03:30:00.000Z",
            "2020-09-23T04:30:00.000Z",
            "2020-09-24T05:30:00.000Z",
            "2020-09-25T06:30:00.000Z"
          ]
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm"
          }
        }
      };
      const series = ref([
        {
          name: "Pending",
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: "Completed",
          data: [11, 32, 45, 32, 34, 52, 41]
        },
        {
          name: "Blocked",
          data: [78, 53, 36, 10, 14, 5, 2]
        }
      ]);
      return {
        type,
        height,
        options,
        series
      };
    }
    function useBarTeamEfficiency() {
      const { primary, info, success } = useTailwindColors();
      const type = "bar";
      const height = 250;
      const options = {
        chart: {
          toolbar: {
            show: false
          }
        },
        colors: [success.value, info.value, primary.value],
        legend: {
          position: "top"
        },
        plotOptions: {
          bar: {
            horizontal: false,
            endingShape: "rounded",
            columnWidth: "55%"
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"]
        },
        xaxis: {
          categories: [
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct"
          ]
        },
        yaxis: {
          labels: {
            formatter: function(val) {
              return val + 70;
            }
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return val + "hrs";
            }
          }
        }
      };
      const series = ref([
        {
          name: "Design",
          data: [-26, -15, -13, -14, -9, -12, -7, -10, -4]
        },
        {
          name: "Development",
          data: [6, 15, 31, 28, 17, 35, 21, 44, 24]
        },
        {
          name: "Management",
          data: [-35, -29, -34, -44, -25, -22, -18, -17, -29]
        }
      ]);
      return {
        type,
        height,
        options,
        series
      };
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_Icon = __nuxt_component_2;
      const _component_DemoProjectListCompact = _sfc_main$2;
      const _component_AddonApexcharts = _sfc_main$3;
      const _component_DemoTeamListCompact = _sfc_main$4;
      const _component_DemoTodoListCompact = _sfc_main$5;
      const _component_DemoPlaceholderCompact = __nuxt_component_10;
      const _component_BaseButton = _sfc_main$x;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="grid grid-cols-12 gap-6"><div class="col-span-12">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col items-center md:flex-row"${_scopeId}><div class="ltablet:flex-row ltablet:items-center flex flex-col items-center gap-4 text-center md:items-start md:text-left lg:flex-row lg:items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              src: "/img/avatars/2.svg",
              size: "xl",
              "badge-src": "/img/icons/flags/united-states-of-america.svg"
            }, null, _parent2, _scopeId));
            _push2(`<div class="text-center md:text-left"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h2",
              size: "xl",
              weight: "light",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Welcome back, Maya</span>`);
                } else {
                  return [
                    createVNode("span", null, "Welcome back, Maya")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}>It&#39;s nice to see you again</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, "It's nice to see you again")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="ltablet:flex-row ltablet:items-center ms-auto flex flex-col gap-6 text-center md:text-left lg:flex-row lg:items-center"${_scopeId}><div class="flex-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "3xl",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}> 31 <small class="text-base font-medium"${_scopeId2}>Tasks</small></span>`);
                } else {
                  return [
                    createVNode("span", null, [
                      createTextVNode(" 31 "),
                      createVNode("small", { class: "text-base font-medium" }, "Tasks")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400 text-sm"${_scopeId2}> Are currently pending </span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400 text-sm" }, " Are currently pending ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_BaseCard, { class: "from-primary-600 to-primary-700 shadow-primary-500/20 relative flex flex-1 items-center justify-center bg-gradient-to-br p-5 shadow-xl" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="relative z-20 flex flex-col gap-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseParagraph, { size: "sm" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-white/80"${_scopeId3}> Start using our team and project management tools </span>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-white/80" }, " Start using our team and project management tools ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    class: "font-sans text-sm text-white underline-offset-4 hover:underline",
                    to: "#"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Learn More `);
                      } else {
                        return [
                          createTextVNode(" Learn More ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="absolute bottom-0 end-2 z-10 flex h-14 w-14 items-center justify-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:crown-duotone",
                    class: "text-primary-900/50 h-10 w-10"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "relative z-20 flex flex-col gap-3" }, [
                      createVNode(_component_BaseParagraph, { size: "sm" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-white/80" }, " Start using our team and project management tools ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "font-sans text-sm text-white underline-offset-4 hover:underline",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Learn More ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "absolute bottom-0 end-2 z-10 flex h-14 w-14 items-center justify-center" }, [
                      createVNode(_component_Icon, {
                        name: "ph:crown-duotone",
                        class: "text-primary-900/50 h-10 w-10"
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col items-center md:flex-row" }, [
                createVNode("div", { class: "ltablet:flex-row ltablet:items-center flex flex-col items-center gap-4 text-center md:items-start md:text-left lg:flex-row lg:items-center" }, [
                  createVNode(_component_BaseAvatar, {
                    src: "/img/avatars/2.svg",
                    size: "xl",
                    "badge-src": "/img/icons/flags/united-states-of-america.svg"
                  }),
                  createVNode("div", { class: "text-center md:text-left" }, [
                    createVNode(_component_BaseHeading, {
                      as: "h2",
                      size: "xl",
                      weight: "light",
                      lead: "tight",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "Welcome back, Maya")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, null, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-muted-400" }, "It's nice to see you again")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "ltablet:flex-row ltablet:items-center ms-auto flex flex-col gap-6 text-center md:text-left lg:flex-row lg:items-center" }, [
                  createVNode("div", { class: "flex-1" }, [
                    createVNode(_component_BaseHeading, {
                      as: "h3",
                      size: "3xl",
                      weight: "semibold",
                      lead: "tight",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, [
                          createTextVNode(" 31 "),
                          createVNode("small", { class: "text-base font-medium" }, "Tasks")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, null, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-muted-400 text-sm" }, " Are currently pending ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_BaseCard, { class: "from-primary-600 to-primary-700 shadow-primary-500/20 relative flex flex-1 items-center justify-center bg-gradient-to-br p-5 shadow-xl" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "relative z-20 flex flex-col gap-3" }, [
                        createVNode(_component_BaseParagraph, { size: "sm" }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-white/80" }, " Start using our team and project management tools ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "font-sans text-sm text-white underline-offset-4 hover:underline",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Learn More ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "absolute bottom-0 end-2 z-10 flex h-14 w-14 items-center justify-center" }, [
                        createVNode(_component_Icon, {
                          name: "ph:crown-duotone",
                          class: "text-primary-900/50 h-10 w-10"
                        })
                      ])
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
      _push(`</div><div class="ltablet:col-span-8 col-span-12 lg:col-span-8"><div class="flex flex-col gap-6">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-8 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Current Projects</span>`);
                } else {
                  return [
                    createVNode("span", null, "Current Projects")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` View All `);
                } else {
                  return [
                    createTextVNode(" View All ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_DemoProjectListCompact, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-8 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Current Projects")
                  ]),
                  _: 1
                }),
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" View All ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_DemoProjectListCompact)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-6 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Completion</span>`);
                } else {
                  return [
                    createVNode("span", null, "Completion")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Reports `);
                } else {
                  return [
                    createTextVNode(" Reports ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(areaTaskCompletion), null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-6 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Completion")
                  ]),
                  _: 1
                }),
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Reports ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, unref(areaTaskCompletion), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-6 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Team Efficiency</span>`);
                } else {
                  return [
                    createVNode("span", null, "Team Efficiency")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Reports `);
                } else {
                  return [
                    createTextVNode(" Reports ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(barTeamEfficiency), null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-6 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Team Efficiency")
                  ]),
                  _: 1
                }),
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Reports ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, unref(barTeamEfficiency), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="ltablet:col-span-4 col-span-12 lg:col-span-4"><div class="ptablet:grid-cols-2 grid gap-6 lg:flex lg:flex-col">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-8 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>My Team</span>`);
                } else {
                  return [
                    createVNode("span", null, "My Team")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` View All `);
                } else {
                  return [
                    createTextVNode(" View All ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_DemoTeamListCompact, { actions: "" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-8 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "My Team")
                  ]),
                  _: 1
                }),
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" View All ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_DemoTeamListCompact, { actions: "" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-8 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Todo Today</span>`);
                } else {
                  return [
                    createVNode("span", null, "Todo Today")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` View All `);
                } else {
                  return [
                    createTextVNode(" View All ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_DemoTodoListCompact, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-8 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Todo Today")
                  ]),
                  _: 1
                }),
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" View All ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_DemoTodoListCompact)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoPlaceholderCompact, null, {
              image: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_0)} class="block w-full dark:hidden" width="225" height="150" alt="Placeholder illustration"${_scopeId2}><img${ssrRenderAttr("src", _imports_1)} class="hidden w-full dark:block" width="225" height="150" alt="Placeholder illustration"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_0,
                      class: "block w-full dark:hidden",
                      width: "225",
                      height: "150",
                      alt: "Placeholder illustration"
                    }),
                    createVNode("img", {
                      src: _imports_1,
                      class: "hidden w-full dark:block",
                      width: "225",
                      height: "150",
                      alt: "Placeholder illustration"
                    })
                  ];
                }
              }),
              action: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseButton, {
                    color: "primary",
                    shape: "rounded",
                    class: "w-full"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>Upgrade to Pro</span>`);
                      } else {
                        return [
                          createVNode("span", null, "Upgrade to Pro")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseButton, {
                      color: "primary",
                      shape: "rounded",
                      class: "w-full"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "Upgrade to Pro")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseHeading, {
                    as: "h4",
                    size: "lg",
                    weight: "light",
                    lead: "tight",
                    class: "text-muted-800 mb-1 dark:text-white"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>Pro Freatures</span>`);
                      } else {
                        return [
                          createVNode("span", null, "Pro Freatures")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseParagraph, { size: "sm" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-muted-400"${_scopeId3}> Unlock more features and business tools by subscribing to a premium plan </span>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-muted-400" }, " Unlock more features and business tools by subscribing to a premium plan ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseHeading, {
                      as: "h4",
                      size: "lg",
                      weight: "light",
                      lead: "tight",
                      class: "text-muted-800 mb-1 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "Pro Freatures")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, { size: "sm" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-muted-400" }, " Unlock more features and business tools by subscribing to a premium plan ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoPlaceholderCompact, null, {
                image: withCtx(() => [
                  createVNode("img", {
                    src: _imports_0,
                    class: "block w-full dark:hidden",
                    width: "225",
                    height: "150",
                    alt: "Placeholder illustration"
                  }),
                  createVNode("img", {
                    src: _imports_1,
                    class: "hidden w-full dark:block",
                    width: "225",
                    height: "150",
                    alt: "Placeholder illustration"
                  })
                ]),
                action: withCtx(() => [
                  createVNode(_component_BaseButton, {
                    color: "primary",
                    shape: "rounded",
                    class: "w-full"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Upgrade to Pro")
                    ]),
                    _: 1
                  })
                ]),
                default: withCtx(() => [
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "lg",
                    weight: "light",
                    lead: "tight",
                    class: "text-muted-800 mb-1 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Pro Freatures")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseParagraph, { size: "sm" }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-muted-400" }, " Unlock more features and business tools by subscribing to a premium plan ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/personal-2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=personal-2-699e0b1e.mjs.map
