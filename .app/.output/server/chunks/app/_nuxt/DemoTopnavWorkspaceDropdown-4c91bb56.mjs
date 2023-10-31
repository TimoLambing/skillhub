import { a2 as onClickOutside, s as _sfc_main$E, i as _sfc_main$D, f as __nuxt_component_2, g as _sfc_main$z, _ as _sfc_main$p, d as _sfc_main$x, b as _sfc_main$o } from '../server.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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
  __name: "DemoTopnavWorkspaceDropdown",
  __ssrInlineRender: true,
  setup(__props) {
    const workspaces = ref([
      {
        id: 1,
        name: "Nitro Inc.",
        logo: "/img/icons/logos/nitro.svg"
      },
      {
        id: 2,
        name: "Okano LLC",
        logo: "/img/icons/logos/okano.svg"
      },
      {
        id: 3,
        name: "Flashlite LLC",
        logo: "/img/icons/logos/flashlite.svg"
      }
    ]);
    const selectedWorkspace = ref(workspaces.value[0]);
    const target = ref(null);
    const open = ref(false);
    onClickOutside(target, () => open.value = false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BaseText = _sfc_main$D;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseInput = _sfc_main$z;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseButton = _sfc_main$x;
      const _component_BaseParagraph = _sfc_main$o;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "target",
        ref: target,
        class: "relative w-full z-10 group/workspace max-w-[170px] md:max-w-[240px] ms-auto md:ms-0"
      }, _attrs))}><button type="button" class="${ssrRenderClass([unref(open) && "bg-muted-100 dark:bg-muted-900/60", "w-full py-2 ps-2 pe-3 group-hover/workspace:bg-muted-100 dark:group-hover/workspace:bg-muted-900/60 rounded-xl max-w-[170px] md:max-w-[240px] transition-colors duration-300"])}"><span class="w-full flex items-center gap-3 text-start">`);
      _push(ssrRenderComponent(_component_BaseAvatar, {
        size: "xxs",
        src: unref(selectedWorkspace).logo
      }, null, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_BaseText, {
        size: "sm",
        class: "block text-muted-800 dark:text-muted-200 line-clamp-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(selectedWorkspace).name)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(selectedWorkspace).name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:chevrons-up-down",
        class: ["w-4 h-4 ms-auto text-muted-400 transition-transform duration-300", unref(open) && "rotate-180"]
      }, null, _parent));
      _push(`</span></button>`);
      if (unref(open)) {
        _push(`<div class="absolute overflow-hidden min-w-[280px] md:min-w-[575px] top-12 end-0 md:start-0 w-full rounded-xl border border-muted-200 dark:border-muted-800 bg-white dark:bg-muted-950 shadow-xl shadow-muted-400/10 dark:shadow-muted-800/10"><div class="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-muted-200 md:dark:divide-muted-700"><div><div class="flex items-center border-b border-muted-200 dark:border-muted-700">`);
        _push(ssrRenderComponent(_component_BaseInput, {
          icon: "lucide:search",
          placeholder: "Find a team...",
          classes: {
            input: "border-none !outline-none !bg-transparent"
          }
        }, null, _parent));
        _push(`<button type="button" class="px-2 py-1 rounded-lg border border-muted-200 dark:border-muted-700 ms-auto me-2">`);
        _push(ssrRenderComponent(_component_BaseText, { size: "xs" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Esc`);
            } else {
              return [
                createTextVNode("Esc")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</button></div><div class="p-3 flex flex-col h-[calc(100%_-_2.5rem)]">`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h4",
          size: "sm",
          weight: "medium",
          class: "text-muted-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Workspaces`);
            } else {
              return [
                createTextVNode("Workspaces")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="my-3"><ul class="space-y-1"><!--[-->`);
        ssrRenderList(unref(workspaces), (workspace) => {
          _push(`<li><button type="button" class="flex items-center gap-2 py-2 ps-2 pe-4 rounded-lg hover:bg-muted-100 dark:hover:bg-muted-800 w-full transition-colors duration-200">`);
          _push(ssrRenderComponent(_component_BaseAvatar, {
            size: "xxs",
            src: workspace.logo
          }, null, _parent));
          _push(ssrRenderComponent(_component_BaseText, { size: "sm" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(workspace.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(workspace.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          if (unref(selectedWorkspace) === workspace) {
            _push(ssrRenderComponent(_component_Icon, {
              name: "lucide:check",
              class: "w-4 h-4 text-primary-500 ms-auto"
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</button></li>`);
        });
        _push(`<!--]--></ul></div><div class="mt-auto">`);
        _push(ssrRenderComponent(_component_BaseButton, {
          shape: "smooth",
          class: "w-full"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:plus",
                class: "w-4 h-4"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>Create Workspace</span>`);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "lucide:plus",
                  class: "w-4 h-4"
                }),
                createVNode("span", null, "Create Workspace")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div><div class="hidden md:block"><div class="flex items-center border-b border-muted-200 dark:border-muted-700">`);
        _push(ssrRenderComponent(_component_BaseInput, {
          icon: "lucide:search",
          placeholder: "Find project...",
          classes: {
            input: "border-none !outline-none !bg-transparent"
          }
        }, null, _parent));
        _push(`<button type="button" class="px-2 py-1 rounded-lg border border-muted-200 dark:border-muted-700 ms-auto me-2">`);
        _push(ssrRenderComponent(_component_BaseText, { size: "xs" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Esc`);
            } else {
              return [
                createTextVNode("Esc")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</button></div><div class="p-3 flex flex-col h-[calc(100%_-_2.5rem)]">`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h4",
          size: "sm",
          weight: "medium",
          class: "text-muted-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Projects`);
            } else {
              return [
                createTextVNode("Projects")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="my-3"><ul><li><div>`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          size: "sm",
          weight: "medium"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`No projects yet`);
            } else {
              return [
                createTextVNode("No projects yet")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, {
          size: "xs",
          class: "text-muted-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`This workspace has no projects.`);
            } else {
              return [
                createTextVNode("This workspace has no projects.")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></li></ul></div><div class="mt-auto">`);
        _push(ssrRenderComponent(_component_BaseButton, {
          shape: "smooth",
          class: "w-full"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:plus",
                class: "w-4 h-4"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>Create Project</span>`);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "lucide:plus",
                  class: "w-4 h-4"
                }),
                createVNode("span", null, "Create Project")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/DemoTopnavWorkspaceDropdown.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=DemoTopnavWorkspaceDropdown-4c91bb56.mjs.map
