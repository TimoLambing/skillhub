import { _ as _sfc_main$p, b as _sfc_main$o, e as __nuxt_component_0$5 } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseAvatarGroup-6e7b4ecf.mjs';
import { defineComponent, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoFollowersCompact",
  __ssrInlineRender: true,
  setup(__props) {
    const followers = [
      {
        "data-nui-tooltip": "Clarke Smith",
        src: "/img/avatars/3.jpg"
      },
      {
        "data-nui-tooltip": "John Rowner",
        src: "/img/avatars/6.jpg"
      },
      {
        "data-nui-tooltip": "Maggie Pitts",
        src: "/img/avatars/9.jpg"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseAvatarGroup = _sfc_main$1;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_NuxtLink = __nuxt_component_0$5;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-4 flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "sm",
        weight: "semibold",
        lead: "tight",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Followers</span>`);
          } else {
            return [
              createVNode("span", null, "Followers")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseAvatarGroup, {
        avatars: followers,
        size: "xs",
        limit: 3
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-400"${_scopeId}> Great News! `);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "text-primary-500 underline-offset-2 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Clarke `);
                } else {
                  return [
                    createTextVNode(" Clarke ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` , `);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "text-primary-500 underline-offset-2 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` John `);
                } else {
                  return [
                    createTextVNode(" John ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` and `);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "text-primary-500 underline-offset-2 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Maggie `);
                } else {
                  return [
                    createTextVNode(" Maggie ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` are now following you. Take some time to look at their profile. </span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-400" }, [
                createTextVNode(" Great News! "),
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "text-primary-500 underline-offset-2 hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Clarke ")
                  ]),
                  _: 1
                }),
                createTextVNode(" , "),
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "text-primary-500 underline-offset-2 hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" John ")
                  ]),
                  _: 1
                }),
                createTextVNode(" and "),
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "text-primary-500 underline-offset-2 hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Maggie ")
                  ]),
                  _: 1
                }),
                createTextVNode(" are now following you. Take some time to look at their profile. ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoFollowersCompact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=DemoFollowersCompact-7a652f68.mjs.map
