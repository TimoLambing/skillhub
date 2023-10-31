import { a as __nuxt_component_0, b as __nuxt_component_1, _ as _sfc_main$2 } from './BaseThemeToggle-8b5dbd48.mjs';
import { u as useColorMode } from './composables-f7cb2fae.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderComponent } from 'vue/server-renderer';
import { l as _export_sfc } from '../server.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BaseThemeSwitch",
  __ssrInlineRender: true,
  props: {
    disableTransitions: { type: Boolean, default: false }
  },
  setup(__props) {
    const colorMode = useColorMode();
    const isDark = computed({
      get() {
        return colorMode.value === "dark";
      },
      set(value) {
        colorMode.preference = value ? "dark" : "light";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconSun = __nuxt_component_0;
      const _component_IconMoon = __nuxt_component_1;
      _push(`<label${ssrRenderAttrs(mergeProps({ class: "nui-theme-switch" }, _attrs))}><input class="nui-theme-switch-input" type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(isDark)) ? ssrLooseContain(unref(isDark), null) : unref(isDark)) ? " checked" : ""}><span class="nui-theme-switch-inner">`);
      _push(ssrRenderComponent(_component_IconSun, { class: "nui-sun" }, null, _parent));
      _push(ssrRenderComponent(_component_IconMoon, { class: "nui-moon" }, null, _parent));
      _push(`</span></label>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/base/BaseThemeSwitch.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BaseThemeToggle = _sfc_main$2;
  const _component_BaseThemeSwitch = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-10" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_BaseThemeToggle, null, null, _parent));
  _push(ssrRenderComponent(_component_BaseThemeSwitch, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/theme-toggle/base.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const base = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { base as default };
//# sourceMappingURL=base-6f334241.mjs.map
