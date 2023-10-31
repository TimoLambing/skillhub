import { k as useTailwindColors, j as _sfc_main$C, _ as _sfc_main$p, b as _sfc_main$o, d as _sfc_main$x, f as __nuxt_component_2, e as __nuxt_component_0$5, s as _sfc_main$E } from '../server.mjs';
import { _ as _sfc_main$2 } from './BaseIconBox-642fe941.mjs';
import { _ as _sfc_main$3 } from './BaseAvatarGroup-6e7b4ecf.mjs';
import { _ as _sfc_main$5 } from './BaseButtonIcon-6150946c.mjs';
import { useSSRContext, defineComponent, reactive, ref, mergeProps, withCtx, createVNode, unref, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$4 } from './AddonApexcharts-b71489ed.mjs';
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
import './client-only-0428ba17.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DemoTrendingSkills",
  __ssrInlineRender: true,
  setup(__props) {
    const skills = [
      {
        id: 0,
        name: "Vue JS",
        count: 149,
        icon: "logos:vue"
      },
      {
        id: 1,
        name: "React JS",
        count: 117,
        icon: "logos:react"
      },
      {
        id: 2,
        name: "Nuxt",
        count: 94,
        icon: "logos:nuxt-icon"
      },
      {
        id: 4,
        name: "Tailwind CSS",
        count: 82,
        icon: "logos:tailwindcss-icon"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseButtonIcon = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-2 space-y-5" }, _attrs))}><!--[-->`);
      ssrRenderList(skills, (skill) => {
        _push(`<div class="flex items-center gap-3"><div class="border-muted-200 dark:border-muted-700 flex h-10 w-10 items-center justify-center rounded-full border">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: skill.icon,
          class: "h-5 w-5"
        }, null, _parent));
        _push(`</div><div>`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h4",
          size: "sm",
          weight: "light",
          lead: "tight",
          class: "text-muted-800 dark:text-white"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(skill.name)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(skill.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-muted-400"${_scopeId}> Used by ${ssrInterpolate(skill.count)} candidates </span>`);
            } else {
              return [
                createVNode("span", { class: "text-muted-400" }, " Used by " + toDisplayString(skill.count) + " candidates ", 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="ms-auto flex items-center">`);
        _push(ssrRenderComponent(_component_BaseButtonIcon, {
          shape: "curved",
          muted: "",
          class: "scale-75"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-right",
                class: "h-5 w-5"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "lucide:arrow-right",
                  class: "h-5 w-5"
                })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoTrendingSkills.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const areaInterviews = reactive(useAreaInterviews());
    function useAreaInterviews() {
      const { primary, info, success } = useTailwindColors();
      const type = "area";
      const height = 220;
      const options = {
        chart: {
          height: 220,
          type: "area",
          toolbar: {
            show: false
          }
        },
        colors: [primary.value, info.value, success.value],
        title: {
          text: void 0,
          align: "left"
        },
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
          name: "Interviews",
          data: [31, 40, 28, 51, 42, 109, 100]
        }
      ]);
      return {
        type,
        height,
        options,
        series
      };
    }
    const candidates = [
      {
        id: 0,
        tooltip: "Adam Wrangler",
        src: "/img/avatars/15.svg",
        text: "EC",
        role: "UI/UX designer"
      },
      {
        id: 1,
        tooltip: "Jennifer Miller",
        src: "/img/avatars/5.svg",
        text: "JM",
        role: "Frontend developer"
      },
      {
        id: 2,
        tooltip: "Tara Svenson",
        src: "/img/avatars/4.svg",
        text: "TS",
        role: "Software architect"
      },
      {
        id: 3,
        tooltip: "Naomi Liversky",
        src: void 0,
        text: "NL",
        role: "UI/UX designer"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseButton = _sfc_main$x;
      const _component_BaseIconBox = _sfc_main$2;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseAvatarGroup = _sfc_main$3;
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_DemoTrendingSkills = _sfc_main$1;
      const _component_AddonApexcharts = _sfc_main$4;
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BaseButtonIcon = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 md:grid-cols-2 ltablet:grid-cols-3 lg:grid-cols-3 gap-6" }, _attrs))}><div>`);
      _push(ssrRenderComponent(_component_BaseCard, {
        class: "bg-muted-200 flex h-full flex-col border-0 p-8",
        shape: "curved"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h2",
              size: "3xl",
              weight: "light",
              lead: "tight",
              class: "text-muted-800 mb-2 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Hi, Timo L.</span>`);
                } else {
                  return [
                    createVNode("span", null, "Hi, Timo L.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "sm" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}> You have 6 interviews to conduct during this week. Your current progress is great. Check your schedule and don&#39;t miss any activity. </span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, " You have 6 interviews to conduct during this week. Your current progress is great. Check your schedule and don't miss any activity. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mb-4 mt-auto flex items-center gap-2"${_scopeId}><div class="text-4xl"${_scopeId}><span${_scopeId}>\u{1F389}</span></div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400 mb-2"${_scopeId2}>Your Progress</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400 mb-2" }, "Your Progress")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "md",
              weight: "light",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Outstanding</span>`);
                } else {
                  return [
                    createVNode("span", null, "Outstanding")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "primary",
              shape: "curved",
              class: "h-11 w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>View Schedule</span>`);
                } else {
                  return [
                    createVNode("span", null, "View Schedule")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mb-5" }, [
                createVNode(_component_BaseHeading, {
                  as: "h2",
                  size: "3xl",
                  weight: "light",
                  lead: "tight",
                  class: "text-muted-800 mb-2 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Hi, Timo L.")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseParagraph, { size: "sm" }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-muted-400" }, " You have 6 interviews to conduct during this week. Your current progress is great. Check your schedule and don't miss any activity. ")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "mb-4 mt-auto flex items-center gap-2" }, [
                createVNode("div", { class: "text-4xl" }, [
                  createVNode("span", null, "\u{1F389}")
                ]),
                createVNode("div", null, [
                  createVNode(_component_BaseParagraph, { size: "xs" }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-muted-400 mb-2" }, "Your Progress")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "md",
                    weight: "light",
                    lead: "tight",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Outstanding")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", null, [
                createVNode(_component_BaseButton, {
                  color: "primary",
                  shape: "curved",
                  class: "h-11 w-full"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "View Schedule")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid grid-cols-2 gap-4">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "flex items-center gap-2 p-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseIconBox, {
              size: "sm",
              class: "bg-info-100 text-info-500 dark:bg-info-500/20 dark:text-info-400 dark:border-info-500 dark:border-2",
              shape: "full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:timer-duotone",
                    class: "h-5 w-5"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "ph:timer-duotone",
                      class: "h-5 w-5"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h2",
              size: "sm",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>62K</span>`);
                } else {
                  return [
                    createVNode("span", null, "62K")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-500 dark:text-muted-400"${_scopeId2}>Minutes</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, "Minutes")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_BaseIconBox, {
                size: "sm",
                class: "bg-info-100 text-info-500 dark:bg-info-500/20 dark:text-info-400 dark:border-info-500 dark:border-2",
                shape: "full"
              }, {
                default: withCtx(() => [
                  createVNode(_component_Icon, {
                    name: "ph:timer-duotone",
                    class: "h-5 w-5"
                  })
                ]),
                _: 1
              }),
              createVNode("div", null, [
                createVNode(_component_BaseHeading, {
                  as: "h2",
                  size: "sm",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "62K")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseParagraph, { size: "xs" }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, "Minutes")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "flex items-center gap-2 p-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseIconBox, {
              size: "sm",
              class: "bg-primary-100 text-primary-500 dark:bg-primary-500/20 dark:text-primary-400 dark:border-primary-500 dark:border-2",
              shape: "full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:broadcast-duotone",
                    class: "h-5 w-5"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "ph:broadcast-duotone",
                      class: "h-5 w-5"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h2",
              size: "sm",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>263</span>`);
                } else {
                  return [
                    createVNode("span", null, "263")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-500 dark:text-muted-400"${_scopeId2}>Interviews</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, "Interviews")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_BaseIconBox, {
                size: "sm",
                class: "bg-primary-100 text-primary-500 dark:bg-primary-500/20 dark:text-primary-400 dark:border-primary-500 dark:border-2",
                shape: "full"
              }, {
                default: withCtx(() => [
                  createVNode(_component_Icon, {
                    name: "ph:broadcast-duotone",
                    class: "h-5 w-5"
                  })
                ]),
                _: 1
              }),
              createVNode("div", null, [
                createVNode(_component_BaseHeading, {
                  as: "h2",
                  size: "sm",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "263")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseParagraph, { size: "xs" }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, "Interviews")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "flex items-center gap-2 p-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseIconBox, {
              size: "sm",
              class: "bg-lime-100 text-lime-500 dark:border-2 dark:border-lime-500 dark:bg-lime-500/20 dark:text-lime-400",
              shape: "full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:user-plus-duotone",
                    class: "h-5 w-5"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "ph:user-plus-duotone",
                      class: "h-5 w-5"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h2",
              size: "sm",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>49</span>`);
                } else {
                  return [
                    createVNode("span", null, "49")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-500 dark:text-muted-400"${_scopeId2}>Approved</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, "Approved")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_BaseIconBox, {
                size: "sm",
                class: "bg-lime-100 text-lime-500 dark:border-2 dark:border-lime-500 dark:bg-lime-500/20 dark:text-lime-400",
                shape: "full"
              }, {
                default: withCtx(() => [
                  createVNode(_component_Icon, {
                    name: "ph:user-plus-duotone",
                    class: "h-5 w-5"
                  })
                ]),
                _: 1
              }),
              createVNode("div", null, [
                createVNode(_component_BaseHeading, {
                  as: "h2",
                  size: "sm",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "49")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseParagraph, { size: "xs" }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, "Approved")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "flex items-center gap-2 p-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseIconBox, {
              size: "sm",
              class: "bg-amber-100 text-amber-500 dark:border-2 dark:border-amber-500 dark:bg-amber-500/20 dark:text-amber-400",
              shape: "full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:door-duotone",
                    class: "h-5 w-5"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "ph:door-duotone",
                      class: "h-5 w-5"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h2",
              size: "sm",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>214</span>`);
                } else {
                  return [
                    createVNode("span", null, "214")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-500 dark:text-muted-400"${_scopeId2}>Rejected</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, "Rejected")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_BaseIconBox, {
                size: "sm",
                class: "bg-amber-100 text-amber-500 dark:border-2 dark:border-amber-500 dark:bg-amber-500/20 dark:text-amber-400",
                shape: "full"
              }, {
                default: withCtx(() => [
                  createVNode(_component_Icon, {
                    name: "ph:door-duotone",
                    class: "h-5 w-5"
                  })
                ]),
                _: 1
              }),
              createVNode("div", null, [
                createVNode(_component_BaseHeading, {
                  as: "h2",
                  size: "sm",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "214")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseParagraph, { size: "xs" }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, "Rejected")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="col-span-2"><div class="mt-auto flex h-full items-end justify-between pb-4"><div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "md",
        weight: "semibold",
        lead: "tight",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Total Interviews</span>`);
          } else {
            return [
              createVNode("span", null, "Total Interviews")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-500 dark:text-muted-400"${_scopeId}> 23 interviews this month </span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, " 23 interviews this month ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_BaseAvatarGroup, {
        avatars: candidates,
        size: "sm",
        limit: 2
      }, null, _parent));
      _push(`</div></div></div></div><div>`);
      _push(ssrRenderComponent(_component_BaseCard, {
        class: "p-4",
        shape: "curved"
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
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_BaseCard, {
        class: "p-6",
        shape: "curved"
      }, {
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
                  _push3(`<span${_scopeId2}>Trending skills</span>`);
                } else {
                  return [
                    createVNode("span", null, "Trending skills")
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
            _push2(ssrRenderComponent(_component_DemoTrendingSkills, null, null, _parent2, _scopeId));
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
                    createVNode("span", null, "Trending skills")
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
              createVNode(_component_DemoTrendingSkills)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "p-6"
      }, {
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
                  _push3(`<span${_scopeId2}>Interviews</span>`);
                } else {
                  return [
                    createVNode("span", null, "Interviews")
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
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(areaInterviews), null, _parent2, _scopeId));
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
                    createVNode("span", null, "Interviews")
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
              createVNode(_component_AddonApexcharts, unref(areaInterviews), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-col gap-4">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "flex items-center gap-3 p-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              src: "/img/avatars/11.svg",
              size: "md"
            }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "light",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Jonathan K.</span>`);
                } else {
                  return [
                    createVNode("span", null, "Jonathan K.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}>8:00 am \u2014 9:00 am</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, "8:00 am \u2014 9:00 am")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ms-auto flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButtonIcon, {
              shape: "curved",
              muted: "",
              class: "scale-75"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:arrow-right",
                    class: "h-5 w-5"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-right",
                      class: "h-5 w-5"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_BaseAvatar, {
                src: "/img/avatars/11.svg",
                size: "md"
              }),
              createVNode("div", null, [
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "sm",
                  weight: "light",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Jonathan K.")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseParagraph, { size: "xs" }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-muted-400" }, "8:00 am \u2014 9:00 am")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "ms-auto flex items-center" }, [
                createVNode(_component_BaseButtonIcon, {
                  shape: "curved",
                  muted: "",
                  class: "scale-75"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-right",
                      class: "h-5 w-5"
                    })
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "flex items-center gap-3 p-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              src: "/img/avatars/16.svg",
              size: "md"
            }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "light",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Erwin S.</span>`);
                } else {
                  return [
                    createVNode("span", null, "Erwin S.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}>10:30 am \u2014 11:30 am</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, "10:30 am \u2014 11:30 am")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ms-auto flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButtonIcon, {
              shape: "curved",
              muted: "",
              class: "scale-75"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:arrow-right",
                    class: "h-5 w-5"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-right",
                      class: "h-5 w-5"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_BaseAvatar, {
                src: "/img/avatars/16.svg",
                size: "md"
              }),
              createVNode("div", null, [
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "sm",
                  weight: "light",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Erwin S.")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseParagraph, { size: "xs" }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-muted-400" }, "10:30 am \u2014 11:30 am")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "ms-auto flex items-center" }, [
                createVNode(_component_BaseButtonIcon, {
                  shape: "curved",
                  muted: "",
                  class: "scale-75"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-right",
                      class: "h-5 w-5"
                    })
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "flex items-center gap-3 p-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              src: "/img/avatars/5.svg",
              size: "md"
            }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "light",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Jennifer M.</span>`);
                } else {
                  return [
                    createVNode("span", null, "Jennifer M.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}>2:00 pm \u2014 3:00 pm</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, "2:00 pm \u2014 3:00 pm")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ms-auto flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButtonIcon, {
              shape: "curved",
              muted: "",
              class: "scale-75"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:arrow-right",
                    class: "h-5 w-5"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-right",
                      class: "h-5 w-5"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_BaseAvatar, {
                src: "/img/avatars/5.svg",
                size: "md"
              }),
              createVNode("div", null, [
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "sm",
                  weight: "light",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Jennifer M.")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseParagraph, { size: "xs" }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-muted-400" }, "2:00 pm \u2014 3:00 pm")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "ms-auto flex items-center" }, [
                createVNode(_component_BaseButtonIcon, {
                  shape: "curved",
                  muted: "",
                  class: "scale-75"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-right",
                      class: "h-5 w-5"
                    })
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-0fb4203e.mjs.map
