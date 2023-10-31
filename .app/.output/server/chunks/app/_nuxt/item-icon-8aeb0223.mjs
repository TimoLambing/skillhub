import { _ as __nuxt_component_0 } from './BaseTreeSelect-e80fd19c.mjs';
import { _ as _sfc_main$1 } from './BaseTreeSelectItem-171a9c07.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
import './BaseCheckbox-45d3fdba.mjs';
import './IconCheck-b31ac5c7.mjs';
import './BaseIconBox-642fe941.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "item-icon",
  __ssrInlineRender: true,
  setup(__props) {
    const tree = [
      {
        item: {
          media: void 0,
          name: "General",
          text: void 0
        },
        open: true,
        children: [
          {
            item: {
              icon: "ph:cards-duotone",
              name: "Company",
              text: "Everything about the company"
            }
          },
          {
            item: {
              icon: "ph:buildings-duotone",
              name: "Company",
              text: "Select filial"
            },
            children: [
              {
                item: {
                  icon: "ph:buildings-duotone",
                  name: "Sub-Company 1",
                  text: "Everything about the company"
                }
              },
              {
                item: {
                  icon: "ph:buildings-duotone",
                  name: "Sub-Company 2",
                  text: "Everything about the company"
                }
              },
              {
                item: {
                  icon: "ph:buildings-duotone",
                  name: "Sub-Company 3",
                  text: "Everything about the company"
                }
              }
            ]
          },
          {
            item: {
              icon: "ph:suitcase-duotone",
              name: "Business",
              text: "Questions regarding business"
            },
            children: []
          }
        ]
      },
      {
        item: {
          icon: "ph:suitcase-duotone",
          name: "Business",
          text: "Questions regarding business"
        }
      },
      {
        item: {
          media: void 0,
          name: "Topics",
          text: void 0
        },
        children: [
          {
            item: {
              media: void 0,
              name: "Business",
              text: void 0
            },
            children: [
              {
                item: {
                  icon: "ph:rocket-duotone",
                  name: "Startups",
                  text: "Managing startups"
                }
              },
              {
                item: {
                  icon: "ph:robot-duotone",
                  name: "Products",
                  text: "Product lifecycles"
                }
              }
            ]
          },
          {
            item: {
              media: void 0,
              name: "Web Content",
              text: void 0
            },
            children: [
              {
                item: {
                  icon: "ph:pencil-duotone",
                  name: "Blogging",
                  text: "Tips & tricks about blogging",
                  children: []
                }
              },
              {
                item: {
                  icon: "ph:circles-four-duotone",
                  name: "Social media",
                  text: "Managing social media content"
                }
              }
            ]
          }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseTreeSelect = __nuxt_component_0;
      const _component_BaseTreeSelectItem = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:max-w-lg" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseTreeSelect, { children: tree }, {
        "item-label": withCtx(({ level, child, toggle }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseTreeSelectItem, {
              level,
              toggle,
              value: {
                name: child.item.name,
                text: child.item.text,
                icon: child.item.icon
              }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseTreeSelectItem, {
                level,
                toggle,
                value: {
                  name: child.item.name,
                  text: child.item.text,
                  icon: child.item.icon
                }
              }, null, 8, ["level", "toggle", "value"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/treeselect/item-icon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=item-icon-8aeb0223.mjs.map
