import { v as useNow, w as useEventListener, x as onKeyStroke, e as __nuxt_component_0$5, f as __nuxt_component_2, y as _sfc_main$d, g as _sfc_main$z, _ as _sfc_main$p, z as _sfc_main$F, j as _sfc_main$C, b as _sfc_main$o } from '../server.mjs';
import __nuxt_component_0 from './TairoLogo-688db51d.mjs';
import _sfc_main$3 from './DemoAccountMenu-d8e8a032.mjs';
import { _ as _sfc_main$4 } from './BaseButtonIcon-6150946c.mjs';
import { _ as _sfc_main$b } from './BaseAvatarGroup-6e7b4ecf.mjs';
import { useSSRContext, defineComponent, ref, reactive, computed, resolveDirective, mergeProps, withCtx, createVNode, unref, withKeys, openBlock, createBlock, createCommentVNode, Fragment, renderList, withModifiers, isRef, createTextVNode, toValue, watch, nextTick } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrGetDirectiveProps } from 'vue/server-renderer';
import { isPast, endOfDay, format, isToday, isSameDay, differenceInMinutes, setMinutes, setHours, startOfWeek, startOfDay, endOfWeek, addDays, addMinutes, roundToNearestMinutes, addHours, isBefore, setYear, setMonth, setDay } from 'date-fns';
import { _ as _sfc_main$5 } from './BaseSelect-50588309.mjs';
import { _ as __nuxt_component_0$1 } from './BaseButtonGroup-dedb8878.mjs';
import { _ as _sfc_main$6 } from './BaseButtonAction-57c21d00.mjs';
import { _ as _sfc_main$7 } from './BaseSwitchThin-362b589d.mjs';
import { _ as _sfc_main$8 } from './BaseListbox-69fbc324.mjs';
import { _ as _sfc_main$9, a as _sfc_main$1$1 } from './BaseAutocomplete-8d21f0d1.mjs';
import { _ as _sfc_main$a } from './BaseCheckboxHeadless-bbfe0dde.mjs';
import { c as capitalize } from './format-strings-4e27d502.mjs';
import { _ as _imports_0, a as _imports_1 } from './placeholder-projects-dark-3f488a7c.mjs';
import { Calendar } from 'v-calendar';
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
import './2-942b7bb5.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import './IconChevronDown-af6375e6.mjs';
import './BaseIconBox-642fe941.mjs';

