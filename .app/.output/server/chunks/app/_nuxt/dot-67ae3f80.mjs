import { _ as _sfc_main$1 } from './BaseBreadcrumb-54208987.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './BaseDropdownItem-864908ca.mjs';
import '../server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dot",
  __ssrInlineRender: true,
  setup(__props) {
    const demoBreadcrumbOne = [
      {
        label: "Home",
        hideLabel: false,
        icon: "lucide:home",
        to: "#"
      },
      {
        label: "Products",
        hideLabel: false,
        to: "#"
      },
      {
        label: "Laptops",
        hideLabel: false,
        to: "#"
      }
    ];
    const demoBreadcrumbTwo = [
      {
        label: "Home",
        hideLabel: false,
        icon: "lucide:home",
        to: "#"
      },
      {
        label: "Products",
        hideLabel: false,
        icon: "lucide:layout-grid",
        to: "#"
      },
      {
        label: "Laptops",
        hideLabel: false,
        icon: "lucide:laptop",
        to: "#"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseBreadcrumb = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseBreadcrumb, {
        items: demoBreadcrumbOne,
        separator: "dot"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseBreadcrumb, {
        items: demoBreadcrumbTwo,
        separator: "dot"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/breadcrumb/dot.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=dot-67ae3f80.mjs.map
