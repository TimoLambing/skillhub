import { e as __nuxt_component_0$5, j as _sfc_main$C, f as __nuxt_component_2, _ as _sfc_main$p, l as _export_sfc } from '../server.mjs';
import { useSSRContext, defineComponent, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { Carousel, Navigation, Slide } from 'vue3-carousel';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AddonCarouselIcons",
  __ssrInlineRender: true,
  props: {
    slidesToShow: { default: 7 },
    slides: { default: () => [] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_BaseCard = _sfc_main$C;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseHeading = _sfc_main$p;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))} data-v-b4f904b1>`);
      _push(ssrRenderComponent(unref(Carousel), {
        "items-to-show": _ctx.slidesToShow,
        slides: props.slides,
        breakpoints: {
          300: {
            itemsToShow: 2.5,
            snapAlign: "start"
          },
          768: {
            itemsToShow: 6,
            snapAlign: "start"
          },
          900: {
            itemsToShow: 8,
            snapAlign: "start"
          },
          1024: {
            itemsToShow: 7,
            snapAlign: "start"
          }
        }
      }, {
        addons: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Navigation), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Navigation))
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(props.slides, (slide, index) => {
              _push2(ssrRenderComponent(unref(Slide), { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtLink, {
                      to: slide.to,
                      class: "cursor-pointer"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_BaseCard, {
                            shape: "curved",
                            class: "text-muted-400 hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 flex min-w-[100px] items-center justify-center px-2 py-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="text-center" data-v-b4f904b1${_scopeId4}>`);
                                if (slide.icon) {
                                  _push5(ssrRenderComponent(_component_Icon, {
                                    name: slide.icon,
                                    class: "mx-auto mb-2 !block h-7 w-7"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(ssrRenderComponent(_component_BaseHeading, {
                                  size: "sm",
                                  weight: "medium",
                                  lead: "tight",
                                  class: "text-muted-800 dark:text-white"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(slide.title)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(slide.title), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "text-center" }, [
                                    slide.icon ? (openBlock(), createBlock(_component_Icon, {
                                      key: 0,
                                      name: slide.icon,
                                      class: "mx-auto mb-2 !block h-7 w-7"
                                    }, null, 8, ["name"])) : createCommentVNode("", true),
                                    createVNode(_component_BaseHeading, {
                                      size: "sm",
                                      weight: "medium",
                                      lead: "tight",
                                      class: "text-muted-800 dark:text-white"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(slide.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_BaseCard, {
                              shape: "curved",
                              class: "text-muted-400 hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 flex min-w-[100px] items-center justify-center px-2 py-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-center" }, [
                                  slide.icon ? (openBlock(), createBlock(_component_Icon, {
                                    key: 0,
                                    name: slide.icon,
                                    class: "mx-auto mb-2 !block h-7 w-7"
                                  }, null, 8, ["name"])) : createCommentVNode("", true),
                                  createVNode(_component_BaseHeading, {
                                    size: "sm",
                                    weight: "medium",
                                    lead: "tight",
                                    class: "text-muted-800 dark:text-white"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(slide.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtLink, {
                        to: slide.to,
                        class: "cursor-pointer"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_BaseCard, {
                            shape: "curved",
                            class: "text-muted-400 hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 flex min-w-[100px] items-center justify-center px-2 py-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-center" }, [
                                slide.icon ? (openBlock(), createBlock(_component_Icon, {
                                  key: 0,
                                  name: slide.icon,
                                  class: "mx-auto mb-2 !block h-7 w-7"
                                }, null, 8, ["name"])) : createCommentVNode("", true),
                                createVNode(_component_BaseHeading, {
                                  size: "sm",
                                  weight: "medium",
                                  lead: "tight",
                                  class: "text-muted-800 dark:text-white"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(slide.title), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(props.slides, (slide, index) => {
                return openBlock(), createBlock(unref(Slide), { key: index }, {
                  default: withCtx(() => [
                    createVNode(_component_NuxtLink, {
                      to: slide.to,
                      class: "cursor-pointer"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BaseCard, {
                          shape: "curved",
                          class: "text-muted-400 hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 flex min-w-[100px] items-center justify-center px-2 py-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-center" }, [
                              slide.icon ? (openBlock(), createBlock(_component_Icon, {
                                key: 0,
                                name: slide.icon,
                                class: "mx-auto mb-2 !block h-7 w-7"
                              }, null, 8, ["name"])) : createCommentVNode("", true),
                              createVNode(_component_BaseHeading, {
                                size: "sm",
                                weight: "medium",
                                lead: "tight",
                                class: "text-muted-800 dark:text-white"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(slide.title), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AddonCarouselIcons.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b4f904b1"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "icon",
  __ssrInlineRender: true,
  setup(__props) {
    const topics = [
      {
        icon: "ph:megaphone-simple-duotone",
        title: "Marketing",
        link: "/"
      },
      {
        icon: "ph:chart-bar-duotone",
        title: "Analytics",
        link: "/"
      },
      {
        icon: "ph:storefront-duotone",
        title: "Ecommerce",
        link: "/"
      },
      {
        icon: "ph:rocket-duotone",
        title: "Startups",
        link: "/"
      },
      {
        icon: "ph:bank-duotone",
        title: "Funding",
        link: "/"
      },
      {
        icon: "ph:app-window-duotone",
        title: "SEO",
        link: "/"
      },
      {
        icon: "ph:sketch-logo-duotone",
        title: "Product",
        link: "/"
      },
      {
        icon: "ph:heartbeat-duotone",
        title: "Health",
        link: "/"
      },
      {
        icon: "ph:pen-nib-duotone",
        title: "Content",
        link: "/"
      },
      {
        icon: "ph:briefcase-duotone",
        title: "Business",
        link: "/"
      },
      {
        icon: "ph:leaf-duotone",
        title: "Ecology",
        link: "/"
      },
      {
        icon: "ph:flask-duotone",
        title: "Experiments",
        link: "/"
      },
      {
        icon: "ph:users-three-duotone",
        title: "Jobs",
        link: "/"
      },
      {
        icon: "ph:buildings-duotone",
        title: "Enterprise",
        link: "/"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AddonCarouselIcons = __nuxt_component_0;
      _push(ssrRenderComponent(_component_AddonCarouselIcons, mergeProps({
        "slides-to-show": 6,
        slides: topics
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/carousel/icon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=icon-2d8310aa.mjs.map
