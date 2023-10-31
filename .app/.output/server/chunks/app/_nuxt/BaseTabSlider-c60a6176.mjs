import { defineComponent, computed, ref, watch, mergeProps, unref, useSSRContext } from 'vue';
import { m as useAppConfig } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseTabSlider",
  __ssrInlineRender: true,
  props: {
    tabs: {},
    modelValue: { default: void 0 },
    justify: { default: void 0 },
    size: { default: "md" },
    shape: { default: void 0 },
    condensed: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const appConfig = useAppConfig();
    const shape = computed(
      () => props.shape ?? appConfig.nui.defaultShapes?.tabSlider
    );
    const justifyStyle = {
      start: "",
      center: "nui-tabs-centered",
      end: "nui-tabs-end"
    };
    const sizeStyle = {
      sm: "nui-tabs-sm",
      md: "nui-tabs-md"
    };
    const shapeStyle = {
      straight: "",
      rounded: "nui-tabs-rounded",
      smooth: "nui-tabs-smooth",
      curved: "nui-tabs-curved",
      full: "nui-tabs-full"
    };
    const tabsLength = computed(() => Math.min(3, Math.max(2, props.tabs.length)));
    const lengthStyle = computed(
      () => tabsLength.value === 2 ? "nui-tabs-two-slots" : "nui-tabs-three-slots"
    );
    const activeValue = ref(
      props.modelValue ?? props.tabs[0]?.value
    );
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
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-tab-slider", [
          props.justify && justifyStyle[props.justify],
          unref(shape) && shapeStyle[unref(shape)],
          sizeStyle[props.size],
          unref(lengthStyle)
        ]]
      }, _attrs))}><div class="nui-tab-slider-inner"><div class="nui-tab-slider-track"><!--[-->`);
      ssrRenderList(_ctx.tabs.slice(0, unref(tabsLength)), (tab, index) => {
        _push(`<button type="button" class="${ssrRenderClass([[unref(activeValue) === tab.value && "nui-active"], "nui-tab-slider-item"])}">${ssrInterpolate(tab?.label ?? tab?.value)}</button>`);
      });
      _push(`<!--]--><div style="${ssrRenderStyle(unref(activeValue) ? null : { display: "none" })}" class="nui-tab-slider-naver"></div></div></div><div class="nui-tab-content">`);
      ssrRenderSlot(_ctx.$slots, "default", { activeValue: unref(activeValue) }, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/base/BaseTabSlider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=BaseTabSlider-c60a6176.mjs.map
