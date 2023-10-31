import { _ as _sfc_main$p, b as _sfc_main$o, g as _sfc_main$z, f as __nuxt_component_2, s as _sfc_main$E } from '../server.mjs';
import { defineComponent, withCtx, createVNode, toDisplayString, useSSRContext, shallowRef, ref, computed, mergeProps, unref, isRef } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { _ as _sfc_main$3 } from './BaseButtonIcon-6150946c.mjs';
import { _ as __nuxt_component_0 } from './BaseProgressCircle-f74c4642.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DemoInfoBadges",
  __ssrInlineRender: true,
  props: {
    title: { default: void 0 },
    text: { default: void 0 },
    image: {},
    badgeSmall: { default: void 0 },
    badgeMedium: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="relative mb-4"><img class="mx-auto h-48 w-48 rounded-full"${ssrRenderAttr("src", props.image)}${ssrRenderAttr("alt", props.title)}><img class="dark:border-muted-800 absolute start-2 top-2 h-14 w-14 rounded-full border-2 border-white"${ssrRenderAttr("src", props.badgeSmall)}${ssrRenderAttr("alt", props.title)}><img class="dark:border-muted-800 absolute bottom-2 end-2 h-16 w-16 rounded-full border-2 border-white"${ssrRenderAttr("src", props.badgeMedium)}${ssrRenderAttr("alt", props.title)}></div><div class="text-center">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "md",
        weight: "medium",
        lead: "tight",
        class: "text-muted-800 mb-1 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(props.title)}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(props.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-400"${_scopeId}>${ssrInterpolate(props.text)}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-400" }, toDisplayString(props.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoInfoBadges.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DemoTeamSearchCompact",
  __ssrInlineRender: true,
  props: {
    shape: { default: "rounded" }
  },
  setup(__props) {
    const props = __props;
    const members = shallowRef([
      {
        id: 0,
        firstName: "Hermann",
        lastName: "Mayer",
        image: "/img/avatars/16.jpg",
        text: "HM",
        role: "Project manager"
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
        firstName: "Kendra",
        lastName: "Wilson",
        image: "/img/avatars/10.jpg",
        text: "KW",
        role: "Sales manager"
      },
      {
        id: 3,
        firstName: "John",
        lastName: "Baxter",
        image: "/img/avatars/11.jpg",
        text: "JB",
        role: "Team supervisor"
      },
      {
        id: 10,
        firstName: "Amelia",
        lastName: "Smith",
        image: "/img/avatars/12.jpg",
        text: "AS",
        role: "HR manager"
      }
    ]);
    const filter = ref("");
    const filteredMembers = computed(() => {
      if (!filter.value) {
        return members.value;
      }
      const filterRe = new RegExp(filter.value, "i");
      return members.value.filter((item) => {
        return [item.firstName, item.lastName, item.role].some(
          (item2) => item2.match(filterRe)
        );
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseInput = _sfc_main$z;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BaseButtonIcon = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-2 space-y-1" }, _attrs))}><div class="relative mb-4">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: unref(filter),
        "onUpdate:modelValue": ($event) => isRef(filter) ? filter.value = $event : null,
        icon: "lucide:search",
        placeholder: "Search for specialists...",
        shape: props.shape
      }, null, _parent));
      _push(`</div>`);
      if (unref(filteredMembers).length === 0) {
        _push(`<div><div class="flex flex-col items-center py-10 text-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "pepicons-print:person",
          class: "text-primary-500 h-10 w-10"
        }, null, _parent));
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h4",
          size: "md",
          weight: "medium",
          lead: "tight"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>No matching results</span>`);
            } else {
              return [
                createVNode("span", null, "No matching results")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, {
          size: "xs",
          class: "text-muted-400 mx-auto max-w-[240px]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}> Looks like we couldn&#39;t find any matchig results. Try different search terms. </span>`);
            } else {
              return [
                createVNode("span", null, " Looks like we couldn't find any matchig results. Try different search terms. ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<div><!--[-->`);
        ssrRenderList(unref(filteredMembers), (member) => {
          _push(`<div class="${ssrRenderClass([[
            props.shape === "rounded" ? "rounded-md" : "",
            props.shape === "curved" ? "rounded-xl" : "",
            props.shape === "full" ? "rounded-full" : ""
          ], "hover:bg-muted-100 focus-within:bg-muted-100 dark:hover:bg-muted-700/70 dark:focus-within:bg-muted-700/70 group flex items-center gap-3 p-2"])}">`);
          _push(ssrRenderComponent(_component_BaseAvatar, {
            src: member.image,
            text: member.text,
            size: "xs",
            class: "bg-primary-100 dark:bg-primary-500/20 text-primary-500 ms-1 shrink-0"
          }, null, _parent));
          _push(`<div>`);
          _push(ssrRenderComponent(_component_BaseHeading, {
            as: "h4",
            size: "xs",
            weight: "light",
            lead: "tight",
            class: "text-muted-800 dark:text-white"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span${_scopeId}>${ssrInterpolate(member.firstName)} ${ssrInterpolate(member.lastName.slice(0, 1))}. </span>`);
              } else {
                return [
                  createVNode("span", null, toDisplayString(member.firstName) + " " + toDisplayString(member.lastName.slice(0, 1)) + ". ", 1)
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
          _push(`</div><div class="ms-auto flex -translate-x-1 items-center opacity-0 transition-all duration-300 group-hover:translate-x-0 group-focus-within:translate-x-0 group-hover:opacity-100 group-focus-within:opacity-100">`);
          _push(ssrRenderComponent(_component_BaseButtonIcon, {
            to: "#",
            shape: props.shape,
            muted: "",
            class: "scale-75"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "lucide:arrow-right",
                  class: "h-4 w-4"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: "lucide:arrow-right",
                    class: "h-4 w-4"
                  })
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoTeamSearchCompact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoProgressCircle",
  __ssrInlineRender: true,
  props: {
    title: { default: void 0 },
    text: { default: void 0 },
    image: {},
    value: { default: 0 },
    shape: { default: "rounded" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseProgressCircle = __nuxt_component_0;
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center" }, _attrs))}><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseProgressCircle, {
        value: props.value,
        size: 140,
        max: 100,
        thickness: 1,
        class: "text-primary-500"
      }, null, _parent));
      _push(`<div class="absolute start-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2">`);
      _push(ssrRenderComponent(_component_BaseAvatar, {
        src: props.image,
        size: "lg"
      }, null, _parent));
      _push(`</div></div><div class="text-center">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "md",
        weight: "medium",
        lead: "tight",
        class: "text-muted-800 mb-1 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(props.title)}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(props.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-400"${_scopeId}>${ssrInterpolate(props.text)}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-400" }, toDisplayString(props.text), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoProgressCircle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$2 as _, _sfc_main$1 as a, _sfc_main as b };
//# sourceMappingURL=DemoProgressCircle-0aca5d1c.mjs.map
