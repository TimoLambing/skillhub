import { _ as _sfc_main$1 } from './BaseIconBox-642fe941.mjs';
import { f as __nuxt_component_2, s as _sfc_main$E, _ as _sfc_main$p, i as _sfc_main$D, e as __nuxt_component_0$5 } from '../server.mjs';
import { defineComponent, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TairoPopoverContentDual",
  __ssrInlineRender: true,
  props: {
    stats: {},
    image: {},
    title: {},
    subtitle: {},
    footerTitle: {},
    footerText: {},
    linkLabel: {},
    to: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseIconBox = _sfc_main$1;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseText = _sfc_main$D;
      const _component_NuxtLink = __nuxt_component_0$5;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex items-center"><div class="flex w-1/2 flex-col gap-1 p-2"><!--[-->`);
      ssrRenderList(props.stats.slice(0, 2), (stat, index) => {
        _push(`<div class="relative flex w-full rounded-lg px-1 py-2">`);
        if (stat.icon && !stat.image) {
          _push(ssrRenderComponent(_component_BaseIconBox, {
            size: "xs",
            class: "bg-primary-100 text-primary-500 dark:bg-primary-600 me-2 dark:text-white"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: stat.icon,
                  class: "h-4 w-4"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: stat.icon,
                    class: "h-4 w-4"
                  }, null, 8, ["name"])
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (stat.image && !stat.icon) {
          _push(ssrRenderComponent(_component_BaseAvatar, {
            src: stat.image,
            size: "xs",
            class: "me-2"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div>`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h4",
          size: "xs",
          weight: "semibold",
          lead: "tight",
          class: "text-muted-800 dark:text-white"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(stat.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(stat.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_BaseText, {
          size: "xs",
          class: "text-muted-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(stat.subtitle)}`);
            } else {
              return [
                createTextVNode(toDisplayString(stat.subtitle), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div><div class="flex w-1/2 items-center justify-center"><div class="flex flex-col items-center gap-2 py-5 text-center">`);
      _push(ssrRenderComponent(_component_BaseAvatar, {
        src: props.image,
        size: "lg",
        class: "mx-auto !block"
      }, null, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h4",
        size: "xs",
        weight: "semibold",
        lead: "tight",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(props.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(props.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseText, {
        size: "xs",
        class: "text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(props.subtitle)}`);
          } else {
            return [
              createTextVNode(toDisplayString(props.subtitle), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: props.to,
        class: "bg-muted-100 dark:bg-muted-800 group flex items-center justify-between rounded-b-lg p-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flow-root rounded-md transition duration-150 ease-in-out focus:outline-none"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "xs",
              weight: "semibold",
              class: "text-muted-800 dark:text-white",
              lead: "tight"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(props.footerTitle)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(props.footerTitle), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(props.footerText)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(props.footerText), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><span class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "text-primary-500 me-1 font-sans text-sm font-medium underline-offset-4 transition-colors hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(props.linkLabel)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(props.linkLabel), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</span>`);
          } else {
            return [
              createVNode("div", { class: "flow-root rounded-md transition duration-150 ease-in-out focus:outline-none" }, [
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "xs",
                  weight: "semibold",
                  class: "text-muted-800 dark:text-white",
                  lead: "tight"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(props.footerTitle), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseText, {
                  size: "xs",
                  class: "text-muted-400"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(props.footerText), 1)
                  ]),
                  _: 1
                })
              ]),
              createVNode("span", { class: "flex items-center" }, [
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "text-primary-500 me-1 font-sans text-sm font-medium underline-offset-4 transition-colors hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(props.linkLabel), 1)
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo/components/TairoPopoverContentDual.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=TairoPopoverContentDual-ec51d2ed.mjs.map
