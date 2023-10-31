import { _ as _sfc_main$p, b as _sfc_main$o } from '../server.mjs';
import { defineComponent, useSlots, computed, mergeProps, unref, withCtx, renderSlot, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseListItem",
  __ssrInlineRender: true,
  props: {
    title: {},
    subtitle: {}
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const hasTitle = computed(() => {
      return Boolean(props.title || "title" in slots);
    });
    const hasSubtitle = computed(() => {
      return Boolean(props.subtitle || "subtitle" in slots);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      _push(`<li${ssrRenderAttrs(mergeProps({ class: "nui-list-item" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      if (unref(hasTitle) || unref(hasSubtitle)) {
        _push(`<div>`);
        if (unref(hasTitle)) {
          _push(ssrRenderComponent(_component_BaseHeading, {
            as: "h6",
            weight: "medium",
            size: "md",
            lead: "tight"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                  _push2(`${ssrInterpolate(props.title)}`);
                }, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, "title", {}, () => [
                    createTextVNode(toDisplayString(props.title), 1)
                  ])
                ];
              }
            }),
            _: 3
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(hasSubtitle)) {
          _push(ssrRenderComponent(_component_BaseParagraph, {
            size: "xs",
            class: "text-muted-500 dark:text-muted-400"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, "subtitle", {}, () => {
                  _push2(`${ssrInterpolate(props.subtitle)}`);
                }, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, "subtitle", {}, () => [
                    createTextVNode(toDisplayString(props.subtitle), 1)
                  ])
                ];
              }
            }),
            _: 3
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="ms-auto">`);
      ssrRenderSlot(_ctx.$slots, "end", {}, null, _push, _parent);
      _push(`</div></li>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/base/BaseListItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=BaseListItem-5f313c57.mjs.map
