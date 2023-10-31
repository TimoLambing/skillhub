import { D as usePanels, d as _sfc_main$x } from '../server.mjs';
import { defineComponent, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
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
  __name: "task",
  __ssrInlineRender: true,
  setup(__props) {
    const { open } = usePanels();
    const task = {
      id: 0,
      name: "Create a new figma design for the new homepage elements",
      description: "We should have a collection of the most basic UI elements like buttons, badges and form elements. Then we should use these to create reusable section blocks that we can also use in other pages of the project.",
      completion: 100,
      status: 5,
      created: "2 days ago",
      assignee: {
        id: 27,
        src: "/img/avatars/24.svg",
        badge: "/img/stacks/illustrator.svg",
        role: "UI/UX Designer",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.",
        tooltip: "Carmen E.",
        text: "CE"
      },
      files: [
        {
          id: 0,
          name: "company-ux-guide.pdf",
          icon: "/img/icons/files/pdf.svg",
          size: "4.7MB",
          version: "1.5.2",
          uploaded: "2 weeks ago",
          author: {
            name: "Hermann M.",
            picture: "/img/avatars/16.svg"
          }
        },
        {
          id: 1,
          name: "project_sketches.ai",
          icon: "/img/icons/files/ai.svg",
          size: "8.9MB",
          version: "1.1.3",
          uploaded: "a week ago",
          author: {
            name: "Clarissa M.",
            picture: "/img/avatars/5.svg"
          }
        }
      ],
      checklist: [
        {
          text: "Create a set of button elements",
          done: true
        },
        {
          text: "Create a set of badge elements",
          done: true
        },
        {
          text: "Create a set of input elements",
          done: true
        },
        {
          text: "Create a set of checkbox elements",
          done: true
        },
        {
          text: "Create a set of card elements",
          done: true
        }
      ],
      comments: [
        {
          text: "I think buttons corners should be a little more rounded.",
          author: {
            name: "Marjory L.",
            picture: "/img/avatars/12.svg",
            posted: "2 days ago"
          }
        },
        {
          text: "Are you planning to add this as a global setting in the configuration file?",
          author: {
            name: "Kendra W.",
            picture: "/img/avatars/10.svg",
            posted: "2 days ago"
          }
        },
        {
          text: "Not sure about it yet. Still need to check this out with the engineering team",
          author: {
            name: "Marjory L.",
            picture: "/img/avatars/12.svg",
            posted: "2 days ago"
          }
        }
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButton = _sfc_main$x;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_BaseButton, {
        onClick: ($event) => unref(open)("task", { task })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Open Panel`);
          } else {
            return [
              createTextVNode("Open Panel")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/panel/task.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=task-bb60c2ae.mjs.map
