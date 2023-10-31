import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as _sfc_main$p, b as _sfc_main$o, d as _sfc_main$x, f as __nuxt_component_2, e as __nuxt_component_0$5, j as _sfc_main$C, s as _sfc_main$E } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseButtonIcon-6150946c.mjs';
import { _ as _sfc_main$2 } from './BaseButtonAction-57c21d00.mjs';
import { defineComponent, ref, computed, withCtx, createVNode, createTextVNode, unref, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
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

const _imports_0 = "" + publicAssetsURL("img/illustrations/dashboards/delivery/header.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "delivery",
  __ssrInlineRender: true,
  setup(__props) {
    const genres = [
      {
        id: 1,
        name: "All",
        icon: "/img/icons/food/icon-1.svg"
      },
      {
        id: 2,
        name: "Pizza",
        icon: "/img/icons/food/icon-2.svg"
      },
      {
        id: 3,
        name: "Asian",
        icon: "/img/icons/food/icon-3.svg"
      },
      {
        id: 4,
        name: "Burgers",
        icon: "/img/icons/food/icon-4.svg"
      },
      {
        id: 5,
        name: "Grill",
        icon: "/img/icons/food/icon-5.svg"
      },
      {
        id: 6,
        name: "Sweets",
        icon: "/img/icons/food/icon-6.svg"
      },
      {
        id: 7,
        name: "Thai",
        icon: "/img/icons/food/icon-7.svg"
      },
      {
        id: 8,
        name: "Sushi",
        icon: "/img/icons/food/icon-8.svg"
      }
    ];
    const meals = [
      {
        id: 1,
        name: "Buritos Duo",
        description: "Tomato sauce, mozzarella, basil, olive oil",
        price: 9.99,
        image: "/img/illustrations/dashboards/delivery/meal-1.png",
        rating: 4.5,
        reviews: 12
      },
      {
        id: 2,
        name: "Chop Chop Suite",
        description: "Sushi, salmon, avocado, cucumber, rice",
        price: 25.99,
        image: "/img/illustrations/dashboards/delivery/meal-2.png",
        rating: 4.8,
        reviews: 47
      },
      {
        id: 3,
        name: "Double Cheese Burger",
        description: "Beef, cheese, lettuce, tomato, onion, ketchup",
        price: 14.99,
        image: "/img/illustrations/dashboards/delivery/meal-3.png",
        rating: 4.9,
        reviews: 172
      },
      {
        id: 4,
        name: "Sweet n' Donuts",
        description: "Donuts, chocolate, strawberry, vanilla, sugar",
        price: 9.99,
        image: "/img/illustrations/dashboards/delivery/meal-4.png",
        rating: 4.9,
        reviews: 56
      },
      {
        id: 5,
        name: "Sweet n' Milkshake",
        description: "Milkshake, chocolate, strawberry, vanilla, sugar",
        price: 16.99,
        image: "/img/illustrations/dashboards/delivery/meal-5.png",
        rating: 4.8,
        reviews: 32
      },
      {
        id: 6,
        name: "Fried Chicken Bucket",
        description: "Chicken, barbecue sauce, ketchup, soda",
        price: 12.99,
        image: "/img/illustrations/dashboards/delivery/meal-6.png",
        rating: 4.5,
        reviews: 59
      },
      {
        id: 7,
        name: "Peperoni Slice",
        description: "Tomato sauce, mozzarella, basil, olive oil",
        price: 5.99,
        image: "/img/illustrations/dashboards/delivery/meal-7.png",
        rating: 4.8,
        reviews: 75
      },
      {
        id: 8,
        name: "Veggie Wrap",
        description: "Tomato, mozzarella, basil, olive oil",
        price: 8.99,
        image: "/img/illustrations/dashboards/delivery/meal-8.png",
        rating: 4.8,
        reviews: 112
      },
      {
        id: 9,
        name: "Sashimi Special",
        description: "Sushi, salmon, avocado, cucumber, rice",
        price: 19.99,
        image: "/img/illustrations/dashboards/delivery/meal-9.png",
        rating: 4.9,
        reviews: 71
      }
    ];
    const order = {
      items: [
        {
          id: 8,
          name: "Veggie Wrap",
          description: "Tomato, mozzarella, basil, olive oil",
          price: 8.99,
          image: "/img/illustrations/dashboards/delivery/meal-8.png",
          quantity: 2
        },
        {
          id: 7,
          name: "Peperoni Slice",
          description: "Tomato sauce, mozzarella, basil, olive oil",
          price: 5.99,
          image: "/img/illustrations/dashboards/delivery/meal-7.png",
          quantity: 3
        },
        {
          id: 9,
          name: "Sashimi Special",
          description: "Sushi, salmon, avocado, cucumber, rice",
          price: 19.99,
          image: "/img/illustrations/dashboards/delivery/meal-9.png",
          quantity: 1
        },
        {
          id: 4,
          name: "Sweet n' Donuts",
          description: "Donuts, chocolate, strawberry, vanilla, sugar",
          price: 9.99,
          image: "/img/illustrations/dashboards/delivery/meal-4.png",
          quantity: 1
        }
      ]
    };
    const activeGenre = ref(1);
    const subTotal = computed(() => {
      let price = 0;
      order.items.forEach((item) => {
        price += item.price * item.quantity;
      });
      return price;
    });
    const taxes = computed(() => {
      return subTotal.value * 0.0625;
    });
    const total = computed(() => {
      return subTotal.value + taxes.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseButton = _sfc_main$x;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseButtonIcon = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseButtonAction = _sfc_main$2;
      const _component_BaseAvatar = _sfc_main$E;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="grid grid-cols-12 gap-6"><div class="ltablet:col-span-8 col-span-12 lg:col-span-8"><div class="flex flex-col gap-6"><div class="col-span-12"><div class="bg-primary-800 flex flex-col items-center rounded-2xl p-4 sm:flex-row"><div class="relative h-[120px] w-[240px] shrink-0 sm:h-[175px]"><img class="pointer-events-none absolute -top-6 start-3 sm:-start-10 sm:-top-2"${ssrRenderAttr("src", _imports_0)} alt="Food illustration"></div><div class="mt-6 grow sm:mt-0"><div class="pb-4 text-center sm:pb-0 sm:text-left">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        tag: "h1",
        class: "mb-2 text-white opacity-90"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}> Free delivery for 30 days! <span class="text-3xl"${_scopeId}>\u{1F389}</span></span>`);
          } else {
            return [
              createVNode("span", null, [
                createTextVNode(" Free delivery for 30 days! "),
                createVNode("span", { class: "text-3xl" }, "\u{1F389}")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "sm",
        class: "max-w-xs text-white opacity-70"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}> Don&#39;t miss out our $0 delivery fee for orders over $10 for 30 days. This one&#39;s for you! </span>`);
          } else {
            return [
              createVNode("span", null, " Don't miss out our $0 delivery fee for orders over $10 for 30 days. This one's for you! ")
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
      _push(`</div></div></div></div></div><div class="relative"><div class="mb-6 flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        tag: "h3",
        size: "xl",
        weight: "semibold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Popular Meals</span>`);
          } else {
            return [
              createVNode("span", null, "Popular Meals")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="bg-primary-500/10 hover:bg-primary-500/20 text-primary-600 inline-flex cursor-pointer items-center justify-center gap-x-1 rounded-full py-2 pe-4 ps-2 font-sans text-sm transition-all duration-300">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:timer-duotone",
        class: "h-5 w-5"
      }, null, _parent));
      _push(`<span class="text-sm">Delivery:</span><span>~ 25min</span></button></div><div class="mb-14 grid grid-cols-4 gap-4 sm:grid-cols-9"><!--[-->`);
      ssrRenderList(genres, (genre) => {
        _push(`<div role="button" class="${ssrRenderClass([
          unref(activeGenre) === genre.id ? "bg-yellow-400 border-yellow-400" : "border-muted-200 dark:border-muted-700 hover:bg-muted-200/80 dark:hover:bg-muted-800/40",
          "flex cursor-pointer flex-col items-center rounded-full border p-2 shadow-xl transition-colors duration-500 ease-in-out"
        ])}"><div class="${ssrRenderClass([
          unref(activeGenre) === genre.id ? "bg-white border-yellow-400" : "border-muted-200 dark:border-muted-800 bg-white dark:bg-muted-800",
          "rounded-full border p-2 transition-colors duration-500 ease-in-out"
        ])}"><img${ssrRenderAttr("src", genre.icon)} alt="Food type icon" class="${ssrRenderClass([unref(activeGenre) === genre.id ? "" : "dark:invert", "h-12 w-12 scale-[0.8]"])}"></div><p class="mb-10 mt-3 text-xs font-bold">${ssrInterpolate(genre.name)}</p></div>`);
      });
      _push(`<!--]--><div class="hidden items-center justify-center sm:flex">`);
      _push(ssrRenderComponent(_component_BaseButtonIcon, {
        shape: "full",
        class: "hover:border-yellow-500 hover:text-yellow-500",
        "data-nui-tooltip": "All categories"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:chevron-right",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:chevron-right",
                class: "h-4 w-4"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="grid gap-x-3 gap-y-6 sm:grid-cols-3"><!--[-->`);
      ssrRenderList(meals, (meal) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: meal.id,
          to: "#",
          class: "relative"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseCard, {
                shape: "curved",
                class: "hover:border-primary-500 hover:shadow-muted-300/30 dark:hover:shadow-muted-900/40 p-3 hover:shadow-xl"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="ltablet:h-28 bg-muted-100 dark:bg-muted-900 relative mb-3 h-36 w-full rounded-xl sm:h-32"${_scopeId2}><img class="ltablet:max-w-[175px] absolute inset-x-0 -top-4 mx-auto max-w-[210px] sm:-top-6 sm:max-w-[190px]"${ssrRenderAttr("src", meal.image)}${ssrRenderAttr("alt", meal.name)}${_scopeId2}></div><div class="mb-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BaseHeading, {
                      tag: "h4",
                      size: "sm",
                      weight: "medium",
                      class: "text-muted-800 dark:text-muted-100"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span${_scopeId3}>${ssrInterpolate(meal.name)}</span>`);
                        } else {
                          return [
                            createVNode("span", null, toDisplayString(meal.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseParagraph, {
                      size: "xs",
                      class: "text-muted-500 dark:text-muted-400 line-clamp-1"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span${_scopeId3}>${ssrInterpolate(meal.description)}</span>`);
                        } else {
                          return [
                            createVNode("span", null, toDisplayString(meal.description), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="flex items-center justify-between"${_scopeId2}><div class="divide-muted-200 dark:divide-muted-700 flex items-center divide-x"${_scopeId2}><div class="pe-4"${_scopeId2}><span class="text-muted-800 dark:text-muted-100 font-sans font-bold"${_scopeId2}> $${ssrInterpolate(meal.price)}</span></div><div class="flex items-center gap-1 ps-4"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "uiw:star-on",
                      class: "h-3 w-3 text-yellow-400"
                    }, null, _parent3, _scopeId2));
                    _push3(`<span class="text-muted-400 font-sans text-xs"${_scopeId2}>${ssrInterpolate(meal.rating)} (${ssrInterpolate(meal.reviews)}) </span></div></div><div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BaseButtonAction, { shape: "curved" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span${_scopeId3}>Order</span>`);
                        } else {
                          return [
                            createVNode("span", null, "Order")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "ltablet:h-28 bg-muted-100 dark:bg-muted-900 relative mb-3 h-36 w-full rounded-xl sm:h-32" }, [
                        createVNode("img", {
                          class: "ltablet:max-w-[175px] absolute inset-x-0 -top-4 mx-auto max-w-[210px] sm:-top-6 sm:max-w-[190px]",
                          src: meal.image,
                          alt: meal.name
                        }, null, 8, ["src", "alt"])
                      ]),
                      createVNode("div", { class: "mb-2" }, [
                        createVNode(_component_BaseHeading, {
                          tag: "h4",
                          size: "sm",
                          weight: "medium",
                          class: "text-muted-800 dark:text-muted-100"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, toDisplayString(meal.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_BaseParagraph, {
                          size: "xs",
                          class: "text-muted-500 dark:text-muted-400 line-clamp-1"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, toDisplayString(meal.description), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createVNode("div", { class: "divide-muted-200 dark:divide-muted-700 flex items-center divide-x" }, [
                          createVNode("div", { class: "pe-4" }, [
                            createVNode("span", { class: "text-muted-800 dark:text-muted-100 font-sans font-bold" }, " $" + toDisplayString(meal.price), 1)
                          ]),
                          createVNode("div", { class: "flex items-center gap-1 ps-4" }, [
                            createVNode(_component_Icon, {
                              name: "uiw:star-on",
                              class: "h-3 w-3 text-yellow-400"
                            }),
                            createVNode("span", { class: "text-muted-400 font-sans text-xs" }, toDisplayString(meal.rating) + " (" + toDisplayString(meal.reviews) + ") ", 1)
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode(_component_BaseButtonAction, { shape: "curved" }, {
                            default: withCtx(() => [
                              createVNode("span", null, "Order")
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseCard, {
                  shape: "curved",
                  class: "hover:border-primary-500 hover:shadow-muted-300/30 dark:hover:shadow-muted-900/40 p-3 hover:shadow-xl"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "ltablet:h-28 bg-muted-100 dark:bg-muted-900 relative mb-3 h-36 w-full rounded-xl sm:h-32" }, [
                      createVNode("img", {
                        class: "ltablet:max-w-[175px] absolute inset-x-0 -top-4 mx-auto max-w-[210px] sm:-top-6 sm:max-w-[190px]",
                        src: meal.image,
                        alt: meal.name
                      }, null, 8, ["src", "alt"])
                    ]),
                    createVNode("div", { class: "mb-2" }, [
                      createVNode(_component_BaseHeading, {
                        tag: "h4",
                        size: "sm",
                        weight: "medium",
                        class: "text-muted-800 dark:text-muted-100"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, toDisplayString(meal.name), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_BaseParagraph, {
                        size: "xs",
                        class: "text-muted-500 dark:text-muted-400 line-clamp-1"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, toDisplayString(meal.description), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("div", { class: "divide-muted-200 dark:divide-muted-700 flex items-center divide-x" }, [
                        createVNode("div", { class: "pe-4" }, [
                          createVNode("span", { class: "text-muted-800 dark:text-muted-100 font-sans font-bold" }, " $" + toDisplayString(meal.price), 1)
                        ]),
                        createVNode("div", { class: "flex items-center gap-1 ps-4" }, [
                          createVNode(_component_Icon, {
                            name: "uiw:star-on",
                            class: "h-3 w-3 text-yellow-400"
                          }),
                          createVNode("span", { class: "text-muted-400 font-sans text-xs" }, toDisplayString(meal.rating) + " (" + toDisplayString(meal.reviews) + ") ", 1)
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode(_component_BaseButtonAction, { shape: "curved" }, {
                          default: withCtx(() => [
                            createVNode("span", null, "Order")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="my-16 flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        shape: "full",
        color: "default"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:dots-nine-bold",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Load more</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ph:dots-nine-bold",
                class: "h-4 w-4"
              }),
              createVNode("span", null, "Load more")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><div class="ltablet:col-span-4 col-span-12 lg:col-span-4"><div class="bg-muted-200 dark:bg-muted-800 flex flex-col gap-6 rounded-2xl p-6"><div class="font-hairline rounded-2xl bg-primary-800 p-6 text-xs"><div class="mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_BaseAvatar, {
        src: "/img/avatars/2.svg",
        size: "xs"
      }, null, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h4",
        size: "sm",
        weight: "light",
        lead: "tight",
        class: "text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Maya Rosselini</span>`);
          } else {
            return [
              createVNode("span", null, "Maya Rosselini")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-white/70"${_scopeId}>Complete your order</span>`);
          } else {
            return [
              createVNode("span", { class: "text-white/70" }, "Complete your order")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex items-center justify-between font-sans"><p class="text-white">112 Mc Cornell Av.</p><button type="button" class="cursor-pointer text-yellow-400"> Edit </button></div><div class="mt-4 flex items-center gap-2 font-sans"><div class="rounded-lg py-1">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:timer-duotone",
        class: "h-5 w-5 text-yellow-400"
      }, null, _parent));
      _push(`</div><p class="text-white">35 min</p><button type="button" class="ms-auto cursor-pointer text-yellow-400"> Choose time </button></div></div><div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        tag: "h3",
        size: "xl",
        weight: "medium",
        class: "text-muted-800 dark:text-muted-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>My Order</span>`);
          } else {
            return [
              createVNode("span", null, "My Order")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><ul class="space-y-4"><!--[-->`);
      ssrRenderList(order.items, (item) => {
        _push(`<li><div class="flex items-center gap-3"><div class="border-muted-200 dark:border-muted-700 dark:bg-muted-900 relative flex h-14 w-14 items-center justify-center rounded-xl border bg-white"><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.name)} class="h-12 w-12 object-contain"><div class="bg-primary-500 absolute -bottom-1 -end-1 flex h-6 w-6 items-center justify-center rounded-full"><span class="font-sans text-[0.65rem] font-semibold text-white"> x${ssrInterpolate(item.quantity)}</span></div></div><div><p class="text-muted-800 dark:text-muted-100 font-sans text-sm">${ssrInterpolate(item.name)}</p><p class="text-muted-400 font-sans text-xs"> unit price: $${ssrInterpolate(item.price)}</p></div><div class="ms-auto"><p class="text-muted-800 dark:text-muted-100 font-sans text-sm font-semibold"> $${ssrInterpolate((item.price * item.quantity).toFixed(2))}</p></div></div></li>`);
      });
      _push(`<!--]--></ul><div class="border-muted-300 dark:border-muted-800 flex grow flex-col justify-end border-t py-4"><ul class="my-4 space-y-2 font-sans"><li><div class="flex items-center justify-between"><span class="text-sm">Subtotal:</span><span class="text-muted-500 dark:text-muted-400 text-sm font-medium"> $${ssrInterpolate(unref(subTotal).toFixed(2))}</span></div></li><li><div class="flex items-center justify-between"><span class="text-sm">Taxes:</span><span class="text-muted-500 dark:text-muted-400 text-sm font-medium"> $${ssrInterpolate(unref(taxes).toFixed(2))}</span></div></li><li><div class="flex items-center justify-between"><span>Total:</span><span class="text-muted-800 dark:text-muted-100 text-xl font-semibold"> $${ssrInterpolate(unref(total).toFixed(2))}</span></div></li></ul><div class="mt-4 flex justify-between text-xs font-bold">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        color: "none",
        shape: "curved",
        class: "text-muted-800 group !h-14 w-full !gap-3 bg-yellow-400 hover:!shadow-xl hover:!shadow-yellow-400/20"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-base font-medium"${_scopeId}>Checkout</span>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:arrow-right",
              class: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", { class: "text-base font-medium" }, "Checkout"),
              createVNode(_component_Icon, {
                name: "lucide:arrow-right",
                class: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/delivery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=delivery-a22e9856.mjs.map
