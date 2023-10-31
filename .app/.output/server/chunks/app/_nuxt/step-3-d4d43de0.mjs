import { _ as _sfc_main$1 } from './DemoWizardStepTitle-e1abeb8e.mjs';
import { H as useHead, j as _sfc_main$C, g as _sfc_main$z, s as _sfc_main$E, f as __nuxt_component_2 } from '../server.mjs';
import { _ as _sfc_main$2 } from './BaseButtonIcon-6150946c.mjs';
import { _ as _sfc_main$3 } from './BaseRadioHeadless-286f432f.mjs';
import { _ as _sfc_main$4 } from './BaseButtonAction-57c21d00.mjs';
import { defineComponent, ref, computed, withCtx, unref, isRef, createVNode, openBlock, createBlock, toDisplayString, Fragment, renderList, createCommentVNode, mergeProps, toHandlers, useSSRContext } from 'vue';
import { u as useMultiStepForm } from './multi-step-form-008d1760.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { DatePicker } from 'v-calendar';
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
import '@vee-validate/zod';
import 'vee-validate';
import 'zod';
import '@headlessui/vue';
import '@vue/shared';
import 'chroma-js';
import 'tailwindcss/colors.js';
import 'fast-copy';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "step-3",
  __ssrInlineRender: true,
  setup(__props) {
    const { data: project } = useMultiStepForm();
    useHead({
      title: "Project details"
    });
    const customers = [
      {
        logo: "/img/logos/brands/airbnb.svg",
        name: "Airbnb",
        location: "Los Angeles, CA"
      },
      {
        logo: "/img/logos/brands/facebook.svg",
        name: "Facebook",
        location: "Los Angeles, CA"
      },
      {
        logo: "/img/logos/brands/dribbble.svg",
        name: "Dribbble",
        location: "Los Angeles, CA"
      },
      {
        logo: "/img/logos/brands/figma.svg",
        name: "Figma",
        location: "Los Angeles, CA"
      },
      {
        logo: "/img/logos/brands/google.svg",
        name: "Google",
        location: "Los Angeles, CA"
      },
      {
        logo: "/img/logos/brands/github.svg",
        name: "Github",
        location: "Los Angeles, CA"
      },
      {
        logo: "/img/logos/brands/gitlab.svg",
        name: "Gitlab",
        location: "Los Angeles, CA"
      },
      {
        logo: "/img/logos/brands/hubspot.svg",
        name: "Hubspot",
        location: "Los Angeles, CA"
      },
      {
        logo: "/img/logos/brands/slack.svg",
        name: "Slack",
        location: "Los Angeles, CA"
      },
      {
        logo: "/img/logos/brands/udemy.svg",
        name: "Udemy",
        location: "Los Angeles, CA"
      }
    ];
    const search = ref("");
    const itemSelected = ref(false);
    const filteredCustomers = computed(() => {
      if (!search.value) {
        return [];
      }
      return customers.filter((item) => {
        return item.name?.match(new RegExp(search.value, "i")) || item.location?.match(new RegExp(search.value, "i"));
      }).splice(0, 4);
    });
    function selectCustomer(customerData) {
      project.value.customer = customerData;
      itemSelected.value = true;
      search.value = "";
    }
    function dismissCustomer() {
      if (project.value.customer) {
        project.value.customer.name = void 0;
        project.value.customer.logo = void 0;
        project.value.customer.location = void 0;
      }
      itemSelected.value = false;
      search.value = "";
    }
    const masks = ref({
      input: "YYYY-MM-DD"
    });
    const budget = ref("< 5K");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DemoWizardStepTitle = _sfc_main$1;
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseInput = _sfc_main$z;
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BaseButtonIcon = _sfc_main$2;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseRadioHeadless = _sfc_main$3;
      const _component_BaseButtonAction = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_DemoWizardStepTitle, null, null, _parent));
      _push(`<div class="mx-auto flex w-full max-w-sm flex-col gap-3 px-4">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "relative z-10 p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4 text-center"${_scopeId}><h3 class="text-muted-400 font-sans text-[0.65rem] font-semibold uppercase"${_scopeId}> Customer </h3></div><div${_scopeId}><div class="relative"${_scopeId}>`);
            if (!unref(itemSelected)) {
              _push2(ssrRenderComponent(_component_BaseInput, {
                modelValue: unref(search),
                "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                icon: "lucide:search",
                shape: "curved",
                placeholder: "ex: Figma, Github, ...",
                classes: {
                  input: "h-12 text-base !ps-12",
                  icon: "h-12 w-12"
                }
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<div class="flex items-center gap-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseAvatar, {
                size: "sm",
                src: unref(project).customer?.logo,
                class: "bg-muted-100 dark:bg-muted-700/60"
              }, null, _parent2, _scopeId));
              _push2(`<div class="flex flex-col"${_scopeId}><h3 class="text-muted-800 dark:text-muted-100 font-sans text-sm font-semibold"${_scopeId}>${ssrInterpolate(unref(project).customer?.name)}</h3><p class="text-muted-500 dark:text-muted-400 font-sans text-xs"${_scopeId}>${ssrInterpolate(unref(project).customer?.location)}</p></div><div class="me-3 ms-auto"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                small: "",
                shape: "full",
                onClick: dismissCustomer
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:x",
                      class: "h-4 w-4"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:x",
                        class: "h-4 w-4"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            }
            _push2(`<div class="${ssrRenderClass([
              unref(search).length > 0 ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-1",
              "border-muted-200 dark:border-muted-700 dark:bg-muted-800 shadow-muted-300/30 dark:shadow-muted-900/30 absolute start-0 top-14 w-full rounded-xl border bg-white p-4 shadow-xl transition-all duration-300"
            ])}"${_scopeId}>`);
            if (unref(filteredCustomers).length > 0) {
              _push2(`<div class="nui-slimscroll max-h-[248px] space-y-2 overflow-y-auto"${_scopeId}><!--[-->`);
              ssrRenderList(unref(filteredCustomers), (customer) => {
                _push2(`<div role="button" class="hover:bg-muted-100 flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseAvatar, {
                  size: "sm",
                  src: customer.logo
                }, null, _parent2, _scopeId));
                _push2(`<div class="flex flex-col"${_scopeId}><h3 class="text-muted-800 dark:text-muted-100 font-sans text-sm font-semibold"${_scopeId}>${ssrInterpolate(customer.name)}</h3><p class="text-muted-500 dark:text-muted-400 font-sans text-xs"${_scopeId}>${ssrInterpolate(customer.location)}</p></div><div class="ms-auto"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                  small: "",
                  shape: "full",
                  onClick: ($event) => selectCustomer(customer)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "lucide:plus",
                        class: "h-4 w-4"
                      }, null, _parent3, _scopeId2));
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
                }, _parent2, _scopeId));
                _push2(`</div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-4 text-center" }, [
                createVNode("h3", { class: "text-muted-400 font-sans text-[0.65rem] font-semibold uppercase" }, " Customer ")
              ]),
              createVNode("div", null, [
                createVNode("div", { class: "relative" }, [
                  !unref(itemSelected) ? (openBlock(), createBlock(_component_BaseInput, {
                    key: 0,
                    modelValue: unref(search),
                    "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                    icon: "lucide:search",
                    shape: "curved",
                    placeholder: "ex: Figma, Github, ...",
                    classes: {
                      input: "h-12 text-base !ps-12",
                      icon: "h-12 w-12"
                    }
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "flex items-center gap-3"
                  }, [
                    createVNode(_component_BaseAvatar, {
                      size: "sm",
                      src: unref(project).customer?.logo,
                      class: "bg-muted-100 dark:bg-muted-700/60"
                    }, null, 8, ["src"]),
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("h3", { class: "text-muted-800 dark:text-muted-100 font-sans text-sm font-semibold" }, toDisplayString(unref(project).customer?.name), 1),
                      createVNode("p", { class: "text-muted-500 dark:text-muted-400 font-sans text-xs" }, toDisplayString(unref(project).customer?.location), 1)
                    ]),
                    createVNode("div", { class: "me-3 ms-auto" }, [
                      createVNode(_component_BaseButtonIcon, {
                        small: "",
                        shape: "full",
                        onClick: dismissCustomer
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "lucide:x",
                            class: "h-4 w-4"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])),
                  createVNode("div", {
                    class: [
                      "border-muted-200 dark:border-muted-700 dark:bg-muted-800 shadow-muted-300/30 dark:shadow-muted-900/30 absolute start-0 top-14 w-full rounded-xl border bg-white p-4 shadow-xl transition-all duration-300",
                      unref(search).length > 0 ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-1"
                    ]
                  }, [
                    unref(filteredCustomers).length > 0 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "nui-slimscroll max-h-[248px] space-y-2 overflow-y-auto"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredCustomers), (customer) => {
                        return openBlock(), createBlock("div", {
                          key: customer.name,
                          role: "button",
                          class: "hover:bg-muted-100 flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2"
                        }, [
                          createVNode(_component_BaseAvatar, {
                            size: "sm",
                            src: customer.logo
                          }, null, 8, ["src"]),
                          createVNode("div", { class: "flex flex-col" }, [
                            createVNode("h3", { class: "text-muted-800 dark:text-muted-100 font-sans text-sm font-semibold" }, toDisplayString(customer.name), 1),
                            createVNode("p", { class: "text-muted-500 dark:text-muted-400 font-sans text-xs" }, toDisplayString(customer.location), 1)
                          ]),
                          createVNode("div", { class: "ms-auto" }, [
                            createVNode(_component_BaseButtonIcon, {
                              small: "",
                              shape: "full",
                              onClick: ($event) => selectCustomer(customer)
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
                        ]);
                      }), 128))
                    ])) : createCommentVNode("", true)
                  ], 2)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4 text-center"${_scopeId}><h3 class="text-muted-400 font-sans text-[0.65rem] font-semibold uppercase"${_scopeId}> Time Frame </h3></div><div class="divide-muted-200 dark:divide-muted-700 flex w-full justify-between divide-x"${_scopeId}><div class="relative pe-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(DatePicker), {
              modelValue: unref(project).startDate,
              "onUpdate:modelValue": ($event) => unref(project).startDate = $event,
              masks: unref(masks),
              "minute-increment": 15,
              "min-date": /* @__PURE__ */ new Date(),
              "trim-weeks": ""
            }, {
              default: withCtx(({ inputValue, inputEvents }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="relative"${_scopeId2}><input class="text-muted-600 dark:text-muted-100 placeholder:text-muted-300 dark:placeholder:text-muted-600 focus-visible:outline-muted-300/70 peer inline-flex h-10 w-full items-center rounded-lg bg-transparent ps-10 font-sans text-sm leading-tight focus-visible:outline-dashed focus-visible:outline-offset-4"${ssrRenderAttr("value", inputValue)} placeholder="Start date"${_scopeId2}><div class="text-muted-400 peer-focus-visible:text-primary-500 absolute start-0 top-0 flex h-10 w-10 items-center justify-center transition-colors duration-300"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:map-pin",
                    class: "h-5 w-5"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "relative" }, [
                      createVNode("input", mergeProps({
                        class: "text-muted-600 dark:text-muted-100 placeholder:text-muted-300 dark:placeholder:text-muted-600 focus-visible:outline-muted-300/70 peer inline-flex h-10 w-full items-center rounded-lg bg-transparent ps-10 font-sans text-sm leading-tight focus-visible:outline-dashed focus-visible:outline-offset-4",
                        value: inputValue,
                        placeholder: "Start date"
                      }, toHandlers(inputEvents, true)), null, 16, ["value"]),
                      createVNode("div", { class: "text-muted-400 peer-focus-visible:text-primary-500 absolute start-0 top-0 flex h-10 w-10 items-center justify-center transition-colors duration-300" }, [
                        createVNode(_component_Icon, {
                          name: "lucide:map-pin",
                          class: "h-5 w-5"
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="relative ps-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(DatePicker), {
              id: "endDate",
              modelValue: unref(project).endDate,
              "onUpdate:modelValue": ($event) => unref(project).endDate = $event,
              masks: unref(masks),
              "minute-increment": 15,
              "min-date": unref(project).startDate,
              "trim-weeks": ""
            }, {
              default: withCtx(({ inputValue, inputEvents }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="relative"${_scopeId2}><input class="text-muted-600 dark:text-muted-100 placeholder:text-muted-300 dark:placeholder:text-muted-600 focus-visible:outline-muted-300/70 peer inline-flex h-10 w-full items-center rounded-lg bg-transparent ps-10 font-sans text-sm leading-tight focus-visible:outline-dashed focus-visible:outline-offset-4"${ssrRenderAttr("value", inputValue)} placeholder="End date"${_scopeId2}><div class="text-muted-400 peer-focus-visible:text-primary-500 absolute start-0 top-0 flex h-10 w-10 items-center justify-center transition-colors duration-300"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:flag",
                    class: "h-5 w-5"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "relative" }, [
                      createVNode("input", mergeProps({
                        class: "text-muted-600 dark:text-muted-100 placeholder:text-muted-300 dark:placeholder:text-muted-600 focus-visible:outline-muted-300/70 peer inline-flex h-10 w-full items-center rounded-lg bg-transparent ps-10 font-sans text-sm leading-tight focus-visible:outline-dashed focus-visible:outline-offset-4",
                        value: inputValue,
                        placeholder: "End date"
                      }, toHandlers(inputEvents, true)), null, 16, ["value"]),
                      createVNode("div", { class: "text-muted-400 peer-focus-visible:text-primary-500 absolute start-0 top-0 flex h-10 w-10 items-center justify-center transition-colors duration-300" }, [
                        createVNode(_component_Icon, {
                          name: "lucide:flag",
                          class: "h-5 w-5"
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
              createVNode("div", { class: "mb-4 text-center" }, [
                createVNode("h3", { class: "text-muted-400 font-sans text-[0.65rem] font-semibold uppercase" }, " Time Frame ")
              ]),
              createVNode("div", { class: "divide-muted-200 dark:divide-muted-700 flex w-full justify-between divide-x" }, [
                createVNode("div", { class: "relative pe-4" }, [
                  createVNode(unref(DatePicker), {
                    modelValue: unref(project).startDate,
                    "onUpdate:modelValue": ($event) => unref(project).startDate = $event,
                    masks: unref(masks),
                    "minute-increment": 15,
                    "min-date": /* @__PURE__ */ new Date(),
                    "trim-weeks": ""
                  }, {
                    default: withCtx(({ inputValue, inputEvents }) => [
                      createVNode("div", { class: "relative" }, [
                        createVNode("input", mergeProps({
                          class: "text-muted-600 dark:text-muted-100 placeholder:text-muted-300 dark:placeholder:text-muted-600 focus-visible:outline-muted-300/70 peer inline-flex h-10 w-full items-center rounded-lg bg-transparent ps-10 font-sans text-sm leading-tight focus-visible:outline-dashed focus-visible:outline-offset-4",
                          value: inputValue,
                          placeholder: "Start date"
                        }, toHandlers(inputEvents, true)), null, 16, ["value"]),
                        createVNode("div", { class: "text-muted-400 peer-focus-visible:text-primary-500 absolute start-0 top-0 flex h-10 w-10 items-center justify-center transition-colors duration-300" }, [
                          createVNode(_component_Icon, {
                            name: "lucide:map-pin",
                            class: "h-5 w-5"
                          })
                        ])
                      ])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue", "masks", "min-date"])
                ]),
                createVNode("div", { class: "relative ps-4" }, [
                  createVNode(unref(DatePicker), {
                    id: "endDate",
                    modelValue: unref(project).endDate,
                    "onUpdate:modelValue": ($event) => unref(project).endDate = $event,
                    masks: unref(masks),
                    "minute-increment": 15,
                    "min-date": unref(project).startDate,
                    "trim-weeks": ""
                  }, {
                    default: withCtx(({ inputValue, inputEvents }) => [
                      createVNode("div", { class: "relative" }, [
                        createVNode("input", mergeProps({
                          class: "text-muted-600 dark:text-muted-100 placeholder:text-muted-300 dark:placeholder:text-muted-600 focus-visible:outline-muted-300/70 peer inline-flex h-10 w-full items-center rounded-lg bg-transparent ps-10 font-sans text-sm leading-tight focus-visible:outline-dashed focus-visible:outline-offset-4",
                          value: inputValue,
                          placeholder: "End date"
                        }, toHandlers(inputEvents, true)), null, 16, ["value"]),
                        createVNode("div", { class: "text-muted-400 peer-focus-visible:text-primary-500 absolute start-0 top-0 flex h-10 w-10 items-center justify-center transition-colors duration-300" }, [
                          createVNode(_component_Icon, {
                            name: "lucide:flag",
                            class: "h-5 w-5"
                          })
                        ])
                      ])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue", "masks", "min-date"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4 text-center"${_scopeId}><h3 class="text-muted-400 font-sans text-[0.65rem] font-semibold uppercase"${_scopeId}> Initial budget </h3></div><div class="flex w-full justify-center gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseRadioHeadless, {
              modelValue: unref(budget),
              "onUpdate:modelValue": ($event) => isRef(budget) ? budget.value = $event : null,
              name: "budget",
              value: "< 5K"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseButtonAction, {
                    shape: "curved",
                    class: "peer-checked:!bg-primary-500 peer-checked:!border-primary-500 peer-checked:shadow-primary-500/20 peer-checked:!text-white peer-checked:shadow-xl"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>&lt; 5K</span>`);
                      } else {
                        return [
                          createVNode("span", null, "< 5K")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseButtonAction, {
                      shape: "curved",
                      class: "peer-checked:!bg-primary-500 peer-checked:!border-primary-500 peer-checked:shadow-primary-500/20 peer-checked:!text-white peer-checked:shadow-xl"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "< 5K")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseRadioHeadless, {
              modelValue: unref(budget),
              "onUpdate:modelValue": ($event) => isRef(budget) ? budget.value = $event : null,
              name: "budget",
              value: "< 30K"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseButtonAction, {
                    shape: "curved",
                    class: "peer-checked:!bg-primary-500 peer-checked:!border-primary-500 peer-checked:shadow-primary-500/20 peer-checked:!text-white peer-checked:shadow-xl"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>&lt; 30K</span>`);
                      } else {
                        return [
                          createVNode("span", null, "< 30K")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseButtonAction, {
                      shape: "curved",
                      class: "peer-checked:!bg-primary-500 peer-checked:!border-primary-500 peer-checked:shadow-primary-500/20 peer-checked:!text-white peer-checked:shadow-xl"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "< 30K")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseRadioHeadless, {
              modelValue: unref(budget),
              "onUpdate:modelValue": ($event) => isRef(budget) ? budget.value = $event : null,
              name: "budget",
              value: "< 100K"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseButtonAction, {
                    shape: "curved",
                    class: "peer-checked:!bg-primary-500 peer-checked:!border-primary-500 peer-checked:shadow-primary-500/20 peer-checked:!text-white peer-checked:shadow-xl"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>&lt; 100K</span>`);
                      } else {
                        return [
                          createVNode("span", null, "< 100K")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseButtonAction, {
                      shape: "curved",
                      class: "peer-checked:!bg-primary-500 peer-checked:!border-primary-500 peer-checked:shadow-primary-500/20 peer-checked:!text-white peer-checked:shadow-xl"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "< 100K")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseRadioHeadless, {
              modelValue: unref(budget),
              "onUpdate:modelValue": ($event) => isRef(budget) ? budget.value = $event : null,
              name: "budget",
              value: "100K+"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseButtonAction, {
                    shape: "curved",
                    class: "peer-checked:!bg-primary-500 peer-checked:!border-primary-500 peer-checked:shadow-primary-500/20 peer-checked:!text-white peer-checked:shadow-xl"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>100K+</span>`);
                      } else {
                        return [
                          createVNode("span", null, "100K+")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseButtonAction, {
                      shape: "curved",
                      class: "peer-checked:!bg-primary-500 peer-checked:!border-primary-500 peer-checked:shadow-primary-500/20 peer-checked:!text-white peer-checked:shadow-xl"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "100K+")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mb-4 text-center" }, [
                createVNode("h3", { class: "text-muted-400 font-sans text-[0.65rem] font-semibold uppercase" }, " Initial budget ")
              ]),
              createVNode("div", { class: "flex w-full justify-center gap-3" }, [
                createVNode(_component_BaseRadioHeadless, {
                  modelValue: unref(budget),
                  "onUpdate:modelValue": ($event) => isRef(budget) ? budget.value = $event : null,
                  name: "budget",
                  value: "< 5K"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_BaseButtonAction, {
                      shape: "curved",
                      class: "peer-checked:!bg-primary-500 peer-checked:!border-primary-500 peer-checked:shadow-primary-500/20 peer-checked:!text-white peer-checked:shadow-xl"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "< 5K")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_BaseRadioHeadless, {
                  modelValue: unref(budget),
                  "onUpdate:modelValue": ($event) => isRef(budget) ? budget.value = $event : null,
                  name: "budget",
                  value: "< 30K"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_BaseButtonAction, {
                      shape: "curved",
                      class: "peer-checked:!bg-primary-500 peer-checked:!border-primary-500 peer-checked:shadow-primary-500/20 peer-checked:!text-white peer-checked:shadow-xl"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "< 30K")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_BaseRadioHeadless, {
                  modelValue: unref(budget),
                  "onUpdate:modelValue": ($event) => isRef(budget) ? budget.value = $event : null,
                  name: "budget",
                  value: "< 100K"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_BaseButtonAction, {
                      shape: "curved",
                      class: "peer-checked:!bg-primary-500 peer-checked:!border-primary-500 peer-checked:shadow-primary-500/20 peer-checked:!text-white peer-checked:shadow-xl"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "< 100K")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_BaseRadioHeadless, {
                  modelValue: unref(budget),
                  "onUpdate:modelValue": ($event) => isRef(budget) ? budget.value = $event : null,
                  name: "budget",
                  value: "100K+"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_BaseButtonAction, {
                      shape: "curved",
                      class: "peer-checked:!bg-primary-500 peer-checked:!border-primary-500 peer-checked:shadow-primary-500/20 peer-checked:!text-white peer-checked:shadow-xl"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "100K+")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/wizard/step-3.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=step-3-d4d43de0.mjs.map
