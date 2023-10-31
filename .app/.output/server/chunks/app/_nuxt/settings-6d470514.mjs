import { a as useToaster, j as _sfc_main$C, _ as _sfc_main$p, i as _sfc_main$D, d as _sfc_main$x, g as _sfc_main$z } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseMessage-329c2647.mjs';
import { _ as _sfc_main$2 } from './TairoFormGroup-3552ebb0.mjs';
import { _ as _sfc_main$3 } from './BaseSwitchThin-362b589d.mjs';
import { _ as _sfc_main$4 } from './BaseSwitchBall-c7b340a1.mjs';
import { _ as _sfc_main$5 } from './TairoFormSave-f466246e.mjs';
import { defineComponent, withAsyncContext, computed, ref, shallowRef, watch, mergeProps, withCtx, createTextVNode, unref, toDisplayString, createVNode, withDirectives, vShow, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import { u as useFetch } from './fetch-45c1546c.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
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
import './IconCheck-b31ac5c7.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "settings",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const VALIDATION_TEXT = {
      OLD_PASSWORD_REQUIRED: "Your current password is required",
      NEW_PASSWORD_LENGTH: "Password must be at least 8 characters",
      NEW_PASSWORD_MATCH: "Passwords do not match"
    };
    const zodSchema = z.object({
      currentPassword: z.string().min(1, VALIDATION_TEXT.OLD_PASSWORD_REQUIRED),
      newPassword: z.string(),
      confirmPassword: z.string(),
      twoFactor: z.object({
        enabled: z.boolean(),
        phoneNumber: z.string().optional()
      }),
      notifications: z.object({
        enabled: z.boolean(),
        flushLowPriority: z.boolean(),
        marketing: z.boolean(),
        partners: z.boolean()
      })
    }).superRefine((data2, ctx) => {
      if (data2.newPassword) {
        if (data2.newPassword.length < 8) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: VALIDATION_TEXT.NEW_PASSWORD_LENGTH,
            path: ["newPassword"]
          });
        }
        if (data2.newPassword !== data2.confirmPassword) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: VALIDATION_TEXT.NEW_PASSWORD_MATCH,
            path: ["confirmPassword"]
          });
        }
      }
      if (data2.twoFactor.enabled) {
        if (!data2.twoFactor.phoneNumber) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "A phone number is required",
            path: ["twoFactor.phoneNumber"]
          });
        }
      }
    });
    [__temp, __restore] = withAsyncContext(() => useFetch("/api/profile", "$gyvVDpg0sV")), __temp = await __temp, __restore();
    const validationSchema = toTypedSchema(zodSchema);
    const initialValues = computed(() => ({
      currentPassword: "password",
      newPassword: "",
      confirmPassword: "",
      twoFactor: {
        enabled: false,
        phoneNumber: ""
      },
      notifications: {
        enabled: true,
        flushLowPriority: true,
        marketing: false,
        partners: false
      }
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
    const fieldsWithErrors = computed(() => Object.keys(errors.value).length);
    const phoneInput = ref();
    shallowRef(void 0);
    watch(
      () => values.notifications?.enabled,
      (value) => {
        if (!value) {
          setFieldValue("notifications.flushLowPriority", false);
          setFieldValue("notifications.marketing", false);
          setFieldValue("notifications.partners", false);
        }
      }
    );
    onBeforeRouteLeave(() => {
      if (meta.value.dirty) {
        return confirm("You have unsaved changes. Are you sure you want to leave?");
      }
    });
    const toaster = useToaster();
    handleSubmit(
      async (values2) => {
        success.value = false;
        console.log("profile-settings-success", values2);
        try {
          await new Promise((resolve, reject) => {
            if (values2.currentPassword === "password") {
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
            message: `Your profile has been updated!`,
            color: "success",
            icon: "ph:check",
            closable: true
          });
        } catch (error2) {
          if (error2.message === "Fake backend validation error") {
            setFieldError("currentPassword", "Your current password is incorrect");
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
      (error2) => {
        success.value = false;
        console.log("profile-settings-error", error2);
        document.documentElement.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseText = _sfc_main$D;
      const _component_BaseButton = _sfc_main$x;
      const _component_BaseMessage = _sfc_main$1;
      const _component_TairoFormGroup = _sfc_main$2;
      const _component_BaseInput = _sfc_main$z;
      const _component_BaseSwitchThin = _sfc_main$3;
      const _component_BaseSwitchBall = _sfc_main$4;
      const _component_TairoFormSave = _sfc_main$5;
      _push(`<form${ssrRenderAttrs(mergeProps({
        method: "POST",
        action: "",
        class: "w-full pb-16"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between p-4"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              tag: "h2",
              size: "sm",
              weight: "medium",
              lead: "normal",
              class: "uppercase tracking-wider"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Settings `);
                } else {
                  return [
                    createTextVNode(" Settings ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Edit your account prefs and settings `);
                } else {
                  return [
                    createTextVNode(" Edit your account prefs and settings ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              class: "w-24",
              to: "/layouts/profile"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Cancel`);
                } else {
                  return [
                    createTextVNode("Cancel")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButton, {
              type: "submit",
              color: "primary",
              class: "w-24",
              disabled: unref(isSubmitting),
              loading: unref(isSubmitting)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Save`);
                } else {
                  return [
                    createTextVNode("Save")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="p-4"${_scopeId}><div class="mx-auto max-w-lg space-y-12 py-8"${_scopeId}>`);
            if (unref(success)) {
              _push2(ssrRenderComponent(_component_BaseMessage, {
                onClose: ($event) => success.value = false
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Your settings has been saved! `);
                  } else {
                    return [
                      createTextVNode(" Your settings has been saved! ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(fieldsWithErrors)) {
              _push2(ssrRenderComponent(_component_BaseMessage, {
                type: "danger",
                onClose: () => unref(setErrors)({})
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` This form has ${ssrInterpolate(unref(fieldsWithErrors))} errors, please check them before submitting `);
                  } else {
                    return [
                      createTextVNode(" This form has " + toDisplayString(unref(fieldsWithErrors)) + " errors, please check them before submitting ", 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_TairoFormGroup, {
              label: "Change Password",
              sublabel: "For an improved account security"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-12 gap-4"${_scopeId2}><div class="col-span-12"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "currentPassword" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInput, {
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          type: "password",
                          icon: "ph:lock-duotone",
                          placeholder: "Old password",
                          autocomplete: "current-password",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseInput, {
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            type: "password",
                            icon: "ph:lock-duotone",
                            placeholder: "Old password",
                            autocomplete: "current-password",
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-12"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "newPassword" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInput, {
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          type: "password",
                          icon: "ph:lock-duotone",
                          placeholder: "New password",
                          autocomplete: "new-password",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseInput, {
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            type: "password",
                            icon: "ph:lock-duotone",
                            placeholder: "New password",
                            autocomplete: "new-password",
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-12"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "confirmPassword" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInput, {
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          type: "password",
                          icon: "ph:lock-duotone",
                          placeholder: "Repeat new password",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseInput, {
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            type: "password",
                            icon: "ph:lock-duotone",
                            placeholder: "Repeat new password",
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                      createVNode("div", { class: "col-span-12" }, [
                        createVNode(unref(Field), { name: "currentPassword" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseInput, {
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              type: "password",
                              icon: "ph:lock-duotone",
                              placeholder: "Old password",
                              autocomplete: "current-password",
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "col-span-12" }, [
                        createVNode(unref(Field), { name: "newPassword" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseInput, {
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              type: "password",
                              icon: "ph:lock-duotone",
                              placeholder: "New password",
                              autocomplete: "new-password",
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "col-span-12" }, [
                        createVNode(unref(Field), { name: "confirmPassword" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseInput, {
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              type: "password",
                              icon: "ph:lock-duotone",
                              placeholder: "Repeat new password",
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TairoFormGroup, {
              label: "2 Factor Auth",
              sublabel: "Two factor authentication"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-12 gap-4"${_scopeId2}><div class="col-span-12"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "twoFactor.enabled" }, {
                    default: withCtx(({ field, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseSwitchThin, {
                          "model-value": field.value,
                          disabled: unref(isSubmitting),
                          label: "Enabled",
                          sublabel: "Toggle 2 factor authentication",
                          color: "primary",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseSwitchThin, {
                            "model-value": field.value,
                            disabled: unref(isSubmitting),
                            label: "Enabled",
                            sublabel: "Toggle 2 factor authentication",
                            color: "primary",
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, null, 8, ["model-value", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div style="${ssrRenderStyle(unref(values).twoFactor?.enabled ? null : { display: "none" })}" class="col-span-12"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "twoFactor.phoneNumber" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInput, {
                          ref_key: "phoneInput",
                          ref: phoneInput,
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          type: "tel",
                          icon: "ph:phone-duotone",
                          placeholder: "Phone number",
                          autocomplete: "tel",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseInput, {
                            ref_key: "phoneInput",
                            ref: phoneInput,
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            type: "tel",
                            icon: "ph:phone-duotone",
                            placeholder: "Phone number",
                            autocomplete: "tel",
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                      createVNode("div", { class: "col-span-12" }, [
                        createVNode(unref(Field), { name: "twoFactor.enabled" }, {
                          default: withCtx(({ field, handleChange, handleBlur }) => [
                            createVNode(_component_BaseSwitchThin, {
                              "model-value": field.value,
                              disabled: unref(isSubmitting),
                              label: "Enabled",
                              sublabel: "Toggle 2 factor authentication",
                              color: "primary",
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, null, 8, ["model-value", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ]),
                      withDirectives(createVNode("div", { class: "col-span-12" }, [
                        createVNode(unref(Field), { name: "twoFactor.phoneNumber" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseInput, {
                              ref_key: "phoneInput",
                              ref: phoneInput,
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              type: "tel",
                              icon: "ph:phone-duotone",
                              placeholder: "Phone number",
                              autocomplete: "tel",
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ], 512), [
                        [vShow, unref(values).twoFactor?.enabled]
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TairoFormGroup, {
              label: "Notifications",
              sublabel: "Configure how you receive notifications"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-12 gap-4"${_scopeId2}><div class="col-span-12"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "notifications.enabled" }, {
                    default: withCtx(({ field, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseSwitchBall, {
                          "model-value": field.value,
                          disabled: unref(isSubmitting),
                          label: "Enabled",
                          sublabel: "Receive emails notifications from the app",
                          color: "primary",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseSwitchBall, {
                            "model-value": field.value,
                            disabled: unref(isSubmitting),
                            label: "Enabled",
                            sublabel: "Receive emails notifications from the app",
                            color: "primary",
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, null, 8, ["model-value", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div style="${ssrRenderStyle(unref(values).notifications?.enabled ? null : { display: "none" })}" class="col-span-12"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "notifications.flushLowPriority" }, {
                    default: withCtx(({ field, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseSwitchBall, {
                          "model-value": field.value,
                          disabled: unref(isSubmitting),
                          label: "Flush",
                          sublabel: "Discard low priority notifications",
                          color: "primary",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseSwitchBall, {
                            "model-value": field.value,
                            disabled: unref(isSubmitting),
                            label: "Flush",
                            sublabel: "Discard low priority notifications",
                            color: "primary",
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, null, 8, ["model-value", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div style="${ssrRenderStyle(unref(values).notifications?.enabled ? null : { display: "none" })}" class="col-span-12"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "notifications.marketing" }, {
                    default: withCtx(({ field, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseSwitchBall, {
                          "model-value": field.value,
                          disabled: unref(isSubmitting),
                          label: "Marketing",
                          sublabel: "Enable marketing emails",
                          color: "primary",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseSwitchBall, {
                            "model-value": field.value,
                            disabled: unref(isSubmitting),
                            label: "Marketing",
                            sublabel: "Enable marketing emails",
                            color: "primary",
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, null, 8, ["model-value", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div style="${ssrRenderStyle(unref(values).notifications?.enabled ? null : { display: "none" })}" class="col-span-12"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "notifications.partners" }, {
                    default: withCtx(({ field, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseSwitchBall, {
                          "model-value": field.value,
                          disabled: unref(isSubmitting),
                          label: "Partners",
                          sublabel: "Enable partner emails",
                          color: "primary",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseSwitchBall, {
                            "model-value": field.value,
                            disabled: unref(isSubmitting),
                            label: "Partners",
                            sublabel: "Enable partner emails",
                            color: "primary",
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, null, 8, ["model-value", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                      createVNode("div", { class: "col-span-12" }, [
                        createVNode(unref(Field), { name: "notifications.enabled" }, {
                          default: withCtx(({ field, handleChange, handleBlur }) => [
                            createVNode(_component_BaseSwitchBall, {
                              "model-value": field.value,
                              disabled: unref(isSubmitting),
                              label: "Enabled",
                              sublabel: "Receive emails notifications from the app",
                              color: "primary",
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, null, 8, ["model-value", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ]),
                      withDirectives(createVNode("div", { class: "col-span-12" }, [
                        createVNode(unref(Field), { name: "notifications.flushLowPriority" }, {
                          default: withCtx(({ field, handleChange, handleBlur }) => [
                            createVNode(_component_BaseSwitchBall, {
                              "model-value": field.value,
                              disabled: unref(isSubmitting),
                              label: "Flush",
                              sublabel: "Discard low priority notifications",
                              color: "primary",
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, null, 8, ["model-value", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ], 512), [
                        [vShow, unref(values).notifications?.enabled]
                      ]),
                      withDirectives(createVNode("div", { class: "col-span-12" }, [
                        createVNode(unref(Field), { name: "notifications.marketing" }, {
                          default: withCtx(({ field, handleChange, handleBlur }) => [
                            createVNode(_component_BaseSwitchBall, {
                              "model-value": field.value,
                              disabled: unref(isSubmitting),
                              label: "Marketing",
                              sublabel: "Enable marketing emails",
                              color: "primary",
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, null, 8, ["model-value", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ], 512), [
                        [vShow, unref(values).notifications?.enabled]
                      ]),
                      withDirectives(createVNode("div", { class: "col-span-12" }, [
                        createVNode(unref(Field), { name: "notifications.partners" }, {
                          default: withCtx(({ field, handleChange, handleBlur }) => [
                            createVNode(_component_BaseSwitchBall, {
                              "model-value": field.value,
                              disabled: unref(isSubmitting),
                              label: "Partners",
                              sublabel: "Enable partner emails",
                              color: "primary",
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, null, 8, ["model-value", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ], 512), [
                        [vShow, unref(values).notifications?.enabled]
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between p-4" }, [
                createVNode("div", null, [
                  createVNode(_component_BaseHeading, {
                    tag: "h2",
                    size: "sm",
                    weight: "medium",
                    lead: "normal",
                    class: "uppercase tracking-wider"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Settings ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseText, {
                    size: "xs",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Edit your account prefs and settings ")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode(_component_BaseButton, {
                    class: "w-24",
                    to: "/layouts/profile"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Cancel")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseButton, {
                    type: "submit",
                    color: "primary",
                    class: "w-24",
                    disabled: unref(isSubmitting),
                    loading: unref(isSubmitting)
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Save")
                    ]),
                    _: 1
                  }, 8, ["disabled", "loading"])
                ])
              ]),
              createVNode("div", { class: "p-4" }, [
                createVNode("div", { class: "mx-auto max-w-lg space-y-12 py-8" }, [
                  unref(success) ? (openBlock(), createBlock(_component_BaseMessage, {
                    key: 0,
                    onClose: ($event) => success.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Your settings has been saved! ")
                    ]),
                    _: 1
                  }, 8, ["onClose"])) : createCommentVNode("", true),
                  unref(fieldsWithErrors) ? (openBlock(), createBlock(_component_BaseMessage, {
                    key: 1,
                    type: "danger",
                    onClose: () => unref(setErrors)({})
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" This form has " + toDisplayString(unref(fieldsWithErrors)) + " errors, please check them before submitting ", 1)
                    ]),
                    _: 1
                  }, 8, ["onClose"])) : createCommentVNode("", true),
                  createVNode(_component_TairoFormGroup, {
                    label: "Change Password",
                    sublabel: "For an improved account security"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                        createVNode("div", { class: "col-span-12" }, [
                          createVNode(unref(Field), { name: "currentPassword" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseInput, {
                                "model-value": field.value,
                                error: errorMessage,
                                disabled: unref(isSubmitting),
                                type: "password",
                                icon: "ph:lock-duotone",
                                placeholder: "Old password",
                                autocomplete: "current-password",
                                "onUpdate:modelValue": handleChange,
                                onBlur: handleBlur
                              }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "col-span-12" }, [
                          createVNode(unref(Field), { name: "newPassword" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseInput, {
                                "model-value": field.value,
                                error: errorMessage,
                                disabled: unref(isSubmitting),
                                type: "password",
                                icon: "ph:lock-duotone",
                                placeholder: "New password",
                                autocomplete: "new-password",
                                "onUpdate:modelValue": handleChange,
                                onBlur: handleBlur
                              }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "col-span-12" }, [
                          createVNode(unref(Field), { name: "confirmPassword" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseInput, {
                                "model-value": field.value,
                                error: errorMessage,
                                disabled: unref(isSubmitting),
                                type: "password",
                                icon: "ph:lock-duotone",
                                placeholder: "Repeat new password",
                                "onUpdate:modelValue": handleChange,
                                onBlur: handleBlur
                              }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TairoFormGroup, {
                    label: "2 Factor Auth",
                    sublabel: "Two factor authentication"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                        createVNode("div", { class: "col-span-12" }, [
                          createVNode(unref(Field), { name: "twoFactor.enabled" }, {
                            default: withCtx(({ field, handleChange, handleBlur }) => [
                              createVNode(_component_BaseSwitchThin, {
                                "model-value": field.value,
                                disabled: unref(isSubmitting),
                                label: "Enabled",
                                sublabel: "Toggle 2 factor authentication",
                                color: "primary",
                                "onUpdate:modelValue": handleChange,
                                onBlur: handleBlur
                              }, null, 8, ["model-value", "disabled", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          })
                        ]),
                        withDirectives(createVNode("div", { class: "col-span-12" }, [
                          createVNode(unref(Field), { name: "twoFactor.phoneNumber" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseInput, {
                                ref_key: "phoneInput",
                                ref: phoneInput,
                                "model-value": field.value,
                                error: errorMessage,
                                disabled: unref(isSubmitting),
                                type: "tel",
                                icon: "ph:phone-duotone",
                                placeholder: "Phone number",
                                autocomplete: "tel",
                                "onUpdate:modelValue": handleChange,
                                onBlur: handleBlur
                              }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          })
                        ], 512), [
                          [vShow, unref(values).twoFactor?.enabled]
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TairoFormGroup, {
                    label: "Notifications",
                    sublabel: "Configure how you receive notifications"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                        createVNode("div", { class: "col-span-12" }, [
                          createVNode(unref(Field), { name: "notifications.enabled" }, {
                            default: withCtx(({ field, handleChange, handleBlur }) => [
                              createVNode(_component_BaseSwitchBall, {
                                "model-value": field.value,
                                disabled: unref(isSubmitting),
                                label: "Enabled",
                                sublabel: "Receive emails notifications from the app",
                                color: "primary",
                                "onUpdate:modelValue": handleChange,
                                onBlur: handleBlur
                              }, null, 8, ["model-value", "disabled", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          })
                        ]),
                        withDirectives(createVNode("div", { class: "col-span-12" }, [
                          createVNode(unref(Field), { name: "notifications.flushLowPriority" }, {
                            default: withCtx(({ field, handleChange, handleBlur }) => [
                              createVNode(_component_BaseSwitchBall, {
                                "model-value": field.value,
                                disabled: unref(isSubmitting),
                                label: "Flush",
                                sublabel: "Discard low priority notifications",
                                color: "primary",
                                "onUpdate:modelValue": handleChange,
                                onBlur: handleBlur
                              }, null, 8, ["model-value", "disabled", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          })
                        ], 512), [
                          [vShow, unref(values).notifications?.enabled]
                        ]),
                        withDirectives(createVNode("div", { class: "col-span-12" }, [
                          createVNode(unref(Field), { name: "notifications.marketing" }, {
                            default: withCtx(({ field, handleChange, handleBlur }) => [
                              createVNode(_component_BaseSwitchBall, {
                                "model-value": field.value,
                                disabled: unref(isSubmitting),
                                label: "Marketing",
                                sublabel: "Enable marketing emails",
                                color: "primary",
                                "onUpdate:modelValue": handleChange,
                                onBlur: handleBlur
                              }, null, 8, ["model-value", "disabled", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          })
                        ], 512), [
                          [vShow, unref(values).notifications?.enabled]
                        ]),
                        withDirectives(createVNode("div", { class: "col-span-12" }, [
                          createVNode(unref(Field), { name: "notifications.partners" }, {
                            default: withCtx(({ field, handleChange, handleBlur }) => [
                              createVNode(_component_BaseSwitchBall, {
                                "model-value": field.value,
                                disabled: unref(isSubmitting),
                                label: "Partners",
                                sublabel: "Enable partner emails",
                                color: "primary",
                                "onUpdate:modelValue": handleChange,
                                onBlur: handleBlur
                              }, null, 8, ["model-value", "disabled", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          })
                        ], 512), [
                          [vShow, unref(values).notifications?.enabled]
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_TairoFormSave, {
        disabled: unref(isSubmitting),
        loading: unref(isSubmitting),
        onReset: unref(resetForm)
      }, null, _parent));
      _push(`</form>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/profile-edit/settings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=settings-6d470514.mjs.map
