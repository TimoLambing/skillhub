import { k as useTailwindColors, j as _sfc_main$C, _ as _sfc_main$p, b as _sfc_main$o, e as __nuxt_component_0$5, f as __nuxt_component_2, d as _sfc_main$x } from '../server.mjs';
import { _ as _sfc_main$6 } from './AddonApexcharts-b71489ed.mjs';
import { _ as _sfc_main$7 } from './DemoFollowersCompact-7a652f68.mjs';
import { _ as _sfc_main$8 } from './DemoSearchCompact-ed3fb5da.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$a } from './DemoInboxMessage-20faf9de.mjs';
import { _ as _sfc_main$b } from './BaseTag-734af285.mjs';
import { useSSRContext, defineComponent, reactive, ref, mergeProps, withCtx, createVNode, unref, toDisplayString, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _sfc_main$9, a as _sfc_main$1$2 } from './DemoIconText-0b939fde.mjs';
import { _ as __nuxt_component_14 } from './DemoNotificationsCompact-42a439db.mjs';
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
import './BaseAvatarGroup-6e7b4ecf.mjs';
import './hobby-3-cc01f17f.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import './BaseProgress-1402c581.mjs';

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DemoTagListCompact",
  __ssrInlineRender: true,
  props: {
    shape: { default: "rounded" }
  },
  setup(__props) {
    const props = __props;
    const tags = [
      {
        id: 1,
        name: "Politics",
        highlight: false
      },
      {
        id: 2,
        name: "Economy",
        highlight: true
      },
      {
        id: 3,
        name: "Finance",
        highlight: false
      },
      {
        id: 4,
        name: "Environment",
        highlight: false
      },
      {
        id: 5,
        name: "Food",
        highlight: false
      },
      {
        id: 6,
        name: "Technology",
        highlight: true
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseTag = _sfc_main$b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap items-center gap-2" }, _attrs))}><!--[-->`);
      ssrRenderList(tags, (tag) => {
        _push(ssrRenderComponent(_component_BaseTag, {
          key: tag.id,
          shape: props.shape,
          flavor: tag.highlight ? "solid" : "outline",
          color: "primary",
          size: "sm"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(tag.name)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(tag.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoTagListCompact.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DemoIconLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const links = [
      {
        name: "Activity",
        url: "/",
        icon: "lucide:activity"
      },
      {
        name: "Search",
        url: "/",
        icon: "lucide:search"
      },
      {
        name: "Files",
        url: "/",
        icon: "lucide:file-text"
      },
      {
        name: "Home",
        url: "/",
        icon: "lucide:home"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex w-full items-center justify-between gap-3" }, _attrs))}><!--[-->`);
      ssrRenderList(links, (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.name,
          to: link.url,
          class: "text-muted-400 hover:bg-primary-500 hover:shadow-primary-500/30 dark:hover:shadow-primary-800/30 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 hover:text-white hover:shadow-xl"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: link.icon,
                class: "h-4 w-4"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: link.icon,
                  class: "h-4 w-4"
                }, null, 8, ["name"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoIconLinks.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DemoDaysSquare",
  __ssrInlineRender: true,
  props: {
    shape: { default: "rounded" }
  },
  setup(__props) {
    const props = __props;
    const days = [
      {
        name: "Monday",
        date: 22,
        url: "/"
      },
      {
        name: "Tuesday",
        date: 23,
        url: "/"
      },
      {
        name: "Wednesday",
        date: 24,
        url: "/"
      },
      {
        name: "Friday",
        date: 25,
        url: "/"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-2 gap-4" }, _attrs))}><!--[-->`);
      ssrRenderList(days, (day) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: day.name,
          to: day.url,
          class: ["dark:bg-muted-800 border-muted-200 hover:border-primary-500 dark:hover:border-primary-500 dark:border-muted-700 hover:shadow-muted-300/30 dark:hover:shadow-muted-900/30 group flex flex-col border bg-white py-6 transition-all duration-300 hover:shadow-xl", [
            props.shape === "rounded" ? "rounded-md" : "",
            props.shape === "curved" ? "rounded-xl" : ""
          ]]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="text-center"${_scopeId}><span class="text-muted-800 dark:text-muted-100 group-hover:text-primary-500 dark:group-hover:text-primary-500 mb-1 inline-block font-sans text-xl font-bold transition-colors duration-300"${_scopeId}>${ssrInterpolate(day.date)}</span><p class="text-muted-400 font-sans text-xs font-medium uppercase"${_scopeId}>${ssrInterpolate(day.name)}</p></div>`);
            } else {
              return [
                createVNode("div", { class: "text-center" }, [
                  createVNode("span", { class: "text-muted-800 dark:text-muted-100 group-hover:text-primary-500 dark:group-hover:text-primary-500 mb-1 inline-block font-sans text-xl font-bold transition-colors duration-300" }, toDisplayString(day.date), 1),
                  createVNode("p", { class: "text-muted-400 font-sans text-xs font-medium uppercase" }, toDisplayString(day.name), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoDaysSquare.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DemoMenuIconList",
  __ssrInlineRender: true,
  props: {
    shape: { default: "rounded" }
  },
  setup(__props) {
    const props = __props;
    const menu = [
      {
        name: "Global",
        url: "/",
        icon: "lucide:circle"
      },
      {
        name: "Business",
        url: "/",
        icon: "lucide:briefcase"
      },
      {
        name: "Entertainment",
        url: "/",
        icon: "lucide:play"
      },
      {
        name: "Design",
        url: "/",
        icon: "lucide:feather"
      },
      {
        name: "Files",
        url: "/",
        icon: "lucide:file"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-4" }, _attrs))}><!--[-->`);
      ssrRenderList(menu, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.name,
          to: item.url,
          class: "group flex items-center gap-3"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="${ssrRenderClass([[
                props.shape === "rounded" ? "rounded-lg" : "",
                props.shape === "curved" ? "rounded-xl" : ""
              ], "text-muted-500 dark:text-muted-100 bg-muted-100 dark:bg-muted-700 group-hover:bg-primary-500 group-hover:shadow-primary-500/30 flex h-11 w-11 items-center justify-center transition-all duration-300 group-hover:text-white group-hover:shadow-xl dark:group-hover:text-white"])}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: item.icon,
                class: "h-4 w-4"
              }, null, _parent2, _scopeId));
              _push2(`</div><span class="text-muted-400 group-hover:text-muted-800 dark:group-hover:text-muted-100 font-sans text-sm transition-colors duration-300"${_scopeId}>${ssrInterpolate(item.name)}</span>`);
            } else {
              return [
                createVNode("div", {
                  class: ["text-muted-500 dark:text-muted-100 bg-muted-100 dark:bg-muted-700 group-hover:bg-primary-500 group-hover:shadow-primary-500/30 flex h-11 w-11 items-center justify-center transition-all duration-300 group-hover:text-white group-hover:shadow-xl dark:group-hover:text-white", [
                    props.shape === "rounded" ? "rounded-lg" : "",
                    props.shape === "curved" ? "rounded-xl" : ""
                  ]]
                }, [
                  createVNode(_component_Icon, {
                    name: item.icon,
                    class: "h-4 w-4"
                  }, null, 8, ["name"])
                ], 2),
                createVNode("span", { class: "text-muted-400 group-hover:text-muted-800 dark:group-hover:text-muted-100 font-sans text-sm transition-colors duration-300" }, toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoMenuIconList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DemoActionText",
  __ssrInlineRender: true,
  props: {
    title: {},
    text: {},
    label: {},
    to: {},
    shape: { default: "rounded" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseButton = _sfc_main$x;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["bg-muted-200 dark:bg-muted-800 p-6", [
          props.shape === "rounded" ? "rounded-md" : "",
          props.shape === "curved" ? "rounded-xl" : ""
        ]]
      }, _attrs))}><div class="mb-6">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "md",
        weight: "light",
        lead: "tight",
        class: "text-muted-800 mb-2 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(props.title)}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(props.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-500"${_scopeId}>${ssrInterpolate(props.text)}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-500" }, toDisplayString(props.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_BaseButton, {
        to: props.to,
        shape: props.shape,
        color: "primary",
        class: "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(props.label)}`);
          } else {
            return [
              createTextVNode(toDisplayString(props.label), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoActionText.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const gaugePersonal = reactive(useGaugePersonal());
    function useGaugePersonal() {
      const { primary } = useTailwindColors();
      const type = "radialBar";
      const height = 220;
      const options = {
        title: {
          text: void 0
        },
        chart: {
          sparkline: {
            enabled: true
          },
          toolbar: {
            show: false
          }
        },
        colors: [primary.value],
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "#e7e7e7",
              strokeWidth: "97%",
              margin: 5,
              // margin is in pixels
              dropShadow: {
                enabled: false,
                top: 2,
                left: 0,
                color: "#999",
                opacity: 1,
                blur: 2
              }
            },
            hollow: {
              margin: 0,
              size: "35%"
            },
            dataLabels: {
              name: {
                show: false
              },
              value: {
                offsetY: -2,
                fontSize: "22px"
              }
            }
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "light",
            shadeIntensity: 0.1,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 53, 91]
          }
        },
        labels: ["Average Results"]
      };
      const series = ref([76]);
      return {
        type,
        height,
        options,
        series
      };
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseHeading = _sfc_main$p;
      const _component_AddonApexcharts = _sfc_main$6;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_DemoFollowersCompact = _sfc_main$7;
      const _component_DemoSearchCompact = _sfc_main$8;
      const _component_DemoVideoCompact = _sfc_main$1$1;
      const _component_DemoTagListCompact = _sfc_main$5;
      const _component_DemoIconLinks = _sfc_main$4;
      const _component_DemoDaysSquare = _sfc_main$3;
      const _component_DemoMenuIconList = _sfc_main$2;
      const _component_DemoIconText = _sfc_main$9;
      const _component_DemoPicture = _sfc_main$1$2;
      const _component_DemoInboxMessage = _sfc_main$a;
      const _component_DemoNotificationsCompact = __nuxt_component_14;
      const _component_DemoActionText = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "ptablet:grid-cols-2 grid gap-4 sm:grid-cols-4" }, _attrs))}><div class="relative flex flex-col gap-4">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "flex flex-col p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-6 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "sm",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Personal Score</span>`);
                } else {
                  return [
                    createVNode("span", null, "Personal Score")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="py-16"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, mergeProps(unref(gaugePersonal), { class: "-mt-14" }), null, _parent2, _scopeId));
            _push2(`</div><div class="mt-auto text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "sm" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}> Your score has been calculated based on the latest metrics </span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, " Your score has been calculated based on the latest metrics ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mb-6 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "sm",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Personal Score")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "py-16" }, [
                createVNode(_component_AddonApexcharts, mergeProps(unref(gaugePersonal), { class: "-mt-14" }), null, 16)
              ]),
              createVNode("div", { class: "mt-auto text-center" }, [
                createVNode(_component_BaseParagraph, { size: "sm" }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-muted-400" }, " Your score has been calculated based on the latest metrics ")
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
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoFollowersCompact, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoFollowersCompact)
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
        class: "p-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoVideoCompact, { shape: "curved" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoVideoCompact, { shape: "curved" })
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
            _push2(ssrRenderComponent(_component_DemoTagListCompact, { shape: "curved" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoTagListCompact, { shape: "curved" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative flex flex-col gap-4">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "p-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoIconLinks, { shape: "curved" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoIconLinks, { shape: "curved" })
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
            _push2(ssrRenderComponent(_component_DemoDaysSquare, { shape: "curved" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoDaysSquare, { shape: "curved" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "p-2"
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
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "p-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoMenuIconList, { shape: "curved" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoMenuIconList, { shape: "curved" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative flex flex-col gap-4">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoIconText, {
              title: "Payment",
              icon: "lucide:bell",
              text: "You have an upcoming payment for your recurring subscription fee due on Sept 20, 2020. Check your billing details.",
              indicator: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoIconText, {
                title: "Payment",
                icon: "lucide:bell",
                text: "You have an upcoming payment for your recurring subscription fee due on Sept 20, 2020. Check your billing details.",
                indicator: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "p-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoPicture, {
              src: "/img/illustrations/widgets/mountain-picture.svg",
              alt: "Picture widget image description",
              shape: "curved",
              height: 286,
              width: 212,
              loading: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoPicture, {
                src: "/img/illustrations/widgets/mountain-picture.svg",
                alt: "Picture widget image description",
                shape: "curved",
                height: 286,
                width: 212,
                loading: ""
              })
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
            _push2(ssrRenderComponent(_component_DemoInboxMessage, {
              picture: "/img/avatars/10.svg",
              name: "Kendra W.",
              title: "Design Project",
              text: "Where are we in terms of design? We need to review the new screens.",
              time: "28 minutes",
              shape: "curved"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoInboxMessage, {
                picture: "/img/avatars/10.svg",
                name: "Kendra W.",
                title: "Design Project",
                text: "Where are we in terms of design? We need to review the new screens.",
                time: "28 minutes",
                shape: "curved"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative flex flex-col gap-4">`);
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
                  _push3(`<span${_scopeId2}>Popular topics</span>`);
                } else {
                  return [
                    createVNode("span", null, "Popular topics")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_DemoTagListCompact, { shape: "curved" }, null, _parent2, _scopeId));
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
                    createVNode("span", null, "Popular topics")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_DemoTagListCompact, { shape: "curved" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        class: "p-6",
        shape: "curved"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoNotificationsCompact, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoNotificationsCompact)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_DemoActionText, {
        title: "Upgrade to Pro",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid censes in Latino fore? Nam ante Aristippus, et ille melius.",
        label: "Upgrade Now",
        to: "#",
        shape: "curved"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoIconText, {
              title: "Messages",
              icon: "lucide:message-square",
              text: "You currently have more than 10 unread messages in your inbox. It could be a good time to check them out.",
              indicator: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoIconText, {
                title: "Messages",
                icon: "lucide:message-square",
                text: "You currently have more than 10 unread messages in your inbox. It could be a good time to check them out.",
                indicator: ""
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/widgets/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-8c293e36.mjs.map
