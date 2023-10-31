import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { f as __nuxt_component_2, _ as _sfc_main$p, b as _sfc_main$o, j as _sfc_main$C, s as _sfc_main$E, d as _sfc_main$x } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseButtonAction-57c21d00.mjs';
import { _ as _sfc_main$2 } from './DemoSearchCompact-ed3fb5da.mjs';
import { _ as _sfc_main$3 } from './BaseCheckbox-45d3fdba.mjs';
import { defineComponent, ref, withCtx, createVNode, unref, isRef, mergeProps, toHandlers, createTextVNode, toDisplayString, openBlock, createBlock, useSSRContext } from 'vue';
import { f as formatPrice } from './format-currency-d8479070.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { DatePicker, Calendar } from 'v-calendar';
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
import './IconCheck-b31ac5c7.mjs';

const _imports_0 = "" + publicAssetsURL("img/illustrations/dashboards/travel-cases.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "flights",
  __ssrInlineRender: true,
  setup(__props) {
    const dates = ref({
      start: /* @__PURE__ */ new Date(),
      end: /* @__PURE__ */ new Date()
    });
    const masks = ref({
      input: "YYYY-MM-DD"
    });
    const stops = ref([]);
    const luggage = ref([]);
    const results = [
      {
        logo: "/img/logos/companies/flights/1.svg",
        company: "Business Air",
        stops: 1,
        price: 374,
        departure: {
          time: "10:30 am",
          date: "Feb 12, 2023",
          city: "Paris",
          airport: "ORLY"
        },
        arrival: {
          time: "6:58 pm",
          date: "Feb 12, 2023",
          city: "New York",
          airport: "JFK"
        }
      },
      {
        logo: "/img/logos/companies/flights/2.svg",
        company: "Fly Business",
        stops: 2,
        price: 347,
        departure: {
          time: "9:30 am",
          date: "Feb 14, 2023",
          city: "Paris",
          airport: "ORLY"
        },
        arrival: {
          time: "5:24 pm",
          date: "Feb 14, 2023",
          city: "New York",
          airport: "JFK"
        }
      },
      {
        logo: "/img/logos/companies/flights/3.svg",
        company: "Ground Air",
        stops: 0,
        price: 319,
        departure: {
          time: "11:30 am",
          date: "Feb 14, 2023",
          city: "Paris",
          airport: "ORLY"
        },
        arrival: {
          time: "7:24 pm",
          date: "Feb 14, 2023",
          city: "New York",
          airport: "JFK"
        }
      },
      {
        logo: "/img/logos/companies/flights/1.svg",
        company: "Business Air",
        stops: 0,
        price: 328,
        departure: {
          time: "12:30 am",
          date: "Feb 15, 2023",
          city: "Paris",
          airport: "ORLY"
        },
        arrival: {
          time: "8:42 pm",
          date: "Feb 15, 2023",
          city: "New York",
          airport: "JFK"
        }
      },
      {
        logo: "/img/logos/companies/flights/1.svg",
        company: "Business Air",
        stops: 0,
        price: 297,
        departure: {
          time: "2:30 pm",
          date: "Feb 15, 2023",
          city: "Paris",
          airport: "CDG"
        },
        arrival: {
          time: "11:24 pm",
          date: "Feb 15, 2023",
          city: "New York",
          airport: "JFK"
        }
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseButtonAction = _sfc_main$1;
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseAvatar = _sfc_main$E;
      const _component_DemoSearchCompact = _sfc_main$2;
      const _component_BaseButton = _sfc_main$x;
      const _component_BaseCheckbox = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="grid grid-cols-12 gap-6"><div class="ltablet:col-span-8 col-span-12 lg:col-span-9"><div class="flex flex-col gap-6"><div class="bg-primary-800 flex flex-col items-stretch rounded-lg p-8 sm:flex-row"><div class="w-full sm:w-3/5"><div class="flex w-full flex-col gap-4"><div class="flex flex-col gap-4 sm:flex-row sm:items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "vaadin:airplane",
        class: "h-9 w-9 text-white"
      }, null, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        weight: "medium",
        size: "xl",
        class: "text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Paris [PAR] - New York [NY]</span>`);
          } else {
            return [
              createVNode("span", null, "Paris [PAR] - New York [NY]")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "sm",
        class: "text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>1 adult \u2014 Business</span>`);
          } else {
            return [
              createVNode("span", null, "1 adult \u2014 Business")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(unref(DatePicker), {
        modelValue: unref(dates),
        "onUpdate:modelValue": ($event) => isRef(dates) ? dates.value = $event : null,
        modelModifiers: { range: true },
        masks: unref(masks),
        "min-date": /* @__PURE__ */ new Date(),
        mode: "dateTime",
        "hide-time-header": "",
        "trim-weeks": ""
      }, {
        default: withCtx(({ inputValue, inputEvents }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex w-full flex-col gap-4 sm:flex-row"${_scopeId}><div class="relative grow"${_scopeId}><div class="relative"${_scopeId}><input class="text-muted-100 placeholder:text-muted-100/30 nui-focus peer inline-flex h-10 w-full items-center rounded-lg border-2 border-white/40 bg-transparent ps-10 font-sans text-sm leading-tight transition-all duration-300 focus-visible:border-white/80" placeholder="Start date"${ssrRenderAttr("value", inputValue.start)}${_scopeId}><div class="text-muted-100/40 peer-focus-visible:text-muted-100/80 absolute start-0 top-0 flex h-10 w-10 items-center justify-center transition-colors duration-300"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:map-pin",
              class: "h-5 w-5"
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div><div class="relative grow"${_scopeId}><div class="relative"${_scopeId}><input class="text-muted-100 placeholder:text-muted-100/30 nui-focus peer inline-flex h-10 w-full items-center rounded-lg border-2 border-white/40 bg-transparent ps-10 font-sans text-sm leading-tight transition-all duration-300 focus-visible:border-white/80" placeholder="End date"${ssrRenderAttr("value", inputValue.end)}${_scopeId}><div class="text-muted-100/40 peer-focus-visible:text-muted-100/80 absolute start-0 top-0 flex h-10 w-10 items-center justify-center transition-colors duration-300"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:flag",
              class: "h-5 w-5"
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex w-full flex-col gap-4 sm:flex-row" }, [
                createVNode("div", { class: "relative grow" }, [
                  createVNode("div", { class: "relative" }, [
                    createVNode("input", mergeProps({
                      class: "text-muted-100 placeholder:text-muted-100/30 nui-focus peer inline-flex h-10 w-full items-center rounded-lg border-2 border-white/40 bg-transparent ps-10 font-sans text-sm leading-tight transition-all duration-300 focus-visible:border-white/80",
                      placeholder: "Start date",
                      value: inputValue.start
                    }, toHandlers(inputEvents.start, true)), null, 16, ["value"]),
                    createVNode("div", { class: "text-muted-100/40 peer-focus-visible:text-muted-100/80 absolute start-0 top-0 flex h-10 w-10 items-center justify-center transition-colors duration-300" }, [
                      createVNode(_component_Icon, {
                        name: "lucide:map-pin",
                        class: "h-5 w-5"
                      })
                    ])
                  ])
                ]),
                createVNode("div", { class: "relative grow" }, [
                  createVNode("div", { class: "relative" }, [
                    createVNode("input", mergeProps({
                      class: "text-muted-100 placeholder:text-muted-100/30 nui-focus peer inline-flex h-10 w-full items-center rounded-lg border-2 border-white/40 bg-transparent ps-10 font-sans text-sm leading-tight transition-all duration-300 focus-visible:border-white/80",
                      placeholder: "End date",
                      value: inputValue.end
                    }, toHandlers(inputEvents.end, true)), null, 16, ["value"]),
                    createVNode("div", { class: "text-muted-100/40 peer-focus-visible:text-muted-100/80 absolute start-0 top-0 flex h-10 w-10 items-center justify-center transition-colors duration-300" }, [
                      createVNode(_component_Icon, {
                        name: "lucide:flag",
                        class: "h-5 w-5"
                      })
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="xs:min-h-[190px] relative w-full sm:w-2/5"><img class="xs:mx-auto absolute bottom-0 w-full max-w-[260px] sm:end-0"${ssrRenderAttr("src", _imports_0)} alt="Travel cases"></div></div><div class="flex w-full flex-col gap-6"><div class="flex w-full items-center justify-between">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        weight: "medium",
        size: "md",
        class: "text-muted-500 dark:text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>69 results</span>`);
          } else {
            return [
              createVNode("span", null, "69 results")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButtonAction, { muted: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Clear`);
          } else {
            return [
              createTextVNode("Clear")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid gap-6 sm:grid-cols-3">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex w-full items-center gap-3"${_scopeId}><span class="text-muted-800 dark:text-muted-100 block font-sans text-3xl font-semibold"${_scopeId}> $290 </span><div${_scopeId}><span class="text-muted-400 block font-sans text-[0.65rem] font-medium uppercase leading-snug"${_scopeId}> Cheapest </span><span class="text-muted-500 dark:text-muted-100 block font-sans text-sm leading-none"${_scopeId}> 7h32min </span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex w-full items-center gap-3" }, [
                createVNode("span", { class: "text-muted-800 dark:text-muted-100 block font-sans text-3xl font-semibold" }, " $290 "),
                createVNode("div", null, [
                  createVNode("span", { class: "text-muted-400 block font-sans text-[0.65rem] font-medium uppercase leading-snug" }, " Cheapest "),
                  createVNode("span", { class: "text-muted-500 dark:text-muted-100 block font-sans text-sm leading-none" }, " 7h32min ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, { class: "!bg-primary-600 !dark:bg-primary-600 !border-primary-600 p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex w-full items-center gap-3"${_scopeId}><span class="block font-sans text-3xl font-semibold text-white"${_scopeId}> $439 </span><div${_scopeId}><span class="text-muted-200 block font-sans text-[0.65rem] font-medium uppercase leading-snug"${_scopeId}> Best </span><span class="text-muted-100 block font-sans text-sm leading-none"${_scopeId}> 7h11min </span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex w-full items-center gap-3" }, [
                createVNode("span", { class: "block font-sans text-3xl font-semibold text-white" }, " $439 "),
                createVNode("div", null, [
                  createVNode("span", { class: "text-muted-200 block font-sans text-[0.65rem] font-medium uppercase leading-snug" }, " Best "),
                  createVNode("span", { class: "text-muted-100 block font-sans text-sm leading-none" }, " 7h11min ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex w-full items-center gap-3"${_scopeId}><span class="text-muted-800 dark:text-muted-100 block font-sans text-3xl font-semibold"${_scopeId}> $549 </span><div${_scopeId}><span class="text-muted-400 block font-sans text-[0.65rem] font-medium uppercase leading-snug"${_scopeId}> Fastest </span><span class="text-muted-500 dark:text-muted-100 block font-sans text-sm leading-none"${_scopeId}> 5h36min </span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex w-full items-center gap-3" }, [
                createVNode("span", { class: "text-muted-800 dark:text-muted-100 block font-sans text-3xl font-semibold" }, " $549 "),
                createVNode("div", null, [
                  createVNode("span", { class: "text-muted-400 block font-sans text-[0.65rem] font-medium uppercase leading-snug" }, " Fastest "),
                  createVNode("span", { class: "text-muted-500 dark:text-muted-100 block font-sans text-sm leading-none" }, " 5h36min ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-4"><!--[-->`);
      ssrRenderList(results, (result, index) => {
        _push(ssrRenderComponent(_component_BaseCard, {
          key: index,
          class: "p-5"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex w-full flex-col items-center justify-between gap-2 sm:flex-row"${_scopeId}><div class="flex shrink-0 flex-col items-center gap-3 text-center sm:flex-row sm:text-left"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseAvatar, {
                src: result.logo,
                "data-nui-tooltip": result.company,
                alt: "Company logo"
              }, null, _parent2, _scopeId));
              _push2(`<div${_scopeId}><span class="text-muted-500 dark:text-muted-400 block font-sans text-sm"${_scopeId}>${ssrInterpolate(result.departure.time)}</span><span class="text-primary-600 block font-sans text-xs font-semibold"${_scopeId}>${ssrInterpolate(result.departure.city)} ${ssrInterpolate(result.departure.airport)}</span><span class="text-muted-500 dark:text-muted-400 block font-sans text-sm"${_scopeId}>${ssrInterpolate(result.departure.date)}</span></div></div><div class="flex w-full grow items-center gap-2 p-6 sm:w-auto sm:py-0"${ssrRenderAttr("data-nui-tooltip", `${result.stops} stop${result.stops > 1 ? "s" : ""}`)}${_scopeId}><svg width="32" height="32" viewBox="0 0 64 64" class="text-muted-400 h-10 w-10"${_scopeId}><path fill="currentColor" d="M61.944 5.971c-.375-1.864-2.486-3.106-5.947-3.497C53.7 2.215 51.649 2 49.833 2c-5.145 0-8.582 1.662-18.701 7.035c-1.787.056-3.555.266-4.471.566c-1.021.33-.924 1.055.079 1.769a1253.489 1253.489 0 0 1-8.094 4.264c-3.643-1.093-10.278-3.099-12.993-4.016C3.236 10.804 2 13.49 2 13.49s2.46 6.035 3.937 9.091c-.331.378-.596.801-.717 1.28c-.22.868-.137 2.317.818 3.544c1.125 1.444 3.082 2.177 5.819 2.177c2.972 0 6.967-.87 11.933-2.576l-1.033 1.554c-1.571.997-3.236 2.319-5.023 4.119c-.313.316-.819.947-.695 1.636c.054.3.255.719.969 1.042c.063.018.134.03.2.046l-.061.092c-1.287 2.074-.387 3.132 2.001 2.353c1.447-.474 3.209-1.461 4.727-2.58c2.551-.463 5.911-1.394 10.234-3.167c1.045-.429 1.543-2.24 1.111-4.036c-.583-2.453-1.668-2.825-2.266-2.826l3.141-3.715c6.486-3.015 13.93-6.859 22.34-11.552c2.591-1.447 2.685-3.128 2.509-4.001M18.741 34.599a5.42 5.42 0 0 1-.42-.093c-.161-.073-.359-.195-.388-.354c-.035-.194.144-.528.446-.832a31.912 31.912 0 0 1 2.991-2.675l-2.629 3.954m16.594-6.325c.363 1.504-.104 2.792-.571 2.983c-3.374 1.385-6.14 2.244-8.382 2.768c.365-.336.707-.673.984-.999l5.744-6.792l.171-.02l.667-.068c.553 0 1.071.795 1.387 2.128m23.213-19.89c-7.144 3.985-13.297 7.196-18.606 9.774l2.469-2.919c1.583-1.87.997-2.564-1.302-1.538l-8.874 3.958c-2.3 1.026-3.362 1.565-4.649 3.638l-2.112 3.179c-6.595 2.459-10.863 3.288-13.616 3.288c-5.228 0-4.993-2.988-4.875-3.455l14.068-7.135c.474-.241.516-.6.094-.793h-.001c4.06-2.128 7.412-3.917 10.233-5.417a829.893 829.893 0 0 1 3.461-1.83c7.807-4.098 10.76-5.316 14.996-5.316c1.664 0 3.526.188 5.961.463c4.28.482 5.877 2.361 2.753 4.103"${_scopeId}></path><path fill="currentColor" d="M33.456 26.517c-.164.591-.204 1.34-.082 2.122c.186 1.172.688 2.089 1.254 2.437c.164-.595.204-1.344.078-2.127c-.184-1.173-.684-2.087-1.25-2.432m15.06-19.236s.492.777 1.864.389c1.188-.336 2.363-1.488 3.031-2.751l-1.953-.435c-.41.686-2.942 2.797-2.942 2.797"${_scopeId}></path><circle cx="21.351" cy="19.661" r=".864" fill="currentColor"${_scopeId}></circle><circle cx="24.646" cy="17.961" r=".865" fill="currentColor"${_scopeId}></circle><circle cx="27.942" cy="16.262" r=".865" fill="currentColor"${_scopeId}></circle><circle cx="31.238" cy="14.563" r=".865" fill="currentColor"${_scopeId}></circle><circle cx="34.533" cy="12.862" r=".864" fill="currentColor"${_scopeId}></circle><path fill="currentColor" d="M37.433 10.396a.864.864 0 1 0 .793 1.535a.862.862 0 0 0 .372-1.164a.862.862 0 0 0-1.165-.371"${_scopeId}></path><circle cx="41.124" cy="9.463" r=".865" fill="currentColor"${_scopeId}></circle><ellipse cx="31.091" cy="59.726" fill="currentColor" rx="22.32" ry="2.274"${_scopeId}></ellipse></svg><div class="border-muted-200 dark:border-muted-700 mx-8 grow border-t-2 border-dashed"${_scopeId}></div><svg width="32" height="32" viewBox="0 0 64 64" class="text-muted-400 h-10 w-10"${_scopeId}><path fill="currentColor" d="M58.948 21.592c-1.408-1.202-2.253-2.122-2.931-2.862c-3.018-3.286-3.347-3.312-20.569-4.693l-1.639-.132c-1.667-1.191-3.795-2.355-4.886-2.649c-1.124-.3-1.278.693-.392 2.223c-3.375-.277-7.236-.602-11.654-.987c-2.254-2.749-6.143-7.508-7.714-9.558c-1.434-1.874-3.616-.347-3.616-.347s-.919 5.369-1.312 8.611a2.716 2.716 0 0 0-1.711 1.404c-.728 1.436-.697 3.042.085 4.522c1.636 3.097 6.882 5.676 15.657 7.731l-2.29 1.103c-1.688.055-3.478.307-5.46.797c-.388.096-1.074.35-1.311.978c-.104.277-.154.728.245 1.366l.13.144c-.885.873-.45 1.8 1.28 2.266c.698.188 1.535.297 2.412.346c2.228 1.13 5.573 2.345 10.558 3.273c.068.012.139.018.211.018c.974 0 2.07-1.167 2.553-2.714c.518-1.663.328-2.977-.508-3.512c-.064-.043-.134-.084-.199-.125l2.141-.726c.053.127.115.253.191.377c.58.945 1.622 1.313 2.328.819c.357-.25.557-.671.594-1.151c.069.009.139.015.209.021c.063.222.152.439.279.648c.58.943 1.624 1.313 2.329.819c.359-.25.56-.679.594-1.161l.205.019c.063.225.154.448.285.662c.579.942 1.623 1.31 2.328.818c.549-.382.724-1.175.503-1.955c3.749.41 7.795.771 12.126 1.092c-.271.578-.212 1.382.213 2.071c.578.946 1.621 1.314 2.326.82c.705-.491.804-1.66.225-2.605c-.021-.035-.049-.063-.072-.095c1.699.115 3.433.224 5.217.326c.149.008.294.013.432.013c2.44 0 3.242-1.322 3.502-2.11c.405-1.227.231-3.248-2.894-5.905m-48.491 7.023c-.056.031-.093.063-.146.093a8.583 8.583 0 0 1-.162-.179c-.083-.134-.171-.319-.123-.446c.06-.158.344-.328.692-.414a29.884 29.884 0 0 1 2.872-.561l-3.133 1.507m15.299 3.521c-.415 1.335-1.277 2.072-1.715 2.072l-.059-.005c-3.712-.69-6.473-1.53-8.525-2.365c1.134-.079 2.221-.259 3.07-.546l6.229-2.113c.301.181.592.362.873.542c.366.234.546 1.073.127 2.415m32.583-4.404a6.61 6.61 0 0 1-.337-.01a466.5 466.5 0 0 1-5.965-.378c-.52-.036-1.036-.071-1.545-.109c-5.913-.431-11.102-.93-15.644-1.479l3.27-1.109c2.06-.698 1.942-1.549-.264-1.888L29.35 21.45c-2.204-.341-3.254-.441-5.187.566l-3.198 1.541C3.752 19.985 3.024 15.57 4.079 13.489l.001-.001c.013.072.031.112.058.115l13.995 1.537c.468.045.666-.222.439-.591l-.028-.033c41.227 3.568 30.98 1.448 39.303 8.537c2.877 2.45 3.285 4.679.492 4.679"${_scopeId}></path><path fill="currentColor" d="M23.903 31.384c-.371 1.058-.384 2.058-.097 2.612c.388-.414.749-1.012.995-1.723c.373-1.058.386-2.054.1-2.607c-.389.411-.747 1.012-.998 1.718m27.082-9.602s.004.87 1.218 1.251c1.048.331 2.464.002 3.557-.67l-1.263-1.334c-.629.341-3.512.753-3.512.753m-30.138-4.261c-.421-.036-.79.299-.825.743c-.035.446.279.842.701.879c.42.036.791-.299.825-.745s-.28-.842-.701-.877m3.273.283c-.422-.038-.792.298-.828.744c-.033.446.283.843.705.877c.419.038.79-.297.824-.746c.034-.447-.279-.839-.701-.875m3.271.282c-.42-.036-.791.298-.826.747c-.034.447.279.84.703.876c.418.038.79-.298.822-.744c.037-.448-.277-.842-.699-.879m3.272.286c-.422-.037-.791.295-.825.744c-.035.448.278.842.7.877c.422.037.792-.298.826-.744c.034-.449-.28-.843-.701-.877m3.274.28c-.423-.034-.794.301-.828.748c-.032.447.281.839.703.878c.42.034.789-.298.825-.748c.034-.446-.281-.839-.7-.878m3.269.287c-.422-.037-.791.296-.824.744c-.035.447.279.839.701.877c.422.037.791-.299.824-.746c.035-.446-.279-.841-.701-.875m3.272.282c-.419-.035-.791.299-.825.746c-.034.449.28.841.702.877c.42.039.791-.297.826-.744c.034-.448-.282-.841-.703-.879m3.27.285c-.419-.037-.788.297-.822.744c-.036.447.277.842.698.877c.422.037.793-.296.826-.745c.035-.446-.281-.84-.702-.876"${_scopeId}></path><ellipse cx="31.381" cy="59.654" fill="currentColor" rx="21.661" ry="2.346"${_scopeId}></ellipse></svg></div><div class="flex shrink-0 flex-col items-center justify-end gap-6 text-center sm:flex-row sm:text-left"${_scopeId}><div${_scopeId}><span class="text-muted-500 dark:text-muted-400 block font-sans text-sm"${_scopeId}>${ssrInterpolate(result.arrival.time)}</span><span class="text-primary-600 block font-sans text-xs font-semibold"${_scopeId}>${ssrInterpolate(result.arrival.city)} ${ssrInterpolate(result.arrival.airport)}</span><span class="text-muted-500 dark:text-muted-400 block font-sans text-sm"${_scopeId}>${ssrInterpolate(result.arrival.date)}</span></div><div${_scopeId}><span class="text-muted-800 dark:text-muted-100 block font-sans text-xl font-semibold"${_scopeId}>${ssrInterpolate(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(result.price))}</span></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex w-full flex-col items-center justify-between gap-2 sm:flex-row" }, [
                  createVNode("div", { class: "flex shrink-0 flex-col items-center gap-3 text-center sm:flex-row sm:text-left" }, [
                    createVNode(_component_BaseAvatar, {
                      src: result.logo,
                      "data-nui-tooltip": result.company,
                      alt: "Company logo"
                    }, null, 8, ["src", "data-nui-tooltip"]),
                    createVNode("div", null, [
                      createVNode("span", { class: "text-muted-500 dark:text-muted-400 block font-sans text-sm" }, toDisplayString(result.departure.time), 1),
                      createVNode("span", { class: "text-primary-600 block font-sans text-xs font-semibold" }, toDisplayString(result.departure.city) + " " + toDisplayString(result.departure.airport), 1),
                      createVNode("span", { class: "text-muted-500 dark:text-muted-400 block font-sans text-sm" }, toDisplayString(result.departure.date), 1)
                    ])
                  ]),
                  createVNode("div", {
                    class: "flex w-full grow items-center gap-2 p-6 sm:w-auto sm:py-0",
                    "data-nui-tooltip": `${result.stops} stop${result.stops > 1 ? "s" : ""}`
                  }, [
                    (openBlock(), createBlock("svg", {
                      width: "32",
                      height: "32",
                      viewBox: "0 0 64 64",
                      class: "text-muted-400 h-10 w-10"
                    }, [
                      createVNode("path", {
                        fill: "currentColor",
                        d: "M61.944 5.971c-.375-1.864-2.486-3.106-5.947-3.497C53.7 2.215 51.649 2 49.833 2c-5.145 0-8.582 1.662-18.701 7.035c-1.787.056-3.555.266-4.471.566c-1.021.33-.924 1.055.079 1.769a1253.489 1253.489 0 0 1-8.094 4.264c-3.643-1.093-10.278-3.099-12.993-4.016C3.236 10.804 2 13.49 2 13.49s2.46 6.035 3.937 9.091c-.331.378-.596.801-.717 1.28c-.22.868-.137 2.317.818 3.544c1.125 1.444 3.082 2.177 5.819 2.177c2.972 0 6.967-.87 11.933-2.576l-1.033 1.554c-1.571.997-3.236 2.319-5.023 4.119c-.313.316-.819.947-.695 1.636c.054.3.255.719.969 1.042c.063.018.134.03.2.046l-.061.092c-1.287 2.074-.387 3.132 2.001 2.353c1.447-.474 3.209-1.461 4.727-2.58c2.551-.463 5.911-1.394 10.234-3.167c1.045-.429 1.543-2.24 1.111-4.036c-.583-2.453-1.668-2.825-2.266-2.826l3.141-3.715c6.486-3.015 13.93-6.859 22.34-11.552c2.591-1.447 2.685-3.128 2.509-4.001M18.741 34.599a5.42 5.42 0 0 1-.42-.093c-.161-.073-.359-.195-.388-.354c-.035-.194.144-.528.446-.832a31.912 31.912 0 0 1 2.991-2.675l-2.629 3.954m16.594-6.325c.363 1.504-.104 2.792-.571 2.983c-3.374 1.385-6.14 2.244-8.382 2.768c.365-.336.707-.673.984-.999l5.744-6.792l.171-.02l.667-.068c.553 0 1.071.795 1.387 2.128m23.213-19.89c-7.144 3.985-13.297 7.196-18.606 9.774l2.469-2.919c1.583-1.87.997-2.564-1.302-1.538l-8.874 3.958c-2.3 1.026-3.362 1.565-4.649 3.638l-2.112 3.179c-6.595 2.459-10.863 3.288-13.616 3.288c-5.228 0-4.993-2.988-4.875-3.455l14.068-7.135c.474-.241.516-.6.094-.793h-.001c4.06-2.128 7.412-3.917 10.233-5.417a829.893 829.893 0 0 1 3.461-1.83c7.807-4.098 10.76-5.316 14.996-5.316c1.664 0 3.526.188 5.961.463c4.28.482 5.877 2.361 2.753 4.103"
                      }),
                      createVNode("path", {
                        fill: "currentColor",
                        d: "M33.456 26.517c-.164.591-.204 1.34-.082 2.122c.186 1.172.688 2.089 1.254 2.437c.164-.595.204-1.344.078-2.127c-.184-1.173-.684-2.087-1.25-2.432m15.06-19.236s.492.777 1.864.389c1.188-.336 2.363-1.488 3.031-2.751l-1.953-.435c-.41.686-2.942 2.797-2.942 2.797"
                      }),
                      createVNode("circle", {
                        cx: "21.351",
                        cy: "19.661",
                        r: ".864",
                        fill: "currentColor"
                      }),
                      createVNode("circle", {
                        cx: "24.646",
                        cy: "17.961",
                        r: ".865",
                        fill: "currentColor"
                      }),
                      createVNode("circle", {
                        cx: "27.942",
                        cy: "16.262",
                        r: ".865",
                        fill: "currentColor"
                      }),
                      createVNode("circle", {
                        cx: "31.238",
                        cy: "14.563",
                        r: ".865",
                        fill: "currentColor"
                      }),
                      createVNode("circle", {
                        cx: "34.533",
                        cy: "12.862",
                        r: ".864",
                        fill: "currentColor"
                      }),
                      createVNode("path", {
                        fill: "currentColor",
                        d: "M37.433 10.396a.864.864 0 1 0 .793 1.535a.862.862 0 0 0 .372-1.164a.862.862 0 0 0-1.165-.371"
                      }),
                      createVNode("circle", {
                        cx: "41.124",
                        cy: "9.463",
                        r: ".865",
                        fill: "currentColor"
                      }),
                      createVNode("ellipse", {
                        cx: "31.091",
                        cy: "59.726",
                        fill: "currentColor",
                        rx: "22.32",
                        ry: "2.274"
                      })
                    ])),
                    createVNode("div", { class: "border-muted-200 dark:border-muted-700 mx-8 grow border-t-2 border-dashed" }),
                    (openBlock(), createBlock("svg", {
                      width: "32",
                      height: "32",
                      viewBox: "0 0 64 64",
                      class: "text-muted-400 h-10 w-10"
                    }, [
                      createVNode("path", {
                        fill: "currentColor",
                        d: "M58.948 21.592c-1.408-1.202-2.253-2.122-2.931-2.862c-3.018-3.286-3.347-3.312-20.569-4.693l-1.639-.132c-1.667-1.191-3.795-2.355-4.886-2.649c-1.124-.3-1.278.693-.392 2.223c-3.375-.277-7.236-.602-11.654-.987c-2.254-2.749-6.143-7.508-7.714-9.558c-1.434-1.874-3.616-.347-3.616-.347s-.919 5.369-1.312 8.611a2.716 2.716 0 0 0-1.711 1.404c-.728 1.436-.697 3.042.085 4.522c1.636 3.097 6.882 5.676 15.657 7.731l-2.29 1.103c-1.688.055-3.478.307-5.46.797c-.388.096-1.074.35-1.311.978c-.104.277-.154.728.245 1.366l.13.144c-.885.873-.45 1.8 1.28 2.266c.698.188 1.535.297 2.412.346c2.228 1.13 5.573 2.345 10.558 3.273c.068.012.139.018.211.018c.974 0 2.07-1.167 2.553-2.714c.518-1.663.328-2.977-.508-3.512c-.064-.043-.134-.084-.199-.125l2.141-.726c.053.127.115.253.191.377c.58.945 1.622 1.313 2.328.819c.357-.25.557-.671.594-1.151c.069.009.139.015.209.021c.063.222.152.439.279.648c.58.943 1.624 1.313 2.329.819c.359-.25.56-.679.594-1.161l.205.019c.063.225.154.448.285.662c.579.942 1.623 1.31 2.328.818c.549-.382.724-1.175.503-1.955c3.749.41 7.795.771 12.126 1.092c-.271.578-.212 1.382.213 2.071c.578.946 1.621 1.314 2.326.82c.705-.491.804-1.66.225-2.605c-.021-.035-.049-.063-.072-.095c1.699.115 3.433.224 5.217.326c.149.008.294.013.432.013c2.44 0 3.242-1.322 3.502-2.11c.405-1.227.231-3.248-2.894-5.905m-48.491 7.023c-.056.031-.093.063-.146.093a8.583 8.583 0 0 1-.162-.179c-.083-.134-.171-.319-.123-.446c.06-.158.344-.328.692-.414a29.884 29.884 0 0 1 2.872-.561l-3.133 1.507m15.299 3.521c-.415 1.335-1.277 2.072-1.715 2.072l-.059-.005c-3.712-.69-6.473-1.53-8.525-2.365c1.134-.079 2.221-.259 3.07-.546l6.229-2.113c.301.181.592.362.873.542c.366.234.546 1.073.127 2.415m32.583-4.404a6.61 6.61 0 0 1-.337-.01a466.5 466.5 0 0 1-5.965-.378c-.52-.036-1.036-.071-1.545-.109c-5.913-.431-11.102-.93-15.644-1.479l3.27-1.109c2.06-.698 1.942-1.549-.264-1.888L29.35 21.45c-2.204-.341-3.254-.441-5.187.566l-3.198 1.541C3.752 19.985 3.024 15.57 4.079 13.489l.001-.001c.013.072.031.112.058.115l13.995 1.537c.468.045.666-.222.439-.591l-.028-.033c41.227 3.568 30.98 1.448 39.303 8.537c2.877 2.45 3.285 4.679.492 4.679"
                      }),
                      createVNode("path", {
                        fill: "currentColor",
                        d: "M23.903 31.384c-.371 1.058-.384 2.058-.097 2.612c.388-.414.749-1.012.995-1.723c.373-1.058.386-2.054.1-2.607c-.389.411-.747 1.012-.998 1.718m27.082-9.602s.004.87 1.218 1.251c1.048.331 2.464.002 3.557-.67l-1.263-1.334c-.629.341-3.512.753-3.512.753m-30.138-4.261c-.421-.036-.79.299-.825.743c-.035.446.279.842.701.879c.42.036.791-.299.825-.745s-.28-.842-.701-.877m3.273.283c-.422-.038-.792.298-.828.744c-.033.446.283.843.705.877c.419.038.79-.297.824-.746c.034-.447-.279-.839-.701-.875m3.271.282c-.42-.036-.791.298-.826.747c-.034.447.279.84.703.876c.418.038.79-.298.822-.744c.037-.448-.277-.842-.699-.879m3.272.286c-.422-.037-.791.295-.825.744c-.035.448.278.842.7.877c.422.037.792-.298.826-.744c.034-.449-.28-.843-.701-.877m3.274.28c-.423-.034-.794.301-.828.748c-.032.447.281.839.703.878c.42.034.789-.298.825-.748c.034-.446-.281-.839-.7-.878m3.269.287c-.422-.037-.791.296-.824.744c-.035.447.279.839.701.877c.422.037.791-.299.824-.746c.035-.446-.279-.841-.701-.875m3.272.282c-.419-.035-.791.299-.825.746c-.034.449.28.841.702.877c.42.039.791-.297.826-.744c.034-.448-.282-.841-.703-.879m3.27.285c-.419-.037-.788.297-.822.744c-.036.447.277.842.698.877c.422.037.793-.296.826-.745c.035-.446-.281-.84-.702-.876"
                      }),
                      createVNode("ellipse", {
                        cx: "31.381",
                        cy: "59.654",
                        fill: "currentColor",
                        rx: "21.661",
                        ry: "2.346"
                      })
                    ]))
                  ], 8, ["data-nui-tooltip"]),
                  createVNode("div", { class: "flex shrink-0 flex-col items-center justify-end gap-6 text-center sm:flex-row sm:text-left" }, [
                    createVNode("div", null, [
                      createVNode("span", { class: "text-muted-500 dark:text-muted-400 block font-sans text-sm" }, toDisplayString(result.arrival.time), 1),
                      createVNode("span", { class: "text-primary-600 block font-sans text-xs font-semibold" }, toDisplayString(result.arrival.city) + " " + toDisplayString(result.arrival.airport), 1),
                      createVNode("span", { class: "text-muted-500 dark:text-muted-400 block font-sans text-sm" }, toDisplayString(result.arrival.date), 1)
                    ]),
                    createVNode("div", null, [
                      createVNode("span", { class: "text-muted-800 dark:text-muted-100 block font-sans text-xl font-semibold" }, toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(result.price)), 1)
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div></div><div class="ltablet:col-span-4 col-span-12 lg:col-span-3"><div class="flex flex-col gap-6">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex w-full items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_DemoSearchCompact, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex w-full items-center justify-between" }, [
                createVNode(_component_DemoSearchCompact)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-2" }, {
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
              class: "max-w-full rounded-md"
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
                class: "max-w-full rounded-md"
              }, null, 8, ["attributes"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseButton, {
              class: "w-full",
              color: "primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Add to Favorites</span>`);
                } else {
                  return [
                    createVNode("span", null, "Add to Favorites")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-6"${_scopeId}><div class="space-y-10"${_scopeId}><div${_scopeId}><h5 class="text-muted-500 dark:text-muted-400 mb-4 font-sans text-xs font-semibold uppercase"${_scopeId}> Stops </h5><div class="flex flex-col gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              modelValue: unref(stops),
              "onUpdate:modelValue": ($event) => isRef(stops) ? stops.value = $event : null,
              name: "stops-1",
              label: "All flights",
              shape: "rounded",
              classes: { wrapper: "text-primary-500" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              modelValue: unref(stops),
              "onUpdate:modelValue": ($event) => isRef(stops) ? stops.value = $event : null,
              name: "stops-2",
              label: "No stops",
              shape: "rounded",
              classes: { wrapper: "text-primary-500" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              modelValue: unref(stops),
              "onUpdate:modelValue": ($event) => isRef(stops) ? stops.value = $event : null,
              name: "stops-3",
              label: "One stop",
              shape: "rounded",
              classes: { wrapper: "text-primary-500" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              modelValue: unref(stops),
              "onUpdate:modelValue": ($event) => isRef(stops) ? stops.value = $event : null,
              name: "stops-4",
              label: "Two stops",
              shape: "rounded",
              classes: { wrapper: "text-primary-500" }
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div${_scopeId}><h5 class="text-muted-500 dark:text-muted-400 mb-4 font-sans text-xs font-semibold uppercase"${_scopeId}> Luggage </h5><div class="flex flex-col gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              modelValue: unref(luggage),
              "onUpdate:modelValue": ($event) => isRef(luggage) ? luggage.value = $event : null,
              name: "luggage-1",
              label: "All options",
              shape: "rounded",
              classes: { wrapper: "text-primary-500" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              modelValue: unref(luggage),
              "onUpdate:modelValue": ($event) => isRef(luggage) ? luggage.value = $event : null,
              name: "luggage-2",
              label: "One cabin luggage",
              shape: "rounded",
              classes: { wrapper: "text-primary-500" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              modelValue: unref(luggage),
              "onUpdate:modelValue": ($event) => isRef(luggage) ? luggage.value = $event : null,
              name: "luggage-3",
              label: "Two cabin luggage",
              shape: "rounded",
              classes: { wrapper: "text-primary-500" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              modelValue: unref(luggage),
              "onUpdate:modelValue": ($event) => isRef(luggage) ? luggage.value = $event : null,
              name: "luggage-4",
              label: "No luggage",
              shape: "rounded",
              classes: { wrapper: "text-primary-500" }
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode(_component_BaseButton, {
                class: "w-full",
                color: "primary"
              }, {
                default: withCtx(() => [
                  createVNode("span", null, "Add to Favorites")
                ]),
                _: 1
              }),
              createVNode("div", { class: "mt-6" }, [
                createVNode("div", { class: "space-y-10" }, [
                  createVNode("div", null, [
                    createVNode("h5", { class: "text-muted-500 dark:text-muted-400 mb-4 font-sans text-xs font-semibold uppercase" }, " Stops "),
                    createVNode("div", { class: "flex flex-col gap-4" }, [
                      createVNode(_component_BaseCheckbox, {
                        modelValue: unref(stops),
                        "onUpdate:modelValue": ($event) => isRef(stops) ? stops.value = $event : null,
                        name: "stops-1",
                        label: "All flights",
                        shape: "rounded",
                        classes: { wrapper: "text-primary-500" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_BaseCheckbox, {
                        modelValue: unref(stops),
                        "onUpdate:modelValue": ($event) => isRef(stops) ? stops.value = $event : null,
                        name: "stops-2",
                        label: "No stops",
                        shape: "rounded",
                        classes: { wrapper: "text-primary-500" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_BaseCheckbox, {
                        modelValue: unref(stops),
                        "onUpdate:modelValue": ($event) => isRef(stops) ? stops.value = $event : null,
                        name: "stops-3",
                        label: "One stop",
                        shape: "rounded",
                        classes: { wrapper: "text-primary-500" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_BaseCheckbox, {
                        modelValue: unref(stops),
                        "onUpdate:modelValue": ($event) => isRef(stops) ? stops.value = $event : null,
                        name: "stops-4",
                        label: "Two stops",
                        shape: "rounded",
                        classes: { wrapper: "text-primary-500" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("h5", { class: "text-muted-500 dark:text-muted-400 mb-4 font-sans text-xs font-semibold uppercase" }, " Luggage "),
                    createVNode("div", { class: "flex flex-col gap-4" }, [
                      createVNode(_component_BaseCheckbox, {
                        modelValue: unref(luggage),
                        "onUpdate:modelValue": ($event) => isRef(luggage) ? luggage.value = $event : null,
                        name: "luggage-1",
                        label: "All options",
                        shape: "rounded",
                        classes: { wrapper: "text-primary-500" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_BaseCheckbox, {
                        modelValue: unref(luggage),
                        "onUpdate:modelValue": ($event) => isRef(luggage) ? luggage.value = $event : null,
                        name: "luggage-2",
                        label: "One cabin luggage",
                        shape: "rounded",
                        classes: { wrapper: "text-primary-500" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_BaseCheckbox, {
                        modelValue: unref(luggage),
                        "onUpdate:modelValue": ($event) => isRef(luggage) ? luggage.value = $event : null,
                        name: "luggage-3",
                        label: "Two cabin luggage",
                        shape: "rounded",
                        classes: { wrapper: "text-primary-500" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_BaseCheckbox, {
                        modelValue: unref(luggage),
                        "onUpdate:modelValue": ($event) => isRef(luggage) ? luggage.value = $event : null,
                        name: "luggage-4",
                        label: "No luggage",
                        shape: "rounded",
                        classes: { wrapper: "text-primary-500" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ])
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/flights.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=flights-7d0ff10a.mjs.map
