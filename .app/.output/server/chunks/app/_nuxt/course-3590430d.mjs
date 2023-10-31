import { s as _sfc_main$E, _ as _sfc_main$p, b as _sfc_main$o, d as _sfc_main$x, j as _sfc_main$C, f as __nuxt_component_2 } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseTag-734af285.mjs';
import { _ as _sfc_main$2 } from './BaseAvatarGroup-6e7b4ecf.mjs';
import { _ as _sfc_main$3 } from './BaseButtonAction-57c21d00.mjs';
import { _ as _sfc_main$4 } from './BaseButtonIcon-6150946c.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$1$1, b as _sfc_main$5 } from './DemoFlexTableCell-bbf39793.mjs';
import { defineComponent, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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
import './BaseIconBox-642fe941.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "course",
  __ssrInlineRender: true,
  setup(__props) {
    const courses = [
      {
        title: "ANA118 - Anatomy and physiology of young subjects",
        description: "This week features a deeper approach of young subject anatomy and basic physiological properties. It also focuses on the latest released articles.",
        category: "Anatomy",
        week: 6,
        duration: 120,
        comments: 25,
        time: "10:00 - 12:00",
        date: "Feb 3, 2023",
        students: [
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
        title: "IMM107 - Immunology and treatment of human disease",
        description: "This unit has a strong focus on significal clinical problems in immunology and the scientific background to these problems.",
        category: "Immunology",
        week: 6,
        duration: 90,
        comments: 12,
        time: "9:00 - 10:30",
        date: "Feb 7, 2023",
        students: [
          {
            tooltip: "Anna Vorsky",
            src: "/img/avatars/12.svg"
          },
          {
            tooltip: "Hermann Mayer",
            src: "/img/avatars/16.svg"
          },
          {
            tooltip: "Eddie Johnson",
            src: "/img/avatars/8.svg"
          },
          {
            tooltip: "Jane Doe",
            src: "/img/avatars/14.svg"
          }
        ]
      },
      {
        title: "CAR112 - Cardiovascular Metabolic Management",
        description: "This unit has a strong focus on significal clinical problems in immunology and the scientific background to these problems.",
        category: "Cardiology",
        week: 6,
        duration: 120,
        comments: 7,
        time: "2:00 - 4:00",
        date: "Feb 7, 2023",
        students: [
          {
            tooltip: "Troy Baker",
            src: "/img/avatars/15.svg"
          },
          {
            tooltip: "Alan Baxter",
            src: "/img/avatars/11.svg"
          },
          {
            tooltip: "Eric Klaus",
            src: "/img/avatars/7.svg"
          },
          {
            tooltip: "Jane Doe",
            src: "/img/avatars/17.svg"
          }
        ]
      }
    ];
    const files = [
      {
        name: "Holtz - Complete Anatomy",
        size: "94.7 MB",
        uploaded: "2 days ago",
        icon: "/img/icons/files/pdf.svg"
      },
      {
        name: "Assessing doses Pt. 2",
        size: "79 KB",
        uploaded: "1 week ago",
        icon: "/img/icons/files/sheet.svg"
      },
      {
        name: "Written exam template",
        size: "42 KB",
        uploaded: "2 weeks ago",
        icon: "/img/icons/files/doc-2.svg"
      }
    ];
    const students = [
      {
        name: "Maya Rosselini",
        avatar: "/img/avatars/2.svg",
        completion: "78% completed",
        location: "Los Angeles, CA",
        status: "Online",
        presence: "On time"
      },
      {
        name: "Clark Smith",
        avatar: "/img/avatars/3.svg",
        completion: "64% completed",
        location: "San Diego, CA",
        status: "Offline",
        presence: "Late (10 min)"
      },
      {
        name: "Hermann Mayer",
        avatar: "/img/avatars/16.svg",
        completion: "37% completed",
        location: "New York, NY",
        status: "Online",
        presence: "Late (5 min)"
      },
      {
        name: "Andrew Brickman",
        avatar: "/img/avatars/8.svg",
        completion: "89% completed",
        location: "San Diego, CA",
        status: "Online",
        presence: "On time"
      },
      {
        name: "Jen Connelli",
        avatar: "/img/avatars/10.svg",
        completion: "54% completed",
        location: "San Francisco, CA",
        status: "Offline",
        presence: "On time"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseButton = _sfc_main$x;
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseTag = _sfc_main$1;
      const _component_BaseAvatarGroup = _sfc_main$2;
      const _component_BaseButtonAction = _sfc_main$3;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseButtonIcon = _sfc_main$4;
      const _component_DemoFlexTableRow = _sfc_main$2$1;
      const _component_DemoFlexTableStart = _sfc_main$1$1;
      const _component_DemoFlexTableCell = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-8 flex flex-col justify-between md:flex-row md:items-center"><div class="ltablet:max-w-full flex max-w-[425px] flex-col items-center gap-4 text-center md:flex-row md:text-left lg:max-w-full">`);
      _push(ssrRenderComponent(_component_BaseAvatar, {
        src: "/img/avatars/2.svg",
        size: "lg"
      }, null, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "2xl",
        weight: "light",
        lead: "tight",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Week 6 classes</span>`);
          } else {
            return [
              createVNode("span", null, "Week 6 classes")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-500"${_scopeId}>Classes from January 6 to 10</span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-500" }, "Classes from January 6 to 10")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="mt-4 flex items-center justify-center gap-2 md:mt-0 md:justify-start">`);
      _push(ssrRenderComponent(_component_BaseButton, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Settings</span>`);
          } else {
            return [
              createVNode("span", null, "Settings")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButton, { color: "primary" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Schedule</span>`);
          } else {
            return [
              createVNode("span", null, "Schedule")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="ltablet:gap-4 grid grid-cols-12 gap-6"><!--[-->`);
      ssrRenderList(courses, (course, index) => {
        _push(`<div class="ltablet:col-span-4 relative col-span-12 sm:col-span-6 lg:col-span-4">`);
        _push(ssrRenderComponent(_component_BaseCard, {
          shape: "curved",
          class: "flex h-full flex-col p-6"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="mb-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseTag, { color: "primary" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(course.category)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(course.category), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div><div class="mb-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h3",
                size: "lg",
                weight: "medium",
                lead: "tight",
                class: "mb-2"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-muted-800 dark:text-muted-100"${_scopeId2}>${ssrInterpolate(course.title)}</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-muted-800 dark:text-muted-100" }, toDisplayString(course.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "sm",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(course.description)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(course.description), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div><div class="mb-8 mt-auto flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseAvatarGroup, {
                avatars: course.students,
                limit: 3,
                size: "sm"
              }, null, _parent2, _scopeId));
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonAction, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>Discussion</span>`);
                  } else {
                    return [
                      createVNode("span", null, "Discussion")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div><div class="mb-8"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "md",
                weight: "medium",
                lead: "tight",
                class: "text-muted-800 dark:text-muted-100 mb-2"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>Week ${ssrInterpolate(course.week)} lecture recording</span>`);
                  } else {
                    return [
                      createVNode("span", null, "Week " + toDisplayString(course.week) + " lecture recording", 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<div class="flex gap-6"${_scopeId}><div class="text-muted-400 flex items-center gap-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ph:timer-duotone",
                class: "h-5 w-5"
              }, null, _parent2, _scopeId));
              _push2(`<span class="font-sans text-sm"${_scopeId}>${ssrInterpolate(course.duration)} min</span></div><div class="text-muted-400 flex items-center gap-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ph:chat-circle-dots-duotone",
                class: "h-5 w-5"
              }, null, _parent2, _scopeId));
              _push2(`<span class="font-sans text-sm"${_scopeId}>${ssrInterpolate(course.comments)} comments </span></div></div></div><div class="mb-8"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "md",
                weight: "medium",
                lead: "tight",
                class: "text-muted-800 dark:text-muted-100 mb-2"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>Week ${ssrInterpolate(course.week)} examination</span>`);
                  } else {
                    return [
                      createVNode("span", null, "Week " + toDisplayString(course.week) + " examination", 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<div class="flex gap-6"${_scopeId}><div class="text-muted-400 flex items-center gap-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ph:calendar-check-duotone",
                class: "h-5 w-5"
              }, null, _parent2, _scopeId));
              _push2(`<span class="font-sans text-sm"${_scopeId}>${ssrInterpolate(course.date)} \u2014 ${ssrInterpolate(course.time)}</span></div></div></div><div class="mt-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButton, {
                color: "primary",
                shape: "curved",
                class: "w-full"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>Class Details</span>`);
                  } else {
                    return [
                      createVNode("span", null, "Class Details")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "mb-6" }, [
                  createVNode(_component_BaseTag, { color: "primary" }, {
                    default: withCtx(() => [
                      createVNode("span", null, toDisplayString(course.category), 1)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                createVNode("div", { class: "mb-6" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h3",
                    size: "lg",
                    weight: "medium",
                    lead: "tight",
                    class: "mb-2"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-muted-800 dark:text-muted-100" }, toDisplayString(course.title), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_BaseParagraph, {
                    size: "sm",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, toDisplayString(course.description), 1)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                createVNode("div", { class: "mb-8 mt-auto flex items-center justify-between" }, [
                  createVNode(_component_BaseAvatarGroup, {
                    avatars: course.students,
                    limit: 3,
                    size: "sm"
                  }, null, 8, ["avatars"]),
                  createVNode("div", null, [
                    createVNode(_component_BaseButtonAction, null, {
                      default: withCtx(() => [
                        createVNode("span", null, "Discussion")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "mb-8" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "md",
                    weight: "medium",
                    lead: "tight",
                    class: "text-muted-800 dark:text-muted-100 mb-2"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Week " + toDisplayString(course.week) + " lecture recording", 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode("div", { class: "flex gap-6" }, [
                    createVNode("div", { class: "text-muted-400 flex items-center gap-1" }, [
                      createVNode(_component_Icon, {
                        name: "ph:timer-duotone",
                        class: "h-5 w-5"
                      }),
                      createVNode("span", { class: "font-sans text-sm" }, toDisplayString(course.duration) + " min", 1)
                    ]),
                    createVNode("div", { class: "text-muted-400 flex items-center gap-1" }, [
                      createVNode(_component_Icon, {
                        name: "ph:chat-circle-dots-duotone",
                        class: "h-5 w-5"
                      }),
                      createVNode("span", { class: "font-sans text-sm" }, toDisplayString(course.comments) + " comments ", 1)
                    ])
                  ])
                ]),
                createVNode("div", { class: "mb-8" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "md",
                    weight: "medium",
                    lead: "tight",
                    class: "text-muted-800 dark:text-muted-100 mb-2"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Week " + toDisplayString(course.week) + " examination", 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode("div", { class: "flex gap-6" }, [
                    createVNode("div", { class: "text-muted-400 flex items-center gap-1" }, [
                      createVNode(_component_Icon, {
                        name: "ph:calendar-check-duotone",
                        class: "h-5 w-5"
                      }),
                      createVNode("span", { class: "font-sans text-sm" }, toDisplayString(course.date) + " \u2014 " + toDisplayString(course.time), 1)
                    ])
                  ])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_component_BaseButton, {
                    color: "primary",
                    shape: "curved",
                    class: "w-full"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Class Details")
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="ltablet:gap-x-4 mt-10 grid grid-cols-12 gap-x-6 gap-y-12"><div class="ltablet:col-span-4 col-span-12 lg:col-span-4"><div class="mb-4">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "lg",
        weight: "light",
        lead: "tight",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Week 6 files</span>`);
          } else {
            return [
              createVNode("span", null, "Week 6 files")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, { size: "sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-500"${_scopeId}> Files you will need for this week </span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-500" }, " Files you will need for this week ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-4"><!--[-->`);
      ssrRenderList(files, (file, fileIndex) => {
        _push(ssrRenderComponent(_component_BaseCard, {
          key: fileIndex,
          shape: "curved",
          class: "p-4"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex w-full items-center gap-3"${_scopeId}><img${ssrRenderAttr("src", file.icon)}${ssrRenderAttr("alt", file.name)} class="h-10 w-10 shrink-0"${_scopeId}><div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h2",
                size: "md",
                weight: "light",
                lead: "tight",
                class: "text-muted-800 dark:text-white"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(file.name)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(file.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-muted-400"${_scopeId2}>${ssrInterpolate(file.size)} \xB7 uploaded ${ssrInterpolate(file.uploaded)}</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-muted-400" }, toDisplayString(file.size) + " \xB7 uploaded " + toDisplayString(file.uploaded), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div><div class="ms-auto"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                small: "",
                "data-nui-tooltip": "Download file"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:arrow-down",
                      class: "h-4 w-4"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:arrow-down",
                        class: "h-4 w-4"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex w-full items-center gap-3" }, [
                  createVNode("img", {
                    src: file.icon,
                    alt: file.name,
                    class: "h-10 w-10 shrink-0"
                  }, null, 8, ["src", "alt"]),
                  createVNode("div", null, [
                    createVNode(_component_BaseHeading, {
                      as: "h2",
                      size: "md",
                      weight: "light",
                      lead: "tight",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, toDisplayString(file.name), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_BaseParagraph, { size: "xs" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-muted-400" }, toDisplayString(file.size) + " \xB7 uploaded " + toDisplayString(file.uploaded), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  createVNode("div", { class: "ms-auto" }, [
                    createVNode(_component_BaseButtonIcon, {
                      small: "",
                      "data-nui-tooltip": "Download file"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "lucide:arrow-down",
                          class: "h-4 w-4"
                        })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><div class="ltablet:col-span-8 col-span-12 lg:col-span-8"><div class="mb-4">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "lg",
        weight: "light",
        lead: "tight",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Students</span>`);
          } else {
            return [
              createVNode("span", null, "Students")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, { size: "sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-500"${_scopeId}>Summary of attending students</span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-500" }, "Summary of attending students")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-2"><!--[-->`);
      ssrRenderList(students, (student, studentIndex) => {
        _push(ssrRenderComponent(_component_DemoFlexTableRow, {
          key: studentIndex,
          shape: "curved",
          spaced: ""
        }, {
          start: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_DemoFlexTableStart, {
                label: "Student",
                "hide-label": "",
                title: student.name,
                subtitle: student.completion,
                avatar: student.avatar
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_DemoFlexTableStart, {
                  label: "Student",
                  "hide-label": "",
                  title: student.name,
                  subtitle: student.completion,
                  avatar: student.avatar
                }, null, 8, ["title", "subtitle", "avatar"])
              ];
            }
          }),
          end: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_DemoFlexTableCell, {
                label: "location",
                "hide-label": "",
                class: "w-full sm:w-32"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-muted-500 dark:text-muted-400 line-clamp-1 font-sans text-sm"${_scopeId2}>${ssrInterpolate(student.location)}</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-muted-500 dark:text-muted-400 line-clamp-1 font-sans text-sm" }, toDisplayString(student.location), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_DemoFlexTableCell, {
                label: "status",
                "hide-label": "",
                class: "w-full sm:w-16"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_BaseTag, {
                      color: student.status === "Online" ? "success" : "muted",
                      shape: "full",
                      flavor: "pastel",
                      size: "sm"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(student.status)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(student.status), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_BaseTag, {
                        color: student.status === "Online" ? "success" : "muted",
                        shape: "full",
                        flavor: "pastel",
                        size: "sm"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(student.status), 1)
                        ]),
                        _: 2
                      }, 1032, ["color"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_DemoFlexTableCell, {
                label: "location",
                "hide-label": "",
                class: "w-full sm:w-28"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-muted-500 dark:text-muted-400 font-sans text-sm"${_scopeId2}>${ssrInterpolate(student.presence)}</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-muted-500 dark:text-muted-400 font-sans text-sm" }, toDisplayString(student.presence), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_DemoFlexTableCell, {
                label: "action",
                "hide-label": ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_BaseButtonAction, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Chat`);
                        } else {
                          return [
                            createTextVNode("Chat")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_BaseButtonAction, null, {
                        default: withCtx(() => [
                          createTextVNode("Chat")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_DemoFlexTableCell, {
                  label: "location",
                  "hide-label": "",
                  class: "w-full sm:w-32"
                }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-muted-500 dark:text-muted-400 line-clamp-1 font-sans text-sm" }, toDisplayString(student.location), 1)
                  ]),
                  _: 2
                }, 1024),
                createVNode(_component_DemoFlexTableCell, {
                  label: "status",
                  "hide-label": "",
                  class: "w-full sm:w-16"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_BaseTag, {
                      color: student.status === "Online" ? "success" : "muted",
                      shape: "full",
                      flavor: "pastel",
                      size: "sm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(student.status), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"])
                  ]),
                  _: 2
                }, 1024),
                createVNode(_component_DemoFlexTableCell, {
                  label: "location",
                  "hide-label": "",
                  class: "w-full sm:w-28"
                }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-muted-500 dark:text-muted-400 font-sans text-sm" }, toDisplayString(student.presence), 1)
                  ]),
                  _: 2
                }, 1024),
                createVNode(_component_DemoFlexTableCell, {
                  label: "action",
                  "hide-label": ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_BaseButtonAction, null, {
                      default: withCtx(() => [
                        createTextVNode("Chat")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/course.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=course-3590430d.mjs.map
