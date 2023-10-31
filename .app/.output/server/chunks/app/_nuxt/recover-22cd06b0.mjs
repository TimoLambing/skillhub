import { e as __nuxt_component_0$5, _ as _sfc_main$p, b as _sfc_main$o, g as _sfc_main$z, d as _sfc_main$x } from '../server.mjs';
import __nuxt_component_0 from './TairoLogo-688db51d.mjs';
import { _ as _sfc_main$1 } from './BaseThemeToggle-8b5dbd48.mjs';
import { _ as _sfc_main$2 } from './BaseMessage-329c2647.mjs';
import { defineComponent, computed, ref, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from 'vue';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "recover",
  __ssrInlineRender: true,
  setup(__props) {
    const VALIDATION_TEXT = {
      EMAIL_REQUIRED: "A valid email is required"
    };
    const zodSchema = z.object({
      email: z.string().email(VALIDATION_TEXT.EMAIL_REQUIRED)
    });
    const validationSchema = toTypedSchema(zodSchema);
    const initialValues = computed(() => ({
      email: ""
    }));
    const { handleSubmit, isSubmitting } = useForm({
      validationSchema,
      initialValues
    });
    const success = ref(false);
    handleSubmit(async (values) => {
      console.log("recover-success", values);
      try {
        await new Promise((resolve) => setTimeout(resolve, 4e3));
      } catch {
      }
      success.value = true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_TairoLogo = __nuxt_component_0;
      const _component_BaseThemeToggle = _sfc_main$1;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseMessage = _sfc_main$2;
      const _component_BaseInput = _sfc_main$z;
      const _component_BaseButton = _sfc_main$x;
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
      _push(`</div></div><div class="flex w-full items-center justify-center"><div class="relative mx-auto w-full max-w-2xl"><div class="me-auto ms-auto mt-4 w-full"><div class="me-auto ms-auto mt-4 w-full max-w-md"><div class="text-center">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "3xl",
        weight: "medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Recover Password `);
          } else {
            return [
              createTextVNode(" Recover Password ")
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
            _push2(` Follow the instuctions sent to your email address `);
          } else {
            return [
              createTextVNode(" Follow the instuctions sent to your email address ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(success)) {
        _push(`<div class="px-8 py-4"><div class="mb-4 space-y-4">`);
        _push(ssrRenderComponent(_component_BaseMessage, {
          class: "p-6",
          closable: false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="text-base"${_scopeId}> An email has been sent to you with instructions on how to reset your password. </p><small class="block pt-2"${_scopeId}> If you don&#39;t receive an email, please check your spam folder. If you still don&#39;t receive an email, that means you don&#39;t have an account </small>`);
            } else {
              return [
                createVNode("p", { class: "text-base" }, " An email has been sent to you with instructions on how to reset your password. "),
                createVNode("small", { class: "block pt-2" }, " If you don't receive an email, please check your spam folder. If you still don't receive an email, that means you don't have an account ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<form method="POST" action="" class="px-8 py-4" novalidate><div class="mb-4 space-y-4">`);
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
        _push(`</div><div class="mb-6">`);
        _push(ssrRenderComponent(_component_BaseButton, {
          disabled: unref(isSubmitting),
          loading: unref(isSubmitting),
          type: "submit",
          color: "primary",
          class: "!h-12 w-full"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Recover Password `);
            } else {
              return [
                createTextVNode(" Recover Password ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><p class="text-muted-400 mt-4 flex justify-between font-sans text-sm leading-5"><span>False alert?</span>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/auth/login-1",
          class: "text-primary-600 hover:text-primary-500 font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline"
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
        _push(`</p></form>`);
      }
      _push(`</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/recover.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=recover-22cd06b0.mjs.map
