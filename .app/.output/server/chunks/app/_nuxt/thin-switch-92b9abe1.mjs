import { R as _sfc_main$t } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseSwitchThin-362b589d.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "thin-switch",
  __ssrInlineRender: true,
  setup(__props) {
    const values = reactive({
      primary: true,
      info: true,
      success: true,
      warning: true,
      danger: true
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseFocusLoop = _sfc_main$t;
      const _component_BaseSwitchThin = _sfc_main$1;
      _push(ssrRenderComponent(_component_BaseFocusLoop, mergeProps({ class: "grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseSwitchThin, {
              modelValue: unref(values).primary,
              "onUpdate:modelValue": ($event) => unref(values).primary = $event,
              label: "Primary",
              color: "primary"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseSwitchThin, {
              modelValue: unref(values).info,
              "onUpdate:modelValue": ($event) => unref(values).info = $event,
              label: "Info",
              color: "info"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseSwitchThin, {
              modelValue: unref(values).success,
              "onUpdate:modelValue": ($event) => unref(values).success = $event,
              label: "Success",
              color: "success"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseSwitchThin, {
              modelValue: unref(values).warning,
              "onUpdate:modelValue": ($event) => unref(values).warning = $event,
              label: "Warning",
              color: "warning"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseSwitchThin, {
              modelValue: unref(values).danger,
              "onUpdate:modelValue": ($event) => unref(values).danger = $event,
              label: "Danger",
              color: "danger"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseSwitchThin, {
                modelValue: unref(values).primary,
                "onUpdate:modelValue": ($event) => unref(values).primary = $event,
                label: "Primary",
                color: "primary"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseSwitchThin, {
                modelValue: unref(values).info,
                "onUpdate:modelValue": ($event) => unref(values).info = $event,
                label: "Info",
                color: "info"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseSwitchThin, {
                modelValue: unref(values).success,
                "onUpdate:modelValue": ($event) => unref(values).success = $event,
                label: "Success",
                color: "success"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseSwitchThin, {
                modelValue: unref(values).warning,
                "onUpdate:modelValue": ($event) => unref(values).warning = $event,
                label: "Warning",
                color: "warning"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseSwitchThin, {
                modelValue: unref(values).danger,
                "onUpdate:modelValue": ($event) => unref(values).danger = $event,
                label: "Danger",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/switch/thin-switch.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=thin-switch-92b9abe1.mjs.map
