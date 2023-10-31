import { a as useToaster, j as _sfc_main$C, _ as _sfc_main$p, i as _sfc_main$D, f as __nuxt_component_2, g as _sfc_main$z, s as _sfc_main$E, U as _sfc_main$y } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseButtonAction-57c21d00.mjs';
import { _ as _sfc_main$2 } from './BaseRadio-d9efef81.mjs';
import { _ as _sfc_main$3 } from './BaseListbox-69fbc324.mjs';
import { _ as _sfc_main$4 } from './BaseInputFileHeadless-8d058758.mjs';
import { _ as _sfc_main$5 } from './BaseProgress-1402c581.mjs';
import { _ as _sfc_main$6 } from './BaseRadioHeadless-286f432f.mjs';
import { _ as _sfc_main$7 } from './BaseCheckbox-45d3fdba.mjs';
import { _ as _sfc_main$8 } from './TairoFormSave-f466246e.mjs';
import { defineComponent, computed, ref, mergeProps, withCtx, createTextVNode, createVNode, unref, isRef, toHandlers, withModifiers, openBlock, createBlock, withKeys, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import { f as formatFileSize } from './format-files-24022fa8.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _imports_0 } from './placeholder-file-fb2c914d.mjs';
import { toTypedSchema } from '@vee-validate/zod';
import { DatePicker } from 'v-calendar';
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
import './BaseIconBox-642fe941.mjs';
import './file-preview-7bd14b92.mjs';
import './IconCheck-b31ac5c7.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "form-6",
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
      meeting: z.object({
        title: z.string().min(5, VALIDATION_TEXT.FIRSTNAME_REQUIRED),
        startDate: z.date().nullable(),
        endDate: z.date().nullable(),
        startTime: z.date().nullable(),
        endTime: z.date().nullable(),
        frequency: z.string(),
        participants: z.array(
          z.object({
            id: z.string(),
            name: z.string(),
            avatar: z.string().optional()
          })
        ),
        location: z.string(),
        url: z.string().optional(),
        calendar: z.string(),
        description: z.string().min(40, VALIDATION_TEXT.FIRSTNAME_REQUIRED),
        colorCode: z.string(),
        notifications: z.object({
          general: z.boolean(),
          team: z.boolean(),
          reminders: z.boolean(),
          modifications: z.boolean()
        })
      })
    });
    const validationSchema = toTypedSchema(zodSchema);
    const initialValues = computed(() => ({
      meeting: {
        title: "",
        startDate: null,
        endDate: null,
        startTime: null,
        endTime: null,
        frequency: "day",
        participants: [],
        location: "",
        url: "",
        calendar: "",
        description: "",
        colorCode: "",
        notifications: {
          general: false,
          team: false,
          reminders: false,
          modifications: false
        }
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
    onBeforeRouteLeave(() => {
      if (meta.value.dirty) {
        return confirm("You have unsaved changes. Are you sure you want to leave?");
      }
    });
    const toaster = useToaster();
    handleSubmit(
      async (values2) => {
        success.value = false;
        console.log("meeting-create-success", values2);
        try {
          await new Promise((resolve, reject) => {
            if (values2.meeting.title === "Demo meeting") {
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
            setFieldError("meeting.title", "This name is not allowed");
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
        console.log("meeting-create-error", error);
        document.documentElement.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    );
    const calendars = [
      {
        id: 1,
        name: "My Calendar",
        text: "Your personal calendar",
        icon: "ph:user-duotone"
      },
      {
        id: 2,
        name: "Team Calendar",
        text: "Your team calendar",
        icon: "ph:users-duotone"
      },
      {
        id: 3,
        name: "Company calendar",
        text: "Your company calendar",
        icon: "ph:buildings-duotone"
      }
    ];
    const dates = ref({
      start: /* @__PURE__ */ new Date(),
      end: /* @__PURE__ */ new Date()
    });
    const masks = ref({
      input: "YYYY-MM-DD"
    });
    ref("day");
    ref({
      id: 1,
      name: "My Calendar",
      text: "Your personal calendar",
      icon: "ph:user-duotone"
    });
    const uploadedFiles = ref(null);
    ref("color_code_1");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseText = _sfc_main$D;
      const _component_BaseButtonAction = _sfc_main$1;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseInput = _sfc_main$z;
      const _component_BaseRadio = _sfc_main$2;
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BaseListbox = _sfc_main$3;
      const _component_BaseTextarea = _sfc_main$y;
      const _component_BaseInputFileHeadless = _sfc_main$4;
      const _component_BaseProgress = _sfc_main$5;
      const _component_BaseRadioHeadless = _sfc_main$6;
      const _component_BaseCheckbox = _sfc_main$7;
      const _component_TairoFormSave = _sfc_main$8;
      _push(`<form${ssrRenderAttrs(mergeProps({
        action: "",
        method: "POST",
        class: "mx-auto w-full max-w-3xl"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-muted-200 dark:border-muted-700 flex items-center justify-between gap-4 border-b px-10 py-5"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` New Meeting `);
                } else {
                  return [
                    createTextVNode(" New Meeting ")
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
                  _push3(`Schedule a new meeting`);
                } else {
                  return [
                    createTextVNode("Schedule a new meeting")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ms-auto flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButtonAction, {
              onClick: ($event) => _ctx.$router.back()
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:arrow-left",
                    class: "h-3 w-3"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>Cancel</span>`);
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButtonAction, {
              type: "submit",
              color: "primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:check",
                    class: "h-3 w-3"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>Save</span>`);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:check",
                      class: "h-3 w-3"
                    }),
                    createVNode("span", null, "Save")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="px-10 py-5"${_scopeId}><div class="grid grid-cols-12 gap-4"${_scopeId}><div class="col-span-12"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "meeting.title" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    label: "What is this meeting about?",
                    placeholder: "Ex: Project review with the design team",
                    icon: "lucide:slack",
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
                      label: "What is this meeting about?",
                      placeholder: "Ex: Project review with the design team",
                      icon: "lucide:slack",
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
            _push2(ssrRenderComponent(unref(DatePicker), {
              modelValue: unref(dates),
              "onUpdate:modelValue": ($event) => isRef(dates) ? dates.value = $event : null,
              modelModifiers: { range: true },
              masks: unref(masks),
              "min-date": /* @__PURE__ */ new Date(),
              mode: "date",
              "hide-time-header": "",
              "trim-weeks": ""
            }, {
              default: withCtx(({ inputValue, inputEvents }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex w-full flex-col gap-4 sm:flex-row"${_scopeId2}><div class="relative grow"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "meeting.startDate" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInput, mergeProps({
                          label: "Start date",
                          icon: "ph:calendar-blank-duotone",
                          value: inputValue.start
                        }, toHandlers(inputEvents.start), {
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          type: "text",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseInput, mergeProps({
                            label: "Start date",
                            icon: "ph:calendar-blank-duotone",
                            value: inputValue.start
                          }, toHandlers(inputEvents.start), {
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            type: "text",
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }), null, 16, ["value", "model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="relative grow"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "meeting.endDate" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInput, mergeProps({
                          label: "End date",
                          icon: "ph:calendar-blank-duotone",
                          value: inputValue.end
                        }, toHandlers(inputEvents.end), {
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          type: "text",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseInput, mergeProps({
                            label: "End date",
                            icon: "ph:calendar-blank-duotone",
                            value: inputValue.end
                          }, toHandlers(inputEvents.end), {
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            type: "text",
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }), null, 16, ["value", "model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex w-full flex-col gap-4 sm:flex-row" }, [
                      createVNode("div", { class: "relative grow" }, [
                        createVNode(unref(Field), { name: "meeting.startDate" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseInput, mergeProps({
                              label: "Start date",
                              icon: "ph:calendar-blank-duotone",
                              value: inputValue.start
                            }, toHandlers(inputEvents.start), {
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              type: "text",
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }), null, 16, ["value", "model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      createVNode("div", { class: "relative grow" }, [
                        createVNode(unref(Field), { name: "meeting.endDate" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseInput, mergeProps({
                              label: "End date",
                              icon: "ph:calendar-blank-duotone",
                              value: inputValue.end
                            }, toHandlers(inputEvents.end), {
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              type: "text",
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }), null, 16, ["value", "model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 2
                        }, 1024)
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="col-span-12 sm:col-span-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(DatePicker), {
              modelValue: unref(dates),
              "onUpdate:modelValue": ($event) => isRef(dates) ? dates.value = $event : null,
              modelModifiers: { range: true },
              masks: unref(masks),
              "min-date": /* @__PURE__ */ new Date(),
              mode: "time",
              "hide-time-header": "",
              "trim-weeks": ""
            }, {
              default: withCtx(({ inputValue, inputEvents }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex w-full flex-col gap-4 sm:flex-row"${_scopeId2}><div class="relative grow"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "meeting.startTime" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInput, mergeProps({
                          label: "Start time",
                          icon: "ph:calendar-blank-duotone",
                          value: inputValue.start
                        }, toHandlers(inputEvents.start), {
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          type: "text",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseInput, mergeProps({
                            label: "Start time",
                            icon: "ph:calendar-blank-duotone",
                            value: inputValue.start
                          }, toHandlers(inputEvents.start), {
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            type: "text",
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }), null, 16, ["value", "model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="relative grow"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "meeting.endTime" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInput, mergeProps({
                          label: "End time",
                          icon: "ph:calendar-blank-duotone",
                          value: inputValue.end
                        }, toHandlers(inputEvents.end), {
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          type: "text",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseInput, mergeProps({
                            label: "End time",
                            icon: "ph:calendar-blank-duotone",
                            value: inputValue.end
                          }, toHandlers(inputEvents.end), {
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            type: "text",
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }), null, 16, ["value", "model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex w-full flex-col gap-4 sm:flex-row" }, [
                      createVNode("div", { class: "relative grow" }, [
                        createVNode(unref(Field), { name: "meeting.startTime" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseInput, mergeProps({
                              label: "Start time",
                              icon: "ph:calendar-blank-duotone",
                              value: inputValue.start
                            }, toHandlers(inputEvents.start), {
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              type: "text",
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }), null, 16, ["value", "model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      createVNode("div", { class: "relative grow" }, [
                        createVNode(unref(Field), { name: "meeting.endTime" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseInput, mergeProps({
                              label: "End time",
                              icon: "ph:calendar-blank-duotone",
                              value: inputValue.end
                            }, toHandlers(inputEvents.end), {
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              type: "text",
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }), null, 16, ["value", "model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 2
                        }, 1024)
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="col-span-12"${_scopeId}><div class="my-4"${_scopeId}><label class="nui-label pb-4 text-[0.825rem]"${_scopeId}>Meeting frequency</label><div class="flex items-center gap-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "meeting.frequency" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseRadio, {
                    id: "frequency-1",
                    name: "unique_frequency",
                    label: "All day",
                    value: "day",
                    color: "primary",
                    classes: {
                      label: "relative top-0.5 text-xs"
                    },
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseRadio, {
                      id: "frequency-1",
                      name: "unique_frequency",
                      label: "All day",
                      value: "day",
                      color: "primary",
                      classes: {
                        label: "relative top-0.5 text-xs"
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
            _push2(ssrRenderComponent(unref(Field), { name: "meeting.frequency" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseRadio, {
                    id: "frequency-2",
                    name: "weekly_frequency",
                    label: "Repeat every week",
                    value: "week",
                    color: "primary",
                    classes: {
                      label: "relative top-0.5 text-xs"
                    },
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseRadio, {
                      id: "frequency-2",
                      name: "weekly_frequency",
                      label: "Repeat every week",
                      value: "week",
                      color: "primary",
                      classes: {
                        label: "relative top-0.5 text-xs"
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
            _push2(`</div></div></div></div></div><div class="bg-muted-50 dark:bg-muted-800/70 border-muted-200 dark:border-muted-700 border-t p-10"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Meeting details `);
                } else {
                  return [
                    createTextVNode(" Meeting details ")
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
                  _push3(`Add some meeting details`);
                } else {
                  return [
                    createTextVNode("Add some meeting details")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButtonAction, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:plus",
                    class: "h-3 w-3"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>Add people</span>`);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:plus",
                      class: "h-3 w-3"
                    }),
                    createVNode("span", null, "Add people")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="mt-10 grid grid-cols-12 gap-4"${_scopeId}><div class="col-span-12 grid grid-cols-12"${_scopeId}><div class="col-span-12 flex flex-col justify-center sm:col-span-3"${_scopeId}><label class="nui-label text-[0.825rem]"${_scopeId}>Participants</label></div><div class="col-span-12 sm:col-span-9"${_scopeId}><div class="flex items-center gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              src: "/img/avatars/24.svg",
              "data-nui-tooltip": "Anna B."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              src: "/img/avatars/10.svg",
              "data-nui-tooltip": "Kendra W."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              src: "/img/avatars/8.svg",
              "data-nui-tooltip": "John H."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              src: "/img/avatars/25.svg",
              "data-nui-tooltip": "Melany L."
            }, null, _parent2, _scopeId));
            _push2(`<div class="ms-auto"${_scopeId}><button type="button" class="text-primary-500 font-sans text-sm underline underline-offset-4"${_scopeId}> Manage </button></div></div></div></div><div class="col-span-12 grid grid-cols-12"${_scopeId}><div class="col-span-12 flex flex-col justify-center sm:col-span-3"${_scopeId}><label class="nui-label text-[0.825rem]"${_scopeId}>Meeting location</label></div><div class="col-span-12 sm:col-span-9"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "meeting.location" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    type: "text",
                    placeholder: "Ex: meeting room A",
                    icon: "lucide:map-pin",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseInput, {
                      type: "text",
                      placeholder: "Ex: meeting room A",
                      icon: "lucide:map-pin",
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
            _push2(`</div></div><div class="col-span-12 grid grid-cols-12"${_scopeId}><div class="col-span-12 flex flex-col justify-center sm:col-span-3"${_scopeId}><label class="nui-label text-[0.825rem]"${_scopeId}>Meeting URL</label></div><div class="col-span-12 sm:col-span-9"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "meeting.url" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    type: "text",
                    placeholder: "https://zoom.us/m/123456789",
                    icon: "lucide:video",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseInput, {
                      type: "text",
                      placeholder: "https://zoom.us/m/123456789",
                      icon: "lucide:video",
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
            _push2(`</div></div><div class="col-span-12 grid grid-cols-12"${_scopeId}><div class="col-span-12 flex flex-col justify-center sm:col-span-3"${_scopeId}><label class="nui-label text-[0.825rem]"${_scopeId}>Calendar</label></div><div class="col-span-12 sm:col-span-9"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "meeting.calendar" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseListbox, {
                    items: calendars,
                    properties: {
                      value: "id",
                      label: "name",
                      sublabel: "text",
                      icon: "icon"
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
                      items: calendars,
                      properties: {
                        value: "id",
                        label: "name",
                        sublabel: "text",
                        icon: "icon"
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
            _push2(`</div></div><div class="col-span-12 grid grid-cols-12"${_scopeId}><div class="col-span-12 flex flex-col justify-start pt-2 sm:col-span-3"${_scopeId}><label class="nui-label text-[0.825rem]"${_scopeId}>Description</label></div><div class="col-span-12 sm:col-span-9"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "meeting.description" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseTextarea, {
                    placeholder: "Write some additional details about the meeting...",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseTextarea, {
                      placeholder: "Write some additional details about the meeting...",
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
            _push2(`</div></div><div class="col-span-12 grid grid-cols-12"${_scopeId}><div class="col-span-12 flex flex-col justify-start pt-4 sm:col-span-3"${_scopeId}><label class="nui-label text-[0.825rem]"${_scopeId}>Attachments</label></div><div class="col-span-12 sm:col-span-9"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseInputFileHeadless, {
              multiple: "",
              modelValue: unref(uploadedFiles),
              "onUpdate:modelValue": ($event) => isRef(uploadedFiles) ? uploadedFiles.value = $event : null
            }, {
              default: withCtx(({ open, remove, preview, drop, files }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="mb-4 flex items-center gap-2"${_scopeId2}><button type="button" class="nui-focus border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300" tooltip="Select files"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:plus",
                    class: "absolute start-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="sr-only"${_scopeId2}>Select files</span></button><button type="button" class="nui-focus border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300" tooltip="Start Upload"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:arrow-up",
                    class: "h-4 w-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="sr-only"${_scopeId2}>Start Upload</span></button></div><div class=""${_scopeId2}>`);
                  if (!files?.length) {
                    _push3(`<div class="nui-focus border-muted-300 dark:border-muted-700 hover:border-muted-400 focus:border-muted-400 dark:hover:border-muted-600 dark:focus:border-muted-700 group cursor-pointer rounded-lg border-[3px] border-dashed p-8 transition-colors duration-300" tabindex="0" role="button"${_scopeId2}><div class="p-5 text-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "mdi-light:cloud-upload",
                      class: "text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 mb-2 h-10 w-10 transition-colors duration-300"
                    }, null, _parent3, _scopeId2));
                    _push3(`<h4 class="text-muted-400 font-sans text-sm"${_scopeId2}> Drop files to upload </h4><div${_scopeId2}><span class="text-muted-400 font-sans text-[0.7rem] font-semibold uppercase"${_scopeId2}> Or </span></div><label for="file" class="text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 cursor-pointer font-sans text-sm underline underline-offset-4 transition-colors duration-300"${_scopeId2}> Select files </label></div></div>`);
                  } else {
                    _push3(`<ul class="mt-6 space-y-2"${_scopeId2}><!--[-->`);
                    ssrRenderList(files, (file) => {
                      _push3(`<li${_scopeId2}><div class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative flex items-center justify-end gap-2 rounded-xl border bg-white p-3"${_scopeId2}><div class="flex items-center gap-2"${_scopeId2}><div class="shrink-0"${_scopeId2}>`);
                      if (file.type.startsWith("image")) {
                        _push3(`<img class="h-14 w-14 rounded-xl object-cover object-center"${ssrRenderAttr("src", preview(file).value)} alt="Image preview"${_scopeId2}>`);
                      } else {
                        _push3(`<img class="h-14 w-14 rounded-xl object-cover object-center"${ssrRenderAttr("src", _imports_0)} alt="Image preview"${_scopeId2}>`);
                      }
                      _push3(`</div><div class="font-sans"${_scopeId2}><span class="text-muted-800 dark:text-muted-100 line-clamp-1 block text-sm"${_scopeId2}>${ssrInterpolate(file.name)}</span><span class="text-muted-400 block text-xs"${_scopeId2}>${ssrInterpolate(("formatFileSize" in _ctx ? _ctx.formatFileSize : unref(formatFileSize))(file.size))}</span></div></div><div class="${ssrRenderClass(["opacity-100", "ms-auto w-32 px-4 transition-opacity duration-300"])}"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseProgress, {
                        value: 0,
                        size: "xs",
                        color: "success"
                      }, null, _parent3, _scopeId2));
                      _push3(`</div><div class="flex gap-2"${_scopeId2}><button class="border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60" disabled type="button" tooltip="Cancel"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "lucide:slash",
                        class: "h-4 w-4"
                      }, null, _parent3, _scopeId2));
                      _push3(`<span class="sr-only"${_scopeId2}>Cancel</span></button><button class="border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300" type="button" tooltip="Upload"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "lucide:arrow-up",
                        class: "h-4 w-4"
                      }, null, _parent3, _scopeId2));
                      _push3(`<span class="sr-only"${_scopeId2}>Upload</span></button><button class="border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300" type="button" tooltip="Remove"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "lucide:x",
                        class: "h-4 w-4"
                      }, null, _parent3, _scopeId2));
                      _push3(`<span class="sr-only"${_scopeId2}>Remove</span></button></div></div></li>`);
                    });
                    _push3(`<!--]--></ul>`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "mb-4 flex items-center gap-2" }, [
                      createVNode("button", {
                        type: "button",
                        class: "nui-focus border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300",
                        tooltip: "Select files",
                        onClick: open
                      }, [
                        createVNode(_component_Icon, {
                          name: "lucide:plus",
                          class: "absolute start-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2"
                        }),
                        createVNode("span", { class: "sr-only" }, "Select files")
                      ], 8, ["onClick"]),
                      createVNode("button", {
                        type: "button",
                        class: "nui-focus border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300",
                        tooltip: "Start Upload"
                      }, [
                        createVNode(_component_Icon, {
                          name: "lucide:arrow-up",
                          class: "h-4 w-4"
                        }),
                        createVNode("span", { class: "sr-only" }, "Start Upload")
                      ])
                    ]),
                    createVNode("div", {
                      class: "",
                      onDragenter: withModifiers(() => {
                      }, ["stop", "prevent"]),
                      onDragover: withModifiers(() => {
                      }, ["stop", "prevent"]),
                      onDrop: drop
                    }, [
                      !files?.length ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "nui-focus border-muted-300 dark:border-muted-700 hover:border-muted-400 focus:border-muted-400 dark:hover:border-muted-600 dark:focus:border-muted-700 group cursor-pointer rounded-lg border-[3px] border-dashed p-8 transition-colors duration-300",
                        tabindex: "0",
                        role: "button",
                        onClick: open,
                        onKeydown: withKeys(withModifiers(open, ["prevent"]), ["enter"])
                      }, [
                        createVNode("div", { class: "p-5 text-center" }, [
                          createVNode(_component_Icon, {
                            name: "mdi-light:cloud-upload",
                            class: "text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 mb-2 h-10 w-10 transition-colors duration-300"
                          }),
                          createVNode("h4", { class: "text-muted-400 font-sans text-sm" }, " Drop files to upload "),
                          createVNode("div", null, [
                            createVNode("span", { class: "text-muted-400 font-sans text-[0.7rem] font-semibold uppercase" }, " Or ")
                          ]),
                          createVNode("label", {
                            for: "file",
                            class: "text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 cursor-pointer font-sans text-sm underline underline-offset-4 transition-colors duration-300"
                          }, " Select files ")
                        ])
                      ], 40, ["onClick", "onKeydown"])) : (openBlock(), createBlock("ul", {
                        key: 1,
                        class: "mt-6 space-y-2"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(files, (file) => {
                          return openBlock(), createBlock("li", {
                            key: file.name
                          }, [
                            createVNode("div", { class: "border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative flex items-center justify-end gap-2 rounded-xl border bg-white p-3" }, [
                              createVNode("div", { class: "flex items-center gap-2" }, [
                                createVNode("div", { class: "shrink-0" }, [
                                  file.type.startsWith("image") ? (openBlock(), createBlock("img", {
                                    key: 0,
                                    class: "h-14 w-14 rounded-xl object-cover object-center",
                                    src: preview(file).value,
                                    alt: "Image preview"
                                  }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                                    key: 1,
                                    class: "h-14 w-14 rounded-xl object-cover object-center",
                                    src: _imports_0,
                                    alt: "Image preview"
                                  }))
                                ]),
                                createVNode("div", { class: "font-sans" }, [
                                  createVNode("span", { class: "text-muted-800 dark:text-muted-100 line-clamp-1 block text-sm" }, toDisplayString(file.name), 1),
                                  createVNode("span", { class: "text-muted-400 block text-xs" }, toDisplayString(("formatFileSize" in _ctx ? _ctx.formatFileSize : unref(formatFileSize))(file.size)), 1)
                                ])
                              ]),
                              createVNode("div", {
                                class: ["ms-auto w-32 px-4 transition-opacity duration-300", "opacity-100"]
                              }, [
                                createVNode(_component_BaseProgress, {
                                  value: 0,
                                  size: "xs",
                                  color: "success"
                                })
                              ]),
                              createVNode("div", { class: "flex gap-2" }, [
                                createVNode("button", {
                                  class: "border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60",
                                  disabled: "",
                                  type: "button",
                                  tooltip: "Cancel"
                                }, [
                                  createVNode(_component_Icon, {
                                    name: "lucide:slash",
                                    class: "h-4 w-4"
                                  }),
                                  createVNode("span", { class: "sr-only" }, "Cancel")
                                ]),
                                createVNode("button", {
                                  class: "border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300",
                                  type: "button",
                                  tooltip: "Upload"
                                }, [
                                  createVNode(_component_Icon, {
                                    name: "lucide:arrow-up",
                                    class: "h-4 w-4"
                                  }),
                                  createVNode("span", { class: "sr-only" }, "Upload")
                                ]),
                                createVNode("button", {
                                  class: "border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300",
                                  type: "button",
                                  tooltip: "Remove",
                                  onClick: withModifiers(($event) => remove(file), ["prevent"])
                                }, [
                                  createVNode(_component_Icon, {
                                    name: "lucide:x",
                                    class: "h-4 w-4"
                                  }),
                                  createVNode("span", { class: "sr-only" }, "Remove")
                                ], 8, ["onClick"])
                              ])
                            ])
                          ]);
                        }), 128))
                      ]))
                    ], 40, ["onDragenter", "onDragover", "onDrop"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div><div class="bg-muted-50 dark:bg-muted-800/70 border-muted-200 dark:border-muted-700 border-t p-10"${_scopeId}><div class="grid grid-cols-12 gap-8 pb-6"${_scopeId}><div class="col-span-12 grid grid-cols-12"${_scopeId}><div class="col-span-12 flex flex-col justify-center sm:col-span-3"${_scopeId}><label class="nui-label text-[0.825rem]"${_scopeId}>Color code</label></div><div class="col-span-12 sm:col-span-9"${_scopeId}><div class="flex items-center gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "meeting.colorCode" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseRadioHeadless, {
                    name: "color_code",
                    value: "color_code_1",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="border-primary-500 peer-checked:bg-primary-500 h-4 w-4 rounded-full border-2 transition-colors duration-300"${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "border-primary-500 peer-checked:bg-primary-500 h-4 w-4 rounded-full border-2 transition-colors duration-300" })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseRadioHeadless, {
                      name: "color_code",
                      value: "color_code_1",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "border-primary-500 peer-checked:bg-primary-500 h-4 w-4 rounded-full border-2 transition-colors duration-300" })
                      ]),
                      _: 2
                    }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Field), { name: "meeting.colorCode" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseRadioHeadless, {
                    name: "color_code",
                    value: "color_code_2",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="border-info-500 peer-checked:bg-info-500 h-4 w-4 rounded-full border-2 transition-colors duration-300"${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "border-info-500 peer-checked:bg-info-500 h-4 w-4 rounded-full border-2 transition-colors duration-300" })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseRadioHeadless, {
                      name: "color_code",
                      value: "color_code_2",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "border-info-500 peer-checked:bg-info-500 h-4 w-4 rounded-full border-2 transition-colors duration-300" })
                      ]),
                      _: 2
                    }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Field), { name: "meeting.colorCode" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseRadioHeadless, {
                    name: "color_code",
                    value: "color_code_3",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="border-success-500 peer-checked:bg-success-500 h-4 w-4 rounded-full border-2 transition-colors duration-300"${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "border-success-500 peer-checked:bg-success-500 h-4 w-4 rounded-full border-2 transition-colors duration-300" })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseRadioHeadless, {
                      name: "color_code",
                      value: "color_code_3",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "border-success-500 peer-checked:bg-success-500 h-4 w-4 rounded-full border-2 transition-colors duration-300" })
                      ]),
                      _: 2
                    }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Field), { name: "meeting.colorCode" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseRadioHeadless, {
                    name: "color_code",
                    value: "color_code_4",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="border-danger-500 peer-checked:bg-danger-500 h-4 w-4 rounded-full border-2 transition-colors duration-300"${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "border-danger-500 peer-checked:bg-danger-500 h-4 w-4 rounded-full border-2 transition-colors duration-300" })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseRadioHeadless, {
                      name: "color_code",
                      value: "color_code_4",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "border-danger-500 peer-checked:bg-danger-500 h-4 w-4 rounded-full border-2 transition-colors duration-300" })
                      ]),
                      _: 2
                    }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Field), { name: "meeting.colorCode" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseRadioHeadless, {
                    name: "color_code",
                    value: "color_code_5",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="h-4 w-4 rounded-full border-2 border-lime-500 transition-colors duration-300 peer-checked:bg-lime-500"${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "h-4 w-4 rounded-full border-2 border-lime-500 transition-colors duration-300 peer-checked:bg-lime-500" })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseRadioHeadless, {
                      name: "color_code",
                      value: "color_code_5",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "h-4 w-4 rounded-full border-2 border-lime-500 transition-colors duration-300 peer-checked:bg-lime-500" })
                      ]),
                      _: 2
                    }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Field), { name: "meeting.colorCode" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseRadioHeadless, {
                    name: "color_code",
                    value: "color_code_6",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="h-4 w-4 rounded-full border-2 border-pink-500 transition-colors duration-300 peer-checked:bg-pink-500"${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "h-4 w-4 rounded-full border-2 border-pink-500 transition-colors duration-300 peer-checked:bg-pink-500" })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseRadioHeadless, {
                      name: "color_code",
                      value: "color_code_6",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "h-4 w-4 rounded-full border-2 border-pink-500 transition-colors duration-300 peer-checked:bg-pink-500" })
                      ]),
                      _: 2
                    }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div class="col-span-12 grid grid-cols-12"${_scopeId}><div class="col-span-12 flex flex-col justify-start pt-1 sm:col-span-3"${_scopeId}><label class="nui-label text-[0.825rem]"${_scopeId}>Notifications</label></div><div class="col-span-12 sm:col-span-9"${_scopeId}><div class="flex flex-col gap-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "meeting.notifications.general" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseCheckbox, {
                    color: "primary",
                    label: "General notifications",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseCheckbox, {
                      color: "primary",
                      label: "General notifications",
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
            _push2(ssrRenderComponent(unref(Field), { name: "meeting.notifications.team" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseCheckbox, {
                    color: "primary",
                    label: "Team notifications",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseCheckbox, {
                      color: "primary",
                      label: "Team notifications",
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
            _push2(ssrRenderComponent(unref(Field), { name: "meeting.notifications.reminders" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseCheckbox, {
                    color: "primary",
                    label: "Auto reminders",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseCheckbox, {
                      color: "primary",
                      label: "Auto reminders",
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
            _push2(ssrRenderComponent(unref(Field), { name: "meeting.notifications.modifications" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseCheckbox, {
                    color: "primary",
                    label: "Modifications",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseCheckbox, {
                      color: "primary",
                      label: "Modifications",
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
            _push2(`</div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "border-muted-200 dark:border-muted-700 flex items-center justify-between gap-4 border-b px-10 py-5" }, [
                createVNode("div", null, [
                  createVNode(_component_BaseHeading, {
                    as: "h3",
                    size: "md",
                    weight: "medium"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" New Meeting ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseText, {
                    size: "xs",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Schedule a new meeting")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "ms-auto flex items-center gap-2" }, [
                  createVNode(_component_BaseButtonAction, {
                    onClick: withModifiers(($event) => _ctx.$router.back(), ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:arrow-left",
                        class: "h-3 w-3"
                      }),
                      createVNode("span", null, "Cancel")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_BaseButtonAction, {
                    type: "submit",
                    color: "primary"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:check",
                        class: "h-3 w-3"
                      }),
                      createVNode("span", null, "Save")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "px-10 py-5" }, [
                createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                  createVNode("div", { class: "col-span-12" }, [
                    createVNode(unref(Field), { name: "meeting.title" }, {
                      default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                        createVNode(_component_BaseInput, {
                          label: "What is this meeting about?",
                          placeholder: "Ex: Project review with the design team",
                          icon: "lucide:slack",
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
                    createVNode(unref(DatePicker), {
                      modelValue: unref(dates),
                      "onUpdate:modelValue": ($event) => isRef(dates) ? dates.value = $event : null,
                      modelModifiers: { range: true },
                      masks: unref(masks),
                      "min-date": /* @__PURE__ */ new Date(),
                      mode: "date",
                      "hide-time-header": "",
                      "trim-weeks": ""
                    }, {
                      default: withCtx(({ inputValue, inputEvents }) => [
                        createVNode("div", { class: "flex w-full flex-col gap-4 sm:flex-row" }, [
                          createVNode("div", { class: "relative grow" }, [
                            createVNode(unref(Field), { name: "meeting.startDate" }, {
                              default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                                createVNode(_component_BaseInput, mergeProps({
                                  label: "Start date",
                                  icon: "ph:calendar-blank-duotone",
                                  value: inputValue.start
                                }, toHandlers(inputEvents.start), {
                                  "model-value": field.value,
                                  error: errorMessage,
                                  disabled: unref(isSubmitting),
                                  type: "text",
                                  "onUpdate:modelValue": handleChange,
                                  onBlur: handleBlur
                                }), null, 16, ["value", "model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          createVNode("div", { class: "relative grow" }, [
                            createVNode(unref(Field), { name: "meeting.endDate" }, {
                              default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                                createVNode(_component_BaseInput, mergeProps({
                                  label: "End date",
                                  icon: "ph:calendar-blank-duotone",
                                  value: inputValue.end
                                }, toHandlers(inputEvents.end), {
                                  "model-value": field.value,
                                  error: errorMessage,
                                  disabled: unref(isSubmitting),
                                  type: "text",
                                  "onUpdate:modelValue": handleChange,
                                  onBlur: handleBlur
                                }), null, 16, ["value", "model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "masks", "min-date"])
                  ]),
                  createVNode("div", { class: "col-span-12 sm:col-span-6" }, [
                    createVNode(unref(DatePicker), {
                      modelValue: unref(dates),
                      "onUpdate:modelValue": ($event) => isRef(dates) ? dates.value = $event : null,
                      modelModifiers: { range: true },
                      masks: unref(masks),
                      "min-date": /* @__PURE__ */ new Date(),
                      mode: "time",
                      "hide-time-header": "",
                      "trim-weeks": ""
                    }, {
                      default: withCtx(({ inputValue, inputEvents }) => [
                        createVNode("div", { class: "flex w-full flex-col gap-4 sm:flex-row" }, [
                          createVNode("div", { class: "relative grow" }, [
                            createVNode(unref(Field), { name: "meeting.startTime" }, {
                              default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                                createVNode(_component_BaseInput, mergeProps({
                                  label: "Start time",
                                  icon: "ph:calendar-blank-duotone",
                                  value: inputValue.start
                                }, toHandlers(inputEvents.start), {
                                  "model-value": field.value,
                                  error: errorMessage,
                                  disabled: unref(isSubmitting),
                                  type: "text",
                                  "onUpdate:modelValue": handleChange,
                                  onBlur: handleBlur
                                }), null, 16, ["value", "model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          createVNode("div", { class: "relative grow" }, [
                            createVNode(unref(Field), { name: "meeting.endTime" }, {
                              default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                                createVNode(_component_BaseInput, mergeProps({
                                  label: "End time",
                                  icon: "ph:calendar-blank-duotone",
                                  value: inputValue.end
                                }, toHandlers(inputEvents.end), {
                                  "model-value": field.value,
                                  error: errorMessage,
                                  disabled: unref(isSubmitting),
                                  type: "text",
                                  "onUpdate:modelValue": handleChange,
                                  onBlur: handleBlur
                                }), null, 16, ["value", "model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "masks", "min-date"])
                  ]),
                  createVNode("div", { class: "col-span-12" }, [
                    createVNode("div", { class: "my-4" }, [
                      createVNode("label", { class: "nui-label pb-4 text-[0.825rem]" }, "Meeting frequency"),
                      createVNode("div", { class: "flex items-center gap-6" }, [
                        createVNode(unref(Field), { name: "meeting.frequency" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseRadio, {
                              id: "frequency-1",
                              name: "unique_frequency",
                              label: "All day",
                              value: "day",
                              color: "primary",
                              classes: {
                                label: "relative top-0.5 text-xs"
                              },
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Field), { name: "meeting.frequency" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseRadio, {
                              id: "frequency-2",
                              name: "weekly_frequency",
                              label: "Repeat every week",
                              value: "week",
                              color: "primary",
                              classes: {
                                label: "relative top-0.5 text-xs"
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
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "bg-muted-50 dark:bg-muted-800/70 border-muted-200 dark:border-muted-700 border-t p-10" }, [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("div", null, [
                    createVNode(_component_BaseHeading, {
                      as: "h3",
                      size: "md",
                      weight: "medium"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Meeting details ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseText, {
                      size: "xs",
                      class: "text-muted-400"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Add some meeting details")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", null, [
                    createVNode(_component_BaseButtonAction, null, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "lucide:plus",
                          class: "h-3 w-3"
                        }),
                        createVNode("span", null, "Add people")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "mt-10 grid grid-cols-12 gap-4" }, [
                  createVNode("div", { class: "col-span-12 grid grid-cols-12" }, [
                    createVNode("div", { class: "col-span-12 flex flex-col justify-center sm:col-span-3" }, [
                      createVNode("label", { class: "nui-label text-[0.825rem]" }, "Participants")
                    ]),
                    createVNode("div", { class: "col-span-12 sm:col-span-9" }, [
                      createVNode("div", { class: "flex items-center gap-3" }, [
                        createVNode(_component_BaseAvatar, {
                          src: "/img/avatars/24.svg",
                          "data-nui-tooltip": "Anna B."
                        }),
                        createVNode(_component_BaseAvatar, {
                          src: "/img/avatars/10.svg",
                          "data-nui-tooltip": "Kendra W."
                        }),
                        createVNode(_component_BaseAvatar, {
                          src: "/img/avatars/8.svg",
                          "data-nui-tooltip": "John H."
                        }),
                        createVNode(_component_BaseAvatar, {
                          src: "/img/avatars/25.svg",
                          "data-nui-tooltip": "Melany L."
                        }),
                        createVNode("div", { class: "ms-auto" }, [
                          createVNode("button", {
                            type: "button",
                            class: "text-primary-500 font-sans text-sm underline underline-offset-4"
                          }, " Manage ")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "col-span-12 grid grid-cols-12" }, [
                    createVNode("div", { class: "col-span-12 flex flex-col justify-center sm:col-span-3" }, [
                      createVNode("label", { class: "nui-label text-[0.825rem]" }, "Meeting location")
                    ]),
                    createVNode("div", { class: "col-span-12 sm:col-span-9" }, [
                      createVNode(unref(Field), { name: "meeting.location" }, {
                        default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                          createVNode(_component_BaseInput, {
                            type: "text",
                            placeholder: "Ex: meeting room A",
                            icon: "lucide:map-pin",
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
                  createVNode("div", { class: "col-span-12 grid grid-cols-12" }, [
                    createVNode("div", { class: "col-span-12 flex flex-col justify-center sm:col-span-3" }, [
                      createVNode("label", { class: "nui-label text-[0.825rem]" }, "Meeting URL")
                    ]),
                    createVNode("div", { class: "col-span-12 sm:col-span-9" }, [
                      createVNode(unref(Field), { name: "meeting.url" }, {
                        default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                          createVNode(_component_BaseInput, {
                            type: "text",
                            placeholder: "https://zoom.us/m/123456789",
                            icon: "lucide:video",
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
                  createVNode("div", { class: "col-span-12 grid grid-cols-12" }, [
                    createVNode("div", { class: "col-span-12 flex flex-col justify-center sm:col-span-3" }, [
                      createVNode("label", { class: "nui-label text-[0.825rem]" }, "Calendar")
                    ]),
                    createVNode("div", { class: "col-span-12 sm:col-span-9" }, [
                      createVNode(unref(Field), { name: "meeting.calendar" }, {
                        default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                          createVNode(_component_BaseListbox, {
                            items: calendars,
                            properties: {
                              value: "id",
                              label: "name",
                              sublabel: "text",
                              icon: "icon"
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
                    ])
                  ]),
                  createVNode("div", { class: "col-span-12 grid grid-cols-12" }, [
                    createVNode("div", { class: "col-span-12 flex flex-col justify-start pt-2 sm:col-span-3" }, [
                      createVNode("label", { class: "nui-label text-[0.825rem]" }, "Description")
                    ]),
                    createVNode("div", { class: "col-span-12 sm:col-span-9" }, [
                      createVNode(unref(Field), { name: "meeting.description" }, {
                        default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                          createVNode(_component_BaseTextarea, {
                            placeholder: "Write some additional details about the meeting...",
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
                  createVNode("div", { class: "col-span-12 grid grid-cols-12" }, [
                    createVNode("div", { class: "col-span-12 flex flex-col justify-start pt-4 sm:col-span-3" }, [
                      createVNode("label", { class: "nui-label text-[0.825rem]" }, "Attachments")
                    ]),
                    createVNode("div", { class: "col-span-12 sm:col-span-9" }, [
                      createVNode(_component_BaseInputFileHeadless, {
                        multiple: "",
                        modelValue: unref(uploadedFiles),
                        "onUpdate:modelValue": ($event) => isRef(uploadedFiles) ? uploadedFiles.value = $event : null
                      }, {
                        default: withCtx(({ open, remove, preview, drop, files }) => [
                          createVNode("div", { class: "mb-4 flex items-center gap-2" }, [
                            createVNode("button", {
                              type: "button",
                              class: "nui-focus border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300",
                              tooltip: "Select files",
                              onClick: open
                            }, [
                              createVNode(_component_Icon, {
                                name: "lucide:plus",
                                class: "absolute start-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2"
                              }),
                              createVNode("span", { class: "sr-only" }, "Select files")
                            ], 8, ["onClick"]),
                            createVNode("button", {
                              type: "button",
                              class: "nui-focus border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300",
                              tooltip: "Start Upload"
                            }, [
                              createVNode(_component_Icon, {
                                name: "lucide:arrow-up",
                                class: "h-4 w-4"
                              }),
                              createVNode("span", { class: "sr-only" }, "Start Upload")
                            ])
                          ]),
                          createVNode("div", {
                            class: "",
                            onDragenter: withModifiers(() => {
                            }, ["stop", "prevent"]),
                            onDragover: withModifiers(() => {
                            }, ["stop", "prevent"]),
                            onDrop: drop
                          }, [
                            !files?.length ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "nui-focus border-muted-300 dark:border-muted-700 hover:border-muted-400 focus:border-muted-400 dark:hover:border-muted-600 dark:focus:border-muted-700 group cursor-pointer rounded-lg border-[3px] border-dashed p-8 transition-colors duration-300",
                              tabindex: "0",
                              role: "button",
                              onClick: open,
                              onKeydown: withKeys(withModifiers(open, ["prevent"]), ["enter"])
                            }, [
                              createVNode("div", { class: "p-5 text-center" }, [
                                createVNode(_component_Icon, {
                                  name: "mdi-light:cloud-upload",
                                  class: "text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 mb-2 h-10 w-10 transition-colors duration-300"
                                }),
                                createVNode("h4", { class: "text-muted-400 font-sans text-sm" }, " Drop files to upload "),
                                createVNode("div", null, [
                                  createVNode("span", { class: "text-muted-400 font-sans text-[0.7rem] font-semibold uppercase" }, " Or ")
                                ]),
                                createVNode("label", {
                                  for: "file",
                                  class: "text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 cursor-pointer font-sans text-sm underline underline-offset-4 transition-colors duration-300"
                                }, " Select files ")
                              ])
                            ], 40, ["onClick", "onKeydown"])) : (openBlock(), createBlock("ul", {
                              key: 1,
                              class: "mt-6 space-y-2"
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(files, (file) => {
                                return openBlock(), createBlock("li", {
                                  key: file.name
                                }, [
                                  createVNode("div", { class: "border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative flex items-center justify-end gap-2 rounded-xl border bg-white p-3" }, [
                                    createVNode("div", { class: "flex items-center gap-2" }, [
                                      createVNode("div", { class: "shrink-0" }, [
                                        file.type.startsWith("image") ? (openBlock(), createBlock("img", {
                                          key: 0,
                                          class: "h-14 w-14 rounded-xl object-cover object-center",
                                          src: preview(file).value,
                                          alt: "Image preview"
                                        }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                                          key: 1,
                                          class: "h-14 w-14 rounded-xl object-cover object-center",
                                          src: _imports_0,
                                          alt: "Image preview"
                                        }))
                                      ]),
                                      createVNode("div", { class: "font-sans" }, [
                                        createVNode("span", { class: "text-muted-800 dark:text-muted-100 line-clamp-1 block text-sm" }, toDisplayString(file.name), 1),
                                        createVNode("span", { class: "text-muted-400 block text-xs" }, toDisplayString(("formatFileSize" in _ctx ? _ctx.formatFileSize : unref(formatFileSize))(file.size)), 1)
                                      ])
                                    ]),
                                    createVNode("div", {
                                      class: ["ms-auto w-32 px-4 transition-opacity duration-300", "opacity-100"]
                                    }, [
                                      createVNode(_component_BaseProgress, {
                                        value: 0,
                                        size: "xs",
                                        color: "success"
                                      })
                                    ]),
                                    createVNode("div", { class: "flex gap-2" }, [
                                      createVNode("button", {
                                        class: "border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60",
                                        disabled: "",
                                        type: "button",
                                        tooltip: "Cancel"
                                      }, [
                                        createVNode(_component_Icon, {
                                          name: "lucide:slash",
                                          class: "h-4 w-4"
                                        }),
                                        createVNode("span", { class: "sr-only" }, "Cancel")
                                      ]),
                                      createVNode("button", {
                                        class: "border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300",
                                        type: "button",
                                        tooltip: "Upload"
                                      }, [
                                        createVNode(_component_Icon, {
                                          name: "lucide:arrow-up",
                                          class: "h-4 w-4"
                                        }),
                                        createVNode("span", { class: "sr-only" }, "Upload")
                                      ]),
                                      createVNode("button", {
                                        class: "border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300",
                                        type: "button",
                                        tooltip: "Remove",
                                        onClick: withModifiers(($event) => remove(file), ["prevent"])
                                      }, [
                                        createVNode(_component_Icon, {
                                          name: "lucide:x",
                                          class: "h-4 w-4"
                                        }),
                                        createVNode("span", { class: "sr-only" }, "Remove")
                                      ], 8, ["onClick"])
                                    ])
                                  ])
                                ]);
                              }), 128))
                            ]))
                          ], 40, ["onDragenter", "onDragover", "onDrop"])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "bg-muted-50 dark:bg-muted-800/70 border-muted-200 dark:border-muted-700 border-t p-10" }, [
                createVNode("div", { class: "grid grid-cols-12 gap-8 pb-6" }, [
                  createVNode("div", { class: "col-span-12 grid grid-cols-12" }, [
                    createVNode("div", { class: "col-span-12 flex flex-col justify-center sm:col-span-3" }, [
                      createVNode("label", { class: "nui-label text-[0.825rem]" }, "Color code")
                    ]),
                    createVNode("div", { class: "col-span-12 sm:col-span-9" }, [
                      createVNode("div", { class: "flex items-center gap-3" }, [
                        createVNode(unref(Field), { name: "meeting.colorCode" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseRadioHeadless, {
                              name: "color_code",
                              value: "color_code_1",
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "border-primary-500 peer-checked:bg-primary-500 h-4 w-4 rounded-full border-2 transition-colors duration-300" })
                              ]),
                              _: 2
                            }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Field), { name: "meeting.colorCode" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseRadioHeadless, {
                              name: "color_code",
                              value: "color_code_2",
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "border-info-500 peer-checked:bg-info-500 h-4 w-4 rounded-full border-2 transition-colors duration-300" })
                              ]),
                              _: 2
                            }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Field), { name: "meeting.colorCode" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseRadioHeadless, {
                              name: "color_code",
                              value: "color_code_3",
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "border-success-500 peer-checked:bg-success-500 h-4 w-4 rounded-full border-2 transition-colors duration-300" })
                              ]),
                              _: 2
                            }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Field), { name: "meeting.colorCode" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseRadioHeadless, {
                              name: "color_code",
                              value: "color_code_4",
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "border-danger-500 peer-checked:bg-danger-500 h-4 w-4 rounded-full border-2 transition-colors duration-300" })
                              ]),
                              _: 2
                            }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Field), { name: "meeting.colorCode" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseRadioHeadless, {
                              name: "color_code",
                              value: "color_code_5",
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "h-4 w-4 rounded-full border-2 border-lime-500 transition-colors duration-300 peer-checked:bg-lime-500" })
                              ]),
                              _: 2
                            }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Field), { name: "meeting.colorCode" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseRadioHeadless, {
                              name: "color_code",
                              value: "color_code_6",
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "h-4 w-4 rounded-full border-2 border-pink-500 transition-colors duration-300 peer-checked:bg-pink-500" })
                              ]),
                              _: 2
                            }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "col-span-12 grid grid-cols-12" }, [
                    createVNode("div", { class: "col-span-12 flex flex-col justify-start pt-1 sm:col-span-3" }, [
                      createVNode("label", { class: "nui-label text-[0.825rem]" }, "Notifications")
                    ]),
                    createVNode("div", { class: "col-span-12 sm:col-span-9" }, [
                      createVNode("div", { class: "flex flex-col gap-6" }, [
                        createVNode(unref(Field), { name: "meeting.notifications.general" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseCheckbox, {
                              color: "primary",
                              label: "General notifications",
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Field), { name: "meeting.notifications.team" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseCheckbox, {
                              color: "primary",
                              label: "Team notifications",
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Field), { name: "meeting.notifications.reminders" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseCheckbox, {
                              color: "primary",
                              label: "Auto reminders",
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Field), { name: "meeting.notifications.modifications" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseCheckbox, {
                              color: "primary",
                              label: "Modifications",
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
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_TairoFormSave, null, null, _parent));
      _push(`</form>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/form-6.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=form-6-9f0eb65d.mjs.map
