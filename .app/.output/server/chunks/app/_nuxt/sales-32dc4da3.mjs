import { k as useTailwindColors, s as _sfc_main$E, _ as _sfc_main$p, b as _sfc_main$o, d as _sfc_main$x, j as _sfc_main$C, e as __nuxt_component_0$5 } from '../server.mjs';
import { _ as _sfc_main$1 } from './AddonApexcharts-b71489ed.mjs';
import { defineComponent, reactive, ref, withCtx, createVNode, unref, createTextVNode, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sales",
  __ssrInlineRender: true,
  setup(__props) {
    const sparkSalesOne = reactive(useSparkSalesOne());
    const sparkSalesTwo = reactive(useSparkSalesTwo());
    const sparkSalesThree = reactive(useSparkSalesThree());
    const sparkSalesFour = reactive(useSparkSalesFour());
    const areaCustomers = reactive(useAreaCustomers());
    const radialSalesRevenue = reactive(useRadialSalesRevenue());
    const radialSmallOne = reactive(useRadialSmallOne());
    const radialSmallTwo = reactive(useRadialSmallTwo());
    const radialSmallThree = reactive(useRadialSmallThree());
    const gaugePersonal = reactive(useGaugePersonal());
    const barOrders = reactive(useBarOrders());
    function useSparkSalesOne() {
      const { primary, title, subtitle } = useTailwindColors();
      const type = "area";
      const height = 130;
      const options = {
        chart: {
          id: "sparkline1",
          group: "sparklines",
          sparkline: {
            enabled: true
          }
        },
        colors: [primary.value],
        stroke: {
          width: [2],
          curve: "straight"
        },
        fill: {
          opacity: 1
        },
        labels: [...Array(24).keys()].map((n) => `2020-10-0${n + 1}`),
        yaxis: {
          min: 0,
          labels: {
            minWidth: 100
          }
        },
        xaxis: {
          type: "datetime"
        },
        title: {
          text: "Total Sales",
          offsetX: 5,
          style: {
            fontFamily: "Roboto, sans-serif",
            fontSize: "12px",
            fontWeight: "500",
            color: subtitle.value,
            cssClass: "apexcharts-spark-title"
          }
        },
        subtitle: {
          text: "9,374",
          offsetX: 5,
          offsetY: 15,
          style: {
            fontFamily: "Roboto, sans-serif",
            fontSize: "22px",
            fontWeight: "500",
            color: title.value,
            cssClass: "apexcharts-spark-subtitle"
          }
        }
      };
      const series = ref([
        {
          name: "Total Sales",
          data: randomizeArray([
            472,
            454,
            547,
            385,
            562,
            247,
            652,
            318,
            379,
            391,
            622,
            515,
            355,
            415,
            358,
            271,
            932,
            534,
            615,
            278,
            546,
            435,
            192,
            465
          ])
        }
      ]);
      function randomizeArray(arg) {
        const array = arg.slice();
        let currentIndex = array.length;
        let temporaryValue;
        let randomIndex;
        while (currentIndex !== 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
      }
      return {
        type,
        height,
        options,
        series
      };
    }
    function useSparkSalesTwo() {
      const { success, title, subtitle } = useTailwindColors();
      const type = "area";
      const height = 130;
      const options = {
        chart: {
          id: "sparkline1",
          group: "sparklines",
          sparkline: {
            enabled: true
          }
        },
        colors: [success.value],
        stroke: {
          width: [2],
          curve: "straight"
        },
        fill: {
          opacity: 1
        },
        labels: [...Array(24).keys()].map((n) => `2020-10-0${n + 1}`),
        yaxis: {
          min: 0,
          labels: {
            minWidth: 100
          }
        },
        xaxis: {
          type: "datetime"
        },
        title: {
          text: "Total Profit",
          offsetX: 5,
          style: {
            fontFamily: "Roboto, sans-serif",
            fontSize: "12px",
            fontWeight: "500",
            color: subtitle.value,
            cssClass: "apexcharts-spark-title"
          }
        },
        subtitle: {
          text: "$24,273.31",
          offsetX: 5,
          offsetY: 15,
          style: {
            fontFamily: "Roboto, sans-serif",
            fontSize: "22px",
            fontWeight: "500",
            color: title.value,
            cssClass: "apexcharts-spark-subtitle"
          }
        }
      };
      const series = ref([
        {
          name: "Total Profit",
          data: randomizeArray([
            472,
            454,
            547,
            385,
            562,
            247,
            652,
            318,
            379,
            391,
            622,
            515,
            355,
            415,
            358,
            271,
            932,
            534,
            615,
            278,
            546,
            435,
            192,
            465
          ])
        }
      ]);
      function randomizeArray(arg) {
        const array = arg.slice();
        let currentIndex = array.length;
        let temporaryValue;
        let randomIndex;
        while (currentIndex !== 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
      }
      return {
        type,
        height,
        options,
        series
      };
    }
    function useSparkSalesThree() {
      const { yellow, title, subtitle } = useTailwindColors();
      const type = "area";
      const height = 130;
      const options = {
        chart: {
          id: "sparkline1",
          group: "sparklines",
          sparkline: {
            enabled: true
          }
        },
        colors: [yellow.value],
        stroke: {
          width: [2],
          curve: "straight"
        },
        fill: {
          opacity: 1
        },
        labels: [...Array(24).keys()].map((n) => `2020-10-0${n + 1}`),
        yaxis: {
          min: 0,
          labels: {
            minWidth: 100
          }
        },
        xaxis: {
          type: "datetime"
        },
        title: {
          text: "Total Orders",
          offsetX: 5,
          style: {
            fontFamily: "Roboto, sans-serif",
            fontSize: "12px",
            fontWeight: "500",
            color: subtitle.value,
            cssClass: "apexcharts-spark-title"
          }
        },
        subtitle: {
          text: "3912",
          offsetX: 5,
          offsetY: 15,
          style: {
            fontFamily: "Roboto, sans-serif",
            fontSize: "22px",
            fontWeight: "500",
            color: title.value,
            cssClass: "apexcharts-spark-subtitle"
          }
        }
      };
      const series = ref([
        {
          name: "Total Orders",
          data: randomizeArray([
            472,
            454,
            547,
            385,
            562,
            247,
            652,
            318,
            379,
            391,
            622,
            515,
            355,
            415,
            358,
            271,
            932,
            534,
            615,
            278,
            546,
            435,
            192,
            465
          ])
        }
      ]);
      function randomizeArray(arg) {
        const array = arg.slice();
        let currentIndex = array.length;
        let temporaryValue;
        let randomIndex;
        while (currentIndex !== 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
      }
      return {
        type,
        height,
        options,
        series
      };
    }
    function useSparkSalesFour() {
      const { info, title, subtitle } = useTailwindColors();
      const type = "area";
      const height = 130;
      const options = {
        chart: {
          id: "sparkline1",
          group: "sparklines",
          sparkline: {
            enabled: true
          }
        },
        colors: [info.value],
        stroke: {
          width: [2],
          curve: "straight"
        },
        fill: {
          opacity: 1
        },
        labels: [...Array(24).keys()].map((n) => `2020-10-0${n + 1}`),
        yaxis: {
          min: 0,
          labels: {
            minWidth: 100
          }
        },
        xaxis: {
          type: "datetime"
        },
        title: {
          text: "Consolidated",
          offsetX: 5,
          style: {
            fontFamily: "Roboto, sans-serif",
            fontSize: "12px",
            fontWeight: "500",
            color: subtitle.value,
            cssClass: "apexcharts-spark-title"
          }
        },
        subtitle: {
          text: "$17,865.29",
          offsetX: 5,
          offsetY: 15,
          style: {
            fontFamily: "Roboto, sans-serif",
            fontSize: "22px",
            fontWeight: "500",
            color: title.value,
            cssClass: "apexcharts-spark-subtitle"
          }
        }
      };
      const series = ref([
        {
          name: "Consolidated",
          data: randomizeArray([
            472,
            454,
            547,
            385,
            562,
            247,
            652,
            318,
            379,
            391,
            622,
            515,
            355,
            415,
            358,
            271,
            932,
            534,
            615,
            278,
            546,
            435,
            192,
            465
          ])
        }
      ]);
      function randomizeArray(arg) {
        const array = arg.slice();
        let currentIndex = array.length;
        let temporaryValue;
        let randomIndex;
        while (currentIndex !== 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
      }
      return {
        type,
        height,
        options,
        series
      };
    }
    function useAreaCustomers() {
      const { primary, info, success } = useTailwindColors();
      const type = "area";
      const height = 258;
      const options = {
        chart: {
          toolbar: {
            show: false
          }
        },
        colors: [primary.value, info.value, success.value],
        title: {
          show: false,
          text: void 0,
          align: "left"
        },
        legend: {
          show: true,
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
          name: "Returning",
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: "Newcomers",
          data: [11, 32, 45, 32, 34, 52, 41]
        },
        {
          name: "Abandonned",
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
    function useRadialSalesRevenue() {
      const { primary } = useTailwindColors();
      const type = "radialBar";
      const height = 155;
      const options = {
        chart: {
          toolbar: {
            show: false
          }
        },
        colors: [primary.value],
        plotOptions: {
          radialBar: {
            hollow: {
              size: "75%"
            },
            dataLabels: {
              show: true,
              name: {
                show: false,
                fontSize: "12px",
                fontFamily: "Roboto, sans-serif",
                fontWeight: 400,
                offsetY: 5
              },
              value: {
                show: true,
                fontWeight: 600,
                fontFamily: "Roboto, sans-serif",
                fontSize: "16px",
                offsetY: 5
              }
            }
          }
        },
        labels: ["Progress"]
      };
      const series = ref([65]);
      return {
        type,
        height,
        options,
        series
      };
    }
    function useRadialSmallOne() {
      const { primary } = useTailwindColors();
      const type = "radialBar";
      const height = 100;
      const options = {
        chart: {
          height: 100,
          type: "radialBar",
          offsetY: -10,
          toolbar: {
            show: false
          }
        },
        colors: [primary.value],
        plotOptions: {
          radialBar: {
            hollow: {
              size: "35%"
            },
            dataLabels: {
              show: false
            }
          }
        },
        labels: [""]
      };
      const series = ref([31]);
      return {
        type,
        height,
        options,
        series
      };
    }
    function useRadialSmallTwo() {
      const { success } = useTailwindColors();
      const type = "radialBar";
      const height = 100;
      const options = {
        chart: {
          height: 100,
          type: "radialBar",
          offsetY: -10,
          toolbar: {
            show: false
          }
        },
        colors: [success.value],
        plotOptions: {
          radialBar: {
            hollow: {
              size: "35%"
            },
            dataLabels: {
              show: false
            }
          }
        },
        labels: [""]
      };
      const series = ref([53]);
      return {
        type,
        height,
        options,
        series
      };
    }
    function useRadialSmallThree() {
      const { danger } = useTailwindColors();
      const type = "radialBar";
      const height = 100;
      const options = {
        chart: {
          height: 100,
          type: "radialBar",
          offsetY: -10,
          toolbar: {
            show: false
          }
        },
        colors: [danger.value],
        plotOptions: {
          radialBar: {
            hollow: {
              size: "35%"
            },
            dataLabels: {
              show: false
            }
          }
        },
        labels: [""]
      };
      const series = ref([84]);
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
    function useBarOrders() {
      const { primary, success } = useTailwindColors();
      const type = "bar";
      const height = 210;
      const series = ref([]);
      const options = {
        chart: {
          toolbar: {
            show: false
          }
        },
        colors: [primary.value, success.value],
        dataLabels: {
          enabled: false
        },
        noData: {
          text: "Loading..."
        },
        xaxis: {
          type: "category",
          tickPlacement: "on",
          labels: {
            rotate: -45,
            rotateAlways: true
          }
        }
      };
      return {
        type,
        height,
        options,
        series
      };
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseButton = _sfc_main$x;
      const _component_BaseCard = _sfc_main$C;
      const _component_AddonApexcharts = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0$5;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-8 flex flex-col justify-between md:flex-row md:items-center"><div class="ltablet:max-w-full flex max-w-[425px] flex-col items-center gap-4 text-center md:flex-row md:text-left lg:max-w-full">`);
      _push(ssrRenderComponent(_component_BaseAvatar, {
        src: "/img/avatars/2.svg",
        size: "lg"
      }, null, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "xl",
        weight: "light",
        lead: "tight",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Welcome back, Maya</span>`);
          } else {
            return [
              createVNode("span", null, "Welcome back, Maya")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-500"${_scopeId}> Happy to see you again on your dashboard. </span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-500" }, " Happy to see you again on your dashboard. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="mt-4 flex items-center justify-center gap-2 md:mt-0 md:justify-start">`);
      _push(ssrRenderComponent(_component_BaseButton, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>View Reports</span>`);
          } else {
            return [
              createVNode("span", null, "View Reports")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButton, { color: "primary" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Transactions</span>`);
          } else {
            return [
              createVNode("span", null, "Transactions")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="grid grid-cols-12 gap-6"><div class="ltablet:col-span-3 relative col-span-12 md:col-span-6 lg:col-span-3">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "pt-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(sparkSalesOne), null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_AddonApexcharts, unref(sparkSalesOne), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ltablet:col-span-3 relative col-span-12 md:col-span-6 lg:col-span-3">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "pt-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(sparkSalesTwo), null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_AddonApexcharts, unref(sparkSalesTwo), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ltablet:col-span-3 relative col-span-12 md:col-span-6 lg:col-span-3">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "pt-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(sparkSalesThree), null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_AddonApexcharts, unref(sparkSalesThree), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ltablet:col-span-3 relative col-span-12 md:col-span-6 lg:col-span-3">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "pt-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(sparkSalesFour), null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_AddonApexcharts, unref(sparkSalesFour), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative col-span-12 md:col-span-7">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
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
                  _push3(`<span${_scopeId2}>Revenue Overview</span>`);
                } else {
                  return [
                    createVNode("span", null, "Revenue Overview")
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
                  _push3(` Details `);
                } else {
                  return [
                    createTextVNode(" Details ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex gap-8"${_scopeId}><div${_scopeId}><span class="text-muted-400 font-sans text-xs"${_scopeId}>This month</span><p class="text-primary-500 font-sans text-lg font-medium"${_scopeId}> $75,689 </p></div><div${_scopeId}><span class="text-muted-400 font-sans text-xs"${_scopeId}>Last month</span><p class="text-muted-800 dark:text-muted-100 font-sans text-lg font-medium"${_scopeId}> $59,724 </p></div><div${_scopeId}><span class="text-muted-400 font-sans text-xs"${_scopeId}>Average</span><p class="text-muted-800 dark:text-muted-100 font-sans text-lg font-medium"${_scopeId}> $66,561 </p></div></div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(areaCustomers), null, _parent2, _scopeId));
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
                    createVNode("span", null, "Revenue Overview")
                  ]),
                  _: 1
                }),
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Details ")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "flex gap-8" }, [
                createVNode("div", null, [
                  createVNode("span", { class: "text-muted-400 font-sans text-xs" }, "This month"),
                  createVNode("p", { class: "text-primary-500 font-sans text-lg font-medium" }, " $75,689 ")
                ]),
                createVNode("div", null, [
                  createVNode("span", { class: "text-muted-400 font-sans text-xs" }, "Last month"),
                  createVNode("p", { class: "text-muted-800 dark:text-muted-100 font-sans text-lg font-medium" }, " $59,724 ")
                ]),
                createVNode("div", null, [
                  createVNode("span", { class: "text-muted-400 font-sans text-xs" }, "Average"),
                  createVNode("p", { class: "text-muted-800 dark:text-muted-100 font-sans text-lg font-medium" }, " $66,561 ")
                ])
              ]),
              createVNode(_component_AddonApexcharts, unref(areaCustomers), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative col-span-12 md:col-span-5"><div class="flex h-full flex-col gap-6">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "flex-1 p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-center"${_scopeId}><div class="flex-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 mb-4 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Sales Revenue</span>`);
                } else {
                  return [
                    createVNode("span", null, "Sales Revenue")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "lg",
              weight: "light",
              lead: "tight",
              class: "text-muted-800 mb-2 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>$8,641.26</span>`);
                } else {
                  return [
                    createVNode("span", null, "$8,641.26")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bonum integritas corporis. </span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bonum integritas corporis. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(radialSalesRevenue), null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-center" }, [
                createVNode("div", { class: "flex-1" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h3",
                    size: "md",
                    weight: "semibold",
                    lead: "tight",
                    class: "text-muted-800 mb-4 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Sales Revenue")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "lg",
                    weight: "light",
                    lead: "tight",
                    class: "text-muted-800 mb-2 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "$8,641.26")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseParagraph, { size: "xs" }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-muted-400" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bonum integritas corporis. ")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "flex-1" }, [
                  createVNode(_component_AddonApexcharts, unref(radialSalesRevenue), null, 16)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, { class: "flex-1 p-6" }, {
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
                  _push3(`<span${_scopeId2}>Additional Stats</span>`);
                } else {
                  return [
                    createVNode("span", null, "Additional Stats")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-between gap-2"${_scopeId}><div class="flex flex-1 flex-col gap-2 text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(radialSmallOne), null, _parent2, _scopeId));
            _push2(`<div class="-mt-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h5",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>278</span>`);
                } else {
                  return [
                    createVNode("span", null, "278")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}>New Deals</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, "New Deals")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="flex flex-1 flex-col gap-2 text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(radialSmallTwo), null, _parent2, _scopeId));
            _push2(`<div class="-mt-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h5",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>1,519</span>`);
                } else {
                  return [
                    createVNode("span", null, "1,519")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}>Proposals</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, "Proposals")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="flex flex-1 flex-col gap-2 text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(radialSmallThree), null, _parent2, _scopeId));
            _push2(`<div class="-mt-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h5",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>3,214</span>`);
                } else {
                  return [
                    createVNode("span", null, "3,214")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}>Closed deals</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, "Closed deals")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
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
                    createVNode("span", null, "Additional Stats")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "flex justify-between gap-2" }, [
                createVNode("div", { class: "flex flex-1 flex-col gap-2 text-center" }, [
                  createVNode(_component_AddonApexcharts, unref(radialSmallOne), null, 16),
                  createVNode("div", { class: "-mt-6" }, [
                    createVNode(_component_BaseHeading, {
                      as: "h5",
                      size: "md",
                      weight: "semibold",
                      lead: "tight",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "278")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, { size: "xs" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-muted-400" }, "New Deals")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "flex flex-1 flex-col gap-2 text-center" }, [
                  createVNode(_component_AddonApexcharts, unref(radialSmallTwo), null, 16),
                  createVNode("div", { class: "-mt-6" }, [
                    createVNode(_component_BaseHeading, {
                      as: "h5",
                      size: "md",
                      weight: "semibold",
                      lead: "tight",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "1,519")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, { size: "xs" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-muted-400" }, "Proposals")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "flex flex-1 flex-col gap-2 text-center" }, [
                  createVNode(_component_AddonApexcharts, unref(radialSmallThree), null, 16),
                  createVNode("div", { class: "-mt-6" }, [
                    createVNode(_component_BaseHeading, {
                      as: "h5",
                      size: "md",
                      weight: "semibold",
                      lead: "tight",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "3,214")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, { size: "xs" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-muted-400" }, "Closed deals")
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
      _push(`</div></div><div class="ltablet:col-span-4 relative col-span-12 md:col-span-6 lg:col-span-3">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "flex flex-col p-6" }, {
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
      _push(`</div><div class="ltablet:col-span-4 relative col-span-12 md:col-span-6 lg:col-span-6">`);
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
                  _push3(`<span${_scopeId2}>Orders Summary</span>`);
                } else {
                  return [
                    createVNode("span", null, "Orders Summary")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(barOrders), null, _parent2, _scopeId));
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
                    createVNode("span", null, "Orders Summary")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, unref(barOrders), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ltablet:col-span-4 relative col-span-12 md:col-span-6 lg:col-span-3">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-2" }, {
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
              class: "max-w-full rounded-md"
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
                class: "max-w-full rounded-md"
              }, null, 8, ["attributes"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/sales.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=sales-32dc4da3.mjs.map
