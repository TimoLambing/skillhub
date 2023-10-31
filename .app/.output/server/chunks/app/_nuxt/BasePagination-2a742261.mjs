import { m as useAppConfig, J as useRoute, R as _sfc_main$t, e as __nuxt_component_0$5, f as __nuxt_component_2 } from '../server.mjs';
import { defineComponent, computed, mergeProps, withCtx, createTextVNode, unref, toDisplayString, renderSlot, createVNode, withKeys, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BasePagination",
  __ssrInlineRender: true,
  props: {
    itemPerPage: {},
    totalItems: {},
    currentPage: { default: 1 },
    maxLinksDisplayed: { default: 3 },
    noRouter: { type: Boolean },
    routerQueryKey: { default: "page" },
    shape: { default: void 0 },
    previousIcon: { default: "lucide:chevron-left" },
    nextIcon: { default: "lucide:chevron-right" },
    ellipsis: { default: "\u2026" }
  },
  emits: ["update:currentPage"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const appConfig = useAppConfig();
    computed(
      () => props.shape ?? appConfig.nui.defaultShapes?.pagination
    );
    const shapeStyle = {
      straight: "",
      rounded: "nui-pagination-rounded",
      smooth: "nui-pagination-smooth",
      curved: "nui-pagination-curved",
      full: "nui-pagination-full"
    };
    const route = useRoute();
    const lastPage = computed(
      () => Math.ceil(props.totalItems / props.itemPerPage) || 1
    );
    const totalPageDisplayed = computed(
      () => lastPage.value > props.maxLinksDisplayed + 2 ? props.maxLinksDisplayed + 2 : lastPage.value
    );
    const pages = computed(() => {
      const _pages = [];
      let firstButton = props.currentPage - Math.floor(totalPageDisplayed.value / 2);
      let lastButton = firstButton + (totalPageDisplayed.value - Math.ceil(totalPageDisplayed.value % 2));
      if (firstButton < 1) {
        firstButton = 1;
        lastButton = firstButton + (totalPageDisplayed.value - 1);
      }
      if (lastButton > lastPage.value) {
        lastButton = lastPage.value;
        firstButton = lastButton - (totalPageDisplayed.value - 1);
      }
      for (let page = firstButton; page <= lastButton; page += 1) {
        if (page === firstButton || page === lastButton) {
          continue;
        }
        _pages.push(page);
      }
      return _pages;
    });
    const showLastLink = computed(() => lastPage.value > 1);
    const paginatedLink = (page = 1) => {
      if (props.noRouter) {
        return {};
      }
      const _page = Math.max(1, Math.min(page, lastPage.value));
      const query = {
        ...route.query
      };
      if (props.routerQueryKey) {
        query[props.routerQueryKey] = _page <= 1 ? void 0 : _page;
      }
      return {
        name: route.name,
        params: route.params,
        query
      };
    };
    const handleLinkClick = (e, page = 1) => {
      const _page = Math.max(1, Math.min(page, lastPage.value));
      emits("update:currentPage", _page);
      if (props.noRouter) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseFocusLoop = _sfc_main$t;
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-pagination", [props.shape && shapeStyle[props.shape]]]
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseFocusLoop, {
        as: "ul",
        class: ["nui-pagination-list", props.shape && shapeStyle[props.shape]]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "before-pagination", {}, null, _push2, _parent2, _scopeId);
            _push2(`<li${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: paginatedLink(1),
              tabindex: "0",
              class: ["nui-pagination-link", [
                _ctx.currentPage === 1 && "nui-active",
                props.shape && shapeStyle[props.shape]
              ]],
              onKeydown: (e) => e.target.click(),
              onClick: (e) => handleLinkClick(e, 1)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 1 `);
                } else {
                  return [
                    createTextVNode(" 1 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li>`);
            if (unref(showLastLink) && unref(pages).length > 0 && unref(pages)[0] > 2) {
              _push2(`<li${_scopeId}><span class="${ssrRenderClass([[props.shape && shapeStyle[props.shape]], "nui-pagination-ellipsis"])}"${_scopeId}>${ssrInterpolate(props.ellipsis)}</span></li>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(unref(pages), (page) => {
              _push2(`<li${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: paginatedLink(page),
                tabindex: "0",
                "aria-current": _ctx.currentPage === page ? "page" : void 0,
                class: ["nui-pagination-link", [
                  _ctx.currentPage === page && "nui-active",
                  props.shape && shapeStyle[props.shape]
                ]],
                onKeydown: (e) => e.target.click(),
                onClick: (e) => handleLinkClick(e, page)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(page)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(page), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</li>`);
            });
            _push2(`<!--]-->`);
            if (unref(showLastLink) && unref(pages)[unref(pages).length - 1] < unref(lastPage) - 1) {
              _push2(`<li${_scopeId}><span class="${ssrRenderClass([[props.shape && shapeStyle[props.shape]], "nui-pagination-ellipsis"])}"${_scopeId}>${ssrInterpolate(props.ellipsis)}</span></li>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(showLastLink)) {
              _push2(`<li${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: paginatedLink(unref(lastPage)),
                tabindex: "0",
                class: ["nui-pagination-link", [
                  _ctx.currentPage === unref(lastPage) && "nui-active",
                  props.shape && shapeStyle[props.shape]
                ]],
                onKeydown: (e) => e.target.click(),
                onClick: (e) => handleLinkClick(e, unref(lastPage))
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(lastPage))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(lastPage)), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li>`);
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "after-pagination", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "before-pagination"),
              createVNode("li", null, [
                createVNode(_component_NuxtLink, {
                  to: paginatedLink(1),
                  tabindex: "0",
                  class: ["nui-pagination-link", [
                    _ctx.currentPage === 1 && "nui-active",
                    props.shape && shapeStyle[props.shape]
                  ]],
                  onKeydown: withKeys((e) => e.target.click(), ["space"]),
                  onClick: (e) => handleLinkClick(e, 1)
                }, {
                  default: withCtx(() => [
                    createTextVNode(" 1 ")
                  ]),
                  _: 1
                }, 8, ["to", "class", "onKeydown", "onClick"])
              ]),
              unref(showLastLink) && unref(pages).length > 0 && unref(pages)[0] > 2 ? (openBlock(), createBlock("li", { key: 0 }, [
                createVNode("span", {
                  class: ["nui-pagination-ellipsis", [props.shape && shapeStyle[props.shape]]]
                }, toDisplayString(props.ellipsis), 3)
              ])) : createCommentVNode("", true),
              (openBlock(true), createBlock(Fragment, null, renderList(unref(pages), (page) => {
                return openBlock(), createBlock("li", { key: page }, [
                  createVNode(_component_NuxtLink, {
                    to: paginatedLink(page),
                    tabindex: "0",
                    "aria-current": _ctx.currentPage === page ? "page" : void 0,
                    class: ["nui-pagination-link", [
                      _ctx.currentPage === page && "nui-active",
                      props.shape && shapeStyle[props.shape]
                    ]],
                    onKeydown: withKeys((e) => e.target.click(), ["space"]),
                    onClick: (e) => handleLinkClick(e, page)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(page), 1)
                    ]),
                    _: 2
                  }, 1032, ["to", "aria-current", "class", "onKeydown", "onClick"])
                ]);
              }), 128)),
              unref(showLastLink) && unref(pages)[unref(pages).length - 1] < unref(lastPage) - 1 ? (openBlock(), createBlock("li", { key: 1 }, [
                createVNode("span", {
                  class: ["nui-pagination-ellipsis", [props.shape && shapeStyle[props.shape]]]
                }, toDisplayString(props.ellipsis), 3)
              ])) : createCommentVNode("", true),
              unref(showLastLink) ? (openBlock(), createBlock("li", { key: 2 }, [
                createVNode(_component_NuxtLink, {
                  to: paginatedLink(unref(lastPage)),
                  tabindex: "0",
                  class: ["nui-pagination-link", [
                    _ctx.currentPage === unref(lastPage) && "nui-active",
                    props.shape && shapeStyle[props.shape]
                  ]],
                  onKeydown: withKeys((e) => e.target.click(), ["space"]),
                  onClick: (e) => handleLinkClick(e, unref(lastPage))
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(lastPage)), 1)
                  ]),
                  _: 1
                }, 8, ["to", "class", "onKeydown", "onClick"])
              ])) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "after-pagination")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(_component_BaseFocusLoop, {
        class: ["nui-pagination-buttons", props.shape && shapeStyle[props.shape]]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "before-navigation", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: paginatedLink(_ctx.currentPage - 1),
              tabindex: "0",
              class: "nui-pagination-button",
              onKeydown: (e) => e.target.click(),
              onClick: (e) => handleLinkClick(e, _ctx.currentPage - 1)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: _ctx.previousIcon,
                    class: "pagination-button-icon"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: _ctx.previousIcon,
                      class: "pagination-button-icon"
                    }, null, 8, ["name"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: paginatedLink(_ctx.currentPage + 1),
              tabindex: "0",
              class: "nui-pagination-button",
              onKeydown: (e) => e.target.click(),
              onClick: (e) => handleLinkClick(e, _ctx.currentPage + 1)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: _ctx.nextIcon,
                    class: "pagination-button-icon"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: _ctx.nextIcon,
                      class: "pagination-button-icon"
                    }, null, 8, ["name"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            ssrRenderSlot(_ctx.$slots, "after-navigation", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "before-navigation"),
              createVNode(_component_NuxtLink, {
                to: paginatedLink(_ctx.currentPage - 1),
                tabindex: "0",
                class: "nui-pagination-button",
                onKeydown: withKeys((e) => e.target.click(), ["space"]),
                onClick: (e) => handleLinkClick(e, _ctx.currentPage - 1)
              }, {
                default: withCtx(() => [
                  createVNode(_component_Icon, {
                    name: _ctx.previousIcon,
                    class: "pagination-button-icon"
                  }, null, 8, ["name"])
                ]),
                _: 1
              }, 8, ["to", "onKeydown", "onClick"]),
              createVNode(_component_NuxtLink, {
                to: paginatedLink(_ctx.currentPage + 1),
                tabindex: "0",
                class: "nui-pagination-button",
                onKeydown: withKeys((e) => e.target.click(), ["space"]),
                onClick: (e) => handleLinkClick(e, _ctx.currentPage + 1)
              }, {
                default: withCtx(() => [
                  createVNode(_component_Icon, {
                    name: _ctx.nextIcon,
                    class: "pagination-button-icon"
                  }, null, 8, ["name"])
                ]),
                _: 1
              }, 8, ["to", "onKeydown", "onClick"]),
              renderSlot(_ctx.$slots, "after-navigation")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/base/BasePagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=BasePagination-2a742261.mjs.map
