import { _ as _sfc_main$1 } from './DemoWizardStepTitle-e1abeb8e.mjs';
import { _ as _sfc_main$2 } from './BaseCheckboxHeadless-bbfe0dde.mjs';
import { H as useHead, j as _sfc_main$C } from '../server.mjs';
import { defineComponent, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { u as useMultiStepForm } from './multi-step-form-008d1760.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
import 'fast-copy';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "step-6",
  __ssrInlineRender: true,
  setup(__props) {
    const { data: project } = useMultiStepForm();
    useHead({
      title: "Project tools"
    });
    const tools = [
      {
        name: "Illustrator",
        description: "Design Software",
        logo: "/img/logos/tools/illustrator.svg"
      },
      {
        name: "Photoshop",
        description: "Design Software",
        logo: "/img/logos/tools/photoshop.svg"
      },
      {
        name: "Adobe XD",
        description: "Design Software",
        logo: "/img/logos/tools/xd.svg"
      },
      {
        name: "Figma",
        description: "Design Software",
        logo: "/img/logos/tools/xd.svg"
      },
      {
        name: "Invision",
        description: "Design Software",
        logo: "/img/logos/tools/invision.svg"
      },
      {
        name: "Jira",
        description: "Issue Tracker",
        logo: "/img/logos/tools/jira.svg"
      },
      {
        name: "Taiga",
        description: "Scrumboard",
        logo: "/img/logos/tools/taiga.svg"
      },
      {
        name: "Slack",
        description: "Messaging App",
        logo: "/img/logos/tools/slack.svg"
      },
      {
        name: "Asana",
        description: "Task Manager",
        logo: "/img/logos/tools/asana.svg"
      },
      {
        name: "Teamwork",
        description: "Collaborative App",
        logo: "/img/logos/tools/teamwork.svg"
      },
      {
        name: "GitHub",
        description: "Code Repository",
        logo: "/img/logos/tools/github.svg"
      },
      {
        name: "Gitlab",
        description: "Code Repository",
        logo: "/img/logos/tools/gitlab.svg"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DemoWizardStepTitle = _sfc_main$1;
      const _component_BaseCheckboxHeadless = _sfc_main$2;
      const _component_BaseCard = _sfc_main$C;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_DemoWizardStepTitle, null, null, _parent));
      _push(`<div class="mx-auto grid max-w-4xl gap-4 px-4 sm:grid-cols-3"><!--[-->`);
      ssrRenderList(tools, (tool) => {
        _push(`<div class="relative">`);
        _push(ssrRenderComponent(_component_BaseCheckboxHeadless, {
          modelValue: unref(project).tools,
          "onUpdate:modelValue": ($event) => unref(project).tools = $event,
          value: tool,
          name: tool.name
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseCard, {
                shape: "curved",
                class: "peer-checked:border-primary-500 peer-checked:shadow-muted-300/30 dark:peer-checked:shadow-muted-900/30 p-4 peer-checked:shadow-xl"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-center gap-3"${_scopeId2}><img${ssrRenderAttr("src", tool.logo)} class="h-8 w-8"${_scopeId2}><div${_scopeId2}><div class="text-muted-800 dark:text-muted-100 text-sm font-medium"${_scopeId2}>${ssrInterpolate(tool.name)}</div><div class="text-muted-400 text-xs"${_scopeId2}>${ssrInterpolate(tool.description)}</div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center gap-3" }, [
                        createVNode("img", {
                          src: tool.logo,
                          class: "h-8 w-8"
                        }, null, 8, ["src"]),
                        createVNode("div", null, [
                          createVNode("div", { class: "text-muted-800 dark:text-muted-100 text-sm font-medium" }, toDisplayString(tool.name), 1),
                          createVNode("div", { class: "text-muted-400 text-xs" }, toDisplayString(tool.description), 1)
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseCard, {
                  shape: "curved",
                  class: "peer-checked:border-primary-500 peer-checked:shadow-muted-300/30 dark:peer-checked:shadow-muted-900/30 p-4 peer-checked:shadow-xl"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex items-center gap-3" }, [
                      createVNode("img", {
                        src: tool.logo,
                        class: "h-8 w-8"
                      }, null, 8, ["src"]),
                      createVNode("div", null, [
                        createVNode("div", { class: "text-muted-800 dark:text-muted-100 text-sm font-medium" }, toDisplayString(tool.name), 1),
                        createVNode("div", { class: "text-muted-400 text-xs" }, toDisplayString(tool.description), 1)
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/wizard/step-6.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=step-6-c92f3fa1.mjs.map
