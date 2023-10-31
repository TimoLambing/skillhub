import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { k as useTailwindColors, _ as _sfc_main$p, b as _sfc_main$o, f as __nuxt_component_2, j as _sfc_main$C, e as __nuxt_component_0$5 } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseIconBox-642fe941.mjs';
import { _ as _sfc_main$2 } from './AddonApexcharts-b71489ed.mjs';
import { _ as _sfc_main$3 } from './DemoSearchCompact-ed3fb5da.mjs';
import { defineComponent, reactive, ref, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from 'vue';
import { b as asPercent } from './apex-7c197a41.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { Calendar } from 'v-calendar';
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

const _imports_0 = "" + publicAssetsURL("img/illustrations/dashboards/health/doctor.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "health",
  __ssrInlineRender: true,
  setup(__props) {
    const areaCondition = reactive(useAreaCondition());
    const scatterEnergy = reactive(useScatterEnergy());
    const barOxygen = reactive(useBarOxygen());
    const areaProgress = reactive(useAreaProgress());
    const gaugePersonal = reactive(useGaugePersonal());
    function useAreaCondition() {
      const { primary } = useTailwindColors();
      const type = "area";
      const height = 280;
      const options = {
        chart: {
          offsetX: 20,
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: false
        },
        grid: {
          show: false
        },
        stroke: {
          width: [2, 2, 2],
          curve: "straight"
        },
        colors: [primary.value],
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        yaxis: {
          opposite: true
        },
        legend: {
          horizontalAlign: "left"
        }
      };
      const series = ref([
        {
          name: "Condition (pt)",
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
    function useScatterEnergy() {
      const { primary, info, success } = useTailwindColors();
      const height = 280;
      const type = "scatter";
      const options = {
        chart: {
          height: 280,
          type: "scatter",
          zoom: {
            type: "xy"
          },
          toolbar: {
            show: false
          }
        },
        colors: [primary.value, success.value, info.value],
        dataLabels: {
          enabled: false,
          show: false
        },
        grid: {
          show: false,
          xaxis: {
            lines: {
              show: false
            }
          },
          yaxis: {
            lines: {
              show: false
            }
          }
        },
        xaxis: {
          show: false,
          type: "datetime"
        },
        yaxis: {
          show: false,
          max: 70
        },
        legend: {
          show: false,
          position: "top",
          horizontalAlign: "center"
        }
      };
      const series = ref([
        {
          name: "Tonic",
          data: generateDayWiseTimeSeries(
            (/* @__PURE__ */ new Date("Oct 11 2020 GMT")).getTime(),
            20,
            {
              min: 10,
              max: 60
            }
          )
        },
        {
          name: "Tantra",
          data: generateDayWiseTimeSeries(
            (/* @__PURE__ */ new Date("Oct 11 2020 GMT")).getTime(),
            20,
            {
              min: 10,
              max: 60
            }
          )
        },
        {
          name: "Vital",
          data: generateDayWiseTimeSeries(
            (/* @__PURE__ */ new Date("Oct 11 2020 GMT")).getTime(),
            30,
            {
              min: 10,
              max: 60
            }
          )
        }
      ]);
      function generateDayWiseTimeSeries(baseval, count, yrange) {
        let i = 0;
        const series2 = [];
        while (i < count) {
          const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
          series2.push([baseval, y]);
          baseval += 864e5;
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
    function useBarOxygen() {
      const { primary } = useTailwindColors();
      const height = 280;
      const type = "bar";
      const options = {
        chart: {
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            dataLabels: {
              position: "top"
              // top, center, bottom
            }
          }
        },
        dataLabels: {
          enabled: true,
          formatter: asPercent,
          offsetY: -20,
          style: {
            fontSize: "12px",
            colors: ["#304758"]
          }
        },
        grid: {
          show: false
        },
        xaxis: {
          categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          position: "top",
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: "gradient",
              gradient: {
                colorFrom: "#D8E3F0",
                colorTo: "#BED1E6",
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5
              }
            }
          },
          tooltip: {
            enabled: true
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          labels: {
            show: false,
            formatter: asPercent
          }
        },
        colors: [primary.value]
      };
      const series = ref([
        {
          name: "Variation (pt)",
          data: [23, 26, 10, 7, 11, 18, 16]
        }
      ]);
      return {
        type,
        height,
        options,
        series
      };
    }
    function useAreaProgress() {
      const { primary } = useTailwindColors();
      const type = "area";
      const height = 280;
      const options = {
        chart: {
          offsetX: 20,
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: false
        },
        grid: {
          show: false
        },
        stroke: {
          width: [2, 2, 2],
          curve: "smooth"
        },
        colors: [primary.value],
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        yaxis: {
          opposite: true
        },
        legend: {
          horizontalAlign: "left"
        }
      };
      const series = ref([
        {
          name: "Progress (pt)",
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
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseIconBox = _sfc_main$1;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseCard = _sfc_main$C;
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_AddonApexcharts = _sfc_main$2;
      const _component_DemoSearchCompact = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="grid grid-cols-12 gap-6"><div class="col-span-12"><div class="bg-primary-800 flex flex-col items-center rounded-2xl p-4 sm:flex-row"><div class="relative h-[168px] w-[280px] shrink-0"><img class="pointer-events-none absolute -start-6 -top-20 sm:-start-10"${ssrRenderAttr("src", _imports_0)} alt="Doctor illustration"></div><div class="mt-6 grow sm:mt-0"><div class="text-center sm:text-left">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        tag: "h1",
        class: "text-white opacity-90"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Today&#39;s Summary</span>`);
          } else {
            return [
              createVNode("span", null, "Today's Summary")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "sm",
        class: "text-white opacity-70"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}> Monitor your activity and keep improving your weak points. </span>`);
          } else {
            return [
              createVNode("span", null, " Monitor your activity and keep improving your weak points. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-6 flex flex-wrap gap-y-6 pb-4 text-center sm:mt-4 sm:gap-x-8 sm:pb-0 sm:text-left"><div class="min-w-[33.3%] sm:min-w-0">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        tag: "h4",
        weight: "medium",
        size: "sm",
        class: "text-white opacity-90"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>900 kcal</span>`);
          } else {
            return [
              createVNode("span", null, "900 kcal")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "xs",
        class: "text-white opacity-70"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Burnt today</span>`);
          } else {
            return [
              createVNode("span", null, "Burnt today")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="min-w-[33.3%] sm:min-w-0">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        tag: "h4",
        weight: "medium",
        size: "sm",
        class: "text-white opacity-90"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>2300 kcal</span>`);
          } else {
            return [
              createVNode("span", null, "2300 kcal")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "xs",
        class: "text-white opacity-70"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Eaten today</span>`);
          } else {
            return [
              createVNode("span", null, "Eaten today")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="min-w-[33.3%] sm:min-w-0">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        tag: "h4",
        weight: "medium",
        size: "sm",
        class: "text-white opacity-90"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>2%</span>`);
          } else {
            return [
              createVNode("span", null, "2%")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "xs",
        class: "text-white opacity-70"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Fat burnt</span>`);
          } else {
            return [
              createVNode("span", null, "Fat burnt")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="min-w-[33.3%] sm:min-w-0">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        tag: "h4",
        weight: "medium",
        size: "sm",
        class: "text-white opacity-90"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>11,424</span>`);
          } else {
            return [
              createVNode("span", null, "11,424")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "xs",
        class: "text-white opacity-70"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Steps walked</span>`);
          } else {
            return [
              createVNode("span", null, "Steps walked")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ptablet:hidden min-w-[33.3%] sm:min-w-0">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        tag: "h4",
        weight: "medium",
        size: "sm",
        class: "text-white opacity-90"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>8.4km</span>`);
          } else {
            return [
              createVNode("span", null, "8.4km")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "xs",
        class: "text-white opacity-70"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Distance today</span>`);
          } else {
            return [
              createVNode("span", null, "Distance today")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></div><div class="col-span-6 sm:col-span-3"><div class="flex flex-col"><div class="mb-3 flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_BaseIconBox, {
        size: "md",
        class: "bg-primary-500/10"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:drop-duotone",
              class: "text-primary-500 h-5 w-5"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ph:drop-duotone",
                class: "text-primary-500 h-5 w-5"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center gap-1 font-sans"><span class="text-muted-800 dark:text-muted-100 font-semibold"> 114/90 </span><span class="text-muted-400 text-sm">Min/Max</span></div></div><div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        tag: "h3",
        size: "sm",
        weight: "medium",
        class: "text-muted-800 dark:text-muted-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Blood quality</span>`);
          } else {
            return [
              createVNode("span", null, "Blood quality")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "xs",
        class: "text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipiscing elit Illis videtur. </span>`);
          } else {
            return [
              createVNode("span", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit Illis videtur. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="col-span-6 sm:col-span-3"><div class="flex flex-col"><div class="mb-3 flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_BaseIconBox, {
        size: "md",
        class: "bg-primary-500/10"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:heartbeat-duotone",
              class: "text-primary-500 h-5 w-5"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ph:heartbeat-duotone",
                class: "text-primary-500 h-5 w-5"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center gap-1 font-sans"><span class="text-muted-800 dark:text-muted-100 font-semibold"> 112 </span><span class="text-muted-400 text-sm">Bpm</span></div></div><div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        tag: "h3",
        size: "sm",
        weight: "medium",
        class: "text-muted-800 dark:text-muted-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Heart rate</span>`);
          } else {
            return [
              createVNode("span", null, "Heart rate")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "xs",
        class: "text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipiscing elit Illis videtur. </span>`);
          } else {
            return [
              createVNode("span", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit Illis videtur. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="col-span-6 sm:col-span-3"><div class="flex flex-col"><div class="mb-3 flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_BaseIconBox, {
        size: "md",
        class: "bg-primary-500/10"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:drop-half-bottom-duotone",
              class: "text-primary-500 h-5 w-5"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ph:drop-half-bottom-duotone",
                class: "text-primary-500 h-5 w-5"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center gap-1 font-sans"><span class="text-muted-800 dark:text-muted-100 font-semibold"> 12/14 </span><span class="text-muted-400 text-sm">Units</span></div></div><div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        tag: "h3",
        size: "sm",
        weight: "medium",
        class: "text-muted-800 dark:text-muted-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Blood pressure</span>`);
          } else {
            return [
              createVNode("span", null, "Blood pressure")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "xs",
        class: "text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipiscing elit Illis videtur. </span>`);
          } else {
            return [
              createVNode("span", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit Illis videtur. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="col-span-6 sm:col-span-3"><div class="flex flex-col"><div class="mb-3 flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_BaseIconBox, {
        size: "md",
        class: "bg-primary-500/10"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:gauge-duotone",
              class: "text-primary-500 h-5 w-5"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ph:gauge-duotone",
                class: "text-primary-500 h-5 w-5"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center gap-1 font-sans"><span class="text-muted-800 dark:text-muted-100 font-semibold"> 60.4 </span><span class="text-muted-400 text-sm">Lbs</span></div></div><div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        tag: "h3",
        size: "sm",
        weight: "medium",
        class: "text-muted-800 dark:text-muted-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Weight</span>`);
          } else {
            return [
              createVNode("span", null, "Weight")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "xs",
        class: "text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipiscing elit Illis videtur. </span>`);
          } else {
            return [
              createVNode("span", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit Illis videtur. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="col-span-12"><div class="grid grid-cols-12 gap-6"><div class="ltablet:col-span-9 col-span-12 lg:col-span-9"><div class="grid grid-cols-12 gap-6"><div class="col-span-12 sm:col-span-6">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-2 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Overall Condition</span>`);
                } else {
                  return [
                    createVNode("span", null, "Overall Condition")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              class: "text-muted-400 max-w-[240px]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:question-duotone",
                    class: "h-4 w-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}> Your overall condition is very good. Make it even better. </span>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "#",
                    class: "text-primary-500 underline-offset-4 hover:underline"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Read how `);
                      } else {
                        return [
                          createTextVNode(" Read how ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "ph:question-duotone",
                      class: "h-4 w-4"
                    }),
                    createVNode("span", null, " Your overall condition is very good. Make it even better. "),
                    createVNode(_component_NuxtLink, {
                      to: "#",
                      class: "text-primary-500 underline-offset-4 hover:underline"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Read how ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, mergeProps(unref(areaCondition), { class: "relative -start-5" }), null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-2 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Overall Condition")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", null, [
                createVNode(_component_BaseParagraph, {
                  size: "xs",
                  class: "text-muted-400 max-w-[240px]"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "ph:question-duotone",
                      class: "h-4 w-4"
                    }),
                    createVNode("span", null, " Your overall condition is very good. Make it even better. "),
                    createVNode(_component_NuxtLink, {
                      to: "#",
                      class: "text-primary-500 underline-offset-4 hover:underline"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Read how ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, mergeProps(unref(areaCondition), { class: "relative -start-5" }), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-12 sm:col-span-6">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-2 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Energy Level</span>`);
                } else {
                  return [
                    createVNode("span", null, "Energy Level")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              class: "text-muted-400 max-w-[240px]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:question-duotone",
                    class: "h-4 w-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}> Your energy seems a bit unstable. You can improve it. </span>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "#",
                    class: "text-primary-500 underline-offset-4 hover:underline"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Read how `);
                      } else {
                        return [
                          createTextVNode(" Read how ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "ph:question-duotone",
                      class: "h-4 w-4"
                    }),
                    createVNode("span", null, " Your energy seems a bit unstable. You can improve it. "),
                    createVNode(_component_NuxtLink, {
                      to: "#",
                      class: "text-primary-500 underline-offset-4 hover:underline"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Read how ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(scatterEnergy), null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-2 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Energy Level")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", null, [
                createVNode(_component_BaseParagraph, {
                  size: "xs",
                  class: "text-muted-400 max-w-[240px]"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "ph:question-duotone",
                      class: "h-4 w-4"
                    }),
                    createVNode("span", null, " Your energy seems a bit unstable. You can improve it. "),
                    createVNode(_component_NuxtLink, {
                      to: "#",
                      class: "text-primary-500 underline-offset-4 hover:underline"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Read how ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, unref(scatterEnergy), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-12 sm:col-span-6">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-2 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Oxygenation</span>`);
                } else {
                  return [
                    createVNode("span", null, "Oxygenation")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              class: "text-muted-400 max-w-[240px]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:question-duotone",
                    class: "h-4 w-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}> Your oxygen seems a bit unstable. You can improve it. </span>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "#",
                    class: "text-primary-500 underline-offset-4 hover:underline"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Read how `);
                      } else {
                        return [
                          createTextVNode(" Read how ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "ph:question-duotone",
                      class: "h-4 w-4"
                    }),
                    createVNode("span", null, " Your oxygen seems a bit unstable. You can improve it. "),
                    createVNode(_component_NuxtLink, {
                      to: "#",
                      class: "text-primary-500 underline-offset-4 hover:underline"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Read how ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, mergeProps(unref(barOxygen), { class: "relative -start-5" }), null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-2 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Oxygenation")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", null, [
                createVNode(_component_BaseParagraph, {
                  size: "xs",
                  class: "text-muted-400 max-w-[240px]"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "ph:question-duotone",
                      class: "h-4 w-4"
                    }),
                    createVNode("span", null, " Your oxygen seems a bit unstable. You can improve it. "),
                    createVNode(_component_NuxtLink, {
                      to: "#",
                      class: "text-primary-500 underline-offset-4 hover:underline"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Read how ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, mergeProps(unref(barOxygen), { class: "relative -start-5" }), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-12 sm:col-span-6">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-2 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Overall Progress</span>`);
                } else {
                  return [
                    createVNode("span", null, "Overall Progress")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              class: "text-muted-400 max-w-[240px]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:question-duotone",
                    class: "h-4 w-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}> Your overall progress is very good. Make it even better. </span>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "#",
                    class: "text-primary-500 underline-offset-4 hover:underline"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Read how `);
                      } else {
                        return [
                          createTextVNode(" Read how ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "ph:question-duotone",
                      class: "h-4 w-4"
                    }),
                    createVNode("span", null, " Your overall progress is very good. Make it even better. "),
                    createVNode(_component_NuxtLink, {
                      to: "#",
                      class: "text-primary-500 underline-offset-4 hover:underline"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Read how ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, mergeProps(unref(areaProgress), { class: "relative -start-5" }), null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-2 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Overall Progress")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", null, [
                createVNode(_component_BaseParagraph, {
                  size: "xs",
                  class: "text-muted-400 max-w-[240px]"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "ph:question-duotone",
                      class: "h-4 w-4"
                    }),
                    createVNode("span", null, " Your overall progress is very good. Make it even better. "),
                    createVNode(_component_NuxtLink, {
                      to: "#",
                      class: "text-primary-500 underline-offset-4 hover:underline"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Read how ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, mergeProps(unref(areaProgress), { class: "relative -start-5" }), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="ltablet:col-span-3 col-span-12 lg:col-span-3"><div class="flex flex-col gap-6">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        class: "p-6",
        shape: "curved"
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
      _push(ssrRenderComponent(_component_BaseCard, { class: "flex h-full flex-col p-6" }, {
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
                  size: "md",
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
      _push(`</div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/health.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=health-cc6b9b89.mjs.map
