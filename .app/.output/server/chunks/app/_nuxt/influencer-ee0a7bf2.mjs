import { s as _sfc_main$E, _ as _sfc_main$p, f as __nuxt_component_2, d as _sfc_main$x, b as _sfc_main$o, j as _sfc_main$C } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseProse-1777d29c.mjs';
import { _ as _sfc_main$2 } from './TairoPopover-3d838bc4.mjs';
import { _ as _sfc_main$3 } from './TairoPopoverContentHelp-a9493405.mjs';
import { _ as _sfc_main$4 } from './BaseIconBox-642fe941.mjs';
import { _ as _sfc_main$5 } from './BaseAvatarGroup-6e7b4ecf.mjs';
import { defineComponent, ref, withCtx, createVNode, createTextVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "influencer",
  __ssrInlineRender: true,
  setup(__props) {
    const companies = [
      {
        name: "Airbnb",
        logo: "logos:airbnb-icon",
        title: "UI / UX Designer",
        description: "Airbnb is a company that enables people to list, discover, and book accommodations around the world.",
        tags: ["Full Time", "UX design", "Senior level"],
        stats: [
          {
            label: "Contracts",
            value: 22
          },
          {
            label: "Publications",
            value: 49
          },
          {
            label: "Income",
            value: 43.2
          }
        ],
        followers: [
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
        name: "Slack",
        logo: "logos:slack-icon",
        title: "Product Designer",
        description: "Slack is a cloud-based set of team collaboration tools and services.",
        tags: ["Full Time", "Product design", "Marketing"],
        stats: [
          {
            label: "Contracts",
            value: 22
          },
          {
            label: "Publications",
            value: 49
          },
          {
            label: "Income",
            value: 43.2
          }
        ],
        followers: [
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
        name: "Gitlab",
        logo: "logos:gitlab",
        title: "Project Manager",
        description: "GitLab is a web-based DevOps lifecycle tool that provides a Git-repository manager.",
        tags: ["Full Time", "Product management"],
        stats: [
          {
            label: "Contracts",
            value: 22
          },
          {
            label: "Publications",
            value: 49
          },
          {
            label: "Income",
            value: 43.2
          }
        ],
        followers: [
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
        name: "Google",
        logo: "logos:google-icon",
        title: "Product Owner",
        description: "Google is an American multinational technology company that specializes in Internet-related services and products.",
        tags: ["Full Time", "Scrum master", "Management"],
        stats: [
          {
            label: "Contracts",
            value: 22
          },
          {
            label: "Publications",
            value: 49
          },
          {
            label: "Income",
            value: 43.2
          }
        ],
        followers: [
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
        name: "Atlassian",
        logo: "logos:atlassian",
        title: "Fullstack Developer",
        description: "Atlassian is a company that provides enterprise software for teams. It develops products for software developers, project managers, and content management.",
        tags: ["Full Time", "Fullstack", "Engineering"],
        stats: [
          {
            label: "Contracts",
            value: 22
          },
          {
            label: "Publications",
            value: 49
          },
          {
            label: "Income",
            value: 43.2
          }
        ],
        followers: [
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
        name: "Dribbble",
        logo: "logos:dribbble-icon",
        title: "Community Manager",
        description: "Dribbble is a community of designers sharing screenshots of their work, process, and projects.",
        tags: ["Full Time", "Manager", "Community"],
        stats: [
          {
            label: "Contracts",
            value: 22
          },
          {
            label: "Publications",
            value: 49
          },
          {
            label: "Income",
            value: 43.2
          }
        ],
        followers: [
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
        name: "Figma",
        logo: "logos:figma",
        title: "Business Developer",
        description: "Figma is a vector graphics editor and prototyping tool which is primarily web-based, with additional offline features enabled by desktop applications for macOS and Windows.",
        tags: ["Full Time", "Business", "Sales"],
        stats: [
          {
            label: "Contracts",
            value: 22
          },
          {
            label: "Publications",
            value: 49
          },
          {
            label: "Income",
            value: 43.2
          }
        ],
        followers: [
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
        name: "Airtable",
        logo: "logos:airtable",
        title: "Frontend Developer",
        description: "Airtable is a cloud-based spreadsheet-database hybrid that allows users to create and manage tables and data through a web browser.",
        tags: ["Full Time", "Frontend", "Sales"],
        stats: [
          {
            label: "Contracts",
            value: 22
          },
          {
            label: "Publications",
            value: 49
          },
          {
            label: "Income",
            value: 43.2
          }
        ],
        followers: [
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
    const activeTab = ref("tab-1");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BaseHeading = _sfc_main$p;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseProse = _sfc_main$1;
      const _component_TairoPopover = _sfc_main$2;
      const _component_TairoPopoverContentHelp = _sfc_main$3;
      const _component_BaseButton = _sfc_main$x;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseIconBox = _sfc_main$4;
      const _component_BaseAvatarGroup = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="ltablet:h-[410px] dark:bg-muted-800 absolute start-0 top-0 h-[590px] w-full bg-white lg:h-[410px]"></div><div class="ltablet:h-64 ltablet:flex-row relative flex h-[460px] w-full flex-col lg:h-64 lg:flex-row"><div class="ltablet:flex-row relative z-10 flex w-full flex-col gap-6 lg:flex-row">`);
      _push(ssrRenderComponent(_component_BaseAvatar, {
        src: "/img/avatars/5.svg",
        "badge-src": "/img/icons/flags/united-states-of-america.svg",
        size: "3xl",
        alt: "avatar",
        class: "ltablet:mx-0 mx-auto lg:mx-0"
      }, null, _parent));
      _push(`<div class="ltablet:text-left text-center lg:text-left">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "xl",
        weight: "semibold",
        class: "ltablet:justify-start flex items-center justify-center gap-2 lg:justify-start"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-800 dark:text-white"${_scopeId}>Sweet_Mango12</span>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "uiw:star-on",
              class: "h-4 w-4 text-yellow-400"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", { class: "text-muted-800 dark:text-white" }, "Sweet_Mango12"),
              createVNode(_component_Icon, {
                name: "uiw:star-on",
                class: "h-4 w-4 text-yellow-400"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="text-muted-400 mb-4 block font-sans text-base"> Clarissa Miller </span><div class="mb-6 flex items-center gap-x-6"><div class="ltablet:flex-row ltablet:flex-auto flex flex-1 flex-col gap-x-2 font-sans lg:flex-auto lg:flex-row"><span class="text-muted-800 dark:text-muted-100 font-semibold"> 1512 </span><span class="text-muted-400 ltablet:text-base text-xs sm:text-sm lg:text-base"> Posts </span></div><div class="ltablet:flex-row ltablet:flex-auto flex flex-1 flex-col gap-x-2 font-sans lg:flex-auto lg:flex-row"><span class="text-muted-800 dark:text-muted-100 font-semibold"> 38.3K </span><span class="text-muted-400 ltablet:text-base text-xs sm:text-sm lg:text-base"> Followers </span></div><div class="ltablet:flex-row ltablet:flex-auto flex flex-1 flex-col gap-x-2 font-sans lg:flex-auto lg:flex-row"><span class="text-muted-800 dark:text-muted-100 font-semibold"> 329 </span><span class="text-muted-400 ltablet:text-base text-xs sm:text-sm lg:text-base"> Following </span></div></div>`);
      _push(ssrRenderComponent(_component_BaseProse, { class: "ltablet:mx-0 prose-sm mx-auto mb-6 max-w-xl lg:mx-0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="line-clamp-3"${_scopeId}> Artist, musician, songwriter, influencer, these are the many names people give me. But for you Iam simply Clarissa. *Forever with all my friends* // Latest video can be found here <a href="#"${_scopeId}>youtu.be/8Tcee5Cyz</a></p>`);
          } else {
            return [
              createVNode("p", { class: "line-clamp-3" }, [
                createTextVNode(" Artist, musician, songwriter, influencer, these are the many names people give me. But for you Iam simply Clarissa. *Forever with all my friends* // Latest video can be found here "),
                createVNode("a", { href: "#" }, "youtu.be/8Tcee5Cyz")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="ltablet:justify-start flex justify-center gap-4 lg:justify-start">`);
      _push(ssrRenderComponent(_component_TairoPopover, { size: "sm" }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TairoPopoverContentHelp, {
              title: "On Fire",
              subtitle: "You are on rampage",
              text: "You have been on fire for the last 7 days. Keep up the good\n                    work!",
              icon: "ri:fire-fill",
              "icon-color": "danger"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TairoPopoverContentHelp, {
                title: "On Fire",
                subtitle: "You are on rampage",
                text: "You have been on fire for the last 7 days. Keep up the good\n                    work!",
                icon: "ri:fire-fill",
                "icon-color": "danger"
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="dark:bg-muted-700 shadow-muted-300/40 dark:shadow-muted-900/20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-xl"${_scopeId}><div class="bg-danger-500/20 flex h-8 w-8 items-center justify-center rounded-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ri:fire-fill",
              class: "text-danger-500 h-5 w-5"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "dark:bg-muted-700 shadow-muted-300/40 dark:shadow-muted-900/20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-xl" }, [
                createVNode("div", { class: "bg-danger-500/20 flex h-8 w-8 items-center justify-center rounded-full" }, [
                  createVNode(_component_Icon, {
                    name: "ri:fire-fill",
                    class: "text-danger-500 h-5 w-5"
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_TairoPopover, { size: "sm" }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TairoPopoverContentHelp, {
              title: "Veteran",
              subtitle: "Way to go soldier",
              text: "You posted more than 250 posts. You are now a post veteran!",
              icon: "ri:medal-fill",
              "icon-color": "success"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TairoPopoverContentHelp, {
                title: "Veteran",
                subtitle: "Way to go soldier",
                text: "You posted more than 250 posts. You are now a post veteran!",
                icon: "ri:medal-fill",
                "icon-color": "success"
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="dark:bg-muted-700 shadow-muted-300/40 dark:shadow-muted-900/20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-xl"${_scopeId}><div class="bg-success-500/20 flex h-8 w-8 items-center justify-center rounded-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ri:medal-fill",
              class: "text-success-500 h-5 w-5"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "dark:bg-muted-700 shadow-muted-300/40 dark:shadow-muted-900/20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-xl" }, [
                createVNode("div", { class: "bg-success-500/20 flex h-8 w-8 items-center justify-center rounded-full" }, [
                  createVNode(_component_Icon, {
                    name: "ri:medal-fill",
                    class: "text-success-500 h-5 w-5"
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_TairoPopover, { size: "sm" }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TairoPopoverContentHelp, {
              title: "Champion",
              subtitle: "Hail to the king",
              text: "You have more than 100k followers. You are a champion!",
              icon: "ri:trophy-fill",
              "icon-color": "yellow"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TairoPopoverContentHelp, {
                title: "Champion",
                subtitle: "Hail to the king",
                text: "You have more than 100k followers. You are a champion!",
                icon: "ri:trophy-fill",
                "icon-color": "yellow"
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="dark:bg-muted-700 shadow-muted-300/40 dark:shadow-muted-900/20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-xl"${_scopeId}><div class="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500/20"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ri:trophy-fill",
              class: "h-5 w-5 text-yellow-500"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "dark:bg-muted-700 shadow-muted-300/40 dark:shadow-muted-900/20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-xl" }, [
                createVNode("div", { class: "flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500/20" }, [
                  createVNode(_component_Icon, {
                    name: "ri:trophy-fill",
                    class: "h-5 w-5 text-yellow-500"
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="ltablet:justify-start ltablet:ms-auto ltablet:mt-0 mt-4 flex shrink-0 justify-center lg:ms-auto lg:mt-0 lg:justify-start">`);
      _push(ssrRenderComponent(_component_BaseButton, { class: "ltablet:w-auto ltablet:mx-0 mx-auto w-52 lg:mx-0 lg:w-auto" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:plus",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Add Account</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:plus",
                class: "h-4 w-4"
              }),
              createVNode("span", null, "Add Account")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ltablet:bottom-[-70px] absolute bottom-[-48px] start-0 flex items-end gap-2 lg:bottom-[-70px]"><button type="button" class="${ssrRenderClass([
        unref(activeTab) === "tab-1" ? "border-primary-500 text-muted-800 dark:text-muted-100" : "border-transparent text-muted-400",
        "inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm"
      ])}"><span>Accounts</span></button><button type="button" class="${ssrRenderClass([
        unref(activeTab) === "tab-2" ? "border-primary-500 text-muted-800 dark:text-muted-100" : "border-transparent text-muted-400",
        "inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm"
      ])}"><span>Companies</span></button></div></div><div class="w-full">`);
      if (unref(activeTab) === "tab-1") {
        _push(`<div class="mt-28"><div class="space-y-16"><div><div class="mb-6 flex w-full items-center justify-between"><div class="hidden sm:block">`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h3",
          size: "lg",
          weight: "medium",
          lead: "tight",
          class: "mb-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-muted-800 dark:text-muted-100"${_scopeId}> Instagram stats </span>`);
            } else {
              return [
                createVNode("span", { class: "text-muted-800 dark:text-muted-100" }, " Instagram stats ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, {
          size: "sm",
          class: "text-muted-500 dark:text-muted-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>Lorem ipsum sit dolor amet is a dummy text</span>`);
            } else {
              return [
                createVNode("span", null, "Lorem ipsum sit dolor amet is a dummy text")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="shrink-0">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "logos:instagram",
          class: "w-24 text-3xl dark:invert"
        }, null, _parent));
        _push(`</div></div><div class="grid grid-cols-12 gap-6"><div class="ltablet:col-span-4 col-span-12 sm:col-span-6 lg:col-span-4">`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "md",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>Content Posts (30 days)</span>`);
                  } else {
                    return [
                      createVNode("span", null, "Content Posts (30 days)")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseIconBox, {
                size: "md",
                class: "bg-pink-500/20 text-pink-500"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ri:instagram-fill",
                      class: "h-6 w-6"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "ri:instagram-fill",
                        class: "h-6 w-6"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="pb-6 pt-4"${_scopeId}><span class="text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none"${_scopeId}> 119 <small class="text-muted-500 dark:text-muted-400 text-sm font-medium"${_scopeId}> posts published </small></span></div><div class="mb-2 flex items-center gap-2 font-sans"${_scopeId}><div class="text-danger-500 flex items-center font-semibold"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-down-right",
                class: "h-4 w-4"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>-4.5%</span></div><span class="text-muted-400 text-sm"${_scopeId}>less than usual</span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(_component_BaseParagraph, {
                    size: "md",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Content Posts (30 days)")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseIconBox, {
                    size: "md",
                    class: "bg-pink-500/20 text-pink-500"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "ri:instagram-fill",
                        class: "h-6 w-6"
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "pb-6 pt-4" }, [
                  createVNode("span", { class: "text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none" }, [
                    createTextVNode(" 119 "),
                    createVNode("small", { class: "text-muted-500 dark:text-muted-400 text-sm font-medium" }, " posts published ")
                  ])
                ]),
                createVNode("div", { class: "mb-2 flex items-center gap-2 font-sans" }, [
                  createVNode("div", { class: "text-danger-500 flex items-center font-semibold" }, [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-down-right",
                      class: "h-4 w-4"
                    }),
                    createVNode("span", null, "-4.5%")
                  ]),
                  createVNode("span", { class: "text-muted-400 text-sm" }, "less than usual")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="ltablet:col-span-4 col-span-12 sm:col-span-6 lg:col-span-4">`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "md",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>Followers</span>`);
                  } else {
                    return [
                      createVNode("span", null, "Followers")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseIconBox, {
                size: "md",
                class: "bg-primary-500/20 text-primary-500"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:users-four-duotone",
                      class: "h-6 w-6"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "ph:users-four-duotone",
                        class: "h-6 w-6"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="pb-6 pt-4"${_scopeId}><span class="text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none"${_scopeId}> 14.3k <small class="text-muted-500 dark:text-muted-400 text-sm font-medium"${_scopeId}> following you </small></span></div><div class="mb-2 flex items-center gap-2 font-sans"${_scopeId}><div class="text-success-500 flex items-center font-semibold"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-up-right",
                class: "h-4 w-4"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>+9.2%</span></div><span class="text-muted-400 text-sm"${_scopeId}>follower growth</span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(_component_BaseParagraph, {
                    size: "md",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Followers")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseIconBox, {
                    size: "md",
                    class: "bg-primary-500/20 text-primary-500"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "ph:users-four-duotone",
                        class: "h-6 w-6"
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "pb-6 pt-4" }, [
                  createVNode("span", { class: "text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none" }, [
                    createTextVNode(" 14.3k "),
                    createVNode("small", { class: "text-muted-500 dark:text-muted-400 text-sm font-medium" }, " following you ")
                  ])
                ]),
                createVNode("div", { class: "mb-2 flex items-center gap-2 font-sans" }, [
                  createVNode("div", { class: "text-success-500 flex items-center font-semibold" }, [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-up-right",
                      class: "h-4 w-4"
                    }),
                    createVNode("span", null, "+9.2%")
                  ]),
                  createVNode("span", { class: "text-muted-400 text-sm" }, "follower growth")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="ltablet:col-span-4 col-span-12 sm:col-span-6 lg:col-span-4">`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "md",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>Following</span>`);
                  } else {
                    return [
                      createVNode("span", null, "Following")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseIconBox, {
                size: "md",
                class: "bg-emerald-500/20 text-emerald-500"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:users-three-duotone",
                      class: "h-6 w-6"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "ph:users-three-duotone",
                        class: "h-6 w-6"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="pb-6 pt-4"${_scopeId}><span class="text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none"${_scopeId}> 224 <small class="text-muted-500 dark:text-muted-400 text-sm font-medium"${_scopeId}> followed by you </small></span></div><div class="mb-2 flex items-center gap-2 font-sans"${_scopeId}><div class="text-success-500 flex items-center font-semibold"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-up-right",
                class: "h-4 w-4"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>+1.1%</span></div><span class="text-muted-400 text-sm"${_scopeId}>more than usual</span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(_component_BaseParagraph, {
                    size: "md",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Following")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseIconBox, {
                    size: "md",
                    class: "bg-emerald-500/20 text-emerald-500"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "ph:users-three-duotone",
                        class: "h-6 w-6"
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "pb-6 pt-4" }, [
                  createVNode("span", { class: "text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none" }, [
                    createTextVNode(" 224 "),
                    createVNode("small", { class: "text-muted-500 dark:text-muted-400 text-sm font-medium" }, " followed by you ")
                  ])
                ]),
                createVNode("div", { class: "mb-2 flex items-center gap-2 font-sans" }, [
                  createVNode("div", { class: "text-success-500 flex items-center font-semibold" }, [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-up-right",
                      class: "h-4 w-4"
                    }),
                    createVNode("span", null, "+1.1%")
                  ]),
                  createVNode("span", { class: "text-muted-400 text-sm" }, "more than usual")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="ltablet:col-span-4 col-span-12 sm:col-span-6 lg:col-span-4">`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "md",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>Likes (30 days)</span>`);
                  } else {
                    return [
                      createVNode("span", null, "Likes (30 days)")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseIconBox, {
                size: "md",
                class: "bg-pink-500/20 text-pink-500"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:heart-duotone",
                      class: "h-6 w-6"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "ph:heart-duotone",
                        class: "h-6 w-6"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="pb-6 pt-4"${_scopeId}><span class="text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none"${_scopeId}> 129.7k <small class="text-muted-500 dark:text-muted-400 text-sm font-medium"${_scopeId}> likes of your content </small></span></div><div class="mb-2 flex items-center gap-2 font-sans"${_scopeId}><div class="text-success-500 flex items-center font-semibold"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-up-right",
                class: "h-4 w-4"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>+25.7%</span></div><span class="text-muted-400 text-sm"${_scopeId}> engagement growth </span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(_component_BaseParagraph, {
                    size: "md",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Likes (30 days)")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseIconBox, {
                    size: "md",
                    class: "bg-pink-500/20 text-pink-500"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "ph:heart-duotone",
                        class: "h-6 w-6"
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "pb-6 pt-4" }, [
                  createVNode("span", { class: "text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none" }, [
                    createTextVNode(" 129.7k "),
                    createVNode("small", { class: "text-muted-500 dark:text-muted-400 text-sm font-medium" }, " likes of your content ")
                  ])
                ]),
                createVNode("div", { class: "mb-2 flex items-center gap-2 font-sans" }, [
                  createVNode("div", { class: "text-success-500 flex items-center font-semibold" }, [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-up-right",
                      class: "h-4 w-4"
                    }),
                    createVNode("span", null, "+25.7%")
                  ]),
                  createVNode("span", { class: "text-muted-400 text-sm" }, " engagement growth ")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="ltablet:col-span-4 col-span-12 sm:col-span-6 lg:col-span-4">`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "md",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>Comments (30 days)</span>`);
                  } else {
                    return [
                      createVNode("span", null, "Comments (30 days)")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseIconBox, {
                size: "md",
                class: "bg-yellow-500/20 text-yellow-500"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:chat-circle-duotone",
                      class: "h-6 w-6"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "ph:chat-circle-duotone",
                        class: "h-6 w-6"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="pb-6 pt-4"${_scopeId}><span class="text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none"${_scopeId}> 5.2k <small class="text-muted-500 dark:text-muted-400 text-sm font-medium"${_scopeId}> comments published </small></span></div><div class="mb-2 flex items-center gap-2 font-sans"${_scopeId}><div class="text-success-500 flex items-center font-semibold"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-up-right",
                class: "h-4 w-4"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>+11.3%</span></div><span class="text-muted-400 text-sm"${_scopeId}> engagement growth </span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(_component_BaseParagraph, {
                    size: "md",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Comments (30 days)")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseIconBox, {
                    size: "md",
                    class: "bg-yellow-500/20 text-yellow-500"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "ph:chat-circle-duotone",
                        class: "h-6 w-6"
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "pb-6 pt-4" }, [
                  createVNode("span", { class: "text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none" }, [
                    createTextVNode(" 5.2k "),
                    createVNode("small", { class: "text-muted-500 dark:text-muted-400 text-sm font-medium" }, " comments published ")
                  ])
                ]),
                createVNode("div", { class: "mb-2 flex items-center gap-2 font-sans" }, [
                  createVNode("div", { class: "text-success-500 flex items-center font-semibold" }, [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-up-right",
                      class: "h-4 w-4"
                    }),
                    createVNode("span", null, "+11.3%")
                  ]),
                  createVNode("span", { class: "text-muted-400 text-sm" }, " engagement growth ")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="ltablet:col-span-4 col-span-12 sm:col-span-6 lg:col-span-4">`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "md",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>Profile views (30 days)</span>`);
                  } else {
                    return [
                      createVNode("span", null, "Profile views (30 days)")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseIconBox, {
                size: "md",
                class: "bg-lime-500/20 text-lime-500"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:user-duotone",
                      class: "h-6 w-6"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "ph:user-duotone",
                        class: "h-6 w-6"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="pb-6 pt-4"${_scopeId}><span class="text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none"${_scopeId}> 12.7k <small class="text-muted-500 dark:text-muted-400 text-sm font-medium"${_scopeId}> views of profile </small></span></div><div class="mb-2 flex items-center gap-2 font-sans"${_scopeId}><div class="text-success-500 flex items-center font-semibold"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-up-right",
                class: "h-4 w-4"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>+8.5%</span></div><span class="text-muted-400 text-sm"${_scopeId}> engagement growth </span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(_component_BaseParagraph, {
                    size: "md",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Profile views (30 days)")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseIconBox, {
                    size: "md",
                    class: "bg-lime-500/20 text-lime-500"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "ph:user-duotone",
                        class: "h-6 w-6"
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "pb-6 pt-4" }, [
                  createVNode("span", { class: "text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none" }, [
                    createTextVNode(" 12.7k "),
                    createVNode("small", { class: "text-muted-500 dark:text-muted-400 text-sm font-medium" }, " views of profile ")
                  ])
                ]),
                createVNode("div", { class: "mb-2 flex items-center gap-2 font-sans" }, [
                  createVNode("div", { class: "text-success-500 flex items-center font-semibold" }, [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-up-right",
                      class: "h-4 w-4"
                    }),
                    createVNode("span", null, "+8.5%")
                  ]),
                  createVNode("span", { class: "text-muted-400 text-sm" }, " engagement growth ")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div><div><div class="mb-6 flex w-full items-center justify-between"><div class="hidden sm:block">`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h3",
          size: "lg",
          weight: "medium",
          lead: "tight",
          class: "mb-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-muted-800 dark:text-muted-100"${_scopeId}> Tik Tok stats </span>`);
            } else {
              return [
                createVNode("span", { class: "text-muted-800 dark:text-muted-100" }, " Tik Tok stats ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, {
          size: "sm",
          class: "text-muted-500 dark:text-muted-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>Lorem ipsum sit dolor amet is a dummy text</span>`);
            } else {
              return [
                createVNode("span", null, "Lorem ipsum sit dolor amet is a dummy text")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="shrink-0">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "logos:tiktok",
          class: "w-24 text-3xl dark:invert"
        }, null, _parent));
        _push(`</div></div><div class="grid grid-cols-12 gap-6"><div class="ltablet:col-span-4 col-span-12 sm:col-span-6 lg:col-span-4">`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "md",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>Content Posts (30 days)</span>`);
                  } else {
                    return [
                      createVNode("span", null, "Content Posts (30 days)")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseIconBox, {
                size: "md",
                class: "bg-sky-500/20 text-sky-500"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "fa6-brands:tiktok",
                      class: "h-6 w-6"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "fa6-brands:tiktok",
                        class: "h-6 w-6"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="pb-6 pt-4"${_scopeId}><span class="text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none"${_scopeId}> 248 <small class="text-muted-500 dark:text-muted-400 text-sm font-medium"${_scopeId}> posts published </small></span></div><div class="mb-2 flex items-center gap-2 font-sans"${_scopeId}><div class="text-success-500 flex items-center font-semibold"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-up-right",
                class: "h-4 w-4"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>+15.5%</span></div><span class="text-muted-400 text-sm"${_scopeId}>more than usual</span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(_component_BaseParagraph, {
                    size: "md",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Content Posts (30 days)")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseIconBox, {
                    size: "md",
                    class: "bg-sky-500/20 text-sky-500"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "fa6-brands:tiktok",
                        class: "h-6 w-6"
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "pb-6 pt-4" }, [
                  createVNode("span", { class: "text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none" }, [
                    createTextVNode(" 248 "),
                    createVNode("small", { class: "text-muted-500 dark:text-muted-400 text-sm font-medium" }, " posts published ")
                  ])
                ]),
                createVNode("div", { class: "mb-2 flex items-center gap-2 font-sans" }, [
                  createVNode("div", { class: "text-success-500 flex items-center font-semibold" }, [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-up-right",
                      class: "h-4 w-4"
                    }),
                    createVNode("span", null, "+15.5%")
                  ]),
                  createVNode("span", { class: "text-muted-400 text-sm" }, "more than usual")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="ltablet:col-span-4 col-span-12 sm:col-span-6 lg:col-span-4">`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "md",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>Followers</span>`);
                  } else {
                    return [
                      createVNode("span", null, "Followers")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseIconBox, {
                size: "md",
                class: "bg-primary-500/20 text-primary-500"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:users-four-duotone",
                      class: "h-6 w-6"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "ph:users-four-duotone",
                        class: "h-6 w-6"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="pb-6 pt-4"${_scopeId}><span class="text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none"${_scopeId}> 5.7k <small class="text-muted-500 dark:text-muted-400 text-sm font-medium"${_scopeId}> following you </small></span></div><div class="mb-2 flex items-center gap-2 font-sans"${_scopeId}><div class="text-success-500 flex items-center font-semibold"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-up-right",
                class: "h-4 w-4"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>+17.2%</span></div><span class="text-muted-400 text-sm"${_scopeId}>follower growth</span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(_component_BaseParagraph, {
                    size: "md",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Followers")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseIconBox, {
                    size: "md",
                    class: "bg-primary-500/20 text-primary-500"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "ph:users-four-duotone",
                        class: "h-6 w-6"
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "pb-6 pt-4" }, [
                  createVNode("span", { class: "text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none" }, [
                    createTextVNode(" 5.7k "),
                    createVNode("small", { class: "text-muted-500 dark:text-muted-400 text-sm font-medium" }, " following you ")
                  ])
                ]),
                createVNode("div", { class: "mb-2 flex items-center gap-2 font-sans" }, [
                  createVNode("div", { class: "text-success-500 flex items-center font-semibold" }, [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-up-right",
                      class: "h-4 w-4"
                    }),
                    createVNode("span", null, "+17.2%")
                  ]),
                  createVNode("span", { class: "text-muted-400 text-sm" }, "follower growth")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="ltablet:col-span-4 col-span-12 sm:col-span-6 lg:col-span-4">`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "md",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>Following</span>`);
                  } else {
                    return [
                      createVNode("span", null, "Following")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseIconBox, {
                size: "md",
                class: "bg-emerald-500/20 text-emerald-500"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:users-three-duotone",
                      class: "h-6 w-6"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "ph:users-three-duotone",
                        class: "h-6 w-6"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="pb-6 pt-4"${_scopeId}><span class="text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none"${_scopeId}> 29 <small class="text-muted-500 dark:text-muted-400 text-sm font-medium"${_scopeId}> followed by you </small></span></div><div class="mb-2 flex items-center gap-2 font-sans"${_scopeId}><div class="text-success-500 flex items-center font-semibold"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-up-right",
                class: "h-4 w-4"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>+0.3%</span></div><span class="text-muted-400 text-sm"${_scopeId}>more than usual</span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(_component_BaseParagraph, {
                    size: "md",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Following")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseIconBox, {
                    size: "md",
                    class: "bg-emerald-500/20 text-emerald-500"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "ph:users-three-duotone",
                        class: "h-6 w-6"
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "pb-6 pt-4" }, [
                  createVNode("span", { class: "text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none" }, [
                    createTextVNode(" 29 "),
                    createVNode("small", { class: "text-muted-500 dark:text-muted-400 text-sm font-medium" }, " followed by you ")
                  ])
                ]),
                createVNode("div", { class: "mb-2 flex items-center gap-2 font-sans" }, [
                  createVNode("div", { class: "text-success-500 flex items-center font-semibold" }, [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-up-right",
                      class: "h-4 w-4"
                    }),
                    createVNode("span", null, "+0.3%")
                  ]),
                  createVNode("span", { class: "text-muted-400 text-sm" }, "more than usual")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="ltablet:col-span-4 col-span-12 sm:col-span-6 lg:col-span-4">`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "md",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>Likes (30 days)</span>`);
                  } else {
                    return [
                      createVNode("span", null, "Likes (30 days)")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseIconBox, {
                size: "md",
                class: "bg-pink-500/20 text-pink-500"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:heart-duotone",
                      class: "h-6 w-6"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "ph:heart-duotone",
                        class: "h-6 w-6"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="pb-6 pt-4"${_scopeId}><span class="text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none"${_scopeId}> 80.4k <small class="text-muted-500 dark:text-muted-400 text-sm font-medium"${_scopeId}> likes of your content </small></span></div><div class="mb-2 flex items-center gap-2 font-sans"${_scopeId}><div class="text-success-500 flex items-center font-semibold"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-up-right",
                class: "h-4 w-4"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>+65.7%</span></div><span class="text-muted-400 text-sm"${_scopeId}> engagement growth </span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(_component_BaseParagraph, {
                    size: "md",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Likes (30 days)")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseIconBox, {
                    size: "md",
                    class: "bg-pink-500/20 text-pink-500"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "ph:heart-duotone",
                        class: "h-6 w-6"
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "pb-6 pt-4" }, [
                  createVNode("span", { class: "text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none" }, [
                    createTextVNode(" 80.4k "),
                    createVNode("small", { class: "text-muted-500 dark:text-muted-400 text-sm font-medium" }, " likes of your content ")
                  ])
                ]),
                createVNode("div", { class: "mb-2 flex items-center gap-2 font-sans" }, [
                  createVNode("div", { class: "text-success-500 flex items-center font-semibold" }, [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-up-right",
                      class: "h-4 w-4"
                    }),
                    createVNode("span", null, "+65.7%")
                  ]),
                  createVNode("span", { class: "text-muted-400 text-sm" }, " engagement growth ")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="ltablet:col-span-4 col-span-12 sm:col-span-6 lg:col-span-4">`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "md",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>Comments (30 days)</span>`);
                  } else {
                    return [
                      createVNode("span", null, "Comments (30 days)")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseIconBox, {
                size: "md",
                class: "bg-yellow-500/20 text-yellow-500"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:chat-circle-duotone",
                      class: "h-6 w-6"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "ph:chat-circle-duotone",
                        class: "h-6 w-6"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="pb-6 pt-4"${_scopeId}><span class="text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none"${_scopeId}> 22.8k <small class="text-muted-500 dark:text-muted-400 text-sm font-medium"${_scopeId}> comments published </small></span></div><div class="mb-2 flex items-center gap-2 font-sans"${_scopeId}><div class="text-success-500 flex items-center font-semibold"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-up-right",
                class: "h-4 w-4"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>+49.3%</span></div><span class="text-muted-400 text-sm"${_scopeId}> engagement growth </span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(_component_BaseParagraph, {
                    size: "md",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Comments (30 days)")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseIconBox, {
                    size: "md",
                    class: "bg-yellow-500/20 text-yellow-500"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "ph:chat-circle-duotone",
                        class: "h-6 w-6"
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "pb-6 pt-4" }, [
                  createVNode("span", { class: "text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none" }, [
                    createTextVNode(" 22.8k "),
                    createVNode("small", { class: "text-muted-500 dark:text-muted-400 text-sm font-medium" }, " comments published ")
                  ])
                ]),
                createVNode("div", { class: "mb-2 flex items-center gap-2 font-sans" }, [
                  createVNode("div", { class: "text-success-500 flex items-center font-semibold" }, [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-up-right",
                      class: "h-4 w-4"
                    }),
                    createVNode("span", null, "+49.3%")
                  ]),
                  createVNode("span", { class: "text-muted-400 text-sm" }, " engagement growth ")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="ltablet:col-span-4 col-span-12 sm:col-span-6 lg:col-span-4">`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "md",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>Profile views (30 days)</span>`);
                  } else {
                    return [
                      createVNode("span", null, "Profile views (30 days)")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseIconBox, {
                size: "md",
                class: "bg-lime-500/20 text-lime-500"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:user-duotone",
                      class: "h-6 w-6"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "ph:user-duotone",
                        class: "h-6 w-6"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="pb-6 pt-4"${_scopeId}><span class="text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none"${_scopeId}> 48.3k <small class="text-muted-500 dark:text-muted-400 text-sm font-medium"${_scopeId}> views of profile </small></span></div><div class="mb-2 flex items-center gap-2 font-sans"${_scopeId}><div class="text-success-500 flex items-center font-semibold"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-up-right",
                class: "h-4 w-4"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>+34.2%</span></div><span class="text-muted-400 text-sm"${_scopeId}> engagement growth </span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(_component_BaseParagraph, {
                    size: "md",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Profile views (30 days)")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseIconBox, {
                    size: "md",
                    class: "bg-lime-500/20 text-lime-500"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "ph:user-duotone",
                        class: "h-6 w-6"
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "pb-6 pt-4" }, [
                  createVNode("span", { class: "text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none" }, [
                    createTextVNode(" 48.3k "),
                    createVNode("small", { class: "text-muted-500 dark:text-muted-400 text-sm font-medium" }, " views of profile ")
                  ])
                ]),
                createVNode("div", { class: "mb-2 flex items-center gap-2 font-sans" }, [
                  createVNode("div", { class: "text-success-500 flex items-center font-semibold" }, [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-up-right",
                      class: "h-4 w-4"
                    }),
                    createVNode("span", null, "+34.2%")
                  ]),
                  createVNode("span", { class: "text-muted-400 text-sm" }, " engagement growth ")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></div></div>`);
      } else if (unref(activeTab) === "tab-2") {
        _push(`<div class="mt-28"><div class="ltablet:grid-cols-3 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
        ssrRenderList(companies, (company, index) => {
          _push(`<div class="relative h-full">`);
          _push(ssrRenderComponent(_component_BaseCard, {
            shape: "curved",
            class: "flex h-full flex-col p-6"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex h-full w-full flex-col gap-4"${_scopeId}><div${ssrRenderAttr("data-nui-tooltip", company.name)}${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: company.logo,
                  class: "h-8 w-8 shrink-0"
                }, null, _parent2, _scopeId));
                _push2(`</div><div class="flex h-full flex-col"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseHeading, {
                  as: "h4",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "after:text-muted-800 mb-4 dark:text-white"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span${_scopeId2}>${ssrInterpolate(company.name)}</span>`);
                    } else {
                      return [
                        createVNode("span", null, toDisplayString(company.name), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_BaseParagraph, { size: "sm" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span class="text-muted-500 dark:text-muted-400 line-clamp-4"${_scopeId2}>${ssrInterpolate(company.description)}</span>`);
                    } else {
                      return [
                        createVNode("span", { class: "text-muted-500 dark:text-muted-400 line-clamp-4" }, toDisplayString(company.description), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`<div class="divide-muted-200 dark:divide-muted-700 mt-auto flex items-center justify-center divide-x py-4"${_scopeId}><!--[-->`);
                ssrRenderList(company.stats, (stat, statIndex) => {
                  _push2(`<div class="my-4 flex-1 px-4 text-center font-sans"${_scopeId}><span class="text-muted-800 dark:text-muted-100 block font-semibold"${_scopeId}>${ssrInterpolate(stat.label === "Income" ? `$${stat.value}k` : stat.value)}</span><span class="text-muted-400 block text-xs"${_scopeId}>${ssrInterpolate(stat.label)}</span></div>`);
                });
                _push2(`<!--]--></div><div class="flex items-center justify-between"${_scopeId}><div${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseAvatarGroup, {
                  avatars: company.followers,
                  limit: 3,
                  size: "xs"
                }, null, _parent2, _scopeId));
                _push2(`</div><div class="flex gap-2"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseButton, {
                  shape: "curved",
                  color: "default",
                  class: "w-28"
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
                  createVNode("div", { class: "flex h-full w-full flex-col gap-4" }, [
                    createVNode("div", {
                      "data-nui-tooltip": company.name
                    }, [
                      createVNode(_component_Icon, {
                        name: company.logo,
                        class: "h-8 w-8 shrink-0"
                      }, null, 8, ["name"])
                    ], 8, ["data-nui-tooltip"]),
                    createVNode("div", { class: "flex h-full flex-col" }, [
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "md",
                        weight: "semibold",
                        lead: "tight",
                        class: "after:text-muted-800 mb-4 dark:text-white"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, toDisplayString(company.name), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_BaseParagraph, { size: "sm" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-muted-500 dark:text-muted-400 line-clamp-4" }, toDisplayString(company.description), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode("div", { class: "divide-muted-200 dark:divide-muted-700 mt-auto flex items-center justify-center divide-x py-4" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(company.stats, (stat, statIndex) => {
                          return openBlock(), createBlock("div", {
                            key: statIndex,
                            class: "my-4 flex-1 px-4 text-center font-sans"
                          }, [
                            createVNode("span", { class: "text-muted-800 dark:text-muted-100 block font-semibold" }, toDisplayString(stat.label === "Income" ? `$${stat.value}k` : stat.value), 1),
                            createVNode("span", { class: "text-muted-400 block text-xs" }, toDisplayString(stat.label), 1)
                          ]);
                        }), 128))
                      ]),
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createVNode("div", null, [
                          createVNode(_component_BaseAvatarGroup, {
                            avatars: company.followers,
                            limit: 3,
                            size: "xs"
                          }, null, 8, ["avatars"])
                        ]),
                        createVNode("div", { class: "flex gap-2" }, [
                          createVNode(_component_BaseButton, {
                            shape: "curved",
                            color: "default",
                            class: "w-28"
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
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/influencer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=influencer-ee0a7bf2.mjs.map
