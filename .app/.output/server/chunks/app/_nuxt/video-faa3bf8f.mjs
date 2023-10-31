import { _ as _sfc_main$p, b as _sfc_main$o, f as __nuxt_component_2, s as _sfc_main$E, e as __nuxt_component_0$5, d as _sfc_main$x } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseButtonIcon-6150946c.mjs';
import { _ as _sfc_main$2 } from './BaseTag-734af285.mjs';
import { defineComponent, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "video",
  __ssrInlineRender: true,
  setup(__props) {
    const featuredVideos = [
      {
        id: 1,
        title: "Code a responsive landing page using Tailwind CSS",
        slug: "",
        cover: "/img/illustrations/dashboards/video/1.png",
        uploaded: "2 hours ago",
        category: "Frontend",
        author: {
          name: "Hermann Mayer",
          avatar: "/img/avatars/16.svg"
        }
      },
      {
        id: 2,
        title: "Designing a consistent UI framework for your app",
        slug: "",
        cover: "/img/illustrations/dashboards/video/2.jpg",
        uploaded: "6 hours ago",
        category: "UI/UX",
        author: {
          name: "Kendra Wilson",
          avatar: "/img/avatars/10.svg"
        }
      },
      {
        id: 3,
        title: "Designing a set of chart widgets for my next dashboard",
        slug: "",
        cover: "/img/illustrations/dashboards/video/3.png",
        uploaded: "Yesterday",
        category: "Frontend",
        author: {
          name: "Anna Lopez",
          avatar: "/img/avatars/12.svg"
        }
      },
      {
        id: 4,
        title: "Integrating minimalism and negative space in your designs",
        slug: "",
        cover: "/img/illustrations/dashboards/video/4.png",
        uploaded: "2 days ago",
        category: "Design",
        author: {
          name: "John Polack",
          avatar: "/img/avatars/17.svg"
        }
      },
      {
        id: 5,
        title: "Creating reusable sections using Tailwind CSS",
        slug: "",
        cover: "/img/illustrations/dashboards/video/5.png",
        uploaded: "Last week",
        category: "UI/UX",
        author: {
          name: "Maya Rosselini",
          avatar: "/img/avatars/2.svg"
        }
      }
    ];
    const videos = [
      {
        id: 6,
        title: "How to think a mobile app landing page design",
        slug: "",
        cover: "/img/illustrations/dashboards/video/6.png",
        uploaded: "7 hours ago",
        category: "Frontend",
        author: {
          name: "Alan Skelli",
          avatar: "/img/avatars/11.svg"
        }
      },
      {
        id: 6,
        title: "8 tips to deliver the right message when talking to personas",
        slug: "",
        cover: "/img/illustrations/dashboards/video/7.jpg",
        uploaded: "Yesterday",
        category: "UI/UX",
        author: {
          name: "Kendra Wilson",
          avatar: "/img/avatars/10.svg"
        }
      },
      {
        id: 7,
        title: "5 Differences between promoting your services and a product",
        slug: "",
        cover: "/img/illustrations/dashboards/video/8.jpg",
        uploaded: "Yesterday",
        category: "Branding",
        author: {
          name: "Clarissa Miller",
          avatar: "/img/avatars/5.svg"
        }
      },
      {
        id: 8,
        title: "Speed up your mobile development velocity using Flutter",
        slug: "",
        cover: "/img/illustrations/dashboards/video/9.png",
        uploaded: "2 days ago",
        category: "Mobile",
        author: {
          name: "Hermann Mayer",
          avatar: "/img/avatars/16.svg"
        }
      },
      {
        id: 9,
        title: "How I created a full featured design system for my last project",
        slug: "",
        cover: "/img/illustrations/dashboards/video/10.png",
        uploaded: "Yesterday",
        category: "UI/UX",
        author: {
          name: "Anna Lopez",
          avatar: "/img/avatars/12.svg"
        }
      },
      {
        id: 9,
        title: "The never ending debate between development and low code projects",
        slug: "",
        cover: "/img/illustrations/dashboards/video/11.png",
        uploaded: "5 days ago",
        category: "Engineering",
        author: {
          name: "Ron Smith",
          avatar: "/img/avatars/14.svg"
        }
      },
      {
        id: 10,
        title: "Using javascript component to enforce code reusability in your project",
        slug: "",
        cover: "/img/illustrations/dashboards/video/12.png",
        uploaded: "2 weeks ago",
        category: "Engineering",
        author: {
          name: "Peter Weyland",
          avatar: "/img/avatars/15.svg"
        }
      },
      {
        id: 11,
        title: "How to use minimalism to emphasize the right message in your designs",
        slug: "",
        cover: "/img/illustrations/dashboards/video/13.png",
        uploaded: "1 month ago",
        category: "UI/UX",
        author: {
          name: "Clark Hamilton",
          avatar: "/img/avatars/3.svg"
        }
      },
      {
        id: 12,
        title: "10 Challenges UX designers should be able to face in their career",
        slug: "",
        cover: "/img/illustrations/dashboards/video/14.png",
        uploaded: "1 month ago",
        category: "UI/UX",
        author: {
          name: "Maya Rosselini",
          avatar: "/img/avatars/2.svg"
        }
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseButtonIcon = _sfc_main$1;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseAvatar = _sfc_main$E;
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_BaseTag = _sfc_main$2;
      const _component_BaseButton = _sfc_main$x;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-8 flex flex-col justify-between md:flex-row md:items-center"><div class="ltablet:max-w-full flex max-w-[425px] flex-col items-center gap-4 text-center md:flex-row md:text-left lg:max-w-full"><div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "xl",
        weight: "light",
        lead: "tight",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Recent Videos</span>`);
          } else {
            return [
              createVNode("span", null, "Recent Videos")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-500"${_scopeId}> Recent videos that were posted earlier today </span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-500" }, " Recent videos that were posted earlier today ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="xs:text-center xs:mt-2 space-y-2"><span class="text-muted-400 font-sans text-xs font-medium uppercase"> My Team </span><div class="flex items-center justify-center gap-2 md:justify-start">`);
      _push(ssrRenderComponent(_component_BaseButtonIcon, { small: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:plus",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:plus",
                class: "h-4 w-4"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseAvatar, {
        size: "xs",
        shape: "straight",
        mask: "blob",
        src: "/img/avatars/10.svg"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseAvatar, {
        size: "xs",
        shape: "straight",
        mask: "blob",
        src: "/img/avatars/8.svg"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseAvatar, {
        size: "xs",
        shape: "straight",
        mask: "blob",
        src: "/img/avatars/5.svg"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseAvatar, {
        size: "xs",
        shape: "straight",
        mask: "blob",
        src: "/img/avatars/16.svg"
      }, null, _parent));
      _push(`</div></div></div><div class="relative"><div class="grid min-h-[440px] grid-cols-12 gap-6"><!--[-->`);
      ssrRenderList(featuredVideos.slice(0, 1), (video) => {
        _push(`<div class="ltablet:col-span-6 col-span-12 lg:col-span-6"><div class="flex h-full flex-col"><div class="bg-muted-200 dark:bg-muted-800 group relative h-full w-full overflow-hidden rounded-2xl"><img${ssrRenderAttr("src", video.cover)}${ssrRenderAttr("alt", video.title)} class="w-full object-cover object-center"><div class="absolute inset-x-0 bottom-0 z-10 h-3/5 w-full bg-gradient-to-t from-black transition-all duration-500 ease-in-out group-hover:h-full"></div><div class="absolute inset-0 z-20 flex h-full w-full flex-col justify-between"><div class="ptablet:p-10 p-6">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "#",
          class: "group-hover:border-primary-500 text-muted-300 group-hover:text-primary-500 shadow-muted-300/30 dark:shadow-muted-900/20 flex h-14 w-14 items-center justify-center rounded-full border-2 border-transparent bg-white shadow-2xl transition-colors duration-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ic:round-play-arrow",
                class: "h-7 w-7"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "ic:round-play-arrow",
                  class: "h-7 w-7"
                })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="ptablet:p-10 p-6">`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h3",
                size: "3xl",
                weight: "bold",
                lead: "tight",
                class: "xs:text-xl hover:text-primary-300 mb-4 line-clamp-2 text-white transition-colors duration-300"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(video.title)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(video.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "3xl",
                  weight: "bold",
                  lead: "tight",
                  class: "xs:text-xl hover:text-primary-300 mb-4 line-clamp-2 text-white transition-colors duration-300"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, toDisplayString(video.title), 1)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div class="flex gap-3">`);
        _push(ssrRenderComponent(_component_BaseAvatar, {
          src: video.author.avatar,
          text: video.author.name.slice(0, 1),
          size: "xs",
          class: "bg-primary-100 dark:bg-primary-500/20 text-primary-500 shrink-0"
        }, null, _parent));
        _push(`<div>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "xs",
                weight: "light",
                lead: "tight",
                class: "hover:text-primary-500 text-white transition-colors duration-300"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(video.author.name)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(video.author.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "xs",
                  weight: "light",
                  lead: "tight",
                  class: "hover:text-primary-500 text-white transition-colors duration-300"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, toDisplayString(video.author.name), 1)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-muted-400"${_scopeId}>${ssrInterpolate(video.uploaded)}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-muted-400" }, toDisplayString(video.uploaded), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="ms-auto">`);
        _push(ssrRenderComponent(_component_BaseTag, {
          color: "primary",
          shape: "full",
          size: "sm"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(video.category)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(video.category), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div></div></div></div></div>`);
      });
      _push(`<!--]--><div class="ltablet:col-span-6 col-span-12 lg:col-span-6"><div class="flex h-full flex-col"><div class="grid h-full grid-cols-12 gap-6"><!--[-->`);
      ssrRenderList(featuredVideos.slice(1), (video) => {
        _push(`<div class="col-span-12 sm:col-span-6"><div class="group flex h-full flex-col"><div class="bg-muted-200 dark:bg-muted-800 relative h-full w-full overflow-hidden rounded-2xl"><img${ssrRenderAttr("src", video.cover)}${ssrRenderAttr("alt", video.title)} class="w-full object-cover object-center"><div class="absolute inset-x-0 bottom-0 z-10 h-3/5 w-full bg-gradient-to-t from-black transition-all duration-500 ease-in-out group-hover:h-full"></div><div class="absolute inset-0 z-20 flex h-full w-full flex-col justify-between"><div class="p-4">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "#",
          class: "group-hover:border-primary-500 text-muted-300 group-hover:text-primary-500 shadow-muted-300/30 dark:shadow-muted-900/20 flex h-10 w-10 items-center justify-center rounded-full border-2 border-transparent bg-white shadow-2xl transition-colors duration-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ic:round-play-arrow",
                class: "h-5 w-5"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "ic:round-play-arrow",
                  class: "h-5 w-5"
                })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="p-4">`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h3",
                size: "md",
                weight: "medium",
                lead: "tight",
                class: "xs:text-xl ptablet:text-xl ptablet:font-bold xs:font-bold hover:text-primary-300 mb-4 line-clamp-2 text-white transition-colors duration-300"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(video.title)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(video.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "medium",
                  lead: "tight",
                  class: "xs:text-xl ptablet:text-xl ptablet:font-bold xs:font-bold hover:text-primary-300 mb-4 line-clamp-2 text-white transition-colors duration-300"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, toDisplayString(video.title), 1)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div class="flex gap-3">`);
        _push(ssrRenderComponent(_component_BaseAvatar, {
          src: video.author.avatar,
          text: video.author.name.slice(0, 1),
          size: "xs",
          class: "bg-primary-100 dark:bg-primary-500/20 text-primary-500 shrink-0"
        }, null, _parent));
        _push(`<div>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "xs",
                weight: "light",
                lead: "tight",
                class: "hover:text-primary-500 text-white transition-colors duration-300"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(video.author.name)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(video.author.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "xs",
                  weight: "light",
                  lead: "tight",
                  class: "hover:text-primary-500 text-white transition-colors duration-300"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, toDisplayString(video.author.name), 1)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-muted-400"${_scopeId}>${ssrInterpolate(video.uploaded)}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-muted-400" }, toDisplayString(video.uploaded), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="ms-auto">`);
        _push(ssrRenderComponent(_component_BaseTag, {
          color: "primary",
          shape: "full",
          size: "sm"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(video.category)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(video.category), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></div><div class="mb-8 mt-12 flex flex-col justify-between md:flex-row md:items-center"><div class="ltablet:max-w-full flex max-w-[425px] flex-col items-center gap-4 text-center md:flex-row md:text-left lg:max-w-full"><div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "lg",
        weight: "light",
        lead: "tight",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Popular Videos</span>`);
          } else {
            return [
              createVNode("span", null, "Popular Videos")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, { size: "sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-500"${_scopeId}> Videos that were recently viewed by many people </span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-500" }, " Videos that were recently viewed by many people ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div><div class="xs:mt-2 flex items-center justify-center gap-2 md:justify-start">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        small: "",
        shape: "full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:video",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Upload</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:video",
                class: "h-4 w-4"
              }),
              createVNode("span", null, "Upload")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="grid grid-cols-12 gap-6"><!--[-->`);
      ssrRenderList(videos, (video) => {
        _push(`<div class="ptablet:col-span-6 col-span-12 sm:col-span-4"><div class="group flex flex-col"><div class="bg-muted-200 dark:bg-muted-800 relative w-full overflow-hidden rounded-2xl"><img${ssrRenderAttr("src", video.cover)}${ssrRenderAttr("alt", video.title)} class="w-full object-cover object-center"><div class="absolute inset-x-0 bottom-0 z-10 h-3/5 w-full bg-gradient-to-t from-black transition-all duration-500 ease-in-out group-hover:h-full"></div><div class="absolute inset-0 z-20 flex w-full flex-col justify-between"><div class="p-4">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "#",
          class: "group-hover:border-primary-500 text-muted-300 group-hover:text-primary-500 shadow-muted-300/30 dark:shadow-muted-900/20 flex h-10 w-10 items-center justify-center rounded-full border-2 border-transparent bg-white shadow-2xl transition-colors duration-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ic:round-play-arrow",
                class: "h-5 w-5"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "ic:round-play-arrow",
                  class: "h-5 w-5"
                })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="p-4">`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h3",
                size: "xl",
                weight: "medium",
                lead: "tight",
                class: "xs:text-xl xs:font-bold hover:text-primary-300 mb-4 line-clamp-2 text-white transition-colors duration-300"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(video.title)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(video.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "xl",
                  weight: "medium",
                  lead: "tight",
                  class: "xs:text-xl xs:font-bold hover:text-primary-300 mb-4 line-clamp-2 text-white transition-colors duration-300"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, toDisplayString(video.title), 1)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div class="flex gap-3">`);
        _push(ssrRenderComponent(_component_BaseAvatar, {
          src: video.author.avatar,
          text: video.author.name.slice(0, 1),
          size: "xs",
          class: "bg-primary-100 dark:bg-primary-500/20 text-primary-500 shrink-0"
        }, null, _parent));
        _push(`<div>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "xs",
                weight: "light",
                lead: "tight",
                class: "hover:text-primary-500 text-white transition-colors duration-300"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(video.author.name)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(video.author.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "xs",
                  weight: "light",
                  lead: "tight",
                  class: "hover:text-primary-500 text-white transition-colors duration-300"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, toDisplayString(video.author.name), 1)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-muted-400"${_scopeId}>${ssrInterpolate(video.uploaded)}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-muted-400" }, toDisplayString(video.uploaded), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="ms-auto">`);
        _push(ssrRenderComponent(_component_BaseTag, {
          color: "primary",
          shape: "full",
          size: "sm"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(video.category)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(video.category), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div></div></div></div></div>`);
      });
      _push(`<!--]--></div><div class="my-16 flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        shape: "full",
        color: "default"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:dots-nine-bold",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Load more</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ph:dots-nine-bold",
                class: "h-4 w-4"
              }),
              createVNode("span", null, "Load more")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/video.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=video-faa3bf8f.mjs.map
