import { _ as __nuxt_component_0 } from './BaseTreeSelect-e80fd19c.mjs';
import { d as _sfc_main$x } from '../server.mjs';
import { defineComponent, ref, mergeProps, unref, isRef, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './BaseCheckbox-45d3fdba.mjs';
import './IconCheck-b31ac5c7.mjs';
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
  __name: "exposed",
  __ssrInlineRender: true,
  setup(__props) {
    const value = ref([]);
    const treeSelectRef = ref(null);
    function toggleAll() {
      treeSelectRef.value?.toggleChildrenSelection();
    }
    function unselectAll() {
      treeSelectRef.value?.unselectAllChildren();
    }
    function selectAll() {
      treeSelectRef.value?.selectAllChildren();
    }
    const tree = ref([
      {
        item: "Item 1",
        children: [
          {
            item: "Item 1.1"
          },
          {
            item: "Item 1.2"
          }
        ]
      },
      {
        item: "Item 2"
      },
      {
        item: "Item 3",
        open: true,
        children: [
          {
            item: "Item 3.0"
          },
          {
            item: "Item 3.1",
            open: true,
            children: [
              {
                item: "Item 3.1.1"
              },
              {
                item: "Item 3.1.2",
                open: true,
                children: []
              },
              {
                item: "Item 3.1.3"
              }
            ]
          },
          {
            item: "Item 3.2"
          },
          {
            item: "Item 3.3",
            children: []
          }
        ]
      },
      {
        item: "Item 4"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseTreeSelect = __nuxt_component_0;
      const _component_BaseButton = _sfc_main$x;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:max-w-lg" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseTreeSelect, {
        ref_key: "treeSelectRef",
        ref: treeSelectRef,
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        children: unref(tree),
        treeline: ""
      }, null, _parent));
      _push(`<div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_BaseButton, { onClick: toggleAll }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`toggle selection`);
          } else {
            return [
              createTextVNode("toggle selection")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButton, { onClick: selectAll }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`select all selection`);
          } else {
            return [
              createTextVNode("select all selection")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButton, { onClick: unselectAll }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`unselect all selection`);
          } else {
            return [
              createTextVNode("unselect all selection")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/treeselect/exposed.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=exposed-69aa1f9b.mjs.map
