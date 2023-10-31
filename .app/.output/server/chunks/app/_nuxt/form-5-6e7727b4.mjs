import { a as useToaster, V as useClipboard, j as _sfc_main$C, f as __nuxt_component_2, _ as _sfc_main$p, i as _sfc_main$D, b as _sfc_main$o, g as _sfc_main$z, d as _sfc_main$x } from '../server.mjs';
import { _ as _sfc_main$1 } from './TairoPasswordStrength-48d6c128.mjs';
import { _ as __nuxt_component_1 } from './BaseCheckboxAnimated-ecb67b13.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, unref, isRef, createVNode, withModifiers, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { m } from '../../slider.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "form-5",
  __ssrInlineRender: true,
  setup(__props) {
    const toaster = useToaster();
    const showPasswordField = ref(false);
    const passwordScore = ref(0);
    const password = ref("");
    const chars = ref({
      lower: "abcdefghijklmnopqrstuvwxyz",
      upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      numeric: "0123456789",
      symbols: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
    });
    const charsLength = ref(12);
    const charsLower = ref(true);
    const charsUpper = ref(true);
    const charsNumeric = ref(true);
    const charsSymbols = ref(true);
    const charsArray = ref([]);
    function checkStrength() {
      if (!password.value)
        return passwordScore.value = 0;
      passwordScore.value = 1;
    }
    function generatePassword() {
      if (charsLower)
        charsArray.value.push(chars.value.lower);
      if (charsUpper)
        charsArray.value.push(chars.value.upper);
      if (charsNumeric)
        charsArray.value.push(chars.value.numeric);
      if (charsSymbols)
        charsArray.value.push(chars.value.symbols);
      password.value = shuffleArray(charsArray.value.join("").split("")).join("").substring(0, charsLength.value);
      checkStrength();
    }
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    const { text, copy, copied, isSupported } = useClipboard({ source: password });
    const handleClipboard = () => {
      copy(password.value);
      if (copied) {
        console.log("Text was copied to clipboard!");
        toaster.clearAll();
        toaster.show({
          title: "Success",
          message: `Password was copied to clipboard!`,
          color: "success",
          icon: "ph:check",
          closable: true
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$C;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseText = _sfc_main$D;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseInput = _sfc_main$z;
      const _component_TairoPasswordStrength = _sfc_main$1;
      const _component_BaseCheckboxAnimated = __nuxt_component_1;
      const _component_BaseButton = _sfc_main$x;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative py-3 sm:mx-auto sm:max-w-xl" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "relative px-4 py-10 sm:p-10 md:mx-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mx-auto max-w-md"${_scopeId}><div class="flex items-center gap-4"${_scopeId}><div class="bg-primary-500/20 text-primary-500 flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-sans text-2xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:lock-duotone",
              class: "h-5 w-5"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="text-muted-700 block text-xl font-semibold"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "lg",
              weight: "medium",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` New Password `);
                } else {
                  return [
                    createTextVNode(" New Password ")
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
                  _push3(`Generate a random password.`);
                } else {
                  return [
                    createTextVNode("Generate a random password.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="divide-muted-200 dark:divide-muted-700 divide-y"${_scopeId}><div class="grid grid-cols-12 gap-4 py-5"${_scopeId}><div class="col-span-12"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Change the length value to generate a new random password. You can also change the character types. `);
                } else {
                  return [
                    createTextVNode(" Change the length value to generate a new random password. You can also change the character types. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="text-muted-800 mx-auto w-full pt-5"${_scopeId}><div class="relative mb-2"${_scopeId}><label class="text-muted-500 dark:text-muted-400 mb-2 block text-xs font-semibold"${_scopeId}>Password strength</label>`);
            _push2(ssrRenderComponent(_component_BaseInput, {
              modelValue: unref(password),
              "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
              type: unref(showPasswordField) ? "password" : "text",
              shape: "curved",
              placeholder: "Password",
              onInput: ($event) => checkStrength()
            }, {
              action: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<button class="leading-0 text-muted-400 peer-focus-within:text-primary-500 absolute right-0 top-0 flex h-10 w-10 items-center justify-center text-center text-xl"${_scopeId2}><div class="relative flex h-full w-full items-center justify-center"${ssrRenderAttr("data-nui-tooltip", `${unref(showPasswordField) ? "Show" : "Hide"} password`)}${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: unref(showPasswordField) ? "mdi:eye-outline" : "mdi:eye-off-outline",
                    class: "h-5 w-5"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></button>`);
                } else {
                  return [
                    createVNode("button", {
                      class: "leading-0 text-muted-400 peer-focus-within:text-primary-500 absolute right-0 top-0 flex h-10 w-10 items-center justify-center text-center text-xl",
                      onClick: withModifiers(($event) => showPasswordField.value = !unref(showPasswordField), ["prevent"])
                    }, [
                      createVNode("div", {
                        class: "relative flex h-full w-full items-center justify-center",
                        "data-nui-tooltip": `${unref(showPasswordField) ? "Show" : "Hide"} password`
                      }, [
                        createVNode(_component_Icon, {
                          name: unref(showPasswordField) ? "mdi:eye-outline" : "mdi:eye-off-outline",
                          class: "h-5 w-5"
                        }, null, 8, ["name"])
                      ], 8, ["data-nui-tooltip"])
                    ], 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_TairoPasswordStrength, { value: unref(password) }, null, _parent2, _scopeId));
            _push2(`<hr class="border-muted-200 dark:border-muted-700 my-5 h-px border bg-transparent"${_scopeId}><div class="mb-2"${_scopeId}><label class="text-muted-500 dark:text-muted-400 mb-2 block text-xs font-semibold"${_scopeId}>Password length</label>`);
            _push2(ssrRenderComponent(_component_BaseInput, {
              type: "number",
              modelValue: unref(charsLength),
              "onUpdate:modelValue": ($event) => isRef(charsLength) ? charsLength.value = $event : null,
              placeholder: "Length",
              shape: "curved",
              min: "1",
              max: "30",
              step: "1",
              onInput: ($event) => generatePassword()
            }, null, _parent2, _scopeId));
            _push2(`<div class="w-full py-5"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(m), {
              modelValue: unref(charsLength),
              "onUpdate:modelValue": ($event) => isRef(charsLength) ? charsLength.value = $event : null,
              class: "rounded-tooltip",
              min: 1,
              onChange: ($event) => generatePassword(),
              max: 30,
              step: 1
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div${_scopeId}><label class="text-muted-500 dark:text-muted-400 mb-4 block text-xs font-semibold"${_scopeId}>Character types</label><div class="grid gap-6 pb-4 sm:grid-cols-2"${_scopeId}><div class="flex items-center gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseCheckboxAnimated, {
              modelValue: unref(charsLower),
              "onUpdate:modelValue": ($event) => isRef(charsLower) ? charsLower.value = $event : null,
              color: "success",
              onInput: ($event) => generatePassword()
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              class: "text-muted-500 dark:text",
              size: "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Lowercase`);
                } else {
                  return [
                    createTextVNode("Lowercase")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseCheckboxAnimated, {
              modelValue: unref(charsUpper),
              "onUpdate:modelValue": ($event) => isRef(charsUpper) ? charsUpper.value = $event : null,
              color: "success",
              onInput: ($event) => generatePassword()
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              class: "text-muted-500 dark:text",
              size: "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Uppercase`);
                } else {
                  return [
                    createTextVNode("Uppercase")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseCheckboxAnimated, {
              modelValue: unref(charsNumeric),
              "onUpdate:modelValue": ($event) => isRef(charsNumeric) ? charsNumeric.value = $event : null,
              color: "success",
              onInput: ($event) => generatePassword()
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              class: "text-muted-500 dark:text",
              size: "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Numbers`);
                } else {
                  return [
                    createTextVNode("Numbers")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseCheckboxAnimated, {
              modelValue: unref(charsSymbols),
              "onUpdate:modelValue": ($event) => isRef(charsSymbols) ? charsSymbols.value = $event : null,
              color: "success",
              onInput: ($event) => generatePassword()
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              class: "text-muted-500 dark:text",
              size: "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Symbols`);
                } else {
                  return [
                    createTextVNode("Symbols")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
            if (unref(isSupported)) {
              _push2(`<div class="mt-6 flex flex-col gap-2 sm:flex-row"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButton, {
                shape: "curved",
                class: "!h-12 w-full",
                onClick: handleClipboard
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:cards-duotone",
                      class: "h-5 w-5"
                    }, null, _parent3, _scopeId2));
                    _push3(`<span${_scopeId2}>Copy to Clipboard</span>`);
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "ph:cards-duotone",
                        class: "h-5 w-5"
                      }),
                      createVNode("span", null, "Copy to Clipboard")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseButton, {
                color: "primary",
                shape: "curved",
                class: "!h-12 w-full",
                onClick: ($event) => generatePassword()
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:arrows-clockwise",
                      class: "h-5 w-5"
                    }, null, _parent3, _scopeId2));
                    _push3(`<span${_scopeId2}>Generate New</span>`);
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "ph:arrows-clockwise",
                        class: "h-5 w-5"
                      }),
                      createVNode("span", null, "Generate New")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div class="mt-6 flex gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseText, {
                class: "text-muted-400",
                size: "sm"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Your browser does not support Clipboard API.`);
                  } else {
                    return [
                      createTextVNode("Your browser does not support Clipboard API.")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            }
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "mx-auto max-w-md" }, [
                createVNode("div", { class: "flex items-center gap-4" }, [
                  createVNode("div", { class: "bg-primary-500/20 text-primary-500 flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-sans text-2xl" }, [
                    createVNode(_component_Icon, {
                      name: "ph:lock-duotone",
                      class: "h-5 w-5"
                    })
                  ]),
                  createVNode("div", { class: "text-muted-700 block text-xl font-semibold" }, [
                    createVNode(_component_BaseHeading, {
                      as: "h3",
                      size: "lg",
                      weight: "medium",
                      class: "text-muted-800 dark:text-muted-100"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" New Password ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseText, {
                      size: "sm",
                      class: "text-muted-400"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Generate a random password.")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "divide-muted-200 dark:divide-muted-700 divide-y" }, [
                  createVNode("div", { class: "grid grid-cols-12 gap-4 py-5" }, [
                    createVNode("div", { class: "col-span-12" }, [
                      createVNode(_component_BaseParagraph, {
                        size: "sm",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Change the length value to generate a new random password. You can also change the character types. ")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode("div", { class: "text-muted-800 mx-auto w-full pt-5" }, [
                    createVNode("div", { class: "relative mb-2" }, [
                      createVNode("label", { class: "text-muted-500 dark:text-muted-400 mb-2 block text-xs font-semibold" }, "Password strength"),
                      createVNode(_component_BaseInput, {
                        modelValue: unref(password),
                        "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                        type: unref(showPasswordField) ? "password" : "text",
                        shape: "curved",
                        placeholder: "Password",
                        onInput: ($event) => checkStrength()
                      }, {
                        action: withCtx(() => [
                          createVNode("button", {
                            class: "leading-0 text-muted-400 peer-focus-within:text-primary-500 absolute right-0 top-0 flex h-10 w-10 items-center justify-center text-center text-xl",
                            onClick: withModifiers(($event) => showPasswordField.value = !unref(showPasswordField), ["prevent"])
                          }, [
                            createVNode("div", {
                              class: "relative flex h-full w-full items-center justify-center",
                              "data-nui-tooltip": `${unref(showPasswordField) ? "Show" : "Hide"} password`
                            }, [
                              createVNode(_component_Icon, {
                                name: unref(showPasswordField) ? "mdi:eye-outline" : "mdi:eye-off-outline",
                                class: "h-5 w-5"
                              }, null, 8, ["name"])
                            ], 8, ["data-nui-tooltip"])
                          ], 8, ["onClick"])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "type", "onInput"])
                    ]),
                    createVNode(_component_TairoPasswordStrength, { value: unref(password) }, null, 8, ["value"]),
                    createVNode("hr", { class: "border-muted-200 dark:border-muted-700 my-5 h-px border bg-transparent" }),
                    createVNode("div", { class: "mb-2" }, [
                      createVNode("label", { class: "text-muted-500 dark:text-muted-400 mb-2 block text-xs font-semibold" }, "Password length"),
                      createVNode(_component_BaseInput, {
                        type: "number",
                        modelValue: unref(charsLength),
                        "onUpdate:modelValue": ($event) => isRef(charsLength) ? charsLength.value = $event : null,
                        placeholder: "Length",
                        shape: "curved",
                        min: "1",
                        max: "30",
                        step: "1",
                        onInput: ($event) => generatePassword()
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput"]),
                      createVNode("div", { class: "w-full py-5" }, [
                        createVNode(unref(m), {
                          modelValue: unref(charsLength),
                          "onUpdate:modelValue": ($event) => isRef(charsLength) ? charsLength.value = $event : null,
                          class: "rounded-tooltip",
                          min: 1,
                          onChange: ($event) => generatePassword(),
                          max: 30,
                          step: 1
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("label", { class: "text-muted-500 dark:text-muted-400 mb-4 block text-xs font-semibold" }, "Character types"),
                      createVNode("div", { class: "grid gap-6 pb-4 sm:grid-cols-2" }, [
                        createVNode("div", { class: "flex items-center gap-3" }, [
                          createVNode(_component_BaseCheckboxAnimated, {
                            modelValue: unref(charsLower),
                            "onUpdate:modelValue": ($event) => isRef(charsLower) ? charsLower.value = $event : null,
                            color: "success",
                            onInput: ($event) => generatePassword()
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput"]),
                          createVNode(_component_BaseText, {
                            class: "text-muted-500 dark:text",
                            size: "sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Lowercase")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "flex items-center gap-3" }, [
                          createVNode(_component_BaseCheckboxAnimated, {
                            modelValue: unref(charsUpper),
                            "onUpdate:modelValue": ($event) => isRef(charsUpper) ? charsUpper.value = $event : null,
                            color: "success",
                            onInput: ($event) => generatePassword()
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput"]),
                          createVNode(_component_BaseText, {
                            class: "text-muted-500 dark:text",
                            size: "sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Uppercase")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "flex items-center gap-3" }, [
                          createVNode(_component_BaseCheckboxAnimated, {
                            modelValue: unref(charsNumeric),
                            "onUpdate:modelValue": ($event) => isRef(charsNumeric) ? charsNumeric.value = $event : null,
                            color: "success",
                            onInput: ($event) => generatePassword()
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput"]),
                          createVNode(_component_BaseText, {
                            class: "text-muted-500 dark:text",
                            size: "sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Numbers")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "flex items-center gap-3" }, [
                          createVNode(_component_BaseCheckboxAnimated, {
                            modelValue: unref(charsSymbols),
                            "onUpdate:modelValue": ($event) => isRef(charsSymbols) ? charsSymbols.value = $event : null,
                            color: "success",
                            onInput: ($event) => generatePassword()
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput"]),
                          createVNode(_component_BaseText, {
                            class: "text-muted-500 dark:text",
                            size: "sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Symbols")
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ]),
                    unref(isSupported) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mt-6 flex flex-col gap-2 sm:flex-row"
                    }, [
                      createVNode(_component_BaseButton, {
                        shape: "curved",
                        class: "!h-12 w-full",
                        onClick: handleClipboard
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "ph:cards-duotone",
                            class: "h-5 w-5"
                          }),
                          createVNode("span", null, "Copy to Clipboard")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseButton, {
                        color: "primary",
                        shape: "curved",
                        class: "!h-12 w-full",
                        onClick: ($event) => generatePassword()
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "ph:arrows-clockwise",
                            class: "h-5 w-5"
                          }),
                          createVNode("span", null, "Generate New")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "mt-6 flex gap-2"
                    }, [
                      createVNode(_component_BaseText, {
                        class: "text-muted-400",
                        size: "sm"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Your browser does not support Clipboard API.")
                        ]),
                        _: 1
                      })
                    ]))
                  ])
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/form-5.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=form-5-6e7727b4.mjs.map
