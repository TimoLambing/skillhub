import { _ as _sfc_main$1 } from './BaseInputFileHeadless-8d058758.mjs';
import { f as __nuxt_component_2 } from '../server.mjs';
import { _ as _sfc_main$2 } from './BaseProgress-1402c581.mjs';
import { defineComponent, ref, mergeProps, unref, isRef, withCtx, createVNode, withModifiers, openBlock, createBlock, withKeys, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { f as formatFileSize } from './format-files-24022fa8.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _imports_0 } from './placeholder-file-fb2c914d.mjs';
import './file-preview-7bd14b92.mjs';
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
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "file-upload",
  __ssrInlineRender: true,
  setup(__props) {
    const uploadedFiles = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseInputFileHeadless = _sfc_main$1;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseProgress = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-xl" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseInputFileHeadless, {
        multiple: "",
        modelValue: unref(uploadedFiles),
        "onUpdate:modelValue": ($event) => isRef(uploadedFiles) ? uploadedFiles.value = $event : null
      }, {
        default: withCtx(({ open, remove, preview, drop, files }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4 flex items-center gap-2"${_scopeId}><button type="button" class="nui-focus border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300" tooltip="Select files"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:plus",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(`<span class="sr-only"${_scopeId}>Select files</span></button><button type="button" class="nui-focus border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300" tooltip="Start Upload"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:arrow-up",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(`<span class="sr-only"${_scopeId}>Start Upload</span></button></div><div class=""${_scopeId}>`);
            if (!files?.length) {
              _push2(`<div class="nui-focus border-muted-300 dark:border-muted-700 hover:border-muted-400 focus:border-muted-400 dark:hover:border-muted-600 dark:focus:border-muted-700 group cursor-pointer rounded-lg border-[3px] border-dashed p-8 transition-colors duration-300" tabindex="0" role="button"${_scopeId}><div class="p-5 text-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "mdi-light:cloud-upload",
                class: "text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 mb-2 h-10 w-10 transition-colors duration-300"
              }, null, _parent2, _scopeId));
              _push2(`<h4 class="text-muted-400 font-sans text-sm"${_scopeId}>Drop files to upload</h4><div${_scopeId}><span class="text-muted-400 font-sans text-[0.7rem] font-semibold uppercase"${_scopeId}> Or </span></div><label for="file" class="text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 cursor-pointer font-sans text-sm underline underline-offset-4 transition-colors duration-300"${_scopeId}> Select files </label></div></div>`);
            } else {
              _push2(`<ul class="mt-6 space-y-2"${_scopeId}><!--[-->`);
              ssrRenderList(files, (file) => {
                _push2(`<li${_scopeId}><div class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative flex items-center justify-end gap-2 rounded-xl border bg-white p-3"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><div class="shrink-0"${_scopeId}>`);
                if (file.type.startsWith("image")) {
                  _push2(`<img class="h-14 w-14 rounded-xl object-cover object-center"${ssrRenderAttr("src", preview(file).value)} alt="Image preview"${_scopeId}>`);
                } else {
                  _push2(`<img class="h-14 w-14 rounded-xl object-cover object-center"${ssrRenderAttr("src", _imports_0)} alt="Image preview"${_scopeId}>`);
                }
                _push2(`</div><div class="font-sans"${_scopeId}><span class="text-muted-800 dark:text-muted-100 line-clamp-1 block text-sm"${_scopeId}>${ssrInterpolate(file.name)}</span><span class="text-muted-400 block text-xs"${_scopeId}>${ssrInterpolate(("formatFileSize" in _ctx ? _ctx.formatFileSize : unref(formatFileSize))(file.size))}</span></div></div><div class="${ssrRenderClass(["opacity-100", "ms-auto w-32 px-4 transition-opacity duration-300"])}"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseProgress, {
                  value: 0,
                  size: "xs",
                  color: "success"
                }, null, _parent2, _scopeId));
                _push2(`</div><div class="flex gap-2"${_scopeId}><button class="border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60" disabled type="button" tooltip="Cancel"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "lucide:slash",
                  class: "h-4 w-4"
                }, null, _parent2, _scopeId));
                _push2(`<span class="sr-only"${_scopeId}>Cancel</span></button><button class="border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300" type="button" tooltip="Upload"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "lucide:arrow-up",
                  class: "h-4 w-4"
                }, null, _parent2, _scopeId));
                _push2(`<span class="sr-only"${_scopeId}>Upload</span></button><button class="border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300" type="button" tooltip="Remove"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "lucide:x",
                  class: "h-4 w-4"
                }, null, _parent2, _scopeId));
                _push2(`<span class="sr-only"${_scopeId}>Remove</span></button></div></div></li>`);
              });
              _push2(`<!--]--></ul>`);
            }
            _push2(`</div>`);
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
                    class: "h-4 w-4"
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
                    createVNode("h4", { class: "text-muted-400 font-sans text-sm" }, "Drop files to upload"),
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
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/input-file-headless/file-upload.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=file-upload-5f7219f5.mjs.map
