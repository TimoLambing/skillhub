import { j as _sfc_main$C, _ as _sfc_main$p, e as __nuxt_component_0$5, b as _sfc_main$o, f as __nuxt_component_2, d as _sfc_main$x, s as _sfc_main$E } from '../server.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$1$1, b as _sfc_main$a } from './DemoProgressCircle-0aca5d1c.mjs';
import { _ as _sfc_main$7 } from './DemoVcardRight-eff8b26d.mjs';
import { _ as _sfc_main$9, a as _sfc_main$1$2 } from './DemoIconText-0b939fde.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _sfc_main$8 } from './DemoTeamListCompact-a2bffd9a.mjs';
import { _ as _sfc_main$b } from './BaseTag-734af285.mjs';
import { _ as _sfc_main$c } from './BaseIconBox-642fe941.mjs';
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
import './BaseButtonIcon-6150946c.mjs';
import './BaseProgressCircle-f74c4642.mjs';
import './BaseProgress-1402c581.mjs';

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "DemoInfoImage",
  __ssrInlineRender: true,
  props: {
    title: { default: void 0 },
    text: { default: void 0 },
    image: {},
    imageDark: { default: void 0 },
    shape: { default: "rounded" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DemoPicture = _sfc_main$1$2;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_DemoPicture, {
        src: props.image,
        "image-dark": props.imageDark,
        height: 300,
        width: 300,
        shape: props.shape
      }, null, _parent));
      _push(`<div class="mt-3">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "md",
        weight: "medium",
        lead: "tight",
        class: "text-muted-800 mb-1 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(props.title)}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(props.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-400"${_scopeId}>${ssrInterpolate(props.text)}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-400" }, toDisplayString(props.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoInfoImage.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DemoSocialLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const links = [
      {
        name: "facebook",
        url: "/",
        icon: "fa6-brands:facebook-f"
      },
      {
        name: "twitter",
        url: "/",
        icon: "fa6-brands:twitter"
      },
      {
        name: "linkedin",
        url: "/",
        icon: "fa6-brands:linkedin-in"
      },
      {
        name: "github",
        url: "/",
        icon: "fa6-brands:github"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex w-full items-center justify-between gap-3" }, _attrs))}><!--[-->`);
      ssrRenderList(links, (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.name,
          to: link.url,
          class: ["text-muted-400 flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-300 hover:text-white hover:shadow-xl", [
            link.name === "facebook" && "hover:bg-indigo-800 hover:shadow-indigo-500/30 dark:hover:shadow-indigo-800/30",
            link.name === "twitter" && "hover:bg-sky-500 hover:shadow-sky-500/30 dark:hover:shadow-sky-800/30",
            link.name === "linkedin" && "hover:bg-indigo-800 hover:shadow-indigo-500/30 dark:hover:shadow-indigo-800/30",
            link.name === "github" && "hover:bg-muted-900 dark:hover:bg-muted-700 hover:shadow-muted-500/30 dark:hover:shadow-muted-800/30"
          ]]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: link.icon,
                class: "h-4 w-4"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: link.icon,
                  class: "h-4 w-4"
                }, null, 8, ["name"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoSocialLinks.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DemoShoppingCartCompact",
  __ssrInlineRender: true,
  props: {
    shape: { default: "rounded" }
  },
  setup(__props) {
    const props = __props;
    const products = [
      {
        id: 0,
        name: "Apple \u2014 5th Gen Connected Watch, 256GB",
        image: "/img/illustrations/widgets/watch-1.svg",
        price: 999,
        quantity: 1
      },
      {
        id: 1,
        name: "Apple \u2014 5th Gen Connected Watch, 128GB",
        image: "/img/illustrations/widgets/watch-2.svg",
        price: 899,
        quantity: 1
      },
      {
        id: 2,
        name: "Apple \u2014 5th Gen Connected Watch, 64GB",
        image: "/img/illustrations/widgets/watch-3.svg",
        price: 799,
        quantity: 1
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseTag = _sfc_main$b;
      const _component_BaseButton = _sfc_main$x;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-6 flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "md",
        weight: "semibold",
        lead: "tight"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Shopping cart `);
          } else {
            return [
              createTextVNode(" Shopping cart ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseTag, {
        color: "primary",
        size: "sm",
        shape: "full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`3 items`);
          } else {
            return [
              createTextVNode("3 items")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-2"><!--[-->`);
      ssrRenderList(products, (product) => {
        _push(`<div class="flex gap-2"><div class="${ssrRenderClass([[
          props.shape === "rounded" ? "rounded" : "",
          props.shape === "curved" ? "rounded-xl" : "",
          props.shape === "full" ? "rounded-full" : ""
        ], "bg-muted-100 dark:bg-muted-700 flex h-16 w-16 shrink-0 items-center justify-center"])}"><img class="h-12 w-12 object-cover object-center"${ssrRenderAttr("src", product.image)} alt="Widget image"></div><div><p class="text-muted-500 dark:text-muted-400 mt-1 font-sans text-xs">${ssrInterpolate(product.name)}</p><p class="font-sans font-semibold">$${ssrInterpolate(product.price)}</p></div></div>`);
      });
      _push(`<!--]--></div><div class="mt-4">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        color: "primary",
        shape: props.shape,
        class: "!h-12 w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Checkout `);
          } else {
            return [
              createTextVNode(" Checkout ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoShoppingCartCompact.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DemoImageLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const links = [
      {
        name: "Kendra W.",
        url: "/",
        image: "/img/avatars/10.svg"
      },
      {
        name: "Jake H.",
        url: "/",
        image: "/img/avatars/8.svg"
      },
      {
        name: "Hermann M.",
        url: "/",
        image: "/img/avatars/16.svg"
      },
      {
        name: "Clarissa M.",
        url: "/",
        image: "/img/avatars/5.svg"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_BaseAvatar = _sfc_main$E;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex w-full items-center justify-between gap-3" }, _attrs))}><!--[-->`);
      ssrRenderList(links, (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.name,
          to: link.url,
          class: "group flex h-9 w-9 items-center justify-center transition-all duration-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseAvatar, {
                src: link.image,
                size: "xs",
                class: "opacity-60 grayscale transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0",
                "data-nui-tooltip": link.name
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseAvatar, {
                  src: link.image,
                  size: "xs",
                  class: "opacity-60 grayscale transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0",
                  "data-nui-tooltip": link.name
                }, null, 8, ["src", "data-nui-tooltip"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoImageLinks.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DemoProductCompact",
  __ssrInlineRender: true,
  props: {
    title: { default: void 0 },
    text: { default: void 0 },
    icon: { default: void 0 },
    image: {},
    value: { default: 0 },
    shape: { default: "rounded" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseButton = _sfc_main$x;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "group relative" }, _attrs))}>`);
      if (props.icon) {
        _push(`<div class="absolute -start-2 -top-2 flex items-center justify-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: props.icon,
          class: "text-muted-400 h-6 w-6"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="absolute -top-2 end-0 flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h4",
        size: "lg",
        weight: "semibold",
        lead: "loose",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>$799</span>`);
          } else {
            return [
              createVNode("span", null, "$799")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="py-6"><div class="relative"><img class="relative z-10 mx-auto max-w-[100px]"${ssrRenderAttr("src", props.image)}${ssrRenderAttr("alt", props.title)}><div class="bg-primary-500/10 absolute start-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-300 group-hover:scale-150"></div></div></div><div class="text-center">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "md",
        weight: "medium",
        lead: "tight",
        class: "text-muted-800 mb-1 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(props.title)}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(props.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-400"${_scopeId}>${ssrInterpolate(props.text)}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-400" }, toDisplayString(props.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-4">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        class: "w-full",
        color: "primary",
        icon: "lucide:shopping-cart",
        shape: props.shape
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Add to Cart</span>`);
          } else {
            return [
              createVNode("span", null, "Add to Cart")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoProductCompact.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DemoIconsSquare",
  __ssrInlineRender: true,
  props: {
    shape: { default: "rounded" }
  },
  setup(__props) {
    const props = __props;
    const links = [
      {
        title: "Profile",
        icon: "ph:user-duotone",
        url: "/"
      },
      {
        title: "Settings",
        icon: "ph:gear-six-duotone",
        url: "/"
      },
      {
        title: "Messages",
        icon: "ph:chat-circle-duotone",
        url: "/"
      },
      {
        title: "Tasks",
        icon: "ph:check-circle-duotone",
        url: "/"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_BaseIconBox = _sfc_main$c;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-2 gap-4" }, _attrs))}><!--[-->`);
      ssrRenderList(links, (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.title,
          to: link.url,
          class: ["dark:bg-muted-800 border-muted-200 hover:border-primary-500 dark:hover:border-primary-500 dark:border-muted-700 hover:shadow-muted-300/30 dark:hover:shadow-muted-900/30 group flex flex-col border bg-white py-5 transition-all duration-300 hover:shadow-xl", [
            props.shape === "rounded" ? "rounded-md" : "",
            props.shape === "curved" ? "rounded-xl" : ""
          ]]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="text-center"${_scopeId}><div class="mb-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseIconBox, { class: "bg-primary-500/20 text-primary-500 group-hover:bg-primary-500 transition-colors duration-300 group-hover:text-white" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: link.icon
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: link.icon
                      }, null, 8, ["name"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div><p class="text-muted-600 dark:text-muted-200 font-sans text-sm font-medium"${_scopeId}>${ssrInterpolate(link.title)}</p></div>`);
            } else {
              return [
                createVNode("div", { class: "text-center" }, [
                  createVNode("div", { class: "mb-2" }, [
                    createVNode(_component_BaseIconBox, { class: "bg-primary-500/20 text-primary-500 group-hover:bg-primary-500 transition-colors duration-300 group-hover:text-white" }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: link.icon
                        }, null, 8, ["name"])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  createVNode("p", { class: "text-muted-600 dark:text-muted-200 font-sans text-sm font-medium" }, toDisplayString(link.title), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoIconsSquare.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "creative",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$C;
      const _component_DemoInfoBadges = _sfc_main$2$1;
      const _component_DemoVcardRight = _sfc_main$7;
      const _component_DemoInfoImage = _sfc_main$6;
      const _component_BaseHeading = _sfc_main$p;
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_DemoTeamListCompact = _sfc_main$8;
      const _component_DemoSocialLinks = _sfc_main$5;
      const _component_DemoTeamSearchCompact = _sfc_main$1$1;
      const _component_DemoShoppingCartCompact = _sfc_main$4;
      const _component_DemoIconText = _sfc_main$9;
      const _component_DemoImageLinks = _sfc_main$3;
      const _component_DemoProgressCircle = _sfc_main$a;
      const _component_DemoProductCompact = _sfc_main$2;
      const _component_DemoIconsSquare = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "ptablet:grid-cols-2 grid gap-4 sm:grid-cols-4" }, _attrs))}><div class="relative flex flex-col gap-4">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
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
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoVcardRight, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoVcardRight)
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
            _push2(ssrRenderComponent(_component_DemoInfoImage, {
              shape: "curved",
              image: "/img/illustrations/widgets/7.svg",
              title: "You've unlocked 2 new Achievements",
              text: "Congrats, your efforts have been rewarded. Keep up like this!"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoInfoImage, {
                shape: "curved",
                image: "/img/illustrations/widgets/7.svg",
                title: "You've unlocked 2 new Achievements",
                text: "Congrats, your efforts have been rewarded. Keep up like this!"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "p-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-8 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>My Team</span>`);
                } else {
                  return [
                    createVNode("span", null, "My Team")
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
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_DemoTeamListCompact, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-8 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "My Team")
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
              createVNode(_component_DemoTeamListCompact)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative flex flex-col gap-4">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "p-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoInfoImage, {
              shape: "curved",
              image: "/img/illustrations/widgets/4.svg",
              title: "You've unlocked 2 new Achievements",
              text: "Congrats, your efforts have been rewarded. Keep up like this!"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoInfoImage, {
                shape: "curved",
                image: "/img/illustrations/widgets/4.svg",
                title: "You've unlocked 2 new Achievements",
                text: "Congrats, your efforts have been rewarded. Keep up like this!"
              })
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
            _push2(ssrRenderComponent(_component_DemoSocialLinks, { shape: "curved" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoSocialLinks, { shape: "curved" })
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
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoShoppingCartCompact, { shape: "curved" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoShoppingCartCompact, { shape: "curved" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative flex flex-col gap-4">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoIconText, {
              title: "@cssninjaStudio",
              icon: "lucide:twitter",
              text: "Tairo will be released very soon, probably around the end of the year of the Christmas holidays.",
              indicator: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-primary-500 mt-3 flex w-full gap-2 font-sans text-xs font-medium"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`#uikit`);
                      } else {
                        return [
                          createTextVNode("#uikit")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`#dashboards`);
                      } else {
                        return [
                          createTextVNode("#dashboards")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`#tailwind`);
                      } else {
                        return [
                          createTextVNode("#tailwind")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-primary-500 mt-3 flex w-full gap-2 font-sans text-xs font-medium" }, [
                      createVNode(_component_NuxtLink, { to: "#" }, {
                        default: withCtx(() => [
                          createTextVNode("#uikit")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, { to: "#" }, {
                        default: withCtx(() => [
                          createTextVNode("#dashboards")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, { to: "#" }, {
                        default: withCtx(() => [
                          createTextVNode("#tailwind")
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoIconText, {
                title: "@cssninjaStudio",
                icon: "lucide:twitter",
                text: "Tairo will be released very soon, probably around the end of the year of the Christmas holidays.",
                indicator: ""
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-primary-500 mt-3 flex w-full gap-2 font-sans text-xs font-medium" }, [
                    createVNode(_component_NuxtLink, { to: "#" }, {
                      default: withCtx(() => [
                        createTextVNode("#uikit")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtLink, { to: "#" }, {
                      default: withCtx(() => [
                        createTextVNode("#dashboards")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtLink, { to: "#" }, {
                      default: withCtx(() => [
                        createTextVNode("#tailwind")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })
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
            _push2(ssrRenderComponent(_component_DemoInfoImage, {
              shape: "curved",
              image: "/img/illustrations/widgets/5.svg",
              title: "You've unlocked 2 new Achievements",
              text: "Congrats, your efforts have been rewarded. Keep up like this!"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoInfoImage, {
                shape: "curved",
                image: "/img/illustrations/widgets/5.svg",
                title: "You've unlocked 2 new Achievements",
                text: "Congrats, your efforts have been rewarded. Keep up like this!"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoVcardRight, { centered: "" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoVcardRight, { centered: "" })
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
            _push2(ssrRenderComponent(_component_DemoImageLinks, { shape: "curved" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoImageLinks, { shape: "curved" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoProgressCircle, {
              image: "/img/avatars/6.svg",
              title: `${78}% completed!`,
              text: "Congrats, your efforts have been rewarded. Keep up like this!",
              value: 78
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoProgressCircle, {
                image: "/img/avatars/6.svg",
                title: `${78}% completed!`,
                text: "Congrats, your efforts have been rewarded. Keep up like this!",
                value: 78
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative flex flex-col gap-4">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoProductCompact, {
              image: "/img/illustrations/widgets/watch-3.svg",
              title: "Connected Watch",
              text: "Apple \u2014 5th Gen Connected Watch series, 64GB, 2023 issue",
              icon: "fa6-brands:apple",
              shape: "curved"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoProductCompact, {
                image: "/img/illustrations/widgets/watch-3.svg",
                title: "Connected Watch",
                text: "Apple \u2014 5th Gen Connected Watch series, 64GB, 2023 issue",
                icon: "fa6-brands:apple",
                shape: "curved"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoIconsSquare, { shape: "curved" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoIconsSquare, { shape: "curved" })
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
            _push2(ssrRenderComponent(_component_DemoInfoImage, {
              shape: "curved",
              image: "/img/illustrations/widgets/8.svg",
              title: "You've unlocked 2 new Achievements",
              text: "Congrats, your efforts have been rewarded. Keep up like this!"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoInfoImage, {
                shape: "curved",
                image: "/img/illustrations/widgets/8.svg",
                title: "You've unlocked 2 new Achievements",
                text: "Congrats, your efforts have been rewarded. Keep up like this!"
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/widgets/creative.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=creative-e00f596b.mjs.map
