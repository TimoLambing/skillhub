import { s as _sfc_main$E, _ as _sfc_main$p, b as _sfc_main$o, f as __nuxt_component_2 } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseButtonIcon-6150946c.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoTeamListCompact",
  __ssrInlineRender: true,
  props: {
    actions: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const members = [
      {
        id: 0,
        firstName: "Clarke",
        lastName: "Smith",
        image: "/img/avatars/3.svg",
        text: "EC",
        role: "UI/UX designer"
      },
      {
        id: 1,
        firstName: "Sara",
        lastName: "Connor",
        image: void 0,
        text: "SC",
        role: "Frontend developer"
      },
      {
        id: 2,
        firstName: "Tara",
        lastName: "Svenson",
        image: "/img/avatars/4.svg",
        text: "TS",
        role: "Software architect"
      },
      {
        id: 3,
        firstName: "Naomi",
        lastName: "Liversky",
        image: void 0,
        text: "NL",
        role: "UI/UX designer"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseButtonIcon = _sfc_main$1;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-2 space-y-5" }, _attrs))}><!--[-->`);
      ssrRenderList(members, (member) => {
        _push(`<div class="flex items-center gap-3">`);
        _push(ssrRenderComponent(_component_BaseAvatar, {
          src: member.image,
          text: member.text,
          class: "bg-primary-100 dark:bg-primary-500/20 text-primary-500 shrink-0"
        }, null, _parent));
        _push(`<div>`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h4",
          size: "sm",
          weight: "light",
          lead: "tight",
          class: "text-muted-800 dark:text-white"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(member.firstName)} ${ssrInterpolate(member.lastName.slice(0, 1))}.</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(member.firstName) + " " + toDisplayString(member.lastName.slice(0, 1)) + ".", 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-muted-400"${_scopeId}>${ssrInterpolate(member.role)}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-muted-400" }, toDisplayString(member.role), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
        if (props.actions) {
          _push(`<div class="ms-auto flex items-center">`);
          _push(ssrRenderComponent(_component_BaseButtonIcon, {
            shape: "curved",
            muted: "",
            class: "scale-75"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "ph:phone-duotone",
                  class: "h-5 w-5"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: "ph:phone-duotone",
                    class: "h-5 w-5"
                  })
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(_component_BaseButtonIcon, {
            shape: "curved",
            muted: "",
            class: "scale-75"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "ph:video-camera-duotone",
                  class: "h-5 w-5"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: "ph:video-camera-duotone",
                    class: "h-5 w-5"
                  })
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoTeamListCompact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=DemoTeamListCompact-a2bffd9a.mjs.map
