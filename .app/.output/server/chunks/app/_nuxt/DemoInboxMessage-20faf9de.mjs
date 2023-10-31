import { e as __nuxt_component_0$5, f as __nuxt_component_2, _ as _sfc_main$p, s as _sfc_main$E } from '../server.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './hobby-3-cc01f17f.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DemoVideoCompact",
  __ssrInlineRender: true,
  props: {
    shape: { default: "rounded" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseHeading = _sfc_main$p;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: "#",
        class: "group flex w-full gap-4"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative shrink-0"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} class="${ssrRenderClass([[
              props.shape === "rounded" ? "rounded" : "",
              props.shape === "curved" ? "rounded-lg" : ""
            ], "h-24 w-20 object-cover object-top"])}" alt="Widget image"${_scopeId}><div class="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"${_scopeId}><button type="button" class="border-primary-500 bg-primary-500 dark:group-hover:bg-muted-800 flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors duration-300 group-hover:bg-white"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ic:round-play-arrow",
              class: "group-hover:text-primary-500 h-5 w-5 text-white"
            }, null, _parent2, _scopeId));
            _push2(`</button></div></div><div class="flex flex-col"${_scopeId}><p class="text-primary-500 my-1 font-sans text-xs uppercase"${_scopeId}> Suggested Videos </p>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "sm",
              weight: "medium",
              lead: "tight"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>How to be efficient in Human Resource management</span>`);
                } else {
                  return [
                    createVNode("span", null, "How to be efficient in Human Resource management")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="text-muted-400 mt-auto flex items-center gap-2 font-sans text-xs"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:eye",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>3,862 views</span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative shrink-0" }, [
                createVNode("img", {
                  class: ["h-24 w-20 object-cover object-top", [
                    props.shape === "rounded" ? "rounded" : "",
                    props.shape === "curved" ? "rounded-lg" : ""
                  ]],
                  src: _imports_0,
                  alt: "Widget image"
                }, null, 2),
                createVNode("div", { class: "absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" }, [
                  createVNode("button", {
                    type: "button",
                    class: "border-primary-500 bg-primary-500 dark:group-hover:bg-muted-800 flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors duration-300 group-hover:bg-white"
                  }, [
                    createVNode(_component_Icon, {
                      name: "ic:round-play-arrow",
                      class: "group-hover:text-primary-500 h-5 w-5 text-white"
                    })
                  ])
                ])
              ]),
              createVNode("div", { class: "flex flex-col" }, [
                createVNode("p", { class: "text-primary-500 my-1 font-sans text-xs uppercase" }, " Suggested Videos "),
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "sm",
                  weight: "medium",
                  lead: "tight"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "How to be efficient in Human Resource management")
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "text-muted-400 mt-auto flex items-center gap-2 font-sans text-xs" }, [
                  createVNode(_component_Icon, {
                    name: "lucide:eye",
                    class: "h-4 w-4"
                  }),
                  createVNode("span", null, "3,862 views")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoVideoCompact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoInboxMessage",
  __ssrInlineRender: true,
  props: {
    shape: { default: "rounded" },
    name: { default: void 0 },
    picture: { default: void 0 },
    title: { default: void 0 },
    text: { default: void 0 },
    time: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$p;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseAvatar = _sfc_main$E;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-6 flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "md",
        weight: "semibold",
        lead: "tight",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Inbox</span>`);
          } else {
            return [
              createVNode("span", null, "Inbox")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="relative">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:mail",
        class: "text-muted-400 h-4 w-4"
      }, null, _parent));
      _push(`<div class="absolute -end-1 top-0.5"><span class="relative flex h-2 w-2"><span class="bg-primary-400 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span><span class="bg-primary-500 relative inline-flex h-2 w-2 rounded-full"></span></span></div></div></div><div class="mb-4 flex items-center gap-2">`);
      if (props.picture) {
        _push(ssrRenderComponent(_component_BaseAvatar, {
          src: props.picture,
          alt: props.name
        }, null, _parent));
      } else {
        _push(`<div class="bg-muted-100 dark:bg-muted-700/80 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:user-duotone",
          class: "text-muted-400 h-4 w-4"
        }, null, _parent));
        _push(`</div>`);
      }
      _push(`<span class="text-muted-500 dark:text-muted-400 font-sans text-sm"> Sent by <span class="text-muted-800 dark:text-muted-100">${ssrInterpolate(props.name)}</span></span></div><div class="${ssrRenderClass([[
        props.shape === "rounded" ? "rounded" : "",
        props.shape === "curved" ? "rounded-lg" : ""
      ], "border-muted-200 dark:border-muted-700 border p-3"])}"><div class="mb-4 flex items-center gap-2"><div class="bg-success-500 h-2 w-2 shrink-0 rounded-full"></div><h3 class="text-muted-800 dark:text-muted-100 font-sans text-sm">${ssrInterpolate(props.title)}</h3></div><div class="mb-2"><p class="text-muted-500 dark:text-muted-400 font-sans text-xs">${ssrInterpolate(props.text)}</p></div><p class="text-muted-400 font-sans text-xs">${ssrInterpolate(props.time)} ago</p></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoInboxMessage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$1 as _, _sfc_main as a };
//# sourceMappingURL=DemoInboxMessage-20faf9de.mjs.map
