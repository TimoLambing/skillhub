import { u as useRouter, a as useToaster, _ as _sfc_main$p, b as _sfc_main$o, d as _sfc_main$x, e as __nuxt_component_0$5, g as _sfc_main$z, i as _sfc_main$D } from '../server.mjs';
import __nuxt_component_0 from './TairoLogo-688db51d.mjs';
import { _ as _sfc_main$1 } from './BaseThemeToggle-8b5dbd48.mjs';
import { defineComponent, computed, mergeProps, withCtx, createTextVNode, createVNode, unref, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm, Field } from 'vee-validate';
import { z } from 'zod';
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
import '@headlessui/vue';
import '@vue/shared';
import 'chroma-js';
import 'tailwindcss/colors.js';
import './composables-f7cb2fae.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "signup-1",
  __ssrInlineRender: true,
  setup(__props) {
    const VALIDATION_TEXT = {
      EMAIL_REQUIRED: "A valid email is required",
      USERNAME_LENGTH: "Username must be at least 3 characters",
      PASSWORD_LENGTH: "Password must be at least 8 characters",
      PASSWORD_CONTAINS_EMAIL: "Password cannot contain your email",
      PASSWORD_MATCH: "Passwords do not match"
    };
    const zodSchema = z.object({
      username: z.string().min(3, VALIDATION_TEXT.USERNAME_LENGTH),
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
      username: "maya",
      email: "",
      password: "",
      confirmPassword: ""
    }));
    const { handleSubmit, isSubmitting, setFieldError } = useForm({
      validationSchema,
      initialValues
    });
    const router = useRouter();
    const toaster = useToaster();
    handleSubmit(async (values) => {
      console.log("auth-success", values);
      try {
        await new Promise((resolve, reject) => {
          if (values.username === "maya") {
            setTimeout(
              () => reject(new Error("Fake backend validation error")),
              2e3
            );
          }
          setTimeout(resolve, 4e3);
        });
        toaster.clearAll();
        toaster.show({
          title: "Success",
          message: `Account created for ${values.username}`,
          color: "success",
          icon: "ph:user-circle-fill",
          closable: true
        });
        router.push("/layouts/onboarding-1");
      } catch (error) {
        if (error.message === "Fake backend validation error") {
          setFieldError("username", "This username is already taken");
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseButton = _sfc_main$x;
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_TairoLogo = __nuxt_component_0;
      const _component_BaseThemeToggle = _sfc_main$1;
      const _component_BaseInput = _sfc_main$z;
      const _component_BaseText = _sfc_main$D;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen md:flex" }, _attrs))}><div class="from-primary-900 to-primary-500 i group relative hidden w-1/2 items-center justify-around overflow-hidden bg-gradient-to-tr md:flex"><div class="mx-auto max-w-xs text-center">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "3xl",
        weight: "medium",
        class: "text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Have an Account? `);
          } else {
            return [
              createTextVNode(" Have an Account? ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "sm",
        class: "text-muted-200 mb-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` No need to waste time on this page, let&#39;s take you back to your account `);
          } else {
            return [
              createTextVNode(" No need to waste time on this page, let's take you back to your account ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButton, {
        to: "/auth/login-1",
        shape: "curved",
        class: "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Login to Account`);
          } else {
            return [
              createTextVNode("Login to Account")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="bg-muted-200/20 absolute -start-6 -top-6 h-14 w-0 origin-top-left rotate-45 rounded-full transition-all delay-[25ms] duration-300 group-hover:w-72"></div><div class="bg-muted-200/20 absolute -top-12 start-20 h-14 w-0 origin-top-left rotate-45 rounded-full transition-all delay-75 duration-300 group-hover:w-48"></div><div class="bg-muted-200/20 absolute -start-7 top-24 h-14 w-0 origin-top-left rotate-45 rounded-full transition-all delay-150 duration-300 group-hover:w-40"></div><div class="bg-muted-200/20 absolute -bottom-6 -end-6 h-14 w-0 origin-bottom-right rotate-45 rounded-full transition-all delay-150 duration-300 group-hover:w-72"></div><div class="bg-muted-200/20 absolute -bottom-12 end-20 h-14 w-0 origin-bottom-right rotate-45 rounded-full transition-all delay-75 duration-300 group-hover:w-48"></div><div class="bg-muted-200/20 absolute -end-7 bottom-24 h-14 w-0 origin-bottom-right rotate-45 rounded-full transition-all delay-[25ms] duration-300 group-hover:w-40"></div></div><div class="dark:bg-muted-900 flex flex-col items-center justify-between bg-white py-10 md:w-1/2"><div class="mx-auto flex w-full max-w-xs items-center justify-between">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboards",
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
      _push(`</div></div><form method="POST" action="" class="mx-auto w-full max-w-xs" novalidate>`);
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
      _push(`<div class="mb-4 space-y-3">`);
      _push(ssrRenderComponent(unref(Field), { name: "username" }, {
        default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseInput, {
              "model-value": field.value,
              error: errorMessage,
              disabled: unref(isSubmitting),
              type: "text",
              shape: "curved",
              placeholder: "Username",
              icon: "ph:fingerprint-duotone",
              "onUpdate:modelValue": handleChange,
              onBlur: handleBlur
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseInput, {
                "model-value": field.value,
                error: errorMessage,
                disabled: unref(isSubmitting),
                type: "text",
                shape: "curved",
                placeholder: "Username",
                icon: "ph:fingerprint-duotone",
                "onUpdate:modelValue": handleChange,
                onBlur: handleBlur
              }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Field), { name: "email" }, {
        default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseInput, {
              "model-value": field.value,
              error: errorMessage,
              disabled: unref(isSubmitting),
              type: "email",
              shape: "curved",
              placeholder: "Email Address",
              icon: "ph:at-duotone",
              "onUpdate:modelValue": handleChange,
              onBlur: handleBlur
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseInput, {
                "model-value": field.value,
                error: errorMessage,
                disabled: unref(isSubmitting),
                type: "email",
                shape: "curved",
                placeholder: "Email Address",
                icon: "ph:at-duotone",
                "onUpdate:modelValue": handleChange,
                onBlur: handleBlur
              }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Field), { name: "password" }, {
        default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseInput, {
              "model-value": field.value,
              error: errorMessage,
              disabled: unref(isSubmitting),
              type: "password",
              shape: "curved",
              placeholder: "Password",
              icon: "ph:lock-duotone",
              "onUpdate:modelValue": handleChange,
              onBlur: handleBlur
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseInput, {
                "model-value": field.value,
                error: errorMessage,
                disabled: unref(isSubmitting),
                type: "password",
                shape: "curved",
                placeholder: "Password",
                icon: "ph:lock-duotone",
                "onUpdate:modelValue": handleChange,
                onBlur: handleBlur
              }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Field), { name: "confirmPassword" }, {
        default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseInput, {
              "model-value": field.value,
              error: errorMessage,
              disabled: unref(isSubmitting),
              type: "password",
              shape: "curved",
              placeholder: "Confirm password",
              icon: "ph:check",
              "onUpdate:modelValue": handleChange,
              onBlur: handleBlur
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseInput, {
                "model-value": field.value,
                error: errorMessage,
                disabled: unref(isSubmitting),
                type: "password",
                shape: "curved",
                placeholder: "Confirm password",
                icon: "ph:check",
                "onUpdate:modelValue": handleChange,
                onBlur: handleBlur
              }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_BaseButton, {
        disabled: unref(isSubmitting),
        loading: unref(isSubmitting),
        type: "submit",
        shape: "curved",
        color: "primary",
        class: "!h-11 w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Create Account `);
          } else {
            return [
              createTextVNode(" Create Account ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-muted-400 mt-4 flex justify-between font-sans text-sm leading-5"><span>Have an account?</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/auth/login-1",
        class: "text-primary-600 hover:text-primary-500 font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline focus:underline focus:outline-none"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Login here `);
          } else {
            return [
              createTextVNode(" Login here ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></form><div class="text-center">`);
      _push(ssrRenderComponent(_component_BaseText, {
        size: "sm",
        class: "text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \xA9 ${ssrInterpolate(( new Date()).getFullYear())} Tairo. All rights reserved. `);
          } else {
            return [
              createTextVNode(" \xA9 " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " Tairo. All rights reserved. ", 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/signup-1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=signup-1-98f29749.mjs.map
