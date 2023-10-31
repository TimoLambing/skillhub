import { _ as _sfc_main$p, i as _sfc_main$D } from '../server.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TairoFormGroup",
  __ssrInlineRender: true,
  props: {
    label: { default: void 0 },
    sublabel: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseText = _sfc_main$D;
      _push(`<fieldset${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
      if (props.label || props.sublabel) {
        _push(`<legend class="mb-6">`);
        if (props.label) {
          _push(ssrRenderComponent(_component_BaseHeading, {
            tag: "h3",
            size: "md",
            weight: "medium",
            lead: "none"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(props.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(props.label), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (props.sublabel) {
          _push(ssrRenderComponent(_component_BaseText, {
            size: "xs",
            class: "text-muted-400"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(props.sublabel)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(props.sublabel), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</legend>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</fieldset>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo/components/TairoFormGroup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=TairoFormGroup-3552ebb0.mjs.map
