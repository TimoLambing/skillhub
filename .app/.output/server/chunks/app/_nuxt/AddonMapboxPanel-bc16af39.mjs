import { D as usePanels, k as useTailwindColors, e as __nuxt_component_0$5, f as __nuxt_component_2, _ as _sfc_main$p, y as _sfc_main$d, j as _sfc_main$C, s as _sfc_main$E } from '../server.mjs';
import __nuxt_component_0 from './TairoLogo-688db51d.mjs';
import _sfc_main$2 from './DemoAccountMenu-d8e8a032.mjs';
import { useSSRContext, defineComponent, ref, shallowRef, watchEffect, watch, mergeProps, withCtx, createVNode, unref, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useColorMode } from './composables-f7cb2fae.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DemoMapMarker",
  __ssrInlineRender: true,
  props: {
    logo: { default: void 0 },
    name: { default: void 0 },
    description: { default: void 0 },
    openingCount: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAvatar = _sfc_main$E;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-3" }, _attrs))}><div class="relative"><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_BaseAvatar, {
        size: "xs",
        src: props.logo
      }, null, _parent));
      _push(`<div class="font-sans"><h4 class="text-muted-800 dark:text-muted-100 text-sm font-medium leading-none">${ssrInterpolate(props.name)}</h4><p class="text-muted-400 text-xs"> Open until ${ssrInterpolate(props.openingCount)}</p></div></div></div><div class="text-muted-500 dark:text-muted-400 font-sans text-xs"><p>${ssrInterpolate(props.description)}</p></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoMapMarker.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AddonMapboxPanel",
  __ssrInlineRender: true,
  props: {
    reversed: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    usePanels();
    useTailwindColors();
    const colorMode = useColorMode();
    const selectedFeature = ref();
    const selectedFeatureLatLng = ref();
    const selectedFeatureName = ref("");
    shallowRef();
    shallowRef();
    const popupElement = shallowRef();
    const map = shallowRef();
    const popup = shallowRef();
    shallowRef();
    let mapboxgl;
    const locations = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            name: "Fast Pizza",
            logo: "/img/icons/logos/fastpizza.svg",
            distance: 0.3,
            openingCount: "6pm",
            phone: "+1 555 456-5659",
            website: "https://huro.cssninja.io",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam."
          },
          geometry: {
            type: "Point",
            coordinates: [-77.038659, 38.931567]
          }
        },
        {
          type: "Feature",
          properties: {
            name: "Envato",
            logo: "/img/icons/logos/envato.svg",
            distance: 0.8,
            openingCount: "5pm",
            phone: "+1 555 154-4568",
            website: "https://huro.cssninja.io",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam."
          },
          geometry: {
            type: "Point",
            coordinates: [-77.003168, 38.894651]
          }
        },
        {
          type: "Feature",
          properties: {
            name: "Lipflow",
            logo: "/img/icons/logos/lipflow.svg",
            distance: 1.2,
            openingCount: "8pm",
            phone: "+1 555 456-7897",
            website: "https://huro.cssninja.io",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam."
          },
          geometry: {
            type: "Point",
            coordinates: [-77.090372, 38.881189]
          }
        },
        {
          type: "Feature",
          properties: {
            name: "Metamovies",
            logo: "/img/icons/logos/metamovies.svg",
            distance: 0.5,
            openingCount: "11pm",
            phone: "+1 555 456-5659",
            website: "https://huro.cssninja.io",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam."
          },
          geometry: {
            type: "Point",
            coordinates: [-77.111561, 38.882342]
          }
        },
        {
          type: "Feature",
          properties: {
            name: "Slicer",
            logo: "/img/icons/logos/slicer.svg",
            distance: 0.2,
            openingCount: "4:30pm",
            phone: "+1 555 456-7568",
            website: "https://huro.cssninja.io",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam."
          },
          geometry: {
            type: "Point",
            coordinates: [-77.052477, 38.943951]
          }
        },
        {
          type: "Feature",
          properties: {
            name: "Drop",
            logo: "/img/icons/logos/drop.svg",
            distance: 2.1,
            openingCount: "7pm",
            phone: "+1 555 456-5659",
            website: "https://huro.cssninja.io",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam."
          },
          geometry: {
            type: "Point",
            coordinates: [-77.043444, 38.909664]
          }
        },
        {
          type: "Feature",
          properties: {
            name: "Fresco",
            logo: "/img/icons/logos/fresco.svg",
            distance: 0.6,
            openingCount: "6pm",
            phone: "+1 555 456-5659",
            website: "https://huro.cssninja.io",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam."
          },
          geometry: {
            type: "Point",
            coordinates: [-77.031706, 38.914581]
          }
        },
        {
          type: "Feature",
          properties: {
            name: "Hairz",
            logo: "/img/icons/logos/hairz.svg",
            distance: 0.3,
            openingCount: "6pm",
            phone: "+1 555 755-3382",
            website: "https://huro.cssninja.io",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam."
          },
          geometry: {
            type: "Point",
            coordinates: [-77.020945, 38.878241]
          }
        },
        {
          type: "Feature",
          properties: {
            name: "Vego LLC",
            logo: "/img/icons/logos/vego.svg",
            distance: 0.3,
            openingCount: "9pm",
            phone: "+1 555 456-8984",
            website: "https://huro.cssninja.io",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam."
          },
          geometry: {
            type: "Point",
            coordinates: [-77.007481, 38.876516]
          }
        }
      ]
    };
    function selectFeature(feature) {
      selectedFeature.value = void 0;
      selectedFeature.value = feature;
    }
    watchEffect(
      () => {
        if (!selectedFeature.value || !popupElement.value || !map.value) {
          return;
        }
        const feature = selectedFeature.value;
        const { geometry, properties } = feature;
        const { name } = properties;
        const coordinates = geometry.coordinates.slice();
        console.log("zooming at: ", properties, coordinates);
        if (selectedFeatureLatLng.value) {
          while (Math.abs(selectedFeatureLatLng.value.lng - coordinates[0]) > 180) {
            coordinates[0] += selectedFeatureLatLng.value.lng > coordinates[0] ? 360 : -360;
          }
        }
        map.value.flyTo({
          center: coordinates,
          zoom: 15,
          bearing: 0,
          essential: true
          // this animation is considered essential with respect to prefers-reduced-motion
        });
        if (popup.value) {
          popup.value.remove();
        }
        popup.value = new mapboxgl.Popup().on("open", () => {
          selectedFeatureName.value = name;
        }).on("close", () => {
          selectedFeatureName.value = "";
        }).setLngLat(coordinates).setHTML(popupElement.value.innerHTML).addTo(map.value);
      },
      { flush: "post" }
    );
    watch(
      () => colorMode.value === "dark",
      () => {
        if (!map.value) {
          return;
        }
        if (colorMode.value === "dark") {
          map.value.setStyle("mapbox://styles/mapbox/dark-v10");
        } else {
          map.value.setStyle("mapbox://styles/mapbox/light-v10");
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_TairoLogo = __nuxt_component_0;
      const _component_Icon = __nuxt_component_2;
      const _component_DemoAccountMenu = _sfc_main$2;
      const _component_DemoMapMarker = _sfc_main$1;
      const _component_BaseHeading = _sfc_main$p;
      const _component_TairoSidebarTools = _sfc_main$d;
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseAvatar = _sfc_main$E;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="bg-muted-100 dark:bg-muted-900 ltablet:flex-row flex min-h-screen flex-col lg:flex-row"><div class="ltablet:h-screen ltablet:w-20 ltablet:border-r border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative z-10 h-16 w-full bg-white lg:h-screen lg:w-20 lg:border-r"><div class="ltablet:flex-col flex h-full justify-between lg:flex-col"><div class="ltablet:flex-col flex lg:flex-col"><div class="ltablet:w-full flex h-16 w-16 shrink-0 items-center justify-center lg:w-full">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "flex items-center justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TairoLogo, { class: "text-primary-600 h-10" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TairoLogo, { class: "text-primary-600 h-10" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ltablet:w-full flex h-16 w-16 shrink-0 items-center justify-center lg:w-full"><a href="#" class="text-muted-400 hover:text-primary-500 hover:bg-primary-500/20 flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300" title="Back">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:arrow-left",
        class: "h-5 w-5"
      }, null, _parent));
      _push(`</a></div></div><div class="ltablet:flex-col ltablet:pe-0 flex pe-4 lg:flex-col lg:pe-0"><div class="flex h-16 w-full items-center justify-center"><button type="button" class="text-muted-400 hover:text-primary-500 hover:bg-primary-500/20 flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300" title="Search">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:magnifying-glass-duotone",
        class: "h-5 w-5"
      }, null, _parent));
      _push(`</button></div><div class="flex h-16 w-full items-center justify-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "text-muted-400 hover:text-primary-500 hover:bg-primary-500/20 flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300",
        title: "Settings"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:gear-six-duotone",
              class: "h-5 w-5"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ph:gear-six-duotone",
                class: "h-5 w-5"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ltablet:flex hidden h-16 w-full items-center justify-center lg:flex">`);
      _push(ssrRenderComponent(_component_DemoAccountMenu, null, null, _parent));
      _push(`</div><div class="ltablet:hidden flex h-16 w-full items-center justify-center lg:hidden">`);
      _push(ssrRenderComponent(_component_DemoAccountMenu, { horizontal: "" }, null, _parent));
      _push(`</div></div></div></div>`);
      if (!props.reversed) {
        _push(`<div class="ltablet:h-auto relative h-96 grow lg:h-auto"><div class="absolute inset-0 h-full w-full"></div><div class="geocoder absolute inset-x-0 top-6 mx-auto flex items-center justify-center px-6 sm:px-0"></div><div style="${ssrRenderStyle({ "display": "none", "visibility": "hidden" })}" class="absolute">`);
        if (unref(selectedFeature)) {
          _push(ssrRenderComponent(_component_DemoMapMarker, {
            logo: unref(selectedFeature).properties.logo,
            name: unref(selectedFeature).properties.name,
            "opening-count": unref(selectedFeature).properties.openingCount,
            description: unref(selectedFeature).properties.description
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="ltablet:w-96 ltablet:h-screen dark:bg-muted-800 h-[calc(100vh_-_428px)] w-full shrink-0 bg-white lg:h-screen lg:w-96"><div class="relative z-10 flex h-16 w-full items-center justify-between px-6">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        size: "xl",
        weight: "medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-800 dark:text-white"${_scopeId}>Locations</span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-800 dark:text-white" }, "Locations")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_TairoSidebarTools, null, null, _parent));
      _push(`</div><div class="ltablet:h-[calc(100%_-_64px)] nui-slimscroll h-[calc(100vh_-_492px)] overflow-y-auto p-6 lg:h-[calc(100%_-_64px)]">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        size: "xs",
        weight: "medium",
        class: "mb-4 uppercase tracking-wider"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-400"${_scopeId}>Recent Locations</span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-400" }, "Recent Locations")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="ptablet:flex-none ptablet:grid ptablet:grid-cols-2 ptablet:pb-10 flex flex-col gap-4"><!--[-->`);
      ssrRenderList(locations.features, (feature, key) => {
        _push(ssrRenderComponent(_component_BaseCard, {
          key,
          class: ["cursor-pointer p-6", [
            unref(selectedFeatureName) === feature.properties.name && "border-primary-500"
          ]],
          shape: "curved",
          tabindex: "0",
          role: "button",
          onKeydown: ($event) => selectFeature(feature),
          onClick: ($event) => selectFeature(feature)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="relative"${_scopeId}><div class="relative"${_scopeId}><div class="mb-3 flex items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseAvatar, {
                size: "xs",
                src: feature.properties.logo
              }, null, _parent2, _scopeId));
              _push2(`<div class="font-sans"${_scopeId}><h4 class="text-muted-800 dark:text-muted-100 text-sm font-medium leading-none"${_scopeId}>${ssrInterpolate(feature.properties.name)}</h4><p class="text-muted-400 text-sm"${_scopeId}> Open until ${ssrInterpolate(feature.properties.openingCount)}</p></div></div></div><div class="text-muted-500 dark:text-muted-400 mb-4 font-sans text-sm"${_scopeId}><p${_scopeId}>${ssrInterpolate(feature.properties.description)}</p></div><div class="flex items-center justify-between"${_scopeId}><div class="flex gap-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "uiw:star-on",
                class: "h-3 w-3 text-yellow-400"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Icon, {
                name: "uiw:star-on",
                class: "h-3 w-3 text-yellow-400"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Icon, {
                name: "uiw:star-on",
                class: "h-3 w-3 text-yellow-400"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Icon, {
                name: "uiw:star-on",
                class: "h-3 w-3 text-yellow-400"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Icon, {
                name: "uiw:star-on",
                class: "h-3 w-3 text-yellow-400"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="relative"${_scopeId}><div class="text-muted-400 flex items-center gap-1 font-sans text-sm"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:flag",
                class: "h-4 w-4"
              }, null, _parent2, _scopeId));
              _push2(`<span class="dark-inverted"${_scopeId}>${ssrInterpolate(feature.properties.distance)} mile </span></div></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "relative" }, [
                  createVNode("div", { class: "relative" }, [
                    createVNode("div", { class: "mb-3 flex items-center gap-2" }, [
                      createVNode(_component_BaseAvatar, {
                        size: "xs",
                        src: feature.properties.logo
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "font-sans" }, [
                        createVNode("h4", { class: "text-muted-800 dark:text-muted-100 text-sm font-medium leading-none" }, toDisplayString(feature.properties.name), 1),
                        createVNode("p", { class: "text-muted-400 text-sm" }, " Open until " + toDisplayString(feature.properties.openingCount), 1)
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "text-muted-500 dark:text-muted-400 mb-4 font-sans text-sm" }, [
                    createVNode("p", null, toDisplayString(feature.properties.description), 1)
                  ]),
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", { class: "flex gap-1" }, [
                      createVNode(_component_Icon, {
                        name: "uiw:star-on",
                        class: "h-3 w-3 text-yellow-400"
                      }),
                      createVNode(_component_Icon, {
                        name: "uiw:star-on",
                        class: "h-3 w-3 text-yellow-400"
                      }),
                      createVNode(_component_Icon, {
                        name: "uiw:star-on",
                        class: "h-3 w-3 text-yellow-400"
                      }),
                      createVNode(_component_Icon, {
                        name: "uiw:star-on",
                        class: "h-3 w-3 text-yellow-400"
                      }),
                      createVNode(_component_Icon, {
                        name: "uiw:star-on",
                        class: "h-3 w-3 text-yellow-400"
                      })
                    ]),
                    createVNode("div", { class: "relative" }, [
                      createVNode("div", { class: "text-muted-400 flex items-center gap-1 font-sans text-sm" }, [
                        createVNode(_component_Icon, {
                          name: "lucide:flag",
                          class: "h-4 w-4"
                        }),
                        createVNode("span", { class: "dark-inverted" }, toDisplayString(feature.properties.distance) + " mile ", 1)
                      ])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div>`);
      if (props.reversed) {
        _push(`<div class="ltablet:h-auto relative h-96 grow lg:h-auto"><div class="absolute inset-0 h-full w-full"></div><div class="geocoder absolute inset-x-0 top-6 mx-auto flex items-center justify-center px-6 sm:px-0"></div><div style="${ssrRenderStyle({ "display": "none", "visibility": "hidden" })}" class="absolute">`);
        if (unref(selectedFeature)) {
          _push(ssrRenderComponent(_component_DemoMapMarker, {
            logo: unref(selectedFeature).properties.logo,
            name: unref(selectedFeature).properties.name,
            "opening-count": unref(selectedFeature).properties.openingCount,
            description: unref(selectedFeature).properties.description
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AddonMapboxPanel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=AddonMapboxPanel-bc16af39.mjs.map
