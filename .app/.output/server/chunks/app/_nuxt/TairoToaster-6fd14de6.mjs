import { a5 as useNinjaToasterState, a6 as useNinjaToasterProgress, j as _sfc_main$C, z as _sfc_main$F, f as __nuxt_component_2 } from '../server.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, createCommentVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "TairoToaster",
  __ssrInlineRender: true,
  props: {
    title: { default: void 0 },
    message: { default: void 0 },
    color: { default: "muted" },
    icon: { default: void 0 },
    closable: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const state = useNinjaToasterState();
    const { percent, closeIn, endAt } = useNinjaToasterProgress();
    const wrapperClasses = computed(() => {
      switch (props.color) {
        case "primary":
          return "dark:border-primary-800 border-primary-200";
        case "success":
          return "dark:border-success-800 border-success-200";
        case "danger":
          return "dark:border-danger-800 border-danger-200";
        case "warning":
          return "dark:border-warning-800 border-warning-200";
        case "info":
          return "dark:border-info-800 border-info-200";
        case "muted":
        default:
          return "dark:border-muted-800 border-muted-200";
      }
    });
    const progressClasses = computed(() => {
      switch (props.color) {
        case "primary":
          return "bg-primary-200 dark:bg-primary-900";
        case "success":
          return "bg-success-200 dark:bg-success-900";
        case "danger":
          return "bg-danger-200 dark:bg-danger-900";
        case "warning":
          return "bg-warning-200 dark:bg-warning-900";
        case "info":
          return "bg-info-200 dark:bg-info-900";
        case "muted":
        default:
          return "bg-muted-200 dark:bg-muted-900";
      }
    });
    const iconBgClasses = computed(() => {
      switch (props.color) {
        case "primary":
          return "bg-primary-50 dark:bg-primary-700";
        case "success":
          return "bg-success-50 dark:bg-success-700";
        case "danger":
          return "bg-danger-50 dark:bg-danger-700";
        case "warning":
          return "bg-warning-50 dark:bg-warning-700";
        case "info":
          return "bg-info-50 dark:bg-info-700";
        case "muted":
        default:
          return "bg-muted-50 dark:bg-muted-700";
      }
    });
    const iconClasses = computed(() => {
      switch (props.color) {
        case "primary":
          return "text-primary-400 dark:text-primary-50";
        case "success":
          return "text-success-400 dark:text-success-50";
        case "danger":
          return "text-danger-400 dark:text-danger-50";
        case "warning":
          return "text-warning-400 dark:text-warning-50";
        case "info":
          return "text-info-400 dark:text-info-50";
        case "muted":
        default:
          return "text-muted-400 dark:text-muted-50";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseButtonClose = _sfc_main$F;
      const _component_Icon = __nuxt_component_2;
      _push(ssrRenderComponent(_component_BaseCard, mergeProps({
        class: ["dark:bg-muted-900 pointer-events-auto relative z-[200] flex border bg-white shadow-md", unref(wrapperClasses)]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="absolute inset-x-0 bottom-0 h-1"${_scopeId}><div class="${ssrRenderClass([unref(progressClasses), "h-1 rounded-es-lg"])}" style="${ssrRenderStyle({
              width: `${unref(percent) * 100}%`
            })}"${_scopeId}></div></div>`);
            if (props.closable) {
              _push2(`<div class="absolute end-2 top-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonClose, {
                onClick: unref(state).close
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (props.icon) {
              _push2(`<div class="${ssrRenderClass([unref(iconBgClasses), "flex w-16 items-center justify-center rounded-s-lg"])}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: props.icon,
                class: ["h-6 w-6", unref(iconClasses)]
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="text-md min-w-[220px] max-w-xl py-4 pe-12 ps-8"${_scopeId}>`);
            if (props.title) {
              _push2(`<strong class="text-semibold font-heading maw-w-lg block truncate"${_scopeId}>${ssrInterpolate(props.title)}</strong>`);
            } else {
              _push2(`<!---->`);
            }
            if (props.message) {
              _push2(`<p class="text-muted-600 dark:text-muted-400 whitespace-pre-wrap"${_scopeId}>${ssrInterpolate(props.message)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "absolute inset-x-0 bottom-0 h-1" }, [
                createVNode("div", {
                  class: ["h-1 rounded-es-lg", unref(progressClasses)],
                  style: {
                    width: `${unref(percent) * 100}%`
                  }
                }, null, 6)
              ]),
              props.closable ? (openBlock(), createBlock("div", {
                key: 0,
                class: "absolute end-2 top-2"
              }, [
                createVNode(_component_BaseButtonClose, {
                  onClick: unref(state).close
                }, null, 8, ["onClick"])
              ])) : createCommentVNode("", true),
              props.icon ? (openBlock(), createBlock("div", {
                key: 1,
                class: ["flex w-16 items-center justify-center rounded-s-lg", unref(iconBgClasses)]
              }, [
                createVNode(_component_Icon, {
                  name: props.icon,
                  class: ["h-6 w-6", unref(iconClasses)]
                }, null, 8, ["name", "class"])
              ], 2)) : createCommentVNode("", true),
              createVNode("div", { class: "text-md min-w-[220px] max-w-xl py-4 pe-12 ps-8" }, [
                props.title ? (openBlock(), createBlock("strong", {
                  key: 0,
                  class: "text-semibold font-heading maw-w-lg block truncate"
                }, toDisplayString(props.title), 1)) : createCommentVNode("", true),
                props.message ? (openBlock(), createBlock("p", {
                  key: 1,
                  class: "text-muted-600 dark:text-muted-400 whitespace-pre-wrap"
                }, toDisplayString(props.message), 1)) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/TairoToaster.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=TairoToaster-6fd14de6.mjs.map
