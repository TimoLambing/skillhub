import { k as useTailwindColors, b as _sfc_main$o, _ as _sfc_main$p, j as _sfc_main$C, e as __nuxt_component_0$5, f as __nuxt_component_2, d as _sfc_main$x } from '../server.mjs';
import { _ as _sfc_main$2 } from './BaseButtonAction-57c21d00.mjs';
import { _ as _sfc_main$3 } from './AddonApexcharts-b71489ed.mjs';
import { _ as _sfc_main$4 } from './DemoTeamListCompact-a2bffd9a.mjs';
import { _ as _sfc_main$5 } from './BaseButtonIcon-6150946c.mjs';
import { useSSRContext, defineComponent, ref, reactive, shallowRef, withCtx, createTextVNode, unref, createVNode, toDisplayString, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { f as formatPrice } from './format-currency-d8479070.mjs';
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
  __name: "DemoPopularCryptos",
  __ssrInlineRender: true,
  setup(__props) {
    const currencies = [
      {
        id: 0,
        name: "LTC",
        fullName: "Litecoin",
        icon: "cryptocurrency:ltc"
      },
      {
        id: 1,
        name: "ETH",
        fullName: "Ethereum",
        icon: "cryptocurrency:eth"
      },
      {
        id: 2,
        name: "BELA",
        fullName: "Belacoin",
        icon: "cryptocurrency:bela"
      },
      {
        id: 4,
        name: "XBY",
        fullName: "Xtrabytes",
        icon: "cryptocurrency:xby"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseButtonIcon = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-2 space-y-5" }, _attrs))}><!--[-->`);
      ssrRenderList(currencies, (currency) => {
        _push(`<div class="flex items-center gap-3"><div class="border-muted-200 dark:border-muted-700 flex h-10 w-10 items-center justify-center rounded-full border">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: currency.icon,
          class: "text-muted-400 h-7 w-7"
        }, null, _parent));
        _push(`</div><div>`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h4",
          size: "xs",
          weight: "semibold",
          lead: "tight",
          class: "text-muted-800 dark:text-white"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(currency.name)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(currency.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-muted-400"${_scopeId}>${ssrInterpolate(currency.fullName)} token</span>`);
            } else {
              return [
                createVNode("span", { class: "text-muted-400" }, toDisplayString(currency.fullName) + " token", 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoPopularCryptos.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "banking-3",
  __ssrInlineRender: true,
  setup(__props) {
    const activePeriod = ref("week");
    const areaBtcPrice = reactive(useAreaBtcPrice());
    const radialEvolution = reactive(useRadialEvolution());
    const radialPopularity = reactive(useRadialPopularity());
    function useAreaBtcPrice() {
      const { primary, info, success } = useTailwindColors();
      const type = "area";
      const height = 350;
      const options = shallowRef({
        chart: {
          foreColor: "#999",
          stacked: true,
          toolbar: {
            show: false
          },
          dropShadow: {
            enabled: true,
            enabledSeries: [0],
            top: -2,
            left: 2,
            blur: 5,
            opacity: 0.06
          }
        },
        colors: [success.value, primary.value, info.value],
        stroke: {
          curve: "smooth",
          width: 3
        },
        title: {
          text: "",
          align: "left"
        },
        dataLabels: {
          enabled: false
        },
        markers: {
          size: 0,
          strokeColor: "#fff",
          strokeWidth: 3,
          strokeOpacity: 1,
          fillOpacity: 1,
          hover: {
            size: 6
          }
        },
        xaxis: {
          type: "datetime",
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        yaxis: {
          labels: {
            offsetX: 0,
            offsetY: -5
          },
          tooltip: {
            enabled: true
          }
        },
        grid: {
          show: true,
          padding: {
            left: -5,
            right: 5
          }
        },
        tooltip: {
          x: {
            format: "dd MMM yyyy"
          },
          y: {
            formatter: function(val) {
              return val + "%";
            }
          }
        },
        legend: {
          position: "top",
          horizontalAlign: "center"
        },
        fill: {
          type: "solid",
          fillOpacity: 0.7
        }
      });
      const series = ref([
        {
          name: "Expected",
          data: generateDayWiseTimeSeries(0, 18)
        },
        {
          name: "Real",
          data: generateDayWiseTimeSeries(1, 18)
        }
      ]);
      function generateDayWiseTimeSeries(s, count) {
        const values = [
          [
            0.4,
            0.3,
            1,
            0.9,
            2.9,
            1.9,
            2.5,
            0.9,
            1.2,
            0.7,
            1.9,
            0.5,
            1.3,
            0.9,
            1.7,
            0.2,
            0.7,
            0.5
          ],
          [
            0.2,
            0.3,
            0.8,
            0.7,
            2.2,
            1.6,
            2.3,
            0.7,
            1.1,
            0.5,
            1.2,
            0.5,
            1,
            0.4,
            1.5,
            0.2,
            0.6,
            2
          ]
        ];
        let i = 0;
        const series2 = [];
        let x = (/* @__PURE__ */ new Date("11 Nov 2022")).getTime();
        while (i < count) {
          series2.push([x, values[s][i]]);
          x += 864e5;
          i++;
        }
        return series2;
      }
      return {
        type,
        height,
        options,
        series
      };
    }
    function useRadialEvolution() {
      const { primary, info, success } = useTailwindColors();
      const type = "radialBar";
      const height = 220;
      const series = ref([54]);
      const options = {
        colors: [primary.value, success.value, info.value],
        title: {
          text: "",
          align: "left"
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                offsetY: 15,
                fontSize: "13px",
                fontFamily: "Roboto, sans-serif",
                color: "var(--color-muted-400)",
                formatter: function() {
                  return ["(30 days)"];
                }
              },
              value: {
                color: "var(--color-muted-400)",
                offsetY: -20,
                fontSize: "16px",
                fontFamily: "Roboto, sans-serif",
                fontWeight: "500"
              }
            }
          }
        },
        labels: ["Median Ratio"]
      };
      return {
        type,
        height,
        series,
        options
      };
    }
    function useRadialPopularity() {
      const { primary, success } = useTailwindColors();
      const type = "radialBar";
      const height = 225;
      const options = {
        title: {
          text: ""
        },
        chart: {
          toolbar: {
            show: false
          }
        },
        colors: [primary.value, success.value],
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
              name: {
                fontSize: "13px",
                fontWeight: "600",
                color: "var(--color-muted-400)",
                offsetY: 80
              },
              value: {
                offsetY: 40,
                fontSize: "18px",
                fontFamily: "Roboto, sans-serif",
                fontWeight: "500",
                color: void 0,
                formatter: function(val) {
                  return val + "%";
                }
              }
            }
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            shadeIntensity: 0.15,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 65, 91]
          }
        },
        stroke: {
          dashArray: 4
        },
        labels: ["(30 days)"]
      };
      const series = ref([67]);
      return {
        type,
        height,
        options,
        series
      };
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseButtonAction = _sfc_main$2;
      const _component_BaseCard = _sfc_main$C;
      const _component_AddonApexcharts = _sfc_main$3;
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseButton = _sfc_main$x;
      const _component_DemoTeamListCompact = _sfc_main$4;
      const _component_DemoPopularCryptos = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-6 flex flex-col justify-between gap-y-4 sm:flex-row sm:items-center"><div>`);
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "sm",
        class: "text-muted-500 dark:text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Latest Bitcoin (BTC) Price Chart `);
          } else {
            return [
              createTextVNode(" Latest Bitcoin (BTC) Price Chart ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseHeading, {
        size: "3xl",
        weight: "bold",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="after:text-success-500 after:relative after:-end-2 after:-top-3 after:text-sm after:content-[&#39;+3.4%&#39;]"${_scopeId}>${ssrInterpolate(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(10584.3))}</span>`);
          } else {
            return [
              createVNode("span", { class: "after:text-success-500 after:relative after:-end-2 after:-top-3 after:text-sm after:content-['+3.4%']" }, toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(10584.3)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex gap-2 sm:justify-end">`);
      _push(ssrRenderComponent(_component_BaseButtonAction, {
        color: unref(activePeriod) === "hour" ? "primary" : "default",
        onClick: ($event) => activePeriod.value = "hour"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Hour `);
          } else {
            return [
              createTextVNode(" Hour ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButtonAction, {
        color: unref(activePeriod) === "day" ? "primary" : "default",
        onClick: ($event) => activePeriod.value = "day"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Day `);
          } else {
            return [
              createTextVNode(" Day ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButtonAction, {
        color: unref(activePeriod) === "week" ? "primary" : "default",
        onClick: ($event) => activePeriod.value = "week"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Week `);
          } else {
            return [
              createTextVNode(" Week ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButtonAction, {
        color: unref(activePeriod) === "month" ? "primary" : "default",
        onClick: ($event) => activePeriod.value = "month"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Month `);
          } else {
            return [
              createTextVNode(" Month ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButtonAction, {
        color: unref(activePeriod) === "year" ? "primary" : "default",
        onClick: ($event) => activePeriod.value = "year"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Year `);
          } else {
            return [
              createTextVNode(" Year ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="grid grid-cols-12 gap-4"><div class="ltablet:col-span-8 col-span-12 gap-4 lg:col-span-8"><div class="flex flex-col gap-4"><div class="grid gap-4 sm:grid-cols-3"><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "space-y-1 p-5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              class: "text-muted-500 dark:text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Market Cap `);
                } else {
                  return [
                    createTextVNode(" Market Cap ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseHeading, {
              size: "lg",
              weight: "semibold",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>${ssrInterpolate(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(129992260090))}</span>`);
                } else {
                  return [
                    createVNode("span", null, toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(129992260090)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseParagraph, {
                size: "xs",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Market Cap ")
                ]),
                _: 1
              }),
              createVNode(_component_BaseHeading, {
                size: "lg",
                weight: "semibold",
                class: "text-muted-800 dark:text-white"
              }, {
                default: withCtx(() => [
                  createVNode("span", null, toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(129992260090)), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "space-y-1 p-5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              class: "text-muted-500 dark:text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Volume 24h `);
                } else {
                  return [
                    createTextVNode(" Volume 24h ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseHeading, {
              size: "lg",
              weight: "semibold",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>${ssrInterpolate(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(453178))}K</span>`);
                } else {
                  return [
                    createVNode("span", null, toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(453178)) + "K", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseParagraph, {
                size: "xs",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Volume 24h ")
                ]),
                _: 1
              }),
              createVNode(_component_BaseHeading, {
                size: "lg",
                weight: "semibold",
                class: "text-muted-800 dark:text-white"
              }, {
                default: withCtx(() => [
                  createVNode("span", null, toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(453178)) + "K", 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "space-y-1 p-5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              class: "text-muted-500 dark:text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Low/high 24h `);
                } else {
                  return [
                    createTextVNode(" Low/high 24h ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseHeading, {
              size: "lg",
              weight: "semibold",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>${ssrInterpolate(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(10212))} - ${ssrInterpolate(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(10584))}</span>`);
                } else {
                  return [
                    createVNode("span", null, toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(10212)) + " - " + toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(10584)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseParagraph, {
                size: "xs",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Low/high 24h ")
                ]),
                _: 1
              }),
              createVNode(_component_BaseHeading, {
                size: "lg",
                weight: "semibold",
                class: "text-muted-800 dark:text-white"
              }, {
                default: withCtx(() => [
                  createVNode("span", null, toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(10212)) + " - " + toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(10584)), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "relative p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>BTC Price Chart</span>`);
                } else {
                  return [
                    createVNode("span", null, "BTC Price Chart")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(areaBtcPrice), null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-6" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "BTC Price Chart")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, unref(areaBtcPrice), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="grid grid-cols-1 gap-4 sm:grid-cols-2"><div class="relative">`);
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
                  _push3(`<span${_scopeId2}>BTC Evolution</span>`);
                } else {
                  return [
                    createVNode("span", null, "BTC Evolution")
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
                  _push3(` Buy BTC `);
                } else {
                  return [
                    createTextVNode(" Buy BTC ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(radialEvolution), null, _parent2, _scopeId));
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
                    createVNode("span", null, "BTC Evolution")
                  ]),
                  _: 1
                }),
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Buy BTC ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, unref(radialEvolution), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative">`);
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
                  _push3(`<span${_scopeId2}>BTC Popularity</span>`);
                } else {
                  return [
                    createVNode("span", null, "BTC Popularity")
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
                  _push3(` Buy BTC `);
                } else {
                  return [
                    createTextVNode(" Buy BTC ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(radialPopularity), null, _parent2, _scopeId));
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
                    createVNode("span", null, "BTC Popularity")
                  ]),
                  _: 1
                }),
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Buy BTC ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, unref(radialPopularity), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><div class="ltablet:col-span-4 col-span-12 lg:col-span-4"><div class="flex flex-col gap-4"><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-8" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-6 flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "cryptocurrency:btc",
              class: "h-9 w-9 text-orange-400"
            }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "snug",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Bitcoin</span>`);
                } else {
                  return [
                    createVNode("span", null, "Bitcoin")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              weight: "semibold",
              class: "text-muted-500 dark:text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` BTC `);
                } else {
                  return [
                    createTextVNode(" BTC ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ms-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButtonAction, {
              size: "sm",
              class: "text-muted-500 dark:text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Currencies `);
                } else {
                  return [
                    createTextVNode(" Currencies ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-500 dark:text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto. It was launched anonymously, with no central bank or single administrator, and is peer-to-peer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. `);
                } else {
                  return [
                    createTextVNode(" Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto. It was launched anonymously, with no central bank or single administrator, and is peer-to-peer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mt-6 flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "default",
              class: "w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Compare</span>`);
                } else {
                  return [
                    createVNode("span", null, "Compare")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "primary",
              class: "w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Buy BTC</span>`);
                } else {
                  return [
                    createVNode("span", null, "Buy BTC")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mb-6 flex items-center gap-2" }, [
                createVNode(_component_Icon, {
                  name: "cryptocurrency:btc",
                  class: "h-9 w-9 text-orange-400"
                }),
                createVNode("div", null, [
                  createVNode(_component_BaseHeading, {
                    as: "h3",
                    size: "md",
                    weight: "semibold",
                    lead: "snug",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Bitcoin")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseParagraph, {
                    size: "xs",
                    weight: "semibold",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" BTC ")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "ms-auto" }, [
                  createVNode(_component_BaseButtonAction, {
                    size: "sm",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Currencies ")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", null, [
                createVNode(_component_BaseParagraph, {
                  size: "sm",
                  class: "text-muted-500 dark:text-muted-400"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto. It was launched anonymously, with no central bank or single administrator, and is peer-to-peer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "mt-6 flex items-center gap-2" }, [
                createVNode(_component_BaseButton, {
                  color: "default",
                  class: "w-full"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Compare")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseButton, {
                  color: "primary",
                  class: "w-full"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Buy BTC")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative">`);
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
      _push(`</div><div class="relative">`);
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
                  _push3(`<span${_scopeId2}>Popular Coins</span>`);
                } else {
                  return [
                    createVNode("span", null, "Popular Coins")
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
            _push2(ssrRenderComponent(_component_DemoPopularCryptos, null, null, _parent2, _scopeId));
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
                    createVNode("span", null, "Popular Coins")
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
              createVNode(_component_DemoPopularCryptos)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/banking-3.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=banking-3-8724d5cd.mjs.map
