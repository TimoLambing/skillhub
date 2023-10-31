import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { e as __nuxt_component_0$5, _ as _sfc_main$p, b as _sfc_main$o, j as _sfc_main$C, f as __nuxt_component_2, d as _sfc_main$x, g as _sfc_main$z, i as _sfc_main$D } from '../server.mjs';
import __nuxt_component_0 from './TairoLogo-688db51d.mjs';
import { _ as _sfc_main$1 } from './BaseThemeToggle-8b5dbd48.mjs';
import { _ as _sfc_main$2 } from './BaseRadioHeadless-286f432f.mjs';
import { _ as _sfc_main$3 } from './BaseIconBox-642fe941.mjs';
import { _ as __nuxt_component_0$1 } from './TairoCheckAnimated-488ac0ca.mjs';
import { defineComponent, ref, computed, resolveDirective, mergeProps, withCtx, createVNode, unref, createTextVNode, isRef, openBlock, createBlock, createCommentVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrGetDirectiveProps } from 'vue/server-renderer';
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

const _imports_0 = "" + publicAssetsURL("img/illustrations/onboarding/2fa-web.svg");
const _imports_1 = "" + publicAssetsURL("img/illustrations/onboarding/2fa-sms.svg");
const _imports_2 = "" + publicAssetsURL("img/illustrations/onboarding/2fa-app.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "onboarding-1",
  __ssrInlineRender: true,
  setup(__props) {
    const loading = ref(false);
    const twoFaMode = ref("email_address");
    const currentStep = ref(1);
    const codeLength = ref(4);
    const input = ref([]);
    const inputElements = ref([]);
    const correctPin = ref("1234");
    ref(true);
    const email = ref("");
    const tel = ref("");
    const code = ref("");
    function goToStep(n) {
      loading.value = true;
      const timer = setTimeout(() => {
        loading.value = false;
        if (n < 1) {
          currentStep.value = 1;
        } else if (n > 3) {
          currentStep.value = 3;
        } else {
          currentStep.value = n;
        }
        clearTimeout(timer);
      }, 1e3);
    }
    const validatePin = computed(() => {
      return input.value.join("") == correctPin.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_TairoLogo = __nuxt_component_0;
      const _component_BaseThemeToggle = _sfc_main$1;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseRadioHeadless = _sfc_main$2;
      const _component_BaseCard = _sfc_main$C;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseButton = _sfc_main$x;
      const _component_BaseIconBox = _sfc_main$3;
      const _component_BaseInput = _sfc_main$z;
      const _component_BaseText = _sfc_main$D;
      const _component_TairoCheckAnimated = __nuxt_component_0$1;
      const _directive_focus = resolveDirective("focus");
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
      _push(`</div></div><form action="" method="POST" class="mx-auto max-w-7xl px-4">`);
      if (unref(currentStep) === 1) {
        _push(`<div><div class="pt-8 text-center">`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          tag: "h2",
          size: "3xl",
          weight: "medium",
          class: "mb-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Welcome to Tairo \u{1F44B} `);
            } else {
              return [
                createTextVNode(" Welcome to Tairo \u{1F44B} ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, { class: "text-muted-500 dark:text-muted-400 mb-8" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Select an option to enable 2 factor authentication `);
            } else {
              return [
                createTextVNode(" Select an option to enable 2 factor authentication ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div><div class="w-full"><div class="mx-auto w-full"><div class="w-full"><div class="mx-auto mb-8 grid max-w-4xl gap-6 sm:grid-cols-3">`);
        _push(ssrRenderComponent(_component_BaseRadioHeadless, {
          modelValue: unref(twoFaMode),
          "onUpdate:modelValue": ($event) => isRef(twoFaMode) ? twoFaMode.value = $event : null,
          name: "radio_custom",
          value: "email_address"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseCard, {
                shape: "curved",
                class: "peer-checked:!border-primary-500 relative border-2 p-8 opacity-60 grayscale peer-checked:opacity-100 peer-checked:grayscale-0 peer-checked:[&_.child]:!opacity-100"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex flex-col text-center"${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} alt="2 factor authentication with email" class="mx-auto max-w-[160px]"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BaseHeading, {
                      size: "md",
                      weight: "medium"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`With Email`);
                        } else {
                          return [
                            createTextVNode("With Email")
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
                          _push4(` We will send you a confirmation code to your email address `);
                        } else {
                          return [
                            createTextVNode(" We will send you a confirmation code to your email address ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="child absolute end-2 top-3 opacity-0"${_scopeId2}>`);
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
                          class: "mx-auto max-w-[160px]"
                        }),
                        createVNode(_component_BaseHeading, {
                          size: "md",
                          weight: "medium"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("With Email")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseParagraph, {
                          size: "xs",
                          lead: "snug",
                          class: "text-muted-500 dark:text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" We will send you a confirmation code to your email address ")
                          ]),
                          _: 1
                        })
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
                        class: "mx-auto max-w-[160px]"
                      }),
                      createVNode(_component_BaseHeading, {
                        size: "md",
                        weight: "medium"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("With Email")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseParagraph, {
                        size: "xs",
                        lead: "snug",
                        class: "text-muted-500 dark:text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" We will send you a confirmation code to your email address ")
                        ]),
                        _: 1
                      })
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
          modelValue: unref(twoFaMode),
          "onUpdate:modelValue": ($event) => isRef(twoFaMode) ? twoFaMode.value = $event : null,
          name: "radio_custom",
          value: "phone_number"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseCard, {
                shape: "curved",
                class: "peer-checked:!border-primary-500 relative border-2 p-8 opacity-60 grayscale peer-checked:opacity-100 peer-checked:grayscale-0 peer-checked:[&_.child]:!opacity-100"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex flex-col text-center"${_scopeId2}><img${ssrRenderAttr("src", _imports_1)} alt="2 factor authentication with SMS" class="mx-auto max-w-[160px]"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BaseHeading, {
                      size: "md",
                      weight: "medium"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`With SMS`);
                        } else {
                          return [
                            createTextVNode("With SMS")
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
                          _push4(` We will send you an SMS with the code on your mobile phone `);
                        } else {
                          return [
                            createTextVNode(" We will send you an SMS with the code on your mobile phone ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="child absolute end-2 top-3 opacity-0"${_scopeId2}>`);
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
                          class: "mx-auto max-w-[160px]"
                        }),
                        createVNode(_component_BaseHeading, {
                          size: "md",
                          weight: "medium"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("With SMS")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseParagraph, {
                          size: "xs",
                          lead: "snug",
                          class: "text-muted-500 dark:text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" We will send you an SMS with the code on your mobile phone ")
                          ]),
                          _: 1
                        })
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
                        class: "mx-auto max-w-[160px]"
                      }),
                      createVNode(_component_BaseHeading, {
                        size: "md",
                        weight: "medium"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("With SMS")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseParagraph, {
                        size: "xs",
                        lead: "snug",
                        class: "text-muted-500 dark:text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" We will send you an SMS with the code on your mobile phone ")
                        ]),
                        _: 1
                      })
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
          modelValue: unref(twoFaMode),
          "onUpdate:modelValue": ($event) => isRef(twoFaMode) ? twoFaMode.value = $event : null,
          name: "radio_custom",
          value: "app_id"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseCard, {
                shape: "curved",
                class: "peer-checked:!border-primary-500 relative border-2 p-8 opacity-60 grayscale peer-checked:opacity-100 peer-checked:grayscale-0 peer-checked:[&_.child]:!opacity-100"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex flex-col text-center"${_scopeId2}><img${ssrRenderAttr("src", _imports_2)} alt="2 factor authentication with app" class="mx-auto max-w-[160px]"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BaseHeading, {
                      size: "md",
                      weight: "medium"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`With an App`);
                        } else {
                          return [
                            createTextVNode("With an App")
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
                          _push4(` We will send you the code on your `);
                          _push4(ssrRenderComponent(_component_NuxtLink, {
                            to: "https://authy.com/",
                            class: "text-primary-500 underline-offset-4 hover:underline"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Authy`);
                              } else {
                                return [
                                  createTextVNode("Authy")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(` authenticator app `);
                        } else {
                          return [
                            createTextVNode(" We will send you the code on your "),
                            createVNode(_component_NuxtLink, {
                              to: "https://authy.com/",
                              class: "text-primary-500 underline-offset-4 hover:underline"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Authy")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" authenticator app ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="child absolute end-2 top-3 opacity-0"${_scopeId2}>`);
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
                          class: "mx-auto max-w-[160px]"
                        }),
                        createVNode(_component_BaseHeading, {
                          size: "md",
                          weight: "medium"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("With an App")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseParagraph, {
                          size: "xs",
                          lead: "snug",
                          class: "text-muted-500 dark:text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" We will send you the code on your "),
                            createVNode(_component_NuxtLink, {
                              to: "https://authy.com/",
                              class: "text-primary-500 underline-offset-4 hover:underline"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Authy")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" authenticator app ")
                          ]),
                          _: 1
                        })
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
                        class: "mx-auto max-w-[160px]"
                      }),
                      createVNode(_component_BaseHeading, {
                        size: "md",
                        weight: "medium"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("With an App")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseParagraph, {
                        size: "xs",
                        lead: "snug",
                        class: "text-muted-500 dark:text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" We will send you the code on your "),
                          createVNode(_component_NuxtLink, {
                            to: "https://authy.com/",
                            class: "text-primary-500 underline-offset-4 hover:underline"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Authy")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" authenticator app ")
                        ]),
                        _: 1
                      })
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
          type: "button",
          shape: "curved",
          class: "!h-12 w-48",
          color: "primary",
          loading: unref(loading),
          onClick: ($event) => goToStep(2)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Continue`);
            } else {
              return [
                createTextVNode("Continue")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/dashboards",
          class: "text-muted-400 hover:text-primary-500 mt-4 text-xs font-medium underline-offset-4 transition-colors duration-300 hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`No thanks, I want to skip`);
            } else {
              return [
                createTextVNode("No thanks, I want to skip")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(currentStep) === 2) {
        _push(`<div class="w-full"><div class="flex h-full w-full flex-col"><div class="pointer-events-none flex w-full items-center justify-center pt-8">`);
        _push(ssrRenderComponent(_component_BaseIconBox, {
          color: "primary",
          size: "lg",
          shape: "full",
          class: "mx-auto"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(twoFaMode) === "email_address") {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "ph:envelope-duotone",
                  class: "text-primary-500 mx-auto h-8 w-8"
                }, null, _parent2, _scopeId));
              } else if (unref(twoFaMode) === "phone_number") {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "ph:device-mobile-speaker-duotone",
                  class: "text-primary-500 mx-auto h-8 w-8"
                }, null, _parent2, _scopeId));
              } else if (unref(twoFaMode) === "app_id") {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "ph:fingerprint-duotone",
                  class: "text-primary-500 mx-auto h-8 w-8"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                unref(twoFaMode) === "email_address" ? (openBlock(), createBlock(_component_Icon, {
                  key: 0,
                  name: "ph:envelope-duotone",
                  class: "text-primary-500 mx-auto h-8 w-8"
                })) : unref(twoFaMode) === "phone_number" ? (openBlock(), createBlock(_component_Icon, {
                  key: 1,
                  name: "ph:device-mobile-speaker-duotone",
                  class: "text-primary-500 mx-auto h-8 w-8"
                })) : unref(twoFaMode) === "app_id" ? (openBlock(), createBlock(_component_Icon, {
                  key: 2,
                  name: "ph:fingerprint-duotone",
                  class: "text-primary-500 mx-auto h-8 w-8"
                })) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="pt-4 text-center">`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          tag: "h2",
          size: "3xl",
          weight: "medium",
          class: "mb-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Enter your ${ssrInterpolate(unref(twoFaMode).split("_").join(" "))}`);
            } else {
              return [
                createTextVNode(" Enter your " + toDisplayString(unref(twoFaMode).split("_").join(" ")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, { class: "text-muted-500 dark:text-muted-400" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Enter the required information to continue `);
            } else {
              return [
                createTextVNode(" Enter the required information to continue ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="mx-auto w-full max-w-sm py-6">`);
        if (unref(twoFaMode) === "email_address") {
          _push(ssrRenderComponent(_component_BaseInput, {
            modelValue: unref(email),
            "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
            icon: "ph:envelope-duotone",
            shape: "curved",
            placeholder: "Ex: johndoe@gmail.com",
            classes: {
              wrapper: "w-full",
              input: "!h-12 !ps-12",
              icon: "!h-12 !w-12"
            }
          }, null, _parent));
        } else if (unref(twoFaMode) === "phone_number") {
          _push(ssrRenderComponent(_component_BaseInput, {
            modelValue: unref(tel),
            "onUpdate:modelValue": ($event) => isRef(tel) ? tel.value = $event : null,
            icon: "ph:device-mobile-speaker-duotone",
            shape: "curved",
            placeholder: "Ex: +15554815659",
            classes: {
              wrapper: "w-full",
              input: "!h-12 !ps-12",
              icon: "!h-12 !w-12"
            }
          }, null, _parent));
        } else if (unref(twoFaMode) === "app_id") {
          _push(`<div class="space-y-4"><div class="flex items-center gap-2">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "logos:authy",
            class: "h-6 w-6"
          }, null, _parent));
          _push(`<div>`);
          _push(ssrRenderComponent(_component_BaseText, {
            size: "sm",
            class: "text-muted-500 dark:text-muted-400"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Only `);
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: "https://authy.com/",
                  class: "text-primary-500 underline-offset-4 hover:underline"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`Authy`);
                    } else {
                      return [
                        createTextVNode("Authy")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(` is supported so far`);
              } else {
                return [
                  createTextVNode("Only "),
                  createVNode(_component_NuxtLink, {
                    to: "https://authy.com/",
                    class: "text-primary-500 underline-offset-4 hover:underline"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Authy")
                    ]),
                    _: 1
                  }),
                  createTextVNode(" is supported so far")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div></div>`);
          _push(ssrRenderComponent(_component_BaseInput, {
            modelValue: unref(code),
            "onUpdate:modelValue": ($event) => isRef(code) ? code.value = $event : null,
            icon: "ph:fingerprint-duotone",
            shape: "curved",
            placeholder: "Ex: efcdwdeg16jei85",
            classes: {
              wrapper: "w-full",
              input: "!h-12 !ps-12",
              icon: "!h-12 !w-12"
            }
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="mx-auto flex flex-col items-center">`);
        _push(ssrRenderComponent(_component_BaseButton, {
          type: "button",
          shape: "curved",
          class: "!h-12 w-48",
          color: "primary",
          loading: unref(loading),
          onClick: ($event) => goToStep(3)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Continue`);
            } else {
              return [
                createTextVNode("Continue")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<button type="button" class="text-muted-400 hover:text-primary-500 mt-4 text-xs font-medium underline-offset-4 transition-colors duration-300 hover:underline"> I want to change, take me back </button></div></div></div>`);
      } else if (unref(currentStep) === 3) {
        _push(`<div><div class="mx-auto max-w-4xl"><div class="flex h-full w-full flex-col"><div class="pointer-events-none flex w-full items-center justify-center pt-8"><div class="flex h-16 items-center justify-center">`);
        if (unref(validatePin)) {
          _push(ssrRenderComponent(_component_TairoCheckAnimated, { size: "sm" }, null, _parent));
        } else {
          _push(ssrRenderComponent(_component_BaseIconBox, {
            color: "primary",
            size: "lg",
            shape: "full",
            class: "mx-auto"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "ph:lock-duotone",
                  class: "text-primary-500 mx-auto h-8 w-8"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: "ph:lock-duotone",
                    class: "text-primary-500 mx-auto h-8 w-8"
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
        }
        _push(`</div></div><div class="pt-4 text-center">`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          tag: "h2",
          size: "3xl",
          weight: "medium",
          class: "mb-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Enter your code `);
            } else {
              return [
                createTextVNode(" Enter your code ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, { class: "text-muted-500 dark:text-muted-400 mb-2" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Enter the pin code we&#39;ve just sent you `);
            } else {
              return [
                createTextVNode(" Enter the pin code we've just sent you ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseText, {
          size: "xs",
          lead: "snug",
          class: "text-muted-500 dark:text-muted-400 mb-8"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="block"${_scopeId}><span class="font-bold"${_scopeId}>1234</span> is the demo PIN. </span>`);
            } else {
              return [
                createVNode("span", { class: "block" }, [
                  createVNode("span", { class: "font-bold" }, "1234"),
                  createTextVNode(" is the demo PIN. ")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="text-muted-800 dark:text-muted-100 mx-auto flex h-60 w-72 flex-col rounded text-center"><div class="${ssrRenderClass([unref(validatePin) && "pointer-events-none", "flex w-full justify-center gap-3"])}"><!--[-->`);
        ssrRenderList(unref(codeLength), (i) => {
          _push(`<input${ssrRenderAttrs(mergeProps({
            type: "text",
            name: "pin" + i,
            key: "pin" + i,
            maxlength: "1",
            class: "dark:bg-muted-800 unselectable nui-focus inline w-16 select-none rounded-lg bg-white py-5 text-center text-4xl font-bold transition-all",
            value: unref(input)[i - 1] !== void 0 ? unref(input)[i - 1] : "-",
            ref_for: true,
            ref: (el) => {
              unref(inputElements)[i] = el;
            },
            placeholder: "0",
            disabled: unref(input).length < i - 1 || unref(validatePin)
          }, ssrGetDirectiveProps(_ctx, _directive_focus, i === 1)))}>`);
        });
        _push(`<!--]--></div><div class="mt-10">`);
        _push(ssrRenderComponent(_component_BaseButton, {
          to: "/dashboards",
          shape: "curved",
          class: "!h-12",
          color: unref(validatePin) ? "primary" : "default",
          disabled: !unref(validatePin)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Take me to Dashboard`);
            } else {
              return [
                createTextVNode("Take me to Dashboard")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="mt-8 flex items-center justify-between">`);
        _push(ssrRenderComponent(_component_BaseText, {
          size: "sm",
          class: "text-muted-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Didn&#39;t receive the code?`);
            } else {
              return [
                createTextVNode("Didn't receive the code?")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<button type="button" class="text-primary-500 font-sans text-sm underline-offset-4 hover:underline"> Send it again </button></div></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/onboarding-1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=onboarding-1-72c246ea.mjs.map
