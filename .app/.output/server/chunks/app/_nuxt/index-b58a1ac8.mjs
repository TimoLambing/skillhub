import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as _sfc_main$1 } from './DemoWizardStepTitle-e1abeb8e.mjs';
import { H as useHead, _ as _sfc_main$p, b as _sfc_main$o, d as _sfc_main$x, e as __nuxt_component_0$5 } from '../server.mjs';
import { defineComponent, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { u as useMultiStepForm } from './multi-step-form-008d1760.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import 'vue-bundle-renderer/runtime';
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
import 'devalue';
import '@unhead/ssr';
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
import 'fast-copy';

const _imports_0 = "" + publicAssetsURL("img/illustrations/wizard/design.svg");
const _imports_1 = "" + publicAssetsURL("img/illustrations/wizard/development.svg");
const _imports_2 = "" + publicAssetsURL("img/illustrations/wizard/marketing.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      getNextStep,
      data: project,
      goToStep
    } = useMultiStepForm();
    useHead({
      title: "Project type"
    });
    function onSelectType(type) {
      const next = getNextStep();
      if (next) {
        project.value.type = type;
        goToStep(next);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DemoWizardStepTitle = _sfc_main$1;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseButton = _sfc_main$x;
      const _component_NuxtLink = __nuxt_component_0$5;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_DemoWizardStepTitle, null, null, _parent));
      _push(`<div class="mx-auto w-full max-w-6xl px-4 text-center"><div class="ltablet:grid-cols-3 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"><div class="${ssrRenderClass([[
        unref(project).type === "design" ? "dark:bg-muted-800 shadow-muted-300/30 dark:shadow-muted-800/30 bg-white shadow-xl" : ""
      ], "dark:hover:bg-muted-800 hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 group rounded-2xl p-5 transition-all duration-300 hover:bg-white hover:shadow-xl"])}"><img class="rounded-2xl"${ssrRenderAttr("src", _imports_0)} alt="UI/UX design"><div class="my-4">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        tag: "h3",
        weight: "medium",
        size: "xl",
        class: "text-muted-800 dark:text-muted-100 mb-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>UI/UX design</span>`);
          } else {
            return [
              createVNode("span", null, "UI/UX design")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, { class: "text-muted-400" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}> UI/UX is done to improve interaction between the user and the product. </span>`);
          } else {
            return [
              createVNode("span", null, " UI/UX is done to improve interaction between the user and the product. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-5 flex flex-col items-center">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        to: unref(getNextStep)()?.to,
        color: "primary",
        shape: "curved",
        class: "w-36",
        onClick: () => onSelectType("design")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(unref(project).type === "design" ? "Selected" : "Continue")}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(unref(project).type === "design" ? "Selected" : "Continue"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-4 text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/wizard",
        class: "text-muted-400 hover:text-primary-500 font-sans text-[0.65rem] font-semibold uppercase opacity-0 transition-all duration-300 group-hover:opacity-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Learn More</span>`);
          } else {
            return [
              createVNode("span", null, "Learn More")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="${ssrRenderClass([[
        unref(project).type === "development" ? "dark:bg-muted-800 shadow-muted-300/30 dark:shadow-muted-800/30 bg-white shadow-xl" : ""
      ], "dark:hover:bg-muted-800 hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 group rounded-2xl p-5 transition-all duration-300 hover:bg-white hover:shadow-xl"])}"><img class="rounded-2xl"${ssrRenderAttr("src", _imports_1)} alt="Web Development"><div class="my-4">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        tag: "h3",
        weight: "medium",
        size: "xl",
        class: "text-muted-800 dark:text-muted-100 mb-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Web Development</span>`);
          } else {
            return [
              createVNode("span", null, "Web Development")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, { class: "text-muted-400" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}> A discipline that involves the creation of websites and web applications </span>`);
          } else {
            return [
              createVNode("span", null, " A discipline that involves the creation of websites and web applications ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-5 flex flex-col items-center">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        to: unref(getNextStep)()?.to,
        color: "primary",
        shape: "curved",
        class: "w-36",
        onClick: () => onSelectType("development")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(unref(project).type === "development" ? "Selected" : "Continue")}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(unref(project).type === "development" ? "Selected" : "Continue"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-4 text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/wizard",
        class: "text-muted-400 hover:text-primary-500 font-sans text-[0.65rem] font-semibold uppercase opacity-0 transition-all duration-300 group-hover:opacity-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Learn More</span>`);
          } else {
            return [
              createVNode("span", null, "Learn More")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="${ssrRenderClass([[
        unref(project).type === "marketing" ? "dark:bg-muted-800 shadow-muted-300/30 dark:shadow-muted-800/30 bg-white shadow-xl" : ""
      ], "dark:hover:bg-muted-800 hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 group rounded-2xl p-5 transition-all duration-300 hover:bg-white hover:shadow-xl"])}"><img class="rounded-2xl"${ssrRenderAttr("src", _imports_2)} alt="Web Development"><div class="my-4">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        tag: "h3",
        weight: "medium",
        size: "xl",
        class: "text-muted-800 dark:text-muted-100 mb-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Marketing</span>`);
          } else {
            return [
              createVNode("span", null, "Marketing")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, { class: "text-muted-400" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}> A discipline that involves the creation of promotional content </span>`);
          } else {
            return [
              createVNode("span", null, " A discipline that involves the creation of promotional content ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-5 flex flex-col items-center">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        to: unref(getNextStep)()?.to,
        color: "primary",
        shape: "curved",
        class: "w-36",
        onClick: () => onSelectType("marketing")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(unref(project).type === "marketing" ? "Selected" : "Continue")}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(unref(project).type === "marketing" ? "Selected" : "Continue"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-4 text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/wizard",
        class: "text-muted-400 hover:text-primary-500 font-sans text-[0.65rem] font-semibold uppercase opacity-0 transition-all duration-300 group-hover:opacity-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Learn More</span>`);
          } else {
            return [
              createVNode("span", null, "Learn More")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/wizard/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-b58a1ac8.mjs.map
