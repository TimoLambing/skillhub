import { g as _sfc_main$z, i as _sfc_main$D, Q as _sfc_main$3, j as _sfc_main$C, _ as _sfc_main$p, s as _sfc_main$E, f as __nuxt_component_2 } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseCheckbox-45d3fdba.mjs';
import { _ as _sfc_main$2 } from './BaseTag-734af285.mjs';
import { _ as _sfc_main$4 } from './BaseButtonIcon-6150946c.mjs';
import { defineComponent, withAsyncContext, ref, reactive, computed, mergeProps, unref, isRef, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-45c1546c.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1 } from './placeholder-search-4-dark-8ea6a3c1.mjs';
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
import './IconCheck-b31ac5c7.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "search-results",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/search", "$bK0uU6p3Xy")), __temp = await __temp, __restore(), __temp);
    const searchTerms = ref("internal projects");
    const results = ref();
    const filters = reactive({
      publication: {
        new: false,
        updated: false,
        upvoted: false
      },
      topics: {
        engineering: false,
        software: false,
        business: false,
        management: false,
        hr: false
      },
      type: {
        members: false,
        projects: false,
        files: false
      }
    });
    if (data.value) {
      results.value = data.value;
    }
    const activeFilter = ref("all");
    const filteredResults = computed(() => {
      if (activeFilter.value === "all") {
        return results.value;
      }
      return results.value.filter(
        (result) => result.type === activeFilter.value
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseInput = _sfc_main$z;
      const _component_BaseText = _sfc_main$D;
      const _component_BasePlaceholderPage = _sfc_main$3;
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseCheckbox = _sfc_main$1;
      const _component_BaseTag = _sfc_main$2;
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BaseButtonIcon = _sfc_main$4;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto w-full max-w-5xl" }, _attrs))}><div class="mx-auto mt-6 flex w-full max-w-sm items-center justify-center">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: unref(searchTerms),
        "onUpdate:modelValue": ($event) => isRef(searchTerms) ? searchTerms.value = $event : null,
        icon: "lucide:search",
        placeholder: "Search...",
        shape: "full",
        classes: {
          wrapper: "w-full",
          input: "h-12 !ps-12",
          icon: "h-12 w-12 [& > svg]:!w-7 [& > svg]:!h-7"
        }
      }, null, _parent));
      _push(`</div><div class="mb-12 mt-2 text-center">`);
      _push(ssrRenderComponent(_component_BaseText, {
        size: "sm",
        class: "text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`78 results for &quot;internal projects&quot;`);
          } else {
            return [
              createTextVNode('78 results for "internal projects"')
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(results) === null) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_BasePlaceholderPage, {
          title: "No matching results",
          subtitle: "Looks like we couldn't find any matching results for your search terms. Try other search terms."
        }, {
          image: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class="block dark:hidden"${ssrRenderAttr("src", _imports_0)} alt="Placeholder image"${_scopeId}><img class="hidden dark:block"${ssrRenderAttr("src", _imports_1)} alt="Placeholder image"${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  class: "block dark:hidden",
                  src: _imports_0,
                  alt: "Placeholder image"
                }),
                createVNode("img", {
                  class: "hidden dark:block",
                  src: _imports_1,
                  alt: "Placeholder image"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="grid grid-cols-12 gap-6"><div class="col-span-12 sm:col-span-4"><div class="flex flex-col gap-6">`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h3",
                weight: "medium",
                size: "md",
                class: "mb-4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Publication `);
                  } else {
                    return [
                      createTextVNode(" Publication ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<ul class="space-y-4"${_scopeId}><li class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseCheckbox, {
                modelValue: unref(filters).publication.new,
                "onUpdate:modelValue": ($event) => unref(filters).publication.new = $event,
                color: "primary",
                shape: "full",
                label: "Newly added",
                classes: {
                  label: "text-xs"
                }
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseTag, {
                shape: "full",
                size: "sm"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`24`);
                  } else {
                    return [
                      createTextVNode("24")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li><li class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseCheckbox, {
                modelValue: unref(filters).publication.updated,
                "onUpdate:modelValue": ($event) => unref(filters).publication.updated = $event,
                color: "primary",
                shape: "full",
                label: "Recently updated",
                classes: {
                  label: "text-xs"
                }
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseTag, {
                shape: "full",
                size: "sm"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`39`);
                  } else {
                    return [
                      createTextVNode("39")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li><li class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseCheckbox, {
                modelValue: unref(filters).publication.upvoted,
                "onUpdate:modelValue": ($event) => unref(filters).publication.upvoted = $event,
                color: "primary",
                shape: "full",
                label: "Upvoted",
                classes: {
                  label: "text-xs"
                }
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseTag, {
                shape: "full",
                size: "sm"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`17`);
                  } else {
                    return [
                      createTextVNode("17")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li></ul>`);
            } else {
              return [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  weight: "medium",
                  size: "md",
                  class: "mb-4"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Publication ")
                  ]),
                  _: 1
                }),
                createVNode("ul", { class: "space-y-4" }, [
                  createVNode("li", { class: "flex items-center justify-between" }, [
                    createVNode(_component_BaseCheckbox, {
                      modelValue: unref(filters).publication.new,
                      "onUpdate:modelValue": ($event) => unref(filters).publication.new = $event,
                      color: "primary",
                      shape: "full",
                      label: "Newly added",
                      classes: {
                        label: "text-xs"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_BaseTag, {
                      shape: "full",
                      size: "sm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("24")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("li", { class: "flex items-center justify-between" }, [
                    createVNode(_component_BaseCheckbox, {
                      modelValue: unref(filters).publication.updated,
                      "onUpdate:modelValue": ($event) => unref(filters).publication.updated = $event,
                      color: "primary",
                      shape: "full",
                      label: "Recently updated",
                      classes: {
                        label: "text-xs"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_BaseTag, {
                      shape: "full",
                      size: "sm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("39")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("li", { class: "flex items-center justify-between" }, [
                    createVNode(_component_BaseCheckbox, {
                      modelValue: unref(filters).publication.upvoted,
                      "onUpdate:modelValue": ($event) => unref(filters).publication.upvoted = $event,
                      color: "primary",
                      shape: "full",
                      label: "Upvoted",
                      classes: {
                        label: "text-xs"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_BaseTag, {
                      shape: "full",
                      size: "sm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("17")
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
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h3",
                weight: "medium",
                size: "md",
                class: "mb-4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Topics `);
                  } else {
                    return [
                      createTextVNode(" Topics ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<ul class="space-y-4"${_scopeId}><li class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseCheckbox, {
                modelValue: unref(filters).topics.engineering,
                "onUpdate:modelValue": ($event) => unref(filters).topics.engineering = $event,
                color: "primary",
                shape: "full",
                label: "Engineering",
                classes: {
                  label: "text-xs"
                }
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseTag, {
                shape: "full",
                size: "sm"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`62`);
                  } else {
                    return [
                      createTextVNode("62")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li><li class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseCheckbox, {
                modelValue: unref(filters).topics.software,
                "onUpdate:modelValue": ($event) => unref(filters).topics.software = $event,
                color: "primary",
                shape: "full",
                label: "Software",
                classes: {
                  label: "text-xs"
                }
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseTag, {
                shape: "full",
                size: "sm"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`148`);
                  } else {
                    return [
                      createTextVNode("148")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li><li class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseCheckbox, {
                modelValue: unref(filters).topics.business,
                "onUpdate:modelValue": ($event) => unref(filters).topics.business = $event,
                color: "primary",
                shape: "full",
                label: "Business",
                classes: {
                  label: "text-xs"
                }
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseTag, {
                shape: "full",
                size: "sm"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`23`);
                  } else {
                    return [
                      createTextVNode("23")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li><li class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseCheckbox, {
                modelValue: unref(filters).topics.management,
                "onUpdate:modelValue": ($event) => unref(filters).topics.management = $event,
                color: "primary",
                shape: "full",
                label: "Management",
                classes: {
                  label: "text-xs"
                }
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseTag, {
                shape: "full",
                size: "sm"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`8`);
                  } else {
                    return [
                      createTextVNode("8")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li><li class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseCheckbox, {
                modelValue: unref(filters).topics.hr,
                "onUpdate:modelValue": ($event) => unref(filters).topics.hr = $event,
                color: "primary",
                shape: "full",
                label: "Human Resources",
                classes: {
                  label: "text-xs"
                }
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseTag, {
                shape: "full",
                size: "sm"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`43`);
                  } else {
                    return [
                      createTextVNode("43")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li></ul>`);
            } else {
              return [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  weight: "medium",
                  size: "md",
                  class: "mb-4"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Topics ")
                  ]),
                  _: 1
                }),
                createVNode("ul", { class: "space-y-4" }, [
                  createVNode("li", { class: "flex items-center justify-between" }, [
                    createVNode(_component_BaseCheckbox, {
                      modelValue: unref(filters).topics.engineering,
                      "onUpdate:modelValue": ($event) => unref(filters).topics.engineering = $event,
                      color: "primary",
                      shape: "full",
                      label: "Engineering",
                      classes: {
                        label: "text-xs"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_BaseTag, {
                      shape: "full",
                      size: "sm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("62")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("li", { class: "flex items-center justify-between" }, [
                    createVNode(_component_BaseCheckbox, {
                      modelValue: unref(filters).topics.software,
                      "onUpdate:modelValue": ($event) => unref(filters).topics.software = $event,
                      color: "primary",
                      shape: "full",
                      label: "Software",
                      classes: {
                        label: "text-xs"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_BaseTag, {
                      shape: "full",
                      size: "sm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("148")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("li", { class: "flex items-center justify-between" }, [
                    createVNode(_component_BaseCheckbox, {
                      modelValue: unref(filters).topics.business,
                      "onUpdate:modelValue": ($event) => unref(filters).topics.business = $event,
                      color: "primary",
                      shape: "full",
                      label: "Business",
                      classes: {
                        label: "text-xs"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_BaseTag, {
                      shape: "full",
                      size: "sm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("23")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("li", { class: "flex items-center justify-between" }, [
                    createVNode(_component_BaseCheckbox, {
                      modelValue: unref(filters).topics.management,
                      "onUpdate:modelValue": ($event) => unref(filters).topics.management = $event,
                      color: "primary",
                      shape: "full",
                      label: "Management",
                      classes: {
                        label: "text-xs"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_BaseTag, {
                      shape: "full",
                      size: "sm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("8")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("li", { class: "flex items-center justify-between" }, [
                    createVNode(_component_BaseCheckbox, {
                      modelValue: unref(filters).topics.hr,
                      "onUpdate:modelValue": ($event) => unref(filters).topics.hr = $event,
                      color: "primary",
                      shape: "full",
                      label: "Human Resources",
                      classes: {
                        label: "text-xs"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_BaseTag, {
                      shape: "full",
                      size: "sm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("43")
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
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h3",
                weight: "medium",
                size: "md",
                class: "mb-4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Result type `);
                  } else {
                    return [
                      createTextVNode(" Result type ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<ul class="space-y-4"${_scopeId}><li class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseCheckbox, {
                modelValue: unref(filters).type.members,
                "onUpdate:modelValue": ($event) => unref(filters).type.members = $event,
                color: "primary",
                shape: "full",
                label: "Members",
                classes: {
                  label: "text-xs"
                }
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseTag, {
                shape: "full",
                size: "sm"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`12`);
                  } else {
                    return [
                      createTextVNode("12")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li><li class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseCheckbox, {
                modelValue: unref(filters).type.projects,
                "onUpdate:modelValue": ($event) => unref(filters).type.projects = $event,
                color: "primary",
                shape: "full",
                label: "Projects",
                classes: {
                  label: "text-xs"
                }
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseTag, {
                shape: "full",
                size: "sm"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`54`);
                  } else {
                    return [
                      createTextVNode("54")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li><li class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseCheckbox, {
                modelValue: unref(filters).type.files,
                "onUpdate:modelValue": ($event) => unref(filters).type.files = $event,
                color: "primary",
                shape: "full",
                label: "Files",
                classes: {
                  label: "text-xs"
                }
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseTag, {
                shape: "full",
                size: "sm"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`31`);
                  } else {
                    return [
                      createTextVNode("31")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li></ul>`);
            } else {
              return [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  weight: "medium",
                  size: "md",
                  class: "mb-4"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Result type ")
                  ]),
                  _: 1
                }),
                createVNode("ul", { class: "space-y-4" }, [
                  createVNode("li", { class: "flex items-center justify-between" }, [
                    createVNode(_component_BaseCheckbox, {
                      modelValue: unref(filters).type.members,
                      "onUpdate:modelValue": ($event) => unref(filters).type.members = $event,
                      color: "primary",
                      shape: "full",
                      label: "Members",
                      classes: {
                        label: "text-xs"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_BaseTag, {
                      shape: "full",
                      size: "sm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("12")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("li", { class: "flex items-center justify-between" }, [
                    createVNode(_component_BaseCheckbox, {
                      modelValue: unref(filters).type.projects,
                      "onUpdate:modelValue": ($event) => unref(filters).type.projects = $event,
                      color: "primary",
                      shape: "full",
                      label: "Projects",
                      classes: {
                        label: "text-xs"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_BaseTag, {
                      shape: "full",
                      size: "sm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("54")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("li", { class: "flex items-center justify-between" }, [
                    createVNode(_component_BaseCheckbox, {
                      modelValue: unref(filters).type.files,
                      "onUpdate:modelValue": ($event) => unref(filters).type.files = $event,
                      color: "primary",
                      shape: "full",
                      label: "Files",
                      classes: {
                        label: "text-xs"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_BaseTag, {
                      shape: "full",
                      size: "sm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("31")
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
        _push(`</div></div><div class="col-span-12 sm:col-span-8"><div class="border-muted-200 dark:border-muted-800 flex items-center gap-4 border-b font-sans"><button type="button" class="${ssrRenderClass([
          unref(activeFilter) === "all" ? "text-muted-700 dark:text-muted-100 border-primary-500" : "border-transparent text-muted-400",
          "border-b-2 px-3 py-4 text-sm"
        ])}"> All </button><button type="button" class="${ssrRenderClass([
          unref(activeFilter) === "people" ? "text-muted-700 dark:text-muted-100 border-primary-500" : "border-transparent text-muted-400",
          "border-b-2 px-3 py-4 text-sm"
        ])}"> People </button><button type="button" class="${ssrRenderClass([
          unref(activeFilter) === "project" ? "text-muted-700 dark:text-muted-100 border-primary-500" : "border-transparent text-muted-400",
          "border-b-2 px-3 py-4 text-sm"
        ])}"> Projects </button><button type="button" class="${ssrRenderClass([
          unref(activeFilter) === "file" ? "text-muted-700 dark:text-muted-100 border-primary-500" : "border-transparent text-muted-400",
          "border-b-2 px-3 py-4 text-sm"
        ])}"> Files </button></div><div>`);
        if (unref(results).length === 0) {
          _push(`<div></div>`);
        } else {
          _push(`<div class="space-y-4 py-4"><!--[-->`);
          ssrRenderList(unref(filteredResults), (result) => {
            _push(ssrRenderComponent(_component_BaseCard, {
              key: result.name,
              class: "p-5"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div class="flex w-full items-center gap-4"${_scopeId}>`);
                  if (result.type === "people") {
                    _push2(ssrRenderComponent(_component_BaseAvatar, {
                      src: result.src
                    }, null, _parent2, _scopeId));
                  } else if (result.type === "project") {
                    _push2(`<img class="h-10 w-10 shrink-0 rounded-full object-cover object-center"${ssrRenderAttr("src", result.src)}${ssrRenderAttr("alt", result.name)}${_scopeId}>`);
                  } else if (result.type === "file") {
                    _push2(`<img class="h-10 w-10 shrink-0"${ssrRenderAttr("src", result.src)}${ssrRenderAttr("alt", result.name)}${_scopeId}>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`<div${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_BaseHeading, {
                    as: "h3",
                    weight: "medium",
                    size: "sm"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(result.name)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(result.name), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(ssrRenderComponent(_component_BaseText, {
                    size: "xs",
                    class: "text-muted-400"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(result.subtext)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(result.subtext), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</div><div class="ms-auto"${_scopeId}>`);
                  if (result.type === "people") {
                    _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                      to: result.url,
                      shape: "full",
                      size: "sm",
                      "data-nui-tooltip": "View profile"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(ssrRenderComponent(_component_Icon, { name: "lucide:arrow-right" }, null, _parent3, _scopeId2));
                        } else {
                          return [
                            createVNode(_component_Icon, { name: "lucide:arrow-right" })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  } else if (result.type === "project") {
                    _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                      to: result.url,
                      shape: "full",
                      size: "sm",
                      "data-nui-tooltip": "View project"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(ssrRenderComponent(_component_Icon, { name: "lucide:arrow-right" }, null, _parent3, _scopeId2));
                        } else {
                          return [
                            createVNode(_component_Icon, { name: "lucide:arrow-right" })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  } else if (result.type === "file") {
                    _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                      to: result.url,
                      shape: "full",
                      size: "sm",
                      "data-nui-tooltip": "Download file"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(ssrRenderComponent(_component_Icon, { name: "lucide:arrow-down" }, null, _parent3, _scopeId2));
                        } else {
                          return [
                            createVNode(_component_Icon, { name: "lucide:arrow-down" })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex w-full items-center gap-4" }, [
                      result.type === "people" ? (openBlock(), createBlock(_component_BaseAvatar, {
                        key: 0,
                        src: result.src
                      }, null, 8, ["src"])) : result.type === "project" ? (openBlock(), createBlock("img", {
                        key: 1,
                        class: "h-10 w-10 shrink-0 rounded-full object-cover object-center",
                        src: result.src,
                        alt: result.name
                      }, null, 8, ["src", "alt"])) : result.type === "file" ? (openBlock(), createBlock("img", {
                        key: 2,
                        class: "h-10 w-10 shrink-0",
                        src: result.src,
                        alt: result.name
                      }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                      createVNode("div", null, [
                        createVNode(_component_BaseHeading, {
                          as: "h3",
                          weight: "medium",
                          size: "sm"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(result.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_BaseText, {
                          size: "xs",
                          class: "text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(result.subtext), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      createVNode("div", { class: "ms-auto" }, [
                        result.type === "people" ? (openBlock(), createBlock(_component_BaseButtonIcon, {
                          key: 0,
                          to: result.url,
                          shape: "full",
                          size: "sm",
                          "data-nui-tooltip": "View profile"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_Icon, { name: "lucide:arrow-right" })
                          ]),
                          _: 2
                        }, 1032, ["to"])) : result.type === "project" ? (openBlock(), createBlock(_component_BaseButtonIcon, {
                          key: 1,
                          to: result.url,
                          shape: "full",
                          size: "sm",
                          "data-nui-tooltip": "View project"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_Icon, { name: "lucide:arrow-right" })
                          ]),
                          _: 2
                        }, 1032, ["to"])) : result.type === "file" ? (openBlock(), createBlock(_component_BaseButtonIcon, {
                          key: 2,
                          to: result.url,
                          shape: "full",
                          size: "sm",
                          "data-nui-tooltip": "Download file"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_Icon, { name: "lucide:arrow-down" })
                          ]),
                          _: 2
                        }, 1032, ["to"])) : createCommentVNode("", true)
                      ])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]--></div>`);
        }
        _push(`</div></div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/search-results.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=search-results-ea6fc691.mjs.map
