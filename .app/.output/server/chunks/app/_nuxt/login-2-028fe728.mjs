import { u as useRouter, a as useToaster, e as __nuxt_component_0$5, _ as _sfc_main$p, b as _sfc_main$o, g as _sfc_main$z, d as _sfc_main$x, f as __nuxt_component_2 } from '../server.mjs';
import __nuxt_component_0 from './TairoLogo-688db51d.mjs';
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
  __name: "login-2",
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
    const toaster = useToaster();
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
        toaster.clearAll();
        toaster.show({
          title: "Success",
          message: `Welcome back!`,
          color: "success",
          icon: "ph:user-circle-fill",
          closable: true
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
      const _component_TairoLogo = __nuxt_component_0;
      const _component_BaseThemeToggle = _sfc_main$1;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseInput = _sfc_main$z;
      const _component_BaseCheckbox = _sfc_main$2;
      const _component_BaseButton = _sfc_main$x;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-hidden px-4" }, _attrs))}><div class="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">`);
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
      _push(`</div></div><div class="flex w-full items-center justify-center"><div class="relative mx-auto w-full max-w-2xl"><div class="me-auto ms-auto mt-4 w-full"><form method="POST" action="" class="me-auto ms-auto mt-4 w-full max-w-md" novalidate><div class="text-center">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "3xl",
        weight: "medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Welcome back! `);
          } else {
            return [
              createTextVNode(" Welcome back! ")
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
      _push(`</div><div class="px-8 py-4"><div class="mb-4 space-y-4">`);
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
      _push(`</div><div class="mb-6"><div class="mt-6 flex items-center justify-between">`);
      _push(ssrRenderComponent(unref(Field), { name: "trustDevice" }, {
        default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              "model-value": field.value,
              disabled: unref(isSubmitting),
              shape: "rounded",
              label: "Trust this device for 60 days",
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
                label: "Trust this device for 60 days",
                color: "primary",
                "onUpdate:modelValue": handleChange,
                onBlur: handleBlur
              }, null, 8, ["model-value", "disabled", "onUpdate:modelValue", "onBlur"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="mb-6">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        disabled: unref(isSubmitting),
        loading: unref(isSubmitting),
        type: "submit",
        color: "primary",
        class: "!h-12 w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Sign In `);
          } else {
            return [
              createTextVNode(" Sign In ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-6 grid gap-0 sm:grid-cols-3"><hr class="border-muted-200 dark:border-muted-700 mt-3 hidden border-t sm:block"><span class="bg-muted-100 dark:bg-muted-900 text-muted-400 relative top-0.5 text-center font-sans text-sm"> Or continue with </span><hr class="border-muted-200 dark:border-muted-700 mt-3 hidden border-t sm:block"></div><div class="grid grid-cols-3 gap-2"><button type="button" class="bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 nui-focus relative inline-flex w-full items-center justify-center rounded px-0 py-3 text-center text-sm font-semibold shadow-sm transition-all duration-300 hover:bg-white">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "fa6-brands:google",
        class: "h-5 w-5"
      }, null, _parent));
      _push(`</button><button type="button" class="bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 nui-focus relative inline-flex w-full items-center justify-center rounded px-0 py-3 text-center text-sm font-semibold shadow-sm transition-all duration-300 hover:bg-white">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "fa6-brands:twitter",
        class: "h-5 w-5"
      }, null, _parent));
      _push(`</button><button type="button" class="bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 nui-focus relative inline-flex w-full items-center justify-center rounded px-0 py-3 text-center text-sm font-semibold shadow-sm transition-all duration-300 hover:bg-white">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "fa6-brands:linkedin-in",
        class: "h-5 w-5"
      }, null, _parent));
      _push(`</button></div><p class="text-muted-400 mt-4 flex justify-between font-sans text-sm leading-5"><span>Don&#39;t have an account?</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/auth/signup-2",
        class: "text-primary-600 hover:text-primary-500 font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Sign Up `);
          } else {
            return [
              createTextVNode(" Sign Up ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></form></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/login-2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-2-028fe728.mjs.map
