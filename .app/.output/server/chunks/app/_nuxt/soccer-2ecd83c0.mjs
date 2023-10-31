import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { j as _sfc_main$C, _ as _sfc_main$p, b as _sfc_main$o, f as __nuxt_component_2, d as _sfc_main$x } from '../server.mjs';
import { _ as _sfc_main$2 } from './BaseTag-734af285.mjs';
import { _ as _sfc_main$3 } from './BaseButtonIcon-6150946c.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { c as capitalize } from './format-strings-4e27d502.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DemoLeagueListCompact",
  __ssrInlineRender: true,
  setup(__props) {
    const leagues = [
      {
        id: 0,
        name: "Ligue 1",
        location: "France",
        logo: "/img/icons/soccer/leagues/ligue-1.svg",
        matches: 5
      },
      {
        id: 1,
        name: "La Liga",
        location: "Spain",
        logo: "/img/icons/soccer/leagues/laliga.svg",
        matches: 3
      },
      {
        id: 2,
        name: "Liga",
        location: "Portugal",
        logo: "/img/icons/soccer/leagues/liga.svg",
        matches: 7
      },
      {
        id: 3,
        name: "Bundesliga",
        location: "Germany",
        logo: "/img/icons/soccer/leagues/bundesliga.svg",
        matches: 5
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseButtonIcon = _sfc_main$3;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-2 space-y-5" }, _attrs))}><!--[-->`);
      ssrRenderList(leagues, (league) => {
        _push(`<div class="flex items-center gap-3"><img${ssrRenderAttr("src", league.logo)}${ssrRenderAttr("alt", league.name)} class="h-10 w-10 shrink-0"><div>`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h4",
          size: "sm",
          weight: "light",
          lead: "tight",
          class: "text-muted-800 dark:text-white"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(league.name)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(league.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-muted-400"${_scopeId}>${ssrInterpolate(league.location)}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-muted-400" }, toDisplayString(league.location), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="ms-auto flex items-center gap-1"><span class="text-muted-400 font-sans text-xs">${ssrInterpolate(league.matches)} matches </span>`);
        _push(ssrRenderComponent(_component_BaseButtonIcon, {
          shape: "curved",
          muted: "",
          class: "scale-75"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-right",
                class: "h-4 w-4"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "lucide:arrow-right",
                  class: "h-4 w-4"
                })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoLeagueListCompact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_0 = "" + publicAssetsURL("img/icons/soccer/teams/barcelona.svg");
const _imports_1 = "" + publicAssetsURL("img/icons/soccer/teams/psg.svg");
const _imports_2 = "" + publicAssetsURL("img/illustrations/dashboards/soccer/soccer-player.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "soccer",
  __ssrInlineRender: true,
  setup(__props) {
    const matches = [
      {
        id: 1,
        status: "live",
        time: "11:30",
        stadium: "Camp Nou",
        match: {
          home: {
            name: "Barcelona",
            logo: "/img/icons/soccer/teams/barcelona.svg",
            score: 4
          },
          away: {
            name: "PSG",
            logo: "/img/icons/soccer/teams/psg.svg",
            score: 0
          }
        }
      },
      {
        id: 2,
        status: "scheduled",
        time: "14:30",
        stadium: "Bernabeu",
        match: {
          home: {
            name: "Real Madrid",
            logo: "/img/icons/soccer/teams/madrid.svg",
            score: 1
          },
          away: {
            name: "Liverpool",
            logo: "/img/icons/soccer/teams/liverpool.svg",
            score: 0
          }
        }
      },
      {
        id: 3,
        status: "scheduled",
        time: "16:30",
        stadium: "Arsenal",
        match: {
          home: {
            name: "Arsenal",
            logo: "/img/icons/soccer/teams/arsenal.svg",
            score: void 0
          },
          away: {
            name: "Chelsea",
            logo: "/img/icons/soccer/teams/chelsea.svg",
            score: void 0
          }
        }
      },
      {
        id: 4,
        status: "scheduled",
        time: "18:30",
        stadium: "Goodison Park",
        match: {
          home: {
            name: "Everton",
            logo: "/img/icons/soccer/teams/everton.svg",
            score: void 0
          },
          away: {
            name: "Liverpool",
            logo: "/img/icons/soccer/teams/liverpool.svg",
            score: void 0
          }
        }
      },
      {
        id: 5,
        status: "scheduled",
        time: "20:30",
        stadium: "Jos\xE9 Zorrilla",
        match: {
          home: {
            name: "Valladolid",
            logo: "/img/icons/soccer/teams/valladolid.svg",
            score: void 0
          },
          away: {
            name: "Zagreb",
            logo: "/img/icons/soccer/teams/zagreb.svg",
            score: void 0
          }
        }
      },
      {
        id: 6,
        status: "scheduled",
        time: "22:30",
        stadium: "Parc des Princes",
        match: {
          home: {
            name: "PSG",
            logo: "/img/icons/soccer/teams/psg.svg",
            score: void 0
          },
          away: {
            name: "Chelsea",
            logo: "/img/icons/soccer/teams/chelsea.svg",
            score: void 0
          }
        }
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseTag = _sfc_main$2;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseButton = _sfc_main$x;
      const _component_DemoLeagueListCompact = _sfc_main$1;
      const _component_BaseButtonIcon = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative mt-12" }, _attrs))}><div class="grid grid-cols-12 gap-6"><div class="ltablet:col-span-4 col-span-12 lg:col-span-4"><div class="ptablet:flex-row flex flex-col gap-6">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "p-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-6 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "lg",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>UEFA Champions League</span>`);
                } else {
                  return [
                    createVNode("span", null, "UEFA Champions League")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mb-6 flex items-center justify-between"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "light",
              lead: "tight",
              class: "text-muted-800 mb-1 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Group C</span>`);
                } else {
                  return [
                    createVNode("span", null, "Group C")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}>Match 3 of 6</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, "Match 3 of 6")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseTag, {
              shape: "full",
              color: "danger",
              class: "inline-flex items-center justify-center gap-1",
              size: "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:video",
                    class: "h-3 w-3"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>Live now</span>`);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:video",
                      class: "h-3 w-3"
                    }),
                    createVNode("span", null, "Live now")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="mb-6 flex items-center justify-between"${_scopeId}><div class="flex flex-col text-center"${_scopeId}><img class="mx-auto h-12 w-12"${ssrRenderAttr("src", _imports_0)} alt="Team logo"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "light",
              lead: "tight",
              class: "text-muted-500 dark:text-muted-400 mt-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Barcelona</span>`);
                } else {
                  return [
                    createVNode("span", null, "Barcelona")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="text-muted-800 dark:text-muted-100 flex items-center justify-center gap-2 text-center font-sans"${_scopeId}><span class="text-5xl font-bold"${_scopeId}>4</span><span class="text-4xl font-bold"${_scopeId}>:</span><span class="text-5xl font-bold"${_scopeId}>0</span></div><div class="flex flex-col text-center"${_scopeId}><img class="mx-auto h-12 w-12"${ssrRenderAttr("src", _imports_1)} alt="Team logo"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "light",
              lead: "tight",
              class: "text-muted-500 dark:text-muted-400 mt-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>PSG</span>`);
                } else {
                  return [
                    createVNode("span", null, "PSG")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "primary",
              shape: "curved",
              class: "!h-12 w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Watch Now</span>`);
                } else {
                  return [
                    createVNode("span", null, "Watch Now")
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
                  size: "lg",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "UEFA Champions League")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "mb-6 flex items-center justify-between" }, [
                createVNode("div", null, [
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "light",
                    lead: "tight",
                    class: "text-muted-800 mb-1 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Group C")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseParagraph, { size: "xs" }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-muted-400" }, "Match 3 of 6")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", null, [
                  createVNode(_component_BaseTag, {
                    shape: "full",
                    color: "danger",
                    class: "inline-flex items-center justify-center gap-1",
                    size: "sm"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:video",
                        class: "h-3 w-3"
                      }),
                      createVNode("span", null, "Live now")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "mb-6 flex items-center justify-between" }, [
                createVNode("div", { class: "flex flex-col text-center" }, [
                  createVNode("img", {
                    class: "mx-auto h-12 w-12",
                    src: _imports_0,
                    alt: "Team logo"
                  }),
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "light",
                    lead: "tight",
                    class: "text-muted-500 dark:text-muted-400 mt-2"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Barcelona")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "text-muted-800 dark:text-muted-100 flex items-center justify-center gap-2 text-center font-sans" }, [
                  createVNode("span", { class: "text-5xl font-bold" }, "4"),
                  createVNode("span", { class: "text-4xl font-bold" }, ":"),
                  createVNode("span", { class: "text-5xl font-bold" }, "0")
                ]),
                createVNode("div", { class: "flex flex-col text-center" }, [
                  createVNode("img", {
                    class: "mx-auto h-12 w-12",
                    src: _imports_1,
                    alt: "Team logo"
                  }),
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "light",
                    lead: "tight",
                    class: "text-muted-500 dark:text-muted-400 mt-2"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "PSG")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", null, [
                createVNode(_component_BaseButton, {
                  color: "primary",
                  shape: "curved",
                  class: "!h-12 w-full"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Watch Now")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "p-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-6 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "lg",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Available Leagues</span>`);
                } else {
                  return [
                    createVNode("span", null, "Available Leagues")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_DemoLeagueListCompact, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-6 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "lg",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Available Leagues")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_DemoLeagueListCompact)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="ltablet:col-span-8 col-span-12 lg:col-span-8"><div class="flex flex-col gap-6"><div class="col-span-12"><div class="bg-primary-800 flex flex-col items-center rounded-2xl sm:flex-row"><div class="mt-6 grow pe-6 ps-6 sm:mt-0 sm:pe-0 sm:ps-10"><div class="pb-4 text-center sm:pb-0 sm:text-left">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        tag: "h1",
        class: "text-white opacity-90"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Win awesome prizes in our contest</span>`);
          } else {
            return [
              createVNode("span", null, "Win awesome prizes in our contest")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "sm",
        class: "text-white opacity-70"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}> Predict who will win and how a match will end and get a chance to win incredible cash prizes. </span>`);
          } else {
            return [
              createVNode("span", null, " Predict who will win and how a match will end and get a chance to win incredible cash prizes. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-2">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        size: "sm",
        color: "light",
        flavor: "outline",
        class: "w-full sm:w-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Learn More</span>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:arrow-right",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", null, "Learn More"),
              createVNode(_component_Icon, {
                name: "lucide:arrow-right",
                class: "h-4 w-4"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="relative h-[280px] w-[320px] shrink-0 sm:h-[225px]"><img class="pointer-events-none absolute bottom-0 end-6 sm:-end-10"${ssrRenderAttr("src", _imports_2)} alt="Soccer Player"></div></div></div>`);
      _push(ssrRenderComponent(_component_BaseCard, {
        shape: "curved",
        class: "p-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-6 flex gap-4 font-sans"${_scopeId}><button class="border-primary-500 text-muted-800 dark:text-muted-100 border-b-2 pb-4"${_scopeId}> All </button><button class="text-muted-400 dark:text-muted-500 border-b-2 border-transparent pb-4"${_scopeId}> Live </button><button class="text-muted-400 dark:text-muted-500 border-b-2 border-transparent pb-4"${_scopeId}> Finished </button><button class="text-muted-400 dark:text-muted-500 border-b-2 border-transparent pb-4"${_scopeId}> Scheduled </button></div><div class="overflow-x-auto"${_scopeId}><div class="inline-block min-w-full align-middle"${_scopeId}><div class="overflow-hidden"${_scopeId}><table class="min-w-full table-fixed divide-y divide-slate-200 text-left dark:divide-slate-700"${_scopeId}><thead${_scopeId}><th class="py-3 font-sans text-xs uppercase"${_scopeId}>Time</th><th class="xs:px-8 py-3 text-center font-sans text-xs uppercase"${_scopeId}> Match </th><th class="xs:px-4 py-3 font-sans text-xs uppercase"${_scopeId}> Stadium </th><th class="xs:px-4 py-3 font-sans text-xs uppercase"${_scopeId}> Details </th></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(matches, (match) => {
              _push2(`<tr${_scopeId}><td class="py-4 align-middle"${_scopeId}><div class="text-muted-500 dark:text-muted-400 flex items-center gap-2 font-sans text-sm"${ssrRenderAttr("data-nui-tooltip", ("capitalize" in _ctx ? _ctx.capitalize : unref(capitalize))(match.status))}${_scopeId}><div class="${ssrRenderClass([
                match.status === "live" ? "bg-rose-500" : "bg-muted-300 dark:bg-muted-600",
                "h-2 w-2 rounded-full"
              ])}"${_scopeId}></div><span${_scopeId}>${ssrInterpolate(match.time)}</span></div></td><td class="xs:px-8 py-4"${_scopeId}><div class="flex items-center justify-center gap-4"${_scopeId}><div class="flex w-[120px] items-center justify-end gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "sm",
                weight: "light",
                lead: "none",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(match.match.home.name)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(match.match.home.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<img class="h-8 w-8"${ssrRenderAttr("src", match.match.home.logo)}${ssrRenderAttr("alt", match.match.home.name)}${_scopeId}></div><div class="text-muted-800 dark:text-muted-100 flex items-center justify-center gap-2 text-center font-sans"${_scopeId}><span class="text-sm font-bold"${_scopeId}>${ssrInterpolate(match.match.home.score !== void 0 ? match.match.home.score : "-")}</span><span class="text-xs font-bold"${_scopeId}>:</span><span class="text-sm font-bold"${_scopeId}>${ssrInterpolate(match.match.away.score !== void 0 ? match.match.away.score : "-")}</span></div><div class="flex w-[120px] items-center gap-2"${_scopeId}><img class="h-8 w-8"${ssrRenderAttr("src", match.match.away.logo)}${ssrRenderAttr("alt", match.match.away.name)}${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "sm",
                weight: "light",
                lead: "none",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(match.match.away.name)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(match.match.away.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div></td><td class="xs:px-4 py-4"${_scopeId}><div class="text-muted-500 dark:text-muted-400 font-sans text-sm"${_scopeId}><span class="whitespace-nowrap"${_scopeId}>${ssrInterpolate(match.stadium)}</span></div></td><td class="xs:px-4 py-4"${_scopeId}><div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                small: "",
                muted: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:more-horizontal",
                      class: "h-4 w-4"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:more-horizontal",
                        class: "h-4 w-4"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-6 flex gap-4 font-sans" }, [
                createVNode("button", { class: "border-primary-500 text-muted-800 dark:text-muted-100 border-b-2 pb-4" }, " All "),
                createVNode("button", { class: "text-muted-400 dark:text-muted-500 border-b-2 border-transparent pb-4" }, " Live "),
                createVNode("button", { class: "text-muted-400 dark:text-muted-500 border-b-2 border-transparent pb-4" }, " Finished "),
                createVNode("button", { class: "text-muted-400 dark:text-muted-500 border-b-2 border-transparent pb-4" }, " Scheduled ")
              ]),
              createVNode("div", { class: "overflow-x-auto" }, [
                createVNode("div", { class: "inline-block min-w-full align-middle" }, [
                  createVNode("div", { class: "overflow-hidden" }, [
                    createVNode("table", { class: "min-w-full table-fixed divide-y divide-slate-200 text-left dark:divide-slate-700" }, [
                      createVNode("thead", null, [
                        createVNode("th", { class: "py-3 font-sans text-xs uppercase" }, "Time"),
                        createVNode("th", { class: "xs:px-8 py-3 text-center font-sans text-xs uppercase" }, " Match "),
                        createVNode("th", { class: "xs:px-4 py-3 font-sans text-xs uppercase" }, " Stadium "),
                        createVNode("th", { class: "xs:px-4 py-3 font-sans text-xs uppercase" }, " Details ")
                      ]),
                      createVNode("tbody", null, [
                        (openBlock(), createBlock(Fragment, null, renderList(matches, (match) => {
                          return createVNode("tr", {
                            key: match.id
                          }, [
                            createVNode("td", { class: "py-4 align-middle" }, [
                              createVNode("div", {
                                class: "text-muted-500 dark:text-muted-400 flex items-center gap-2 font-sans text-sm",
                                "data-nui-tooltip": ("capitalize" in _ctx ? _ctx.capitalize : unref(capitalize))(match.status)
                              }, [
                                createVNode("div", {
                                  class: [
                                    "h-2 w-2 rounded-full",
                                    match.status === "live" ? "bg-rose-500" : "bg-muted-300 dark:bg-muted-600"
                                  ]
                                }, null, 2),
                                createVNode("span", null, toDisplayString(match.time), 1)
                              ], 8, ["data-nui-tooltip"])
                            ]),
                            createVNode("td", { class: "xs:px-8 py-4" }, [
                              createVNode("div", { class: "flex items-center justify-center gap-4" }, [
                                createVNode("div", { class: "flex w-[120px] items-center justify-end gap-2" }, [
                                  createVNode(_component_BaseHeading, {
                                    as: "h4",
                                    size: "sm",
                                    weight: "light",
                                    lead: "none",
                                    class: "text-muted-500 dark:text-muted-400"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", null, toDisplayString(match.match.home.name), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("img", {
                                    class: "h-8 w-8",
                                    src: match.match.home.logo,
                                    alt: match.match.home.name
                                  }, null, 8, ["src", "alt"])
                                ]),
                                createVNode("div", { class: "text-muted-800 dark:text-muted-100 flex items-center justify-center gap-2 text-center font-sans" }, [
                                  createVNode("span", { class: "text-sm font-bold" }, toDisplayString(match.match.home.score !== void 0 ? match.match.home.score : "-"), 1),
                                  createVNode("span", { class: "text-xs font-bold" }, ":"),
                                  createVNode("span", { class: "text-sm font-bold" }, toDisplayString(match.match.away.score !== void 0 ? match.match.away.score : "-"), 1)
                                ]),
                                createVNode("div", { class: "flex w-[120px] items-center gap-2" }, [
                                  createVNode("img", {
                                    class: "h-8 w-8",
                                    src: match.match.away.logo,
                                    alt: match.match.away.name
                                  }, null, 8, ["src", "alt"]),
                                  createVNode(_component_BaseHeading, {
                                    as: "h4",
                                    size: "sm",
                                    weight: "light",
                                    lead: "none",
                                    class: "text-muted-500 dark:text-muted-400"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", null, toDisplayString(match.match.away.name), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ])
                            ]),
                            createVNode("td", { class: "xs:px-4 py-4" }, [
                              createVNode("div", { class: "text-muted-500 dark:text-muted-400 font-sans text-sm" }, [
                                createVNode("span", { class: "whitespace-nowrap" }, toDisplayString(match.stadium), 1)
                              ])
                            ]),
                            createVNode("td", { class: "xs:px-4 py-4" }, [
                              createVNode("div", null, [
                                createVNode(_component_BaseButtonIcon, {
                                  small: "",
                                  muted: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "lucide:more-horizontal",
                                      class: "h-4 w-4"
                                    })
                                  ]),
                                  _: 1
                                })
                              ])
                            ])
                          ]);
                        }), 64))
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/soccer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=soccer-2ecd83c0.mjs.map
