import { computed, ref } from 'vue';
import { I as toRef } from '../server.mjs';

const previewMap = /* @__PURE__ */ new WeakMap();
function useNinjaFilePreview(_file) {
  const fileReference = toRef(_file);
  const preview = computed(() => {
    const file = fileReference.value;
    if (!file)
      return "";
    if (previewMap.has(file))
      return previewMap.get(file)?.value;
    const reader = new FileReader();
    const source = ref("");
    const listener = () => {
      source.value = reader.result?.toString() ?? "";
      reader.removeEventListener("load", listener);
    };
    reader.addEventListener("load", listener);
    reader.readAsDataURL(file);
    previewMap.set(file, source);
    return previewMap.get(file)?.value;
  });
  return preview;
}

export { useNinjaFilePreview as u };
//# sourceMappingURL=file-preview-7bd14b92.mjs.map
