import { defineComponent, h, useSSRContext } from 'vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    /**
     * If the list should be ordered.
     */
    ordered: {
      type: Boolean,
      default: false
    },
    /**
     * Force the list to be media.
     */
    media: {
      type: Boolean,
      default: void 0
    }
  },
  setup(props, { slots }) {
    return () => {
      const ordered = props.ordered ? "nui-list-ol" : "nui-list-ul";
      const children = slots.default?.();
      const hasMedia = props.media ?? children?.some((vnode) => {
        return typeof vnode.type !== "string";
      });
      return h(
        props.ordered ? "ol" : "ul",
        {
          class: [
            "nui-list",
            hasMedia && "nui-list-media",
            !hasMedia && `nui-list-base ${ordered}`
          ]
        },
        children
      );
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/base/BaseList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=BaseList-7a4c73f2.mjs.map
