import { k as useTailwindColors, j as _sfc_main$C, _ as _sfc_main$p, f as __nuxt_component_2, b as _sfc_main$o, e as __nuxt_component_0$5, s as _sfc_main$E, g as _sfc_main$z, d as _sfc_main$x, l as _export_sfc } from '../server.mjs';
import { _ as _sfc_main$2 } from './BaseButtonIcon-6150946c.mjs';
import { defineComponent, reactive, ref, shallowRef, mergeProps, withCtx, createVNode, createTextVNode, unref, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$1$1, a as _sfc_main$3 } from './BaseDropdownItem-864908ca.mjs';
import { _ as __nuxt_component_3 } from './BaseDropdownDivider-258f8823.mjs';
import { _ as _sfc_main$4 } from './BaseIconBox-642fe941.mjs';
import { _ as _sfc_main$5 } from './BaseListbox-69fbc324.mjs';
import { _ as _sfc_main$6 } from './BaseProgress-1402c581.mjs';
import { _ as _sfc_main$7 } from './BaseSelect-50588309.mjs';
import { _ as _sfc_main$8 } from './AddonApexcharts-b71489ed.mjs';
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
import './IconChevronDown-af6375e6.mjs';
import './client-only-0428ba17.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Icon = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "shadow-muted-300/50 dark:shadow-muted-900/50 relative flex h-[80px] w-[120px] shrink-0 flex-col justify-between overflow-hidden rounded-xl bg-current px-2.5 pb-2 pt-1.5 shadow-lg" }, _attrs))}><div class="absolute -bottom-2.5 -end-2.5 z-10 h-12 w-12 rounded-full bg-white opacity-10"></div><div class="flex items-center justify-between"><span class="block font-sans text-xs font-medium text-white">**4628</span>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "cib:visa",
    class: "h-7 w-7 text-white"
  }, null, _parent));
  _push(`</div><div class="flex items-center justify-between"><span class="block font-sans text-xs font-medium text-white"> Credit Card </span></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoCreditCardSmall.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "banking-1",
  __ssrInlineRender: true,
  setup(__props) {
    const incomeHistory = reactive(useIncomeHistory());
    function useIncomeHistory() {
      const { primary, info, success } = useTailwindColors();
      const type = "area";
      const height = 315;
      const options = {
        chart: {
          type: "area",
          toolbar: {
            show: false
          }
        },
        colors: [primary.value, success.value, info.value],
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
            "2022-10-19T00:00:00.000Z",
            "2022-10-20T01:30:00.000Z",
            "2022-10-21T02:30:00.000Z",
            "2022-10-22T03:30:00.000Z",
            "2022-10-23T04:30:00.000Z",
            "2022-10-24T05:30:00.000Z",
            "2022-10-25T06:30:00.000Z",
            "2022-10-26T06:30:00.000Z",
            "2022-10-27T06:30:00.000Z",
            "2022-10-28T06:30:00.000Z"
          ]
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm"
          },
          y: {
            formatter: function(val) {
              return "$" + val;
            }
          }
        }
      };
      const series = ref([
        {
          name: "Expenses",
          data: [318, 150, 49, 152.13, 421, 1009, 1220, 418, 113, 45]
        },
        {
          name: "Earnings",
          data: [192, 263, 459, 312, 349, 527, 397, 351, 618, 511]
        }
      ]);
      return { type, height, options, series };
    }
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
    const selectedBankTransfert = shallowRef(banks[0]);
    const selectedBankSendTo = shallowRef(banks[0]);
    const selectedCurrency = ref("usd");
    const amount = ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseButtonIcon = _sfc_main$2;
      const _component_Icon = __nuxt_component_2;
      const _component_DemoCreditCardSmall = __nuxt_component_4;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseDropdown = _sfc_main$1$1;
      const _component_BaseDropdownItem = _sfc_main$3;
      const _component_BaseDropdownDivider = __nuxt_component_3;
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_BaseIconBox = _sfc_main$4;
      const _component_BaseListbox = _sfc_main$5;
      const _component_BaseProgress = _sfc_main$6;
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BaseSelect = _sfc_main$7;
      const _component_BaseInput = _sfc_main$z;
      const _component_BaseButton = _sfc_main$x;
      const _component_AddonApexcharts = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-4 md:grid-cols-12" }, _attrs))}><div class="ltablet:col-span-4 col-span-12 lg:col-span-4"><div class="flex flex-col gap-4">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "flex flex-col py-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-6 flex items-center justify-between px-6"${_scopeId}>`);
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
            _push2(ssrRenderComponent(_component_BaseButtonIcon, {
              shape: "full",
              small: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:plus",
                    class: "h-3 w-3"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:plus",
                      class: "h-3 w-3"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mb-8 flex items-center gap-4 px-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_DemoCreditCardSmall, { class: "text-primary-500" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              weight: "medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}>Card Balance</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, "Card Balance")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "xl",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>$2,834.31</span>`);
                } else {
                  return [
                    createVNode("span", null, "$2,834.31")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ms-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseDropdown, {
              flavor: "context",
              label: "Dropdown",
              orientation: "end",
              size: "md",
              class: "z-20"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                    to: "#",
                    title: "Invest",
                    text: "Buys more stocks"
                  }, {
                    start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "ph:coin-duotone",
                          class: "me-2 block h-5 w-5"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "ph:coin-duotone",
                            class: "me-2 block h-5 w-5"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                    to: "#",
                    title: "Benchmark",
                    text: "Compare other sources"
                  }, {
                    start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "ph:cell-signal-medium-duotone",
                          class: "me-2 block h-5 w-5"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "ph:cell-signal-medium-duotone",
                            class: "me-2 block h-5 w-5"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                    to: "#",
                    title: "Trade",
                    text: "View opportunities"
                  }, {
                    start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "ph:bank-duotone",
                          class: "me-2 block h-5 w-5"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "ph:bank-duotone",
                            class: "me-2 block h-5 w-5"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseDropdownDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                    to: "#",
                    title: "Wallet",
                    text: "Manage your wallet"
                  }, {
                    start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "ph:wallet-duotone",
                          class: "me-2 block h-5 w-5"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "ph:wallet-duotone",
                            class: "me-2 block h-5 w-5"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "Invest",
                      text: "Buys more stocks"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "ph:coin-duotone",
                          class: "me-2 block h-5 w-5"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "Benchmark",
                      text: "Compare other sources"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "ph:cell-signal-medium-duotone",
                          class: "me-2 block h-5 w-5"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "Trade",
                      text: "View opportunities"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "ph:bank-duotone",
                          class: "me-2 block h-5 w-5"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseDropdownDivider),
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "Wallet",
                      text: "Manage your wallet"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "ph:wallet-duotone",
                          class: "me-2 block h-5 w-5"
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="border-muted-200 dark:border-muted-700 mb-8 space-y-5 border-b-2 border-dashed px-6 pb-6"${_scopeId}><div class="flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h5",
              size: "sm",
              weight: "medium",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Information</span>`);
                } else {
                  return [
                    createVNode("span", null, "Information")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Edit `);
                } else {
                  return [
                    createTextVNode(" Edit ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h5",
              size: "sm",
              weight: "medium",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Status</span>`);
                } else {
                  return [
                    createVNode("span", null, "Status")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex items-center gap-1"${_scopeId}><span class="block h-2 w-2 rounded-full bg-emerald-500"${_scopeId}></span><p class="text-muted-400 font-sans text-sm"${_scopeId}>Active</p></div></div><div class="flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h5",
              size: "sm",
              weight: "medium",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Expires in</span>`);
                } else {
                  return [
                    createVNode("span", null, "Expires in")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex items-center gap-1"${_scopeId}><p class="text-muted-400 font-sans text-sm"${_scopeId}>125 days</p></div></div><div class="flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h5",
              size: "sm",
              weight: "medium",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Type</span>`);
                } else {
                  return [
                    createVNode("span", null, "Type")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex items-center gap-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "cib:visa",
              class: "text-muted-400 h-10 w-10"
            }, null, _parent2, _scopeId));
            _push2(`<p class="text-muted-400 font-sans text-xs"${_scopeId}>Credit Card</p></div></div></div><div class="mb-2 flex items-center gap-4 px-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_DemoCreditCardSmall, { class: "text-success-500" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              weight: "medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}>Card Balance</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, "Card Balance")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "xl",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>$2,834.31</span>`);
                } else {
                  return [
                    createVNode("span", null, "$2,834.31")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ms-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseDropdown, {
              flavor: "context",
              label: "Dropdown",
              orientation: "end",
              size: "md",
              class: "z-20"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                    to: "#",
                    title: "Invest",
                    text: "Buys more stocks"
                  }, {
                    start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "ph:coin-duotone",
                          class: "me-2 block h-5 w-5"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "ph:coin-duotone",
                            class: "me-2 block h-5 w-5"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                    to: "#",
                    title: "Benchmark",
                    text: "Compare other sources"
                  }, {
                    start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "ph:cell-signal-medium-duotone",
                          class: "me-2 block h-5 w-5"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "ph:cell-signal-medium-duotone",
                            class: "me-2 block h-5 w-5"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                    to: "#",
                    title: "Trade",
                    text: "View opportunities"
                  }, {
                    start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "ph:bank-duotone",
                          class: "me-2 block h-5 w-5"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "ph:bank-duotone",
                            class: "me-2 block h-5 w-5"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseDropdownDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                    to: "#",
                    title: "Wallet",
                    text: "Manage your wallet"
                  }, {
                    start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "ph:wallet-duotone",
                          class: "me-2 block h-5 w-5"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "ph:wallet-duotone",
                            class: "me-2 block h-5 w-5"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "Invest",
                      text: "Buys more stocks"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "ph:coin-duotone",
                          class: "me-2 block h-5 w-5"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "Benchmark",
                      text: "Compare other sources"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "ph:cell-signal-medium-duotone",
                          class: "me-2 block h-5 w-5"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "Trade",
                      text: "View opportunities"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "ph:bank-duotone",
                          class: "me-2 block h-5 w-5"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseDropdownDivider),
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "Wallet",
                      text: "Manage your wallet"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "ph:wallet-duotone",
                          class: "me-2 block h-5 w-5"
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-6 flex items-center justify-between px-6" }, [
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
                createVNode(_component_BaseButtonIcon, {
                  shape: "full",
                  small: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "lucide:plus",
                      class: "h-3 w-3"
                    })
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "mb-8 flex items-center gap-4 px-6" }, [
                createVNode(_component_DemoCreditCardSmall, { class: "text-primary-500" }),
                createVNode("div", null, [
                  createVNode(_component_BaseParagraph, {
                    size: "sm",
                    weight: "medium"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-muted-400" }, "Card Balance")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "xl",
                    weight: "semibold",
                    lead: "tight",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "$2,834.31")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "ms-auto" }, [
                  createVNode(_component_BaseDropdown, {
                    flavor: "context",
                    label: "Dropdown",
                    orientation: "end",
                    size: "md",
                    class: "z-20"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_BaseDropdownItem, {
                        to: "#",
                        title: "Invest",
                        text: "Buys more stocks"
                      }, {
                        start: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "ph:coin-duotone",
                            class: "me-2 block h-5 w-5"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseDropdownItem, {
                        to: "#",
                        title: "Benchmark",
                        text: "Compare other sources"
                      }, {
                        start: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "ph:cell-signal-medium-duotone",
                            class: "me-2 block h-5 w-5"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseDropdownItem, {
                        to: "#",
                        title: "Trade",
                        text: "View opportunities"
                      }, {
                        start: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "ph:bank-duotone",
                            class: "me-2 block h-5 w-5"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseDropdownDivider),
                      createVNode(_component_BaseDropdownItem, {
                        to: "#",
                        title: "Wallet",
                        text: "Manage your wallet"
                      }, {
                        start: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "ph:wallet-duotone",
                            class: "me-2 block h-5 w-5"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "border-muted-200 dark:border-muted-700 mb-8 space-y-5 border-b-2 border-dashed px-6 pb-6" }, [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h5",
                    size: "sm",
                    weight: "medium",
                    lead: "tight",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Information")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtLink, {
                    to: "#",
                    class: "text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Edit ")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h5",
                    size: "sm",
                    weight: "medium",
                    lead: "tight",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Status")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex items-center gap-1" }, [
                    createVNode("span", { class: "block h-2 w-2 rounded-full bg-emerald-500" }),
                    createVNode("p", { class: "text-muted-400 font-sans text-sm" }, "Active")
                  ])
                ]),
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h5",
                    size: "sm",
                    weight: "medium",
                    lead: "tight",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Expires in")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex items-center gap-1" }, [
                    createVNode("p", { class: "text-muted-400 font-sans text-sm" }, "125 days")
                  ])
                ]),
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h5",
                    size: "sm",
                    weight: "medium",
                    lead: "tight",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Type")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex items-center gap-1" }, [
                    createVNode(_component_Icon, {
                      name: "cib:visa",
                      class: "text-muted-400 h-10 w-10"
                    }),
                    createVNode("p", { class: "text-muted-400 font-sans text-xs" }, "Credit Card")
                  ])
                ])
              ]),
              createVNode("div", { class: "mb-2 flex items-center gap-4 px-6" }, [
                createVNode(_component_DemoCreditCardSmall, { class: "text-success-500" }),
                createVNode("div", null, [
                  createVNode(_component_BaseParagraph, {
                    size: "sm",
                    weight: "medium"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-muted-400" }, "Card Balance")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "xl",
                    weight: "semibold",
                    lead: "tight",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "$2,834.31")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "ms-auto" }, [
                  createVNode(_component_BaseDropdown, {
                    flavor: "context",
                    label: "Dropdown",
                    orientation: "end",
                    size: "md",
                    class: "z-20"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_BaseDropdownItem, {
                        to: "#",
                        title: "Invest",
                        text: "Buys more stocks"
                      }, {
                        start: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "ph:coin-duotone",
                            class: "me-2 block h-5 w-5"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseDropdownItem, {
                        to: "#",
                        title: "Benchmark",
                        text: "Compare other sources"
                      }, {
                        start: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "ph:cell-signal-medium-duotone",
                            class: "me-2 block h-5 w-5"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseDropdownItem, {
                        to: "#",
                        title: "Trade",
                        text: "View opportunities"
                      }, {
                        start: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "ph:bank-duotone",
                            class: "me-2 block h-5 w-5"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseDropdownDivider),
                      createVNode(_component_BaseDropdownItem, {
                        to: "#",
                        title: "Wallet",
                        text: "Manage your wallet"
                      }, {
                        start: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "ph:wallet-duotone",
                            class: "me-2 block h-5 w-5"
                          })
                        ]),
                        _: 1
                      })
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
      _push(ssrRenderComponent(_component_BaseCard, { class: "flex h-full flex-col p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
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
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "text-muted-400 hover:text-primary-500 font-sans text-sm underline-offset-4 transition-colors duration-300 hover:underline"
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
            _push2(`</div></div><div class="space-y-4"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
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
            _push2(`</div><div class="ms-auto"${_scopeId}><span class="text-muted-800 dark:text-muted-100 font-sans text-sm font-semibold"${_scopeId}> - $41.49 </span></div></div><div class="flex items-center gap-2"${_scopeId}>`);
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
            _push2(`</div><div class="ms-auto"${_scopeId}><span class="text-muted-800 dark:text-muted-100 font-sans text-sm font-semibold"${_scopeId}> + $263.39 </span></div></div><div class="flex items-center gap-2"${_scopeId}>`);
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
            _push2(`</div><div class="ms-auto"${_scopeId}><span class="text-muted-800 dark:text-muted-100 font-sans text-sm font-semibold"${_scopeId}> - $92.00 </span></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-4 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Transactions")
                  ]),
                  _: 1
                }),
                createVNode("div", null, [
                  createVNode(_component_NuxtLink, {
                    to: "#",
                    class: "text-muted-400 hover:text-primary-500 font-sans text-sm underline-offset-4 transition-colors duration-300 hover:underline"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" View All ")
                    ]),
                    _: 1
                  })
                ])
              ]),
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
                    createVNode("span", { class: "text-muted-800 dark:text-muted-100 font-sans text-sm font-semibold" }, " - $41.49 ")
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
                    createVNode("span", { class: "text-muted-800 dark:text-muted-100 font-sans text-sm font-semibold" }, " + $263.39 ")
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
                    createVNode("span", { class: "text-muted-800 dark:text-muted-100 font-sans text-sm font-semibold" }, " - $92.00 ")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="ltablet:col-span-8 col-span-12 lg:col-span-8"><div class="grid gap-4 md:grid-cols-12"><div class="ltablet:col-span-6 col-span-12 flex flex-col gap-4 lg:col-span-6"><form method="POST" action="" class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "flex flex-col p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Quick Transfer</span>`);
                } else {
                  return [
                    createVNode("span", null, "Quick Transfer")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseListbox, {
              modelValue: unref(selectedBankTransfert),
              "onUpdate:modelValue": ($event) => isRef(selectedBankTransfert) ? selectedBankTransfert.value = $event : null,
              items: banks,
              properties: {
                value: "id",
                label: "name",
                sublabel: "text",
                media: "media"
              }
            }, null, _parent2, _scopeId));
            _push2(`<div class="mt-2"${_scopeId}><p class="text-muted-500 dark:text-muted-400 font-sans text-xs leading-tight"${_scopeId}> Select one of your bank accounts to transfer some funds. The transfer cannot exceed 20% of your balance. </p><div class="mt-2 flex justify-end"${_scopeId}><button type="submit" class="text-primary-500 font-sans text-sm underline-offset-4 hover:underline"${_scopeId}> Confirm and send </button></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-4 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Quick Transfer")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", null, [
                createVNode(_component_BaseListbox, {
                  modelValue: unref(selectedBankTransfert),
                  "onUpdate:modelValue": ($event) => isRef(selectedBankTransfert) ? selectedBankTransfert.value = $event : null,
                  items: banks,
                  properties: {
                    value: "id",
                    label: "name",
                    sublabel: "text",
                    media: "media"
                  }
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode("div", { class: "mt-2" }, [
                  createVNode("p", { class: "text-muted-500 dark:text-muted-400 font-sans text-xs leading-tight" }, " Select one of your bank accounts to transfer some funds. The transfer cannot exceed 20% of your balance. "),
                  createVNode("div", { class: "mt-2 flex justify-end" }, [
                    createVNode("button", {
                      type: "submit",
                      class: "text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
                    }, " Confirm and send ")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "flex flex-col p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4 flex items-center justify-between"${_scopeId}>`);
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
            _push2(`<div${_scopeId}><span class="text-muted-400 font-sans text-sm"${_scopeId}>Lvl. 3</span></div></div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseProgress, {
              size: "xs",
              value: 60
            }, null, _parent2, _scopeId));
            _push2(`<div class="mt-2"${_scopeId}><p class="text-muted-500 dark:text-muted-400 font-sans text-xs leading-tight"${_scopeId}> This is your Tairo customer level. Reach out higher levels to unlock achievements, special gifts, and more. </p><div class="mt-2 flex justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
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
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-4 flex items-center justify-between" }, [
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
                }),
                createVNode("div", null, [
                  createVNode("span", { class: "text-muted-400 font-sans text-sm" }, "Lvl. 3")
                ])
              ]),
              createVNode("div", null, [
                createVNode(_component_BaseProgress, {
                  size: "xs",
                  value: 60
                }),
                createVNode("div", { class: "mt-2" }, [
                  createVNode("p", { class: "text-muted-500 dark:text-muted-400 font-sans text-xs leading-tight" }, " This is your Tairo customer level. Reach out higher levels to unlock achievements, special gifts, and more. "),
                  createVNode("div", { class: "mt-2 flex justify-end" }, [
                    createVNode(_component_NuxtLink, {
                      to: "#",
                      class: "text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Details ")
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
      _push(`</div></div><form method="POST" action="" class="ltablet:col-span-6 col-span-12 lg:col-span-6"><div class="relative h-full">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "flex h-full flex-col p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Send Money To</span>`);
                } else {
                  return [
                    createVNode("span", null, "Send Money To")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "text-muted-400 hover:text-primary-500 font-sans text-sm underline-offset-4 transition-colors duration-300 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` See All `);
                } else {
                  return [
                    createTextVNode(" See All ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div${_scopeId}><div class="mb-4 flex gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              src: "/img/avatars/16.svg",
              size: "xs"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              text: "LT",
              size: "xs",
              class: "bg-yellow-400/20 text-yellow-400"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              src: "/img/avatars/3.svg",
              size: "xs"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              text: "KC",
              size: "xs",
              class: "bg-indigo-400/20 text-indigo-400"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "text-muted-400 hover:text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` See all contacts `);
                } else {
                  return [
                    createTextVNode(" See all contacts ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mt-auto"${_scopeId}><div class="space-y-3"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseListbox, {
              modelValue: unref(selectedBankSendTo),
              "onUpdate:modelValue": ($event) => isRef(selectedBankSendTo) ? selectedBankSendTo.value = $event : null,
              items: banks,
              properties: {
                value: "id",
                label: "name",
                sublabel: "text",
                media: "media"
              }
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex w-full gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseSelect, {
              modelValue: unref(selectedCurrency),
              "onUpdate:modelValue": ($event) => isRef(selectedCurrency) ? selectedCurrency.value = $event : null,
              shape: "rounded",
              label: "Currency",
              class: "w-16"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<option value=""${_scopeId2}></option><option value="usd"${_scopeId2}>$</option><option value="gbp"${_scopeId2}>\xA3</option><option value="eur"${_scopeId2}>\u20AC</option>`);
                } else {
                  return [
                    createVNode("option", { value: "" }),
                    createVNode("option", { value: "usd" }, "$"),
                    createVNode("option", { value: "gbp" }, "\xA3"),
                    createVNode("option", { value: "eur" }, "\u20AC")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseInput, {
              modelValue: unref(amount),
              "onUpdate:modelValue": ($event) => isRef(amount) ? amount.value = $event : null,
              modelModifiers: { number: true },
              type: "number",
              classes: { wrapper: "grow" },
              placeholder: "0.00",
              shape: "rounded",
              label: "Amount",
              "hide-label": ""
            }, null, _parent2, _scopeId));
            _push2(`</div></div><p class="text-muted-500 dark:text-muted-400 my-3 font-sans text-xs leading-tight"${_scopeId}> Funds will reach destination tomorrow. </p><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              type: "submit",
              shape: "rounded",
              size: "sm",
              color: "primary",
              class: "w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Send Money `);
                } else {
                  return [
                    createTextVNode(" Send Money ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-4 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Send Money To")
                  ]),
                  _: 1
                }),
                createVNode("div", null, [
                  createVNode(_component_NuxtLink, {
                    to: "#",
                    class: "text-muted-400 hover:text-primary-500 font-sans text-sm underline-offset-4 transition-colors duration-300 hover:underline"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" See All ")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", null, [
                createVNode("div", { class: "mb-4 flex gap-3" }, [
                  createVNode(_component_BaseAvatar, {
                    src: "/img/avatars/16.svg",
                    size: "xs"
                  }),
                  createVNode(_component_BaseAvatar, {
                    text: "LT",
                    size: "xs",
                    class: "bg-yellow-400/20 text-yellow-400"
                  }),
                  createVNode(_component_BaseAvatar, {
                    src: "/img/avatars/3.svg",
                    size: "xs"
                  }),
                  createVNode(_component_BaseAvatar, {
                    text: "KC",
                    size: "xs",
                    class: "bg-indigo-400/20 text-indigo-400"
                  })
                ]),
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "text-muted-400 hover:text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" See all contacts ")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "mt-auto" }, [
                createVNode("div", { class: "space-y-3" }, [
                  createVNode("div", null, [
                    createVNode(_component_BaseListbox, {
                      modelValue: unref(selectedBankSendTo),
                      "onUpdate:modelValue": ($event) => isRef(selectedBankSendTo) ? selectedBankSendTo.value = $event : null,
                      items: banks,
                      properties: {
                        value: "id",
                        label: "name",
                        sublabel: "text",
                        media: "media"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "flex w-full gap-2" }, [
                    createVNode(_component_BaseSelect, {
                      modelValue: unref(selectedCurrency),
                      "onUpdate:modelValue": ($event) => isRef(selectedCurrency) ? selectedCurrency.value = $event : null,
                      shape: "rounded",
                      label: "Currency",
                      class: "w-16"
                    }, {
                      default: withCtx(() => [
                        createVNode("option", { value: "" }),
                        createVNode("option", { value: "usd" }, "$"),
                        createVNode("option", { value: "gbp" }, "\xA3"),
                        createVNode("option", { value: "eur" }, "\u20AC")
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_BaseInput, {
                      modelValue: unref(amount),
                      "onUpdate:modelValue": ($event) => isRef(amount) ? amount.value = $event : null,
                      modelModifiers: { number: true },
                      type: "number",
                      classes: { wrapper: "grow" },
                      placeholder: "0.00",
                      shape: "rounded",
                      label: "Amount",
                      "hide-label": ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                createVNode("p", { class: "text-muted-500 dark:text-muted-400 my-3 font-sans text-xs leading-tight" }, " Funds will reach destination tomorrow. "),
                createVNode("div", null, [
                  createVNode(_component_BaseButton, {
                    type: "submit",
                    shape: "rounded",
                    size: "sm",
                    color: "primary",
                    class: "w-full"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Send Money ")
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
      _push(`</div></form><div class="col-span-12"><div class="relative h-full">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "flex h-full flex-col p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>History</span>`);
                } else {
                  return [
                    createVNode("span", null, "History")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "text-muted-400 hover:text-primary-500 font-sans text-sm underline-offset-4 transition-colors duration-300 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` View Reports `);
                } else {
                  return [
                    createTextVNode(" View Reports ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(incomeHistory), null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-4 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "History")
                  ]),
                  _: 1
                }),
                createVNode("div", null, [
                  createVNode(_component_NuxtLink, {
                    to: "#",
                    class: "text-muted-400 hover:text-primary-500 font-sans text-sm underline-offset-4 transition-colors duration-300 hover:underline"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" View Reports ")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode(_component_AddonApexcharts, unref(incomeHistory), null, 16)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/banking-1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=banking-1-50053805.mjs.map
