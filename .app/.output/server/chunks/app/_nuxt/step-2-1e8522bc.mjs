import { _ as _sfc_main$1 } from './DemoWizardStepTitle-e1abeb8e.mjs';
import { _ as _sfc_main$2 } from './BaseFullscreenDropfile-539341bb.mjs';
import { _ as _sfc_main$3 } from './BaseInputFileHeadless-8d058758.mjs';
import { _ as _sfc_main$4 } from './BaseButtonIcon-6150946c.mjs';
import { H as useHead, f as __nuxt_component_2, g as _sfc_main$z, U as _sfc_main$y } from '../server.mjs';
import { defineComponent, ref, watch, unref, isRef, withCtx, createVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { u as useMultiStepForm } from './multi-step-form-008d1760.mjs';
import { u as useNinjaFilePreview } from './file-preview-7bd14b92.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './placeholder-file-fb2c914d.mjs';
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
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "step-2",
  __ssrInlineRender: true,
  setup(__props) {
    const { data: project } = useMultiStepForm();
    useHead({
      title: "Project info"
    });
    const avatarPreview = useNinjaFilePreview(() => project.value.avatar);
    const inputFile = ref(null);
    watch(inputFile, (value) => {
      const file = value?.item(0) || null;
      project.value.avatar = file;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DemoWizardStepTitle = _sfc_main$1;
      const _component_BaseFullscreenDropfile = _sfc_main$2;
      const _component_BaseInputFileHeadless = _sfc_main$3;
      const _component_BaseButtonIcon = _sfc_main$4;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseInput = _sfc_main$z;
      const _component_BaseTextarea = _sfc_main$y;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_DemoWizardStepTitle, null, null, _parent));
      _push(`<div class="mx-auto flex w-full max-w-5xl flex-col px-4"><div class="flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_BaseFullscreenDropfile, {
        icon: "ph:image-duotone",
        "filter-file-dropped": (file) => file.type.startsWith("image"),
        onDrop: (value) => {
          inputFile.value = value;
        }
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseInputFileHeadless, {
        accept: "image/*",
        modelValue: unref(inputFile),
        "onUpdate:modelValue": ($event) => isRef(inputFile) ? inputFile.value = $event : null
      }, {
        default: withCtx(({ open, remove, files }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative h-20 w-20"${_scopeId}>`);
            if (unref(avatarPreview)) {
              _push2(`<img${ssrRenderAttr("src", unref(avatarPreview))} alt="Upload preview" class="bg-muted-200 dark:bg-muted-700/60 h-20 w-20 rounded-full object-cover object-center"${_scopeId}>`);
            } else {
              _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Upload preview" class="bg-muted-200 dark:bg-muted-700/60 h-20 w-20 rounded-full object-cover object-center"${_scopeId}>`);
            }
            if (files?.length && files.item(0)) {
              _push2(`<div class="absolute bottom-0 end-0 z-20"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                size: "sm",
                shape: "full",
                onClick: ($event) => remove(files.item(0)),
                tooltip: "Remove image"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
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
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div class="absolute bottom-0 end-0 z-20"${_scopeId}><div class="relative" tooltip="Upload image"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                size: "sm",
                shape: "full",
                onClick: open
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
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
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "relative h-20 w-20" }, [
                unref(avatarPreview) ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: unref(avatarPreview),
                  alt: "Upload preview",
                  class: "bg-muted-200 dark:bg-muted-700/60 h-20 w-20 rounded-full object-cover object-center"
                }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                  key: 1,
                  src: _imports_0,
                  alt: "Upload preview",
                  class: "bg-muted-200 dark:bg-muted-700/60 h-20 w-20 rounded-full object-cover object-center"
                })),
                files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "absolute bottom-0 end-0 z-20"
                }, [
                  createVNode(_component_BaseButtonIcon, {
                    size: "sm",
                    shape: "full",
                    onClick: ($event) => remove(files.item(0)),
                    tooltip: "Remove image"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:x",
                        class: "h-4 w-4"
                      })
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ])) : (openBlock(), createBlock("div", {
                  key: 3,
                  class: "absolute bottom-0 end-0 z-20"
                }, [
                  createVNode("div", {
                    class: "relative",
                    tooltip: "Upload image"
                  }, [
                    createVNode(_component_BaseButtonIcon, {
                      size: "sm",
                      shape: "full",
                      onClick: open
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
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="my-4 text-center font-sans"><p class="text-muted-500 text-sm">Upload a project logo</p><p class="text-muted-400 text-xs">File size cannot exceed 2MB</p></div><div class="mx-auto flex w-full max-w-sm flex-col gap-3">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: unref(project).name,
        "onUpdate:modelValue": ($event) => unref(project).name = $event,
        shape: "curved",
        placeholder: "Project name",
        classes: {
          input: "h-12 text-base text-center"
        }
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseTextarea, {
        modelValue: unref(project).description,
        "onUpdate:modelValue": ($event) => unref(project).description = $event,
        shape: "curved",
        placeholder: "Describe your project...",
        autogrow: "",
        class: "max-h-52"
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/wizard/step-2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=step-2-1e8522bc.mjs.map
