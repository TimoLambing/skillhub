import { K as useAsyncData, L as queryContent, e as __nuxt_component_0$5, f as __nuxt_component_2 } from '../server.mjs';
import { defineComponent, withAsyncContext, computed, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "DocNav",
  __ssrInlineRender: true,
  props: {
    prev: {},
    next: {}
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("doc-page-nav", async () => {
      const prev = !props.prev ? Promise.resolve(null) : queryContent().where({
        _partial: false,
        _draft: false,
        _path: props.prev
      }).only(["_path", "title"]).findOne();
      const next = !props.next ? Promise.resolve(null) : queryContent().where({
        _partial: false,
        _draft: false,
        _path: props.next
      }).only(["_path", "title"]).findOne();
      return Promise.all([prev, next]);
    })), __temp = await __temp, __restore(), __temp);
    const nav = computed(() => {
      if (!data.value)
        return {};
      const [prev, next] = data.value;
      return {
        prev,
        next
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex" }, _attrs))}>`);
      if (unref(nav).prev) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(nav).prev._path,
          class: "text-muted-400 dark:text-muted-500 hover:text-muted-500 dark:hover:text-muted-400 group inline-flex items-center gap-6 text-sm transition-colors duration-100"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-left",
                class: "ms-2 h-5 w-5 transition-transform duration-100 group-hover:-translate-x-1"
              }, null, _parent2, _scopeId));
              _push2(`<span class="inline-flex flex-col gap-1"${_scopeId}><span class="font-sans text-sm leading-tight"${_scopeId}>Previous</span><span class="font-heading text-muted-500 dark:text-muted-400 group-hover:text-primary-500 dark:group-hover:text-primary-400 text-sm font-medium"${_scopeId}>${ssrInterpolate(unref(nav).prev.title)}</span></span>`);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "lucide:arrow-left",
                  class: "ms-2 h-5 w-5 transition-transform duration-100 group-hover:-translate-x-1"
                }),
                createVNode("span", { class: "inline-flex flex-col gap-1" }, [
                  createVNode("span", { class: "font-sans text-sm leading-tight" }, "Previous"),
                  createVNode("span", { class: "font-heading text-muted-500 dark:text-muted-400 group-hover:text-primary-500 dark:group-hover:text-primary-400 text-sm font-medium" }, toDisplayString(unref(nav).prev.title), 1)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="grow"></div>`);
      if (unref(nav).next) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(nav).next._path,
          class: "text-muted-400 dark:text-muted-500 hover:text-muted-500 dark:hover:text-muted-400 group inline-flex items-center gap-6 text-sm transition-colors duration-100"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="inline-flex flex-col gap-1 text-end"${_scopeId}><span class="font-sans text-sm leading-tight"${_scopeId}>Next</span><span class="font-heading text-muted-500 dark:text-muted-400 group-hover:text-primary-500 dark:group-hover:text-primary-400 text-sm font-medium"${_scopeId}>${ssrInterpolate(unref(nav).next.title)}</span></span>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-right",
                class: "me-2 h-5 w-5 transition-transform duration-100 group-hover:translate-x-1"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("span", { class: "inline-flex flex-col gap-1 text-end" }, [
                  createVNode("span", { class: "font-sans text-sm leading-tight" }, "Next"),
                  createVNode("span", { class: "font-heading text-muted-500 dark:text-muted-400 group-hover:text-primary-500 dark:group-hover:text-primary-400 text-sm font-medium" }, toDisplayString(unref(nav).next.title), 1)
                ]),
                createVNode(_component_Icon, {
                  name: "lucide:arrow-right",
                  class: "me-2 h-5 w-5 transition-transform duration-100 group-hover:translate-x-1"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/components/content/DocNav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=DocNav-d2756c6f.mjs.map
