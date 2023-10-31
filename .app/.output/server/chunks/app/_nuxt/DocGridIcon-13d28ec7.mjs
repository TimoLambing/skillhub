import { j as _sfc_main$C, f as __nuxt_component_2, _ as _sfc_main$p, i as _sfc_main$D } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseIconBox-642fe941.mjs';
import { _ as _sfc_main$2 } from './BaseButtonIcon-6150946c.mjs';
import { defineComponent, computed, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { s as ssrRenderSlot } from './ssrSlot-c1fbcf0b.mjs';
import { r as renderSlot } from './slot-1dd7f161.mjs';
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
import './MDCSlot-9d8a19f8.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DocGridIcon",
  __ssrInlineRender: true,
  props: {
    name: {},
    color: {},
    to: {}
  },
  setup(__props) {
    const props = __props;
    const iconColor = computed(() => {
      switch (props.color) {
        case "success":
          return "bg-success-500/20 text-success-500";
        case "primary":
          return "bg-primary-500/20 text-primary-500";
        case "yellow":
          return "bg-yellow-500/20 text-yellow-500";
        case "orange":
          return "bg-orange-500/20 text-orange-500";
        case "sky":
          return "bg-sky-500/20 text-sky-500";
        case "pink":
          return "bg-pink-500/20 text-pink-500";
        case "lime":
          return "bg-lime-500/20 text-lime-500";
        case "blue":
          return "bg-blue-500/20 text-blue-500";
        default:
          return "bg-muted-500/20 text-muted-500";
      }
    });
    const isExternal = computed(() => {
      return props.to?.startsWith("http");
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseIconBox = _sfc_main$1;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseText = _sfc_main$D;
      const _component_BaseButtonIcon = _sfc_main$2;
      _push(ssrRenderComponent(_component_BaseCard, mergeProps({
        shape: "curved",
        class: "group/grid-icon flex items-center p-3"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (props.name) {
              _push2(ssrRenderComponent(_component_BaseIconBox, {
                size: "md",
                class: unref(iconColor)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: props.name,
                      class: "h-6 w-6"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: props.name,
                        class: "h-6 w-6"
                      }, null, 8, ["name"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="ms-3"${_scopeId}>`);
            if ("default" in _ctx.$slots) {
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "span",
                size: "sm",
                weight: "semibold",
                class: "text-muted-800 dark:text-white"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", { unwrap: "p" }, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default", { unwrap: "p" })
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if ("description" in _ctx.$slots) {
              _push2(ssrRenderComponent(_component_BaseText, {
                size: "xs",
                class: "text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "description", { unwrap: "p" }, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "description", { unwrap: "p" })
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (props.to) {
              _push2(`<div class="ms-auto flex -translate-x-1 items-center opacity-0 transition-all duration-300 group-focus-within/grid-icon:translate-x-0 group-focus-within/grid-icon:opacity-100 group-hover/grid-icon:translate-x-0 group-hover/grid-icon:opacity-100"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                to: props.to,
                target: unref(isExternal) ? "_blank" : void 0,
                rel: unref(isExternal) ? "noopener" : void 0,
                shape: "curved",
                muted: "",
                class: "scale-75"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:arrow-right",
                      class: "h-4 w-4"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:arrow-right",
                        class: "h-4 w-4"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              props.name ? (openBlock(), createBlock(_component_BaseIconBox, {
                key: 0,
                size: "md",
                class: unref(iconColor)
              }, {
                default: withCtx(() => [
                  createVNode(_component_Icon, {
                    name: props.name,
                    class: "h-6 w-6"
                  }, null, 8, ["name"])
                ]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("", true),
              createVNode("div", { class: "ms-3" }, [
                "default" in _ctx.$slots ? (openBlock(), createBlock(_component_BaseHeading, {
                  key: 0,
                  as: "span",
                  size: "sm",
                  weight: "semibold",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "default", { unwrap: "p" })
                  ]),
                  _: 3
                })) : createCommentVNode("", true),
                "description" in _ctx.$slots ? (openBlock(), createBlock(_component_BaseText, {
                  key: 1,
                  size: "xs",
                  class: "text-muted-400"
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "description", { unwrap: "p" })
                  ]),
                  _: 3
                })) : createCommentVNode("", true)
              ]),
              props.to ? (openBlock(), createBlock("div", {
                key: 1,
                class: "ms-auto flex -translate-x-1 items-center opacity-0 transition-all duration-300 group-focus-within/grid-icon:translate-x-0 group-focus-within/grid-icon:opacity-100 group-hover/grid-icon:translate-x-0 group-hover/grid-icon:opacity-100"
              }, [
                createVNode(_component_BaseButtonIcon, {
                  to: props.to,
                  target: unref(isExternal) ? "_blank" : void 0,
                  rel: unref(isExternal) ? "noopener" : void 0,
                  shape: "curved",
                  muted: "",
                  class: "scale-75"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-right",
                      class: "h-4 w-4"
                    })
                  ]),
                  _: 1
                }, 8, ["to", "target", "rel"])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/components/content/DocGridIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=DocGridIcon-13d28ec7.mjs.map