function dateToTop(settings, date, currentDay = /* @__PURE__ */ new Date()) {
  if (!isSameDay(currentDay, date)) {
    return settings.dayOffsetY;
  }
  const hour = Math.max(date.getHours() - (settings.hourOpen || 0), 0);
  const minutes = date.getMinutes();
  return hour * settings.hourHeight + settings.hourHeight / 60 * minutes + settings.dayOffsetY;
}
function topToDate(settings, top = 0, currentDay = /* @__PURE__ */ new Date()) {
  const hour = Math.floor((top - settings.dayOffsetY) / settings.hourHeight) + (settings.hourOpen || 0);
  const minutes = Math.floor(
    (top - settings.dayOffsetY) % settings.hourHeight / (settings.hourHeight / 60)
  );
  if (hour < (settings.hourOpen || 0) || minutes < 0) {
    return null;
  }
  const date = setMinutes(setHours(currentDay, hour), minutes);
  date.setMilliseconds(0);
  date.setSeconds(0);
  return date;
}
function minutesToHeight(settings, minutes) {
  return settings.hourHeight / 60 * minutes;
}
function datesToHeight(settings, start, end, currentDay = /* @__PURE__ */ new Date()) {
  if (isSameDay(start, end)) {
    return Math.min(
      minutesToHeight(settings, differenceInMinutes(end, start)),
      minutesToHeight(
        settings,
        differenceInMinutes(
          setMinutes(setHours(end, settings.hourClose || 0), 0),
          start
        )
      )
    );
  }
  if (isSameDay(currentDay, start)) {
    return minutesToHeight(
      settings,
      differenceInMinutes(
        setMinutes(setHours(start, settings.hourClose || 0), 0),
        start
      )
    );
  }
  if (isSameDay(currentDay, end)) {
    return minutesToHeight(
      settings,
      differenceInMinutes(
        end,
        setMinutes(setHours(end, settings.hourOpen || 0), 0)
      )
    );
  }
  console.error("Unexpected dates");
  return 0;
}
function useNowMarker(container, settings) {
  const now = useNow({
    interval: 6e4
    // 1 minute
  });
  const showNow = computed(() => {
    const hour = now.value.getHours();
    return hour > (settings.hourOpen || 0) && hour < (settings.hourClose || 0);
  });
  return {
    now,
    showNow
  };
}
function useViewPan(container, canPan = true) {
  const isViewPaning = ref(false);
  const isViewMoved = ref(false);
  const viewPanStart = ref(0);
  useEventListener(container, "mousedown", (e) => {
    if (!container.value) {
      return;
    }
    if (!toValue(canPan) || isViewPaning.value) {
      return;
    }
    isViewPaning.value = true;
    isViewMoved.value = false;
    viewPanStart.value = container.value.scrollTop + e.clientY;
  });
  useEventListener(container, "mousemove", (e) => {
    if (!isViewPaning.value) {
      return;
    }
    if (!isViewMoved.value) {
      isViewMoved.value = true;
    }
    container.value?.scrollTo({
      top: viewPanStart.value - e.clientY
    });
  });
  useEventListener(container, "mouseup", (e) => {
    if (!isViewPaning.value) {
      return;
    }
    isViewPaning.value = false;
    isViewMoved.value = false;
    viewPanStart.value = 0;
  });
  useEventListener(container, "mouseleave", (e) => {
    if (!isViewPaning.value) {
      return;
    }
    isViewPaning.value = false;
    isViewMoved.value = false;
    viewPanStart.value = 0;
  });
  return {
    isViewPaning,
    isViewMoved
    // viewPanStart,
  };
}
function useCreateEvent(settings, calendarEvents, eventFactory, canCreate = true, onCreate = () => {
}) {
  onKeyStroke("Escape", clearNew);
  const hasNew = computed(() => {
    return toValue(calendarEvents).some((attr) => attr.key === "new");
  });
  function clearNew() {
    const calendarEventsValue = toValue(calendarEvents);
    const idx = calendarEventsValue.findIndex((attr) => attr.key === "new");
    if (idx !== -1) {
      calendarEventsValue.splice(idx, 1);
    }
  }
  async function onCalendarClick(event, currentDay = /* @__PURE__ */ new Date()) {
    if (!toValue(canCreate)) {
      return;
    }
    clearNew();
    const y = event.offsetY;
    const dateClick = topToDate(settings, y, currentDay);
    if (!dateClick) {
      return;
    }
    const date = roundToNearestMinutes(addMinutes(dateClick, -5), {
      nearestTo: settings.hourPrecision
    });
    const newEventData = await eventFactory(date);
    const newEvent = {
      key: "new",
      customData: {
        id: "new",
        ...newEventData
      },
      dates: [newEventData.startDate, newEventData.endDate]
    };
    await onCreate(newEvent);
  }
  return {
    hasNew,
    clearNew,
    onCalendarClick
  };
}
function useDragEvent(settings, calendarEvents, onDragEnd = () => {
}) {
  const isHeightDragging = ref(false);
  function onHeightDragStart(attr, e) {
    if (isHeightDragging.value) {
      return;
    }
    isHeightDragging.value = true;
    document.documentElement.classList.add("cursor-n-resize");
    const onPointerMove = (e2) => {
      const targetDay = e2.target?.dataset?.day;
      if (!targetDay) {
        return;
      }
      const y = e2.offsetY;
      const dateClick = topToDate(settings, y, attr.customData.endDate);
      if (!dateClick) {
        return;
      }
      const date = roundToNearestMinutes(dateClick, {
        nearestTo: settings.hourPrecision
      });
      if (!attr.customData.endDate) {
        return;
      }
      if (date === attr.customData.endDate) {
        return;
      }
      if (isBefore(date, attr.customData.startDate)) {
        return;
      }
      attr.customData.endDate = date;
    };
    const onPointerUp = async (e2) => {
      document.documentElement.removeEventListener("pointerup", onPointerUp);
      document.documentElement.removeEventListener("pointermove", onPointerMove);
      document.documentElement.classList.remove("cursor-n-resize");
      await onDragEnd(attr);
      setTimeout(() => {
        isHeightDragging.value = false;
      }, 100);
    };
    document.documentElement.addEventListener("pointerup", onPointerUp, false);
    document.documentElement.addEventListener(
      "pointermove",
      onPointerMove,
      false
    );
  }
  const isPositionDragging = ref(false);
  function onPositionDragStart(attr, e) {
    if (isPositionDragging.value) {
      return;
    }
    isPositionDragging.value = true;
    document.documentElement.classList.add("cursor-grabbing");
    const onPointerMove = (e2) => {
      const targetDay = e2.target?.dataset?.day;
      if (!targetDay) {
        return;
      }
      const targetDayDate = new Date(targetDay);
      const y = e2.offsetY - minutesToHeight(settings, 5);
      const dateClick = topToDate(settings, y, attr.customData.startDate);
      if (!dateClick) {
        return;
      }
      const date = roundToNearestMinutes(dateClick, {
        nearestTo: settings.hourPrecision
      });
      if (!attr.customData.startDate) {
        return;
      }
      if (date !== attr.customData.startDate) {
        const diff = differenceInMinutes(
          attr.customData.endDate,
          attr.customData.startDate
        );
        const start = setYear(
          setMonth(
            setDay(date, targetDayDate.getDay()),
            targetDayDate.getMonth()
          ),
          targetDayDate.getFullYear()
        );
        const end = addMinutes(start, diff);
        const calendarEventsValue = toValue(calendarEvents);
        const idx = calendarEventsValue.findIndex(
          (item) => item.customData.id === attr.customData.id
        );
        calendarEventsValue[idx] = {
          ...calendarEventsValue[idx],
          customData: {
            ...calendarEventsValue[idx].customData,
            startDate: start,
            endDate: end
          },
          dates: [start, end]
        };
      }
    };
    const onPointerUp = async (e2) => {
      document.documentElement.removeEventListener("pointerup", onPointerUp);
      document.documentElement.removeEventListener("pointermove", onPointerMove);
      document.documentElement.classList.remove("cursor-grabbing");
      const calendarEventsValue = toValue(calendarEvents);
      const idx = calendarEventsValue.findIndex(
        (item) => item.customData.id === attr.customData.id
      );
      if (idx !== -1) {
        await onDragEnd(attr);
      }
      setTimeout(() => {
        isPositionDragging.value = false;
      }, 100);
    };
    document.documentElement.addEventListener("pointerup", onPointerUp, false);
    document.documentElement.addEventListener(
      "pointermove",
      onPointerMove,
      false
    );
  }
  return {
    isHeightDragging,
    onHeightDragStart,
    isPositionDragging,
    onPositionDragStart
  };
}
function randomDate(start, end) {
  return roundToNearestMinutes(
    new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    ),
    { nearestTo: 15 }
  );
}
function useCalendarEvents(props) {
  const calendarEvents = ref([]);
  const pendingEvents = ref([]);
  async function refresh() {
    pendingEvents.value = [
      {
        id: "1",
        duration: 15,
        title: "Sprint planning",
        category: "team",
        features: {
          conversation: true,
          record: true,
          drive: true
        },
        participants: []
      },
      {
        id: "2",
        duration: 45,
        title: "Weekly meeting",
        category: "internal",
        features: {
          record: true,
          conversation: true
        },
        participants: [
          {
            photo: "/img/avatars/16.svg",
            name: "Hermann Mayer"
          },
          {
            photo: "/img/avatars/10.svg",
            name: "Kendra Wilson"
          }
        ]
      },
      {
        id: "3",
        duration: 90,
        title: "Feedback client",
        category: "customer",
        features: {
          record: true,
          external: true
        },
        participants: [
          {
            photo: "/img/avatars/5.svg",
            name: "Clarissa Miller"
          },
          {
            photo: "/img/avatars/8.svg",
            name: "Eddy Bricks"
          },
          {
            photo: "/img/avatars/3.svg",
            name: "Clark Smith"
          }
        ]
      },
      {
        id: "4",
        duration: 30,
        title: "Pair programming",
        category: "team",
        features: {
          conversation: true,
          drive: true
        },
        participants: []
      },
      {
        id: "5",
        duration: 60,
        title: "Code Review",
        category: "personal",
        features: {
          conversation: true
        },
        participants: []
      }
    ];
    for (let i = 0; i < 7; i++) {
      const date = addDays(toValue(props.fromDate), i);
      const events = [];
      const count = Math.floor(Math.random() * 3);
      for (let j = 0; j < count; j++) {
        const event = pendingEvents.value[Math.floor(Math.random() * pendingEvents.value.length)];
        const startDate = randomDate(addHours(date, 8), addHours(date, 18));
        const endDate = addMinutes(startDate, event.duration);
        events.push({
          key: `${i}-${j}`,
          customData: {
            ...event,
            id: `${i}-${j}`,
            startDate,
            endDate: addMinutes(startDate, event.duration)
          },
          dates: [startDate, endDate]
        });
      }
      calendarEvents.value.push(...events);
    }
  }
  watch([() => toValue(props.fromDate), () => toValue(props.toDate)], refresh, {
    immediate: true
  });
  return {
    calendarEvents,
    pendingEvents,
    refresh
  };
}
function useDragEventPending(settings, calendarEvents, onDragEnd = () => {
}) {
  const isPendingEventDragging = ref(false);
  const pendingEventDraggingId = ref("");
  function onPendingEventDragStart({ payload }) {
    if (isPendingEventDragging.value || !payload?.id) {
      return;
    }
    isPendingEventDragging.value = true;
    pendingEventDraggingId.value = payload.id;
    const ghostEvent = {
      key: payload.id,
      customData: payload,
      dates: [payload.startDate, payload.endDate]
    };
    const onPointerMove = (e) => {
      const targetDay = e.target?.dataset?.day;
      if (!targetDay) {
        clearPendingEventDragging();
        return;
      }
      const y = e.offsetY - minutesToHeight(settings, 5);
      const dateClick = topToDate(settings, y, new Date(targetDay));
      if (!dateClick) {
        return;
      }
      const date = roundToNearestMinutes(dateClick, {
        nearestTo: settings.hourPrecision
      });
      if (date !== ghostEvent.customData.startDate) {
        const start = date;
        const end = addMinutes(start, ghostEvent.customData.duration);
        const calendarEventsValue = toValue(calendarEvents);
        const idx = calendarEventsValue.findIndex(
          (item) => item.customData.id === ghostEvent.customData.id
        );
        if (idx === -1) {
          calendarEventsValue.push({
            ...ghostEvent,
            customData: {
              ...ghostEvent.customData,
              startDate: start,
              endDate: end
            },
            dates: [start, end]
          });
          return;
        }
        calendarEventsValue[idx] = {
          ...calendarEventsValue[idx],
          customData: {
            ...calendarEventsValue[idx].customData,
            startDate: start,
            endDate: end
          },
          dates: [start, end]
        };
      }
    };
    const onPointerUp = async (e) => {
      document.documentElement.removeEventListener("pointerup", onPointerUp);
      document.documentElement.removeEventListener("pointermove", onPointerMove);
      const calendarEventsValue = toValue(calendarEvents);
      const idx = calendarEventsValue.findIndex(
        (item) => item.customData.id === ghostEvent.customData.id
      );
      if (idx !== -1) {
        const event = calendarEventsValue[idx];
        calendarEventsValue.splice(idx, 1);
        await onDragEnd(event);
      }
      setTimeout(() => {
        isPendingEventDragging.value = false;
      }, 100);
    };
    document.documentElement.addEventListener("pointerup", onPointerUp, false);
    document.documentElement.addEventListener(
      "pointermove",
      onPointerMove,
      false
    );
  }
  function clearPendingEventDragging() {
    const calendarEventsValue = toValue(calendarEvents);
    const idx = calendarEventsValue.findIndex(
      (attr) => attr.customData.id === pendingEventDraggingId.value
    );
    if (idx !== -1) {
      calendarEventsValue.splice(idx, 1);
    }
  }
  return {
    isPendingEventDragging,
    pendingEventDraggingId,
    onPendingEventDragStart,
    clearPendingEventDragging
  };
}
function useDateRange(settings) {
  const fromDate = ref(
    startOfWeek(startOfDay(/* @__PURE__ */ new Date()), {
      weekStartsOn: settings.weekStartsOn
    })
  );
  const toDate = ref(
    endOfWeek(endOfDay(/* @__PURE__ */ new Date()), {
      weekStartsOn: settings.weekStartsOn
    })
  );
  function onPageChange(pages) {
    if (!pages[0]?.viewDays?.length) {
      return;
    }
    fromDate.value = pages[0].viewDays[0].startDate;
    toDate.value = pages[0].viewDays.at(-1).endDate;
  }
  const weekdays = computed(() => {
    const start = fromDate.value;
    const length = settings.hideWeekends ? 5 : 7;
    const dates = [];
    let i = 0;
    while (dates.length < length) {
      const date = addDays(start, i);
      const day = date.getDay();
      ++i;
      if (settings.hideWeekends && (day === 0 || day === 6)) {
        continue;
      }
      dates.push(date);
    }
    return dates;
  });
  return {
    fromDate,
    toDate,
    weekdays,
    onPageChange
  };
}
const categoryTheme = {
  none: {
    name: "Uncategorized",
    color: "bg-muted-400 dark:bg-muted-600",
    outline: "outline-muted-500/30"
  },
  customer: {
    name: "Customers",
    color: "bg-lime-500",
    outline: "outline-lime-500/30"
  },
  internal: {
    name: "Internal",
    color: "bg-sky-500",
    outline: "outline-sky-500/30"
  },
  team: {
    name: "Team",
    color: "bg-purple-500",
    outline: "outline-purple-500/30"
  },
  personal: {
    name: "Personal",
    color: "bg-rose-500",
    outline: "outline-rose-500/30"
  }
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DemoCalendarEvent",
  __ssrInlineRender: true,
  props: {
    event: {}
  },
  emits: ["positiondrag"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      const _component_BaseAvatarGroup = _sfc_main$b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex gap-[1px] p-1 h-full" }, _attrs))}><div role="button" class="dnd-drag-handler m-[1px] cursor-grab text-sm hover:bg-muted-100 dark:hover:bg-muted-900 rounded-full h-6 w-6 shrink-0 flex items-center justify-center transition-colors duration-75">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:dots-six-vertical",
        class: "text-muted-500 dark:text-muted-200 h-4 w-4",
        onPointerdown: (e) => emits("positiondrag", e)
      }, null, _parent));
      _push(`</div><div class="[&amp;&gt;:not(:first-of-type):before]:mx-1 pe-1 w-full"><div class="flex items-top justify-between w-full"><div><div class="text-muted-800 dark:text-muted-200 line-clamp-2"${ssrRenderAttr("title", _ctx.event.customData.title)}>${ssrInterpolate(_ctx.event.customData.title || "New event")}</div><div class="text-muted-400">${ssrInterpolate(unref(format)(_ctx.event.customData.startDate, "HH:mm"))} to ${ssrInterpolate(unref(format)(_ctx.event.customData.endDate, "HH:mm"))}</div></div>`);
      if (_ctx.event.customData.participants) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_BaseAvatarGroup, {
          limit: 1,
          size: "xxs",
          avatars: _ctx.event.customData.participants.map((participant) => ({
            src: participant.photo,
            "data-nui-tooltip": participant.name,
            "data-nui-tooltip-position": "start"
          }))
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="pt-2 mt-1 border-t border-muted-200 dark:border-muted-700 flex justify-between items-center"><div class="flex flex-wrap gap-2">`);
      if (_ctx.event.customData.features?.record) {
        _push(`<span class="text-muted-400" data-nui-tooltip="Recorded">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:monitor-play-duotone",
          class: "w-4 h-4"
        }, null, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.event.customData.features?.drive) {
        _push(`<span class="text-muted-400" data-nui-tooltip="Document joined">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:note-duotone",
          class: "w-4 h-4"
        }, null, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.event.customData.features?.external) {
        _push(`<span class="text-muted-400" data-nui-tooltip="External Users">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:lock-open-duotone",
          class: "w-4 h-4"
        }, null, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.event.customData.features?.conversation) {
        _push(`<span class="text-muted-400" data-nui-tooltip="Has comments">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:chats-circle-duotone",
          class: "w-4 h-4"
        }, null, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><div class="${ssrRenderClass([[unref(categoryTheme)[_ctx.event.customData.category].color], "w-2 h-2 rounded-full"])}"${ssrRenderAttr("data-nui-tooltip", unref(categoryTheme)[_ctx.event.customData.category].name)} data-nui-tooltip-position="start"></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoCalendarEvent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DemoCalendarEventPending",
  __ssrInlineRender: true,
  props: {
    event: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      const _component_BaseAvatarGroup = _sfc_main$b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex gap-[1px] h-full dark:bg-muted-800 border-muted-200 dark:border-muted-700 group rounded-lg border bg-white p-4 mb-4 transition duration-150 ease-out" }, _attrs))}><div role="button" class="dnd-drag-handler m-[1px] cursor-grab text-sm hover:bg-muted-100 dark:hover:bg-muted-900 rounded-full h-6 w-6 shrink-0 flex items-center justify-center transition-colors duration-75">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:dots-six-vertical",
        class: "text-muted-500 dark:text-muted-200 h-4 w-4"
      }, null, _parent));
      _push(`</div><div class="[&amp;&gt;:not(:first-of-type):before]:mx-1 pe-1 w-full"><div class="flex items-top justify-between w-full"><div><div class="text-muted-800 dark:text-muted-200 font-sans text-sm line-clamp-2"${ssrRenderAttr("title", _ctx.event.title)}>${ssrInterpolate(_ctx.event.title)}</div><div class="text-muted-400 text-xs flex gap-1 items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:clock",
        class: "text-muted-400 h-4 w-4"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(_ctx.event.duration)} min</span></div></div>`);
      if (_ctx.event.participants) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_BaseAvatarGroup, {
          limit: 2,
          size: "xxs",
          avatars: _ctx.event.participants.map((participant) => ({
            src: participant.photo,
            "data-nui-tooltip": participant.name,
            "data-nui-tooltip-position": "start"
          }))
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="pt-2 mt-1 border-t border-muted-200 dark:border-muted-700 flex justify-between items-center"><div class="flex flex-wrap gap-2">`);
      if (_ctx.event.features?.record) {
        _push(`<span class="text-muted-400" data-nui-tooltip="Recorded">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:monitor-play-duotone",
          class: "w-4 h-4"
        }, null, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.event.features?.drive) {
        _push(`<span class="text-muted-400" data-nui-tooltip="Document joined">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:note-duotone",
          class: "w-4 h-4"
        }, null, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.event.features?.external) {
        _push(`<span class="text-muted-400" data-nui-tooltip="External Users">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:lock-open-duotone",
          class: "w-4 h-4"
        }, null, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.event.features?.conversation) {
        _push(`<span class="text-muted-400" data-nui-tooltip="Has comments">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:chats-circle-duotone",
          class: "w-4 h-4"
        }, null, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><div class="${ssrRenderClass([[unref(categoryTheme)[_ctx.event.category].color], "w-2 h-2 rounded-full"])}"${ssrRenderAttr("data-nui-tooltip", unref(categoryTheme)[_ctx.event.category].name)} data-nui-tooltip-position="start"></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoCalendarEventPending.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "calendar",
  __ssrInlineRender: true,
  setup(__props) {
    const scrollCalendarRef = ref();
    const showSettings = ref(false);
    const settings = reactive({
      hideWeekends: false,
      hourOpen: 8,
      hourClose: 18,
      hourPrecision: 15,
      hourHeight: 160,
      dayOffsetY: 0,
      weekStartsOn: 0
    });
    function getChildPayload(index) {
      return pendingEvents.value?.[index - 1];
    }
    const { fromDate, toDate, weekdays, onPageChange } = useDateRange(settings);
    const { calendarEvents, pendingEvents } = useCalendarEvents({
      fromDate,
      toDate
    });
    const {
      isHeightDragging,
      isPositionDragging,
      onHeightDragStart,
      onPositionDragStart
    } = useDragEvent(
      settings,
      calendarEvents,
      // on drag end
      async (event) => {
      }
    );
    const { onCalendarClick, clearNew, hasNew } = useCreateEvent(
      settings,
      calendarEvents,
      // new event template
      (date) => ({
        startDate: date,
        endDate: addMinutes(date, 30),
        duration: 30,
        category: "none",
        title: "",
        participants: []
      }),
      // can create new event
      () => {
        return !(isHeightDragging.value || isPositionDragging.value || isViewPaning.value);
      },
      // on create
      async (event) => {
        calendarEvents.value.push(event);
        onSelectEvent(event.customData);
      }
    );
    const selectedEventId = ref();
    const selectedEvent = computed(() => {
      return calendarEvents.value.find(
        (event) => event?.customData?.id === selectedEventId.value
      )?.customData || pendingEvents.value.find((event) => event.id === selectedEventId.value);
    });
    function onSelectEvent(event) {
      if (event.id !== "new" && hasNew.value) {
        clearNew();
      }
      selectedEventId.value = event.id;
    }
    const { now, showNow } = useNowMarker(scrollCalendarRef, settings);
    const { isViewPaning, isViewMoved } = useViewPan(scrollCalendarRef, () => {
      return !(isHeightDragging.value || isPositionDragging.value);
    });
    const { isPendingEventDragging, onPendingEventDragStart } = useDragEventPending(
      settings,
      calendarEvents,
      // on drag end
      (event) => {
        onSelectEvent(event.customData);
        calendarEvents.value.push(event);
        const idx = pendingEvents.value.findIndex(
          (item) => item.id === event.customData.id
        );
        if (idx === -1) {
          return;
        }
        pendingEvents.value.splice(idx, 1);
      }
    );
    const isDragging = computed(
      () => isPendingEventDragging.value || isPositionDragging.value || isHeightDragging.value
    );
    function scrollCalendarToTop(top = 0, behavior = "smooth") {
      if (!scrollCalendarRef.value) {
        return;
      }
      scrollCalendarRef.value.scrollTo({
        top,
        behavior
      });
    }
    function updateHeight(height = 160) {
      if (!scrollCalendarRef.value) {
        return;
      }
      const top = scrollCalendarRef.value.scrollTop;
      const initialDate = topToDate(settings, top);
      settings.hourHeight = height;
      if (!initialDate) {
        return;
      }
      nextTick(() => {
        scrollCalendarToTop(dateToTop(settings, initialDate), "instant");
      });
    }
    const selectedEventFeatures = computed({
      get() {
        return selectedEvent.value?.features ? Object.keys(selectedEvent.value?.features) : [];
      },
      set(values) {
        if (!selectedEvent.value) {
          return;
        }
        selectedEvent.value.features = values.reduce(
          (acc, value) => {
            acc[value] = true;
            return acc;
          },
          {}
        );
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_TairoLogo = __nuxt_component_0;
      const _component_Icon = __nuxt_component_2;
      const _component_DemoAccountMenu = _sfc_main$3;
      const _component_BaseButtonIcon = _sfc_main$4;
      const _component_DemoCalendarEvent = _sfc_main$2;
      const _component_TairoSidebarTools = _sfc_main$d;
      const _component_BaseInput = _sfc_main$z;
      const _component_BaseSelect = _sfc_main$5;
      const _component_BaseButtonGroup = __nuxt_component_0$1;
      const _component_BaseButtonAction = _sfc_main$6;
      const _component_BaseSwitchThin = _sfc_main$7;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseButtonClose = _sfc_main$F;
      const _component_BaseListbox = _sfc_main$8;
      const _component_BaseAutocomplete = _sfc_main$9;
      const _component_BaseAutocompleteItem = _sfc_main$1$1;
      const _component_BaseCheckboxHeadless = _sfc_main$a;
      const _component_BaseCard = _sfc_main$C;
      const _component_DemoCalendarEventPending = _sfc_main$1;
      const _component_BaseParagraph = _sfc_main$o;
      const _directive_focus = resolveDirective("focus");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white dark:bg-muted-900 flex h-screen w-full overflow-x-auto lg:overflow-hidden select-none" }, _attrs))}><div class="fixed lg:static top-0 start-0 z-50 h-full border-muted-200 dark:border-muted-800/40 dark:bg-muted-800 flex w-20 flex-col items-center border-r bg-white">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboards",
        class: "flex h-16 w-16 items-center justify-center"
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
      _push(`<nav class="relative flex h-full flex-col">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboards/inbox",
        class: "relative flex h-16 w-16 items-center justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex h-12 w-12 items-center justify-center rounded-xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:tray-duotone",
              class: "h-5 w-5"
            }, null, _parent2, _scopeId));
            _push2(`<span class="absolute -end-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-pink-600 font-sans text-xs text-white"${_scopeId}> 3 </span></div>`);
          } else {
            return [
              createVNode("div", { class: "bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex h-12 w-12 items-center justify-center rounded-xl" }, [
                createVNode(_component_Icon, {
                  name: "ph:tray-duotone",
                  class: "h-5 w-5"
                }),
                createVNode("span", { class: "absolute -end-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-pink-600 font-sans text-xs text-white" }, " 3 ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        href: "#",
        class: "relative flex h-16 w-16 items-center justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex h-12 w-12 items-center justify-center rounded-xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:bookmark-simple-duotone",
              class: "h-5 w-5"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex h-12 w-12 items-center justify-center rounded-xl" }, [
                createVNode(_component_Icon, {
                  name: "ph:bookmark-simple-duotone",
                  class: "h-5 w-5"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboards/calendar",
        class: "relative flex h-16 w-16 items-center justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-primary-500/10 text-primary-500 relative flex h-12 w-12 items-center justify-center rounded-xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:calendar-blank-duotone",
              class: "h-5 w-5"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "bg-primary-500/10 text-primary-500 relative flex h-12 w-12 items-center justify-center rounded-xl" }, [
                createVNode(_component_Icon, {
                  name: "ph:calendar-blank-duotone",
                  class: "h-5 w-5"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboards/inbox",
        class: "relative flex h-16 w-16 items-center justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex h-12 w-12 items-center justify-center rounded-xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:folder-duotone",
              class: "h-5 w-5"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex h-12 w-12 items-center justify-center rounded-xl" }, [
                createVNode(_component_Icon, {
                  name: "ph:folder-duotone",
                  class: "h-5 w-5"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboards/inbox",
        class: "relative flex h-16 w-16 items-center justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex h-12 w-12 items-center justify-center rounded-xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:trash-duotone",
              class: "h-5 w-5"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex h-12 w-12 items-center justify-center rounded-xl" }, [
                createVNode(_component_Icon, {
                  name: "ph:trash-duotone",
                  class: "h-5 w-5"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboards/inbox",
        class: "relative flex h-16 w-16 items-center justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex h-12 w-12 items-center justify-center rounded-xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:gear-six-duotone",
              class: "h-5 w-5"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex h-12 w-12 items-center justify-center rounded-xl" }, [
                createVNode(_component_Icon, {
                  name: "ph:gear-six-duotone",
                  class: "h-5 w-5"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-auto flex flex-col items-center"><a href="#" class="relative flex h-16 w-16 items-center justify-center" title="Back"><div class="bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex h-12 w-12 items-center justify-center rounded-xl">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:arrow-left",
        class: "h-5 w-5"
      }, null, _parent));
      _push(`</div></a><button type="button" class="relative flex h-16 w-16 items-center justify-center"><div class="bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex h-12 w-12 items-center justify-center rounded-xl">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:plus",
        class: "h-5 w-5"
      }, null, _parent));
      _push(`</div></button><div class="relative flex h-16 w-16 items-center justify-center">`);
      _push(ssrRenderComponent(_component_DemoAccountMenu, null, null, _parent));
      _push(`</div></div></nav></div><div class="flex ms-20 lg:ms-0 w-[1500px] lg:w-full border-t border-muted-200 dark:border-muted-800"><div class="nui-slimscroll grow h-[100vh] w-[1500px] overflow-x-auto lg:overflow-x-hidden lg:w-auto space-y-14 overflow-y-auto relative"><div class="sticky top-0 flex z-20 bg-white dark:bg-muted-900"><div class="w-10 border-b border-muted-200 dark:border-muted-800"></div><div class="${ssrRenderClass([[unref(settings).hideWeekends ? "grid-cols-5" : "grid-cols-7"], "grid grow border-b border-muted-200 dark:border-muted-800"])}"><!--[-->`);
      ssrRenderList(unref(weekdays), (day) => {
        _push(`<span class="${ssrRenderClass([[unref(isPast)(unref(endOfDay)(day)) ? "opacity-50" : ""], "day-label pointer-events-none text-muted-900 dark:text-muted-400 flex items-center gap-2 text-sm h-[52px] p-3"])}"><span>${ssrInterpolate(("capitalize" in _ctx ? _ctx.capitalize : unref(capitalize))(unref(format)(day, "EEEE d")))}</span>`);
        if (unref(isToday)(day)) {
          _push(`<span class="text-primary-500 mb-[2px]">`);
          _push(ssrRenderComponent(_component_Icon, { name: "ph:calendar-blank-duotone" }, null, _parent));
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span>`);
      });
      _push(`<!--]--></div></div><div class="flex !mt-0"><div class="w-10"><div class="h-16"></div><div><div class="grow pointer-events-none border-t border-muted-200 dark:border-muted-800"><!--[-->`);
      ssrRenderList(unref(settings).hourClose - unref(settings).hourOpen, (i) => {
        _push(`<div class="border-b border-muted-200 dark:border-muted-800 relative" style="${ssrRenderStyle({
          height: `${unref(settings).hourHeight}px`
        })}"><span class="text-xs absolute -top-2 left-1 bg-white dark:bg-muted-900 px-2 text-muted-900 dark:text-muted-300">${ssrInterpolate(i + (unref(settings).hourOpen - 1))}h </span></div>`);
      });
      _push(`<!--]--></div></div></div><div class="grow">`);
      _push(ssrRenderComponent(unref(Calendar), {
        class: ["custom-calendar", {
          "hide-weekend": unref(settings).hideWeekends
        }],
        view: "weekly",
        expanded: "",
        "trim-weeks": "",
        "disable-page-swipe": "",
        "title-position": "left",
        "first-day-of-week": unref(settings).weekStartsOn !== void 0 ? unref(settings).weekStartsOn + 1 : 1,
        attributes: unref(calendarEvents),
        "onUpdate:pages": unref(onPageChange)
      }, {
        "header-left-button": withCtx(({ movePrev }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseButtonIcon, {
              shape: "full",
              small: "",
              onClick: movePrev,
              onKeydown: movePrev
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:chevron-left",
                    class: "!top-auto !h-4 !w-4"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:chevron-left",
                      class: "!top-auto !h-4 !w-4"
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseButtonIcon, {
                shape: "full",
                small: "",
                onClick: movePrev,
                onKeydown: withKeys(movePrev, ["space", "enter"])
              }, {
                default: withCtx(() => [
                  createVNode(_component_Icon, {
                    name: "lucide:chevron-left",
                    class: "!top-auto !h-4 !w-4"
                  })
                ]),
                _: 2
              }, 1032, ["onClick", "onKeydown"])
            ];
          }
        }),
        "header-right-button": withCtx(({ moveNext }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseButtonIcon, {
              shape: "full",
              small: "",
              onClick: moveNext,
              onKeydown: moveNext
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:chevron-right",
                    class: "!top-auto !h-4 !w-4"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:chevron-right",
                      class: "!top-auto !h-4 !w-4"
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseButtonIcon, {
                shape: "full",
                small: "",
                onClick: moveNext,
                onKeydown: withKeys(moveNext, ["space", "enter"])
              }, {
                default: withCtx(() => [
                  createVNode(_component_Icon, {
                    name: "lucide:chevron-right",
                    class: "!top-auto !h-4 !w-4"
                  })
                ]),
                _: 2
              }, 1032, ["onClick", "onKeydown"])
            ];
          }
        }),
        "day-content": withCtx(({
          day,
          attributes
        }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${ssrRenderAttr("data-day", day.date)} class="${ssrRenderClass([{
              "pointer-events-none": unref(isViewMoved)
            }, "group z-10 flex h-full flex-col p-0 relative"])}"${_scopeId}>`);
            if (day.isToday && unref(showNow)) {
              _push2(`<div class="absolute z-50 pointer-events-none bg-red-500 h-[1px] inset-x-0 before:content-[&#39;&#39;] before:bg-red-600 before:w-2 before:h-2 before:block before:rounded-full before:-translate-x-full before:translate-y-[-3px]" style="${ssrRenderStyle({
                top: `${unref(dateToTop)(unref(settings), unref(now), day.date)}px`
              })}"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="grow pointer-events-none border-t border-muted-200 dark:border-muted-800"${_scopeId}><!--[-->`);
            ssrRenderList(unref(settings).hourClose - unref(settings)?.hourOpen, (i) => {
              _push2(`<div class="border-b border-dashed border-muted-200 dark:border-muted-800 relative" style="${ssrRenderStyle({
                height: `${unref(settings).hourHeight}px`
              })}"${_scopeId}><!--[-->`);
              ssrRenderList(4, (j) => {
                _push2(`<div class="border-b relative z-50 border-muted-400 dark:border-muted-700 w-2" style="${ssrRenderStyle({
                  height: `${unref(settings).hourHeight / 4}px`
                })}"${_scopeId}><!--[-->`);
                ssrRenderList(2, (k) => {
                  _push2(`<div class="border-b relative z-50 border-muted-300 dark:border-muted-800 w-1" style="${ssrRenderStyle({
                    height: `${unref(settings).hourHeight / 12}px`
                  })}"${_scopeId}></div>`);
                });
                _push2(`<!--]--></div>`);
              });
              _push2(`<!--]--></div>`);
            });
            _push2(`<!--]--></div><!--[-->`);
            ssrRenderList(attributes, (event) => {
              _push2(`<!--[--><div class="${ssrRenderClass([{
                "outline-dashed": event.customData.id === "new" && event.customData.id === unref(selectedEventId),
                outline: event.customData.id !== "new" && event.customData.id === unref(selectedEventId),
                [unref(categoryTheme)[event.customData.category].outline]: event.customData.id === unref(selectedEventId)
              }, "absolute z-50 outline-2 outline-offset-2 start-4 end-4 rounded-md pointer-events-none"])}" style="${ssrRenderStyle({
                top: `${unref(dateToTop)(
                  unref(settings),
                  event.customData.startDate,
                  day.date
                )}px`,
                height: `${unref(datesToHeight)(
                  unref(settings),
                  event.customData.startDate,
                  event.customData.endDate,
                  day.date
                ) + 4}px`
              })}"${_scopeId}></div><div class="${ssrRenderClass([{
                "opacity-50": unref(isPast)(unref(endOfDay)(day.date)),
                "pointer-events-none": unref(isDragging)
              }, "absolute z-10 bg-muted-50 dark:bg-muted-800 overflow-hidden start-4 end-4 text-xs rounded-t-md border border-b-0 border-muted-200 dark:border-muted-700 cursor-pointer"])}" style="${ssrRenderStyle({
                top: `${unref(dateToTop)(
                  unref(settings),
                  event.customData.startDate,
                  day.date
                )}px`,
                height: `${unref(datesToHeight)(
                  unref(settings),
                  event.customData.startDate,
                  event.customData.endDate,
                  day.date
                )}px`
              })}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_DemoCalendarEvent, {
                event,
                onPositiondrag: (e) => unref(onPositionDragStart)(event, e)
              }, null, _parent2, _scopeId));
              _push2(`</div><div style="${ssrRenderStyle({
                top: `${unref(dateToTop)(
                  unref(settings),
                  event.customData.startDate,
                  day.date
                ) + unref(datesToHeight)(
                  unref(settings),
                  event.customData.startDate,
                  event.customData.endDate,
                  day.date
                )}px`
              })}" class="${ssrRenderClass([{
                "pointer-events-none": unref(isDragging)
              }, "absolute start-4 end-4 dark:border-muted-800 dark:bg-muted-700/50 dark:hover:bg-muted-700/80 left-0 bottom-0 h-[4px] bg-slate-50 hover:bg-slate-200 cursor-n-resize rounded-b-md border border-t-0"])}"${_scopeId}></div><!--]-->`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", {
                class: ["group z-10 flex h-full flex-col p-0 relative", {
                  "pointer-events-none": unref(isViewMoved)
                }],
                "data-day": day.date,
                onDblclick: (event) => unref(onCalendarClick)(event, day.date)
              }, [
                day.isToday && unref(showNow) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "absolute z-50 pointer-events-none bg-red-500 h-[1px] inset-x-0 before:content-[''] before:bg-red-600 before:w-2 before:h-2 before:block before:rounded-full before:-translate-x-full before:translate-y-[-3px]",
                  style: {
                    top: `${unref(dateToTop)(unref(settings), unref(now), day.date)}px`
                  }
                }, null, 4)) : createCommentVNode("", true),
                createVNode("div", { class: "grow pointer-events-none border-t border-muted-200 dark:border-muted-800" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(settings).hourClose - unref(settings)?.hourOpen, (i) => {
                    return openBlock(), createBlock("div", {
                      key: i,
                      class: "border-b border-dashed border-muted-200 dark:border-muted-800 relative",
                      style: {
                        height: `${unref(settings).hourHeight}px`
                      }
                    }, [
                      (openBlock(), createBlock(Fragment, null, renderList(4, (j) => {
                        return createVNode("div", {
                          key: j,
                          class: "border-b relative z-50 border-muted-400 dark:border-muted-700 w-2",
                          style: {
                            height: `${unref(settings).hourHeight / 4}px`
                          }
                        }, [
                          (openBlock(), createBlock(Fragment, null, renderList(2, (k) => {
                            return createVNode("div", {
                              key: k,
                              class: "border-b relative z-50 border-muted-300 dark:border-muted-800 w-1",
                              style: {
                                height: `${unref(settings).hourHeight / 12}px`
                              }
                            }, null, 4);
                          }), 64))
                        ], 4);
                      }), 64))
                    ], 4);
                  }), 128))
                ]),
                (openBlock(true), createBlock(Fragment, null, renderList(attributes, (event) => {
                  return openBlock(), createBlock(Fragment, {
                    key: event.key
                  }, [
                    createVNode("div", {
                      class: ["absolute z-50 outline-2 outline-offset-2 start-4 end-4 rounded-md pointer-events-none", {
                        "outline-dashed": event.customData.id === "new" && event.customData.id === unref(selectedEventId),
                        outline: event.customData.id !== "new" && event.customData.id === unref(selectedEventId),
                        [unref(categoryTheme)[event.customData.category].outline]: event.customData.id === unref(selectedEventId)
                      }],
                      style: {
                        top: `${unref(dateToTop)(
                          unref(settings),
                          event.customData.startDate,
                          day.date
                        )}px`,
                        height: `${unref(datesToHeight)(
                          unref(settings),
                          event.customData.startDate,
                          event.customData.endDate,
                          day.date
                        ) + 4}px`
                      }
                    }, null, 6),
                    createVNode("div", {
                      class: ["absolute z-10 bg-muted-50 dark:bg-muted-800 overflow-hidden start-4 end-4 text-xs rounded-t-md border border-b-0 border-muted-200 dark:border-muted-700 cursor-pointer", {
                        "opacity-50": unref(isPast)(unref(endOfDay)(day.date)),
                        "pointer-events-none": unref(isDragging)
                      }],
                      style: {
                        top: `${unref(dateToTop)(
                          unref(settings),
                          event.customData.startDate,
                          day.date
                        )}px`,
                        height: `${unref(datesToHeight)(
                          unref(settings),
                          event.customData.startDate,
                          event.customData.endDate,
                          day.date
                        )}px`
                      },
                      onClick: withModifiers(() => onSelectEvent(event.customData), ["stop"])
                    }, [
                      createVNode(_component_DemoCalendarEvent, {
                        event,
                        onPositiondrag: (e) => unref(onPositionDragStart)(event, e)
                      }, null, 8, ["event", "onPositiondrag"])
                    ], 14, ["onClick"]),
                    createVNode("div", {
                      class: ["absolute start-4 end-4 dark:border-muted-800 dark:bg-muted-700/50 dark:hover:bg-muted-700/80 left-0 bottom-0 h-[4px] bg-slate-50 hover:bg-slate-200 cursor-n-resize rounded-b-md border border-t-0", {
                        "pointer-events-none": unref(isDragging)
                      }],
                      style: {
                        top: `${unref(dateToTop)(
                          unref(settings),
                          event.customData.startDate,
                          day.date
                        ) + unref(datesToHeight)(
                          unref(settings),
                          event.customData.startDate,
                          event.customData.endDate,
                          day.date
                        )}px`
                      },
                      onPointerdown: (e) => unref(onHeightDragStart)(event, e)
                    }, null, 46, ["onPointerdown"])
                  ], 64);
                }), 128))
              ], 42, ["data-day", "onDblclick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="w-72 shrink-0 hidden sm:block border-s border-muted-200 dark:border-muted-800"><div class="relative z-20 p-2 flex items-center justify-between"><div><button type="button" class="border-muted-200 hover:ring-muted-200 dark:hover:ring-muted-700 dark:border-muted-800 dark:bg-muted-800 dark:ring-offset-muted-900 flex h-9 w-9 items-center justify-center rounded-full border bg-white ring-1 ring-transparent transition-all duration-300 hover:ring-offset-4">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:gear-six-duotone",
        class: "text-muted-400 h-5 w-5"
      }, null, _parent));
      _push(`</button></div>`);
      _push(ssrRenderComponent(_component_TairoSidebarTools, null, null, _parent));
      _push(`</div>`);
      if (unref(showSettings)) {
        _push(`<div class="px-6 py-4 bg-white dark:bg-muted-900 border-t border-b border-muted-300 dark:border-muted-800"><div class="grid grid-cols-3 gap-x-2 gap-y-4">`);
        _push(ssrRenderComponent(_component_BaseInput, {
          modelValue: unref(settings).hourOpen,
          "onUpdate:modelValue": ($event) => unref(settings).hourOpen = $event,
          modelModifiers: { number: true },
          type: "number",
          min: "0",
          max: unref(settings).hourClose - 1,
          label: "Open from",
          size: "sm"
        }, null, _parent));
        _push(ssrRenderComponent(_component_BaseInput, {
          modelValue: unref(settings).hourClose,
          "onUpdate:modelValue": ($event) => unref(settings).hourClose = $event,
          modelModifiers: { number: true },
          type: "number",
          min: unref(settings).hourOpen + 1,
          max: "24",
          label: "Close at",
          size: "sm"
        }, null, _parent));
        _push(ssrRenderComponent(_component_BaseInput, {
          modelValue: unref(settings).hourPrecision,
          "onUpdate:modelValue": ($event) => unref(settings).hourPrecision = $event,
          modelModifiers: { number: true },
          type: "number",
          min: "5",
          step: "5",
          max: "30",
          label: "Precision",
          size: "sm"
        }, null, _parent));
        _push(`</div><div class="grid grid-cols-3 gap-x-2 gap-y-4 items-end">`);
        _push(ssrRenderComponent(_component_BaseSelect, {
          modelValue: unref(settings).weekStartsOn,
          "onUpdate:modelValue": ($event) => unref(settings).weekStartsOn = $event,
          modelModifiers: { number: true },
          label: "Week starts on",
          size: "sm",
          classes: {
            wrapper: "col-span-2"
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<option${ssrRenderAttr("value", 0)}${_scopeId}>Sunday</option><option${ssrRenderAttr("value", 1)}${_scopeId}>Monday</option><option${ssrRenderAttr("value", 2)}${_scopeId}>Tuesday</option><option${ssrRenderAttr("value", 3)}${_scopeId}>Wednesday</option><option${ssrRenderAttr("value", 4)}${_scopeId}>Thursday</option><option${ssrRenderAttr("value", 5)}${_scopeId}>Friday</option><option${ssrRenderAttr("value", 6)}${_scopeId}>Saturday</option>`);
            } else {
              return [
                createVNode("option", { value: 0 }, "Sunday"),
                createVNode("option", { value: 1 }, "Monday"),
                createVNode("option", { value: 2 }, "Tuesday"),
                createVNode("option", { value: 3 }, "Wednesday"),
                createVNode("option", { value: 4 }, "Thursday"),
                createVNode("option", { value: 5 }, "Friday"),
                createVNode("option", { value: 6 }, "Saturday")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseButtonGroup, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseButtonAction, {
                shape: "curved",
                color: unref(settings).hourHeight === 480 ? "muted" : "default",
                onClick: () => updateHeight(480)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, { name: "carbon:maximize" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, { name: "carbon:maximize" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseButtonAction, {
                shape: "curved",
                color: unref(settings).hourHeight === 160 ? "muted" : "default",
                onClick: () => updateHeight()
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, { name: "carbon:minimize" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, { name: "carbon:minimize" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseButtonAction, {
                  shape: "curved",
                  color: unref(settings).hourHeight === 480 ? "muted" : "default",
                  onClick: () => updateHeight(480)
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, { name: "carbon:maximize" })
                  ]),
                  _: 1
                }, 8, ["color", "onClick"]),
                createVNode(_component_BaseButtonAction, {
                  shape: "curved",
                  color: unref(settings).hourHeight === 160 ? "muted" : "default",
                  onClick: () => updateHeight()
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, { name: "carbon:minimize" })
                  ]),
                  _: 1
                }, 8, ["color", "onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="mt-4">`);
        _push(ssrRenderComponent(_component_BaseSwitchThin, {
          modelValue: unref(settings).hideWeekends,
          "onUpdate:modelValue": ($event) => unref(settings).hideWeekends = $event,
          label: "Hide weekends"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(selectedEvent)) {
        _push(`<div class="${ssrRenderClass([{
          "overflow-y-auto overflow-x-hidden": !unref(showSettings),
          "overflow-hidden": unref(showSettings)
        }, "relative p-6 pt-4 nui-slimscroll h-[calc(100vh_-_53px)]"])}">`);
        if (unref(showSettings)) {
          _push(`<div class="absolute inset-0 z-50 cursor-pointer backdrop-blur-[2px]"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_BaseHeading, {
          size: "sm",
          weight: "medium",
          lead: "snug",
          class: "flex justify-between items-center uppercase text-muted-400 dark:text-muted-500 mb-4"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>Event Info</span>`);
              _push2(ssrRenderComponent(_component_BaseButtonClose, {
                color: "default",
                class: "bg-white dark:bg-muted-800",
                onClick: ($event) => selectedEventId.value = void 0
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("span", null, "Event Info"),
                createVNode(_component_BaseButtonClose, {
                  color: "default",
                  class: "bg-white dark:bg-muted-800",
                  onClick: ($event) => selectedEventId.value = void 0
                }, null, 8, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="flex flex-col gap-2">`);
        _push(ssrRenderComponent(_component_BaseInput, mergeProps({
          modelValue: unref(selectedEvent).title,
          "onUpdate:modelValue": ($event) => unref(selectedEvent).title = $event,
          modelModifiers: { trim: true },
          label: "Title"
        }, ssrGetDirectiveProps(_ctx, _directive_focus)), null, _parent));
        _push(ssrRenderComponent(_component_BaseListbox, {
          modelValue: unref(selectedEvent).category,
          "onUpdate:modelValue": ($event) => unref(selectedEvent).category = $event,
          modelModifiers: { prop: true },
          label: "Category",
          properties: {
            value: "value",
            label: "label"
          },
          items: Object.entries(unref(categoryTheme)).map(([key, item]) => ({
            value: key,
            label: item.name
          }))
        }, null, _parent));
        _push(ssrRenderComponent(_component_BaseAutocomplete, {
          modelValue: unref(selectedEvent).participants,
          "onUpdate:modelValue": ($event) => unref(selectedEvent).participants = $event,
          items: [
            {
              photo: "/img/avatars/16.svg",
              name: "Hermann Mayer"
            },
            {
              photo: "/img/avatars/10.svg",
              name: "Kendra Wilson"
            },
            {
              photo: "/img/avatars/5.svg",
              name: "Clarissa Miller"
            },
            {
              photo: "/img/avatars/8.svg",
              name: "Eddy Bricks"
            },
            {
              photo: "/img/avatars/3.svg",
              name: "Clark Smith"
            },
            {
              name: "Clarissa Perez",
              photo: "/img/avatars/19.svg"
            },
            {
              name: "Benedict Kessler",
              photo: "/img/avatars/22.svg"
            },
            {
              name: "Maya Rosselini",
              photo: "/img/avatars/2.svg"
            }
          ],
          "display-value": (item) => item?.name || "",
          dropdown: "",
          multiple: "",
          "filter-items": (query, items) => {
            if (!query || !items) {
              return items ?? [];
            }
            return items.filter((item) => {
              const nameMatches = item?.name?.toLowerCase().includes(query.toLowerCase());
              const textMatches = item?.text?.toLowerCase().includes(query.toLowerCase());
              return nameMatches || textMatches;
            });
          },
          icon: "ph:users-three",
          placeholder: "Search...",
          label: "Assignee",
          clearable: ""
        }, {
          item: withCtx(({ item, active, selected }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseAutocompleteItem, {
                value: {
                  name: item.name,
                  media: item.photo
                },
                active,
                selected
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseAutocompleteItem, {
                  value: {
                    name: item.name,
                    media: item.photo
                  },
                  active,
                  selected
                }, null, 8, ["value", "active", "selected"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="grid pt-4 grid-cols-4 gap-2 relative z-[5]"><div data-nui-tooltip="Record">`);
        _push(ssrRenderComponent(_component_BaseCheckboxHeadless, {
          modelValue: unref(selectedEventFeatures),
          "onUpdate:modelValue": ($event) => isRef(selectedEventFeatures) ? selectedEventFeatures.value = $event : null,
          value: "record",
          name: "features"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseCard, {
                shape: "curved",
                class: "text-muted-300 peer-checked:border-primary-500 peer-checked:text-primary-500 p-4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex flex-col items-center gap-1"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:monitor-play-duotone",
                      class: "w-5 h-5"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex flex-col items-center gap-1" }, [
                        createVNode(_component_Icon, {
                          name: "ph:monitor-play-duotone",
                          class: "w-5 h-5"
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseCard, {
                  shape: "curved",
                  class: "text-muted-300 peer-checked:border-primary-500 peer-checked:text-primary-500 p-4"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex flex-col items-center gap-1" }, [
                      createVNode(_component_Icon, {
                        name: "ph:monitor-play-duotone",
                        class: "w-5 h-5"
                      })
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div data-nui-tooltip="Document included">`);
        _push(ssrRenderComponent(_component_BaseCheckboxHeadless, {
          modelValue: unref(selectedEventFeatures),
          "onUpdate:modelValue": ($event) => isRef(selectedEventFeatures) ? selectedEventFeatures.value = $event : null,
          value: "drive",
          name: "features"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseCard, {
                shape: "curved",
                class: "text-muted-300 peer-checked:border-primary-500 peer-checked:text-primary-500 p-4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex flex-col items-center gap-1"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:note-duotone",
                      class: "w-5 h-5"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex flex-col items-center gap-1" }, [
                        createVNode(_component_Icon, {
                          name: "ph:note-duotone",
                          class: "w-5 h-5"
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseCard, {
                  shape: "curved",
                  class: "text-muted-300 peer-checked:border-primary-500 peer-checked:text-primary-500 p-4"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex flex-col items-center gap-1" }, [
                      createVNode(_component_Icon, {
                        name: "ph:note-duotone",
                        class: "w-5 h-5"
                      })
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div data-nui-tooltip="External Users">`);
        _push(ssrRenderComponent(_component_BaseCheckboxHeadless, {
          modelValue: unref(selectedEventFeatures),
          "onUpdate:modelValue": ($event) => isRef(selectedEventFeatures) ? selectedEventFeatures.value = $event : null,
          value: "external",
          name: "features"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseCard, {
                shape: "curved",
                class: "text-muted-300 peer-checked:border-primary-500 peer-checked:text-primary-500 p-4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex flex-col items-center gap-1"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:lock-open-duotone",
                      class: "w-5 h-5"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex flex-col items-center gap-1" }, [
                        createVNode(_component_Icon, {
                          name: "ph:lock-open-duotone",
                          class: "w-5 h-5"
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseCard, {
                  shape: "curved",
                  class: "text-muted-300 peer-checked:border-primary-500 peer-checked:text-primary-500 p-4"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex flex-col items-center gap-1" }, [
                      createVNode(_component_Icon, {
                        name: "ph:lock-open-duotone",
                        class: "w-5 h-5"
                      })
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div data-nui-tooltip="Comment allowed">`);
        _push(ssrRenderComponent(_component_BaseCheckboxHeadless, {
          modelValue: unref(selectedEventFeatures),
          "onUpdate:modelValue": ($event) => isRef(selectedEventFeatures) ? selectedEventFeatures.value = $event : null,
          value: "conversation",
          name: "features"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseCard, {
                shape: "curved",
                class: "text-muted-300 peer-checked:border-primary-500 peer-checked:text-primary-500 p-4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex flex-col items-center gap-1"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:chats-circle-duotone",
                      class: "w-5 h-5"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex flex-col items-center gap-1" }, [
                        createVNode(_component_Icon, {
                          name: "ph:chats-circle-duotone",
                          class: "w-5 h-5"
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseCard, {
                  shape: "curved",
                  class: "text-muted-300 peer-checked:border-primary-500 peer-checked:text-primary-500 p-4"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex flex-col items-center gap-1" }, [
                      createVNode(_component_Icon, {
                        name: "ph:chats-circle-duotone",
                        class: "w-5 h-5"
                      })
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></div>`);
      } else {
        _push(`<div class="${ssrRenderClass([{
          "overflow-y-auto overflow-x-hidden": !unref(showSettings),
          "overflow-hidden": unref(showSettings)
        }, "relative p-6 nui-slimscroll h-[calc(100vh_-_53px)]"])}">`);
        if (unref(showSettings)) {
          _push(`<div class="absolute inset-0 z-50 cursor-pointer backdrop-blur-[2px]"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(unref(Container), {
          class: "flex flex-col !min-h-[300px]",
          tag: "div",
          orientation: "vertical",
          "group-name": "unscheduled",
          "drag-class": "transform cursor-grabbing drop-shadow rotate-2 transform-gpu",
          "drag-handle-selector": ".dnd-drag-handler",
          "should-accept-drop": () => false,
          "get-child-payload": (idx) => getChildPayload(idx),
          "drop-placeholder": {
            className: "border-muted-200 border-dashed dark:border-muted-800 dark:bg-muted-800 group relative flex cursor-pointer flex-col items-start rounded-lg border bg-white p-4 hover:bg-white"
          },
          onDragStart: (ctx) => {
            unref(clearNew)();
            unref(onPendingEventDragStart)(ctx);
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(pendingEvents)?.length) {
                _push2(`<!--[-->`);
                _push2(ssrRenderComponent(_component_BaseHeading, {
                  size: "sm",
                  weight: "medium",
                  lead: "snug",
                  class: "uppercase text-muted-400 dark:text-muted-500 mb-4"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Pending events `);
                    } else {
                      return [
                        createTextVNode(" Pending events ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`<!--[-->`);
                ssrRenderList(unref(pendingEvents), (pendingEvent) => {
                  _push2(ssrRenderComponent(unref(Draggable), {
                    key: pendingEvent.id
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_component_DemoCalendarEventPending, {
                          event: pendingEvent,
                          role: "button",
                          onClick: () => onSelectEvent(pendingEvent)
                        }, null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_component_DemoCalendarEventPending, {
                            event: pendingEvent,
                            role: "button",
                            onClick: () => onSelectEvent(pendingEvent)
                          }, null, 8, ["event", "onClick"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]--><!--]-->`);
              } else {
                _push2(`<div${_scopeId}><div class="p-4"${_scopeId}><img class="mx-auto block max-w-[200px] dark:hidden"${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId}><img class="mx-auto hidden max-w-[200px] dark:block"${ssrRenderAttr("src", _imports_1)} alt=""${_scopeId}><div class="mt-4 text-center"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseHeading, {
                  as: "h4",
                  size: "lg",
                  weight: "light",
                  class: "mb-1"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span${_scopeId2}>No pending events</span>`);
                    } else {
                      return [
                        createVNode("span", null, "No pending events")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_BaseParagraph, {
                  size: "xs",
                  lead: "tight",
                  class: "text-muted-400 mx-auto max-w-[200px] !font-sans"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span${_scopeId2}>You&#39;ve planned all your events for this week.</span>`);
                    } else {
                      return [
                        createVNode("span", null, "You've planned all your events for this week.")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  href: "#",
                  class: "text-primary-500 nui-focus pointer-events-auto dark:text-sunny mx-auto mt-2 flex items-center justify-center gap-1 font-sans text-xs underline-offset-4 hover:underline"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "lucide:plus",
                        class: "h-3 w-3"
                      }, null, _parent3, _scopeId2));
                      _push3(`<span${_scopeId2}>New event</span>`);
                    } else {
                      return [
                        createVNode(_component_Icon, {
                          name: "lucide:plus",
                          class: "h-3 w-3"
                        }),
                        createVNode("span", null, "New event")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div></div></div>`);
              }
            } else {
              return [
                unref(pendingEvents)?.length ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createVNode(_component_BaseHeading, {
                    size: "sm",
                    weight: "medium",
                    lead: "snug",
                    class: "uppercase text-muted-400 dark:text-muted-500 mb-4"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Pending events ")
                    ]),
                    _: 1
                  }),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(pendingEvents), (pendingEvent) => {
                    return openBlock(), createBlock(unref(Draggable), {
                      key: pendingEvent.id
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoCalendarEventPending, {
                          event: pendingEvent,
                          role: "button",
                          onClick: () => onSelectEvent(pendingEvent)
                        }, null, 8, ["event", "onClick"])
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ], 64)) : (openBlock(), createBlock("div", { key: 1 }, [
                  createVNode("div", { class: "p-4" }, [
                    createVNode("img", {
                      class: "mx-auto block max-w-[200px] dark:hidden",
                      src: _imports_0,
                      alt: ""
                    }),
                    createVNode("img", {
                      class: "mx-auto hidden max-w-[200px] dark:block",
                      src: _imports_1,
                      alt: ""
                    }),
                    createVNode("div", { class: "mt-4 text-center" }, [
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "lg",
                        weight: "light",
                        class: "mb-1"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, "No pending events")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseParagraph, {
                        size: "xs",
                        lead: "tight",
                        class: "text-muted-400 mx-auto max-w-[200px] !font-sans"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, "You've planned all your events for this week.")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        href: "#",
                        class: "text-primary-500 nui-focus pointer-events-auto dark:text-sunny mx-auto mt-2 flex items-center justify-center gap-1 font-sans text-xs underline-offset-4 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "lucide:plus",
                            class: "h-3 w-3"
                          }),
                          createVNode("span", null, "New event")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/calendar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=calendar-bbb68609.mjs.map
