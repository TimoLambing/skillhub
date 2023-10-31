import { a as useToaster, j as _sfc_main$C, g as _sfc_main$z, U as _sfc_main$y, d as _sfc_main$x } from '../server.mjs';
import { defineComponent, computed, ref, mergeProps, withCtx, unref, createVNode, createTextVNode, withModifiers, useSSRContext } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
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
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@headlessui/vue';
import '@vue/shared';
import 'chroma-js';
import 'tailwindcss/colors.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "validation",
  __ssrInlineRender: true,
  setup(__props) {
    const VALIDATION_TEXT = {
      FIRSTNAME_REQUIRED: "First name can't be empty",
      LASTNAME_REQUIRED: "Last name can't be empty",
      EMAIL_REQUIRED: "Enter a valid email address",
      MESSAGE_REQUIRED: "Message can't be empty"
    };
    const zodSchema = z.object({
      firstName: z.string().min(1, VALIDATION_TEXT.FIRSTNAME_REQUIRED),
      lastName: z.string().min(1, VALIDATION_TEXT.LASTNAME_REQUIRED),
      email: z.string().email(VALIDATION_TEXT.EMAIL_REQUIRED),
      message: z.string().min(1, VALIDATION_TEXT.MESSAGE_REQUIRED)
    });
    const validationSchema = toTypedSchema(zodSchema);
    const initialValues = computed(() => ({
      firstName: "",
      lastName: "",
      email: "",
      message: ""
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
    const success = ref(false);
    onBeforeRouteLeave(() => {
      if (meta.value.dirty) {
        return confirm("You have unsaved changes. Are you sure you want to leave?");
      }
    });
    const toaster = useToaster();
    const onSubmit = handleSubmit(
      async (values2) => {
        success.value = false;
        console.log("message-send-success", values2);
        try {
          await new Promise((resolve, reject) => {
            if (values2.firstName === "Hanzo") {
              setTimeout(() => reject(new Error("Fake backend validation error")), 2e3);
            }
            setTimeout(resolve, 4e3);
          });
          toaster.clearAll();
          toaster.show({
            title: "Success",
            message: `Message has been sent!`,
            color: "success",
            icon: "ph:check",
            closable: true
          });
        } catch (error) {
          if (error.message === "Fake backend validation error") {
            setFieldError("firstName", "This name is not allowed");
            document.documentElement.scrollTo({
              top: 0,
              behavior: "smooth"
            });
            toaster.clearAll();
            toaster.show({
              title: "Oops!",
              message: "Please review the errors in the form",
              color: "danger",
              icon: "lucide:alert-triangle",
              closable: true
            });
          }
          return;
        }
        resetForm();
        document.documentElement.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        success.value = true;
        setTimeout(() => {
          success.value = false;
        }, 3e3);
      },
      (error) => {
        success.value = false;
        console.log("message-send-error", error);
        document.documentElement.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseInput = _sfc_main$z;
      const _component_BaseTextarea = _sfc_main$y;
      const _component_BaseButton = _sfc_main$x;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-lg" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form action="" method="POST" novalidate${_scopeId}><div class="grid grid-cols-12 gap-4"${_scopeId}><div class="col-span-12 sm:col-span-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "firstName" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    label: "First Name",
                    placeholder: "ex: John",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    type: "text",
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseInput, {
                      label: "First Name",
                      placeholder: "ex: John",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      type: "text",
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="col-span-12 sm:col-span-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "lastName" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    label: "Last Name",
                    placeholder: "ex: Doe",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    type: "text",
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseInput, {
                      label: "Last Name",
                      placeholder: "ex: Doe",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      type: "text",
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="col-span-12"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "email" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    type: "email",
                    label: "Email Address",
                    placeholder: "ex: johndoe@gmail.com",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseInput, {
                      type: "email",
                      label: "Email Address",
                      placeholder: "ex: johndoe@gmail.com",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="col-span-12"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "message" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseTextarea, {
                    label: "Message",
                    placeholder: "write your message...",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseTextarea, {
                      label: "Message",
                      placeholder: "write your message...",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="col-span-12"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              type: "submit",
              class: "w-full",
              color: "primary",
              disabled: unref(isSubmitting),
              loading: unref(isSubmitting)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Send Message`);
                } else {
                  return [
                    createTextVNode("Send Message")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></form>`);
          } else {
            return [
              createVNode("form", {
                action: "",
                method: "POST",
                onSubmit: withModifiers(unref(onSubmit), ["prevent"]),
                novalidate: ""
              }, [
                createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                  createVNode("div", { class: "col-span-12 sm:col-span-6" }, [
                    createVNode(unref(Field), { name: "firstName" }, {
                      default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                        createVNode(_component_BaseInput, {
                          label: "First Name",
                          placeholder: "ex: John",
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          type: "text",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "col-span-12 sm:col-span-6" }, [
                    createVNode(unref(Field), { name: "lastName" }, {
                      default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                        createVNode(_component_BaseInput, {
                          label: "Last Name",
                          placeholder: "ex: Doe",
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          type: "text",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "col-span-12" }, [
                    createVNode(unref(Field), { name: "email" }, {
                      default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                        createVNode(_component_BaseInput, {
                          type: "email",
                          label: "Email Address",
                          placeholder: "ex: johndoe@gmail.com",
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "col-span-12" }, [
                    createVNode(unref(Field), { name: "message" }, {
                      default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                        createVNode(_component_BaseTextarea, {
                          label: "Message",
                          placeholder: "write your message...",
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "col-span-12" }, [
                    createVNode(_component_BaseButton, {
                      type: "submit",
                      class: "w-full",
                      color: "primary",
                      disabled: unref(isSubmitting),
                      loading: unref(isSubmitting)
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Send Message")
                      ]),
                      _: 1
                    }, 8, ["disabled", "loading"])
                  ])
                ])
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/tairo/validation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=validation-8d14c5a0.mjs.map
