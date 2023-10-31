import { s as _sfc_main$E, _ as _sfc_main$p, b as _sfc_main$o } from '../server.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoCommentListCompact",
  __ssrInlineRender: true,
  setup(__props) {
    const comments = [
      {
        id: 0,
        firstName: "Gary",
        lastName: "Splitman",
        image: "/img/avatars/18.svg",
        text: "GS",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter autem vobis placet. Quae duo sunt, unum facit."
      },
      {
        id: 1,
        firstName: "Mark",
        lastName: "Weinstein",
        image: "/img/avatars/14.svg",
        text: "MW",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter autem vobis placet."
      },
      {
        id: 2,
        firstName: "Clarissa",
        lastName: "M",
        image: "/img/avatars/5.svg",
        text: "CM",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter autem vobis placet. Quae duo sunt, unum facit."
      },
      {
        id: 3,
        firstName: "Eddy",
        lastName: "Flayer",
        image: "/img/avatars/8.svg",
        text: "EF",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter autem vobis placet. Quae duo sunt, unum facit."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-2 space-y-5" }, _attrs))}><!--[-->`);
      ssrRenderList(comments, (comment) => {
        _push(`<div class="flex gap-3">`);
        _push(ssrRenderComponent(_component_BaseAvatar, {
          src: comment.image,
          text: comment.text,
          size: "xs",
          shape: "straight",
          mask: "blob",
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
              _push2(`<span${_scopeId}>${ssrInterpolate(comment.firstName)} ${ssrInterpolate(comment.lastName.slice(0, 1))}. </span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(comment.firstName) + " " + toDisplayString(comment.lastName.slice(0, 1)) + ". ", 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-muted-400"${_scopeId}>${ssrInterpolate(comment.content)}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-muted-400" }, toDisplayString(comment.content), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoCommentListCompact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=DemoCommentListCompact-2988e3fb.mjs.map
