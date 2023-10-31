import { defineComponent, ref, provide, reactive, mergeProps, unref, useSSRContext } from 'vue';
import { n as useVModel, o as useNinjaId } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { u as useNinjaFilePreview } from './file-preview-7bd14b92.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BaseInputFileHeadless",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: void 0 },
    id: { default: void 0 },
    filterFileDropped: { type: Function, default: () => true }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const inputRef = ref();
    const value = useVModel(props, "modelValue", emits, {
      passive: true
    });
    const id = useNinjaId(() => props.id);
    const previewMap = /* @__PURE__ */ new WeakMap();
    function open() {
      inputRef.value?.click();
    }
    function drop(event) {
      event.stopPropagation();
      event.preventDefault();
      const dt = event.dataTransfer;
      const filtered = new DataTransfer();
      if (inputRef.value && dt) {
        for (const file of dt.files) {
          if (props.filterFileDropped(file)) {
            filtered.items.add(file);
          }
        }
        inputRef.value.files = filtered.files;
        value.value = inputRef.value.files;
      }
    }
    function remove(file) {
      if (!file)
        return;
      if (!value.value)
        return;
      if (!inputRef.value)
        return;
      const filtered = new DataTransfer();
      if (previewMap.has(file)) {
        previewMap.delete(file);
      }
      for (const f of value.value) {
        if (f !== file) {
          filtered.items.add(f);
        }
      }
      inputRef.value.files = filtered.files;
      value.value = inputRef.value.files;
    }
    provide(
      "BaseInputFileHeadlessContext",
      reactive({
        el: inputRef,
        id,
        files: value,
        open,
        remove,
        preview: useNinjaFilePreview,
        drop
      })
    );
    __expose({
      /**
       * The underlying HTMLInputElement element.
       */
      el: inputRef,
      /**
       * The form input identifier.
       */
      id,
      /**
       * The model value of the file input.
       */
      files: value,
      /**
       * Opens the native file input selector.
       */
      open,
      /**
       * Removes a file from the input.
       */
      remove,
      /**
       * Returns the preview DataURL of a file.
       */
      preview: useNinjaFilePreview,
      /**
       * Handles the drop event.
       */
      drop
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "group/nui-file-headless relative" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {
        id: unref(id),
        el: unref(inputRef),
        files: unref(value),
        open,
        remove,
        preview: unref(useNinjaFilePreview),
        drop
      }, null, _push, _parent);
      _push(`<input${ssrRenderAttrs(mergeProps({
        id: unref(id),
        ref_key: "inputRef",
        ref: inputRef,
        type: "file"
      }, _ctx.$attrs, { class: "hidden" }))}></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/form/BaseInputFileHeadless.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=BaseInputFileHeadless-8d058758.mjs.map
