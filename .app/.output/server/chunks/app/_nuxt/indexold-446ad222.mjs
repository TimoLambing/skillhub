import { u as useRouter, e as __nuxt_component_0$5, f as __nuxt_component_2, _ as _sfc_main$p, b as _sfc_main$o, g as _sfc_main$z, d as _sfc_main$x, h as __nuxt_component_0$1 } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseThemeToggle-8b5dbd48.mjs';
import { _ as _sfc_main$2 } from './BaseCheckbox-45d3fdba.mjs';
import { defineComponent, computed, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
import './IconCheck-b31ac5c7.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "indexold",
  __ssrInlineRender: true,
  setup(__props) {
    const VALIDATION_TEXT = {
      EMAIL_REQUIRED: "A valid email is required",
      PASSWORD_REQUIRED: "A password is required"
    };
    const zodSchema = z.object({
      email: z.string().email(VALIDATION_TEXT.EMAIL_REQUIRED),
      password: z.string().min(1, VALIDATION_TEXT.PASSWORD_REQUIRED),
      trustDevice: z.boolean()
    });
    const validationSchema = toTypedSchema(zodSchema);
    const initialValues = computed(() => ({
      email: "",
      password: "",
      trustDevice: false
    }));
    const {
      handleSubmit,
      isSubmitting,
      setFieldError,
      meta,
      values,
      errors,
      resetForm,
      setFieldValue,
      setErrors
    } = useForm({
      validationSchema,
      initialValues
    });
    const router = useRouter();
    handleSubmit(async (values2) => {
      console.log("auth-success", values2);
      try {
        await new Promise((resolve, reject) => {
          if (values2.password !== "password") {
            setTimeout(
              () => reject(new Error("Fake backend validation error")),
              2e3
            );
          }
          setTimeout(resolve, 4e3);
        });
      } catch (error) {
        if (error.message === "Fake backend validation error") {
          setFieldError("password", 'Invalid credentials (use "password")');
        }
        return;
      }
      router.push("/dashboards");
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseThemeToggle = _sfc_main$1;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseInput = _sfc_main$z;
      const _component_BaseCheckbox = _sfc_main$2;
      const _component_BaseButton = _sfc_main$x;
      const _component_TairoLogoText = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark:bg-muted-800 flex min-h-screen bg-white" }, _attrs))}><div class="relative flex flex-1 flex-col justify-center px-6 py-12 lg:w-2/5 lg:flex-none"><div class="dark:bg-muted-800 relative mx-auto w-full max-w-sm bg-white"><div class="flex w-full items-center justify-between">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboards",
        class: "text-muted-400 hover:text-primary-500 flex items-center gap-2 font-sans font-medium transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "gg:arrow-long-left",
              class: "h-5 w-5"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Back to Home</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "gg:arrow-long-left",
                class: "h-5 w-5"
              }),
              createVNode("span", null, "Back to Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseThemeToggle, null, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "3xl",
        lead: "relaxed",
        weight: "medium",
        class: "mt-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Welcome back. `);
          } else {
            return [
              createTextVNode(" Welcome back. ")
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
            _push2(` Login with social media or your credentials `);
          } else {
            return [
              createTextVNode(" Login with social media or your credentials ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-wrap justify-between gap-4"><button class="dark:bg-muted-700 text-muted-800 border-muted-300 dark:border-muted-600 nui-focus relative inline-flex grow items-center justify-center gap-2 rounded border bg-white px-6 py-4 dark:text-white">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "logos:google-icon",
        class: "h-5 w-5"
      }, null, _parent));
      _push(`<div>Login with Google</div></button><button class="bg-muted-200 dark:bg-muted-700 hover:bg-muted-100 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 nui-focus w-[calc(50%_-_0.5rem)] cursor-pointer rounded px-5 py-4 text-center transition-colors duration-300 md:w-auto">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "fa6-brands:twitter",
        class: "mx-auto h-4 w-4"
      }, null, _parent));
      _push(`</button><button class="bg-muted-200 dark:bg-muted-700 hover:bg-muted-100 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 nui-focus w-[calc(50%_-_0.5rem)] cursor-pointer rounded px-5 py-4 text-center transition-colors duration-300 md:w-auto">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "fa6-brands:linkedin-in",
        class: "mx-auto h-4 w-4"
      }, null, _parent));
      _push(`</button></div><div class="flex-100 mt-8 flex items-center"><hr class="border-muted-200 dark:border-muted-700 flex-auto border-t-2"><span class="text-muted-600 dark:text-muted-300 px-4 font-sans font-light"> OR </span><hr class="border-muted-200 dark:border-muted-700 flex-auto border-t-2"></div></div><form method="POST" action="" class="mt-6" novalidate><div class="mt-5"><div><div class="space-y-4">`);
      _push(ssrRenderComponent(unref(Field), { name: "email" }, {
        default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseInput, {
              "model-value": field.value,
              error: errorMessage,
              disabled: unref(isSubmitting),
              type: "email",
              label: "Email address",
              placeholder: "Email address",
              autocomplete: "email",
              classes: {
                input: "h-12"
              },
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
                label: "Email address",
                placeholder: "Email address",
                autocomplete: "email",
                classes: {
                  input: "h-12"
                },
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
              label: "Password",
              placeholder: "Password",
              autocomplete: "current-password",
              classes: {
                input: "h-12"
              },
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
                label: "Password",
                placeholder: "Password",
                autocomplete: "current-password",
                classes: {
                  input: "h-12"
                },
                "onUpdate:modelValue": handleChange,
                onBlur: handleBlur
              }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-6 flex items-center justify-between">`);
      _push(ssrRenderComponent(unref(Field), { name: "trustDevice" }, {
        default: withCtx(({ field, handleChange, handleBlur }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              "model-value": field.value,
              disabled: unref(isSubmitting),
              shape: "rounded",
              label: "Trust for 60 days",
              color: "primary",
              "onUpdate:modelValue": handleChange,
              onBlur: handleBlur
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseCheckbox, {
                "model-value": field.value,
                disabled: unref(isSubmitting),
                shape: "rounded",
                label: "Trust for 60 days",
                color: "primary",
                "onUpdate:modelValue": handleChange,
                onBlur: handleBlur
              }, null, 8, ["model-value", "disabled", "onUpdate:modelValue", "onBlur"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="text-xs leading-5">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/auth/recover",
        class: "text-primary-600 hover:text-primary-500 font-sans font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Forgot your password? `);
          } else {
            return [
              createTextVNode(" Forgot your password? ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="mt-6"><div class="block w-full rounded-md shadow-sm">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        disabled: unref(isSubmitting),
        loading: unref(isSubmitting),
        type: "submit",
        color: "primary",
        class: "!h-11 w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Sign in `);
          } else {
            return [
              createTextVNode(" Sign in ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><p class="text-muted-400 mt-4 flex justify-between font-sans text-xs leading-5"><span>Don&#39;t have an account?</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/auth/signup-1",
        class: "text-primary-600 hover:text-primary-500 font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` start your 14-day free trial `);
          } else {
            return [
              createTextVNode(" start your 14-day free trial ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></form></div></div><div class="bg-muted-100 dark:bg-muted-900 relative hidden w-0 flex-1 items-center justify-center lg:flex lg:w-3/5"><div class="items-center justify-center text-center">`);
      _push(ssrRenderComponent(_component_TairoLogoText, { class: "h-10 items-end justify-end text-end" }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/indexold.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=indexold-446ad222.mjs.map
