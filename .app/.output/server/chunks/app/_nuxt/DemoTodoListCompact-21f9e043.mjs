import { _ as __nuxt_component_1 } from './BaseCheckboxAnimated-ecb67b13.mjs';
import { _ as _sfc_main$p, b as _sfc_main$o } from '../server.mjs';
import { defineComponent, ref, mergeProps, unref, isRef, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoTodoListCompact",
  __ssrInlineRender: true,
  props: {
    color: { default: "success" }
  },
  setup(__props) {
    const todos = [
      {
        id: 0,
        title: "Call Mr. Markstrom",
        description: "Review the project initial wireframes",
        completed: true
      },
      {
        id: 1,
        title: "Finish wireframes",
        description: "Make all requested changes and publish",
        completed: false
      },
      {
        id: 2,
        title: "Update timesheets",
        description: "Update all the team timesheets",
        completed: false
      },
      {
        id: 3,
        title: "Request payout",
        description: "Send project invoice to client",
        completed: false
      },
      {
        id: 4,
        title: "Approve components",
        description: "Review complete design system",
        completed: true
      }
    ];
    const tasks = ref(["Option 0", "Option 1", "Option 2"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCheckboxAnimated = __nuxt_component_1;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-2 space-y-6" }, _attrs))}><!--[-->`);
      ssrRenderList(todos, (task) => {
        _push(`<div class="flex items-center gap-3">`);
        _push(ssrRenderComponent(_component_BaseCheckboxAnimated, {
          modelValue: unref(tasks),
          "onUpdate:modelValue": ($event) => isRef(tasks) ? tasks.value = $event : null,
          color: "success",
          value: `Option ${task.id}`
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
              _push2(`<span${_scopeId}>${ssrInterpolate(task.title)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(task.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-muted-400"${_scopeId}>${ssrInterpolate(task.description)}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-muted-400" }, toDisplayString(task.description), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoTodoListCompact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=DemoTodoListCompact-21f9e043.mjs.map
