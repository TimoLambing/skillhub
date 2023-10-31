import { g as _sfc_main$z, f as __nuxt_component_2 } from '../server.mjs';
import { _ as _sfc_main$1 } from './TairoPasswordStrength-48d6c128.mjs';
import { defineComponent, ref, mergeProps, unref, isRef, withCtx, createVNode, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "password-strength",
  __ssrInlineRender: true,
  setup(__props) {
    const password = ref('c-a_a"r"fafzf');
    const showPasswordField = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseInput = _sfc_main$z;
      const _component_Icon = __nuxt_component_2;
      const _component_TairoPasswordStrength = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-md" }, _attrs))}><div class="relative mb-2"><label class="text-muted-500 dark:text-muted-400 mb-2 block text-xs font-semibold">Password strength</label>`);
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: unref(password),
        "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
        type: unref(showPasswordField) ? "password" : "text",
        shape: "curved",
        placeholder: "Password"
      }, {
        action: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="leading-0 text-muted-400 peer-focus-within:text-primary-500 absolute end-0 top-0 flex h-10 w-10 items-center justify-center text-center text-xl"${_scopeId}><div class="relative flex h-full w-full items-center justify-center"${ssrRenderAttr("data-nui-tooltip", `${unref(showPasswordField) ? "Show" : "Hide"} password`)}${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: unref(showPasswordField) ? "mdi:eye-outline" : "mdi:eye-off-outline",
              class: "h-5 w-5"
            }, null, _parent2, _scopeId));
            _push2(`</div></button>`);
          } else {
            return [
              createVNode("button", {
                class: "leading-0 text-muted-400 peer-focus-within:text-primary-500 absolute end-0 top-0 flex h-10 w-10 items-center justify-center text-center text-xl",
                onClick: withModifiers(($event) => showPasswordField.value = !unref(showPasswordField), ["prevent"])
              }, [
                createVNode("div", {
                  class: "relative flex h-full w-full items-center justify-center",
                  "data-nui-tooltip": `${unref(showPasswordField) ? "Show" : "Hide"} password`
                }, [
                  createVNode(_component_Icon, {
                    name: unref(showPasswordField) ? "mdi:eye-outline" : "mdi:eye-off-outline",
                    class: "h-5 w-5"
                  }, null, 8, ["name"])
                ], 8, ["data-nui-tooltip"])
              ], 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_TairoPasswordStrength, {
        value: unref(password),
        "min-length": 8
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/tairo/password-strength.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=password-strength-43110ed1.mjs.map
