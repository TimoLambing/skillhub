import { ad as defineStore, l as _export_sfc, W as useWindowScroll, p as useState, M as useMetaKey, D as usePanels, P as useNinjaWindowScroll, e as __nuxt_component_0$5, h as __nuxt_component_0$1, f as __nuxt_component_2, ae as _sfc_main$j } from '../server.mjs';
import { _ as _sfc_main$4 } from './BaseButtonAction-57c21d00.mjs';
import { ref, useSSRContext, defineComponent, onUnmounted, withCtx, createTextVNode, createVNode, mergeProps, unref, renderSlot } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _sfc_main$5 } from './BaseThemeToggle-8b5dbd48.mjs';
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
import './composables-f7cb2fae.mjs';

const useUserStore = defineStore("users", () => {
  const user = ref({
    auth: false,
    userType: "",
    firstName: "",
    lastName: "",
    occupation: "",
    email: "",
    avatarPath: ""
  });
  const token = ref();
  const home = ref({
    appDownloaded: false,
    rememberMe: false,
    theme: "light"
  });
  const checkAuth = async () => {
    user.value.auth = true;
    return true;
  };
  return { user, token, checkAuth, home };
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "PWAIntallerPrompt",
  __ssrInlineRender: true,
  setup(__props) {
    const deferredPrompt = ref(null);
    const store = useUserStore();
    const showInstallPrompt = ref(false);
    const isIOS = ref(false);
    function handleInstallClick() {
      if (isIOS.value) {
        alert('To install the app, tap the Share button in Safari and then select "Add to Home Screen".');
      } else if (deferredPrompt.value) {
        deferredPrompt.value.prompt();
        deferredPrompt.value.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === "accepted") {
            store.setAppDownloaded(true);
          }
          deferredPrompt.value = null;
          showInstallPrompt.value = false;
        });
      }
    }
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      deferredPrompt.value = event;
      showInstallPrompt.value = true;
    };
    onUnmounted(() => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_BaseButtonAction = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (showInstallPrompt.value) {
        _push(ssrRenderComponent(_component_NuxtLink, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseButtonAction, {
                shape: "curved",
                color: "primary",
                onClick: handleInstallClick
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Download `);
                  } else {
                    return [
                      createTextVNode(" Download ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseButtonAction, {
                  shape: "curved",
                  color: "primary",
                  onClick: handleInstallClick
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Download ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PWAIntallerPrompt.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "LandingNavbar",
  __ssrInlineRender: true,
  setup(__props) {
    useWindowScroll();
    useState("search-open", () => false);
    const isMobileOpen = ref(false);
    const metaKey = useMetaKey();
    usePanels();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_TairoLogoText = __nuxt_component_0$1;
      const _component_BaseButtonAction = _sfc_main$4;
      const _component_PWAIntallerPrompt = _sfc_main$3;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseThemeToggle = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-x-0 top-0 z-50 group/nav ltablet:max-w-[1000px] ptablet:max-w-[47rem] mx-auto lg:max-w-full group-[&.scrolled]/landing:mt-0 group-[&:not(.scrolled)]/landing:mt-4 motion-safe:transition-all motion-safe:duration-200" }, _attrs))}><div class="w-full backdrop-blur-md group-[&amp;.scrolled]/landing:dark:bg-muted-950/30 group-[&amp;.scrolled]/landing:border-muted-200 group-[&amp;.scrolled]/landing:dark:border-muted-700 group-[&amp;.scrolled]/landing:motion-safe:shadow-muted-300/30 group-[&amp;.scrolled]/landing:motion-safe:dark:shadow-muted-800/20 border-b group-[&amp;:not(.scrolled)]/landing:border-transparent group-[&amp;.scrolled]/landing:bg-white/95 motion-safe:transition-all motion-safe:duration-200 group-[&amp;.scrolled]/landing:motion-safe:shadow-xl"><div class="mx-auto lg:max-w-7xl flex p-4"><div class="flex w-1/2 items-center gap-2 md:w-1/5">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "ms-2 inline-flex",
        "aria-label": "Go to Tairo homepage"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TairoLogoText, { class: "text-primary-500 group-[&.scrolled]/landing:h-5 group-[&:not(.scrolled)]/landing:h-5 motion-safe:transition-all motion-safe:duration-200" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TairoLogoText, { class: "text-primary-500 group-[&.scrolled]/landing:h-5 group-[&:not(.scrolled)]/landing:h-5 motion-safe:transition-all motion-safe:duration-200" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="${ssrRenderClass([[
        unref(isMobileOpen) ? "shadow-muted-300/30 dark:shadow-muted-900/20 group-[&.scrolled]/landing:ltablet:mt-0 group-[&:not(.scrolled)]/landing:ltablet:mt-0 flex flex-col space-y-4 rounded-xl p-6 shadow-xl group-[&.scrolled]/landing:mt-2 group-[&:not(.scrolled)]/landing:mt-4 motion-safe:transition-all motion-safe:duration-200 group-[&.scrolled]/landing:lg:mt-0 group-[&:not(.scrolled)]/landing:lg:mt-0" : "hidden"
      ], "ltablet:static ltablet:w-auto ltablet:flex ltablet:flex-row dark:bg-muted-950 ltablet:!bg-transparent ltablet:mx-0 fixed inset-x-0 top-20 mx-auto w-[calc(100%_-_2rem)] items-center justify-center bg-white lg:static lg:mx-0 lg:flex lg:w-auto lg:flex-row lg:!bg-transparent"])}">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/documentation",
        class: "inline-flex items-center justify-center px-6",
        "data-aos": "zoom-in",
        "data-aos-duration": "1500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Recruiters `);
          } else {
            return [
              createTextVNode(" Recruiters ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/documentation",
        class: "inline-flex items-center justify-center px-6",
        "data-aos": "zoom-in",
        "data-aos-duration": "1200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Talents `);
          } else {
            return [
              createTextVNode(" Talents ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/documentation",
        class: "inline-flex items-center justify-center px-6",
        "data-aos": "zoom-in",
        "data-aos-duration": "900"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` About `);
          } else {
            return [
              createTextVNode(" About ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/documentation",
        class: "inline-flex items-center justify-center px-6",
        "data-aos": "zoom-in",
        "data-aos-duration": "600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contact `);
          } else {
            return [
              createTextVNode(" Contact ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/documentation",
        class: "inline-flex items-center justify-center px-6",
        "data-aos": "zoom-in",
        "data-aos-duration": "300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Articles `);
          } else {
            return [
              createTextVNode(" Articles ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-row">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/auth",
        class: "lg:hidden"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseButtonAction, {
              shape: "full",
              color: "muted"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Login `);
                } else {
                  return [
                    createTextVNode(" Login ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseButtonAction, {
                shape: "full",
                color: "muted"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Login ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="lg:hidden">`);
      _push(ssrRenderComponent(_component_PWAIntallerPrompt, null, null, _parent));
      _push(`</div></div><div class="px-6"><button type="button" class="group-[&amp;.scrolled]/landing:bg-muted-100 group-[&amp;.scrolled]/landing:dark:bg-muted-900 group-[&amp;.scrolled]/landing:border-muted-100 group-[&amp;.scrolled]/landing:dark:border-muted-800 group-[&amp;.scrolled]/landing:text-muted-400 group-[&amp;.scrolled]/landing:dark:text-muted-500 group-[&amp;.scrolled]/landing:hover:text-primary-500 group-[&amp;.scrolled]/landing:dark:hover:text-primary-500 group-[&amp;:not(.scrolled)]/landing:text-muted-800 group-[&amp;:not(.scrolled)]/landing:dark:text-muted-200 group flex items-center gap-2 rounded-xl py-1 pe-1 ps-3 group-[&amp;.scrolled]/landing:border" aria-label="Open search">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:search",
        class: "h-4 w-4 motion-safe:transition-colors motion-safe:duration-300"
      }, null, _parent));
      _push(`<span class="group-[&amp;.scrolled]/landing:dark:bg-muted-800 group-[&amp;.scrolled]/landing:border-muted-200 group-[&amp;.scrolled]/landing:dark:border-muted-700 group-[&amp;.scrolled]/landing:group-hover:text-muted-600 group-[&amp;.scrolled]/landing:dark:group-hover:text-muted-100 rounded-lg border px-2 py-0.5 group-[&amp;:not(.scrolled)]/landing:border-transparent group-[&amp;.scrolled]/landing:bg-white group-[&amp;.scrolled]/landing:shadow motion-safe:transition-colors motion-safe:duration-300"><kbd class="font-sans text-sm tracking-wide whitespace-nowrap">${ssrInterpolate(unref(metaKey))} + k </kbd></span></button></div></div><div class="flex-grow flex items-center justify-end gap-4 md:w-1/5"><button type="button" class="border-muted-200 hover:ring-muted-200 dark:hover:ring-muted-700 dark:border-muted-700 dark:bg-muted-800 dark:ring-offset-muted-900 flex h-9 w-9 items-center justify-center rounded-full border bg-white ring-1 ring-transparent transition-all duration-300 hover:ring-offset-4">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:drop-half-bottom-duotone",
        class: "text-muted-400 h-5 w-5"
      }, null, _parent));
      _push(`</button>`);
      _push(ssrRenderComponent(_component_BaseThemeToggle, { "aria-label": "Toggle darkmode" }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/auth",
        class: "hidden lg:flex"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseButtonAction, {
              shape: "full",
              color: "muted"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Login`);
                } else {
                  return [
                    createTextVNode("Login")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseButtonAction, {
                shape: "full",
                color: "muted"
              }, {
                default: withCtx(() => [
                  createTextVNode("Login")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden lg:flex">`);
      _push(ssrRenderComponent(_component_PWAIntallerPrompt, null, null, _parent));
      _push(`</div><button type="button" class="ltablet:hidden flex items-center justify-center lg:hidden"${ssrRenderAttr("aria-label", unref(isMobileOpen) ? "Close menu" : "Open menu")}><div class="space-y-1.5"><span class="${ssrRenderClass([unref(isMobileOpen) ? "w-2" : "w-6", "bg-primary-600 block h-0.5 motion-safe:transition-all motion-safe:duration-300"])}"></span><span class="${ssrRenderClass([unref(isMobileOpen) ? "w-6" : "w-6", "bg-primary-600 block h-0.5 motion-safe:transition-all motion-safe:duration-300"])}"></span><span class="${ssrRenderClass([unref(isMobileOpen) ? "w-4" : "w-6", "bg-primary-600 block h-0.5 motion-safe:transition-all motion-safe:duration-300"])}"></span></div></button></div></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LandingNavbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LandingLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const { y } = useNinjaWindowScroll();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingNavbar = _sfc_main$2;
      const _component_TairoPanels = _sfc_main$j;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["group/landing overflow-hidden", unref(y) > 60 ? "scrolled" : ""]
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_LandingNavbar, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_TairoPanels, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LandingLayout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LandingLayout = _sfc_main$1;
  _push(ssrRenderComponent(_component_LandingLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/landing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const landing = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { landing as default };
//# sourceMappingURL=landing-9033e8ce.mjs.map
