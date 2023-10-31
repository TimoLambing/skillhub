import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { u as useRouter, a as useToaster, e as __nuxt_component_0$5, _ as _sfc_main$p, b as _sfc_main$o, j as _sfc_main$C, g as _sfc_main$z, d as _sfc_main$x, f as __nuxt_component_2 } from '../server.mjs';
import __nuxt_component_0 from './TairoLogo-688db51d.mjs';
import { _ as _sfc_main$1 } from './BaseThemeToggle-8b5dbd48.mjs';
import { _ as _sfc_main$2 } from './BaseCheckbox-45d3fdba.mjs';
import { defineComponent, computed, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './1-56f7fedc.mjs';
import { _ as _imports_2 } from './9-ba06bafc.mjs';
import { _ as _imports_3, a as _imports_1$1 } from './19-120f22ae.mjs';
import { _ as _imports_4, a as _imports_0$1 } from './12-1f1764e9.mjs';
import { _ as _imports_1, a as _imports_8 } from './24-127aeb1f.mjs';
import { _ as _imports_2$1 } from './3-e6d3708e.mjs';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm, Field } from 'vee-validate';
import { z } from 'zod';
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
import '@headlessui/vue';
import '@vue/shared';
import 'chroma-js';
import 'tailwindcss/colors.js';
import './composables-f7cb2fae.mjs';
import './IconCheck-b31ac5c7.mjs';

