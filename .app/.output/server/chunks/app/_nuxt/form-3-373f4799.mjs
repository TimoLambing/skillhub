import { j as _sfc_main$C, _ as _sfc_main$p, i as _sfc_main$D, f as __nuxt_component_2, b as _sfc_main$o, g as _sfc_main$z, d as _sfc_main$x } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseButtonAction-57c21d00.mjs';
import { _ as _sfc_main$2 } from './BaseSelect-50588309.mjs';
import { _ as _sfc_main$3 } from './DemoCreditCardReal-918e9ba9.mjs';
import { _ as _sfc_main$4 } from './BaseRadio-d9efef81.mjs';
import { _ as _sfc_main$5 } from './BaseCheckbox-45d3fdba.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, createVNode, unref, withModifiers, openBlock, createBlock, createCommentVNode, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
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
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import './TairoLogo-688db51d.mjs';
import './IconCheck-b31ac5c7.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "form-3",
  __ssrInlineRender: true,
  setup(__props) {
    const cardInfo = ref({
      name: void 0,
      number: void 0,
      expiryYear: void 0,
      expiryMonth: void 0,
      cvc: void 0
    });
    const selectedMethod = ref("cc");
    const billingCycles = ref("monthly");
    const termsApproval = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseText = _sfc_main$D;
      const _component_BaseButtonAction = _sfc_main$1;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseInput = _sfc_main$z;
      const _component_BaseSelect = _sfc_main$2;
      const _component_DemoCreditCardReal = _sfc_main$3;
      const _component_BaseRadio = _sfc_main$4;
      const _component_BaseCheckbox = _sfc_main$5;
      const _component_BaseButton = _sfc_main$x;
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3" }, _attrs))}><div class="lg:col-span-2">`);
      _push(ssrRenderComponent(_component_BaseCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-muted-200 dark:border-muted-700 flex items-center justify-between gap-4 border-b px-8 py-5"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "sm",
              weight: "medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Payment method `);
                } else {
                  return [
                    createTextVNode(" Payment method ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Select a payment method`);
                } else {
                  return [
                    createTextVNode("Select a payment method")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ms-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButtonAction, {
              onClick: ($event) => _ctx.$router.back()
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:arrow-left",
                    class: "h-3 w-3"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>Cancel</span>`);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-left",
                      class: "h-3 w-3"
                    }),
                    createVNode("span", null, "Cancel")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div${_scopeId}><div role="button" class="${ssrRenderClass([
              unref(selectedMethod) === "paypal" ? "bg-muted-50 dark:bg-muted-900/60" : "",
              "flex cursor-pointer items-center px-8 py-5"
            ])}"${_scopeId}><div class="${ssrRenderClass([
              unref(selectedMethod) === "paypal" ? "bg-primary-600 ring-primary-600" : "ring-muted-400",
              "dark:border-muted-800 h-4 w-4 rounded-full border-2 border-white ring-2 transition-colors"
            ])}"${_scopeId}></div><label class="ms-4 text-sm font-medium"${_scopeId}>PayPal</label></div>`);
            if (unref(selectedMethod) === "paypal") {
              _push2(`<div class="flex items-center justify-between gap-4 p-8 pt-4"${_scopeId}><div class="max-w-xs"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h3",
                size: "md",
                weight: "medium",
                class: "mb-2"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Pay with PayPal `);
                  } else {
                    return [
                      createTextVNode(" Pay with PayPal ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "sm",
                class: "text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` After clicking on &quot;start subscription&quot;, you will be redirected to PayPal website to complete your purchase securely. `);
                  } else {
                    return [
                      createTextVNode(' After clicking on "start subscription", you will be redirected to PayPal website to complete your purchase securely. ')
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="grow"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseCard, {
                shape: "curved",
                elevated: "",
                class: "mx-auto flex max-w-[280px] items-center justify-center px-8 py-16"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "logos:paypal",
                      class: "h-12 w-12"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "logos:paypal",
                        class: "h-12 w-12"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="border-muted-200 dark:border-muted-700 border-t"${_scopeId}><div role="button" class="${ssrRenderClass([
              unref(selectedMethod) === "cc" ? "bg-muted-50 dark:bg-muted-900/60" : "",
              "flex cursor-pointer items-center px-8 py-5"
            ])}"${_scopeId}><div class="${ssrRenderClass([
              unref(selectedMethod) === "cc" ? "bg-primary-600 ring-primary-600" : "ring-muted-400",
              "dark:border-muted-800 h-4 w-4 rounded-full border-2 border-white ring-2"
            ])}"${_scopeId}></div><label class="ms-4 text-sm font-medium"${_scopeId}>Credit Card</label></div>`);
            if (unref(selectedMethod) === "cc") {
              _push2(`<div class="grid grid-cols-2 gap-4 p-8 pt-4"${_scopeId}><div${_scopeId}><form${_scopeId}><div class="grid grid-cols-12 gap-4"${_scopeId}><div class="col-span-12"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseInput, {
                modelValue: unref(cardInfo).name,
                "onUpdate:modelValue": ($event) => unref(cardInfo).name = $event,
                label: "Name on card",
                placeholder: "ex: John Doe"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="col-span-12"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseInput, {
                modelValue: unref(cardInfo).number,
                "onUpdate:modelValue": ($event) => unref(cardInfo).number = $event,
                label: "Card number",
                placeholder: "ex: 4242 4242 4242 4242"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="col-span-12"${_scopeId}><div class="grid gap-4 sm:grid-cols-3"${_scopeId}><div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseSelect, {
                modelValue: unref(cardInfo).expiryMonth,
                "onUpdate:modelValue": ($event) => unref(cardInfo).expiryMonth = $event,
                label: "Exp. month"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<option value=""${_scopeId2}>Month</option><option value="01"${_scopeId2}>01</option><option value="02"${_scopeId2}>02</option><option value="03"${_scopeId2}>03</option><option value="04"${_scopeId2}>04</option><option value="05"${_scopeId2}>05</option><option value="06"${_scopeId2}>06</option><option value="07"${_scopeId2}>07</option><option value="08"${_scopeId2}>08</option><option value="09"${_scopeId2}>09</option><option value="10"${_scopeId2}>10</option><option value="11"${_scopeId2}>11</option><option value="12"${_scopeId2}>12</option>`);
                  } else {
                    return [
                      createVNode("option", { value: "" }, "Month"),
                      createVNode("option", { value: "01" }, "01"),
                      createVNode("option", { value: "02" }, "02"),
                      createVNode("option", { value: "03" }, "03"),
                      createVNode("option", { value: "04" }, "04"),
                      createVNode("option", { value: "05" }, "05"),
                      createVNode("option", { value: "06" }, "06"),
                      createVNode("option", { value: "07" }, "07"),
                      createVNode("option", { value: "08" }, "08"),
                      createVNode("option", { value: "09" }, "09"),
                      createVNode("option", { value: "10" }, "10"),
                      createVNode("option", { value: "11" }, "11"),
                      createVNode("option", { value: "12" }, "12")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseSelect, {
                modelValue: unref(cardInfo).expiryYear,
                "onUpdate:modelValue": ($event) => unref(cardInfo).expiryYear = $event,
                label: "Exp. year"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<option value=""${_scopeId2}>Year</option><option value="23"${_scopeId2}>23</option><option value="24"${_scopeId2}>24</option><option value="25"${_scopeId2}>25</option><option value="26"${_scopeId2}>26</option><option value="27"${_scopeId2}>27</option><option value="28"${_scopeId2}>28</option><option value="29"${_scopeId2}>29</option><option value="30"${_scopeId2}>30</option>`);
                  } else {
                    return [
                      createVNode("option", { value: "" }, "Year"),
                      createVNode("option", { value: "23" }, "23"),
                      createVNode("option", { value: "24" }, "24"),
                      createVNode("option", { value: "25" }, "25"),
                      createVNode("option", { value: "26" }, "26"),
                      createVNode("option", { value: "27" }, "27"),
                      createVNode("option", { value: "28" }, "28"),
                      createVNode("option", { value: "29" }, "29"),
                      createVNode("option", { value: "30" }, "30")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseInput, {
                modelValue: unref(cardInfo).cvc,
                "onUpdate:modelValue": ($event) => unref(cardInfo).cvc = $event,
                label: "CVC",
                placeholder: "ex: 239"
              }, null, _parent2, _scopeId));
              _push2(`</div></div></div></div></form></div><div class="mt-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_DemoCreditCardReal, {
                name: unref(cardInfo).name,
                number: unref(cardInfo).number,
                "expiry-month": unref(cardInfo).expiryMonth,
                "expiry-year": unref(cardInfo).expiryYear,
                cvc: unref(cardInfo).cvc
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "border-muted-200 dark:border-muted-700 flex items-center justify-between gap-4 border-b px-8 py-5" }, [
                createVNode("div", null, [
                  createVNode(_component_BaseHeading, {
                    as: "h3",
                    size: "sm",
                    weight: "medium"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Payment method ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseText, {
                    size: "xs",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Select a payment method")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "ms-auto" }, [
                  createVNode(_component_BaseButtonAction, {
                    onClick: withModifiers(($event) => _ctx.$router.back(), ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:arrow-left",
                        class: "h-3 w-3"
                      }),
                      createVNode("span", null, "Cancel")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])
              ]),
              createVNode("div", null, [
                createVNode("div", {
                  role: "button",
                  class: [
                    "flex cursor-pointer items-center px-8 py-5",
                    unref(selectedMethod) === "paypal" ? "bg-muted-50 dark:bg-muted-900/60" : ""
                  ],
                  onClick: ($event) => selectedMethod.value = "paypal"
                }, [
                  createVNode("div", {
                    class: [
                      "dark:border-muted-800 h-4 w-4 rounded-full border-2 border-white ring-2 transition-colors",
                      unref(selectedMethod) === "paypal" ? "bg-primary-600 ring-primary-600" : "ring-muted-400"
                    ]
                  }, null, 2),
                  createVNode("label", { class: "ms-4 text-sm font-medium" }, "PayPal")
                ], 10, ["onClick"]),
                unref(selectedMethod) === "paypal" ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex items-center justify-between gap-4 p-8 pt-4"
                }, [
                  createVNode("div", { class: "max-w-xs" }, [
                    createVNode(_component_BaseHeading, {
                      as: "h3",
                      size: "md",
                      weight: "medium",
                      class: "mb-2"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Pay with PayPal ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, {
                      size: "sm",
                      class: "text-muted-400"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(' After clicking on "start subscription", you will be redirected to PayPal website to complete your purchase securely. ')
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "grow" }, [
                    createVNode(_component_BaseCard, {
                      shape: "curved",
                      elevated: "",
                      class: "mx-auto flex max-w-[280px] items-center justify-center px-8 py-16"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "logos:paypal",
                          class: "h-12 w-12"
                        })
                      ]),
                      _: 1
                    })
                  ])
                ])) : createCommentVNode("", true)
              ]),
              createVNode("div", { class: "border-muted-200 dark:border-muted-700 border-t" }, [
                createVNode("div", {
                  role: "button",
                  class: [
                    "flex cursor-pointer items-center px-8 py-5",
                    unref(selectedMethod) === "cc" ? "bg-muted-50 dark:bg-muted-900/60" : ""
                  ],
                  onClick: ($event) => selectedMethod.value = "cc"
                }, [
                  createVNode("div", {
                    class: [
                      "dark:border-muted-800 h-4 w-4 rounded-full border-2 border-white ring-2",
                      unref(selectedMethod) === "cc" ? "bg-primary-600 ring-primary-600" : "ring-muted-400"
                    ]
                  }, null, 2),
                  createVNode("label", { class: "ms-4 text-sm font-medium" }, "Credit Card")
                ], 10, ["onClick"]),
                unref(selectedMethod) === "cc" ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "grid grid-cols-2 gap-4 p-8 pt-4"
                }, [
                  createVNode("div", null, [
                    createVNode("form", null, [
                      createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                        createVNode("div", { class: "col-span-12" }, [
                          createVNode(_component_BaseInput, {
                            modelValue: unref(cardInfo).name,
                            "onUpdate:modelValue": ($event) => unref(cardInfo).name = $event,
                            label: "Name on card",
                            placeholder: "ex: John Doe"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "col-span-12" }, [
                          createVNode(_component_BaseInput, {
                            modelValue: unref(cardInfo).number,
                            "onUpdate:modelValue": ($event) => unref(cardInfo).number = $event,
                            label: "Card number",
                            placeholder: "ex: 4242 4242 4242 4242"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "col-span-12" }, [
                          createVNode("div", { class: "grid gap-4 sm:grid-cols-3" }, [
                            createVNode("div", null, [
                              createVNode(_component_BaseSelect, {
                                modelValue: unref(cardInfo).expiryMonth,
                                "onUpdate:modelValue": ($event) => unref(cardInfo).expiryMonth = $event,
                                label: "Exp. month"
                              }, {
                                default: withCtx(() => [
                                  createVNode("option", { value: "" }, "Month"),
                                  createVNode("option", { value: "01" }, "01"),
                                  createVNode("option", { value: "02" }, "02"),
                                  createVNode("option", { value: "03" }, "03"),
                                  createVNode("option", { value: "04" }, "04"),
                                  createVNode("option", { value: "05" }, "05"),
                                  createVNode("option", { value: "06" }, "06"),
                                  createVNode("option", { value: "07" }, "07"),
                                  createVNode("option", { value: "08" }, "08"),
                                  createVNode("option", { value: "09" }, "09"),
                                  createVNode("option", { value: "10" }, "10"),
                                  createVNode("option", { value: "11" }, "11"),
                                  createVNode("option", { value: "12" }, "12")
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", null, [
                              createVNode(_component_BaseSelect, {
                                modelValue: unref(cardInfo).expiryYear,
                                "onUpdate:modelValue": ($event) => unref(cardInfo).expiryYear = $event,
                                label: "Exp. year"
                              }, {
                                default: withCtx(() => [
                                  createVNode("option", { value: "" }, "Year"),
                                  createVNode("option", { value: "23" }, "23"),
                                  createVNode("option", { value: "24" }, "24"),
                                  createVNode("option", { value: "25" }, "25"),
                                  createVNode("option", { value: "26" }, "26"),
                                  createVNode("option", { value: "27" }, "27"),
                                  createVNode("option", { value: "28" }, "28"),
                                  createVNode("option", { value: "29" }, "29"),
                                  createVNode("option", { value: "30" }, "30")
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", null, [
                              createVNode(_component_BaseInput, {
                                modelValue: unref(cardInfo).cvc,
                                "onUpdate:modelValue": ($event) => unref(cardInfo).cvc = $event,
                                label: "CVC",
                                placeholder: "ex: 239"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "mt-6" }, [
                    createVNode(_component_DemoCreditCardReal, {
                      name: unref(cardInfo).name,
                      number: unref(cardInfo).number,
                      "expiry-month": unref(cardInfo).expiryMonth,
                      "expiry-year": unref(cardInfo).expiryYear,
                      cvc: unref(cardInfo).cvc
                    }, null, 8, ["name", "number", "expiry-month", "expiry-year", "cvc"])
                  ])
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "pb-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-muted-200 dark:border-muted-700 border-b px-8 py-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "sm",
              weight: "medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Order Summary `);
                } else {
                  return [
                    createTextVNode(" Order Summary ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Check your order details`);
                } else {
                  return [
                    createTextVNode("Check your order details")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="px-8 pt-5"${_scopeId}><div class="mb-6"${_scopeId}><label class="nui-label pb-3 text-[0.825rem]"${_scopeId}>Billing cycle</label><div class="flex items-center gap-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseRadio, {
              id: "demo-cycle-1",
              modelValue: unref(billingCycles),
              "onUpdate:modelValue": ($event) => isRef(billingCycles) ? billingCycles.value = $event : null,
              name: "monthly_billing",
              label: "Monthly",
              value: "monthly",
              color: "primary",
              classes: {
                label: "relative top-0.5 text-xs"
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseRadio, {
              id: "demo-cycle-2",
              modelValue: unref(billingCycles),
              "onUpdate:modelValue": ($event) => isRef(billingCycles) ? billingCycles.value = $event : null,
              name: "yearly_billing",
              label: "Yearly",
              value: "yearly",
              color: "primary",
              classes: {
                label: "relative top-0.5 text-xs"
              }
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "sm",
              weight: "medium",
              lead: "none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Fasterio pro plan `);
                } else {
                  return [
                    createTextVNode(" Fasterio pro plan ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="ms-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "sm",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="font-semibold"${_scopeId2}>$29.99</span><span class="text-muted-500 dark:text-muted-400 text-xs"${_scopeId2}>/mo</span>`);
                } else {
                  return [
                    createVNode("span", { class: "font-semibold" }, "$29.99"),
                    createVNode("span", { class: "text-muted-500 dark:text-muted-400 text-xs" }, "/mo")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_component_BaseText, { class: "text-muted-500 dark:text-muted-400 mt-2 text-xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Save 20% with annual billing`);
                } else {
                  return [
                    createTextVNode("Save 20% with annual billing")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mt-4 px-8 pb-5"${_scopeId}><div class="flex items-end justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "sm",
              weight: "medium",
              lead: "none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Taxes `);
                } else {
                  return [
                    createTextVNode(" Taxes ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "sm",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="font-semibold"${_scopeId2}>$2.99</span>`);
                } else {
                  return [
                    createVNode("span", { class: "font-semibold" }, "$2.99")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="border-muted-200 dark:border-muted-700 mt-4 border-t px-8 pt-5"${_scopeId}><div class="flex items-end justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "sm",
              weight: "medium",
              lead: "none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` To pay today (USD) `);
                } else {
                  return [
                    createTextVNode(" To pay today (USD) ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "md",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="font-semibold"${_scopeId2}>$0.00</span>`);
                } else {
                  return [
                    createVNode("span", { class: "font-semibold" }, "$0.00")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_BaseText, { class: "text-muted-500 dark:text-muted-400 mt-2 text-xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Starting from next month: $29.99/mo.`);
                } else {
                  return [
                    createTextVNode("Starting from next month: $29.99/mo.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="my-4 flex items-center px-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              modelValue: unref(termsApproval),
              "onUpdate:modelValue": ($event) => isRef(termsApproval) ? termsApproval.value = $event : null,
              color: "primary",
              shape: "full",
              label: "I agree to the Terms Of Service",
              classes: {
                label: "relative top-0.5 text-xs"
              }
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col px-8 pt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "primary",
              class: "!h-12 w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Start Subscription`);
                } else {
                  return [
                    createTextVNode("Start Subscription")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "border-muted-200 dark:border-muted-700 border-b px-8 py-5" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "sm",
                  weight: "medium"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Order Summary ")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseText, {
                  size: "xs",
                  class: "text-muted-400"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Check your order details")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "px-8 pt-5" }, [
                createVNode("div", { class: "mb-6" }, [
                  createVNode("label", { class: "nui-label pb-3 text-[0.825rem]" }, "Billing cycle"),
                  createVNode("div", { class: "flex items-center gap-6" }, [
                    createVNode(_component_BaseRadio, {
                      id: "demo-cycle-1",
                      modelValue: unref(billingCycles),
                      "onUpdate:modelValue": ($event) => isRef(billingCycles) ? billingCycles.value = $event : null,
                      name: "monthly_billing",
                      label: "Monthly",
                      value: "monthly",
                      color: "primary",
                      classes: {
                        label: "relative top-0.5 text-xs"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_BaseRadio, {
                      id: "demo-cycle-2",
                      modelValue: unref(billingCycles),
                      "onUpdate:modelValue": ($event) => isRef(billingCycles) ? billingCycles.value = $event : null,
                      name: "yearly_billing",
                      label: "Yearly",
                      value: "yearly",
                      color: "primary",
                      classes: {
                        label: "relative top-0.5 text-xs"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                createVNode("div", { class: "flex items-center" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h3",
                    size: "sm",
                    weight: "medium",
                    lead: "none"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Fasterio pro plan ")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "ms-auto" }, [
                    createVNode(_component_BaseText, {
                      size: "sm",
                      class: "text-muted-800 dark:text-muted-100"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "font-semibold" }, "$29.99"),
                        createVNode("span", { class: "text-muted-500 dark:text-muted-400 text-xs" }, "/mo")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode(_component_BaseText, { class: "text-muted-500 dark:text-muted-400 mt-2 text-xs" }, {
                  default: withCtx(() => [
                    createTextVNode("Save 20% with annual billing")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "mt-4 px-8 pb-5" }, [
                createVNode("div", { class: "flex items-end justify-between" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h3",
                    size: "sm",
                    weight: "medium",
                    lead: "none"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Taxes ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseText, {
                    size: "sm",
                    class: "text-muted-800 dark:text-muted-100"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "font-semibold" }, "$2.99")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "border-muted-200 dark:border-muted-700 mt-4 border-t px-8 pt-5" }, [
                createVNode("div", { class: "flex items-end justify-between" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h3",
                    size: "sm",
                    weight: "medium",
                    lead: "none"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" To pay today (USD) ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseText, {
                    size: "md",
                    class: "text-muted-800 dark:text-muted-100"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "font-semibold" }, "$0.00")
                    ]),
                    _: 1
                  })
                ]),
                createVNode(_component_BaseText, { class: "text-muted-500 dark:text-muted-400 mt-2 text-xs" }, {
                  default: withCtx(() => [
                    createTextVNode("Starting from next month: $29.99/mo.")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "my-4 flex items-center px-8" }, [
                createVNode(_component_BaseCheckbox, {
                  modelValue: unref(termsApproval),
                  "onUpdate:modelValue": ($event) => isRef(termsApproval) ? termsApproval.value = $event : null,
                  color: "primary",
                  shape: "full",
                  label: "I agree to the Terms Of Service",
                  classes: {
                    label: "relative top-0.5 text-xs"
                  }
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("div", { class: "flex flex-col px-8 pt-4" }, [
                createVNode(_component_BaseButton, {
                  color: "primary",
                  class: "!h-12 w-full"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Start Subscription")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/form-3.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=form-3-373f4799.mjs.map
