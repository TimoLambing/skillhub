import { a as useToaster, g as _sfc_main$z, d as _sfc_main$x } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseSelect-50588309.mjs';
import { _ as _sfc_main$2 } from './BaseCheckbox-45d3fdba.mjs';
import { defineComponent, reactive, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
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
import './IconChevronDown-af6375e6.mjs';
import './IconCheck-b31ac5c7.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "toaster",
  __ssrInlineRender: true,
  setup(__props) {
    const toast = reactive({
      title: "Success",
      message: `Message has been sent!`,
      color: "success",
      icon: "lucide:check",
      closable: true
    });
    const toaster = useToaster();
    const showToast = () => {
      toaster.show({
        title: toast.title,
        message: toast.message,
        color: toast.color,
        icon: toast.icon,
        closable: true
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseInput = _sfc_main$z;
      const _component_BaseSelect = _sfc_main$1;
      const _component_BaseCheckbox = _sfc_main$2;
      const _component_BaseButton = _sfc_main$x;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="max-w-md"><div class="grid grid-cols-12 gap-4"><div class="col-span-12 sm:col-span-6">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: unref(toast).title,
        "onUpdate:modelValue": ($event) => unref(toast).title = $event,
        label: "Title"
      }, null, _parent));
      _push(`</div><div class="col-span-12 sm:col-span-6">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: unref(toast).message,
        "onUpdate:modelValue": ($event) => unref(toast).message = $event,
        label: "Message"
      }, null, _parent));
      _push(`</div><div class="col-span-12 sm:col-span-6">`);
      _push(ssrRenderComponent(_component_BaseSelect, {
        modelValue: unref(toast).color,
        "onUpdate:modelValue": ($event) => unref(toast).color = $event,
        label: "Color"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<option value="primary"${_scopeId}>Primary</option><option value="success"${_scopeId}>Success</option><option value="info"${_scopeId}>Info</option><option value="warning"${_scopeId}>Warning</option><option value="danger"${_scopeId}>Danger</option><option value="muted"${_scopeId}>Muted</option>`);
          } else {
            return [
              createVNode("option", { value: "primary" }, "Primary"),
              createVNode("option", { value: "success" }, "Success"),
              createVNode("option", { value: "info" }, "Info"),
              createVNode("option", { value: "warning" }, "Warning"),
              createVNode("option", { value: "danger" }, "Danger"),
              createVNode("option", { value: "muted" }, "Muted")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-12 sm:col-span-6">`);
      _push(ssrRenderComponent(_component_BaseSelect, {
        modelValue: unref(toast).icon,
        "onUpdate:modelValue": ($event) => unref(toast).icon = $event,
        label: "Icon"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<option value="lucide:check"${_scopeId}>Check icon</option><option value="lucide:x"${_scopeId}>Close icon</option><option value="lucide:alert-triangle"${_scopeId}>Warning icon</option><option value="lucide:alert-octagon"${_scopeId}>Danger icon</option><option value="lucide:info"${_scopeId}>Info icon</option>`);
          } else {
            return [
              createVNode("option", { value: "lucide:check" }, "Check icon"),
              createVNode("option", { value: "lucide:x" }, "Close icon"),
              createVNode("option", { value: "lucide:alert-triangle" }, "Warning icon"),
              createVNode("option", { value: "lucide:alert-octagon" }, "Danger icon"),
              createVNode("option", { value: "lucide:info" }, "Info icon")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-12">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        modelValue: unref(toast).closable,
        "onUpdate:modelValue": ($event) => unref(toast).closable = $event,
        label: "Closeable toast?",
        color: "primary"
      }, null, _parent));
      _push(`</div><div class="col-span-12">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        class: "w-full",
        color: "primary",
        onClick: showToast
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Show Toaster`);
          } else {
            return [
              createTextVNode("Show Toaster")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/tairo/toaster.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=toaster-2e3699ff.mjs.map
