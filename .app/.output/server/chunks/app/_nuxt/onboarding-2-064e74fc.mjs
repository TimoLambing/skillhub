import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { e as __nuxt_component_0$5, _ as _sfc_main$p, b as _sfc_main$o, j as _sfc_main$C, i as _sfc_main$D, f as __nuxt_component_2, d as _sfc_main$x } from '../server.mjs';
import __nuxt_component_0 from './TairoLogo-688db51d.mjs';
import { _ as _sfc_main$1 } from './BaseThemeToggle-8b5dbd48.mjs';
import { _ as _sfc_main$2 } from './BaseRadioHeadless-286f432f.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, createTextVNode, unref, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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
import './composables-f7cb2fae.mjs';

const _imports_0 = "" + publicAssetsURL("img/illustrations/onboarding/pricing-1.svg");
const _imports_1 = "" + publicAssetsURL("img/illustrations/onboarding/pricing-2.svg");
const _imports_2 = "" + publicAssetsURL("img/illustrations/onboarding/pricing-3.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "onboarding-2",
  __ssrInlineRender: true,
  setup(__props) {
    const pricingMode = ref("free");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_TairoLogo = __nuxt_component_0;
      const _component_BaseThemeToggle = _sfc_main$1;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseRadioHeadless = _sfc_main$2;
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseText = _sfc_main$D;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseButton = _sfc_main$x;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-muted-100 dark:bg-muted-900 min-h-screen" }, _attrs))}><div class="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-muted-400 hover:text-primary-500 dark:text-muted-700 dark:hover:text-primary-500 transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TairoLogo, { class: "h-10 w-10" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TairoLogo, { class: "h-10 w-10" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center gap-4">`);
      _push(ssrRenderComponent(_component_BaseThemeToggle, null, null, _parent));
      _push(`</div></div><form action="" method="POST" class="mx-auto max-w-7xl px-4"><div><div class="pt-8 text-center">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        tag: "h2",
        size: "3xl",
        weight: "medium",
        class: "mb-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Start your Free Trial `);
          } else {
            return [
              createTextVNode(" Start your Free Trial ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, { class: "text-muted-500 dark:text-muted-400 mb-8" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` We won&#39;t bill you before your 14-day free trial period ends. `);
          } else {
            return [
              createTextVNode(" We won't bill you before your 14-day free trial period ends. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div><div class="w-full"><div class="mx-auto w-full"><div class="w-full"><div class="mx-auto mb-8 grid max-w-4xl gap-6 sm:grid-cols-3">`);
      _push(ssrRenderComponent(_component_BaseRadioHeadless, {
        modelValue: unref(pricingMode),
        "onUpdate:modelValue": ($event) => isRef(pricingMode) ? pricingMode.value = $event : null,
        name: "radio_custom",
        value: "free"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCard, {
              shape: "curved",
              class: "peer-checked:!border-primary-500 relative border-2 p-8 opacity-60 grayscale peer-checked:opacity-100 peer-checked:grayscale-0 peer-checked:[&_.child]:!opacity-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col text-center"${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} alt="2 factor authentication with email" class="mx-auto mb-3 max-w-[160px]"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseHeading, {
                    size: "md",
                    weight: "medium"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Free`);
                      } else {
                        return [
                          createTextVNode("Free")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseParagraph, {
                    size: "xs",
                    lead: "snug",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Start for free with most of our features. Get familiar with it and upgrade when you are ready. `);
                      } else {
                        return [
                          createTextVNode(" Start for free with most of our features. Get familiar with it and upgrade when you are ready. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex items-center justify-center gap-2 pt-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>$0</span><span class="text-muted-400 text-xs"${_scopeId3}> /per month</span>`);
                      } else {
                        return [
                          createVNode("span", null, "$0"),
                          createVNode("span", { class: "text-muted-400 text-xs" }, " /per month")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div><div class="child absolute end-2 top-3 opacity-0"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:check-circle-duotone",
                    class: "text-primary-500 h-7 w-7"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col text-center" }, [
                      createVNode("img", {
                        src: _imports_0,
                        alt: "2 factor authentication with email",
                        class: "mx-auto mb-3 max-w-[160px]"
                      }),
                      createVNode(_component_BaseHeading, {
                        size: "md",
                        weight: "medium"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Free")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseParagraph, {
                        size: "xs",
                        lead: "snug",
                        class: "text-muted-500 dark:text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Start for free with most of our features. Get familiar with it and upgrade when you are ready. ")
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "flex items-center justify-center gap-2 pt-4" }, [
                        createVNode(_component_BaseText, null, {
                          default: withCtx(() => [
                            createVNode("span", null, "$0"),
                            createVNode("span", { class: "text-muted-400 text-xs" }, " /per month")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode("div", { class: "child absolute end-2 top-3 opacity-0" }, [
                      createVNode(_component_Icon, {
                        name: "ph:check-circle-duotone",
                        class: "text-primary-500 h-7 w-7"
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseCard, {
                shape: "curved",
                class: "peer-checked:!border-primary-500 relative border-2 p-8 opacity-60 grayscale peer-checked:opacity-100 peer-checked:grayscale-0 peer-checked:[&_.child]:!opacity-100"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col text-center" }, [
                    createVNode("img", {
                      src: _imports_0,
                      alt: "2 factor authentication with email",
                      class: "mx-auto mb-3 max-w-[160px]"
                    }),
                    createVNode(_component_BaseHeading, {
                      size: "md",
                      weight: "medium"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Free")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, {
                      size: "xs",
                      lead: "snug",
                      class: "text-muted-500 dark:text-muted-400"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Start for free with most of our features. Get familiar with it and upgrade when you are ready. ")
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex items-center justify-center gap-2 pt-4" }, [
                      createVNode(_component_BaseText, null, {
                        default: withCtx(() => [
                          createVNode("span", null, "$0"),
                          createVNode("span", { class: "text-muted-400 text-xs" }, " /per month")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode("div", { class: "child absolute end-2 top-3 opacity-0" }, [
                    createVNode(_component_Icon, {
                      name: "ph:check-circle-duotone",
                      class: "text-primary-500 h-7 w-7"
                    })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseRadioHeadless, {
        modelValue: unref(pricingMode),
        "onUpdate:modelValue": ($event) => isRef(pricingMode) ? pricingMode.value = $event : null,
        name: "radio_custom",
        value: "starter"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCard, {
              shape: "curved",
              class: "peer-checked:!border-primary-500 relative border-2 p-8 opacity-60 grayscale peer-checked:opacity-100 peer-checked:grayscale-0 peer-checked:[&_.child]:!opacity-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col text-center"${_scopeId2}><img${ssrRenderAttr("src", _imports_1)} alt="2 factor authentication with SMS" class="mx-auto mb-3 max-w-[160px]"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseHeading, {
                    size: "md",
                    weight: "medium"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Starter`);
                      } else {
                        return [
                          createTextVNode("Starter")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseParagraph, {
                    size: "xs",
                    lead: "snug",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` A more advanced plan with more features and additional storage. Perfect to scale your business. `);
                      } else {
                        return [
                          createTextVNode(" A more advanced plan with more features and additional storage. Perfect to scale your business. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex items-center justify-center gap-2 pt-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>$29</span><span class="text-muted-400 text-xs"${_scopeId3}> /per month</span>`);
                      } else {
                        return [
                          createVNode("span", null, "$29"),
                          createVNode("span", { class: "text-muted-400 text-xs" }, " /per month")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div><div class="child absolute end-2 top-3 opacity-0"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:check-circle-duotone",
                    class: "text-primary-500 h-7 w-7"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col text-center" }, [
                      createVNode("img", {
                        src: _imports_1,
                        alt: "2 factor authentication with SMS",
                        class: "mx-auto mb-3 max-w-[160px]"
                      }),
                      createVNode(_component_BaseHeading, {
                        size: "md",
                        weight: "medium"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Starter")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseParagraph, {
                        size: "xs",
                        lead: "snug",
                        class: "text-muted-500 dark:text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" A more advanced plan with more features and additional storage. Perfect to scale your business. ")
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "flex items-center justify-center gap-2 pt-4" }, [
                        createVNode(_component_BaseText, null, {
                          default: withCtx(() => [
                            createVNode("span", null, "$29"),
                            createVNode("span", { class: "text-muted-400 text-xs" }, " /per month")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode("div", { class: "child absolute end-2 top-3 opacity-0" }, [
                      createVNode(_component_Icon, {
                        name: "ph:check-circle-duotone",
                        class: "text-primary-500 h-7 w-7"
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseCard, {
                shape: "curved",
                class: "peer-checked:!border-primary-500 relative border-2 p-8 opacity-60 grayscale peer-checked:opacity-100 peer-checked:grayscale-0 peer-checked:[&_.child]:!opacity-100"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col text-center" }, [
                    createVNode("img", {
                      src: _imports_1,
                      alt: "2 factor authentication with SMS",
                      class: "mx-auto mb-3 max-w-[160px]"
                    }),
                    createVNode(_component_BaseHeading, {
                      size: "md",
                      weight: "medium"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Starter")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, {
                      size: "xs",
                      lead: "snug",
                      class: "text-muted-500 dark:text-muted-400"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" A more advanced plan with more features and additional storage. Perfect to scale your business. ")
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex items-center justify-center gap-2 pt-4" }, [
                      createVNode(_component_BaseText, null, {
                        default: withCtx(() => [
                          createVNode("span", null, "$29"),
                          createVNode("span", { class: "text-muted-400 text-xs" }, " /per month")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode("div", { class: "child absolute end-2 top-3 opacity-0" }, [
                    createVNode(_component_Icon, {
                      name: "ph:check-circle-duotone",
                      class: "text-primary-500 h-7 w-7"
                    })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseRadioHeadless, {
        modelValue: unref(pricingMode),
        "onUpdate:modelValue": ($event) => isRef(pricingMode) ? pricingMode.value = $event : null,
        name: "radio_custom",
        value: "business"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCard, {
              shape: "curved",
              class: "peer-checked:!border-primary-500 relative border-2 p-8 opacity-60 grayscale peer-checked:opacity-100 peer-checked:grayscale-0 peer-checked:[&_.child]:!opacity-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col text-center"${_scopeId2}><img${ssrRenderAttr("src", _imports_2)} alt="2 factor authentication with app" class="mx-auto mb-3 max-w-[160px]"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseHeading, {
                    size: "md",
                    weight: "medium"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Business`);
                      } else {
                        return [
                          createTextVNode("Business")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseParagraph, {
                    size: "xs",
                    lead: "snug",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` An all-in-one plan for your business, with everything you need. Perfect for growing at large scale. `);
                      } else {
                        return [
                          createTextVNode(" An all-in-one plan for your business, with everything you need. Perfect for growing at large scale. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex items-center justify-center gap-2 pt-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>$49</span><span class="text-muted-400 text-xs"${_scopeId3}> /per month</span>`);
                      } else {
                        return [
                          createVNode("span", null, "$49"),
                          createVNode("span", { class: "text-muted-400 text-xs" }, " /per month")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div><div class="child absolute end-2 top-3 opacity-0"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:check-circle-duotone",
                    class: "text-primary-500 h-7 w-7"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col text-center" }, [
                      createVNode("img", {
                        src: _imports_2,
                        alt: "2 factor authentication with app",
                        class: "mx-auto mb-3 max-w-[160px]"
                      }),
                      createVNode(_component_BaseHeading, {
                        size: "md",
                        weight: "medium"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Business")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseParagraph, {
                        size: "xs",
                        lead: "snug",
                        class: "text-muted-500 dark:text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" An all-in-one plan for your business, with everything you need. Perfect for growing at large scale. ")
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "flex items-center justify-center gap-2 pt-4" }, [
                        createVNode(_component_BaseText, null, {
                          default: withCtx(() => [
                            createVNode("span", null, "$49"),
                            createVNode("span", { class: "text-muted-400 text-xs" }, " /per month")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode("div", { class: "child absolute end-2 top-3 opacity-0" }, [
                      createVNode(_component_Icon, {
                        name: "ph:check-circle-duotone",
                        class: "text-primary-500 h-7 w-7"
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseCard, {
                shape: "curved",
                class: "peer-checked:!border-primary-500 relative border-2 p-8 opacity-60 grayscale peer-checked:opacity-100 peer-checked:grayscale-0 peer-checked:[&_.child]:!opacity-100"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col text-center" }, [
                    createVNode("img", {
                      src: _imports_2,
                      alt: "2 factor authentication with app",
                      class: "mx-auto mb-3 max-w-[160px]"
                    }),
                    createVNode(_component_BaseHeading, {
                      size: "md",
                      weight: "medium"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Business")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, {
                      size: "xs",
                      lead: "snug",
                      class: "text-muted-500 dark:text-muted-400"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" An all-in-one plan for your business, with everything you need. Perfect for growing at large scale. ")
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex items-center justify-center gap-2 pt-4" }, [
                      createVNode(_component_BaseText, null, {
                        default: withCtx(() => [
                          createVNode("span", null, "$49"),
                          createVNode("span", { class: "text-muted-400 text-xs" }, " /per month")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode("div", { class: "child absolute end-2 top-3 opacity-0" }, [
                    createVNode(_component_Icon, {
                      name: "ph:check-circle-duotone",
                      class: "text-primary-500 h-7 w-7"
                    })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mx-auto flex flex-col items-center">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        to: "/dashboards",
        type: "button",
        shape: "curved",
        class: "!h-12 w-48",
        color: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Confirm`);
          } else {
            return [
              createTextVNode("Confirm")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "text-muted-400 hover:text-primary-500 mt-4 text-xs font-medium underline-offset-4 transition-colors duration-300 hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Learn More`);
          } else {
            return [
              createTextVNode("Learn More")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></div></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/onboarding-2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=onboarding-2-064e74fc.mjs.map
