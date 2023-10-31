import { R as _sfc_main$t } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseSelect-50588309.mjs';
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
import './IconChevronDown-af6375e6.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "shapes",
  __ssrInlineRender: true,
  setup(__props) {
    const options = reactive({
      first: "",
      second: "",
      third: "",
      fourth: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseFocusLoop = _sfc_main$t;
      const _component_BaseSelect = _sfc_main$1;
      _push(ssrRenderComponent(_component_BaseFocusLoop, mergeProps({ class: "grid gap-6 md:max-w-lg md:grid-cols-2" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseSelect, {
              modelValue: unref(options).first,
              "onUpdate:modelValue": ($event) => unref(options).first = $event,
              shape: "straight",
              label: "Straight select"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<option value=""${_scopeId2}>Select a hero</option><option value="Superman"${_scopeId2}>Superman</option><option value="Batman"${_scopeId2}>Batman</option><option value="Iron man"${_scopeId2}>Iron man</option><option value="Magneto"${_scopeId2}>Magneto</option><option value="Cyclops"${_scopeId2}>Cyclops</option>`);
                } else {
                  return [
                    createVNode("option", { value: "" }, "Select a hero"),
                    createVNode("option", { value: "Superman" }, "Superman"),
                    createVNode("option", { value: "Batman" }, "Batman"),
                    createVNode("option", { value: "Iron man" }, "Iron man"),
                    createVNode("option", { value: "Magneto" }, "Magneto"),
                    createVNode("option", { value: "Cyclops" }, "Cyclops")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseSelect, {
              modelValue: unref(options).second,
              "onUpdate:modelValue": ($event) => unref(options).second = $event,
              shape: "rounded",
              label: "Rounded select"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<option value=""${_scopeId2}>Select a hero</option><option value="Superman"${_scopeId2}>Superman</option><option value="Batman"${_scopeId2}>Batman</option><option value="Iron man"${_scopeId2}>Iron man</option><option value="Magneto"${_scopeId2}>Magneto</option><option value="Cyclops"${_scopeId2}>Cyclops</option>`);
                } else {
                  return [
                    createVNode("option", { value: "" }, "Select a hero"),
                    createVNode("option", { value: "Superman" }, "Superman"),
                    createVNode("option", { value: "Batman" }, "Batman"),
                    createVNode("option", { value: "Iron man" }, "Iron man"),
                    createVNode("option", { value: "Magneto" }, "Magneto"),
                    createVNode("option", { value: "Cyclops" }, "Cyclops")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseSelect, {
              modelValue: unref(options).third,
              "onUpdate:modelValue": ($event) => unref(options).third = $event,
              shape: "curved",
              label: "Curved select"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<option value=""${_scopeId2}>Select a hero</option><option value="Superman"${_scopeId2}>Superman</option><option value="Batman"${_scopeId2}>Batman</option><option value="Iron man"${_scopeId2}>Iron man</option><option value="Magneto"${_scopeId2}>Magneto</option><option value="Cyclops"${_scopeId2}>Cyclops</option>`);
                } else {
                  return [
                    createVNode("option", { value: "" }, "Select a hero"),
                    createVNode("option", { value: "Superman" }, "Superman"),
                    createVNode("option", { value: "Batman" }, "Batman"),
                    createVNode("option", { value: "Iron man" }, "Iron man"),
                    createVNode("option", { value: "Magneto" }, "Magneto"),
                    createVNode("option", { value: "Cyclops" }, "Cyclops")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseSelect, {
              modelValue: unref(options).fourth,
              "onUpdate:modelValue": ($event) => unref(options).fourth = $event,
              shape: "full",
              label: "Full select"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<option value=""${_scopeId2}>Select a hero</option><option value="Superman"${_scopeId2}>Superman</option><option value="Batman"${_scopeId2}>Batman</option><option value="Iron man"${_scopeId2}>Iron man</option><option value="Magneto"${_scopeId2}>Magneto</option><option value="Cyclops"${_scopeId2}>Cyclops</option>`);
                } else {
                  return [
                    createVNode("option", { value: "" }, "Select a hero"),
                    createVNode("option", { value: "Superman" }, "Superman"),
                    createVNode("option", { value: "Batman" }, "Batman"),
                    createVNode("option", { value: "Iron man" }, "Iron man"),
                    createVNode("option", { value: "Magneto" }, "Magneto"),
                    createVNode("option", { value: "Cyclops" }, "Cyclops")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseSelect, {
                modelValue: unref(options).first,
                "onUpdate:modelValue": ($event) => unref(options).first = $event,
                shape: "straight",
                label: "Straight select"
              }, {
                default: withCtx(() => [
                  createVNode("option", { value: "" }, "Select a hero"),
                  createVNode("option", { value: "Superman" }, "Superman"),
                  createVNode("option", { value: "Batman" }, "Batman"),
                  createVNode("option", { value: "Iron man" }, "Iron man"),
                  createVNode("option", { value: "Magneto" }, "Magneto"),
                  createVNode("option", { value: "Cyclops" }, "Cyclops")
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseSelect, {
                modelValue: unref(options).second,
                "onUpdate:modelValue": ($event) => unref(options).second = $event,
                shape: "rounded",
                label: "Rounded select"
              }, {
                default: withCtx(() => [
                  createVNode("option", { value: "" }, "Select a hero"),
                  createVNode("option", { value: "Superman" }, "Superman"),
                  createVNode("option", { value: "Batman" }, "Batman"),
                  createVNode("option", { value: "Iron man" }, "Iron man"),
                  createVNode("option", { value: "Magneto" }, "Magneto"),
                  createVNode("option", { value: "Cyclops" }, "Cyclops")
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseSelect, {
                modelValue: unref(options).third,
                "onUpdate:modelValue": ($event) => unref(options).third = $event,
                shape: "curved",
                label: "Curved select"
              }, {
                default: withCtx(() => [
                  createVNode("option", { value: "" }, "Select a hero"),
                  createVNode("option", { value: "Superman" }, "Superman"),
                  createVNode("option", { value: "Batman" }, "Batman"),
                  createVNode("option", { value: "Iron man" }, "Iron man"),
                  createVNode("option", { value: "Magneto" }, "Magneto"),
                  createVNode("option", { value: "Cyclops" }, "Cyclops")
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseSelect, {
                modelValue: unref(options).fourth,
                "onUpdate:modelValue": ($event) => unref(options).fourth = $event,
                shape: "full",
                label: "Full select"
              }, {
                default: withCtx(() => [
                  createVNode("option", { value: "" }, "Select a hero"),
                  createVNode("option", { value: "Superman" }, "Superman"),
                  createVNode("option", { value: "Batman" }, "Batman"),
                  createVNode("option", { value: "Iron man" }, "Iron man"),
                  createVNode("option", { value: "Magneto" }, "Magneto"),
                  createVNode("option", { value: "Cyclops" }, "Cyclops")
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/select/shapes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=shapes-67ce3c8a.mjs.map
