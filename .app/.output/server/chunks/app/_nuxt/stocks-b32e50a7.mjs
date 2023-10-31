import { k as useTailwindColors, e as __nuxt_component_0$5, f as __nuxt_component_2, _ as _sfc_main$p, j as _sfc_main$C, b as _sfc_main$o, l as _export_sfc } from '../server.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$4 } from './BaseDropdownItem-864908ca.mjs';
import { _ as __nuxt_component_3 } from './BaseDropdownDivider-258f8823.mjs';
import { defineComponent, reactive, ref, withCtx, createVNode, createTextVNode, unref, useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _sfc_main$5 } from './BaseIconBox-642fe941.mjs';
import { _ as _sfc_main$6 } from './AddonApexcharts-b71489ed.mjs';
import { Calendar } from 'v-calendar';
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
import './client-only-0428ba17.mjs';

const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    id: "stock-chart-1",
    "data-vivus": "",
    viewBox: "0 0 250 60",
    width: "250",
    height: "90"
  }, _attrs))}><path d="M 209.328 17.34 C 221.956 17.588 235.264 32.599 250 22.328" fill="none" vector-effect="non-scaling-stroke" stroke-width="2" stroke="currentColor" stroke-linejoin="miter" stroke-linecap="round" stroke-miterlimit="3"></path><linearGradient id="_lgradient_1" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="0%" stop-opacity="1" style="${ssrRenderStyle({ "stop-color": "rgb(204, 0, 0)" })}"></stop><stop offset="100%" stop-opacity="1" style="${ssrRenderStyle({ "stop-color": "rgb(219, 114, 114)" })}"></stop></linearGradient><path d=" M 0 43.634 C 5.934 43.634 11.318 51.209 17.462 51.342 C 33.219 51.683 30.603 59.567 39.187 59.868 C 46.963 60.141 50.44 44.192 60.537 43.77 C 69.126 43.77 72.129 52.461 79.739 52.433 C 90.904 52.433 94.93 38.455 106.648 39.78 C 129.082 42.317 124.556 27.606 139.157 27.177 C 153.758 26.747 158.235 44.485 171.96 44.725 C 196.438 45.155 189.782 17.1 208.248 17.1" fill="none" vector-effect="non-scaling-stroke" stroke-width="2" stroke="url(#_lgradient_1)" stroke-linejoin="miter" stroke-linecap="round" stroke-miterlimit="3"></path><path d="M 206.649 17.218 C 206.649 15.739 207.85 14.538 209.328 14.538 C 210.807 14.538 212.008 15.739 212.008 17.218 C 212.008 18.696 210.807 19.897 209.328 19.897 C 207.85 19.897 206.649 18.696 206.649 17.218 Z" fill="rgb(204, 0, 0)"></path><text transform="matrix(1,0,0,1,195,5)" stroke="none" fill="rgb(204, 0, 0)"> +14% </text></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VectorChartStockOne.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    id: "stock-chart-2",
    "data-vivus": "",
    viewBox: "0 0 250 60",
    width: "250",
    height: "90"
  }, _attrs))}><path vector-effect="non-scaling-stroke" d="M209.3,32.3c12.6,0.2,25.9,15.3,40.7,5" fill="none" stroke-width="2" stroke="currentColor" stroke-linejoin="miter" stroke-linecap="round" stroke-miterlimit="3"></path><text transform="matrix(1 0 0 1 195 20)" stroke="none" fill="rgb(30 64 175)"> -5% </text><linearGradient id="_lgradient_2" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="0" style="${ssrRenderStyle({ "stop-color": "rgb(30 64 175)" })}"></stop><stop offset="1" style="${ssrRenderStyle({ "stop-color": "rgb(98 127 222)" })}"></stop></linearGradient><path fill="none" vector-effect="non-scaling-stroke" stroke-width="2" stroke="url(#_lgradient_2)" stroke-linejoin="miter" stroke-linecap="round" stroke-miterlimit="3" d="M0,20c0,0,13.4,7.4,17.6,20.9S31.8,76,49.8,74.1S83.9,48,100.4,55.2c0,0,27,14.9,38.5,11.9
        5-3,4-13.2,13.4-11c9.4,2.3,10.5-18.4,17.1-15.2c6.5,3.1,8.2,12.5,13.4,6.2s6.5-26.1,25.4-14.8"></path><path d="M206.6,32.2c0-1.5,1.2-2.7,2.7-2.7c1.5,0,2.7,1.2,2.7,2.7c0,1.5-1.2,2.7-2.7,2.7
        C207.9,34.9,206.6,33.7,206.6,32.2z" fill="rgb(30 64 175)"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VectorChartStockTwo.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_10 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    id: "stock-chart-3",
    "data-vivus": "",
    viewBox: "0 0 250 60",
    width: "250",
    height: "90"
  }, _attrs))}><path fill="none" vector-effect="non-scaling-stroke" stroke-width="2" stroke="currentColor" stroke-linejoin="miter" stroke-linecap="round" stroke-miterlimit="3" d="M209.3,32.3c12.6,0.2,25.9,15.3,40.7,5"></path><text transform="matrix(1 0 0 1 195 20)" stroke="none" fill="rgb(14 165 233)"> +8% </text><linearGradient id="_lgradient_3" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="0" style="${ssrRenderStyle({ "stop-color": "rgb(14 165 233)" })}"></stop><stop offset="1" style="${ssrRenderStyle({ "stop-color": "rgb(100 200 245)" })}"></stop></linearGradient><path fill="none" vector-effect="non-scaling-stroke" stroke-width="2" stroke="url(#_lgradient_3)" stroke-linejoin="miter" stroke-linecap="round" stroke-miterlimit="3" d="M0,57.5c0,0,13-11.3,27.5-7.7s31.7,18.4,45.4,16.4c0,0,43.4-1.7,54.7-39.7c11.3-38,31.5,26.1,45.9,24.7
                                c14.5-1.4,12.4-25,33.2-19"></path><path d="M206.6,32.2c0-1.5,1.2-2.7,2.7-2.7c1.5,0,2.7,1.2,2.7,2.7c0,1.5-1.2,2.7-2.7,2.7
                                C207.9,34.9,206.6,33.7,206.6,32.2z" fill="rgb(14 165 233)"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VectorChartStockThree.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_11 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "stocks",
  __ssrInlineRender: true,
  setup(__props) {
    const barProfit = reactive(useBarProfit());
    function useBarProfit() {
      const { primary } = useTailwindColors();
      const type = "bar";
      const height = 255;
      const options = {
        chart: {
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            dataLabels: {
              position: "top"
              // top, center, bottom
            }
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function(val) {
            return val + "%";
          },
          offsetY: -20,
          style: {
            fontSize: "12px",
            colors: ["#304758"]
          }
        },
        xaxis: {
          categories: ["May", "Jun", "Jul", "Aug", "Sep"],
          position: "top",
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: "gradient",
              gradient: {
                colorFrom: "#D8E3F0",
                colorTo: "#BED1E6",
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5
              }
            }
          },
          tooltip: {
            enabled: true
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          labels: {
            show: false,
            formatter: function(val) {
              return val + "%";
            }
          }
        },
        colors: [primary.value],
        title: {
          text: void 0,
          align: "left"
        }
      };
      const series = ref([
        {
          name: "Ratio",
          data: [2.3, 3.1, 4, 10.1, 4]
        }
      ]);
      return {
        type,
        height,
        options,
        series
      };
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseDropdown = _sfc_main$1$1;
      const _component_BaseDropdownItem = _sfc_main$4;
      const _component_BaseDropdownDivider = __nuxt_component_3;
      const _component_VectorChartStockOne = __nuxt_component_7;
      const _component_BaseIconBox = _sfc_main$5;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_VectorChartStockTwo = __nuxt_component_10;
      const _component_VectorChartStockThree = __nuxt_component_11;
      const _component_AddonApexcharts = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="ltablet:overflow-visible flex justify-around gap-6 overflow-x-auto pb-8 lg:overflow-visible">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "group flex flex-1 flex-col text-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="nui-mask nui-mask-hexed bg-muted-200 dark:bg-muted-700 mx-auto flex h-16 w-16 scale-90 items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-90 group-hover:bg-yellow-400 dark:group-hover:bg-yellow-400"${_scopeId}><div class="nui-mask nui-mask-hexed dark:bg-muted-800 flex h-16 w-16 scale-95 items-center justify-center bg-white"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:lightning-duotone",
              class: "h-6 w-6 text-yellow-400"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h5",
              size: "md",
              weight: "medium",
              lead: "tight",
              class: "text-muted-400 dark:text-muted-400 group-hover:text-muted-600 dark:group-hover:text-muted-200"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="font-sans text-sm"${_scopeId2}>Energy</span>`);
                } else {
                  return [
                    createVNode("span", { class: "font-sans text-sm" }, "Energy")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "nui-mask nui-mask-hexed bg-muted-200 dark:bg-muted-700 mx-auto flex h-16 w-16 scale-90 items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-90 group-hover:bg-yellow-400 dark:group-hover:bg-yellow-400" }, [
                createVNode("div", { class: "nui-mask nui-mask-hexed dark:bg-muted-800 flex h-16 w-16 scale-95 items-center justify-center bg-white" }, [
                  createVNode(_component_Icon, {
                    name: "ph:lightning-duotone",
                    class: "h-6 w-6 text-yellow-400"
                  })
                ])
              ]),
              createVNode(_component_BaseHeading, {
                as: "h5",
                size: "md",
                weight: "medium",
                lead: "tight",
                class: "text-muted-400 dark:text-muted-400 group-hover:text-muted-600 dark:group-hover:text-muted-200"
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "font-sans text-sm" }, "Energy")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "group flex flex-1 flex-col text-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="nui-mask nui-mask-hexed bg-muted-200 dark:bg-muted-700 group-hover:bg-primary-500 dark:group-hover:bg-primary-500 mx-auto flex h-16 w-16 scale-90 items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-90"${_scopeId}><div class="nui-mask nui-mask-hexed dark:bg-muted-800 flex h-16 w-16 scale-95 items-center justify-center bg-white"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:buildings-duotone",
              class: "text-primary-500 h-6 w-6"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h5",
              size: "md",
              weight: "medium",
              lead: "tight",
              class: "text-muted-400 dark:text-muted-400 group-hover:text-muted-600 dark:group-hover:text-muted-200"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="font-sans text-sm"${_scopeId2}>Estate</span>`);
                } else {
                  return [
                    createVNode("span", { class: "font-sans text-sm" }, "Estate")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "nui-mask nui-mask-hexed bg-muted-200 dark:bg-muted-700 group-hover:bg-primary-500 dark:group-hover:bg-primary-500 mx-auto flex h-16 w-16 scale-90 items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-90" }, [
                createVNode("div", { class: "nui-mask nui-mask-hexed dark:bg-muted-800 flex h-16 w-16 scale-95 items-center justify-center bg-white" }, [
                  createVNode(_component_Icon, {
                    name: "ph:buildings-duotone",
                    class: "text-primary-500 h-6 w-6"
                  })
                ])
              ]),
              createVNode(_component_BaseHeading, {
                as: "h5",
                size: "md",
                weight: "medium",
                lead: "tight",
                class: "text-muted-400 dark:text-muted-400 group-hover:text-muted-600 dark:group-hover:text-muted-200"
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "font-sans text-sm" }, "Estate")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "group flex flex-1 flex-col text-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="nui-mask nui-mask-hexed bg-muted-200 dark:bg-muted-700 group-hover:bg-success-500 dark:group-hover:bg-success-500 mx-auto flex h-16 w-16 scale-90 items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-90"${_scopeId}><div class="nui-mask nui-mask-hexed dark:bg-muted-800 flex h-16 w-16 scale-95 items-center justify-center bg-white"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:leaf-duotone",
              class: "text-success-500 h-6 w-6"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h5",
              size: "md",
              weight: "medium",
              lead: "tight",
              class: "text-muted-400 dark:text-muted-400 group-hover:text-muted-600 dark:group-hover:text-muted-200"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="font-sans text-sm"${_scopeId2}>Agriculture</span>`);
                } else {
                  return [
                    createVNode("span", { class: "font-sans text-sm" }, "Agriculture")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "nui-mask nui-mask-hexed bg-muted-200 dark:bg-muted-700 group-hover:bg-success-500 dark:group-hover:bg-success-500 mx-auto flex h-16 w-16 scale-90 items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-90" }, [
                createVNode("div", { class: "nui-mask nui-mask-hexed dark:bg-muted-800 flex h-16 w-16 scale-95 items-center justify-center bg-white" }, [
                  createVNode(_component_Icon, {
                    name: "ph:leaf-duotone",
                    class: "text-success-500 h-6 w-6"
                  })
                ])
              ]),
              createVNode(_component_BaseHeading, {
                as: "h5",
                size: "md",
                weight: "medium",
                lead: "tight",
                class: "text-muted-400 dark:text-muted-400 group-hover:text-muted-600 dark:group-hover:text-muted-200"
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "font-sans text-sm" }, "Agriculture")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "group flex flex-1 flex-col text-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="nui-mask nui-mask-hexed bg-muted-200 dark:bg-muted-700 mx-auto flex h-16 w-16 scale-90 items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-90 group-hover:bg-indigo-500 dark:group-hover:bg-indigo-500"${_scopeId}><div class="nui-mask nui-mask-hexed dark:bg-muted-800 flex h-16 w-16 scale-95 items-center justify-center bg-white"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:bank-duotone",
              class: "h-6 w-6 text-indigo-500"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h5",
              size: "md",
              weight: "medium",
              lead: "tight",
              class: "text-muted-400 dark:text-muted-400 group-hover:text-muted-600 dark:group-hover:text-muted-200"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="font-sans text-sm"${_scopeId2}>Finance</span>`);
                } else {
                  return [
                    createVNode("span", { class: "font-sans text-sm" }, "Finance")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "nui-mask nui-mask-hexed bg-muted-200 dark:bg-muted-700 mx-auto flex h-16 w-16 scale-90 items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-90 group-hover:bg-indigo-500 dark:group-hover:bg-indigo-500" }, [
                createVNode("div", { class: "nui-mask nui-mask-hexed dark:bg-muted-800 flex h-16 w-16 scale-95 items-center justify-center bg-white" }, [
                  createVNode(_component_Icon, {
                    name: "ph:bank-duotone",
                    class: "h-6 w-6 text-indigo-500"
                  })
                ])
              ]),
              createVNode(_component_BaseHeading, {
                as: "h5",
                size: "md",
                weight: "medium",
                lead: "tight",
                class: "text-muted-400 dark:text-muted-400 group-hover:text-muted-600 dark:group-hover:text-muted-200"
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "font-sans text-sm" }, "Finance")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "group flex flex-1 flex-col text-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="nui-mask nui-mask-hexed bg-muted-200 dark:bg-muted-700 mx-auto flex h-16 w-16 scale-90 items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-90 group-hover:bg-lime-500 dark:group-hover:bg-lime-500"${_scopeId}><div class="nui-mask nui-mask-hexed dark:bg-muted-800 flex h-16 w-16 scale-95 items-center justify-center bg-white"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:sketch-logo-duotone",
              class: "h-6 w-6 text-lime-500"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h5",
              size: "md",
              weight: "medium",
              lead: "tight",
              class: "text-muted-400 dark:text-muted-400 group-hover:text-muted-600 dark:group-hover:text-muted-200"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="font-sans text-sm"${_scopeId2}>Diamonds</span>`);
                } else {
                  return [
                    createVNode("span", { class: "font-sans text-sm" }, "Diamonds")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "nui-mask nui-mask-hexed bg-muted-200 dark:bg-muted-700 mx-auto flex h-16 w-16 scale-90 items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-90 group-hover:bg-lime-500 dark:group-hover:bg-lime-500" }, [
                createVNode("div", { class: "nui-mask nui-mask-hexed dark:bg-muted-800 flex h-16 w-16 scale-95 items-center justify-center bg-white" }, [
                  createVNode(_component_Icon, {
                    name: "ph:sketch-logo-duotone",
                    class: "h-6 w-6 text-lime-500"
                  })
                ])
              ]),
              createVNode(_component_BaseHeading, {
                as: "h5",
                size: "md",
                weight: "medium",
                lead: "tight",
                class: "text-muted-400 dark:text-muted-400 group-hover:text-muted-600 dark:group-hover:text-muted-200"
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "font-sans text-sm" }, "Diamonds")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "group flex flex-1 flex-col text-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="nui-mask nui-mask-hexed bg-muted-200 dark:bg-muted-700 mx-auto flex h-16 w-16 scale-90 items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-90 group-hover:bg-sky-500 dark:group-hover:bg-sky-500"${_scopeId}><div class="nui-mask nui-mask-hexed dark:bg-muted-800 flex h-16 w-16 scale-95 items-center justify-center bg-white"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:atom-duotone",
              class: "h-6 w-6 text-sky-500"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h5",
              size: "md",
              weight: "medium",
              lead: "tight",
              class: "text-muted-400 dark:text-muted-400 group-hover:text-muted-600 dark:group-hover:text-muted-200"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="font-sans text-sm"${_scopeId2}>Research</span>`);
                } else {
                  return [
                    createVNode("span", { class: "font-sans text-sm" }, "Research")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "nui-mask nui-mask-hexed bg-muted-200 dark:bg-muted-700 mx-auto flex h-16 w-16 scale-90 items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-90 group-hover:bg-sky-500 dark:group-hover:bg-sky-500" }, [
                createVNode("div", { class: "nui-mask nui-mask-hexed dark:bg-muted-800 flex h-16 w-16 scale-95 items-center justify-center bg-white" }, [
                  createVNode(_component_Icon, {
                    name: "ph:atom-duotone",
                    class: "h-6 w-6 text-sky-500"
                  })
                ])
              ]),
              createVNode(_component_BaseHeading, {
                as: "h5",
                size: "md",
                weight: "medium",
                lead: "tight",
                class: "text-muted-400 dark:text-muted-400 group-hover:text-muted-600 dark:group-hover:text-muted-200"
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "font-sans text-sm" }, "Research")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "group flex flex-1 flex-col text-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="nui-mask nui-mask-hexed bg-muted-200 dark:bg-muted-700 mx-auto flex h-16 w-16 scale-90 items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-90 group-hover:bg-orange-500 dark:group-hover:bg-orange-500"${_scopeId}><div class="nui-mask nui-mask-hexed dark:bg-muted-800 flex h-16 w-16 scale-95 items-center justify-center bg-white"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:monitor-duotone",
              class: "h-6 w-6 text-orange-500"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h5",
              size: "md",
              weight: "medium",
              lead: "tight",
              class: "text-muted-400 dark:text-muted-400 group-hover:text-muted-600 dark:group-hover:text-muted-200"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="font-sans text-sm"${_scopeId2}>Technology</span>`);
                } else {
                  return [
                    createVNode("span", { class: "font-sans text-sm" }, "Technology")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "nui-mask nui-mask-hexed bg-muted-200 dark:bg-muted-700 mx-auto flex h-16 w-16 scale-90 items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-90 group-hover:bg-orange-500 dark:group-hover:bg-orange-500" }, [
                createVNode("div", { class: "nui-mask nui-mask-hexed dark:bg-muted-800 flex h-16 w-16 scale-95 items-center justify-center bg-white" }, [
                  createVNode(_component_Icon, {
                    name: "ph:monitor-duotone",
                    class: "h-6 w-6 text-orange-500"
                  })
                ])
              ]),
              createVNode(_component_BaseHeading, {
                as: "h5",
                size: "md",
                weight: "medium",
                lead: "tight",
                class: "text-muted-400 dark:text-muted-400 group-hover:text-muted-600 dark:group-hover:text-muted-200"
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "font-sans text-sm" }, "Technology")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "group flex flex-1 flex-col text-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="nui-mask nui-mask-hexed bg-muted-200 dark:bg-muted-700 mx-auto flex h-16 w-16 scale-90 items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-90 group-hover:bg-rose-500 dark:group-hover:bg-rose-500"${_scopeId}><div class="nui-mask nui-mask-hexed dark:bg-muted-800 flex h-16 w-16 scale-95 items-center justify-center bg-white"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:pill-duotone",
              class: "h-6 w-6 text-rose-500"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h5",
              size: "md",
              weight: "medium",
              lead: "tight",
              class: "text-muted-400 dark:text-muted-400 group-hover:text-muted-600 dark:group-hover:text-muted-200"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="font-sans text-sm"${_scopeId2}>Healthcare</span>`);
                } else {
                  return [
                    createVNode("span", { class: "font-sans text-sm" }, "Healthcare")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "nui-mask nui-mask-hexed bg-muted-200 dark:bg-muted-700 mx-auto flex h-16 w-16 scale-90 items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-90 group-hover:bg-rose-500 dark:group-hover:bg-rose-500" }, [
                createVNode("div", { class: "nui-mask nui-mask-hexed dark:bg-muted-800 flex h-16 w-16 scale-95 items-center justify-center bg-white" }, [
                  createVNode(_component_Icon, {
                    name: "ph:pill-duotone",
                    class: "h-6 w-6 text-rose-500"
                  })
                ])
              ]),
              createVNode(_component_BaseHeading, {
                as: "h5",
                size: "md",
                weight: "medium",
                lead: "tight",
                class: "text-muted-400 dark:text-muted-400 group-hover:text-muted-600 dark:group-hover:text-muted-200"
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "font-sans text-sm" }, "Healthcare")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ltablet:grid-cols-3 mb-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3"><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-2 flex items-center justify-between"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="block h-2 w-2 rounded-full bg-emerald-500"${_scopeId}></span><span class="text-muted-400 font-sans text-xs font-medium"${_scopeId}> Open to transactions </span></div>`);
            _push2(ssrRenderComponent(_component_BaseDropdown, {
              flavor: "context",
              label: "Dropdown",
              orientation: "end",
              class: "z-20"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                    to: "#",
                    title: "Invest",
                    text: "Buys more stocks"
                  }, {
                    start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "ph:coin-duotone",
                          class: "me-2 block h-5 w-5"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "ph:coin-duotone",
                            class: "me-2 block h-5 w-5"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                    to: "#",
                    title: "Benchmark",
                    text: "Compare other sources"
                  }, {
                    start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "ph:cell-signal-medium-duotone",
                          class: "me-2 block h-5 w-5"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "ph:cell-signal-medium-duotone",
                            class: "me-2 block h-5 w-5"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                    to: "#",
                    title: "Trade",
                    text: "View opportunities"
                  }, {
                    start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "ph:bank-duotone",
                          class: "me-2 block h-5 w-5"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "ph:bank-duotone",
                            class: "me-2 block h-5 w-5"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseDropdownDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                    to: "#",
                    title: "Wallet",
                    text: "Manage your wallet"
                  }, {
                    start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "ph:wallet-duotone",
                          class: "me-2 block h-5 w-5"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "ph:wallet-duotone",
                            class: "me-2 block h-5 w-5"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "Invest",
                      text: "Buys more stocks"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "ph:coin-duotone",
                          class: "me-2 block h-5 w-5"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "Benchmark",
                      text: "Compare other sources"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "ph:cell-signal-medium-duotone",
                          class: "me-2 block h-5 w-5"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "Trade",
                      text: "View opportunities"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "ph:bank-duotone",
                          class: "me-2 block h-5 w-5"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseDropdownDivider),
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "Wallet",
                      text: "Manage your wallet"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "ph:wallet-duotone",
                          class: "me-2 block h-5 w-5"
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_VectorChartStockOne, { class: "text-muted-200 dark:text-muted-700 mx-auto mb-4" }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseIconBox, {
              shape: "full",
              size: "sm",
              class: "bg-red-500 text-white shadow-xl shadow-red-500/20 dark:shadow-red-800/20"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "cib:tesla",
                    class: "h-4 w-4"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "cib:tesla",
                      class: "h-4 w-4"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "semibold",
              lead: "snug",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>TSL</span>`);
                } else {
                  return [
                    createVNode("span", null, "TSL")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              lead: "none",
              size: "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}>Tesla Motors</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, "Tesla Motors")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ms-auto flex items-center gap-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:check-circle-duotone",
              class: "text-success-500 h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-muted-600 dark:text-muted-400 font-sans text-sm font-medium"${_scopeId}> $3,876.21 </span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-2 flex items-center justify-between" }, [
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode("span", { class: "block h-2 w-2 rounded-full bg-emerald-500" }),
                  createVNode("span", { class: "text-muted-400 font-sans text-xs font-medium" }, " Open to transactions ")
                ]),
                createVNode(_component_BaseDropdown, {
                  flavor: "context",
                  label: "Dropdown",
                  orientation: "end",
                  class: "z-20"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "Invest",
                      text: "Buys more stocks"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "ph:coin-duotone",
                          class: "me-2 block h-5 w-5"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "Benchmark",
                      text: "Compare other sources"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "ph:cell-signal-medium-duotone",
                          class: "me-2 block h-5 w-5"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "Trade",
                      text: "View opportunities"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "ph:bank-duotone",
                          class: "me-2 block h-5 w-5"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseDropdownDivider),
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "Wallet",
                      text: "Manage your wallet"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "ph:wallet-duotone",
                          class: "me-2 block h-5 w-5"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "mb-4" }, [
                createVNode(_component_VectorChartStockOne, { class: "text-muted-200 dark:text-muted-700 mx-auto mb-4" })
              ]),
              createVNode("div", { class: "flex items-center gap-2" }, [
                createVNode(_component_BaseIconBox, {
                  shape: "full",
                  size: "sm",
                  class: "bg-red-500 text-white shadow-xl shadow-red-500/20 dark:shadow-red-800/20"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "cib:tesla",
                      class: "h-4 w-4"
                    })
                  ]),
                  _: 1
                }),
                createVNode("div", null, [
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "semibold",
                    lead: "snug",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "TSL")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseParagraph, {
                    lead: "none",
                    size: "sm"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-muted-400" }, "Tesla Motors")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "ms-auto flex items-center gap-1" }, [
                  createVNode(_component_Icon, {
                    name: "ph:check-circle-duotone",
                    class: "text-success-500 h-4 w-4"
                  }),
                  createVNode("span", { class: "text-muted-600 dark:text-muted-400 font-sans text-sm font-medium" }, " $3,876.21 ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-2 flex items-center justify-between"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="block h-2 w-2 rounded-full bg-emerald-500"${_scopeId}></span><span class="text-muted-400 font-sans text-xs font-medium"${_scopeId}> Open to transactions </span></div>`);
            _push2(ssrRenderComponent(_component_BaseDropdown, {
              flavor: "context",
              label: "Dropdown",
              orientation: "end",
              class: "z-20"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                    to: "#",
                    title: "Invest",
                    text: "Buys more stocks"
                  }, {
                    start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "ph:coin-duotone",
                          class: "me-2 block h-5 w-5"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "ph:coin-duotone",
                            class: "me-2 block h-5 w-5"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                    to: "#",
                    title: "Benchmark",
                    text: "Compare other sources"
                  }, {
                    start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "ph:cell-signal-medium-duotone",
                          class: "me-2 block h-5 w-5"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "ph:cell-signal-medium-duotone",
                            class: "me-2 block h-5 w-5"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                    to: "#",
                    title: "Trade",
                    text: "View opportunities"
                  }, {
                    start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "ph:bank-duotone",
                          class: "me-2 block h-5 w-5"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "ph:bank-duotone",
                            class: "me-2 block h-5 w-5"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseDropdownDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                    to: "#",
                    title: "Wallet",
                    text: "Manage your wallet"
                  }, {
                    start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "ph:wallet-duotone",
                          class: "me-2 block h-5 w-5"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "ph:wallet-duotone",
                            class: "me-2 block h-5 w-5"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "Invest",
                      text: "Buys more stocks"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "ph:coin-duotone",
                          class: "me-2 block h-5 w-5"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "Benchmark",
                      text: "Compare other sources"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "ph:cell-signal-medium-duotone",
                          class: "me-2 block h-5 w-5"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "Trade",
                      text: "View opportunities"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "ph:bank-duotone",
                          class: "me-2 block h-5 w-5"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseDropdownDivider),
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "Wallet",
                      text: "Manage your wallet"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "ph:wallet-duotone",
                          class: "me-2 block h-5 w-5"
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_VectorChartStockTwo, { class: "text-muted-200 dark:text-muted-700 mx-auto mb-4" }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseIconBox, {
              shape: "full",
              size: "sm",
              class: "bg-blue-800 text-white shadow-xl shadow-blue-500/20 dark:shadow-blue-800/20"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "fa6-brands:facebook-f",
                    class: "h-4 w-4"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "fa6-brands:facebook-f",
                      class: "h-4 w-4"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "semibold",
              lead: "snug",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>FCB</span>`);
                } else {
                  return [
                    createVNode("span", null, "FCB")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              lead: "none",
              size: "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}>Facebook Inc</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, "Facebook Inc")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ms-auto flex items-center gap-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:check-circle-duotone",
              class: "text-success-500 h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-muted-600 dark:text-muted-400 font-sans text-sm font-medium"${_scopeId}> $5,214.87 </span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-2 flex items-center justify-between" }, [
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode("span", { class: "block h-2 w-2 rounded-full bg-emerald-500" }),
                  createVNode("span", { class: "text-muted-400 font-sans text-xs font-medium" }, " Open to transactions ")
                ]),
                createVNode(_component_BaseDropdown, {
                  flavor: "context",
                  label: "Dropdown",
                  orientation: "end",
                  class: "z-20"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "Invest",
                      text: "Buys more stocks"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "ph:coin-duotone",
                          class: "me-2 block h-5 w-5"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "Benchmark",
                      text: "Compare other sources"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "ph:cell-signal-medium-duotone",
                          class: "me-2 block h-5 w-5"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "Trade",
                      text: "View opportunities"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "ph:bank-duotone",
                          class: "me-2 block h-5 w-5"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseDropdownDivider),
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "Wallet",
                      text: "Manage your wallet"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "ph:wallet-duotone",
                          class: "me-2 block h-5 w-5"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "mb-4" }, [
                createVNode(_component_VectorChartStockTwo, { class: "text-muted-200 dark:text-muted-700 mx-auto mb-4" })
              ]),
              createVNode("div", { class: "flex items-center gap-2" }, [
                createVNode(_component_BaseIconBox, {
                  shape: "full",
                  size: "sm",
                  class: "bg-blue-800 text-white shadow-xl shadow-blue-500/20 dark:shadow-blue-800/20"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "fa6-brands:facebook-f",
                      class: "h-4 w-4"
                    })
                  ]),
                  _: 1
                }),
                createVNode("div", null, [
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "semibold",
                    lead: "snug",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "FCB")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseParagraph, {
                    lead: "none",
                    size: "sm"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-muted-400" }, "Facebook Inc")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "ms-auto flex items-center gap-1" }, [
                  createVNode(_component_Icon, {
                    name: "ph:check-circle-duotone",
                    class: "text-success-500 h-4 w-4"
                  }),
                  createVNode("span", { class: "text-muted-600 dark:text-muted-400 font-sans text-sm font-medium" }, " $5,214.87 ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-2 flex items-center justify-between"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="bg-muted-300 dark:bg-muted-700/60 block h-2 w-2 rounded-full"${_scopeId}></span><span class="text-muted-400 font-sans text-xs font-medium"${_scopeId}> Closed to transactions </span></div>`);
            _push2(ssrRenderComponent(_component_BaseDropdown, {
              flavor: "context",
              label: "Dropdown",
              orientation: "end",
              class: "z-20"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                    to: "#",
                    title: "Invest",
                    text: "Buys more stocks"
                  }, {
                    start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "ph:coin-duotone",
                          class: "me-2 block h-5 w-5"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "ph:coin-duotone",
                            class: "me-2 block h-5 w-5"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                    to: "#",
                    title: "Benchmark",
                    text: "Compare other sources"
                  }, {
                    start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "ph:cell-signal-medium-duotone",
                          class: "me-2 block h-5 w-5"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "ph:cell-signal-medium-duotone",
                            class: "me-2 block h-5 w-5"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                    to: "#",
                    title: "Trade",
                    text: "View opportunities"
                  }, {
                    start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "ph:bank-duotone",
                          class: "me-2 block h-5 w-5"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "ph:bank-duotone",
                            class: "me-2 block h-5 w-5"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseDropdownDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                    to: "#",
                    title: "Wallet",
                    text: "Manage your wallet"
                  }, {
                    start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "ph:wallet-duotone",
                          class: "me-2 block h-5 w-5"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "ph:wallet-duotone",
                            class: "me-2 block h-5 w-5"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "Invest",
                      text: "Buys more stocks"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "ph:coin-duotone",
                          class: "me-2 block h-5 w-5"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "Benchmark",
                      text: "Compare other sources"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "ph:cell-signal-medium-duotone",
                          class: "me-2 block h-5 w-5"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "Trade",
                      text: "View opportunities"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "ph:bank-duotone",
                          class: "me-2 block h-5 w-5"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseDropdownDivider),
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "Wallet",
                      text: "Manage your wallet"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "ph:wallet-duotone",
                          class: "me-2 block h-5 w-5"
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_VectorChartStockThree, { class: "text-muted-200 dark:text-muted-700 mx-auto mb-4" }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseIconBox, {
              shape: "full",
              size: "sm",
              class: "bg-sky-500 text-white shadow-xl shadow-sky-500/20 dark:shadow-sky-800/20"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "fa6-brands:twitter",
                    class: "h-4 w-4"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "fa6-brands:twitter",
                      class: "h-4 w-4"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "semibold",
              lead: "snug",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>TWT</span>`);
                } else {
                  return [
                    createVNode("span", null, "TWT")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              lead: "none",
              size: "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}>Twitter Inc</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, "Twitter Inc")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ms-auto flex items-center gap-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:check-circle-duotone",
              class: "text-success-500 h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-muted-600 dark:text-muted-400 font-sans text-sm font-medium"${_scopeId}> $1,657.12 </span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-2 flex items-center justify-between" }, [
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode("span", { class: "bg-muted-300 dark:bg-muted-700/60 block h-2 w-2 rounded-full" }),
                  createVNode("span", { class: "text-muted-400 font-sans text-xs font-medium" }, " Closed to transactions ")
                ]),
                createVNode(_component_BaseDropdown, {
                  flavor: "context",
                  label: "Dropdown",
                  orientation: "end",
                  class: "z-20"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "Invest",
                      text: "Buys more stocks"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "ph:coin-duotone",
                          class: "me-2 block h-5 w-5"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "Benchmark",
                      text: "Compare other sources"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "ph:cell-signal-medium-duotone",
                          class: "me-2 block h-5 w-5"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "Trade",
                      text: "View opportunities"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "ph:bank-duotone",
                          class: "me-2 block h-5 w-5"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseDropdownDivider),
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "Wallet",
                      text: "Manage your wallet"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "ph:wallet-duotone",
                          class: "me-2 block h-5 w-5"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "mb-4" }, [
                createVNode(_component_VectorChartStockThree, { class: "text-muted-200 dark:text-muted-700 mx-auto mb-4" })
              ]),
              createVNode("div", { class: "flex items-center gap-2" }, [
                createVNode(_component_BaseIconBox, {
                  shape: "full",
                  size: "sm",
                  class: "bg-sky-500 text-white shadow-xl shadow-sky-500/20 dark:shadow-sky-800/20"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "fa6-brands:twitter",
                      class: "h-4 w-4"
                    })
                  ]),
                  _: 1
                }),
                createVNode("div", null, [
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "semibold",
                    lead: "snug",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "TWT")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseParagraph, {
                    lead: "none",
                    size: "sm"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-muted-400" }, "Twitter Inc")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "ms-auto flex items-center gap-1" }, [
                  createVNode(_component_Icon, {
                    name: "ph:check-circle-duotone",
                    class: "text-success-500 h-4 w-4"
                  }),
                  createVNode("span", { class: "text-muted-600 dark:text-muted-400 font-sans text-sm font-medium" }, " $1,657.12 ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="grid grid-cols-12 gap-6"><div class="ltablet:col-span-4 col-span-12 md:col-span-6 lg:col-span-4">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-6 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Trending Stocks</span>`);
                } else {
                  return [
                    createVNode("span", null, "Trending Stocks")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` View All `);
                } else {
                  return [
                    createTextVNode(" View All ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mb-2 space-y-5"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseIconBox, {
              shape: "full",
              size: "xs",
              class: "bg-blue-800 text-white shadow-xl shadow-blue-500/20 dark:shadow-blue-800/20"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "fa6-brands:linkedin-in",
                    class: "h-3 w-3"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "fa6-brands:linkedin-in",
                      class: "h-3 w-3"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "medium",
              lead: "snug",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>LKN</span>`);
                } else {
                  return [
                    createVNode("span", null, "LKN")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              lead: "none",
              size: "xs"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}>Linkedin Corp.</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, "Linkedin Corp.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ms-auto flex items-center gap-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:check-circle-duotone",
              class: "text-success-500 h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-muted-600 dark:text-muted-400 font-sans text-sm font-medium"${_scopeId}> $1,478.32 </span></div></div><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseIconBox, {
              shape: "full",
              size: "xs",
              class: "bg-muted-900 dark:bg-muted-100 dark:text-muted-800 text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "fa6-brands:github",
                    class: "h-3 w-3"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "fa6-brands:github",
                      class: "h-3 w-3"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "medium",
              lead: "snug",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>GTB</span>`);
                } else {
                  return [
                    createVNode("span", null, "GTB")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              lead: "none",
              size: "xs"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}>Github Inc.</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, "Github Inc.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ms-auto flex items-center gap-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:check-circle-duotone",
              class: "text-success-500 h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-muted-600 dark:text-muted-400 font-sans text-sm font-medium"${_scopeId}> $978.21 </span></div></div><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseIconBox, {
              shape: "full",
              size: "xs",
              class: "bg-rose-500 text-white shadow-xl shadow-rose-500/20 dark:shadow-rose-800/20"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "fa6-brands:invision",
                    class: "h-4 w-4"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "fa6-brands:invision",
                      class: "h-4 w-4"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "medium",
              lead: "snug",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>INV</span>`);
                } else {
                  return [
                    createVNode("span", null, "INV")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              lead: "none",
              size: "xs"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}>Invision Corp.</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, "Invision Corp.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ms-auto flex items-center gap-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:check-circle-duotone",
              class: "text-success-500 h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-muted-600 dark:text-muted-400 font-sans text-sm font-medium"${_scopeId}> $1,671.89 </span></div></div><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseIconBox, {
              shape: "full",
              size: "xs",
              class: "bg-sky-700 text-white shadow-xl shadow-sky-500/20 dark:shadow-sky-800/20"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "fa-brands:telegram-plane",
                    class: "h-4 w-4"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "fa-brands:telegram-plane",
                      class: "h-4 w-4"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "medium",
              lead: "snug",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>TLG</span>`);
                } else {
                  return [
                    createVNode("span", null, "TLG")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              lead: "none",
              size: "xs"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}>Telegram Inc.</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, "Telegram Inc.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ms-auto flex items-center gap-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:check-circle-duotone",
              class: "text-success-500 h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-muted-600 dark:text-muted-400 font-sans text-sm font-medium"${_scopeId}> $491.54 </span></div></div><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseIconBox, {
              shape: "full",
              size: "xs",
              class: "bg-emerald-500 text-white shadow-xl shadow-emerald-500/20 dark:shadow-emerald-800/20"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "fa-brands:kickstarter-k",
                    class: "h-4 w-4"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "fa-brands:kickstarter-k",
                      class: "h-4 w-4"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "medium",
              lead: "snug",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>KCK</span>`);
                } else {
                  return [
                    createVNode("span", null, "KCK")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              lead: "none",
              size: "xs"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}>Kickstarter Inc.</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, "Kickstarter Inc.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ms-auto flex items-center gap-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:check-circle-duotone",
              class: "text-success-500 h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-muted-600 dark:text-muted-400 font-sans text-sm font-medium"${_scopeId}> $1115.68 </span></div></div><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseIconBox, {
              shape: "full",
              size: "xs",
              class: "bg-yellow-500 text-white shadow-xl shadow-yellow-500/20 dark:shadow-yellow-800/20"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "fa-brands:google",
                    class: "h-4 w-4"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "fa-brands:google",
                      class: "h-4 w-4"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "medium",
              lead: "snug",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>GGL</span>`);
                } else {
                  return [
                    createVNode("span", null, "GGL")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              lead: "none",
              size: "xs"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}>Google Corp.</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, "Google Corp.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ms-auto flex items-center gap-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:check-circle-duotone",
              class: "text-success-500 h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-muted-600 dark:text-muted-400 font-sans text-sm font-medium"${_scopeId}> $2514.51 </span></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-6 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Trending Stocks")
                  ]),
                  _: 1
                }),
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" View All ")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "mb-2 space-y-5" }, [
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode(_component_BaseIconBox, {
                    shape: "full",
                    size: "xs",
                    class: "bg-blue-800 text-white shadow-xl shadow-blue-500/20 dark:shadow-blue-800/20"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "fa6-brands:linkedin-in",
                        class: "h-3 w-3"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", null, [
                    createVNode(_component_BaseHeading, {
                      as: "h4",
                      size: "sm",
                      weight: "medium",
                      lead: "snug",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "LKN")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, {
                      lead: "none",
                      size: "xs"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-muted-400" }, "Linkedin Corp.")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "ms-auto flex items-center gap-1" }, [
                    createVNode(_component_Icon, {
                      name: "ph:check-circle-duotone",
                      class: "text-success-500 h-4 w-4"
                    }),
                    createVNode("span", { class: "text-muted-600 dark:text-muted-400 font-sans text-sm font-medium" }, " $1,478.32 ")
                  ])
                ]),
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode(_component_BaseIconBox, {
                    shape: "full",
                    size: "xs",
                    class: "bg-muted-900 dark:bg-muted-100 dark:text-muted-800 text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "fa6-brands:github",
                        class: "h-3 w-3"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", null, [
                    createVNode(_component_BaseHeading, {
                      as: "h4",
                      size: "sm",
                      weight: "medium",
                      lead: "snug",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "GTB")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, {
                      lead: "none",
                      size: "xs"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-muted-400" }, "Github Inc.")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "ms-auto flex items-center gap-1" }, [
                    createVNode(_component_Icon, {
                      name: "ph:check-circle-duotone",
                      class: "text-success-500 h-4 w-4"
                    }),
                    createVNode("span", { class: "text-muted-600 dark:text-muted-400 font-sans text-sm font-medium" }, " $978.21 ")
                  ])
                ]),
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode(_component_BaseIconBox, {
                    shape: "full",
                    size: "xs",
                    class: "bg-rose-500 text-white shadow-xl shadow-rose-500/20 dark:shadow-rose-800/20"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "fa6-brands:invision",
                        class: "h-4 w-4"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", null, [
                    createVNode(_component_BaseHeading, {
                      as: "h4",
                      size: "sm",
                      weight: "medium",
                      lead: "snug",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "INV")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, {
                      lead: "none",
                      size: "xs"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-muted-400" }, "Invision Corp.")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "ms-auto flex items-center gap-1" }, [
                    createVNode(_component_Icon, {
                      name: "ph:check-circle-duotone",
                      class: "text-success-500 h-4 w-4"
                    }),
                    createVNode("span", { class: "text-muted-600 dark:text-muted-400 font-sans text-sm font-medium" }, " $1,671.89 ")
                  ])
                ]),
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode(_component_BaseIconBox, {
                    shape: "full",
                    size: "xs",
                    class: "bg-sky-700 text-white shadow-xl shadow-sky-500/20 dark:shadow-sky-800/20"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "fa-brands:telegram-plane",
                        class: "h-4 w-4"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", null, [
                    createVNode(_component_BaseHeading, {
                      as: "h4",
                      size: "sm",
                      weight: "medium",
                      lead: "snug",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "TLG")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, {
                      lead: "none",
                      size: "xs"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-muted-400" }, "Telegram Inc.")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "ms-auto flex items-center gap-1" }, [
                    createVNode(_component_Icon, {
                      name: "ph:check-circle-duotone",
                      class: "text-success-500 h-4 w-4"
                    }),
                    createVNode("span", { class: "text-muted-600 dark:text-muted-400 font-sans text-sm font-medium" }, " $491.54 ")
                  ])
                ]),
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode(_component_BaseIconBox, {
                    shape: "full",
                    size: "xs",
                    class: "bg-emerald-500 text-white shadow-xl shadow-emerald-500/20 dark:shadow-emerald-800/20"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "fa-brands:kickstarter-k",
                        class: "h-4 w-4"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", null, [
                    createVNode(_component_BaseHeading, {
                      as: "h4",
                      size: "sm",
                      weight: "medium",
                      lead: "snug",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "KCK")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, {
                      lead: "none",
                      size: "xs"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-muted-400" }, "Kickstarter Inc.")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "ms-auto flex items-center gap-1" }, [
                    createVNode(_component_Icon, {
                      name: "ph:check-circle-duotone",
                      class: "text-success-500 h-4 w-4"
                    }),
                    createVNode("span", { class: "text-muted-600 dark:text-muted-400 font-sans text-sm font-medium" }, " $1115.68 ")
                  ])
                ]),
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode(_component_BaseIconBox, {
                    shape: "full",
                    size: "xs",
                    class: "bg-yellow-500 text-white shadow-xl shadow-yellow-500/20 dark:shadow-yellow-800/20"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "fa-brands:google",
                        class: "h-4 w-4"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", null, [
                    createVNode(_component_BaseHeading, {
                      as: "h4",
                      size: "sm",
                      weight: "medium",
                      lead: "snug",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "GGL")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, {
                      lead: "none",
                      size: "xs"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-muted-400" }, "Google Corp.")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "ms-auto flex items-center gap-1" }, [
                    createVNode(_component_Icon, {
                      name: "ph:check-circle-duotone",
                      class: "text-success-500 h-4 w-4"
                    }),
                    createVNode("span", { class: "text-muted-600 dark:text-muted-400 font-sans text-sm font-medium" }, " $2514.51 ")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ltablet:col-span-4 col-span-12 md:col-span-6 lg:col-span-4">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        class: "relative p-6",
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
                  _push3(`<span${_scopeId2}>Profit Evolution</span>`);
                } else {
                  return [
                    createVNode("span", null, "Profit Evolution")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(barProfit), null, _parent2, _scopeId));
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
                    createVNode("span", null, "Profit Evolution")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, unref(barProfit), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ltablet:col-span-4 col-span-12 md:col-span-6 lg:col-span-4">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        class: "p-4",
        shape: "curved"
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
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/stocks.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=stocks-b32e50a7.mjs.map
