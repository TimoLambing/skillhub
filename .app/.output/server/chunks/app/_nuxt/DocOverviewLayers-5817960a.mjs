import _sfc_main$1 from './DocLayoutSection-827b2b8a.mjs';
import { j as _sfc_main$C, f as __nuxt_component_2 } from '../server.mjs';
import { _ as __nuxt_component_0 } from './BaseTreeSelect-e80fd19c.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, createCommentVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import './TairoTocAnchor-4ae1eaf7.mjs';
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
import './BaseCheckbox-45d3fdba.mjs';
import './IconCheck-b31ac5c7.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DocOverviewLayers",
  __ssrInlineRender: true,
  props: {
    tag: {},
    title: {}
  },
  setup(__props) {
    const props = __props;
    const layerTree = [
      {
        item: {
          name: ".app/",
          tooltip: "Your app root folder"
        },
        open: true,
        children: [
          {
            item: {
              name: "components/",
              tooltip: "Your app components"
            },
            open: true,
            children: [
              {
                item: {
                  name: "AppSearch.vue",
                  tooltip: "Your app search component",
                  icon: "vscode-icons:file-type-vue"
                }
              },
              {
                item: {
                  name: "BaseInput.vue",
                  tooltip: "Override @shuriken-ui/nuxt BaseInput",
                  icon: "vscode-icons:file-type-vue"
                }
              }
            ]
          },
          {
            item: {
              name: "layouts/",
              tooltip: "Your layouts"
            },
            open: true,
            children: [
              {
                item: {
                  name: "default.vue",
                  tooltip: "Define your default layout",
                  icon: "vscode-icons:file-type-vue"
                }
              }
            ]
          },
          {
            item: {
              name: "pages/",
              tooltip: "Your pages"
            },
            open: true,
            children: [
              {
                item: {
                  name: "index.vue",
                  tooltip: "Your home page",
                  icon: "vscode-icons:file-type-vue"
                }
              }
            ]
          },
          {
            item: {
              name: "app.config.ts",
              tooltip: "Your app config; depends on layers",
              icon: "vscode-icons:file-type-typescript"
            }
          },
          {
            item: {
              name: "nuxt.config.ts",
              tooltip: "Extends layers and module config",
              icon: "vscode-icons:file-type-typescript"
            }
          }
        ]
      },
      {
        item: {
          name: "layers/",
          tooltip: "List of extended layers in nuxt.config.ts"
        },
        open: true,
        children: [
          {
            item: {
              name: "tairo/",
              color: "bg-amber-500",
              tooltip: "Shared base layer"
            },
            children: [
              {
                item: {
                  name: "components/"
                },
                children: [
                  {
                    item: {
                      name: "TairoModal.vue",
                      icon: "vscode-icons:file-type-vue"
                    }
                  },
                  {
                    item: {
                      name: "TairoError.vue",
                      icon: "vscode-icons:file-type-vue"
                    }
                  },
                  {
                    item: {
                      name: "Tairo...",
                      icon: "vscode-icons:file-type-vue"
                    }
                  }
                ]
              },
              {
                item: {
                  name: "composables/"
                },
                children: [
                  {
                    item: {
                      name: "panels.ts",
                      icon: "vscode-icons:file-type-typescript"
                    }
                  },
                  {
                    item: {
                      name: "toaster.ts",
                      icon: "vscode-icons:file-type-typescript"
                    }
                  }
                ]
              },
              {
                item: {
                  name: "layouts/"
                },
                children: [
                  {
                    item: {
                      name: "empty.vue",
                      icon: "vscode-icons:file-type-vue"
                    }
                  }
                ]
              },
              {
                item: {
                  name: "app.vue",
                  tooltip: "Default app wrapper component",
                  icon: "vscode-icons:file-type-vue"
                }
              },
              {
                item: {
                  name: "app.config.ts",
                  tooltip: "Default app config for tairo",
                  icon: "vscode-icons:file-type-typescript"
                }
              },
              {
                item: {
                  name: "nuxt.schema.ts",
                  tooltip: "Default nuxt schema for tairo",
                  icon: "vscode-icons:file-type-typescript"
                }
              },
              {
                item: {
                  name: "nuxt.config.ts",
                  tooltip: "Default nuxt config for tairo",
                  icon: "vscode-icons:file-type-typescript"
                }
              }
            ]
          },
          {
            item: {
              name: "tairo-layout-sidebar/",
              color: "bg-lime-500",
              tooltip: "Layout layer with sidebar navigation"
            },
            children: [
              {
                item: {
                  name: "components/"
                },
                children: [
                  {
                    item: {
                      name: "TairoSidebarLayout.vue",
                      icon: "vscode-icons:file-type-vue"
                    }
                  },
                  {
                    item: {
                      name: "TairoSidebarNavigation.vue",
                      icon: "vscode-icons:file-type-vue"
                    }
                  },
                  {
                    item: {
                      name: "TairoSidebar...",
                      icon: "vscode-icons:file-type-vue"
                    }
                  }
                ]
              },
              {
                item: {
                  name: "composables/"
                },
                children: [
                  {
                    item: {
                      name: "sidebar.ts",
                      icon: "vscode-icons:file-type-typescript"
                    }
                  }
                ]
              },
              {
                item: {
                  name: "layouts/"
                },
                children: [
                  {
                    item: {
                      name: "sidebar.vue",
                      icon: "vscode-icons:file-type-vue"
                    }
                  }
                ]
              },
              {
                item: {
                  name: "error.vue",
                  tooltip: "Register error component using layout-sidebar",
                  icon: "vscode-icons:file-type-vue"
                }
              },
              {
                item: {
                  name: "app.config.ts",
                  tooltip: "Default config for layout-sidebar",
                  icon: "vscode-icons:file-type-typescript"
                }
              },
              {
                item: {
                  name: "nuxt.schema.ts",
                  tooltip: "Nuxt schema for layout-sidebar",
                  icon: "vscode-icons:file-type-typescript"
                }
              },
              {
                item: {
                  name: "nuxt.config.ts",
                  tooltip: "Extra nuxt config for layout-sidebar",
                  icon: "vscode-icons:file-type-typescript"
                }
              }
            ]
          },
          {
            item: {
              name: "tairo-layout-collapse/",
              color: "bg-pink-500",
              tooltip: "Layout layer with collapsable navigation"
            },
            children: [
              {
                item: {
                  name: "components/"
                },
                children: [
                  {
                    item: {
                      name: "TairCollapseLayout.vue",
                      icon: "vscode-icons:file-type-vue"
                    }
                  },
                  {
                    item: {
                      name: "TairCollapseNavigation.vue",
                      icon: "vscode-icons:file-type-vue"
                    }
                  },
                  {
                    item: {
                      name: "TairCollapse...",
                      icon: "vscode-icons:file-type-vue"
                    }
                  }
                ]
              },
              {
                item: {
                  name: "composables/"
                },
                children: [
                  {
                    item: {
                      name: "collapse.ts",
                      icon: "vscode-icons:file-type-typescript"
                    }
                  }
                ]
              },
              {
                item: {
                  name: "layouts/"
                },
                children: [
                  {
                    item: {
                      name: "collapse.vue",
                      icon: "vscode-icons:file-type-vue"
                    }
                  }
                ]
              },
              {
                item: {
                  name: "error.vue",
                  tooltip: "Register error component using layout-collapse",
                  icon: "vscode-icons:file-type-vue"
                }
              },
              {
                item: {
                  name: "app.config.ts",
                  tooltip: "Specific config for layout-collapse",
                  icon: "vscode-icons:file-type-typescript"
                }
              },
              {
                item: {
                  name: "nuxt.schema.ts",
                  tooltip: "Specific nuxt schema for layout-collapse",
                  icon: "vscode-icons:file-type-typescript"
                }
              },
              {
                item: {
                  name: "nuxt.config.ts",
                  tooltip: "Extra nuxt config for layout-collapse",
                  icon: "vscode-icons:file-type-typescript"
                }
              }
            ]
          },
          {
            item: {
              name: "@shuriken-ui/nuxt",
              color: "bg-purple-500",
              tooltip: "Open-source shuriken-ui layer"
            },
            children: [
              {
                item: {
                  name: "components/"
                },
                children: [
                  {
                    item: {
                      name: "BaseInput.vue",
                      icon: "vscode-icons:file-type-vue"
                    }
                  },
                  {
                    item: {
                      name: "BaseButton.vue",
                      icon: "vscode-icons:file-type-vue"
                    }
                  },
                  {
                    item: {
                      name: "Base...",
                      icon: "vscode-icons:file-type-vue"
                    }
                  }
                ]
              },
              {
                item: {
                  name: "composables/"
                },
                children: [
                  {
                    item: {
                      name: "file-preview.ts",
                      icon: "vscode-icons:file-type-typescript"
                    }
                  },
                  {
                    item: {
                      name: "scrollspy.ts",
                      icon: "vscode-icons:file-type-typescript"
                    }
                  }
                ]
              },
              {
                item: {
                  name: "app.config.ts",
                  tooltip: "Default config for shuriken-ui",
                  icon: "vscode-icons:file-type-typescript"
                }
              },
              {
                item: {
                  name: "nuxt.schema.ts",
                  tooltip: "Nuxt schema for shuriken-ui",
                  icon: "vscode-icons:file-type-typescript"
                }
              },
              {
                item: {
                  name: "nuxt.config.ts",
                  tooltip: "Extra nuxt config for shuriken-ui",
                  icon: "vscode-icons:file-type-typescript"
                }
              }
            ]
          }
        ]
      }
    ];
    const mergedTree = [
      {
        item: {
          name: "components/"
        },
        open: true,
        children: [
          {
            item: {
              name: "AppSearch.vue",
              tooltip: "from your app layer",
              icon: "vscode-icons:file-type-vue"
            }
          },
          {
            item: {
              name: "BaseButton.vue",
              icon: "vscode-icons:file-type-vue",
              color: "bg-purple-500",
              tooltip: "from @shuriken-ui/nuxt layer"
            }
          },
          {
            item: {
              name: "BaseInput.vue",
              tooltip: "from your app layer",
              icon: "vscode-icons:file-type-vue"
            }
          },
          {
            item: {
              name: "TairoModal.vue",
              icon: "vscode-icons:file-type-vue",
              color: "bg-amber-500",
              tooltip: "from tairo layer"
            }
          },
          {
            item: {
              name: "TairoError.vue",
              icon: "vscode-icons:file-type-vue",
              color: "bg-amber-500",
              tooltip: "from tairo layer"
            }
          },
          {
            item: {
              name: "TairoSidebarLayout.vue",
              icon: "vscode-icons:file-type-vue",
              color: "bg-lime-500",
              tooltip: "from tairo-layout-sidebar layer"
            }
          },
          {
            item: {
              name: "TairoSidebarNavigation.vue",
              icon: "vscode-icons:file-type-vue",
              color: "bg-lime-500",
              tooltip: "from tairo-layout-sidebar layer"
            }
          },
          {
            item: {
              name: "TairCollapseLayout.vue",
              icon: "vscode-icons:file-type-vue",
              color: "bg-pink-500",
              tooltip: "from tairo-layout-collapse layer"
            }
          },
          {
            item: {
              name: "TairCollapseNavigation.vue",
              icon: "vscode-icons:file-type-vue",
              color: "bg-pink-500",
              tooltip: "from tairo-layout-collapse layer"
            }
          }
        ]
      },
      {
        item: {
          name: "layouts/"
        },
        children: [
          {
            item: {
              name: "empty.vue",
              tooltip: "from tairo layer",
              icon: "vscode-icons:file-type-vue",
              color: "bg-amber-500"
            }
          },
          {
            item: {
              name: "sidebar.vue",
              tooltip: "from tairo-layout-sidebar layer",
              icon: "vscode-icons:file-type-vue",
              color: "bg-lime-500"
            }
          },
          {
            item: {
              name: "collapse.vue",
              tooltip: "from tairo-layout-collapse layer",
              icon: "vscode-icons:file-type-vue",
              color: "bg-pink-500"
            }
          },
          {
            item: {
              name: "default.vue",
              tooltip: "from your app layer",
              icon: "vscode-icons:file-type-vue"
            }
          }
        ]
      },
      {
        item: {
          name: "composables/"
        },
        children: [
          {
            item: {
              name: "panels.ts",
              tooltip: "from tairo layer",
              icon: "vscode-icons:file-type-typescript",
              color: "bg-amber-500"
            }
          },
          {
            item: {
              name: "toaster.ts",
              tooltip: "from tairo layer",
              icon: "vscode-icons:file-type-typescript",
              color: "bg-amber-500"
            }
          },
          {
            item: {
              name: "sidebar.ts",
              tooltip: "from tairo-layout-sidebar layer",
              icon: "vscode-icons:file-type-typescript",
              color: "bg-lime-500"
            }
          },
          {
            item: {
              name: "collapse.ts",
              tooltip: "from tairo-layout-collapse layer",
              icon: "vscode-icons:file-type-typescript",
              color: "bg-pink-500"
            }
          },
          {
            item: {
              name: "file-preview.ts",
              tooltip: "from @shuriken-ui/nuxt layer",
              icon: "vscode-icons:file-type-typescript",
              color: "bg-purple-500"
            }
          },
          {
            item: {
              name: "scrollspy.ts",
              tooltip: "from @shuriken-ui/nuxt layer",
              icon: "vscode-icons:file-type-typescript",
              color: "bg-purple-500"
            }
          }
        ]
      },
      {
        item: {
          name: "pages/"
        },
        open: true,
        children: [
          {
            item: {
              name: "index.vue",
              tooltip: "from your app layer",
              icon: "vscode-icons:file-type-vue"
            }
          }
        ]
      },
      {
        item: {
          name: "app.vue",
          tooltip: "from tairo layer",
          icon: "vscode-icons:file-type-vue"
        }
      },
      {
        item: {
          name: "error.vue",
          tooltip: "depends on extends order in nuxt.config.ts",
          icon: "vscode-icons:file-type-vue"
        }
      },
      {
        item: {
          name: "app.config.ts",
          tooltip: "merged from all layers",
          icon: "vscode-icons:file-type-typescript"
        }
      },
      {
        item: {
          name: "nuxt.config.ts",
          tooltip: "merged from all layers",
          icon: "vscode-icons:file-type-typescript"
        }
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DocLayoutSection = _sfc_main$1;
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseTreeSelect = __nuxt_component_0;
      const _component_Icon = __nuxt_component_2;
      _push(ssrRenderComponent(_component_DocLayoutSection, mergeProps({
        title: props.title,
        tag: props.tag
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCard, { class: "divide-muted-200 dark:divide-muted-700 grid divide-y sm:grid-cols-2 sm:divide-x sm:divide-y-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}><div class="border-muted-200 dark:border-muted-700 border-b px-8 py-6"${_scopeId2}><span${_scopeId2}>Your project ...</span></div><div class="px-8 py-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseTreeSelect, {
                    children: layerTree,
                    treeline: "",
                    icons: {
                      open: "clarity:folder-open-line",
                      closed: "clarity:folder-line",
                      item: "clarity:file-line",
                      empty: "clarity:alert-line"
                    },
                    classes: {
                      treeline: "border-muted-300 dark:border-muted-700"
                    }
                  }, {
                    "item-icon": withCtx(({ child }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-muted-400 me-1 flex h-5 w-5 items-center justify-center"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: child?.item?.icon,
                          class: "h-4 w-4"
                        }, null, _parent4, _scopeId3));
                        _push4(`</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-muted-400 me-1 flex h-5 w-5 items-center justify-center" }, [
                            createVNode(_component_Icon, {
                              name: child?.item?.icon,
                              class: "h-4 w-4"
                            }, null, 8, ["name"])
                          ])
                        ];
                      }
                    }),
                    "item-label": withCtx(({ child, toggle }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="inline-flex items-center gap-2"${_scopeId3}>`);
                        if (child?.item?.color) {
                          _push4(`<span class="${ssrRenderClass([child?.item?.color, "inline-block h-2 w-2 rounded-sm"])}"${_scopeId3}></span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`<span${ssrRenderAttr("data-nui-tooltip", child?.item?.tooltip)} data-nui-tooltip-position="right" class="${ssrRenderClass([
                          child?.children ? "cursor-pointer" : "cursor-default",
                          child?.item?.tooltip ? "cursor-help pe-2" : "cursor-default"
                        ])}"${_scopeId3}>${ssrInterpolate(child?.item?.name)}</span></span>`);
                      } else {
                        return [
                          createVNode("span", { class: "inline-flex items-center gap-2" }, [
                            child?.item?.color ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: ["inline-block h-2 w-2 rounded-sm", child?.item?.color]
                            }, null, 2)) : createCommentVNode("", true),
                            createVNode("span", {
                              "data-nui-tooltip": child?.item?.tooltip,
                              "data-nui-tooltip-position": "right",
                              class: [
                                child?.children ? "cursor-pointer" : "cursor-default",
                                child?.item?.tooltip ? "cursor-help pe-2" : "cursor-default"
                              ],
                              onClick: toggle
                            }, toDisplayString(child?.item?.name), 11, ["data-nui-tooltip", "onClick"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div><div${_scopeId2}><div class="border-muted-200 dark:border-muted-700 border-b px-8 py-6"${_scopeId2}><span${_scopeId2}>... is merged into a unique app!</span></div><div class="px-8 py-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseTreeSelect, {
                    children: mergedTree,
                    treeline: "",
                    icons: {
                      open: "clarity:folder-open-line",
                      closed: "clarity:folder-line",
                      item: "clarity:file-line",
                      empty: "clarity:alert-line"
                    },
                    classes: {
                      treeline: "border-muted-300 dark:border-muted-700"
                    }
                  }, {
                    "item-icon": withCtx(({ child }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-muted-400 me-1 flex h-5 w-5 items-center justify-center"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: child?.item?.icon,
                          class: "h-4 w-4"
                        }, null, _parent4, _scopeId3));
                        _push4(`</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-muted-400 me-1 flex h-5 w-5 items-center justify-center" }, [
                            createVNode(_component_Icon, {
                              name: child?.item?.icon,
                              class: "h-4 w-4"
                            }, null, 8, ["name"])
                          ])
                        ];
                      }
                    }),
                    "item-label": withCtx(({ child, toggle }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="inline-flex items-center gap-2"${_scopeId3}>`);
                        if (child?.item?.color) {
                          _push4(`<span class="${ssrRenderClass([child?.item?.color, "inline-block h-2 w-2 rounded-sm"])}"${_scopeId3}></span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`<span${ssrRenderAttr("data-nui-tooltip", child?.item?.tooltip)} data-nui-tooltip-position="right" class="${ssrRenderClass([
                          child?.children ? "cursor-pointer" : "cursor-default",
                          child?.item?.tooltip ? "cursor-help pe-2" : "cursor-default"
                        ])}"${_scopeId3}>${ssrInterpolate(child?.item?.name)}</span></span>`);
                      } else {
                        return [
                          createVNode("span", { class: "inline-flex items-center gap-2" }, [
                            child?.item?.color ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: ["inline-block h-2 w-2 rounded-sm", child?.item?.color]
                            }, null, 2)) : createCommentVNode("", true),
                            createVNode("span", {
                              "data-nui-tooltip": child?.item?.tooltip,
                              "data-nui-tooltip-position": "right",
                              class: [
                                child?.children ? "cursor-pointer" : "cursor-default",
                                child?.item?.tooltip ? "cursor-help pe-2" : "cursor-default"
                              ],
                              onClick: toggle
                            }, toDisplayString(child?.item?.name), 11, ["data-nui-tooltip", "onClick"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode("div", { class: "border-muted-200 dark:border-muted-700 border-b px-8 py-6" }, [
                        createVNode("span", null, "Your project ...")
                      ]),
                      createVNode("div", { class: "px-8 py-6" }, [
                        createVNode(_component_BaseTreeSelect, {
                          children: layerTree,
                          treeline: "",
                          icons: {
                            open: "clarity:folder-open-line",
                            closed: "clarity:folder-line",
                            item: "clarity:file-line",
                            empty: "clarity:alert-line"
                          },
                          classes: {
                            treeline: "border-muted-300 dark:border-muted-700"
                          }
                        }, {
                          "item-icon": withCtx(({ child }) => [
                            createVNode("span", { class: "text-muted-400 me-1 flex h-5 w-5 items-center justify-center" }, [
                              createVNode(_component_Icon, {
                                name: child?.item?.icon,
                                class: "h-4 w-4"
                              }, null, 8, ["name"])
                            ])
                          ]),
                          "item-label": withCtx(({ child, toggle }) => [
                            createVNode("span", { class: "inline-flex items-center gap-2" }, [
                              child?.item?.color ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: ["inline-block h-2 w-2 rounded-sm", child?.item?.color]
                              }, null, 2)) : createCommentVNode("", true),
                              createVNode("span", {
                                "data-nui-tooltip": child?.item?.tooltip,
                                "data-nui-tooltip-position": "right",
                                class: [
                                  child?.children ? "cursor-pointer" : "cursor-default",
                                  child?.item?.tooltip ? "cursor-help pe-2" : "cursor-default"
                                ],
                                onClick: toggle
                              }, toDisplayString(child?.item?.name), 11, ["data-nui-tooltip", "onClick"])
                            ])
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("div", { class: "border-muted-200 dark:border-muted-700 border-b px-8 py-6" }, [
                        createVNode("span", null, "... is merged into a unique app!")
                      ]),
                      createVNode("div", { class: "px-8 py-6" }, [
                        createVNode(_component_BaseTreeSelect, {
                          children: mergedTree,
                          treeline: "",
                          icons: {
                            open: "clarity:folder-open-line",
                            closed: "clarity:folder-line",
                            item: "clarity:file-line",
                            empty: "clarity:alert-line"
                          },
                          classes: {
                            treeline: "border-muted-300 dark:border-muted-700"
                          }
                        }, {
                          "item-icon": withCtx(({ child }) => [
                            createVNode("span", { class: "text-muted-400 me-1 flex h-5 w-5 items-center justify-center" }, [
                              createVNode(_component_Icon, {
                                name: child?.item?.icon,
                                class: "h-4 w-4"
                              }, null, 8, ["name"])
                            ])
                          ]),
                          "item-label": withCtx(({ child, toggle }) => [
                            createVNode("span", { class: "inline-flex items-center gap-2" }, [
                              child?.item?.color ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: ["inline-block h-2 w-2 rounded-sm", child?.item?.color]
                              }, null, 2)) : createCommentVNode("", true),
                              createVNode("span", {
                                "data-nui-tooltip": child?.item?.tooltip,
                                "data-nui-tooltip-position": "right",
                                class: [
                                  child?.children ? "cursor-pointer" : "cursor-default",
                                  child?.item?.tooltip ? "cursor-help pe-2" : "cursor-default"
                                ],
                                onClick: toggle
                              }, toDisplayString(child?.item?.name), 11, ["data-nui-tooltip", "onClick"])
                            ])
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseCard, { class: "divide-muted-200 dark:divide-muted-700 grid divide-y sm:grid-cols-2 sm:divide-x sm:divide-y-0" }, {
                default: withCtx(() => [
                  createVNode("div", null, [
                    createVNode("div", { class: "border-muted-200 dark:border-muted-700 border-b px-8 py-6" }, [
                      createVNode("span", null, "Your project ...")
                    ]),
                    createVNode("div", { class: "px-8 py-6" }, [
                      createVNode(_component_BaseTreeSelect, {
                        children: layerTree,
                        treeline: "",
                        icons: {
                          open: "clarity:folder-open-line",
                          closed: "clarity:folder-line",
                          item: "clarity:file-line",
                          empty: "clarity:alert-line"
                        },
                        classes: {
                          treeline: "border-muted-300 dark:border-muted-700"
                        }
                      }, {
                        "item-icon": withCtx(({ child }) => [
                          createVNode("span", { class: "text-muted-400 me-1 flex h-5 w-5 items-center justify-center" }, [
                            createVNode(_component_Icon, {
                              name: child?.item?.icon,
                              class: "h-4 w-4"
                            }, null, 8, ["name"])
                          ])
                        ]),
                        "item-label": withCtx(({ child, toggle }) => [
                          createVNode("span", { class: "inline-flex items-center gap-2" }, [
                            child?.item?.color ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: ["inline-block h-2 w-2 rounded-sm", child?.item?.color]
                            }, null, 2)) : createCommentVNode("", true),
                            createVNode("span", {
                              "data-nui-tooltip": child?.item?.tooltip,
                              "data-nui-tooltip-position": "right",
                              class: [
                                child?.children ? "cursor-pointer" : "cursor-default",
                                child?.item?.tooltip ? "cursor-help pe-2" : "cursor-default"
                              ],
                              onClick: toggle
                            }, toDisplayString(child?.item?.name), 11, ["data-nui-tooltip", "onClick"])
                          ])
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("div", { class: "border-muted-200 dark:border-muted-700 border-b px-8 py-6" }, [
                      createVNode("span", null, "... is merged into a unique app!")
                    ]),
                    createVNode("div", { class: "px-8 py-6" }, [
                      createVNode(_component_BaseTreeSelect, {
                        children: mergedTree,
                        treeline: "",
                        icons: {
                          open: "clarity:folder-open-line",
                          closed: "clarity:folder-line",
                          item: "clarity:file-line",
                          empty: "clarity:alert-line"
                        },
                        classes: {
                          treeline: "border-muted-300 dark:border-muted-700"
                        }
                      }, {
                        "item-icon": withCtx(({ child }) => [
                          createVNode("span", { class: "text-muted-400 me-1 flex h-5 w-5 items-center justify-center" }, [
                            createVNode(_component_Icon, {
                              name: child?.item?.icon,
                              class: "h-4 w-4"
                            }, null, 8, ["name"])
                          ])
                        ]),
                        "item-label": withCtx(({ child, toggle }) => [
                          createVNode("span", { class: "inline-flex items-center gap-2" }, [
                            child?.item?.color ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: ["inline-block h-2 w-2 rounded-sm", child?.item?.color]
                            }, null, 2)) : createCommentVNode("", true),
                            createVNode("span", {
                              "data-nui-tooltip": child?.item?.tooltip,
                              "data-nui-tooltip-position": "right",
                              class: [
                                child?.children ? "cursor-pointer" : "cursor-default",
                                child?.item?.tooltip ? "cursor-help pe-2" : "cursor-default"
                              ],
                              onClick: toggle
                            }, toDisplayString(child?.item?.name), 11, ["data-nui-tooltip", "onClick"])
                          ])
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/components/content/DocOverviewLayers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=DocOverviewLayers-5817960a.mjs.map
