import { useSSRContext, defineComponent, computed, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { l as _export_sfc } from '../server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseProgressCircle",
  __ssrInlineRender: true,
  props: {
    value: { default: 0 },
    max: { default: 100 },
    size: { default: 60 },
    thickness: { default: 4 }
  },
  setup(__props) {
    const props = __props;
    const value = computed(() => {
      const { value: value2, max } = props;
      if (max === 0) {
        return 0;
      }
      return value2 / max * 100;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        role: "progressbar",
        "aria-valuenow": unref(value),
        "aria-valuemax": props.max,
        class: "block",
        viewBox: "0 0 45 45",
        width: props.size,
        height: props.size
      }, _attrs))} data-v-43432c5e><circle class="text-muted-200 dark:text-muted-700 stroke-current"${ssrRenderAttr("stroke-width", props.thickness)} fill="none" cx="50%" cy="50%" r="15.91549431" data-v-43432c5e></circle><circle class="stroke-current transition-all duration-500"${ssrRenderAttr("stroke-width", props.thickness)}${ssrRenderAttr("stroke-dasharray", `${unref(value)},100`)} stroke-linecap="round" fill="none" cx="50%" cy="50%" r="15.91549431" data-v-43432c5e></circle></svg>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/base/BaseProgressCircle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-43432c5e"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=BaseProgressCircle-f74c4642.mjs.map
