import { D as usePanels, J as useRoute, X as navigateTo, Y as _sfc_main$a, s as _sfc_main$E, b as _sfc_main$o, _ as _sfc_main$p, f as __nuxt_component_2, i as _sfc_main$D } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseAvatarGroup-6e7b4ecf.mjs';
import { _ as _sfc_main$2 } from './BaseButtonIcon-6150946c.mjs';
import { _ as _sfc_main$3 } from './BaseTag-734af285.mjs';
import { defineComponent, reactive, computed, withAsyncContext, ref, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-45c1546c.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { Container, Draggable } from 'vue3-smooth-dnd';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const columns = reactive({
      new: {
        title: "New",
        tasks: []
      },
      inProgress: {
        title: "In Progress",
        tasks: []
      },
      blocked: {
        title: "Blocked",
        tasks: []
      },
      onHold: {
        title: "On Hold",
        tasks: []
      },
      inReview: {
        title: "In Review",
        tasks: []
      },
      done: {
        title: "Done",
        tasks: []
      }
    });
    const { open } = usePanels();
    const route = useRoute();
    const slug = computed(() => route.params.slug);
    const query = computed(() => {
      return {
        slug: slug.value
      };
    });
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/company/projects",
      {
        query
      },
      "$PXR3v4Bgc6"
    )), __temp = await __temp, __restore(), __temp);
    if (!data.value?.project) {
      [__temp, __restore] = withAsyncContext(() => navigateTo("/layouts/projects")), await __temp, __restore();
    }
    const tasks = ref(data.value?.project?.tasks);
    if (tasks.value) {
      for (const task of tasks.value) {
        switch (task.status) {
          case 0:
            columns.new.tasks.push(task);
            break;
          case 1:
            columns.inProgress.tasks.push(task);
            break;
          case 2:
            columns.blocked.tasks.push(task);
            break;
          case 3:
            columns.onHold.tasks.push(task);
            break;
          case 4:
            columns.inReview.tasks.push(task);
            break;
          case 5:
            columns.done.tasks.push(task);
            break;
        }
      }
    }
    const board = computed(() => Object.values(columns || {}));
    const currentTask = ref();
    function openTaskPanel(id, tasks2) {
      currentTask.value = tasks2.find((task) => task.id === id);
      open("task", { task: currentTask });
    }
    function onDrop(column, dropResult) {
      if (typeof dropResult?.addedIndex !== "number" || typeof dropResult?.removedIndex !== "number") {
        return;
      }
      if (dropResult.addedIndex === dropResult.removedIndex) {
        return;
      }
      let itemToAdd;
      if (dropResult.removedIndex !== null) {
        itemToAdd = column.tasks.splice(dropResult.removedIndex, 1)[0];
      }
      if (dropResult.addedIndex !== null) {
        column.tasks.splice(dropResult.addedIndex, 0, itemToAdd);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoSidebarLayout = _sfc_main$a;
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseAvatarGroup = _sfc_main$1;
      const _component_BaseButtonIcon = _sfc_main$2;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseTag = _sfc_main$3;
      const _component_BaseText = _sfc_main$D;
      _push(ssrRenderComponent(_component_TairoSidebarLayout, mergeProps({
        "horizontal-scroll": "",
        class: "bg-muted-100 dark:bg-muted-900 h-screen w-full"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(data)?.project !== void 0) {
              _push2(`<div class="flex h-12 items-center justify-between pe-4 xl:pe-10"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseAvatar, {
                src: unref(data)?.project.customer.logo,
                size: "xs"
              }, null, _parent2, _scopeId));
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "xs",
                class: "text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(data)?.project.customer.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(data)?.project.customer.name), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h2",
                size: "sm",
                weight: "medium"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(data)?.project.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(data)?.project.name), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div><div class="flex items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseAvatarGroup, {
                avatars: unref(data)?.project.team,
                size: "xs"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                to: `/layouts/projects/details/${unref(slug)}`,
                shape: "curved",
                "data-nui-tooltip": "Project details"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:layout-template",
                      class: "h-4 w-4"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:layout-template",
                        class: "h-4 w-4"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                shape: "full",
                "data-nui-tooltip": "New task"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:plus",
                      class: "h-4 w-4"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:plus",
                        class: "h-4 w-4"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex h-[calc(100vh_-_133px)] grow space-x-6 overflow-auto pt-2"${_scopeId}><!--[-->`);
            ssrRenderList(unref(board), (column) => {
              _push2(`<div class="flex h-full w-72 shrink-0 flex-col"${_scopeId}><div class="flex h-14 shrink-0 items-center px-2"${_scopeId}><span class="block font-sans text-sm font-semibold"${_scopeId}>${ssrInterpolate(column.title)}</span><span class="text-primary-500 dark:text-sunny ms-2 flex h-5 w-5 items-center justify-center text-sm font-semibold"${_scopeId}>${ssrInterpolate(column.tasks.length)}</span><button class="text-primary-500 dark:text-sunny hover:bg-primary-500/20 dark:hover:bg-sunny/20 ms-auto flex h-6 w-6 items-center justify-center rounded-full transition-colors duration-300"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:plus",
                class: "h-4 w-4"
              }, null, _parent2, _scopeId));
              _push2(`</button></div><div class="nui-slimscroll overflow-auto pb-10 pe-2"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Container), {
                tag: "div",
                class: "flex flex-col gap-y-4",
                orientation: "vertical",
                "group-name": column.title,
                "drag-class": "transform rotate-2 transform-gpu",
                "drop-class": "opacity-40",
                "drop-placeholder": {
                  className: "mt-4 border-muted-200 border-dashed dark:border-muted-700 dark:bg-muted-800 group relative flex cursor-pointer flex-col items-start rounded-lg border bg-white/90 p-4 hover:bg-white opacity-60 mb-4"
                },
                onDrop: (dropResult) => onDrop(column, dropResult)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (column.tasks.length > 0) {
                      _push3(`<!--[-->`);
                      ssrRenderList(column.tasks, (task) => {
                        _push3(ssrRenderComponent(unref(Draggable), {
                          key: task.id
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`<div class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 group relative flex cursor-pointer flex-col items-start rounded-lg border bg-white/90 p-4 hover:bg-white" draggable="true"${_scopeId3}><div class="relative mb-2"${_scopeId3}><div class="mb-2 flex w-full items-center justify-between gap-2"${_scopeId3}>`);
                              _push4(ssrRenderComponent(_component_BaseTag, {
                                shape: "full",
                                flavor: "pastel",
                                color: "muted",
                                class: "m-0 -ms-1 inline-flex h-6 scale-90 items-center py-0 text-xs font-semibold"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`Task #${ssrInterpolate(task.id)}`);
                                  } else {
                                    return [
                                      createTextVNode("Task #" + toDisplayString(task.id), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              _push4(ssrRenderComponent(_component_BaseText, {
                                size: "xs",
                                class: "text-muted-400"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`${ssrInterpolate(task.created)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(task.created), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              _push4(`</div>`);
                              _push4(ssrRenderComponent(_component_BaseHeading, {
                                as: "h4",
                                size: "sm",
                                weight: "medium",
                                class: "line-clamp-2"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`<span${_scopeId4}>${ssrInterpolate(task.name)}</span>`);
                                  } else {
                                    return [
                                      createVNode("span", null, toDisplayString(task.name), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              _push4(`</div><div class="text-muted-500 dark:text-muted-200 mt-2 flex w-full items-center justify-between text-xs font-medium"${_scopeId3}><div class="flex items-center gap-2"${_scopeId3}>`);
                              _push4(ssrRenderComponent(_component_BaseAvatar, {
                                src: task.assignee.src,
                                size: "xxs",
                                class: "shrink-0"
                              }, null, _parent4, _scopeId3));
                              _push4(ssrRenderComponent(_component_BaseText, {
                                size: "xs",
                                class: "text-muted-400"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`${ssrInterpolate(task.assignee.tooltip)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(task.assignee.tooltip), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              _push4(`</div><div class="text-muted-400 flex items-center gap-3"${_scopeId3}>`);
                              if (task.checklist.length > 0) {
                                _push4(`<div${ssrRenderAttr("data-nui-tooltip", `${task.checklist.length} subtask${task.checklist.length > 1 ? "s" : ""} in checklist`)} data-nui-tooltip-position="start"${_scopeId3}>`);
                                _push4(ssrRenderComponent(_component_Icon, {
                                  name: "lucide:check-circle",
                                  class: "h-4 w-4"
                                }, null, _parent4, _scopeId3));
                                _push4(`</div>`);
                              } else {
                                _push4(`<!---->`);
                              }
                              if (task.files.length > 0) {
                                _push4(`<div${ssrRenderAttr("data-nui-tooltip", `${task.files.length} file${task.files.length > 1 ? "s" : ""} uploaded`)} data-nui-tooltip-position="start"${_scopeId3}>`);
                                _push4(ssrRenderComponent(_component_Icon, {
                                  name: "lucide:file",
                                  class: "h-4 w-4"
                                }, null, _parent4, _scopeId3));
                                _push4(`</div>`);
                              } else {
                                _push4(`<!---->`);
                              }
                              if (task.comments.length > 0) {
                                _push4(`<div${ssrRenderAttr("data-nui-tooltip", `${task.comments.length} comment${task.comments.length > 1 ? "s" : ""}`)} data-nui-tooltip-position="start"${_scopeId3}>`);
                                _push4(ssrRenderComponent(_component_Icon, {
                                  name: "lucide:message-circle",
                                  class: "h-4 w-4"
                                }, null, _parent4, _scopeId3));
                                _push4(`</div>`);
                              } else {
                                _push4(`<!---->`);
                              }
                              _push4(`</div></div></div>`);
                            } else {
                              return [
                                createVNode("div", {
                                  class: "border-muted-200 dark:border-muted-700 dark:bg-muted-800 group relative flex cursor-pointer flex-col items-start rounded-lg border bg-white/90 p-4 hover:bg-white",
                                  draggable: "true",
                                  onClick: () => openTaskPanel(task.id, unref(data)?.project.tasks)
                                }, [
                                  createVNode("div", { class: "relative mb-2" }, [
                                    createVNode("div", { class: "mb-2 flex w-full items-center justify-between gap-2" }, [
                                      createVNode(_component_BaseTag, {
                                        shape: "full",
                                        flavor: "pastel",
                                        color: "muted",
                                        class: "m-0 -ms-1 inline-flex h-6 scale-90 items-center py-0 text-xs font-semibold"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Task #" + toDisplayString(task.id), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_BaseText, {
                                        size: "xs",
                                        class: "text-muted-400"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(task.created), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    createVNode(_component_BaseHeading, {
                                      as: "h4",
                                      size: "sm",
                                      weight: "medium",
                                      class: "line-clamp-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", null, toDisplayString(task.name), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  createVNode("div", { class: "text-muted-500 dark:text-muted-200 mt-2 flex w-full items-center justify-between text-xs font-medium" }, [
                                    createVNode("div", { class: "flex items-center gap-2" }, [
                                      createVNode(_component_BaseAvatar, {
                                        src: task.assignee.src,
                                        size: "xxs",
                                        class: "shrink-0"
                                      }, null, 8, ["src"]),
                                      createVNode(_component_BaseText, {
                                        size: "xs",
                                        class: "text-muted-400"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(task.assignee.tooltip), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    createVNode("div", { class: "text-muted-400 flex items-center gap-3" }, [
                                      task.checklist.length > 0 ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        "data-nui-tooltip": `${task.checklist.length} subtask${task.checklist.length > 1 ? "s" : ""} in checklist`,
                                        "data-nui-tooltip-position": "start"
                                      }, [
                                        createVNode(_component_Icon, {
                                          name: "lucide:check-circle",
                                          class: "h-4 w-4"
                                        })
                                      ], 8, ["data-nui-tooltip"])) : createCommentVNode("", true),
                                      task.files.length > 0 ? (openBlock(), createBlock("div", {
                                        key: 1,
                                        "data-nui-tooltip": `${task.files.length} file${task.files.length > 1 ? "s" : ""} uploaded`,
                                        "data-nui-tooltip-position": "start"
                                      }, [
                                        createVNode(_component_Icon, {
                                          name: "lucide:file",
                                          class: "h-4 w-4"
                                        })
                                      ], 8, ["data-nui-tooltip"])) : createCommentVNode("", true),
                                      task.comments.length > 0 ? (openBlock(), createBlock("div", {
                                        key: 2,
                                        "data-nui-tooltip": `${task.comments.length} comment${task.comments.length > 1 ? "s" : ""}`,
                                        "data-nui-tooltip-position": "start"
                                      }, [
                                        createVNode(_component_Icon, {
                                          name: "lucide:message-circle",
                                          class: "h-4 w-4"
                                        })
                                      ], 8, ["data-nui-tooltip"])) : createCommentVNode("", true)
                                    ])
                                  ])
                                ], 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      });
                      _push3(`<!--]-->`);
                    } else {
                      _push3(`<div${_scopeId2}><div class="text-muted-400 mt-10 flex items-center justify-center"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "ph:kanban-thin",
                        class: "h-12 w-12"
                      }, null, _parent3, _scopeId2));
                      _push3(`</div><div class="mt-2 text-center"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseHeading, {
                        as: "h4",
                        size: "md",
                        weight: "light",
                        class: "mb-1"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<span${_scopeId3}>Nothing to show</span>`);
                          } else {
                            return [
                              createVNode("span", null, "Nothing to show")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_BaseParagraph, {
                        size: "xs",
                        lead: "tight",
                        class: "text-muted-500 dark:text-muted-400 mx-auto max-w-[200px] !font-sans"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<span${_scopeId3}>There are no pending tasks to show in here for now.</span>`);
                          } else {
                            return [
                              createVNode("span", null, "There are no pending tasks to show in here for now.")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`<button class="text-primary-500 dark:text-sunny mx-auto mt-2 flex items-center justify-center gap-1 font-sans text-xs underline-offset-4 hover:underline"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "lucide:plus",
                        class: "h-3 w-3"
                      }, null, _parent3, _scopeId2));
                      _push3(`<span${_scopeId2}>New Task</span></button></div></div>`);
                    }
                  } else {
                    return [
                      column.tasks.length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(column.tasks, (task) => {
                        return openBlock(), createBlock(unref(Draggable), {
                          key: task.id
                        }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: "border-muted-200 dark:border-muted-700 dark:bg-muted-800 group relative flex cursor-pointer flex-col items-start rounded-lg border bg-white/90 p-4 hover:bg-white",
                              draggable: "true",
                              onClick: () => openTaskPanel(task.id, unref(data)?.project.tasks)
                            }, [
                              createVNode("div", { class: "relative mb-2" }, [
                                createVNode("div", { class: "mb-2 flex w-full items-center justify-between gap-2" }, [
                                  createVNode(_component_BaseTag, {
                                    shape: "full",
                                    flavor: "pastel",
                                    color: "muted",
                                    class: "m-0 -ms-1 inline-flex h-6 scale-90 items-center py-0 text-xs font-semibold"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Task #" + toDisplayString(task.id), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_BaseText, {
                                    size: "xs",
                                    class: "text-muted-400"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(task.created), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                createVNode(_component_BaseHeading, {
                                  as: "h4",
                                  size: "sm",
                                  weight: "medium",
                                  class: "line-clamp-2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", null, toDisplayString(task.name), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              createVNode("div", { class: "text-muted-500 dark:text-muted-200 mt-2 flex w-full items-center justify-between text-xs font-medium" }, [
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  createVNode(_component_BaseAvatar, {
                                    src: task.assignee.src,
                                    size: "xxs",
                                    class: "shrink-0"
                                  }, null, 8, ["src"]),
                                  createVNode(_component_BaseText, {
                                    size: "xs",
                                    class: "text-muted-400"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(task.assignee.tooltip), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                createVNode("div", { class: "text-muted-400 flex items-center gap-3" }, [
                                  task.checklist.length > 0 ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    "data-nui-tooltip": `${task.checklist.length} subtask${task.checklist.length > 1 ? "s" : ""} in checklist`,
                                    "data-nui-tooltip-position": "start"
                                  }, [
                                    createVNode(_component_Icon, {
                                      name: "lucide:check-circle",
                                      class: "h-4 w-4"
                                    })
                                  ], 8, ["data-nui-tooltip"])) : createCommentVNode("", true),
                                  task.files.length > 0 ? (openBlock(), createBlock("div", {
                                    key: 1,
                                    "data-nui-tooltip": `${task.files.length} file${task.files.length > 1 ? "s" : ""} uploaded`,
                                    "data-nui-tooltip-position": "start"
                                  }, [
                                    createVNode(_component_Icon, {
                                      name: "lucide:file",
                                      class: "h-4 w-4"
                                    })
                                  ], 8, ["data-nui-tooltip"])) : createCommentVNode("", true),
                                  task.comments.length > 0 ? (openBlock(), createBlock("div", {
                                    key: 2,
                                    "data-nui-tooltip": `${task.comments.length} comment${task.comments.length > 1 ? "s" : ""}`,
                                    "data-nui-tooltip-position": "start"
                                  }, [
                                    createVNode(_component_Icon, {
                                      name: "lucide:message-circle",
                                      class: "h-4 w-4"
                                    })
                                  ], 8, ["data-nui-tooltip"])) : createCommentVNode("", true)
                                ])
                              ])
                            ], 8, ["onClick"])
                          ]),
                          _: 2
                        }, 1024);
                      }), 128)) : (openBlock(), createBlock("div", { key: 1 }, [
                        createVNode("div", { class: "text-muted-400 mt-10 flex items-center justify-center" }, [
                          createVNode(_component_Icon, {
                            name: "ph:kanban-thin",
                            class: "h-12 w-12"
                          })
                        ]),
                        createVNode("div", { class: "mt-2 text-center" }, [
                          createVNode(_component_BaseHeading, {
                            as: "h4",
                            size: "md",
                            weight: "light",
                            class: "mb-1"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, "Nothing to show")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_BaseParagraph, {
                            size: "xs",
                            lead: "tight",
                            class: "text-muted-500 dark:text-muted-400 mx-auto max-w-[200px] !font-sans"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, "There are no pending tasks to show in here for now.")
                            ]),
                            _: 1
                          }),
                          createVNode("button", { class: "text-primary-500 dark:text-sunny mx-auto mt-2 flex items-center justify-center gap-1 font-sans text-xs underline-offset-4 hover:underline" }, [
                            createVNode(_component_Icon, {
                              name: "lucide:plus",
                              class: "h-3 w-3"
                            }),
                            createVNode("span", null, "New Task")
                          ])
                        ])
                      ]))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            });
            _push2(`<!--]--><div class="flex w-72 shrink-0 flex-col"${_scopeId}><div class="flex h-14 shrink-0 items-center px-2"${_scopeId}><span class="block font-sans text-sm font-semibold"${_scopeId}>Customize</span></div><div class="w-full"${_scopeId}><button class="text-muted-500 dark:text-muted-400 hover:text-primary-500 dark:hover:text-sunny border-muted-300 dark:border-muted-600 hover:border-primary-500 dark:hover:border-sunny flex h-12 w-full items-center justify-center gap-x-2 rounded-xl border-2 border-dashed px-6 font-sans transition-colors duration-300 hover:border-solid"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:gear-six-duotone",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-sm"${_scopeId}>Manage columns</span></button></div></div><div class="w-6 shrink-0"${_scopeId}></div></div>`);
          } else {
            return [
              unref(data)?.project !== void 0 ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex h-12 items-center justify-between pe-4 xl:pe-10"
              }, [
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode(_component_BaseAvatar, {
                    src: unref(data)?.project.customer.logo,
                    size: "xs"
                  }, null, 8, ["src"]),
                  createVNode("div", null, [
                    createVNode(_component_BaseParagraph, {
                      size: "xs",
                      class: "text-muted-400"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(data)?.project.customer.name), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseHeading, {
                      as: "h2",
                      size: "sm",
                      weight: "medium"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(data)?.project.name), 1)
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode(_component_BaseAvatarGroup, {
                    avatars: unref(data)?.project.team,
                    size: "xs"
                  }, null, 8, ["avatars"]),
                  createVNode(_component_BaseButtonIcon, {
                    to: `/layouts/projects/details/${unref(slug)}`,
                    shape: "curved",
                    "data-nui-tooltip": "Project details"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:layout-template",
                        class: "h-4 w-4"
                      })
                    ]),
                    _: 1
                  }, 8, ["to"]),
                  createVNode(_component_BaseButtonIcon, {
                    shape: "full",
                    "data-nui-tooltip": "New task"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:plus",
                        class: "h-4 w-4"
                      })
                    ]),
                    _: 1
                  })
                ])
              ])) : createCommentVNode("", true),
              createVNode("div", { class: "flex h-[calc(100vh_-_133px)] grow space-x-6 overflow-auto pt-2" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(board), (column) => {
                  return openBlock(), createBlock("div", {
                    key: column.title,
                    class: "flex h-full w-72 shrink-0 flex-col"
                  }, [
                    createVNode("div", { class: "flex h-14 shrink-0 items-center px-2" }, [
                      createVNode("span", { class: "block font-sans text-sm font-semibold" }, toDisplayString(column.title), 1),
                      createVNode("span", { class: "text-primary-500 dark:text-sunny ms-2 flex h-5 w-5 items-center justify-center text-sm font-semibold" }, toDisplayString(column.tasks.length), 1),
                      createVNode("button", { class: "text-primary-500 dark:text-sunny hover:bg-primary-500/20 dark:hover:bg-sunny/20 ms-auto flex h-6 w-6 items-center justify-center rounded-full transition-colors duration-300" }, [
                        createVNode(_component_Icon, {
                          name: "lucide:plus",
                          class: "h-4 w-4"
                        })
                      ])
                    ]),
                    createVNode("div", { class: "nui-slimscroll overflow-auto pb-10 pe-2" }, [
                      createVNode(unref(Container), {
                        tag: "div",
                        class: "flex flex-col gap-y-4",
                        orientation: "vertical",
                        "group-name": column.title,
                        "drag-class": "transform rotate-2 transform-gpu",
                        "drop-class": "opacity-40",
                        "drop-placeholder": {
                          className: "mt-4 border-muted-200 border-dashed dark:border-muted-700 dark:bg-muted-800 group relative flex cursor-pointer flex-col items-start rounded-lg border bg-white/90 p-4 hover:bg-white opacity-60 mb-4"
                        },
                        onDrop: (dropResult) => onDrop(column, dropResult)
                      }, {
                        default: withCtx(() => [
                          column.tasks.length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(column.tasks, (task) => {
                            return openBlock(), createBlock(unref(Draggable), {
                              key: task.id
                            }, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: "border-muted-200 dark:border-muted-700 dark:bg-muted-800 group relative flex cursor-pointer flex-col items-start rounded-lg border bg-white/90 p-4 hover:bg-white",
                                  draggable: "true",
                                  onClick: () => openTaskPanel(task.id, unref(data)?.project.tasks)
                                }, [
                                  createVNode("div", { class: "relative mb-2" }, [
                                    createVNode("div", { class: "mb-2 flex w-full items-center justify-between gap-2" }, [
                                      createVNode(_component_BaseTag, {
                                        shape: "full",
                                        flavor: "pastel",
                                        color: "muted",
                                        class: "m-0 -ms-1 inline-flex h-6 scale-90 items-center py-0 text-xs font-semibold"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Task #" + toDisplayString(task.id), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_BaseText, {
                                        size: "xs",
                                        class: "text-muted-400"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(task.created), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    createVNode(_component_BaseHeading, {
                                      as: "h4",
                                      size: "sm",
                                      weight: "medium",
                                      class: "line-clamp-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", null, toDisplayString(task.name), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  createVNode("div", { class: "text-muted-500 dark:text-muted-200 mt-2 flex w-full items-center justify-between text-xs font-medium" }, [
                                    createVNode("div", { class: "flex items-center gap-2" }, [
                                      createVNode(_component_BaseAvatar, {
                                        src: task.assignee.src,
                                        size: "xxs",
                                        class: "shrink-0"
                                      }, null, 8, ["src"]),
                                      createVNode(_component_BaseText, {
                                        size: "xs",
                                        class: "text-muted-400"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(task.assignee.tooltip), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    createVNode("div", { class: "text-muted-400 flex items-center gap-3" }, [
                                      task.checklist.length > 0 ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        "data-nui-tooltip": `${task.checklist.length} subtask${task.checklist.length > 1 ? "s" : ""} in checklist`,
                                        "data-nui-tooltip-position": "start"
                                      }, [
                                        createVNode(_component_Icon, {
                                          name: "lucide:check-circle",
                                          class: "h-4 w-4"
                                        })
                                      ], 8, ["data-nui-tooltip"])) : createCommentVNode("", true),
                                      task.files.length > 0 ? (openBlock(), createBlock("div", {
                                        key: 1,
                                        "data-nui-tooltip": `${task.files.length} file${task.files.length > 1 ? "s" : ""} uploaded`,
                                        "data-nui-tooltip-position": "start"
                                      }, [
                                        createVNode(_component_Icon, {
                                          name: "lucide:file",
                                          class: "h-4 w-4"
                                        })
                                      ], 8, ["data-nui-tooltip"])) : createCommentVNode("", true),
                                      task.comments.length > 0 ? (openBlock(), createBlock("div", {
                                        key: 2,
                                        "data-nui-tooltip": `${task.comments.length} comment${task.comments.length > 1 ? "s" : ""}`,
                                        "data-nui-tooltip-position": "start"
                                      }, [
                                        createVNode(_component_Icon, {
                                          name: "lucide:message-circle",
                                          class: "h-4 w-4"
                                        })
                                      ], 8, ["data-nui-tooltip"])) : createCommentVNode("", true)
                                    ])
                                  ])
                                ], 8, ["onClick"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128)) : (openBlock(), createBlock("div", { key: 1 }, [
                            createVNode("div", { class: "text-muted-400 mt-10 flex items-center justify-center" }, [
                              createVNode(_component_Icon, {
                                name: "ph:kanban-thin",
                                class: "h-12 w-12"
                              })
                            ]),
                            createVNode("div", { class: "mt-2 text-center" }, [
                              createVNode(_component_BaseHeading, {
                                as: "h4",
                                size: "md",
                                weight: "light",
                                class: "mb-1"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, "Nothing to show")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BaseParagraph, {
                                size: "xs",
                                lead: "tight",
                                class: "text-muted-500 dark:text-muted-400 mx-auto max-w-[200px] !font-sans"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, "There are no pending tasks to show in here for now.")
                                ]),
                                _: 1
                              }),
                              createVNode("button", { class: "text-primary-500 dark:text-sunny mx-auto mt-2 flex items-center justify-center gap-1 font-sans text-xs underline-offset-4 hover:underline" }, [
                                createVNode(_component_Icon, {
                                  name: "lucide:plus",
                                  class: "h-3 w-3"
                                }),
                                createVNode("span", null, "New Task")
                              ])
                            ])
                          ]))
                        ]),
                        _: 2
                      }, 1032, ["group-name", "onDrop"])
                    ])
                  ]);
                }), 128)),
                createVNode("div", { class: "flex w-72 shrink-0 flex-col" }, [
                  createVNode("div", { class: "flex h-14 shrink-0 items-center px-2" }, [
                    createVNode("span", { class: "block font-sans text-sm font-semibold" }, "Customize")
                  ]),
                  createVNode("div", { class: "w-full" }, [
                    createVNode("button", { class: "text-muted-500 dark:text-muted-400 hover:text-primary-500 dark:hover:text-sunny border-muted-300 dark:border-muted-600 hover:border-primary-500 dark:hover:border-sunny flex h-12 w-full items-center justify-center gap-x-2 rounded-xl border-2 border-dashed px-6 font-sans transition-colors duration-300 hover:border-solid" }, [
                      createVNode(_component_Icon, {
                        name: "ph:gear-six-duotone",
                        class: "h-4 w-4"
                      }),
                      createVNode("span", { class: "text-sm" }, "Manage columns")
                    ])
                  ])
                ]),
                createVNode("div", { class: "w-6 shrink-0" })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/projects/board/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-c5889421.mjs.map
