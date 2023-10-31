import { e as __nuxt_component_0$5, j as _sfc_main$C, s as _sfc_main$E, _ as _sfc_main$p, i as _sfc_main$D, b as _sfc_main$o, l as _export_sfc } from '../server.mjs';
import { useSSRContext, defineComponent, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
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
  __name: "AddonCarouselTeam",
  __ssrInlineRender: true,
  props: {
    slidesToShow: { default: 3 },
    slides: { default: () => [] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseText = _sfc_main$D;
      const _component_BaseParagraph = _sfc_main$o;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))} data-v-0265e538>`);
      _push(ssrRenderComponent(unref(Carousel), {
        "items-to-show": _ctx.slidesToShow,
        slides: props.slides,
        breakpoints: {
          300: {
            itemsToShow: 1,
            snapAlign: "start"
          },
          768: {
            itemsToShow: 2,
            snapAlign: "start"
          },
          1024: {
            itemsToShow: 3,
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
                      to: slide.to
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_BaseCard, {
                            shape: "curved",
                            class: "hover:border-primary-500 dark:hover:border-primary-500 px-4 py-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_BaseAvatar, {
                                  src: slide.avatar,
                                  badge: slide.badge,
                                  size: "xl",
                                  class: "mx-auto"
                                }, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_BaseHeading, {
                                  size: "md",
                                  weight: "semibold",
                                  class: "text-muted-800 dark:text-white"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(slide.name)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(slide.name), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_BaseText, {
                                  size: "xs",
                                  class: "text-muted-400 mb-2"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(slide.role)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(slide.role), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_BaseParagraph, {
                                  size: "sm",
                                  class: "text-muted-500"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(slide.text)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(slide.text), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`<div class="flex justify-center gap-4 pt-4" data-v-0265e538${_scopeId4}><!--[-->`);
                                ssrRenderList(slide.skills, (skill, s) => {
                                  _push5(ssrRenderComponent(_component_BaseAvatar, {
                                    key: s,
                                    src: skill.logo,
                                    size: "xs",
                                    "data-nui-tooltip": skill.name,
                                    class: "bg-muted-200 dark:bg-muted-700"
                                  }, null, _parent5, _scopeId4));
                                });
                                _push5(`<!--]--></div>`);
                              } else {
                                return [
                                  createVNode(_component_BaseAvatar, {
                                    src: slide.avatar,
                                    badge: slide.badge,
                                    size: "xl",
                                    class: "mx-auto"
                                  }, null, 8, ["src", "badge"]),
                                  createVNode(_component_BaseHeading, {
                                    size: "md",
                                    weight: "semibold",
                                    class: "text-muted-800 dark:text-white"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(slide.name), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_BaseText, {
                                    size: "xs",
                                    class: "text-muted-400 mb-2"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(slide.role), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_BaseParagraph, {
                                    size: "sm",
                                    class: "text-muted-500"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(slide.text), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("div", { class: "flex justify-center gap-4 pt-4" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(slide.skills, (skill, s) => {
                                      return openBlock(), createBlock(_component_BaseAvatar, {
                                        key: s,
                                        src: skill.logo,
                                        size: "xs",
                                        "data-nui-tooltip": skill.name,
                                        class: "bg-muted-200 dark:bg-muted-700"
                                      }, null, 8, ["src", "data-nui-tooltip"]);
                                    }), 128))
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
                              class: "hover:border-primary-500 dark:hover:border-primary-500 px-4 py-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_BaseAvatar, {
                                  src: slide.avatar,
                                  badge: slide.badge,
                                  size: "xl",
                                  class: "mx-auto"
                                }, null, 8, ["src", "badge"]),
                                createVNode(_component_BaseHeading, {
                                  size: "md",
                                  weight: "semibold",
                                  class: "text-muted-800 dark:text-white"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(slide.name), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_BaseText, {
                                  size: "xs",
                                  class: "text-muted-400 mb-2"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(slide.role), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_BaseParagraph, {
                                  size: "sm",
                                  class: "text-muted-500"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(slide.text), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("div", { class: "flex justify-center gap-4 pt-4" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(slide.skills, (skill, s) => {
                                    return openBlock(), createBlock(_component_BaseAvatar, {
                                      key: s,
                                      src: skill.logo,
                                      size: "xs",
                                      "data-nui-tooltip": skill.name,
                                      class: "bg-muted-200 dark:bg-muted-700"
                                    }, null, 8, ["src", "data-nui-tooltip"]);
                                  }), 128))
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
                        to: slide.to
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_BaseCard, {
                            shape: "curved",
                            class: "hover:border-primary-500 dark:hover:border-primary-500 px-4 py-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_BaseAvatar, {
                                src: slide.avatar,
                                badge: slide.badge,
                                size: "xl",
                                class: "mx-auto"
                              }, null, 8, ["src", "badge"]),
                              createVNode(_component_BaseHeading, {
                                size: "md",
                                weight: "semibold",
                                class: "text-muted-800 dark:text-white"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(slide.name), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_BaseText, {
                                size: "xs",
                                class: "text-muted-400 mb-2"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(slide.role), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_BaseParagraph, {
                                size: "sm",
                                class: "text-muted-500"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(slide.text), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("div", { class: "flex justify-center gap-4 pt-4" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(slide.skills, (skill, s) => {
                                  return openBlock(), createBlock(_component_BaseAvatar, {
                                    key: s,
                                    src: skill.logo,
                                    size: "xs",
                                    "data-nui-tooltip": skill.name,
                                    class: "bg-muted-200 dark:bg-muted-700"
                                  }, null, 8, ["src", "data-nui-tooltip"]);
                                }), 128))
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
                      to: slide.to
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BaseCard, {
                          shape: "curved",
                          class: "hover:border-primary-500 dark:hover:border-primary-500 px-4 py-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_BaseAvatar, {
                              src: slide.avatar,
                              badge: slide.badge,
                              size: "xl",
                              class: "mx-auto"
                            }, null, 8, ["src", "badge"]),
                            createVNode(_component_BaseHeading, {
                              size: "md",
                              weight: "semibold",
                              class: "text-muted-800 dark:text-white"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(slide.name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_BaseText, {
                              size: "xs",
                              class: "text-muted-400 mb-2"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(slide.role), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_BaseParagraph, {
                              size: "sm",
                              class: "text-muted-500"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(slide.text), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("div", { class: "flex justify-center gap-4 pt-4" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(slide.skills, (skill, s) => {
                                return openBlock(), createBlock(_component_BaseAvatar, {
                                  key: s,
                                  src: skill.logo,
                                  size: "xs",
                                  "data-nui-tooltip": skill.name,
                                  class: "bg-muted-200 dark:bg-muted-700"
                                }, null, 8, ["src", "data-nui-tooltip"]);
                              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AddonCarouselTeam.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0265e538"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "user",
  __ssrInlineRender: true,
  setup(__props) {
    const team = [
      {
        id: 0,
        avatar: "/img/avatars/3.svg",
        badge: "/img/icons/flags/united-states-of-america.svg",
        name: "Daniel Clarke",
        role: "Frontend developer",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        skills: [
          {
            name: "Vue.js",
            logo: "/img/logos/stacks/vue.svg"
          },
          {
            name: "React.js",
            logo: "/img/logos/stacks/react.svg"
          },
          {
            name: "Sass",
            logo: "/img/logos/stacks/sass.svg"
          }
        ],
        to: "#"
      },
      {
        id: 1,
        avatar: "/img/avatars/2.svg",
        badge: "/img/icons/flags/italy.svg",
        name: "Maya Rosselini",
        role: "Product Manager",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        skills: [
          {
            name: "Illustrator",
            logo: "/img/logos/stacks/illustrator.svg"
          },
          {
            name: "Sketch",
            logo: "/img/logos/stacks/sketch.svg"
          },
          {
            name: "Photoshop",
            logo: "/img/logos/stacks/photoshop.svg"
          }
        ],
        to: "#"
      },
      {
        id: 2,
        avatar: "/img/avatars/4.svg",
        badge: "/img/icons/flags/finland.svg",
        name: "Lana Henriks",
        role: "Web developer",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        skills: [
          {
            name: "HTML5",
            logo: "/img/logos/stacks/html5.svg"
          },
          {
            name: "CSS3",
            logo: "/img/logos/stacks/css3.svg"
          },
          {
            name: "Javascript",
            logo: "/img/logos/stacks/javascript.svg"
          }
        ],
        to: "#"
      },
      {
        id: 3,
        avatar: "/img/avatars/9.svg",
        badge: "/img/icons/flags/canada.svg",
        name: "Alina Gheller",
        role: "Mobile developer",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        skills: [
          {
            name: "Android",
            logo: "/img/logos/stacks/android.svg"
          },
          {
            name: "Swift",
            logo: "/img/logos/stacks/swift.svg"
          },
          {
            name: "Flutter",
            logo: "/img/logos/stacks/flutter.svg"
          }
        ],
        to: "#"
      },
      {
        id: 4,
        avatar: "/img/avatars/12.svg",
        badge: "/img/icons/flags/france.svg",
        name: "Karine Marchand",
        role: "Frontend developer",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        skills: [
          {
            name: "Bulma",
            logo: "/img/logos/stacks/bulma.svg"
          },
          {
            name: "Tailwind CSS",
            logo: "/img/logos/stacks/tailwind.svg"
          },
          {
            name: "React.js",
            logo: "/img/logos/stacks/react.svg"
          }
        ],
        to: "#"
      },
      {
        id: 5,
        avatar: "/img/avatars/14.svg",
        badge: "/img/icons/flags/spain.svg",
        name: "Raimundo Perez",
        role: "Frontend developer",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        skills: [
          {
            name: "Vue.js",
            logo: "/img/logos/stacks/vue.svg"
          },
          {
            name: "React.js",
            logo: "/img/logos/stacks/react.svg"
          },
          {
            name: "Typescript",
            logo: "/img/logos/stacks/typescript.svg"
          }
        ],
        to: "#"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AddonCarouselTeam = __nuxt_component_0;
      _push(ssrRenderComponent(_component_AddonCarouselTeam, mergeProps({
        "slides-to-show": 3,
        slides: team
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/carousel/user.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=user-3af60d2e.mjs.map
