import { R as _sfc_main$t } from '../server.mjs';
import { _ as __nuxt_component_1 } from './BaseCheckboxAnimated-ecb67b13.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, isRef, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "base",
  __ssrInlineRender: true,
  setup(__props) {
    const options = ref([
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4",
      "Option 5",
      "Option 6",
      "Option 7",
      "Option 8",
      "Option 9",
      "Option 10",
      "Option 11",
      "Option 12",
      "Option 13",
      "Option 14",
      "Option 15",
      "Option 16",
      "Option 17",
      "Option 18",
      "Option 19"
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseFocusLoop = _sfc_main$t;
      const _component_BaseCheckboxAnimated = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-6 md:flex-row md:items-start" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseFocusLoop, { class: "flex w-3/5 flex-wrap items-end gap-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCheckboxAnimated, {
              modelValue: unref(options),
              "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
              value: "Option 1",
              classes: { label: "text-primary-500" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckboxAnimated, {
              modelValue: unref(options),
              "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
              value: "Option 2",
              classes: { label: "text-lime-500" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckboxAnimated, {
              modelValue: unref(options),
              "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
              value: "Option 3",
              classes: { label: "text-green-500" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckboxAnimated, {
              modelValue: unref(options),
              "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
              value: "Option 4",
              classes: { label: "text-emerald-500" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckboxAnimated, {
              modelValue: unref(options),
              "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
              value: "Option 5",
              classes: { label: "text-teal-500" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckboxAnimated, {
              modelValue: unref(options),
              "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
              value: "Option 6",
              classes: { label: "text-cyan-500" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckboxAnimated, {
              modelValue: unref(options),
              "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
              value: "Option 7",
              classes: { label: "text-sky-500" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckboxAnimated, {
              modelValue: unref(options),
              "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
              value: "Option 8",
              classes: { label: "text-blue-500" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckboxAnimated, {
              modelValue: unref(options),
              "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
              value: "Option 9",
              classes: { label: "text-indigo-500" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckboxAnimated, {
              modelValue: unref(options),
              "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
              value: "Option 10",
              classes: { label: "text-purple-500" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckboxAnimated, {
              modelValue: unref(options),
              "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
              value: "Option 11",
              classes: { label: "text-fuchsia-500" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckboxAnimated, {
              modelValue: unref(options),
              "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
              value: "Option 12",
              classes: { label: "text-pink-500" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckboxAnimated, {
              modelValue: unref(options),
              "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
              value: "Option 13",
              classes: { label: "text-rose-500" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckboxAnimated, {
              modelValue: unref(options),
              "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
              value: "Option 14",
              classes: { label: "text-red-500" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckboxAnimated, {
              modelValue: unref(options),
              "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
              value: "Option 15",
              classes: { label: "text-orange-500" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckboxAnimated, {
              modelValue: unref(options),
              "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
              value: "Option 16",
              classes: { label: "text-amber-500" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckboxAnimated, {
              modelValue: unref(options),
              "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
              value: "Option 17",
              classes: { label: "text-yellow-500" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckboxAnimated, {
              modelValue: unref(options),
              "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
              value: "Option 18",
              classes: {
                label: "text-muted-800 dark:text-muted-200"
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckboxAnimated, {
              modelValue: unref(options),
              "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
              value: "Option 19",
              classes: {
                label: "text-gray-400 dark:text-gray-500"
              }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseCheckboxAnimated, {
                modelValue: unref(options),
                "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
                value: "Option 1",
                classes: { label: "text-primary-500" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckboxAnimated, {
                modelValue: unref(options),
                "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
                value: "Option 2",
                classes: { label: "text-lime-500" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckboxAnimated, {
                modelValue: unref(options),
                "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
                value: "Option 3",
                classes: { label: "text-green-500" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckboxAnimated, {
                modelValue: unref(options),
                "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
                value: "Option 4",
                classes: { label: "text-emerald-500" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckboxAnimated, {
                modelValue: unref(options),
                "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
                value: "Option 5",
                classes: { label: "text-teal-500" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckboxAnimated, {
                modelValue: unref(options),
                "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
                value: "Option 6",
                classes: { label: "text-cyan-500" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckboxAnimated, {
                modelValue: unref(options),
                "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
                value: "Option 7",
                classes: { label: "text-sky-500" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckboxAnimated, {
                modelValue: unref(options),
                "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
                value: "Option 8",
                classes: { label: "text-blue-500" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckboxAnimated, {
                modelValue: unref(options),
                "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
                value: "Option 9",
                classes: { label: "text-indigo-500" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckboxAnimated, {
                modelValue: unref(options),
                "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
                value: "Option 10",
                classes: { label: "text-purple-500" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckboxAnimated, {
                modelValue: unref(options),
                "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
                value: "Option 11",
                classes: { label: "text-fuchsia-500" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckboxAnimated, {
                modelValue: unref(options),
                "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
                value: "Option 12",
                classes: { label: "text-pink-500" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckboxAnimated, {
                modelValue: unref(options),
                "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
                value: "Option 13",
                classes: { label: "text-rose-500" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckboxAnimated, {
                modelValue: unref(options),
                "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
                value: "Option 14",
                classes: { label: "text-red-500" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckboxAnimated, {
                modelValue: unref(options),
                "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
                value: "Option 15",
                classes: { label: "text-orange-500" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckboxAnimated, {
                modelValue: unref(options),
                "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
                value: "Option 16",
                classes: { label: "text-amber-500" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckboxAnimated, {
                modelValue: unref(options),
                "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
                value: "Option 17",
                classes: { label: "text-yellow-500" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckboxAnimated, {
                modelValue: unref(options),
                "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
                value: "Option 18",
                classes: {
                  label: "text-muted-800 dark:text-muted-200"
                }
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckboxAnimated, {
                modelValue: unref(options),
                "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
                value: "Option 19",
                classes: {
                  label: "text-gray-400 dark:text-gray-500"
                }
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/checkbox-animated/base.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=base-666df535.mjs.map
