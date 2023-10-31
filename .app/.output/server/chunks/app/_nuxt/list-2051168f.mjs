import { j as _sfc_main$C, _ as _sfc_main$p, e as __nuxt_component_0$5, s as _sfc_main$E, i as _sfc_main$D, b as _sfc_main$o, f as __nuxt_component_2 } from '../server.mjs';
import { _ as _sfc_main$9 } from './BaseButtonIcon-6150946c.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, ref, unref, openBlock, createBlock, Fragment, renderList, isRef } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _sfc_main$1$1, a as _sfc_main$a } from './BaseDropdownItem-864908ca.mjs';
import { _ as __nuxt_component_3 } from './BaseDropdownDivider-258f8823.mjs';
import { _ as _sfc_main$7 } from './DemoTodoListCompact-21f9e043.mjs';
import { _ as __nuxt_component_1 } from './BaseCheckboxAnimated-ecb67b13.mjs';
import { _ as _sfc_main$8 } from './DemoCommentListCompact-2988e3fb.mjs';
import { _ as _sfc_main$b } from './BaseIconBox-642fe941.mjs';
import { g as getRandomColor } from './colors-16c42002.mjs';
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

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "DemoUserList",
  __ssrInlineRender: true,
  props: {
    shape: { default: "rounded" }
  },
  setup(__props) {
    const props = __props;
    const users = [
      {
        id: 0,
        picture: "/img/avatars/16.svg",
        name: "Hermann Mayer",
        position: "Business Analyst",
        progress: 18
      },
      {
        id: 1,
        picture: "/img/avatars/10.svg",
        name: "Kendra Wilson",
        position: "Project Manager",
        progress: 22
      },
      {
        id: 2,
        picture: "/img/avatars/6.svg",
        name: "John Baxter",
        position: "Product Manager",
        progress: -12
      },
      {
        id: 3,
        picture: "/img/avatars/12.svg",
        name: "Amelia Shepherd",
        position: "Product Manager",
        progress: 32
      },
      {
        id: 4,
        picture: "/img/avatars/11.svg",
        name: "Daryl Zanuk",
        position: "Mobile Developer",
        progress: -4
      },
      {
        id: 5,
        picture: "/img/avatars/5.svg",
        name: "Clarissa Miller",
        position: "UI/UX Designer",
        progress: 32
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseText = _sfc_main$D;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseButtonIcon = _sfc_main$9;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><!--[-->`);
      ssrRenderList(users, (user) => {
        _push(`<div class="flex items-center gap-2">`);
        _push(ssrRenderComponent(_component_BaseAvatar, {
          src: user.picture,
          size: "sm",
          shape: props.shape
        }, null, _parent));
        _push(`<div>`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h3",
          size: "sm",
          weight: "medium",
          lead: "tight",
          class: "text-muted-800 dark:text-muted-100"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(user.name)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(user.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_BaseText, {
          size: "xs",
          class: "text-muted-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(user.position)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(user.position), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="ms-auto flex items-center justify-end gap-4">`);
        _push(ssrRenderComponent(_component_BaseParagraph, {
          size: "sm",
          weight: "semibold",
          class: user.progress > 0 ? "text-success-500" : "text-danger-500"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(user.progress)}%</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(user.progress) + "%", 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_BaseButtonIcon, {
          to: "#",
          muted: "",
          small: "",
          shape: props.shape
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:chevron-right",
                class: "h-4 w-4"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "lucide:chevron-right",
                  class: "h-4 w-4"
                })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoUserList.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DemoTabbedContent",
  __ssrInlineRender: true,
  props: {
    title: { default: void 0 },
    shape: { default: "rounded" },
    labels: {}
  },
  setup(__props) {
    const props = __props;
    const activeTab = ref("tab-1");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$p;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-8 flex items-center justify-between">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        if (props.title) {
          _push(ssrRenderComponent(_component_BaseHeading, {
            as: "h3",
            size: "md",
            weight: "semibold",
            lead: "tight",
            class: "text-muted-800 dark:text-white"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span${_scopeId}>${ssrInterpolate(props.title)}</span>`);
              } else {
                return [
                  createVNode("span", null, toDisplayString(props.title), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`<div><div class="${ssrRenderClass([[
        props.shape === "rounded" ? "rounded-md" : "",
        props.shape === "curved" ? "rounded-xl" : "",
        props.shape === "full" ? "rounded-full" : ""
      ], "bg-muted-100 dark:bg-muted-700 relative flex h-9 w-40"])}"><button type="button" class="${ssrRenderClass([[
        unref(activeTab) === "tab-1" ? "text-white" : "text-muted-400",
        props.shape === "rounded" ? "rounded-md" : "",
        props.shape === "curved" ? "rounded-xl" : "",
        props.shape === "full" ? "rounded-full" : ""
      ], "nui-focus relative z-10 flex flex-1 cursor-pointer items-center justify-center font-sans text-sm transition-colors duration-300"])}">${ssrInterpolate(props.labels[0])}</button><button type="button" class="${ssrRenderClass([[
        unref(activeTab) === "tab-2" ? "text-white" : "text-muted-400",
        props.shape === "rounded" ? "rounded-md" : "",
        props.shape === "curved" ? "rounded-xl" : "",
        props.shape === "full" ? "rounded-full" : ""
      ], "nui-focus relative z-10 flex flex-1 cursor-pointer items-center justify-center font-sans text-sm transition-colors duration-300"])}">${ssrInterpolate(props.labels[1])}</button><div class="${ssrRenderClass([[
        unref(activeTab) === "tab-1" ? "ms-0" : "ms-[50%]",
        props.shape === "rounded" ? "rounded-md" : "",
        props.shape === "curved" ? "rounded-xl" : "",
        props.shape === "full" ? "rounded-full" : ""
      ], "bg-primary-500 absolute start-0 top-0 h-full w-1/2 transition-all duration-300 ease-in-out"])}"></div></div></div></div><div>`);
      if (unref(activeTab) === "tab-1") {
        _push(`<div>`);
        ssrRenderSlot(_ctx.$slots, "tab-1", {}, null, _push, _parent);
        _push(`</div>`);
      } else if (unref(activeTab) === "tab-2") {
        _push(`<div>`);
        ssrRenderSlot(_ctx.$slots, "tab-2", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoTabbedContent.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DemoFileListTabbed",
  __ssrInlineRender: true,
  props: {
    shape: { default: "rounded" }
  },
  setup(__props) {
    const props = __props;
    const recentFiles = [
      {
        id: 0,
        icon: "/img/icons/files/zip-format.svg",
        name: "theme.zip",
        type: "Zipped folder"
      },
      {
        id: 1,
        icon: "/img/icons/files/doc-2.svg",
        name: "project_outline.doc",
        type: "MS Word file"
      },
      {
        id: 2,
        icon: "/img/icons/files/pdf.svg",
        name: "requirements_v3.pdf",
        type: "PDF file"
      },
      {
        id: 3,
        icon: "/img/icons/files/sheet.svg",
        name: "project_budget.xsls",
        type: "MS Excel file"
      },
      {
        id: 4,
        icon: "/img/icons/files/ai.svg",
        name: "wireframes.ai",
        type: "Illustrator file"
      },
      {
        id: 5,
        icon: "/img/icons/files/sheet.svg",
        name: "invoice_recap.xsls",
        type: "MS Excel file"
      }
    ];
    const savedFiles = [
      {
        id: 6,
        icon: "/img/icons/files/ai.svg",
        name: "header.ai",
        type: "Illustrator file"
      },
      {
        id: 7,
        icon: "/img/icons/files/ai.svg",
        name: "section.ai",
        type: "Illustrator file"
      },
      {
        id: 8,
        icon: "/img/icons/files/ai.svg",
        name: "footer.ai",
        type: "Illustrator file"
      },
      {
        id: 9,
        icon: "/img/icons/files/zip-format.svg",
        name: "theme_assets.zip",
        type: "Zipped folder"
      },
      {
        id: 10,
        icon: "/img/icons/files/doc-2.svg",
        name: "team_structure.doc",
        type: "MS Word file"
      },
      {
        id: 11,
        icon: "/img/icons/files/doc-2.svg",
        name: "meeting_notes.doc",
        type: "MS Word file"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DemoTabbedContent = _sfc_main$5;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseText = _sfc_main$D;
      const _component_BaseDropdown = _sfc_main$1$1;
      const _component_BaseDropdownItem = _sfc_main$a;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseDropdownDivider = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_DemoTabbedContent, {
        title: "Files",
        labels: ["Recent", "Saved"],
        shape: props.shape
      }, {
        "tab-1": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-6"${_scopeId}><!--[-->`);
            ssrRenderList(recentFiles, (file) => {
              _push2(`<div class="flex items-center gap-2"${_scopeId}><img${ssrRenderAttr("src", file.icon)} class="h-10 w-10"${ssrRenderAttr("alt", file.name)}${_scopeId}><div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h3",
                size: "sm",
                weight: "medium",
                lead: "tight",
                class: "text-muted-800 dark:text-muted-100"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(file.name)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(file.name), 1)
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
                    _push3(`<span${_scopeId2}>${ssrInterpolate(file.type)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(file.type), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div><div class="ms-auto"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseDropdown, {
                flavor: "context",
                label: "Dropdown",
                orientation: "end",
                size: "md",
                class: "z-20",
                shape: "curved"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                      to: "#",
                      title: "Download",
                      text: "Download this file"
                    }, {
                      start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "ph:cloud-arrow-down-duotone",
                            class: "me-2 block h-5 w-5"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "ph:cloud-arrow-down-duotone",
                              class: "me-2 block h-5 w-5"
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                      to: "#",
                      title: "Upload",
                      text: "Upload a new version"
                    }, {
                      start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "ph:cloud-arrow-up-duotone",
                            class: "me-2 block h-5 w-5"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "ph:cloud-arrow-up-duotone",
                              class: "me-2 block h-5 w-5"
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseDropdownDivider, null, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                      to: "#",
                      title: "Permissions",
                      text: "Manage permissions"
                    }, {
                      start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "ph:lock-duotone",
                            class: "me-2 block h-5 w-5"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "ph:lock-duotone",
                              class: "me-2 block h-5 w-5"
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                      to: "#",
                      title: "Share",
                      text: "Share this file"
                    }, {
                      start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "ph:share-duotone",
                            class: "me-2 block h-5 w-5"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "ph:share-duotone",
                              class: "me-2 block h-5 w-5"
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseDropdownDivider, null, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                      to: "#",
                      title: "Delete",
                      text: "Delete this file"
                    }, {
                      start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "ph:trash-duotone",
                            class: "me-2 block h-5 w-5"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "ph:trash-duotone",
                              class: "me-2 block h-5 w-5"
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_BaseDropdownItem, {
                        to: "#",
                        title: "Download",
                        text: "Download this file"
                      }, {
                        start: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "ph:cloud-arrow-down-duotone",
                            class: "me-2 block h-5 w-5"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseDropdownItem, {
                        to: "#",
                        title: "Upload",
                        text: "Upload a new version"
                      }, {
                        start: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "ph:cloud-arrow-up-duotone",
                            class: "me-2 block h-5 w-5"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseDropdownDivider),
                      createVNode(_component_BaseDropdownItem, {
                        to: "#",
                        title: "Permissions",
                        text: "Manage permissions"
                      }, {
                        start: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "ph:lock-duotone",
                            class: "me-2 block h-5 w-5"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseDropdownItem, {
                        to: "#",
                        title: "Share",
                        text: "Share this file"
                      }, {
                        start: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "ph:share-duotone",
                            class: "me-2 block h-5 w-5"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseDropdownDivider),
                      createVNode(_component_BaseDropdownItem, {
                        to: "#",
                        title: "Delete",
                        text: "Delete this file"
                      }, {
                        start: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "ph:trash-duotone",
                            class: "me-2 block h-5 w-5"
                          })
                        ]),
                        _: 1
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
            return [
              createVNode("div", { class: "space-y-6" }, [
                (openBlock(), createBlock(Fragment, null, renderList(recentFiles, (file) => {
                  return createVNode("div", {
                    key: file.id,
                    class: "flex items-center gap-2"
                  }, [
                    createVNode("img", {
                      src: file.icon,
                      class: "h-10 w-10",
                      alt: file.name
                    }, null, 8, ["src", "alt"]),
                    createVNode("div", null, [
                      createVNode(_component_BaseHeading, {
                        as: "h3",
                        size: "sm",
                        weight: "medium",
                        lead: "tight",
                        class: "text-muted-800 dark:text-muted-100"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, toDisplayString(file.name), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_BaseText, {
                        size: "xs",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, toDisplayString(file.type), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    createVNode("div", { class: "ms-auto" }, [
                      createVNode(_component_BaseDropdown, {
                        flavor: "context",
                        label: "Dropdown",
                        orientation: "end",
                        size: "md",
                        class: "z-20",
                        shape: "curved"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_BaseDropdownItem, {
                            to: "#",
                            title: "Download",
                            text: "Download this file"
                          }, {
                            start: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "ph:cloud-arrow-down-duotone",
                                class: "me-2 block h-5 w-5"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_BaseDropdownItem, {
                            to: "#",
                            title: "Upload",
                            text: "Upload a new version"
                          }, {
                            start: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "ph:cloud-arrow-up-duotone",
                                class: "me-2 block h-5 w-5"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_BaseDropdownDivider),
                          createVNode(_component_BaseDropdownItem, {
                            to: "#",
                            title: "Permissions",
                            text: "Manage permissions"
                          }, {
                            start: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "ph:lock-duotone",
                                class: "me-2 block h-5 w-5"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_BaseDropdownItem, {
                            to: "#",
                            title: "Share",
                            text: "Share this file"
                          }, {
                            start: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "ph:share-duotone",
                                class: "me-2 block h-5 w-5"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_BaseDropdownDivider),
                          createVNode(_component_BaseDropdownItem, {
                            to: "#",
                            title: "Delete",
                            text: "Delete this file"
                          }, {
                            start: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "ph:trash-duotone",
                                class: "me-2 block h-5 w-5"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]);
                }), 64))
              ])
            ];
          }
        }),
        "tab-2": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-6"${_scopeId}><!--[-->`);
            ssrRenderList(savedFiles, (file) => {
              _push2(`<div class="flex items-center gap-2"${_scopeId}><img${ssrRenderAttr("src", file.icon)} class="h-10 w-10"${ssrRenderAttr("alt", file.name)}${_scopeId}><div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h3",
                size: "sm",
                weight: "medium",
                lead: "tight",
                class: "text-muted-800 dark:text-muted-100"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(file.name)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(file.name), 1)
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
                    _push3(`<span${_scopeId2}>${ssrInterpolate(file.type)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(file.type), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div><div class="ms-auto"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseDropdown, {
                flavor: "context",
                label: "Dropdown",
                orientation: "end",
                size: "md",
                shape: "curved",
                class: "z-20"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                      to: "#",
                      title: "Download",
                      text: "Download this file"
                    }, {
                      start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "ph:cloud-arrow-down-duotone",
                            class: "me-2 block h-5 w-5"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "ph:cloud-arrow-down-duotone",
                              class: "me-2 block h-5 w-5"
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                      to: "#",
                      title: "Upload",
                      text: "Upload a new version"
                    }, {
                      start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "ph:cloud-arrow-up-duotone",
                            class: "me-2 block h-5 w-5"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "ph:cloud-arrow-up-duotone",
                              class: "me-2 block h-5 w-5"
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseDropdownDivider, null, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                      to: "#",
                      title: "Permissions",
                      text: "Manage permissions"
                    }, {
                      start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "ph:lock-duotone",
                            class: "me-2 block h-5 w-5"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "ph:lock-duotone",
                              class: "me-2 block h-5 w-5"
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                      to: "#",
                      title: "Share",
                      text: "Share this file"
                    }, {
                      start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "ph:share-duotone",
                            class: "me-2 block h-5 w-5"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "ph:share-duotone",
                              class: "me-2 block h-5 w-5"
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseDropdownDivider, null, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                      to: "#",
                      title: "Delete",
                      text: "Delete this file"
                    }, {
                      start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "ph:trash-duotone",
                            class: "me-2 block h-5 w-5"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "ph:trash-duotone",
                              class: "me-2 block h-5 w-5"
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_BaseDropdownItem, {
                        to: "#",
                        title: "Download",
                        text: "Download this file"
                      }, {
                        start: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "ph:cloud-arrow-down-duotone",
                            class: "me-2 block h-5 w-5"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseDropdownItem, {
                        to: "#",
                        title: "Upload",
                        text: "Upload a new version"
                      }, {
                        start: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "ph:cloud-arrow-up-duotone",
                            class: "me-2 block h-5 w-5"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseDropdownDivider),
                      createVNode(_component_BaseDropdownItem, {
                        to: "#",
                        title: "Permissions",
                        text: "Manage permissions"
                      }, {
                        start: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "ph:lock-duotone",
                            class: "me-2 block h-5 w-5"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseDropdownItem, {
                        to: "#",
                        title: "Share",
                        text: "Share this file"
                      }, {
                        start: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "ph:share-duotone",
                            class: "me-2 block h-5 w-5"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseDropdownDivider),
                      createVNode(_component_BaseDropdownItem, {
                        to: "#",
                        title: "Delete",
                        text: "Delete this file"
                      }, {
                        start: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "ph:trash-duotone",
                            class: "me-2 block h-5 w-5"
                          })
                        ]),
                        _: 1
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
            return [
              createVNode("div", { class: "space-y-6" }, [
                (openBlock(), createBlock(Fragment, null, renderList(savedFiles, (file) => {
                  return createVNode("div", {
                    key: file.id,
                    class: "flex items-center gap-2"
                  }, [
                    createVNode("img", {
                      src: file.icon,
                      class: "h-10 w-10",
                      alt: file.name
                    }, null, 8, ["src", "alt"]),
                    createVNode("div", null, [
                      createVNode(_component_BaseHeading, {
                        as: "h3",
                        size: "sm",
                        weight: "medium",
                        lead: "tight",
                        class: "text-muted-800 dark:text-muted-100"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, toDisplayString(file.name), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_BaseText, {
                        size: "xs",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, toDisplayString(file.type), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    createVNode("div", { class: "ms-auto" }, [
                      createVNode(_component_BaseDropdown, {
                        flavor: "context",
                        label: "Dropdown",
                        orientation: "end",
                        size: "md",
                        shape: "curved",
                        class: "z-20"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_BaseDropdownItem, {
                            to: "#",
                            title: "Download",
                            text: "Download this file"
                          }, {
                            start: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "ph:cloud-arrow-down-duotone",
                                class: "me-2 block h-5 w-5"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_BaseDropdownItem, {
                            to: "#",
                            title: "Upload",
                            text: "Upload a new version"
                          }, {
                            start: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "ph:cloud-arrow-up-duotone",
                                class: "me-2 block h-5 w-5"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_BaseDropdownDivider),
                          createVNode(_component_BaseDropdownItem, {
                            to: "#",
                            title: "Permissions",
                            text: "Manage permissions"
                          }, {
                            start: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "ph:lock-duotone",
                                class: "me-2 block h-5 w-5"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_BaseDropdownItem, {
                            to: "#",
                            title: "Share",
                            text: "Share this file"
                          }, {
                            start: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "ph:share-duotone",
                                class: "me-2 block h-5 w-5"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_BaseDropdownDivider),
                          createVNode(_component_BaseDropdownItem, {
                            to: "#",
                            title: "Delete",
                            text: "Delete this file"
                          }, {
                            start: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "ph:trash-duotone",
                                class: "me-2 block h-5 w-5"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]);
                }), 64))
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoFileListTabbed.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DemoTodoListTabbed",
  __ssrInlineRender: true,
  props: {
    shape: { default: "rounded" },
    color: { default: "success" }
  },
  setup(__props) {
    const props = __props;
    const todos = [
      {
        id: 0,
        title: "Call Mr. Markstrom",
        description: "Review the project initial wireframes",
        completed: true
      },
      {
        id: 1,
        title: "Finish wireframes",
        description: "Make all requested changes and publish",
        completed: false
      },
      {
        id: 2,
        title: "Update timesheets",
        description: "Update all the team timesheets",
        completed: false
      },
      {
        id: 3,
        title: "Request payout",
        description: "Send project invoice to client",
        completed: false
      },
      {
        id: 4,
        title: "Approve components",
        description: "Review complete design system",
        completed: true
      }
    ];
    const tasks = ref(["Option 0", "Option 1", "Option 2"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DemoTabbedContent = _sfc_main$5;
      const _component_BaseCheckboxAnimated = __nuxt_component_1;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_DemoTabbedContent, {
        title: "Tasks",
        labels: ["All", "Mine"],
        shape: props.shape
      }, {
        "tab-1": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-2 space-y-6"${_scopeId}><!--[-->`);
            ssrRenderList(todos, (task) => {
              _push2(`<div class="flex items-center gap-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseCheckboxAnimated, {
                modelValue: unref(tasks),
                "onUpdate:modelValue": ($event) => isRef(tasks) ? tasks.value = $event : null,
                value: `Option ${task.id}`,
                color: "success"
              }, null, _parent2, _scopeId));
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "sm",
                weight: "light",
                lead: "tight",
                class: "text-muted-800 dark:text-white"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(task.title)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(task.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-muted-400"${_scopeId2}>${ssrInterpolate(task.description)}</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-muted-400" }, toDisplayString(task.description), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-2 space-y-6" }, [
                (openBlock(), createBlock(Fragment, null, renderList(todos, (task) => {
                  return createVNode("div", {
                    key: task.id,
                    class: "flex items-center gap-3"
                  }, [
                    createVNode(_component_BaseCheckboxAnimated, {
                      modelValue: unref(tasks),
                      "onUpdate:modelValue": ($event) => isRef(tasks) ? tasks.value = $event : null,
                      value: `Option ${task.id}`,
                      color: "success"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "value"]),
                    createVNode("div", null, [
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "sm",
                        weight: "light",
                        lead: "tight",
                        class: "text-muted-800 dark:text-white"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, toDisplayString(task.title), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_BaseParagraph, { size: "xs" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-muted-400" }, toDisplayString(task.description), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ])
                  ]);
                }), 64))
              ])
            ];
          }
        }),
        "tab-2": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-2 space-y-6"${_scopeId}><!--[-->`);
            ssrRenderList(todos, (task) => {
              _push2(`<div class="flex items-center gap-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseCheckboxAnimated, {
                modelValue: unref(tasks),
                "onUpdate:modelValue": ($event) => isRef(tasks) ? tasks.value = $event : null,
                value: `Option ${task.id}`,
                classes: {
                  label: [
                    props.color === "success" && "text-success-500",
                    props.color === "info" && "text-info-500",
                    props.color === "warning" && "text-warning-500",
                    props.color === "danger" && "text-danger-500",
                    props.color === "primary" && "text-primary-500",
                    props.color === "lime" && "text-lime-500",
                    props.color === "sky" && "text-sky-500"
                  ].join("")
                }
              }, null, _parent2, _scopeId));
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "sm",
                weight: "light",
                lead: "tight",
                class: "text-muted-800 dark:text-white"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(task.title)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(task.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-muted-400"${_scopeId2}>${ssrInterpolate(task.description)}</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-muted-400" }, toDisplayString(task.description), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-2 space-y-6" }, [
                (openBlock(), createBlock(Fragment, null, renderList(todos, (task) => {
                  return createVNode("div", {
                    key: task.id,
                    class: "flex items-center gap-3"
                  }, [
                    createVNode(_component_BaseCheckboxAnimated, {
                      modelValue: unref(tasks),
                      "onUpdate:modelValue": ($event) => isRef(tasks) ? tasks.value = $event : null,
                      value: `Option ${task.id}`,
                      classes: {
                        label: [
                          props.color === "success" && "text-success-500",
                          props.color === "info" && "text-info-500",
                          props.color === "warning" && "text-warning-500",
                          props.color === "danger" && "text-danger-500",
                          props.color === "primary" && "text-primary-500",
                          props.color === "lime" && "text-lime-500",
                          props.color === "sky" && "text-sky-500"
                        ].join("")
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "classes"]),
                    createVNode("div", null, [
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "sm",
                        weight: "light",
                        lead: "tight",
                        class: "text-muted-800 dark:text-white"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, toDisplayString(task.title), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_BaseParagraph, { size: "xs" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-muted-400" }, toDisplayString(task.description), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ])
                  ]);
                }), 64))
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoTodoListTabbed.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DemoTopicListCompact",
  __ssrInlineRender: true,
  props: {
    shape: { default: "rounded" }
  },
  setup(__props) {
    const props = __props;
    const topics = [
      {
        id: 0,
        title: "Ecology",
        icon: "ph:leaf-duotone",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter autem vobis placet. Quae duo sunt, unum facit."
      },
      {
        id: 1,
        title: "Logistics",
        icon: "ph:boat-duotone",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter autem vobis placet."
      },
      {
        id: 2,
        title: "Business",
        icon: "ph:suitcase-duotone",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter autem vobis placet. Quae duo sunt, unum facit."
      },
      {
        id: 3,
        title: "Movies",
        icon: "ph:popcorn-duotone",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter autem vobis placet. Quae duo sunt, unum facit."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseIconBox = _sfc_main$b;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-2 space-y-5" }, _attrs))}><!--[-->`);
      ssrRenderList(topics, (topic) => {
        _push(`<div class="flex gap-3">`);
        _push(ssrRenderComponent(_component_BaseIconBox, {
          shape: props.shape,
          size: "sm",
          class: ("getRandomColor" in _ctx ? _ctx.getRandomColor : unref(getRandomColor))()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: topic.icon,
                class: "h-5 w-5"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: topic.icon,
                  class: "h-5 w-5"
                }, null, 8, ["name"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div>`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h4",
          size: "sm",
          weight: "light",
          lead: "tight",
          class: "text-muted-800 dark:text-white"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(topic.title)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(topic.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-muted-400"${_scopeId}>${ssrInterpolate(topic.content)}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-muted-400" }, toDisplayString(topic.content), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoTopicListCompact.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DemoTimelineCompact",
  __ssrInlineRender: true,
  props: {
    shape: { default: "rounded" }
  },
  setup(__props) {
    const props = __props;
    const items = [
      {
        icon: "ph:phone-duotone",
        image: void 0,
        title: "Call Danny at Colby's",
        description: "Today - 11:30am"
      },
      {
        icon: void 0,
        image: "/img/avatars/3.svg",
        title: "Meeting with Mike",
        description: "Today - 01:00pm"
      },
      {
        icon: "ph:chat-circle-duotone",
        image: void 0,
        title: "Answer Annie's messages",
        description: "Today - 01:45pm"
      },
      {
        icon: void 0,
        image: "/img/avatars/16.svg",
        title: "Meeting with Hermann",
        description: "Today - 03:00pm"
      },
      {
        icon: "ph:envelope-duotone",
        image: void 0,
        title: "Send marketing campaign",
        description: "Today - 03:30pm"
      },
      {
        icon: "ph:selection-all-duotone",
        image: void 0,
        title: "Project review",
        description: "Today - 04:30pm"
      },
      {
        icon: "ph:note-duotone",
        image: void 0,
        title: "Write proposal for Andy",
        description: "Today - 06:30pm"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(items, (item) => {
        _push(`<div class="after:border-muted-300 dark:after:border-muted-600 relative flex pb-8 after:absolute after:start-4 after:top-10 after:h-[calc(100%_-_36px)] after:w-px after:border-l after:content-[&#39;&#39;]"><div class="${ssrRenderClass([[
          props.shape === "rounded" ? "rounded-md" : "",
          props.shape === "curved" ? "rounded-xl" : "",
          props.shape === "full" ? "rounded-full" : ""
        ], "border-muted-200 text-muted-400 after:border-muted-300 dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600 relative flex h-9 w-9 items-center justify-center border bg-white shadow-lg after:absolute after:-end-8 after:top-4 after:h-px after:w-5 after:border-t after:content-['']"])}">`);
        if (item.icon) {
          _push(ssrRenderComponent(_component_Icon, {
            name: item.icon,
            class: ""
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (item.image) {
          _push(`<img${ssrRenderAttr("src", item.image)} class="${ssrRenderClass([[
            props.shape === "rounded" ? "rounded-md" : "",
            props.shape === "curved" ? "rounded-xl" : "",
            props.shape === "full" ? "rounded-full" : ""
          ], "max-w-full object-cover shadow-sm dark:border-transparent"])}"${ssrRenderAttr("alt", item.title)}>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="ms-10"><h6 class="font-heading text-muted-800 text-sm font-medium dark:text-white">${ssrInterpolate(item.title)}</h6><p class="text-muted-400 font-sans text-xs">${ssrInterpolate(item.description)}</p></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoTimelineCompact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "list",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseHeading = _sfc_main$p;
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_DemoUserList = _sfc_main$6;
      const _component_DemoFileListTabbed = _sfc_main$4;
      const _component_DemoTodoListCompact = _sfc_main$7;
      const _component_DemoTodoListTabbed = _sfc_main$3;
      const _component_DemoCommentListCompact = _sfc_main$8;
      const _component_DemoTopicListCompact = _sfc_main$2;
      const _component_DemoTimelineCompact = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "ptablet:grid-cols-2 grid gap-6 sm:grid-cols-3" }, _attrs))}><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-8 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Members</span>`);
                } else {
                  return [
                    createVNode("span", null, "Members")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` View All `);
                } else {
                  return [
                    createTextVNode(" View All ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_DemoUserList, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-8 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Members")
                  ]),
                  _: 1
                }),
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" View All ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_DemoUserList)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-8 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Members</span>`);
                } else {
                  return [
                    createVNode("span", null, "Members")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` View All `);
                } else {
                  return [
                    createTextVNode(" View All ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_DemoUserList, { shape: "full" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-8 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Members")
                  ]),
                  _: 1
                }),
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" View All ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_DemoUserList, { shape: "full" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoFileListTabbed, { shape: "full" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoFileListTabbed, { shape: "full" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-8 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>My Tasks</span>`);
                } else {
                  return [
                    createVNode("span", null, "My Tasks")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` View All `);
                } else {
                  return [
                    createTextVNode(" View All ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_DemoTodoListCompact, { color: "lime" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-8 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "My Tasks")
                  ]),
                  _: 1
                }),
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" View All ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_DemoTodoListCompact, { color: "lime" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-8 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>My Tasks</span>`);
                } else {
                  return [
                    createVNode("span", null, "My Tasks")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` View All `);
                } else {
                  return [
                    createTextVNode(" View All ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_DemoTodoListCompact, { color: "sky" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-8 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "My Tasks")
                  ]),
                  _: 1
                }),
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" View All ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_DemoTodoListCompact, { color: "sky" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoTodoListTabbed, {
              shape: "rounded",
              color: "primary"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoTodoListTabbed, {
                shape: "rounded",
                color: "primary"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        class: "p-6",
        shape: "curved"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-8 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Latest comments</span>`);
                } else {
                  return [
                    createVNode("span", null, "Latest comments")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` View All `);
                } else {
                  return [
                    createTextVNode(" View All ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_DemoCommentListCompact, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-8 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Latest comments")
                  ]),
                  _: 1
                }),
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" View All ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_DemoCommentListCompact)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        class: "p-6",
        shape: "curved"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-8 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Topics</span>`);
                } else {
                  return [
                    createVNode("span", null, "Topics")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` View All `);
                } else {
                  return [
                    createTextVNode(" View All ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_DemoTopicListCompact, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-8 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Topics")
                  ]),
                  _: 1
                }),
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" View All ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_DemoTopicListCompact)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        class: "p-6",
        shape: "curved"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-8 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Topics</span>`);
                } else {
                  return [
                    createVNode("span", null, "Topics")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` View All `);
                } else {
                  return [
                    createTextVNode(" View All ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_DemoTopicListCompact, { shape: "full" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-8 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Topics")
                  ]),
                  _: 1
                }),
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" View All ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_DemoTopicListCompact, { shape: "full" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        class: "p-6",
        shape: "curved"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-8 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Timeline</span>`);
                } else {
                  return [
                    createVNode("span", null, "Timeline")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` View All `);
                } else {
                  return [
                    createTextVNode(" View All ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_DemoTimelineCompact, { shape: "rounded" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-8 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Timeline")
                  ]),
                  _: 1
                }),
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" View All ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_DemoTimelineCompact, { shape: "rounded" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        class: "p-6",
        shape: "curved"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-8 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Timeline</span>`);
                } else {
                  return [
                    createVNode("span", null, "Timeline")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` View All `);
                } else {
                  return [
                    createTextVNode(" View All ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_DemoTimelineCompact, { shape: "curved" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-8 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Timeline")
                  ]),
                  _: 1
                }),
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" View All ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_DemoTimelineCompact, { shape: "curved" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        class: "p-6",
        shape: "curved"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-8 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Timeline</span>`);
                } else {
                  return [
                    createVNode("span", null, "Timeline")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` View All `);
                } else {
                  return [
                    createTextVNode(" View All ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_DemoTimelineCompact, { shape: "full" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-8 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Timeline")
                  ]),
                  _: 1
                }),
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" View All ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_DemoTimelineCompact, { shape: "full" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/widgets/list.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=list-2051168f.mjs.map
