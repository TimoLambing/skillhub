import { s as _sfc_main$E, _ as _sfc_main$p, b as _sfc_main$o, d as _sfc_main$x, j as _sfc_main$C, f as __nuxt_component_2, i as _sfc_main$D, e as __nuxt_component_0$5, g as _sfc_main$z } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseRadioHeadless-286f432f.mjs';
import __nuxt_component_0 from './TairoLogo-688db51d.mjs';
import { _ as _sfc_main$2 } from './BaseSwitchBall-c7b340a1.mjs';
import { _ as _sfc_main$3 } from './BaseRadio-d9efef81.mjs';
import { _ as _sfc_main$4 } from './DemoCreditCardReal-918e9ba9.mjs';
import { _ as _sfc_main$5 } from './BaseSelect-50588309.mjs';
import { _ as _sfc_main$6 } from './TairoFormSave-f466246e.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createVNode, unref, toDisplayString, isRef, createTextVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { g as getRandomColor } from './colors-16c42002.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
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
import './IconCheck-b31ac5c7.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import './IconChevronDown-af6375e6.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "utility-billing",
  __ssrInlineRender: true,
  setup(__props) {
    const customRadio = ref("enterprise");
    const plans = [
      {
        name: "starter",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utilitatis causa amicitia est quaesita.",
        price: {
          monthly: 9,
          yearly: 99
        },
        features: ["3 seats", "20 projects", "20GB storage"],
        benefits: [
          "Free 1 year support",
          "Free 1 year updates",
          "Free 1 year hosting"
        ]
      },
      {
        name: "freelancer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utilitatis causa amicitia est quaesita.",
        price: {
          monthly: 19,
          yearly: 199
        },
        features: ["8 seats", "150 projects", "100GB storage"],
        benefits: ["1 year support", "1 year updates", "1 year hosting"]
      },
      {
        name: "business",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utilitatis causa amicitia est quaesita.",
        price: {
          monthly: 29,
          yearly: 299
        },
        features: ["20 seats", "Unlimited projects", "500GB storage"],
        benefits: ["1 year support", "1 year updates", "1 year hosting"]
      },
      {
        name: "enterprise",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utilitatis causa amicitia est quaesita.",
        price: {
          monthly: 49,
          yearly: 399
        },
        features: ["40 seats", "Unlimited projects", "Unlimited storage"],
        benefits: ["1 year support", "1 year updates", "1 year hosting"]
      }
    ];
    const selectedPlan = computed(() => {
      return plans.find((plan) => plan.name === customRadio.value);
    });
    const planColor = computed(() => {
      switch (customRadio.value) {
        case "starter":
          return "text-success-500";
        case "freelancer":
          return "text-yellow-400";
        case "business":
          return "text-indigo-500";
        case "enterprise":
          return "text-primary-500";
      }
    });
    const cardInfo = ref({
      name: void 0,
      number: void 0,
      expiryYear: void 0,
      expiryMonth: void 0,
      cvc: void 0
    });
    const billingCycles = ref("monthly");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseButton = _sfc_main$x;
      const _component_BaseRadioHeadless = _sfc_main$1;
      const _component_BaseCard = _sfc_main$C;
      const _component_Icon = __nuxt_component_2;
      const _component_TairoLogo = __nuxt_component_0;
      const _component_BaseText = _sfc_main$D;
      const _component_BaseSwitchBall = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_BaseRadio = _sfc_main$3;
      const _component_DemoCreditCardReal = _sfc_main$4;
      const _component_BaseInput = _sfc_main$z;
      const _component_BaseSelect = _sfc_main$5;
      const _component_TairoFormSave = _sfc_main$6;
      _push(`<form${ssrRenderAttrs(mergeProps({
        action: "",
        method: "POST",
        class: "mx-auto w-full max-w-4xl pb-16"
      }, _attrs))}><div class="mb-8 flex flex-col justify-between md:flex-row md:items-center"><div class="ltablet:max-w-full flex max-w-[425px] flex-col items-center gap-4 text-center md:flex-row md:text-left lg:max-w-full">`);
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
            _push2(`<span${_scopeId}>Manage plan</span>`);
          } else {
            return [
              createVNode("span", null, "Manage plan")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-500"${_scopeId}> Manage your plan and billing information </span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-500" }, " Manage your plan and billing information ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="mt-4 flex items-center justify-center gap-2 md:mt-0 md:justify-start">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        type: "submit",
        color: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Save for</span><span class="font-semibold"${_scopeId}>$${ssrInterpolate(unref(selectedPlan)?.price.monthly)}</span><span${_scopeId}>/month</span>`);
          } else {
            return [
              createVNode("span", null, "Save for"),
              createVNode("span", { class: "font-semibold" }, "$" + toDisplayString(unref(selectedPlan)?.price.monthly), 1),
              createVNode("span", null, "/month")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="dark:border-muted-800 mb-10 grid gap-4 border-b border-gray-200 pb-10 md:grid-cols-2 xl:gap-8"><div class="grid grid-cols-2 gap-2 xl:gap-6">`);
      _push(ssrRenderComponent(_component_BaseRadioHeadless, {
        modelValue: unref(customRadio),
        "onUpdate:modelValue": ($event) => isRef(customRadio) ? customRadio.value = $event : null,
        name: "radio_custom",
        value: "starter"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCard, {
              shape: "rounded",
              class: "text-muted-400/50 peer-checked:!border-success-500 peer-checked:text-success-500 group relative p-6 text-center peer-checked:[&_.child]:!opacity-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="child border-muted-200 dark:border-muted-700 dark:bg-muted-800 absolute end-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border bg-white opacity-0"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:check",
                    class: "h-3 w-3 text-current"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_TairoLogo, { class: "mx-auto mb-2 h-9 w-9" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "medium",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Starter `);
                      } else {
                        return [
                          createTextVNode(" Starter ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseText, {
                    size: "xs",
                    lead: "tight",
                    class: "text-muted-400"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`A basic plan made for quickstarts`);
                      } else {
                        return [
                          createTextVNode("A basic plan made for quickstarts")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "child border-muted-200 dark:border-muted-700 dark:bg-muted-800 absolute end-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border bg-white opacity-0" }, [
                      createVNode(_component_Icon, {
                        name: "lucide:check",
                        class: "h-3 w-3 text-current"
                      })
                    ]),
                    createVNode(_component_TairoLogo, { class: "mx-auto mb-2 h-9 w-9" }),
                    createVNode(_component_BaseHeading, {
                      as: "h4",
                      size: "sm",
                      weight: "medium",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Starter ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseText, {
                      size: "xs",
                      lead: "tight",
                      class: "text-muted-400"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("A basic plan made for quickstarts")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseCard, {
                shape: "rounded",
                class: "text-muted-400/50 peer-checked:!border-success-500 peer-checked:text-success-500 group relative p-6 text-center peer-checked:[&_.child]:!opacity-100"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "child border-muted-200 dark:border-muted-700 dark:bg-muted-800 absolute end-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border bg-white opacity-0" }, [
                    createVNode(_component_Icon, {
                      name: "lucide:check",
                      class: "h-3 w-3 text-current"
                    })
                  ]),
                  createVNode(_component_TairoLogo, { class: "mx-auto mb-2 h-9 w-9" }),
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "medium",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Starter ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseText, {
                    size: "xs",
                    lead: "tight",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("A basic plan made for quickstarts")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseRadioHeadless, {
        modelValue: unref(customRadio),
        "onUpdate:modelValue": ($event) => isRef(customRadio) ? customRadio.value = $event : null,
        name: "radio_custom",
        value: "freelancer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCard, {
              shape: "rounded",
              class: "text-muted-400/50 group relative p-6 text-center peer-checked:!border-yellow-400 peer-checked:text-yellow-400 peer-checked:[&_.child]:!opacity-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="child border-muted-200 dark:border-muted-700 dark:bg-muted-800 absolute end-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border bg-white opacity-0"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:check",
                    class: "h-3 w-3 text-current"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_TairoLogo, { class: "mx-auto mb-2 h-9 w-9" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "medium",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Freelancer `);
                      } else {
                        return [
                          createTextVNode(" Freelancer ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseText, {
                    size: "xs",
                    lead: "tight",
                    class: "text-muted-400"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`A plan for heavy working freelancers`);
                      } else {
                        return [
                          createTextVNode("A plan for heavy working freelancers")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "child border-muted-200 dark:border-muted-700 dark:bg-muted-800 absolute end-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border bg-white opacity-0" }, [
                      createVNode(_component_Icon, {
                        name: "lucide:check",
                        class: "h-3 w-3 text-current"
                      })
                    ]),
                    createVNode(_component_TairoLogo, { class: "mx-auto mb-2 h-9 w-9" }),
                    createVNode(_component_BaseHeading, {
                      as: "h4",
                      size: "sm",
                      weight: "medium",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Freelancer ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseText, {
                      size: "xs",
                      lead: "tight",
                      class: "text-muted-400"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("A plan for heavy working freelancers")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseCard, {
                shape: "rounded",
                class: "text-muted-400/50 group relative p-6 text-center peer-checked:!border-yellow-400 peer-checked:text-yellow-400 peer-checked:[&_.child]:!opacity-100"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "child border-muted-200 dark:border-muted-700 dark:bg-muted-800 absolute end-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border bg-white opacity-0" }, [
                    createVNode(_component_Icon, {
                      name: "lucide:check",
                      class: "h-3 w-3 text-current"
                    })
                  ]),
                  createVNode(_component_TairoLogo, { class: "mx-auto mb-2 h-9 w-9" }),
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "medium",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Freelancer ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseText, {
                    size: "xs",
                    lead: "tight",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("A plan for heavy working freelancers")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseRadioHeadless, {
        modelValue: unref(customRadio),
        "onUpdate:modelValue": ($event) => isRef(customRadio) ? customRadio.value = $event : null,
        name: "radio_custom",
        value: "business"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCard, {
              shape: "rounded",
              class: "text-muted-400/50 group relative p-6 text-center peer-checked:!border-indigo-500 peer-checked:text-indigo-500 peer-checked:[&_.child]:!opacity-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="child border-muted-200 dark:border-muted-700 dark:bg-muted-800 absolute end-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border bg-white opacity-0"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:check",
                    class: "h-3 w-3 text-current"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_TairoLogo, { class: "mx-auto mb-2 h-9 w-9" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "medium",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Business `);
                      } else {
                        return [
                          createTextVNode(" Business ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseText, {
                    size: "xs",
                    lead: "tight",
                    class: "text-muted-400"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`An affordable medium business plan`);
                      } else {
                        return [
                          createTextVNode("An affordable medium business plan")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "child border-muted-200 dark:border-muted-700 dark:bg-muted-800 absolute end-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border bg-white opacity-0" }, [
                      createVNode(_component_Icon, {
                        name: "lucide:check",
                        class: "h-3 w-3 text-current"
                      })
                    ]),
                    createVNode(_component_TairoLogo, { class: "mx-auto mb-2 h-9 w-9" }),
                    createVNode(_component_BaseHeading, {
                      as: "h4",
                      size: "sm",
                      weight: "medium",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Business ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseText, {
                      size: "xs",
                      lead: "tight",
                      class: "text-muted-400"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("An affordable medium business plan")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseCard, {
                shape: "rounded",
                class: "text-muted-400/50 group relative p-6 text-center peer-checked:!border-indigo-500 peer-checked:text-indigo-500 peer-checked:[&_.child]:!opacity-100"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "child border-muted-200 dark:border-muted-700 dark:bg-muted-800 absolute end-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border bg-white opacity-0" }, [
                    createVNode(_component_Icon, {
                      name: "lucide:check",
                      class: "h-3 w-3 text-current"
                    })
                  ]),
                  createVNode(_component_TairoLogo, { class: "mx-auto mb-2 h-9 w-9" }),
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "medium",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Business ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseText, {
                    size: "xs",
                    lead: "tight",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("An affordable medium business plan")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseRadioHeadless, {
        modelValue: unref(customRadio),
        "onUpdate:modelValue": ($event) => isRef(customRadio) ? customRadio.value = $event : null,
        name: "radio_custom",
        value: "enterprise"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCard, {
              shape: "rounded",
              class: "text-muted-400/50 peer-checked:!border-primary-500 peer-checked:text-primary-500 group relative p-6 text-center peer-checked:[&_.child]:!opacity-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="child border-muted-200 dark:border-muted-700 dark:bg-muted-800 absolute end-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border bg-white opacity-0"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:check",
                    class: "h-3 w-3 text-current"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_TairoLogo, { class: "mx-auto mb-2 h-9 w-9" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "medium",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Enterprise `);
                      } else {
                        return [
                          createTextVNode(" Enterprise ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseText, {
                    size: "xs",
                    lead: "tight",
                    class: "text-muted-400"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`A corporate and full fledged company plan`);
                      } else {
                        return [
                          createTextVNode("A corporate and full fledged company plan")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "child border-muted-200 dark:border-muted-700 dark:bg-muted-800 absolute end-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border bg-white opacity-0" }, [
                      createVNode(_component_Icon, {
                        name: "lucide:check",
                        class: "h-3 w-3 text-current"
                      })
                    ]),
                    createVNode(_component_TairoLogo, { class: "mx-auto mb-2 h-9 w-9" }),
                    createVNode(_component_BaseHeading, {
                      as: "h4",
                      size: "sm",
                      weight: "medium",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Enterprise ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseText, {
                      size: "xs",
                      lead: "tight",
                      class: "text-muted-400"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("A corporate and full fledged company plan")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseCard, {
                shape: "rounded",
                class: "text-muted-400/50 peer-checked:!border-primary-500 peer-checked:text-primary-500 group relative p-6 text-center peer-checked:[&_.child]:!opacity-100"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "child border-muted-200 dark:border-muted-700 dark:bg-muted-800 absolute end-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border bg-white opacity-0" }, [
                    createVNode(_component_Icon, {
                      name: "lucide:check",
                      class: "h-3 w-3 text-current"
                    })
                  ]),
                  createVNode(_component_TairoLogo, { class: "mx-auto mb-2 h-9 w-9" }),
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "medium",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Enterprise ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseText, {
                    size: "xs",
                    lead: "tight",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("A corporate and full fledged company plan")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "rounded",
        class: "p-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex gap-12"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TairoLogo, {
              class: ["h-12 w-12 shrink-0", unref(planColor)]
            }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "md",
              lead: "tight",
              weight: "semibold"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`$${ssrInterpolate(unref(selectedPlan)?.price.monthly)} <span class="text-muted-400 font-normal"${_scopeId2}>/per month</span>`);
                } else {
                  return [
                    createTextVNode("$" + toDisplayString(unref(selectedPlan)?.price.monthly) + " ", 1),
                    createVNode("span", { class: "text-muted-400 font-normal" }, "/per month")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              lead: "tight",
              class: ["mb-2", unref(planColor)]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Billed $${ssrInterpolate(unref(selectedPlan)?.price.yearly)} yearly`);
                } else {
                  return [
                    createTextVNode("Billed $" + toDisplayString(unref(selectedPlan)?.price.yearly) + " yearly", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              class: "text-muted-500 dark:text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(selectedPlan)?.description)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(selectedPlan)?.description), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="my-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              lead: "tight",
              class: "text-muted-500 dark:text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Tairo has incredible features and each plan perfectly adapts to your company, wether it is a small business or a bigger one. Tairo can also scale smoothly with you, as your business grows. `);
                } else {
                  return [
                    createTextVNode(" Tairo has incredible features and each plan perfectly adapts to your company, wether it is a small business or a bigger one. Tairo can also scale smoothly with you, as your business grows. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-2 gap-6 font-sans text-xs"${_scopeId}><div${_scopeId}><ul${_scopeId}><!--[-->`);
            ssrRenderList(unref(selectedPlan)?.features, (item) => {
              _push2(`<li class="${ssrRenderClass([unref(planColor), "flex items-center gap-2"])}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:check",
                class: "h-3 w-3 text-current"
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-muted-400"${_scopeId}>${ssrInterpolate(item)}</span></li>`);
            });
            _push2(`<!--]--></ul></div><div${_scopeId}><ul${_scopeId}><!--[-->`);
            ssrRenderList(unref(selectedPlan)?.benefits, (item) => {
              _push2(`<li class="${ssrRenderClass([unref(planColor), "flex items-center gap-2"])}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:check",
                class: "h-3 w-3 text-current"
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-muted-400"${_scopeId}>${ssrInterpolate(item)}</span></li>`);
            });
            _push2(`<!--]--></ul></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex gap-12" }, [
                createVNode(_component_TairoLogo, {
                  class: ["h-12 w-12 shrink-0", unref(planColor)]
                }, null, 8, ["class"]),
                createVNode("div", null, [
                  createVNode(_component_BaseText, {
                    size: "md",
                    lead: "tight",
                    weight: "semibold"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("$" + toDisplayString(unref(selectedPlan)?.price.monthly) + " ", 1),
                      createVNode("span", { class: "text-muted-400 font-normal" }, "/per month")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseText, {
                    size: "xs",
                    lead: "tight",
                    class: ["mb-2", unref(planColor)]
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Billed $" + toDisplayString(unref(selectedPlan)?.price.yearly) + " yearly", 1)
                    ]),
                    _: 1
                  }, 8, ["class"]),
                  createVNode(_component_BaseParagraph, {
                    size: "xs",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(selectedPlan)?.description), 1)
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "my-4" }, [
                createVNode(_component_BaseParagraph, {
                  size: "sm",
                  lead: "tight",
                  class: "text-muted-500 dark:text-muted-400"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Tairo has incredible features and each plan perfectly adapts to your company, wether it is a small business or a bigger one. Tairo can also scale smoothly with you, as your business grows. ")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "grid grid-cols-2 gap-6 font-sans text-xs" }, [
                createVNode("div", null, [
                  createVNode("ul", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(selectedPlan)?.features, (item) => {
                      return openBlock(), createBlock("li", {
                        key: item,
                        class: ["flex items-center gap-2", unref(planColor)]
                      }, [
                        createVNode(_component_Icon, {
                          name: "lucide:check",
                          class: "h-3 w-3 text-current"
                        }),
                        createVNode("span", { class: "text-muted-400" }, toDisplayString(item), 1)
                      ], 2);
                    }), 128))
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("ul", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(selectedPlan)?.benefits, (item) => {
                      return openBlock(), createBlock("li", {
                        key: item,
                        class: ["flex items-center gap-2", unref(planColor)]
                      }, [
                        createVNode(_component_Icon, {
                          name: "lucide:check",
                          class: "h-3 w-3 text-current"
                        }),
                        createVNode("span", { class: "text-muted-400" }, toDisplayString(item), 1)
                      ], 2);
                    }), 128))
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="grid grid-cols-12 gap-6"><div class="ltablet:col-span-7 col-span-12 sm:col-span-6 lg:col-span-7"><div class="flex flex-col gap-6">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "semibold"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Used seats `);
                } else {
                  return [
                    createTextVNode(" Used seats ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              lead: "tight",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`6/8 remaining`);
                } else {
                  return [
                    createTextVNode("6/8 remaining")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="xs:flex-wrap ptablet:flex-wrap ltablet:justify-between flex items-center gap-2 lg:justify-between"${_scopeId}><div class="xs:flex-wrap ptablet:flex-wrap flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              src: "/img/avatars/2.svg",
              size: "sm",
              "data-nui-tooltip": "Maya R."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              src: "/img/avatars/10.svg",
              size: "sm",
              "data-nui-tooltip": "Kendra W."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              size: "sm",
              text: "OD",
              "data-nui-tooltip": "Oliver D.",
              class: ("getRandomColor" in _ctx ? _ctx.getRandomColor : unref(getRandomColor))()
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              src: "/img/avatars/16.svg",
              size: "sm",
              "data-nui-tooltip": "Hermann M."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              size: "sm",
              text: "MC",
              "data-nui-tooltip": "Matteus C.",
              class: ("getRandomColor" in _ctx ? _ctx.getRandomColor : unref(getRandomColor))()
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              size: "sm",
              text: "GM",
              "data-nui-tooltip": "Gorav M.",
              class: ("getRandomColor" in _ctx ? _ctx.getRandomColor : unref(getRandomColor))()
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><button type="button" class="border-muted-200 dark:border-muted-700 hover:border-primary-500 dark:hover:border-primary-500 text-muted-400 dark:text-muted-600 hover:text-primary-500 dark:hover:text-primary-500 h-10 w-10 rounded-full border-2 border-dashed transition-all duration-300 hover:border-solid" data-nui-tooltip="Manage plan seats"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:edit-3",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(`</button></div></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-4 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "sm",
                  weight: "semibold"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Used seats ")
                  ]),
                  _: 1
                }),
                createVNode("div", null, [
                  createVNode(_component_BaseText, {
                    size: "xs",
                    lead: "tight",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("6/8 remaining")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "xs:flex-wrap ptablet:flex-wrap ltablet:justify-between flex items-center gap-2 lg:justify-between" }, [
                createVNode("div", { class: "xs:flex-wrap ptablet:flex-wrap flex items-center gap-2" }, [
                  createVNode(_component_BaseAvatar, {
                    src: "/img/avatars/2.svg",
                    size: "sm",
                    "data-nui-tooltip": "Maya R."
                  }),
                  createVNode(_component_BaseAvatar, {
                    src: "/img/avatars/10.svg",
                    size: "sm",
                    "data-nui-tooltip": "Kendra W."
                  }),
                  createVNode(_component_BaseAvatar, {
                    size: "sm",
                    text: "OD",
                    "data-nui-tooltip": "Oliver D.",
                    class: ("getRandomColor" in _ctx ? _ctx.getRandomColor : unref(getRandomColor))()
                  }, null, 8, ["class"]),
                  createVNode(_component_BaseAvatar, {
                    src: "/img/avatars/16.svg",
                    size: "sm",
                    "data-nui-tooltip": "Hermann M."
                  }),
                  createVNode(_component_BaseAvatar, {
                    size: "sm",
                    text: "MC",
                    "data-nui-tooltip": "Matteus C.",
                    class: ("getRandomColor" in _ctx ? _ctx.getRandomColor : unref(getRandomColor))()
                  }, null, 8, ["class"]),
                  createVNode(_component_BaseAvatar, {
                    size: "sm",
                    text: "GM",
                    "data-nui-tooltip": "Gorav M.",
                    class: ("getRandomColor" in _ctx ? _ctx.getRandomColor : unref(getRandomColor))()
                  }, null, 8, ["class"])
                ]),
                createVNode("div", null, [
                  createVNode("button", {
                    type: "button",
                    class: "border-muted-200 dark:border-muted-700 hover:border-primary-500 dark:hover:border-primary-500 text-muted-400 dark:text-muted-600 hover:text-primary-500 dark:hover:text-primary-500 h-10 w-10 rounded-full border-2 border-dashed transition-all duration-300 hover:border-solid",
                    "data-nui-tooltip": "Manage plan seats"
                  }, [
                    createVNode(_component_Icon, {
                      name: "lucide:edit-3",
                      class: "h-4 w-4"
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-8 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "semibold"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Billing options `);
                } else {
                  return [
                    createTextVNode(" Billing options ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              lead: "tight",
              class: "text-muted-400"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="space-y-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseSwitchBall, {
              id: "billing-ball-1",
              "model-value": false,
              label: "Invoicing",
              sublabel: "Send new invoices to my inbox",
              color: "primary"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseSwitchBall, {
              id: "billing-ball-2",
              "model-value": true,
              label: "Warnings",
              sublabel: "Warn me before the end of the billing period",
              color: "primary"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseSwitchBall, {
              id: "billing-ball-3",
              "model-value": true,
              label: "Reports",
              sublabel: "Send monthly reports to my inbox",
              color: "primary"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mb-8 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "sm",
                  weight: "semibold"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Billing options ")
                  ]),
                  _: 1
                }),
                createVNode("div", null, [
                  createVNode(_component_BaseText, {
                    size: "xs",
                    lead: "tight",
                    class: "text-muted-400"
                  })
                ])
              ]),
              createVNode("div", { class: "space-y-6" }, [
                createVNode(_component_BaseSwitchBall, {
                  id: "billing-ball-1",
                  "model-value": false,
                  label: "Invoicing",
                  sublabel: "Send new invoices to my inbox",
                  color: "primary"
                }),
                createVNode(_component_BaseSwitchBall, {
                  id: "billing-ball-2",
                  "model-value": true,
                  label: "Warnings",
                  sublabel: "Warn me before the end of the billing period",
                  color: "primary"
                }),
                createVNode(_component_BaseSwitchBall, {
                  id: "billing-ball-3",
                  "model-value": true,
                  label: "Reports",
                  sublabel: "Send monthly reports to my inbox",
                  color: "primary"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-8 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "semibold"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Billing cycle `);
                } else {
                  return [
                    createTextVNode(" Billing cycle ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, { class: "text-primary-500 font-sans text-xs underline underline-offset-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`My invoices`);
                } else {
                  return [
                    createTextVNode("My invoices")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="flex items-center gap-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseRadio, {
              id: "demo-cycle-1",
              modelValue: unref(billingCycles),
              "onUpdate:modelValue": ($event) => isRef(billingCycles) ? billingCycles.value = $event : null,
              name: "monthly_billing",
              label: "Monthly",
              value: "monthly",
              color: "primary"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseRadio, {
              id: "demo-cycle-2",
              modelValue: unref(billingCycles),
              "onUpdate:modelValue": ($event) => isRef(billingCycles) ? billingCycles.value = $event : null,
              name: "semestral_billing",
              label: "Semestral",
              value: "semestral",
              color: "primary"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseRadio, {
              id: "demo-cycle-3",
              modelValue: unref(billingCycles),
              "onUpdate:modelValue": ($event) => isRef(billingCycles) ? billingCycles.value = $event : null,
              name: "yearly_billing",
              label: "Yearly",
              value: "yearly",
              color: "primary"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mb-8 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "sm",
                  weight: "semibold"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Billing cycle ")
                  ]),
                  _: 1
                }),
                createVNode("div", null, [
                  createVNode(_component_NuxtLink, { class: "text-primary-500 font-sans text-xs underline underline-offset-4" }, {
                    default: withCtx(() => [
                      createTextVNode("My invoices")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "flex items-center gap-6" }, [
                createVNode(_component_BaseRadio, {
                  id: "demo-cycle-1",
                  modelValue: unref(billingCycles),
                  "onUpdate:modelValue": ($event) => isRef(billingCycles) ? billingCycles.value = $event : null,
                  name: "monthly_billing",
                  label: "Monthly",
                  value: "monthly",
                  color: "primary"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_BaseRadio, {
                  id: "demo-cycle-2",
                  modelValue: unref(billingCycles),
                  "onUpdate:modelValue": ($event) => isRef(billingCycles) ? billingCycles.value = $event : null,
                  name: "semestral_billing",
                  label: "Semestral",
                  value: "semestral",
                  color: "primary"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_BaseRadio, {
                  id: "demo-cycle-3",
                  modelValue: unref(billingCycles),
                  "onUpdate:modelValue": ($event) => isRef(billingCycles) ? billingCycles.value = $event : null,
                  name: "yearly_billing",
                  label: "Yearly",
                  value: "yearly",
                  color: "primary"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="ltablet:col-span-5 col-span-12 sm:col-span-6 lg:col-span-5">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "semibold"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Payment information `);
                } else {
                  return [
                    createTextVNode(" Payment information ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_DemoCreditCardReal, {
              name: unref(cardInfo).name,
              number: unref(cardInfo).number,
              "expiry-month": unref(cardInfo).expiryMonth,
              "expiry-year": unref(cardInfo).expiryMonth,
              cvc: unref(cardInfo).cvc
            }, null, _parent2, _scopeId));
            _push2(`<div class="mt-5"${_scopeId}><form${_scopeId}><div class="grid grid-cols-12 gap-4"${_scopeId}><div class="col-span-12"${_scopeId}>`);
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
              label: "Exp. month"
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
            _push2(`</div></div></div></div></form></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-4" }, [
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "sm",
                  weight: "semibold"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Payment information ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_DemoCreditCardReal, {
                name: unref(cardInfo).name,
                number: unref(cardInfo).number,
                "expiry-month": unref(cardInfo).expiryMonth,
                "expiry-year": unref(cardInfo).expiryMonth,
                cvc: unref(cardInfo).cvc
              }, null, 8, ["name", "number", "expiry-month", "expiry-year", "cvc"]),
              createVNode("div", { class: "mt-5" }, [
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
                            label: "Exp. month"
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
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_TairoFormSave, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseButton, {
              type: "submit",
              color: "primary",
              class: "w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Save for</span><span class="font-semibold"${_scopeId2}>$${ssrInterpolate(unref(selectedPlan)?.price.monthly)}</span><span${_scopeId2}>/month</span>`);
                } else {
                  return [
                    createVNode("span", null, "Save for"),
                    createVNode("span", { class: "font-semibold" }, "$" + toDisplayString(unref(selectedPlan)?.price.monthly), 1),
                    createVNode("span", null, "/month")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseButton, {
                type: "submit",
                color: "primary",
                class: "w-full"
              }, {
                default: withCtx(() => [
                  createVNode("span", null, "Save for"),
                  createVNode("span", { class: "font-semibold" }, "$" + toDisplayString(unref(selectedPlan)?.price.monthly), 1),
                  createVNode("span", null, "/month")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/utility-billing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=utility-billing-1772b055.mjs.map
