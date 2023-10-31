import { D as usePanels, f as __nuxt_component_2, e as __nuxt_component_0$5 } from '../server.mjs';
import { defineComponent, ref, computed, mergeProps, unref, isRef, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_2 } from './3-e6d3708e.mjs';
import { a as _imports_1, _ as _imports_2$1 } from './18-062a550f.mjs';
import { Combobox, ComboboxInput, TransitionRoot, ComboboxOptions, ComboboxOption } from '@headlessui/vue';
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
import '@vue/shared';
import 'chroma-js';
import 'tailwindcss/colors.js';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoPanelSearch",
  __ssrInlineRender: true,
  setup(__props) {
    usePanels();
    const people = [
      {
        id: 1,
        name: "Clarissa Perez",
        role: "Sales Manager",
        avatar: "/img/avatars/19.svg"
      },
      {
        id: 2,
        name: "Aaaron Splatter",
        role: "Project Manager",
        avatar: "/img/avatars/16.svg"
      },
      {
        id: 3,
        name: "Mike Miller",
        role: "UI/UX Designer",
        avatar: "/img/avatars/3.svg"
      },
      {
        id: 4,
        name: "Benedict Kessler",
        role: "Mobile Developer",
        avatar: "/img/avatars/22.svg"
      },
      {
        id: 5,
        name: "Maya Rosselini",
        role: "Product Manager",
        avatar: "/img/avatars/2.svg"
      }
    ];
    const selectedPerson = ref("");
    const query = ref("");
    const filteredPeople = computed(
      () => query.value === "" ? people : people.filter((person) => {
        return person.name.toLowerCase().includes(query.value.toLowerCase());
      })
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      const _component_NuxtLink = __nuxt_component_0$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-muted-200 dark:border-muted-700 dark:bg-muted-800 border bg-white" }, _attrs))}><div class="flex h-16 w-full items-center justify-between px-10"><h2 class="font-heading text-muted-700 text-lg font-semibold dark:text-white"> Search </h2><button type="button" class="text-muted-400 hover:bg-muted-100 hover:text-muted-600 dark:hover:bg-muted-700 flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 dark:hover:text-white">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "feather:chevron-left",
        class: "h-6 w-6"
      }, null, _parent));
      _push(`</button></div><div class="relative h-[calc(100%_-_64px)] w-full px-10">`);
      _push(ssrRenderComponent(unref(Combobox), {
        modelValue: unref(selectedPerson),
        "onUpdate:modelValue": ($event) => isRef(selectedPerson) ? selectedPerson.value = $event : null,
        class: "relative z-10 mt-5",
        as: "div"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="group relative"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ComboboxInput), {
              class: "border-muted-300 text-muted-600 focus:border-primary-500 focus:shadow-muted-300/50 dark:border-muted-700 dark:bg-muted-800 dark:text-muted-200 dark:placeholder:text-muted-600 dark:focus:border-muted-600 dark:focus:shadow-muted-800/50 h-12 w-full rounded-lg border bg-white py-3 pe-4 ps-10 font-sans text-sm leading-5 !outline-none transition duration-300 focus:shadow-lg",
              "display-value": (person) => person.name,
              placeholder: "Search...",
              onChange: ($event) => query.value = $event.target.value
            }, null, _parent2, _scopeId));
            _push2(`<div class="text-muted-400 group-focus-within:text-primary-500 absolute start-0 top-0 flex h-12 w-12 items-center justify-center transition-colors duration-300"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "feather:search",
              class: "h-5 w-5"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(unref(TransitionRoot), {
              leave: "transition ease-in duration-100",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0",
              onAfterLeave: ($event) => query.value = ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ComboboxOptions), {
                    as: "div",
                    class: "nui-slimscroll divide-muted-100 border-muted-200 dark:divide-muted-700 dark:border-muted-700 dark:bg-muted-800 absolute mt-1 max-h-60 w-full divide-y overflow-auto rounded-lg border bg-white py-1 text-base shadow-lg outline-none sm:text-sm"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(filteredPeople).length === 0 && unref(query) !== "") {
                          _push4(`<div class="text-muted-700 relative cursor-default select-none px-4 py-2"${_scopeId3}> Nothing found. </div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(filteredPeople), (person) => {
                          _push4(ssrRenderComponent(unref(ComboboxOption), {
                            key: person.id,
                            class: "p-2",
                            as: "div",
                            value: person
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="hover:bg-muted-100 dark:hover:bg-muted-700 flex cursor-pointer items-center rounded-lg p-2 transition-colors duration-300"${_scopeId4}><div class="relative inline-flex h-9 w-9 items-center justify-center rounded-full"${_scopeId4}><img${ssrRenderAttr("src", person.avatar)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""${_scopeId4}></div><div class="ms-3"${_scopeId4}><h6 class="font-heading text-muted-800 text-sm font-semibold dark:text-white"${_scopeId4}>${ssrInterpolate(person.name)}</h6><p class="text-muted-400 font-sans text-xs"${_scopeId4}>${ssrInterpolate(person.role)}</p></div></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "hover:bg-muted-100 dark:hover:bg-muted-700 flex cursor-pointer items-center rounded-lg p-2 transition-colors duration-300" }, [
                                    createVNode("div", { class: "relative inline-flex h-9 w-9 items-center justify-center rounded-full" }, [
                                      createVNode("img", {
                                        src: person.avatar,
                                        class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                                        alt: ""
                                      }, null, 8, ["src"])
                                    ]),
                                    createVNode("div", { class: "ms-3" }, [
                                      createVNode("h6", { class: "font-heading text-muted-800 text-sm font-semibold dark:text-white" }, toDisplayString(person.name), 1),
                                      createVNode("p", { class: "text-muted-400 font-sans text-xs" }, toDisplayString(person.role), 1)
                                    ])
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          unref(filteredPeople).length === 0 && unref(query) !== "" ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-muted-700 relative cursor-default select-none px-4 py-2"
                          }, " Nothing found. ")) : createCommentVNode("", true),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredPeople), (person) => {
                            return openBlock(), createBlock(unref(ComboboxOption), {
                              key: person.id,
                              class: "p-2",
                              as: "div",
                              value: person
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "hover:bg-muted-100 dark:hover:bg-muted-700 flex cursor-pointer items-center rounded-lg p-2 transition-colors duration-300" }, [
                                  createVNode("div", { class: "relative inline-flex h-9 w-9 items-center justify-center rounded-full" }, [
                                    createVNode("img", {
                                      src: person.avatar,
                                      class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                                      alt: ""
                                    }, null, 8, ["src"])
                                  ]),
                                  createVNode("div", { class: "ms-3" }, [
                                    createVNode("h6", { class: "font-heading text-muted-800 text-sm font-semibold dark:text-white" }, toDisplayString(person.name), 1),
                                    createVNode("p", { class: "text-muted-400 font-sans text-xs" }, toDisplayString(person.role), 1)
                                  ])
                                ])
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ComboboxOptions), {
                      as: "div",
                      class: "nui-slimscroll divide-muted-100 border-muted-200 dark:divide-muted-700 dark:border-muted-700 dark:bg-muted-800 absolute mt-1 max-h-60 w-full divide-y overflow-auto rounded-lg border bg-white py-1 text-base shadow-lg outline-none sm:text-sm"
                    }, {
                      default: withCtx(() => [
                        unref(filteredPeople).length === 0 && unref(query) !== "" ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-muted-700 relative cursor-default select-none px-4 py-2"
                        }, " Nothing found. ")) : createCommentVNode("", true),
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredPeople), (person) => {
                          return openBlock(), createBlock(unref(ComboboxOption), {
                            key: person.id,
                            class: "p-2",
                            as: "div",
                            value: person
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "hover:bg-muted-100 dark:hover:bg-muted-700 flex cursor-pointer items-center rounded-lg p-2 transition-colors duration-300" }, [
                                createVNode("div", { class: "relative inline-flex h-9 w-9 items-center justify-center rounded-full" }, [
                                  createVNode("img", {
                                    src: person.avatar,
                                    class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                                    alt: ""
                                  }, null, 8, ["src"])
                                ]),
                                createVNode("div", { class: "ms-3" }, [
                                  createVNode("h6", { class: "font-heading text-muted-800 text-sm font-semibold dark:text-white" }, toDisplayString(person.name), 1),
                                  createVNode("p", { class: "text-muted-400 font-sans text-xs" }, toDisplayString(person.role), 1)
                                ])
                              ])
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "group relative" }, [
                createVNode(unref(ComboboxInput), {
                  class: "border-muted-300 text-muted-600 focus:border-primary-500 focus:shadow-muted-300/50 dark:border-muted-700 dark:bg-muted-800 dark:text-muted-200 dark:placeholder:text-muted-600 dark:focus:border-muted-600 dark:focus:shadow-muted-800/50 h-12 w-full rounded-lg border bg-white py-3 pe-4 ps-10 font-sans text-sm leading-5 !outline-none transition duration-300 focus:shadow-lg",
                  "display-value": (person) => person.name,
                  placeholder: "Search...",
                  onChange: ($event) => query.value = $event.target.value
                }, null, 8, ["display-value", "onChange"]),
                createVNode("div", { class: "text-muted-400 group-focus-within:text-primary-500 absolute start-0 top-0 flex h-12 w-12 items-center justify-center transition-colors duration-300" }, [
                  createVNode(_component_Icon, {
                    name: "feather:search",
                    class: "h-5 w-5"
                  })
                ])
              ]),
              createVNode(unref(TransitionRoot), {
                leave: "transition ease-in duration-100",
                "leave-from": "opacity-100",
                "leave-to": "opacity-0",
                onAfterLeave: ($event) => query.value = ""
              }, {
                default: withCtx(() => [
                  createVNode(unref(ComboboxOptions), {
                    as: "div",
                    class: "nui-slimscroll divide-muted-100 border-muted-200 dark:divide-muted-700 dark:border-muted-700 dark:bg-muted-800 absolute mt-1 max-h-60 w-full divide-y overflow-auto rounded-lg border bg-white py-1 text-base shadow-lg outline-none sm:text-sm"
                  }, {
                    default: withCtx(() => [
                      unref(filteredPeople).length === 0 && unref(query) !== "" ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-muted-700 relative cursor-default select-none px-4 py-2"
                      }, " Nothing found. ")) : createCommentVNode("", true),
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredPeople), (person) => {
                        return openBlock(), createBlock(unref(ComboboxOption), {
                          key: person.id,
                          class: "p-2",
                          as: "div",
                          value: person
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "hover:bg-muted-100 dark:hover:bg-muted-700 flex cursor-pointer items-center rounded-lg p-2 transition-colors duration-300" }, [
                              createVNode("div", { class: "relative inline-flex h-9 w-9 items-center justify-center rounded-full" }, [
                                createVNode("img", {
                                  src: person.avatar,
                                  class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                                  alt: ""
                                }, null, 8, ["src"])
                              ]),
                              createVNode("div", { class: "ms-3" }, [
                                createVNode("h6", { class: "font-heading text-muted-800 text-sm font-semibold dark:text-white" }, toDisplayString(person.name), 1),
                                createVNode("p", { class: "text-muted-400 font-sans text-xs" }, toDisplayString(person.role), 1)
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["onAfterLeave"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="py-6"><h4 class="font-alt text-muted-400 mb-4 text-sm font-semibold uppercase"> People </h4><ul class="space-y-4"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative inline-flex h-9 w-9 items-center justify-center rounded-full"${_scopeId}><img${ssrRenderAttr("src", _imports_2)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""${_scopeId}></div><div class="ms-3"${_scopeId}><h6 class="font-heading text-muted-800 text-sm font-semibold dark:text-white"${_scopeId}> Mike Miller </h6><p class="text-muted-400 font-sans text-xs"${_scopeId}> Frontend Developer </p></div>`);
          } else {
            return [
              createVNode("div", { class: "relative inline-flex h-9 w-9 items-center justify-center rounded-full" }, [
                createVNode("img", {
                  src: _imports_2,
                  class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                  alt: ""
                })
              ]),
              createVNode("div", { class: "ms-3" }, [
                createVNode("h6", { class: "font-heading text-muted-800 text-sm font-semibold dark:text-white" }, " Mike Miller "),
                createVNode("p", { class: "text-muted-400 font-sans text-xs" }, " Frontend Developer ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative inline-flex h-9 w-9 items-center justify-center rounded-full"${_scopeId}><img${ssrRenderAttr("src", _imports_1)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""${_scopeId}></div><div class="ms-3"${_scopeId}><h6 class="font-heading text-muted-800 text-sm font-semibold dark:text-white"${_scopeId}> John Sabierski </h6><p class="text-muted-400 font-sans text-xs"${_scopeId}> Backend Developer </p></div>`);
          } else {
            return [
              createVNode("div", { class: "relative inline-flex h-9 w-9 items-center justify-center rounded-full" }, [
                createVNode("img", {
                  src: _imports_1,
                  class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                  alt: ""
                })
              ]),
              createVNode("div", { class: "ms-3" }, [
                createVNode("h6", { class: "font-heading text-muted-800 text-sm font-semibold dark:text-white" }, " John Sabierski "),
                createVNode("p", { class: "text-muted-400 font-sans text-xs" }, " Backend Developer ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative inline-flex h-9 w-9 items-center justify-center rounded-full"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""${_scopeId}></div><div class="ms-3"${_scopeId}><h6 class="font-heading text-muted-800 text-sm font-semibold dark:text-white"${_scopeId}> Ronald Cardine </h6><p class="text-muted-400 font-sans text-xs"${_scopeId}> Frontend Developer </p></div>`);
          } else {
            return [
              createVNode("div", { class: "relative inline-flex h-9 w-9 items-center justify-center rounded-full" }, [
                createVNode("img", {
                  src: _imports_2$1,
                  class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                  alt: ""
                })
              ]),
              createVNode("div", { class: "ms-3" }, [
                createVNode("h6", { class: "font-heading text-muted-800 text-sm font-semibold dark:text-white" }, " Ronald Cardine "),
                createVNode("p", { class: "text-muted-400 font-sans text-xs" }, " Frontend Developer ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div class="py-6"><h4 class="font-alt text-muted-400 mb-4 text-sm font-semibold uppercase"> Recent </h4><ul class="space-y-4"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="dark:text-muted-50 relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "feather:chrome",
              class: ""
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="ms-3"${_scopeId}><h6 class="font-heading text-muted-800 text-sm font-semibold dark:text-white"${_scopeId}> Browser Support </h6><p class="text-muted-400 font-sans text-xs"${_scopeId}>Blog article</p></div>`);
          } else {
            return [
              createVNode("div", { class: "dark:text-muted-50 relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500" }, [
                createVNode(_component_Icon, {
                  name: "feather:chrome",
                  class: ""
                })
              ]),
              createVNode("div", { class: "ms-3" }, [
                createVNode("h6", { class: "font-heading text-muted-800 text-sm font-semibold dark:text-white" }, " Browser Support "),
                createVNode("p", { class: "text-muted-400 font-sans text-xs" }, "Blog article")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-warning-100 text-warning-600 dark:bg-warning-500 dark:text-muted-50 relative inline-flex h-10 w-10 items-center justify-center rounded-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "feather:tv",
              class: ""
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="ms-3"${_scopeId}><h6 class="font-heading text-muted-800 text-sm font-semibold dark:text-white"${_scopeId}> Twitch new API </h6><p class="text-muted-400 font-sans text-xs"${_scopeId}>Blog article</p></div>`);
          } else {
            return [
              createVNode("div", { class: "bg-warning-100 text-warning-600 dark:bg-warning-500 dark:text-muted-50 relative inline-flex h-10 w-10 items-center justify-center rounded-full" }, [
                createVNode(_component_Icon, {
                  name: "feather:tv",
                  class: ""
                })
              ]),
              createVNode("div", { class: "ms-3" }, [
                createVNode("h6", { class: "font-heading text-muted-800 text-sm font-semibold dark:text-white" }, " Twitch new API "),
                createVNode("p", { class: "text-muted-400 font-sans text-xs" }, "Blog article")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-primary-100 text-primary-600 dark:bg-primary-500 dark:text-muted-50 relative inline-flex h-10 w-10 items-center justify-center rounded-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "feather:twitter",
              class: ""
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="ms-3"${_scopeId}><h6 class="font-heading text-muted-800 text-sm font-semibold dark:text-white"${_scopeId}> Social integrations </h6><p class="text-muted-400 font-sans text-xs"${_scopeId}>Blog article</p></div>`);
          } else {
            return [
              createVNode("div", { class: "bg-primary-100 text-primary-600 dark:bg-primary-500 dark:text-muted-50 relative inline-flex h-10 w-10 items-center justify-center rounded-full" }, [
                createVNode(_component_Icon, {
                  name: "feather:twitter",
                  class: ""
                })
              ]),
              createVNode("div", { class: "ms-3" }, [
                createVNode("h6", { class: "font-heading text-muted-800 text-sm font-semibold dark:text-white" }, " Social integrations "),
                createVNode("p", { class: "text-muted-400 font-sans text-xs" }, "Blog article")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/DemoPanelSearch.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=DemoPanelSearch-417c9303.mjs.map
