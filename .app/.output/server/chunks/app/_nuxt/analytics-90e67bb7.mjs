import { k as useTailwindColors, j as _sfc_main$C, _ as _sfc_main$p, f as __nuxt_component_2, e as __nuxt_component_0$5, b as _sfc_main$o } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseIconBox-642fe941.mjs';
import { _ as _sfc_main$2 } from './AddonApexcharts-b71489ed.mjs';
import { _ as _sfc_main$3 } from './DemoVcardRight-eff8b26d.mjs';
import { _ as _sfc_main$4 } from './DemoFollowersCompact-7a652f68.mjs';
import { _ as __nuxt_component_14 } from './DemoNotificationsCompact-42a439db.mjs';
import { defineComponent, reactive, ref, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from 'vue';
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
import './BaseAvatarGroup-6e7b4ecf.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "analytics",
  __ssrInlineRender: true,
  setup(__props) {
    const lineRevenue = reactive(useLineRevenue());
    const radialGoal = reactive(useRadialGoal());
    const radialGrowth = reactive(useRadialGrowth());
    const barSalesProfit = reactive(useBarSalesProfit());
    function useLineRevenue() {
      const { primary } = useTailwindColors();
      const type = "line";
      const height = 250;
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
          curve: "smooth"
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
        tooltip: {
          y: {
            formatter: function(val) {
              return "$" + val;
            }
          }
        }
      };
      const series = ref([
        {
          name: "Revenue",
          data: [10835, 40214, 36257, 51411, 45697, 61221, 65295, 91512, 75648]
        }
      ]);
      return {
        type,
        height,
        options,
        series
      };
    }
    function useRadialGoal() {
      const { primary, success } = useTailwindColors();
      const type = "radialBar";
      const height = 220;
      const options = {
        chart: {
          offsetY: -10
        },
        colors: [primary.value, success.value],
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            inverseOrder: true,
            dataLabels: {
              show: true,
              name: {
                show: true,
                fontSize: "14px",
                fontWeight: 500,
                offsetY: -10
              },
              value: {
                show: true,
                fontWeight: 600,
                fontSize: "16px",
                offsetY: -5
              },
              total: {
                show: true,
                fontSize: "14px",
                fontWeight: 500
              }
            },
            hollow: {
              margin: 15,
              size: "75%"
            },
            track: {
              strokeWidth: "100%"
            }
          }
        },
        stroke: {
          lineCap: "round"
        },
        labels: ["Efficiency", "Productivity"]
      };
      const series = ref([57, 86]);
      return {
        type,
        height,
        options,
        series
      };
    }
    function useRadialGrowth() {
      const { success } = useTailwindColors();
      const height = 180;
      const type = "radialBar";
      const options = {
        chart: {
          toolbar: {
            show: false
          }
        },
        colors: [success.value],
        plotOptions: {
          radialBar: {
            hollow: {
              size: "75%"
            },
            dataLabels: {
              show: true,
              name: {
                show: true,
                fontSize: "0.7rem",
                fontFamily: "Roboto",
                fontWeight: 400,
                offsetY: -10
              },
              value: {
                show: true,
                fontWeight: 600,
                fontSize: "16px",
                fontFamily: "Roboto",
                offsetY: -5
              }
            }
          }
        },
        labels: ["Growth"]
      };
      const series = ref([65]);
      return {
        type,
        height,
        options,
        series
      };
    }
    function useBarSalesProfit() {
      const { primary, info, success } = useTailwindColors();
      const type = "bar";
      const height = 250;
      const options = {
        chart: {
          toolbar: {
            show: false
          }
        },
        colors: [primary.value, info.value, success.value],
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
              return val + 70;
            }
          }
        }
      };
      const series = ref([
        {
          name: "Net Profit",
          data: [-26, -15, -13, -14, -9, -12, -7, -10, -4]
        },
        {
          name: "Revenue",
          data: [6, 15, 31, 28, 17, 35, 21, 44, 24]
        },
        {
          name: "Free Cash Flow",
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
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseIconBox = _sfc_main$1;
      const _component_Icon = __nuxt_component_2;
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_AddonApexcharts = _sfc_main$2;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_DemoVcardRight = _sfc_main$3;
      const _component_DemoFollowersCompact = _sfc_main$4;
      const _component_DemoNotificationsCompact = __nuxt_component_14;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-12 gap-4" }, _attrs))}><div class="ltablet:col-span-9 col-span-12 lg:col-span-9"><div class="grid grid-cols-12 gap-4"><div class="col-span-12 md:col-span-4">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-1 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h5",
              size: "sm",
              weight: "medium",
              lead: "tight",
              class: "text-muted-500 dark:text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Transactions</span>`);
                } else {
                  return [
                    createVNode("span", null, "Transactions")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseIconBox, {
              size: "xs",
              class: "bg-success-100 text-success-500 dark:bg-success-500/20 dark:text-success-400 dark:border-success-500 dark:border-2",
              shape: "full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:sketch-logo-duotone",
                    class: "h-5 w-5"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "ph:sketch-logo-duotone",
                      class: "h-5 w-5"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mb-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "3xl",
              weight: "bold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>7,549</span>`);
                } else {
                  return [
                    createVNode("span", null, "7,549")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="text-success-500 flex items-center gap-1 font-sans text-sm"${_scopeId}><span${_scopeId}>+7.8%</span>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:trending-up",
              class: "h-5 w-5"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-muted-400 text-xs"${_scopeId}>since last month</span></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-1 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h5",
                  size: "sm",
                  weight: "medium",
                  lead: "tight",
                  class: "text-muted-500 dark:text-muted-400"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Transactions")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseIconBox, {
                  size: "xs",
                  class: "bg-success-100 text-success-500 dark:bg-success-500/20 dark:text-success-400 dark:border-success-500 dark:border-2",
                  shape: "full"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "ph:sketch-logo-duotone",
                      class: "h-5 w-5"
                    })
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "mb-2" }, [
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "3xl",
                  weight: "bold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "7,549")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "text-success-500 flex items-center gap-1 font-sans text-sm" }, [
                createVNode("span", null, "+7.8%"),
                createVNode(_component_Icon, {
                  name: "lucide:trending-up",
                  class: "h-5 w-5"
                }),
                createVNode("span", { class: "text-muted-400 text-xs" }, "since last month")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-12 md:col-span-4">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-1 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h5",
              size: "sm",
              weight: "medium",
              lead: "tight",
              class: "text-muted-500 dark:text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Subscriptions</span>`);
                } else {
                  return [
                    createVNode("span", null, "Subscriptions")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseIconBox, {
              size: "xs",
              class: "bg-yellow-100 text-yellow-500 dark:border-2 dark:border-yellow-500 dark:bg-yellow-500/20 dark:text-yellow-400",
              shape: "full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:rocket-duotone",
                    class: "h-5 w-5"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "ph:rocket-duotone",
                      class: "h-5 w-5"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mb-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "3xl",
              weight: "bold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>1,611</span>`);
                } else {
                  return [
                    createVNode("span", null, "1,611")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="text-danger-500 flex items-center gap-1 font-sans text-sm"${_scopeId}><span${_scopeId}>-2.7%</span>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:trending-down",
              class: "h-5 w-5"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-muted-400 text-xs"${_scopeId}>going down</span></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-1 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h5",
                  size: "sm",
                  weight: "medium",
                  lead: "tight",
                  class: "text-muted-500 dark:text-muted-400"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Subscriptions")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseIconBox, {
                  size: "xs",
                  class: "bg-yellow-100 text-yellow-500 dark:border-2 dark:border-yellow-500 dark:bg-yellow-500/20 dark:text-yellow-400",
                  shape: "full"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "ph:rocket-duotone",
                      class: "h-5 w-5"
                    })
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "mb-2" }, [
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "3xl",
                  weight: "bold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "1,611")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "text-danger-500 flex items-center gap-1 font-sans text-sm" }, [
                createVNode("span", null, "-2.7%"),
                createVNode(_component_Icon, {
                  name: "lucide:trending-down",
                  class: "h-5 w-5"
                }),
                createVNode("span", { class: "text-muted-400 text-xs" }, "going down")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-12 md:col-span-4">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-1 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h5",
              size: "sm",
              weight: "medium",
              lead: "tight",
              class: "text-muted-500 dark:text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Referals</span>`);
                } else {
                  return [
                    createVNode("span", null, "Referals")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseIconBox, {
              size: "xs",
              class: "bg-primary-100 text-primary-500 dark:bg-primary-500/20 dark:text-primary-400 dark:border-primary-500 dark:border-2",
              shape: "full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:megaphone-simple-duotone",
                    class: "h-5 w-5"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "ph:megaphone-simple-duotone",
                      class: "h-5 w-5"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mb-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "3xl",
              weight: "bold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>862</span>`);
                } else {
                  return [
                    createVNode("span", null, "862")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="text-success-500 flex items-center gap-1 font-sans text-sm"${_scopeId}><span${_scopeId}>+4.5%</span>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:trending-up",
              class: "h-5 w-5"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-muted-400 text-xs"${_scopeId}>going up</span></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-1 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h5",
                  size: "sm",
                  weight: "medium",
                  lead: "tight",
                  class: "text-muted-500 dark:text-muted-400"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Referals")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseIconBox, {
                  size: "xs",
                  class: "bg-primary-100 text-primary-500 dark:bg-primary-500/20 dark:text-primary-400 dark:border-primary-500 dark:border-2",
                  shape: "full"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "ph:megaphone-simple-duotone",
                      class: "h-5 w-5"
                    })
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "mb-2" }, [
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "3xl",
                  weight: "bold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "862")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "text-success-500 flex items-center gap-1 font-sans text-sm" }, [
                createVNode("span", null, "+4.5%"),
                createVNode(_component_Icon, {
                  name: "lucide:trending-up",
                  class: "h-5 w-5"
                }),
                createVNode("span", { class: "text-muted-400 text-xs" }, "going up")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-12 md:col-span-8">`);
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
                  _push3(`<span${_scopeId2}>Revenue</span>`);
                } else {
                  return [
                    createVNode("span", null, "Revenue")
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
            _push2(`</div><div class="flex gap-8"${_scopeId}><div${_scopeId}><span class="text-muted-400 font-sans text-xs"${_scopeId}>This month</span><p class="text-primary-500 font-sans text-lg font-medium"${_scopeId}> $75,689 </p></div><div${_scopeId}><span class="text-muted-400 font-sans text-xs"${_scopeId}>Last month</span><p class="text-muted-800 dark:text-muted-100 font-sans text-lg font-medium"${_scopeId}> $59,724 </p></div></div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(lineRevenue), null, _parent2, _scopeId));
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
                    createVNode("span", null, "Revenue")
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
                ])
              ]),
              createVNode(_component_AddonApexcharts, unref(lineRevenue), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-12 md:col-span-4">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "flex h-full flex-col p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-10 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Goal Overview</span>`);
                } else {
                  return [
                    createVNode("span", null, "Goal Overview")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(radialGoal), null, _parent2, _scopeId));
            _push2(`</div><div class="mt-auto"${_scopeId}><div class="border-muted-200 dark:border-muted-700 flex w-full border-t pt-4 text-center"${_scopeId}><div class="border-muted-200 dark:border-muted-700 flex-1 border-r px-2"${_scopeId}><span class="text-muted-400 font-sans text-xs"${_scopeId}> Completed </span><p class="text-muted-800 dark:text-muted-100 font-sans text-lg font-medium"${_scopeId}> 1431 </p></div><div class="flex-1 px-2"${_scopeId}><span class="text-muted-400 font-sans text-xs"${_scopeId}> In Progress </span><p class="text-muted-800 dark:text-muted-100 font-sans text-lg font-medium"${_scopeId}> 219 </p></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-10 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Goal Overview")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "mb-6" }, [
                createVNode(_component_AddonApexcharts, unref(radialGoal), null, 16)
              ]),
              createVNode("div", { class: "mt-auto" }, [
                createVNode("div", { class: "border-muted-200 dark:border-muted-700 flex w-full border-t pt-4 text-center" }, [
                  createVNode("div", { class: "border-muted-200 dark:border-muted-700 flex-1 border-r px-2" }, [
                    createVNode("span", { class: "text-muted-400 font-sans text-xs" }, " Completed "),
                    createVNode("p", { class: "text-muted-800 dark:text-muted-100 font-sans text-lg font-medium" }, " 1431 ")
                  ]),
                  createVNode("div", { class: "flex-1 px-2" }, [
                    createVNode("span", { class: "text-muted-400 font-sans text-xs" }, " In Progress "),
                    createVNode("p", { class: "text-muted-800 dark:text-muted-100 font-sans text-lg font-medium" }, " 219 ")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-12 md:col-span-4">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "flex h-full flex-col p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-5 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Sales Growth</span>`);
                } else {
                  return [
                    createVNode("span", null, "Sales Growth")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(radialGrowth), null, _parent2, _scopeId));
            _push2(`</div><div class="mt-auto"${_scopeId}><div class="flex justify-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "logos:shopify",
              class: "h-8 w-8"
            }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h5",
              size: "sm",
              weight: "light",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Shopify</span>`);
                } else {
                  return [
                    createVNode("span", null, "Shopify")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}>Best selling channel</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, "Best selling channel")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-5 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Sales Growth")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "mb-6" }, [
                createVNode(_component_AddonApexcharts, unref(radialGrowth), null, 16)
              ]),
              createVNode("div", { class: "mt-auto" }, [
                createVNode("div", { class: "flex justify-center gap-2" }, [
                  createVNode(_component_Icon, {
                    name: "logos:shopify",
                    class: "h-8 w-8"
                  }),
                  createVNode("div", null, [
                    createVNode(_component_BaseHeading, {
                      as: "h5",
                      size: "sm",
                      weight: "light",
                      lead: "tight",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "Shopify")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, { size: "xs" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-muted-400" }, "Best selling channel")
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
      _push(`</div><div class="col-span-12 md:col-span-8">`);
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
                  _push3(`<span${_scopeId2}>Profit</span>`);
                } else {
                  return [
                    createVNode("span", null, "Profit")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(barSalesProfit), null, _parent2, _scopeId));
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
                    createVNode("span", null, "Profit")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, unref(barSalesProfit), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="ltablet:col-span-3 col-span-12 lg:col-span-3"><div class="ptablet:grid-cols-2 ltablet:flex ltablet:flex-col grid gap-4 lg:flex lg:flex-col">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoVcardRight, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoVcardRight)
            ];
          }
        }),
        _: 1
      }, _parent));
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
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
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
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
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
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/analytics.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=analytics-90e67bb7.mjs.map
