import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { H as useHead, P as useNinjaWindowScroll, k as useTailwindColors, _ as _sfc_main$p, b as _sfc_main$o, d as _sfc_main$x, i as _sfc_main$D, e as __nuxt_component_0$5, f as __nuxt_component_2$1, s as _sfc_main$E, j as _sfc_main$C, l as _export_sfc, z as _sfc_main$F, O as _sfc_main$u } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { useSSRContext, defineComponent, ref, computed, reactive, mergeProps, withCtx, createTextVNode, createVNode, unref, watch } from 'vue';
import __nuxt_component_0$1 from './TairoLogo-688db51d.mjs';
import { _ as _sfc_main$6 } from './AddonApexcharts-b71489ed.mjs';
import { a as _sfc_main$7, _ as _sfc_main$1$2 } from './DemoInboxMessage-20faf9de.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$1$1, b as _sfc_main$8 } from './DemoProgressCircle-0aca5d1c.mjs';
import { _ as _sfc_main$9 } from './DemoFollowersCompact-7a652f68.mjs';
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
import './client-only-0428ba17.mjs';
import './hobby-3-cc01f17f.mjs';
import './BaseButtonIcon-6150946c.mjs';
import './BaseProgressCircle-f74c4642.mjs';
import './BaseAvatarGroup-6e7b4ecf.mjs';

