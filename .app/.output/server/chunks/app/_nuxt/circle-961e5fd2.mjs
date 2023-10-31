import { _ as __nuxt_component_0 } from './BaseProgressCircle-f74c4642.mjs';
import { _ as _sfc_main$1 } from './BaseButtonAction-57c21d00.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import '../server.mjs';
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
  __name: "circle",
  __ssrInlineRender: true,
  setup(__props) {
    const progressCircle = ref(25);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseProgressCircle = __nuxt_component_0;
      const _component_BaseButtonAction = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-xs space-y-4" }, _attrs))}><div class="flex items-end gap-2">`);
      _push(ssrRenderComponent(_component_BaseProgressCircle, {
        title: "Primary circle progress bar",
        size: 45,
        value: unref(progressCircle),
        class: "text-primary-500"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseProgressCircle, {
        title: "Yellow circle progress bar",
        size: 55,
        value: unref(progressCircle),
        class: "text-yellow-500"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseProgressCircle, {
        title: "Pink circle progress bar",
        size: 75,
        value: unref(progressCircle),
        class: "text-pink-500"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseProgressCircle, {
        title: "Indigo circle progress bar",
        size: 85,
        value: unref(progressCircle),
        class: "text-indigo-400"
      }, null, _parent));
      _push(`</div><div class="flex justify-between gap-2">`);
      _push(ssrRenderComponent(_component_BaseButtonAction, {
        class: unref(progressCircle) === 25 && "!border-primary-500 !text-primary-500",
        onClick: ($event) => progressCircle.value = 25
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 25% `);
          } else {
            return [
              createTextVNode(" 25% ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButtonAction, {
        class: unref(progressCircle) === 50 && "!border-primary-500 !text-primary-500",
        onClick: ($event) => progressCircle.value = 50
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 50% `);
          } else {
            return [
              createTextVNode(" 50% ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButtonAction, {
        class: unref(progressCircle) === 75 && "!border-primary-500 !text-primary-500",
        onClick: ($event) => progressCircle.value = 75
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 75% `);
          } else {
            return [
              createTextVNode(" 75% ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButtonAction, {
        class: unref(progressCircle) === 100 && "!border-primary-500 !text-primary-500",
        onClick: ($event) => progressCircle.value = 100
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 100% `);
          } else {
            return [
              createTextVNode(" 100% ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/progress/circle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=circle-961e5fd2.mjs.map
