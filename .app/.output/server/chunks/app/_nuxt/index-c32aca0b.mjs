import { _ as _sfc_main$2 } from './BaseBreadcrumb-54208987.mjs';
import { J as useRoute, u as useRouter, K as useAsyncData, L as queryContent, p as useState, M as useMetaKey, f as __nuxt_component_2, d as _sfc_main$x, I as toRef, e as __nuxt_component_0$5 } from '../server.mjs';
import _sfc_main$3 from './ContentRenderer-210361e4.mjs';
import _sfc_main$4 from './DocComponentDemo-329baefe.mjs';
import { useSSRContext, defineComponent, computed, withAsyncContext, watchEffect, unref, withCtx, createTextVNode, createVNode, ref, mergeProps, toDisplayString, shallowRef, watch } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useContentHead } from './head-abbbca04.mjs';
import './BaseDropdownItem-864908ca.mjs';
import '@headlessui/vue';
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
import '@vue/shared';
import 'chroma-js';
import 'tailwindcss/colors.js';
import './ContentRendererMarkdown-db7fac80.mjs';
import 'property-information';
import './TairoTocAnchor-4ae1eaf7.mjs';
import './BaseCheckbox-45d3fdba.mjs';
import './IconCheck-b31ac5c7.mjs';
import './AddonMarkdownRemark-e2bad1bc.mjs';
import './BaseProse-1777d29c.mjs';
import './composables-f7cb2fae.mjs';
import 'rehype-sanitize';
import 'rehype-stringify';
import 'rehype-shikiji';
import './ssrSlot-c1fbcf0b.mjs';
import './MDCSlot-9d8a19f8.mjs';