const _imports_0$1 = "" + publicAssetsURL("img/men.webp");
const _sfc_main$5 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="clip-path"><path id="morphClip" d="M42.3,-70.7C56.7,-65,71.4,-57.4,80.2,-45.3C89,-33.2,91.9,-16.6,85.7,-3.6C79.5,9.5,64.3,18.9,55.3,30.6C46.3,42.3,43.4,56.3,35.2,64.8C27,73.3,13.5,76.4,-0.8,77.8C-15.1,79.2,-30.2,78.8,-43.5,73.3C-56.8,67.7,-68.3,56.9,-74.8,43.8C-81.2,30.7,-82.7,15.4,-81,1C-79.3,-13.4,-74.5,-26.8,-68.7,-41.1C-62.9,-55.3,-56.1,-70.4,-44.5,-77.8C-32.9,-85.2,-16.5,-84.8,-1.2,-82.6C14,-80.5,27.9,-76.5,42.3,-70.7Z" transform="translate(90 100) scale(0.8)"></path></clipPath></defs><defs><linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="20%" stop-color="#77D0E9" stop-opacity="0.4"></stop><stop offset="80%" stop-color="#15687F" stop-opacity="0.9"></stop></linearGradient></defs><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#22ACD3" stop-opacity="0.9"></stop><stop offset="100%" stop-color="#4a3360" stop-opacity="0.4"></stop></linearGradient></defs><path id="morphing-path-2" fill="url(#gradient)" d="M42.3,-70.7C56.7,-65,71.4,-57.4,80.2,-45.3C89,-33.2,91.9,-16.6,85.7,-3.6C79.5,9.5,64.3,18.9,55.3,30.6C46.3,42.3,43.4,56.3,35.2,64.8C27,73.3,13.5,76.4,-0.8,77.8C-15.1,79.2,-30.2,78.8,-43.5,73.3C-56.8,67.7,-68.3,56.9,-74.8,43.8C-81.2,30.7,-82.7,15.4,-81,1C-79.3,-13.4,-74.5,-26.8,-68.7,-41.1C-62.9,-55.3,-56.1,-70.4,-44.5,-77.8C-32.9,-85.2,-16.5,-84.8,-1.2,-82.6C14,-80.5,27.9,-76.5,42.3,-70.7Z" transform="translate(110 110)"></path><path id="morphing-path-3" fill="url(#gradient1)" d="M45.8,-77.5C59.9,-71.2,72.3,-60,80.3,-46.3C88.4,-32.6,92,-16.3,88.8,-1.9C85.5,12.5,75.3,25.1,66.2,36.9C57.1,48.8,49.1,59.9,38.2,67.3C27.4,74.7,13.7,78.3,-0.8,79.7C-15.3,81.1,-30.6,80.3,-43.8,74.3C-57.1,68.3,-68.4,57.1,-75.7,43.9C-83,30.6,-86.3,15.3,-87,-0.4C-87.6,-16,-85.5,-32.1,-78.7,-46.3C-72,-60.4,-60.5,-72.8,-46.6,-79.2C-32.7,-85.7,-16.4,-86.2,-0.3,-85.8C15.8,-85.3,31.7,-83.8,45.8,-77.5Z" transform="translate(100 100)"></path><image width="200" height="200"${ssrRenderAttr("href", _imports_0$1)} clip-path="url(#clip-path)"></image></svg></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SVGMorph.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  name: "Toaster",
  props: {
    title: { type: String, default: null },
    message: { type: String, default: null },
    color: { type: String, default: "muted" },
    icon: { type: String, default: null },
    closable: { type: Boolean, default: true }
  },
  setup(props) {
    const isModalOpen = ref(false);
    const openModal = () => {
      isModalOpen.value = true;
      setTimeout(() => {
        visible.value = false;
      }, 1e3);
    };
    const closeModal = () => {
      isModalOpen.value = false;
    };
    const visible = ref(true);
    const close = () => {
      visible.value = false;
    };
    const wrapperClasses = computed(() => `border-${props.color}-400 bg-${props.color}-100`);
    const iconClasses = computed(() => `text-${props.color}-500`);
    return {
      visible,
      close,
      wrapperClasses,
      iconClasses,
      openModal,
      closeModal,
      isModalOpen
      // Make sure to return isModalOpen from setup
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BaseCard = _sfc_main$C;
  const _component_BaseAvatar = _sfc_main$E;
  const _component_BaseHeading = _sfc_main$p;
  const _component_Icon = __nuxt_component_2$1;
  const _component_BaseParagraph = _sfc_main$o;
  const _component_BaseButton = _sfc_main$x;
  const _component_BaseButtonClose = _sfc_main$F;
  const _component_TairoModal = _sfc_main$u;
  _push(`<!--[-->`);
  if (_ctx.visible) {
    _push(ssrRenderComponent(_component_BaseCard, { class: "fixed bottom-4 left-4 p-4 w-[92%] md:max-w-3xl bg-primary-800 border-primary-400 shadow-lg rounded-md h-auto z-[50] opacity-90" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="flex flex-col md:flex-row" data-v-a5fecd23${_scopeId}><div class="hover:bg-muted-100 dark:hover:bg-muted-700/50 flex h-40 w-40 items-center justify-center motion-safe:transition-colors motion-safe:duration-200" data-v-a5fecd23${_scopeId}>`);
          _push2(ssrRenderComponent(_component_BaseAvatar, {
            shape: "full",
            size: "3xl",
            src: "/img/ceo.jpeg",
            class: "nui-mask nui-mask-blob"
          }, null, _parent2, _scopeId));
          _push2(`</div><div class="p-4" data-v-a5fecd23${_scopeId}>`);
          _push2(ssrRenderComponent(_component_BaseHeading, {
            as: "h2",
            size: "xl",
            weight: "light",
            lead: "tight",
            class: "text-muted-800 mx-auto mb-4 dark:text-white"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_Icon, {
                  name: "flat-color-icons:info",
                  class: "h-8 w-8"
                }, null, _parent3, _scopeId2));
                _push3(` Investment opportunity `);
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: "flat-color-icons:info",
                    class: "h-8 w-8"
                  }),
                  createTextVNode(" Investment opportunity ")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_BaseParagraph, {
            size: "sm",
            class: "text-muted-500 dark:text-muted-100 mx-auto mb-4"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(` If you are seeking an investment opportunity, look no further. SkillHub is open to all funding possibilities. Currently in beta, SkillHub is being actively developed by our team. `);
              } else {
                return [
                  createTextVNode(" If you are seeking an investment opportunity, look no further. SkillHub is open to all funding possibilities. Currently in beta, SkillHub is being actively developed by our team. ")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`<div class="flex w-full" data-v-a5fecd23${_scopeId}>`);
          _push2(ssrRenderComponent(_component_BaseButton, {
            color: "info",
            flavor: "pastel",
            size: "sm",
            class: "ml-auto whitespace-nowrap",
            onClick: _ctx.openModal
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`Explore the investment opportunity`);
              } else {
                return [
                  createTextVNode("Explore the investment opportunity")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`</div></div></div>`);
          _push2(ssrRenderComponent(_component_BaseButtonClose, {
            class: "absolute top-2 right-2 text-gray-500",
            onClick: _ctx.close
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(` x `);
              } else {
                return [
                  createTextVNode(" x ")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          return [
            createVNode("div", { class: "flex flex-col md:flex-row" }, [
              createVNode("div", { class: "hover:bg-muted-100 dark:hover:bg-muted-700/50 flex h-40 w-40 items-center justify-center motion-safe:transition-colors motion-safe:duration-200" }, [
                createVNode(_component_BaseAvatar, {
                  shape: "full",
                  size: "3xl",
                  src: "/img/ceo.jpeg",
                  class: "nui-mask nui-mask-blob"
                })
              ]),
              createVNode("div", { class: "p-4" }, [
                createVNode(_component_BaseHeading, {
                  as: "h2",
                  size: "xl",
                  weight: "light",
                  lead: "tight",
                  class: "text-muted-800 mx-auto mb-4 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "flat-color-icons:info",
                      class: "h-8 w-8"
                    }),
                    createTextVNode(" Investment opportunity ")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseParagraph, {
                  size: "sm",
                  class: "text-muted-500 dark:text-muted-100 mx-auto mb-4"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" If you are seeking an investment opportunity, look no further. SkillHub is open to all funding possibilities. Currently in beta, SkillHub is being actively developed by our team. ")
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "flex w-full" }, [
                  createVNode(_component_BaseButton, {
                    color: "info",
                    flavor: "pastel",
                    size: "sm",
                    class: "ml-auto whitespace-nowrap",
                    onClick: _ctx.openModal
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Explore the investment opportunity")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])
              ])
            ]),
            createVNode(_component_BaseButtonClose, {
              class: "absolute top-2 right-2 text-gray-500",
              onClick: _ctx.close
            }, {
              default: withCtx(() => [
                createTextVNode(" x ")
              ]),
              _: 1
            }, 8, ["onClick"])
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_TairoModal, {
    open: _ctx.isModalOpen,
    size: "3xl",
    onClose: _ctx.closeModal
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Toaster.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-a5fecd23"]]);
const _imports_0 = "" + publicAssetsURL("img/mobile/app-store.png");
const _imports_1 = "" + publicAssetsURL("img/mobile/play-store.png");
const _imports_2 = "" + publicAssetsURL("img/mobile/mobile-banner.png");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "LandingHero",
  __ssrInlineRender: true,
  setup(__props) {
    const { y } = useNinjaWindowScroll();
    const gaugePersonal = reactive(useGaugePersonal());
    function useGaugePersonal() {
      const { primary } = useTailwindColors();
      const type = "radialBar";
      const height = 220;
      const options = {
        title: {
          text: void 0
        },
        chart: {
          sparkline: {
            enabled: true
          },
          toolbar: {
            show: false
          }
        },
        colors: [primary.value],
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "#e7e7e7",
              strokeWidth: "97%",
              margin: 5,
              // margin is in pixels
              dropShadow: {
                enabled: false,
                top: 2,
                left: 0,
                color: "#999",
                opacity: 1,
                blur: 2
              }
            },
            hollow: {
              margin: 0,
              size: "35%"
            },
            dataLabels: {
              name: {
                show: false
              },
              value: {
                offsetY: -2,
                fontSize: "22px"
              }
            }
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "light",
            shadeIntensity: 0.1,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 53, 91]
          }
        },
        labels: ["Average Results"]
      };
      const series = ref([76]);
      return {
        type,
        height,
        options,
        series
      };
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseButton = _sfc_main$x;
      const _component_SVGMorph = __nuxt_component_3;
      const _component_Toaster = __nuxt_component_4;
      const _component_BaseText = _sfc_main$D;
      const _component_nuxt_link = __nuxt_component_0$5;
      const _component_TairoLogo = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_2$1;
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BaseCard = _sfc_main$C;
      const _component_AddonApexcharts = _sfc_main$6;
      const _component_DemoInboxMessage = _sfc_main$7;
      const _component_DemoInfoBadges = _sfc_main$2$1;
      const _component_DemoTeamSearchCompact = _sfc_main$1$1;
      const _component_DemoVideoCompact = _sfc_main$1$2;
      const _component_DemoProgressCircle = _sfc_main$8;
      const _component_DemoFollowersCompact = _sfc_main$9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark:to-muted-900 relative min-h-screen overflow-hidden bg-gradient-to-b from-transparent to-white" }, _attrs))} data-v-a0061318><div class="absolute inset-x-0 z-10 -mt-8 py-20" data-v-a0061318></div><div class="absolute inset-x-0 z-20 -mt-24 py-20" data-v-a0061318><div class="mt-12 grid grid-cols-2 -space-x-52 opacity-60 dark:opacity-50 2xl:mx-auto 2xl:max-w-6xl" data-v-a0061318><div class="from-primary-200 to-primary-400 h-40 bg-gradient-to-br blur-3xl dark:from-blue-700" data-v-a0061318></div><div class="dark:to-primary-600 h-24 bg-gradient-to-r from-indigo-400 to-indigo-700 blur-3xl" data-v-a0061318></div></div></div><div class="mx-auto w-full max-w-7xl px-4" data-v-a0061318><div class="grid md:grid-cols-2 gap-4 pt-32 md:pt-20 items-center justify-center" data-v-a0061318><div data-aos="zoom-in" data-aos-duration="1200" class="relative z-30 text-center mb-[20%]" data-v-a0061318>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h1",
        size: "5xl",
        weight: "light",
        lead: "tight",
        class: "text-muted-800 xs:!text-4xl mx-auto mb-4 max-w-2xl dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` We got the <span class="text-primary-500 font-hairline underline decoration-dotted underline-offset-4" data-v-a0061318${_scopeId}>Skills</span> your company needs `);
          } else {
            return [
              createTextVNode(" We got the "),
              createVNode("span", { class: "text-primary-500 font-hairline underline decoration-dotted underline-offset-4" }, "Skills"),
              createTextVNode(" your company needs ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "lg",
        class: "text-muted-500 dark:text-muted-100 mx-auto mb-4 max-w-2xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` The only workforce platform you will ever need.<br data-v-a0061318${_scopeId}> AI and human synergy that finds top talent for firms and maintains oversight. `);
          } else {
            return [
              createTextVNode(" The only workforce platform you will ever need."),
              createVNode("br"),
              createTextVNode(" AI and human synergy that finds top talent for firms and maintains oversight. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-row items-center justify-center gap-2" data-v-a0061318>`);
      _push(ssrRenderComponent(_component_BaseButton, {
        flavor: "outline",
        shape: "curved",
        color: "primary",
        to: "https://go.cssninja.io/buy-tairo",
        shadow: "hover",
        class: "!h-12 w-44"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Rent Talents `);
          } else {
            return [
              createTextVNode(" Rent Talents ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButton, {
        shape: "curved",
        color: "primary",
        to: "https://go.cssninja.io/buy-tairo",
        shadow: "hover",
        class: "!h-12 w-44"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Find a Job `);
          } else {
            return [
              createTextVNode(" Find a Job ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div data-aos="zoom-in" data-aos-duration="400" class="relative z-30 text-center" data-v-a0061318>`);
      _push(ssrRenderComponent(_component_SVGMorph, null, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_Toaster, null, null, _parent));
      _push(`<div class="relative z-30 pt-32 text-center" data-v-a0061318>`);
      _push(ssrRenderComponent(_component_BaseText, { class: "text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Corporate`);
          } else {
            return [
              createTextVNode("Corporate")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h1",
        size: "3xl",
        weight: "light",
        lead: "tight",
        class: "text-muted-800 xs:!text-4xl mx-auto mb-4 max-w-2xl dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` This will be your <span class="text-primary-500 font-hairline underline decoration-dotted underline-offset-4" data-v-a0061318${_scopeId}>Dashboard</span>`);
          } else {
            return [
              createTextVNode(" This will be your "),
              createVNode("span", { class: "text-primary-500 font-hairline underline decoration-dotted underline-offset-4" }, "Dashboard")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="btn-area items-center justify-center" data-v-a0061318>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="app store" data-v-a0061318${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "app store"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_1)} alt="play store" data-v-a0061318${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_1,
                alt: "play store"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div id="watched_counter" data-v-a0061318></div></div><fieldset disabled class="ltablet:min-h-[760px] min-h-[2075px] w-full sm:min-h-[760px] lg:min-h-[750px]" aria-hidden="true" data-v-a0061318><div class="group-[&amp;.scrolled]/landing:bg-muted-100 group-[&amp;.scrolled]/landing:dark:bg-muted-900 group-[&amp;.scrolled]/landing:border-muted-200 group-[&amp;.scrolled]/landing:dark:border-muted-800 group-[&amp;.scrolled]/landing:ltablet:ps-24 relative z-30 mt-12 overflow-hidden border group-[&amp;.scrolled]/landing:rounded-xl group-[&amp;:not(.scrolled)]/landing:border-transparent group-[&amp;.scrolled]/landing:pb-6 group-[&amp;.scrolled]/landing:pe-6 group-[&amp;.scrolled]/landing:ps-6 group-[&amp;.scrolled]/landing:pt-20 motion-safe:transition-all motion-safe:duration-300 group-[&amp;.scrolled]/landing:lg:ps-28" data-v-a0061318><div class="ltablet:w-16 ltablet:flex dark:bg-muted-800 absolute left-0 top-0 hidden h-full w-20 flex-col bg-white group-[&amp;.scrolled]/landing:translate-x-0 group-[&amp;:not(.scrolled)]/landing:-translate-x-full group-[&amp;.scrolled]/landing:opacity-100 group-[&amp;:not(.scrolled)]/landing:opacity-0 motion-safe:transition-all motion-safe:duration-200 lg:flex" data-v-a0061318><div class="flex h-20 w-full items-center justify-center" data-v-a0061318>`);
      _push(ssrRenderComponent(_component_TairoLogo, { class: "text-primary-500 h-8 w-8" }, null, _parent));
      _push(`</div><div class="flex h-16 w-full items-center justify-center" data-v-a0061318><div class="nui-mask nui-mask-blob bg-primary-500/10 flex h-12 w-12 items-center justify-center motion-safe:transition-colors motion-safe:duration-200" data-v-a0061318>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:house-duotone",
        class: "text-primary-500 h-5 w-5"
      }, null, _parent));
      _push(`</div></div><div class="flex h-16 w-full items-center justify-center" data-v-a0061318><div class="nui-mask nui-mask-blob hover:bg-muted-100 dark:hover:bg-muted-700/50 flex h-12 w-12 items-center justify-center motion-safe:transition-colors motion-safe:duration-200" data-v-a0061318>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:grid-four-duotone",
        class: "text-muted-400 h-5 w-5"
      }, null, _parent));
      _push(`</div></div><div class="flex h-16 w-full items-center justify-center" data-v-a0061318><div class="nui-mask nui-mask-blob hover:bg-muted-100 dark:hover:bg-muted-700/50 flex h-12 w-12 items-center justify-center motion-safe:transition-colors motion-safe:duration-200" data-v-a0061318>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:users-duotone",
        class: "text-muted-400 h-5 w-5"
      }, null, _parent));
      _push(`</div></div><div class="flex h-16 w-full items-center justify-center" data-v-a0061318><div class="nui-mask nui-mask-blob hover:bg-muted-100 dark:hover:bg-muted-700/50 flex h-12 w-12 items-center justify-center motion-safe:transition-colors motion-safe:duration-200" data-v-a0061318>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:chat-circle-duotone",
        class: "text-muted-400 h-5 w-5"
      }, null, _parent));
      _push(`</div></div><div class="mt-auto flex h-16 w-full items-center justify-center" data-v-a0061318><div class="nui-mask nui-mask-blob hover:bg-muted-100 dark:hover:bg-muted-700/50 flex h-12 w-12 items-center justify-center motion-safe:transition-colors motion-safe:duration-200" data-v-a0061318>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:gear-six-duotone",
        class: "text-muted-400 h-5 w-5"
      }, null, _parent));
      _push(`</div></div><div class="flex h-16 w-full items-center justify-center" data-v-a0061318><div class="nui-mask nui-mask-blob hover:bg-muted-100 dark:hover:bg-muted-700/50 flex h-12 w-12 items-center justify-center motion-safe:transition-colors motion-safe:duration-200" data-v-a0061318>`);
      _push(ssrRenderComponent(_component_BaseAvatar, {
        shape: "straight",
        size: "sm",
        src: "/img/avatars/24.jpg",
        class: "nui-mask nui-mask-blob"
      }, null, _parent));
      _push(`</div></div></div><div class="ltablet:ps-24 absolute left-0 top-0 flex h-20 w-full items-center justify-between pe-6 ps-6 group-[&amp;.scrolled]/landing:translate-y-0 group-[&amp;:not(.scrolled)]/landing:-translate-y-full group-[&amp;.scrolled]/landing:opacity-100 group-[&amp;:not(.scrolled)]/landing:opacity-0 motion-safe:transition-all motion-safe:duration-200 lg:ps-28" data-v-a0061318><div class="flex h-full items-center gap-4" data-v-a0061318><div class="nui-mask nui-mask-blob dark:hover:bg-muted-800 flex h-10 w-10 items-center justify-center hover:bg-white motion-safe:transition-colors motion-safe:duration-200" data-v-a0061318>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:menu",
        class: "text-muted-400 h-5 w-5"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_BaseText, { class: "hidden sm:inline-block" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`My Dashboard`);
          } else {
            return [
              createTextVNode("My Dashboard")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex h-full items-center justify-end gap-1" data-v-a0061318><div class="nui-mask nui-mask-blob dark:hover:bg-muted-800 flex h-10 w-10 items-center justify-center hover:bg-white motion-safe:transition-colors motion-safe:duration-200" data-v-a0061318>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:bell-duotone",
        class: "text-muted-400 h-5 w-5"
      }, null, _parent));
      _push(`</div><div class="nui-mask nui-mask-blob dark:hover:bg-muted-800 flex h-10 w-10 items-center justify-center hover:bg-white motion-safe:transition-colors motion-safe:duration-200" data-v-a0061318>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:circles-four-duotone",
        class: "text-muted-400 h-5 w-5"
      }, null, _parent));
      _push(`</div><div class="nui-mask nui-mask-blob dark:hover:bg-muted-800 flex h-10 w-10 items-center justify-center hover:bg-white motion-safe:transition-colors motion-safe:duration-200" data-v-a0061318>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:translate-duotone",
        class: "text-muted-400 h-5 w-5"
      }, null, _parent));
      _push(`</div><div class="nui-mask nui-mask-blob dark:hover:bg-muted-800 flex h-10 w-10 items-center justify-center hover:bg-white motion-safe:transition-colors motion-safe:duration-200" data-v-a0061318>`);
      _push(ssrRenderComponent(_component_BaseAvatar, {
        shape: "straight",
        size: "xs",
        src: "/img/avatars/24.jpg",
        class: "nui-mask nui-mask-blob"
      }, null, _parent));
      _push(`</div></div></div><div class="ltablet:grid-cols-3 ltablet:gap-6 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 lg:gap-4" data-v-a0061318><div class="ltablet:gap-6 group-[&amp;:not(.scrolled)]/landing:ltablet:mt-24 group-[&amp;:not(.scrolled)]/landing:ptablet:mt-24 flex flex-col gap-6 sm:gap-3 lg:gap-4 group-[&amp;:not(.scrolled)]/landing:lg:mt-24" data-v-a0061318>`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        elevated: "",
        class: "flex flex-col p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-6 flex items-center justify-between" data-v-a0061318${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "sm",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span data-v-a0061318${_scopeId2}>Projects status</span>`);
                } else {
                  return [
                    createVNode("span", null, "Projects status")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-center py-16" data-v-a0061318${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, mergeProps(unref(gaugePersonal), { class: "-mt-14 motion-safe:transition-all motion-safe:duration-200" }), null, _parent2, _scopeId));
            _push2(`</div><div class="mt-auto text-center" data-v-a0061318${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "sm" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400" data-v-a0061318${_scopeId2}> The overall progress of all the ongoing projects </span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, " The overall progress of all the ongoing projects ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mb-6 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "sm",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Projects status")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "flex justify-center py-16" }, [
                createVNode(_component_AddonApexcharts, mergeProps(unref(gaugePersonal), { class: "-mt-14 motion-safe:transition-all motion-safe:duration-200" }), null, 16)
              ]),
              createVNode("div", { class: "mt-auto text-center" }, [
                createVNode(_component_BaseParagraph, { size: "sm" }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-muted-400" }, " The overall progress of all the ongoing projects ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ltablet:gap-6 flex flex-col gap-6 sm:gap-3 lg:gap-4" data-v-a0061318>`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        elevated: "",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoInboxMessage, {
              picture: "/img/avatars/10.jpg",
              name: "Kendra W.",
              title: "Design Project",
              text: "Where are we in terms of design? We need to review the new screens.",
              time: "28 minutes",
              shape: "curved"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoInboxMessage, {
                picture: "/img/avatars/10.jpg",
                name: "Kendra W.",
                title: "Design Project",
                text: "Where are we in terms of design? We need to review the new screens.",
                time: "28 minutes",
                shape: "curved"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        elevated: "",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoInfoBadges, {
              image: "/img/illustrations/widgets/1.svg",
              "badge-small": "/img/illustrations/widgets/3.svg",
              "badge-medium": "/img/illustrations/widgets/2.svg",
              title: "You've unlocked 2 new Achievements",
              text: "Congrats, your efforts have been rewarded. Keep up like this!"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoInfoBadges, {
                image: "/img/illustrations/widgets/1.svg",
                "badge-small": "/img/illustrations/widgets/3.svg",
                "badge-medium": "/img/illustrations/widgets/2.svg",
                title: "You've unlocked 2 new Achievements",
                text: "Congrats, your efforts have been rewarded. Keep up like this!"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ltablet:gap-6 group-[&amp;:not(.scrolled)]/landing:ltablet:mt-16 group-[&amp;:not(.scrolled)]/landing:ptablet:mt-16 flex flex-col gap-6 sm:hidden sm:gap-3 lg:flex lg:gap-4 group-[&amp;:not(.scrolled)]/landing:lg:mt-16" data-v-a0061318>`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        elevated: "",
        class: "p-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoTeamSearchCompact, { shape: "curved" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoTeamSearchCompact, { shape: "curved" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        elevated: "",
        class: "p-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoVideoCompact, { shape: "curved" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoVideoCompact, { shape: "curved" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ltablet:gap-6 group-[&amp;:not(.scrolled)]/landing:ltablet:mt-10 group-[&amp;:not(.scrolled)]/landing:ptablet:mt-10 flex flex-col gap-6 sm:gap-3 lg:gap-4 group-[&amp;:not(.scrolled)]/landing:lg:mt-10" data-v-a0061318>`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        elevated: "",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoProgressCircle, {
              image: "/img/avatars/24.jpg",
              title: `${unref(y) < 500 ? Math.trunc(unref(y) / 5) : 100}% completed!`,
              text: "Congrats, your efforts have been rewarded. Keep up like this!",
              value: unref(y) < 500 ? Math.trunc(unref(y) / 5) : 100
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoProgressCircle, {
                image: "/img/avatars/24.jpg",
                title: `${unref(y) < 500 ? Math.trunc(unref(y) / 5) : 100}% completed!`,
                text: "Congrats, your efforts have been rewarded. Keep up like this!",
                value: unref(y) < 500 ? Math.trunc(unref(y) / 5) : 100
              }, null, 8, ["title", "value"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        elevated: "",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoFollowersCompact, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoFollowersCompact)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></fieldset><div class="mx-auto w-full max-w-4xl px-4 items-center justify-center" data-v-a0061318><div class="z-30 pt-32 text-center items-center justify-center" data-v-a0061318>`);
      _push(ssrRenderComponent(_component_BaseText, { class: "text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`talent`);
          } else {
            return [
              createTextVNode("talent")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "4xl",
        weight: "light",
        lead: "tight",
        class: "text-muted-800 mx-auto mb-4 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Get verified, land a job `);
          } else {
            return [
              createTextVNode(" Get verified, land a job ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "lg",
        class: "text-muted-500 dark:text-muted-100 mx-auto mb-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Join Skillhub, where our team works with AI to match your unique skills with exciting job opportunities. SkillHub provides a comprehensive suite of features including earnings, forecasts, contracts, payments, and detailed project and employer information. `);
          } else {
            return [
              createTextVNode(" Join Skillhub, where our team works with AI to match your unique skills with exciting job opportunities. SkillHub provides a comprehensive suite of features including earnings, forecasts, contracts, payments, and detailed project and employer information. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex w-full justify-center mx-auto" data-v-a0061318><img${ssrRenderAttr("src", _imports_2)} loading="lazy" alt="Mobile phone mockup" data-v-a0061318></div></div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LandingHero.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-a0061318"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "LandingCustomizer",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedStyle = ref("classic");
    const toggled = ref(false);
    watch(selectedStyle, (value) => {
      if (value) {
        toggled.value = true;
        const timeout = setTimeout(() => {
          toggled.value = false;
          clearTimeout(timeout);
        }, 1750);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseText = _sfc_main$D;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseButton = _sfc_main$x;
      _push(`<!--[--><div class="dark:bg-muted-900 overflow-hidden bg-white py-24 justify-center items-center" data-v-82d1a178><div class="mx-auto w-full max-w-7xl px-4 justify-center items-center" data-v-82d1a178><div class="mx-auto" data-v-82d1a178><div class="mx-auto mt-48 flex w-full max-w-2xl flex-wrap sm:mt-0 items-center justify-center" data-v-82d1a178><div class="mb-10 max-w-4xl text-center" data-v-82d1a178>`);
      _push(ssrRenderComponent(_component_BaseText, { class: "text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`questions`);
          } else {
            return [
              createTextVNode("questions")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "5xl",
        weight: "light",
        lead: "tight",
        class: "text-muted-800 mx-auto mb-4 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Still not convinced? `);
          } else {
            return [
              createTextVNode(" Still not convinced? ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "lg",
        class: "text-muted-500 dark:text-muted-100 mx-auto mb-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` We bet you have many questions like these. `);
          } else {
            return [
              createTextVNode(" We bet you have many questions like these. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="max-w-xl" data-v-82d1a178>`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        elevated: "",
        class: "right-16 m-3 p-6 from-primary-700 to-primary-400 bg-gradient-to-tr dark:to-transparent"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` &quot;Is this platform really good?&quot; `);
          } else {
            return [
              createTextVNode(' "Is this platform really good?" ')
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        elevated: "",
        class: "left-20 m-3 p-6 from-muted-700 to-muted-400 bg-gradient-to-tl dark:to-transparent"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` &quot;Yes! If you need access to professionals whose skills are checked by the platform and who are available right now? `);
          } else {
            return [
              createTextVNode(' "Yes! If you need access to professionals whose skills are checked by the platform and who are available right now? ')
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        elevated: "",
        class: "right-20 m-3 p-6 from-primary-700 to-primary-400 bg-gradient-to-tr dark:to-transparent"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` &quot;How is this platform different than all the others?&quot; `);
          } else {
            return [
              createTextVNode(' "How is this platform different than all the others?" ')
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        elevated: "",
        class: "left-16 m-3 p-6 from-muted-700 to-muted-400 bg-gradient-to-tl dark:to-transparent"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` &quot;This platform provides companies the opportunity to rent out their personnel while guaranteeing the skill levels of the specialists. Not only companies, but also freelancers and individuals can rent out their skills. AI is utilized to facilitate the matching process.&quot; `);
          } else {
            return [
              createTextVNode(' "This platform provides companies the opportunity to rent out their personnel while guaranteeing the skill levels of the specialists. Not only companies, but also freelancers and individuals can rent out their skills. AI is utilized to facilitate the matching process." ')
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        elevated: "",
        class: "right-16 m-3 p-6 from-primary-700 to-primary-400 bg-gradient-to-tr dark:to-transparent"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` &quot;Will I only waste my time?&quot; `);
          } else {
            return [
              createTextVNode(' "Will I only waste my time?" ')
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        elevated: "",
        class: "left-20 m-3 p-6 from-muted-700 to-muted-400 bg-gradient-to-tl dark:to-transparent"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` &quot;You only need to fill out your information once and toggle your status to active in the database. We will not send spam, but will only notify you when there is a &#39;match.&#39;&quot; `);
          } else {
            return [
              createTextVNode(` "You only need to fill out your information once and toggle your status to active in the database. We will not send spam, but will only notify you when there is a 'match.'" `)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        elevated: "",
        class: "right-20 m-3 p-6 from-primary-700 to-primary-400 bg-gradient-to-tr dark:to-transparent"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` &quot;Does anybody actually use it?&quot; `);
          } else {
            return [
              createTextVNode(' "Does anybody actually use it?" ')
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        elevated: "",
        class: "left-16 m-3 p-6 from-muted-700 to-muted-400 bg-gradient-to-tl dark:to-transparent"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` &quot;We are actively onboarding companies and talents alike, because that&#39;s our line of work.&quot; `);
          } else {
            return [
              createTextVNode(` "We are actively onboarding companies and talents alike, because that's our line of work." `)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div><div class="mt-24 flex items-center justify-center" data-v-82d1a178>`);
      _push(ssrRenderComponent(_component_BaseButton, {
        shape: "curved",
        color: "primary",
        to: "https://go.cssninja.io/buy-tairo",
        shadow: "hover",
        class: "!h-12 w-60"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Find a Job `);
          } else {
            return [
              createTextVNode(" Find a Job ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LandingCustomizer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-82d1a178"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BaseText = _sfc_main$D;
  const _component_BaseHeading = _sfc_main$p;
  const _component_BaseParagraph = _sfc_main$o;
  const _component_Icon = __nuxt_component_2$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "ltablet:gap-y-0 relative z-30 mt-32 grid grid-cols-12 gap-y-8 overflow-hidden sm:w-full sm:gap-x-16 lg:gap-y-0" }, _attrs))}><div class="col-span-12"><div class="mx-auto flex h-full w-full max-w-xl flex-col justify-center"><div class="text-center">`);
  _push(ssrRenderComponent(_component_BaseText, { class: "text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`compatibility`);
      } else {
        return [
          createTextVNode("compatibility")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseHeading, {
    as: "h2",
    size: "4xl",
    weight: "light",
    lead: "tight",
    class: "text-muted-800 mx-auto mb-4 max-w-xl dark:text-white"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Downloadable and Works on all platforms `);
      } else {
        return [
          createTextVNode(" Downloadable and Works on all platforms ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseParagraph, {
    size: "lg",
    class: "text-muted-500 dark:text-muted-100 ptablet:max-w-lg ptablet:mx-auto mb-4 max-w-2xl"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` SkillHub, a powerful app that provides everything you need to assemble a team of skilled professionals and manage them, regardless of location or the device you are using. `);
      } else {
        return [
          createTextVNode(" SkillHub, a powerful app that provides everything you need to assemble a team of skilled professionals and manage them, regardless of location or the device you are using. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="ptablet:max-w-md ptablet:mx-auto mt-6 grid scale-90 grid-cols-3"><div class="flex flex-col items-center text-center"><div class="nui-mask nui-mask-hexed relative mb-2 flex h-40 w-40 shrink-0 items-center justify-center"><div class="motion-safe:animate-spin-slow from-success-100 to-success-500 dark:from-success-800 absolute inset-0 flex h-full w-full items-center justify-center bg-gradient-to-tr blur-sm transition-all duration-200"></div><div class="nui-mask nui-mask-hexed dark:bg-muted-800 flex h-[150px] w-[150px] items-center justify-center bg-white">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "devicon-plain:android",
    class: "text-success-500 relative -top-0.5 h-16 w-16"
  }, null, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_BaseText, {
    size: "sm",
    class: "text-muted-500 dark:text-muted-300"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Android`);
      } else {
        return [
          createTextVNode("Android")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex flex-col items-center text-center"><div class="nui-mask nui-mask-hexed relative mb-2 flex h-40 w-40 shrink-0 items-center justify-center"><div class="motion-safe:animate-spin-slow [animation-delay: 0.3s] absolute inset-0 flex h-full w-full items-center justify-center bg-gradient-to-tr from-sky-100 to-sky-500 blur-sm transition-all duration-200 dark:from-sky-800"></div><div class="nui-mask nui-mask-hexed dark:bg-muted-800 flex h-[150px] w-[150px] items-center justify-center bg-white">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "arcticons:ios-launcher",
    class: "h-20 w-20 text-sky-500"
  }, null, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_BaseText, {
    size: "sm",
    class: "text-muted-500 dark:text-muted-300"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`iOS`);
      } else {
        return [
          createTextVNode("iOS")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex flex-col items-center text-center"><div class="nui-mask nui-mask-hexed relative mb-2 flex h-40 w-40 shrink-0 items-center justify-center"><div class="motion-safe:animate-spin-slow [animation-delay: 0.6s] absolute inset-0 flex h-full w-full items-center justify-center bg-gradient-to-tr from-indigo-100 to-indigo-500 blur-sm transition-all duration-200 dark:from-indigo-800"></div><div class="nui-mask nui-mask-hexed dark:bg-muted-800 flex h-[150px] w-[150px] items-center justify-center bg-white">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "ph:desktop-thin",
    class: "h-20 w-20 text-indigo-500"
  }, null, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_BaseText, {
    size: "sm",
    class: "text-muted-500 dark:text-muted-300"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Desktop`);
      } else {
        return [
          createTextVNode("Desktop")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LandingHeroMockup.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      meta: [
        { name: "description", content: "My amazing site." }
      ],
      bodyAttrs: {
        class: "test"
      },
      script: [{ innerHTML: "console.log('Hello world')" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingHero = __nuxt_component_0;
      const _component_LandingCustomizer = __nuxt_component_1;
      const _component_LandingHeroMockup = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_LandingHero, null, null, _parent));
      _push(ssrRenderComponent(_component_LandingCustomizer, null, null, _parent));
      _push(ssrRenderComponent(_component_LandingHeroMockup, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-c88b8655.mjs.map
