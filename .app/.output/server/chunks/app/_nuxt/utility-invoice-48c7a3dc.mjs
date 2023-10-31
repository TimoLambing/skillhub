import { _ as _sfc_main$p, f as __nuxt_component_2, j as _sfc_main$C, s as _sfc_main$E, b as _sfc_main$o, g as _sfc_main$z } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseButtonIcon-6150946c.mjs';
import __nuxt_component_0 from './TairoLogo-688db51d.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, createVNode, unref, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
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

const vatRate = 0.1;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "utility-invoice",
  __ssrInlineRender: true,
  setup(__props) {
    const data = ref([
      {
        name: "Website Redesign",
        unit: "hrs",
        quantity: 54,
        rate: 24
      },
      {
        name: "Logo Design",
        unit: "hrs",
        quantity: 12,
        rate: 24
      },
      {
        name: "Custom Illustrations",
        unit: "hrs",
        quantity: 7,
        rate: 32
      }
    ]);
    const totalData = computed(() => {
      const subtotal = data.value.reduce((acc, item) => {
        return acc + item.quantity * item.rate;
      }, 0);
      const vatValue = subtotal * vatRate;
      const total = subtotal + vatValue;
      return [
        {
          label: "Subtotal",
          value: subtotal
        },
        {
          label: "Taxes",
          value: vatValue
        },
        {
          label: "Total",
          value: total
        }
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseButtonIcon = _sfc_main$1;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_TairoLogo = __nuxt_component_0;
      const _component_BaseInput = _sfc_main$z;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-3xl py-10" }, _attrs))}><div class="mb-4 flex items-center justify-between"><div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "xl",
        weight: "medium",
        lead: "none"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Order #ox-81469 `);
          } else {
            return [
              createTextVNode(" Order #ox-81469 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center justify-end gap-3">`);
      _push(ssrRenderComponent(_component_BaseButtonIcon, {
        size: "sm",
        shape: "full",
        "data-nui-tooltip": "Edit invoice"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:pencil-duotone",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ph:pencil-duotone",
                class: "h-4 w-4"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButtonIcon, {
        size: "sm",
        shape: "full",
        "data-nui-tooltip": "Send by email"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:envelope-duotone",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ph:envelope-duotone",
                class: "h-4 w-4"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButtonIcon, {
        size: "sm",
        shape: "full",
        "data-nui-tooltip": "Print invoice"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:printer-duotone",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ph:printer-duotone",
                class: "h-4 w-4"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButtonIcon, {
        size: "sm",
        shape: "full",
        "data-nui-tooltip": "Download as PDF"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:download-duotone",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ph:download-duotone",
                class: "h-4 w-4"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div>`);
      _push(ssrRenderComponent(_component_BaseCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="overflow-hidden font-sans"${_scopeId}><div${_scopeId}><div class="border-muted-200 dark:border-muted-700 flex flex-col justify-between gap-y-8 border-b p-8 sm:flex-row sm:items-center"${_scopeId}><div class="flex items-center gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              src: "/img/avatars/24.svg",
              "badge-src": "/img/stacks/reactjs.svg",
              size: "lg"
            }, null, _parent2, _scopeId));
            _push2(`<div class=""${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "medium",
              lead: "none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Betty Lopez `);
                } else {
                  return [
                    createTextVNode(" Betty Lopez ")
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
                  _push3(` bettylopez@tairo.io `);
                } else {
                  return [
                    createTextVNode(" bettylopez@tairo.io ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="flex gap-12"${_scopeId}><div class="text-muted-500 dark:text-muted-400 text-sm font-light"${_scopeId}><p class="text-muted-700 dark:text-muted-100 text-xs font-normal"${_scopeId}> Invoice Number </p><p${_scopeId}>INV-48654</p><p class="text-muted-700 dark:text-muted-100 mt-2 text-xs font-normal"${_scopeId}> Date of Issue </p><p${_scopeId}>03.19.2023</p></div><div class="text-muted-500 dark:text-muted-400 text-sm font-light"${_scopeId}><p class="text-muted-700 dark:text-muted-100 text-xs font-normal"${_scopeId}> Terms </p><p${_scopeId}>30 Days</p><p class="text-muted-700 dark:text-muted-100 mt-2 text-xs font-normal"${_scopeId}> Due </p><p${_scopeId}>04.19.2023</p></div></div></div><div class="border-muted-200 dark:border-muted-700 flex flex-col justify-between gap-y-8 border-b p-8 sm:flex-row sm:items-center"${_scopeId}><div class="flex items-center gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TairoLogo, { class: "text-primary-500 h-12 w-12" }, null, _parent2, _scopeId));
            _push2(`<div class=""${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "medium",
              lead: "none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Tairo `);
                } else {
                  return [
                    createTextVNode(" Tairo ")
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
                  _push3(` Software company `);
                } else {
                  return [
                    createTextVNode(" Software company ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="flex gap-12"${_scopeId}><div class="text-muted-500 dark:text-muted-400 text-sm font-light"${_scopeId}><p class="text-muted-700 dark:text-muted-100 text-sm font-normal"${_scopeId}> Address </p><p class="text-xs"${_scopeId}>43 Church street</p><p class="text-xs"${_scopeId}>San Jose de la Herida</p><p class="text-xs"${_scopeId}>CA 91853</p></div></div></div><div class="px-6 py-8 sm:p-8"${_scopeId}><div class="flex flex-col"${_scopeId}><table class="divide-muted-200 dark:divide-muted-700 min-w-full divide-y"${_scopeId}><thead class="font-sans"${_scopeId}><tr${_scopeId}><th scope="col" class="text-muted-400 py-3.5 pe-3 ps-4 text-left text-xs font-medium uppercase sm:ps-6 md:ps-0"${_scopeId}> Description </th><th scope="col" class="text-muted-400 hidden px-3 py-3.5 text-right text-xs font-medium uppercase sm:table-cell"${_scopeId}> Unit </th><th scope="col" class="text-muted-400 hidden px-3 py-3.5 text-right text-xs font-medium uppercase sm:table-cell"${_scopeId}> Quantity </th><th scope="col" class="text-muted-400 hidden px-3 py-3.5 text-right text-xs font-medium uppercase sm:table-cell"${_scopeId}> Rate </th><th scope="col" class="text-muted-400 py-3.5 pe-4 ps-3 text-right text-xs font-medium uppercase sm:pe-6 md:pe-0"${_scopeId}> Amount </th></tr></thead><tbody class="font-sans"${_scopeId}><!--[-->`);
            ssrRenderList(unref(data), (item) => {
              _push2(`<tr class="border-muted-200 dark:border-muted-700 border-b"${_scopeId}><td class="py-4 pe-3 ps-4 text-sm sm:ps-6 md:ps-0"${_scopeId}><div class="text-muted-800 dark:text-muted-100 font-medium"${_scopeId}>${ssrInterpolate(item.name)}</div><div class="text-muted-400 mt-0.5 text-xs"${_scopeId}>${ssrInterpolate(item.quantity)} units at $${ssrInterpolate(item.rate)}</div></td><td class="text-muted-500 dark:text-muted-400 hidden px-3 py-4 text-right text-sm sm:table-cell"${_scopeId}> hours </td><td class="hidden px-3 py-4 text-right text-sm sm:table-cell"${_scopeId}><div class="flex justify-end"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseInput, {
                modelValue: item.quantity,
                "onUpdate:modelValue": ($event) => item.quantity = $event,
                modelModifiers: { number: true },
                type: "number",
                classes: {
                  wrapper: "w-16"
                }
              }, null, _parent2, _scopeId));
              _push2(`</div></td><td class="text-muted-400 hidden px-3 py-4 text-right text-sm sm:table-cell"${_scopeId}> $${ssrInterpolate(item.rate)}</td><td class="text-muted-800 dark:text-muted-100 py-4 pe-4 ps-3 text-right text-sm sm:pe-6 md:pe-0"${_scopeId}> $${ssrInterpolate((item.rate * item.quantity).toFixed(2))}</td></tr>`);
            });
            _push2(`<!--]--></tbody><tfoot${_scopeId}><!--[-->`);
            ssrRenderList(unref(totalData), (item) => {
              _push2(`<tr${_scopeId}><th scope="row" colspan="4" class="text-muted-400 hidden pe-3 ps-6 pt-6 text-right text-sm font-light sm:table-cell md:ps-0"${_scopeId}>${ssrInterpolate(item.label)}</th><th scope="row" class="text-muted-500 pe-3 ps-4 pt-6 text-left text-sm font-light sm:hidden"${_scopeId}>${ssrInterpolate(item.label)}</th><td class="${ssrRenderClass([
                item.label === "Total" ? "font-semibold text-lg text-muted-800 dark:text-muted-100" : "text-sm text-muted-500 dark:text-muted-200/70",
                "pe-4 ps-3 pt-6 text-right sm:pe-6 md:pe-0"
              ])}"${_scopeId}> $${ssrInterpolate(item.value.toFixed(2))}</td></tr>`);
            });
            _push2(`<!--]--></tfoot></table></div></div><div class="mt-8 p-8"${_scopeId}><div class="border-muted-200 dark:border-muted-700 border-t pt-8"${_scopeId}><div class="text-muted-400"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Payment terms are 14 days. Please be aware that according to the Late Payment of company Debts Acts, freelancers are entitled to claim a 00.00 late fee upon non-payment of debts after this time, at which point a new invoice will be submitted with the addition of this fee. If payment of the revised invoice is not received within a further 14 days, additional interest will be charged to the overdue account and a statutory rate of 8% plus Bank base of 0.5%, totalling 8.5%. Parties cannot contract out of the Act\u2019s provisions. `);
                } else {
                  return [
                    createTextVNode(" Payment terms are 14 days. Please be aware that according to the Late Payment of company Debts Acts, freelancers are entitled to claim a 00.00 late fee upon non-payment of debts after this time, at which point a new invoice will be submitted with the addition of this fee. If payment of the revised invoice is not received within a further 14 days, additional interest will be charged to the overdue account and a statutory rate of 8% plus Bank base of 0.5%, totalling 8.5%. Parties cannot contract out of the Act\u2019s provisions. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "overflow-hidden font-sans" }, [
                createVNode("div", null, [
                  createVNode("div", { class: "border-muted-200 dark:border-muted-700 flex flex-col justify-between gap-y-8 border-b p-8 sm:flex-row sm:items-center" }, [
                    createVNode("div", { class: "flex items-center gap-3" }, [
                      createVNode(_component_BaseAvatar, {
                        src: "/img/avatars/24.svg",
                        "badge-src": "/img/stacks/reactjs.svg",
                        size: "lg"
                      }),
                      createVNode("div", { class: "" }, [
                        createVNode(_component_BaseHeading, {
                          as: "h3",
                          size: "md",
                          weight: "medium",
                          lead: "none"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Betty Lopez ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseParagraph, {
                          size: "sm",
                          class: "text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" bettylopez@tairo.io ")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode("div", { class: "flex gap-12" }, [
                      createVNode("div", { class: "text-muted-500 dark:text-muted-400 text-sm font-light" }, [
                        createVNode("p", { class: "text-muted-700 dark:text-muted-100 text-xs font-normal" }, " Invoice Number "),
                        createVNode("p", null, "INV-48654"),
                        createVNode("p", { class: "text-muted-700 dark:text-muted-100 mt-2 text-xs font-normal" }, " Date of Issue "),
                        createVNode("p", null, "03.19.2023")
                      ]),
                      createVNode("div", { class: "text-muted-500 dark:text-muted-400 text-sm font-light" }, [
                        createVNode("p", { class: "text-muted-700 dark:text-muted-100 text-xs font-normal" }, " Terms "),
                        createVNode("p", null, "30 Days"),
                        createVNode("p", { class: "text-muted-700 dark:text-muted-100 mt-2 text-xs font-normal" }, " Due "),
                        createVNode("p", null, "04.19.2023")
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "border-muted-200 dark:border-muted-700 flex flex-col justify-between gap-y-8 border-b p-8 sm:flex-row sm:items-center" }, [
                    createVNode("div", { class: "flex items-center gap-4" }, [
                      createVNode(_component_TairoLogo, { class: "text-primary-500 h-12 w-12" }),
                      createVNode("div", { class: "" }, [
                        createVNode(_component_BaseHeading, {
                          as: "h3",
                          size: "md",
                          weight: "medium",
                          lead: "none"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Tairo ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseParagraph, {
                          size: "xs",
                          class: "text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Software company ")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode("div", { class: "flex gap-12" }, [
                      createVNode("div", { class: "text-muted-500 dark:text-muted-400 text-sm font-light" }, [
                        createVNode("p", { class: "text-muted-700 dark:text-muted-100 text-sm font-normal" }, " Address "),
                        createVNode("p", { class: "text-xs" }, "43 Church street"),
                        createVNode("p", { class: "text-xs" }, "San Jose de la Herida"),
                        createVNode("p", { class: "text-xs" }, "CA 91853")
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "px-6 py-8 sm:p-8" }, [
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("table", { class: "divide-muted-200 dark:divide-muted-700 min-w-full divide-y" }, [
                        createVNode("thead", { class: "font-sans" }, [
                          createVNode("tr", null, [
                            createVNode("th", {
                              scope: "col",
                              class: "text-muted-400 py-3.5 pe-3 ps-4 text-left text-xs font-medium uppercase sm:ps-6 md:ps-0"
                            }, " Description "),
                            createVNode("th", {
                              scope: "col",
                              class: "text-muted-400 hidden px-3 py-3.5 text-right text-xs font-medium uppercase sm:table-cell"
                            }, " Unit "),
                            createVNode("th", {
                              scope: "col",
                              class: "text-muted-400 hidden px-3 py-3.5 text-right text-xs font-medium uppercase sm:table-cell"
                            }, " Quantity "),
                            createVNode("th", {
                              scope: "col",
                              class: "text-muted-400 hidden px-3 py-3.5 text-right text-xs font-medium uppercase sm:table-cell"
                            }, " Rate "),
                            createVNode("th", {
                              scope: "col",
                              class: "text-muted-400 py-3.5 pe-4 ps-3 text-right text-xs font-medium uppercase sm:pe-6 md:pe-0"
                            }, " Amount ")
                          ])
                        ]),
                        createVNode("tbody", { class: "font-sans" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(data), (item) => {
                            return openBlock(), createBlock("tr", {
                              key: item.name,
                              class: "border-muted-200 dark:border-muted-700 border-b"
                            }, [
                              createVNode("td", { class: "py-4 pe-3 ps-4 text-sm sm:ps-6 md:ps-0" }, [
                                createVNode("div", { class: "text-muted-800 dark:text-muted-100 font-medium" }, toDisplayString(item.name), 1),
                                createVNode("div", { class: "text-muted-400 mt-0.5 text-xs" }, toDisplayString(item.quantity) + " units at $" + toDisplayString(item.rate), 1)
                              ]),
                              createVNode("td", { class: "text-muted-500 dark:text-muted-400 hidden px-3 py-4 text-right text-sm sm:table-cell" }, " hours "),
                              createVNode("td", { class: "hidden px-3 py-4 text-right text-sm sm:table-cell" }, [
                                createVNode("div", { class: "flex justify-end" }, [
                                  createVNode(_component_BaseInput, {
                                    modelValue: item.quantity,
                                    "onUpdate:modelValue": ($event) => item.quantity = $event,
                                    modelModifiers: { number: true },
                                    type: "number",
                                    classes: {
                                      wrapper: "w-16"
                                    }
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ])
                              ]),
                              createVNode("td", { class: "text-muted-400 hidden px-3 py-4 text-right text-sm sm:table-cell" }, " $" + toDisplayString(item.rate), 1),
                              createVNode("td", { class: "text-muted-800 dark:text-muted-100 py-4 pe-4 ps-3 text-right text-sm sm:pe-6 md:pe-0" }, " $" + toDisplayString((item.rate * item.quantity).toFixed(2)), 1)
                            ]);
                          }), 128))
                        ]),
                        createVNode("tfoot", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(totalData), (item) => {
                            return openBlock(), createBlock("tr", {
                              key: item.label
                            }, [
                              createVNode("th", {
                                scope: "row",
                                colspan: "4",
                                class: "text-muted-400 hidden pe-3 ps-6 pt-6 text-right text-sm font-light sm:table-cell md:ps-0"
                              }, toDisplayString(item.label), 1),
                              createVNode("th", {
                                scope: "row",
                                class: "text-muted-500 pe-3 ps-4 pt-6 text-left text-sm font-light sm:hidden"
                              }, toDisplayString(item.label), 1),
                              createVNode("td", {
                                class: [
                                  "pe-4 ps-3 pt-6 text-right sm:pe-6 md:pe-0",
                                  item.label === "Total" ? "font-semibold text-lg text-muted-800 dark:text-muted-100" : "text-sm text-muted-500 dark:text-muted-200/70"
                                ]
                              }, " $" + toDisplayString(item.value.toFixed(2)), 3)
                            ]);
                          }), 128))
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "mt-8 p-8" }, [
                    createVNode("div", { class: "border-muted-200 dark:border-muted-700 border-t pt-8" }, [
                      createVNode("div", { class: "text-muted-400" }, [
                        createVNode(_component_BaseParagraph, { size: "xs" }, {
                          default: withCtx(() => [
                            createTextVNode(" Payment terms are 14 days. Please be aware that according to the Late Payment of company Debts Acts, freelancers are entitled to claim a 00.00 late fee upon non-payment of debts after this time, at which point a new invoice will be submitted with the addition of this fee. If payment of the revised invoice is not received within a further 14 days, additional interest will be charged to the overdue account and a statutory rate of 8% plus Bank base of 0.5%, totalling 8.5%. Parties cannot contract out of the Act\u2019s provisions. ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/utility-invoice.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=utility-invoice-48c7a3dc.mjs.map
