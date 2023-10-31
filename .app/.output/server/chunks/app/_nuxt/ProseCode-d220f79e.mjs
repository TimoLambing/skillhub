import { l as _export_sfc, V as useClipboard, f as __nuxt_component_2 } from '../server.mjs';
import { _ as __nuxt_component_0$1 } from './AddonMarkdownRemark-e2bad1bc.mjs';
import { useSSRContext, defineComponent, computed, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
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
import './BaseProse-1777d29c.mjs';
import './composables-f7cb2fae.mjs';
import 'rehype-sanitize';
import 'rehype-stringify';
import 'rehype-shikiji';

const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    code: {
      type: String,
      default: ""
    },
    language: {
      type: String,
      default: null
    },
    filename: {
      type: String,
      default: null
    },
    highlights: {
      type: Array,
      default: () => []
    },
    meta: {
      type: String,
      default: null
    }
  },
  setup: (props) => {
    const markdown = computed(() => {
      return `\`\`\`${props.language}
${props.code}\`\`\``;
    });
    const { copy, copied, isSupported } = useClipboard({
      source: () => props.code
    });
    return {
      markdown,
      copy,
      copied,
      isSupported
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_2;
  const _component_AddonMarkdownRemark = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "group/prose-code relative" }, _attrs))}>`);
  if (_ctx.filename || _ctx.isSupported) {
    _push(`<div class="${ssrRenderClass([[_ctx.filename && _ctx.isSupported ? "start-4 justify-between" : ""], "absolute end-4 top-2 flex items-center gap-1 text-xs opacity-40 transition-opacity duration-200 group-hover/prose-code:opacity-60 dark:group-hover/prose-code:opacity-80"])}">`);
    if (_ctx.filename) {
      _push(`<span>${ssrInterpolate(_ctx.filename)}</span>`);
    } else {
      _push(`<!---->`);
    }
    if (_ctx.isSupported) {
      _push(`<button type="button"${ssrRenderAttr("data-nui-tooltip", _ctx.copied ? "Copied!" : "Copy")} class="hover:text-muted-950 dark:hover:text-white">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:copy",
        class: "ml-1 inline-block h-3 w-3"
      }, null, _parent));
      _push(`</button>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_AddonMarkdownRemark, {
    source: _ctx.markdown,
    fullwidth: "",
    class: ["doc-markdown", [
      _ctx.filename && _ctx.isSupported ? "[&_.shiki]:pt-8" : "[&_.shiki]:!pe-10"
    ]],
    lines: false
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/components/content/ProseCode.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=ProseCode-d220f79e.mjs.map
