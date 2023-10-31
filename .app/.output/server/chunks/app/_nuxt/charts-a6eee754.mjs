import { k as useTailwindColors, j as _sfc_main$C, _ as _sfc_main$p } from '../server.mjs';
import { _ as _sfc_main$l } from './AddonApexcharts-b71489ed.mjs';
import { useSSRContext, defineComponent, reactive, ref, mergeProps, withCtx, createVNode, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { a as asMinutes, p as perSession, b as asPercent, c as asKDollar } from './apex-7c197a41.mjs';
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

const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "DemoChartLine",
  __ssrInlineRender: true,
  setup(__props) {
    const demoLine = reactive(useDemoLine());
    function useDemoLine() {
      const { primary } = useTailwindColors();
      const type = "line";
      const height = 280;
      const options = {
        chart: {
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          }
        },
        colors: [primary.value],
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [2, 2, 2],
          curve: "straight"
        },
        title: {
          text: "",
          align: "left"
        },
        grid: {
          row: {
            colors: ["transparent", "transparent"],
            // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep"
          ]
        }
      };
      const series = ref([
        {
          name: "Sales",
          data: [105, 414, 357, 511, 497, 621, 695, 912, 748]
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
      const _component_BaseHeading = _sfc_main$p;
      const _component_AddonApexcharts = _sfc_main$l;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
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
                  _push3(`<span${_scopeId2}>Line Chart</span>`);
                } else {
                  return [
                    createVNode("span", null, "Line Chart")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(demoLine), null, _parent2, _scopeId));
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
                    createVNode("span", null, "Line Chart")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, unref(demoLine), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/demo-chart/DemoChartLine.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "DemoChartLineMulti",
  __ssrInlineRender: true,
  setup(__props) {
    const demoLineMulti = reactive(useDemoLineMulti());
    function useDemoLineMulti() {
      const { primary, info, success } = useTailwindColors();
      const type = "line";
      const height = 280;
      const options = {
        chart: {
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          }
        },
        colors: [primary.value, success.value, info.value],
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [2, 2, 2],
          curve: "straight",
          dashArray: [0, 8, 5]
        },
        title: {
          text: "",
          align: "left"
        },
        legend: {
          tooltipHoverFormatter: function(val, opts) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex];
          },
          position: "top"
        },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6
          }
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ]
        },
        tooltip: {
          y: [
            {
              title: {
                formatter: asMinutes
              }
            },
            {
              title: {
                formatter: perSession
              }
            },
            {
              title: {
                formatter: (value) => `${value}`
              }
            }
          ]
        },
        grid: {
          borderColor: "#f1f1f1"
        }
      };
      const series = [
        {
          name: "Session Duration",
          data: ref([45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10])
        },
        {
          name: "Page Views",
          data: ref([35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35])
        },
        {
          name: "Total Visits",
          data: ref([87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47])
        }
      ];
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
      const _component_AddonApexcharts = _sfc_main$l;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
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
                  _push3(`<span${_scopeId2}>Line Chart</span>`);
                } else {
                  return [
                    createVNode("span", null, "Line Chart")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(demoLineMulti), null, _parent2, _scopeId));
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
                    createVNode("span", null, "Line Chart")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, unref(demoLineMulti), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/demo-chart/DemoChartLineMulti.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "DemoChartLineStep",
  __ssrInlineRender: true,
  setup(__props) {
    const demoLineStep = reactive(useDemoLineStep());
    function useDemoLineStep() {
      const { primary } = useTailwindColors();
      const type = "line";
      const height = 280;
      const options = {
        chart: {
          toolbar: {
            show: false
          }
        },
        stroke: {
          width: [2, 2, 2],
          curve: "stepline"
        },
        colors: [primary.value],
        dataLabels: {
          enabled: false
        },
        title: {
          text: "",
          align: "left"
        },
        markers: {
          hover: {
            sizeOffset: 4
          }
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ]
        }
      };
      const series = ref([
        {
          name: "New members",
          data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58, 79]
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
      const _component_BaseHeading = _sfc_main$p;
      const _component_AddonApexcharts = _sfc_main$l;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
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
                  _push3(`<span${_scopeId2}>Stepline Chart</span>`);
                } else {
                  return [
                    createVNode("span", null, "Stepline Chart")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(demoLineStep), null, _parent2, _scopeId));
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
                    createVNode("span", null, "Stepline Chart")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, unref(demoLineStep), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/demo-chart/DemoChartLineStep.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "DemoChartArea",
  __ssrInlineRender: true,
  setup(__props) {
    const demoArea = reactive(useDemoArea());
    function useDemoArea() {
      const { primary } = useTailwindColors();
      const type = "area";
      const height = 280;
      const options = {
        chart: {
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
        stroke: {
          width: [2, 2, 2],
          curve: "straight"
        },
        colors: [primary.value],
        title: {
          text: "",
          align: "left"
        },
        labels: [
          "13 Nov 2017",
          "14 Nov 2017",
          "15 Nov 2017",
          "16 Nov 2017",
          "17 Nov 2017",
          "20 Nov 2017",
          "21 Nov 2017",
          "22 Nov 2017",
          "23 Nov 2017",
          "24 Nov 2017",
          "27 Nov 2017",
          "28 Nov 2017",
          "29 Nov 2017",
          "30 Nov 2017",
          "01 Dec 2017",
          "04 Dec 2017",
          "05 Dec 2017",
          "06 Dec 2017",
          "07 Dec 2017",
          "08 Dec 2017"
        ],
        xaxis: {
          type: "datetime"
        },
        yaxis: {
          opposite: true
        },
        legend: {
          horizontalAlign: "left"
        }
      };
      const series = ref([
        {
          name: "Balance",
          data: [
            8107.85,
            8128,
            8122.9,
            8165.5,
            8340.7,
            8423.7,
            8423.5,
            8514.3,
            8481.85,
            8487.7,
            8506.9,
            8626.2,
            8668.95,
            8602.3,
            8607.55,
            8512.9,
            8496.25,
            8600.65,
            8881.1,
            9340.85
          ]
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
      const _component_BaseHeading = _sfc_main$p;
      const _component_AddonApexcharts = _sfc_main$l;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
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
                  _push3(`<span${_scopeId2}>Area Chart</span>`);
                } else {
                  return [
                    createVNode("span", null, "Area Chart")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(demoArea), null, _parent2, _scopeId));
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
                    createVNode("span", null, "Area Chart")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, unref(demoArea), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/demo-chart/DemoChartArea.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "DemoChartAreaMulti",
  __ssrInlineRender: true,
  setup(__props) {
    const demoAreaMulti = reactive(useDemoAreaMulti());
    function useDemoAreaMulti() {
      const { primary, info, success } = useTailwindColors();
      const type = "area";
      const height = 280;
      const options = {
        chart: {
          toolbar: {
            show: false
          }
        },
        colors: [primary.value, info.value, success.value],
        title: {
          text: "",
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
            "2018-09-19T00:00:00.000Z",
            "2018-09-19T01:30:00.000Z",
            "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z",
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z"
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
          name: "Completed",
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: "Pending",
          data: [11, 32, 45, 32, 34, 52, 41]
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
      const _component_BaseHeading = _sfc_main$p;
      const _component_AddonApexcharts = _sfc_main$l;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
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
                  _push3(`<span${_scopeId2}>Multiple Area</span>`);
                } else {
                  return [
                    createVNode("span", null, "Multiple Area")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(demoAreaMulti), null, _parent2, _scopeId));
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
                    createVNode("span", null, "Multiple Area")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, unref(demoAreaMulti), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/demo-chart/DemoChartAreaMulti.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "DemoChartBar",
  __ssrInlineRender: true,
  setup(__props) {
    const demoBar = reactive(useDemoBar());
    function useDemoBar() {
      const { primary, info, success, warning } = useTailwindColors();
      const type = "bar";
      const height = 280;
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
          enabled: false,
          formatter: asPercent,
          offsetY: -20,
          style: {
            fontSize: "12px",
            colors: ["#304758"]
          }
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
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
        colors: [primary.value, success.value, info.value, warning.value],
        title: {
          text: "",
          align: "left"
        }
      };
      const series = ref([
        {
          name: "Inflation",
          data: [2.3, 3.1, 4, 10.1, 4, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
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
      const _component_BaseHeading = _sfc_main$p;
      const _component_AddonApexcharts = _sfc_main$l;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
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
                  _push3(`<span${_scopeId2}>Bar Chart</span>`);
                } else {
                  return [
                    createVNode("span", null, "Bar Chart")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(demoBar), null, _parent2, _scopeId));
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
                    createVNode("span", null, "Bar Chart")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, unref(demoBar), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/demo-chart/DemoChartBar.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "DemoChartBarMulti",
  __ssrInlineRender: true,
  setup(__props) {
    const demoBarMulti = reactive(useDemoBarMulti());
    function useDemoBarMulti() {
      const { primary, info, success, warning } = useTailwindColors();
      const type = "bar";
      const height = 280;
      const options = {
        chart: {
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded"
          }
        },
        colors: [primary.value, success.value, info.value, warning.value],
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
          title: {
            text: "$ (thousands)"
          }
        },
        fill: {
          opacity: 1
        },
        legend: {
          position: "top",
          horizontalAlign: "center"
        },
        title: {
          text: "",
          align: "left"
        },
        tooltip: {
          y: {
            formatter: asKDollar
          }
        }
      };
      const series = ref([
        {
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
          name: "Free Cash Flow",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
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
      const _component_BaseHeading = _sfc_main$p;
      const _component_AddonApexcharts = _sfc_main$l;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
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
                  _push3(`<span${_scopeId2}>Multiple Bars</span>`);
                } else {
                  return [
                    createVNode("span", null, "Multiple Bars")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(demoBarMulti), null, _parent2, _scopeId));
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
                    createVNode("span", null, "Multiple Bars")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, unref(demoBarMulti), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/demo-chart/DemoChartBarMulti.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "DemoChartBarStacked",
  __ssrInlineRender: true,
  setup(__props) {
    const demoBarStacked = reactive(useDemoBarStacked());
    function useDemoBarStacked() {
      const { primary, info, success, danger } = useTailwindColors();
      const type = "bar";
      const height = 280;
      const options = {
        chart: {
          stacked: true,
          toolbar: {
            show: false
          },
          zoom: {
            enabled: true
          }
        },
        dataLabels: {
          style: {
            colors: ["#fff"],
            fontWeight: 300
          }
        },
        colors: [primary.value, success.value, info.value, danger.value],
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: "top"
              }
            }
          }
        ],
        plotOptions: {
          bar: {
            horizontal: false
          }
        },
        xaxis: {
          type: "datetime",
          categories: [
            "01/01/2011 GMT",
            "01/02/2011 GMT",
            "01/03/2011 GMT",
            "01/04/2011 GMT",
            "01/05/2011 GMT",
            "01/06/2011 GMT"
          ]
        },
        title: {
          text: "",
          align: "left"
        },
        legend: {
          position: "top",
          horizontalAlign: "center"
        },
        fill: {
          opacity: 1
        }
      };
      const series = ref([
        {
          name: "Desktops",
          data: [44, 55, 41, 67, 22, 43]
        },
        {
          name: "Phones",
          data: [13, 23, 20, 8, 13, 27]
        },
        {
          name: "Tablets",
          data: [11, 17, 15, 15, 21, 14]
        },
        {
          name: "Hybrid",
          data: [21, 7, 25, 13, 22, 8]
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
      const _component_BaseHeading = _sfc_main$p;
      const _component_AddonApexcharts = _sfc_main$l;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
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
                  _push3(`<span${_scopeId2}>Stacked Bars</span>`);
                } else {
                  return [
                    createVNode("span", null, "Stacked Bars")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(demoBarStacked), null, _parent2, _scopeId));
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
                    createVNode("span", null, "Stacked Bars")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, unref(demoBarStacked), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/demo-chart/DemoChartBarStacked.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "DemoChartBarRange",
  __ssrInlineRender: true,
  setup(__props) {
    const demoBarRange = reactive(useDemoBarRange());
    function useDemoBarRange() {
      const { primary, info, success, warning } = useTailwindColors();
      const type = "rangeBar";
      const height = 280;
      const options = {
        chart: {
          toolbar: {
            show: false
          }
        },
        colors: [primary.value, success.value, info.value, warning.value],
        title: {
          text: "",
          align: "left"
        },
        plotOptions: {
          bar: {
            horizontal: false
          }
        },
        legend: {
          position: "top",
          horizontalAlign: "center"
        },
        dataLabels: {
          enabled: true
        }
      };
      const series = ref([
        {
          name: "Corporate",
          data: [
            {
              x: "Team A",
              y: [1, 5]
            },
            {
              x: "Team B",
              y: [4, 6]
            },
            {
              x: "Team C",
              y: [5, 8]
            },
            {
              x: "Team D",
              y: [3, 11]
            }
          ]
        },
        {
          name: "Service",
          data: [
            {
              x: "Team A",
              y: [2, 6]
            },
            {
              x: "Team B",
              y: [1, 3]
            },
            {
              x: "Team C",
              y: [7, 8]
            },
            {
              x: "Team D",
              y: [5, 9]
            }
          ]
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
      const _component_BaseHeading = _sfc_main$p;
      const _component_AddonApexcharts = _sfc_main$l;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
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
                  _push3(`<span${_scopeId2}>Range Column</span>`);
                } else {
                  return [
                    createVNode("span", null, "Range Column")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(demoBarRange), null, _parent2, _scopeId));
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
                    createVNode("span", null, "Range Column")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, unref(demoBarRange), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/demo-chart/DemoChartBarRange.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "DemoChartBarHorizontal",
  __ssrInlineRender: true,
  setup(__props) {
    const demoBarHorizontal = reactive(useDemoBarHorizontal());
    function useDemoBarHorizontal() {
      const { primary } = useTailwindColors();
      const type = "bar";
      const height = 280;
      const options = {
        chart: {
          toolbar: {
            show: false
          }
        },
        colors: [primary.value],
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        title: {
          text: "",
          align: "left"
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: [
            "South Korea",
            "Canada",
            "United Kingdom",
            "Netherlands",
            "Italy",
            "France",
            "Japan",
            "United States",
            "China",
            "Germany"
          ]
        }
      };
      const series = ref([
        {
          name: "Spaceships",
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
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
      const _component_BaseHeading = _sfc_main$p;
      const _component_AddonApexcharts = _sfc_main$l;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
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
                  _push3(`<span${_scopeId2}>Horizontal Bar</span>`);
                } else {
                  return [
                    createVNode("span", null, "Horizontal Bar")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(demoBarHorizontal), null, _parent2, _scopeId));
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
                    createVNode("span", null, "Horizontal Bar")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, unref(demoBarHorizontal), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/demo-chart/DemoChartBarHorizontal.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "DemoChartBarHorizontalMulti",
  __ssrInlineRender: true,
  setup(__props) {
    const demoBarHorizontalMulti = reactive(useDemoBarHorizontalMulti());
    function useDemoBarHorizontalMulti() {
      const { primary, info } = useTailwindColors();
      const type = "bar";
      const height = 280;
      const options = {
        chart: {
          toolbar: {
            show: false
          }
        },
        colors: [primary.value, info.value],
        title: {
          text: "",
          align: "left"
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: "top"
            }
          }
        },
        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: "12px",
            colors: ["#fff"]
          }
        },
        stroke: {
          show: true,
          width: 1,
          colors: ["#fff"]
        },
        xaxis: {
          categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007]
        },
        legend: {
          position: "top",
          horizontalAlign: "center"
        }
      };
      const series = ref([
        {
          name: "Completed",
          data: [44, 55, 41, 64, 22, 43, 21]
        },
        {
          name: "Pending",
          data: [53, 32, 33, 52, 13, 44, 32]
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
      const _component_BaseHeading = _sfc_main$p;
      const _component_AddonApexcharts = _sfc_main$l;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
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
                  _push3(`<span${_scopeId2}>Horizontal Multiple</span>`);
                } else {
                  return [
                    createVNode("span", null, "Horizontal Multiple")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(demoBarHorizontalMulti), null, _parent2, _scopeId));
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
                    createVNode("span", null, "Horizontal Multiple")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, unref(demoBarHorizontalMulti), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/demo-chart/DemoChartBarHorizontalMulti.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "DemoChartTimeline",
  __ssrInlineRender: true,
  setup(__props) {
    const demoTimeline = reactive(useDemoTimeline());
    function useDemoTimeline() {
      const { primary, info, success, warning, danger } = useTailwindColors();
      const type = "rangeBar";
      const height = 280;
      const options = {
        title: {
          text: "",
          align: "left"
        },
        chart: {
          toolbar: {
            show: false
          }
        },
        colors: [
          primary.value,
          info.value,
          success.value,
          warning.value,
          danger.value
        ],
        plotOptions: {
          bar: {
            horizontal: true,
            distributed: true,
            dataLabels: {
              hideOverflowingLabels: false
            }
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function(val, opts) {
            const label = opts.w.globals.labels[opts.dataPointIndex];
            val[0];
            val[1];
            const diff = 0;
            return label + ": " + diff + "d";
          },
          style: {
            colors: ["#f3f4f5", "#fff"],
            weight: 400
          }
        },
        xaxis: {
          type: "datetime"
        },
        yaxis: {
          show: false
        },
        grid: {
          row: {
            colors: ["transparent"],
            opacity: 1
          }
        }
      };
      const series = ref([
        {
          data: [
            {
              x: "Analysis",
              y: [
                (/* @__PURE__ */ new Date("2019-02-27")).getTime(),
                (/* @__PURE__ */ new Date("2019-03-04")).getTime()
              ],
              fillColor: primary.value
            },
            {
              x: "Design",
              y: [
                (/* @__PURE__ */ new Date("2019-03-04")).getTime(),
                (/* @__PURE__ */ new Date("2019-03-08")).getTime()
              ],
              fillColor: info.value
            },
            {
              x: "Coding",
              y: [
                (/* @__PURE__ */ new Date("2019-03-07")).getTime(),
                (/* @__PURE__ */ new Date("2019-03-10")).getTime()
              ],
              fillColor: success.value
            },
            {
              x: "Testing",
              y: [
                (/* @__PURE__ */ new Date("2019-03-08")).getTime(),
                (/* @__PURE__ */ new Date("2019-03-12")).getTime()
              ],
              fillColor: warning.value
            },
            {
              x: "Deployment",
              y: [
                (/* @__PURE__ */ new Date("2019-03-12")).getTime(),
                (/* @__PURE__ */ new Date("2019-03-17")).getTime()
              ],
              fillColor: danger.value
            }
          ]
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
      const _component_BaseHeading = _sfc_main$p;
      const _component_AddonApexcharts = _sfc_main$l;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
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
                  _push3(`<span${_scopeId2}>Timeline Chart</span>`);
                } else {
                  return [
                    createVNode("span", null, "Timeline Chart")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(demoTimeline), null, _parent2, _scopeId));
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
                    createVNode("span", null, "Timeline Chart")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, unref(demoTimeline), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/demo-chart/DemoChartTimeline.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "DemoChartBubble",
  __ssrInlineRender: true,
  setup(__props) {
    const demoBubble = reactive(useDemoBubble());
    function useDemoBubble() {
      const { primary, info, success, danger } = useTailwindColors();
      const type = "bubble";
      const height = 280;
      const options = {
        chart: {
          toolbar: {
            show: false
          }
        },
        colors: [primary.value, success.value, info.value, danger.value],
        dataLabels: {
          enabled: false
        },
        fill: {
          opacity: 0.8
        },
        title: {
          text: ""
        },
        xaxis: {
          tickAmount: 12,
          type: "category"
        },
        yaxis: {
          max: 70
        },
        legend: {
          position: "top",
          horizontalAlign: "center"
        }
      };
      const series = ref([
        {
          name: "Bubble1",
          data: generateData((/* @__PURE__ */ new Date("11 Feb 2017 GMT")).getTime(), 20, {
            min: 10,
            max: 60
          })
        },
        {
          name: "Bubble2",
          data: generateData((/* @__PURE__ */ new Date("11 Feb 2017 GMT")).getTime(), 20, {
            min: 10,
            max: 60
          })
        },
        {
          name: "Bubble3",
          data: generateData((/* @__PURE__ */ new Date("11 Feb 2017 GMT")).getTime(), 20, {
            min: 10,
            max: 60
          })
        },
        {
          name: "Bubble4",
          data: generateData((/* @__PURE__ */ new Date("11 Feb 2017 GMT")).getTime(), 20, {
            min: 10,
            max: 60
          })
        }
      ]);
      function generateData(baseval, count, yrange) {
        let i = 0;
        const _series = [];
        while (i < count) {
          const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
          const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
          const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
          _series.push([x, y, z]);
          i++;
        }
        return _series;
      }
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
      const _component_AddonApexcharts = _sfc_main$l;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
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
                  _push3(`<span${_scopeId2}>Bubble Chart</span>`);
                } else {
                  return [
                    createVNode("span", null, "Bubble Chart")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(demoBubble), null, _parent2, _scopeId));
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
                    createVNode("span", null, "Bubble Chart")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, unref(demoBubble), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/demo-chart/DemoChartBubble.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "DemoChartScatter",
  __ssrInlineRender: true,
  setup(__props) {
    const demoScatter = reactive(useDemoScatter());
    function useDemoScatter() {
      const { primary, info, success, danger } = useTailwindColors();
      const type = "scatter";
      const height = 280;
      const options = {
        title: {
          text: ""
        },
        chart: {
          zoom: {
            type: "xy"
          },
          toolbar: {
            show: false
          }
        },
        colors: [primary.value, success.value, info.value, danger.value],
        dataLabels: {
          enabled: false
        },
        grid: {
          xaxis: {
            lines: {
              show: true
            }
          },
          yaxis: {
            lines: {
              show: true
            }
          }
        },
        xaxis: {
          type: "datetime"
        },
        yaxis: {
          max: 70
        },
        legend: {
          position: "top",
          horizontalAlign: "center"
        }
      };
      const series = ref([
        {
          name: "Team 1",
          data: generateDayWiseTimeSeries(
            (/* @__PURE__ */ new Date("11 Feb 2017 GMT")).getTime(),
            20,
            {
              min: 10,
              max: 60
            }
          )
        },
        {
          name: "Team 2",
          data: generateDayWiseTimeSeries(
            (/* @__PURE__ */ new Date("11 Feb 2017 GMT")).getTime(),
            20,
            {
              min: 10,
              max: 60
            }
          )
        },
        {
          name: "Team 3",
          data: generateDayWiseTimeSeries(
            (/* @__PURE__ */ new Date("11 Feb 2017 GMT")).getTime(),
            30,
            {
              min: 10,
              max: 60
            }
          )
        },
        {
          name: "Team 4",
          data: generateDayWiseTimeSeries(
            (/* @__PURE__ */ new Date("11 Feb 2017 GMT")).getTime(),
            10,
            {
              min: 10,
              max: 60
            }
          )
        },
        {
          name: "Team 5",
          data: generateDayWiseTimeSeries(
            (/* @__PURE__ */ new Date("11 Feb 2017 GMT")).getTime(),
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseHeading = _sfc_main$p;
      const _component_AddonApexcharts = _sfc_main$l;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
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
                  _push3(`<span${_scopeId2}>Scatter Chart</span>`);
                } else {
                  return [
                    createVNode("span", null, "Scatter Chart")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(demoScatter), null, _parent2, _scopeId));
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
                    createVNode("span", null, "Scatter Chart")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, unref(demoScatter), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/demo-chart/DemoChartScatter.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "DemoChartPie",
  __ssrInlineRender: true,
  setup(__props) {
    const demoPie = reactive(useDemoPie());
    function useDemoPie() {
      const { primary, info, success, warning, danger } = useTailwindColors();
      const height = 335;
      const type = "pie";
      const options = {
        dataLabels: {
          style: {
            fontSize: "12px",
            weight: 500
          }
        },
        colors: [primary.value, success.value, info.value, danger.value],
        labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 315,
                toolbar: {
                  show: false
                }
              },
              legend: {
                position: "top"
              }
            }
          }
        ],
        legend: {
          position: "right",
          horizontalAlign: "center"
        }
      };
      const series = ref([44, 55, 13, 43, 22]);
      return {
        type,
        height,
        options,
        series
      };
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$C;
      const _component_AddonApexcharts = _sfc_main$l;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(demoPie), null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_AddonApexcharts, unref(demoPie), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/demo-chart/DemoChartPie.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DemoChartDonut",
  __ssrInlineRender: true,
  setup(__props) {
    const demoDonut = reactive(useDemoDonut());
    function useDemoDonut() {
      const { primary, info, success, danger } = useTailwindColors();
      const height = 290;
      const type = "donut";
      const options = {
        title: {
          text: ""
        },
        labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
        colors: [primary.value, success.value, info.value, danger.value],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 280,
                toolbar: {
                  show: false
                }
              },
              legend: {
                position: "top"
              }
            }
          }
        ],
        legend: {
          position: "right",
          horizontalAlign: "center"
        }
      };
      const series = ref([44, 55, 41, 17, 15]);
      return {
        type,
        height,
        options,
        series
      };
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$C;
      const _component_AddonApexcharts = _sfc_main$l;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(demoDonut), null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_AddonApexcharts, unref(demoDonut), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/demo-chart/DemoChartDonut.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DemoChartRadial",
  __ssrInlineRender: true,
  setup(__props) {
    const demoRadial = reactive(useDemoRadial());
    function useDemoRadial() {
      const { primary } = useTailwindColors();
      const height = 265;
      const type = "radialBar";
      const options = {
        title: {
          text: ""
        },
        chart: {
          toolbar: {
            show: false
          }
        },
        colors: [primary.value],
        plotOptions: {
          radialBar: {
            hollow: {
              size: "70%"
            },
            dataLabels: {
              value: {
                fontSize: "16px",
                offsetY: 5
              }
            }
          }
        },
        labels: ["Power"]
      };
      const series = ref([70]);
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
      const _component_AddonApexcharts = _sfc_main$l;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
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
                  _push3(`<span${_scopeId2}>Radial Bar</span>`);
                } else {
                  return [
                    createVNode("span", null, "Radial Bar")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(demoRadial), null, _parent2, _scopeId));
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
                    createVNode("span", null, "Radial Bar")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, unref(demoRadial), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/demo-chart/DemoChartRadial.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DemoChartRadialMulti",
  __ssrInlineRender: true,
  setup(__props) {
    const demoRadialMulti = reactive(useDemoRadialMulti());
    function useDemoRadialMulti() {
      const { primary, info, success, danger } = useTailwindColors();
      const height = 295;
      const type = "radialBar";
      const options = {
        title: {
          text: ""
        },
        chart: {
          toolbar: {
            show: false
          }
        },
        colors: [primary.value, success.value, info.value, danger.value],
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: "22px"
              },
              value: {
                fontSize: "16px",
                offsetY: 5
              },
              total: {
                show: true,
                label: "Total",
                formatter: function() {
                  return 249;
                }
              }
            }
          }
        },
        labels: ["Apples", "Oranges", "Bananas", "Berries"]
      };
      const series = ref([44, 55, 67, 83]);
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
      const _component_AddonApexcharts = _sfc_main$l;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
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
                  _push3(`<span${_scopeId2}>Radial Multiple</span>`);
                } else {
                  return [
                    createVNode("span", null, "Radial Multiple")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(demoRadialMulti), null, _parent2, _scopeId));
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
                    createVNode("span", null, "Radial Multiple")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, unref(demoRadialMulti), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/demo-chart/DemoChartRadialMulti.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DemoChartRadialGauge",
  __ssrInlineRender: true,
  setup(__props) {
    const demoRadialGauge = reactive(useDemoRadialGauge());
    function useDemoRadialGauge() {
      const { primary } = useTailwindColors();
      const height = 370;
      const type = "radialBar";
      const options = {
        title: {
          text: ""
        },
        chart: {
          offsetY: -10,
          toolbar: {
            show: false
          }
        },
        colors: [primary.value],
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
              name: {
                fontSize: "14px",
                color: void 0
              },
              value: {
                offsetY: 10,
                fontSize: "18px",
                color: void 0,
                formatter: asPercent
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
        labels: ["Median Ratio"]
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
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseHeading = _sfc_main$p;
      const _component_AddonApexcharts = _sfc_main$l;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
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
                  _push3(`<span${_scopeId2}>Radial Gauge</span>`);
                } else {
                  return [
                    createVNode("span", null, "Radial Gauge")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(demoRadialGauge), null, _parent2, _scopeId));
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
                    createVNode("span", null, "Radial Gauge")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, unref(demoRadialGauge), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/demo-chart/DemoChartRadialGauge.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DemoChartRadialGaugeAlt",
  __ssrInlineRender: true,
  setup(__props) {
    const demoRadialGaugeAlt = reactive(useDemoRadialGaugeAlt());
    function useDemoRadialGaugeAlt() {
      const { primary } = useTailwindColors();
      const height = 295;
      const type = "radialBar";
      const options = {
        title: {
          text: ""
        },
        chart: {
          height: 295,
          type: "radialBar",
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
      const _component_AddonApexcharts = _sfc_main$l;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
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
                  _push3(`<span${_scopeId2}>Gauge Chart</span>`);
                } else {
                  return [
                    createVNode("span", null, "Gauge Chart")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(demoRadialGaugeAlt), null, _parent2, _scopeId));
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
                    createVNode("span", null, "Gauge Chart")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, unref(demoRadialGaugeAlt), null, 16)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/demo-chart/DemoChartRadialGaugeAlt.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "charts",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DemoChartLine = _sfc_main$k;
      const _component_DemoChartLineMulti = _sfc_main$j;
      const _component_DemoChartLineStep = _sfc_main$i;
      const _component_DemoChartArea = _sfc_main$h;
      const _component_DemoChartAreaMulti = _sfc_main$g;
      const _component_DemoChartBar = _sfc_main$f;
      const _component_DemoChartBarMulti = _sfc_main$e;
      const _component_DemoChartBarStacked = _sfc_main$d;
      const _component_DemoChartBarRange = _sfc_main$c;
      const _component_DemoChartBarHorizontal = _sfc_main$b;
      const _component_DemoChartBarHorizontalMulti = _sfc_main$a;
      const _component_DemoChartTimeline = _sfc_main$9;
      const _component_DemoChartBubble = _sfc_main$8;
      const _component_DemoChartScatter = _sfc_main$7;
      const _component_DemoChartPie = _sfc_main$6;
      const _component_DemoChartDonut = _sfc_main$5;
      const _component_DemoChartRadial = _sfc_main$4;
      const _component_DemoChartRadialMulti = _sfc_main$3;
      const _component_DemoChartRadialGauge = _sfc_main$2;
      const _component_DemoChartRadialGaugeAlt = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="grid grid-cols-1 sm:grid-cols-2 gap-6">`);
      _push(ssrRenderComponent(_component_DemoChartLine, null, null, _parent));
      _push(ssrRenderComponent(_component_DemoChartLineMulti, null, null, _parent));
      _push(ssrRenderComponent(_component_DemoChartLineStep, null, null, _parent));
      _push(ssrRenderComponent(_component_DemoChartArea, null, null, _parent));
      _push(ssrRenderComponent(_component_DemoChartAreaMulti, null, null, _parent));
      _push(ssrRenderComponent(_component_DemoChartBar, null, null, _parent));
      _push(ssrRenderComponent(_component_DemoChartBarMulti, null, null, _parent));
      _push(ssrRenderComponent(_component_DemoChartBarStacked, null, null, _parent));
      _push(ssrRenderComponent(_component_DemoChartBarRange, null, null, _parent));
      _push(ssrRenderComponent(_component_DemoChartBarHorizontal, null, null, _parent));
      _push(ssrRenderComponent(_component_DemoChartBarHorizontalMulti, null, null, _parent));
      _push(ssrRenderComponent(_component_DemoChartTimeline, null, null, _parent));
      _push(ssrRenderComponent(_component_DemoChartBubble, null, null, _parent));
      _push(ssrRenderComponent(_component_DemoChartScatter, null, null, _parent));
      _push(ssrRenderComponent(_component_DemoChartPie, null, null, _parent));
      _push(ssrRenderComponent(_component_DemoChartDonut, null, null, _parent));
      _push(ssrRenderComponent(_component_DemoChartRadial, null, null, _parent));
      _push(ssrRenderComponent(_component_DemoChartRadialMulti, null, null, _parent));
      _push(ssrRenderComponent(_component_DemoChartRadialGauge, null, null, _parent));
      _push(ssrRenderComponent(_component_DemoChartRadialGaugeAlt, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/charts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=charts-a6eee754.mjs.map
