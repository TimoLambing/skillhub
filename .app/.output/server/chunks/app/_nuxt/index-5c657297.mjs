import { a as useToaster, j as _sfc_main$C, _ as _sfc_main$p, i as _sfc_main$D, d as _sfc_main$x, f as __nuxt_component_2, g as _sfc_main$z, U as _sfc_main$y } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseMessage-329c2647.mjs';
import { _ as _sfc_main$2 } from './TairoFormGroup-3552ebb0.mjs';
import { _ as _sfc_main$3 } from './BaseFullscreenDropfile-539341bb.mjs';
import { _ as _sfc_main$4 } from './BaseInputFileHeadless-8d058758.mjs';
import { _ as _sfc_main$5 } from './BaseButtonIcon-6150946c.mjs';
import { _ as _sfc_main$6 } from './BaseListbox-69fbc324.mjs';
import { _ as _sfc_main$7 } from './TairoFormSave-f466246e.mjs';
import { defineComponent, withAsyncContext, computed, ref, watch, mergeProps, withCtx, createTextVNode, unref, toDisplayString, isRef, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import { u as useFetch } from './fetch-45c1546c.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm, useFieldError, Field } from 'vee-validate';
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
import './file-preview-7bd14b92.mjs';
import './BaseIconBox-642fe941.mjs';

const ONE_MB = 1e6;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const VALIDATION_TEXT = {
      FIRST_REQUIRED: "Your first name can't be empty",
      LASTNAME_REQUIRED: "Your last name can't be empty",
      OPTION_REQUIRED: "Please select an option",
      AVATAR_TOO_BIG: `Avatar size must be less than 1MB`
    };
    const zodSchema = z.object({
      avatar: z.custom((v) => v instanceof File).nullable(),
      profile: z.object({
        firstName: z.string().min(1, VALIDATION_TEXT.FIRST_REQUIRED),
        lastName: z.string().min(1, VALIDATION_TEXT.LASTNAME_REQUIRED),
        role: z.string().optional(),
        location: z.string(),
        bio: z.string()
      }),
      info: z.object({
        experience: z.union([
          z.literal("0-2 years"),
          z.literal("2-5 years"),
          z.literal("5-10 years"),
          z.literal("10+ years")
        ]).nullable(),
        firstJob: z.object({
          label: z.string(),
          value: z.boolean()
        }).nullable(),
        flexible: z.object({
          label: z.string(),
          value: z.boolean()
        }).nullable(),
        remote: z.object({
          label: z.string(),
          value: z.boolean()
        }).nullable()
      }),
      social: z.object({
        facebook: z.string(),
        twitter: z.string(),
        dribbble: z.string(),
        instagram: z.string(),
        github: z.string(),
        gitlab: z.string()
      })
    }).superRefine((data2, ctx) => {
      if (!data2.info.experience) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.OPTION_REQUIRED,
          path: ["info.experience"]
        });
      }
      if (!data2.info.firstJob) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.OPTION_REQUIRED,
          path: ["info.firstJob"]
        });
      }
      if (!data2.info.flexible) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.OPTION_REQUIRED,
          path: ["info.flexible"]
        });
      }
      if (!data2.info.remote) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.OPTION_REQUIRED,
          path: ["info.remote"]
        });
      }
      if (data2.avatar && data2.avatar.size > ONE_MB) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.AVATAR_TOO_BIG,
          path: ["avatar"]
        });
      }
    });
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/profile", "$6OtAHOQZfD")), __temp = await __temp, __restore(), __temp);
    const validationSchema = toTypedSchema(zodSchema);
    const initialValues = computed(() => ({
      avatar: null,
      profile: {
        firstName: data.value?.personalInfo?.firstName || "",
        lastName: data.value?.personalInfo?.lastName || "",
        role: data.value?.personalInfo?.role || "",
        location: "",
        bio: ""
      },
      info: {
        experience: null,
        firstJob: null,
        flexible: null,
        remote: null
      },
      social: {
        facebook: "",
        twitter: "",
        dribbble: "",
        instagram: "",
        github: "",
        gitlab: ""
      }
    }));
    const experience = ["0-2 years", "2-5 years", "5-10 years", "10+ years"];
    const answers = [
      {
        label: "Yes",
        value: true
      },
      {
        label: "No",
        value: false
      }
    ];
    const currentAvatar = computed(() => data.value?.personalInfo?.picture);
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
    const inputFile = ref(null);
    const fileError = useFieldError("avatar");
    watch(inputFile, (value) => {
      const file = value?.item(0) || null;
      setFieldValue("avatar", file);
    });
    onBeforeRouteLeave(() => {
      if (meta.value.dirty) {
        return confirm("You have unsaved changes. Are you sure you want to leave?");
      }
    });
    const toaster = useToaster();
    handleSubmit(
      async (values2) => {
        success.value = false;
        console.log("profile-edit-success", values2);
        try {
          await new Promise((resolve, reject) => {
            if (values2.profile.firstName === "Maya") {
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
            setFieldError("profile.firstName", "This first name is not allowed");
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
        await refresh();
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
        console.log("profile-edit-error", error2);
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
      const _component_BaseFullscreenDropfile = _sfc_main$3;
      const _component_BaseInputFileHeadless = _sfc_main$4;
      const _component_BaseButtonIcon = _sfc_main$5;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseInput = _sfc_main$z;
      const _component_BaseTextarea = _sfc_main$y;
      const _component_BaseListbox = _sfc_main$6;
      const _component_TairoFormSave = _sfc_main$7;
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
                  _push3(` General info `);
                } else {
                  return [
                    createTextVNode(" General info ")
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
                  _push3(` Edit your account&#39;s general information `);
                } else {
                  return [
                    createTextVNode(" Edit your account's general information ")
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
                    _push3(` Your profile has been updated! `);
                  } else {
                    return [
                      createTextVNode(" Your profile has been updated! ")
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
              label: "Profile picture",
              sublabel: "This is how others will recognize you"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="relative flex flex-col items-center justify-center gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseFullscreenDropfile, {
                    icon: "ph:image-duotone",
                    "filter-file-dropped": (file) => file.type.startsWith("image"),
                    onDrop: (value) => {
                      inputFile.value = value;
                    }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseInputFileHeadless, {
                    accept: "image/*",
                    modelValue: unref(inputFile),
                    "onUpdate:modelValue": ($event) => isRef(inputFile) ? inputFile.value = $event : null
                  }, {
                    default: withCtx(({ open, remove, preview, files }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="relative h-24 w-24"${_scopeId3}>`);
                        if (files?.length && files.item(0)) {
                          _push4(`<img${ssrRenderAttr("src", preview(files.item(0)).value)} alt="Upload preview" class="bg-muted-200 dark:bg-muted-700/60 h-24 w-24 rounded-full object-cover object-center"${_scopeId3}>`);
                        } else {
                          _push4(`<img${ssrRenderAttr("src", unref(currentAvatar))} alt="Upload preview" class="bg-muted-200 dark:bg-muted-700/60 h-24 w-24 rounded-full object-cover object-center"${_scopeId3}>`);
                        }
                        if (files?.length && files.item(0)) {
                          _push4(`<div class="absolute bottom-0 end-0 z-20"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_BaseButtonIcon, {
                            size: "sm",
                            shape: "full",
                            onClick: ($event) => remove(files.item(0)),
                            "data-nui-tooltip": "Remove image"
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Icon, {
                                  name: "lucide:x",
                                  class: "h-4 w-4"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_Icon, {
                                    name: "lucide:x",
                                    class: "h-4 w-4"
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          _push4(`<div class="absolute bottom-0 end-0 z-20"${_scopeId3}><div class="relative" data-nui-tooltip="Upload image"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_BaseButtonIcon, {
                            size: "sm",
                            shape: "full",
                            onClick: open
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Icon, {
                                  name: "lucide:plus",
                                  class: "h-4 w-4"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_Icon, {
                                    name: "lucide:plus",
                                    class: "h-4 w-4"
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div></div>`);
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "relative h-24 w-24" }, [
                            files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                              key: 0,
                              src: preview(files.item(0)).value,
                              alt: "Upload preview",
                              class: "bg-muted-200 dark:bg-muted-700/60 h-24 w-24 rounded-full object-cover object-center"
                            }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                              key: 1,
                              src: unref(currentAvatar),
                              alt: "Upload preview",
                              class: "bg-muted-200 dark:bg-muted-700/60 h-24 w-24 rounded-full object-cover object-center"
                            }, null, 8, ["src"])),
                            files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: "absolute bottom-0 end-0 z-20"
                            }, [
                              createVNode(_component_BaseButtonIcon, {
                                size: "sm",
                                shape: "full",
                                onClick: ($event) => remove(files.item(0)),
                                "data-nui-tooltip": "Remove image"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_Icon, {
                                    name: "lucide:x",
                                    class: "h-4 w-4"
                                  })
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ])) : (openBlock(), createBlock("div", {
                              key: 3,
                              class: "absolute bottom-0 end-0 z-20"
                            }, [
                              createVNode("div", {
                                class: "relative",
                                "data-nui-tooltip": "Upload image"
                              }, [
                                createVNode(_component_BaseButtonIcon, {
                                  size: "sm",
                                  shape: "full",
                                  onClick: open
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "lucide:plus",
                                      class: "h-4 w-4"
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ])
                            ]))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (unref(fileError)) {
                    _push3(`<div class="text-danger-600 inline-block font-sans text-[.8rem]"${_scopeId2}>${ssrInterpolate(unref(fileError))}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "relative flex flex-col items-center justify-center gap-4" }, [
                      createVNode(_component_BaseFullscreenDropfile, {
                        icon: "ph:image-duotone",
                        "filter-file-dropped": (file) => file.type.startsWith("image"),
                        onDrop: (value) => {
                          inputFile.value = value;
                        }
                      }, null, 8, ["filter-file-dropped", "onDrop"]),
                      createVNode(_component_BaseInputFileHeadless, {
                        accept: "image/*",
                        modelValue: unref(inputFile),
                        "onUpdate:modelValue": ($event) => isRef(inputFile) ? inputFile.value = $event : null
                      }, {
                        default: withCtx(({ open, remove, preview, files }) => [
                          createVNode("div", { class: "relative h-24 w-24" }, [
                            files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                              key: 0,
                              src: preview(files.item(0)).value,
                              alt: "Upload preview",
                              class: "bg-muted-200 dark:bg-muted-700/60 h-24 w-24 rounded-full object-cover object-center"
                            }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                              key: 1,
                              src: unref(currentAvatar),
                              alt: "Upload preview",
                              class: "bg-muted-200 dark:bg-muted-700/60 h-24 w-24 rounded-full object-cover object-center"
                            }, null, 8, ["src"])),
                            files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: "absolute bottom-0 end-0 z-20"
                            }, [
                              createVNode(_component_BaseButtonIcon, {
                                size: "sm",
                                shape: "full",
                                onClick: ($event) => remove(files.item(0)),
                                "data-nui-tooltip": "Remove image"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_Icon, {
                                    name: "lucide:x",
                                    class: "h-4 w-4"
                                  })
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ])) : (openBlock(), createBlock("div", {
                              key: 3,
                              class: "absolute bottom-0 end-0 z-20"
                            }, [
                              createVNode("div", {
                                class: "relative",
                                "data-nui-tooltip": "Upload image"
                              }, [
                                createVNode(_component_BaseButtonIcon, {
                                  size: "sm",
                                  shape: "full",
                                  onClick: open
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "lucide:plus",
                                      class: "h-4 w-4"
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ])
                            ]))
                          ])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                      unref(fileError) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-danger-600 inline-block font-sans text-[.8rem]"
                      }, toDisplayString(unref(fileError)), 1)) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TairoFormGroup, {
              label: "Profile Info",
              sublabel: "Others diserve to know you more"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-12 gap-4"${_scopeId2}><div class="col-span-12 sm:col-span-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "profile.firstName" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInput, {
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          type: "text",
                          icon: "ph:user-duotone",
                          placeholder: "First name",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseInput, {
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            type: "text",
                            icon: "ph:user-duotone",
                            placeholder: "First name",
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-12 sm:col-span-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "profile.lastName" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInput, {
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          type: "text",
                          icon: "ph:user-duotone",
                          placeholder: "Last name",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseInput, {
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            type: "text",
                            icon: "ph:user-duotone",
                            placeholder: "Last name",
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-12"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "profile.role" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInput, {
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          type: "text",
                          icon: "ph:suitcase-duotone",
                          placeholder: "Job title",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseInput, {
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            type: "text",
                            icon: "ph:suitcase-duotone",
                            placeholder: "Job title",
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-12"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "profile.location" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInput, {
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          type: "text",
                          icon: "ph:map-pin-duotone",
                          placeholder: "Location",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseInput, {
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            type: "text",
                            icon: "ph:map-pin-duotone",
                            placeholder: "Location",
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-12"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "profile.bio" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseTextarea, {
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          rows: "4",
                          placeholder: "About you / Short bio...",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseTextarea, {
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            rows: "4",
                            placeholder: "About you / Short bio...",
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
                      createVNode("div", { class: "col-span-12 sm:col-span-6" }, [
                        createVNode(unref(Field), { name: "profile.firstName" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseInput, {
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              type: "text",
                              icon: "ph:user-duotone",
                              placeholder: "First name",
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "col-span-12 sm:col-span-6" }, [
                        createVNode(unref(Field), { name: "profile.lastName" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseInput, {
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              type: "text",
                              icon: "ph:user-duotone",
                              placeholder: "Last name",
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "col-span-12" }, [
                        createVNode(unref(Field), { name: "profile.role" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseInput, {
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              type: "text",
                              icon: "ph:suitcase-duotone",
                              placeholder: "Job title",
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "col-span-12" }, [
                        createVNode(unref(Field), { name: "profile.location" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseInput, {
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              type: "text",
                              icon: "ph:map-pin-duotone",
                              placeholder: "Location",
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "col-span-12" }, [
                        createVNode(unref(Field), { name: "profile.bio" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseTextarea, {
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              rows: "4",
                              placeholder: "About you / Short bio...",
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
              label: "Professional Info",
              sublabel: "This can help you to win some opportunities"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-12 gap-4"${_scopeId2}><div class="col-span-12 sm:col-span-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "info.experience" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseListbox, {
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          items: experience,
                          placeholder: "Experience",
                          shape: "rounded",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseListbox, {
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            items: experience,
                            placeholder: "Experience",
                            shape: "rounded",
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-12 sm:col-span-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "info.firstJob" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseListbox, {
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          items: answers,
                          properties: { label: "label", value: "value" },
                          placeholder: "Is this your first job?",
                          shape: "rounded",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseListbox, {
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            items: answers,
                            properties: { label: "label", value: "value" },
                            placeholder: "Is this your first job?",
                            shape: "rounded",
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-12 sm:col-span-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "info.flexible" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseListbox, {
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          items: answers,
                          properties: { label: "label", value: "value" },
                          placeholder: "Are you flexible?",
                          shape: "rounded",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseListbox, {
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            items: answers,
                            properties: { label: "label", value: "value" },
                            placeholder: "Are you flexible?",
                            shape: "rounded",
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-12 sm:col-span-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "info.remote" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseListbox, {
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          items: answers,
                          properties: { label: "label", value: "value" },
                          placeholder: "Do you work remotely?",
                          shape: "rounded",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseListbox, {
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            items: answers,
                            properties: { label: "label", value: "value" },
                            placeholder: "Do you work remotely?",
                            shape: "rounded",
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
                      createVNode("div", { class: "col-span-12 sm:col-span-6" }, [
                        createVNode(unref(Field), { name: "info.experience" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseListbox, {
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              items: experience,
                              placeholder: "Experience",
                              shape: "rounded",
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "col-span-12 sm:col-span-6" }, [
                        createVNode(unref(Field), { name: "info.firstJob" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseListbox, {
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              items: answers,
                              properties: { label: "label", value: "value" },
                              placeholder: "Is this your first job?",
                              shape: "rounded",
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "col-span-12 sm:col-span-6" }, [
                        createVNode(unref(Field), { name: "info.flexible" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseListbox, {
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              items: answers,
                              properties: { label: "label", value: "value" },
                              placeholder: "Are you flexible?",
                              shape: "rounded",
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "col-span-12 sm:col-span-6" }, [
                        createVNode(unref(Field), { name: "info.remote" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseListbox, {
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              items: answers,
                              properties: { label: "label", value: "value" },
                              placeholder: "Do you work remotely?",
                              shape: "rounded",
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
              label: "Social Profiles",
              sublabel: "This can help others finding you on social media"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-12 gap-4"${_scopeId2}><div class="col-span-12 sm:col-span-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "social.facebook" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInput, {
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          type: "text",
                          icon: "fa6-brands:facebook-f",
                          placeholder: "Facebook URL",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseInput, {
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            type: "text",
                            icon: "fa6-brands:facebook-f",
                            placeholder: "Facebook URL",
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-12 sm:col-span-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "social.twitter" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInput, {
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          type: "text",
                          icon: "fa6-brands:twitter",
                          placeholder: "Twitter URL",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseInput, {
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            type: "text",
                            icon: "fa6-brands:twitter",
                            placeholder: "Twitter URL",
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-12 sm:col-span-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "social.dribbble" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInput, {
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          type: "text",
                          icon: "fa6-brands:dribbble",
                          placeholder: "Dribbble URL",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseInput, {
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            type: "text",
                            icon: "fa6-brands:dribbble",
                            placeholder: "Dribbble URL",
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-12 sm:col-span-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "social.instagram" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInput, {
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          type: "text",
                          icon: "fa6-brands:instagram",
                          placeholder: "Instagram URL",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseInput, {
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            type: "text",
                            icon: "fa6-brands:instagram",
                            placeholder: "Instagram URL",
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-12 sm:col-span-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "social.github" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInput, {
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          type: "text",
                          icon: "fa6-brands:github",
                          placeholder: "Github URL",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseInput, {
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            type: "text",
                            icon: "fa6-brands:github",
                            placeholder: "Github URL",
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-12 sm:col-span-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "social.gitlab" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInput, {
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          type: "text",
                          icon: "fa6-brands:gitlab",
                          placeholder: "Gitlab URL",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseInput, {
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            type: "text",
                            icon: "fa6-brands:gitlab",
                            placeholder: "Gitlab URL",
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
                      createVNode("div", { class: "col-span-12 sm:col-span-6" }, [
                        createVNode(unref(Field), { name: "social.facebook" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseInput, {
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              type: "text",
                              icon: "fa6-brands:facebook-f",
                              placeholder: "Facebook URL",
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "col-span-12 sm:col-span-6" }, [
                        createVNode(unref(Field), { name: "social.twitter" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseInput, {
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              type: "text",
                              icon: "fa6-brands:twitter",
                              placeholder: "Twitter URL",
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "col-span-12 sm:col-span-6" }, [
                        createVNode(unref(Field), { name: "social.dribbble" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseInput, {
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              type: "text",
                              icon: "fa6-brands:dribbble",
                              placeholder: "Dribbble URL",
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "col-span-12 sm:col-span-6" }, [
                        createVNode(unref(Field), { name: "social.instagram" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseInput, {
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              type: "text",
                              icon: "fa6-brands:instagram",
                              placeholder: "Instagram URL",
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "col-span-12 sm:col-span-6" }, [
                        createVNode(unref(Field), { name: "social.github" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseInput, {
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              type: "text",
                              icon: "fa6-brands:github",
                              placeholder: "Github URL",
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "col-span-12 sm:col-span-6" }, [
                        createVNode(unref(Field), { name: "social.gitlab" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseInput, {
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              type: "text",
                              icon: "fa6-brands:gitlab",
                              placeholder: "Gitlab URL",
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
                      createTextVNode(" General info ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseText, {
                    size: "xs",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Edit your account's general information ")
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
                      createTextVNode(" Your profile has been updated! ")
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
                    label: "Profile picture",
                    sublabel: "This is how others will recognize you"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "relative flex flex-col items-center justify-center gap-4" }, [
                        createVNode(_component_BaseFullscreenDropfile, {
                          icon: "ph:image-duotone",
                          "filter-file-dropped": (file) => file.type.startsWith("image"),
                          onDrop: (value) => {
                            inputFile.value = value;
                          }
                        }, null, 8, ["filter-file-dropped", "onDrop"]),
                        createVNode(_component_BaseInputFileHeadless, {
                          accept: "image/*",
                          modelValue: unref(inputFile),
                          "onUpdate:modelValue": ($event) => isRef(inputFile) ? inputFile.value = $event : null
                        }, {
                          default: withCtx(({ open, remove, preview, files }) => [
                            createVNode("div", { class: "relative h-24 w-24" }, [
                              files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                                key: 0,
                                src: preview(files.item(0)).value,
                                alt: "Upload preview",
                                class: "bg-muted-200 dark:bg-muted-700/60 h-24 w-24 rounded-full object-cover object-center"
                              }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                                key: 1,
                                src: unref(currentAvatar),
                                alt: "Upload preview",
                                class: "bg-muted-200 dark:bg-muted-700/60 h-24 w-24 rounded-full object-cover object-center"
                              }, null, 8, ["src"])),
                              files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                                key: 2,
                                class: "absolute bottom-0 end-0 z-20"
                              }, [
                                createVNode(_component_BaseButtonIcon, {
                                  size: "sm",
                                  shape: "full",
                                  onClick: ($event) => remove(files.item(0)),
                                  "data-nui-tooltip": "Remove image"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "lucide:x",
                                      class: "h-4 w-4"
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ])) : (openBlock(), createBlock("div", {
                                key: 3,
                                class: "absolute bottom-0 end-0 z-20"
                              }, [
                                createVNode("div", {
                                  class: "relative",
                                  "data-nui-tooltip": "Upload image"
                                }, [
                                  createVNode(_component_BaseButtonIcon, {
                                    size: "sm",
                                    shape: "full",
                                    onClick: open
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "lucide:plus",
                                        class: "h-4 w-4"
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ])
                              ]))
                            ])
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                        unref(fileError) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-danger-600 inline-block font-sans text-[.8rem]"
                        }, toDisplayString(unref(fileError)), 1)) : createCommentVNode("", true)
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TairoFormGroup, {
                    label: "Profile Info",
                    sublabel: "Others diserve to know you more"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                        createVNode("div", { class: "col-span-12 sm:col-span-6" }, [
                          createVNode(unref(Field), { name: "profile.firstName" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseInput, {
                                "model-value": field.value,
                                error: errorMessage,
                                disabled: unref(isSubmitting),
                                type: "text",
                                icon: "ph:user-duotone",
                                placeholder: "First name",
                                "onUpdate:modelValue": handleChange,
                                onBlur: handleBlur
                              }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "col-span-12 sm:col-span-6" }, [
                          createVNode(unref(Field), { name: "profile.lastName" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseInput, {
                                "model-value": field.value,
                                error: errorMessage,
                                disabled: unref(isSubmitting),
                                type: "text",
                                icon: "ph:user-duotone",
                                placeholder: "Last name",
                                "onUpdate:modelValue": handleChange,
                                onBlur: handleBlur
                              }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "col-span-12" }, [
                          createVNode(unref(Field), { name: "profile.role" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseInput, {
                                "model-value": field.value,
                                error: errorMessage,
                                disabled: unref(isSubmitting),
                                type: "text",
                                icon: "ph:suitcase-duotone",
                                placeholder: "Job title",
                                "onUpdate:modelValue": handleChange,
                                onBlur: handleBlur
                              }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "col-span-12" }, [
                          createVNode(unref(Field), { name: "profile.location" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseInput, {
                                "model-value": field.value,
                                error: errorMessage,
                                disabled: unref(isSubmitting),
                                type: "text",
                                icon: "ph:map-pin-duotone",
                                placeholder: "Location",
                                "onUpdate:modelValue": handleChange,
                                onBlur: handleBlur
                              }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "col-span-12" }, [
                          createVNode(unref(Field), { name: "profile.bio" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseTextarea, {
                                "model-value": field.value,
                                error: errorMessage,
                                disabled: unref(isSubmitting),
                                rows: "4",
                                placeholder: "About you / Short bio...",
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
                    label: "Professional Info",
                    sublabel: "This can help you to win some opportunities"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                        createVNode("div", { class: "col-span-12 sm:col-span-6" }, [
                          createVNode(unref(Field), { name: "info.experience" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseListbox, {
                                "model-value": field.value,
                                error: errorMessage,
                                disabled: unref(isSubmitting),
                                items: experience,
                                placeholder: "Experience",
                                shape: "rounded",
                                "onUpdate:modelValue": handleChange,
                                onBlur: handleBlur
                              }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "col-span-12 sm:col-span-6" }, [
                          createVNode(unref(Field), { name: "info.firstJob" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseListbox, {
                                "model-value": field.value,
                                error: errorMessage,
                                disabled: unref(isSubmitting),
                                items: answers,
                                properties: { label: "label", value: "value" },
                                placeholder: "Is this your first job?",
                                shape: "rounded",
                                "onUpdate:modelValue": handleChange,
                                onBlur: handleBlur
                              }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "col-span-12 sm:col-span-6" }, [
                          createVNode(unref(Field), { name: "info.flexible" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseListbox, {
                                "model-value": field.value,
                                error: errorMessage,
                                disabled: unref(isSubmitting),
                                items: answers,
                                properties: { label: "label", value: "value" },
                                placeholder: "Are you flexible?",
                                shape: "rounded",
                                "onUpdate:modelValue": handleChange,
                                onBlur: handleBlur
                              }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "col-span-12 sm:col-span-6" }, [
                          createVNode(unref(Field), { name: "info.remote" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseListbox, {
                                "model-value": field.value,
                                error: errorMessage,
                                disabled: unref(isSubmitting),
                                items: answers,
                                properties: { label: "label", value: "value" },
                                placeholder: "Do you work remotely?",
                                shape: "rounded",
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
                    label: "Social Profiles",
                    sublabel: "This can help others finding you on social media"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                        createVNode("div", { class: "col-span-12 sm:col-span-6" }, [
                          createVNode(unref(Field), { name: "social.facebook" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseInput, {
                                "model-value": field.value,
                                error: errorMessage,
                                disabled: unref(isSubmitting),
                                type: "text",
                                icon: "fa6-brands:facebook-f",
                                placeholder: "Facebook URL",
                                "onUpdate:modelValue": handleChange,
                                onBlur: handleBlur
                              }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "col-span-12 sm:col-span-6" }, [
                          createVNode(unref(Field), { name: "social.twitter" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseInput, {
                                "model-value": field.value,
                                error: errorMessage,
                                disabled: unref(isSubmitting),
                                type: "text",
                                icon: "fa6-brands:twitter",
                                placeholder: "Twitter URL",
                                "onUpdate:modelValue": handleChange,
                                onBlur: handleBlur
                              }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "col-span-12 sm:col-span-6" }, [
                          createVNode(unref(Field), { name: "social.dribbble" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseInput, {
                                "model-value": field.value,
                                error: errorMessage,
                                disabled: unref(isSubmitting),
                                type: "text",
                                icon: "fa6-brands:dribbble",
                                placeholder: "Dribbble URL",
                                "onUpdate:modelValue": handleChange,
                                onBlur: handleBlur
                              }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "col-span-12 sm:col-span-6" }, [
                          createVNode(unref(Field), { name: "social.instagram" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseInput, {
                                "model-value": field.value,
                                error: errorMessage,
                                disabled: unref(isSubmitting),
                                type: "text",
                                icon: "fa6-brands:instagram",
                                placeholder: "Instagram URL",
                                "onUpdate:modelValue": handleChange,
                                onBlur: handleBlur
                              }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "col-span-12 sm:col-span-6" }, [
                          createVNode(unref(Field), { name: "social.github" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseInput, {
                                "model-value": field.value,
                                error: errorMessage,
                                disabled: unref(isSubmitting),
                                type: "text",
                                icon: "fa6-brands:github",
                                placeholder: "Github URL",
                                "onUpdate:modelValue": handleChange,
                                onBlur: handleBlur
                              }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "col-span-12 sm:col-span-6" }, [
                          createVNode(unref(Field), { name: "social.gitlab" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseInput, {
                                "model-value": field.value,
                                error: errorMessage,
                                disabled: unref(isSubmitting),
                                type: "text",
                                icon: "fa6-brands:gitlab",
                                placeholder: "Gitlab URL",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/profile-edit/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-5c657297.mjs.map
