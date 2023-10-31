import { a as useToaster, j as _sfc_main$C, _ as _sfc_main$p, i as _sfc_main$D, g as _sfc_main$z, U as _sfc_main$y, s as _sfc_main$E, e as __nuxt_component_0$5, d as _sfc_main$x, f as __nuxt_component_2 } from '../server.mjs';
import { _ as _sfc_main$1 } from './TairoFormGroup-3552ebb0.mjs';
import { _ as _sfc_main$2 } from './BaseSelect-50588309.mjs';
import { defineComponent, computed, ref, watch, mergeProps, withCtx, createTextVNode, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
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
import './IconChevronDown-af6375e6.mjs';

const ONE_MB = 1e6;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "form-2",
  __ssrInlineRender: true,
  setup(__props) {
    const VALIDATION_TEXT = {
      FIRSTNAME_REQUIRED: "First name can't be empty",
      LASTNAME_REQUIRED: "Last name can't be empty",
      EMAIL_REQUIRED: "Email address can't be empty",
      OPTION_REQUIRED: "Please select an option",
      ADDRESS_REQUIRED: "Please enter an address",
      CITY_REQUIRED: "Please enter a city",
      STATE_REQUIRED: "Please enter a state",
      ZIPCODE_REQUIRED: "Please enter a zipcode",
      STATUS_REQUIRED: "Pick a status",
      AVATAR_TOO_BIG: `Avatar size must be less than 1MB`
    };
    const zodSchema = z.object({
      avatar: z.custom((v) => v instanceof File).nullable(),
      doctor: z.object({
        firstName: z.string().min(1, VALIDATION_TEXT.FIRSTNAME_REQUIRED),
        lastName: z.string().min(1, VALIDATION_TEXT.LASTNAME_REQUIRED),
        email: z.string().min(1, VALIDATION_TEXT.EMAIL_REQUIRED),
        comments: z.string().optional(),
        status: z.union([
          z.literal("intern"),
          z.literal("resident"),
          z.literal("titular")
        ]).nullable(),
        speciality: z.union([
          z.literal("Surgery"),
          z.literal("Cardiology"),
          z.literal("Pediatry"),
          z.literal("Dermataulogy"),
          z.literal("Traumatology")
        ]).nullable(),
        experience: z.union([
          z.literal("0-5"),
          z.literal("5-10"),
          z.literal("10-15"),
          z.literal("15+")
        ]).nullable(),
        rating: z.union([
          z.literal("1"),
          z.literal("2"),
          z.literal("3"),
          z.literal("4"),
          z.literal("5")
        ]).nullable(),
        address: z.string().min(1, VALIDATION_TEXT.ADDRESS_REQUIRED),
        city: z.string().min(1, VALIDATION_TEXT.CITY_REQUIRED),
        state: z.string().min(1, VALIDATION_TEXT.STATE_REQUIRED),
        zipcode: z.string().min(5, VALIDATION_TEXT.ZIPCODE_REQUIRED),
        country: z.string()
      })
    }).superRefine((data, ctx) => {
      if (data.avatar && data.avatar.size > ONE_MB) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.AVATAR_TOO_BIG,
          path: ["avatar"]
        });
      }
      if (!data.doctor.status) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.OPTION_REQUIRED,
          path: ["doctor.status"]
        });
      }
      if (!data.doctor.speciality) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.OPTION_REQUIRED,
          path: ["doctor.speciality"]
        });
      }
      if (!data.doctor.experience) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.OPTION_REQUIRED,
          path: ["doctor.experience"]
        });
      }
      if (!data.doctor.rating) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.OPTION_REQUIRED,
          path: ["doctor.rating"]
        });
      }
    });
    const validationSchema = toTypedSchema(zodSchema);
    const initialValues = computed(() => ({
      avatar: null,
      doctor: {
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        status: null,
        speciality: null,
        experience: null,
        rating: null,
        address: "",
        city: "",
        state: "",
        zipcode: "",
        country: "United States"
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
    computed(() => Object.keys(errors.value).length);
    const inputFile = ref();
    useFieldError("avatar");
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
        console.log("doctor-create-success", values2);
        try {
          await new Promise((resolve, reject) => {
            if (values2.doctor.speciality === "Cardiology") {
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
            message: `Doctor has been added!`,
            color: "success",
            icon: "ph:check",
            closable: true
          });
        } catch (error) {
          if (error.message === "Fake backend validation error") {
            setFieldError("doctor.speciality", "We have too many cardiologists");
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
        console.log("doctor-create-error", error);
        document.documentElement.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    );
    const currentRating = computed(() => {
      if (values.doctor?.rating === void 0 || values.doctor?.rating === null)
        return 0;
      return parseInt(values.doctor?.rating);
    });
    const currentRatingText = computed(() => {
      switch (currentRating.value) {
        case 1:
          return "Standard";
        case 2:
          return "Good";
        case 3:
          return "Advanced";
        case 4:
          return "Expert";
        case 5:
          return "Top 3%";
        default:
          return "n/a";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseText = _sfc_main$D;
      const _component_TairoFormGroup = _sfc_main$1;
      const _component_BaseInput = _sfc_main$z;
      const _component_BaseSelect = _sfc_main$2;
      const _component_BaseTextarea = _sfc_main$y;
      const _component_BaseAvatar = _sfc_main$E;
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_BaseButton = _sfc_main$x;
      const _component_Icon = __nuxt_component_2;
      _push(`<form${ssrRenderAttrs(mergeProps({
        action: "",
        method: "POST",
        class: "grid grid-cols-12 gap-6"
      }, _attrs))}><div class="ltablet:col-span-8 col-span-12 lg:col-span-8">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "rounded",
        class: "p-4 md:p-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 gap-4 gap-y-2 text-sm lg:grid-cols-12"${_scopeId}><div class="col-span-12 mb-10 text-gray-600 sm:col-span-3 sm:mb-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h2",
              size: "lg",
              weight: "medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` New Doctor `);
                } else {
                  return [
                    createTextVNode(" New Doctor ")
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
                  _push3(`Fill in the required fields`);
                } else {
                  return [
                    createTextVNode("Fill in the required fields")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ltablet:col-span-9 col-span-12 space-y-10 lg:col-span-9"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TairoFormGroup, {
              label: "General info",
              sublabel: "Some general information"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-12 gap-4"${_scopeId2}><div class="col-span-12 md:col-span-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "doctor.firstName" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInput, {
                          label: "First name",
                          icon: "ph:user-duotone",
                          placeholder: "Ex: John",
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          type: "text",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseInput, {
                            label: "First name",
                            icon: "ph:user-duotone",
                            placeholder: "Ex: John",
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
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-12 md:col-span-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "doctor.lastName" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInput, {
                          label: "Last name",
                          icon: "ph:user-duotone",
                          placeholder: "Ex: Doe",
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          type: "text",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseInput, {
                            label: "Last name",
                            icon: "ph:user-duotone",
                            placeholder: "Ex: Doe",
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
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-12 md:col-span-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "doctor.email" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInput, {
                          label: "Email Address",
                          icon: "ph:envelope-duotone",
                          placeholder: "Ex: johndoe@gmail.com",
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          type: "email",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseInput, {
                            label: "Email Address",
                            icon: "ph:envelope-duotone",
                            placeholder: "Ex: johndoe@gmail.com",
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
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-12 md:col-span-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "doctor.speciality" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseSelect, {
                          label: "Speciality",
                          icon: "ph:first-aid-duotone",
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<option value="" hidden${_scopeId4}></option><option value="Surgery"${_scopeId4}>Surgery</option><option value="Cardiology"${_scopeId4}>Cardiology</option><option value="Pediatry"${_scopeId4}>Pediatry</option><option value="Dermatology"${_scopeId4}>Dermatology</option><option value="Traumatology"${_scopeId4}>Traumatology</option>`);
                            } else {
                              return [
                                createVNode("option", {
                                  value: "",
                                  hidden: ""
                                }),
                                createVNode("option", { value: "Surgery" }, "Surgery"),
                                createVNode("option", { value: "Cardiology" }, "Cardiology"),
                                createVNode("option", { value: "Pediatry" }, "Pediatry"),
                                createVNode("option", { value: "Dermatology" }, "Dermatology"),
                                createVNode("option", { value: "Traumatology" }, "Traumatology")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseSelect, {
                            label: "Speciality",
                            icon: "ph:first-aid-duotone",
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
                              createVNode("option", { value: "Surgery" }, "Surgery"),
                              createVNode("option", { value: "Cardiology" }, "Cardiology"),
                              createVNode("option", { value: "Pediatry" }, "Pediatry"),
                              createVNode("option", { value: "Dermatology" }, "Dermatology"),
                              createVNode("option", { value: "Traumatology" }, "Traumatology")
                            ]),
                            _: 2
                          }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-12"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "doctor.comments" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseTextarea, {
                          label: "Comments",
                          placeholder: "Ex: General Orthopedic Surgery, Foot & Ankle Surgery",
                          rows: "3",
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseTextarea, {
                            label: "Comments",
                            placeholder: "Ex: General Orthopedic Surgery, Foot & Ankle Surgery",
                            rows: "3",
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
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-12 md:col-span-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "doctor.status" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseSelect, {
                          label: "Status",
                          icon: "ph:heartbeat-duotone",
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<option value="" hidden${_scopeId4}></option><option value="intern"${_scopeId4}>Intern</option><option value="resident"${_scopeId4}>Resident</option><option value="titular"${_scopeId4}>Titular</option>`);
                            } else {
                              return [
                                createVNode("option", {
                                  value: "",
                                  hidden: ""
                                }),
                                createVNode("option", { value: "intern" }, "Intern"),
                                createVNode("option", { value: "resident" }, "Resident"),
                                createVNode("option", { value: "titular" }, "Titular")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseSelect, {
                            label: "Status",
                            icon: "ph:heartbeat-duotone",
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
                              createVNode("option", { value: "intern" }, "Intern"),
                              createVNode("option", { value: "resident" }, "Resident"),
                              createVNode("option", { value: "titular" }, "Titular")
                            ]),
                            _: 2
                          }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-12 md:col-span-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "doctor.experience" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseSelect, {
                          label: "Experience",
                          icon: "ph:trophy-duotone",
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<option value="" hidden${_scopeId4}></option><option value="0-5"${_scopeId4}>0-5</option><option value="5-10"${_scopeId4}>5-10</option><option value="10-15"${_scopeId4}>10-15</option><option value="15+"${_scopeId4}>15+</option>`);
                            } else {
                              return [
                                createVNode("option", {
                                  value: "",
                                  hidden: ""
                                }),
                                createVNode("option", { value: "0-5" }, "0-5"),
                                createVNode("option", { value: "5-10" }, "5-10"),
                                createVNode("option", { value: "10-15" }, "10-15"),
                                createVNode("option", { value: "15+" }, "15+")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseSelect, {
                            label: "Experience",
                            icon: "ph:trophy-duotone",
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
                              createVNode("option", { value: "0-5" }, "0-5"),
                              createVNode("option", { value: "5-10" }, "5-10"),
                              createVNode("option", { value: "10-15" }, "10-15"),
                              createVNode("option", { value: "15+" }, "15+")
                            ]),
                            _: 2
                          }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-12 md:col-span-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "doctor.rating" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseSelect, {
                          label: "Rating",
                          icon: "ph:star-duotone",
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<option value="" hidden${_scopeId4}></option><option value="1"${_scopeId4}>B+</option><option value="2"${_scopeId4}>A</option><option value="3"${_scopeId4}>A+</option><option value="4"${_scopeId4}>S</option><option value="5"${_scopeId4}>S+</option>`);
                            } else {
                              return [
                                createVNode("option", {
                                  value: "",
                                  hidden: ""
                                }),
                                createVNode("option", { value: "1" }, "B+"),
                                createVNode("option", { value: "2" }, "A"),
                                createVNode("option", { value: "3" }, "A+"),
                                createVNode("option", { value: "4" }, "S"),
                                createVNode("option", { value: "5" }, "S+")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseSelect, {
                            label: "Rating",
                            icon: "ph:star-duotone",
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
                              createVNode("option", { value: "1" }, "B+"),
                              createVNode("option", { value: "2" }, "A"),
                              createVNode("option", { value: "3" }, "A+"),
                              createVNode("option", { value: "4" }, "S"),
                              createVNode("option", { value: "5" }, "S+")
                            ]),
                            _: 2
                          }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                      createVNode("div", { class: "col-span-12 md:col-span-6" }, [
                        createVNode(unref(Field), { name: "doctor.firstName" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseInput, {
                              label: "First name",
                              icon: "ph:user-duotone",
                              placeholder: "Ex: John",
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
                      createVNode("div", { class: "col-span-12 md:col-span-6" }, [
                        createVNode(unref(Field), { name: "doctor.lastName" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseInput, {
                              label: "Last name",
                              icon: "ph:user-duotone",
                              placeholder: "Ex: Doe",
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
                      createVNode("div", { class: "col-span-12 md:col-span-6" }, [
                        createVNode(unref(Field), { name: "doctor.email" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseInput, {
                              label: "Email Address",
                              icon: "ph:envelope-duotone",
                              placeholder: "Ex: johndoe@gmail.com",
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
                      createVNode("div", { class: "col-span-12 md:col-span-6" }, [
                        createVNode(unref(Field), { name: "doctor.speciality" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseSelect, {
                              label: "Speciality",
                              icon: "ph:first-aid-duotone",
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
                                createVNode("option", { value: "Surgery" }, "Surgery"),
                                createVNode("option", { value: "Cardiology" }, "Cardiology"),
                                createVNode("option", { value: "Pediatry" }, "Pediatry"),
                                createVNode("option", { value: "Dermatology" }, "Dermatology"),
                                createVNode("option", { value: "Traumatology" }, "Traumatology")
                              ]),
                              _: 2
                            }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "col-span-12" }, [
                        createVNode(unref(Field), { name: "doctor.comments" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseTextarea, {
                              label: "Comments",
                              placeholder: "Ex: General Orthopedic Surgery, Foot & Ankle Surgery",
                              rows: "3",
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
                      createVNode("div", { class: "col-span-12 md:col-span-4" }, [
                        createVNode(unref(Field), { name: "doctor.status" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseSelect, {
                              label: "Status",
                              icon: "ph:heartbeat-duotone",
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
                                createVNode("option", { value: "intern" }, "Intern"),
                                createVNode("option", { value: "resident" }, "Resident"),
                                createVNode("option", { value: "titular" }, "Titular")
                              ]),
                              _: 2
                            }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "col-span-12 md:col-span-4" }, [
                        createVNode(unref(Field), { name: "doctor.experience" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseSelect, {
                              label: "Experience",
                              icon: "ph:trophy-duotone",
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
                                createVNode("option", { value: "0-5" }, "0-5"),
                                createVNode("option", { value: "5-10" }, "5-10"),
                                createVNode("option", { value: "10-15" }, "10-15"),
                                createVNode("option", { value: "15+" }, "15+")
                              ]),
                              _: 2
                            }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "col-span-12 md:col-span-4" }, [
                        createVNode(unref(Field), { name: "doctor.rating" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseSelect, {
                              label: "Rating",
                              icon: "ph:star-duotone",
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
                                createVNode("option", { value: "1" }, "B+"),
                                createVNode("option", { value: "2" }, "A"),
                                createVNode("option", { value: "3" }, "A+"),
                                createVNode("option", { value: "4" }, "S"),
                                createVNode("option", { value: "5" }, "S+")
                              ]),
                              _: 2
                            }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
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
              label: "Personal info",
              sublabel: "Some personal information"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-12 gap-4"${_scopeId2}><div class="col-span-12"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "doctor.address" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInput, {
                          label: "Address / Street",
                          icon: "ph:map-pin-duotone",
                          placeholder: "Ex: App 2 suite g3 santa monica",
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseInput, {
                            label: "Address / Street",
                            icon: "ph:map-pin-duotone",
                            placeholder: "Ex: App 2 suite g3 santa monica",
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
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-12 sm:col-span-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "doctor.city" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInput, {
                          label: "City",
                          icon: "ph:buildings-duotone",
                          placeholder: "Ex: Los Angeles",
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          type: "text",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseInput, {
                            label: "City",
                            icon: "ph:buildings-duotone",
                            placeholder: "Ex: Los Angeles",
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
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-12 sm:col-span-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "doctor.state" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInput, {
                          label: "State/Province",
                          icon: "ph:globe-duotone",
                          placeholder: "Ex: CA",
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          type: "text",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseInput, {
                            label: "State/Province",
                            icon: "ph:globe-duotone",
                            placeholder: "Ex: CA",
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
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-12 sm:col-span-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "doctor.zipcode" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInput, {
                          type: "text",
                          label: "Zip Code",
                          icon: "ph:paper-plane-tilt-duotone",
                          placeholder: "Ex: 912656",
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseInput, {
                            type: "text",
                            label: "Zip Code",
                            icon: "ph:paper-plane-tilt-duotone",
                            placeholder: "Ex: 912656",
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
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-12"${_scopeId2}><div class="bg-muted-100 dark:bg-muted-700/70 flex items-center gap-2 rounded-lg p-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseAvatar, {
                    size: "xs",
                    src: "/img/icons/flags/united-states-of-america.svg"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseText, {
                    size: "sm",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`United States`);
                      } else {
                        return [
                          createTextVNode("United States")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="ms-auto"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "#",
                    class: "text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Change`);
                      } else {
                        return [
                          createTextVNode("Change")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                      createVNode("div", { class: "col-span-12" }, [
                        createVNode(unref(Field), { name: "doctor.address" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseInput, {
                              label: "Address / Street",
                              icon: "ph:map-pin-duotone",
                              placeholder: "Ex: App 2 suite g3 santa monica",
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
                      createVNode("div", { class: "col-span-12 sm:col-span-4" }, [
                        createVNode(unref(Field), { name: "doctor.city" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseInput, {
                              label: "City",
                              icon: "ph:buildings-duotone",
                              placeholder: "Ex: Los Angeles",
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
                      createVNode("div", { class: "col-span-12 sm:col-span-4" }, [
                        createVNode(unref(Field), { name: "doctor.state" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseInput, {
                              label: "State/Province",
                              icon: "ph:globe-duotone",
                              placeholder: "Ex: CA",
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
                      createVNode("div", { class: "col-span-12 sm:col-span-4" }, [
                        createVNode(unref(Field), { name: "doctor.zipcode" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseInput, {
                              type: "text",
                              label: "Zip Code",
                              icon: "ph:paper-plane-tilt-duotone",
                              placeholder: "Ex: 912656",
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
                        createVNode("div", { class: "bg-muted-100 dark:bg-muted-700/70 flex items-center gap-2 rounded-lg p-4" }, [
                          createVNode(_component_BaseAvatar, {
                            size: "xs",
                            src: "/img/icons/flags/united-states-of-america.svg"
                          }),
                          createVNode(_component_BaseText, {
                            size: "sm",
                            class: "text-muted-500 dark:text-muted-400"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("United States")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "ms-auto" }, [
                            createVNode(_component_NuxtLink, {
                              to: "#",
                              class: "text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Change")
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="text-right md:col-span-5"${_scopeId}><div class="-mt-4 inline-flex w-full items-center justify-end gap-2 sm:w-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, { class: "!h-12 w-full sm:w-40" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Cancel `);
                } else {
                  return [
                    createTextVNode(" Cancel ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButton, {
              type: "submit",
              color: "primary",
              class: "!h-12 w-full sm:w-40"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Submit `);
                } else {
                  return [
                    createTextVNode(" Submit ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 gap-4 gap-y-2 text-sm lg:grid-cols-12" }, [
                createVNode("div", { class: "col-span-12 mb-10 text-gray-600 sm:col-span-3 sm:mb-0" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h2",
                    size: "lg",
                    weight: "medium"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" New Doctor ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseText, {
                    size: "xs",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Fill in the required fields")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "ltablet:col-span-9 col-span-12 space-y-10 lg:col-span-9" }, [
                  createVNode(_component_TairoFormGroup, {
                    label: "General info",
                    sublabel: "Some general information"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                        createVNode("div", { class: "col-span-12 md:col-span-6" }, [
                          createVNode(unref(Field), { name: "doctor.firstName" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseInput, {
                                label: "First name",
                                icon: "ph:user-duotone",
                                placeholder: "Ex: John",
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
                        createVNode("div", { class: "col-span-12 md:col-span-6" }, [
                          createVNode(unref(Field), { name: "doctor.lastName" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseInput, {
                                label: "Last name",
                                icon: "ph:user-duotone",
                                placeholder: "Ex: Doe",
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
                        createVNode("div", { class: "col-span-12 md:col-span-6" }, [
                          createVNode(unref(Field), { name: "doctor.email" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseInput, {
                                label: "Email Address",
                                icon: "ph:envelope-duotone",
                                placeholder: "Ex: johndoe@gmail.com",
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
                        createVNode("div", { class: "col-span-12 md:col-span-6" }, [
                          createVNode(unref(Field), { name: "doctor.speciality" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseSelect, {
                                label: "Speciality",
                                icon: "ph:first-aid-duotone",
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
                                  createVNode("option", { value: "Surgery" }, "Surgery"),
                                  createVNode("option", { value: "Cardiology" }, "Cardiology"),
                                  createVNode("option", { value: "Pediatry" }, "Pediatry"),
                                  createVNode("option", { value: "Dermatology" }, "Dermatology"),
                                  createVNode("option", { value: "Traumatology" }, "Traumatology")
                                ]),
                                _: 2
                              }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "col-span-12" }, [
                          createVNode(unref(Field), { name: "doctor.comments" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseTextarea, {
                                label: "Comments",
                                placeholder: "Ex: General Orthopedic Surgery, Foot & Ankle Surgery",
                                rows: "3",
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
                        createVNode("div", { class: "col-span-12 md:col-span-4" }, [
                          createVNode(unref(Field), { name: "doctor.status" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseSelect, {
                                label: "Status",
                                icon: "ph:heartbeat-duotone",
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
                                  createVNode("option", { value: "intern" }, "Intern"),
                                  createVNode("option", { value: "resident" }, "Resident"),
                                  createVNode("option", { value: "titular" }, "Titular")
                                ]),
                                _: 2
                              }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "col-span-12 md:col-span-4" }, [
                          createVNode(unref(Field), { name: "doctor.experience" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseSelect, {
                                label: "Experience",
                                icon: "ph:trophy-duotone",
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
                                  createVNode("option", { value: "0-5" }, "0-5"),
                                  createVNode("option", { value: "5-10" }, "5-10"),
                                  createVNode("option", { value: "10-15" }, "10-15"),
                                  createVNode("option", { value: "15+" }, "15+")
                                ]),
                                _: 2
                              }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "col-span-12 md:col-span-4" }, [
                          createVNode(unref(Field), { name: "doctor.rating" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseSelect, {
                                label: "Rating",
                                icon: "ph:star-duotone",
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
                                  createVNode("option", { value: "1" }, "B+"),
                                  createVNode("option", { value: "2" }, "A"),
                                  createVNode("option", { value: "3" }, "A+"),
                                  createVNode("option", { value: "4" }, "S"),
                                  createVNode("option", { value: "5" }, "S+")
                                ]),
                                _: 2
                              }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TairoFormGroup, {
                    label: "Personal info",
                    sublabel: "Some personal information"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                        createVNode("div", { class: "col-span-12" }, [
                          createVNode(unref(Field), { name: "doctor.address" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseInput, {
                                label: "Address / Street",
                                icon: "ph:map-pin-duotone",
                                placeholder: "Ex: App 2 suite g3 santa monica",
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
                        createVNode("div", { class: "col-span-12 sm:col-span-4" }, [
                          createVNode(unref(Field), { name: "doctor.city" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseInput, {
                                label: "City",
                                icon: "ph:buildings-duotone",
                                placeholder: "Ex: Los Angeles",
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
                        createVNode("div", { class: "col-span-12 sm:col-span-4" }, [
                          createVNode(unref(Field), { name: "doctor.state" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseInput, {
                                label: "State/Province",
                                icon: "ph:globe-duotone",
                                placeholder: "Ex: CA",
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
                        createVNode("div", { class: "col-span-12 sm:col-span-4" }, [
                          createVNode(unref(Field), { name: "doctor.zipcode" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseInput, {
                                type: "text",
                                label: "Zip Code",
                                icon: "ph:paper-plane-tilt-duotone",
                                placeholder: "Ex: 912656",
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
                          createVNode("div", { class: "bg-muted-100 dark:bg-muted-700/70 flex items-center gap-2 rounded-lg p-4" }, [
                            createVNode(_component_BaseAvatar, {
                              size: "xs",
                              src: "/img/icons/flags/united-states-of-america.svg"
                            }),
                            createVNode(_component_BaseText, {
                              size: "sm",
                              class: "text-muted-500 dark:text-muted-400"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("United States")
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "ms-auto" }, [
                              createVNode(_component_NuxtLink, {
                                to: "#",
                                class: "text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Change")
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "text-right md:col-span-5" }, [
                    createVNode("div", { class: "-mt-4 inline-flex w-full items-center justify-end gap-2 sm:w-auto" }, [
                      createVNode(_component_BaseButton, { class: "!h-12 w-full sm:w-40" }, {
                        default: withCtx(() => [
                          createTextVNode(" Cancel ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseButton, {
                        type: "submit",
                        color: "primary",
                        class: "!h-12 w-full sm:w-40"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Submit ")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ltablet:col-span-4 col-span-12 lg:col-span-4">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "ptablet:p-8 p-6 lg:p-8" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              weight: "medium",
              class: "text-muted-400 mb-6 block uppercase tracking-wider"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Record preview`);
                } else {
                  return [
                    createTextVNode("Record preview")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mb-4 flex"${_scopeId}><div class="grow"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              weight: "medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Dr. ${ssrInterpolate(unref(values).doctor?.firstName)} ${ssrInterpolate(unref(values).doctor?.lastName)}`);
                } else {
                  return [
                    createTextVNode("Dr. " + toDisplayString(unref(values).doctor?.firstName) + " " + toDisplayString(unref(values).doctor?.lastName), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "sm",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(values).doctor?.city === "" ? "City" : unref(values).doctor?.city)}, ${ssrInterpolate(unref(values).doctor?.state === "" ? "State" : unref(values).doctor?.state)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(values).doctor?.city === "" ? "City" : unref(values).doctor?.city) + ", " + toDisplayString(unref(values).doctor?.state === "" ? "State" : unref(values).doctor?.state), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="shrink-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              size: "lg",
              src: "/img/avatars/20.svg"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(values).doctor?.speciality === null ? "Main speciality" : unref(values).doctor?.speciality)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(values).doctor?.speciality === null ? "Main speciality" : unref(values).doctor?.speciality), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "sm",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(values).doctor?.comments === "" ? "Observations will be shown here" : unref(values).doctor?.comments)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(values).doctor?.comments === "" ? "Observations will be shown here" : unref(values).doctor?.comments), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="divide-muted-200 dark:divide-muted-700 flex w-full items-center divide-x py-6"${_scopeId}><div class="xxl:pe-6 flex flex-1 flex-col gap-1 pe-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "sm",
              weight: "medium",
              lead: "none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(values).doctor?.status === null ? "n/a" : unref(values).doctor?.status)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(values).doctor?.status === null ? "n/a" : unref(values).doctor?.status), 1)
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
                  _push3(` Role status `);
                } else {
                  return [
                    createTextVNode(" Role status ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="xxl:px-6 flex flex-1 flex-col gap-1 px-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "sm",
              weight: "medium",
              lead: "none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(values).doctor?.experience === null ? "n/a" : unref(values).doctor?.experience)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(values).doctor?.experience === null ? "n/a" : unref(values).doctor?.experience), 1)
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
                  _push3(` Years of exp. `);
                } else {
                  return [
                    createTextVNode(" Years of exp. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="xxl:ps-6 flex flex-1 flex-col gap-1 ps-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "sm",
              weight: "medium",
              lead: "none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Lvl. ${ssrInterpolate(unref(values).doctor?.rating === null ? "n/a" : unref(values).doctor?.rating)}`);
                } else {
                  return [
                    createTextVNode("Lvl. " + toDisplayString(unref(values).doctor?.rating === null ? "n/a" : unref(values).doctor?.rating), 1)
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
                  _push3(` Global rating `);
                } else {
                  return [
                    createTextVNode(" Global rating ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div${_scopeId}><div class="flex items-end justify-between"${_scopeId}><div class="w-24 text-xs uppercase leading-tight"${_scopeId}>Rating</div><div class="text-success-600 font-sans text-xs font-semibold"${_scopeId}>${ssrInterpolate(unref(currentRatingText))}</div></div><div class="mt-1 flex"${_scopeId}><div class="${ssrRenderClass([
              unref(currentRating) > 0 ? "bg-success-600" : "bg-muted-200 dark:bg-muted-700",
              "dark:border-muted-800 h-3 grow border-x border-white"
            ])}"${_scopeId}></div><div class="${ssrRenderClass([
              unref(currentRating) >= 2 ? "bg-success-600" : "bg-muted-200 dark:bg-muted-700",
              "dark:border-muted-800 h-3 grow border-x border-white"
            ])}"${_scopeId}></div><div class="${ssrRenderClass([
              unref(currentRating) >= 3 ? "bg-success-600" : "bg-muted-200 dark:bg-muted-700",
              "dark:border-muted-800 h-3 grow border-x border-white"
            ])}"${_scopeId}></div><div class="${ssrRenderClass([
              unref(currentRating) >= 4 ? "bg-success-600" : "bg-muted-200 dark:bg-muted-700",
              "dark:border-muted-800 h-3 grow border-x border-white"
            ])}"${_scopeId}></div><div class="${ssrRenderClass([
              unref(currentRating) === 5 ? "bg-success-600" : "bg-muted-200 dark:bg-muted-700",
              "dark:border-muted-800 h-3 grow border-x border-white"
            ])}"${_scopeId}></div></div></div><div class="text-muted-400 mt-6 flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:mail",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, { size: "xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(values).doctor?.email === "" ? "email address" : unref(values).doctor?.email)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(values).doctor?.email === "" ? "email address" : unref(values).doctor?.email), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_BaseText, {
                size: "xs",
                weight: "medium",
                class: "text-muted-400 mb-6 block uppercase tracking-wider"
              }, {
                default: withCtx(() => [
                  createTextVNode("Record preview")
                ]),
                _: 1
              }),
              createVNode("div", { class: "mb-4 flex" }, [
                createVNode("div", { class: "grow" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h3",
                    weight: "medium"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Dr. " + toDisplayString(unref(values).doctor?.firstName) + " " + toDisplayString(unref(values).doctor?.lastName), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseText, {
                    size: "sm",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(values).doctor?.city === "" ? "City" : unref(values).doctor?.city) + ", " + toDisplayString(unref(values).doctor?.state === "" ? "State" : unref(values).doctor?.state), 1)
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "shrink-0" }, [
                  createVNode(_component_BaseAvatar, {
                    size: "lg",
                    src: "/img/avatars/20.svg"
                  })
                ])
              ]),
              createVNode("div", null, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "medium"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(values).doctor?.speciality === null ? "Main speciality" : unref(values).doctor?.speciality), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseText, {
                  size: "sm",
                  class: "text-muted-400"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(values).doctor?.comments === "" ? "Observations will be shown here" : unref(values).doctor?.comments), 1)
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "divide-muted-200 dark:divide-muted-700 flex w-full items-center divide-x py-6" }, [
                createVNode("div", { class: "xxl:pe-6 flex flex-1 flex-col gap-1 pe-4" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h3",
                    size: "sm",
                    weight: "medium",
                    lead: "none"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(values).doctor?.status === null ? "n/a" : unref(values).doctor?.status), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseText, {
                    size: "xs",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Role status ")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "xxl:px-6 flex flex-1 flex-col gap-1 px-4" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h3",
                    size: "sm",
                    weight: "medium",
                    lead: "none"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(values).doctor?.experience === null ? "n/a" : unref(values).doctor?.experience), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseText, {
                    size: "xs",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Years of exp. ")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "xxl:ps-6 flex flex-1 flex-col gap-1 ps-4" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h3",
                    size: "sm",
                    weight: "medium",
                    lead: "none"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Lvl. " + toDisplayString(unref(values).doctor?.rating === null ? "n/a" : unref(values).doctor?.rating), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseText, {
                    size: "xs",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Global rating ")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", null, [
                createVNode("div", { class: "flex items-end justify-between" }, [
                  createVNode("div", { class: "w-24 text-xs uppercase leading-tight" }, "Rating"),
                  createVNode("div", { class: "text-success-600 font-sans text-xs font-semibold" }, toDisplayString(unref(currentRatingText)), 1)
                ]),
                createVNode("div", { class: "mt-1 flex" }, [
                  createVNode("div", {
                    class: [
                      "dark:border-muted-800 h-3 grow border-x border-white",
                      unref(currentRating) > 0 ? "bg-success-600" : "bg-muted-200 dark:bg-muted-700"
                    ]
                  }, null, 2),
                  createVNode("div", {
                    class: [
                      "dark:border-muted-800 h-3 grow border-x border-white",
                      unref(currentRating) >= 2 ? "bg-success-600" : "bg-muted-200 dark:bg-muted-700"
                    ]
                  }, null, 2),
                  createVNode("div", {
                    class: [
                      "dark:border-muted-800 h-3 grow border-x border-white",
                      unref(currentRating) >= 3 ? "bg-success-600" : "bg-muted-200 dark:bg-muted-700"
                    ]
                  }, null, 2),
                  createVNode("div", {
                    class: [
                      "dark:border-muted-800 h-3 grow border-x border-white",
                      unref(currentRating) >= 4 ? "bg-success-600" : "bg-muted-200 dark:bg-muted-700"
                    ]
                  }, null, 2),
                  createVNode("div", {
                    class: [
                      "dark:border-muted-800 h-3 grow border-x border-white",
                      unref(currentRating) === 5 ? "bg-success-600" : "bg-muted-200 dark:bg-muted-700"
                    ]
                  }, null, 2)
                ])
              ]),
              createVNode("div", { class: "text-muted-400 mt-6 flex items-center gap-2" }, [
                createVNode(_component_Icon, {
                  name: "lucide:mail",
                  class: "h-4 w-4"
                }),
                createVNode(_component_BaseText, { size: "xs" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(values).doctor?.email === "" ? "email address" : unref(values).doctor?.email), 1)
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/form-2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=form-2-163d7103.mjs.map
