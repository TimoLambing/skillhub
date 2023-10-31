import { f as __nuxt_component_2 } from '../server.mjs';
import { defineComponent, ref, watch, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseTabs",
  __ssrInlineRender: true,
  props: {
    tabs: {},
    modelValue: { default: void 0 },
    type: { default: "tabs" },
    justify: { default: void 0 },
    boxed: { type: Boolean },
    hideLabel: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const justifyStyle = {
      start: "",
      center: "nui-tabs-centered",
      end: "nui-tabs-end"
    };
    const typeStyle = {
      tabs: "nui-tab-item",
      box: "nui-pill-item"
    };
    const activeValue = ref(props.modelValue);
    watch(
      () => props.modelValue,
      (value) => {
        activeValue.value = value;
      }
    );
    watch(activeValue, (value) => {
      emit("update:modelValue", value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-tabs", props.justify && justifyStyle[props.justify]]
      }, _attrs))}><div class="nui-tabs-inner"><!--[-->`);
      ssrRenderList(_ctx.tabs, (tab, key) => {
        _push(`<a class="${ssrRenderClass([
          typeStyle[props.type],
          unref(activeValue) === tab.value && "nui-active",
          tab.icon && "nui-has-icon"
        ])}" tabindex="0">`);
        if (tab.icon) {
          _push(ssrRenderComponent(_component_Icon, {
            name: tab.icon,
            class: "me-1 block h-5 w-5"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="${ssrRenderClass([
          props.type === "box" && tab.icon && "text-[.85rem]",
          props.type === "tabs" && "text-sm"
        ])}">${ssrInterpolate(tab.label)}</span></a>`);
      });
      _push(`<!--]--></div><div class="relative block">`);
      ssrRenderSlot(_ctx.$slots, "tab", { activeValue: unref(activeValue) }, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/base/BaseTabs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=BaseTabs-22f5542f.mjs.map
