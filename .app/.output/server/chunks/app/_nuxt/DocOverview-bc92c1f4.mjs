import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { l as _export_sfc, j as _sfc_main$C, h as __nuxt_component_0$1, b as _sfc_main$o, i as _sfc_main$D, e as __nuxt_component_0$5, f as __nuxt_component_2, _ as _sfc_main$p } from '../server.mjs';
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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

const _imports_0 = "" + publicAssetsURL("img/logos/brands/nuxt-light.svg");
const _imports_1 = "" + publicAssetsURL("img/logos/brands/nuxt-dark.svg");
const _imports_2 = "" + publicAssetsURL("img/logos/brands/tailwindcss-light.svg");
const _imports_3 = "" + publicAssetsURL("img/logos/brands/tailwindcss-dark.svg");
const _imports_4 = "" + publicAssetsURL("img/logos/brands/shuriken-light.svg");
const _imports_5 = "" + publicAssetsURL("img/logos/brands/shuriken-dark.svg");
const _imports_6 = "" + publicAssetsURL("img/logos/brands/typescript-text.svg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BaseCard = _sfc_main$C;
  const _component_TairoLogoText = __nuxt_component_0$1;
  const _component_BaseParagraph = _sfc_main$o;
  const _component_BaseText = _sfc_main$D;
  const _component_NuxtLink = __nuxt_component_0$5;
  const _component_Icon = __nuxt_component_2;
  const _component_BaseHeading = _sfc_main$p;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark:border-muted-800 mb-10 grid gap-4 border-b border-gray-200 pb-10 md:grid-cols-2 xl:gap-8" }, _attrs))}><div>`);
  _push(ssrRenderComponent(_component_BaseCard, {
    shape: "rounded",
    class: "p-8"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="text-muted-400 hover:text-primary-500 dark:text-muted-600 dark:hover:text-primary-500 mb-7 block transition-colors duration-300"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_TairoLogoText, { class: "h-8 transition-colors duration-300" }, null, _parent2, _scopeId));
        _push2(`</div>`);
        _push2(ssrRenderComponent(_component_BaseParagraph, {
          size: "sm",
          class: "text-muted-500 dark:text-muted-400 mb-4"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Tairo is a powerful Nuxt / Tailwind CSS Admin and Webapp UI Kit, built with Vue 3 and TypeScript. `);
            } else {
              return [
                createTextVNode(" Tairo is a powerful Nuxt / Tailwind CSS Admin and Webapp UI Kit, built with Vue 3 and TypeScript. ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseText, {
          size: "sm",
          class: "text-muted-400 dark:text-muted-400"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Tairo provides everything you need to build a modern web app or admin application. All basic components are built with Tailwind CSS and powered by Nuxt. `);
            } else {
              return [
                createTextVNode(" Tairo provides everything you need to build a modern web app or admin application. All basic components are built with Tailwind CSS and powered by Nuxt. ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "/documentation/setup",
          class: "text-primary-500 group mt-6 flex items-center font-sans text-sm font-medium transition-opacity hover:opacity-90"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<span class="me-1"${_scopeId2}>Quick start guide</span>`);
              _push3(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-right",
                class: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-2"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode("span", { class: "me-1" }, "Quick start guide"),
                createVNode(_component_Icon, {
                  name: "lucide:arrow-right",
                  class: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-2"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode("div", { class: "text-muted-400 hover:text-primary-500 dark:text-muted-600 dark:hover:text-primary-500 mb-7 block transition-colors duration-300" }, [
            createVNode(_component_TairoLogoText, { class: "h-8 transition-colors duration-300" })
          ]),
          createVNode(_component_BaseParagraph, {
            size: "sm",
            class: "text-muted-500 dark:text-muted-400 mb-4"
          }, {
            default: withCtx(() => [
              createTextVNode(" Tairo is a powerful Nuxt / Tailwind CSS Admin and Webapp UI Kit, built with Vue 3 and TypeScript. ")
            ]),
            _: 1
          }),
          createVNode(_component_BaseText, {
            size: "sm",
            class: "text-muted-400 dark:text-muted-400"
          }, {
            default: withCtx(() => [
              createTextVNode(" Tairo provides everything you need to build a modern web app or admin application. All basic components are built with Tailwind CSS and powered by Nuxt. ")
            ]),
            _: 1
          }),
          createVNode(_component_NuxtLink, {
            to: "/documentation/setup",
            class: "text-primary-500 group mt-6 flex items-center font-sans text-sm font-medium transition-opacity hover:opacity-90"
          }, {
            default: withCtx(() => [
              createVNode("span", { class: "me-1" }, "Quick start guide"),
              createVNode(_component_Icon, {
                name: "lucide:arrow-right",
                class: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-2"
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="grid gap-2 sm:grid-cols-2 xl:gap-6">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "https://nuxt.com/docs",
    target: "_blank",
    rel: "noopener noreferrer",
    class: "group flex h-full flex-col"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BaseCard, {
          shape: "rounded",
          class: "group-hover:border-success-500 flex h-full items-center p-8 text-center sm:justify-center sm:p-2"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_0)} class="block h-6 dark:hidden sm:mx-auto" alt="Nuxt logo"${_scopeId2}><img${ssrRenderAttr("src", _imports_1)} class="hidden h-6 dark:block sm:mx-auto" alt="Nuxt logo"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "sm",
                weight: "semibold",
                class: "text-muted-800 sr-only dark:text-white"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Nuxt `);
                  } else {
                    return [
                      createTextVNode(" Nuxt ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode("img", {
                  src: _imports_0,
                  class: "block h-6 dark:hidden sm:mx-auto",
                  alt: "Nuxt logo"
                }),
                createVNode("img", {
                  src: _imports_1,
                  class: "hidden h-6 dark:block sm:mx-auto",
                  alt: "Nuxt logo"
                }),
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "sm",
                  weight: "semibold",
                  class: "text-muted-800 sr-only dark:text-white"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Nuxt ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BaseCard, {
            shape: "rounded",
            class: "group-hover:border-success-500 flex h-full items-center p-8 text-center sm:justify-center sm:p-2"
          }, {
            default: withCtx(() => [
              createVNode("img", {
                src: _imports_0,
                class: "block h-6 dark:hidden sm:mx-auto",
                alt: "Nuxt logo"
              }),
              createVNode("img", {
                src: _imports_1,
                class: "hidden h-6 dark:block sm:mx-auto",
                alt: "Nuxt logo"
              }),
              createVNode(_component_BaseHeading, {
                as: "h4",
                size: "sm",
                weight: "semibold",
                class: "text-muted-800 sr-only dark:text-white"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Nuxt ")
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "https://tailwindcss.com/docs/installation",
    target: "_blank",
    rel: "noopener noreferrer",
    class: "group flex h-full flex-col"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BaseCard, {
          shape: "rounded",
          class: "flex h-full items-center p-8 text-center group-hover:border-sky-500 sm:justify-center sm:p-2"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_2)} class="block h-7 dark:hidden sm:mx-auto" alt="Tailwind CSS logo"${_scopeId2}><img${ssrRenderAttr("src", _imports_3)} class="hidden h-7 dark:block sm:mx-auto" alt="Tailwind CSS logo"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "sm",
                weight: "semibold",
                class: "text-muted-800 sr-only dark:text-white"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Tailwind CSS `);
                  } else {
                    return [
                      createTextVNode(" Tailwind CSS ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode("img", {
                  src: _imports_2,
                  class: "block h-7 dark:hidden sm:mx-auto",
                  alt: "Tailwind CSS logo"
                }),
                createVNode("img", {
                  src: _imports_3,
                  class: "hidden h-7 dark:block sm:mx-auto",
                  alt: "Tailwind CSS logo"
                }),
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "sm",
                  weight: "semibold",
                  class: "text-muted-800 sr-only dark:text-white"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Tailwind CSS ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BaseCard, {
            shape: "rounded",
            class: "flex h-full items-center p-8 text-center group-hover:border-sky-500 sm:justify-center sm:p-2"
          }, {
            default: withCtx(() => [
              createVNode("img", {
                src: _imports_2,
                class: "block h-7 dark:hidden sm:mx-auto",
                alt: "Tailwind CSS logo"
              }),
              createVNode("img", {
                src: _imports_3,
                class: "hidden h-7 dark:block sm:mx-auto",
                alt: "Tailwind CSS logo"
              }),
              createVNode(_component_BaseHeading, {
                as: "h4",
                size: "sm",
                weight: "semibold",
                class: "text-muted-800 sr-only dark:text-white"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Tailwind CSS ")
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "https://github.com/shuriken-ui",
    target: "_blank",
    rel: "noopener noreferrer",
    class: "group flex h-full flex-col"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BaseCard, {
          shape: "rounded",
          class: "flex h-full items-center p-8 text-center group-hover:border-violet-500 sm:justify-center sm:p-2"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_4)} class="block h-8 dark:hidden sm:mx-auto" alt="Shuriken UI logo"${_scopeId2}><img${ssrRenderAttr("src", _imports_5)} class="hidden h-8 dark:block sm:mx-auto" alt="Shuriken UI logo"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "sm",
                weight: "semibold",
                class: "text-muted-800 sr-only dark:text-white"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Shuriken UI `);
                  } else {
                    return [
                      createTextVNode(" Shuriken UI ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode("img", {
                  src: _imports_4,
                  class: "block h-8 dark:hidden sm:mx-auto",
                  alt: "Shuriken UI logo"
                }),
                createVNode("img", {
                  src: _imports_5,
                  class: "hidden h-8 dark:block sm:mx-auto",
                  alt: "Shuriken UI logo"
                }),
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "sm",
                  weight: "semibold",
                  class: "text-muted-800 sr-only dark:text-white"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Shuriken UI ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BaseCard, {
            shape: "rounded",
            class: "flex h-full items-center p-8 text-center group-hover:border-violet-500 sm:justify-center sm:p-2"
          }, {
            default: withCtx(() => [
              createVNode("img", {
                src: _imports_4,
                class: "block h-8 dark:hidden sm:mx-auto",
                alt: "Shuriken UI logo"
              }),
              createVNode("img", {
                src: _imports_5,
                class: "hidden h-8 dark:block sm:mx-auto",
                alt: "Shuriken UI logo"
              }),
              createVNode(_component_BaseHeading, {
                as: "h4",
                size: "sm",
                weight: "semibold",
                class: "text-muted-800 sr-only dark:text-white"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Shuriken UI ")
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "https://www.typescriptlang.org/",
    target: "_blank",
    rel: "noopener noreferrer",
    class: "group flex h-full flex-col"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BaseCard, {
          shape: "rounded",
          class: "flex h-full items-center p-8 text-center group-hover:border-blue-500 sm:justify-center sm:p-2"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_6)} class="block h-7 sm:mx-auto" alt="Typescript logo"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "sm",
                weight: "semibold",
                class: "text-muted-800 sr-only dark:text-white"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Typescript `);
                  } else {
                    return [
                      createTextVNode(" Typescript ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode("img", {
                  src: _imports_6,
                  class: "block h-7 sm:mx-auto",
                  alt: "Typescript logo"
                }),
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "sm",
                  weight: "semibold",
                  class: "text-muted-800 sr-only dark:text-white"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Typescript ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BaseCard, {
            shape: "rounded",
            class: "flex h-full items-center p-8 text-center group-hover:border-blue-500 sm:justify-center sm:p-2"
          }, {
            default: withCtx(() => [
              createVNode("img", {
                src: _imports_6,
                class: "block h-7 sm:mx-auto",
                alt: "Typescript logo"
              }),
              createVNode(_component_BaseHeading, {
                as: "h4",
                size: "sm",
                weight: "semibold",
                class: "text-muted-800 sr-only dark:text-white"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Typescript ")
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/components/content/DocOverview.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DocOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { DocOverview as default };
//# sourceMappingURL=DocOverview-bc92c1f4.mjs.map
