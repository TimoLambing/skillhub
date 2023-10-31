import { m as useAppConfig, s as _sfc_main$E, f as __nuxt_component_2, i as _sfc_main$D } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseIconBox-642fe941.mjs';
import { defineComponent, computed, mergeProps, unref, createVNode, resolveDynamicComponent, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderVNode, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseTreeSelectItem",
  __ssrInlineRender: true,
  props: {
    value: { default: () => ({}) },
    level: { default: 1 },
    toggle: { type: Function, default: void 0 },
    shape: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const shape = computed(
      () => props.shape ?? appConfig.nui?.defaultShapes?.autocompleteItem
    );
    const wrapperTag = computed(() => {
      if (!props.toggle) {
        return "div";
      }
      return "button";
    });
    const wrapperProps = computed(() => {
      if (!props.toggle) {
        return {};
      }
      return {
        type: "button",
        onClick: props.toggle,
        class: "nui-focus"
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BaseIconBox = _sfc_main$1;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseText = _sfc_main$D;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex items-center p-2 ps-0", [
          unref(shape) === "rounded" && "rounded-md",
          unref(shape) === "curved" && "rounded-lg",
          unref(shape) === "full" && "rounded-xl"
        ]]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(wrapperTag)), mergeProps({ class: "flex items-center" }, unref(wrapperProps)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (props.value.media && !props.value.icon) {
              _push2(ssrRenderComponent(_component_BaseAvatar, {
                src: props.value.media,
                size: "xs",
                class: "me-2"
              }, null, _parent2, _scopeId));
            } else if (props.value.icon && !props.value.media) {
              _push2(ssrRenderComponent(_component_BaseIconBox, {
                size: "xs",
                shape: "full"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: props.value.icon,
                      class: "h-4 w-4"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: props.value.icon,
                        class: "h-4 w-4"
                      }, null, 8, ["name"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex flex-col items-start"${_scopeId}><div class="text-muted-800 font-heading text-sm font-medium leading-none dark:text-white"${_scopeId}>${ssrInterpolate(props.value.name)}</div>`);
            if (_ctx.value.text) {
              _push2(ssrRenderComponent(_component_BaseText, {
                size: "xs",
                class: "text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(props.value.text)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(props.value.text), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              props.value.media && !props.value.icon ? (openBlock(), createBlock(_component_BaseAvatar, {
                key: 0,
                src: props.value.media,
                size: "xs",
                class: "me-2"
              }, null, 8, ["src"])) : props.value.icon && !props.value.media ? (openBlock(), createBlock(_component_BaseIconBox, {
                key: 1,
                size: "xs",
                shape: "full"
              }, {
                default: withCtx(() => [
                  createVNode(_component_Icon, {
                    name: props.value.icon,
                    class: "h-4 w-4"
                  }, null, 8, ["name"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode("div", { class: "flex flex-col items-start" }, [
                createVNode("div", { class: "text-muted-800 font-heading text-sm font-medium leading-none dark:text-white" }, toDisplayString(props.value.name), 1),
                _ctx.value.text ? (openBlock(), createBlock(_component_BaseText, {
                  key: 0,
                  size: "xs",
                  class: "text-muted-400"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(props.value.text), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }), _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/form/BaseTreeSelectItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=BaseTreeSelectItem-171a9c07.mjs.map
