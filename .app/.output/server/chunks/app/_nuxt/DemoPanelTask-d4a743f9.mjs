import { D as usePanels, f as __nuxt_component_2, _ as _sfc_main$p, b as _sfc_main$o, s as _sfc_main$E, i as _sfc_main$D, U as _sfc_main$y } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseButtonIcon-6150946c.mjs';
import { _ as _sfc_main$2 } from './BaseTag-734af285.mjs';
import { _ as _sfc_main$3 } from './BaseProgress-1402c581.mjs';
import { _ as _sfc_main$4 } from './BaseCheckbox-45d3fdba.mjs';
import { _ as _sfc_main$5 } from './BaseButtonAction-57c21d00.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, unref, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoPanelTask",
  __ssrInlineRender: true,
  props: {
    task: { default: void 0 },
    project: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    usePanels();
    const commentArea = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      const _component_BaseButtonIcon = _sfc_main$1;
      const _component_BaseTag = _sfc_main$2;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BaseText = _sfc_main$D;
      const _component_BaseProgress = _sfc_main$3;
      const _component_BaseCheckbox = _sfc_main$4;
      const _component_BaseTextarea = _sfc_main$y;
      const _component_BaseButtonAction = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-muted-200 dark:border-muted-700 dark:bg-muted-800 border bg-white" }, _attrs))}><div class="flex h-16 w-full items-center justify-between px-10"><h2 class="font-heading text-muted-700 text-lg font-semibold dark:text-white"> Task Details </h2><button type="button" class="text-muted-400 hover:bg-muted-100 hover:text-muted-600 dark:hover:bg-muted-700 flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 dark:hover:text-white">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "feather:chevron-right",
        class: "h-6 w-6"
      }, null, _parent));
      _push(`</button></div><div class="nui-slimscroll relative h-[calc(100%_-_64px)] w-full overflow-y-auto px-10 py-5"><div><div class="mb-4 flex items-center justify-between"><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_BaseButtonIcon, {
        shape: "full",
        "data-nui-tooltip": "Edit task",
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "lucide:edit-3" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, { name: "lucide:edit-3" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h4 class="text-muted-400 font-sans text-xs font-semibold uppercase"> Overview </h4></div>`);
      _push(ssrRenderComponent(_component_BaseTag, {
        shape: "full",
        flavor: "pastel",
        color: "muted",
        class: "m-0 -ms-1 inline-flex h-6 scale-90 items-center gap-1 py-0 text-xs font-semibold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="${ssrRenderClass([[
              props.task?.status === 0 && "bg-info-500",
              props.task?.status === 1 && "bg-primary-500",
              props.task?.status === 2 && "bg-danger-500",
              props.task?.status === 3 && "bg-warning-500",
              props.task?.status === 4 && "bg-yellow-400",
              props.task?.status === 5 && "bg-success-500"
            ], "block h-2 w-2 rounded-full"])}"${_scopeId}></span><span${_scopeId}>Task #${ssrInterpolate(props.task?.id)}</span>`);
          } else {
            return [
              createVNode("span", {
                class: ["block h-2 w-2 rounded-full", [
                  props.task?.status === 0 && "bg-info-500",
                  props.task?.status === 1 && "bg-primary-500",
                  props.task?.status === 2 && "bg-danger-500",
                  props.task?.status === 3 && "bg-warning-500",
                  props.task?.status === 4 && "bg-yellow-400",
                  props.task?.status === 5 && "bg-success-500"
                ]]
              }, null, 2),
              createVNode("span", null, "Task #" + toDisplayString(props.task?.id), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="border-muted-200 dark:border-muted-700 border-b pb-6">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "md",
        weight: "medium",
        class: "mb-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(props.task?.name)}`);
          } else {
            return [
              createTextVNode(toDisplayString(props.task?.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "xs",
        class: "text-muted-500 dark:text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(props.task?.description)}`);
          } else {
            return [
              createTextVNode(toDisplayString(props.task?.description), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-4 flex items-center justify-between"><div class="flex shrink-0 items-center gap-2">`);
      _push(ssrRenderComponent(_component_BaseAvatar, {
        src: props.task?.assignee.src,
        size: "xs",
        class: "shrink-0"
      }, null, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_BaseText, {
        size: "xs",
        class: "text-muted-400",
        lead: "none"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Assigned to`);
          } else {
            return [
              createTextVNode("Assigned to")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h4",
        size: "sm",
        weight: "medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(props.task?.assignee.tooltip)}`);
          } else {
            return [
              createTextVNode(toDisplayString(props.task?.assignee.tooltip), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="max-w-[120px] grow">`);
      _push(ssrRenderComponent(_component_BaseText, {
        size: "xs",
        class: "text-muted-400 mb-2",
        lead: "none"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(props.task?.completion)}% complete`);
          } else {
            return [
              createTextVNode(toDisplayString(props.task?.completion) + "% complete", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseProgress, {
        value: props.task?.completion,
        size: "xs",
        color: props.task?.status === 5 ? "success" : "primary"
      }, null, _parent));
      _push(`</div></div></div><div class="border-muted-200 dark:border-muted-700 border-b py-6"><h4 class="text-muted-400 font-sans text-xs font-semibold uppercase"> Checklist </h4>`);
      if (props.task?.checklist.length === 0) {
        _push(`<div><div class="text-muted-400 mt-10 flex items-center justify-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:file-thin",
          class: "h-10 w-10"
        }, null, _parent));
        _push(`</div><div class="mb-6 mt-2 text-center">`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h4",
          size: "md",
          weight: "light",
          class: "mb-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>Nothing to show</span>`);
            } else {
              return [
                createVNode("span", null, "Nothing to show")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, {
          size: "xs",
          lead: "tight",
          class: "text-muted-500 dark:text-muted-400 mx-auto max-w-[200px] !font-sans"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>There is no checklist to show in here for now.</span>`);
            } else {
              return [
                createVNode("span", null, "There is no checklist to show in here for now.")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<div class="mt-6 space-y-4"><!--[-->`);
        ssrRenderList(props.task?.checklist, (item, index) => {
          _push(`<div shape="curved"><div class="flex w-full items-center gap-2">`);
          _push(ssrRenderComponent(_component_BaseCheckbox, {
            modelValue: item.done,
            "onUpdate:modelValue": ($event) => item.done = $event,
            class: "shrink-0",
            color: "primary",
            label: item.text,
            classes: {
              wrapper: "!items-start max-w-[240px]",
              label: "text-[0.85rem] text-muted-500 dark:text-muted-300 leading-snug"
            }
          }, null, _parent));
          _push(`</div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div><div class="border-muted-200 dark:border-muted-700 border-b py-6"><h4 class="text-muted-400 font-sans text-xs font-semibold uppercase"> Attached Files (${ssrInterpolate(props.task?.files.length)}) </h4>`);
      if (props.task?.files.length === 0) {
        _push(`<div><div class="text-muted-400 mt-10 flex items-center justify-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:file-thin",
          class: "h-10 w-10"
        }, null, _parent));
        _push(`</div><div class="mb-6 mt-2 text-center">`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h4",
          size: "md",
          weight: "light",
          class: "mb-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>Nothing to show</span>`);
            } else {
              return [
                createVNode("span", null, "Nothing to show")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, {
          size: "xs",
          lead: "tight",
          class: "text-muted-500 dark:text-muted-400 mx-auto max-w-[200px] !font-sans"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>There are no attached files to show in here for now.</span>`);
            } else {
              return [
                createVNode("span", null, "There are no attached files to show in here for now.")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<div class="mt-6 space-y-4"><!--[-->`);
        ssrRenderList(props.task?.files, (file, index) => {
          _push(`<div shape="curved"><div class="flex w-full items-center gap-2"><img${ssrRenderAttr("src", file.icon)}${ssrRenderAttr("alt", file.name)} class="max-w-[40px]"><div>`);
          _push(ssrRenderComponent(_component_BaseHeading, {
            tag: "h3",
            size: "sm",
            weight: "medium"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(file.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(file.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(_component_BaseParagraph, {
            size: "xs",
            class: "text-muted-400"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span${_scopeId}>${ssrInterpolate(file.size)}</span><span class="px-1 text-base leading-tight"${_scopeId}> \xB7 </span><span${_scopeId}>v${ssrInterpolate(file.version)}</span>`);
              } else {
                return [
                  createVNode("span", null, toDisplayString(file.size), 1),
                  createVNode("span", { class: "px-1 text-base leading-tight" }, " \xB7 "),
                  createVNode("span", null, "v" + toDisplayString(file.version), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div><div class="ms-auto">`);
          _push(ssrRenderComponent(_component_BaseButtonIcon, {
            shape: "full",
            "data-nui-tooltip": "Download file",
            size: "sm"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, { name: "lucide:arrow-down" }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_Icon, { name: "lucide:arrow-down" })
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div><div class="py-6"><h4 class="text-muted-400 font-sans text-xs font-semibold uppercase"> Comments (${ssrInterpolate(props.task?.comments.length)}) </h4>`);
      if (props.task?.comments.length === 0) {
        _push(`<div><div class="text-muted-400 mt-10 flex items-center justify-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:chat-circle-thin",
          class: "h-10 w-10"
        }, null, _parent));
        _push(`</div><div class="mb-6 mt-2 text-center">`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h4",
          size: "md",
          weight: "light",
          class: "mb-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>Nothing to show</span>`);
            } else {
              return [
                createVNode("span", null, "Nothing to show")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, {
          size: "xs",
          lead: "tight",
          class: "text-muted-500 dark:text-muted-400 mx-auto max-w-[200px] !font-sans"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>There are no comments to show in here for now.</span>`);
            } else {
              return [
                createVNode("span", null, "There are no comments to show in here for now.")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<div class="mt-6 flex flex-col gap-8"><!--[-->`);
        ssrRenderList(props.task?.comments, (comment, c) => {
          _push(`<div class="flex gap-3">`);
          _push(ssrRenderComponent(_component_BaseAvatar, {
            src: comment.author.picture,
            size: "xs"
          }, null, _parent));
          _push(`<div>`);
          _push(ssrRenderComponent(_component_BaseHeading, {
            as: "h3",
            size: "sm",
            weight: "medium"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(comment.author.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(comment.author.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(_component_BaseText, {
            size: "xs",
            class: "text-muted-400 mb-2",
            lead: "none"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` posted ${ssrInterpolate(comment.author.posted)}`);
              } else {
                return [
                  createTextVNode(" posted " + toDisplayString(comment.author.posted), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(_component_BaseParagraph, {
            size: "xs",
            class: "text-muted-500 dark:text-muted-400"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(comment.text)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(comment.text), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_BaseTextarea, {
        modelValue: unref(commentArea),
        "onUpdate:modelValue": ($event) => isRef(commentArea) ? commentArea.value = $event : null,
        shape: "rounded",
        placeholder: "Write a comment...",
        rows: 4,
        addon: ""
      }, {
        addon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              src: "/img/avatars/2.svg",
              class: "me-1",
              size: "xs"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "semibold",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Maya `);
                } else {
                  return [
                    createTextVNode(" Maya ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButtonAction, { color: "primary" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Publish `);
                } else {
                  return [
                    createTextVNode(" Publish ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-2" }, [
                createVNode(_component_BaseAvatar, {
                  src: "/img/avatars/2.svg",
                  class: "me-1",
                  size: "xs"
                }),
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "sm",
                  weight: "semibold",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Maya ")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "flex items-center gap-2" }, [
                createVNode(_component_BaseButtonAction, { color: "primary" }, {
                  default: withCtx(() => [
                    createTextVNode(" Publish ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/DemoPanelTask.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=DemoPanelTask-d4a743f9.mjs.map
