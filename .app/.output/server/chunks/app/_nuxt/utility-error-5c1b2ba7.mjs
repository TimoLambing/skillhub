import { m as useAppConfig, Z as resolveComponentOrNative, $ as clearError, Y as _sfc_main$a, Q as _sfc_main$3, d as _sfc_main$x, f as __nuxt_component_2, j as _sfc_main$C, z as _sfc_main$F } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseSwitchBall-c7b340a1.mjs';
import { _ as _sfc_main$2 } from './BaseTag-734af285.mjs';
import { _ as _sfc_main$4 } from './BaseIconBox-642fe941.mjs';
import { defineComponent, computed, ref, resolveDirective, withCtx, unref, createTextVNode, toDisplayString, createVNode, resolveDynamicComponent, openBlock, createBlock, mergeProps, createCommentVNode, isRef, withDirectives, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderVNode, ssrGetDirectiveProps } from 'vue/server-renderer';
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
import './IconCheck-b31ac5c7.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "utility-error",
  __ssrInlineRender: true,
  props: {
    error: { default: () => ({
      statusCode: 500,
      message: "An internal test Server Error has occured",
      url: "/layouts/error-1",
      stack: [
        `Error`,
        `    at default (/home/cssninja/tairo/.demo/pages/layouts/error-1.vue:33:14)`,
        `    at resolvePropValue (/home/cssninja/tairo/node_modules/.pnpm/@vue+runtime-core@3.2.47/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:3944:63)`,
        `    at setFullProps (/home/cssninja/tairo/node_modules/.pnpm/@vue+runtime-core@3.2.47/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:3925:26)`,
        `    at initProps (/home/cssninja/tairo/node_modules/.pnpm/@vue+runtime-core@3.2.47/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:3759:5)`,
        `    at setupComponent (/home/cssninja/tairo/node_modules/.pnpm/@vue+runtime-core@3.2.47/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:7146:5)`,
        `    at renderComponentVNode (/home/cssninja/tairo/node_modules/.pnpm/@vue+server-renderer@3.2.47_vue@3.2.47/node_modules/@vue/server-renderer/dist/server-renderer.cjs.js:628:17)`,
        `    at renderVNode (/home/cssninja/tairo/node_modules/.pnpm/@vue+server-renderer@3.2.47_vue@3.2.47/node_modules/@vue/server-renderer/dist/server-renderer.cjs.js:755:22)`,
        `    at renderComponentSubTree (/home/cssninja/tairo/node_modules/.pnpm/@vue+server-renderer@3.2.47_vue@3.2.47/node_modules/@vue/server-renderer/dist/server-renderer.cjs.js:719:13)`,
        `    at renderComponentVNode (/home/cssninja/tairo/node_modules/.pnpm/@vue+server-renderer@3.2.47_vue@3.2.47/node_modules/@vue/server-renderer/dist/server-renderer.cjs.js:644:16)`,
        `    at renderVNode (/home/cssninja/tairo/node_modules/.pnpm/@vue+server-renderer@3.2.47_vue@3.2.47/node_modules/@vue/server-renderer/dist/server-renderer.cjs.js:755:22)`
      ].join("\n"),
      statusMessage: "Internal Server Error"
    }) }
  },
  setup(__props) {
    const props = __props;
    const title = computed(() => {
      if (props.error?.statusCode === 401) {
        return "Not authorized";
      }
      if (props.error?.statusCode === 404) {
        return "Page not found";
      }
      return "Oops... Something went wrong";
    });
    const description = computed(() => {
      if (props.error?.statusCode === 401) {
        return "You are not authorized to access this page.";
      }
      if (props.error?.statusCode === 404) {
        return "We couldn't find the page you were looking for.";
      }
      return "An error has occured. If the problem persists, please contact a system administrator or try again later.";
    });
    const app = useAppConfig();
    const handleError = () => clearError({ redirect: "/" });
    const showStackTrace = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoSidebarLayout = _sfc_main$a;
      const _component_BasePlaceholderPage = _sfc_main$3;
      const _component_BaseButton = _sfc_main$x;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseSwitchBall = _sfc_main$1;
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseTag = _sfc_main$2;
      const _component_BaseButtonClose = _sfc_main$F;
      const _component_BaseIconBox = _sfc_main$4;
      const _directive_focus = resolveDirective("focus");
      _push(ssrRenderComponent(_component_TairoSidebarLayout, _attrs, {
        "toolbar-title": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(app).tairo.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(app).tairo.title), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BasePlaceholderPage, {
              title: unref(title),
              subtitle: unref(description),
              "image-size": "md",
              class: "relative !items-end"
            }, {
              image: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(app).tairo.error?.logo?.component) {
                    ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(unref(app).tairo.error.logo.component)), unref(app).tairo.error.logo.props, null), _parent3, _scopeId2);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    unref(app).tairo.error?.logo?.component ? (openBlock(), createBlock(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(unref(app).tairo.error.logo.component)), mergeProps({ key: 0 }, unref(app).tairo.error.logo.props), null, 16)) : createCommentVNode("", true)
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="mt-4"${_scopeId2}><div class="text-muted-400/20 dark:text-muted-400/10 absolute inset-x-0 top-1/3 -translate-y-1/2 text-[13rem] font-bold sm:text-[20rem]"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(props.error?.statusCode)}</span></div>`);
                  _push3(ssrRenderComponent(_component_BaseButton, {
                    color: "primary",
                    class: "!h-12 w-48 items-center gap-2",
                    shape: "curved",
                    onClick: handleError
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, { name: "feather:arrow-left" }, null, _parent4, _scopeId3));
                        _push4(` Take me Back `);
                      } else {
                        return [
                          createVNode(_component_Icon, { name: "feather:arrow-left" }),
                          createTextVNode(" Take me Back ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="mt-6 flex items-center justify-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseSwitchBall, {
                    modelValue: unref(showStackTrace),
                    "onUpdate:modelValue": ($event) => isRef(showStackTrace) ? showStackTrace.value = $event : null,
                    color: "danger",
                    label: `${unref(showStackTrace) ? "Hide" : "Show"} Stacktrace (dev)`
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "mt-4" }, [
                      createVNode("div", { class: "text-muted-400/20 dark:text-muted-400/10 absolute inset-x-0 top-1/3 -translate-y-1/2 text-[13rem] font-bold sm:text-[20rem]" }, [
                        createVNode("span", null, toDisplayString(props.error?.statusCode), 1)
                      ]),
                      createVNode(_component_BaseButton, {
                        color: "primary",
                        class: "!h-12 w-48 items-center gap-2",
                        shape: "curved",
                        onClick: handleError
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, { name: "feather:arrow-left" }),
                          createTextVNode(" Take me Back ")
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "mt-6 flex items-center justify-center" }, [
                        createVNode(_component_BaseSwitchBall, {
                          modelValue: unref(showStackTrace),
                          "onUpdate:modelValue": ($event) => isRef(showStackTrace) ? showStackTrace.value = $event : null,
                          color: "danger",
                          label: `${unref(showStackTrace) ? "Hide" : "Show"} Stacktrace (dev)`
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(showStackTrace)) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseCard, mergeProps({
                shape: "curved",
                class: "nui-focus nui-text-700 group relative mx-auto mt-6 max-w-3xl border-2 border-dashed p-8 hover:border-solid",
                tabindex: "0"
              }, ssrGetDirectiveProps(_ctx, _directive_focus)), {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="mb-3 flex items-center justify-start gap-1 opacity-30 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100"${_scopeId2}>`);
                    if (props.error.statusCode) {
                      _push3(ssrRenderComponent(_component_BaseTag, {
                        color: "danger",
                        size: "sm"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(props.error.statusCode)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(props.error.statusCode), 1)
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (props.error.url) {
                      _push3(ssrRenderComponent(_component_BaseTag, {
                        color: "danger",
                        flavor: "outline",
                        size: "sm"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(props.error.url)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(props.error.url), 1)
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(ssrRenderComponent(_component_BaseButtonClose, {
                      color: "muted",
                      class: "ms-auto",
                      onClick: ($event) => showStackTrace.value = false
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="mb-4 flex items-center gap-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BaseIconBox, {
                      color: "danger",
                      shape: "full",
                      size: "md"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "ph:skull-duotone",
                            class: "h-6 w-6"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "ph:skull-duotone",
                              class: "h-6 w-6"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<div${_scopeId2}><h4 class="text-danger-500 font-mono text-lg font-medium [overflow-wrap:anywhere]"${_scopeId2}>${ssrInterpolate(props.error.message)}</h4><p class="nui-text-500 font-sans text-xs font-medium"${_scopeId2}> This is a demo stacktrace, you won&#39;t see it in production. </p></div></div>`);
                    if (props.error.stack) {
                      _push3(`<div class="mt-6 overflow-auto whitespace-pre p-2 font-mono text-sm opacity-60 transition-all duration-300 group-hover:opacity-100 group-focus:opacity-100"${_scopeId2}>${props.error.stack}</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      createVNode("div", { class: "mb-3 flex items-center justify-start gap-1 opacity-30 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100" }, [
                        props.error.statusCode ? (openBlock(), createBlock(_component_BaseTag, {
                          key: 0,
                          color: "danger",
                          size: "sm"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.error.statusCode), 1)
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        props.error.url ? (openBlock(), createBlock(_component_BaseTag, {
                          key: 1,
                          color: "danger",
                          flavor: "outline",
                          size: "sm"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.error.url), 1)
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_BaseButtonClose, {
                          color: "muted",
                          class: "ms-auto",
                          onClick: ($event) => showStackTrace.value = false
                        }, null, 8, ["onClick"])
                      ]),
                      createVNode("div", { class: "mb-4 flex items-center gap-2" }, [
                        createVNode(_component_BaseIconBox, {
                          color: "danger",
                          shape: "full",
                          size: "md"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_Icon, {
                              name: "ph:skull-duotone",
                              class: "h-6 w-6"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("div", null, [
                          createVNode("h4", { class: "text-danger-500 font-mono text-lg font-medium [overflow-wrap:anywhere]" }, toDisplayString(props.error.message), 1),
                          createVNode("p", { class: "nui-text-500 font-sans text-xs font-medium" }, " This is a demo stacktrace, you won't see it in production. ")
                        ])
                      ]),
                      props.error.stack ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "mt-6 overflow-auto whitespace-pre p-2 font-mono text-sm opacity-60 transition-all duration-300 group-hover:opacity-100 group-focus:opacity-100",
                        innerHTML: props.error.stack
                      }, null, 8, ["innerHTML"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_BasePlaceholderPage, {
                title: unref(title),
                subtitle: unref(description),
                "image-size": "md",
                class: "relative !items-end"
              }, {
                image: withCtx(() => [
                  unref(app).tairo.error?.logo?.component ? (openBlock(), createBlock(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(unref(app).tairo.error.logo.component)), mergeProps({ key: 0 }, unref(app).tairo.error.logo.props), null, 16)) : createCommentVNode("", true)
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "mt-4" }, [
                    createVNode("div", { class: "text-muted-400/20 dark:text-muted-400/10 absolute inset-x-0 top-1/3 -translate-y-1/2 text-[13rem] font-bold sm:text-[20rem]" }, [
                      createVNode("span", null, toDisplayString(props.error?.statusCode), 1)
                    ]),
                    createVNode(_component_BaseButton, {
                      color: "primary",
                      class: "!h-12 w-48 items-center gap-2",
                      shape: "curved",
                      onClick: handleError
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, { name: "feather:arrow-left" }),
                        createTextVNode(" Take me Back ")
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "mt-6 flex items-center justify-center" }, [
                      createVNode(_component_BaseSwitchBall, {
                        modelValue: unref(showStackTrace),
                        "onUpdate:modelValue": ($event) => isRef(showStackTrace) ? showStackTrace.value = $event : null,
                        color: "danger",
                        label: `${unref(showStackTrace) ? "Hide" : "Show"} Stacktrace (dev)`
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["title", "subtitle"]),
              unref(showStackTrace) ? (openBlock(), createBlock("div", { key: 0 }, [
                withDirectives((openBlock(), createBlock(_component_BaseCard, {
                  shape: "curved",
                  class: "nui-focus nui-text-700 group relative mx-auto mt-6 max-w-3xl border-2 border-dashed p-8 hover:border-solid",
                  tabindex: "0"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "mb-3 flex items-center justify-start gap-1 opacity-30 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100" }, [
                      props.error.statusCode ? (openBlock(), createBlock(_component_BaseTag, {
                        key: 0,
                        color: "danger",
                        size: "sm"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.error.statusCode), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      props.error.url ? (openBlock(), createBlock(_component_BaseTag, {
                        key: 1,
                        color: "danger",
                        flavor: "outline",
                        size: "sm"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.error.url), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_component_BaseButtonClose, {
                        color: "muted",
                        class: "ms-auto",
                        onClick: ($event) => showStackTrace.value = false
                      }, null, 8, ["onClick"])
                    ]),
                    createVNode("div", { class: "mb-4 flex items-center gap-2" }, [
                      createVNode(_component_BaseIconBox, {
                        color: "danger",
                        shape: "full",
                        size: "md"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "ph:skull-duotone",
                            class: "h-6 w-6"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", null, [
                        createVNode("h4", { class: "text-danger-500 font-mono text-lg font-medium [overflow-wrap:anywhere]" }, toDisplayString(props.error.message), 1),
                        createVNode("p", { class: "nui-text-500 font-sans text-xs font-medium" }, " This is a demo stacktrace, you won't see it in production. ")
                      ])
                    ]),
                    props.error.stack ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mt-6 overflow-auto whitespace-pre p-2 font-mono text-sm opacity-60 transition-all duration-300 group-hover:opacity-100 group-focus:opacity-100",
                      innerHTML: props.error.stack
                    }, null, 8, ["innerHTML"])) : createCommentVNode("", true)
                  ]),
                  _: 1
                })), [
                  [_directive_focus]
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/utility-error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=utility-error-5c1b2ba7.mjs.map
