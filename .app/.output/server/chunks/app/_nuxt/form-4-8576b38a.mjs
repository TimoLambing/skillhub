import { a as useToaster, j as _sfc_main$C, f as __nuxt_component_2, _ as _sfc_main$p, i as _sfc_main$D, g as _sfc_main$z, U as _sfc_main$y, d as _sfc_main$x } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseAutocomplete-8d21f0d1.mjs';
import { defineComponent, computed, ref, mergeProps, withCtx, createTextVNode, unref, createVNode, isRef, toHandlers, useSSRContext } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "form-4",
  __ssrInlineRender: true,
  setup(__props) {
    const VALIDATION_TEXT = {
      TITLE_REQUIRED: "Event title is required",
      SHORTDESC_REQUIRED: "Short description can't be empty",
      LONGDESC_REQUIRED: "Long description can't be empty",
      OPTION_REQUIRED: "Please select an option"
    };
    const zodSchema = z.object({
      event: z.object({
        title: z.string().min(5, VALIDATION_TEXT.TITLE_REQUIRED),
        shortDesc: z.string().min(10, VALIDATION_TEXT.SHORTDESC_REQUIRED),
        longDesc: z.string().min(40, VALIDATION_TEXT.LONGDESC_REQUIRED),
        startDateTime: z.date().nullable(),
        endDateTime: z.date().nullable(),
        participants: z.array(z.string()).optional(),
        color: z.string(),
        category: z.string()
      })
    }).superRefine((data, ctx) => {
      if (!data.event.participants) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.OPTION_REQUIRED,
          path: ["event.participants"]
        });
      }
    });
    const validationSchema = toTypedSchema(zodSchema);
    const initialValues = computed(() => ({
      event: {
        title: "",
        shortDesc: "",
        longDesc: "",
        startDateTime: null,
        endDateTime: null,
        participants: [],
        color: "",
        category: ""
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
        console.log("event-create-success", values2);
        try {
          await new Promise((resolve, reject) => {
            if (values2.event.title === "Demo event") {
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
            setFieldError("event.title", "This name is not allowed");
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
        console.log("event-create-error", error);
        document.documentElement.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    );
    const dates = ref({
      start: /* @__PURE__ */ new Date(),
      end: /* @__PURE__ */ new Date()
    });
    const masks = ref({
      input: "YYYY-MM-DD"
    });
    const people = ref([
      "John Brown",
      "Anita Smith",
      "Belen Rodriguez",
      "Sammy Lee",
      "Hermann Schmidt",
      "Chloe Varley"
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$C;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseText = _sfc_main$D;
      const _component_BaseInput = _sfc_main$z;
      const _component_BaseTextarea = _sfc_main$y;
      const _component_BaseAutocomplete = _sfc_main$1;
      const _component_BaseButton = _sfc_main$x;
      _push(`<form${ssrRenderAttrs(mergeProps({
        action: "",
        method: "POST",
        class: "relative py-3 sm:mx-auto sm:max-w-xl"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "relative px-4 py-10 sm:p-10 md:mx-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mx-auto max-w-md"${_scopeId}><div class="flex items-center gap-4"${_scopeId}><div class="bg-primary-500/20 text-primary-500 flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-sans text-2xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:calendar-blank-duotone",
              class: "h-5 w-5"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="block text-xl font-semibold text-gray-700"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "lg",
              weight: "medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Create an Event `);
                } else {
                  return [
                    createTextVNode(" Create an Event ")
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
                  _push3(`Create a new upcoming event.`);
                } else {
                  return [
                    createTextVNode("Create a new upcoming event.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="divide-y divide-gray-200"${_scopeId}><div class="grid grid-cols-12 gap-4 py-8"${_scopeId}><div class="col-span-12"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "event.title" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    label: "Event title",
                    shape: "curved",
                    icon: "ph:ticket-duotone",
                    placeholder: "Ex: Next team building party",
                    classes: {
                      input: "!h-11 !ps-11",
                      icon: "!h-11 !w-11"
                    },
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
                      label: "Event title",
                      shape: "curved",
                      icon: "ph:ticket-duotone",
                      placeholder: "Ex: Next team building party",
                      classes: {
                        input: "!h-11 !ps-11",
                        icon: "!h-11 !w-11"
                      },
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
            _push2(ssrRenderComponent(unref(Field), { name: "event.shortDesc" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    label: "Short description",
                    shape: "curved",
                    icon: "ph:circles-four-duotone",
                    placeholder: "Ex: We will meet to have fun together",
                    classes: {
                      input: "!h-11 !ps-11",
                      icon: "!h-11 !w-11"
                    },
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
                      label: "Short description",
                      shape: "curved",
                      icon: "ph:circles-four-duotone",
                      placeholder: "Ex: We will meet to have fun together",
                      classes: {
                        input: "!h-11 !ps-11",
                        icon: "!h-11 !w-11"
                      },
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
            _push2(ssrRenderComponent(unref(DatePicker), {
              modelValue: unref(dates),
              "onUpdate:modelValue": ($event) => isRef(dates) ? dates.value = $event : null,
              modelModifiers: { range: true },
              masks: unref(masks),
              "min-date": /* @__PURE__ */ new Date(),
              mode: "dateTime",
              "hide-time-header": "",
              "trim-weeks": ""
            }, {
              default: withCtx(({ inputValue, inputEvents }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex w-full flex-col gap-4 sm:flex-row"${_scopeId2}><div class="relative grow"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "event.startDateTime" }, {
                    default: withCtx(({
                      field,
                      errorMessage,
                      handleChange,
                      handleBlur
                    }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInput, mergeProps({
                          shape: "curved",
                          label: "Start date",
                          icon: "ph:calendar-blank-duotone",
                          value: inputValue.start
                        }, toHandlers(inputEvents.start), {
                          classes: {
                            input: "!h-11 !ps-11",
                            icon: "!h-11 !w-11"
                          },
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
                            shape: "curved",
                            label: "Start date",
                            icon: "ph:calendar-blank-duotone",
                            value: inputValue.start
                          }, toHandlers(inputEvents.start), {
                            classes: {
                              input: "!h-11 !ps-11",
                              icon: "!h-11 !w-11"
                            },
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
                  _push3(ssrRenderComponent(unref(Field), { name: "event.endDateTime" }, {
                    default: withCtx(({
                      field,
                      errorMessage,
                      handleChange,
                      handleBlur
                    }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInput, mergeProps({
                          shape: "curved",
                          label: "End date",
                          icon: "ph:calendar-blank-duotone",
                          value: inputValue.end
                        }, toHandlers(inputEvents.end), {
                          classes: {
                            input: "!h-11 !ps-11",
                            icon: "!h-11 !w-11"
                          },
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
                            shape: "curved",
                            label: "End date",
                            icon: "ph:calendar-blank-duotone",
                            value: inputValue.end
                          }, toHandlers(inputEvents.end), {
                            classes: {
                              input: "!h-11 !ps-11",
                              icon: "!h-11 !w-11"
                            },
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
                        createVNode(unref(Field), { name: "event.startDateTime" }, {
                          default: withCtx(({
                            field,
                            errorMessage,
                            handleChange,
                            handleBlur
                          }) => [
                            createVNode(_component_BaseInput, mergeProps({
                              shape: "curved",
                              label: "Start date",
                              icon: "ph:calendar-blank-duotone",
                              value: inputValue.start
                            }, toHandlers(inputEvents.start), {
                              classes: {
                                input: "!h-11 !ps-11",
                                icon: "!h-11 !w-11"
                              },
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
                        createVNode(unref(Field), { name: "event.endDateTime" }, {
                          default: withCtx(({
                            field,
                            errorMessage,
                            handleChange,
                            handleBlur
                          }) => [
                            createVNode(_component_BaseInput, mergeProps({
                              shape: "curved",
                              label: "End date",
                              icon: "ph:calendar-blank-duotone",
                              value: inputValue.end
                            }, toHandlers(inputEvents.end), {
                              classes: {
                                input: "!h-11 !ps-11",
                                icon: "!h-11 !w-11"
                              },
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
            _push2(`</div><div class="col-span-12"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "event.longDesc" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseTextarea, {
                    label: "Long description",
                    shape: "curved",
                    placeholder: "Ex: Some additional details about the event...",
                    rows: "5",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseTextarea, {
                      label: "Long description",
                      shape: "curved",
                      placeholder: "Ex: Some additional details about the event...",
                      rows: "5",
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
            _push2(ssrRenderComponent(unref(Field), { name: "event.participants" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseAutocomplete, {
                    items: unref(people),
                    shape: "curved",
                    icon: "ph:users-duotone",
                    placeholder: "Add participants...",
                    label: "Participants",
                    multiple: "",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseAutocomplete, {
                      items: unref(people),
                      shape: "curved",
                      icon: "ph:users-duotone",
                      placeholder: "Add participants...",
                      label: "Participants",
                      multiple: "",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, null, 8, ["items", "model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="col-span-12 sm:col-span-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "event.color" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    type: "color",
                    list: "eventColors",
                    label: "Event color",
                    shape: "curved",
                    icon: "ph:drop-half-duotone",
                    placeholder: "Pick an event color...",
                    classes: {
                      input: "!h-11 !ps-11 appearance-none",
                      icon: "!h-11 !w-11"
                    },
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                  _push3(`<datalist id="eventColors"${_scopeId2}><option value="#84cc16"${_scopeId2}></option><option value="#22c55e"${_scopeId2}></option><option value="#0ea5e9"${_scopeId2}></option><option value="#6366f1"${_scopeId2}></option><option value="#8b5cf6"${_scopeId2}></option><option value="#d946ef"${_scopeId2}></option><option value="#f43f5e"${_scopeId2}></option><option value="#facc15"${_scopeId2}></option><option value="#fb923c"${_scopeId2}></option><option value="#9ca3af"${_scopeId2}></option></datalist>`);
                } else {
                  return [
                    createVNode(_component_BaseInput, {
                      type: "color",
                      list: "eventColors",
                      label: "Event color",
                      shape: "curved",
                      icon: "ph:drop-half-duotone",
                      placeholder: "Pick an event color...",
                      classes: {
                        input: "!h-11 !ps-11 appearance-none",
                        icon: "!h-11 !w-11"
                      },
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"]),
                    createVNode("datalist", { id: "eventColors" }, [
                      createVNode("option", { value: "#84cc16" }),
                      createVNode("option", { value: "#22c55e" }),
                      createVNode("option", { value: "#0ea5e9" }),
                      createVNode("option", { value: "#6366f1" }),
                      createVNode("option", { value: "#8b5cf6" }),
                      createVNode("option", { value: "#d946ef" }),
                      createVNode("option", { value: "#f43f5e" }),
                      createVNode("option", { value: "#facc15" }),
                      createVNode("option", { value: "#fb923c" }),
                      createVNode("option", { value: "#9ca3af" })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="col-span-12 sm:col-span-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "event.category" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    list: "eventCategories",
                    label: "Event category",
                    shape: "curved",
                    icon: "ph:ticket-duotone",
                    placeholder: "Pick a category...",
                    classes: {
                      input: "!h-11 !ps-11",
                      icon: "!h-11 !w-11"
                    },
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                  _push3(`<datalist id="eventCategories"${_scopeId2}><option value="Chrome"${_scopeId2}></option><option value="Firefox"${_scopeId2}></option><option value="Opera"${_scopeId2}></option><option value="Safari"${_scopeId2}></option><option value="Microsoft Edge"${_scopeId2}></option></datalist>`);
                } else {
                  return [
                    createVNode(_component_BaseInput, {
                      list: "eventCategories",
                      label: "Event category",
                      shape: "curved",
                      icon: "ph:ticket-duotone",
                      placeholder: "Pick a category...",
                      classes: {
                        input: "!h-11 !ps-11",
                        icon: "!h-11 !w-11"
                      },
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"]),
                    createVNode("datalist", { id: "eventCategories" }, [
                      createVNode("option", { value: "Chrome" }),
                      createVNode("option", { value: "Firefox" }),
                      createVNode("option", { value: "Opera" }),
                      createVNode("option", { value: "Safari" }),
                      createVNode("option", { value: "Microsoft Edge" })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="flex items-center gap-4 pt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              shape: "curved",
              class: "!h-12 w-full"
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
              shape: "curved",
              color: "primary",
              class: "!h-12 w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Create`);
                } else {
                  return [
                    createTextVNode("Create")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "mx-auto max-w-md" }, [
                createVNode("div", { class: "flex items-center gap-4" }, [
                  createVNode("div", { class: "bg-primary-500/20 text-primary-500 flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-sans text-2xl" }, [
                    createVNode(_component_Icon, {
                      name: "ph:calendar-blank-duotone",
                      class: "h-5 w-5"
                    })
                  ]),
                  createVNode("div", { class: "block text-xl font-semibold text-gray-700" }, [
                    createVNode(_component_BaseHeading, {
                      as: "h3",
                      size: "lg",
                      weight: "medium"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Create an Event ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseText, {
                      size: "sm",
                      class: "text-muted-400"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Create a new upcoming event.")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "divide-y divide-gray-200" }, [
                  createVNode("div", { class: "grid grid-cols-12 gap-4 py-8" }, [
                    createVNode("div", { class: "col-span-12" }, [
                      createVNode(unref(Field), { name: "event.title" }, {
                        default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                          createVNode(_component_BaseInput, {
                            label: "Event title",
                            shape: "curved",
                            icon: "ph:ticket-duotone",
                            placeholder: "Ex: Next team building party",
                            classes: {
                              input: "!h-11 !ps-11",
                              icon: "!h-11 !w-11"
                            },
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
                      createVNode(unref(Field), { name: "event.shortDesc" }, {
                        default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                          createVNode(_component_BaseInput, {
                            label: "Short description",
                            shape: "curved",
                            icon: "ph:circles-four-duotone",
                            placeholder: "Ex: We will meet to have fun together",
                            classes: {
                              input: "!h-11 !ps-11",
                              icon: "!h-11 !w-11"
                            },
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
                      createVNode(unref(DatePicker), {
                        modelValue: unref(dates),
                        "onUpdate:modelValue": ($event) => isRef(dates) ? dates.value = $event : null,
                        modelModifiers: { range: true },
                        masks: unref(masks),
                        "min-date": /* @__PURE__ */ new Date(),
                        mode: "dateTime",
                        "hide-time-header": "",
                        "trim-weeks": ""
                      }, {
                        default: withCtx(({ inputValue, inputEvents }) => [
                          createVNode("div", { class: "flex w-full flex-col gap-4 sm:flex-row" }, [
                            createVNode("div", { class: "relative grow" }, [
                              createVNode(unref(Field), { name: "event.startDateTime" }, {
                                default: withCtx(({
                                  field,
                                  errorMessage,
                                  handleChange,
                                  handleBlur
                                }) => [
                                  createVNode(_component_BaseInput, mergeProps({
                                    shape: "curved",
                                    label: "Start date",
                                    icon: "ph:calendar-blank-duotone",
                                    value: inputValue.start
                                  }, toHandlers(inputEvents.start), {
                                    classes: {
                                      input: "!h-11 !ps-11",
                                      icon: "!h-11 !w-11"
                                    },
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
                              createVNode(unref(Field), { name: "event.endDateTime" }, {
                                default: withCtx(({
                                  field,
                                  errorMessage,
                                  handleChange,
                                  handleBlur
                                }) => [
                                  createVNode(_component_BaseInput, mergeProps({
                                    shape: "curved",
                                    label: "End date",
                                    icon: "ph:calendar-blank-duotone",
                                    value: inputValue.end
                                  }, toHandlers(inputEvents.end), {
                                    classes: {
                                      input: "!h-11 !ps-11",
                                      icon: "!h-11 !w-11"
                                    },
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
                      createVNode(unref(Field), { name: "event.longDesc" }, {
                        default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                          createVNode(_component_BaseTextarea, {
                            label: "Long description",
                            shape: "curved",
                            placeholder: "Ex: Some additional details about the event...",
                            rows: "5",
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
                      createVNode(unref(Field), { name: "event.participants" }, {
                        default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                          createVNode(_component_BaseAutocomplete, {
                            items: unref(people),
                            shape: "curved",
                            icon: "ph:users-duotone",
                            placeholder: "Add participants...",
                            label: "Participants",
                            multiple: "",
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, null, 8, ["items", "model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "col-span-12 sm:col-span-6" }, [
                      createVNode(unref(Field), { name: "event.color" }, {
                        default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                          createVNode(_component_BaseInput, {
                            type: "color",
                            list: "eventColors",
                            label: "Event color",
                            shape: "curved",
                            icon: "ph:drop-half-duotone",
                            placeholder: "Pick an event color...",
                            classes: {
                              input: "!h-11 !ps-11 appearance-none",
                              icon: "!h-11 !w-11"
                            },
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"]),
                          createVNode("datalist", { id: "eventColors" }, [
                            createVNode("option", { value: "#84cc16" }),
                            createVNode("option", { value: "#22c55e" }),
                            createVNode("option", { value: "#0ea5e9" }),
                            createVNode("option", { value: "#6366f1" }),
                            createVNode("option", { value: "#8b5cf6" }),
                            createVNode("option", { value: "#d946ef" }),
                            createVNode("option", { value: "#f43f5e" }),
                            createVNode("option", { value: "#facc15" }),
                            createVNode("option", { value: "#fb923c" }),
                            createVNode("option", { value: "#9ca3af" })
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "col-span-12 sm:col-span-6" }, [
                      createVNode(unref(Field), { name: "event.category" }, {
                        default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                          createVNode(_component_BaseInput, {
                            list: "eventCategories",
                            label: "Event category",
                            shape: "curved",
                            icon: "ph:ticket-duotone",
                            placeholder: "Pick a category...",
                            classes: {
                              input: "!h-11 !ps-11",
                              icon: "!h-11 !w-11"
                            },
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"]),
                          createVNode("datalist", { id: "eventCategories" }, [
                            createVNode("option", { value: "Chrome" }),
                            createVNode("option", { value: "Firefox" }),
                            createVNode("option", { value: "Opera" }),
                            createVNode("option", { value: "Safari" }),
                            createVNode("option", { value: "Microsoft Edge" })
                          ])
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode("div", { class: "flex items-center gap-4 pt-4" }, [
                    createVNode(_component_BaseButton, {
                      shape: "curved",
                      class: "!h-12 w-full"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Cancel")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseButton, {
                      type: "submit",
                      shape: "curved",
                      color: "primary",
                      class: "!h-12 w-full"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Create")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/form-4.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=form-4-8576b38a.mjs.map
