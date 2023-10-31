import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import __nuxt_component_0 from './TairoLogo-688db51d.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';

const _imports_0 = "" + publicAssetsURL("img/illustrations/card-chip.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoCreditCardReal",
  __ssrInlineRender: true,
  props: {
    name: { default: "\u2022\u2022\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022\u2022\u2022" },
    number: { default: "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022" },
    expiryYear: { default: "\u2022\u2022" },
    expiryMonth: { default: "\u2022\u2022" },
    cvc: { default: "\u2022\u2022\u2022" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoLogo = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark:bg-muted-900 border-muted-200 dark:border-muted-800 shadow-muted-400/10 dark:shadow-muted-800/10 relative mx-auto h-[200px] w-full max-w-[315px] rounded-xl border bg-white p-6 shadow-xl" }, _attrs))}><div class="flex h-full flex-col gap-3"><div class="flex items-center gap-2"><div class="bg-muted-200 dark:bg-muted-700 h-2 w-2 rounded-full"></div><span class="text-muted-400 font-sans text-sm"> Mastercard </span></div><div class="mt-auto space-y-1"><img class="mb-3 w-11"${ssrRenderAttr("src", _imports_0)} alt="Card chip" width="44" height="31"><div><h5 class="font-heading text-muted-500 text-sm" x-text="cardholder">${ssrInterpolate(props.name)}</h5></div><div><p class="font-heading text-muted-400 text-xs"><span>${ssrInterpolate(props.number)}</span></p></div><div class="font-heading text-muted-400 flex w-full items-center gap-2 text-xs"><div class="flex items-center gap-2"><span>EXP</span><span>${ssrInterpolate(props.expiryMonth)}/${ssrInterpolate(props.expiryYear)}</span></div><div class="flex items-center gap-2"><span>CVC</span><span>${ssrInterpolate(props.cvc)}</span></div></div></div></div><div class="absolute end-5 top-4 flex"><div class="-me-2 h-9 w-9 rounded-full bg-rose-500/60"></div><div class="relative z-10 -ms-2 h-9 w-9 rounded-full bg-yellow-500/60"></div></div><div class="absolute bottom-7 end-5 flex">`);
      _push(ssrRenderComponent(_component_TairoLogo, { class: "text-primary-500 h-10 w-10" }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoCreditCardReal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=DemoCreditCardReal-918e9ba9.mjs.map
