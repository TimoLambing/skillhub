import { m as useAppConfig, n as useVModel, o as useNinjaId, f as __nuxt_component_2, r as __nuxt_component_0$2 } from '../server.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref, isRef, computed } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'shiki-es';
import 'consola/core';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'hast-util-to-string';
import 'github-slugger';
import 'detab';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'unist-util-visit';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@vee-validate/zod';
import 'vee-validate';
import 'zod';
import '@headlessui/vue';
import '@vue/shared';
import 'chroma-js';
import 'tailwindcss/colors.js';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BaseInputFile",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: void 0 },
    id: { default: void 0 },
    shape: { default: void 0 },
    label: { default: void 0 },
    placeholder: { default: "Choose file" },
    icon: { default: void 0 },
    colorFocus: { type: Boolean },
    loading: { type: Boolean },
    size: { default: "md" },
    contrast: { default: "white" },
    error: { type: [String, Boolean], default: false },
    textValue: { type: Function, default: (fileList) => {
      if (!fileList?.item?.length) {
        return "No file chosen";
      }
      return fileList?.item.length === 1 ? fileList.item(0)?.name ?? "Invalid file selected" : `${fileList?.item?.length ?? 0} files selected`;
    } },
    classes: { default: () => ({}) }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const appConfig = useAppConfig();
    const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.input);
    const shapeStyle = {
      straight: "",
      rounded: "nui-input-rounded",
      smooth: "nui-input-smooth",
      curved: "nui-input-curved",
      full: "nui-input-full"
    };
    const sizeStyle = {
      sm: "nui-input-sm",
      md: "nui-input-md",
      lg: "nui-input-lg"
    };
    const contrastStyle = {
      white: "nui-input-white",
      "white-contrast": "nui-input-white-contrast"
    };
    const inputRef = ref();
    const value = useVModel(props, "modelValue", emits, {
      passive: true
    });
    const textValue = computed(() => {
      return props.textValue?.(value.value);
    });
    __expose({
      /**
       * The underlying HTMLInputElement element.
       */
      el: inputRef
    });
    const id = useNinjaId(() => props.id);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      const _component_BasePlaceload = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-input-file-regular", [
          contrastStyle[props.contrast],
          sizeStyle[props.size],
          unref(shape) && shapeStyle[unref(shape)],
          props.error && !props.loading && "nui-input-file-error",
          props.loading && "nui-input-file-loading",
          props.icon && "nui-has-icon",
          props.classes.wrapper
        ]]
      }, _attrs))}>`);
      if ("label" in _ctx.$slots || props.label) {
        _push(`<label${ssrRenderAttr("for", unref(id))} class="${ssrRenderClass([props.classes.label, "nui-input-file-label"])}">`);
        ssrRenderSlot(_ctx.$slots, "label", {}, () => {
          _push(`${ssrInterpolate(props.label)}`);
        }, _push, _parent);
        _push(`</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="nui-input-file-outer"><label tabindex="0"${ssrRenderAttr("for", unref(id))} class="${ssrRenderClass([[props.colorFocus && "nui-color-focus", props.classes.input], "nui-input-file-inner"])}"><div class="${ssrRenderClass([props.classes.text, "nui-input-file-addon"])}"><span class="text-xs">${ssrInterpolate(props.placeholder)}</span>`);
      ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
        if (props.icon) {
          _push(ssrRenderComponent(_component_Icon, {
            name: props.icon,
            class: props.classes.icon
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`</div><div class="nui-input-file-text">${ssrInterpolate(unref(textValue))}</div><input${ssrRenderAttrs(mergeProps({
        id: unref(id),
        ref_key: "inputRef",
        ref: inputRef,
        type: "file"
      }, _ctx.$attrs, { class: "hidden" }))}></label>`);
      if (props.loading) {
        _push(`<div class="nui-input-file-placeload">`);
        _push(ssrRenderComponent(_component_BasePlaceload, { class: "nui-placeload" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.error && typeof props.error === "string") {
        _push(`<span class="${ssrRenderClass([props.classes?.error, "nui-input-file-error-text"])}">${ssrInterpolate(props.error)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/form/BaseInputFile.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "shapes",
  __ssrInlineRender: true,
  setup(__props) {
    const first = ref(null);
    const second = ref(null);
    const third = ref(null);
    const fourth = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseInputFile = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-6 md:max-w-lg md:grid-cols-2" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseInputFile, {
        modelValue: unref(first),
        "onUpdate:modelValue": ($event) => isRef(first) ? first.value = $event : null,
        shape: "straight",
        label: "Straight input"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseInputFile, {
        modelValue: unref(second),
        "onUpdate:modelValue": ($event) => isRef(second) ? second.value = $event : null,
        shape: "rounded",
        label: "Rounded input"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseInputFile, {
        modelValue: unref(third),
        "onUpdate:modelValue": ($event) => isRef(third) ? third.value = $event : null,
        shape: "curved",
        label: "Curved input"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseInputFile, {
        modelValue: unref(fourth),
        "onUpdate:modelValue": ($event) => isRef(fourth) ? fourth.value = $event : null,
        shape: "full",
        label: "Full input"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/input-file/shapes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=shapes-dfe64ff2.mjs.map
