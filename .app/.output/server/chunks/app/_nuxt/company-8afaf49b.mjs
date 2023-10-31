import { k as useTailwindColors, j as _sfc_main$C, f as __nuxt_component_2$1, s as _sfc_main$E, _ as _sfc_main$p, b as _sfc_main$o, e as __nuxt_component_0$5, l as _export_sfc, d as _sfc_main$x } from '../server.mjs';
import { _ as _sfc_main$9 } from './BaseButtonIcon-6150946c.mjs';
import { useSSRContext, defineComponent, reactive, ref, shallowRef, computed, mergeProps, withCtx, createVNode, unref, createTextVNode, isRef, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _sfc_main$8 } from './AddonApexcharts-b71489ed.mjs';
import { _ as _sfc_main$3$1, a as _sfc_main$2$1, b as _sfc_main$1$1, c as _sfc_main$6 } from './TairoTableCell-13e62d75.mjs';
import { _ as _sfc_main$5 } from './BaseCheckbox-45d3fdba.mjs';
import { _ as _sfc_main$7 } from './BaseTag-734af285.mjs';
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
import './IconCheck-b31ac5c7.mjs';

const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BaseAvatar = _sfc_main$E;
  const _component_BaseButtonIcon = _sfc_main$9;
  const _component_Icon = __nuxt_component_2$1;
  const _component_BaseHeading = _sfc_main$p;
  const _component_BaseParagraph = _sfc_main$o;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-full flex-col" }, _attrs))}><div class="relative mx-auto mb-4 h-20 w-20">`);
  _push(ssrRenderComponent(_component_BaseAvatar, {
    size: "xl",
    src: "/img/icons/logos/slicer.svg"
  }, null, _parent));
  _push(`<div class="absolute bottom-0 end-0">`);
  _push(ssrRenderComponent(_component_BaseButtonIcon, {
    shape: "full",
    small: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, { name: "ph:camera-duotone" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Icon, { name: "ph:camera-duotone" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="text-center">`);
  _push(ssrRenderComponent(_component_BaseHeading, {
    size: "md",
    weight: "medium",
    class: "text-muted-800 dark:text-muted-100"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Slicer Learning</span>`);
      } else {
        return [
          createVNode("span", null, "Slicer Learning")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseParagraph, {
    size: "xs",
    class: "text-muted-400 mb-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Online courses</span>`);
      } else {
        return [
          createVNode("span", null, "Online courses")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseParagraph, {
    size: "sm",
    class: "text-muted-500 dark:text-muted-400 mx-auto max-w-[320px]"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fac ista esse non inportuna. </span>`);
      } else {
        return [
          createVNode("span", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fac ista esse non inportuna. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="border-muted-200 dark:border-muted-700 mt-auto border-t pt-6 text-center"><div class="divide-muted-200 dark:divide-muted-700 flex w-full items-center divide-x"><div class="flex-1"><div class="flex flex-col px-4 text-center"><h4 class="text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold"> 864 </h4><p class="font-sansfont-semibold text-muted-400 text-[0.65rem] uppercase"> Posts </p></div></div><div class="flex-1"><div class="flex flex-col px-4 text-center"><h4 class="text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold"> 247 </h4><p class="text-muted-400 font-sans text-[0.65rem] font-semibold uppercase"> Projects </p></div></div><div class="flex-1"><div class="flex flex-col px-4 text-center"><h4 class="text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold"> 19k </h4><p class="font-sansfont-semibold text-muted-400 text-[0.65rem] uppercase"> Followers </p></div></div></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoCompanyOverview.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DemoChartAreaStats",
  __ssrInlineRender: true,
  setup(__props) {
    const areaSubscriptions = reactive(useAreaSubscriptions());
    function useAreaSubscriptions() {
      const { primary, info, success } = useTailwindColors();
      const type = "area";
      const height = 180;
      const options = {
        chart: {
          toolbar: {
            show: false
          },
          sparkline: {
            enabled: true
          }
        },
        colors: [primary.value, success.value, info.value],
        grid: {
          show: false,
          padding: {
            left: 0,
            right: 0
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [2],
          curve: "smooth"
        },
        xaxis: {
          type: "numeric",
          lines: {
            show: false
          },
          axisBorder: {
            show: false
          },
          labels: {
            show: false
          }
        },
        yaxis: [
          {
            y: 0,
            offsetX: 0,
            offsetY: 0,
            labels: {
              show: false
            },
            padding: {
              left: 0,
              right: 0
            }
          }
        ],
        tooltip: {
          x: {
            show: false,
            format: "dd/MM/yy HH:mm"
          }
        }
      };
      const series = ref([
        {
          name: "New Users",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: "Renewals",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
          name: "Resigns",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
      ]);
      return { type, height, options, series };
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AddonApexcharts = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-full flex-col" }, _attrs))}><div class="border-muted-200 dark:border-muted-700 mb-6 border-b p-6 text-center"><div class="divide-muted-200 dark:divide-muted-700 flex w-full items-center divide-x"><div class="flex-1"><div class="flex flex-col px-4 text-center"><h4 class="text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold"> 314 </h4><p class="font-sansfont-semibold text-muted-400 text-[0.65rem] uppercase"> New </p></div></div><div class="flex-1"><div class="flex flex-col px-4 text-center"><h4 class="text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold"> 611 </h4><p class="text-muted-400 font-sans text-[0.65rem] font-semibold uppercase"> Renewals </p></div></div><div class="flex-1"><div class="flex flex-col px-4 text-center"><h4 class="text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold"> 49 </h4><p class="font-sansfont-semibold text-muted-400 text-[0.65rem] uppercase"> Resigns </p></div></div></div></div><div class="mt-auto w-full">`);
      _push(ssrRenderComponent(_component_AddonApexcharts, unref(areaSubscriptions), null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/demo-chart/DemoChartAreaStats.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DemoChartBarSocialChannels",
  __ssrInlineRender: true,
  setup(__props) {
    const barSocialChannels = reactive(useBarSocialChannels());
    function useBarSocialChannels() {
      const { primary, subtitle, success } = useTailwindColors();
      const type = "bar";
      const height = 235;
      const options = {
        chart: {
          toolbar: {
            show: false
          },
          sparkline: {
            enabled: true
          }
        },
        plotOptions: {
          bar: {
            borderRadius: 5,
            borderRadiusApplication: "end",
            columnWidth: "60%",
            colors: {
              backgroundBarOpacity: 0.75
            }
          }
        },
        colors: [success.value, primary.value, subtitle.value],
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
      const series = ref([
        {
          name: "New Users",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: "Renewals",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }
      ]);
      return { type, height, options, series };
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AddonApexcharts = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-full flex-col" }, _attrs))}><div class="border-muted-200 dark:border-muted-700 mb-6 border-b p-6 text-center"><div class="divide-muted-200 dark:divide-muted-700 flex w-full items-center divide-x"><div class="flex-1"><div class="flex flex-col px-4 text-center"><h4 class="text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold"> 314 </h4><p class="font-sansfont-semibold text-muted-400 text-[0.65rem] uppercase"> Facebook </p></div></div><div class="flex-1"><div class="flex flex-col px-4 text-center"><h4 class="text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold"> 611 </h4><p class="text-muted-400 font-sans text-[0.65rem] font-semibold uppercase"> Twitter </p></div></div><div class="flex-1"><div class="flex flex-col px-4 text-center"><h4 class="text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold"> 49 </h4><p class="font-sansfont-semibold text-muted-400 text-[0.65rem] uppercase"> Linkedin </p></div></div></div></div><div class="mt-auto w-full">`);
      _push(ssrRenderComponent(_component_AddonApexcharts, unref(barSocialChannels), null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/demo-chart/DemoChartBarSocialChannels.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DemoPendingTickets",
  __ssrInlineRender: true,
  setup(__props) {
    const tickets = [
      {
        id: 45651,
        title: "Cannot save changes to user profile",
        content: "Iam not able to save changes I make to my user profile. When I click on the save button, it simply says failed.",
        updated: "5 hours ago",
        user: {
          name: "Anna Vrinkof",
          src: "/img/avatars/22.svg"
        }
      },
      {
        id: 45783,
        title: "Cannot create a new opportunity",
        content: "when I try to create a new opportunity, Iam redirected to a 404 page after clicking the action button.",
        updated: "2 hours ago",
        user: {
          name: "John Cambell",
          src: "/img/avatars/3.svg"
        }
      },
      {
        id: 45723,
        title: "Payment fails when using PayPal",
        content: "When I try to use PayPal as a payment method, it spins forever and I get an error message after that.",
        updated: "30 minutes ago",
        user: {
          name: "Howard Wries",
          src: "/img/avatars/16.svg"
        }
      },
      {
        id: 45862,
        title: "Cannot find the assets in the theme folder",
        content: "I followed the documentation but Iam not able to locate the assets in the main folder. Can I get some help?",
        updated: "6 hours ago",
        user: {
          name: "Charles Hines",
          src: "/img/avatars/8.svg"
        }
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseButton = _sfc_main$x;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "divide-muted-200 dark:divide-muted-700 space-y-6 divide-y" }, _attrs))}><!--[-->`);
      ssrRenderList(tickets, (ticket, index) => {
        _push(`<div class="${ssrRenderClass([index > 0 ? "pt-6" : "", "flex flex-col gap-4 sm:flex-row"])}">`);
        _push(ssrRenderComponent(_component_BaseAvatar, {
          size: "lg",
          src: ticket.user.src,
          text: ticket.user.name,
          "data-nui-tooltip": ticket.user.name
        }, null, _parent));
        _push(`<div class="max-w-md">`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h3",
          size: "md",
          weight: "medium",
          class: "text-muted-800 dark:text-muted-100 mb-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>[#${ssrInterpolate(ticket.id)}] ${ssrInterpolate(ticket.title)}</span>`);
            } else {
              return [
                createVNode("span", null, "[#" + toDisplayString(ticket.id) + "] " + toDisplayString(ticket.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, {
          size: "sm",
          class: "text-muted-500 dark:text-muted-400 mb-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(ticket.content)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(ticket.content), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, {
          size: "xs",
          class: "text-muted-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>Updated ${ssrInterpolate(ticket.updated)}</span>`);
            } else {
              return [
                createVNode("span", null, "Updated " + toDisplayString(ticket.updated), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="w-full sm:ms-auto sm:w-auto">`);
        _push(ssrRenderComponent(_component_BaseButton, {
          color: "default",
          class: "w-full sm:w-auto"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>Manage</span>`);
            } else {
              return [
                createVNode("span", null, "Manage")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoPendingTickets.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "company",
  __ssrInlineRender: true,
  setup(__props) {
    const gaugePersonal = reactive(useGaugePersonal());
    const barSalesProfit = reactive(useBarSalesProfit());
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
    const team = shallowRef([
      {
        id: "0",
        src: "/img/avatars/22.svg",
        name: "Anna Vrinkof",
        role: "UI/UX designer",
        expertise: "UX Design",
        rate: 49,
        status: "Available"
      },
      {
        id: "1",
        src: "/img/avatars/3.svg",
        name: "John Cambell",
        role: "Sales manager",
        expertise: "Management",
        rate: 74,
        status: "Hired"
      },
      {
        id: "2",
        src: "/img/avatars/9.svg",
        name: "Beth Delanoe",
        role: "Product designer",
        expertise: "Product",
        rate: 43,
        status: "Available"
      },
      {
        id: "3",
        src: "/img/avatars/14.svg",
        name: "Andrew Higgs",
        role: "Project manager",
        expertise: "Project",
        rate: 69,
        status: "New"
      }
    ]);
    const selected = ref([]);
    const isAllVisibleSelected = computed(() => {
      return selected.value.length === team.value?.length;
    });
    function toggleAllVisibleSelection() {
      if (isAllVisibleSelected.value) {
        selected.value = [];
      } else {
        selected.value = team.value?.map((item) => item.id) ?? [];
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$C;
      const _component_Icon = __nuxt_component_2$1;
      const _component_DemoCompanyOverview = __nuxt_component_2;
      const _component_DemoChartAreaStats = _sfc_main$3;
      const _component_DemoChartBarSocialChannels = _sfc_main$2;
      const _component_TairoTable = _sfc_main$3$1;
      const _component_TairoTableHeading = _sfc_main$2$1;
      const _component_BaseCheckbox = _sfc_main$5;
      const _component_TairoTableRow = _sfc_main$1$1;
      const _component_TairoTableCell = _sfc_main$6;
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BaseTag = _sfc_main$7;
      const _component_BaseHeading = _sfc_main$p;
      const _component_AddonApexcharts = _sfc_main$8;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_DemoPendingTickets = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden" }, _attrs))}><div class="flex flex-col gap-6">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="xs:divide-y divide-muted-200 dark:divide-muted-700 flex w-full flex-col items-center sm:flex-row sm:divide-x"${_scopeId}><div class="flex-1"${_scopeId}><div class="flex flex-col p-4 text-center sm:py-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:users-duotone",
              class: "text-primary-500 mx-auto h-8 w-8"
            }, null, _parent2, _scopeId));
            _push2(`<h4 class="text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold"${_scopeId}> 162 </h4><p class="text-muted-400 font-sans text-sm"${_scopeId}>New Users</p></div></div><div class="flex-1"${_scopeId}><div class="flex flex-col p-4 text-center sm:py-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:coins-duotone",
              class: "text-primary-500 mx-auto h-8 w-8"
            }, null, _parent2, _scopeId));
            _push2(`<h4 class="text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold"${_scopeId}> $8,579 </h4><p class="text-muted-400 font-sans text-sm"${_scopeId}>Daily Income</p></div></div><div class="flex-1"${_scopeId}><div class="flex flex-col p-4 text-center sm:py-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:briefcase-duotone",
              class: "text-primary-500 mx-auto h-8 w-8"
            }, null, _parent2, _scopeId));
            _push2(`<h4 class="text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold"${_scopeId}> 192 </h4><p class="text-muted-400 font-sans text-sm"${_scopeId}>Completed Projects</p></div></div><div class="flex-1"${_scopeId}><div class="flex flex-col p-4 text-center sm:py-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:ticket-duotone",
              class: "text-primary-500 mx-auto h-8 w-8"
            }, null, _parent2, _scopeId));
            _push2(`<h4 class="text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold"${_scopeId}> 32 </h4><p class="text-muted-400 font-sans text-sm"${_scopeId}>Active Tickets</p></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "xs:divide-y divide-muted-200 dark:divide-muted-700 flex w-full flex-col items-center sm:flex-row sm:divide-x" }, [
                createVNode("div", { class: "flex-1" }, [
                  createVNode("div", { class: "flex flex-col p-4 text-center sm:py-0" }, [
                    createVNode(_component_Icon, {
                      name: "ph:users-duotone",
                      class: "text-primary-500 mx-auto h-8 w-8"
                    }),
                    createVNode("h4", { class: "text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold" }, " 162 "),
                    createVNode("p", { class: "text-muted-400 font-sans text-sm" }, "New Users")
                  ])
                ]),
                createVNode("div", { class: "flex-1" }, [
                  createVNode("div", { class: "flex flex-col p-4 text-center sm:py-0" }, [
                    createVNode(_component_Icon, {
                      name: "ph:coins-duotone",
                      class: "text-primary-500 mx-auto h-8 w-8"
                    }),
                    createVNode("h4", { class: "text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold" }, " $8,579 "),
                    createVNode("p", { class: "text-muted-400 font-sans text-sm" }, "Daily Income")
                  ])
                ]),
                createVNode("div", { class: "flex-1" }, [
                  createVNode("div", { class: "flex flex-col p-4 text-center sm:py-0" }, [
                    createVNode(_component_Icon, {
                      name: "ph:briefcase-duotone",
                      class: "text-primary-500 mx-auto h-8 w-8"
                    }),
                    createVNode("h4", { class: "text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold" }, " 192 "),
                    createVNode("p", { class: "text-muted-400 font-sans text-sm" }, "Completed Projects")
                  ])
                ]),
                createVNode("div", { class: "flex-1" }, [
                  createVNode("div", { class: "flex flex-col p-4 text-center sm:py-0" }, [
                    createVNode(_component_Icon, {
                      name: "ph:ticket-duotone",
                      class: "text-primary-500 mx-auto h-8 w-8"
                    }),
                    createVNode("h4", { class: "text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold" }, " 32 "),
                    createVNode("p", { class: "text-muted-400 font-sans text-sm" }, "Active Tickets")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="grid grid-cols-12 gap-6"><div class="ptablet:col-span-6 col-span-12 sm:col-span-4">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "h-full p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoCompanyOverview, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoCompanyOverview)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ptablet:col-span-6 col-span-12 sm:col-span-4">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "relative h-full" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoChartAreaStats, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoChartAreaStats)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ptablet:col-span-12 col-span-12 sm:col-span-4">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "relative h-full" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoChartBarSocialChannels, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoChartBarSocialChannels)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-12">`);
      _push(ssrRenderComponent(_component_TairoTable, { shape: "rounded" }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TairoTableHeading, {
              uppercase: "",
              class: "px-4 py-6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseCheckbox, {
                    "model-value": unref(isAllVisibleSelected),
                    indeterminate: unref(selected).length > 0 && !unref(isAllVisibleSelected),
                    name: "table-1-main",
                    shape: "rounded",
                    class: "text-primary-500",
                    onClick: toggleAllVisibleSelection
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center" }, [
                      createVNode(_component_BaseCheckbox, {
                        "model-value": unref(isAllVisibleSelected),
                        indeterminate: unref(selected).length > 0 && !unref(isAllVisibleSelected),
                        name: "table-1-main",
                        shape: "rounded",
                        class: "text-primary-500",
                        onClick: toggleAllVisibleSelection
                      }, null, 8, ["model-value", "indeterminate"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TairoTableHeading, { uppercase: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Collaborator`);
                } else {
                  return [
                    createTextVNode("Collaborator")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TairoTableHeading, { uppercase: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Expertise`);
                } else {
                  return [
                    createTextVNode("Expertise")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TairoTableHeading, { uppercase: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Rate`);
                } else {
                  return [
                    createTextVNode("Rate")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TairoTableHeading, { uppercase: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Status`);
                } else {
                  return [
                    createTextVNode("Status")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TairoTableHeading, {
              uppercase: "",
              class: "px-4 py-6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="sr-only"${_scopeId2}>View</span>`);
                } else {
                  return [
                    createVNode("span", { class: "sr-only" }, "View")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TairoTableHeading, {
                uppercase: "",
                class: "px-4 py-6"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode(_component_BaseCheckbox, {
                      "model-value": unref(isAllVisibleSelected),
                      indeterminate: unref(selected).length > 0 && !unref(isAllVisibleSelected),
                      name: "table-1-main",
                      shape: "rounded",
                      class: "text-primary-500",
                      onClick: toggleAllVisibleSelection
                    }, null, 8, ["model-value", "indeterminate"])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_TairoTableHeading, { uppercase: "" }, {
                default: withCtx(() => [
                  createTextVNode("Collaborator")
                ]),
                _: 1
              }),
              createVNode(_component_TairoTableHeading, { uppercase: "" }, {
                default: withCtx(() => [
                  createTextVNode("Expertise")
                ]),
                _: 1
              }),
              createVNode(_component_TairoTableHeading, { uppercase: "" }, {
                default: withCtx(() => [
                  createTextVNode("Rate")
                ]),
                _: 1
              }),
              createVNode(_component_TairoTableHeading, { uppercase: "" }, {
                default: withCtx(() => [
                  createTextVNode("Status")
                ]),
                _: 1
              }),
              createVNode(_component_TairoTableHeading, {
                uppercase: "",
                class: "px-4 py-6"
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "sr-only" }, "View")
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(team), (member) => {
              _push2(ssrRenderComponent(_component_TairoTableRow, {
                key: member.id
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_TairoTableCell, { class: "p-4" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex items-center"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_BaseCheckbox, {
                            modelValue: unref(selected),
                            "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                            value: member.id,
                            name: member.id,
                            shape: "rounded",
                            class: "text-primary-500"
                          }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode(_component_BaseCheckbox, {
                                modelValue: unref(selected),
                                "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                                value: member.id,
                                name: member.id,
                                shape: "rounded",
                                class: "text-primary-500"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "name"])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_TairoTableCell, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex items-center"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_BaseAvatar, {
                            src: member.src,
                            size: "sm"
                          }, null, _parent4, _scopeId3));
                          _push4(`<div class="ms-3 leading-none"${_scopeId3}><h4 class="font-heading text-sm font-semibold"${_scopeId3}>${ssrInterpolate(member.name)}</h4><p class="text-muted-400 font-sans text-xs"${_scopeId3}>${ssrInterpolate(member.role)}</p></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode(_component_BaseAvatar, {
                                src: member.src,
                                size: "sm"
                              }, null, 8, ["src"]),
                              createVNode("div", { class: "ms-3 leading-none" }, [
                                createVNode("h4", { class: "font-heading text-sm font-semibold" }, toDisplayString(member.name), 1),
                                createVNode("p", { class: "text-muted-400 font-sans text-xs" }, toDisplayString(member.role), 1)
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_TairoTableCell, { light: "" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(member.expertise)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(member.expertise), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_TairoTableCell, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`$${ssrInterpolate(member.rate)}/hour`);
                        } else {
                          return [
                            createTextVNode("$" + toDisplayString(member.rate) + "/hour", 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_TairoTableCell, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (member.status === "Available") {
                            _push4(ssrRenderComponent(_component_BaseTag, {
                              color: "success",
                              flavor: "pastel",
                              shape: "full",
                              class: "font-medium"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(member.status)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(member.status), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else if (member.status === "New") {
                            _push4(ssrRenderComponent(_component_BaseTag, {
                              color: "info",
                              flavor: "pastel",
                              shape: "full",
                              class: "font-medium"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(member.status)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(member.status), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else if (member.status === "Hired") {
                            _push4(ssrRenderComponent(_component_BaseTag, {
                              color: "warning",
                              flavor: "pastel",
                              shape: "full",
                              class: "font-medium"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(member.status)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(member.status), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            member.status === "Available" ? (openBlock(), createBlock(_component_BaseTag, {
                              key: 0,
                              color: "success",
                              flavor: "pastel",
                              shape: "full",
                              class: "font-medium"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(member.status), 1)
                              ]),
                              _: 2
                            }, 1024)) : member.status === "New" ? (openBlock(), createBlock(_component_BaseTag, {
                              key: 1,
                              color: "info",
                              flavor: "pastel",
                              shape: "full",
                              class: "font-medium"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(member.status), 1)
                              ]),
                              _: 2
                            }, 1024)) : member.status === "Hired" ? (openBlock(), createBlock(_component_BaseTag, {
                              key: 2,
                              color: "warning",
                              flavor: "pastel",
                              shape: "full",
                              class: "font-medium"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(member.status), 1)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_TairoTableCell, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<a href="#" class="text-violet-500 transition-opacity duration-300 hover:opacity-75 dark:text-violet-400"${_scopeId3}> View </a>`);
                        } else {
                          return [
                            createVNode("a", {
                              href: "#",
                              class: "text-violet-500 transition-opacity duration-300 hover:opacity-75 dark:text-violet-400"
                            }, " View ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_TairoTableCell, { class: "p-4" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode(_component_BaseCheckbox, {
                              modelValue: unref(selected),
                              "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                              value: member.id,
                              name: member.id,
                              shape: "rounded",
                              class: "text-primary-500"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "name"])
                          ])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_TairoTableCell, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode(_component_BaseAvatar, {
                              src: member.src,
                              size: "sm"
                            }, null, 8, ["src"]),
                            createVNode("div", { class: "ms-3 leading-none" }, [
                              createVNode("h4", { class: "font-heading text-sm font-semibold" }, toDisplayString(member.name), 1),
                              createVNode("p", { class: "text-muted-400 font-sans text-xs" }, toDisplayString(member.role), 1)
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_TairoTableCell, { light: "" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(member.expertise), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_TairoTableCell, null, {
                        default: withCtx(() => [
                          createTextVNode("$" + toDisplayString(member.rate) + "/hour", 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_TairoTableCell, null, {
                        default: withCtx(() => [
                          member.status === "Available" ? (openBlock(), createBlock(_component_BaseTag, {
                            key: 0,
                            color: "success",
                            flavor: "pastel",
                            shape: "full",
                            class: "font-medium"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(member.status), 1)
                            ]),
                            _: 2
                          }, 1024)) : member.status === "New" ? (openBlock(), createBlock(_component_BaseTag, {
                            key: 1,
                            color: "info",
                            flavor: "pastel",
                            shape: "full",
                            class: "font-medium"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(member.status), 1)
                            ]),
                            _: 2
                          }, 1024)) : member.status === "Hired" ? (openBlock(), createBlock(_component_BaseTag, {
                            key: 2,
                            color: "warning",
                            flavor: "pastel",
                            shape: "full",
                            class: "font-medium"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(member.status), 1)
                            ]),
                            _: 2
                          }, 1024)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_TairoTableCell, null, {
                        default: withCtx(() => [
                          createVNode("a", {
                            href: "#",
                            class: "text-violet-500 transition-opacity duration-300 hover:opacity-75 dark:text-violet-400"
                          }, " View ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(team), (member) => {
                return openBlock(), createBlock(_component_TairoTableRow, {
                  key: member.id
                }, {
                  default: withCtx(() => [
                    createVNode(_component_TairoTableCell, { class: "p-4" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode(_component_BaseCheckbox, {
                            modelValue: unref(selected),
                            "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                            value: member.id,
                            name: member.id,
                            shape: "rounded",
                            class: "text-primary-500"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "name"])
                        ])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_TairoTableCell, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode(_component_BaseAvatar, {
                            src: member.src,
                            size: "sm"
                          }, null, 8, ["src"]),
                          createVNode("div", { class: "ms-3 leading-none" }, [
                            createVNode("h4", { class: "font-heading text-sm font-semibold" }, toDisplayString(member.name), 1),
                            createVNode("p", { class: "text-muted-400 font-sans text-xs" }, toDisplayString(member.role), 1)
                          ])
                        ])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_TairoTableCell, { light: "" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(member.expertise), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_TairoTableCell, null, {
                      default: withCtx(() => [
                        createTextVNode("$" + toDisplayString(member.rate) + "/hour", 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_TairoTableCell, null, {
                      default: withCtx(() => [
                        member.status === "Available" ? (openBlock(), createBlock(_component_BaseTag, {
                          key: 0,
                          color: "success",
                          flavor: "pastel",
                          shape: "full",
                          class: "font-medium"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(member.status), 1)
                          ]),
                          _: 2
                        }, 1024)) : member.status === "New" ? (openBlock(), createBlock(_component_BaseTag, {
                          key: 1,
                          color: "info",
                          flavor: "pastel",
                          shape: "full",
                          class: "font-medium"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(member.status), 1)
                          ]),
                          _: 2
                        }, 1024)) : member.status === "Hired" ? (openBlock(), createBlock(_component_BaseTag, {
                          key: 2,
                          color: "warning",
                          flavor: "pastel",
                          shape: "full",
                          class: "font-medium"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(member.status), 1)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_TairoTableCell, null, {
                      default: withCtx(() => [
                        createVNode("a", {
                          href: "#",
                          class: "text-violet-500 transition-opacity duration-300 hover:opacity-75 dark:text-violet-400"
                        }, " View ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ptablet:col-span-6 col-span-12 sm:col-span-3">`);
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
      _push(`</div><div class="ptablet:col-span-6 col-span-12 sm:col-span-6">`);
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
      _push(`</div><div class="ptablet:hidden col-span-12 sm:col-span-3">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "flex h-full flex-col p-2" }, {
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
      _push(`</div><div class="col-span-12">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
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
                  _push3(`<span${_scopeId2}>Pending tickets</span>`);
                } else {
                  return [
                    createVNode("span", null, "Pending tickets")
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
            _push2(ssrRenderComponent(_component_DemoPendingTickets, null, null, _parent2, _scopeId));
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
                    createVNode("span", null, "Pending tickets")
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
              createVNode(_component_DemoPendingTickets)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/company.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=company-8afaf49b.mjs.map
