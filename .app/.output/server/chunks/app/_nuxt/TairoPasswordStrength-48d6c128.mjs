import { f as __nuxt_component_2 } from '../server.mjs';
import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TairoPasswordStrength",
  __ssrInlineRender: true,
  props: {
    value: { default: "" },
    minLength: { default: 8 },
    goodLength: { default: 20 }
  },
  setup(__props) {
    const props = __props;
    const hasUpperChar = computed(() => /[A-Z]/.test(props.value) ?? false);
    const hasLowerChar = computed(() => /[a-z]/.test(props.value) ?? false);
    const hasSpecialChar = computed(
      () => /[!"#$%&\'()*+,-.\/:;<=>?@[\\\]\^_`{\|}~]/.test(props.value) ?? false
    );
    const hasNumberChar = computed(() => /[0-9]/.test(props.value) ?? false);
    const hasMinLength = computed(
      () => props.value.length >= props.minLength
    );
    const hasGoodLength = computed(
      () => props.value.length >= props.goodLength
    );
    computed(() => {
      if (!hasMinLength.value) {
        return 0;
      }
      return Number(hasUpperChar.value) + Number(hasLowerChar.value) + Number(hasSpecialChar.value) + Number(hasNumberChar.value) + Number(hasMinLength.value) + Number(hasGoodLength.value);
    });
    const checks = computed(() => [
      {
        label: `Contains minimum ${props.minLength} characters`,
        valid: hasMinLength.value
      },
      {
        label: `Contains at least ${props.goodLength} characters`,
        valid: hasGoodLength.value
      },
      {
        label: "Contains lowercase characters",
        valid: hasLowerChar.value
      },
      {
        label: "Contains uppercase characters",
        valid: hasUpperChar.value
      },
      {
        label: "Contains numbers",
        valid: hasNumberChar.value
      },
      {
        label: "Contains special characters",
        valid: hasSpecialChar.value
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "group/password-strength relative cursor-pointer" }, _attrs))}><div class="border-muted-200 dark:border-muted-700 shadow-muted-300/30 dark:shadow-muted-800/20 dark:bg-muted-800 pointer-events-none absolute left-0 top-4 z-20 rounded-lg border bg-white p-6 opacity-0 shadow-xl transition-opacity duration-300 group-hover/password-strength:pointer-events-auto group-hover/password-strength:opacity-100"><ul class="flex flex-col gap-4"><!--[-->`);
      ssrRenderList(unref(checks), (check) => {
        _push(`<li class="flex items-center justify-between gap-6"><span class="${ssrRenderClass([[
          !check.valid && "dark:text-slate-350 font-semibold",
          check.valid && "dark:text-slate-200"
        ], "grow text-xs dark:text-slate-400"])}">${ssrInterpolate(check.label)}</span><span class="w-7">`);
        if (check.valid) {
          _push(ssrRenderComponent(_component_Icon, {
            name: "ion:checkmark-circle-outline",
            class: "text-success-400 dark:text-success-500 h-4 w-4"
          }, null, _parent));
        } else {
          _push(ssrRenderComponent(_component_Icon, {
            name: "ion:close-circle-outline",
            class: "text-danger-400 dark:text-danger-500 h-4 w-4"
          }, null, _parent));
        }
        _push(`</span></li>`);
      });
      _push(`<!--]--></ul></div><div class="-mx-1 flex"><!--[-->`);
      ssrRenderList(unref(checks), (check) => {
        _push(`<div class="w-1/5 px-1"><div class="${ssrRenderClass([check.valid ? "bg-success-500" : "bg-danger-500", "h-2 rounded-xl transition-colors"])}"${ssrRenderAttr("data-nui-tooltip", check.label.replace("Contains", ""))}></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo/components/TairoPasswordStrength.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=TairoPasswordStrength-48d6c128.mjs.map
