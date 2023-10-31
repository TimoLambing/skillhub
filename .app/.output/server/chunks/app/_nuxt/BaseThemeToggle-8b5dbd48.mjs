import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderComponent } from 'vue/server-renderer';
import { l as _export_sfc } from '../server.mjs';
import { u as useColorMode } from './composables-f7cb2fae.mjs';

const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    "aria-hidden": "true",
    viewBox: "0 0 24 24"
  }, _attrs))}><g fill="currentColor" stroke="currentColor" class="stroke-2"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path></g></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/icon/IconSun.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    "aria-hidden": "true",
    viewBox: "0 0 24 24"
  }, _attrs))}><path fill="currentColor" stroke="currentColor" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" class="stroke-2"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/icon/IconMoon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseThemeToggle",
  __ssrInlineRender: true,
  props: {
    inverted: { type: Boolean, default: false },
    disableTransitions: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
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
      _push(`<label${ssrRenderAttrs(mergeProps({
        class: ["nui-theme-toggle", props.inverted && "nui-theme-toggle-inverted"]
      }, _attrs))}><input${ssrIncludeBooleanAttr(Array.isArray(unref(isDark)) ? ssrLooseContain(unref(isDark), null) : unref(isDark)) ? " checked" : ""} type="checkbox" class="nui-theme-toggle-input"><span class="nui-theme-toggle-inner">`);
      _push(ssrRenderComponent(_component_IconSun, { class: "nui-sun" }, null, _parent));
      _push(ssrRenderComponent(_component_IconMoon, { class: "nui-moon" }, null, _parent));
      _push(`</span></label>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/base/BaseThemeToggle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, __nuxt_component_0 as a, __nuxt_component_1 as b };
//# sourceMappingURL=BaseThemeToggle-8b5dbd48.mjs.map
