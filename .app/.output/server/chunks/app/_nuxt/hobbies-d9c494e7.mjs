import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as _sfc_main$p, b as _sfc_main$o, d as _sfc_main$x, e as __nuxt_component_0$5, f as __nuxt_component_2, j as _sfc_main$C } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseButtonIcon-6150946c.mjs';
import { _ as _sfc_main$2 } from './DemoSearchCompact-ed3fb5da.mjs';
import { defineComponent, withCtx, createVNode, unref, toDisplayString, useSSRContext } from 'vue';
import { g as getRandomColor } from './colors-16c42002.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0$1 } from './hobby-3-cc01f17f.mjs';
import { Calendar } from 'v-calendar';
import 'vue-bundle-renderer/runtime';
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
import 'devalue';
import '@unhead/ssr';
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

const _imports_0 = "" + publicAssetsURL("img/illustrations/dashboards/hobbies/hobby-1.svg");
const _imports_1 = "" + publicAssetsURL("img/illustrations/dashboards/hobbies/hobby-2.svg");
const _imports_3 = "" + publicAssetsURL("img/illustrations/dashboards/hobbies/hobby-4.svg");
const _imports_4 = "" + publicAssetsURL("img/illustrations/dashboards/hobbies/landscape-thumb-1.svg");
const _imports_5 = "" + publicAssetsURL("img/illustrations/dashboards/hobbies/landscape-thumb-7.svg");
const _imports_6 = "" + publicAssetsURL("img/illustrations/dashboards/hobbies/landscape-thumb-4.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "hobbies",
  __ssrInlineRender: true,
  setup(__props) {
    const trending = [
      {
        name: "Extreme foot trekk",
        date: "Oct 31, 2022",
        image: "/img/illustrations/dashboards/hobbies/landscape-thumb-1.svg",
        icon: "tabler:trekking"
      },
      {
        name: "Corporate rafting trip",
        date: "Nov 14, 2022",
        image: "/img/illustrations/dashboards/hobbies/landscape-thumb-1.svg",
        icon: "map:rafting"
      },
      {
        name: "Hiking in the Alps",
        date: "Dec 3, 2022",
        image: "/img/illustrations/dashboards/hobbies/landscape-thumb-1.svg",
        icon: "map:climbing"
      },
      {
        name: "Bicycle team mastery",
        date: "Dec 17, 2022",
        image: "/img/illustrations/dashboards/hobbies/landscape-thumb-1.svg",
        icon: "map:bicycle-store"
      }
    ];
    const popular = [
      {
        name: "Extreme triathlon",
        date: "Feb 4, 2023",
        image: "/img/illustrations/dashboards/hobbies/landscape-thumb-1.svg",
        icon: "map:kayaking"
      },
      {
        name: "Jungle hiking",
        date: "Jan 11, 2023",
        image: "/img/illustrations/dashboards/hobbies/landscape-thumb-1.svg",
        icon: "map:playground"
      },
      {
        name: "Archery challenge",
        date: "Dec 3, 2022",
        image: "/img/illustrations/dashboards/hobbies/landscape-thumb-1.svg",
        icon: "map:archery"
      },
      {
        name: "Extreme waterskiing",
        date: "Dec 21, 2022",
        image: "/img/illustrations/dashboards/hobbies/landscape-thumb-1.svg",
        icon: "map:waterskiing"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseButton = _sfc_main$x;
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseButtonIcon = _sfc_main$1;
      const _component_DemoSearchCompact = _sfc_main$2;
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
            _push2(`<span${_scopeId}>Explore Hobbies</span>`);
          } else {
            return [
              createVNode("span", null, "Explore Hobbies")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-500"${_scopeId}> Explore some of the best activities nearby in your region </span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-500" }, " Explore some of the best activities nearby in your region ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="mt-4 flex items-center justify-center gap-2 md:mt-0 md:justify-start">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        color: "primary",
        class: "w-32"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>View All</span>`);
          } else {
            return [
              createVNode("span", null, "View All")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="grid grid-cols-12 gap-4"><div class="ltablet:col-span-8 col-span-12 lg:col-span-8"><div class="grid grid-cols-12 gap-4"><div class="col-span-6 sm:col-span-3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "group relative flex w-full flex-col overflow-hidden rounded-2xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="h-80 w-full object-cover object-center"${ssrRenderAttr("src", _imports_0)} alt="Hobby cover"${_scopeId}><div class="bg-muted-900 absolute inset-0 z-10 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-50"${_scopeId}></div><div class="absolute inset-0 z-20 flex h-full w-full flex-col justify-between p-6"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><h3 class="-translate-y-2 font-sans tracking-wider text-white opacity-0 transition-all delay-100 duration-300 group-hover:translate-y-0 group-hover:opacity-100"${_scopeId}> Trekking </h3>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "eos-icons:bootstrapping",
              class: "h-5 w-5 -translate-y-2 text-white opacity-0 transition-all delay-300 duration-300 group-hover:translate-y-0 group-hover:opacity-100"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-between"${_scopeId}><h3 class="translate-y-2 font-sans text-sm text-white underline underline-offset-4 opacity-0 transition-all delay-500 duration-300 group-hover:translate-y-0 group-hover:opacity-100"${_scopeId}> View activities </h3>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:arrow-right",
              class: "h-4 w-4 translate-y-2 text-white opacity-0 transition-all delay-700 duration-300 group-hover:translate-y-0 group-hover:opacity-100"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("img", {
                class: "h-80 w-full object-cover object-center",
                src: _imports_0,
                alt: "Hobby cover"
              }),
              createVNode("div", { class: "bg-muted-900 absolute inset-0 z-10 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-50" }),
              createVNode("div", { class: "absolute inset-0 z-20 flex h-full w-full flex-col justify-between p-6" }, [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("h3", { class: "-translate-y-2 font-sans tracking-wider text-white opacity-0 transition-all delay-100 duration-300 group-hover:translate-y-0 group-hover:opacity-100" }, " Trekking "),
                  createVNode(_component_Icon, {
                    name: "eos-icons:bootstrapping",
                    class: "h-5 w-5 -translate-y-2 text-white opacity-0 transition-all delay-300 duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  })
                ]),
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("h3", { class: "translate-y-2 font-sans text-sm text-white underline underline-offset-4 opacity-0 transition-all delay-500 duration-300 group-hover:translate-y-0 group-hover:opacity-100" }, " View activities "),
                  createVNode(_component_Icon, {
                    name: "lucide:arrow-right",
                    class: "h-4 w-4 translate-y-2 text-white opacity-0 transition-all delay-700 duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-6 sm:col-span-3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "group relative flex w-full flex-col overflow-hidden rounded-2xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="h-80 w-full object-cover object-center"${ssrRenderAttr("src", _imports_1)} alt="Hobby cover"${_scopeId}><div class="bg-muted-900 absolute inset-0 z-10 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-50"${_scopeId}></div><div class="absolute inset-0 z-20 flex h-full w-full flex-col justify-between p-6"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><h3 class="-translate-y-2 font-sans tracking-wider text-white opacity-0 transition-all delay-100 duration-300 group-hover:translate-y-0 group-hover:opacity-100"${_scopeId}> Cycling </h3>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "fluent-emoji-high-contrast:wheel",
              class: "h-5 w-5 -translate-y-2 text-white opacity-0 transition-all delay-300 duration-300 group-hover:translate-y-0 group-hover:opacity-100"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-between"${_scopeId}><h3 class="translate-y-2 font-sans text-sm text-white underline underline-offset-4 opacity-0 transition-all delay-500 duration-300 group-hover:translate-y-0 group-hover:opacity-100"${_scopeId}> View activities </h3>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:arrow-right",
              class: "h-4 w-4 translate-y-2 text-white opacity-0 transition-all delay-700 duration-300 group-hover:translate-y-0 group-hover:opacity-100"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("img", {
                class: "h-80 w-full object-cover object-center",
                src: _imports_1,
                alt: "Hobby cover"
              }),
              createVNode("div", { class: "bg-muted-900 absolute inset-0 z-10 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-50" }),
              createVNode("div", { class: "absolute inset-0 z-20 flex h-full w-full flex-col justify-between p-6" }, [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("h3", { class: "-translate-y-2 font-sans tracking-wider text-white opacity-0 transition-all delay-100 duration-300 group-hover:translate-y-0 group-hover:opacity-100" }, " Cycling "),
                  createVNode(_component_Icon, {
                    name: "fluent-emoji-high-contrast:wheel",
                    class: "h-5 w-5 -translate-y-2 text-white opacity-0 transition-all delay-300 duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  })
                ]),
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("h3", { class: "translate-y-2 font-sans text-sm text-white underline underline-offset-4 opacity-0 transition-all delay-500 duration-300 group-hover:translate-y-0 group-hover:opacity-100" }, " View activities "),
                  createVNode(_component_Icon, {
                    name: "lucide:arrow-right",
                    class: "h-4 w-4 translate-y-2 text-white opacity-0 transition-all delay-700 duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-6 sm:col-span-3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "group relative flex w-full flex-col overflow-hidden rounded-2xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="h-80 w-full object-cover object-center"${ssrRenderAttr("src", _imports_0$1)} alt="Hobby cover"${_scopeId}><div class="bg-muted-900 absolute inset-0 z-10 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-50"${_scopeId}></div><div class="absolute inset-0 z-20 flex h-full w-full flex-col justify-between p-6"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><h3 class="-translate-y-2 font-sans tracking-wider text-white opacity-0 transition-all delay-100 duration-300 group-hover:translate-y-0 group-hover:opacity-100"${_scopeId}> Exploration </h3>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "fa6-solid:compass",
              class: "h-5 w-5 -translate-y-2 text-white opacity-0 transition-all delay-300 duration-300 group-hover:translate-y-0 group-hover:opacity-100"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-between"${_scopeId}><h3 class="translate-y-2 font-sans text-sm text-white underline underline-offset-4 opacity-0 transition-all delay-500 duration-300 group-hover:translate-y-0 group-hover:opacity-100"${_scopeId}> View activities </h3>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:arrow-right",
              class: "h-4 w-4 translate-y-2 text-white opacity-0 transition-all delay-700 duration-300 group-hover:translate-y-0 group-hover:opacity-100"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("img", {
                class: "h-80 w-full object-cover object-center",
                src: _imports_0$1,
                alt: "Hobby cover"
              }),
              createVNode("div", { class: "bg-muted-900 absolute inset-0 z-10 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-50" }),
              createVNode("div", { class: "absolute inset-0 z-20 flex h-full w-full flex-col justify-between p-6" }, [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("h3", { class: "-translate-y-2 font-sans tracking-wider text-white opacity-0 transition-all delay-100 duration-300 group-hover:translate-y-0 group-hover:opacity-100" }, " Exploration "),
                  createVNode(_component_Icon, {
                    name: "fa6-solid:compass",
                    class: "h-5 w-5 -translate-y-2 text-white opacity-0 transition-all delay-300 duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  })
                ]),
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("h3", { class: "translate-y-2 font-sans text-sm text-white underline underline-offset-4 opacity-0 transition-all delay-500 duration-300 group-hover:translate-y-0 group-hover:opacity-100" }, " View activities "),
                  createVNode(_component_Icon, {
                    name: "lucide:arrow-right",
                    class: "h-4 w-4 translate-y-2 text-white opacity-0 transition-all delay-700 duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-6 sm:col-span-3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "group relative flex w-full flex-col overflow-hidden rounded-2xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="h-80 w-full object-cover object-center"${ssrRenderAttr("src", _imports_3)} alt="Hobby cover"${_scopeId}><div class="bg-muted-900 absolute inset-0 z-10 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-50"${_scopeId}></div><div class="absolute inset-0 z-20 flex h-full w-full flex-col justify-between p-6"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><h3 class="-translate-y-2 font-sans tracking-wider text-white opacity-0 transition-all delay-100 duration-300 group-hover:translate-y-0 group-hover:opacity-100"${_scopeId}> Hiking </h3>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "mdi:pickaxe",
              class: "h-5 w-5 -translate-y-2 text-white opacity-0 transition-all delay-300 duration-300 group-hover:translate-y-0 group-hover:opacity-100"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-between"${_scopeId}><h3 class="translate-y-2 font-sans text-sm text-white underline underline-offset-4 opacity-0 transition-all delay-500 duration-300 group-hover:translate-y-0 group-hover:opacity-100"${_scopeId}> View activities </h3>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:arrow-right",
              class: "h-4 w-4 translate-y-2 text-white opacity-0 transition-all delay-700 duration-300 group-hover:translate-y-0 group-hover:opacity-100"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("img", {
                class: "h-80 w-full object-cover object-center",
                src: _imports_3,
                alt: "Hobby cover"
              }),
              createVNode("div", { class: "bg-muted-900 absolute inset-0 z-10 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-50" }),
              createVNode("div", { class: "absolute inset-0 z-20 flex h-full w-full flex-col justify-between p-6" }, [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("h3", { class: "-translate-y-2 font-sans tracking-wider text-white opacity-0 transition-all delay-100 duration-300 group-hover:translate-y-0 group-hover:opacity-100" }, " Hiking "),
                  createVNode(_component_Icon, {
                    name: "mdi:pickaxe",
                    class: "h-5 w-5 -translate-y-2 text-white opacity-0 transition-all delay-300 duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  })
                ]),
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("h3", { class: "translate-y-2 font-sans text-sm text-white underline underline-offset-4 opacity-0 transition-all delay-500 duration-300 group-hover:translate-y-0 group-hover:opacity-100" }, " View activities "),
                  createVNode(_component_Icon, {
                    name: "lucide:arrow-right",
                    class: "h-4 w-4 translate-y-2 text-white opacity-0 transition-all delay-700 duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-12 sm:col-span-6"><div class="my-4">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "lg",
        weight: "light",
        lead: "tight",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Trending Now</span>`);
          } else {
            return [
              createVNode("span", null, "Trending Now")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, { size: "sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-500"${_scopeId}> Chek out the latest activities </span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-500" }, " Chek out the latest activities ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-2"><!--[-->`);
      ssrRenderList(trending, (item, i) => {
        _push(ssrRenderComponent(_component_BaseCard, {
          key: i,
          shape: "curved",
          class: "flex items-center gap-3 p-3"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="${ssrRenderClass([("getRandomColor" in _ctx ? _ctx.getRandomColor : unref(getRandomColor))(), "flex h-10 w-10 shrink-0 items-center justify-center rounded-full"])}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: item.icon,
                class: "h-5 w-5"
              }, null, _parent2, _scopeId));
              _push2(`</div><div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "sm",
                weight: "medium",
                lead: "tight",
                class: "text-muted-800 dark:text-white"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(item.name)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(item.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-muted-400"${_scopeId2}>${ssrInterpolate(item.date)}</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-muted-400" }, toDisplayString(item.date), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div><div class="ms-auto flex items-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                shape: "curved",
                muted: "",
                class: "scale-75"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:arrow-right",
                      class: "h-5 w-5"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:arrow-right",
                        class: "h-5 w-5"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", {
                  class: ["flex h-10 w-10 shrink-0 items-center justify-center rounded-full", ("getRandomColor" in _ctx ? _ctx.getRandomColor : unref(getRandomColor))()]
                }, [
                  createVNode(_component_Icon, {
                    name: item.icon,
                    class: "h-5 w-5"
                  }, null, 8, ["name"])
                ], 2),
                createVNode("div", null, [
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "medium",
                    lead: "tight",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, toDisplayString(item.name), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_BaseParagraph, { size: "xs" }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-muted-400" }, toDisplayString(item.date), 1)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                createVNode("div", { class: "ms-auto flex items-center" }, [
                  createVNode(_component_BaseButtonIcon, {
                    shape: "curved",
                    muted: "",
                    class: "scale-75"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:arrow-right",
                        class: "h-5 w-5"
                      })
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><div class="col-span-12 sm:col-span-6"><div class="my-4">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "lg",
        weight: "light",
        lead: "tight",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Popular ativities</span>`);
          } else {
            return [
              createVNode("span", null, "Popular ativities")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, { size: "sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-500"${_scopeId}> Chek out the latest activities </span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-500" }, " Chek out the latest activities ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-2"><!--[-->`);
      ssrRenderList(popular, (item, p) => {
        _push(ssrRenderComponent(_component_BaseCard, {
          key: p,
          shape: "curved",
          class: "flex items-center gap-3 p-3"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="${ssrRenderClass([("getRandomColor" in _ctx ? _ctx.getRandomColor : unref(getRandomColor))(), "flex h-10 w-10 shrink-0 items-center justify-center rounded-full"])}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: item.icon,
                class: "h-5 w-5"
              }, null, _parent2, _scopeId));
              _push2(`</div><div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "sm",
                weight: "medium",
                lead: "tight",
                class: "text-muted-800 dark:text-white"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(item.name)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(item.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-muted-400"${_scopeId2}>${ssrInterpolate(item.date)}</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-muted-400" }, toDisplayString(item.date), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div><div class="ms-auto flex items-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                shape: "curved",
                muted: "",
                class: "scale-75"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:arrow-right",
                      class: "h-5 w-5"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:arrow-right",
                        class: "h-5 w-5"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", {
                  class: ["flex h-10 w-10 shrink-0 items-center justify-center rounded-full", ("getRandomColor" in _ctx ? _ctx.getRandomColor : unref(getRandomColor))()]
                }, [
                  createVNode(_component_Icon, {
                    name: item.icon,
                    class: "h-5 w-5"
                  }, null, 8, ["name"])
                ], 2),
                createVNode("div", null, [
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "medium",
                    lead: "tight",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, toDisplayString(item.name), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_BaseParagraph, { size: "xs" }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-muted-400" }, toDisplayString(item.date), 1)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                createVNode("div", { class: "ms-auto flex items-center" }, [
                  createVNode(_component_BaseButtonIcon, {
                    shape: "curved",
                    muted: "",
                    class: "scale-75"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:arrow-right",
                        class: "h-5 w-5"
                      })
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div></div><div class="ltablet:col-span-4 col-span-12 lg:col-span-4"><div class="flex flex-col gap-6">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        class: "p-6",
        shape: "curved"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex w-full items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_DemoSearchCompact, { shape: "curved" }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex w-full items-center justify-between" }, [
                createVNode(_component_DemoSearchCompact, { shape: "curved" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "p-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Calendar), {
              attributes: [
                {
                  key: "today",
                  dot: true,
                  bar: false,
                  content: "Today",
                  customData: {},
                  event: {},
                  hashcode: "today",
                  highlight: false,
                  order: 0,
                  pinPage: false,
                  popover: {},
                  dates: [/* @__PURE__ */ new Date()]
                }
              ],
              "title-position": "left",
              expanded: "",
              borderless: "",
              transparent: "",
              "trim-weeks": "",
              class: "max-w-full rounded-xl"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Calendar), {
                attributes: [
                  {
                    key: "today",
                    dot: true,
                    bar: false,
                    content: "Today",
                    customData: {},
                    event: {},
                    hashcode: "today",
                    highlight: false,
                    order: 0,
                    pinPage: false,
                    popover: {},
                    dates: [/* @__PURE__ */ new Date()]
                  }
                ],
                "title-position": "left",
                expanded: "",
                borderless: "",
                transparent: "",
                "trim-weeks": "",
                class: "max-w-full rounded-xl"
              }, null, 8, ["attributes"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        class: "p-6",
        shape: "curved"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Locations</span>`);
                } else {
                  return [
                    createVNode("span", null, "Locations")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="space-y-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "hover:bg-muted-100 dark:hover:bg-muted-700/50 flex items-center gap-3 rounded-xl px-2 py-3 transition-colors duration-300"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_4)} alt="Hello" class="max-w-[48px]"${_scopeId2}><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "medium",
                    lead: "tight",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>Mt Wilbur</span>`);
                      } else {
                        return [
                          createVNode("span", null, "Mt Wilbur")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-muted-400"${_scopeId3}>Oregon \xB7 Lvl 3</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-muted-400" }, "Oregon \xB7 Lvl 3")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="ms-auto flex items-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseButtonIcon, {
                    shape: "curved",
                    muted: "",
                    class: "scale-75"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "lucide:arrow-right",
                          class: "h-5 w-5"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "lucide:arrow-right",
                            class: "h-5 w-5"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_4,
                      alt: "Hello",
                      class: "max-w-[48px]"
                    }),
                    createVNode("div", null, [
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "sm",
                        weight: "medium",
                        lead: "tight",
                        class: "text-muted-800 dark:text-white"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, "Mt Wilbur")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseParagraph, { size: "xs" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-muted-400" }, "Oregon \xB7 Lvl 3")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "ms-auto flex items-center" }, [
                      createVNode(_component_BaseButtonIcon, {
                        shape: "curved",
                        muted: "",
                        class: "scale-75"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "lucide:arrow-right",
                            class: "h-5 w-5"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "hover:bg-muted-100 dark:hover:bg-muted-700/50 flex items-center gap-3 rounded-xl px-2 py-3 transition-colors duration-300"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_5)} alt="Hello" class="max-w-[48px]"${_scopeId2}><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "medium",
                    lead: "tight",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>Devil&#39;s Lair</span>`);
                      } else {
                        return [
                          createVNode("span", null, "Devil's Lair")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-muted-400"${_scopeId3}>Alabama \xB7 Lvl 7</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-muted-400" }, "Alabama \xB7 Lvl 7")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="ms-auto flex items-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseButtonIcon, {
                    shape: "curved",
                    muted: "",
                    class: "scale-75"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "lucide:arrow-right",
                          class: "h-5 w-5"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "lucide:arrow-right",
                            class: "h-5 w-5"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_5,
                      alt: "Hello",
                      class: "max-w-[48px]"
                    }),
                    createVNode("div", null, [
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "sm",
                        weight: "medium",
                        lead: "tight",
                        class: "text-muted-800 dark:text-white"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, "Devil's Lair")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseParagraph, { size: "xs" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-muted-400" }, "Alabama \xB7 Lvl 7")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "ms-auto flex items-center" }, [
                      createVNode(_component_BaseButtonIcon, {
                        shape: "curved",
                        muted: "",
                        class: "scale-75"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "lucide:arrow-right",
                            class: "h-5 w-5"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "hover:bg-muted-100 dark:hover:bg-muted-700/50 flex items-center gap-3 rounded-xl px-2 py-3 transition-colors duration-300"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_6)} alt="Hello" class="max-w-[48px]"${_scopeId2}><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "medium",
                    lead: "tight",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>Dragon&#39;s Den</span>`);
                      } else {
                        return [
                          createVNode("span", null, "Dragon's Den")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-muted-400"${_scopeId3}>Missouri \xB7 Lvl 4</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-muted-400" }, "Missouri \xB7 Lvl 4")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="ms-auto flex items-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseButtonIcon, {
                    shape: "curved",
                    muted: "",
                    class: "scale-75"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "lucide:arrow-right",
                          class: "h-5 w-5"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "lucide:arrow-right",
                            class: "h-5 w-5"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_6,
                      alt: "Hello",
                      class: "max-w-[48px]"
                    }),
                    createVNode("div", null, [
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "sm",
                        weight: "medium",
                        lead: "tight",
                        class: "text-muted-800 dark:text-white"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, "Dragon's Den")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseParagraph, { size: "xs" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-muted-400" }, "Missouri \xB7 Lvl 4")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "ms-auto flex items-center" }, [
                      createVNode(_component_BaseButtonIcon, {
                        shape: "curved",
                        muted: "",
                        class: "scale-75"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "lucide:arrow-right",
                            class: "h-5 w-5"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mb-6" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Locations")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "space-y-1" }, [
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "hover:bg-muted-100 dark:hover:bg-muted-700/50 flex items-center gap-3 rounded-xl px-2 py-3 transition-colors duration-300"
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_4,
                      alt: "Hello",
                      class: "max-w-[48px]"
                    }),
                    createVNode("div", null, [
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "sm",
                        weight: "medium",
                        lead: "tight",
                        class: "text-muted-800 dark:text-white"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, "Mt Wilbur")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseParagraph, { size: "xs" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-muted-400" }, "Oregon \xB7 Lvl 3")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "ms-auto flex items-center" }, [
                      createVNode(_component_BaseButtonIcon, {
                        shape: "curved",
                        muted: "",
                        class: "scale-75"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "lucide:arrow-right",
                            class: "h-5 w-5"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "hover:bg-muted-100 dark:hover:bg-muted-700/50 flex items-center gap-3 rounded-xl px-2 py-3 transition-colors duration-300"
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_5,
                      alt: "Hello",
                      class: "max-w-[48px]"
                    }),
                    createVNode("div", null, [
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "sm",
                        weight: "medium",
                        lead: "tight",
                        class: "text-muted-800 dark:text-white"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, "Devil's Lair")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseParagraph, { size: "xs" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-muted-400" }, "Alabama \xB7 Lvl 7")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "ms-auto flex items-center" }, [
                      createVNode(_component_BaseButtonIcon, {
                        shape: "curved",
                        muted: "",
                        class: "scale-75"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "lucide:arrow-right",
                            class: "h-5 w-5"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "hover:bg-muted-100 dark:hover:bg-muted-700/50 flex items-center gap-3 rounded-xl px-2 py-3 transition-colors duration-300"
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_6,
                      alt: "Hello",
                      class: "max-w-[48px]"
                    }),
                    createVNode("div", null, [
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "sm",
                        weight: "medium",
                        lead: "tight",
                        class: "text-muted-800 dark:text-white"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, "Dragon's Den")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseParagraph, { size: "xs" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-muted-400" }, "Missouri \xB7 Lvl 4")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "ms-auto flex items-center" }, [
                      createVNode(_component_BaseButtonIcon, {
                        shape: "curved",
                        muted: "",
                        class: "scale-75"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "lucide:arrow-right",
                            class: "h-5 w-5"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/hobbies.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=hobbies-d9c494e7.mjs.map
