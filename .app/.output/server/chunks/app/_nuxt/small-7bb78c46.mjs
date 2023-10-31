import { _ as _sfc_main$1 } from './BaseAvatarGroup-6e7b4ecf.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "small",
  __ssrInlineRender: true,
  setup(__props) {
    const people = [
      {
        "data-nui-tooltip": "Clarissa Perez",
        src: "/img/avatars/19.svg"
      },
      {
        "data-nui-tooltip": "Aaaron Splatter",
        src: "/img/avatars/16.svg"
      },
      {
        "data-nui-tooltip": "Mike Miller",
        src: "/img/avatars/3.svg"
      },
      {
        "data-nui-tooltip": "Benedict Kessler",
        src: "/img/avatars/22.svg"
      },
      {
        "data-nui-tooltip": "Maya Rosselini",
        src: "/img/avatars/2.svg"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAvatarGroup = _sfc_main$1;
      _push(ssrRenderComponent(_component_BaseAvatarGroup, mergeProps({
        size: "sm",
        avatars: people
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/avatar-group/small.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=small-7bb78c46.mjs.map
