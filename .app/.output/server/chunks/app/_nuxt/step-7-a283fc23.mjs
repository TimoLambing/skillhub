import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as _sfc_main$1 } from './DemoWizardStepTitle-e1abeb8e.mjs';
import { H as useHead, s as _sfc_main$E, f as __nuxt_component_2, j as _sfc_main$C, _ as _sfc_main$p, b as _sfc_main$o, Q as _sfc_main$3$1, d as _sfc_main$x } from '../server.mjs';
import { _ as _sfc_main$2 } from './BaseButtonIcon-6150946c.mjs';
import { _ as _sfc_main$3 } from './BaseIconBox-642fe941.mjs';
import { defineComponent, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { u as useMultiStepForm } from './multi-step-form-008d1760.mjs';
import { u as useNinjaFilePreview } from './file-preview-7bd14b92.mjs';
import { isDate, format, parseISO } from 'date-fns';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import 'vue-bundle-renderer/runtime';
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
import 'devalue';
import '@unhead/ssr';
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

const DateFormats = {
  Short: "MMM do, yyyy",
  Long: "cccc, LLLL do, yyyy h:mm aa"
};
function formatDate(date, pattern = "Short") {
  if (!date)
    return "";
  if (isDate(date))
    return format(date, DateFormats[pattern]);
  return format(parseISO(date), DateFormats[pattern]);
}
const _imports_0 = "" + publicAssetsURL("img/illustrations/wizard/finish.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "step-7",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      data: project,
      complete,
      getStep
    } = useMultiStepForm();
    useHead({
      title: "Submit project"
    });
    const avatarPreview = useNinjaFilePreview(() => project.value.avatar);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DemoWizardStepTitle = _sfc_main$1;
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BaseButtonIcon = _sfc_main$2;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseIconBox = _sfc_main$3;
      const _component_BasePlaceholderPage = _sfc_main$3$1;
      const _component_BaseButton = _sfc_main$x;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (!unref(complete)) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_DemoWizardStepTitle, null, null, _parent));
        _push(`<div class="flex flex-col px-4"><div class="group relative mx-auto mb-2 flex w-16 items-center justify-center">`);
        if (unref(avatarPreview)) {
          _push(ssrRenderComponent(_component_BaseAvatar, {
            size: "lg",
            src: unref(avatarPreview),
            class: "dark:bg-muted-700/60 bg-white"
          }, null, _parent));
        } else {
          _push(ssrRenderComponent(_component_BaseAvatar, {
            size: "lg",
            text: "P",
            class: "bg-pink-500/10 text-pink-600"
          }, null, _parent));
        }
        _push(`<div class="absolute bottom-0 end-0 z-10">`);
        _push(ssrRenderComponent(_component_BaseButtonIcon, {
          small: "",
          shape: "full",
          class: "hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100",
          to: unref(getStep)(1).to
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:edit-2",
                class: "pointer-events-none h-3 w-3"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "lucide:edit-2",
                  class: "pointer-events-none h-3 w-3"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="mx-auto flex w-full max-w-xl flex-col gap-4"><h3 class="text-muted-800 dark:text-muted-100 text-center font-sans text-xl font-medium">${ssrInterpolate(unref(project).name === "" ? "Project title goes here" : unref(project).name)}</h3><div class="grid grid-cols-12 gap-4"><div class="col-span-12">`);
        _push(ssrRenderComponent(_component_BaseCard, {
          shape: "curved",
          class: "group relative p-6"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="absolute end-3 top-3 z-10"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                small: "",
                shape: "full",
                class: "hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100",
                to: unref(getStep)(1).to
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:edit-2",
                      class: "pointer-events-none h-3 w-3"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:edit-2",
                        class: "pointer-events-none h-3 w-3"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                size: "xs",
                class: "mb-4 uppercase"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-muted-500 dark:text-muted-400"${_scopeId2}> Project description </span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, " Project description ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div${_scopeId}>`);
              if (unref(project).description !== "") {
                _push2(ssrRenderComponent(_component_BaseParagraph, {
                  size: "sm",
                  class: "text-muted-500 dark:text-muted-400"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(unref(project).description)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(project).description), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<div${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseParagraph, {
                  size: "sm",
                  class: "text-muted-400"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` No description was provided for this project `);
                    } else {
                      return [
                        createTextVNode(" No description was provided for this project ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "absolute end-3 top-3 z-10" }, [
                  createVNode(_component_BaseButtonIcon, {
                    small: "",
                    shape: "full",
                    class: "hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100",
                    to: unref(getStep)(1).to
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:edit-2",
                        class: "pointer-events-none h-3 w-3"
                      })
                    ]),
                    _: 1
                  }, 8, ["to"])
                ]),
                createVNode(_component_BaseHeading, {
                  size: "xs",
                  class: "mb-4 uppercase"
                }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, " Project description ")
                  ]),
                  _: 1
                }),
                createVNode("div", null, [
                  unref(project).description !== "" ? (openBlock(), createBlock(_component_BaseParagraph, {
                    key: 0,
                    size: "sm",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(project).description), 1)
                    ]),
                    _: 1
                  })) : (openBlock(), createBlock("div", { key: 1 }, [
                    createVNode(_component_BaseParagraph, {
                      size: "sm",
                      class: "text-muted-400"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" No description was provided for this project ")
                      ]),
                      _: 1
                    })
                  ]))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="col-span-12 sm:col-span-6">`);
        _push(ssrRenderComponent(_component_BaseCard, {
          shape: "curved",
          class: "group relative p-6"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="absolute end-3 top-3 z-10"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                small: "",
                shape: "full",
                class: "hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100",
                to: unref(getStep)(0).to
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:edit-2",
                      class: "pointer-events-none h-3 w-3"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:edit-2",
                        class: "pointer-events-none h-3 w-3"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="flex w-full items-center gap-2"${_scopeId}>`);
              if (unref(project).type === void 0) {
                _push2(ssrRenderComponent(_component_BaseIconBox, {
                  size: "sm",
                  class: "bg-primary-500/10 text-primary-600"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "ph:briefcase-duotone",
                        class: "h-5 w-5"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_Icon, {
                          name: "ph:briefcase-duotone",
                          class: "h-5 w-5"
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else if (unref(project).type === "design") {
                _push2(ssrRenderComponent(_component_BaseIconBox, {
                  size: "sm",
                  class: "bg-orange-500/10 text-orange-600"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "ph:bounding-box-duotone",
                        class: "h-5 w-5"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_Icon, {
                          name: "ph:bounding-box-duotone",
                          class: "h-5 w-5"
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else if (unref(project).type === "development") {
                _push2(ssrRenderComponent(_component_BaseIconBox, {
                  size: "sm",
                  class: "bg-emerald-500/10 text-emerald-600"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "ph:bounding-box-duotone",
                        class: "h-5 w-5"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_Icon, {
                          name: "ph:bounding-box-duotone",
                          class: "h-5 w-5"
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else if (unref(project).type === "marketing") {
                _push2(ssrRenderComponent(_component_BaseIconBox, {
                  size: "sm",
                  class: "bg-yellow-500/10 text-yellow-500"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "ph:bounding-box-duotone",
                        class: "h-5 w-5"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_Icon, {
                          name: "ph:bounding-box-duotone",
                          class: "h-5 w-5"
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div${_scopeId}><div class="text-muted-400 text-xs"${_scopeId}><span${_scopeId}>Project type</span></div><div class="text-muted-800 dark:text-muted-100 text-sm font-medium capitalize"${_scopeId}><span${_scopeId}>${ssrInterpolate(unref(project).type === void 0 ? "No type selected" : unref(project).type)}</span></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "absolute end-3 top-3 z-10" }, [
                  createVNode(_component_BaseButtonIcon, {
                    small: "",
                    shape: "full",
                    class: "hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100",
                    to: unref(getStep)(0).to
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:edit-2",
                        class: "pointer-events-none h-3 w-3"
                      })
                    ]),
                    _: 1
                  }, 8, ["to"])
                ]),
                createVNode("div", { class: "flex w-full items-center gap-2" }, [
                  unref(project).type === void 0 ? (openBlock(), createBlock(_component_BaseIconBox, {
                    key: 0,
                    size: "sm",
                    class: "bg-primary-500/10 text-primary-600"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "ph:briefcase-duotone",
                        class: "h-5 w-5"
                      })
                    ]),
                    _: 1
                  })) : unref(project).type === "design" ? (openBlock(), createBlock(_component_BaseIconBox, {
                    key: 1,
                    size: "sm",
                    class: "bg-orange-500/10 text-orange-600"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "ph:bounding-box-duotone",
                        class: "h-5 w-5"
                      })
                    ]),
                    _: 1
                  })) : unref(project).type === "development" ? (openBlock(), createBlock(_component_BaseIconBox, {
                    key: 2,
                    size: "sm",
                    class: "bg-emerald-500/10 text-emerald-600"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "ph:bounding-box-duotone",
                        class: "h-5 w-5"
                      })
                    ]),
                    _: 1
                  })) : unref(project).type === "marketing" ? (openBlock(), createBlock(_component_BaseIconBox, {
                    key: 3,
                    size: "sm",
                    class: "bg-yellow-500/10 text-yellow-500"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "ph:bounding-box-duotone",
                        class: "h-5 w-5"
                      })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  createVNode("div", null, [
                    createVNode("div", { class: "text-muted-400 text-xs" }, [
                      createVNode("span", null, "Project type")
                    ]),
                    createVNode("div", { class: "text-muted-800 dark:text-muted-100 text-sm font-medium capitalize" }, [
                      createVNode("span", null, toDisplayString(unref(project).type === void 0 ? "No type selected" : unref(project).type), 1)
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="col-span-12 sm:col-span-6">`);
        _push(ssrRenderComponent(_component_BaseCard, {
          shape: "curved",
          class: "group relative p-6"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="absolute end-3 top-3 z-10"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                small: "",
                shape: "full",
                class: "hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100",
                to: unref(getStep)(2).to
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:edit-2",
                      class: "pointer-events-none h-3 w-3"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:edit-2",
                        class: "pointer-events-none h-3 w-3"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="flex w-full items-center gap-2"${_scopeId}>`);
              if (unref(project).customer?.logo === void 0) {
                _push2(ssrRenderComponent(_component_BaseAvatar, {
                  src: "/img/avatars/placeholder-file.png",
                  size: "sm"
                }, null, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_component_BaseAvatar, {
                  src: unref(project).customer?.logo,
                  size: "sm",
                  class: "bg-muted-100 dark:bg-muted-700"
                }, null, _parent2, _scopeId));
              }
              _push2(`<div${_scopeId}><div class="text-muted-400 text-xs"${_scopeId}><span${_scopeId}>Customer</span></div><div class="text-muted-800 dark:text-muted-100 text-sm font-medium"${_scopeId}><span${_scopeId}>${ssrInterpolate(unref(project).customer?.name === void 0 ? "No customer selected" : unref(project).customer?.name)}</span></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "absolute end-3 top-3 z-10" }, [
                  createVNode(_component_BaseButtonIcon, {
                    small: "",
                    shape: "full",
                    class: "hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100",
                    to: unref(getStep)(2).to
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:edit-2",
                        class: "pointer-events-none h-3 w-3"
                      })
                    ]),
                    _: 1
                  }, 8, ["to"])
                ]),
                createVNode("div", { class: "flex w-full items-center gap-2" }, [
                  unref(project).customer?.logo === void 0 ? (openBlock(), createBlock(_component_BaseAvatar, {
                    key: 0,
                    src: "/img/avatars/placeholder-file.png",
                    size: "sm"
                  })) : (openBlock(), createBlock(_component_BaseAvatar, {
                    key: 1,
                    src: unref(project).customer?.logo,
                    size: "sm",
                    class: "bg-muted-100 dark:bg-muted-700"
                  }, null, 8, ["src"])),
                  createVNode("div", null, [
                    createVNode("div", { class: "text-muted-400 text-xs" }, [
                      createVNode("span", null, "Customer")
                    ]),
                    createVNode("div", { class: "text-muted-800 dark:text-muted-100 text-sm font-medium" }, [
                      createVNode("span", null, toDisplayString(unref(project).customer?.name === void 0 ? "No customer selected" : unref(project).customer?.name), 1)
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="col-span-12 sm:col-span-4">`);
        _push(ssrRenderComponent(_component_BaseCard, {
          shape: "curved",
          class: "group relative p-6"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="absolute end-3 top-3 z-10"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                small: "",
                shape: "full",
                class: "hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100",
                to: unref(getStep)(2).to
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:edit-2",
                      class: "pointer-events-none h-3 w-3"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:edit-2",
                        class: "pointer-events-none h-3 w-3"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="flex flex-col items-center justify-center text-center"${_scopeId}><div${_scopeId}><span class="text-muted-800 dark:text-muted-100 mb-2 block font-sans text-2xl font-semibold"${_scopeId}>${ssrInterpolate(unref(project).budget)}</span>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                size: "xs",
                class: "mb-4 scale-90 uppercase"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-muted-500 dark:text-muted-400"${_scopeId2}> Estimate budget </span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, " Estimate budget ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "absolute end-3 top-3 z-10" }, [
                  createVNode(_component_BaseButtonIcon, {
                    small: "",
                    shape: "full",
                    class: "hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100",
                    to: unref(getStep)(2).to
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:edit-2",
                        class: "pointer-events-none h-3 w-3"
                      })
                    ]),
                    _: 1
                  }, 8, ["to"])
                ]),
                createVNode("div", { class: "flex flex-col items-center justify-center text-center" }, [
                  createVNode("div", null, [
                    createVNode("span", { class: "text-muted-800 dark:text-muted-100 mb-2 block font-sans text-2xl font-semibold" }, toDisplayString(unref(project).budget), 1),
                    createVNode(_component_BaseHeading, {
                      size: "xs",
                      class: "mb-4 scale-90 uppercase"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, " Estimate budget ")
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
        _push(`</div><div class="col-span-12 sm:col-span-4">`);
        _push(ssrRenderComponent(_component_BaseCard, {
          shape: "curved",
          class: "group relative h-full p-6"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="absolute end-3 top-3 z-10"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                small: "",
                shape: "full",
                class: "hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100",
                to: unref(getStep)(2).to
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:edit-2",
                      class: "pointer-events-none h-3 w-3"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:edit-2",
                        class: "pointer-events-none h-3 w-3"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="flex h-full flex-col items-center justify-center text-center"${_scopeId}><div${_scopeId}><span class="text-muted-800 dark:text-muted-100 mb-3 block font-sans text-sm font-medium"${_scopeId}>${ssrInterpolate(unref(project).endDate === void 0 ? "--" : ("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(unref(project).endDate))}</span>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                size: "xs",
                class: "mb-4 scale-90 uppercase"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-muted-500 dark:text-muted-400"${_scopeId2}> Due date </span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, " Due date ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "absolute end-3 top-3 z-10" }, [
                  createVNode(_component_BaseButtonIcon, {
                    small: "",
                    shape: "full",
                    class: "hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100",
                    to: unref(getStep)(2).to
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:edit-2",
                        class: "pointer-events-none h-3 w-3"
                      })
                    ]),
                    _: 1
                  }, 8, ["to"])
                ]),
                createVNode("div", { class: "flex h-full flex-col items-center justify-center text-center" }, [
                  createVNode("div", null, [
                    createVNode("span", { class: "text-muted-800 dark:text-muted-100 mb-3 block font-sans text-sm font-medium" }, toDisplayString(unref(project).endDate === void 0 ? "--" : ("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(unref(project).endDate)), 1),
                    createVNode(_component_BaseHeading, {
                      size: "xs",
                      class: "mb-4 scale-90 uppercase"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, " Due date ")
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
        _push(`</div><div class="col-span-12 sm:col-span-4">`);
        _push(ssrRenderComponent(_component_BaseCard, {
          shape: "curved",
          class: "group relative p-6"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="absolute end-3 top-3 z-10"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                small: "",
                shape: "full",
                class: "hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100",
                to: unref(getStep)(3).to
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:edit-2",
                      class: "pointer-events-none h-3 w-3"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:edit-2",
                        class: "pointer-events-none h-3 w-3"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="flex flex-col items-center justify-center text-center"${_scopeId}><div${_scopeId}><span class="text-muted-800 dark:text-muted-100 mb-2 block font-sans text-2xl font-semibold"${_scopeId}>${ssrInterpolate(unref(project).files?.length || 0)}</span>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                size: "xs",
                class: "mb-4 scale-90 uppercase"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-muted-500 dark:text-muted-400"${_scopeId2}> Attached files </span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, " Attached files ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "absolute end-3 top-3 z-10" }, [
                  createVNode(_component_BaseButtonIcon, {
                    small: "",
                    shape: "full",
                    class: "hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100",
                    to: unref(getStep)(3).to
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:edit-2",
                        class: "pointer-events-none h-3 w-3"
                      })
                    ]),
                    _: 1
                  }, 8, ["to"])
                ]),
                createVNode("div", { class: "flex flex-col items-center justify-center text-center" }, [
                  createVNode("div", null, [
                    createVNode("span", { class: "text-muted-800 dark:text-muted-100 mb-2 block font-sans text-2xl font-semibold" }, toDisplayString(unref(project).files?.length || 0), 1),
                    createVNode(_component_BaseHeading, {
                      size: "xs",
                      class: "mb-4 scale-90 uppercase"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, " Attached files ")
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
        _push(`</div><div class="col-span-12 sm:col-span-6">`);
        _push(ssrRenderComponent(_component_BaseCard, {
          shape: "curved",
          class: "group relative p-6"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="absolute end-3 top-3 z-10"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                small: "",
                shape: "full",
                class: "hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100",
                to: unref(getStep)(4).to
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:edit-2",
                      class: "pointer-events-none h-3 w-3"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:edit-2",
                        class: "pointer-events-none h-3 w-3"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                size: "xs",
                class: "mb-4 uppercase"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-muted-500 dark:text-muted-400"${_scopeId2}> Project team </span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, " Project team ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div${_scopeId}>`);
              if (unref(project).team && unref(project).team.length > 0) {
                _push2(`<div class="space-y-4"${_scopeId}><!--[-->`);
                ssrRenderList(unref(project).team, (member) => {
                  _push2(`<div class="flex items-center gap-2"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_BaseAvatar, {
                    size: "xs",
                    src: member.picture
                  }, null, _parent2, _scopeId));
                  _push2(`<div class="flex flex-col"${_scopeId}><h3 class="text-muted-800 dark:text-muted-100 font-sans text-sm font-medium"${_scopeId}>${ssrInterpolate(member.name)}</h3><p class="text-muted-500 dark:text-muted-400 font-sans text-xs"${_scopeId}>${ssrInterpolate(member.role)}</p></div></div>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<div${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseParagraph, {
                  size: "sm",
                  class: "text-muted-400"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` No team members invited `);
                    } else {
                      return [
                        createTextVNode(" No team members invited ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "absolute end-3 top-3 z-10" }, [
                  createVNode(_component_BaseButtonIcon, {
                    small: "",
                    shape: "full",
                    class: "hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100",
                    to: unref(getStep)(4).to
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:edit-2",
                        class: "pointer-events-none h-3 w-3"
                      })
                    ]),
                    _: 1
                  }, 8, ["to"])
                ]),
                createVNode(_component_BaseHeading, {
                  size: "xs",
                  class: "mb-4 uppercase"
                }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, " Project team ")
                  ]),
                  _: 1
                }),
                createVNode("div", null, [
                  unref(project).team && unref(project).team.length > 0 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "space-y-4"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(project).team, (member) => {
                      return openBlock(), createBlock("div", {
                        key: member.name,
                        class: "flex items-center gap-2"
                      }, [
                        createVNode(_component_BaseAvatar, {
                          size: "xs",
                          src: member.picture
                        }, null, 8, ["src"]),
                        createVNode("div", { class: "flex flex-col" }, [
                          createVNode("h3", { class: "text-muted-800 dark:text-muted-100 font-sans text-sm font-medium" }, toDisplayString(member.name), 1),
                          createVNode("p", { class: "text-muted-500 dark:text-muted-400 font-sans text-xs" }, toDisplayString(member.role), 1)
                        ])
                      ]);
                    }), 128))
                  ])) : (openBlock(), createBlock("div", { key: 1 }, [
                    createVNode(_component_BaseParagraph, {
                      size: "sm",
                      class: "text-muted-400"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" No team members invited ")
                      ]),
                      _: 1
                    })
                  ]))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="col-span-12 sm:col-span-6">`);
        _push(ssrRenderComponent(_component_BaseCard, {
          shape: "curved",
          class: "group relative p-6"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="absolute end-3 top-3 z-10"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                small: "",
                shape: "full",
                class: "hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100",
                to: unref(getStep)(5).to
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:edit-2",
                      class: "pointer-events-none h-3 w-3"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:edit-2",
                        class: "pointer-events-none h-3 w-3"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                size: "xs",
                class: "mb-4 uppercase"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-muted-500 dark:text-muted-400"${_scopeId2}> Project tools </span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, " Project tools ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div${_scopeId}>`);
              if (unref(project).tools && unref(project).tools.length > 0) {
                _push2(`<div class="space-y-4"${_scopeId}><!--[-->`);
                ssrRenderList(unref(project).tools, (tool) => {
                  _push2(`<div class="flex items-center gap-2"${_scopeId}><img${ssrRenderAttr("src", tool.logo)} class="h-8 w-8"${_scopeId}><div${_scopeId}><div class="text-muted-800 dark:text-muted-100 text-sm font-medium"${_scopeId}>${ssrInterpolate(tool.name)}</div><div class="text-muted-400 text-xs"${_scopeId}>${ssrInterpolate(tool.description)}</div></div></div>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<div${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseParagraph, {
                  size: "sm",
                  class: "text-muted-400"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` No tools selected `);
                    } else {
                      return [
                        createTextVNode(" No tools selected ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "absolute end-3 top-3 z-10" }, [
                  createVNode(_component_BaseButtonIcon, {
                    small: "",
                    shape: "full",
                    class: "hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100",
                    to: unref(getStep)(5).to
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:edit-2",
                        class: "pointer-events-none h-3 w-3"
                      })
                    ]),
                    _: 1
                  }, 8, ["to"])
                ]),
                createVNode(_component_BaseHeading, {
                  size: "xs",
                  class: "mb-4 uppercase"
                }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, " Project tools ")
                  ]),
                  _: 1
                }),
                createVNode("div", null, [
                  unref(project).tools && unref(project).tools.length > 0 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "space-y-4"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(project).tools, (tool) => {
                      return openBlock(), createBlock("div", {
                        key: tool.name,
                        class: "flex items-center gap-2"
                      }, [
                        createVNode("img", {
                          src: tool.logo,
                          class: "h-8 w-8"
                        }, null, 8, ["src"]),
                        createVNode("div", null, [
                          createVNode("div", { class: "text-muted-800 dark:text-muted-100 text-sm font-medium" }, toDisplayString(tool.name), 1),
                          createVNode("div", { class: "text-muted-400 text-xs" }, toDisplayString(tool.description), 1)
                        ])
                      ]);
                    }), 128))
                  ])) : (openBlock(), createBlock("div", { key: 1 }, [
                    createVNode(_component_BaseParagraph, {
                      size: "sm",
                      class: "text-muted-400"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" No tools selected ")
                      ]),
                      _: 1
                    })
                  ]))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></div></div>`);
      } else {
        _push(`<div><div class="mx-auto max-w-2xl px-4"><div class="mb-10 text-center">`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          tag: "h1",
          size: "2xl",
          class: "text-muted-800 dark:text-white"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>Congrats! You&#39;re all set</span>`);
            } else {
              return [
                createVNode("span", null, "Congrats! You're all set")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, {
          size: "sm",
          class: "text-muted-500 dark:text-muted-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>Awesome, you just finished creating this project.</span>`);
            } else {
              return [
                createVNode("span", null, "Awesome, you just finished creating this project.")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_BasePlaceholderPage, {
          title: "Get ready for next steps",
          subtitle: "You, and the team members you've added can already start working and creating tasks."
        }, {
          image: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", _imports_0)} class="mx-auto max-w-[210px] rounded-full" alt="Upload files"${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_0,
                  class: "mx-auto max-w-[210px] rounded-full",
                  alt: "Upload files"
                })
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="mt-2 text-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButton, {
                to: "/dashboards",
                shape: "curved",
                color: "primary",
                class: "w-48"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>View Project</span>`);
                  } else {
                    return [
                      createVNode("span", null, "View Project")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "mt-2 text-center" }, [
                  createVNode(_component_BaseButton, {
                    to: "/dashboards",
                    shape: "curved",
                    color: "primary",
                    class: "w-48"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "View Project")
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/wizard/step-7.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=step-7-a283fc23.mjs.map
