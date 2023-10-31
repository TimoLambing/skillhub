import { C as useTailwindBreakpoints, e as __nuxt_component_0$5, f as __nuxt_component_2 } from '../server.mjs';
import __nuxt_component_0 from './TairoLogo-688db51d.mjs';
import _sfc_main$1 from './DemoAccountMenu-d8e8a032.mjs';
import { _ as __nuxt_component_4 } from './client-only-0428ba17.mjs';
import { defineComponent, ref, watch, nextTick, computed, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
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
import './2-942b7bb5.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "inbox",
  __ssrInlineRender: true,
  setup(__props) {
    ref();
    ref("");
    const { md } = useTailwindBreakpoints();
    const paneSize = ref(50);
    watch(md, async (isMd) => {
      await nextTick();
      if (isMd) {
        paneSize.value = 50;
      } else {
        paneSize.value = 100;
      }
    }, { immediate: true });
    const messages = [
      {
        id: 1,
        sender: {
          name: "Kendra Wilson",
          email: "kwilson@tairo.io",
          photo: "/img/avatars/10.svg"
        },
        title: "We need to review the project",
        abstract: "Lorem ipsum is a dummy text used by typographers and web designers.",
        content: "Hi Maya,/n I spoke with the rest of the team this morning. They want to do a full review of the current progress. Do you think you would be available this afternoon or tomorrow in the morning?. /n We specifically need to go through the hi-fidelity wireframes amd see how they fit with the different UX scenari we already have. When something matches, we need Larry to start working on more detailed designs./n Also, I thought we could introduce some new tools. Iam not that much into XD anymore and I would like the team to switch to Figma within the month. Do you think that would be possible or are we going to spend a lot again with accelarated training sessions? /n Best Regards, /n Kendra",
        attachments: [
          {
            name: "project.pdf",
            size: "2.5MB",
            type: "pdf"
          },
          {
            name: "project.zip",
            size: "2.5MB",
            type: "zip"
          }
        ],
        time: "1 hour ago"
      },
      {
        id: 2,
        sender: {
          name: "Hermann Mayer",
          email: "hermann@tairo.io",
          photo: "/img/avatars/16.svg"
        },
        title: "We need to review the project",
        abstract: "Lorem ipsum is a dummy text used by typographers and web designers.",
        content: "Hi Maya,/n I spoke with the rest of the team this morning. They want to do a full review of the current progress. Do you think you would be available this afternoon or tomorrow in the morning?. /n We specifically need to go through the hi-fidelity wireframes amd see how they fit with the different UX scenari we already have. When something matches, we need Larry to start working on more detailed designs./n Also, I thought we could introduce some new tools. Iam not that much into XD anymore and I would like the team to switch to Figma within the month. Do you think that would be possible or are we going to spend a lot again with accelarated training sessions? /n Best Regards, /n Hermann",
        attachments: [
          {
            name: "design.pdf",
            size: "8.5MB",
            type: "pdf"
          },
          {
            name: "design.ai",
            size: "14.5MB",
            type: "ai"
          }
        ],
        time: "4 hours ago"
      },
      {
        id: 3,
        sender: {
          name: "Clarissa Miller",
          email: "clarissa@tairo.io",
          photo: "/img/avatars/5.svg"
        },
        title: "How about having lunch together?",
        abstract: "Lorem ipsum is a dummy text used by typographers and web designers.",
        content: "Hi Maya,/n I spoke with the rest of the team this morning. They want to do a full review of the current progress. Do you think you would be available this afternoon or tomorrow in the morning?. /n We specifically need to go through the hi-fidelity wireframes amd see how they fit with the different UX scenari we already have. When something matches, we need Larry to start working on more detailed designs./n Also, I thought we could introduce some new tools. Iam not that much into XD anymore and I would like the team to switch to Figma within the month. Do you think that would be possible or are we going to spend a lot again with accelarated training sessions? /n Best Regards, /n Clarissa",
        attachments: [
          {
            name: "restaurants.pdf",
            size: "3.74MB",
            type: "pdf"
          }
        ],
        time: "5 hours ago"
      },
      {
        id: 4,
        sender: {
          name: "Eddy Bricks",
          email: "eddy@tairo.io",
          photo: "/img/avatars/8.svg"
        },
        title: "We should talk about the budget",
        abstract: "Lorem ipsum is a dummy text used by typographers and web designers.",
        content: "Hi Maya,/n I spoke with the rest of the team this morning. They want to do a full review of the current progress. Do you think you would be available this afternoon or tomorrow in the morning?. /n We specifically need to go through the hi-fidelity wireframes amd see how they fit with the different UX scenari we already have. When something matches, we need Larry to start working on more detailed designs./n Also, I thought we could introduce some new tools. Iam not that much into XD anymore and I would like the team to switch to Figma within the month. Do you think that would be possible or are we going to spend a lot again with accelarated training sessions? /n Best Regards, /n Eddy",
        attachments: [
          {
            name: "budget.pdf",
            size: "3.74MB",
            type: "pdf"
          },
          {
            name: "budget.xls",
            size: "175KB",
            type: "sheet"
          }
        ],
        time: "7 hours ago"
      },
      {
        id: 5,
        sender: {
          name: "Clark Smith",
          email: "clark@tairo.io",
          photo: "/img/avatars/3.svg"
        },
        title: "Latest feedback from the client",
        abstract: "Lorem ipsum is a dummy text used by typographers and web designers.",
        content: "Hi Maya,/n I spoke with the rest of the team this morning. They want to do a full review of the current progress. Do you think you would be available this afternoon or tomorrow in the morning?. /n We specifically need to go through the hi-fidelity wireframes amd see how they fit with the different UX scenari we already have. When something matches, we need Larry to start working on more detailed designs./n Also, I thought we could introduce some new tools. Iam not that much into XD anymore and I would like the team to switch to Figma within the month. Do you think that would be possible or are we going to spend a lot again with accelarated training sessions? /n Best Regards, /n Clark",
        attachments: [
          {
            name: "feedback.pdf",
            size: "3.74MB",
            type: "pdf"
          },
          {
            name: "feedback.docx",
            size: "175KB",
            type: "doc"
          }
        ],
        time: "Yesterday ago"
      }
    ];
    const activeMessage = ref(1);
    computed(() => {
      return messages.find((message) => message.id === activeMessage.value);
    });
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_TairoLogo = __nuxt_component_0;
      const _component_Icon = __nuxt_component_2;
      const _component_DemoAccountMenu = _sfc_main$1;
      const _component_ClientOnly = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-muted-100 dark:bg-muted-900 flex h-screen w-full overflow-hidden" }, _attrs))}><div class="border-muted-200 dark:border-muted-700/40 dark:bg-muted-800 flex w-20 flex-col items-center border-r bg-white">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboards",
        class: "flex h-16 w-16 items-center justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TairoLogo, { class: "text-primary-600 h-10" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TairoLogo, { class: "text-primary-600 h-10" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="relative flex h-full flex-col">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboards/inbox",
        class: "relative flex h-16 w-16 items-center justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-primary-500/10 text-primary-500 relative flex h-12 w-12 items-center justify-center rounded-xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:tray-duotone",
              class: "h-5 w-5"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "bg-primary-500/10 text-primary-500 relative flex h-12 w-12 items-center justify-center rounded-xl" }, [
                createVNode(_component_Icon, {
                  name: "ph:tray-duotone",
                  class: "h-5 w-5"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        href: "#",
        class: "relative flex h-16 w-16 items-center justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex h-12 w-12 items-center justify-center rounded-xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:bookmark-simple-duotone",
              class: "h-5 w-5"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex h-12 w-12 items-center justify-center rounded-xl" }, [
                createVNode(_component_Icon, {
                  name: "ph:bookmark-simple-duotone",
                  class: "h-5 w-5"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboards/calendar",
        class: "relative flex h-16 w-16 items-center justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex h-12 w-12 items-center justify-center rounded-xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:calendar-blank-duotone",
              class: "h-5 w-5"
            }, null, _parent2, _scopeId));
            _push2(`<span class="absolute -end-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-pink-600 font-sans text-xs text-white"${_scopeId}> 5 </span></div>`);
          } else {
            return [
              createVNode("div", { class: "bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex h-12 w-12 items-center justify-center rounded-xl" }, [
                createVNode(_component_Icon, {
                  name: "ph:calendar-blank-duotone",
                  class: "h-5 w-5"
                }),
                createVNode("span", { class: "absolute -end-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-pink-600 font-sans text-xs text-white" }, " 5 ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        href: "#",
        class: "relative flex h-16 w-16 items-center justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex h-12 w-12 items-center justify-center rounded-xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:folder-duotone",
              class: "h-5 w-5"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex h-12 w-12 items-center justify-center rounded-xl" }, [
                createVNode(_component_Icon, {
                  name: "ph:folder-duotone",
                  class: "h-5 w-5"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        href: "#",
        class: "relative flex h-16 w-16 items-center justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex h-12 w-12 items-center justify-center rounded-xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:trash-duotone",
              class: "h-5 w-5"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex h-12 w-12 items-center justify-center rounded-xl" }, [
                createVNode(_component_Icon, {
                  name: "ph:trash-duotone",
                  class: "h-5 w-5"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        href: "#",
        class: "relative flex h-16 w-16 items-center justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex h-12 w-12 items-center justify-center rounded-xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:gear-six-duotone",
              class: "h-5 w-5"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex h-12 w-12 items-center justify-center rounded-xl" }, [
                createVNode(_component_Icon, {
                  name: "ph:gear-six-duotone",
                  class: "h-5 w-5"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-auto flex flex-col items-center"><a href="#" class="relative flex h-16 w-16 items-center justify-center" title="Back"><div class="bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex h-12 w-12 items-center justify-center rounded-xl">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:arrow-left",
        class: "h-5 w-5"
      }, null, _parent));
      _push(`</div></a><button type="button" class="relative flex h-16 w-16 items-center justify-center"><div class="bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex h-12 w-12 items-center justify-center rounded-xl">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:plus",
        class: "h-5 w-5"
      }, null, _parent));
      _push(`</div></button><div class="relative flex h-16 w-16 items-center justify-center">`);
      _push(ssrRenderComponent(_component_DemoAccountMenu, null, null, _parent));
      _push(`</div></div></nav></div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/inbox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=inbox-16269ce0.mjs.map
