import { l as _export_sfc, _ as _sfc_main$p, e as __nuxt_component_0$5, b as _sfc_main$o } from '../server.mjs';
import { withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BaseHeading = _sfc_main$p;
  const _component_NuxtLink = __nuxt_component_0$5;
  const _component_BaseParagraph = _sfc_main$o;
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
        _push2(`<span${_scopeId}>Notifications</span>`);
      } else {
        return [
          createVNode("span", null, "Notifications")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div><ul class="space-y-3"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#",
    class: "group flex items-center justify-between"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BaseParagraph, { size: "sm" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<span class="text-muted-500 dark:text-muted-400 group-hover:text-primary-500 transition-colors duration-300"${_scopeId2}> Personal </span>`);
            } else {
              return [
                createVNode("span", { class: "text-muted-500 dark:text-muted-400 group-hover:text-primary-500 transition-colors duration-300" }, " Personal ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div class="bg-muted-200 dark:bg-muted-700 text-muted-500 dark:text-muted-200 flex h-7 w-7 items-center justify-center rounded-full text-xs"${_scopeId}><span${_scopeId}>12</span></div>`);
      } else {
        return [
          createVNode(_component_BaseParagraph, { size: "sm" }, {
            default: withCtx(() => [
              createVNode("span", { class: "text-muted-500 dark:text-muted-400 group-hover:text-primary-500 transition-colors duration-300" }, " Personal ")
            ]),
            _: 1
          }),
          createVNode("div", { class: "bg-muted-200 dark:bg-muted-700 text-muted-500 dark:text-muted-200 flex h-7 w-7 items-center justify-center rounded-full text-xs" }, [
            createVNode("span", null, "12")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#",
    class: "group flex items-center justify-between"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BaseParagraph, { size: "sm" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<span class="text-muted-500 dark:text-muted-400 group-hover:text-primary-500 transition-colors duration-300"${_scopeId2}> Business </span>`);
            } else {
              return [
                createVNode("span", { class: "text-muted-500 dark:text-muted-400 group-hover:text-primary-500 transition-colors duration-300" }, " Business ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div class="bg-muted-200 dark:bg-muted-700 text-muted-500 dark:text-muted-200 flex h-7 w-7 items-center justify-center rounded-full text-xs"${_scopeId}><span${_scopeId}>31</span></div>`);
      } else {
        return [
          createVNode(_component_BaseParagraph, { size: "sm" }, {
            default: withCtx(() => [
              createVNode("span", { class: "text-muted-500 dark:text-muted-400 group-hover:text-primary-500 transition-colors duration-300" }, " Business ")
            ]),
            _: 1
          }),
          createVNode("div", { class: "bg-muted-200 dark:bg-muted-700 text-muted-500 dark:text-muted-200 flex h-7 w-7 items-center justify-center rounded-full text-xs" }, [
            createVNode("span", null, "31")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#",
    class: "group flex items-center justify-between"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BaseParagraph, { size: "sm" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<span class="text-muted-500 dark:text-muted-400 group-hover:text-primary-500 transition-colors duration-300"${_scopeId2}> Family </span>`);
            } else {
              return [
                createVNode("span", { class: "text-muted-500 dark:text-muted-400 group-hover:text-primary-500 transition-colors duration-300" }, " Family ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div class="bg-muted-200 dark:bg-muted-700 text-muted-500 dark:text-muted-200 flex h-7 w-7 items-center justify-center rounded-full text-xs"${_scopeId}><span${_scopeId}>4</span></div>`);
      } else {
        return [
          createVNode(_component_BaseParagraph, { size: "sm" }, {
            default: withCtx(() => [
              createVNode("span", { class: "text-muted-500 dark:text-muted-400 group-hover:text-primary-500 transition-colors duration-300" }, " Family ")
            ]),
            _: 1
          }),
          createVNode("div", { class: "bg-muted-200 dark:bg-muted-700 text-muted-500 dark:text-muted-200 flex h-7 w-7 items-center justify-center rounded-full text-xs" }, [
            createVNode("span", null, "4")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoNotificationsCompact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_14 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_14 as _ };
//# sourceMappingURL=DemoNotificationsCompact-42a439db.mjs.map