const useNinjaScrollspy = (_options, _selectors) => {
  toRef(_options);
  toRef(_selectors);
  const observer = shallowRef();
  const intersectingIds = shallowRef([]);
  const activeIds = shallowRef([]);
  useRoute();
  const updateElements = (elements) => {
    observer.value?.disconnect();
    for (const element of elements) {
      observer.value?.observe(element);
    }
  };
  watch(intersectingIds, (value, oldValue) => {
    activeIds.value = value.length === 0 ? oldValue : value;
  });
  return {
    visibleIds: intersectingIds,
    activeIds,
    updateElements
  };
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TairoToc",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const activeAnchor = ref("");
    const toc = ref([]);
    const ids = computed(() => toc.value.map(({ id }) => `#${id}`));
    const { activeIds } = useNinjaScrollspy(
      {
        rootMargin: "0px 0px -90% 0px"
      },
      ids
    );
    function getTocItemClass(item) {
      const classes = [];
      if (item.level > 2) {
        classes.push("ms-3 text-xs");
      }
      if (activeAnchor.value === item.id) {
        classes.push("border-primary-500 text-primary-500");
      } else if (activeIds.value.includes(item.id)) {
        classes.push(
          "border-primary-400 dark:border-primary-600 text-muted-500 dark:text-muted-400 hover:text-muted-400"
        );
      } else {
        classes.push(
          "border-muted-200 dark:border-muted-800 text-muted-500 dark:text-muted-400 hover:text-muted-400"
        );
      }
      return classes;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed flex flex-col justify-between pb-20 pe-1 ps-20 pt-2" }, _attrs))}>`);
      if (unref(toc).length) {
        _push(`<div class="w-52"><div class="font-heading text-muted-800 mb-6 text-xs font-semibold uppercase leading-tight dark:text-white"><span>On this page</span></div><nav class="nui-slimscroll-opaque relative max-h-[calc(100vh_-_220px)] overflow-y-auto overflow-x-hidden pb-10 font-sans text-[0.8rem] font-medium"><ul><!--[-->`);
        ssrRenderList(unref(toc), (item) => {
          _push(`<li>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `#${item.id}`,
            class: ["block border-e-2 py-1", getTocItemClass(item)]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul><div class="dark:from-muted-900 from-muted-100 pointer-events-none fixed bottom-10 z-10 h-10 w-[212px] bg-gradient-to-t to-transparent"></div></nav></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo/components/TairoToc.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const router = useRouter();
    const contentPath = computed(() => {
      const slug = route.params?.slug;
      if (!slug || slug.length === 0) {
        return "/documentation";
      }
      return `/documentation/${slug.join("/")}`;
    });
    const [{ data, pending }, { data: tree }] = ([__temp, __restore] = withAsyncContext(() => Promise.all([
      useAsyncData(
        "page-data",
        () => queryContent().where({
          _path: contentPath.value
        }).findOne(),
        {
          watch: [contentPath]
        }
      ),
      useAsyncData(
        "page-tree",
        () => {
          const path = contentPath.value.split("/");
          path.shift();
          path.pop();
          const paths = [];
          for (let i = 0; i < path.length; i++) {
            const parentPath = `/${path.slice(0, i + 1).join("/")}`;
            paths.push(parentPath);
            paths.push(`${parentPath}/_dir`);
          }
          paths.push(`${contentPath.value}/_dir`);
          return queryContent().where({
            _path: { $in: paths }
          }).without(["body"]).find();
        },
        {
          watch: [contentPath]
        }
      )
    ])), __temp = await __temp, __restore(), __temp);
    watchEffect(() => {
      const title = data.value?.title;
      if (pending.value)
        return;
      route.meta.title = title || "Page not found";
    });
    useContentHead(data);
    const breadcrumb = computed(() => {
      const items = [];
      const indexRoute = router.resolve("/");
      if (indexRoute.meta.breadcrumb === false)
        ;
      else if (indexRoute.meta.breadcrumb) {
        const breadcrumbItem = indexRoute.meta.breadcrumb;
        items.push({
          to: indexRoute.path,
          ...breadcrumbItem
        });
      } else if (indexRoute.meta.title) {
        items.push({
          label: indexRoute.meta.title,
          to: indexRoute.path
        });
      }
      for (const item of tree.value || []) {
        if (items.find((i) => i.to === item._path)) {
          continue;
        }
        items.push({
          label: item.title,
          to: item._path.endsWith("_dir") ? item._path.replace("/_dir", "") : item._path
        });
      }
      if (data.value?.title) {
        items.push({
          label: data.value?.title
        });
      }
      return items;
    });
    useState("search-open", () => false);
    const metaKey = useMetaKey();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseBreadcrumb = _sfc_main$2;
      const _component_Icon = __nuxt_component_2;
      const _component_ContentRenderer = _sfc_main$3;
      const _component_DocComponentDemo = _sfc_main$4;
      const _component_BaseButton = _sfc_main$x;
      const _component_TairoToc = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_BaseBreadcrumb, { items: unref(breadcrumb) }, null, _parent));
      _push(`<button type="button" class="dark:bg-muted-800 border-muted-200 dark:border-muted-800 text-muted-400 dark:text-muted-500 hover:text-primary-500 dark:hover:text-primary-500 group mb-6 flex items-center gap-2 rounded-xl border bg-white py-1 pe-1 ps-3">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:search",
        class: "h-4 w-4 transition-colors duration-300"
      }, null, _parent));
      _push(`<span class="dark:bg-muted-800 border-muted-200 dark:border-muted-700 group-hover:text-muted-600 dark:group-hover:text-muted-100 rounded-lg border bg-white px-2 py-0.5 shadow transition-colors duration-300"><kbd class="font-sans text-sm tracking-wide">${ssrInterpolate(unref(metaKey))} + k</kbd></span></button></div><div class="flex"><div class="w-full lg:w-3/4">`);
      _push(ssrRenderComponent(_component_ContentRenderer, {
        value: unref(data)
      }, {
        empty: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DocComponentDemo, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}><p${_scopeId2}>The page you are looking for does not exist.</p><div class="flex flex-row gap-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseButton, { to: "/documentation" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Back to Hub`);
                      } else {
                        return [
                          createTextVNode("Back to Hub")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseButton, {
                    color: "none",
                    to: "/"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Back to Home`);
                      } else {
                        return [
                          createTextVNode("Back to Home")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode("p", null, "The page you are looking for does not exist."),
                      createVNode("div", { class: "flex flex-row gap-6" }, [
                        createVNode(_component_BaseButton, { to: "/documentation" }, {
                          default: withCtx(() => [
                            createTextVNode("Back to Hub")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseButton, {
                          color: "none",
                          to: "/"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Back to Home")
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
              createVNode(_component_DocComponentDemo, null, {
                default: withCtx(() => [
                  createVNode("div", null, [
                    createVNode("p", null, "The page you are looking for does not exist."),
                    createVNode("div", { class: "flex flex-row gap-6" }, [
                      createVNode(_component_BaseButton, { to: "/documentation" }, {
                        default: withCtx(() => [
                          createTextVNode("Back to Hub")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseButton, {
                        color: "none",
                        to: "/"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Back to Home")
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
      _push(`</div>`);
      if (!unref(pending) && unref(data) && unref(data).toc !== false) {
        _push(`<div class="relative hidden lg:me-6 lg:block lg:w-1/4 xl:me-0">`);
        _push(ssrRenderComponent(_component_TairoToc, {
          key: `toc-${unref(data)._path}`
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/pages/documentation/[...slug]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-c32aca0b.mjs.map
