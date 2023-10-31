import { k as useTailwindColors, j as _sfc_main$C, _ as _sfc_main$p, f as __nuxt_component_2, b as _sfc_main$o, d as _sfc_main$x } from '../server.mjs';
import { _ as _sfc_main$2 } from './BaseButtonIcon-6150946c.mjs';
import { f as formatPrice } from './format-currency-d8479070.mjs';
import { useSSRContext, defineComponent, ref, reactive, mergeProps, withCtx, createVNode, unref, isRef, openBlock, createBlock, Fragment, renderList, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _sfc_main$3 } from './BaseListbox-69fbc324.mjs';
import { _ as _sfc_main$4 } from './AddonApexcharts-b71489ed.mjs';
import { _ as _sfc_main$5 } from './BaseIconBox-642fe941.mjs';
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
  __name: "DemoCreditCard",
  __ssrInlineRender: true,
  props: {
    type: { default: "" },
    endingNumber: { default: 0 },
    balance: { default: 0 },
    active: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        role: "button",
        class: ["xs:w-[240px] xs:h-[144px] ltablet:h-[130px] relative flex h-[160px] w-[290px] max-w-full cursor-pointer flex-col overflow-hidden rounded-xl p-5 transition-all duration-300 lg:w-full", [
          props.active ? "bg-primary-700" : "bg-muted-200 dark:bg-muted-900"
        ]]
      }, _attrs))}><div class="absolute -bottom-5 -end-5 h-[70px] w-[70px] rounded-full bg-white opacity-30 dark:opacity-10"></div><div class="flex items-center justify-between"><div><span><svg class="${ssrRenderClass([props.active ? "text-white" : "text-primary-500", "h-10 w-10"])}" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m22.222 15.768l-.225-1.125h-2.514l-.4 1.117l-2.015.004a4199.19 4199.19 0 0 1 2.884-6.918c.164-.391.455-.59.884-.588c.328.003.863.003 1.606.001L24 15.765l-1.778.003zm-2.173-2.666h1.62l-.605-2.82l-1.015 2.82zM7.06 8.257l2.026.002l-3.132 7.51l-2.051-.002a950.849 950.849 0 0 1-1.528-5.956c-.1-.396-.298-.673-.679-.804A63.566 63.566 0 0 0 0 8.465V8.26h3.237c.56 0 .887.271.992.827c.106.557.372 1.975.8 4.254L7.06 8.257zm4.81.002l-1.602 7.508l-1.928-.002l1.6-7.508l1.93.002zm3.91-.139c.577 0 1.304.18 1.722.345l-.338 1.557c-.378-.152-1-.357-1.523-.35c-.76.013-1.23.332-1.23.638c0 .498.816.749 1.656 1.293c.959.62 1.085 1.177 1.073 1.782c-.013 1.256-1.073 2.495-3.309 2.495c-1.02-.015-1.388-.101-2.22-.396l.352-1.625c.847.355 1.206.468 1.93.468c.663 0 1.232-.268 1.237-.735c.004-.332-.2-.497-.944-.907c-.744-.411-1.788-.98-1.774-2.122c.017-1.462 1.402-2.443 3.369-2.443z"></path></svg></span></div></div><div class="mt-auto"><span class="${ssrRenderClass([
        props.active ? "text-white" : "text-muted-800 dark:text-muted-200",
        "block font-sans text-lg font-semibold"
      ])}">${ssrInterpolate(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(props.balance))}</span><span class="${ssrRenderClass([
        props.active ? "text-white" : "text-muted-500 dark:text-muted-400",
        "block font-sans text-sm"
      ])}"> **** **** **** ${ssrInterpolate(props.endingNumber)}</span></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoCreditCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "banking-2",
  __ssrInlineRender: true,
  setup(__props) {
    const cards = [
      {
        type: "visa",
        endingNumber: 4986,
        balance: 6341.14
      },
      {
        type: "visa",
        endingNumber: 3619,
        balance: 2211.27
      },
      {
        type: "visa",
        endingNumber: 1231,
        balance: 839.49
      }
    ];
    const banks = [
      {
        id: 1,
        name: "X Bank",
        text: "checking **** **** 0499",
        media: "/img/icons/banking/bank-1.svg"
      },
      {
        id: 2,
        name: "Bankaria",
        text: "checking **** **** 1548",
        media: "/img/icons/banking/bank-2.svg"
      },
      {
        id: 3,
        name: "Bankus",
        text: "checking **** **** 8448",
        media: "/img/icons/banking/bank-3.svg"
      }
    ];
    const selectedBank = ref(banks[0]);
    const activeCard = ref(0);
    const areaExpenses = reactive(useAreaExpenses());
    function useAreaExpenses() {
      const { primary, info, success } = useTailwindColors();
      const type = "area";
      const height = 250;
      const options = {
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
          show: false,
          padding: {
            left: -5,
            right: 5
          }
        },
        tooltip: {
          x: {
            format: "dd MMM yyyy"
          }
        },
        legend: {
          position: "top",
          horizontalAlign: "left"
        },
        fill: {
          type: "solid",
          fillOpacity: 0.7
        }
      };
      const series = ref([
        {
          name: "Cash Expenses",
          data: generateDayWiseTimeSeries(0, 18)
        },
        {
          name: "Card Expenses",
          data: generateDayWiseTimeSeries(1, 18)
        }
      ]);
      function generateDayWiseTimeSeries(s, count) {
        const values = [
          [4, 3, 10, 9, 29, 19, 25, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
          [2, 3, 8, 7, 22, 16, 23, 7, 11, 5, 12, 5, 10, 4, 15, 2, 6, 2]
        ];
        let i = 0;
        const series2 = [];
        let x = (/* @__PURE__ */ new Date("11 Nov 2020")).getTime();
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseButtonIcon = _sfc_main$2;
      const _component_Icon = __nuxt_component_2;
      const _component_DemoCreditCard = _sfc_main$1;
      const _component_BaseListbox = _sfc_main$3;
      const _component_AddonApexcharts = _sfc_main$4;
      const _component_BaseIconBox = _sfc_main$5;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseButton = _sfc_main$x;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="flex flex-col gap-6">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "ltablet:flex-row flex flex-col gap-y-10 overflow-hidden p-6 sm:p-10 lg:flex-row" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="ltablet:w-3/5 w-full lg:w-3/5"${_scopeId}><div class="mb-12 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>My Cards</span>`);
                } else {
                  return [
                    createVNode("span", null, "My Cards")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}></div></div><div class="ltablet:pe-12 flex flex-col gap-y-4 sm:flex-row sm:gap-x-8 lg:pe-12"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButtonIcon, { shape: "rounded" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:plus",
                    class: "h-4 w-4"
                  }, null, _parent3, _scopeId2));
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
            }, _parent2, _scopeId));
            _push2(`</div><div class="nui-slimscroll grid max-h-[164px] w-full gap-4 overflow-y-auto px-6 sm:grid-cols-2"${_scopeId}><!--[-->`);
            ssrRenderList(cards, (card, index) => {
              _push2(ssrRenderComponent(_component_DemoCreditCard, {
                key: index,
                balance: card.balance,
                "ending-number": card.endingNumber,
                type: card.type,
                active: unref(activeCard) === index,
                onClick: ($event) => activeCard.value = index
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div><div class="mt-4 flex justify-center text-center"${_scopeId}><p class="ltablet:mx-0 text-muted-400 mx-auto max-w-xs text-center font-sans text-xs lg:mx-0"${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Peccata paria minime esse deterritum. </p></div></div><div class="ltablet:w-2/5 w-full lg:w-2/5"${_scopeId}><div class="ltablet:ps-12 ltablet:border-l border-muted-200 dark:border-muted-700 flex h-full flex-col lg:border-l lg:ps-12"${_scopeId}><div class="mb-4 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Balance</span>`);
                } else {
                  return [
                    createVNode("span", null, "Balance")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="ltablet:max-w-[230px] hidden max-w-[260px] grow sm:block"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseListbox, {
              modelValue: unref(selectedBank),
              "onUpdate:modelValue": ($event) => isRef(selectedBank) ? selectedBank.value = $event : null,
              label: "Accounts",
              items: banks,
              properties: {
                value: "id",
                label: "name",
                sublabel: "text",
                media: "media"
              },
              "hide-label": ""
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="ptablet:flex ptablet:items-end ptablet:justify-between ptablet:mt-10 mt-auto"${_scopeId}><div class="ptablet:mb-0 mb-6 leading-relaxed"${_scopeId}><span class="text-muted-800 dark:text-muted-100 block font-sans text-3xl font-semibold"${_scopeId}>${ssrInterpolate(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(6341.14))}</span><span class="text-muted-400 block font-sans text-sm"${_scopeId}> **** **** **** 4986 </span></div><div class="flex items-center gap-12"${_scopeId}><div class="card-balance-stat"${_scopeId}><div class="text-muted-400 mb-1 font-sans text-xs font-medium uppercase"${_scopeId}><span${_scopeId}>Income</span></div><div class="flex items-center gap-2"${_scopeId}><div class="bg-muted-100 flex h-10 w-10 items-center justify-center rounded-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:arrow-right",
              class: "text-success-500 h-4 w-4 -rotate-45"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="text-muted-500 dark:text-muted-400 font-sans text-sm"${_scopeId}><span${_scopeId}>+ ${ssrInterpolate(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(2324.12))}</span></div></div></div><div class="card-balance-stat"${_scopeId}><div class="text-muted-400 mb-1 font-sans text-xs font-medium uppercase"${_scopeId}><span${_scopeId}>Expense</span></div><div class="flex items-center gap-2"${_scopeId}><div class="bg-muted-100 flex h-10 w-10 items-center justify-center rounded-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:arrow-right",
              class: "text-danger-500 h-4 w-4 rotate-45"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="text-muted-500 dark:text-muted-400 font-sans text-sm"${_scopeId}><span${_scopeId}>+ ${ssrInterpolate(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(518.41))}</span></div></div></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "ltablet:w-3/5 w-full lg:w-3/5" }, [
                createVNode("div", { class: "mb-12 flex items-center justify-between" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h3",
                    size: "md",
                    weight: "semibold",
                    lead: "tight",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "My Cards")
                    ]),
                    _: 1
                  }),
                  createVNode("div")
                ]),
                createVNode("div", { class: "ltablet:pe-12 flex flex-col gap-y-4 sm:flex-row sm:gap-x-8 lg:pe-12" }, [
                  createVNode("div", null, [
                    createVNode(_component_BaseButtonIcon, { shape: "rounded" }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "lucide:plus",
                          class: "h-4 w-4"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "nui-slimscroll grid max-h-[164px] w-full gap-4 overflow-y-auto px-6 sm:grid-cols-2" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(cards, (card, index) => {
                      return createVNode(_component_DemoCreditCard, {
                        key: index,
                        balance: card.balance,
                        "ending-number": card.endingNumber,
                        type: card.type,
                        active: unref(activeCard) === index,
                        onClick: ($event) => activeCard.value = index
                      }, null, 8, ["balance", "ending-number", "type", "active", "onClick"]);
                    }), 64))
                  ])
                ]),
                createVNode("div", { class: "mt-4 flex justify-center text-center" }, [
                  createVNode("p", { class: "ltablet:mx-0 text-muted-400 mx-auto max-w-xs text-center font-sans text-xs lg:mx-0" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Peccata paria minime esse deterritum. ")
                ])
              ]),
              createVNode("div", { class: "ltablet:w-2/5 w-full lg:w-2/5" }, [
                createVNode("div", { class: "ltablet:ps-12 ltablet:border-l border-muted-200 dark:border-muted-700 flex h-full flex-col lg:border-l lg:ps-12" }, [
                  createVNode("div", { class: "mb-4 flex items-center justify-between" }, [
                    createVNode(_component_BaseHeading, {
                      as: "h4",
                      size: "md",
                      weight: "semibold",
                      lead: "tight",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "Balance")
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "ltablet:max-w-[230px] hidden max-w-[260px] grow sm:block" }, [
                      createVNode(_component_BaseListbox, {
                        modelValue: unref(selectedBank),
                        "onUpdate:modelValue": ($event) => isRef(selectedBank) ? selectedBank.value = $event : null,
                        label: "Accounts",
                        items: banks,
                        properties: {
                          value: "id",
                          label: "name",
                          sublabel: "text",
                          media: "media"
                        },
                        "hide-label": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  createVNode("div", { class: "ptablet:flex ptablet:items-end ptablet:justify-between ptablet:mt-10 mt-auto" }, [
                    createVNode("div", { class: "ptablet:mb-0 mb-6 leading-relaxed" }, [
                      createVNode("span", { class: "text-muted-800 dark:text-muted-100 block font-sans text-3xl font-semibold" }, toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(6341.14)), 1),
                      createVNode("span", { class: "text-muted-400 block font-sans text-sm" }, " **** **** **** 4986 ")
                    ]),
                    createVNode("div", { class: "flex items-center gap-12" }, [
                      createVNode("div", { class: "card-balance-stat" }, [
                        createVNode("div", { class: "text-muted-400 mb-1 font-sans text-xs font-medium uppercase" }, [
                          createVNode("span", null, "Income")
                        ]),
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode("div", { class: "bg-muted-100 flex h-10 w-10 items-center justify-center rounded-full" }, [
                            createVNode(_component_Icon, {
                              name: "lucide:arrow-right",
                              class: "text-success-500 h-4 w-4 -rotate-45"
                            })
                          ]),
                          createVNode("div", { class: "text-muted-500 dark:text-muted-400 font-sans text-sm" }, [
                            createVNode("span", null, "+ " + toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(2324.12)), 1)
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "card-balance-stat" }, [
                        createVNode("div", { class: "text-muted-400 mb-1 font-sans text-xs font-medium uppercase" }, [
                          createVNode("span", null, "Expense")
                        ]),
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode("div", { class: "bg-muted-100 flex h-10 w-10 items-center justify-center rounded-full" }, [
                            createVNode(_component_Icon, {
                              name: "lucide:arrow-right",
                              class: "text-danger-500 h-4 w-4 rotate-45"
                            })
                          ]),
                          createVNode("div", { class: "text-muted-500 dark:text-muted-400 font-sans text-sm" }, [
                            createVNode("span", null, "+ " + toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(518.41)), 1)
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, { class: "ltablet:flex-row !bg-muted-200 dark:!bg-muted-800 flex flex-col gap-y-10 p-6 sm:p-10 lg:flex-row" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="ltablet:w-3/5 ltablet:border-r border-muted-300 dark:border-muted-700 w-full lg:w-3/5 lg:border-r"${_scopeId}><div class="flex h-full w-full flex-col gap-16 sm:flex-row"${_scopeId}><div class="shrink-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 mb-6 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Monthly Summary</span>`);
                } else {
                  return [
                    createVNode("span", null, "Monthly Summary")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="border-muted-300 divide-muted-300 dark:border-muted-700 dark:divide-muted-700 flex flex-col divide-y rounded-lg border"${_scopeId}><div class="p-4"${_scopeId}><div class="text-muted-400 mb-1 font-sans text-xs font-medium uppercase"${_scopeId}><span${_scopeId}>Income</span></div><div class="text-success-500 font-sans text-sm font-semibold"${_scopeId}><span${_scopeId}>+ ${ssrInterpolate(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(2324.12))}</span></div></div><div class="p-4"${_scopeId}><div class="text-muted-400 mb-1 font-sans text-xs font-medium uppercase"${_scopeId}><span${_scopeId}>Expenses</span></div><div class="text-danger-500 font-sans text-sm font-semibold"${_scopeId}><span${_scopeId}>- ${ssrInterpolate(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(1509.27))}</span></div></div></div></div><div class="ltablet:pe-12 flex h-full grow flex-col lg:pe-12"${_scopeId}><div class="mt-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(areaExpenses), null, _parent2, _scopeId));
            _push2(`</div></div></div></div><div class="ltablet:w-2/5 w-full lg:w-2/5"${_scopeId}><div class="ltablet:ps-12 h-full lg:ps-12"${_scopeId}><div class="flex h-full w-full flex-col"${_scopeId}><div class="mb-6 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 mb-6 dark:text-white"
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
            _push2(`</div><div class="mt-auto"${_scopeId}><div class="space-y-4"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseIconBox, {
              class: "bg-success-500/10 text-success-500",
              size: "md",
              shape: "full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:pizza-duotone",
                    class: "h-5 w-5"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "ph:pizza-duotone",
                      class: "h-5 w-5"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "medium",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Food delivery</span>`);
                } else {
                  return [
                    createVNode("span", null, "Food delivery")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Oct 23, 2022 - 8:46pm</span>`);
                } else {
                  return [
                    createVNode("span", null, "Oct 23, 2022 - 8:46pm")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ms-auto"${_scopeId}><span class="text-muted-800 dark:text-muted-100 font-sans text-sm font-semibold"${_scopeId}> - ${ssrInterpolate(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(41.49))}</span></div></div><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseIconBox, {
              class: "bg-orange-500/10 text-orange-500",
              size: "md",
              shape: "full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:storefront-duotone",
                    class: "h-5 w-5"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "ph:storefront-duotone",
                      class: "h-5 w-5"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "medium",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Market Earnings</span>`);
                } else {
                  return [
                    createVNode("span", null, "Market Earnings")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Oct 18, 2022 - 9:11am</span>`);
                } else {
                  return [
                    createVNode("span", null, "Oct 18, 2022 - 9:11am")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ms-auto"${_scopeId}><span class="text-muted-800 dark:text-muted-100 font-sans text-sm font-semibold"${_scopeId}> + ${ssrInterpolate(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(263.39))}</span></div></div><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseIconBox, {
              class: "bg-indigo-500/10 text-indigo-500",
              size: "md",
              shape: "full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:shopping-cart-duotone",
                    class: "h-5 w-5"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "ph:shopping-cart-duotone",
                      class: "h-5 w-5"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "medium",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Online order</span>`);
                } else {
                  return [
                    createVNode("span", null, "Online order")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Oct 16, 2022 - 2:13pm</span>`);
                } else {
                  return [
                    createVNode("span", null, "Oct 16, 2022 - 2:13pm")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ms-auto"${_scopeId}><span class="text-muted-800 dark:text-muted-100 font-sans text-sm font-semibold"${_scopeId}> - ${ssrInterpolate(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(92.17))}</span></div></div></div><div class="mt-6 flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "default",
              class: "w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Settings</span>`);
                } else {
                  return [
                    createVNode("span", null, "Settings")
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
                  _push3(`<span${_scopeId2}>Create</span>`);
                } else {
                  return [
                    createVNode("span", null, "Create")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "ltablet:w-3/5 ltablet:border-r border-muted-300 dark:border-muted-700 w-full lg:w-3/5 lg:border-r" }, [
                createVNode("div", { class: "flex h-full w-full flex-col gap-16 sm:flex-row" }, [
                  createVNode("div", { class: "shrink-0" }, [
                    createVNode(_component_BaseHeading, {
                      as: "h3",
                      size: "md",
                      weight: "semibold",
                      lead: "tight",
                      class: "text-muted-800 mb-6 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "Monthly Summary")
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "border-muted-300 divide-muted-300 dark:border-muted-700 dark:divide-muted-700 flex flex-col divide-y rounded-lg border" }, [
                      createVNode("div", { class: "p-4" }, [
                        createVNode("div", { class: "text-muted-400 mb-1 font-sans text-xs font-medium uppercase" }, [
                          createVNode("span", null, "Income")
                        ]),
                        createVNode("div", { class: "text-success-500 font-sans text-sm font-semibold" }, [
                          createVNode("span", null, "+ " + toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(2324.12)), 1)
                        ])
                      ]),
                      createVNode("div", { class: "p-4" }, [
                        createVNode("div", { class: "text-muted-400 mb-1 font-sans text-xs font-medium uppercase" }, [
                          createVNode("span", null, "Expenses")
                        ]),
                        createVNode("div", { class: "text-danger-500 font-sans text-sm font-semibold" }, [
                          createVNode("span", null, "- " + toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(1509.27)), 1)
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "ltablet:pe-12 flex h-full grow flex-col lg:pe-12" }, [
                    createVNode("div", { class: "mt-auto" }, [
                      createVNode(_component_AddonApexcharts, unref(areaExpenses), null, 16)
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "ltablet:w-2/5 w-full lg:w-2/5" }, [
                createVNode("div", { class: "ltablet:ps-12 h-full lg:ps-12" }, [
                  createVNode("div", { class: "flex h-full w-full flex-col" }, [
                    createVNode("div", { class: "mb-6 flex items-center justify-between" }, [
                      createVNode(_component_BaseHeading, {
                        as: "h3",
                        size: "md",
                        weight: "semibold",
                        lead: "tight",
                        class: "text-muted-800 mb-6 dark:text-white"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, "Transactions")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "mt-auto" }, [
                      createVNode("div", { class: "space-y-4" }, [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_component_BaseIconBox, {
                            class: "bg-success-500/10 text-success-500",
                            size: "md",
                            shape: "full"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "ph:pizza-duotone",
                                class: "h-5 w-5"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("div", null, [
                            createVNode(_component_BaseHeading, {
                              as: "h4",
                              size: "sm",
                              weight: "medium",
                              lead: "tight",
                              class: "text-muted-800 dark:text-white"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", null, "Food delivery")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_BaseParagraph, {
                              size: "xs",
                              class: "text-muted-400"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", null, "Oct 23, 2022 - 8:46pm")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "ms-auto" }, [
                            createVNode("span", { class: "text-muted-800 dark:text-muted-100 font-sans text-sm font-semibold" }, " - " + toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(41.49)), 1)
                          ])
                        ]),
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_component_BaseIconBox, {
                            class: "bg-orange-500/10 text-orange-500",
                            size: "md",
                            shape: "full"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "ph:storefront-duotone",
                                class: "h-5 w-5"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("div", null, [
                            createVNode(_component_BaseHeading, {
                              as: "h4",
                              size: "sm",
                              weight: "medium",
                              lead: "tight",
                              class: "text-muted-800 dark:text-white"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", null, "Market Earnings")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_BaseParagraph, {
                              size: "xs",
                              class: "text-muted-400"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", null, "Oct 18, 2022 - 9:11am")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "ms-auto" }, [
                            createVNode("span", { class: "text-muted-800 dark:text-muted-100 font-sans text-sm font-semibold" }, " + " + toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(263.39)), 1)
                          ])
                        ]),
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_component_BaseIconBox, {
                            class: "bg-indigo-500/10 text-indigo-500",
                            size: "md",
                            shape: "full"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "ph:shopping-cart-duotone",
                                class: "h-5 w-5"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("div", null, [
                            createVNode(_component_BaseHeading, {
                              as: "h4",
                              size: "sm",
                              weight: "medium",
                              lead: "tight",
                              class: "text-muted-800 dark:text-white"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", null, "Online order")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_BaseParagraph, {
                              size: "xs",
                              class: "text-muted-400"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", null, "Oct 16, 2022 - 2:13pm")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "ms-auto" }, [
                            createVNode("span", { class: "text-muted-800 dark:text-muted-100 font-sans text-sm font-semibold" }, " - " + toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(92.17)), 1)
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "mt-6 flex items-center gap-2" }, [
                        createVNode(_component_BaseButton, {
                          color: "default",
                          class: "w-full"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, "Settings")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseButton, {
                          color: "primary",
                          class: "w-full"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, "Create")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/banking-2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=banking-2-214e833b.mjs.map
