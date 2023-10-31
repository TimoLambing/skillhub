import { j as _sfc_main$C, g as _sfc_main$z, d as _sfc_main$x, _ as _sfc_main$p, b as _sfc_main$o, f as __nuxt_component_2 } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseSelect-50588309.mjs';
import { _ as _sfc_main$2 } from './BaseCheckbox-45d3fdba.mjs';
import { _ as _sfc_main$3 } from './BaseTag-734af285.mjs';
import { _ as _sfc_main$4 } from './BaseAvatarGroup-6e7b4ecf.mjs';
import { defineComponent, ref, withCtx, unref, isRef, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
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
import './IconChevronDown-af6375e6.mjs';
import './IconCheck-b31ac5c7.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "jobs",
  __ssrInlineRender: true,
  setup(__props) {
    const search = ref("");
    const location = ref("");
    const alertKeyword = ref("");
    const selectedType = ref("all");
    const selectedRange = ref("all");
    const jobTypes = ref([]);
    const jobSeniority = ref([]);
    ref([]);
    const jobs = [
      {
        company: "Airbnb",
        logo: "logos:airbnb-icon",
        title: "UI / UX Designer",
        description: "We are looking for a UI / UX Designer to create amazing user experiences. The ideal candidate should have an eye for clean and artful design, possess superior UI skills and be able to translate high-level requirements into interaction flows and artifacts, and transform them into beautiful, intuitive, and functional user interfaces.",
        tags: ["Full Time", "UX design", "Senior level"],
        applicants: [
          {
            tooltip: "Clark Smith",
            src: "/img/avatars/3.svg"
          },
          {
            tooltip: "Maya Rosselini",
            src: "/img/avatars/2.svg"
          },
          {
            tooltip: "Clarissa Miller",
            src: "/img/avatars/5.svg"
          },
          {
            tooltip: "Jane Doe",
            src: "/img/avatars/4.svg"
          }
        ]
      },
      {
        company: "Slack",
        logo: "logos:slack-icon",
        title: "Product Designer",
        description: "We are looking for a Product Designer to create amazing user experiences. The ideal candidate should have an eye for clean and artful design, possess superior UI skills and be able to translate high-level requirements into interaction flows and artifacts, and transform them into beautiful, intuitive, and functional user interfaces.",
        tags: ["Full Time", "Product design", "Marketing"],
        applicants: [
          {
            tooltip: "Hermann Mayer",
            src: "/img/avatars/16.svg"
          },
          {
            tooltip: "Jen Rossi",
            src: "/img/avatars/10.svg"
          }
        ]
      },
      {
        company: "Gitlab",
        logo: "logos:gitlab",
        title: "Project Manager",
        description: "We are looking for a Project Manager to create amazing user experiences. The ideal candidate should have an eye for clean and artful design, possess superior UI skills and be able to translate high-level requirements into interaction flows and artifacts, and transform them into beautiful, intuitive, and functional user interfaces.",
        tags: ["Full Time", "Product management"],
        applicants: [
          {
            tooltip: "Alex Wielder",
            src: "/img/avatars/11.svg"
          },
          {
            tooltip: "Rob Howards",
            src: "/img/avatars/18.svg"
          }
        ]
      },
      {
        company: "Google",
        logo: "logos:google-icon",
        title: "Product Owner",
        description: "We are looking for a Product Owner to create amazing user experiences. The ideal candidate should have an eye for clean and artful design, possess superior UI skills and be able to translate high-level requirements into interaction flows and artifacts, and transform them into beautiful, intuitive, and functional user interfaces.",
        tags: ["Full Time", "Scrum master", "Management"],
        applicants: [
          {
            tooltip: "Clarence Bodicker",
            src: "/img/avatars/13.svg"
          },
          {
            tooltip: "Andrew Holmes",
            src: "/img/avatars/14.svg"
          }
        ]
      },
      {
        company: "Atlassian",
        logo: "logos:atlassian",
        title: "Fullstack Developer",
        description: "We are looking for a Fullstack  to create amazing user experiences. The ideal candidate should have an eye for clean and artful design, possess superior UI skills and be able to translate high-level requirements into interaction flows and artifacts, and transform them into beautiful, intuitive, and functional user interfaces.",
        tags: ["Full Time", "Fullstack", "Engineering"],
        applicants: [
          {
            tooltip: "Sam Brettman",
            src: "/img/avatars/15.svg"
          },
          {
            tooltip: "Elina Wheeler",
            src: "/img/avatars/9.svg"
          }
        ]
      },
      {
        company: "Dribbble",
        logo: "logos:dribbble-icon",
        title: "Community Manager",
        description: "We are looking for a Community Manager to create amazing user experiences. The ideal candidate should have an eye for clean and artful design, possess superior UI skills and be able to translate high-level requirements into interaction flows and artifacts, and transform them into beautiful, intuitive, and functional user interfaces.",
        tags: ["Full Time", "Manager", "Community"],
        applicants: [
          {
            tooltip: "John Baxter",
            src: "/img/avatars/6.svg"
          },
          {
            tooltip: "Maya Rosselini",
            src: "/img/avatars/2.svg"
          }
        ]
      },
      {
        company: "Figma",
        logo: "logos:figma",
        title: "Business Developer",
        description: "We are looking for a Business Developer to create amazing user experiences. The ideal candidate should have an eye for clean and artful design, possess superior UI skills and be able to translate high-level requirements into interaction flows and artifacts, and transform them into beautiful, intuitive, and functional user interfaces.",
        tags: ["Full Time", "Business", "Sales"],
        applicants: [
          {
            tooltip: "Edward Rowell",
            src: "/img/avatars/8.svg"
          },
          {
            tooltip: "Nick Kowalski",
            src: "/img/avatars/17.svg"
          }
        ]
      },
      {
        company: "Airtable",
        logo: "logos:airtable",
        title: "Frontend Developer",
        description: "We are looking for a Frontend Developer to create amazing user experiences. The ideal candidate should have an eye for clean and artful design, possess superior UI skills and be able to translate high-level requirements into interaction flows and artifacts, and transform them into beautiful, intuitive, and functional user interfaces.",
        tags: ["Full Time", "Frontend", "Sales"],
        applicants: [
          {
            tooltip: "Edward Rowell",
            src: "/img/avatars/8.svg"
          },
          {
            tooltip: "Nick Kowalski",
            src: "/img/avatars/17.svg"
          },
          {
            tooltip: "John Baxter",
            src: "/img/avatars/6.svg"
          },
          {
            tooltip: "Maya Rosselini",
            src: "/img/avatars/2.svg"
          }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseInput = _sfc_main$z;
      const _component_BaseSelect = _sfc_main$1;
      const _component_BaseButton = _sfc_main$x;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseCheckbox = _sfc_main$2;
      const _component_BaseTag = _sfc_main$3;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseAvatarGroup = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "ptablet:py-6 ptablet:px-4 ptablet:grid ptablet:grid-cols-12 ltablet:divide-x divide-muted-200 dark:divide-muted-700 mb-10 flex w-full flex-col items-center py-2 sm:flex-row sm:py-0 lg:divide-x"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="ptablet:ps-4 ptablet:col-span-6 w-full py-2 pe-4 ps-4 sm:w-auto sm:grow sm:ps-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseInput, {
              modelValue: unref(search),
              "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
              modelModifiers: { trim: true },
              shape: "curved",
              icon: "lucide:search",
              placeholder: "Job keywords"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="ptablet:col-span-6 w-full flex-1 px-4 py-2 sm:w-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseInput, {
              modelValue: unref(location),
              "onUpdate:modelValue": ($event) => isRef(location) ? location.value = $event : null,
              modelModifiers: { trim: true },
              shape: "curved",
              icon: "lucide:map-pin",
              placeholder: "Location"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="ptablet:col-span-6 w-full flex-1 px-4 py-2 sm:w-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseSelect, {
              modelValue: unref(selectedType),
              "onUpdate:modelValue": ($event) => isRef(selectedType) ? selectedType.value = $event : null,
              shape: "curved",
              icon: "lucide:briefcase",
              label: "",
              "hide-label": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<option value=""${_scopeId2}>Select a type</option><option value="all"${_scopeId2}>All</option><option value="design"${_scopeId2}>Design</option><option value="engineering"${_scopeId2}>Engineering</option><option value="frontend"${_scopeId2}>Frontend</option><option value="backend"${_scopeId2}>Backend</option>`);
                } else {
                  return [
                    createVNode("option", { value: "" }, "Select a type"),
                    createVNode("option", { value: "all" }, "All"),
                    createVNode("option", { value: "design" }, "Design"),
                    createVNode("option", { value: "engineering" }, "Engineering"),
                    createVNode("option", { value: "frontend" }, "Frontend"),
                    createVNode("option", { value: "backend" }, "Backend")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ptablet:col-span-6 w-full flex-1 px-4 py-2 sm:w-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseSelect, {
              modelValue: unref(selectedRange),
              "onUpdate:modelValue": ($event) => isRef(selectedRange) ? selectedRange.value = $event : null,
              shape: "curved",
              icon: "lucide:dollar-sign",
              label: "",
              "hide-label": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<option value=""${_scopeId2}>Select a range</option><option value="all"${_scopeId2}>All</option><option value="10k-20k"${_scopeId2}>10k ~ 20k</option><option value="20k-30k"${_scopeId2}>20k ~ 40k</option><option value="40k-75k"${_scopeId2}>40k ~ 75k</option><option value="75k"${_scopeId2}>75k+</option>`);
                } else {
                  return [
                    createVNode("option", { value: "" }, "Select a range"),
                    createVNode("option", { value: "all" }, "All"),
                    createVNode("option", { value: "10k-20k" }, "10k ~ 20k"),
                    createVNode("option", { value: "20k-30k" }, "20k ~ 40k"),
                    createVNode("option", { value: "40k-75k" }, "40k ~ 75k"),
                    createVNode("option", { value: "75k" }, "75k+")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ptablet:col-span-12 w-full px-4 py-2 sm:w-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              shape: "curved",
              color: "primary",
              class: "ptablet:w-full w-full sm:w-32"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Search `);
                } else {
                  return [
                    createTextVNode(" Search ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "ptablet:ps-4 ptablet:col-span-6 w-full py-2 pe-4 ps-4 sm:w-auto sm:grow sm:ps-2" }, [
                createVNode(_component_BaseInput, {
                  modelValue: unref(search),
                  "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                  modelModifiers: { trim: true },
                  shape: "curved",
                  icon: "lucide:search",
                  placeholder: "Job keywords"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("div", { class: "ptablet:col-span-6 w-full flex-1 px-4 py-2 sm:w-auto" }, [
                createVNode(_component_BaseInput, {
                  modelValue: unref(location),
                  "onUpdate:modelValue": ($event) => isRef(location) ? location.value = $event : null,
                  modelModifiers: { trim: true },
                  shape: "curved",
                  icon: "lucide:map-pin",
                  placeholder: "Location"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("div", { class: "ptablet:col-span-6 w-full flex-1 px-4 py-2 sm:w-auto" }, [
                createVNode(_component_BaseSelect, {
                  modelValue: unref(selectedType),
                  "onUpdate:modelValue": ($event) => isRef(selectedType) ? selectedType.value = $event : null,
                  shape: "curved",
                  icon: "lucide:briefcase",
                  label: "",
                  "hide-label": ""
                }, {
                  default: withCtx(() => [
                    createVNode("option", { value: "" }, "Select a type"),
                    createVNode("option", { value: "all" }, "All"),
                    createVNode("option", { value: "design" }, "Design"),
                    createVNode("option", { value: "engineering" }, "Engineering"),
                    createVNode("option", { value: "frontend" }, "Frontend"),
                    createVNode("option", { value: "backend" }, "Backend")
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("div", { class: "ptablet:col-span-6 w-full flex-1 px-4 py-2 sm:w-auto" }, [
                createVNode(_component_BaseSelect, {
                  modelValue: unref(selectedRange),
                  "onUpdate:modelValue": ($event) => isRef(selectedRange) ? selectedRange.value = $event : null,
                  shape: "curved",
                  icon: "lucide:dollar-sign",
                  label: "",
                  "hide-label": ""
                }, {
                  default: withCtx(() => [
                    createVNode("option", { value: "" }, "Select a range"),
                    createVNode("option", { value: "all" }, "All"),
                    createVNode("option", { value: "10k-20k" }, "10k ~ 20k"),
                    createVNode("option", { value: "20k-30k" }, "20k ~ 40k"),
                    createVNode("option", { value: "40k-75k" }, "40k ~ 75k"),
                    createVNode("option", { value: "75k" }, "75k+")
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("div", { class: "ptablet:col-span-12 w-full px-4 py-2 sm:w-auto" }, [
                createVNode(_component_BaseButton, {
                  shape: "curved",
                  color: "primary",
                  class: "ptablet:w-full w-full sm:w-32"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Search ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid grid-cols-12 gap-6"><div class="ptablet:col-span-4 ltablet:col-span-4 col-span-12 lg:col-span-3"><div class="w-full"><div class="bg-muted-200 dark:bg-muted-800 mb-12 rounded-xl p-6"><div class="mb-6">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "md",
        weight: "light",
        lead: "tight",
        class: "text-muted-800 mb-2 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Create job alert</span>`);
          } else {
            return [
              createVNode("span", null, "Create job alert")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-500"${_scopeId}> Create a job alert matching the following keywords and get notified as soon as a new offer matching your criteria is posted. </span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-500" }, " Create a job alert matching the following keywords and get notified as soon as a new offer matching your criteria is posted. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><form class="space-y-2">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: unref(alertKeyword),
        "onUpdate:modelValue": ($event) => isRef(alertKeyword) ? alertKeyword.value = $event : null,
        modelModifiers: { trim: true },
        shape: "curved",
        icon: "lucide:search",
        placeholder: "Job keywords"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseButton, {
        shape: "curved",
        color: "primary",
        class: "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Create alert `);
          } else {
            return [
              createTextVNode(" Create alert ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div><div class="space-y-12"><div class="relative"><div class="mb-6">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "md",
        weight: "light",
        lead: "tight",
        class: "text-muted-800 mb-2 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Job type</span>`);
          } else {
            return [
              createVNode("span", null, "Job type")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-col gap-4 ps-2"><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        modelValue: unref(jobTypes),
        "onUpdate:modelValue": ($event) => isRef(jobTypes) ? jobTypes.value = $event : null,
        value: "job-types-1",
        label: "Full time jobs",
        shape: "rounded",
        classes: { wrapper: "text-primary-500" }
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseTag, {
        color: "default",
        shape: "full",
        class: "text-xs",
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 67 `);
          } else {
            return [
              createTextVNode(" 67 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        modelValue: unref(jobTypes),
        "onUpdate:modelValue": ($event) => isRef(jobTypes) ? jobTypes.value = $event : null,
        value: "job-types-2",
        label: "Part time jobs",
        shape: "rounded",
        classes: { wrapper: "text-primary-500" }
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseTag, {
        color: "default",
        shape: "full",
        class: "text-xs",
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 31 `);
          } else {
            return [
              createTextVNode(" 31 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        modelValue: unref(jobTypes),
        "onUpdate:modelValue": ($event) => isRef(jobTypes) ? jobTypes.value = $event : null,
        value: "job-types-3",
        label: "Remote jobs",
        shape: "rounded",
        classes: { wrapper: "text-primary-500" }
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseTag, {
        color: "default",
        shape: "full",
        class: "text-xs",
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 49 `);
          } else {
            return [
              createTextVNode(" 49 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        modelValue: unref(jobTypes),
        "onUpdate:modelValue": ($event) => isRef(jobTypes) ? jobTypes.value = $event : null,
        value: "job-types-4",
        label: "Internships",
        shape: "rounded",
        classes: { wrapper: "text-primary-500" }
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseTag, {
        color: "default",
        shape: "full",
        class: "text-xs",
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 17 `);
          } else {
            return [
              createTextVNode(" 17 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="relative"><div class="mb-6">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "md",
        weight: "light",
        lead: "tight",
        class: "text-muted-800 mb-2 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Seniority</span>`);
          } else {
            return [
              createVNode("span", null, "Seniority")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-col gap-4 ps-2"><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        modelValue: unref(jobSeniority),
        "onUpdate:modelValue": ($event) => isRef(jobSeniority) ? jobSeniority.value = $event : null,
        value: "seniority-level-1",
        label: "Student level",
        shape: "rounded",
        classes: { wrapper: "text-primary-500" }
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseTag, {
        color: "default",
        shape: "full",
        class: "text-xs",
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 56 `);
          } else {
            return [
              createTextVNode(" 56 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        modelValue: unref(jobSeniority),
        "onUpdate:modelValue": ($event) => isRef(jobSeniority) ? jobSeniority.value = $event : null,
        value: "seniority-level-2",
        label: "Entry level",
        shape: "rounded",
        classes: { wrapper: "text-primary-500" }
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseTag, {
        color: "default",
        shape: "full",
        class: "text-xs",
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 84 `);
          } else {
            return [
              createTextVNode(" 84 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        modelValue: unref(jobSeniority),
        "onUpdate:modelValue": ($event) => isRef(jobSeniority) ? jobSeniority.value = $event : null,
        value: "seniority-level-3",
        label: "Mid level",
        shape: "rounded",
        classes: { wrapper: "text-primary-500" }
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseTag, {
        color: "default",
        shape: "full",
        class: "text-xs",
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 31 `);
          } else {
            return [
              createTextVNode(" 31 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        modelValue: unref(jobSeniority),
        "onUpdate:modelValue": ($event) => isRef(jobSeniority) ? jobSeniority.value = $event : null,
        value: "seniority-level-4",
        label: "Senior level",
        shape: "rounded",
        classes: { wrapper: "text-primary-500" }
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseTag, {
        color: "default",
        shape: "full",
        class: "text-xs",
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 59 `);
          } else {
            return [
              createTextVNode(" 59 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        modelValue: unref(jobSeniority),
        "onUpdate:modelValue": ($event) => isRef(jobSeniority) ? jobSeniority.value = $event : null,
        value: "seniority-level-5",
        label: "Director level",
        shape: "rounded",
        classes: { wrapper: "text-primary-500" }
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseTag, {
        color: "default",
        shape: "full",
        class: "text-xs",
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 11 `);
          } else {
            return [
              createTextVNode(" 11 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="relative"><div class="mb-6">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "md",
        weight: "light",
        lead: "tight",
        class: "text-muted-800 mb-2 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Salary range</span>`);
          } else {
            return [
              createVNode("span", null, "Salary range")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-col gap-4 ps-2"><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        modelValue: unref(jobSeniority),
        "onUpdate:modelValue": ($event) => isRef(jobSeniority) ? jobSeniority.value = $event : null,
        value: "salary-range-1",
        label: "10k ~ 20k",
        shape: "rounded",
        classes: { wrapper: "text-primary-500" }
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseTag, {
        color: "default",
        shape: "full",
        class: "text-xs",
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 61 `);
          } else {
            return [
              createTextVNode(" 61 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        modelValue: unref(jobSeniority),
        "onUpdate:modelValue": ($event) => isRef(jobSeniority) ? jobSeniority.value = $event : null,
        value: "salary-range-2",
        label: "20k ~ 40k",
        shape: "rounded",
        classes: { wrapper: "text-primary-500" }
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseTag, {
        color: "default",
        shape: "full",
        class: "text-xs",
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 28 `);
          } else {
            return [
              createTextVNode(" 28 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        modelValue: unref(jobSeniority),
        "onUpdate:modelValue": ($event) => isRef(jobSeniority) ? jobSeniority.value = $event : null,
        value: "salary-range-3",
        label: "40k ~ 75k",
        shape: "rounded",
        classes: { wrapper: "text-primary-500" }
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseTag, {
        color: "default",
        shape: "full",
        class: "text-xs",
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 112 `);
          } else {
            return [
              createTextVNode(" 112 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        modelValue: unref(jobSeniority),
        "onUpdate:modelValue": ($event) => isRef(jobSeniority) ? jobSeniority.value = $event : null,
        value: "salary-range-4",
        label: "75k+",
        shape: "rounded",
        classes: { wrapper: "text-primary-500" }
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseTag, {
        color: "default",
        shape: "full",
        class: "text-xs",
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 58 `);
          } else {
            return [
              createTextVNode(" 58 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></div><div class="ptablet:col-span-8 ltablet:col-span-8 col-span-12 lg:col-span-9"><div class="mb-6 mt-12 sm:mt-0">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "lg",
        weight: "light",
        lead: "tight",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Showing 46 Jobs</span>`);
          } else {
            return [
              createVNode("span", null, "Showing 46 Jobs")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, { size: "sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-500"${_scopeId}> These are the matching jobs that we found </span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-500" }, " These are the matching jobs that we found ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid grid-cols-1 gap-6 lg:grid-cols-2"><!--[-->`);
      ssrRenderList(jobs, (job, index) => {
        _push(`<div class="relative">`);
        _push(ssrRenderComponent(_component_BaseCard, {
          shape: "curved",
          class: "p-6"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex w-full flex-col gap-4 sm:flex-row"${_scopeId}><div${ssrRenderAttr("data-nui-tooltip", job.company)}${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: job.logo,
                class: "h-10 w-10 shrink-0"
              }, null, _parent2, _scopeId));
              _push2(`</div><div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "md",
                weight: "semibold",
                lead: "tight",
                class: "after:text-muted-800 mb-4 dark:text-white"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(job.title)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(job.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseParagraph, { size: "sm" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-muted-500 dark:text-muted-400 line-clamp-4"${_scopeId2}>${ssrInterpolate(job.description)}</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-muted-500 dark:text-muted-400 line-clamp-4" }, toDisplayString(job.description), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<div class="flex flex-wrap items-center gap-2 py-4"${_scopeId}><!--[-->`);
              ssrRenderList(job.tags, (tag) => {
                _push2(ssrRenderComponent(_component_BaseTag, {
                  key: tag,
                  color: "default",
                  size: "sm",
                  class: "text-xs"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(tag)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(tag), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div><div class="flex items-center justify-between"${_scopeId}><div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseAvatarGroup, {
                avatars: job.applicants,
                limit: 2,
                size: "xs"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="flex gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButton, {
                shape: "curved",
                color: "primary",
                class: "w-24"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Apply `);
                  } else {
                    return [
                      createTextVNode(" Apply ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseButton, {
                shape: "curved",
                color: "default",
                class: "w-24"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Details `);
                  } else {
                    return [
                      createTextVNode(" Details ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex w-full flex-col gap-4 sm:flex-row" }, [
                  createVNode("div", {
                    "data-nui-tooltip": job.company
                  }, [
                    createVNode(_component_Icon, {
                      name: job.logo,
                      class: "h-10 w-10 shrink-0"
                    }, null, 8, ["name"])
                  ], 8, ["data-nui-tooltip"]),
                  createVNode("div", null, [
                    createVNode(_component_BaseHeading, {
                      as: "h4",
                      size: "md",
                      weight: "semibold",
                      lead: "tight",
                      class: "after:text-muted-800 mb-4 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, toDisplayString(job.title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_BaseParagraph, { size: "sm" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-muted-500 dark:text-muted-400 line-clamp-4" }, toDisplayString(job.description), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode("div", { class: "flex flex-wrap items-center gap-2 py-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(job.tags, (tag) => {
                        return openBlock(), createBlock(_component_BaseTag, {
                          key: tag,
                          color: "default",
                          size: "sm",
                          class: "text-xs"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(tag), 1)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("div", null, [
                        createVNode(_component_BaseAvatarGroup, {
                          avatars: job.applicants,
                          limit: 2,
                          size: "xs"
                        }, null, 8, ["avatars"])
                      ]),
                      createVNode("div", { class: "flex gap-2" }, [
                        createVNode(_component_BaseButton, {
                          shape: "curved",
                          color: "primary",
                          class: "w-24"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Apply ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseButton, {
                          shape: "curved",
                          color: "default",
                          class: "w-24"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Details ")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/jobs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=jobs-2dff38d4.mjs.map
