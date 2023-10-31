import { d as _sfc_main$x, O as _sfc_main$u, z as _sfc_main$F } from '../server.mjs';
import { defineComponent, ref, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "medium-tier",
  __ssrInlineRender: true,
  setup(__props) {
    const isModalLgOpen = ref(false);
    const isModalXlOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButton = _sfc_main$x;
      const _component_TairoModal = _sfc_main$u;
      const _component_BaseButtonClose = _sfc_main$F;
      _push(`<!--[--><div class="flex gap-x-2"><div class="flex items-end gap-4">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        onClick: ($event) => isModalLgOpen.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Large dialog`);
          } else {
            return [
              createTextVNode("Large dialog")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-end gap-4">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        onClick: ($event) => isModalXlOpen.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Xl dialog`);
          } else {
            return [
              createTextVNode("Xl dialog")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_TairoModal, {
        open: isModalLgOpen.value,
        size: "lg",
        onClose: ($event) => isModalLgOpen.value = false
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex w-full items-center justify-between p-4 md:p-6"${_scopeId}><h3 class="font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white"${_scopeId}> Large dialog </h3>`);
            _push2(ssrRenderComponent(_component_BaseButtonClose, {
              onClick: ($event) => isModalLgOpen.value = false
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex w-full items-center justify-between p-4 md:p-6" }, [
                createVNode("h3", { class: "font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white" }, " Large dialog "),
                createVNode(_component_BaseButtonClose, {
                  onClick: ($event) => isModalLgOpen.value = false
                }, null, 8, ["onClick"])
              ])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-4 md:p-6"${_scopeId}><div class="flex gap-x-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              onClick: ($event) => isModalLgOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Decline`);
                } else {
                  return [
                    createTextVNode("Decline")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "primary",
              flavor: "solid",
              onClick: ($event) => isModalLgOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Accept `);
                } else {
                  return [
                    createTextVNode(" Accept ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-4 md:p-6" }, [
                createVNode("div", { class: "flex gap-x-2" }, [
                  createVNode(_component_BaseButton, {
                    onClick: ($event) => isModalLgOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Decline")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_BaseButton, {
                    color: "primary",
                    flavor: "solid",
                    onClick: ($event) => isModalLgOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Accept ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-4 md:p-6"${_scopeId}><div class="mx-auto w-full max-w-xs text-center"${_scopeId}><div class="relative mx-auto mb-4 flex h-24 w-24"${_scopeId}><img src="https://media.cssninja.io/shuriken/avatars/13.svg" class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""${_scopeId}></div><h3 class="font-heading text-muted-800 text-lg font-medium leading-6 dark:text-white"${_scopeId}> New Invite </h3><p class="font-alt text-muted-500 dark:text-muted-400 text-sm leading-5"${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. </p></div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-4 md:p-6" }, [
                createVNode("div", { class: "mx-auto w-full max-w-xs text-center" }, [
                  createVNode("div", { class: "relative mx-auto mb-4 flex h-24 w-24" }, [
                    createVNode("img", {
                      src: "https://media.cssninja.io/shuriken/avatars/13.svg",
                      class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                      alt: ""
                    })
                  ]),
                  createVNode("h3", { class: "font-heading text-muted-800 text-lg font-medium leading-6 dark:text-white" }, " New Invite "),
                  createVNode("p", { class: "font-alt text-muted-500 dark:text-muted-400 text-sm leading-5" }, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_TairoModal, {
        open: isModalXlOpen.value,
        size: "xl",
        onClose: ($event) => isModalXlOpen.value = false
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex w-full items-center justify-between p-4 md:p-6"${_scopeId}><h3 class="font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white"${_scopeId}> Xl dialog </h3>`);
            _push2(ssrRenderComponent(_component_BaseButtonClose, {
              onClick: ($event) => isModalXlOpen.value = false
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex w-full items-center justify-between p-4 md:p-6" }, [
                createVNode("h3", { class: "font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white" }, " Xl dialog "),
                createVNode(_component_BaseButtonClose, {
                  onClick: ($event) => isModalXlOpen.value = false
                }, null, 8, ["onClick"])
              ])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-4 md:p-6"${_scopeId}><div class="flex gap-x-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              onClick: ($event) => isModalXlOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Decline`);
                } else {
                  return [
                    createTextVNode("Decline")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "primary",
              flavor: "solid",
              onClick: ($event) => isModalXlOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Accept `);
                } else {
                  return [
                    createTextVNode(" Accept ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-4 md:p-6" }, [
                createVNode("div", { class: "flex gap-x-2" }, [
                  createVNode(_component_BaseButton, {
                    onClick: ($event) => isModalXlOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Decline")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_BaseButton, {
                    color: "primary",
                    flavor: "solid",
                    onClick: ($event) => isModalXlOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Accept ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-4 md:p-6"${_scopeId}><div class="mx-auto w-full max-w-xs text-center"${_scopeId}><div class="relative mx-auto mb-4 flex h-24 w-24"${_scopeId}><img src="https://media.cssninja.io/shuriken/avatars/17.svg" class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""${_scopeId}></div><h3 class="font-heading text-muted-800 text-lg font-medium leading-6 dark:text-white"${_scopeId}> New Invite </h3><p class="font-alt text-muted-500 dark:text-muted-400 text-sm leading-5"${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. </p></div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-4 md:p-6" }, [
                createVNode("div", { class: "mx-auto w-full max-w-xs text-center" }, [
                  createVNode("div", { class: "relative mx-auto mb-4 flex h-24 w-24" }, [
                    createVNode("img", {
                      src: "https://media.cssninja.io/shuriken/avatars/17.svg",
                      class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                      alt: ""
                    })
                  ]),
                  createVNode("h3", { class: "font-heading text-muted-800 text-lg font-medium leading-6 dark:text-white" }, " New Invite "),
                  createVNode("p", { class: "font-alt text-muted-500 dark:text-muted-400 text-sm leading-5" }, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/modal/medium-tier.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=medium-tier-e5da8719.mjs.map