const _imports_5 = "" + publicAssetsURL("img/avatars/20.svg");
const _imports_7 = "" + publicAssetsURL("img/avatars/10.svg");
const _imports_11 = "" + publicAssetsURL("img/avatars/5.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "signup-3",
  __ssrInlineRender: true,
  setup(__props) {
    const VALIDATION_TEXT = {
      EMAIL_REQUIRED: "A valid email is required",
      PASSWORD_LENGTH: "Password must be at least 8 characters",
      PASSWORD_CONTAINS_EMAIL: "Password cannot contain your email",
      PASSWORD_MATCH: "Passwords do not match"
    };
    const zodSchema = z.object({
      email: z.string().email(VALIDATION_TEXT.EMAIL_REQUIRED),
      password: z.string().min(8, VALIDATION_TEXT.PASSWORD_LENGTH),
      confirmPassword: z.string()
    }).superRefine((data, ctx) => {
      if (data.password.includes(data.email)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.PASSWORD_CONTAINS_EMAIL,
          path: ["password"]
        });
      }
      if (data.password !== data.confirmPassword) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.PASSWORD_MATCH,
          path: ["confirmPassword"]
        });
      }
    });
    const validationSchema = toTypedSchema(zodSchema);
    const initialValues = computed(() => ({
      email: "",
      password: "",
      confirmPassword: ""
    }));
    const { handleSubmit, isSubmitting } = useForm({
      validationSchema,
      initialValues
    });
    const router = useRouter();
    const toaster = useToaster();
    handleSubmit(async (values) => {
      console.log("auth-success", values);
      try {
        await new Promise((resolve) => setTimeout(resolve, 4e3));
        toaster.clearAll();
        toaster.show({
          title: "Success",
          message: `Account created!`,
          color: "success",
          icon: "ph:user-circle-fill",
          closable: true
        });
      } catch (error) {
        return;
      }
      router.push("/layouts/onboarding-1");
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_TairoLogo = __nuxt_component_0;
      const _component_BaseThemeToggle = _sfc_main$1;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseInput = _sfc_main$z;
      const _component_BaseCheckbox = _sfc_main$2;
      const _component_BaseButton = _sfc_main$x;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-hidden px-4" }, _attrs))}><div class="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">`);
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
      _push(`<div>`);
      _push(ssrRenderComponent(_component_BaseThemeToggle, null, null, _parent));
      _push(`</div></div><div class="flex w-full items-center justify-center"><div class="relative mx-auto w-full max-w-2xl"><img class="ltablet:block absolute start-0 top-[30%] hidden h-12 w-12 rounded-full object-cover duration-[cubic-bezier(0.86,0,0.07,1)] lg:block"${ssrRenderAttr("src", _imports_0)} alt="Avatar" width="48" height="48"><img class="ltablet:block absolute -start-[25%] top-[40%] hidden h-16 w-16 rounded-full object-cover lg:block"${ssrRenderAttr("src", _imports_2)} alt="Avatar" width="64" height="64"><img class="ltablet:block absolute -start-[5%] top-[52%] hidden h-16 w-16 rounded-full object-cover lg:block"${ssrRenderAttr("src", _imports_3)} alt="Avatar" width="64" height="64"><img class="ltablet:block absolute -start-[35%] top-[65%] hidden h-24 w-24 rounded-full object-cover lg:block"${ssrRenderAttr("src", _imports_4)} alt="Avatar" width="96" height="96"><img class="ltablet:block absolute -start-[35%] top-[20%] hidden h-10 w-10 rounded-full object-cover lg:block"${ssrRenderAttr("src", _imports_0$1)} alt="Avatar" width="40" height="40"><img class="ltablet:block absolute -start-[55%] top-[40%] hidden h-20 w-20 rounded-full object-cover lg:block"${ssrRenderAttr("src", _imports_5)} alt="Avatar" width="80" height="80"><img class="ltablet:block absolute end-0 top-[30%] hidden h-12 w-12 rounded-full object-cover lg:block"${ssrRenderAttr("src", _imports_1)} alt="Avatar" width="48" height="48"><img class="ltablet:block absolute -end-[25%] top-[40%] hidden h-16 w-16 rounded-full object-cover lg:block"${ssrRenderAttr("src", _imports_7)} alt="Avatar" width="64" height="64"><img class="ltablet:block absolute -end-[5%] top-[52%] hidden h-16 w-16 rounded-full object-cover lg:block"${ssrRenderAttr("src", _imports_1$1)} alt="Avatar" width="64" height="64"><img class="ltablet:block absolute -end-[35%] top-[65%] hidden h-24 w-24 rounded-full object-cover lg:block"${ssrRenderAttr("src", _imports_8)} alt="Avatar" width="96" height="96"><img class="ltablet:block absolute -end-[35%] top-[20%] hidden h-10 w-10 rounded-full object-cover lg:block"${ssrRenderAttr("src", _imports_2$1)} alt="Avatar" width="40" height="40"><img class="ltablet:block absolute -end-[55%] top-[40%] hidden h-20 w-20 rounded-full object-cover lg:block"${ssrRenderAttr("src", _imports_11)} alt="Avatar" width="80" height="80"><div class="me-auto ms-auto mt-4 w-full"><form method="POST" action="" class="me-auto ms-auto mt-4 w-full max-w-md" novalidate><div class="text-center">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "3xl",
        weight: "medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Welcome to Tairo `);
          } else {
            return [
              createTextVNode(" Welcome to Tairo ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "sm",
        class: "text-muted-400 mb-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Let&#39;s start by creating you account `);
          } else {
            return [
              createTextVNode(" Let's start by creating you account ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-8" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4 space-y-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "email" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    type: "email",
                    label: "Email address",
                    placeholder: "ex: maya@cssninja.io",
                    icon: "lucide:mail",
                    classes: {
                      input: "h-12 !ps-12",
                      icon: "h-12 w-12"
                    },
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseInput, {
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      type: "email",
                      label: "Email address",
                      placeholder: "ex: maya@cssninja.io",
                      icon: "lucide:mail",
                      classes: {
                        input: "h-12 !ps-12",
                        icon: "h-12 w-12"
                      },
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Field), { name: "password" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    type: "password",
                    label: "Password",
                    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                    icon: "lucide:lock",
                    classes: {
                      input: "h-12 !ps-12",
                      icon: "h-12 w-12"
                    },
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseInput, {
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      type: "password",
                      label: "Password",
                      placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                      icon: "lucide:lock",
                      classes: {
                        input: "h-12 !ps-12",
                        icon: "h-12 w-12"
                      },
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Field), { name: "confirmPassword" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    type: "password",
                    label: "Confirm Password",
                    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                    icon: "lucide:lock",
                    classes: {
                      input: "h-12 !ps-12",
                      icon: "h-12 w-12"
                    },
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseInput, {
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      type: "password",
                      label: "Confirm Password",
                      placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                      icon: "lucide:lock",
                      classes: {
                        input: "h-12 !ps-12",
                        icon: "h-12 w-12"
                      },
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mb-6"${_scopeId}><div class="mt-6 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "terms" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseCheckbox, {
                    "model-value": field.value,
                    disabled: unref(isSubmitting),
                    error: errorMessage,
                    shape: "rounded",
                    color: "primary",
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}><span${_scopeId3}>I accept the</span><a href="#" class="text-primary-500 hover:underline focus:underline"${_scopeId3}> Terms of Service </a></span>`);
                      } else {
                        return [
                          createVNode("span", null, [
                            createVNode("span", null, "I accept the"),
                            createVNode("a", {
                              href: "#",
                              class: "text-primary-500 hover:underline focus:underline"
                            }, " Terms of Service ")
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseCheckbox, {
                      "model-value": field.value,
                      disabled: unref(isSubmitting),
                      error: errorMessage,
                      shape: "rounded",
                      color: "primary",
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, [
                          createVNode("span", null, "I accept the"),
                          createVNode("a", {
                            href: "#",
                            class: "text-primary-500 hover:underline focus:underline"
                          }, " Terms of Service ")
                        ])
                      ]),
                      _: 2
                    }, 1032, ["model-value", "disabled", "error", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              disabled: unref(isSubmitting),
              loading: unref(isSubmitting),
              type: "submit",
              color: "primary",
              class: "!h-12 w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Sign Up `);
                } else {
                  return [
                    createTextVNode(" Sign Up ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mb-6 grid gap-0 sm:grid-cols-3"${_scopeId}><hr class="border-muted-200 dark:border-muted-700 mt-3 hidden border-t sm:block"${_scopeId}><span class="dark:bg-muted-800 text-muted-400 relative top-0.5 bg-white text-center font-sans text-sm"${_scopeId}> Or continue with </span><hr class="border-muted-200 dark:border-muted-700 mt-3 hidden border-t sm:block"${_scopeId}></div><div class="grid grid-cols-3 gap-2"${_scopeId}><button type="button" class="bg-muted-200 dark:bg-muted-700 hover:bg-muted-100 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 relative inline-flex w-full items-center justify-center rounded px-0 py-3 text-center text-sm font-semibold shadow-sm transition-all duration-300"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "fa6-brands:google",
              class: "h-5 w-5"
            }, null, _parent2, _scopeId));
            _push2(`</button><button type="button" class="bg-muted-200 dark:bg-muted-700 hover:bg-muted-100 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 relative inline-flex w-full items-center justify-center rounded px-0 py-3 text-center text-sm font-semibold shadow-sm transition-all duration-300"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "fa6-brands:twitter",
              class: "h-5 w-5"
            }, null, _parent2, _scopeId));
            _push2(`</button><button type="button" class="bg-muted-200 dark:bg-muted-700 hover:bg-muted-100 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 relative inline-flex w-full items-center justify-center rounded px-0 py-3 text-center text-sm font-semibold shadow-sm transition-all duration-300"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "fa6-brands:linkedin-in",
              class: "h-5 w-5"
            }, null, _parent2, _scopeId));
            _push2(`</button></div><p class="text-muted-400 mt-4 flex justify-between font-sans text-sm leading-5"${_scopeId}><span${_scopeId}>Already have an account?</span>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/auth/login-3",
              class: "text-primary-600 hover:text-primary-500 font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Sign in `);
                } else {
                  return [
                    createTextVNode(" Sign in ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</p>`);
          } else {
            return [
              createVNode("div", { class: "mb-4 space-y-4" }, [
                createVNode(unref(Field), { name: "email" }, {
                  default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                    createVNode(_component_BaseInput, {
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      type: "email",
                      label: "Email address",
                      placeholder: "ex: maya@cssninja.io",
                      icon: "lucide:mail",
                      classes: {
                        input: "h-12 !ps-12",
                        icon: "h-12 w-12"
                      },
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ]),
                  _: 1
                }),
                createVNode(unref(Field), { name: "password" }, {
                  default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                    createVNode(_component_BaseInput, {
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      type: "password",
                      label: "Password",
                      placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                      icon: "lucide:lock",
                      classes: {
                        input: "h-12 !ps-12",
                        icon: "h-12 w-12"
                      },
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ]),
                  _: 1
                }),
                createVNode(unref(Field), { name: "confirmPassword" }, {
                  default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                    createVNode(_component_BaseInput, {
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      type: "password",
                      label: "Confirm Password",
                      placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                      icon: "lucide:lock",
                      classes: {
                        input: "h-12 !ps-12",
                        icon: "h-12 w-12"
                      },
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "mb-6" }, [
                createVNode("div", { class: "mt-6 flex items-center justify-between" }, [
                  createVNode(unref(Field), { name: "terms" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                      createVNode(_component_BaseCheckbox, {
                        "model-value": field.value,
                        disabled: unref(isSubmitting),
                        error: errorMessage,
                        shape: "rounded",
                        color: "primary",
                        "onUpdate:modelValue": handleChange,
                        onBlur: handleBlur
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, [
                            createVNode("span", null, "I accept the"),
                            createVNode("a", {
                              href: "#",
                              class: "text-primary-500 hover:underline focus:underline"
                            }, " Terms of Service ")
                          ])
                        ]),
                        _: 2
                      }, 1032, ["model-value", "disabled", "error", "onUpdate:modelValue", "onBlur"])
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "mb-6" }, [
                createVNode(_component_BaseButton, {
                  disabled: unref(isSubmitting),
                  loading: unref(isSubmitting),
                  type: "submit",
                  color: "primary",
                  class: "!h-12 w-full"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Sign Up ")
                  ]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ]),
              createVNode("div", { class: "mb-6 grid gap-0 sm:grid-cols-3" }, [
                createVNode("hr", { class: "border-muted-200 dark:border-muted-700 mt-3 hidden border-t sm:block" }),
                createVNode("span", { class: "dark:bg-muted-800 text-muted-400 relative top-0.5 bg-white text-center font-sans text-sm" }, " Or continue with "),
                createVNode("hr", { class: "border-muted-200 dark:border-muted-700 mt-3 hidden border-t sm:block" })
              ]),
              createVNode("div", { class: "grid grid-cols-3 gap-2" }, [
                createVNode("button", {
                  type: "button",
                  class: "bg-muted-200 dark:bg-muted-700 hover:bg-muted-100 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 relative inline-flex w-full items-center justify-center rounded px-0 py-3 text-center text-sm font-semibold shadow-sm transition-all duration-300"
                }, [
                  createVNode(_component_Icon, {
                    name: "fa6-brands:google",
                    class: "h-5 w-5"
                  })
                ]),
                createVNode("button", {
                  type: "button",
                  class: "bg-muted-200 dark:bg-muted-700 hover:bg-muted-100 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 relative inline-flex w-full items-center justify-center rounded px-0 py-3 text-center text-sm font-semibold shadow-sm transition-all duration-300"
                }, [
                  createVNode(_component_Icon, {
                    name: "fa6-brands:twitter",
                    class: "h-5 w-5"
                  })
                ]),
                createVNode("button", {
                  type: "button",
                  class: "bg-muted-200 dark:bg-muted-700 hover:bg-muted-100 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 relative inline-flex w-full items-center justify-center rounded px-0 py-3 text-center text-sm font-semibold shadow-sm transition-all duration-300"
                }, [
                  createVNode(_component_Icon, {
                    name: "fa6-brands:linkedin-in",
                    class: "h-5 w-5"
                  })
                ])
              ]),
              createVNode("p", { class: "text-muted-400 mt-4 flex justify-between font-sans text-sm leading-5" }, [
                createVNode("span", null, "Already have an account?"),
                createVNode(_component_NuxtLink, {
                  to: "/auth/login-3",
                  class: "text-primary-600 hover:text-primary-500 font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Sign in ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/signup-3.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=signup-3-23c65915.mjs.map
