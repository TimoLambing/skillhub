import { _ as _sfc_main$1 } from './BaseProgress-1402c581.mjs';
import { _ as _sfc_main$2 } from './BaseButtonAction-57c21d00.mjs';
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
  __name: "bar",
  __ssrInlineRender: true,
  setup(__props) {
    const progress = ref(25);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseProgress = _sfc_main$1;
      const _component_BaseButtonAction = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-xs space-y-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseProgress, {
        title: "Default progress bar",
        size: "sm",
        value: unref(progress),
        color: "primary"
      }, null, _parent));
      _push(`<div class="flex justify-between gap-2">`);
      _push(ssrRenderComponent(_component_BaseButtonAction, {
        class: unref(progress) === 25 && "!border-primary-500 !text-primary-500",
        onClick: ($event) => progress.value = 25
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
        class: unref(progress) === 50 && "!border-primary-500 !text-primary-500",
        onClick: ($event) => progress.value = 50
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
        class: unref(progress) === 75 && "!border-primary-500 !text-primary-500",
        onClick: ($event) => progress.value = 75
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
        class: unref(progress) === 100 && "!border-primary-500 !text-primary-500",
        onClick: ($event) => progress.value = 100
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/progress/bar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=bar-944cb77f.mjs.map
