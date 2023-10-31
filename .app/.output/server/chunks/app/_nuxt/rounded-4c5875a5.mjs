import { R as _sfc_main$t } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseCheckbox-45d3fdba.mjs';
import { defineComponent, reactive, mergeProps, withCtx, unref, createVNode, useSSRContext } from 'vue';
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
  __name: "rounded",
  __ssrInlineRender: true,
  setup(__props) {
    const options = reactive({
      first: true,
      second: true,
      third: true,
      fourth: true,
      fifth: true,
      sixth: true,
      seventh: true
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseFocusLoop = _sfc_main$t;
      const _component_BaseCheckbox = _sfc_main$1;
      _push(ssrRenderComponent(_component_BaseFocusLoop, mergeProps({ class: "grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              modelValue: unref(options).first,
              "onUpdate:modelValue": ($event) => unref(options).first = $event,
              value: "demo-rounded-1",
              label: "Default",
              shape: "rounded"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              modelValue: unref(options).second,
              "onUpdate:modelValue": ($event) => unref(options).second = $event,
              value: "demo-rounded-2",
              label: "Muted",
              shape: "rounded",
              color: "muted"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              modelValue: unref(options).third,
              "onUpdate:modelValue": ($event) => unref(options).third = $event,
              value: "demo-rounded-3",
              label: "Primary",
              shape: "rounded",
              color: "primary"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              modelValue: unref(options).fourth,
              "onUpdate:modelValue": ($event) => unref(options).fourth = $event,
              value: "demo-rounded-4",
              label: "Info",
              shape: "rounded",
              color: "info"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              modelValue: unref(options).fifth,
              "onUpdate:modelValue": ($event) => unref(options).fifth = $event,
              value: "demo-rounded-5",
              label: "Success",
              shape: "rounded",
              color: "success"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              modelValue: unref(options).sixth,
              "onUpdate:modelValue": ($event) => unref(options).sixth = $event,
              value: "demo-rounded-6",
              label: "Warning",
              shape: "rounded",
              color: "warning"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              modelValue: unref(options).seventh,
              "onUpdate:modelValue": ($event) => unref(options).seventh = $event,
              value: "demo-rounded-2",
              label: "Danger",
              shape: "rounded",
              color: "danger"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseCheckbox, {
                modelValue: unref(options).first,
                "onUpdate:modelValue": ($event) => unref(options).first = $event,
                value: "demo-rounded-1",
                label: "Default",
                shape: "rounded"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckbox, {
                modelValue: unref(options).second,
                "onUpdate:modelValue": ($event) => unref(options).second = $event,
                value: "demo-rounded-2",
                label: "Muted",
                shape: "rounded",
                color: "muted"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckbox, {
                modelValue: unref(options).third,
                "onUpdate:modelValue": ($event) => unref(options).third = $event,
                value: "demo-rounded-3",
                label: "Primary",
                shape: "rounded",
                color: "primary"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckbox, {
                modelValue: unref(options).fourth,
                "onUpdate:modelValue": ($event) => unref(options).fourth = $event,
                value: "demo-rounded-4",
                label: "Info",
                shape: "rounded",
                color: "info"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckbox, {
                modelValue: unref(options).fifth,
                "onUpdate:modelValue": ($event) => unref(options).fifth = $event,
                value: "demo-rounded-5",
                label: "Success",
                shape: "rounded",
                color: "success"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckbox, {
                modelValue: unref(options).sixth,
                "onUpdate:modelValue": ($event) => unref(options).sixth = $event,
                value: "demo-rounded-6",
                label: "Warning",
                shape: "rounded",
                color: "warning"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckbox, {
                modelValue: unref(options).seventh,
                "onUpdate:modelValue": ($event) => unref(options).seventh = $event,
                value: "demo-rounded-2",
                label: "Danger",
                shape: "rounded",
                color: "danger"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/checkbox/rounded.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=rounded-4c5875a5.mjs.map
