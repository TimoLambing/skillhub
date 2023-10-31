import { _ as _sfc_main$1 } from './TairoFormGroup-3552ebb0.mjs';
import { g as _sfc_main$z } from '../server.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, isRef, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "form-group",
  __ssrInlineRender: true,
  setup(__props) {
    const firstName = ref("");
    const lastName = ref("");
    const email = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoFormGroup = _sfc_main$1;
      const _component_BaseInput = _sfc_main$z;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-md" }, _attrs))}><form action="" method="POST">`);
      _push(ssrRenderComponent(_component_TairoFormGroup, {
        label: "Who are you?",
        sublabel: "Let us know your name"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-12 gap-3"${_scopeId}><div class="col-span-12 sm:col-span-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseInput, {
              modelValue: unref(firstName),
              "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
              label: "First Name",
              placeholder: "Ex: Emily"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-12 sm:col-span-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseInput, {
              modelValue: unref(lastName),
              "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
              label: "Last Name",
              placeholder: "Ex: Walters"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-12"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseInput, {
              modelValue: unref(email),
              "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
              label: "Email Address",
              placeholder: "Ex: emilywalters@gmail.com"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-12 gap-3" }, [
                createVNode("div", { class: "col-span-12 sm:col-span-6" }, [
                  createVNode(_component_BaseInput, {
                    modelValue: unref(firstName),
                    "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                    label: "First Name",
                    placeholder: "Ex: Emily"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "col-span-12 sm:col-span-6" }, [
                  createVNode(_component_BaseInput, {
                    modelValue: unref(lastName),
                    "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
                    label: "Last Name",
                    placeholder: "Ex: Walters"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "col-span-12" }, [
                  createVNode(_component_BaseInput, {
                    modelValue: unref(email),
                    "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                    label: "Email Address",
                    placeholder: "Ex: emilywalters@gmail.com"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/tairo/form-group.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=form-group-972b04b8.mjs.map
