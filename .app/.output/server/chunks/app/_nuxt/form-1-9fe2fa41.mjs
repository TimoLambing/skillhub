import { a as useToaster, _ as _sfc_main$p, b as _sfc_main$o, f as __nuxt_component_2, j as _sfc_main$C, g as _sfc_main$z, i as _sfc_main$D, U as _sfc_main$y, d as _sfc_main$x } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseButtonAction-57c21d00.mjs';
import { _ as _sfc_main$2 } from './BaseFullscreenDropfile-539341bb.mjs';
import { _ as _sfc_main$3 } from './BaseInputFileHeadless-8d058758.mjs';
import { _ as _sfc_main$4 } from './BaseButtonIcon-6150946c.mjs';
import { _ as _sfc_main$5 } from './BaseRadioHeadless-286f432f.mjs';
import { _ as _sfc_main$6 } from './BaseSelect-50588309.mjs';
import { _ as _sfc_main$7 } from './BaseListbox-69fbc324.mjs';
import { _ as _sfc_main$8 } from './BaseCheckbox-45d3fdba.mjs';
import { defineComponent, computed, ref, watch, withCtx, createVNode, unref, isRef, openBlock, createBlock, createTextVNode, withModifiers, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
import './IconChevronDown-af6375e6.mjs';
import './BaseIconBox-642fe941.mjs';
import './IconCheck-b31ac5c7.mjs';

const ONE_MB = 1e6;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "form-1",
  __ssrInlineRender: true,
  setup(__props) {
    const people = [
      {
        id: 1,
        name: "Clarissa Perez",
        text: "Sales Manager",
        media: "/img/avatars/19.svg"
      },
      {
        id: 2,
        name: "Aaron Splatter",
        text: "Project Manager",
        media: "/img/avatars/16.svg"
      },
      {
        id: 3,
        name: "Mike Miller",
        text: "UI/UX Designer",
        media: "/img/avatars/3.svg"
      },
      {
        id: 4,
        name: "Benedict Kessler",
        text: "Mobile Developer",
        media: "/img/avatars/22.svg"
      },
      {
        id: 5,
        name: "Maya Rosselini",
        text: "Product Manager",
        media: "/img/avatars/2.svg"
      }
    ];
    const VALIDATION_TEXT = {
      NAME_REQUIRED: "Company name can't be empty",
      EMAIL_REQUIRED: "Email address can't be empty",
      OPTION_REQUIRED: "Please select an option",
      MANAGER_REQUIRED: "Please select a manager",
      STATUS_REQUIRED: "Pick a status",
      AVATAR_TOO_BIG: `Avatar size must be less than 1MB`
    };
    const zodSchema = z.object({
      avatar: z.custom((v) => v instanceof File).nullable(),
      company: z.object({
        name: z.string().min(1, VALIDATION_TEXT.NAME_REQUIRED),
        email: z.string().min(1, VALIDATION_TEXT.EMAIL_REQUIRED),
        website: z.string().optional(),
        status: z.union([z.literal("active"), z.literal("inactive")]).nullable(),
        employees: z.union([
          z.literal("1-10 employees"),
          z.literal("10-50 employees"),
          z.literal("50-100 employees"),
          z.literal("100+ employees")
        ]).nullable(),
        manager: z.object({
          id: z.number(),
          name: z.string(),
          text: z.string(),
          media: z.string()
        }).nullable(),
        income: z.union([
          z.literal("0 - 250K"),
          z.literal("250K - 500K"),
          z.literal("500K - 1M"),
          z.literal("1M - 5M"),
          z.literal("10M+")
        ]).nullable(),
        notes: z.string().optional(),
        privateRecord: z.boolean()
      })
    }).superRefine((data, ctx) => {
      if (data.avatar && data.avatar.size > ONE_MB) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.AVATAR_TOO_BIG,
          path: ["avatar"]
        });
      }
      if (!data.company.income) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.OPTION_REQUIRED,
          path: ["company.income"]
        });
      }
      if (!data.company.employees) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.OPTION_REQUIRED,
          path: ["company.employees"]
        });
      }
      if (!data.company.status) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.STATUS_REQUIRED,
          path: ["company.status"]
        });
      }
      if (!data.company.manager) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.MANAGER_REQUIRED,
          path: ["company.manager"]
        });
      }
    });
    const validationSchema = toTypedSchema(zodSchema);
    const initialValues = computed(() => ({
      avatar: null,
      company: {
        name: "",
        email: "",
        website: "",
        type: "",
        income: null,
        employees: null,
        manager: null,
        status: null,
        notes: "",
        privateRecord: false
      }
    }));
    const currentAvatar = computed(() => "/img/avatars/company.svg");
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
    computed(() => Object.keys(errors.value).length);
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
    const onSubmit = handleSubmit(
      async (values2) => {
        success.value = false;
        console.log("company-create-success", values2);
        try {
          await new Promise((resolve, reject) => {
            if (values2.company.name === "Airbnb") {
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
            message: `Record has been created!`,
            color: "success",
            icon: "ph:check",
            closable: true
          });
        } catch (error) {
          if (error.message === "Fake backend validation error") {
            setFieldError("company.name", "This name is not allowed");
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
        console.log("company-create-error", error);
        document.documentElement.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseButtonAction = _sfc_main$1;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseFullscreenDropfile = _sfc_main$2;
      const _component_BaseInputFileHeadless = _sfc_main$3;
      const _component_BaseButtonIcon = _sfc_main$4;
      const _component_BaseInput = _sfc_main$z;
      const _component_BaseRadioHeadless = _sfc_main$5;
      const _component_BaseText = _sfc_main$D;
      const _component_BaseSelect = _sfc_main$6;
      const _component_BaseListbox = _sfc_main$7;
      const _component_BaseTextarea = _sfc_main$y;
      const _component_BaseCheckbox = _sfc_main$8;
      const _component_BaseButton = _sfc_main$x;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-4 flex flex-col justify-between md:flex-row md:items-center"><div class="ltablet:max-w-full flex max-w-[425px] flex-col items-center gap-4 text-center md:flex-row md:text-left lg:max-w-full"><div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "xl",
        weight: "light",
        lead: "tight",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>New company</span>`);
          } else {
            return [
              createVNode("span", null, "New company")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, { size: "sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-500"${_scopeId}> Create a new company record </span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-500" }, " Create a new company record ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="mt-4 flex items-center justify-center gap-2 md:mt-0 md:justify-start">`);
      _push(ssrRenderComponent(_component_BaseButtonAction, {
        onClick: ($event) => _ctx.$router.back()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:arrow-left",
              class: "h-3 w-3"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Cancel</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:arrow-left",
                class: "h-3 w-3"
              }),
              createVNode("span", null, "Cancel")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_BaseCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form method="POST" action="" class="divide-muted-200 dark:divide-muted-700 grid divide-x sm:grid-cols-2"${_scopeId}><div shape="curved" class="bg-muted-50 dark:bg-muted-800/60 space-y-8 p-10"${_scopeId}><div class="mx-auto flex w-full max-w-[410px] flex-col"${_scopeId}><div${_scopeId}><div${_scopeId}><div class="relative mb-5 flex flex-col items-center justify-center gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseFullscreenDropfile, {
              icon: "ph:image-duotone",
              "filter-file-dropped": (file) => file.type.startsWith("image"),
              onDrop: (value) => {
                inputFile.value = value;
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseInputFileHeadless, {
              accept: "image/*",
              modelValue: unref(inputFile),
              "onUpdate:modelValue": ($event) => isRef(inputFile) ? inputFile.value = $event : null
            }, {
              default: withCtx(({ open, remove, preview, files }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="relative h-20 w-20"${_scopeId2}>`);
                  if (files?.length && files.item(0)) {
                    _push3(`<img${ssrRenderAttr("src", preview(files.item(0)).value)} alt="Upload preview" class="bg-muted-200 dark:bg-muted-700/60 h-20 w-20 rounded-full object-cover object-center"${_scopeId2}>`);
                  } else {
                    _push3(`<img${ssrRenderAttr("src", unref(currentAvatar))} alt="Upload preview" class="bg-muted-200 dark:bg-muted-700/60 h-20 w-20 rounded-full object-cover object-center dark:invert"${_scopeId2}>`);
                  }
                  if (files?.length && files.item(0)) {
                    _push3(`<div class="absolute bottom-0 end-0 z-20"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BaseButtonIcon, {
                      size: "sm",
                      shape: "full",
                      onClick: ($event) => remove(files.item(0)),
                      "data-nui-tooltip": "Remove image",
                      class: "scale-90"
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "lucide:x",
                            class: "h-4 w-4"
                          }, null, _parent4, _scopeId3));
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
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<div class="absolute bottom-0 end-0 z-20"${_scopeId2}><div class="relative" data-nui-tooltip="Upload image"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BaseButtonIcon, {
                      size: "sm",
                      shape: "full",
                      onClick: open
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "lucide:plus",
                            class: "h-4 w-4"
                          }, null, _parent4, _scopeId3));
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
                    }, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "relative h-20 w-20" }, [
                      files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                        key: 0,
                        src: preview(files.item(0)).value,
                        alt: "Upload preview",
                        class: "bg-muted-200 dark:bg-muted-700/60 h-20 w-20 rounded-full object-cover object-center"
                      }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                        key: 1,
                        src: unref(currentAvatar),
                        alt: "Upload preview",
                        class: "bg-muted-200 dark:bg-muted-700/60 h-20 w-20 rounded-full object-cover object-center dark:invert"
                      }, null, 8, ["src"])),
                      files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                        key: 2,
                        class: "absolute bottom-0 end-0 z-20"
                      }, [
                        createVNode(_component_BaseButtonIcon, {
                          size: "sm",
                          shape: "full",
                          onClick: ($event) => remove(files.item(0)),
                          "data-nui-tooltip": "Remove image",
                          class: "scale-90"
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
            }, _parent2, _scopeId));
            if (unref(fileError)) {
              _push2(`<div class="text-danger-600 inline-block font-sans text-[.8rem]"${_scopeId}>${ssrInterpolate(unref(fileError))}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="grid grid-cols-12 gap-4"${_scopeId}><div class="ltablet:col-span-6 col-span-12 lg:col-span-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "company.name" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    label: "Company Name",
                    placeholder: "Ex: Acme Inc.",
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
                      label: "Company Name",
                      placeholder: "Ex: Acme Inc.",
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
            _push2(`</div><div class="ltablet:col-span-6 col-span-12 lg:col-span-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "company.email" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    label: "Company Email",
                    placeholder: "Ex: hello@acme.co",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    type: "email",
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseInput, {
                      label: "Company Email",
                      placeholder: "Ex: hello@acme.co",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      type: "email",
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="col-span-12"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "company.website" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    icon: "lucide:globe",
                    label: "Company website",
                    placeholder: "Ex: https://acme.co",
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
                      icon: "lucide:globe",
                      label: "Company website",
                      placeholder: "Ex: https://acme.co",
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
            _push2(`</div></div><div class="mb-6 mt-4"${_scopeId}><label class="nui-label pb-2 text-[0.825rem]"${_scopeId}>Company type</label><div class="ptablet:grid-cols-2 ltablet:grid-cols-3 grid gap-4 lg:grid-cols-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "company.type" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseRadioHeadless, {
                    value: "team_member_1",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseCard, {
                          shape: "rounded",
                          class: "text-muted-400 peer-checked:!border-primary-500 peer-checked:[&_.child]:!text-primary-500 relative border-2 px-2 py-4 grayscale peer-checked:grayscale-0"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex w-full flex-col items-center gap-2 text-center"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_Icon, {
                                name: "ph:house-simple-duotone",
                                class: "child mx-auto h-5 w-5"
                              }, null, _parent5, _scopeId4));
                              _push5(`<div${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_BaseHeading, {
                                as: "h4",
                                size: "sm",
                                weight: "medium",
                                lead: "none"
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Solo `);
                                  } else {
                                    return [
                                      createTextVNode(" Solo ")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_BaseText, {
                                size: "xs",
                                class: "text-muted-400"
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Small company`);
                                  } else {
                                    return [
                                      createTextVNode("Small company")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(`</div><div class="child text-muted-300 absolute right-2 top-2 ms-auto"${_scopeId4}><div class="h-2 w-2 rounded-full bg-current"${_scopeId4}></div></div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex w-full flex-col items-center gap-2 text-center" }, [
                                  createVNode(_component_Icon, {
                                    name: "ph:house-simple-duotone",
                                    class: "child mx-auto h-5 w-5"
                                  }),
                                  createVNode("div", null, [
                                    createVNode(_component_BaseHeading, {
                                      as: "h4",
                                      size: "sm",
                                      weight: "medium",
                                      lead: "none"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Solo ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_BaseText, {
                                      size: "xs",
                                      class: "text-muted-400"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Small company")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("div", { class: "child text-muted-300 absolute right-2 top-2 ms-auto" }, [
                                    createVNode("div", { class: "h-2 w-2 rounded-full bg-current" })
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseCard, {
                            shape: "rounded",
                            class: "text-muted-400 peer-checked:!border-primary-500 peer-checked:[&_.child]:!text-primary-500 relative border-2 px-2 py-4 grayscale peer-checked:grayscale-0"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex w-full flex-col items-center gap-2 text-center" }, [
                                createVNode(_component_Icon, {
                                  name: "ph:house-simple-duotone",
                                  class: "child mx-auto h-5 w-5"
                                }),
                                createVNode("div", null, [
                                  createVNode(_component_BaseHeading, {
                                    as: "h4",
                                    size: "sm",
                                    weight: "medium",
                                    lead: "none"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Solo ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_BaseText, {
                                    size: "xs",
                                    class: "text-muted-400"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Small company")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", { class: "child text-muted-300 absolute right-2 top-2 ms-auto" }, [
                                  createVNode("div", { class: "h-2 w-2 rounded-full bg-current" })
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseRadioHeadless, {
                      value: "team_member_1",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BaseCard, {
                          shape: "rounded",
                          class: "text-muted-400 peer-checked:!border-primary-500 peer-checked:[&_.child]:!text-primary-500 relative border-2 px-2 py-4 grayscale peer-checked:grayscale-0"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex w-full flex-col items-center gap-2 text-center" }, [
                              createVNode(_component_Icon, {
                                name: "ph:house-simple-duotone",
                                class: "child mx-auto h-5 w-5"
                              }),
                              createVNode("div", null, [
                                createVNode(_component_BaseHeading, {
                                  as: "h4",
                                  size: "sm",
                                  weight: "medium",
                                  lead: "none"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Solo ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_BaseText, {
                                  size: "xs",
                                  class: "text-muted-400"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Small company")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("div", { class: "child text-muted-300 absolute right-2 top-2 ms-auto" }, [
                                createVNode("div", { class: "h-2 w-2 rounded-full bg-current" })
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Field), { name: "company.type" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseRadioHeadless, {
                    value: "team_member_2",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseCard, {
                          shape: "rounded",
                          class: "text-muted-400 peer-checked:!border-primary-500 peer-checked:[&_.child]:!text-primary-500 relative border-2 px-2 py-4 grayscale peer-checked:grayscale-0"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex w-full flex-col items-center gap-2 text-center"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_Icon, {
                                name: "ph:storefront-duotone",
                                class: "child mx-auto h-5 w-5"
                              }, null, _parent5, _scopeId4));
                              _push5(`<div${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_BaseHeading, {
                                as: "h4",
                                size: "sm",
                                weight: "medium",
                                lead: "none"
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` LLC `);
                                  } else {
                                    return [
                                      createTextVNode(" LLC ")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_BaseText, {
                                size: "xs",
                                class: "text-muted-400"
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Medium company`);
                                  } else {
                                    return [
                                      createTextVNode("Medium company")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(`</div><div class="child text-muted-300 absolute right-2 top-2 ms-auto"${_scopeId4}><div class="h-2 w-2 rounded-full bg-current"${_scopeId4}></div></div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex w-full flex-col items-center gap-2 text-center" }, [
                                  createVNode(_component_Icon, {
                                    name: "ph:storefront-duotone",
                                    class: "child mx-auto h-5 w-5"
                                  }),
                                  createVNode("div", null, [
                                    createVNode(_component_BaseHeading, {
                                      as: "h4",
                                      size: "sm",
                                      weight: "medium",
                                      lead: "none"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" LLC ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_BaseText, {
                                      size: "xs",
                                      class: "text-muted-400"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Medium company")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("div", { class: "child text-muted-300 absolute right-2 top-2 ms-auto" }, [
                                    createVNode("div", { class: "h-2 w-2 rounded-full bg-current" })
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseCard, {
                            shape: "rounded",
                            class: "text-muted-400 peer-checked:!border-primary-500 peer-checked:[&_.child]:!text-primary-500 relative border-2 px-2 py-4 grayscale peer-checked:grayscale-0"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex w-full flex-col items-center gap-2 text-center" }, [
                                createVNode(_component_Icon, {
                                  name: "ph:storefront-duotone",
                                  class: "child mx-auto h-5 w-5"
                                }),
                                createVNode("div", null, [
                                  createVNode(_component_BaseHeading, {
                                    as: "h4",
                                    size: "sm",
                                    weight: "medium",
                                    lead: "none"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" LLC ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_BaseText, {
                                    size: "xs",
                                    class: "text-muted-400"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Medium company")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", { class: "child text-muted-300 absolute right-2 top-2 ms-auto" }, [
                                  createVNode("div", { class: "h-2 w-2 rounded-full bg-current" })
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseRadioHeadless, {
                      value: "team_member_2",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BaseCard, {
                          shape: "rounded",
                          class: "text-muted-400 peer-checked:!border-primary-500 peer-checked:[&_.child]:!text-primary-500 relative border-2 px-2 py-4 grayscale peer-checked:grayscale-0"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex w-full flex-col items-center gap-2 text-center" }, [
                              createVNode(_component_Icon, {
                                name: "ph:storefront-duotone",
                                class: "child mx-auto h-5 w-5"
                              }),
                              createVNode("div", null, [
                                createVNode(_component_BaseHeading, {
                                  as: "h4",
                                  size: "sm",
                                  weight: "medium",
                                  lead: "none"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" LLC ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_BaseText, {
                                  size: "xs",
                                  class: "text-muted-400"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Medium company")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("div", { class: "child text-muted-300 absolute right-2 top-2 ms-auto" }, [
                                createVNode("div", { class: "h-2 w-2 rounded-full bg-current" })
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Field), { name: "company.type" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseRadioHeadless, {
                    value: "team_member_3",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseCard, {
                          shape: "rounded",
                          class: "text-muted-400 peer-checked:!border-primary-500 peer-checked:[&_.child]:!text-primary-500 relative border-2 px-2 py-4 grayscale peer-checked:grayscale-0"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex w-full flex-col items-center gap-2 text-center"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_Icon, {
                                name: "ph:buildings-duotone",
                                class: "child mx-auto h-5 w-5"
                              }, null, _parent5, _scopeId4));
                              _push5(`<div${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_BaseHeading, {
                                as: "h4",
                                size: "sm",
                                weight: "medium",
                                lead: "none"
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Corp `);
                                  } else {
                                    return [
                                      createTextVNode(" Corp ")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_BaseText, {
                                size: "xs",
                                class: "text-muted-400"
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Bigger company`);
                                  } else {
                                    return [
                                      createTextVNode("Bigger company")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(`</div><div class="child text-muted-300 absolute right-2 top-2 ms-auto"${_scopeId4}><div class="h-2 w-2 rounded-full bg-current"${_scopeId4}></div></div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex w-full flex-col items-center gap-2 text-center" }, [
                                  createVNode(_component_Icon, {
                                    name: "ph:buildings-duotone",
                                    class: "child mx-auto h-5 w-5"
                                  }),
                                  createVNode("div", null, [
                                    createVNode(_component_BaseHeading, {
                                      as: "h4",
                                      size: "sm",
                                      weight: "medium",
                                      lead: "none"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Corp ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_BaseText, {
                                      size: "xs",
                                      class: "text-muted-400"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Bigger company")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("div", { class: "child text-muted-300 absolute right-2 top-2 ms-auto" }, [
                                    createVNode("div", { class: "h-2 w-2 rounded-full bg-current" })
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseCard, {
                            shape: "rounded",
                            class: "text-muted-400 peer-checked:!border-primary-500 peer-checked:[&_.child]:!text-primary-500 relative border-2 px-2 py-4 grayscale peer-checked:grayscale-0"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex w-full flex-col items-center gap-2 text-center" }, [
                                createVNode(_component_Icon, {
                                  name: "ph:buildings-duotone",
                                  class: "child mx-auto h-5 w-5"
                                }),
                                createVNode("div", null, [
                                  createVNode(_component_BaseHeading, {
                                    as: "h4",
                                    size: "sm",
                                    weight: "medium",
                                    lead: "none"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Corp ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_BaseText, {
                                    size: "xs",
                                    class: "text-muted-400"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Bigger company")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", { class: "child text-muted-300 absolute right-2 top-2 ms-auto" }, [
                                  createVNode("div", { class: "h-2 w-2 rounded-full bg-current" })
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseRadioHeadless, {
                      value: "team_member_3",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BaseCard, {
                          shape: "rounded",
                          class: "text-muted-400 peer-checked:!border-primary-500 peer-checked:[&_.child]:!text-primary-500 relative border-2 px-2 py-4 grayscale peer-checked:grayscale-0"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex w-full flex-col items-center gap-2 text-center" }, [
                              createVNode(_component_Icon, {
                                name: "ph:buildings-duotone",
                                class: "child mx-auto h-5 w-5"
                              }),
                              createVNode("div", null, [
                                createVNode(_component_BaseHeading, {
                                  as: "h4",
                                  size: "sm",
                                  weight: "medium",
                                  lead: "none"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Corp ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_BaseText, {
                                  size: "xs",
                                  class: "text-muted-400"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Bigger company")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("div", { class: "child text-muted-300 absolute right-2 top-2 ms-auto" }, [
                                createVNode("div", { class: "h-2 w-2 rounded-full bg-current" })
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div></div></div><div shape="curved" class="w-full space-y-8 p-10"${_scopeId}><div class="mx-auto w-full max-w-[410px]"${_scopeId}><div class="grid grid-cols-12 gap-4"${_scopeId}><div class="ltablet:col-span-6 col-span-12 lg:col-span-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "company.income" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseSelect, {
                    shape: "rounded",
                    label: "Income",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<option value="" hidden${_scopeId3}></option><option value="0 - 250K"${_scopeId3}>0 - 250K</option><option value="250K - 500K"${_scopeId3}>250K - 500K</option><option value="500K - 1M"${_scopeId3}>500K - 1M</option><option value="1M - 5M"${_scopeId3}>1M - 5M</option><option value="10M+"${_scopeId3}>10M+</option>`);
                      } else {
                        return [
                          createVNode("option", {
                            value: "",
                            hidden: ""
                          }),
                          createVNode("option", { value: "0 - 250K" }, "0 - 250K"),
                          createVNode("option", { value: "250K - 500K" }, "250K - 500K"),
                          createVNode("option", { value: "500K - 1M" }, "500K - 1M"),
                          createVNode("option", { value: "1M - 5M" }, "1M - 5M"),
                          createVNode("option", { value: "10M+" }, "10M+")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseSelect, {
                      shape: "rounded",
                      label: "Income",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, {
                      default: withCtx(() => [
                        createVNode("option", {
                          value: "",
                          hidden: ""
                        }),
                        createVNode("option", { value: "0 - 250K" }, "0 - 250K"),
                        createVNode("option", { value: "250K - 500K" }, "250K - 500K"),
                        createVNode("option", { value: "500K - 1M" }, "500K - 1M"),
                        createVNode("option", { value: "1M - 5M" }, "1M - 5M"),
                        createVNode("option", { value: "10M+" }, "10M+")
                      ]),
                      _: 2
                    }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ltablet:col-span-6 col-span-12 lg:col-span-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "company.employees" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseSelect, {
                    shape: "rounded",
                    label: "Employees",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<option value="" hidden${_scopeId3}></option><option value="1-10 employees"${_scopeId3}>1-10 employees</option><option value="10-50 employees"${_scopeId3}>10-50 employees</option><option value="50-100 employees"${_scopeId3}>50-100 employees</option><option value="100+ employees"${_scopeId3}>100+ employees</option>`);
                      } else {
                        return [
                          createVNode("option", {
                            value: "",
                            hidden: ""
                          }),
                          createVNode("option", { value: "1-10 employees" }, "1-10 employees"),
                          createVNode("option", { value: "10-50 employees" }, "10-50 employees"),
                          createVNode("option", { value: "50-100 employees" }, "50-100 employees"),
                          createVNode("option", { value: "100+ employees" }, "100+ employees")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseSelect, {
                      shape: "rounded",
                      label: "Employees",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, {
                      default: withCtx(() => [
                        createVNode("option", {
                          value: "",
                          hidden: ""
                        }),
                        createVNode("option", { value: "1-10 employees" }, "1-10 employees"),
                        createVNode("option", { value: "10-50 employees" }, "10-50 employees"),
                        createVNode("option", { value: "50-100 employees" }, "50-100 employees"),
                        createVNode("option", { value: "100+ employees" }, "100+ employees")
                      ]),
                      _: 2
                    }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ltablet:col-span-8 col-span-12 lg:col-span-8"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "company.manager" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseListbox, {
                    label: "Manager",
                    items: people,
                    properties: {
                      value: "id",
                      label: "name",
                      sublabel: "text",
                      media: "media"
                    },
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseListbox, {
                      label: "Manager",
                      items: people,
                      properties: {
                        value: "id",
                        label: "name",
                        sublabel: "text",
                        media: "media"
                      },
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
            _push2(`</div><div class="ltablet:col-span-4 col-span-12 lg:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "company.status" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseSelect, {
                    shape: "rounded",
                    label: "Status",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<option value="" hidden${_scopeId3}></option><option value="active"${_scopeId3}>Active</option><option value="inactive"${_scopeId3}>Inactive</option>`);
                      } else {
                        return [
                          createVNode("option", {
                            value: "",
                            hidden: ""
                          }),
                          createVNode("option", { value: "active" }, "Active"),
                          createVNode("option", { value: "inactive" }, "Inactive")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseSelect, {
                      shape: "rounded",
                      label: "Status",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, {
                      default: withCtx(() => [
                        createVNode("option", {
                          value: "",
                          hidden: ""
                        }),
                        createVNode("option", { value: "active" }, "Active"),
                        createVNode("option", { value: "inactive" }, "Inactive")
                      ]),
                      _: 2
                    }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="col-span-12"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "company.notes" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseTextarea, {
                    label: "Company notes",
                    placeholder: "Write some notes...",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseTextarea, {
                      label: "Company notes",
                      placeholder: "Write some notes...",
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
            _push2(ssrRenderComponent(unref(Field), { name: "company.privateRecord" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseCheckbox, {
                    label: "This record is private",
                    shape: "rounded",
                    color: "primary",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseCheckbox, {
                      label: "This record is private",
                      shape: "rounded",
                      color: "primary",
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
            _push2(`</div></div><div class="mt-5 flex flex-col-reverse text-right md:block md:space-x-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              type: "submit",
              color: "primary",
              class: "!h-12 w-full sm:w-40"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Create Company `);
                } else {
                  return [
                    createTextVNode(" Create Company ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></form>`);
          } else {
            return [
              createVNode("form", {
                method: "POST",
                action: "",
                class: "divide-muted-200 dark:divide-muted-700 grid divide-x sm:grid-cols-2",
                onSubmit: withModifiers(unref(onSubmit), ["prevent"])
              }, [
                createVNode("div", {
                  shape: "curved",
                  class: "bg-muted-50 dark:bg-muted-800/60 space-y-8 p-10"
                }, [
                  createVNode("div", { class: "mx-auto flex w-full max-w-[410px] flex-col" }, [
                    createVNode("div", null, [
                      createVNode("div", null, [
                        createVNode("div", { class: "relative mb-5 flex flex-col items-center justify-center gap-4" }, [
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
                              createVNode("div", { class: "relative h-20 w-20" }, [
                                files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                                  key: 0,
                                  src: preview(files.item(0)).value,
                                  alt: "Upload preview",
                                  class: "bg-muted-200 dark:bg-muted-700/60 h-20 w-20 rounded-full object-cover object-center"
                                }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                                  key: 1,
                                  src: unref(currentAvatar),
                                  alt: "Upload preview",
                                  class: "bg-muted-200 dark:bg-muted-700/60 h-20 w-20 rounded-full object-cover object-center dark:invert"
                                }, null, 8, ["src"])),
                                files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                                  key: 2,
                                  class: "absolute bottom-0 end-0 z-20"
                                }, [
                                  createVNode(_component_BaseButtonIcon, {
                                    size: "sm",
                                    shape: "full",
                                    onClick: ($event) => remove(files.item(0)),
                                    "data-nui-tooltip": "Remove image",
                                    class: "scale-90"
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
                        ]),
                        createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                          createVNode("div", { class: "ltablet:col-span-6 col-span-12 lg:col-span-6" }, [
                            createVNode(unref(Field), { name: "company.name" }, {
                              default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                                createVNode(_component_BaseInput, {
                                  label: "Company Name",
                                  placeholder: "Ex: Acme Inc.",
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
                          createVNode("div", { class: "ltablet:col-span-6 col-span-12 lg:col-span-6" }, [
                            createVNode(unref(Field), { name: "company.email" }, {
                              default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                                createVNode(_component_BaseInput, {
                                  label: "Company Email",
                                  placeholder: "Ex: hello@acme.co",
                                  "model-value": field.value,
                                  error: errorMessage,
                                  disabled: unref(isSubmitting),
                                  type: "email",
                                  "onUpdate:modelValue": handleChange,
                                  onBlur: handleBlur
                                }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "col-span-12" }, [
                            createVNode(unref(Field), { name: "company.website" }, {
                              default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                                createVNode(_component_BaseInput, {
                                  icon: "lucide:globe",
                                  label: "Company website",
                                  placeholder: "Ex: https://acme.co",
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
                          ])
                        ]),
                        createVNode("div", { class: "mb-6 mt-4" }, [
                          createVNode("label", { class: "nui-label pb-2 text-[0.825rem]" }, "Company type"),
                          createVNode("div", { class: "ptablet:grid-cols-2 ltablet:grid-cols-3 grid gap-4 lg:grid-cols-3" }, [
                            createVNode(unref(Field), { name: "company.type" }, {
                              default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                                createVNode(_component_BaseRadioHeadless, {
                                  value: "team_member_1",
                                  "model-value": field.value,
                                  error: errorMessage,
                                  disabled: unref(isSubmitting),
                                  "onUpdate:modelValue": handleChange,
                                  onBlur: handleBlur
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_BaseCard, {
                                      shape: "rounded",
                                      class: "text-muted-400 peer-checked:!border-primary-500 peer-checked:[&_.child]:!text-primary-500 relative border-2 px-2 py-4 grayscale peer-checked:grayscale-0"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "flex w-full flex-col items-center gap-2 text-center" }, [
                                          createVNode(_component_Icon, {
                                            name: "ph:house-simple-duotone",
                                            class: "child mx-auto h-5 w-5"
                                          }),
                                          createVNode("div", null, [
                                            createVNode(_component_BaseHeading, {
                                              as: "h4",
                                              size: "sm",
                                              weight: "medium",
                                              lead: "none"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Solo ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_BaseText, {
                                              size: "xs",
                                              class: "text-muted-400"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Small company")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          createVNode("div", { class: "child text-muted-300 absolute right-2 top-2 ms-auto" }, [
                                            createVNode("div", { class: "h-2 w-2 rounded-full bg-current" })
                                          ])
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                              ]),
                              _: 1
                            }),
                            createVNode(unref(Field), { name: "company.type" }, {
                              default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                                createVNode(_component_BaseRadioHeadless, {
                                  value: "team_member_2",
                                  "model-value": field.value,
                                  error: errorMessage,
                                  disabled: unref(isSubmitting),
                                  "onUpdate:modelValue": handleChange,
                                  onBlur: handleBlur
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_BaseCard, {
                                      shape: "rounded",
                                      class: "text-muted-400 peer-checked:!border-primary-500 peer-checked:[&_.child]:!text-primary-500 relative border-2 px-2 py-4 grayscale peer-checked:grayscale-0"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "flex w-full flex-col items-center gap-2 text-center" }, [
                                          createVNode(_component_Icon, {
                                            name: "ph:storefront-duotone",
                                            class: "child mx-auto h-5 w-5"
                                          }),
                                          createVNode("div", null, [
                                            createVNode(_component_BaseHeading, {
                                              as: "h4",
                                              size: "sm",
                                              weight: "medium",
                                              lead: "none"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" LLC ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_BaseText, {
                                              size: "xs",
                                              class: "text-muted-400"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Medium company")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          createVNode("div", { class: "child text-muted-300 absolute right-2 top-2 ms-auto" }, [
                                            createVNode("div", { class: "h-2 w-2 rounded-full bg-current" })
                                          ])
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                              ]),
                              _: 1
                            }),
                            createVNode(unref(Field), { name: "company.type" }, {
                              default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                                createVNode(_component_BaseRadioHeadless, {
                                  value: "team_member_3",
                                  "model-value": field.value,
                                  error: errorMessage,
                                  disabled: unref(isSubmitting),
                                  "onUpdate:modelValue": handleChange,
                                  onBlur: handleBlur
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_BaseCard, {
                                      shape: "rounded",
                                      class: "text-muted-400 peer-checked:!border-primary-500 peer-checked:[&_.child]:!text-primary-500 relative border-2 px-2 py-4 grayscale peer-checked:grayscale-0"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "flex w-full flex-col items-center gap-2 text-center" }, [
                                          createVNode(_component_Icon, {
                                            name: "ph:buildings-duotone",
                                            class: "child mx-auto h-5 w-5"
                                          }),
                                          createVNode("div", null, [
                                            createVNode(_component_BaseHeading, {
                                              as: "h4",
                                              size: "sm",
                                              weight: "medium",
                                              lead: "none"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Corp ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_BaseText, {
                                              size: "xs",
                                              class: "text-muted-400"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Bigger company")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          createVNode("div", { class: "child text-muted-300 absolute right-2 top-2 ms-auto" }, [
                                            createVNode("div", { class: "h-2 w-2 rounded-full bg-current" })
                                          ])
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                createVNode("div", {
                  shape: "curved",
                  class: "w-full space-y-8 p-10"
                }, [
                  createVNode("div", { class: "mx-auto w-full max-w-[410px]" }, [
                    createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                      createVNode("div", { class: "ltablet:col-span-6 col-span-12 lg:col-span-6" }, [
                        createVNode(unref(Field), { name: "company.income" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseSelect, {
                              shape: "rounded",
                              label: "Income",
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, {
                              default: withCtx(() => [
                                createVNode("option", {
                                  value: "",
                                  hidden: ""
                                }),
                                createVNode("option", { value: "0 - 250K" }, "0 - 250K"),
                                createVNode("option", { value: "250K - 500K" }, "250K - 500K"),
                                createVNode("option", { value: "500K - 1M" }, "500K - 1M"),
                                createVNode("option", { value: "1M - 5M" }, "1M - 5M"),
                                createVNode("option", { value: "10M+" }, "10M+")
                              ]),
                              _: 2
                            }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "ltablet:col-span-6 col-span-12 lg:col-span-6" }, [
                        createVNode(unref(Field), { name: "company.employees" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseSelect, {
                              shape: "rounded",
                              label: "Employees",
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, {
                              default: withCtx(() => [
                                createVNode("option", {
                                  value: "",
                                  hidden: ""
                                }),
                                createVNode("option", { value: "1-10 employees" }, "1-10 employees"),
                                createVNode("option", { value: "10-50 employees" }, "10-50 employees"),
                                createVNode("option", { value: "50-100 employees" }, "50-100 employees"),
                                createVNode("option", { value: "100+ employees" }, "100+ employees")
                              ]),
                              _: 2
                            }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "ltablet:col-span-8 col-span-12 lg:col-span-8" }, [
                        createVNode(unref(Field), { name: "company.manager" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseListbox, {
                              label: "Manager",
                              items: people,
                              properties: {
                                value: "id",
                                label: "name",
                                sublabel: "text",
                                media: "media"
                              },
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
                      createVNode("div", { class: "ltablet:col-span-4 col-span-12 lg:col-span-4" }, [
                        createVNode(unref(Field), { name: "company.status" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseSelect, {
                              shape: "rounded",
                              label: "Status",
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, {
                              default: withCtx(() => [
                                createVNode("option", {
                                  value: "",
                                  hidden: ""
                                }),
                                createVNode("option", { value: "active" }, "Active"),
                                createVNode("option", { value: "inactive" }, "Inactive")
                              ]),
                              _: 2
                            }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "col-span-12" }, [
                        createVNode(unref(Field), { name: "company.notes" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseTextarea, {
                              label: "Company notes",
                              placeholder: "Write some notes...",
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
                        createVNode(unref(Field), { name: "company.privateRecord" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseCheckbox, {
                              label: "This record is private",
                              shape: "rounded",
                              color: "primary",
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode("div", { class: "mt-5 flex flex-col-reverse text-right md:block md:space-x-3" }, [
                      createVNode(_component_BaseButton, {
                        type: "submit",
                        color: "primary",
                        class: "!h-12 w-full sm:w-40"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Create Company ")
                        ]),
                        _: 1
                      })
                    ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/form-1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=form-1-9fe2fa41.mjs.map
