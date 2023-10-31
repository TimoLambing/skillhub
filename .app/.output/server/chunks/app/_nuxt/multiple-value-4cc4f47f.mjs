import { R as _sfc_main$t } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseCheckbox-45d3fdba.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, isRef, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "multiple-value",
  __ssrInlineRender: true,
  setup(__props) {
    const value = ref(["Option 1", "Option 2"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseFocusLoop = _sfc_main$t;
      const _component_BaseCheckbox = _sfc_main$1;
      _push(ssrRenderComponent(_component_BaseFocusLoop, mergeProps({ class: "grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              modelValue: unref(value),
              "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
              name: "multiple-demo-1",
              label: "Option 1",
              value: "Option 1",
              shape: "curved",
              color: "muted"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              modelValue: unref(value),
              "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
              name: "multiple-demo-2",
              label: "Option 2",
              value: "Option 2",
              shape: "curved",
              color: "muted"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              modelValue: unref(value),
              "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
              name: "multiple-demo-3",
              label: "Option 3",
              value: "Option 3",
              shape: "curved",
              color: "muted"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              modelValue: unref(value),
              "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
              name: "multiple-demo-4",
              label: "Option 4",
              value: "Option 4",
              shape: "curved",
              color: "muted"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              modelValue: unref(value),
              "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
              name: "multiple-demo-5",
              label: "Option 5",
              value: "Option 5",
              shape: "curved",
              color: "muted"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseCheckbox, {
                modelValue: unref(value),
                "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
                name: "multiple-demo-1",
                label: "Option 1",
                value: "Option 1",
                shape: "curved",
                color: "muted"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckbox, {
                modelValue: unref(value),
                "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
                name: "multiple-demo-2",
                label: "Option 2",
                value: "Option 2",
                shape: "curved",
                color: "muted"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckbox, {
                modelValue: unref(value),
                "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
                name: "multiple-demo-3",
                label: "Option 3",
                value: "Option 3",
                shape: "curved",
                color: "muted"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckbox, {
                modelValue: unref(value),
                "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
                name: "multiple-demo-4",
                label: "Option 4",
                value: "Option 4",
                shape: "curved",
                color: "muted"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckbox, {
                modelValue: unref(value),
                "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
                name: "multiple-demo-5",
                label: "Option 5",
                value: "Option 5",
                shape: "curved",
                color: "muted"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/checkbox/multiple-value.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=multiple-value-4cc4f47f.mjs.map
