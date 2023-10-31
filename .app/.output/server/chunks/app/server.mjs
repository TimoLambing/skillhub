import { hasInjectionContext, getCurrentInstance, version, ref, watchEffect, watch, inject, shallowRef, toRef as toRef$1, onServerPrefetch, isRef, defineComponent, computed, h, resolveComponent, defineAsyncComponent, readonly, customRef, nextTick, mergeProps, unref, useSSRContext, createVNode, resolveDynamicComponent, withCtx, renderSlot, openBlock, createBlock, createCommentVNode, onUpdated, onUnmounted, Fragment, renderList, createTextVNode, toDisplayString, Suspense, Transition, getCurrentScope, onScopeDispose, withAsyncContext, withModifiers, resolveDirective, withDirectives, provide, shallowReactive, createApp, effectScope, reactive, isReactive, toRaw, onErrorCaptured, isReadonly, toRefs, markRaw, isShallow, vShow, render } from 'vue';
import { h as useRuntimeConfig$1, m as withQuery, n as hasProtocol, p as parseURL, o as isScriptProtocol, j as joinURL, i as createError$1, q as parseQuery, r as klona, t as withBase, v as withLeadingSlash, x as withoutTrailingSlash, y as defu, $ as $fetch$1, z as sanitizeStatusCode, A as withTrailingSlash, B as hash, C as createHooks, D as parse, E as getRequestHeader, F as destr, G as isEqual, H as setCookie, I as getCookie, J as deleteCookie } from '../nitro/node-server.mjs';
import { getActiveHead } from 'unhead';
import { defineHeadPlugin, composableNames } from '@unhead/shared';
import { RouterView, onBeforeRouteLeave, useRoute as useRoute$1, createMemoryHistory, createRouter, START_LOCATION } from 'vue-router';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrGetDynamicModelProps, ssrRenderVNode, ssrRenderSlotInner, ssrRenderSuspense, ssrRenderList, ssrRenderStyle, ssrGetDirectiveProps } from 'vue/server-renderer';
import { Icon as Icon$1 } from '@iconify/vue/dist/offline';
import { loadIcon } from '@iconify/vue';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm, Field } from 'vee-validate';
import { z } from 'zod';
import { TransitionRoot, Dialog, TransitionChild, DialogPanel } from '@headlessui/vue';
import { escapeHtml } from '@vue/shared';
import chroma from 'chroma-js';
import colors from 'tailwindcss/colors.js';
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

function createContext$1(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers$1.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers$1.delete(onLeave);
      }
    }
  };
}
function createNamespace$1(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext$1({ ...defaultOpts, ...opts });
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis$1 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey$2 = "__unctx__";
const defaultNamespace = _globalThis$1[globalKey$2] || (_globalThis$1[globalKey$2] = createNamespace$1());
const getContext = (key, opts = {}) => defaultNamespace.get(key, opts);
const asyncHandlersKey$1 = "__unctx_async_handlers__";
const asyncHandlers$1 = _globalThis$1[asyncHandlersKey$1] || (_globalThis$1[asyncHandlersKey$1] = /* @__PURE__ */ new Set());

const appConfig =  useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;

const nuxtAppCtx = /* @__PURE__ */ getContext("nuxt-app", {
  asyncContext: !!false 
});
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.8.0";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: reactive({
      data: {},
      state: {},
      _errors: {},
      ...{ serverRendered: true }
    }),
    static: {
      data: {}
    },
    runWithContext: (fn) => nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn)),
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    _payloadRevivers: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    async function contextCaller(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    }
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
      nuxtApp.ssrContext._payloadReducers = {};
      nuxtApp.payload.path = nuxtApp.ssrContext.url;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig ;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin) {
  if (plugin.hooks) {
    nuxtApp.hooks.addHooks(plugin.hooks);
  }
  if (typeof plugin === "function") {
    const { provide } = await nuxtApp.runWithContext(() => plugin(nuxtApp)) || {};
    if (provide && typeof provide === "object") {
      for (const key in provide) {
        nuxtApp.provide(key, provide[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins) {
  const parallels = [];
  const errors = [];
  for (const plugin of plugins) {
    if (nuxtApp.ssrContext?.islandContext && plugin.env?.islands === false) {
      continue;
    }
    const promise = applyPlugin(nuxtApp, plugin);
    if (plugin.parallel) {
      parallels.push(promise.catch((e) => errors.push(e)));
    } else {
      await promise;
    }
  }
  await Promise.all(parallels);
  if (errors.length) {
    throw errors[0];
  }
}
/*! @__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function  defineNuxtPlugin(plugin) {
  if (typeof plugin === "function") {
    return plugin;
  }
  delete plugin.name;
  return Object.assign(plugin.setup || (() => {
  }), plugin, { [NuxtPluginIndicator]: true });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
/*! @__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function useNuxtApp() {
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = getCurrentInstance()?.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
/*! @__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function  useRuntimeConfig() {
  return (/* @__PURE__ */ useNuxtApp()).$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
function defineAppConfig(config) {
  return config;
}

version.startsWith("3");

function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref, lastKey = "") {
  if (ref instanceof Promise)
    return ref;
  const root = resolveUnref(ref);
  if (!ref || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}

defineHeadPlugin({
  hooks: {
    "entries:resolve": function(ctx) {
      for (const entry of ctx.entries)
        entry.resolvedInput = resolveUnrefHeadInput(entry.input);
    }
  }
});

const headSymbol = "usehead";

const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey$1 = "__unhead_injection_handler__";
function setHeadInjectionHandler(handler) {
  _global[globalKey$1] = handler;
}
function injectHead() {
  if (globalKey$1 in _global) {
    return _global[globalKey$1]();
  }
  const head = inject(headSymbol);
  if (!head && "production" !== "production")
    console.warn("Unhead is missing Vue context, falling back to shared context. This may have unexpected results.");
  return head || getActiveHead();
}

function useHead(input, options = {}) {
  const head = options.head || injectHead();
  if (head) {
    if (!head.ssr)
      return clientUseHead(head, input, options);
    return head.push(input, options);
  }
}
function clientUseHead(head, input, options = {}) {
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry.patch(e);
  });
  getCurrentInstance();
  return entry;
}

const coreComposableNames = [
  "injectHead"
];
({
  "@unhead/vue": [...coreComposableNames, ...composableNames]
});

const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");

const useRouter = () => {
  return useNuxtApp()?.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
/*! @__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function  defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : withQuery(to.path || "/", to.query || {}) + (to.hash || "");
  if (options?.open) {
    return Promise.resolve();
  }
  const isExternal = options?.external || hasProtocol(toPath, { acceptRelative: true });
  if (isExternal) {
    if (!options?.external) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const protocol = parseURL(toPath).protocol;
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL( useRuntimeConfig().app.baseURL, fullPath);
      async function redirect(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(/"/g, "%22");
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode(options?.redirectCode || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: location2 }
        };
        return response;
      }
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options?.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return options?.replace ? router.replace(to) : router.push(to);
};

const useError = () => toRef$1(useNuxtApp().payload, "error");
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = useNuxtApp();
    const error = useError();
    if (false) ;
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
const clearError = async (options = {}) => {
  const nuxtApp = useNuxtApp();
  const error = useError();
  nuxtApp.callHook("app:error:cleared", options);
  if (options.redirect) {
    await useRouter().replace(options.redirect);
  }
  error.value = null;
};
const isNuxtError = (err) => !!(err && typeof err === "object" && "__nuxt_error" in err);
const createError = (err) => {
  const _err = createError$1(err);
  _err.__nuxt_error = true;
  return _err;
};

const appPageTransition = {"enterActiveClass":"transition-opacity duration-200 ease-out","enterFromClass":"opacity-0","enterToClass":"opacity-100","leaveActiveClass":"transition-opacity duration-75 ease-in","leaveFromClass":"opacity-100","leaveToClass":"opacity-0"};

const appLayoutTransition = false;

const appKeepalive = false;

const nuxtLinkDefaults = {"componentName":"NuxtLink"};

const asyncDataDefaults = {"deep":true};

const fetchDefaults = {};

function useAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  const nuxt = useNuxtApp();
  const getDefault = () => null;
  const getDefaultCachedData = () => nuxt.isHydrating ? nuxt.payload.data[key] : nuxt.static.data[key];
  options.server = options.server ?? true;
  options.default = options.default ?? getDefault;
  options.getCachedData = options.getCachedData ?? getDefaultCachedData;
  options.lazy = options.lazy ?? false;
  options.immediate = options.immediate ?? true;
  options.deep = options.deep ?? asyncDataDefaults.deep;
  const hasCachedData = () => ![null, void 0].includes(options.getCachedData(key));
  if (!nuxt._asyncData[key] || !options.immediate) {
    nuxt.payload._errors[key] ??= null;
    const _ref = options.deep ? ref : shallowRef;
    nuxt._asyncData[key] = {
      data: _ref(options.getCachedData(key) ?? options.default()),
      pending: ref(!hasCachedData()),
      error: toRef$1(nuxt.payload._errors, key),
      status: ref("idle")
    };
  }
  const asyncData = { ...nuxt._asyncData[key] };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      if (opts.dedupe === false) {
        return nuxt._asyncDataPromises[key];
      }
      nuxt._asyncDataPromises[key].cancelled = true;
    }
    if ((opts._initial || nuxt.isHydrating && opts._initial !== false) && hasCachedData()) {
      return Promise.resolve(options.getCachedData(key));
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxt));
        } catch (err) {
          reject(err);
        }
      }
    ).then((_result) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      asyncData.error.value = error;
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = createError(asyncData.error.value);
      }
      delete nuxt._asyncDataPromises[key];
    });
    nuxt._asyncDataPromises[key] = promise;
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxt.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}

const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxt = useNuxtApp();
  const state = toRef$1(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}

function useRequestEvent(nuxtApp = useNuxtApp()) {
  return nuxtApp.ssrContext?.event;
}
function useRequestFetch() {
  const event = useNuxtApp().ssrContext?.event;
  return event?.$fetch || globalThis.$fetch;
}

const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts) || {};
  const cookie = ref(cookies[name] ?? opts.default?.());
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (!isEqual(cookie.value, cookies[name])) {
        writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  {
    return parse(getRequestHeader(useRequestEvent(), "cookie") || "", opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0) {
      return setCookie(event, name, value, opts);
    }
    if (getCookie(event, name) !== void 0) {
      return deleteCookie(event, name, opts);
    }
  }
}

function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext._payloadReducers[name] = reduce;
  }
}

const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
/*! @__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function  defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const resolveTrailingSlashBehavior = (to, resolve) => {
    if (!to || options.trailingSlash !== "append" && options.trailingSlash !== "remove") {
      return to;
    }
    const normalizeTrailingSlash = options.trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
    if (typeof to === "string") {
      return normalizeTrailingSlash(to, true);
    }
    const path = "path" in to ? to.path : resolve(to).path;
    return {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: normalizeTrailingSlash(path, true)
    };
  };
  return /* #__PURE__ */ defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = useRouter();
      const to = computed(() => {
        const path = props.to || props.href || "";
        return resolveTrailingSlashBehavior(path, router.resolve);
      });
      const isExternal = computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || hasProtocol(to.value, { acceptRelative: true });
      });
      const prefetched = ref(false);
      const el = void 0 ;
      const elRef = void 0 ;
      return () => {
        if (!isExternal.value) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            if (prefetched.value) {
              routerLinkProps.class = props.prefetchedClass || options.prefetchedClass;
            }
            routerLinkProps.rel = props.rel;
          }
          return h(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const href = typeof to.value === "object" ? router.resolve(to.value)?.href ?? null : to.value || null;
        const target = props.target || null;
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        const navigate = () => navigateTo(href, { replace: props.replace });
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate,
            get route() {
              if (!href) {
                return void 0;
              }
              const url = parseURL(href);
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                // stub properties for compat with vue-router
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href
              };
            },
            rel,
            target,
            isExternal: isExternal.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { ref: el, href, rel, target }, slots.default?.());
      };
    }
  });
}
const __nuxt_component_0$5 = /* @__PURE__ */ /* #__PURE__ */ defineNuxtLink(nuxtLinkDefaults);

function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!_isPlainObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (_isPlainObject(value) && _isPlainObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function _isPlainObject(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in value) && !(Symbol.iterator in value);
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defuFn = createDefu((object, key, currentValue) => {
  if (object[key] !== void 0 && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});

const cfg0 = defineAppConfig({
  nuxtIcon: {},
  nui: {
    defaultShapes: {}
  },
  tairo: {
    title: "SkillHub",
    sidebar: {
      toolbar: {
        showNavBurger: true,
        tools: [
          {
            component: "DemoThemeToggle",
            props: {
              disableTransitions: true
            }
          },
          {
            component: "DemoToolbarLanguage"
          },
          {
            component: "DemoToolbarNotifications"
          },
          {
            component: "DemoToolbarActivity"
          },
          {
            component: "DemoToolbarAccountMenu"
          }
        ]
      },
      circularMenu: {
        enabled: true,
        tools: [
          {
            component: "DemoThemeToggle",
            props: {
              class: "ms-auto",
              disableTransitions: true,
              inverted: true
            }
          },
          {
            component: "DemoCircularMenuLanguage"
          },
          {
            component: "DemoCircularMenuNotifications"
          },
          {
            component: "DemoCircularMenuActivity"
          }
        ]
      },
      navigation: {
        logo: {
          component: "TairoLogo",
          props: { class: "text-primary-600 h-10" }
        },
        items: [
          {
            title: "Dashboards",
            icon: { name: "ph:sidebar-duotone", class: "w-5 h-5" },
            subsidebar: { component: "DemoSubsidebarDashboards" },
            activePath: "/dashboards"
          },
          {
            title: "Layouts",
            icon: { name: "ph:app-window-duotone", class: "w-5 h-5" },
            subsidebar: { component: "DemoSubsidebarLayouts" },
            activePath: "/layouts"
          },
          {
            title: "Chat",
            icon: { name: "ph:chat-circle-duotone", class: "w-5 h-5" },
            to: "/dashboards/messaging"
          },
          {
            title: "Customize",
            icon: { name: "ph:drop-half-bottom-duotone", class: "w-5 h-5" },
            click: () => {
              const isOpen = useState("switcher-open", () => false);
              isOpen.value = true;
            },
            position: "end"
          },
          {
            title: "Search",
            icon: { name: "ph:magnifying-glass-duotone", class: "w-5 h-5" },
            click: () => {
              const isOpen = useState("search-open", () => false);
              isOpen.value = true;
            },
            position: "end"
          },
          {
            title: "Settings",
            icon: { name: "ph:gear-six-duotone", class: "w-5 h-5" },
            to: "/layouts/profile-settings",
            position: "end"
          },
          {
            title: "My Account",
            component: "DemoAccountMenu",
            position: "end"
          }
        ]
      }
    },
    collapse: {
      toolbar: {
        enabled: true,
        showTitle: true,
        showNavBurger: true,
        tools: [
          {
            component: "DemoThemeToggle"
          },
          {
            component: "DemoToolbarLanguage"
          },
          {
            component: "DemoToolbarNotifications"
          },
          {
            component: "DemoToolbarActivity"
          },
          {
            component: "DemoToolbarAccountMenu"
          }
        ]
      },
      circularMenu: {
        enabled: true,
        tools: [
          {
            component: "DemoThemeToggle",
            props: {
              class: "ms-auto",
              disableTransitions: true,
              inverted: true
            }
          },
          {
            component: "DemoCircularMenuLanguage"
          },
          {
            component: "DemoCircularMenuNotifications"
          },
          {
            component: "DemoCircularMenuActivity"
          }
        ]
      },
      navigation: {
        enabled: true,
        header: {
          component: "DemoCollapseNavigationHeader"
        },
        footer: {
          component: "DemoCollapseNavigationFooter"
        },
        items: [
          {
            name: "Dashboards",
            icon: { name: "ph:sidebar-duotone", class: "w-5 h-5" },
            activePath: "/dashboards",
            children: [
              {
                name: "Personal v1",
                to: "/dashboards",
                icon: { name: "ph:coffee-duotone", class: "w-4 h-4" }
              },
              {
                name: "Personal v2",
                to: "/dashboards/personal-2",
                icon: { name: "ph:chart-pie-slice-duotone", class: "w-4 h-4" }
              },
              {
                name: "Personal v3",
                to: "/dashboards/personal-3",
                icon: { name: "ph:cactus-duotone", class: "w-4 h-4" }
              },
              {
                name: "Analytics",
                to: "/dashboards/analytics",
                icon: { name: "ph:gauge-duotone", class: "w-4 h-4" }
              },
              {
                name: "Stocks",
                to: "/dashboards/stocks",
                icon: { name: "ph:coin-duotone", class: "w-4 h-4" }
              },
              {
                name: "Sales",
                to: "/dashboards/sales",
                icon: { name: "ph:shopping-cart-duotone", class: "w-4 h-4" }
              }
            ]
          },
          {
            name: "Layouts",
            icon: { name: "ph:app-window-duotone", class: "w-5 h-5" },
            activePath: "/layouts",
            children: [
              {
                name: "List view v1",
                to: "/layouts",
                icon: { name: "ph:list-bullets-duotone", class: "w-4 h-4" }
              },
              {
                name: "Flex list v1",
                to: "/layouts/flex-list-1",
                icon: { name: "ph:list-checks-duotone", class: "w-4 h-4" }
              },
              {
                name: "Table list v1",
                to: "/layouts/table-list-1",
                icon: { name: "ph:table-duotone", class: "w-4 h-4" }
              },
              {
                name: "Card grid v1",
                to: "/layouts/card-grid-1",
                icon: { name: "ph:circles-four-duotone", class: "w-4 h-4" }
              }
            ]
          },
          {
            name: "Projects",
            icon: { name: "ph:suitcase-duotone", class: "w-5 h-5" },
            activePath: "/layouts/projects/",
            children: [
              {
                name: "Projects",
                to: "/layouts/projects/project-list-3",
                icon: { name: "ph:leaf-duotone", class: "w-4 h-4" }
              },
              {
                name: "Project Details",
                to: "/layouts/projects/details",
                icon: {
                  name: "ph:note-duotone",
                  class: "w-4 h-4"
                }
              },
              {
                name: "Kanban Board",
                to: "/layouts/projects/board",
                icon: { name: "ph:circles-four-duotone", class: "w-4 h-4" }
              }
            ]
          },
          {
            name: "Auth",
            icon: { name: "ph:lock-duotone", class: "w-5 h-5" },
            activePath: "/layouts/projects/",
            children: [
              {
                name: "Login",
                to: "/auth",
                icon: { name: "ph:fingerprint-duotone", class: "w-4 h-4" }
              },
              {
                name: "Signup",
                to: "/auth/signup-1",
                icon: {
                  name: "ph:plus-circle-duotone",
                  class: "w-4 h-4"
                }
              },
              {
                name: "Recover",
                to: "/auth",
                icon: { name: "ph:lightning-duotone", class: "w-4 h-4" }
              }
            ]
          },
          {
            name: "Widgets",
            icon: { name: "ph:nut-duotone", class: "w-5 h-5" },
            activePath: "/dashboards/widgets",
            children: [
              {
                name: "UI Widgets",
                to: "/dashboards/widgets",
                icon: { name: "ph:square-half-duotone", class: "w-4 h-4" }
              },
              {
                name: "Creative Widgets",
                to: "/dashboards/widgets/creative",
                icon: {
                  name: "ph:square-half-bottom-duotone",
                  class: "w-4 h-4"
                }
              },
              {
                name: "List Widgets",
                to: "/dashboards/widgets/list",
                icon: { name: "ph:square-half-duotone", class: "w-4 h-4" }
              }
            ]
          },
          {
            name: "Divider",
            divider: true
          },
          {
            name: "Charts",
            icon: { name: "ph:chart-pie-slice-duotone", class: "w-5 h-5" },
            to: "/dashboards/charts"
          },
          {
            name: "Wizard",
            icon: { name: "ph:magic-wand-duotone", class: "w-5 h-5" },
            to: "/wizard"
          },
          {
            name: "Messaging",
            icon: { name: "ph:chats-circle-duotone", class: "w-5 h-5" },
            to: "/dashboards/messaging"
          },
          {
            name: "Customize",
            icon: { name: "ph:drop-half-bottom-duotone", class: "w-5 h-5" },
            click: () => {
              const isSwitcherOpen = useState("switcher-open", () => false);
              isSwitcherOpen.value = true;
            },
            position: "end"
          }
        ]
      }
    },
    topnav: {
      navigation: {
        enabled: true,
        logo: {
          component: "TairoLogo",
          props: { class: "text-primary-600 h-10 w-10" }
        },
        header: {
          component: "DemoTopnavWorkspaceDropdown"
        },
        items: [
          {
            name: "Dashboard",
            icon: { name: "ph:gauge-duotone", class: "w-6 h-6" },
            activePath: "/dashboards/sales",
            to: "/dashboards/sales"
          },
          {
            name: "Projects",
            icon: { name: "ph:suitcase-duotone", class: "w-6 h-6" },
            activePath: "/layouts/projects/project-list-3",
            to: "/layouts/projects/project-list-3"
          },
          {
            name: "Freelancers",
            icon: { name: "ph:users-duotone", class: "w-6 h-6" },
            activePath: "/layouts/flex-list-1",
            to: "/layouts/flex-list-1"
          },
          {
            name: "Files",
            icon: { name: "ph:note-duotone", class: "w-6 h-6" },
            activePath: "/layouts/table-list-3",
            to: "/layouts/table-list-3"
          },
          {
            name: "Customers",
            icon: { name: "ph:users-three-duotone", class: "w-6 h-6" },
            activePath: "/layouts/user-grid-3",
            to: "/layouts/user-grid-3"
          },
          {
            name: "Billing",
            icon: { name: "ph:credit-card-duotone", class: "w-6 h-6" },
            activePath: "/layouts/utility-billing",
            to: "/layouts/utility-billing"
          },
          {
            name: "Settings",
            icon: { name: "ph:gear-six-duotone", class: "w-6 h-6" },
            activePath: "/layouts/profile-settings",
            to: "/layouts/profile-settings"
          },
          {
            name: "Status",
            icon: { name: "ph:notification-duotone", class: "w-6 h-6" },
            activePath: "/layouts/utility-status",
            to: "/layouts/utility-status"
          }
        ]
      },
      circularMenu: {
        enabled: true,
        tools: [
          {
            component: "DemoThemeToggle",
            props: {
              class: "ms-auto",
              disableTransitions: true,
              inverted: true
            }
          },
          {
            component: "DemoCircularMenuLanguage"
          },
          {
            component: "DemoCircularMenuNotifications"
          },
          {
            component: "DemoCircularMenuActivity"
          }
        ]
      },
      toolbar: {
        enabled: true,
        showTitle: false,
        tools: [
          {
            component: "DemoThemeToggle",
            props: {
              disableTransitions: true
            }
          },
          {
            component: "DemoToolbarSearch"
          },
          {
            component: "DemoToolbarCustomize"
          },
          {
            component: "DemoToolbarNotifications"
          },
          {
            component: "DemoAccountMenu",
            props: {
              horizontal: true
            }
          }
        ]
      },
      footer: {
        enabled: true,
        logoSeparator: {
          component: "TairoLogo",
          props: { class: "text-primary-500 h-7 w-7" }
        },
        logo: {
          component: "TairoLogoText",
          props: {
            class: "text-muted-300 ltablet:mx-0 mx-auto h-4 transition-all duration-200 lg:mx-0"
          }
        },
        copyright: {
          name: "Css Ninja",
          to: "https://cssninja.io",
          since: "2018"
        },
        links: [
          {
            name: "Demo pages",
            to: "/demo"
          },
          {
            name: "Documentation",
            to: "/documentation"
          },
          {
            name: "Shuriken UI",
            to: "https://github.com/shuriken-ui",
            rel: "noopener",
            target: "_blank"
          },
          {
            name: "Support",
            to: "https://cssninja.io/faq/support",
            rel: "noopener",
            target: "_blank"
          }
        ]
      }
    },
    panels: [
      {
        name: "language",
        position: "right",
        component: "DemoPanelLanguage"
      },
      {
        name: "activity",
        position: "right",
        component: "DemoPanelActivity"
      },
      {
        name: "search",
        position: "left",
        component: "DemoPanelSearch"
      },
      {
        name: "task",
        position: "right",
        component: "DemoPanelTask"
      }
    ],
    error: {
      logo: {
        component: "img",
        props: {
          src: "/img/illustrations/system/404-1.svg",
          class: "relative z-20 w-full max-w-lg mx-auto"
        }
      }
    }
  }
});

const cfg1 = defineAppConfig({
  tairo: {
    sidebar: {
      navigation: {
        items: [
          {
            title: "Documentation",
            icon: { name: "ph:grid-four-duotone", class: "w-5 h-5" },
            subsidebar: { component: "DocSubsidebarDocumentation" },
            activePath: "/documentation"
          }
        ]
      }
    }
  }
});

const cfg2 = defineAppConfig({
  tairo: {
    sidebar: {
      circularMenu: {
        enabled: false,
        tools: []
      },
      toolbar: {
        enabled: true,
        showTitle: true,
        showNavBurger: false,
        tools: []
      },
      navigation: {
        enabled: true,
        startOpen: true,
        logo: {
          component: "TairoLogo",
          props: { class: "text-primary-600 h-10" }
        },
        items: []
      }
    }
  }
});

const cfg3 = defineAppConfig({
  tairo: {
    collapse: {
      navigation: {
        enabled: true,
        header: {
          component: ""
        },
        footer: {
          component: ""
        },
        items: []
      },
      circularMenu: {
        enabled: true,
        tools: []
      },
      toolbar: {
        enabled: true,
        showTitle: false,
        showNavBurger: false,
        tools: []
      }
    }
  }
});

const cfg4 = defineAppConfig({
  tairo: {
    topnav: {
      navigation: {
        enabled: true,
        logo: {
          component: "TairoLogo",
          props: { class: "text-primary-500 h-10 w-10" }
        },
        header: {
          component: void 0
        },
        items: []
      },
      circularMenu: {
        enabled: true,
        tools: []
      },
      toolbar: {
        enabled: true,
        showTitle: false,
        tools: []
      },
      footer: {
        enabled: false,
        logoSeparator: {
          component: "TairoLogo",
          props: { class: "text-primary-500 h-7 w-7" }
        },
        logo: {
          component: "TairoLogoText",
          props: {
            class: "text-muted-300 ltablet:mx-0 mx-auto h-4 transition-all duration-200 lg:mx-0"
          }
        },
        copyright: {
          name: "",
          to: "",
          since: ""
        },
        links: []
      }
    }
  }
});

const cfg5 = defineAppConfig({
  tairo: {
    title: "Tairo",
    error: {
      logo: {
        component: "TairoLogo",
        props: { class: "text-primary-500 mx-auto h-40 p-6" }
      }
    },
    panels: []
  },
  toaster: {
    duration: 6e3,
    dismissible: false,
    theme: {
      maxToasts: 1,
      containerClass: [
        "fixed",
        "inset-0",
        "pointer-events-none",
        "p-4",
        "flex",
        "flex-col-reverse",
        "overflow-hidden",
        "z-[200]",
        "items-center",
        "gap-2",
        "space-y-3"
      ],
      wrapperClass: [
        "pointer-events-auto",
        "focus:outline-none",
        "rounded",
        "outline-slate-300",
        "outline-offset-2",
        "focus:outline",
        "focus:outline-2",
        "focus-within:outline",
        "focus-within:outline-2"
      ],
      transition: {
        enterActiveClass: "transition duration-300 ease-out",
        enterFromClass: "transform translate-y-full opacity-0",
        enterToClass: "transform translate-y-0 opacity-100",
        leaveActiveClass: "transition duration-200 ease-in",
        leaveFromClass: "transform translate-y-0 opacity-100",
        leaveToClass: "transform translate-y-full opacity-0"
      }
    }
  }
});

const cfg6 = defineAppConfig({
  nui: {
    defaultShapes: {
      accordion: "rounded",
      autocompleteItem: "rounded",
      avatar: "full",
      button: "rounded",
      buttonAction: "rounded",
      buttonIcon: "rounded",
      buttonClose: "full",
      card: "rounded",
      dropdown: "rounded",
      iconBox: "rounded",
      input: "rounded",
      message: "curved",
      pagination: "rounded",
      progress: "full",
      prose: "rounded",
      tabSlider: "rounded",
      tag: "rounded"
    }
  }
});

const inlineConfig = {
  "nuxt": {
    "buildId": "6d07de38-50b1-4807-bd50-dbb4a89fdb90"
  }
};

const __appConfig = /* #__PURE__ */ defuFn(cfg0, cfg1, cfg2, cfg3, cfg4, cfg5, cfg6, inlineConfig);

function useAppConfig() {
  const nuxtApp = useNuxtApp();
  if (!nuxtApp._appConfig) {
    nuxtApp._appConfig = klona(__appConfig) ;
  }
  return nuxtApp._appConfig;
}

const unhead_DwjAqG1cgl = /* #__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head ;
    setHeadInjectionHandler(
      // need a fresh instance of the nuxt app to avoid parallel requests interfering with each other
      () => useNuxtApp().vueApp._context.provides.usehead
    );
    nuxtApp.vueApp.use(head);
  }
});

function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
_globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
  const restores = [];
  for (const leaveHandler of asyncHandlers) {
    const restore2 = leaveHandler();
    if (restore2) {
      restores.push(restore2);
    }
  }
  const restore = () => {
    for (const restore2 of restores) {
      restore2();
    }
  };
  let awaitable = function_();
  if (awaitable && typeof awaitable === "object" && "catch" in awaitable) {
    awaitable = awaitable.catch((error) => {
      restore();
      throw error;
    });
  }
  return [awaitable, restore];
}

const __nuxt_page_meta$1L = {
      layout: "empty",
      title: "Login",
      preview: {
        title: "Login 2",
        description: "For authentication and sign in",
        categories: ["layouts", "authentication"],
        src: "/img/screens/auth-login-2.png",
        srcDark: "/img/screens/auth-login-2-dark.png",
        order: 97
      }
    };

const __nuxt_page_meta$1K = {
      layout: "empty",
      title: "Login",
      preview: {
        title: "Login 1",
        description: "For authentication and sign in",
        categories: ["layouts", "authentication"],
        src: "/img/screens/auth-login-1.png",
        srcDark: "/img/screens/auth-login-1-dark.png",
        order: 96
      }
    };

const __nuxt_page_meta$1J = {
      layout: "empty",
      title: "Login",
      preview: {
        title: "Login 3",
        description: "For authentication and sign in",
        categories: ["layouts", "authentication"],
        src: "/img/screens/auth-login-3.png",
        srcDark: "/img/screens/auth-login-3-dark.png",
        order: 98
      }
    };

const __nuxt_page_meta$1I = {
      layout: "empty",
      title: "Login",
      preview: {
        title: "Login 4",
        description: "For authentication and sign in",
        categories: ["layouts", "authentication"],
        src: "/img/screens/auth-login-4.png",
        srcDark: "/img/screens/auth-login-4-dark.png",
        order: 99
      }
    };

const __nuxt_page_meta$1H = {
      layout: "empty",
      title: "Recover Password",
      preview: {
        title: "Recover",
        description: "For password recovery",
        categories: ["layouts", "authentication"],
        src: "/img/screens/auth-recover.png",
        srcDark: "/img/screens/auth-recover-dark.png",
        order: 103
      }
    };

const __nuxt_page_meta$1G = {
      layout: "empty",
      title: "Signup",
      preview: {
        title: "Signup 1",
        description: "For authentication and sign up",
        categories: ["layouts", "authentication"],
        src: "/img/screens/auth-signup-1.png",
        srcDark: "/img/screens/auth-signup-1-dark.png",
        order: 100
      }
    };

const __nuxt_page_meta$1F = {
      layout: "empty",
      title: "Signup",
      preview: {
        title: "Signup 3",
        description: "For authentication and sign up",
        categories: ["layouts", "authentication"],
        src: "/img/screens/auth-signup-3.png",
        srcDark: "/img/screens/auth-signup-3-dark.png",
        order: 102
      }
    };

const __nuxt_page_meta$1E = {
      layout: "empty",
      title: "Signup",
      preview: {
        title: "Signup 2",
        description: "For authentication and sign up",
        categories: ["layouts", "authentication"],
        src: "/img/screens/auth-signup-2.png",
        srcDark: "/img/screens/auth-signup-2-dark.png",
        order: 101
      }
    };

const __nuxt_page_meta$1D = {
      title: "Analytics",
      preview: {
        title: "Analytics dashboard",
        description: "For heavy stats and kpis",
        categories: ["dashboards"],
        src: "/img/screens/dashboards-analytics.png",
        srcDark: "/img/screens/dashboards-analytics-dark.png",
        order: 4
      }
    };

const __nuxt_page_meta$1C = {
      title: "Overview",
      preview: {
        title: "Banking dashboard v1",
        description: "For banking and accounts",
        categories: ["dashboards"],
        src: "/img/screens/dashboards-banking-1.png",
        srcDark: "/img/screens/dashboards-banking-1-dark.png",
        order: 7
      }
    };

const __nuxt_page_meta$1B = {
      title: "Credit Cards",
      preview: {
        title: "Banking dashboard v2",
        description: "For banking and accounts",
        categories: ["dashboards"],
        src: "/img/screens/dashboards-banking-2.png",
        srcDark: "/img/screens/dashboards-banking-2-dark.png",
        order: 8
      }
    };

const __nuxt_page_meta$1A = {
      title: "Cryptocurrency",
      preview: {
        title: "Banking dashboard v3",
        description: "For banking and accounts",
        categories: ["dashboards"],
        src: "/img/screens/dashboards-banking-3.png",
        srcDark: "/img/screens/dashboards-banking-3-dark.png",
        order: 9
      }
    };

const __nuxt_page_meta$1z = {
      title: "Calendar",
      layout: "empty",
      preview: {
        title: "Calendar app",
        description: "For email and messaging apps",
        categories: ["dashboards"],
        src: "/img/screens/dashboard-calendar.png",
        srcDark: "/img/screens/dashboard-calendar-dark.png",
        order: 25
      }
    };

const __nuxt_page_meta$1y = {
      title: "Apex Charts",
      preview: {
        title: "Chart examples",
        description: "For data visualization",
        categories: ["dashboards"],
        src: "/img/screens/dashboards-charts.png",
        srcDark: "/img/screens/dashboards-charts-dark.png",
        order: 26
      }
    };

const __nuxt_page_meta$1x = {
      title: "Company",
      preview: {
        title: "Company dashboard",
        description: "For corporate business",
        categories: ["dashboards"],
        src: "/img/screens/dashboards-company.png",
        srcDark: "/img/screens/dashboards-company-dark.png",
        order: 11
      }
    };

const __nuxt_page_meta$1w = {
      title: "E-Learning",
      preview: {
        title: "Course dashboard",
        description: "For School and Education",
        categories: ["dashboards"],
        src: "/img/screens/dashboards-course.png",
        srcDark: "/img/screens/dashboards-course-dark.png",
        order: 13
      }
    };

const __nuxt_page_meta$1v = {
      title: "Delivery",
      preview: {
        title: "Delivery dashboard",
        description: "For food delivery services",
        categories: ["dashboards"],
        src: "/img/screens/dashboards-delivery.png",
        srcDark: "/img/screens/dashboards-delivery-dark.png",
        order: 22
      }
    };

const __nuxt_page_meta$1u = {
      title: "Ecommerce",
      preview: {
        title: "Ecommerce dashboard",
        description: "For sales and online stores",
        categories: ["dashboards"],
        src: "/img/screens/dashboards-ecommerce.png",
        srcDark: "/img/screens/dashboards-ecommerce-dark.png",
        order: 21
      }
    };

const __nuxt_page_meta$1t = {
      title: "Flights",
      preview: {
        title: "Flights dashboard",
        description: "For travel and booking",
        categories: ["dashboards"],
        src: "/img/screens/dashboards-banking-3.png",
        srcDark: "/img/screens/dashboards-banking-3-dark.png",
        order: 10
      }
    };

const __nuxt_page_meta$1s = {
      title: "Health",
      preview: {
        title: "Health dashboard",
        description: "For health and fitness",
        categories: ["dashboards"],
        src: "/img/screens/dashboards-health.png",
        srcDark: "/img/screens/dashboards-health-dark.png",
        order: 17
      }
    };

const __nuxt_page_meta$1r = {
      title: "Hobbies",
      preview: {
        title: "Hobbies dashboard",
        description: "For hobbies and interests",
        categories: ["dashboards"],
        src: "/img/screens/dashboards-hobbies.png",
        srcDark: "/img/screens/dashboards-hobbies-dark.png",
        order: 16
      }
    };

const __nuxt_page_meta$1q = {
      title: "Human Resources",
      preview: {
        title: "HR dashboard",
        description: "For HR management",
        categories: ["dashboards"],
        src: "/img/screens/dashboards-human-resources.png",
        srcDark: "/img/screens/dashboards-human-resources-dark.png",
        order: 12
      }
    };

const __nuxt_page_meta$1p = {
      title: "Inbox",
      layout: "empty",
      preview: {
        title: "Inbox app",
        description: "For email and messaging apps",
        categories: ["dashboards"],
        src: "/img/screens/dashboards-inbox.png",
        srcDark: "/img/screens/dashboards-inbox-dark.png",
        order: 25
      }
    };

const __nuxt_page_meta$1o = {
      title: "Interviews",
      preview: {
        title: "Personal dashboard v3",
        description: "For personal usage and reports",
        categories: ["dashboards"],
        src: "/img/screens/dashboards-personal-3.png",
        srcDark: "/img/screens/dashboards-personal-3-dark.png",
        order: 3
      }
    };

const __nuxt_page_meta$1n = {
      title: "Activity",
      preview: {
        title: "Personal dashboard v1",
        description: "For personal usage and reports",
        categories: ["dashboards"],
        src: "/img/screens/dashboards-personal-1.png",
        srcDark: "/img/screens/dashboards-personal-1-dark.png",
        order: 1
      }
    };

const __nuxt_page_meta$1m = {
      title: "Influencer",
      preview: {
        title: "Influencer dashboard",
        description: "For social media influencers",
        categories: ["dashboards"],
        src: "/img/screens/dashboards-influencer.png",
        srcDark: "/img/screens/dashboards-influencer-dark.png",
        order: 15
      }
    };

const __nuxt_page_meta$1l = {
      title: "Jobs",
      preview: {
        title: "Jobs dashboard",
        description: "For recruitment and job search",
        categories: ["dashboards"],
        src: "/img/screens/dashboards-jobs.png",
        srcDark: "/img/screens/dashboards-jobs-dark.png",
        order: 14
      }
    };

const __nuxt_page_meta$1k = {
      title: "Map",
      layout: "empty",
      preview: {
        title: "Left map panel",
        description: "For location based apps",
        categories: ["dashboards"],
        src: "/img/screens/dashboards-map-left.png",
        srcDark: "/img/screens/dashboards-map-left-dark.png",
        order: 23
      }
    };

const __nuxt_page_meta$1j = {
      title: "Map",
      layout: "empty",
      preview: {
        title: "Right map panel",
        description: "For location based apps",
        categories: ["dashboards"],
        src: "/img/screens/dashboards-map-right.png",
        srcDark: "/img/screens/dashboards-map-right-dark.png",
        order: 24
      }
    };

const __nuxt_page_meta$1i = {
      title: "Messaging",
      layout: "empty",
      preview: {
        title: "Messaging app",
        description: "For chat and messaging apps",
        categories: ["dashboards"],
        src: "/img/screens/dashboards-messaging.png",
        srcDark: "/img/screens/dashboards-messaging-dark.png",
        order: 26
      }
    };

const __nuxt_page_meta$1h = {
      title: "My Projects",
      preview: {
        title: "Personal dashboard v2",
        description: "For personal usage and reports",
        categories: ["dashboards"],
        src: "/img/screens/dashboards-personal-2.png",
        srcDark: "/img/screens/dashboards-personal-2-dark.png",
        order: 2
      }
    };

const __nuxt_page_meta$1g = {
      title: "Sales",
      preview: {
        title: "Sales dashboard",
        description: "For sales and marketing",
        categories: ["dashboards"],
        src: "/img/screens/dashboards-sales.png",
        srcDark: "/img/screens/dashboards-sales-dark.png",
        order: 6
      }
    };

const __nuxt_page_meta$1f = {
      title: "Soccer",
      preview: {
        title: "Soccer dashboard",
        description: "For soccer & football fans",
        categories: ["dashboards"],
        src: "/img/screens/dashboards-soccer.png",
        srcDark: "/img/screens/dashboards-soccer-dark.png",
        order: 20
      }
    };

const __nuxt_page_meta$1e = {
      title: "Stocks",
      preview: {
        title: "Stocks dashboard",
        description: "For stock market analysis",
        categories: ["dashboards"],
        src: "/img/screens/dashboards-stocks.png",
        srcDark: "/img/screens/dashboards-stocks-dark.png",
        order: 5
      }
    };

const __nuxt_page_meta$1d = {
      title: "Video",
      preview: {
        title: "Video dashboard",
        description: "For video content creators",
        categories: ["dashboards"],
        src: "/img/screens/dashboards-video.png",
        srcDark: "/img/screens/dashboards-video-dark.png",
        order: 19
      }
    };

const __nuxt_page_meta$1c = {
      title: "Creative Widgets",
      preview: {
        title: "Creative Widgets",
        description: "For page compositions",
        categories: ["dashboards", "widgets"],
        src: "/img/screens/dashboards-widgets-creative.png",
        srcDark: "/img/screens/dashboards-widgets-creative-dark.png",
        order: 28
      }
    };

const __nuxt_page_meta$1b = {
      title: "UI Widgets",
      preview: {
        title: "UI Widgets",
        description: "For page compositions",
        categories: ["dashboards", "widgets"],
        src: "/img/screens/dashboards-widgets-ui.png",
        srcDark: "/img/screens/dashboards-widgets-ui-dark.png",
        order: 27
      }
    };

const __nuxt_page_meta$1a = {
      title: "List Widgets",
      preview: {
        title: "List Widgets",
        description: "For page compositions",
        categories: ["dashboards", "widgets"],
        src: "/img/screens/dashboards-widgets-lists.png",
        srcDark: "/img/screens/dashboards-widgets-lists-dark.png",
        order: 29
      }
    };

const __nuxt_page_meta$19 = {
      title: "Writer",
      preview: {
        title: "Writer dashboard",
        description: "For writers and bloggers",
        categories: ["dashboards"],
        src: "/img/screens/dashboards-writer.png",
        srcDark: "/img/screens/dashboards-writer-dark.png",
        order: 18
      }
    };

const __nuxt_page_meta$18 = {
      title: "Prebuilt dashboards pages",
      description: "Explore 100+ prebuilt pages, including dashboards and app examples. Kickstart your project with Nuxt and Tailwind CSS.",
      layout: "landing"
    };

const __nuxt_page_meta$17 = {
      pageTransition: false,
      layoutTransition: false
    };

const __nuxt_page_meta$16 = {
      // static meta information can be added to vue-router, we use it
      // to generate the search index in the demo
      title: "My first page",
      description: "Nuxt & Tailwind CSS dashboard system template that comes with 100+ prebuilt pages and 40+ custom UI components.",
      breadcrumb: {
        label: "Tairo"
      },
      layout: "landing"
    };

const __nuxt_page_meta$15 = {
      title: "Card Grid",
      preview: {
        title: "Card grid 1",
        description: "For item grids and collections",
        categories: ["layouts"],
        src: "/img/screens/layouts-card-grid-1.png",
        srcDark: "/img/screens/layouts-card-grid-1-dark.png",
        order: 57
      }
    };

const __nuxt_page_meta$14 = {
      title: "Card Grid",
      preview: {
        title: "Card grid 2",
        description: "For item grids and collections",
        categories: ["layouts"],
        src: "/img/screens/layouts-card-grid-2.png",
        srcDark: "/img/screens/layouts-card-grid-2-dark.png",
        order: 58
      }
    };

const __nuxt_page_meta$13 = {
      title: "Card Grid",
      preview: {
        title: "Card grid 3",
        description: "For item grids and collections",
        categories: ["layouts"],
        src: "/img/screens/layouts-card-grid-3.png",
        srcDark: "/img/screens/layouts-card-grid-3-dark.png",
        order: 59
      }
    };

const __nuxt_page_meta$12 = {
      title: "Card Grid",
      preview: {
        title: "Card grid 4",
        description: "For item grids and collections",
        categories: ["layouts"],
        src: "/img/screens/layouts-card-grid-4.png",
        srcDark: "/img/screens/layouts-card-grid-4-dark.png",
        order: 60
      }
    };

const __nuxt_page_meta$11 = {
      title: "Flex List",
      preview: {
        title: "Flex list 1",
        description: "For list views and collections",
        categories: ["layouts", "lists"],
        src: "/img/screens/layouts-list-flex-1.png",
        srcDark: "/img/screens/layouts-list-flex-1-dark.png",
        order: 41
      }
    };

const __nuxt_page_meta$10 = {
      title: "Flex List",
      preview: {
        title: "Flex list 2",
        description: "For list views and collections",
        categories: ["layouts", "lists"],
        src: "/img/screens/layouts-list-flex-2.png",
        srcDark: "/img/screens/layouts-list-flex-2-dark.png",
        order: 42
      }
    };

const __nuxt_page_meta$$ = {
      title: "Flex List",
      preview: {
        title: "Flex list 3",
        description: "For list views and collections",
        categories: ["layouts", "lists"],
        src: "/img/screens/layouts-list-flex-3.png",
        srcDark: "/img/screens/layouts-list-flex-3-dark.png",
        order: 43
      }
    };

const __nuxt_page_meta$_ = {
      title: "Form layout 1",
      preview: {
        title: "Form layout 1",
        description: "For forms and input fields",
        categories: ["layouts", "forms"],
        src: "/img/screens/layouts-form-1.png",
        srcDark: "/img/screens/layouts-form-1-dark.png",
        order: 47
      }
    };

const __nuxt_page_meta$Z = {
      title: "New Doctor",
      preview: {
        title: "Form layout 2",
        description: "For forms and input fields",
        categories: ["layouts", "forms"],
        src: "/img/screens/layouts-form-2.png",
        srcDark: "/img/screens/layouts-form-2-dark.png",
        order: 48
      }
    };

const __nuxt_page_meta$Y = {
      title: "Checkout",
      preview: {
        title: "Form layout 3",
        description: "For forms and input fields",
        categories: ["layouts", "forms"],
        src: "/img/screens/layouts-form-3.png",
        srcDark: "/img/screens/layouts-form-3-dark.png",
        order: 49
      }
    };

const __nuxt_page_meta$X = {
      title: "New Event",
      preview: {
        title: "Form layout 4",
        description: "For forms and input fields",
        categories: ["layouts", "forms"],
        src: "/img/screens/layouts-form-4.png",
        srcDark: "/img/screens/layouts-form-4-dark.png",
        order: 50
      }
    };

const __nuxt_page_meta$W = {
      title: "Password",
      preview: {
        title: "Form layout 5",
        description: "For forms and input fields",
        categories: ["layouts", "forms"],
        src: "/img/screens/layouts-form-5.png",
        srcDark: "/img/screens/layouts-form-5-dark.png",
        order: 51
      }
    };

const __nuxt_page_meta$V = {
      title: "Meeting",
      preview: {
        title: "Form layout 6",
        description: "For forms and input fields",
        categories: ["layouts", "forms"],
        src: "/img/screens/layouts-form-6.png",
        srcDark: "/img/screens/layouts-form-6-dark.png",
        order: 52
      }
    };

const __nuxt_page_meta$U = {
      title: "List View",
      preview: {
        title: "List view 1",
        description: "For list views and collections",
        categories: ["layouts", "lists"],
        src: "/img/screens/layouts-list-view-1.png",
        srcDark: "/img/screens/layouts-list-view-1-dark.png",
        order: 37
      }
    };

const __nuxt_page_meta$T = {
      title: "List View",
      preview: {
        title: "List view 2",
        description: "For list views and collections",
        categories: ["layouts", "lists"],
        src: "/img/screens/layouts-list-view-2.png",
        srcDark: "/img/screens/layouts-list-view-2-dark.png",
        order: 38
      }
    };

const __nuxt_page_meta$S = {
      title: "List View",
      preview: {
        title: "List view 3",
        description: "For list views and collections",
        categories: ["layouts", "lists"],
        src: "/img/screens/layouts-list-view-3.png",
        srcDark: "/img/screens/layouts-list-view-3-dark.png",
        order: 39
      }
    };

const __nuxt_page_meta$R = {
      title: "List View",
      preview: {
        title: "List view 4",
        description: "For list views and collections",
        categories: ["layouts", "lists"],
        src: "/img/screens/layouts-list-view-4.png",
        srcDark: "/img/screens/layouts-list-view-4-dark.png",
        order: 40
      }
    };

const __nuxt_page_meta$Q = {
      title: "Onboarding",
      layout: "empty",
      preview: {
        title: "Onboarding 1",
        description: "For onboarding new users",
        categories: ["layouts", "onboarding"],
        src: "/img/screens/layouts-onboarding-1.png",
        srcDark: "/img/screens/layouts-onboarding-1-dark.png",
        order: 93
      }
    };

const __nuxt_page_meta$P = {
      title: "Onboarding",
      layout: "empty",
      preview: {
        title: "Onboarding 2",
        description: "For onboarding new users",
        categories: ["layouts", "onboarding"],
        src: "/img/screens/layouts-onboarding-2.png",
        srcDark: "/img/screens/layouts-onboarding-2-dark.png",
        order: 94
      }
    };

const __nuxt_page_meta$O = {
      title: "Onboarding",
      layout: "empty",
      preview: {
        title: "Onboarding 3",
        description: "For onboarding new users",
        categories: ["layouts", "onboarding"],
        src: "/img/screens/layouts-onboarding-3.png",
        srcDark: "/img/screens/layouts-onboarding-3-dark.png",
        order: 95
      }
    };

const __nuxt_page_meta$N = {
      title: "Placeload",
      preview: {
        title: "Placeload 1",
        description: "For loading states",
        categories: ["layouts"],
        src: "/img/screens/layouts-placeload-1.png",
        srcDark: "/img/screens/layouts-placeload-1-dark.png",
        order: 53
      }
    };

const __nuxt_page_meta$M = {
      title: "Placeload",
      preview: {
        title: "Placeload 2",
        description: "For loading states",
        categories: ["layouts"],
        src: "/img/screens/layouts-placeload-2.png",
        srcDark: "/img/screens/layouts-placeload-2-dark.png",
        order: 54
      }
    };

const __nuxt_page_meta$L = {
      title: "Placeload",
      preview: {
        title: "Placeload 3",
        description: "For loading states",
        categories: ["layouts"],
        src: "/img/screens/layouts-placeload-3.png",
        srcDark: "/img/screens/layouts-placeload-3-dark.png",
        order: 55
      }
    };

const __nuxt_page_meta$K = {
      title: "Placeload",
      preview: {
        title: "Placeload 4",
        description: "For loading states",
        categories: ["layouts"],
        src: "/img/screens/layouts-placeload-4.png",
        srcDark: "/img/screens/layouts-placeload-4-dark.png",
        order: 56
      }
    };

const __nuxt_page_meta$J = {
      title: "Experience",
      preview: {
        title: "Edit profile 2",
        description: "For editing a user profile",
        categories: ["layouts", "profile", "forms"],
        src: "/img/screens/layouts-subpages-profile-edit-2.png",
        srcDark: "/img/screens/layouts-subpages-profile-edit-2-dark.png",
        order: 77
      }
    };

const __nuxt_page_meta$I = {
      title: "Edit Profile",
      preview: {
        title: "Edit profile 1",
        description: "For editing a user profile",
        categories: ["layouts", "profile", "forms"],
        src: "/img/screens/layouts-subpages-profile-edit-1.png",
        srcDark: "/img/screens/layouts-subpages-profile-edit-1-dark.png",
        order: 76
      }
    };

const __nuxt_page_meta$H = {
      title: "Settings",
      preview: {
        title: "Edit profile 4",
        description: "For editing a user profile",
        categories: ["layouts", "profile", "forms"],
        src: "/img/screens/layouts-subpages-profile-edit-4.png",
        srcDark: "/img/screens/layouts-subpages-profile-edit-4-dark.png",
        order: 79
      }
    };

const __nuxt_page_meta$G = {
      title: "Skills",
      preview: {
        title: "Edit profile 3",
        description: "For editing a user profile",
        categories: ["layouts", "profile", "forms"],
        src: "/img/screens/layouts-subpages-profile-edit-3.png",
        srcDark: "/img/screens/layouts-subpages-profile-edit-3-dark.png",
        order: 78
      }
    };

const __nuxt_page_meta$F = {
      title: "Edit Profile",
      preview: {
        title: "Edit profile 1",
        description: "For editing a user profile",
        categories: ["layouts", "profile", "forms"],
        src: "/img/screens/layouts-subpages-profile-edit-1.png",
        srcDark: "/img/screens/layouts-subpages-profile-edit-1-dark.png",
        order: 76
      }
    };

const __nuxt_page_meta$E = {
      title: "Notifications",
      preview: {
        title: "Notifications",
        description: "For displaying account notifications",
        categories: ["layouts", "profile"],
        src: "/img/screens/layouts-subpages-notifications.png",
        srcDark: "/img/screens/layouts-subpages-notifications-dark.png",
        order: 80
      }
    };

const __nuxt_page_meta$D = {
      title: "Settings",
      preview: {
        title: "Settings",
        description: "For displaying account settings",
        categories: ["layouts", "profile"],
        src: "/img/screens/layouts-subpages-settings.png",
        srcDark: "/img/screens/layouts-subpages-settings-dark.png",
        order: 81
      }
    };

const __nuxt_page_meta$C = {
      title: "Profile",
      preview: {
        title: "Profile",
        description: "For displaying a user profile",
        categories: ["layouts", "profile"],
        src: "/img/screens/layouts-subpages-profile.png",
        srcDark: "/img/screens/layouts-subpages-profile-dark.png",
        order: 75
      }
    };

const __nuxt_page_meta$B = {
      title: "Project Board",
      layout: "empty",
      preview: [
        {
          title: "Project board",
          description: "For a fitness project kanban board",
          categories: ["layouts", "projects", "kanban"],
          src: "/img/screens/layouts-projects-board.png",
          srcDark: "/img/screens/layouts-projects-board-dark.png",
          order: 74,
          params: {
            slug: "health-and-fitness-dashboard"
          }
        },
        {
          title: "Project board",
          description: "For a banking project kanban board",
          categories: ["layouts", "projects", "kanban"],
          src: "/img/screens/layouts-projects-board.png",
          srcDark: "/img/screens/layouts-projects-board-dark.png",
          order: 74,
          params: {
            slug: "banking-and-finance-dashboard"
          }
        }
      ]
    };

const __nuxt_page_meta$A = {
      title: "Board List",
      preview: {
        title: "Project board hub",
        description: "For displaying recent projects",
        categories: ["layouts", "projects"],
        src: "/img/screens/layouts-projects-board-hub.png",
        srcDark: "/img/screens/layouts-projects-board-hub-dark.png",
        order: 73
      }
    };

const __nuxt_page_meta$z = {
      title: "Project Details",
      preview: [
        {
          title: "Project details",
          description: "For displaying fitness project details",
          categories: ["layouts", "projects"],
          src: "/img/screens/layouts-projects-details.png",
          srcDark: "/img/screens/layouts-projects-details-dark.png",
          order: 72,
          params: {
            slug: "health-and-fitness-dashboard"
          }
        },
        {
          title: "Project details",
          description: "For displaying banking project details",
          categories: ["layouts", "projects"],
          src: "/img/screens/layouts-projects-details.png",
          srcDark: "/img/screens/layouts-projects-details-dark.png",
          order: 72,
          params: {
            slug: "banking-and-finance-dashboard"
          }
        }
      ]
    };

const __nuxt_page_meta$y = {
      title: "Project List",
      preview: {
        title: "Project details hub",
        description: "For displaying recent projects",
        categories: ["layouts", "projects"],
        src: "/img/screens/layouts-projects-details-hub.png",
        srcDark: "/img/screens/layouts-projects-details-hub-dark.png",
        order: 71
      }
    };

const __nuxt_page_meta$x = {
      title: "Project List",
      preview: {
        title: "Project list 1",
        description: "For displaying a list of projects",
        categories: ["layouts", "projects"],
        src: "/img/screens/layouts-projects-1.png",
        srcDark: "/img/screens/layouts-projects-1-dark.png",
        order: 68
      }
    };

const __nuxt_page_meta$w = {
      title: "Project List",
      preview: {
        title: "Project list 2",
        description: "For displaying a list of projects",
        categories: ["layouts", "projects"],
        src: "/img/screens/layouts-projects-2.png",
        srcDark: "/img/screens/layouts-projects-2-dark.png",
        order: 69
      }
    };

const __nuxt_page_meta$v = {
      title: "Project List",
      preview: {
        title: "Project list 3",
        description: "For displaying a list of projects",
        categories: ["layouts", "projects"],
        src: "/img/screens/layouts-projects-3.png",
        srcDark: "/img/screens/layouts-projects-3-dark.png",
        order: 70
      }
    };

const __nuxt_page_meta$u = {
      title: "Empty Search",
      preview: {
        title: "Empty search",
        description: "For displaying search results",
        categories: ["layouts"],
        src: "/img/screens/layouts-subpages-search-empty.png",
        srcDark: "/img/screens/layouts-subpages-search-empty-dark.png",
        order: 83
      }
    };

const __nuxt_page_meta$t = {
      title: "Search Results",
      preview: {
        title: "Search results",
        description: "For displaying search results",
        categories: ["layouts"],
        src: "/img/screens/layouts-subpages-search-results.png",
        srcDark: "/img/screens/layouts-subpages-search-results-dark.png",
        order: 82
      }
    };

const __nuxt_page_meta$s = {
      title: "Table List",
      preview: {
        title: "Table list 1",
        description: "For list views and collections",
        categories: ["layouts", "lists"],
        src: "/img/screens/layouts-table-list-1.png",
        srcDark: "/img/screens/layouts-table-list-1-dark.png",
        order: 44
      }
    };

const __nuxt_page_meta$r = {
      title: "Table List",
      preview: {
        title: "Table list 2",
        description: "For list views and collections",
        categories: ["layouts", "lists"],
        src: "/img/screens/layouts-table-list-2.png",
        srcDark: "/img/screens/layouts-table-list-2-dark.png",
        order: 45
      }
    };

const __nuxt_page_meta$q = {
      title: "Table List",
      preview: {
        title: "Table list 3",
        description: "For list views and collections",
        categories: ["layouts", "lists"],
        src: "/img/screens/layouts-table-list-3.png",
        srcDark: "/img/screens/layouts-table-list-3-dark.png",
        order: 46
      }
    };

const __nuxt_page_meta$p = {
      title: "Tiles",
      preview: {
        title: "Tile grid 1",
        description: "For item grids and collections",
        categories: ["layouts"],
        src: "/img/screens/layouts-tile-grid-1.png",
        srcDark: "/img/screens/layouts-tile-grid-1-dark.png",
        order: 61
      }
    };

const __nuxt_page_meta$o = {
      title: "Tiles",
      preview: {
        title: "Tile grid 2",
        description: "For item grids and collections",
        categories: ["layouts"],
        src: "/img/screens/layouts-tile-grid-2.png",
        srcDark: "/img/screens/layouts-tile-grid-2-dark.png",
        order: 62
      }
    };

const __nuxt_page_meta$n = {
      title: "Tiles",
      preview: {
        title: "Tile grid 3",
        description: "For item grids and collections",
        categories: ["layouts"],
        src: "/img/screens/layouts-tile-grid-3.png",
        srcDark: "/img/screens/layouts-tile-grid-3-dark.png",
        order: 63
      }
    };

const __nuxt_page_meta$m = {
      title: "Users",
      preview: {
        title: "User grid 1",
        description: "For item grids and collections",
        categories: ["layouts"],
        src: "/img/screens/layouts-user-grid-1.png",
        srcDark: "/img/screens/layouts-user-grid-1-dark.png",
        order: 64
      }
    };

const __nuxt_page_meta$l = {
      title: "Users",
      preview: {
        title: "User grid 2",
        description: "For item grids and collections",
        categories: ["layouts"],
        src: "/img/screens/layouts-user-grid-2.png",
        srcDark: "/img/screens/layouts-user-grid-2-dark.png",
        order: 65
      }
    };

const __nuxt_page_meta$k = {
      title: "Users",
      preview: {
        title: "User grid 3",
        description: "For item grids and collections",
        categories: ["layouts"],
        src: "/img/screens/layouts-user-grid-3.png",
        srcDark: "/img/screens/layouts-user-grid-3-dark.png",
        order: 66
      }
    };

const __nuxt_page_meta$j = {
      title: "Users",
      preview: {
        title: "User grid 4",
        description: "For item grids and collections",
        categories: ["layouts"],
        src: "/img/screens/layouts-user-grid-4.png",
        srcDark: "/img/screens/layouts-user-grid-4-dark.png",
        order: 67
      }
    };

const __nuxt_page_meta$i = {
      title: "Action",
      preview: {
        title: "Action 1",
        description: "For actions and tasks",
        categories: ["layouts"],
        src: "/img/screens/layouts-subpages-action-1.png",
        srcDark: "/img/screens/layouts-subpages-action-1-dark.png",
        order: 85
      }
    };

const __nuxt_page_meta$h = {
      title: "Action",
      preview: {
        title: "Action 2",
        description: "For actions and tasks",
        categories: ["layouts"],
        src: "/img/screens/layouts-subpages-action-2.png",
        srcDark: "/img/screens/layouts-subpages-action-2-dark.png",
        order: 86
      }
    };

const __nuxt_page_meta$g = {
      title: "SaaS Billing",
      preview: {
        title: "SaaS billing",
        description: "For saas billing plans",
        categories: ["layouts"],
        src: "/img/screens/layouts-subpages-billing.png",
        srcDark: "/img/screens/layouts-subpages-billing-dark.png",
        order: 84
      }
    };

const __nuxt_page_meta$f = {
      title: "Confirm",
      preview: {
        title: "Confirm Account",
        description: "For account confirmation",
        categories: ["layouts"],
        src: "/img/screens/layouts-utility-confirm.png",
        srcDark: "/img/screens/layouts-utility-confirm-dark.png",
        order: 87
      }
    };

const __nuxt_page_meta$e = {
      title: "Error",
      layout: "empty",
      preview: {
        title: "Error",
        description: "For system errors",
        categories: ["layouts"],
        src: "/img/screens/layouts-utility-error.png",
        srcDark: "/img/screens/layouts-utility-error-dark.png",
        order: 92
      }
    };

const __nuxt_page_meta$d = {
      title: "Invoice",
      preview: {
        title: "Invoice",
        description: "For accounting and invoices",
        categories: ["layouts"],
        src: "/img/screens/layouts-utility-invoice.png",
        srcDark: "/img/screens/layouts-utility-invoice-dark.png",
        order: 90
      }
    };

const __nuxt_page_meta$c = {
      title: "Promotion",
      preview: {
        title: "Promotion",
        description: "For promotional offers",
        categories: ["layouts"],
        src: "/img/screens/layouts-utility-promotion.png",
        srcDark: "/img/screens/layouts-utility-promotion-dark.png",
        order: 88
      }
    };

const __nuxt_page_meta$b = {
      title: "Status",
      layout: "empty",
      preview: {
        title: "Service status",
        description: "For company service status",
        categories: ["layouts"],
        src: "/img/screens/layouts-utility-status.png",
        srcDark: "/img/screens/layouts-utility-status-dark.png",
        order: 91
      }
    };

const __nuxt_page_meta$a = {};

const __nuxt_page_meta$9 = {
      title: "Collapse Layout",
      layout: "empty"
    };

const __nuxt_page_meta$8 = {
      title: "Sidebar Layout",
      layout: "empty"
    };

const __nuxt_page_meta$7 = {
      title: "Wizard — Step 1",
      preview: {
        title: "Wizard — Step 1",
        description: "For onboarding and step forms",
        categories: ["dashboards", "wizard", "forms"],
        src: "/img/screens/wizard-1.png",
        srcDark: "/img/screens/wizard-1-dark.png",
        order: 30
      }
    };

const __nuxt_page_meta$6 = {
      title: "Wizard — Step 2",
      preview: {
        title: "Wizard — Step 2",
        description: "For onboarding and step forms",
        categories: ["dashboards", "wizard", "forms"],
        src: "/img/screens/wizard-2.png",
        srcDark: "/img/screens/wizard-2-dark.png",
        order: 31
      }
    };

const __nuxt_page_meta$5 = {
      title: "Wizard — Step 3",
      preview: {
        title: "Wizard — Step 3",
        description: "For onboarding and step forms",
        categories: ["dashboards", "wizard", "forms"],
        src: "/img/screens/wizard-3.png",
        srcDark: "/img/screens/wizard-3-dark.png",
        order: 32
      }
    };

const __nuxt_page_meta$4 = {
      title: "Wizard — Step 4",
      preview: {
        title: "Wizard — Step 4",
        description: "For onboarding and step forms",
        categories: ["dashboards", "wizard", "forms"],
        src: "/img/screens/wizard-4.png",
        srcDark: "/img/screens/wizard-4-dark.png",
        order: 33
      }
    };

const __nuxt_page_meta$3 = {
      title: "Wizard — Step 5",
      preview: {
        title: "Wizard — Step 5",
        description: "For onboarding and step forms",
        categories: ["dashboards", "wizard", "forms"],
        src: "/img/screens/wizard-5.png",
        srcDark: "/img/screens/wizard-5-dark.png",
        order: 34
      }
    };

const __nuxt_page_meta$2 = {
      title: "Wizard — Step 6",
      preview: {
        title: "Wizard — Step 6",
        description: "For onboarding and step forms",
        categories: ["dashboards", "wizard", "forms"],
        src: "/img/screens/wizard-6.png",
        srcDark: "/img/screens/wizard-6-dark.png",
        order: 35
      }
    };

const __nuxt_page_meta$1 = {
      title: "Wizard — Step 7",
      preview: {
        title: "Wizard — Step 7",
        description: "For onboarding and step forms",
        categories: ["dashboards", "wizard", "forms"],
        src: "/img/screens/wizard-7.png",
        srcDark: "/img/screens/wizard-7-dark.png",
        order: 36
      }
    };

const __nuxt_page_meta = {
      layout: "empty"
    };

const _routes = [
  {
    name: __nuxt_page_meta$1L?.name ?? "auth",
    path: __nuxt_page_meta$1L?.path ?? "/auth",
    meta: __nuxt_page_meta$1L || {},
    alias: __nuxt_page_meta$1L?.alias || [],
    redirect: __nuxt_page_meta$1L?.redirect || undefined,
    component: () => import('./_nuxt/index-5d2f93f4.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$1K?.name ?? "auth-indexold",
    path: __nuxt_page_meta$1K?.path ?? "/auth/indexold",
    meta: __nuxt_page_meta$1K || {},
    alias: __nuxt_page_meta$1K?.alias || [],
    redirect: __nuxt_page_meta$1K?.redirect || undefined,
    component: () => import('./_nuxt/indexold-446ad222.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$1J?.name ?? "auth-login-2",
    path: __nuxt_page_meta$1J?.path ?? "/auth/login-2",
    meta: __nuxt_page_meta$1J || {},
    alias: __nuxt_page_meta$1J?.alias || [],
    redirect: __nuxt_page_meta$1J?.redirect || undefined,
    component: () => import('./_nuxt/login-2-028fe728.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$1I?.name ?? "auth-login-3",
    path: __nuxt_page_meta$1I?.path ?? "/auth/login-3",
    meta: __nuxt_page_meta$1I || {},
    alias: __nuxt_page_meta$1I?.alias || [],
    redirect: __nuxt_page_meta$1I?.redirect || undefined,
    component: () => import('./_nuxt/login-3-62792621.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$1H?.name ?? "auth-recover",
    path: __nuxt_page_meta$1H?.path ?? "/auth/recover",
    meta: __nuxt_page_meta$1H || {},
    alias: __nuxt_page_meta$1H?.alias || [],
    redirect: __nuxt_page_meta$1H?.redirect || undefined,
    component: () => import('./_nuxt/recover-22cd06b0.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$1G?.name ?? "auth-signup-1",
    path: __nuxt_page_meta$1G?.path ?? "/auth/signup-1",
    meta: __nuxt_page_meta$1G || {},
    alias: __nuxt_page_meta$1G?.alias || [],
    redirect: __nuxt_page_meta$1G?.redirect || undefined,
    component: () => import('./_nuxt/signup-1-98f29749.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$1F?.name ?? "auth-signup-3",
    path: __nuxt_page_meta$1F?.path ?? "/auth/signup-3",
    meta: __nuxt_page_meta$1F || {},
    alias: __nuxt_page_meta$1F?.alias || [],
    redirect: __nuxt_page_meta$1F?.redirect || undefined,
    component: () => import('./_nuxt/signup-3-23c65915.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$1E?.name ?? "auth-signup",
    path: __nuxt_page_meta$1E?.path ?? "/auth/signup",
    meta: __nuxt_page_meta$1E || {},
    alias: __nuxt_page_meta$1E?.alias || [],
    redirect: __nuxt_page_meta$1E?.redirect || undefined,
    component: () => import('./_nuxt/signup-487af0cf.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$1D?.name ?? "dashboards-analytics",
    path: __nuxt_page_meta$1D?.path ?? "/dashboards/analytics",
    meta: __nuxt_page_meta$1D || {},
    alias: __nuxt_page_meta$1D?.alias || [],
    redirect: __nuxt_page_meta$1D?.redirect || undefined,
    component: () => import('./_nuxt/analytics-90e67bb7.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$1C?.name ?? "dashboards-banking-1",
    path: __nuxt_page_meta$1C?.path ?? "/dashboards/banking-1",
    meta: __nuxt_page_meta$1C || {},
    alias: __nuxt_page_meta$1C?.alias || [],
    redirect: __nuxt_page_meta$1C?.redirect || undefined,
    component: () => import('./_nuxt/banking-1-50053805.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$1B?.name ?? "dashboards-banking-2",
    path: __nuxt_page_meta$1B?.path ?? "/dashboards/banking-2",
    meta: __nuxt_page_meta$1B || {},
    alias: __nuxt_page_meta$1B?.alias || [],
    redirect: __nuxt_page_meta$1B?.redirect || undefined,
    component: () => import('./_nuxt/banking-2-214e833b.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$1A?.name ?? "dashboards-banking-3",
    path: __nuxt_page_meta$1A?.path ?? "/dashboards/banking-3",
    meta: __nuxt_page_meta$1A || {},
    alias: __nuxt_page_meta$1A?.alias || [],
    redirect: __nuxt_page_meta$1A?.redirect || undefined,
    component: () => import('./_nuxt/banking-3-8724d5cd.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$1z?.name ?? "dashboards-calendar",
    path: __nuxt_page_meta$1z?.path ?? "/dashboards/calendar",
    meta: __nuxt_page_meta$1z || {},
    alias: __nuxt_page_meta$1z?.alias || [],
    redirect: __nuxt_page_meta$1z?.redirect || undefined,
    component: () => import('./_nuxt/calendar-bbb68609.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$1y?.name ?? "dashboards-charts",
    path: __nuxt_page_meta$1y?.path ?? "/dashboards/charts",
    meta: __nuxt_page_meta$1y || {},
    alias: __nuxt_page_meta$1y?.alias || [],
    redirect: __nuxt_page_meta$1y?.redirect || undefined,
    component: () => import('./_nuxt/charts-a6eee754.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$1x?.name ?? "dashboards-company",
    path: __nuxt_page_meta$1x?.path ?? "/dashboards/company",
    meta: __nuxt_page_meta$1x || {},
    alias: __nuxt_page_meta$1x?.alias || [],
    redirect: __nuxt_page_meta$1x?.redirect || undefined,
    component: () => import('./_nuxt/company-8afaf49b.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$1w?.name ?? "dashboards-course",
    path: __nuxt_page_meta$1w?.path ?? "/dashboards/course",
    meta: __nuxt_page_meta$1w || {},
    alias: __nuxt_page_meta$1w?.alias || [],
    redirect: __nuxt_page_meta$1w?.redirect || undefined,
    component: () => import('./_nuxt/course-3590430d.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$1v?.name ?? "dashboards-delivery",
    path: __nuxt_page_meta$1v?.path ?? "/dashboards/delivery",
    meta: __nuxt_page_meta$1v || {},
    alias: __nuxt_page_meta$1v?.alias || [],
    redirect: __nuxt_page_meta$1v?.redirect || undefined,
    component: () => import('./_nuxt/delivery-a22e9856.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$1u?.name ?? "dashboards-ecommerce",
    path: __nuxt_page_meta$1u?.path ?? "/dashboards/ecommerce",
    meta: __nuxt_page_meta$1u || {},
    alias: __nuxt_page_meta$1u?.alias || [],
    redirect: __nuxt_page_meta$1u?.redirect || undefined,
    component: () => import('./_nuxt/ecommerce-77c52714.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$1t?.name ?? "dashboards-flights",
    path: __nuxt_page_meta$1t?.path ?? "/dashboards/flights",
    meta: __nuxt_page_meta$1t || {},
    alias: __nuxt_page_meta$1t?.alias || [],
    redirect: __nuxt_page_meta$1t?.redirect || undefined,
    component: () => import('./_nuxt/flights-7d0ff10a.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$1s?.name ?? "dashboards-health",
    path: __nuxt_page_meta$1s?.path ?? "/dashboards/health",
    meta: __nuxt_page_meta$1s || {},
    alias: __nuxt_page_meta$1s?.alias || [],
    redirect: __nuxt_page_meta$1s?.redirect || undefined,
    component: () => import('./_nuxt/health-cc6b9b89.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$1r?.name ?? "dashboards-hobbies",
    path: __nuxt_page_meta$1r?.path ?? "/dashboards/hobbies",
    meta: __nuxt_page_meta$1r || {},
    alias: __nuxt_page_meta$1r?.alias || [],
    redirect: __nuxt_page_meta$1r?.redirect || undefined,
    component: () => import('./_nuxt/hobbies-d9c494e7.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$1q?.name ?? "dashboards-human-resources",
    path: __nuxt_page_meta$1q?.path ?? "/dashboards/human-resources",
    meta: __nuxt_page_meta$1q || {},
    alias: __nuxt_page_meta$1q?.alias || [],
    redirect: __nuxt_page_meta$1q?.redirect || undefined,
    component: () => import('./_nuxt/human-resources-e776e846.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$1p?.name ?? "dashboards-inbox",
    path: __nuxt_page_meta$1p?.path ?? "/dashboards/inbox",
    meta: __nuxt_page_meta$1p || {},
    alias: __nuxt_page_meta$1p?.alias || [],
    redirect: __nuxt_page_meta$1p?.redirect || undefined,
    component: () => import('./_nuxt/inbox-16269ce0.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$1o?.name ?? "dashboards",
    path: __nuxt_page_meta$1o?.path ?? "/dashboards",
    meta: __nuxt_page_meta$1o || {},
    alias: __nuxt_page_meta$1o?.alias || [],
    redirect: __nuxt_page_meta$1o?.redirect || undefined,
    component: () => import('./_nuxt/index-0fb4203e.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$1n?.name ?? "dashboards-indexold",
    path: __nuxt_page_meta$1n?.path ?? "/dashboards/indexold",
    meta: __nuxt_page_meta$1n || {},
    alias: __nuxt_page_meta$1n?.alias || [],
    redirect: __nuxt_page_meta$1n?.redirect || undefined,
    component: () => import('./_nuxt/indexold-08350793.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$1m?.name ?? "dashboards-influencer",
    path: __nuxt_page_meta$1m?.path ?? "/dashboards/influencer",
    meta: __nuxt_page_meta$1m || {},
    alias: __nuxt_page_meta$1m?.alias || [],
    redirect: __nuxt_page_meta$1m?.redirect || undefined,
    component: () => import('./_nuxt/influencer-ee0a7bf2.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$1l?.name ?? "dashboards-jobs",
    path: __nuxt_page_meta$1l?.path ?? "/dashboards/jobs",
    meta: __nuxt_page_meta$1l || {},
    alias: __nuxt_page_meta$1l?.alias || [],
    redirect: __nuxt_page_meta$1l?.redirect || undefined,
    component: () => import('./_nuxt/jobs-2dff38d4.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$1k?.name ?? "dashboards-map-left",
    path: __nuxt_page_meta$1k?.path ?? "/dashboards/map-left",
    meta: __nuxt_page_meta$1k || {},
    alias: __nuxt_page_meta$1k?.alias || [],
    redirect: __nuxt_page_meta$1k?.redirect || undefined,
    component: () => import('./_nuxt/map-left-2f5c81a4.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$1j?.name ?? "dashboards-map-right",
    path: __nuxt_page_meta$1j?.path ?? "/dashboards/map-right",
    meta: __nuxt_page_meta$1j || {},
    alias: __nuxt_page_meta$1j?.alias || [],
    redirect: __nuxt_page_meta$1j?.redirect || undefined,
    component: () => import('./_nuxt/map-right-b3bc805d.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$1i?.name ?? "dashboards-messaging",
    path: __nuxt_page_meta$1i?.path ?? "/dashboards/messaging",
    meta: __nuxt_page_meta$1i || {},
    alias: __nuxt_page_meta$1i?.alias || [],
    redirect: __nuxt_page_meta$1i?.redirect || undefined,
    component: () => import('./_nuxt/messaging-98e4f4aa.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$1h?.name ?? "dashboards-personal-2",
    path: __nuxt_page_meta$1h?.path ?? "/dashboards/personal-2",
    meta: __nuxt_page_meta$1h || {},
    alias: __nuxt_page_meta$1h?.alias || [],
    redirect: __nuxt_page_meta$1h?.redirect || undefined,
    component: () => import('./_nuxt/personal-2-699e0b1e.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$1g?.name ?? "dashboards-sales",
    path: __nuxt_page_meta$1g?.path ?? "/dashboards/sales",
    meta: __nuxt_page_meta$1g || {},
    alias: __nuxt_page_meta$1g?.alias || [],
    redirect: __nuxt_page_meta$1g?.redirect || undefined,
    component: () => import('./_nuxt/sales-32dc4da3.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$1f?.name ?? "dashboards-soccer",
    path: __nuxt_page_meta$1f?.path ?? "/dashboards/soccer",
    meta: __nuxt_page_meta$1f || {},
    alias: __nuxt_page_meta$1f?.alias || [],
    redirect: __nuxt_page_meta$1f?.redirect || undefined,
    component: () => import('./_nuxt/soccer-2ecd83c0.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$1e?.name ?? "dashboards-stocks",
    path: __nuxt_page_meta$1e?.path ?? "/dashboards/stocks",
    meta: __nuxt_page_meta$1e || {},
    alias: __nuxt_page_meta$1e?.alias || [],
    redirect: __nuxt_page_meta$1e?.redirect || undefined,
    component: () => import('./_nuxt/stocks-b32e50a7.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$1d?.name ?? "dashboards-video",
    path: __nuxt_page_meta$1d?.path ?? "/dashboards/video",
    meta: __nuxt_page_meta$1d || {},
    alias: __nuxt_page_meta$1d?.alias || [],
    redirect: __nuxt_page_meta$1d?.redirect || undefined,
    component: () => import('./_nuxt/video-faa3bf8f.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$1c?.name ?? "dashboards-widgets-creative",
    path: __nuxt_page_meta$1c?.path ?? "/dashboards/widgets/creative",
    meta: __nuxt_page_meta$1c || {},
    alias: __nuxt_page_meta$1c?.alias || [],
    redirect: __nuxt_page_meta$1c?.redirect || undefined,
    component: () => import('./_nuxt/creative-e00f596b.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$1b?.name ?? "dashboards-widgets",
    path: __nuxt_page_meta$1b?.path ?? "/dashboards/widgets",
    meta: __nuxt_page_meta$1b || {},
    alias: __nuxt_page_meta$1b?.alias || [],
    redirect: __nuxt_page_meta$1b?.redirect || undefined,
    component: () => import('./_nuxt/index-8c293e36.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$1a?.name ?? "dashboards-widgets-list",
    path: __nuxt_page_meta$1a?.path ?? "/dashboards/widgets/list",
    meta: __nuxt_page_meta$1a || {},
    alias: __nuxt_page_meta$1a?.alias || [],
    redirect: __nuxt_page_meta$1a?.redirect || undefined,
    component: () => import('./_nuxt/list-2051168f.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$19?.name ?? "dashboards-writer",
    path: __nuxt_page_meta$19?.path ?? "/dashboards/writer",
    meta: __nuxt_page_meta$19 || {},
    alias: __nuxt_page_meta$19?.alias || [],
    redirect: __nuxt_page_meta$19?.redirect || undefined,
    component: () => import('./_nuxt/writer-32f3f5c4.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$18?.name ?? "demos",
    path: __nuxt_page_meta$18?.path ?? "/demos",
    meta: __nuxt_page_meta$18 || {},
    alias: __nuxt_page_meta$18?.alias || [],
    redirect: __nuxt_page_meta$18?.redirect || undefined,
    component: () => import('./_nuxt/demos-8499c4ab.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$17?.name ?? "documentation-slug",
    path: __nuxt_page_meta$17?.path ?? "/documentation/:slug(.*)*",
    meta: __nuxt_page_meta$17 || {},
    alias: __nuxt_page_meta$17?.alias || [],
    redirect: __nuxt_page_meta$17?.redirect || undefined,
    component: () => import('./_nuxt/index-c32aca0b.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$16?.name ?? "index",
    path: __nuxt_page_meta$16?.path ?? "/",
    meta: __nuxt_page_meta$16 || {},
    alias: __nuxt_page_meta$16?.alias || [],
    redirect: __nuxt_page_meta$16?.redirect || undefined,
    component: () => import('./_nuxt/index-c88b8655.mjs').then(m => m.default || m)
  },
  {
    path: __nuxt_page_meta$a?.path ?? "/layouts",
    children: [
  {
    name: __nuxt_page_meta$15?.name ?? "layouts-card-grid-1",
    path: __nuxt_page_meta$15?.path ?? "card-grid-1",
    meta: __nuxt_page_meta$15 || {},
    alias: __nuxt_page_meta$15?.alias || [],
    redirect: __nuxt_page_meta$15?.redirect || undefined,
    component: () => import('./_nuxt/card-grid-1-5d84e123.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$14?.name ?? "layouts-card-grid-2",
    path: __nuxt_page_meta$14?.path ?? "card-grid-2",
    meta: __nuxt_page_meta$14 || {},
    alias: __nuxt_page_meta$14?.alias || [],
    redirect: __nuxt_page_meta$14?.redirect || undefined,
    component: () => import('./_nuxt/card-grid-2-575cfb83.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$13?.name ?? "layouts-card-grid-3",
    path: __nuxt_page_meta$13?.path ?? "card-grid-3",
    meta: __nuxt_page_meta$13 || {},
    alias: __nuxt_page_meta$13?.alias || [],
    redirect: __nuxt_page_meta$13?.redirect || undefined,
    component: () => import('./_nuxt/card-grid-3-d411160f.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$12?.name ?? "layouts-card-grid-4",
    path: __nuxt_page_meta$12?.path ?? "card-grid-4",
    meta: __nuxt_page_meta$12 || {},
    alias: __nuxt_page_meta$12?.alias || [],
    redirect: __nuxt_page_meta$12?.redirect || undefined,
    component: () => import('./_nuxt/card-grid-4-77def9e9.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$11?.name ?? "layouts-flex-list-1",
    path: __nuxt_page_meta$11?.path ?? "flex-list-1",
    meta: __nuxt_page_meta$11 || {},
    alias: __nuxt_page_meta$11?.alias || [],
    redirect: __nuxt_page_meta$11?.redirect || undefined,
    component: () => import('./_nuxt/flex-list-1-98d659be.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$10?.name ?? "layouts-flex-list-2",
    path: __nuxt_page_meta$10?.path ?? "flex-list-2",
    meta: __nuxt_page_meta$10 || {},
    alias: __nuxt_page_meta$10?.alias || [],
    redirect: __nuxt_page_meta$10?.redirect || undefined,
    component: () => import('./_nuxt/flex-list-2-933a8463.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$$?.name ?? "layouts-flex-list-3",
    path: __nuxt_page_meta$$?.path ?? "flex-list-3",
    meta: __nuxt_page_meta$$ || {},
    alias: __nuxt_page_meta$$?.alias || [],
    redirect: __nuxt_page_meta$$?.redirect || undefined,
    component: () => import('./_nuxt/flex-list-3-e2746ca5.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$_?.name ?? "layouts-form-1",
    path: __nuxt_page_meta$_?.path ?? "form-1",
    meta: __nuxt_page_meta$_ || {},
    alias: __nuxt_page_meta$_?.alias || [],
    redirect: __nuxt_page_meta$_?.redirect || undefined,
    component: () => import('./_nuxt/form-1-9fe2fa41.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$Z?.name ?? "layouts-form-2",
    path: __nuxt_page_meta$Z?.path ?? "form-2",
    meta: __nuxt_page_meta$Z || {},
    alias: __nuxt_page_meta$Z?.alias || [],
    redirect: __nuxt_page_meta$Z?.redirect || undefined,
    component: () => import('./_nuxt/form-2-163d7103.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$Y?.name ?? "layouts-form-3",
    path: __nuxt_page_meta$Y?.path ?? "form-3",
    meta: __nuxt_page_meta$Y || {},
    alias: __nuxt_page_meta$Y?.alias || [],
    redirect: __nuxt_page_meta$Y?.redirect || undefined,
    component: () => import('./_nuxt/form-3-373f4799.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$X?.name ?? "layouts-form-4",
    path: __nuxt_page_meta$X?.path ?? "form-4",
    meta: __nuxt_page_meta$X || {},
    alias: __nuxt_page_meta$X?.alias || [],
    redirect: __nuxt_page_meta$X?.redirect || undefined,
    component: () => import('./_nuxt/form-4-8576b38a.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$W?.name ?? "layouts-form-5",
    path: __nuxt_page_meta$W?.path ?? "form-5",
    meta: __nuxt_page_meta$W || {},
    alias: __nuxt_page_meta$W?.alias || [],
    redirect: __nuxt_page_meta$W?.redirect || undefined,
    component: () => import('./_nuxt/form-5-6e7727b4.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$V?.name ?? "layouts-form-6",
    path: __nuxt_page_meta$V?.path ?? "form-6",
    meta: __nuxt_page_meta$V || {},
    alias: __nuxt_page_meta$V?.alias || [],
    redirect: __nuxt_page_meta$V?.redirect || undefined,
    component: () => import('./_nuxt/form-6-9f0eb65d.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$U?.name ?? "layouts",
    path: __nuxt_page_meta$U?.path ?? "",
    meta: __nuxt_page_meta$U || {},
    alias: __nuxt_page_meta$U?.alias || [],
    redirect: __nuxt_page_meta$U?.redirect || undefined,
    component: () => import('./_nuxt/index-01f8cc68.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$T?.name ?? "layouts-list-view-2",
    path: __nuxt_page_meta$T?.path ?? "list-view-2",
    meta: __nuxt_page_meta$T || {},
    alias: __nuxt_page_meta$T?.alias || [],
    redirect: __nuxt_page_meta$T?.redirect || undefined,
    component: () => import('./_nuxt/list-view-2-c797af76.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$S?.name ?? "layouts-list-view-3",
    path: __nuxt_page_meta$S?.path ?? "list-view-3",
    meta: __nuxt_page_meta$S || {},
    alias: __nuxt_page_meta$S?.alias || [],
    redirect: __nuxt_page_meta$S?.redirect || undefined,
    component: () => import('./_nuxt/list-view-3-76a69e47.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$R?.name ?? "layouts-list-view-4",
    path: __nuxt_page_meta$R?.path ?? "list-view-4",
    meta: __nuxt_page_meta$R || {},
    alias: __nuxt_page_meta$R?.alias || [],
    redirect: __nuxt_page_meta$R?.redirect || undefined,
    component: () => import('./_nuxt/list-view-4-8f29a2c2.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$Q?.name ?? "layouts-onboarding-1",
    path: __nuxt_page_meta$Q?.path ?? "onboarding-1",
    meta: __nuxt_page_meta$Q || {},
    alias: __nuxt_page_meta$Q?.alias || [],
    redirect: __nuxt_page_meta$Q?.redirect || undefined,
    component: () => import('./_nuxt/onboarding-1-72c246ea.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$P?.name ?? "layouts-onboarding-2",
    path: __nuxt_page_meta$P?.path ?? "onboarding-2",
    meta: __nuxt_page_meta$P || {},
    alias: __nuxt_page_meta$P?.alias || [],
    redirect: __nuxt_page_meta$P?.redirect || undefined,
    component: () => import('./_nuxt/onboarding-2-064e74fc.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$O?.name ?? "layouts-onboarding-3",
    path: __nuxt_page_meta$O?.path ?? "onboarding-3",
    meta: __nuxt_page_meta$O || {},
    alias: __nuxt_page_meta$O?.alias || [],
    redirect: __nuxt_page_meta$O?.redirect || undefined,
    component: () => import('./_nuxt/onboarding-3-ee8232a2.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$N?.name ?? "layouts-placeload-1",
    path: __nuxt_page_meta$N?.path ?? "placeload-1",
    meta: __nuxt_page_meta$N || {},
    alias: __nuxt_page_meta$N?.alias || [],
    redirect: __nuxt_page_meta$N?.redirect || undefined,
    component: () => import('./_nuxt/placeload-1-a31f6191.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$M?.name ?? "layouts-placeload-2",
    path: __nuxt_page_meta$M?.path ?? "placeload-2",
    meta: __nuxt_page_meta$M || {},
    alias: __nuxt_page_meta$M?.alias || [],
    redirect: __nuxt_page_meta$M?.redirect || undefined,
    component: () => import('./_nuxt/placeload-2-bbf74b55.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$L?.name ?? "layouts-placeload-3",
    path: __nuxt_page_meta$L?.path ?? "placeload-3",
    meta: __nuxt_page_meta$L || {},
    alias: __nuxt_page_meta$L?.alias || [],
    redirect: __nuxt_page_meta$L?.redirect || undefined,
    component: () => import('./_nuxt/placeload-3-bd37a841.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$K?.name ?? "layouts-placeload-4",
    path: __nuxt_page_meta$K?.path ?? "placeload-4",
    meta: __nuxt_page_meta$K || {},
    alias: __nuxt_page_meta$K?.alias || [],
    redirect: __nuxt_page_meta$K?.redirect || undefined,
    component: () => import('./_nuxt/placeload-4-d9ffb157.mjs').then(m => m.default || m)
  },
  {
    path: __nuxt_page_meta$F?.path ?? "profile-edit",
    children: [
  {
    name: __nuxt_page_meta$J?.name ?? "layouts-profile-edit-experience",
    path: __nuxt_page_meta$J?.path ?? "experience",
    meta: __nuxt_page_meta$J || {},
    alias: __nuxt_page_meta$J?.alias || [],
    redirect: __nuxt_page_meta$J?.redirect || undefined,
    component: () => import('./_nuxt/experience-a43daa7b.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$I?.name ?? "layouts-profile-edit",
    path: __nuxt_page_meta$I?.path ?? "",
    meta: __nuxt_page_meta$I || {},
    alias: __nuxt_page_meta$I?.alias || [],
    redirect: __nuxt_page_meta$I?.redirect || undefined,
    component: () => import('./_nuxt/index-5c657297.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$H?.name ?? "layouts-profile-edit-settings",
    path: __nuxt_page_meta$H?.path ?? "settings",
    meta: __nuxt_page_meta$H || {},
    alias: __nuxt_page_meta$H?.alias || [],
    redirect: __nuxt_page_meta$H?.redirect || undefined,
    component: () => import('./_nuxt/settings-6d470514.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$G?.name ?? "layouts-profile-edit-skills",
    path: __nuxt_page_meta$G?.path ?? "skills",
    meta: __nuxt_page_meta$G || {},
    alias: __nuxt_page_meta$G?.alias || [],
    redirect: __nuxt_page_meta$G?.redirect || undefined,
    component: () => import('./_nuxt/skills-c5ec5159.mjs').then(m => m.default || m)
  }
],
    name: __nuxt_page_meta$F?.name ?? undefined,
    meta: __nuxt_page_meta$F || {},
    alias: __nuxt_page_meta$F?.alias || [],
    redirect: __nuxt_page_meta$F?.redirect || undefined,
    component: () => import('./_nuxt/profile-edit-48b4a506.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$E?.name ?? "layouts-profile-notifications",
    path: __nuxt_page_meta$E?.path ?? "profile-notifications",
    meta: __nuxt_page_meta$E || {},
    alias: __nuxt_page_meta$E?.alias || [],
    redirect: __nuxt_page_meta$E?.redirect || undefined,
    component: () => import('./_nuxt/profile-notifications-b9dd8ee1.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$D?.name ?? "layouts-profile-settings",
    path: __nuxt_page_meta$D?.path ?? "profile-settings",
    meta: __nuxt_page_meta$D || {},
    alias: __nuxt_page_meta$D?.alias || [],
    redirect: __nuxt_page_meta$D?.redirect || undefined,
    component: () => import('./_nuxt/profile-settings-9d3da7fc.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$C?.name ?? "layouts-profile",
    path: __nuxt_page_meta$C?.path ?? "profile",
    meta: __nuxt_page_meta$C || {},
    alias: __nuxt_page_meta$C?.alias || [],
    redirect: __nuxt_page_meta$C?.redirect || undefined,
    component: () => import('./_nuxt/profile-97275f65.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$B?.name ?? "layouts-projects-board-slug",
    path: __nuxt_page_meta$B?.path ?? "projects/board/:slug()",
    meta: __nuxt_page_meta$B || {},
    alias: __nuxt_page_meta$B?.alias || [],
    redirect: __nuxt_page_meta$B?.redirect || undefined,
    component: () => import('./_nuxt/_slug_-c5889421.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$A?.name ?? "layouts-projects-board",
    path: __nuxt_page_meta$A?.path ?? "projects/board",
    meta: __nuxt_page_meta$A || {},
    alias: __nuxt_page_meta$A?.alias || [],
    redirect: __nuxt_page_meta$A?.redirect || undefined,
    component: () => import('./_nuxt/index-523c4ec2.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$z?.name ?? "layouts-projects-details-slug",
    path: __nuxt_page_meta$z?.path ?? "projects/details/:slug()",
    meta: __nuxt_page_meta$z || {},
    alias: __nuxt_page_meta$z?.alias || [],
    redirect: __nuxt_page_meta$z?.redirect || undefined,
    component: () => import('./_nuxt/_slug_-00b80370.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$y?.name ?? "layouts-projects-details",
    path: __nuxt_page_meta$y?.path ?? "projects/details",
    meta: __nuxt_page_meta$y || {},
    alias: __nuxt_page_meta$y?.alias || [],
    redirect: __nuxt_page_meta$y?.redirect || undefined,
    component: () => import('./_nuxt/index-9ae2537d.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$x?.name ?? "layouts-projects",
    path: __nuxt_page_meta$x?.path ?? "projects",
    meta: __nuxt_page_meta$x || {},
    alias: __nuxt_page_meta$x?.alias || [],
    redirect: __nuxt_page_meta$x?.redirect || undefined,
    component: () => import('./_nuxt/index-15700a8f.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$w?.name ?? "layouts-projects-project-list-2",
    path: __nuxt_page_meta$w?.path ?? "projects/project-list-2",
    meta: __nuxt_page_meta$w || {},
    alias: __nuxt_page_meta$w?.alias || [],
    redirect: __nuxt_page_meta$w?.redirect || undefined,
    component: () => import('./_nuxt/project-list-2-92b0f406.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$v?.name ?? "layouts-projects-project-list-3",
    path: __nuxt_page_meta$v?.path ?? "projects/project-list-3",
    meta: __nuxt_page_meta$v || {},
    alias: __nuxt_page_meta$v?.alias || [],
    redirect: __nuxt_page_meta$v?.redirect || undefined,
    component: () => import('./_nuxt/project-list-3-caffdeae.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$u?.name ?? "layouts-search-empty",
    path: __nuxt_page_meta$u?.path ?? "search-empty",
    meta: __nuxt_page_meta$u || {},
    alias: __nuxt_page_meta$u?.alias || [],
    redirect: __nuxt_page_meta$u?.redirect || undefined,
    component: () => import('./_nuxt/search-empty-98d551d3.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$t?.name ?? "layouts-search-results",
    path: __nuxt_page_meta$t?.path ?? "search-results",
    meta: __nuxt_page_meta$t || {},
    alias: __nuxt_page_meta$t?.alias || [],
    redirect: __nuxt_page_meta$t?.redirect || undefined,
    component: () => import('./_nuxt/search-results-ea6fc691.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$s?.name ?? "layouts-table-list-1",
    path: __nuxt_page_meta$s?.path ?? "table-list-1",
    meta: __nuxt_page_meta$s || {},
    alias: __nuxt_page_meta$s?.alias || [],
    redirect: __nuxt_page_meta$s?.redirect || undefined,
    component: () => import('./_nuxt/table-list-1-889c2307.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$r?.name ?? "layouts-table-list-2",
    path: __nuxt_page_meta$r?.path ?? "table-list-2",
    meta: __nuxt_page_meta$r || {},
    alias: __nuxt_page_meta$r?.alias || [],
    redirect: __nuxt_page_meta$r?.redirect || undefined,
    component: () => import('./_nuxt/table-list-2-35511d38.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$q?.name ?? "layouts-table-list-3",
    path: __nuxt_page_meta$q?.path ?? "table-list-3",
    meta: __nuxt_page_meta$q || {},
    alias: __nuxt_page_meta$q?.alias || [],
    redirect: __nuxt_page_meta$q?.redirect || undefined,
    component: () => import('./_nuxt/table-list-3-9500f3f5.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$p?.name ?? "layouts-tile-grid-1",
    path: __nuxt_page_meta$p?.path ?? "tile-grid-1",
    meta: __nuxt_page_meta$p || {},
    alias: __nuxt_page_meta$p?.alias || [],
    redirect: __nuxt_page_meta$p?.redirect || undefined,
    component: () => import('./_nuxt/tile-grid-1-7a292d72.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$o?.name ?? "layouts-tile-grid-2",
    path: __nuxt_page_meta$o?.path ?? "tile-grid-2",
    meta: __nuxt_page_meta$o || {},
    alias: __nuxt_page_meta$o?.alias || [],
    redirect: __nuxt_page_meta$o?.redirect || undefined,
    component: () => import('./_nuxt/tile-grid-2-fc16d083.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$n?.name ?? "layouts-tile-grid-3",
    path: __nuxt_page_meta$n?.path ?? "tile-grid-3",
    meta: __nuxt_page_meta$n || {},
    alias: __nuxt_page_meta$n?.alias || [],
    redirect: __nuxt_page_meta$n?.redirect || undefined,
    component: () => import('./_nuxt/tile-grid-3-a582e889.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$m?.name ?? "layouts-user-grid-1",
    path: __nuxt_page_meta$m?.path ?? "user-grid-1",
    meta: __nuxt_page_meta$m || {},
    alias: __nuxt_page_meta$m?.alias || [],
    redirect: __nuxt_page_meta$m?.redirect || undefined,
    component: () => import('./_nuxt/user-grid-1-61fc95bd.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$l?.name ?? "layouts-user-grid-2",
    path: __nuxt_page_meta$l?.path ?? "user-grid-2",
    meta: __nuxt_page_meta$l || {},
    alias: __nuxt_page_meta$l?.alias || [],
    redirect: __nuxt_page_meta$l?.redirect || undefined,
    component: () => import('./_nuxt/user-grid-2-19a57e71.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$k?.name ?? "layouts-user-grid-3",
    path: __nuxt_page_meta$k?.path ?? "user-grid-3",
    meta: __nuxt_page_meta$k || {},
    alias: __nuxt_page_meta$k?.alias || [],
    redirect: __nuxt_page_meta$k?.redirect || undefined,
    component: () => import('./_nuxt/user-grid-3-c35e879c.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$j?.name ?? "layouts-user-grid-4",
    path: __nuxt_page_meta$j?.path ?? "user-grid-4",
    meta: __nuxt_page_meta$j || {},
    alias: __nuxt_page_meta$j?.alias || [],
    redirect: __nuxt_page_meta$j?.redirect || undefined,
    component: () => import('./_nuxt/user-grid-4-06cd9724.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$i?.name ?? "layouts-utility-action-1",
    path: __nuxt_page_meta$i?.path ?? "utility-action-1",
    meta: __nuxt_page_meta$i || {},
    alias: __nuxt_page_meta$i?.alias || [],
    redirect: __nuxt_page_meta$i?.redirect || undefined,
    component: () => import('./_nuxt/utility-action-1-088bf721.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$h?.name ?? "layouts-utility-action-2",
    path: __nuxt_page_meta$h?.path ?? "utility-action-2",
    meta: __nuxt_page_meta$h || {},
    alias: __nuxt_page_meta$h?.alias || [],
    redirect: __nuxt_page_meta$h?.redirect || undefined,
    component: () => import('./_nuxt/utility-action-2-f93230c4.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$g?.name ?? "layouts-utility-billing",
    path: __nuxt_page_meta$g?.path ?? "utility-billing",
    meta: __nuxt_page_meta$g || {},
    alias: __nuxt_page_meta$g?.alias || [],
    redirect: __nuxt_page_meta$g?.redirect || undefined,
    component: () => import('./_nuxt/utility-billing-1772b055.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$f?.name ?? "layouts-utility-confirm",
    path: __nuxt_page_meta$f?.path ?? "utility-confirm",
    meta: __nuxt_page_meta$f || {},
    alias: __nuxt_page_meta$f?.alias || [],
    redirect: __nuxt_page_meta$f?.redirect || undefined,
    component: () => import('./_nuxt/utility-confirm-06e26eda.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$e?.name ?? "layouts-utility-error",
    path: __nuxt_page_meta$e?.path ?? "utility-error",
    meta: __nuxt_page_meta$e || {},
    alias: __nuxt_page_meta$e?.alias || [],
    redirect: __nuxt_page_meta$e?.redirect || undefined,
    component: () => import('./_nuxt/utility-error-5c1b2ba7.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$d?.name ?? "layouts-utility-invoice",
    path: __nuxt_page_meta$d?.path ?? "utility-invoice",
    meta: __nuxt_page_meta$d || {},
    alias: __nuxt_page_meta$d?.alias || [],
    redirect: __nuxt_page_meta$d?.redirect || undefined,
    component: () => import('./_nuxt/utility-invoice-48c7a3dc.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$c?.name ?? "layouts-utility-promotion",
    path: __nuxt_page_meta$c?.path ?? "utility-promotion",
    meta: __nuxt_page_meta$c || {},
    alias: __nuxt_page_meta$c?.alias || [],
    redirect: __nuxt_page_meta$c?.redirect || undefined,
    component: () => import('./_nuxt/utility-promotion-226a4531.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$b?.name ?? "layouts-utility-status",
    path: __nuxt_page_meta$b?.path ?? "utility-status",
    meta: __nuxt_page_meta$b || {},
    alias: __nuxt_page_meta$b?.alias || [],
    redirect: __nuxt_page_meta$b?.redirect || undefined,
    component: () => import('./_nuxt/utility-status-12450fc7.mjs').then(m => m.default || m)
  }
],
    name: __nuxt_page_meta$a?.name ?? undefined,
    meta: __nuxt_page_meta$a || {},
    alias: __nuxt_page_meta$a?.alias || [],
    redirect: __nuxt_page_meta$a?.redirect || undefined,
    component: () => import('./_nuxt/layouts-36839652.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$9?.name ?? "starter-collapse",
    path: __nuxt_page_meta$9?.path ?? "/starter-collapse",
    meta: __nuxt_page_meta$9 || {},
    alias: __nuxt_page_meta$9?.alias || [],
    redirect: __nuxt_page_meta$9?.redirect || undefined,
    component: () => import('./_nuxt/starter-collapse-72cc8a30.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$8?.name ?? "starter-sidebar",
    path: __nuxt_page_meta$8?.path ?? "/starter-sidebar",
    meta: __nuxt_page_meta$8 || {},
    alias: __nuxt_page_meta$8?.alias || [],
    redirect: __nuxt_page_meta$8?.redirect || undefined,
    component: () => import('./_nuxt/starter-sidebar-3f5f7640.mjs').then(m => m.default || m)
  },
  {
    name: "test-error",
    path: "/test-error",
    meta: {},
    alias: [],
    redirect: undefined,
    component: () => import('./_nuxt/test-error-6a872307.mjs').then(m => m.default || m)
  },
  {
    path: __nuxt_page_meta?.path ?? "/wizard",
    children: [
  {
    name: __nuxt_page_meta$7?.name ?? "wizard",
    path: __nuxt_page_meta$7?.path ?? "",
    meta: __nuxt_page_meta$7 || {},
    alias: __nuxt_page_meta$7?.alias || [],
    redirect: __nuxt_page_meta$7?.redirect || undefined,
    component: () => import('./_nuxt/index-b58a1ac8.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$6?.name ?? "wizard-step-2",
    path: __nuxt_page_meta$6?.path ?? "step-2",
    meta: __nuxt_page_meta$6 || {},
    alias: __nuxt_page_meta$6?.alias || [],
    redirect: __nuxt_page_meta$6?.redirect || undefined,
    component: () => import('./_nuxt/step-2-1e8522bc.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$5?.name ?? "wizard-step-3",
    path: __nuxt_page_meta$5?.path ?? "step-3",
    meta: __nuxt_page_meta$5 || {},
    alias: __nuxt_page_meta$5?.alias || [],
    redirect: __nuxt_page_meta$5?.redirect || undefined,
    component: () => import('./_nuxt/step-3-d4d43de0.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$4?.name ?? "wizard-step-4",
    path: __nuxt_page_meta$4?.path ?? "step-4",
    meta: __nuxt_page_meta$4 || {},
    alias: __nuxt_page_meta$4?.alias || [],
    redirect: __nuxt_page_meta$4?.redirect || undefined,
    component: () => import('./_nuxt/step-4-8e2bbfdc.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$3?.name ?? "wizard-step-5",
    path: __nuxt_page_meta$3?.path ?? "step-5",
    meta: __nuxt_page_meta$3 || {},
    alias: __nuxt_page_meta$3?.alias || [],
    redirect: __nuxt_page_meta$3?.redirect || undefined,
    component: () => import('./_nuxt/step-5-f18f812d.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$2?.name ?? "wizard-step-6",
    path: __nuxt_page_meta$2?.path ?? "step-6",
    meta: __nuxt_page_meta$2 || {},
    alias: __nuxt_page_meta$2?.alias || [],
    redirect: __nuxt_page_meta$2?.redirect || undefined,
    component: () => import('./_nuxt/step-6-c92f3fa1.mjs').then(m => m.default || m)
  },
  {
    name: __nuxt_page_meta$1?.name ?? "wizard-step-7",
    path: __nuxt_page_meta$1?.path ?? "step-7",
    meta: __nuxt_page_meta$1 || {},
    alias: __nuxt_page_meta$1?.alias || [],
    redirect: __nuxt_page_meta$1?.redirect || undefined,
    component: () => import('./_nuxt/step-7-a283fc23.mjs').then(m => m.default || m)
  }
],
    name: __nuxt_page_meta?.name ?? undefined,
    meta: __nuxt_page_meta || {},
    alias: __nuxt_page_meta?.alias || [],
    redirect: __nuxt_page_meta?.redirect || undefined,
    component: () => import('./_nuxt/wizard-e740327b.mjs').then(m => m.default || m)
  }
];

const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();
    const behavior = useRouter().options?.scrollBehaviorType ?? "auto";
    let position = savedPosition || void 0;
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (!position && from && to && routeAllowsScrollToTop !== false && _isDifferentRoute(from, to)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
      }
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await nextTick();
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = document.querySelector(selector);
    if (elem) {
      return parseFloat(getComputedStyle(elem).scrollMarginTop);
    }
  } catch {
  }
  return 0;
}
function _isDifferentRoute(from, to) {
  return to.path !== from.path || JSON.stringify(from.params) !== JSON.stringify(to.params);
}

const configRouterOptions = {};
const routerOptions = {
...configRouterOptions,
...routerOptions0,
};

/* _processed_nuxt_unctx_transform */
const validate = /* #__PURE__ */ defineNuxtRouteMiddleware(async (to) => {let __temp, __restore;
  if (!to.meta?.validate) {
    return;
  }
  useRouter();
  const result = (([__temp,__restore]=executeAsync(()=>Promise.resolve(to.meta.validate(to)))),__temp=await __temp,__restore(),__temp);
  if (result === true) {
    return;
  }
  {
    return result;
  }
});

/* _processed_nuxt_unctx_transform */
const manifest_45route_45rule = /* #__PURE__ */ defineNuxtRouteMiddleware(async (to) => {  {
    return;
  }
});

const globalMiddleware = [
  validate,
  manifest_45route_45rule
];
const namedMiddleware = {};

/* _processed_nuxt_unctx_transform */
const plugin$1 = /* #__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {let __temp, __restore;
    let routerBase =  useRuntimeConfig().app.baseURL;
    if (routerOptions.hashMode && !routerBase.includes("#")) {
      routerBase += "#";
    }
    const history = routerOptions.history?.(routerBase) ?? (createMemoryHistory(routerBase));
    const routes = routerOptions.routes?.(_routes) ?? _routes;
    let startPosition;
    const initialURL = nuxtApp.ssrContext.url ;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        router.options.scrollBehavior = routerOptions.scrollBehavior;
        return routerOptions.scrollBehavior?.(to, START_LOCATION, startPosition || savedPosition);
      },
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const _route = shallowRef(router.resolve(initialURL));
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      if (to.matched[0]?.components?.default === from.matched[0]?.components?.default) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key]
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    useError();
    try {
      if (true) {
        ;(([__temp,__restore]=executeAsync(()=>router.push(initialURL))),await __temp,__restore());;
      }
      ;(([__temp,__restore]=executeAsync(()=>router.isReady())),await __temp,__restore());;
    } catch (error2) {
(([__temp,__restore]=executeAsync(()=>nuxtApp.runWithContext(() => showError(error2)))),await __temp,__restore());    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!nuxtApp.ssrContext?.islandContext) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          if (Array.isArray(componentMiddleware)) {
            for (const entry of componentMiddleware) {
              middlewareEntries.add(entry);
            }
          } else {
            middlewareEntries.add(componentMiddleware);
          }
        }
        for (const entry of middlewareEntries) {
          const middleware = typeof entry === "string" ? nuxtApp._middleware.named[entry] || await namedMiddleware[entry]?.().then((r) => r.default || r) : entry;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry}'.`);
          }
          const result = await nuxtApp.runWithContext(() => middleware(to, from));
          {
            if (result === false || result instanceof Error) {
              const error2 = result || createError$1({
                statusCode: 404,
                statusMessage: `Page Not Found: ${initialURL}`
              });
              await nuxtApp.runWithContext(() => showError(error2));
              return false;
            }
          }
          if (result === true) {
            continue;
          }
          if (result || result === false) {
            return result;
          }
        }
      }
    });
    router.onError(() => {
      delete nuxtApp._processingMiddleware;
    });
    router.afterEach(async (to, _from, failure) => {
      delete nuxtApp._processingMiddleware;
      if (failure?.type === 4) {
        return;
      }
      if (to.matched.length === 0 && (!nuxtApp.ssrContext?.islandContext)) {
        await nuxtApp.runWithContext(() => showError(createError$1({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`
        })));
      } else if (to.redirectedFrom && to.fullPath !== initialURL) {
        await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        await router.replace({
          ...router.resolve(initialURL),
          name: void 0,
          // #4920, #4982
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});

const isVue2 = false;

/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */

/**
 * setActivePinia must be called to handle SSR at the top of functions like
 * `fetch`, `setup`, `serverPrefetch` and others
 */
let activePinia;
/**
 * Sets or unsets the active pinia. Used in SSR and internally when calling
 * actions and getters
 *
 * @param pinia - Pinia instance
 */
// @ts-expect-error: cannot constrain the type of the return
const setActivePinia = (pinia) => (activePinia = pinia);
const piniaSymbol = (/* istanbul ignore next */ Symbol());

function isPlainObject(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
o) {
    return (o &&
        typeof o === 'object' &&
        Object.prototype.toString.call(o) === '[object Object]' &&
        typeof o.toJSON !== 'function');
}
// type DeepReadonly<T> = { readonly [P in keyof T]: DeepReadonly<T[P]> }
// TODO: can we change these to numbers?
/**
 * Possible types for SubscriptionCallback
 */
var MutationType;
(function (MutationType) {
    /**
     * Direct mutation of the state:
     *
     * - `store.name = 'new name'`
     * - `store.$state.name = 'new name'`
     * - `store.list.push('new item')`
     */
    MutationType["direct"] = "direct";
    /**
     * Mutated the state with `$patch` and an object
     *
     * - `store.$patch({ name: 'newName' })`
     */
    MutationType["patchObject"] = "patch object";
    /**
     * Mutated the state with `$patch` and a function
     *
     * - `store.$patch(state => state.name = 'newName')`
     */
    MutationType["patchFunction"] = "patch function";
    // maybe reset? for $state = {} and $reset
})(MutationType || (MutationType = {}));

/**
 * Creates a Pinia instance to be used by the application
 */
function createPinia() {
    const scope = effectScope(true);
    // NOTE: here we could check the window object for a state and directly set it
    // if there is anything like it with Vue 3 SSR
    const state = scope.run(() => ref({}));
    let _p = [];
    // plugins added before calling app.use(pinia)
    let toBeInstalled = [];
    const pinia = markRaw({
        install(app) {
            // this allows calling useStore() outside of a component setup after
            // installing pinia's plugin
            setActivePinia(pinia);
            {
                pinia._a = app;
                app.provide(piniaSymbol, pinia);
                app.config.globalProperties.$pinia = pinia;
                toBeInstalled.forEach((plugin) => _p.push(plugin));
                toBeInstalled = [];
            }
        },
        use(plugin) {
            if (!this._a && !isVue2) {
                toBeInstalled.push(plugin);
            }
            else {
                _p.push(plugin);
            }
            return this;
        },
        _p,
        // it's actually undefined here
        // @ts-expect-error
        _a: null,
        _e: scope,
        _s: new Map(),
        state,
    });
    return pinia;
}

const noop$1 = () => { };
function addSubscription(subscriptions, callback, detached, onCleanup = noop$1) {
    subscriptions.push(callback);
    const removeSubscription = () => {
        const idx = subscriptions.indexOf(callback);
        if (idx > -1) {
            subscriptions.splice(idx, 1);
            onCleanup();
        }
    };
    if (!detached && getCurrentScope()) {
        onScopeDispose(removeSubscription);
    }
    return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
    subscriptions.slice().forEach((callback) => {
        callback(...args);
    });
}

const fallbackRunWithContext = (fn) => fn();
function mergeReactiveObjects(target, patchToApply) {
    // Handle Map instances
    if (target instanceof Map && patchToApply instanceof Map) {
        patchToApply.forEach((value, key) => target.set(key, value));
    }
    // Handle Set instances
    if (target instanceof Set && patchToApply instanceof Set) {
        patchToApply.forEach(target.add, target);
    }
    // no need to go through symbols because they cannot be serialized anyway
    for (const key in patchToApply) {
        if (!patchToApply.hasOwnProperty(key))
            continue;
        const subPatch = patchToApply[key];
        const targetValue = target[key];
        if (isPlainObject(targetValue) &&
            isPlainObject(subPatch) &&
            target.hasOwnProperty(key) &&
            !isRef(subPatch) &&
            !isReactive(subPatch)) {
            // NOTE: here I wanted to warn about inconsistent types but it's not possible because in setup stores one might
            // start the value of a property as a certain type e.g. a Map, and then for some reason, during SSR, change that
            // to `undefined`. When trying to hydrate, we want to override the Map with `undefined`.
            target[key] = mergeReactiveObjects(targetValue, subPatch);
        }
        else {
            // @ts-expect-error: subPatch is a valid value
            target[key] = subPatch;
        }
    }
    return target;
}
const skipHydrateSymbol = /* istanbul ignore next */ Symbol();
/**
 * Returns whether a value should be hydrated
 *
 * @param obj - target variable
 * @returns true if `obj` should be hydrated
 */
function shouldHydrate(obj) {
    return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}
const { assign } = Object;
function isComputed(o) {
    return !!(isRef(o) && o.effect);
}
function createOptionsStore(id, options, pinia, hot) {
    const { state, actions, getters } = options;
    const initialState = pinia.state.value[id];
    let store;
    function setup() {
        if (!initialState && (!("production" !== 'production') )) {
            /* istanbul ignore if */
            {
                pinia.state.value[id] = state ? state() : {};
            }
        }
        // avoid creating a state in pinia.state.value
        const localState = toRefs(pinia.state.value[id]);
        return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
            computedGetters[name] = markRaw(computed(() => {
                setActivePinia(pinia);
                // it was created just before
                const store = pinia._s.get(id);
                // @ts-expect-error
                // return getters![name].call(context, context)
                // TODO: avoid reading the getter while assigning with a global variable
                return getters[name].call(store, store);
            }));
            return computedGetters;
        }, {}));
    }
    store = createSetupStore(id, setup, options, pinia, hot, true);
    return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
    let scope;
    const optionsForPlugin = assign({ actions: {} }, options);
    // watcher options for $subscribe
    const $subscribeOptions = {
        deep: true,
        // flush: 'post',
    };
    // internal state
    let isListening; // set to true at the end
    let isSyncListening; // set to true at the end
    let subscriptions = [];
    let actionSubscriptions = [];
    let debuggerEvents;
    const initialState = pinia.state.value[$id];
    // avoid setting the state for option stores if it is set
    // by the setup
    if (!isOptionsStore && !initialState && (!("production" !== 'production') )) {
        /* istanbul ignore if */
        {
            pinia.state.value[$id] = {};
        }
    }
    ref({});
    // avoid triggering too many listeners
    // https://github.com/vuejs/pinia/issues/1129
    let activeListener;
    function $patch(partialStateOrMutator) {
        let subscriptionMutation;
        isListening = isSyncListening = false;
        if (typeof partialStateOrMutator === 'function') {
            partialStateOrMutator(pinia.state.value[$id]);
            subscriptionMutation = {
                type: MutationType.patchFunction,
                storeId: $id,
                events: debuggerEvents,
            };
        }
        else {
            mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
            subscriptionMutation = {
                type: MutationType.patchObject,
                payload: partialStateOrMutator,
                storeId: $id,
                events: debuggerEvents,
            };
        }
        const myListenerId = (activeListener = Symbol());
        nextTick().then(() => {
            if (activeListener === myListenerId) {
                isListening = true;
            }
        });
        isSyncListening = true;
        // because we paused the watcher, we need to manually call the subscriptions
        triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
    }
    const $reset = isOptionsStore
        ? function $reset() {
            const { state } = options;
            const newState = state ? state() : {};
            // we use a patch to group all changes into one single subscription
            this.$patch(($state) => {
                assign($state, newState);
            });
        }
        : /* istanbul ignore next */
            noop$1;
    function $dispose() {
        scope.stop();
        subscriptions = [];
        actionSubscriptions = [];
        pinia._s.delete($id);
    }
    /**
     * Wraps an action to handle subscriptions.
     *
     * @param name - name of the action
     * @param action - action to wrap
     * @returns a wrapped action to handle subscriptions
     */
    function wrapAction(name, action) {
        return function () {
            setActivePinia(pinia);
            const args = Array.from(arguments);
            const afterCallbackList = [];
            const onErrorCallbackList = [];
            function after(callback) {
                afterCallbackList.push(callback);
            }
            function onError(callback) {
                onErrorCallbackList.push(callback);
            }
            // @ts-expect-error
            triggerSubscriptions(actionSubscriptions, {
                args,
                name,
                store,
                after,
                onError,
            });
            let ret;
            try {
                ret = action.apply(this && this.$id === $id ? this : store, args);
                // handle sync errors
            }
            catch (error) {
                triggerSubscriptions(onErrorCallbackList, error);
                throw error;
            }
            if (ret instanceof Promise) {
                return ret
                    .then((value) => {
                    triggerSubscriptions(afterCallbackList, value);
                    return value;
                })
                    .catch((error) => {
                    triggerSubscriptions(onErrorCallbackList, error);
                    return Promise.reject(error);
                });
            }
            // trigger after callbacks
            triggerSubscriptions(afterCallbackList, ret);
            return ret;
        };
    }
    const partialStore = {
        _p: pinia,
        // _s: scope,
        $id,
        $onAction: addSubscription.bind(null, actionSubscriptions),
        $patch,
        $reset,
        $subscribe(callback, options = {}) {
            const removeSubscription = addSubscription(subscriptions, callback, options.detached, () => stopWatcher());
            const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
                if (options.flush === 'sync' ? isSyncListening : isListening) {
                    callback({
                        storeId: $id,
                        type: MutationType.direct,
                        events: debuggerEvents,
                    }, state);
                }
            }, assign({}, $subscribeOptions, options)));
            return removeSubscription;
        },
        $dispose,
    };
    const store = reactive(partialStore);
    // store the partial store now so the setup of stores can instantiate each other before they are finished without
    // creating infinite loops.
    pinia._s.set($id, store);
    const runWithContext = (pinia._a && pinia._a.runWithContext) || fallbackRunWithContext;
    // TODO: idea create skipSerialize that marks properties as non serializable and they are skipped
    const setupStore = runWithContext(() => pinia._e.run(() => (scope = effectScope()).run(setup)));
    // overwrite existing actions to support $onAction
    for (const key in setupStore) {
        const prop = setupStore[key];
        if ((isRef(prop) && !isComputed(prop)) || isReactive(prop)) {
            // mark it as a piece of state to be serialized
            if (!isOptionsStore) {
                // in setup stores we must hydrate the state and sync pinia state tree with the refs the user just created
                if (initialState && shouldHydrate(prop)) {
                    if (isRef(prop)) {
                        prop.value = initialState[key];
                    }
                    else {
                        // probably a reactive object, lets recursively assign
                        // @ts-expect-error: prop is unknown
                        mergeReactiveObjects(prop, initialState[key]);
                    }
                }
                // transfer the ref to the pinia state to keep everything in sync
                /* istanbul ignore if */
                {
                    pinia.state.value[$id][key] = prop;
                }
            }
            // action
        }
        else if (typeof prop === 'function') {
            // @ts-expect-error: we are overriding the function we avoid wrapping if
            const actionValue = wrapAction(key, prop);
            // this a hot module replacement store because the hotUpdate method needs
            // to do it with the right context
            /* istanbul ignore if */
            {
                // @ts-expect-error
                setupStore[key] = actionValue;
            }
            // list actions so they can be used in plugins
            // @ts-expect-error
            optionsForPlugin.actions[key] = prop;
        }
        else ;
    }
    // add the state, getters, and action properties
    /* istanbul ignore if */
    {
        assign(store, setupStore);
        // allows retrieving reactive objects with `storeToRefs()`. Must be called after assigning to the reactive object.
        // Make `storeToRefs()` work with `reactive()` #799
        assign(toRaw(store), setupStore);
    }
    // use this instead of a computed with setter to be able to create it anywhere
    // without linking the computed lifespan to wherever the store is first
    // created.
    Object.defineProperty(store, '$state', {
        get: () => (pinia.state.value[$id]),
        set: (state) => {
            $patch(($state) => {
                assign($state, state);
            });
        },
    });
    // apply all plugins
    pinia._p.forEach((extender) => {
        /* istanbul ignore else */
        {
            assign(store, scope.run(() => extender({
                store,
                app: pinia._a,
                pinia,
                options: optionsForPlugin,
            })));
        }
    });
    // only apply hydrate to option stores with an initial state in pinia
    if (initialState &&
        isOptionsStore &&
        options.hydrate) {
        options.hydrate(store.$state, initialState);
    }
    isListening = true;
    isSyncListening = true;
    return store;
}
function defineStore(
// TODO: add proper types from above
idOrOptions, setup, setupOptions) {
    let id;
    let options;
    const isSetupStore = typeof setup === 'function';
    if (typeof idOrOptions === 'string') {
        id = idOrOptions;
        // the option store setup will contain the actual options in this case
        options = isSetupStore ? setupOptions : setup;
    }
    else {
        options = idOrOptions;
        id = idOrOptions.id;
    }
    function useStore(pinia, hot) {
        const hasContext = hasInjectionContext();
        pinia =
            // in test mode, ignore the argument provided as we can always retrieve a
            // pinia instance with getActivePinia()
            (pinia) ||
                (hasContext ? inject(piniaSymbol, null) : null);
        if (pinia)
            setActivePinia(pinia);
        pinia = activePinia;
        if (!pinia._s.has(id)) {
            // creating the store registers it in `pinia._s`
            if (isSetupStore) {
                createSetupStore(id, setup, options, pinia);
            }
            else {
                createOptionsStore(id, options, pinia);
            }
        }
        const store = pinia._s.get(id);
        // StoreGeneric cannot be casted towards Store
        return store;
    }
    useStore.$id = id;
    return useStore;
}

const plugin = /* #__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();
  nuxtApp.vueApp.use(pinia);
  setActivePinia(pinia);
  {
    nuxtApp.payload.pinia = pinia.state.value;
  }
  return {
    provide: {
      pinia
    }
  };
});

const reducers = {
  NuxtError: (data) => isNuxtError(data) && data.toJSON(),
  EmptyShallowRef: (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  EmptyRef: (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  ShallowRef: (data) => isRef(data) && isShallow(data) && data.value,
  ShallowReactive: (data) => isReactive(data) && isShallow(data) && toRaw(data),
  Ref: (data) => isRef(data) && data.value,
  Reactive: (data) => isReactive(data) && toRaw(data)
};
const revive_payload_server_OSLxLqQOnG = /* #__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const reducer in reducers) {
      definePayloadReducer(reducer, reducers[reducer]);
    }
  }
});

const LazyDocComponentDemo = defineAsyncComponent(() => import('./_nuxt/DocComponentDemo-329baefe.mjs').then(r => r.default));

const LazyDocComponentList = defineAsyncComponent(() => import('./_nuxt/DocComponentList-8877d7fc.mjs').then(r => r.default));

const LazyDocComponentMeta = defineAsyncComponent(() => import('./_nuxt/DocComponentMeta-62aa1298.mjs').then(r => r.default));

const LazyDocGridIcon = defineAsyncComponent(() => import('./_nuxt/DocGridIcon-13d28ec7.mjs').then(r => r.default));

const LazyDocHeading = defineAsyncComponent(() => import('./_nuxt/DocHeading-ea760f14.mjs').then(r => r.default));

const LazyDocLinkExternal = defineAsyncComponent(() => import('./_nuxt/DocLinkExternal-c44d7a4b.mjs').then(r => r.default));

const LazyDocLinkImage = defineAsyncComponent(() => import('./_nuxt/DocLinkImage-25cffcf2.mjs').then(r => r.default));

const LazyDocLinker = defineAsyncComponent(() => import('./_nuxt/DocLinker-f1de36b5.mjs').then(r => r.default));

const LazyDocMessage = defineAsyncComponent(() => import('./_nuxt/DocMessage-975b6d81.mjs').then(r => r.default));

const LazyDocNav = defineAsyncComponent(() => import('./_nuxt/DocNav-d2756c6f.mjs').then(r => r.default));

const LazyDocOverview = defineAsyncComponent(() => import('./_nuxt/DocOverview-bc92c1f4.mjs').then(r => r.default));

const LazyDocOverviewLayers = defineAsyncComponent(() => import('./_nuxt/DocOverviewLayers-5817960a.mjs').then(r => r.default));

const LazyProseA = defineAsyncComponent(() => import('./_nuxt/ProseA-77396ecd.mjs').then(r => r.default));

const LazyProseCode = defineAsyncComponent(() => import('./_nuxt/ProseCode-d220f79e.mjs').then(r => r.default));

const LazyProseHr = defineAsyncComponent(() => import('./_nuxt/ProseHr-a1de3cfc.mjs').then(r => r.default));

const LazyProseLi = defineAsyncComponent(() => import('./_nuxt/ProseLi-d7eb8704.mjs').then(r => r.default));

const LazyProsePre = defineAsyncComponent(() => import('./_nuxt/ProsePre-f783416a.mjs').then(r => r.default));

const LazyProseUl = defineAsyncComponent(() => import('./_nuxt/ProseUl-b3b35039.mjs').then(r => r.default));

const LazyDemoAccountMenu = defineAsyncComponent(() => import('./_nuxt/DemoAccountMenu-d8e8a032.mjs').then(r => r.default));

const LazyDemoCircularMenuActivity = defineAsyncComponent(() => import('./_nuxt/DemoCircularMenuActivity-83c252dc.mjs').then(r => r.default));

const LazyDemoCircularMenuLanguage = defineAsyncComponent(() => import('./_nuxt/DemoCircularMenuLanguage-b8f975da.mjs').then(r => r.default));

const LazyDemoCircularMenuNotifications = defineAsyncComponent(() => import('./_nuxt/DemoCircularMenuNotifications-1192cffc.mjs').then(r => r.default));

const LazyDemoCollapseNavigationFooter = defineAsyncComponent(() => import('./_nuxt/DemoCollapseNavigationFooter-ca529344.mjs').then(r => r.default));

const LazyDemoCollapseNavigationHeader = defineAsyncComponent(() => import('./_nuxt/DemoCollapseNavigationHeader-f568ead4.mjs').then(r => r.default));

const LazyDemoPanelActivity = defineAsyncComponent(() => import('./_nuxt/DemoPanelActivity-b74dc326.mjs').then(r => r.default));

const LazyDemoPanelLanguage = defineAsyncComponent(() => import('./_nuxt/DemoPanelLanguage-9ae86673.mjs').then(r => r.default));

const LazyDemoPanelSearch = defineAsyncComponent(() => import('./_nuxt/DemoPanelSearch-417c9303.mjs').then(r => r.default));

const LazyDemoPanelTask = defineAsyncComponent(() => import('./_nuxt/DemoPanelTask-d4a743f9.mjs').then(r => r.default));

const LazyDemoSubsidebarDashboards = defineAsyncComponent(() => import('./_nuxt/DemoSubsidebarDashboards-9364a3c3.mjs').then(r => r.default));

const LazyDemoSubsidebarLayouts = defineAsyncComponent(() => import('./_nuxt/DemoSubsidebarLayouts-ff3cde0c.mjs').then(r => r.default));

const LazyDemoThemeToggle = defineAsyncComponent(() => import('./_nuxt/DemoThemeToggle-88c1e17a.mjs').then(r => r.default));

const LazyDemoToolbarAccountMenu = defineAsyncComponent(() => import('./_nuxt/DemoToolbarAccountMenu-427f5546.mjs').then(r => r.default));

const LazyDemoToolbarActivity = defineAsyncComponent(() => import('./_nuxt/DemoToolbarActivity-91277d12.mjs').then(r => r.default));

const LazyDemoToolbarCustomize = defineAsyncComponent(() => import('./_nuxt/DemoToolbarCustomize-b0b9e3bc.mjs').then(r => r.default));

const LazyDemoToolbarLanguage = defineAsyncComponent(() => import('./_nuxt/DemoToolbarLanguage-38afd560.mjs').then(r => r.default));

const LazyDemoToolbarNotifications = defineAsyncComponent(() => import('./_nuxt/DemoToolbarNotifications-6f987958.mjs').then(r => r.default));

const LazyDemoToolbarSearch = defineAsyncComponent(() => import('./_nuxt/DemoToolbarSearch-51b2a578.mjs').then(r => r.default));

const LazyDemoTopnavWorkspaceDropdown = defineAsyncComponent(() => import('./_nuxt/DemoTopnavWorkspaceDropdown-4c91bb56.mjs').then(r => r.default));

const LazyTairoLogo = defineAsyncComponent(() => import('./_nuxt/TairoLogo-688db51d.mjs').then(r => r.default));

const LazyTairoLogoText = defineAsyncComponent(() => Promise.resolve().then(function () { return TairoLogoText; }).then(r => r.default));

const LazyTairoToaster = defineAsyncComponent(() => import('./_nuxt/TairoToaster-6fd14de6.mjs').then(r => r.default));

const LazyTairoTocAnchor = defineAsyncComponent(() => import('./_nuxt/TairoTocAnchor-4ae1eaf7.mjs').then(r => r.default));

const LazyDocLayoutSection = defineAsyncComponent(() => import('./_nuxt/DocLayoutSection-827b2b8a.mjs').then(r => r.default));

const LazyDocSubsidebarCollapseLink = defineAsyncComponent(() => import('./_nuxt/DocSubsidebarCollapseLink-3bcd6d38.mjs').then(r => r.default));

const LazyDocSubsidebarDocumentation = defineAsyncComponent(() => import('./_nuxt/DocSubsidebarDocumentation-af352d6e.mjs').then(r => r.default));

const LazyContentDoc = defineAsyncComponent(() => import('./_nuxt/ContentDoc-556da6dd.mjs').then(r => r.default));

const LazyContentList = defineAsyncComponent(() => import('./_nuxt/ContentList-1ad1c0d6.mjs').then(r => r.default));

const LazyContentNavigation = defineAsyncComponent(() => import('./_nuxt/ContentNavigation-a8bf5fc4.mjs').then(r => r.default));

const LazyContentQuery = defineAsyncComponent(() => import('./_nuxt/ContentQuery-6cbf6f22.mjs').then(r => r.default));

const LazyContentRenderer = defineAsyncComponent(() => import('./_nuxt/ContentRenderer-210361e4.mjs').then(r => r.default));

const LazyContentRendererMarkdown = defineAsyncComponent(() => import('./_nuxt/ContentRendererMarkdown-db7fac80.mjs').then(r => r.default));

const LazyContentSlot = defineAsyncComponent(() => import('./_nuxt/ContentSlot-0844e3fb.mjs').then(r => r.default));

const LazyDocumentDrivenEmpty = defineAsyncComponent(() => import('./_nuxt/DocumentDrivenEmpty-fe372f2c.mjs').then(r => r.default));

const LazyDocumentDrivenNotFound = defineAsyncComponent(() => import('./_nuxt/DocumentDrivenNotFound-4454f765.mjs').then(r => r.default));

const LazyMarkdown = defineAsyncComponent(() => import('./_nuxt/Markdown-a9de7bda.mjs').then(r => r.default));

const LazyProseCodeInline = defineAsyncComponent(() => import('./_nuxt/ProseCodeInline-746f721c.mjs').then(r => r.default));

const LazyProseBlockquote = defineAsyncComponent(() => import('./_nuxt/ProseBlockquote-a166fae6.mjs').then(r => r.default));

const LazyProseEm = defineAsyncComponent(() => import('./_nuxt/ProseEm-353bebf5.mjs').then(r => r.default));

const LazyProseH1 = defineAsyncComponent(() => import('./_nuxt/ProseH1-c80f70b4.mjs').then(r => r.default));

const LazyProseH2 = defineAsyncComponent(() => import('./_nuxt/ProseH2-8249da83.mjs').then(r => r.default));

const LazyProseH3 = defineAsyncComponent(() => import('./_nuxt/ProseH3-e9466960.mjs').then(r => r.default));

const LazyProseH4 = defineAsyncComponent(() => import('./_nuxt/ProseH4-734ce524.mjs').then(r => r.default));

const LazyProseH5 = defineAsyncComponent(() => import('./_nuxt/ProseH5-b97f2d15.mjs').then(r => r.default));

const LazyProseH6 = defineAsyncComponent(() => import('./_nuxt/ProseH6-4c32b561.mjs').then(r => r.default));

const LazyProseImg = defineAsyncComponent(() => import('./_nuxt/ProseImg-e57e31c9.mjs').then(r => r.default));

const LazyProseOl = defineAsyncComponent(() => import('./_nuxt/ProseOl-73c58a37.mjs').then(r => r.default));

const LazyProseP = defineAsyncComponent(() => import('./_nuxt/ProseP-7040b955.mjs').then(r => r.default));

const LazyProseStrong = defineAsyncComponent(() => import('./_nuxt/ProseStrong-9ec0783c.mjs').then(r => r.default));

const LazyProseTable = defineAsyncComponent(() => import('./_nuxt/ProseTable-60021123.mjs').then(r => r.default));

const LazyProseTbody = defineAsyncComponent(() => import('./_nuxt/ProseTbody-8df1f0cb.mjs').then(r => r.default));

const LazyProseTd = defineAsyncComponent(() => import('./_nuxt/ProseTd-2752a3a7.mjs').then(r => r.default));

const LazyProseTh = defineAsyncComponent(() => import('./_nuxt/ProseTh-89f88199.mjs').then(r => r.default));

const LazyProseThead = defineAsyncComponent(() => import('./_nuxt/ProseThead-dcf96b3d.mjs').then(r => r.default));

const LazyProseTr = defineAsyncComponent(() => import('./_nuxt/ProseTr-c41e473c.mjs').then(r => r.default));

const LazyIcon = defineAsyncComponent(() => Promise.resolve().then(function () { return Icon; }).then(r => r.default));

const LazyIconCSS = defineAsyncComponent(() => import('./_nuxt/IconCSS-9519f802.mjs').then(r => r.default));

const lazyGlobalComponents = [
  ["DocComponentDemo", LazyDocComponentDemo],
["DocComponentList", LazyDocComponentList],
["DocComponentMeta", LazyDocComponentMeta],
["DocGridIcon", LazyDocGridIcon],
["DocHeading", LazyDocHeading],
["DocLinkExternal", LazyDocLinkExternal],
["DocLinkImage", LazyDocLinkImage],
["DocLinker", LazyDocLinker],
["DocMessage", LazyDocMessage],
["DocNav", LazyDocNav],
["DocOverview", LazyDocOverview],
["DocOverviewLayers", LazyDocOverviewLayers],
["ProseA", LazyProseA],
["ProseCode", LazyProseCode],
["ProseHr", LazyProseHr],
["ProseLi", LazyProseLi],
["ProsePre", LazyProsePre],
["ProseUl", LazyProseUl],
["DemoAccountMenu", LazyDemoAccountMenu],
["DemoCircularMenuActivity", LazyDemoCircularMenuActivity],
["DemoCircularMenuLanguage", LazyDemoCircularMenuLanguage],
["DemoCircularMenuNotifications", LazyDemoCircularMenuNotifications],
["DemoCollapseNavigationFooter", LazyDemoCollapseNavigationFooter],
["DemoCollapseNavigationHeader", LazyDemoCollapseNavigationHeader],
["DemoPanelActivity", LazyDemoPanelActivity],
["DemoPanelLanguage", LazyDemoPanelLanguage],
["DemoPanelSearch", LazyDemoPanelSearch],
["DemoPanelTask", LazyDemoPanelTask],
["DemoSubsidebarDashboards", LazyDemoSubsidebarDashboards],
["DemoSubsidebarLayouts", LazyDemoSubsidebarLayouts],
["DemoThemeToggle", LazyDemoThemeToggle],
["DemoToolbarAccountMenu", LazyDemoToolbarAccountMenu],
["DemoToolbarActivity", LazyDemoToolbarActivity],
["DemoToolbarCustomize", LazyDemoToolbarCustomize],
["DemoToolbarLanguage", LazyDemoToolbarLanguage],
["DemoToolbarNotifications", LazyDemoToolbarNotifications],
["DemoToolbarSearch", LazyDemoToolbarSearch],
["DemoTopnavWorkspaceDropdown", LazyDemoTopnavWorkspaceDropdown],
["TairoLogo", LazyTairoLogo],
["TairoLogoText", LazyTairoLogoText],
["TairoToaster", LazyTairoToaster],
["TairoTocAnchor", LazyTairoTocAnchor],
["DocLayoutSection", LazyDocLayoutSection],
["DocSubsidebarCollapseLink", LazyDocSubsidebarCollapseLink],
["DocSubsidebarDocumentation", LazyDocSubsidebarDocumentation],
["ContentDoc", LazyContentDoc],
["ContentList", LazyContentList],
["ContentNavigation", LazyContentNavigation],
["ContentQuery", LazyContentQuery],
["ContentRenderer", LazyContentRenderer],
["ContentRendererMarkdown", LazyContentRendererMarkdown],
["MDCSlot", LazyContentSlot],
["DocumentDrivenEmpty", LazyDocumentDrivenEmpty],
["DocumentDrivenNotFound", LazyDocumentDrivenNotFound],
["Markdown", LazyMarkdown],
["ProseCodeInline", LazyProseCodeInline],
["ProseBlockquote", LazyProseBlockquote],
["ProseEm", LazyProseEm],
["ProseH1", LazyProseH1],
["ProseH2", LazyProseH2],
["ProseH3", LazyProseH3],
["ProseH4", LazyProseH4],
["ProseH5", LazyProseH5],
["ProseH6", LazyProseH6],
["ProseImg", LazyProseImg],
["ProseOl", LazyProseOl],
["ProseP", LazyProseP],
["ProseStrong", LazyProseStrong],
["ProseTable", LazyProseTable],
["ProseTbody", LazyProseTbody],
["ProseTd", LazyProseTd],
["ProseTh", LazyProseTh],
["ProseThead", LazyProseThead],
["ProseTr", LazyProseTr],
["Icon", LazyIcon],
["IconCSS", LazyIconCSS],
  
];

const components_plugin_KR1HBZs4kY = /* #__PURE__ */ defineNuxtPlugin({
  name: 'nuxt:global-components',
  setup (nuxtApp) {
    for (const [name, component] of lazyGlobalComponents) {
      nuxtApp.vueApp.component(name, component);
      nuxtApp.vueApp.component('Lazy' + name, component);
    }
  }
});

const preference = "system";

const plugin_server_1xBQVW6aQz = /* #__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const colorMode = useState("color-mode", () => reactive({
    preference,
    value: preference,
    unknown: true,
    forced: false
  })).value;
  const htmlAttrs = {};
  {
    useHead({ htmlAttrs });
  }
  useRouter().afterEach((to) => {
    const forcedColorMode = to.meta.colorMode;
    if (forcedColorMode && forcedColorMode !== "system") {
      colorMode.value = htmlAttrs["data-color-mode-forced"] = forcedColorMode;
      colorMode.forced = true;
    } else if (forcedColorMode === "system") {
      console.warn("You cannot force the colorMode to system at the page level.");
    }
  });
  nuxtApp.provide("colorMode", colorMode);
});

function createEventBus() {
  const queue = {};
  function on(name, callback) {
    queue[name] = queue[name] || [];
    queue[name].push(callback);
  }
  function off(name, callback) {
    if (queue[name]) {
      for (let i = 0; i < queue[name].length; i++) {
        if (queue[name][i] === callback) {
          queue[name].splice(i, 1);
          break;
        }
      }
    }
  }
  function emit(name, ...args) {
    if (queue[name]) {
      queue[name].forEach((callback) => {
        callback(...args);
      });
    }
  }
  return {
    queue,
    on,
    off,
    emit
  };
}

function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}

function toValue(r) {
  return typeof r === "function" ? r() : unref(r);
}

const isClient = "undefined" !== "undefined" ;
const isDef = (val) => typeof val !== "undefined";
const notNullish = (val) => val != null;
const toString = Object.prototype.toString;
const isObject = (val) => toString.call(val) === "[object Object]";
const noop = () => {
};

function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
function debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  let lastRejector = noop;
  const _clearTimeout = (timer2) => {
    clearTimeout(timer2);
    lastRejector();
    lastRejector = noop;
  };
  const filter = (invoke) => {
    const duration = toValue(ms);
    const maxDuration = toValue(options.maxWait);
    if (timer)
      _clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        _clearTimeout(maxTimer);
        maxTimer = null;
      }
      return Promise.resolve(invoke());
    }
    return new Promise((resolve, reject) => {
      lastRejector = options.rejectOnCancel ? reject : resolve;
      if (maxDuration && !maxTimer) {
        maxTimer = setTimeout(() => {
          if (timer)
            _clearTimeout(timer);
          maxTimer = null;
          resolve(invoke());
        }, maxDuration);
      }
      timer = setTimeout(() => {
        if (maxTimer)
          _clearTimeout(maxTimer);
        maxTimer = null;
        resolve(invoke());
      }, duration);
    });
  };
  return filter;
}

function toRef(...args) {
  if (args.length !== 1)
    return toRef$1(...args);
  const r = args[0];
  return typeof r === "function" ? readonly(customRef(() => ({ get: r, set: noop }))) : ref(r);
}

function useDebounceFn(fn, ms = 200, options = {}) {
  return createFilterWrapper(
    debounceFilter(ms, options),
    fn
  );
}

function refDebounced(value, ms = 200, options = {}) {
  const debounced = ref(value.value);
  const updater = useDebounceFn(() => {
    debounced.value = value.value;
  }, ms, options);
  watch(value, () => updater());
  return debounced;
}

function tryOnBeforeMount(fn, sync = true) {
  if (getCurrentInstance())
      ;
  else if (sync)
    fn();
  else
    nextTick(fn);
}

function tryOnBeforeUnmount(fn) {
  if (getCurrentInstance())
      ;
}

function tryOnMounted(fn, sync = true) {
  if (getCurrentInstance())
      ;
  else if (sync)
    fn();
  else
    nextTick(fn);
}

function useIntervalFn(cb, interval = 1e3, options = {}) {
  const {
    immediate = true,
    immediateCallback = false
  } = options;
  let timer = null;
  const isActive = ref(false);
  function clean() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }
  function pause() {
    isActive.value = false;
    clean();
  }
  function resume() {
    const intervalValue = toValue(interval);
    if (intervalValue <= 0)
      return;
    isActive.value = true;
    if (immediateCallback)
      cb();
    clean();
    timer = setInterval(cb, intervalValue);
  }
  if (immediate && isClient)
    resume();
  if (isRef(interval) || typeof interval === "function") {
    const stopWatch = watch(interval, () => {
      if (isActive.value && isClient)
        resume();
    });
    tryOnScopeDispose(stopWatch);
  }
  tryOnScopeDispose(pause);
  return {
    isActive,
    pause,
    resume
  };
}

function useTimeoutFn(cb, interval, options = {}) {
  const {
    immediate = true
  } = options;
  const isPending = ref(false);
  let timer = null;
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function stop() {
    isPending.value = false;
    clear();
  }
  function start(...args) {
    clear();
    isPending.value = true;
    timer = setTimeout(() => {
      isPending.value = false;
      timer = null;
      cb(...args);
    }, toValue(interval));
  }
  if (immediate) {
    isPending.value = true;
  }
  tryOnScopeDispose(stop);
  return {
    isPending: readonly(isPending),
    start,
    stop
  };
}

function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}

const defaultWindow = void 0;
const defaultNavigator = void 0;

function useEventListener(...args) {
  let target;
  let events;
  let listeners;
  let options;
  if (typeof args[0] === "string" || Array.isArray(args[0])) {
    [events, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events, listeners, options] = args;
  }
  if (!target)
    return noop;
  if (!Array.isArray(events))
    events = [events];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(
    () => [unrefElement(target), toValue(options)],
    ([el, options2]) => {
      cleanup();
      if (!el)
        return;
      const optionsClone = isObject(options2) ? { ...options2 } : options2;
      cleanups.push(
        ...events.flatMap((event) => {
          return listeners.map((listener) => register(el, event, listener, optionsClone));
        })
      );
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function onClickOutside(target, handler, options = {}) {
  const { window = defaultWindow, ignore = [], capture = true, detectIframe = false } = options;
  if (!window)
    return;
  let shouldListen = true;
  const shouldIgnore = (event) => {
    return ignore.some((target2) => {
      if (typeof target2 === "string") {
        return Array.from(window.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
      } else {
        const el = unrefElement(target2);
        return el && (event.target === el || event.composedPath().includes(el));
      }
    });
  };
  const listener = (event) => {
    const el = unrefElement(target);
    if (!el || el === event.target || event.composedPath().includes(el))
      return;
    if (event.detail === 0)
      shouldListen = !shouldIgnore(event);
    if (!shouldListen) {
      shouldListen = true;
      return;
    }
    handler(event);
  };
  const cleanup = [
    useEventListener(window, "click", listener, { passive: true, capture }),
    useEventListener(window, "pointerdown", (e) => {
      const el = unrefElement(target);
      if (el)
        shouldListen = !e.composedPath().includes(el) && !shouldIgnore(e);
    }, { passive: true }),
    detectIframe && useEventListener(window, "blur", (event) => {
      setTimeout(() => {
        var _a;
        const el = unrefElement(target);
        if (((_a = window.document.activeElement) == null ? void 0 : _a.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window.document.activeElement)))
          handler(event);
      }, 0);
    })
  ].filter(Boolean);
  const stop = () => cleanup.forEach((fn) => fn());
  return stop;
}

function createKeyPredicate(keyFilter) {
  if (typeof keyFilter === "function")
    return keyFilter;
  else if (typeof keyFilter === "string")
    return (event) => event.key === keyFilter;
  else if (Array.isArray(keyFilter))
    return (event) => keyFilter.includes(event.key);
  return () => true;
}
function onKeyStroke(...args) {
  let key;
  let handler;
  let options = {};
  if (args.length === 3) {
    key = args[0];
    handler = args[1];
    options = args[2];
  } else if (args.length === 2) {
    if (typeof args[1] === "object") {
      key = true;
      handler = args[0];
      options = args[1];
    } else {
      key = args[0];
      handler = args[1];
    }
  } else {
    key = true;
    handler = args[0];
  }
  const {
    target = defaultWindow,
    eventName = "keydown",
    passive = false,
    dedupe = false
  } = options;
  const predicate = createKeyPredicate(key);
  const listener = (e) => {
    if (e.repeat && toValue(dedupe))
      return;
    if (predicate(e))
      handler(e);
  };
  return useEventListener(target, eventName, listener, passive);
}

function useMounted() {
  const isMounted = ref(false);
  if (getCurrentInstance()) ;
  return isMounted;
}

function useSupported(callback) {
  const isMounted = useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}

function useRafFn(fn, options = {}) {
  const {
    immediate = true,
    fpsLimit = void 0,
    window = defaultWindow
  } = options;
  const isActive = ref(false);
  const intervalLimit = fpsLimit ? 1e3 / fpsLimit : null;
  let previousFrameTimestamp = 0;
  let rafId = null;
  function loop(timestamp) {
    if (!isActive.value || !window)
      return;
    const delta = timestamp - (previousFrameTimestamp || timestamp);
    if (intervalLimit && delta < intervalLimit) {
      rafId = window.requestAnimationFrame(loop);
      return;
    }
    fn({ delta, timestamp });
    previousFrameTimestamp = timestamp;
    rafId = window.requestAnimationFrame(loop);
  }
  function resume() {
    if (!isActive.value && window) {
      isActive.value = true;
      rafId = window.requestAnimationFrame(loop);
    }
  }
  function pause() {
    isActive.value = false;
    if (rafId != null && window) {
      window.cancelAnimationFrame(rafId);
      rafId = null;
    }
  }
  if (immediate)
    resume();
  tryOnScopeDispose(pause);
  return {
    isActive: readonly(isActive),
    pause,
    resume
  };
}

function useMediaQuery(query, options = {}) {
  const { window = defaultWindow } = options;
  const isSupported = useSupported(() => window && "matchMedia" in window && "undefined".matchMedia === "function");
  let mediaQuery;
  const matches = ref(false);
  const handler = (event) => {
    matches.value = event.matches;
  };
  const cleanup = () => {
    if (!mediaQuery)
      return;
    if ("removeEventListener" in mediaQuery)
      mediaQuery.removeEventListener("change", handler);
    else
      mediaQuery.removeListener(handler);
  };
  const stopWatch = watchEffect(() => {
    if (!isSupported.value)
      return;
    cleanup();
    mediaQuery = window.matchMedia(toValue(query));
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", handler);
    else
      mediaQuery.addListener(handler);
    matches.value = mediaQuery.matches;
  });
  tryOnScopeDispose(() => {
    stopWatch();
    cleanup();
    mediaQuery = void 0;
  });
  return matches;
}

function useClipboard(options = {}) {
  const {
    navigator = defaultNavigator,
    read = false,
    source,
    copiedDuring = 1500,
    legacy = false
  } = options;
  const isClipboardApiSupported = useSupported(() => navigator && "clipboard" in navigator);
  const isSupported = computed(() => isClipboardApiSupported.value || legacy);
  const text = ref("");
  const copied = ref(false);
  const timeout = useTimeoutFn(() => copied.value = false, copiedDuring);
  function updateText() {
    if (isClipboardApiSupported.value) {
      navigator.clipboard.readText().then((value) => {
        text.value = value;
      });
    } else {
      text.value = legacyRead();
    }
  }
  if (isSupported.value && read)
    useEventListener(["copy", "cut"], updateText);
  async function copy(value = toValue(source)) {
    if (isSupported.value && value != null) {
      if (isClipboardApiSupported.value)
        await navigator.clipboard.writeText(value);
      else
        legacyCopy(value);
      text.value = value;
      copied.value = true;
      timeout.start();
    }
  }
  function legacyCopy(value) {
    const ta = document.createElement("textarea");
    ta.value = value != null ? value : "";
    ta.style.position = "absolute";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }
  function legacyRead() {
    var _a, _b, _c;
    return (_c = (_b = (_a = document == null ? void 0 : document.getSelection) == null ? void 0 : _a.call(document)) == null ? void 0 : _b.toString()) != null ? _c : "";
  }
  return {
    isSupported,
    text,
    copied,
    copy
  };
}

function cloneFnJSON(source) {
  return JSON.parse(JSON.stringify(source));
}

function useIntersectionObserver(target, callback, options = {}) {
  const {
    root,
    rootMargin = "0px",
    threshold = 0.1,
    window = defaultWindow,
    immediate = true
  } = options;
  const isSupported = useSupported(() => window && "IntersectionObserver" in window);
  const targets = computed(() => {
    const _target = toValue(target);
    return (Array.isArray(_target) ? _target : [_target]).map(unrefElement).filter(notNullish);
  });
  let cleanup = noop;
  const isActive = ref(immediate);
  const stopWatch = isSupported.value ? watch(
    () => [targets.value, unrefElement(root), isActive.value],
    ([targets2, root2]) => {
      cleanup();
      if (!isActive.value)
        return;
      if (!targets2.length)
        return;
      const observer = new IntersectionObserver(
        callback,
        {
          root: unrefElement(root2),
          rootMargin,
          threshold
        }
      );
      targets2.forEach((el) => el && observer.observe(el));
      cleanup = () => {
        observer.disconnect();
        cleanup = noop;
      };
    },
    { immediate, flush: "post" }
  ) : noop;
  const stop = () => {
    cleanup();
    stopWatch();
    isActive.value = false;
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    isActive,
    pause() {
      cleanup();
      isActive.value = false;
    },
    resume() {
      isActive.value = true;
    },
    stop
  };
}

function useNow(options = {}) {
  const {
    controls: exposeControls = false,
    interval = "requestAnimationFrame"
  } = options;
  const now = ref(/* @__PURE__ */ new Date());
  const update = () => now.value = /* @__PURE__ */ new Date();
  const controls = interval === "requestAnimationFrame" ? useRafFn(update, { immediate: true }) : useIntervalFn(update, interval, { immediate: true });
  if (exposeControls) {
    return {
      now,
      ...controls
    };
  } else {
    return now;
  }
}

function useVModel(props, key, emit, options = {}) {
  var _a, _b, _c;
  const {
    clone = false,
    passive = false,
    eventName,
    deep = false,
    defaultValue,
    shouldEmit
  } = options;
  const vm = getCurrentInstance();
  const _emit = emit || (vm == null ? void 0 : vm.emit) || ((_a = vm == null ? void 0 : vm.$emit) == null ? void 0 : _a.bind(vm)) || ((_c = (_b = vm == null ? void 0 : vm.proxy) == null ? void 0 : _b.$emit) == null ? void 0 : _c.bind(vm == null ? void 0 : vm.proxy));
  let event = eventName;
  if (!key) {
    {
      key = "modelValue";
    }
  }
  event = event || `update:${key.toString()}`;
  const cloneFn = (val) => !clone ? val : typeof clone === "function" ? clone(val) : cloneFnJSON(val);
  const getValue = () => isDef(props[key]) ? cloneFn(props[key]) : defaultValue;
  const triggerEmit = (value) => {
    if (shouldEmit) {
      if (shouldEmit(value))
        _emit(event, value);
    } else {
      _emit(event, value);
    }
  };
  if (passive) {
    const initialValue = getValue();
    const proxy = ref(initialValue);
    let isUpdating = false;
    watch(
      () => props[key],
      (v) => {
        if (!isUpdating) {
          isUpdating = true;
          proxy.value = cloneFn(v);
          nextTick(() => isUpdating = false);
        }
      }
    );
    watch(
      proxy,
      (v) => {
        if (!isUpdating && (v !== props[key] || deep))
          triggerEmit(v);
      },
      { deep }
    );
    return proxy;
  } else {
    return computed({
      get() {
        return getValue();
      },
      set(value) {
        triggerEmit(value);
      }
    });
  }
}

function useWindowScroll(options = {}) {
  const { window = defaultWindow } = options;
  if (!window) {
    return {
      x: ref(0),
      y: ref(0)
    };
  }
  const x = ref(window.scrollX);
  const y = ref(window.scrollY);
  useEventListener(
    window,
    "scroll",
    () => {
      x.value = window.scrollX;
      y.value = window.scrollY;
    },
    {
      capture: false,
      passive: true
    }
  );
  return { x, y };
}

function useNinjaPausableTimeout(callback, timeout) {
  const pausedAt = ref(0);
  const startedAt = ref(0);
  const remaining = ref(0);
  let timer;
  function stop() {
    if (!timer) {
      return;
    }
    clearTimeout(timer);
    timer = void 0;
  }
  function start() {
    pausedAt.value = 0;
    startedAt.value = Date.now();
    remaining.value = timeout ?? 0;
    stop();
    timer = setTimeout(callback, remaining.value);
  }
  function pause() {
    if (!startedAt.value || pausedAt.value) {
      return;
    }
    stop();
    pausedAt.value = Date.now();
  }
  function resume() {
    if (!pausedAt.value) {
      return;
    }
    stop();
    remaining.value -= pausedAt.value - startedAt.value;
    startedAt.value = Date.now();
    pausedAt.value = 0;
    timer = setTimeout(callback, remaining.value);
  }
  tryOnBeforeUnmount();
  return {
    pausedAt,
    startedAt,
    remaining,
    start,
    stop,
    pause,
    resume
  };
}

function useNinjaToasterContainer(_theme) {
  const theme = toRef(_theme);
  const container = ref(null);
  const containerId = computed(() => theme.value?.containerId ?? "nt-container");
  tryOnBeforeMount(() => {
    container.value = document.getElementById(containerId.value);
    if (!container.value) {
      container.value = document.createElement("div");
      container.value.id = containerId.value;
      document.body.appendChild(container.value);
    }
    if (theme.value?.containerClass) {
      container.value.className = Array.isArray(theme.value.containerClass) ? theme.value.containerClass.join(" ") : theme.value.containerClass;
    }
  });
  return {
    container,
    containerId
  };
}

const NinjaToasterStateKey = Symbol.for(
  "NinjaToasterState"
);
function createNinjaToasterState(state) {
  provide(NinjaToasterStateKey, state);
}
function useNinjaToasterState() {
  const state = inject(NinjaToasterStateKey);
  if (!state) {
    throw new Error("NinjaToasterState is not provided");
  }
  return state;
}
function useNinjaToasterProgress() {
  const state = useNinjaToasterState();
  const now = ref(Date.now());
  const endAt = computed(() => {
    return state.timer.startedAt.value + state.timer.remaining.value;
  });
  const closeIn = computed(() => {
    return now.value - endAt.value;
  });
  const percent = computed(() => {
    if (!state.duration) {
      return 0;
    }
    const ratio = 1 - Math.max(0, Math.abs(closeIn.value)) / state.duration;
    return Math.round(ratio * 1e3) / 1e3;
  });
  tryOnMounted(() => {
    setInterval(() => {
      if (!state.isHovered.value) {
        now.value = Date.now();
      }
    }, 16);
  });
  tryOnBeforeUnmount();
  return {
    percent,
    endAt,
    closeIn
  };
}

function createRenderQueue() {
  const queue = [];
  let timer;
  function add(item) {
    queue.push(item);
    if (!timer) {
      timer = setTimeout(next, 100);
    }
    return () => {
      remove(item);
    };
  }
  function remove(item) {
    const index = queue.indexOf(item);
    if (index !== -1) {
      queue.splice(index, 1);
    }
  }
  function clear() {
    queue.length = 0;
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
    }
  }
  function next() {
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
    }
    const firstElement = queue[0];
    if (!firstElement) {
      return;
    }
    if (!firstElement.until()) {
      timer = setTimeout(next, 100);
      return;
    }
    queue.shift();
    firstElement.callback();
    if (queue.length > 0) {
      timer = setTimeout(next, 100);
    }
  }
  return {
    add,
    remove,
    clear
  };
}

const NinjaToaster = /* #__PURE__ */ defineComponent({
  name: "NinjaToaster",
  props: {
    content: {
      type: [String, Number, Object, Function],
      required: true
    },
    duration: {
      type: Number,
      default: 5e3
    },
    theme: {
      type: Object,
      default: () => ({})
    },
    dismissible: {
      type: Boolean,
      default: true
    },
    pauseOnHover: {
      type: Boolean,
      default: true
    },
    queues: {
      type: Map,
      default: () => /* @__PURE__ */ new Map()
    },
    events: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["close", "click", "show"],
  setup(props, { emit }) {
    const theme = computed(() => {
      return defu(props.theme ?? {}, {
        containerClass: [],
        wrapperClass: [],
        containerId: "nt-container",
        maxToasts: Infinity,
        transition: void 0
      });
    });
    const { container, containerId } = useNinjaToasterContainer(theme);
    const timer = useNinjaPausableTimeout(() => {
      close();
    }, props.duration);
    const isHovered = ref(false);
    const isActive = ref(false);
    const unqueue = ref();
    const rootElement = ref();
    let queue;
    if (props.queues.has(containerId.value)) {
      queue = props.queues.get(containerId.value);
    } else {
      queue = createRenderQueue();
      props.queues.set(containerId.value, queue);
    }
    const content = computed(() => {
      return typeof props.content === "function" ? props.content() : props.content;
    });
    function toggleTimer(pause) {
      if (!props.pauseOnHover) {
        return;
      }
      if (pause) {
        timer.pause();
        return;
      }
      timer.resume();
    }
    function stopTimer() {
      timer.stop();
      unqueue.value?.();
    }
    function close() {
      stopTimer();
      isActive.value = false;
    }
    function onMouseover() {
      isHovered.value = true;
      toggleTimer(true);
    }
    function onMouseleave() {
      isHovered.value = false;
      toggleTimer(false);
    }
    function onFocus() {
      isHovered.value = true;
      toggleTimer(true);
    }
    function onBlur() {
      isHovered.value = false;
      toggleTimer(false);
    }
    function onClick(event) {
      emit("click", event);
      if (props.dismissible) {
        close();
      }
    }
    function onKeydown(event) {
      if (event.target !== event.currentTarget) {
        return;
      }
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }
      event.preventDefault();
      onClick(event);
    }
    function onAfterLeave(el) {
      emit("close");
      if (typeof theme.value?.transition?.onAfterLeave === "function") {
        theme.value?.transition.onAfterLeave(el);
      }
      if (typeof rootElement.value?.remove !== "undefined") {
        rootElement.value?.remove();
      } else {
        rootElement.value?.parentNode?.removeChild(rootElement.value);
      }
    }
    createNinjaToasterState({
      timer,
      duration: props.duration,
      isHovered,
      isActive,
      click: onClick,
      close
    });
    return () => {
      const wrapper = withDirectives(
        h(
          "div",
          {
            role: "alert",
            tabindex: 0,
            class: theme.value && Array.isArray(theme.value?.wrapperClass) ? theme.value.wrapperClass.join(" ") : theme.value?.wrapperClass,
            onMouseover,
            onMouseleave,
            onFocus,
            onBlur,
            onKeydown,
            onClick
          },
          h(Suspense, null, content.value)
        ),
        [[vShow, isActive.value]]
      );
      return h(
        Transition,
        {
          ref: rootElement,
          ...theme.value?.transition || {},
          onAfterLeave
        },
        () => wrapper
      );
    };
  }
});

function createElement() {
  {
    return null;
  }
}
function mountWithContext(app, component, props) {
  const el = createElement();
  if (el) {
    const vNode = h(component, props);
    if (app && app._context) {
      vNode.appContext = app._context;
    }
    render(vNode, el);
  }
}
function ensureClassesArray(theme) {
  if (theme?.containerClass && !Array.isArray(theme.containerClass)) {
    theme.containerClass = [theme.containerClass];
  }
  if (theme?.wrapperClass && !Array.isArray(theme.wrapperClass)) {
    theme.wrapperClass = [theme.wrapperClass];
  }
}
function createNinjaToaster(createProps = {}) {
  const events = createEventBus();
  const queues = /* @__PURE__ */ new Map();
  function showComponent(name, {
    props,
    children,
    options
  }) {
    const content = () => h(resolveComponent(name), props, children);
    return show({
      ...options,
      content
    });
  }
  function show(options) {
    const appConfigProps = useAppConfig()?.toaster;
    const app = useNuxtApp().vueApp;
    const userProps = typeof options === "string" || typeof options === "number" || typeof options === "function" ? { content: options } : options;
    ensureClassesArray(userProps?.theme);
    ensureClassesArray(createProps?.theme);
    ensureClassesArray(appConfigProps?.theme);
    const props = defu(
      userProps,
      createProps,
      appConfigProps
    );
    return new Promise((resolve) => {
      mountWithContext(app, NinjaToaster, {
        ...props,
        events,
        queues,
        onShow: (toast) => {
          resolve(toast);
          if (props.onShow) {
            props.onShow(toast);
          }
        }
      });
      {
        resolve({
          el: null,
          close: () => {
          }
        });
      }
    });
  }
  function clearAll() {
    events.emit("clear");
    queues.forEach((queue) => {
      queue.clear();
    });
    queues.clear();
  }
  function clear(theme) {
    const containerId = typeof theme === "string" ? theme : theme.containerId ?? "nt-container";
    events.emit(`clear-${containerId}`);
    if (queues.has(containerId)) {
      queues.get(containerId)?.clear();
    }
  }
  return {
    show,
    showComponent,
    clearAll,
    clear
  };
}

const plugin_9jUlNKryCh = /* #__PURE__ */ defineNuxtPlugin(() => {
  return {
    provide: {
      nt: createNinjaToaster()
    }
  };
});

const plugin_iUyYBwrbS8 = /* #__PURE__ */ defineNuxtPlugin((nuxtApp) => {
});

const directives_yBPzJQtdia = /* #__PURE__ */ defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.vueApp.directive("focus", {
    mounted(el) {
      if (el && el.tabIndex === -1) {
        const focusable = el.querySelector(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable) {
          focusable.focus();
        }
        return;
      }
      el.focus();
    }
  });
});

const aos_u8RxmzeSAw = /* #__PURE__ */ defineNuxtPlugin((nuxtApp) => {
});

/* _processed_nuxt_unctx_transform */
const vue_axe_RbYD3MO140 = /* #__PURE__ */ defineNuxtPlugin(async (nuxtApp) => {  const VueAxePopup = /* #__PURE__ */ defineComponent({
    // @ts-ignore
    render: (_, { slots }) => slots ? slots.default() : null
  });
  nuxtApp.vueApp.component("VueAxePopup", VueAxePopup);
});

const plugins = [
  unhead_DwjAqG1cgl,
  plugin$1,
  plugin,
  revive_payload_server_OSLxLqQOnG,
  components_plugin_KR1HBZs4kY,
  plugin_server_1xBQVW6aQz,
  plugin_9jUlNKryCh,
  plugin_iUyYBwrbS8,
  directives_yBPzJQtdia,
  aos_u8RxmzeSAw,
  vue_axe_RbYD3MO140
];

const pwaInfo = {"pwaInDevEnvironment":false,"webManifest":{"href":"/manifest.webmanifest","useCredentials":false,"linkTag":"<link rel=\"manifest\" href=\"/manifest.webmanifest\">"}};

const __nuxt_component_0$4 = /* #__PURE__ */ defineComponent({
  async setup() {
    if (pwaInfo) {
      const meta = ref({ link: [] });
      useHead(meta);
      const { webManifest } = pwaInfo;
      if (webManifest) {
        const { href, useCredentials } = webManifest;
        if (useCredentials) {
          meta.value.link.push({
            rel: "manifest",
            href,
            crossorigin: "use-credentials"
          });
        } else {
          meta.value.link.push({
            rel: "manifest",
            href
          });
        }
      }
    }
    return () => null;
  }
});

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$G = {};

function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    "aria-hidden": "true",
    viewBox: "0 0 24 24"
  }, _attrs))}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6 6 18M6 6l12 12"></path></svg>`);
}
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/icon/IconClose.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : undefined
};
const __nuxt_component_0$3 = /*#__PURE__*/_export_sfc(_sfc_main$G, [['ssrRender',_sfc_ssrRender$2]]);

const _sfc_main$F = /* @__PURE__ */ defineComponent({
  __name: "BaseButtonClose",
  __ssrInlineRender: true,
  props: {
    shape: { default: void 0 },
    color: { default: "default" }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const shape = computed(
      () => props.shape ?? appConfig.nui.defaultShapes?.buttonClose
    );
    const shapeStyle = {
      straight: "",
      rounded: "nui-button-rounded",
      smooth: "nui-button-smooth",
      curved: "nui-button-curved",
      full: "nui-button-full"
    };
    const colorStyle = {
      default: "nui-button-default",
      muted: "nui-button-muted",
      primary: "nui-button-primary",
      info: "nui-button-info",
      success: "nui-button-success",
      warning: "nui-button-warning",
      danger: "nui-button-danger",
      none: ""
    };
    const classes = computed(() => [
      "nui-button-close",
      shape.value && shapeStyle[shape.value],
      colorStyle[props.color]
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconClose = __nuxt_component_0$3;
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: unref(classes)
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_IconClose, { class: "nui-button-icon" }, null, _parent));
      _push(`</button>`);
    };
  }
});

const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/base/BaseButtonClose.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};

const _sfc_main$E = /* @__PURE__ */ defineComponent({
  __name: "BaseAvatar",
  __ssrInlineRender: true,
  props: {
    src: { default: void 0 },
    srcDark: { default: void 0 },
    badgeSrc: { default: void 0 },
    text: { default: "?" },
    size: { default: "sm" },
    shape: { default: void 0 },
    mask: { default: void 0 },
    dot: { type: [Boolean, String], default: false },
    ring: { type: [Boolean, String], default: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.avatar);
    const dotStyle = {
      success: "nui-dot-success",
      primary: "nui-dot-primary",
      info: "nui-dot-info",
      warning: "nui-dot-warning",
      danger: "nui-dot-danger",
      pink: "nui-dot-pink",
      yellow: "nui-dot-yellow"
    };
    const ringStyle = {
      success: "nui-ring-success",
      primary: "nui-ring-primary",
      info: "nui-ring-info",
      warning: "nui-ring-warning",
      danger: "nui-ring-danger",
      pink: "nui-ring-pink",
      yellow: "nui-ring-yellow"
    };
    const sizeStyle = {
      xxs: "nui-avatar-xxs",
      xs: "nui-avatar-xs",
      sm: "nui-avatar-sm",
      md: "nui-avatar-md",
      lg: "nui-avatar-lg",
      xl: "nui-avatar-xl",
      "2xl": "nui-avatar-2xl",
      "3xl": "nui-avatar-3xl",
      "4xl": "nui-avatar-4xl"
    };
    const shapeStyle = {
      straight: "nui-avatar-straight",
      rounded: "nui-avatar-rounded",
      curved: "nui-avatar-curved",
      full: "nui-avatar-full"
    };
    const maskStyle = {
      hex: "nui-mask-hex",
      hexed: "nui-mask-hexed",
      deca: "nui-mask-deca",
      blob: "nui-mask-blob",
      diamond: "nui-mask-diamond"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-avatar", [
          sizeStyle[props.size],
          unref(shape) && shapeStyle[unref(shape)],
          props.mask && `nui-avatar-mask ${maskStyle[props.mask]}`,
          props.ring && (props.ring === true ? `nui-avatar-ring ${ringStyle["primary"]}` : `nui-avatar-ring ${ringStyle[props.ring]}`)
        ]]
      }, _attrs))}><div class="nui-avatar-inner">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        if (props.src) {
          _push(`<img${ssrRenderAttr("src", props.src)} class="${ssrRenderClass([[props.srcDark ? "dark:hidden" : ""], "nui-avatar-img"])}">`);
        } else {
          _push(`<!---->`);
        }
        if (props.src && props.srcDark) {
          _push(`<img${ssrRenderAttr("src", props.srcDark)} class="nui-avatar-img hidden">`);
        } else {
          _push(`<!---->`);
        }
        if (!props.src) {
          _push(`<span class="nui-avatar-text">${ssrInterpolate(props.text)}</span>`);
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`</div>`);
      if ("badge" in _ctx.$slots || props.badgeSrc) {
        _push(`<div class="nui-avatar-badge">`);
        ssrRenderSlot(_ctx.$slots, "badge", {}, () => {
          if (props.badgeSrc) {
            _push(`<img${ssrRenderAttr("src", props.badgeSrc)} class="nui-badge-img" alt="">`);
          } else {
            _push(`<!---->`);
          }
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.dot) {
        _push(`<span class="${ssrRenderClass([[props.dot === true ? dotStyle["primary"] : dotStyle[props.dot]], "nui-avatar-dot"])}"></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});

const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/base/BaseAvatar.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};

const _sfc_main$D = /* @__PURE__ */ defineComponent({
  __name: "BaseText",
  __ssrInlineRender: true,
  props: {
    size: { default: "md" },
    weight: { default: "normal" },
    lead: { default: "normal" }
  },
  setup(__props) {
    const props = __props;
    const sizeStyle = {
      xs: "nui-content-xs",
      sm: "nui-content-sm",
      md: "nui-content-md",
      lg: "nui-content-lg",
      xl: "nui-content-xl",
      "2xl": "nui-content-2xl",
      "3xl": "nui-content-3xl",
      "4xl": "nui-content-4xl",
      "5xl": "nui-content-5xl",
      "6xl": "nui-content-6xl",
      "7xl": "nui-content-7xl",
      "8xl": "nui-content-8xl",
      "9xl": "nui-content-9xl"
    };
    const weightStyle = {
      light: "nui-weight-light",
      normal: "nui-weight-normal",
      medium: "nui-weight-medium",
      semibold: "nui-weight-semibold",
      bold: "nui-weight-bold",
      extrabold: "nui-weight-extrabold"
    };
    const leadStyle = {
      none: "nui-lead-none",
      tight: "nui-lead-tight",
      snug: "nui-lead-snug",
      normal: "nui-lead-normal",
      relaxed: "nui-lead-relaxed",
      loose: "nui-lead-loose"
    };
    const classes = computed(() => [
      "nui-text",
      sizeStyle[props.size],
      weightStyle[props.weight],
      leadStyle[props.lead]
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<p${ssrRenderAttrs(mergeProps({ class: unref(classes) }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</p>`);
    };
  }
});

const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/base/BaseText.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};

const _sfc_main$C = /* @__PURE__ */ defineComponent({
  __name: "BaseCard",
  __ssrInlineRender: true,
  props: {
    shape: { default: void 0 },
    elevated: { type: Boolean, default: false },
    elevatedHover: { type: Boolean, default: false },
    color: { default: "white" }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.card);
    const shapeStyle = {
      straight: "",
      rounded: "nui-card-rounded",
      smooth: "nui-card-smooth",
      curved: "nui-card-curved"
    };
    const colorStyle = {
      white: "nui-card-white",
      "white-contrast": "nui-card-white-contrast",
      muted: "nui-card-muted",
      "muted-contrast": "nui-card-muted-contrast",
      primary: "nui-card-primary",
      info: "nui-card-info",
      success: "nui-card-success",
      warning: "nui-card-warning",
      danger: "nui-card-danger",
      none: ""
    };
    const classes = computed(() => [
      "nui-card",
      shape.value && shapeStyle[shape.value],
      colorStyle[props.color],
      props.elevated && "nui-card-shadow",
      props.elevatedHover && "nui-card-shadow-hover"
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: unref(classes) }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});

const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/base/BaseCard.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};

const _sfc_main$B = {};

function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "nui-placeload animate-nui-placeload" }, _attrs))}></div>`);
}
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/base/BasePlaceload.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : undefined
};
const __nuxt_component_0$2 = /*#__PURE__*/_export_sfc(_sfc_main$B, [['ssrRender',_sfc_ssrRender$1]]);

const _sfc_main$A = /* @__PURE__ */ defineComponent({
  __name: "Icon",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: ""
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const nuxtApp = useNuxtApp();
    const appConfig = useAppConfig();
    const props = __props;
    const state = useState("icons", () => ({}));
    const isFetching = ref(false);
    const iconName = computed(() => ((appConfig.nuxtIcon?.aliases || {})[props.name] || props.name).replace(/^i-/, ""));
    const icon = computed(() => state.value?.[iconName.value]);
    const component = computed(() => nuxtApp.vueApp.component(iconName.value));
    const sSize = computed(() => {
      if (!props.size && typeof appConfig.nuxtIcon?.size === "boolean" && !appConfig.nuxtIcon?.size) {
        return void 0;
      }
      const size = props.size || appConfig.nuxtIcon?.size || "1em";
      if (String(Number(size)) === size) {
        return `${size}px`;
      }
      return size;
    });
    const className = computed(() => appConfig?.nuxtIcon?.class ?? "icon");
    async function loadIconComponent() {
      if (component.value) {
        return;
      }
      if (!state.value?.[iconName.value]) {
        isFetching.value = true;
        state.value[iconName.value] = await loadIcon(iconName.value).catch(() => void 0);
        isFetching.value = false;
      }
    }
    watch(() => iconName.value, loadIconComponent);
    !component.value && ([__temp, __restore] = withAsyncContext(() => loadIconComponent()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      if (isFetching.value) {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: className.value,
          style: { width: sSize.value, height: sSize.value }
        }, _attrs))} data-v-b0b17fe8></span>`);
      } else if (icon.value) {
        _push(ssrRenderComponent(unref(Icon$1), mergeProps({
          icon: icon.value,
          class: className.value,
          width: sSize.value,
          height: sSize.value
        }, _attrs), null, _parent));
      } else if (component.value) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(component.value), mergeProps({
          class: className.value,
          width: sSize.value,
          height: sSize.value
        }, _attrs), null), _parent);
      } else {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: className.value,
          style: { fontSize: sSize.value, lineHeight: sSize.value, width: sSize.value, height: sSize.value }
        }, _attrs))} data-v-b0b17fe8>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          _push(`${ssrInterpolate(__props.name)}`);
        }, _push, _parent);
        _push(`</span>`);
      }
    };
  }
});

const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/nuxt-icon@0.5.0_rollup@2.79.1/node_modules/nuxt-icon/dist/runtime/Icon.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__scopeId", "data-v-b0b17fe8"]]);

const Icon = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: __nuxt_component_2
});

let lastId = 0;
function useNinjaId(id) {
  return computed(() => {
    const _id = typeof id === "function" ? id() : isRef(id) ? id.value : id;
    return _id ?? `ninja-input-${++lastId}`;
  });
}

const _sfc_main$z = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BaseInput",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: void 0 },
    modelModifiers: { default: () => ({}) },
    id: { default: void 0 },
    type: { default: "text" },
    shape: { default: void 0 },
    label: { default: void 0 },
    labelFloat: { type: Boolean },
    placeholder: { default: void 0 },
    icon: { default: void 0 },
    colorFocus: { type: Boolean },
    loading: { type: Boolean },
    error: { type: [String, Boolean], default: false },
    size: { default: "md" },
    contrast: { default: "default" },
    classes: { default: () => ({}) }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const appConfig = useAppConfig();
    const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.input);
    const shapeStyle = {
      straight: "",
      rounded: "nui-input-rounded",
      smooth: "nui-input-smooth",
      curved: "nui-input-curved",
      full: "nui-input-full"
    };
    const sizeStyle = {
      sm: "nui-input-sm",
      md: "nui-input-md",
      lg: "nui-input-lg"
    };
    const contrastStyle = {
      default: "nui-input-default",
      "default-contrast": "nui-input-default-contrast",
      muted: "nui-input-muted",
      "muted-contrast": "nui-input-muted-contrast"
    };
    function looseToNumber(val) {
      const n = Number.parseFloat(val);
      return Number.isNaN(n) ? val : n;
    }
    const value = useVModel(
      props,
      "modelValue",
      (_, val) => {
        if (props.modelModifiers.number) {
          emits("update:modelValue", looseToNumber(val));
        } else if (props.modelModifiers.trim) {
          emits("update:modelValue", typeof val === "string" ? val.trim() : val);
        } else {
          emits("update:modelValue", val);
        }
      },
      {
        passive: true
      }
    );
    const inputRef = ref();
    __expose({
      /**
       * The underlying HTMLInputElement element.
       */
      el: inputRef
    });
    const id = useNinjaId(() => props.id);
    const placeholder = computed(() => {
      if (props.loading) {
        return;
      }
      if (props.labelFloat) {
        return props.label;
      }
      return props.placeholder;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BasePlaceload = __nuxt_component_0$2;
      const _component_Icon = __nuxt_component_2;
      let _temp0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-input-wrapper", [
          contrastStyle[props.contrast],
          sizeStyle[props.size],
          unref(shape) && shapeStyle[unref(shape)],
          props.error && !props.loading && "nui-input-error",
          props.loading && "nui-input-loading",
          props.labelFloat && "nui-input-label-float",
          props.icon && "nui-has-icon",
          props.colorFocus && "nui-input-focus",
          props.classes?.wrapper
        ]]
      }, _attrs))}>`);
      if ("label" in _ctx.$slots && !props.labelFloat || props.label && !props.labelFloat) {
        _push(`<label${ssrRenderAttr("for", unref(id))} class="${ssrRenderClass([props.classes.label, "nui-input-label"])}">`);
        ssrRenderSlot(_ctx.$slots, "label", {}, () => {
          _push(`${ssrInterpolate(props.label)}`);
        }, _push, _parent);
        _push(`</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([props.classes?.outer, "nui-input-outer"])}"><div><input${ssrRenderAttrs((_temp0 = mergeProps({
        id: unref(id),
        ref_key: "inputRef",
        ref: inputRef,
        type: props.type
      }, _ctx.$attrs, {
        class: ["nui-input", props.classes.input],
        placeholder: unref(placeholder)
      }), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, unref(value)))))}>`);
      if ("label" in _ctx.$slots && props.labelFloat || props.label && props.labelFloat) {
        _push(`<label${ssrRenderAttr("for", unref(id))} class="${ssrRenderClass([props.classes.label, "nui-label-float"])}">`);
        ssrRenderSlot(_ctx.$slots, "label", {}, () => {
          _push(`${ssrInterpolate(props.label)}`);
        }, _push, _parent);
        _push(`</label>`);
      } else {
        _push(`<!---->`);
      }
      if (props.loading) {
        _push(`<div class="nui-input-placeload">`);
        _push(ssrRenderComponent(_component_BasePlaceload, { class: "nui-placeload" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.icon) {
        _push(`<div class="${ssrRenderClass([props.classes.icon, "nui-input-icon"])}">`);
        ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
          _push(ssrRenderComponent(_component_Icon, {
            name: props.icon,
            class: "nui-input-icon-inner"
          }, null, _parent));
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "action", {}, null, _push, _parent);
      _push(`</div>`);
      if (props.error && typeof props.error === "string") {
        _push(`<span class="${ssrRenderClass([props.classes?.error, "nui-input-error-text"])}">${ssrInterpolate(props.error)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});

const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/form/BaseInput.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};

const _sfc_main$y = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BaseTextarea",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: void 0 },
    modelModifiers: { default: () => ({}) },
    id: { default: void 0 },
    name: { default: void 0 },
    shape: { default: void 0 },
    label: { default: void 0 },
    labelFloat: { type: Boolean },
    colorFocus: { type: Boolean },
    placeholder: { default: "" },
    loading: { type: Boolean },
    disabled: { type: Boolean },
    size: { default: "md" },
    contrast: { default: "default" },
    readonly: { type: Boolean },
    error: { type: [String, Boolean], default: false },
    addon: { type: Boolean },
    rows: { default: 4 },
    resize: { type: Boolean },
    autogrow: { type: Boolean },
    classes: { default: () => ({}) }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const appConfig = useAppConfig();
    const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.input);
    const shapeStyle = {
      straight: "",
      rounded: "nui-textarea-rounded",
      smooth: "nui-textarea-smooth",
      curved: "nui-textarea-curved",
      full: "nui-textarea-full"
    };
    const sizeStyle = {
      sm: "nui-textarea-sm",
      md: "nui-textarea-md",
      lg: "nui-textarea-lg"
    };
    const contrastStyle = {
      default: "nui-textarea-default",
      "default-contrast": "nui-textarea-default-contrast",
      muted: "nui-textarea-muted",
      "muted-contrast": "nui-textarea-muted-contrast"
    };
    const value = useVModel(
      props,
      "modelValue",
      (_, val) => {
        if (props.modelModifiers.trim) {
          emits("update:modelValue", typeof val === "string" ? val.trim() : val);
        } else {
          emits("update:modelValue", val);
        }
      },
      {
        passive: true
      }
    );
    const textareaRef = ref();
    function fitSize() {
      if (!textareaRef.value) {
        return;
      }
      if (props.autogrow) {
        textareaRef.value.style.height = "auto";
        textareaRef.value.style.height = textareaRef.value.scrollHeight + "px";
      }
    }
    watch(
      () => props.modelValue,
      async () => {
        await nextTick();
        fitSize();
      }
    );
    __expose({
      /**
       * The underlying HTMLTextAreaElement element.
       */
      el: textareaRef,
      /**
       * A method to resize the textarea to fit its content.
       */
      fitSize
    });
    const id = useNinjaId(() => props.id);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BasePlaceload = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-textarea-wrapper", [
          contrastStyle[props.contrast],
          sizeStyle[props.size],
          unref(shape) && shapeStyle[unref(shape)],
          props.error && !props.loading && "nui-textarea-error",
          props.loading && "nui-textarea-loading",
          props.labelFloat && "nui-textarea-label-float",
          !props.resize && "nui-textarea-not-resize",
          props.addon && "nui-has-addon",
          props.classes?.wrapper
        ]]
      }, _attrs))}>`);
      if (props.label && !props.labelFloat) {
        _push(`<label${ssrRenderAttr("for", unref(id))} class="${ssrRenderClass([props.classes.label, "nui-textarea-label"])}">${ssrInterpolate(props.label)}</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="nui-textarea-outer"><textarea${ssrRenderAttrs(mergeProps({
        id: unref(id),
        ref_key: "textareaRef",
        ref: textareaRef
      }, _ctx.$attrs, {
        class: ["nui-textarea", [
          props.colorFocus && "nui-textarea-focus",
          props.classes.textarea
        ]],
        name: props.name,
        placeholder: props.placeholder,
        readonly: props.readonly,
        disabled: props.disabled,
        rows: props.rows
      }), "textarea")}>${ssrInterpolate(unref(value))}</textarea>`);
      if (props.label && props.labelFloat) {
        _push(`<label${ssrRenderAttr("for", unref(id))} class="${ssrRenderClass([props.classes.label, "nui-label-float"])}">`);
        ssrRenderSlot(_ctx.$slots, "label", {}, () => {
          _push(`${ssrInterpolate(props.label)}`);
        }, _push, _parent);
        _push(`</label>`);
      } else {
        _push(`<!---->`);
      }
      if (props.loading) {
        _push(`<div class="nui-textarea-placeload">`);
        _push(ssrRenderComponent(_component_BasePlaceload, { class: "nui-placeload" }, null, _parent));
        _push(ssrRenderComponent(_component_BasePlaceload, { class: "nui-placeload" }, null, _parent));
        _push(ssrRenderComponent(_component_BasePlaceload, { class: "nui-placeload" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.addon) {
        _push(`<div class="${ssrRenderClass([props.classes.addon, "nui-textarea-addon"])}">`);
        ssrRenderSlot(_ctx.$slots, "addon", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.error && typeof props.error === "string") {
        _push(`<span class="${ssrRenderClass([props.classes?.error, "nui-textarea-error-text"])}">${ssrInterpolate(props.error)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});

const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/form/BaseTextarea.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};

const useNinjaButton = (properties, {
  // @todo: make this configurable (design tokens)
  externalDefaultRelationship = "noopener noreferrer",
  externalDefaultTarget = "_blank"
} = {}) => {
  const NuxtLink = /* #__PURE__ */ defineNuxtLink({});
  const is = computed(
    () => properties.to ? NuxtLink : properties.href ? "a" : "button"
  );
  const type = computed(() => {
    if (is.value === "button") {
      return properties.type || "button";
    }
    return;
  });
  const external = computed(() => {
    if (typeof properties.to === "string" && properties.to.startsWith("http")) {
      return true;
    } else if (typeof properties.to === "object" && "path" in properties.to && properties.to.path.startsWith("http")) {
      return true;
    }
    return false;
  });
  const relationship = computed(() => {
    if (!external.value) {
      return properties.rel;
    }
    return properties.rel ?? externalDefaultRelationship;
  });
  const target = computed(() => {
    if (!external.value) {
      return properties.target;
    }
    return properties.target ?? externalDefaultTarget;
  });
  const attributes = computed(() => ({
    to: properties.disabled ? void 0 : properties.to,
    href: properties.disabled ? void 0 : properties.href,
    disabled: properties.disabled,
    type: type.value,
    rel: relationship.value,
    target: target.value
  }));
  return {
    attributes,
    is
  };
};

const _sfc_main$x = /* @__PURE__ */ defineComponent({
  __name: "BaseButton",
  __ssrInlineRender: true,
  props: {
    type: { default: void 0 },
    to: { default: void 0 },
    href: { default: void 0 },
    disabled: { type: Boolean, default: false },
    rel: { default: "" },
    target: { default: "" },
    size: { default: "md" },
    flavor: { default: "solid" },
    color: { default: "default" },
    shape: { default: void 0 },
    loading: { type: Boolean },
    badge: { type: Boolean, default: false },
    badgePulse: { type: Boolean, default: false },
    shadow: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.button);
    const badgeColorStyle = {
      primary: "nui-badge-primary",
      info: "nui-badge-info",
      success: "nui-badge-success",
      warning: "nui-badge-warning",
      danger: "nui-badge-danger",
      none: "",
      default: "",
      light: "",
      muted: ""
    };
    const sizeStyle = {
      sm: "nui-button-small",
      md: "nui-button-medium",
      lg: "nui-button-large",
      xl: "nui-button-big"
    };
    const shapeStyle = {
      straight: "",
      rounded: "nui-button-rounded",
      curved: "nui-button-curved",
      smooth: "nui-button-smooth",
      full: "nui-button-full"
    };
    const flavorStyle = {
      solid: "nui-button-solid",
      pastel: "nui-button-pastel",
      outline: "nui-button-outline"
    };
    const colorStyle = {
      none: "",
      default: "nui-button-default",
      primary: "nui-button-primary",
      info: "nui-button-info",
      success: "nui-button-success",
      warning: "nui-button-warning",
      danger: "nui-button-danger",
      light: "nui-button-light",
      muted: "nui-button-muted"
    };
    const shadowStyle = {
      flat: "nui-button-shadow",
      hover: "nui-button-shadow-hover"
    };
    const badgeStyle = computed(
      () => props.badge && ["default", "light", "muted", "none"].includes(props.color) ? "" : `nui-button-badge ${badgeColorStyle[props.color]}`
    );
    const classes = computed(() => [
      "nui-button",
      props.loading && "nui-button-loading",
      sizeStyle[props.size],
      shape.value && shapeStyle[shape.value],
      flavorStyle[props.flavor],
      colorStyle[props.color],
      props.shadow && shadowStyle[props.shadow]
    ]);
    const { attributes, is } = useNinjaButton(props);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BasePlaceload = __nuxt_component_0$2;
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(is)), mergeProps(unref(attributes), { class: unref(classes) }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!props.loading) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              _push2(ssrRenderComponent(_component_BasePlaceload, { class: "h-4 w-12 rounded" }, null, _parent2, _scopeId));
            }
            if (props.badge) {
              _push2(`<span class="${ssrRenderClass(unref(badgeStyle))}"${_scopeId}>`);
              if (props.badgePulse) {
                _push2(`<span class="nui-button-badge-pulse"${_scopeId}></span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span class="nui-button-badge-inner"${_scopeId}></span></span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !props.loading ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createBlock(_component_BasePlaceload, {
                key: 1,
                class: "h-4 w-12 rounded"
              })),
              props.badge ? (openBlock(), createBlock("span", {
                key: 2,
                class: unref(badgeStyle)
              }, [
                props.badgePulse ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "nui-button-badge-pulse"
                })) : createCommentVNode("", true),
                createVNode("span", { class: "nui-button-badge-inner" })
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});

const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/base/BaseButton.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};

function useNinjaToaster() {
  const { $nt } = useNuxtApp();
  return $nt;
}

function useToaster() {
  const $nt = useNinjaToaster();
  function show(props, options) {
    return $nt.showComponent("TairoToaster", {
      props,
      options
    });
  }
  return {
    show,
    clear: $nt.clear,
    clearAll: $nt.clearAll
  };
}

const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "ContactModal",
  __ssrInlineRender: true,
  emits: ["close-modal"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const showModal = ref(true);
    const VALIDATION_TEXT = {
      FIRSTNAME_REQUIRED: "First name can't be empty",
      LASTNAME_REQUIRED: "Last name can't be empty",
      EMAIL_REQUIRED: "Enter a valid email address",
      MESSAGE_REQUIRED: "Message can't be empty"
    };
    const zodSchema = z.object({
      firstName: z.string().min(1, VALIDATION_TEXT.FIRSTNAME_REQUIRED),
      lastName: z.string().min(1, VALIDATION_TEXT.LASTNAME_REQUIRED),
      email: z.string().email(VALIDATION_TEXT.EMAIL_REQUIRED),
      message: z.string().min(1, VALIDATION_TEXT.MESSAGE_REQUIRED)
    });
    const validationSchema = toTypedSchema(zodSchema);
    const initialValues = computed(() => ({
      firstName: "",
      lastName: "",
      email: "",
      message: ""
    }));
    const {
      handleSubmit,
      isSubmitting,
      setFieldError,
      meta,
      values,
      errors,
      resetForm,
      setFieldValue,
      setErrors
    } = useForm({
      validationSchema,
      initialValues
    });
    const success = ref(false);
    onBeforeRouteLeave(() => {
      if (meta.value.dirty) {
        return confirm("You have unsaved changes. Are you sure you want to leave?");
      }
    });
    const toaster = useToaster();
    const onSubmit = handleSubmit(
      async (values2) => {
        success.value = false;
        try {
          const response = await fetch("https://skillhub.ee/functions/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              name: `${values2.firstName} ${values2.lastName}`,
              email: values2.email,
              subject: "Contact Form Submission",
              message: values2.message
            })
          });
          if (response.ok) {
            toaster.clearAll();
            toaster.show({
              title: "Success",
              message: `Message has been sent!`,
              color: "success",
              icon: "ph:check",
              closable: true
            });
            emit("close-modal");
          } else {
            console.error("Server responded with status", response.status);
            toaster.clearAll();
            toaster.show({
              title: "Error",
              message: `Failed to send message. Server responded with status: ${response.status}`,
              color: "danger",
              icon: "lucide:alert-triangle",
              closable: true
            });
          }
        } catch (error) {
          console.error(error);
          if (error.message === "Fake backend validation error") {
            setFieldError("firstName", "This name is not allowed");
            document.documentElement.scrollTo({
              top: 0,
              behavior: "smooth"
            });
            toaster.clearAll();
            toaster.show({
              title: "Oops!",
              message: "Please review the errors in the form",
              color: "danger",
              icon: "lucide:alert-triangle",
              closable: true
            });
          }
          return;
        }
        resetForm();
        document.documentElement.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        success.value = true;
        setTimeout(() => {
          success.value = false;
        }, 3e3);
      },
      (error) => {
        success.value = false;
        console.log("message-send-error", error);
        document.documentElement.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseInput = _sfc_main$z;
      const _component_BaseTextarea = _sfc_main$y;
      const _component_BaseButton = _sfc_main$x;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-lg" }, _attrs))}>`);
      if (unref(showModal)) {
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<form action="" method="POST" novalidate${_scopeId}><div class="grid grid-cols-12 gap-4"${_scopeId}><div class="col-span-12 sm:col-span-6"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Field), { name: "firstName" }, {
                default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_BaseInput, {
                      label: "First Name",
                      placeholder: "ex: John",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      type: "text",
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_BaseInput, {
                        label: "First Name",
                        placeholder: "ex: John",
                        "model-value": field.value,
                        error: errorMessage,
                        disabled: unref(isSubmitting),
                        type: "text",
                        "onUpdate:modelValue": handleChange,
                        onBlur: handleBlur
                      }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="col-span-12 sm:col-span-6"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Field), { name: "lastName" }, {
                default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_BaseInput, {
                      label: "Last Name",
                      placeholder: "ex: Doe",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      type: "text",
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_BaseInput, {
                        label: "Last Name",
                        placeholder: "ex: Doe",
                        "model-value": field.value,
                        error: errorMessage,
                        disabled: unref(isSubmitting),
                        type: "text",
                        "onUpdate:modelValue": handleChange,
                        onBlur: handleBlur
                      }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="col-span-12"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Field), { name: "email" }, {
                default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_BaseInput, {
                      type: "email",
                      label: "Email Address",
                      placeholder: "ex: johndoe@gmail.com",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_BaseInput, {
                        type: "email",
                        label: "Email Address",
                        placeholder: "ex: johndoe@gmail.com",
                        "model-value": field.value,
                        error: errorMessage,
                        disabled: unref(isSubmitting),
                        "onUpdate:modelValue": handleChange,
                        onBlur: handleBlur
                      }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="col-span-12"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Field), { name: "message" }, {
                default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_BaseTextarea, {
                      label: "Message",
                      placeholder: "write your message...",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_BaseTextarea, {
                        label: "Message",
                        placeholder: "write your message...",
                        "model-value": field.value,
                        error: errorMessage,
                        disabled: unref(isSubmitting),
                        "onUpdate:modelValue": handleChange,
                        onBlur: handleBlur
                      }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="col-span-12"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButton, {
                type: "submit",
                class: "w-full",
                color: "primary",
                disabled: unref(isSubmitting),
                loading: unref(isSubmitting)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Send Message`);
                  } else {
                    return [
                      createTextVNode("Send Message")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div></form>`);
            } else {
              return [
                createVNode("form", {
                  action: "",
                  method: "POST",
                  onSubmit: withModifiers(unref(onSubmit), ["prevent"]),
                  novalidate: ""
                }, [
                  createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                    createVNode("div", { class: "col-span-12 sm:col-span-6" }, [
                      createVNode(unref(Field), { name: "firstName" }, {
                        default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                          createVNode(_component_BaseInput, {
                            label: "First Name",
                            placeholder: "ex: John",
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            type: "text",
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "col-span-12 sm:col-span-6" }, [
                      createVNode(unref(Field), { name: "lastName" }, {
                        default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                          createVNode(_component_BaseInput, {
                            label: "Last Name",
                            placeholder: "ex: Doe",
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            type: "text",
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "col-span-12" }, [
                      createVNode(unref(Field), { name: "email" }, {
                        default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                          createVNode(_component_BaseInput, {
                            type: "email",
                            label: "Email Address",
                            placeholder: "ex: johndoe@gmail.com",
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "col-span-12" }, [
                      createVNode(unref(Field), { name: "message" }, {
                        default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                          createVNode(_component_BaseTextarea, {
                            label: "Message",
                            placeholder: "write your message...",
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "col-span-12" }, [
                      createVNode(_component_BaseButton, {
                        type: "submit",
                        class: "w-full",
                        color: "primary",
                        disabled: unref(isSubmitting),
                        loading: unref(isSubmitting)
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Send Message")
                        ]),
                        _: 1
                      }, 8, ["disabled", "loading"])
                    ])
                  ])
                ], 40, ["onSubmit"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});

const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactModal.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};

const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "InvestmentModal",
  __ssrInlineRender: true,
  emits: ["close-modal"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButtonClose = _sfc_main$F;
      const _component_BaseAvatar = _sfc_main$E;
      const _component_BaseText = _sfc_main$D;
      const _component_ContactModal = _sfc_main$w;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex w-full items-center justify-between p-4 md:p-6"><h3 class="font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white"> Invest in SkillHub </h3>`);
      _push(ssrRenderComponent(_component_BaseButtonClose, {
        onClick: ($event) => emit("close-modal")
      }, null, _parent));
      _push(`</div><div class="p-4 md:p-6 overflow-auto max-h-[70vh]"><div class="mx-auto w-full text-center"><div class="flex flex-row items-center justify-center"><h3 class="font-heading text-muted-800 text-lg font-medium leading-6 dark:text-white p-4"> Hi there, it&#39;s Timo here! </h3>`);
      _push(ssrRenderComponent(_component_BaseAvatar, {
        shape: "straight",
        size: "md",
        src: "/img/ceo.png",
        class: "nui-mask nui-mask-blob"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_BaseText, { class: "text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`( founder and developer at skillhub ) `);
          } else {
            return [
              createTextVNode("( founder and developer at skillhub ) ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h4 class="font-heading text-muted-800 text-sm font-medium leading-6 dark:text-white p-4"> First of all, thank you for your interest. </h4><p class="font-alt text-muted-500 dark:text-muted-400 text-md leading-5 p-4 text-left"> A bit about the background of this project: I have worked in the production sector, both in construction and electrical installations, and later started brokering rental labor. I discovered that larger companies consistently need reliable labor on short notice as they constantly have fires to put out. At such times, they are willing to pay well. However, the need is often short-term, and sometimes finding the extra hand is a matter of hours. Hence the principle for rental companies: first come, first served. </p><p class="font-alt text-muted-500 dark:text-muted-400 text-md leading-5 px-4 text-left"> I did this job and it was very profitable. I still have all the experiences and contracts I acquired during this period. I must mention that the job was very nerve-wracking and manual. I was constantly solving problems; the labor was not quality, on the phone day and night. At that point, I decided there must be a way to automate myself. So, I devised a system that would manage most of the functions I had to manage, to scale this business and let the team focus on what really matters – finding clients and onboarding workers. </p><p class="font-alt text-muted-500 dark:text-muted-400 text-md leading-5 p-4 text-left"> My thesis is that there are always sectors in the market doing well, and sectors doing poorly. In any economic situation, those who can channel labor flow into successful sectors thrive. </p><h4 class="font-heading text-muted-800 text-sm font-medium leading-6 dark:text-white p-4"> Thus, the principle of SkillHub is to automate the labor rental company, managing the entire process from the outset: </h4><div class="mx-6 md:mx-16">`);
      _push(ssrRenderComponent(_component_BaseText, { class: "font-alt text-muted-500 dark:text-muted-400 text-md leading-5 p-2 text-left" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ol class="list-decimal"${_scopeId}><li class="mb-2"${_scopeId}>Automatic ads, targeted social media marketing, and SEO, which facilitate 24/7 online sales and direct all traffic to www.skillhub.ee.</li><li class="mb-2"${_scopeId}>The platform registers companies and workers (along with skill levels) in our database, and SkillHub is installed on their computers and mobiles, allowing notifications to be sent directly to phones through the app.</li><li class="mb-2"${_scopeId}>Companies can do two things: <ol type="a" style="${ssrRenderStyle({ "list-style-type": "lower-alpha" })}" class="mx-2 md:mx-6 mt-2"${_scopeId}><li class="mb-2"${_scopeId}>Search for the necessary specialist from the database, showing only those immediately available and also validated by the platform for skill levels, to ensure trust. However, a premium price is to be paid for this &quot;on-demand&quot; specialist.</li><li class="mb-2"${_scopeId}>If production volumes fall, the company can rent out its workers through the platform. The worker remains on their payroll but works for another company within a project framework. The company gives its own assessment of the worker (later the client does too), improving database quality through this mechanism. This allows companies to retain their workers in bad situations instead of laying them off, while still making money.</li></ol></li><li class="mb-2"${_scopeId}>Specialists can map their skills through a modified ESCO activity classifier and upload themselves to our database, making them available to all companies. To enhance their credibility, job seekers must undergo a review of their skills in their field of activity at our partner companies, who then give an impartial assessment of their actual skills on a 1-5 ball scale (never heard, beginner, intermediate, proficient, specialist). The price for confirmed specialists is higher.</li><li class="mb-2"${_scopeId}>Artificial intelligence constantly checks companies&#39; &quot;orders&quot; with the properties of specialists in our database, and also collects data from the internet from public datasets about workers and companies. Based on all this information, AI offers &quot;matching&quot; to the parties.</li><li class="mb-2"${_scopeId}>Once a &quot;match&quot; is achieved, it is offered to both parties, who can then only view information about the other party. If the project, company, and specialist match, a two-day &quot;trial contract&quot; is made through the platform, during which both parties can ensure compatibility.</li><li class="mb-2"${_scopeId}>If everyone agrees, a full contract is concluded for the agreed period, for example, a two-month contract within the project.</li><li class="mb-2"${_scopeId}>The contract is concluded directly on the platform and remains on the platform, always accessible to both parties, along with all conditions and fees, ensuring reliability.</li><li class="mb-2"${_scopeId}>Now the specialist has time to fulfill the contract terms. For the process to run smoothly, the employer can monitor the worker&#39;s working hours, location, work progress and everything necessary directly from the platform without leaving home.</li><li class="mb-2"${_scopeId}>At the end of the month, SkillHub issues an invoice to the subscriber and pays it either directly to the worker or to the company whose worker it is, and with that, the cycle is complete.</li></ol>`);
          } else {
            return [
              createVNode("ol", { class: "list-decimal" }, [
                createVNode("li", { class: "mb-2" }, "Automatic ads, targeted social media marketing, and SEO, which facilitate 24/7 online sales and direct all traffic to www.skillhub.ee."),
                createVNode("li", { class: "mb-2" }, "The platform registers companies and workers (along with skill levels) in our database, and SkillHub is installed on their computers and mobiles, allowing notifications to be sent directly to phones through the app."),
                createVNode("li", { class: "mb-2" }, [
                  createTextVNode("Companies can do two things: "),
                  createVNode("ol", {
                    type: "a",
                    style: { "list-style-type": "lower-alpha" },
                    class: "mx-2 md:mx-6 mt-2"
                  }, [
                    createVNode("li", { class: "mb-2" }, 'Search for the necessary specialist from the database, showing only those immediately available and also validated by the platform for skill levels, to ensure trust. However, a premium price is to be paid for this "on-demand" specialist.'),
                    createVNode("li", { class: "mb-2" }, "If production volumes fall, the company can rent out its workers through the platform. The worker remains on their payroll but works for another company within a project framework. The company gives its own assessment of the worker (later the client does too), improving database quality through this mechanism. This allows companies to retain their workers in bad situations instead of laying them off, while still making money.")
                  ])
                ]),
                createVNode("li", { class: "mb-2" }, "Specialists can map their skills through a modified ESCO activity classifier and upload themselves to our database, making them available to all companies. To enhance their credibility, job seekers must undergo a review of their skills in their field of activity at our partner companies, who then give an impartial assessment of their actual skills on a 1-5 ball scale (never heard, beginner, intermediate, proficient, specialist). The price for confirmed specialists is higher."),
                createVNode("li", { class: "mb-2" }, `Artificial intelligence constantly checks companies' "orders" with the properties of specialists in our database, and also collects data from the internet from public datasets about workers and companies. Based on all this information, AI offers "matching" to the parties.`),
                createVNode("li", { class: "mb-2" }, 'Once a "match" is achieved, it is offered to both parties, who can then only view information about the other party. If the project, company, and specialist match, a two-day "trial contract" is made through the platform, during which both parties can ensure compatibility.'),
                createVNode("li", { class: "mb-2" }, "If everyone agrees, a full contract is concluded for the agreed period, for example, a two-month contract within the project."),
                createVNode("li", { class: "mb-2" }, "The contract is concluded directly on the platform and remains on the platform, always accessible to both parties, along with all conditions and fees, ensuring reliability."),
                createVNode("li", { class: "mb-2" }, "Now the specialist has time to fulfill the contract terms. For the process to run smoothly, the employer can monitor the worker's working hours, location, work progress and everything necessary directly from the platform without leaving home."),
                createVNode("li", { class: "mb-2" }, "At the end of the month, SkillHub issues an invoice to the subscriber and pays it either directly to the worker or to the company whose worker it is, and with that, the cycle is complete.")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mx-6 md:mx-16"><h4 class="font-heading text-muted-800 text-sm font-medium leading-6 dark:text-white p-4"> The scaling of this process, in any sector, through the SkillHub platform is possible on a large scale. </h4><p class="font-alt text-muted-500 dark:text-muted-400 text-md leading-5 p-4 text-left"> Investment needs: </p>`);
      _push(ssrRenderComponent(_component_BaseText, { class: "font-alt text-muted-500 dark:text-muted-400 text-md leading-5 p-4 text-left" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul class="list-decimal"${_scopeId}><li class="mb-2"${_scopeId}> Legal framework development by one of Estonia&#39;s best in this field </li><li class="mb-2"${_scopeId}> Programming of the described process requires a team of programmers. </li><li class="mb-2"${_scopeId}> Development of marketing strategy and implementation of campaigns </li><li class="mb-2"${_scopeId}> Initially, there should be some kind of buffer for the payroll fund and unforeseen situations - 10,000 euros, until the first contract fees start coming in, then the company is immediately able to scale from its own revenues. </li></ul>`);
          } else {
            return [
              createVNode("ul", { class: "list-decimal" }, [
                createVNode("li", { class: "mb-2" }, " Legal framework development by one of Estonia's best in this field "),
                createVNode("li", { class: "mb-2" }, " Programming of the described process requires a team of programmers. "),
                createVNode("li", { class: "mb-2" }, " Development of marketing strategy and implementation of campaigns "),
                createVNode("li", { class: "mb-2" }, " Initially, there should be some kind of buffer for the payroll fund and unforeseen situations - 10,000 euros, until the first contract fees start coming in, then the company is immediately able to scale from its own revenues. ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mx-6 md:mx-16"><h4 class="font-heading text-muted-800 text-sm font-medium leading-6 dark:text-white p-4"> Non-profitable contracts or contracts below a certain profit margin are not allowed on the platform. Thus, the risk is reduced solely to the legal aspect; if we secure a contract, we earn revenue. </h4><p class="font-alt text-muted-500 dark:text-muted-400 text-md leading-5 p-4 text-left"> By the end of the investment period: </p>`);
      _push(ssrRenderComponent(_component_BaseText, { class: "font-alt text-muted-500 dark:text-muted-400 text-md leading-5 p-4 text-left" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul class="list-decimal"${_scopeId}><li class="mb-2"${_scopeId}> The legal aspect is in place to draft contracts. </li><li class="mb-2"${_scopeId}> The process described above is functional from start to finish, and tested and secure. </li><li class="mb-2"${_scopeId}> The marketing campaign is operational and actively directs clients and workers to the platform across Europe. </li><li class="mb-2"${_scopeId}> Agreed network of partners. </li><li class="mb-2"${_scopeId}> The salesperson can begin onboarding companies and the talent specialist can assist workers in registering on the platform and with any arising questions. </li><li class="mb-2"${_scopeId}> The company begins to issue invoices for the first contracts, thereby generating revenue and profit. </li></ul>`);
          } else {
            return [
              createVNode("ul", { class: "list-decimal" }, [
                createVNode("li", { class: "mb-2" }, " The legal aspect is in place to draft contracts. "),
                createVNode("li", { class: "mb-2" }, " The process described above is functional from start to finish, and tested and secure. "),
                createVNode("li", { class: "mb-2" }, " The marketing campaign is operational and actively directs clients and workers to the platform across Europe. "),
                createVNode("li", { class: "mb-2" }, " Agreed network of partners. "),
                createVNode("li", { class: "mb-2" }, " The salesperson can begin onboarding companies and the talent specialist can assist workers in registering on the platform and with any arising questions. "),
                createVNode("li", { class: "mb-2" }, " The company begins to issue invoices for the first contracts, thereby generating revenue and profit. ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><h4 class="font-heading text-muted-800 text-sm font-medium leading-6 dark:text-white p-4 text-left"> If you&#39;ve read to the end of this lengthy content, it must signify your interest! If you wish to learn more about how you could support this mission of innovating the workforce rental sector, feel free to reach out to me directly at the following email: </h4>`);
      _push(ssrRenderComponent(_component_BaseText, { class: "text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`timo@skillhub.ee `);
          } else {
            return [
              createTextVNode("timo@skillhub.ee ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h4 class="font-heading text-muted-800 text-sm font-medium leading-6 dark:text-white p-4"> Or, send a message through the form below </h4></div><div class="flex w-full mx-auto items-center justify-center">`);
      _push(ssrRenderComponent(_component_ContactModal, {
        onCloseModal: ($event) => emit("close-modal")
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});

const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InvestmentModal.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};

const __default__ = {
  inheritAttrs: false
};
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "TairoModal",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean },
    size: { default: "md" },
    shape: { default: "rounded" },
    footerAlign: { default: "end" },
    classes: { default: () => ({
      wrapper: "",
      dialog: ""
    }) }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const closeModal = () => {
      emit("close");
    };
    const emit = __emit;
    const dialogClasses = computed(() => {
      const classes = [];
      if (props.classes.dialog) {
        if (Array.isArray(props.classes.dialog)) {
          classes.push(...props.classes.dialog);
        } else {
          classes.push(props.classes.dialog);
        }
      }
      switch (props.shape) {
        case "rounded":
          classes.push("rounded-lg");
          break;
        case "curved":
          classes.push("rounded-xl");
          break;
      }
      switch (props.size) {
        case "sm":
          classes.push("max-w-sm");
          break;
        case "md":
          classes.push("max-w-md");
          break;
        case "lg":
          classes.push("max-w-xl");
          break;
        case "xl":
          classes.push("max-w-2xl");
          break;
        case "2xl":
          classes.push("max-w-3xl");
          break;
        case "3xl":
          classes.push("max-w-5xl");
          break;
      }
      return classes;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InvestmentModal = _sfc_main$v;
      _push(ssrRenderComponent(unref(TransitionRoot), mergeProps({
        appear: "",
        show: props.open,
        as: "template"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="fixed inset-0 z-[9999] flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Dialog), {
              class: "relative z-[9999]",
              as: "div",
              onClose: ($event) => emit("close")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(TransitionChild), {
                    as: "template",
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0",
                    "enter-to": "opacity-100",
                    leave: "duration-200 ease-in",
                    "leave-from": "opacity-100",
                    "leave-to": "opacity-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="bg-muted-800/70 dark:bg-muted-900/80 fixed inset-0"${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "bg-muted-800/70 dark:bg-muted-900/80 fixed inset-0" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="fixed inset-0"${_scopeId2}><div class="${ssrRenderClass([props.classes.wrapper, "flex min-h-full items-center justify-center p-4 text-center"])}"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(TransitionChild), {
                    as: "template",
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0 scale-95",
                    "enter-to": "opacity-100 scale-100",
                    leave: "duration-200 ease-in",
                    "leave-from": "opacity-100 scale-100",
                    "leave-to": "opacity-0 scale-95"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(DialogPanel), {
                          class: ["dark:bg-muted-800 w-full bg-white text-left align-middle shadow-xl transition-all", unref(dialogClasses)]
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_InvestmentModal, { onCloseModal: closeModal }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_InvestmentModal, { onCloseModal: closeModal })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(DialogPanel), {
                            class: ["dark:bg-muted-800 w-full bg-white text-left align-middle shadow-xl transition-all", unref(dialogClasses)]
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_InvestmentModal, { onCloseModal: closeModal })
                            ]),
                            _: 1
                          }, 8, ["class"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode(unref(TransitionChild), {
                      as: "template",
                      enter: "duration-300 ease-out",
                      "enter-from": "opacity-0",
                      "enter-to": "opacity-100",
                      leave: "duration-200 ease-in",
                      "leave-from": "opacity-100",
                      "leave-to": "opacity-0"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "bg-muted-800/70 dark:bg-muted-900/80 fixed inset-0" })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "fixed inset-0" }, [
                      createVNode("div", {
                        class: ["flex min-h-full items-center justify-center p-4 text-center", props.classes.wrapper]
                      }, [
                        createVNode(unref(TransitionChild), {
                          as: "template",
                          enter: "duration-300 ease-out",
                          "enter-from": "opacity-0 scale-95",
                          "enter-to": "opacity-100 scale-100",
                          leave: "duration-200 ease-in",
                          "leave-from": "opacity-100 scale-100",
                          "leave-to": "opacity-0 scale-95"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(DialogPanel), {
                              class: ["dark:bg-muted-800 w-full bg-white text-left align-middle shadow-xl transition-all", unref(dialogClasses)]
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_InvestmentModal, { onCloseModal: closeModal })
                              ]),
                              _: 1
                            }, 8, ["class"])
                          ]),
                          _: 1
                        })
                      ], 2)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "fixed inset-0 z-[9999] flex items-center justify-center" }, [
                createVNode(unref(Dialog), {
                  class: "relative z-[9999]",
                  as: "div",
                  onClose: ($event) => emit("close")
                }, {
                  default: withCtx(() => [
                    createVNode(unref(TransitionChild), {
                      as: "template",
                      enter: "duration-300 ease-out",
                      "enter-from": "opacity-0",
                      "enter-to": "opacity-100",
                      leave: "duration-200 ease-in",
                      "leave-from": "opacity-100",
                      "leave-to": "opacity-0"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "bg-muted-800/70 dark:bg-muted-900/80 fixed inset-0" })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "fixed inset-0" }, [
                      createVNode("div", {
                        class: ["flex min-h-full items-center justify-center p-4 text-center", props.classes.wrapper]
                      }, [
                        createVNode(unref(TransitionChild), {
                          as: "template",
                          enter: "duration-300 ease-out",
                          "enter-from": "opacity-0 scale-95",
                          "enter-to": "opacity-100 scale-100",
                          leave: "duration-200 ease-in",
                          "leave-from": "opacity-100 scale-100",
                          "leave-to": "opacity-0 scale-95"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(DialogPanel), {
                              class: ["dark:bg-muted-800 w-full bg-white text-left align-middle shadow-xl transition-all", unref(dialogClasses)]
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_InvestmentModal, { onCloseModal: closeModal })
                              ]),
                              _: 1
                            }, 8, ["class"])
                          ]),
                          _: 1
                        })
                      ], 2)
                    ])
                  ]),
                  _: 1
                }, 8, ["onClose"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});

const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TairoModal.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};

const _sfc_main$t = /* #__PURE__ */ defineComponent({
  props: {
    /**
     * The HTML tag to use for the wrapper
     *
     * @default div
     */
    as: {
      type: String,
      default: "div"
    },
    /**
     * Keys to trigger the next focusable element
     *
     * @default PageUp
     * @see https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values
     */
    nextKeys: {
      type: [Array, String],
      default: "PageDown"
    },
    /**
     * Keys to trigger the previous focusable element
     *
     * @default PageDown
     */
    prevKeys: {
      type: [Array, String],
      default: "PageUp"
    },
    /**
     * Prevent the default behavior of the keys
     */
    prevent: {
      type: Boolean,
      default: true
    }
  },
  setup(props, { slots }) {
    const wrapper = ref();
    function checkFocusables() {
    }
    onUpdated(checkFocusables);
    onKeyStroke(props.nextKeys, (event) => {
    });
    onKeyStroke(props.prevKeys, (event) => {
    });
    return () => h(props.as, { ref: wrapper }, slots?.default?.());
  }
});

const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/base/BaseFocusLoop.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};

function useNinjaMark(_text, _search, _classes) {
  const text = toRef(_text);
  const classes = toRef(_classes);
  const search = toRef(_search);
  return computed(() => {
    const txt = unref(text);
    const srch = unref(search);
    if (!txt) {
      return "";
    }
    if (!srch) {
      return escapeHtml(txt);
    }
    const regex = new RegExp(srch, "gi");
    return txt.replace(regex, (part) => {
      return `<mark class="${classes.value}">${escapeHtml(part)}</mark>`;
    });
  });
}

const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "DemoAppSearchResult",
  __ssrInlineRender: true,
  props: {
    to: {},
    title: {},
    subtitle: {},
    icon: {},
    search: {}
  },
  setup(__props) {
    const props = __props;
    const markedTitle = useNinjaMark(
      () => props.title,
      () => props.search,
      "nui-text-800 group-focus:text-primary-500 underline decoration-muted-500/40 group-focus:decoration-primary-500/40 group-hover:decoration-primary-500/40 group-hover:text-primary-500 dark:group-focus:text-primary-400 dark:group-hover:text-primary-400 bg-transparent"
    );
    const markedSubtitle = useNinjaMark(
      () => props.subtitle,
      () => props.search,
      "nui-text-500 bg-transparent underline decoration-muted-500/30"
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$5;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        class: "nui-focus hover:bg-muted-50 focus:bg-muted-50 dark:hover:bg-muted-900 dark:focus:bg-muted-900 group flex items-center rounded p-3",
        to: props.to
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex grow flex-col"${_scopeId}>`);
            if (props.title) {
              _push2(`<span class="nui-text-600 font-heading group-hover:text-primary-500 group-focus:text-primary-500 dark:group-hover:text-primary-400 dark:group-focus:text-primary-400 text-sm"${_scopeId}>${unref(markedTitle)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (props.subtitle) {
              _push2(`<span class="nui-text-400 line-clamp-1 text-sm"${_scopeId}>${unref(markedSubtitle)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (props.icon) {
              _push2(`<div class="shrink-0"${_scopeId}><img${ssrRenderAttr("src", props.icon)} class="h-8 w-8"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "flex grow flex-col" }, [
                props.title ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "nui-text-600 font-heading group-hover:text-primary-500 group-focus:text-primary-500 dark:group-hover:text-primary-400 dark:group-focus:text-primary-400 text-sm",
                  innerHTML: unref(markedTitle)
                }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                props.subtitle ? (openBlock(), createBlock("span", {
                  key: 1,
                  class: "nui-text-400 line-clamp-1 text-sm",
                  innerHTML: unref(markedSubtitle)
                }, null, 8, ["innerHTML"])) : createCommentVNode("", true)
              ]),
              props.icon ? (openBlock(), createBlock("div", {
                key: 0,
                class: "shrink-0"
              }, [
                createVNode("img", {
                  src: props.icon,
                  class: "h-8 w-8"
                }, null, 8, ["src"])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});

const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoAppSearchResult.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};

const _sfc_main$r = {};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${
    ssrRenderAttrs(mergeProps({
      version: "1.1",
      id: "Layer_1",
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      x: "0px",
      y: "0px",
      viewBox: "0 0 1003 175",
      style: {"enable-background":"new 0 0 1003 175"},
      "xml:space": "preserve"
    }, _attrs))
  }><g><defs><rect id="SVGID_1_" width="1003" height="175"></rect></defs><clipPath id="SVGID_00000127752600511969623250000017039790488450817707_"><use xlink:href="#SVGID_1_" style="${
    ssrRenderStyle({"overflow":"visible"})
  }"></use></clipPath><g><g><path class="fill-current text-primary-900 dark:text-white" d="M149.3,118.4v3.9c0,2.1-0.3,4.2-0.8,6.1c-0.5,1.9-2.4,2.9-5.6,2.9H34.1c-0.6,0-2.6,1.9-5.8,5.6
				c-3.2,3.7-6.7,8-10.4,12.8c-3.7,4.8-7.3,9.6-10.6,14.2c-3.3,4.7-5.5,8.1-6.5,10.2h163.3c5.8,0,11.4-1.8,16.8-5.3
				c5.4-3.5,10.2-8,14.4-13.3c4.2-5.3,7.5-11.2,10.1-17.5c2.6-6.3,3.9-12.2,3.9-17.8v-1.9c0-4.9-0.8-10.2-2.2-16
				c-1.5-5.8-3.8-11.2-6.9-16.2c-3.1-5-7.1-9.2-12-12.5c-4.9-3.3-10.8-5-17.6-5h-60.9c-0.2,0-1.1-0.4-2.7-1.1
				c-1.6-0.8-2.8-1.5-3.7-2.4c-0.4,0-0.6-0.2-0.6-0.6H38.9c0.4,5.3,1.7,10.7,3.8,16.2c2.1,5.4,5,10.4,8.6,14.7
				c3.6,4.4,7.9,8,12.8,10.7c4.9,2.8,10.5,4.2,16.7,4.2h64c1.7,0,2.9,0.9,3.5,2.7C149,114.9,149.3,116.7,149.3,118.4z M252.2,4.4
				H88.8c-4.9,0-9.8,1.3-14.6,4c-4.8,2.7-9.3,6.1-13.6,10.3c-4.3,4.2-8.1,8.8-11.4,13.9c-3.3,5.1-5.9,10.1-7.8,15h173.3
				c7.5-7,14.4-14.2,20.6-21.5C241.6,18.9,247.2,11.6,252.2,4.4z"></path><path class="fill-current text-primary-900 dark:text-white" d="M263.7,170.4l10.5-59.4l33.2,59.4H350l-40.8-67.3l62.9-56.6h-47.2l-47,43.5l15.3-86.3h-36.7L227,170.4H263.7
				z"></path><path class="fill-current text-primary-900 dark:text-white" d="M405.1,38c12.5,0,24.2-8.3,24.2-22.3c0-9.6-7.4-15.5-17.7-15.5c-12.5,0-24.2,9-24.2,22.5
				C387.4,32.3,394.8,38,405.1,38z M400,170.4l21.8-123.9h-36.7l-21.8,123.9H400z"></path><path class="fill-current text-primary-900 dark:text-white" d="M476.5,170.4l5.2-29.7h-9.2c-2.6,0-6.1-0.7-6.1-5.7c0-0.4,0-1.3,0.2-2L489.6,3.7h-36.7l-25.1,142
				c-0.4,2-0.4,3.7-0.4,5.5c0,12.5,8.5,19.2,24.5,19.2H476.5z"></path><path class="fill-current text-primary-900 dark:text-white" d="M546,170.4l5.2-29.7H542c-2.6,0-6.1-0.7-6.1-5.7c0-0.4,0-1.3,0.2-2L559.1,3.7h-36.7l-25.1,142
				c-0.4,2-0.4,3.7-0.4,5.5c0,12.5,8.5,19.2,24.5,19.2H546z"></path></g><g><path class="st1" d="M603.2,170.4l11.6-65.8h63.4l-11.6,65.8h39.1L735.1,3.7H696l-11.8,66h-63.4l11.8-66h-39.1l-29.5,166.7H603.2z"></path><path class="st1" d="M774.7,173c14.9,0,25.1-4.8,34.5-15.9l-2.4,13.3h36.7l21.8-123.9h-36.7l-12.2,69.7c-2,10.3-4.4,16.6-8.3,21
				c-3.9,4.2-9.4,6.3-17.5,6.3c-6.3,0-10.5-1.5-12.9-4.6c-1.5-2.2-2.4-5.5-2.4-10.1c0-3.3,0.4-7.4,1.3-12.7l12.2-69.7h-36.7
				l-12.2,69.3c-2,11.8-3.1,19-3.1,24.9c0,4.2,0.4,7.4,1.5,10.9C742.3,165.8,754.4,173,774.7,173z"></path><path class="st1" d="M935.5,173c38.9,0,66.9-39.5,66.9-80.2c0-29.3-17-48.9-44.1-48.9c-13.1,0-24,3.5-34.5,15.9l10-56.1H897l-29.5,166.7h36.7
				l2.4-13.3C912.7,169.5,922.3,173,935.5,173z M930.7,141.7c-13.8,0-22.1-9.6-22.1-24.9c0-20.5,13.1-41.7,33.9-41.7
				c14,0,22.1,9.8,22.1,24.7C964.5,120.3,951.4,141.7,930.7,141.7z"></path></g></g></g></svg>`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/global/TairoLogoText.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : undefined
};
const __nuxt_component_0$1 = /*#__PURE__*/_export_sfc(_sfc_main$r, [['ssrRender',_sfc_ssrRender]]);

const TairoLogoText = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: __nuxt_component_0$1
});

const macLikeRE = /Mac|iP/;
function useIsMacLike() {
  const isMac = ref(false);
  tryOnBeforeMount(() => {
    if (macLikeRE.test(navigator.platform)) {
      isMac.value = true;
    }
  });
  return readonly(isMac);
}
function useMetaKey() {
  const isMac = useIsMacLike();
  return computed(() => {
    return isMac.value ? "⌘" : "ctrl";
  });
}

const get = (obj, path) => path.split(".").reduce((acc, part) => acc && acc[part], obj);
const _pick = (obj, condition) => Object.keys(obj).filter(condition).reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
const omit = (keys) => (obj) => keys && keys.length ? _pick(obj, (key) => !keys.includes(key)) : obj;
const apply = (fn) => (data) => Array.isArray(data) ? data.map((item) => fn(item)) : fn(data);
const detectProperties = (keys) => {
  const prefixes = [];
  const properties = [];
  for (const key of keys) {
    if (["$", "_"].includes(key)) {
      prefixes.push(key);
    } else {
      properties.push(key);
    }
  }
  return { prefixes, properties };
};
const withoutKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => !properties.includes(key) && !prefixes.includes(key[0]));
};
const withKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => properties.includes(key) || prefixes.includes(key[0]));
};
const sortList = (data, params) => {
  const comperable = new Intl.Collator(params.$locale, {
    numeric: params.$numeric,
    caseFirst: params.$caseFirst,
    sensitivity: params.$sensitivity
  });
  const keys = Object.keys(params).filter((key) => !key.startsWith("$"));
  for (const key of keys) {
    data = data.sort((a, b) => {
      const values = [get(a, key), get(b, key)].map((value) => {
        if (value === null) {
          return void 0;
        }
        if (value instanceof Date) {
          return value.toISOString();
        }
        return value;
      });
      if (params[key] === -1) {
        values.reverse();
      }
      return comperable.compare(values[0], values[1]);
    });
  }
  return data;
};
const assertArray = (value, message = "Expected an array") => {
  if (!Array.isArray(value)) {
    throw new TypeError(message);
  }
};
const ensureArray = (value) => {
  return Array.isArray(value) ? value : [void 0, null].includes(value) ? [] : [value];
};

const arrayParams = ["sort", "where", "only", "without"];
function createQuery(fetcher, opts = {}) {
  const queryParams = {};
  for (const key of Object.keys(opts.initialParams || {})) {
    queryParams[key] = arrayParams.includes(key) ? ensureArray(opts.initialParams[key]) : opts.initialParams[key];
  }
  const $set = (key, fn = (v) => v) => {
    return (...values) => {
      queryParams[key] = fn(...values);
      return query;
    };
  };
  const resolveResult = (result) => {
    if (opts.legacy) {
      if (result?.surround) {
        return result.surround;
      }
      if (!result) {
        return result;
      }
      if (result?.dirConfig) {
        result.result = {
          _path: result.dirConfig?._path,
          ...result.result,
          _dir: result.dirConfig
        };
      }
      return result?._path || Array.isArray(result) || !Object.prototype.hasOwnProperty.call(result, "result") ? result : result?.result;
    }
    return result;
  };
  const query = {
    params: () => ({
      ...queryParams,
      ...queryParams.where ? { where: [...ensureArray(queryParams.where)] } : {},
      ...queryParams.sort ? { sort: [...ensureArray(queryParams.sort)] } : {}
    }),
    only: $set("only", ensureArray),
    without: $set("without", ensureArray),
    where: $set("where", (q) => [...ensureArray(queryParams.where), ...ensureArray(q)]),
    sort: $set("sort", (sort) => [...ensureArray(queryParams.sort), ...ensureArray(sort)]),
    limit: $set("limit", (v) => parseInt(String(v), 10)),
    skip: $set("skip", (v) => parseInt(String(v), 10)),
    // find
    find: () => fetcher(query).then(resolveResult),
    findOne: () => fetcher($set("first")(true)).then(resolveResult),
    count: () => fetcher($set("count")(true)).then(resolveResult),
    // locale
    locale: (_locale) => query.where({ _locale }),
    withSurround: $set("surround", (surroundQuery, options) => ({ query: surroundQuery, ...options })),
    withDirConfig: () => $set("dirConfig")(true)
  };
  if (opts.legacy) {
    query.findSurround = (surroundQuery, options) => {
      return query.withSurround(surroundQuery, options).findOne().then(resolveResult);
    };
    return query;
  }
  return query;
}

function jsonStringify(value) {
  return JSON.stringify(value, regExpReplacer);
}
function regExpReplacer(_key, value) {
  if (value instanceof RegExp) {
    return `--REGEX ${value.toString()}`;
  }
  return value;
}

const encodeQueryParams = (params) => {
  let encoded = jsonStringify(params);
  encoded = typeof Buffer !== "undefined" ? Buffer.from(encoded).toString("base64") : btoa(encoded);
  encoded = encoded.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  const chunks = encoded.match(/.{1,100}/g) || [];
  return chunks.join("/");
};

const useContentPreview = () => {
  const getPreviewToken = () => {
    return useCookie("previewToken").value || false  || void 0;
  };
  const setPreviewToken = (token) => {
    useCookie("previewToken").value = token;
    useRoute().query.preview = token || "";
  };
  const isEnabled = () => {
    const query = useRoute().query;
    if (Object.prototype.hasOwnProperty.call(query, "preview") && !query.preview) {
      return false;
    }
    if (query.preview || useCookie("previewToken").value) {
      return true;
    }
    return false;
  };
  return {
    isEnabled,
    getPreviewToken,
    setPreviewToken
  };
};

const withContentBase = (url) => withBase(url,  useRuntimeConfig().public.content.api.baseURL);
const useContentDisabled = () => {
  console.warn("useContent is only accessible when you are using `documentDriven` mode.");
  console.warn("Learn more by visiting: https://content.nuxtjs.org/guide/writing/document-driven");
  throw new Error("useContent is only accessible when you are using `documentDriven` mode.");
};
const addPrerenderPath = (path) => {
  const event = useRequestEvent();
  event.node.res.setHeader(
    "x-nitro-prerender",
    [
      event.node.res.getHeader("x-nitro-prerender"),
      path
    ].filter(Boolean).join(",")
  );
};
const shouldUseClientDB = () => {
   useRuntimeConfig().public.content;
  {
    return false;
  }
};

const createQueryFetch = () => async (query) => {
  const { content } =  useRuntimeConfig().public;
  const params = query.params();
  const apiPath = content.experimental.stripQueryParameters ? withContentBase(`/query/${`${hash(params)}.${content.integrity}`}/${encodeQueryParams(params)}.json`) : withContentBase(`/query/${hash(params)}.${content.integrity}.json`);
  {
    addPrerenderPath(apiPath);
  }
  if (shouldUseClientDB()) {
    const db = await import('./_nuxt/client-db-0354bee8.mjs').then((m) => m.useContentDatabase());
    return db.fetch(query);
  }
  const data = await $fetch(apiPath, {
    method: "GET",
    responseType: "json",
    params: content.experimental.stripQueryParameters ? void 0 : {
      _params: jsonStringify(params),
      previewToken: useContentPreview().getPreviewToken()
    }
  });
  if (typeof data === "string" && data.startsWith("<!DOCTYPE html>")) {
    throw new Error("Not found");
  }
  return data;
};
function queryContent(query, ...pathParts) {
  const { content } =  useRuntimeConfig().public;
  const queryBuilder = createQuery(createQueryFetch(), {
    initialParams: typeof query !== "string" ? query : {},
    legacy: true
  });
  let path;
  if (typeof query === "string") {
    path = withLeadingSlash(joinURL(query, ...pathParts));
  }
  const originalParamsFn = queryBuilder.params;
  queryBuilder.params = () => {
    const params = originalParamsFn();
    if (path) {
      params.where = params.where || [];
      if (params.first && (params.where || []).length === 0) {
        params.where.push({ _path: withoutTrailingSlash(path) });
      } else {
        params.where.push({ _path: new RegExp(`^${path.replace(/[-[\]{}()*+.,^$\s/]/g, "\\$&")}`) });
      }
    }
    if (!params.sort?.length) {
      params.sort = [{ _file: 1, $numeric: true }];
    }
    if (content.locales.length) {
      const queryLocale = params.where?.find((w) => w._locale)?._locale;
      if (!queryLocale) {
        params.where = params.where || [];
        params.where.push({ _locale: content.defaultLocale });
      }
    }
    return params;
  };
  return queryBuilder;
}

const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "DemoAppSearch",
  __ssrInlineRender: true,
  setup(__props) {
    const isMacLike = useIsMacLike();
    const isOpen = useState("search-open", () => false);
    const search = ref("");
    onKeyStroke("k", (event) => {
      const modifier = isMacLike.value ? event.metaKey : event.ctrlKey;
      if (modifier) {
        event.preventDefault();
        isOpen.value = !isOpen.value;
      }
    });
    const { data: contentDocs } = useAsyncData(
      () => {
        if (!search.value)
          return Promise.resolve([]);
        return queryContent().where({
          $and: [
            {
              _type: "markdown",
              _draft: false,
              _partial: false
            },
            {
              $or: [
                {
                  components: { $icontains: search.value }
                },
                {
                  title: { $regex: `/${search.value.replaceAll(" ", ".*")}/i` }
                },
                {
                  _path: { $regex: `/${search.value.replaceAll(" ", ".*")}/i` }
                }
              ]
            }
          ]
        }).limit(6).find().catch(() => []);
      },
      {
        watch: [search]
      }
    , '$KyeTl6nybl');
    const router = useRouter();
    const demoPages = computed(() => {
      if (!search.value)
        return [];
      const match = [];
      const searchRe = new RegExp(search.value, "i");
      function traverseRoutes(routes) {
        for (const route of routes) {
          if (route.children) {
            traverseRoutes(route.children);
          } else if (route.path.includes(":")) {
            continue;
          } else if (route.meta?.preview?.title && searchRe.test(route.meta?.preview?.title)) {
            match.push(route);
          } else if (route.meta?.preview?.description && searchRe.test(route.meta?.preview?.description)) {
            match.push(route);
          }
        }
      }
      traverseRoutes(router.options.routes);
      return match.slice(0, 6);
    });
    const contentDocsResults = computed(() => {
      const max = 6 - Math.min(demoPages.value.length, 3);
      return contentDocs.value?.slice(0, max);
    });
    const demoPagesResults = computed(() => {
      const max = 6 - Math.min(contentDocs.value?.length || 0, 3);
      return demoPages.value?.slice(0, max);
    });
    const hasResult = computed(
      () => Boolean(contentDocsResults.value?.length || demoPagesResults.value?.length)
    );
    function onClick() {
      isOpen.value = false;
    }
    const metaKey = useMetaKey();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoModal = _sfc_main$u;
      const _component_BaseFocusLoop = _sfc_main$t;
      const _component_BaseInput = _sfc_main$z;
      const _component_DemoAppSearchResult = _sfc_main$s;
      const _component_BaseText = _sfc_main$D;
      const _component_TairoLogoText = __nuxt_component_0$1;
      const _directive_focus = resolveDirective("focus");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_TairoModal, {
        classes: {
          wrapper: "!items-start pt-20",
          dialog: "p-3 rounded-xl"
        },
        open: unref(isOpen),
        size: "md",
        onClose: ($event) => isOpen.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseFocusLoop, {
              "next-keys": "ArrowDown",
              "prev-keys": "ArrowUp"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="px-2 pb-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseInput, mergeProps({
                    type: "search",
                    shape: "curved",
                    icon: "lucide:search",
                    modelValue: unref(search),
                    "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                    placeholder: "Ex: button or analytics...",
                    "color-focus": ""
                  }, ssrGetDirectiveProps(_ctx, _directive_focus)), {
                    label: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="flex w-full justify-between"${_scopeId3}><span${_scopeId3}>Search</span>`);
                        if (unref(hasResult)) {
                          _push4(`<span class="text-xs opacity-60"${_scopeId3}> navigate with <kbd${_scopeId3}>↑</kbd> and <kbd${_scopeId3}>↓</kbd></span>`);
                        } else if (!unref(search)) {
                          _push4(`<span class="text-xs opacity-60"${_scopeId3}> press <kbd${_scopeId3}>${ssrInterpolate(unref(metaKey))}</kbd> + <kbd${_scopeId3}>k</kbd> to open </span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "flex w-full justify-between" }, [
                            createVNode("span", null, "Search"),
                            unref(hasResult) ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-xs opacity-60"
                            }, [
                              createTextVNode(" navigate with "),
                              createVNode("kbd", null, "↑"),
                              createTextVNode(" and "),
                              createVNode("kbd", null, "↓")
                            ])) : !unref(search) ? (openBlock(), createBlock("span", {
                              key: 1,
                              class: "text-xs opacity-60"
                            }, [
                              createTextVNode(" press "),
                              createVNode("kbd", null, toDisplayString(unref(metaKey)), 1),
                              createTextVNode(" + "),
                              createVNode("kbd", null, "k"),
                              createTextVNode(" to open ")
                            ])) : createCommentVNode("", true)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (unref(contentDocsResults)?.length) {
                    _push3(`<div${_scopeId2}><div class="px-3 pt-2"${_scopeId2}><span class="nui-text-500 text-[0.65rem] font-medium uppercase tracking-wider"${_scopeId2}> Documentation Hub </span></div><ul${_scopeId2}><!--[-->`);
                    ssrRenderList(unref(contentDocsResults), (page) => {
                      _push3(`<li class=""${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_DemoAppSearchResult, {
                        to: page?._path,
                        search: unref(search),
                        title: page?.title,
                        subtitle: page?._path,
                        icon: page?.icon?.src,
                        onClick
                      }, null, _parent3, _scopeId2));
                      _push3(`</li>`);
                    });
                    _push3(`<!--]--></ul></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(demoPagesResults)?.length) {
                    _push3(`<div${_scopeId2}><div class="px-3 pt-2"${_scopeId2}><span class="nui-text-500 text-[0.65rem] font-medium uppercase tracking-wider"${_scopeId2}> Demo Pages </span></div><ul${_scopeId2}><!--[-->`);
                    ssrRenderList(unref(demoPagesResults), (page) => {
                      _push3(`<li class=""${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_DemoAppSearchResult, {
                        to: {
                          name: page?.name
                        },
                        search: unref(search),
                        title: page?.meta?.preview?.title,
                        subtitle: page?.meta?.preview?.description,
                        onClick
                      }, null, _parent3, _scopeId2));
                      _push3(`</li>`);
                    });
                    _push3(`<!--]--></ul></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode("div", { class: "px-2 pb-2" }, [
                      withDirectives((openBlock(), createBlock(_component_BaseInput, {
                        type: "search",
                        shape: "curved",
                        icon: "lucide:search",
                        modelValue: unref(search),
                        "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                        placeholder: "Ex: button or analytics...",
                        "color-focus": ""
                      }, {
                        label: withCtx(() => [
                          createVNode("span", { class: "flex w-full justify-between" }, [
                            createVNode("span", null, "Search"),
                            unref(hasResult) ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-xs opacity-60"
                            }, [
                              createTextVNode(" navigate with "),
                              createVNode("kbd", null, "↑"),
                              createTextVNode(" and "),
                              createVNode("kbd", null, "↓")
                            ])) : !unref(search) ? (openBlock(), createBlock("span", {
                              key: 1,
                              class: "text-xs opacity-60"
                            }, [
                              createTextVNode(" press "),
                              createVNode("kbd", null, toDisplayString(unref(metaKey)), 1),
                              createTextVNode(" + "),
                              createVNode("kbd", null, "k"),
                              createTextVNode(" to open ")
                            ])) : createCommentVNode("", true)
                          ])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])), [
                        [_directive_focus]
                      ])
                    ]),
                    unref(contentDocsResults)?.length ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode("div", { class: "px-3 pt-2" }, [
                        createVNode("span", { class: "nui-text-500 text-[0.65rem] font-medium uppercase tracking-wider" }, " Documentation Hub ")
                      ]),
                      createVNode("ul", null, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(contentDocsResults), (page) => {
                          return openBlock(), createBlock("li", {
                            key: page?._path,
                            class: ""
                          }, [
                            createVNode(_component_DemoAppSearchResult, {
                              to: page?._path,
                              search: unref(search),
                              title: page?.title,
                              subtitle: page?._path,
                              icon: page?.icon?.src,
                              onClickPassive: onClick
                            }, null, 8, ["to", "search", "title", "subtitle", "icon"])
                          ]);
                        }), 128))
                      ])
                    ])) : createCommentVNode("", true),
                    unref(demoPagesResults)?.length ? (openBlock(), createBlock("div", { key: 1 }, [
                      createVNode("div", { class: "px-3 pt-2" }, [
                        createVNode("span", { class: "nui-text-500 text-[0.65rem] font-medium uppercase tracking-wider" }, " Demo Pages ")
                      ]),
                      createVNode("ul", null, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(demoPagesResults), (page) => {
                          return openBlock(), createBlock("li", {
                            key: page?.name,
                            class: ""
                          }, [
                            createVNode(_component_DemoAppSearchResult, {
                              to: {
                                name: page?.name
                              },
                              search: unref(search),
                              title: page?.meta?.preview?.title,
                              subtitle: page?.meta?.preview?.description,
                              onClickPassive: onClick
                            }, null, 8, ["to", "search", "title", "subtitle"])
                          ]);
                        }), 128))
                      ])
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex flex-col items-center py-3 text-center"${_scopeId}><div class="scale-[0.8]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              weight: "medium",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Search by`);
                } else {
                  return [
                    createTextVNode("Search by")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TairoLogoText, { class: "text-muted-400 mx-auto w-20" }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode(_component_BaseFocusLoop, {
                "next-keys": "ArrowDown",
                "prev-keys": "ArrowUp"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "px-2 pb-2" }, [
                    withDirectives((openBlock(), createBlock(_component_BaseInput, {
                      type: "search",
                      shape: "curved",
                      icon: "lucide:search",
                      modelValue: unref(search),
                      "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                      placeholder: "Ex: button or analytics...",
                      "color-focus": ""
                    }, {
                      label: withCtx(() => [
                        createVNode("span", { class: "flex w-full justify-between" }, [
                          createVNode("span", null, "Search"),
                          unref(hasResult) ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-xs opacity-60"
                          }, [
                            createTextVNode(" navigate with "),
                            createVNode("kbd", null, "↑"),
                            createTextVNode(" and "),
                            createVNode("kbd", null, "↓")
                          ])) : !unref(search) ? (openBlock(), createBlock("span", {
                            key: 1,
                            class: "text-xs opacity-60"
                          }, [
                            createTextVNode(" press "),
                            createVNode("kbd", null, toDisplayString(unref(metaKey)), 1),
                            createTextVNode(" + "),
                            createVNode("kbd", null, "k"),
                            createTextVNode(" to open ")
                          ])) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])), [
                      [_directive_focus]
                    ])
                  ]),
                  unref(contentDocsResults)?.length ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode("div", { class: "px-3 pt-2" }, [
                      createVNode("span", { class: "nui-text-500 text-[0.65rem] font-medium uppercase tracking-wider" }, " Documentation Hub ")
                    ]),
                    createVNode("ul", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(contentDocsResults), (page) => {
                        return openBlock(), createBlock("li", {
                          key: page?._path,
                          class: ""
                        }, [
                          createVNode(_component_DemoAppSearchResult, {
                            to: page?._path,
                            search: unref(search),
                            title: page?.title,
                            subtitle: page?._path,
                            icon: page?.icon?.src,
                            onClickPassive: onClick
                          }, null, 8, ["to", "search", "title", "subtitle", "icon"])
                        ]);
                      }), 128))
                    ])
                  ])) : createCommentVNode("", true),
                  unref(demoPagesResults)?.length ? (openBlock(), createBlock("div", { key: 1 }, [
                    createVNode("div", { class: "px-3 pt-2" }, [
                      createVNode("span", { class: "nui-text-500 text-[0.65rem] font-medium uppercase tracking-wider" }, " Demo Pages ")
                    ]),
                    createVNode("ul", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(demoPagesResults), (page) => {
                        return openBlock(), createBlock("li", {
                          key: page?.name,
                          class: ""
                        }, [
                          createVNode(_component_DemoAppSearchResult, {
                            to: {
                              name: page?.name
                            },
                            search: unref(search),
                            title: page?.meta?.preview?.title,
                            subtitle: page?.meta?.preview?.description,
                            onClickPassive: onClick
                          }, null, 8, ["to", "search", "title", "subtitle"])
                        ]);
                      }), 128))
                    ])
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createVNode("div", { class: "flex flex-col items-center py-3 text-center" }, [
                createVNode("div", { class: "scale-[0.8]" }, [
                  createVNode(_component_BaseText, {
                    size: "xs",
                    weight: "medium",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Search by")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TairoLogoText, { class: "text-muted-400 mx-auto w-20" })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});

const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoAppSearch.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};

const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "BaseHeading",
  __ssrInlineRender: true,
  props: {
    as: { default: "p" },
    size: { default: "xl" },
    weight: { default: "semibold" },
    lead: { default: "normal" }
  },
  setup(__props) {
    const props = __props;
    const sizeStyle = {
      xs: "nui-heading-xs",
      sm: "nui-heading-sm",
      md: "nui-heading-md",
      lg: "nui-heading-lg",
      xl: "nui-heading-xl",
      "2xl": "nui-heading-2xl",
      "3xl": "nui-heading-3xl",
      "4xl": "nui-heading-4xl",
      "5xl": "nui-heading-5xl",
      "6xl": "nui-heading-6xl",
      "7xl": "nui-heading-7xl",
      "8xl": "nui-heading-8xl",
      "9xl": "nui-heading-9xl"
    };
    const weightStyle = {
      light: "nui-weight-light",
      normal: "nui-weight-normal",
      medium: "nui-weight-medium",
      semibold: "nui-weight-semibold",
      bold: "nui-weight-bold",
      extrabold: "nui-weight-extrabold"
    };
    const leadStyle = {
      none: "nui-lead-none",
      tight: "nui-lead-tight",
      snug: "nui-lead-snug",
      normal: "nui-lead-normal",
      relaxed: "nui-lead-relaxed",
      loose: "nui-lead-loose"
    };
    const classes = computed(() => [
      "nui-heading",
      sizeStyle[props.size],
      weightStyle[props.weight],
      leadStyle[props.lead]
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(props.as), mergeProps({ class: unref(classes) }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});

const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/base/BaseHeading.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};

const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "BaseParagraph",
  __ssrInlineRender: true,
  props: {
    as: { default: "p" },
    size: { default: "md" },
    weight: { default: "normal" },
    lead: { default: "normal" }
  },
  setup(__props) {
    const props = __props;
    const sizeStyle = {
      xs: "nui-paragraph-xs",
      sm: "nui-paragraph-sm",
      md: "nui-paragraph-md",
      lg: "nui-paragraph-lg",
      xl: "nui-paragraph-xl",
      "2xl": "nui-paragraph-2xl",
      "3xl": "nui-paragraph-3xl",
      "4xl": "nui-paragraph-4xl",
      "5xl": "nui-paragraph-5xl",
      "6xl": "nui-paragraph-6xl",
      "7xl": "nui-paragraph-7xl",
      "8xl": "nui-paragraph-8xl",
      "9xl": "nui-paragraph-9xl"
    };
    const weightStyle = {
      light: "nui-weight-light",
      normal: "nui-weight-normal",
      medium: "nui-weight-medium",
      semibold: "nui-weight-semibold",
      bold: "nui-weight-bold",
      extrabold: "nui-weight-extrabold"
    };
    const leadStyle = {
      none: "nui-lead-none",
      tight: "nui-lead-tight",
      snug: "nui-lead-snug",
      normal: "nui-lead-normal",
      relaxed: "nui-lead-relaxed",
      loose: "nui-lead-loose"
    };
    const classes = computed(() => [
      "nui-paragraph",
      sizeStyle[props.size],
      weightStyle[props.weight],
      leadStyle[props.lead]
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(props.as), mergeProps({ class: unref(classes) }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});

const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/base/BaseParagraph.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};

const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "TairoCollapseNavigationCollapseLinks",
  __ssrInlineRender: true,
  props: {
    item: {},
    expanded: { type: Boolean }
  },
  emits: ["clicked"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const route = useRoute();
    const isActive = computed(() => {
      if (!props.item?.activePath) {
        return false;
      }
      return route.path.startsWith(props.item.activePath);
    });
    ref();
    const isOpen = ref(isActive.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      const _component_NuxtLink = __nuxt_component_0$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "group" }, _attrs))}><button class="${ssrRenderClass([props.expanded ? "gap-4 px-4" : "px-2 justify-center", "nui-focus text-muted-500 dark:text-muted-400/80 hover:bg-muted-100 dark:hover:bg-muted-700/60 hover:text-muted-600 dark:hover:text-muted-200 flex w-full cursor-pointer items-center rounded-lg py-3 transition-colors duration-300"])}">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: _ctx.item.icon.name,
        class: [[_ctx.item.icon.class, unref(isActive) && "text-primary-500"], "shrink-0"]
      }, null, _parent));
      _push(`<span class="${ssrRenderClass([[
        unref(isActive) && "text-primary-500",
        !props.expanded ? "hidden" : "block"
      ], "block whitespace-nowrap font-sans text-sm"])}">${ssrInterpolate(_ctx.item.name)}</span><span class="${ssrRenderClass([!props.expanded ? "hidden" : "flex", "ms-auto items-center justify-center"])}">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:chevron-up",
        class: ["h-4 w-4 transition-transform duration-200", !unref(isOpen) ? "rotate-180" : ""]
      }, null, _parent));
      _push(`</span></button>`);
      if (props.expanded) {
        _push(`<ul class="${ssrRenderClass([{
          "max-h-0 overflow-hidden opacity-0 group-focus-within:max-h-max group-focus-within:overflow-visible group-focus-within:opacity-100": !unref(isOpen),
          "after:border-muted-200 max-h-max opacity-100": unref(isOpen)
        }, "border-muted-200 relative block ps-4"])}"><!--[-->`);
        ssrRenderList(props.item.children, (child) => {
          _push(`<li class="border-muted-300 dark:border-muted-700 ms-2 border-s-2 first:mt-2">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: child.to,
            "exact-active-class": "!border-primary-500 !text-primary-500 dark:!text-primary-500",
            class: "nui-focus text-muted-500 hover:text-muted-600 dark:text-muted-400/80 dark:hover:text-muted-200 relative -start-0.5 flex cursor-pointer items-center gap-2 border-s-2 border-transparent py-2 ps-4 transition-colors duration-300"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: child.icon.name,
                  class: [child.icon.class, "shrink-0"]
                }, null, _parent2, _scopeId));
                _push2(`<span class="${ssrRenderClass([[!props.expanded ? "hidden" : "block"], "whitespace-nowrap font-sans text-[0.85rem]"])}"${_scopeId}>${ssrInterpolate(child.name)}</span>`);
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: child.icon.name,
                    class: [child.icon.class, "shrink-0"]
                  }, null, 8, ["name", "class"]),
                  createVNode("span", {
                    class: ["whitespace-nowrap font-sans text-[0.85rem]", [!props.expanded ? "hidden" : "block"]]
                  }, toDisplayString(child.name), 3)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});

const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-collapse/components/TairoCollapseNavigationCollapseLinks.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};

const nativeComponent = ["img", "div"];
function resolveComponentOrNative(component) {
  if (nativeComponent.includes(component))
    return component;
  return resolveComponent(component);
}

function useTailwindColors() {
  const primary = ref("transparent") ;
  const success = ref("transparent") ;
  const info = ref("transparent") ;
  const warning = ref("transparent") ;
  const danger = ref("transparent") ;
  const yellow = ref("transparent") ;
  const title = ref("transparent") ;
  const subtitle = ref("transparent") ;
  return {
    primary,
    info,
    success,
    warning,
    danger,
    yellow,
    title,
    subtitle
  };
}
function useTailwindBreakpoints() {
  const xs = useMediaQuery("(max-width: 639px)");
  const sm = useMediaQuery("(min-width: 640px)");
  const md = useMediaQuery("(min-width: 768px)");
  const lg = useMediaQuery("(min-width: 1025px)");
  const ptablet = useMediaQuery(
    "(min-width: 768px) and (max-width: 1024px) and (orientation: portrait)"
  );
  const ltablet = useMediaQuery(
    "(min-width: 768px) and (max-width: 1024px) and (orientation: landscape)"
  );
  const xl = useMediaQuery("(min-width: 1280px)");
  const doublexl = useMediaQuery("(min-width: 1536px)");
  return {
    xs,
    sm,
    md,
    lg,
    ptablet,
    ltablet,
    xl,
    doublexl
  };
}

function useCollapse() {
  const app = useAppConfig();
  const menuItems = computed(() => {
    if (app.tairo.collapse?.navigation?.enabled === false || app.tairo.collapse?.navigation?.items?.length === 0) {
      return [];
    }
    return app.tairo.collapse?.navigation?.items?.map(
      (navigation) => ({
        ...navigation,
        position: navigation.position ?? "start"
      })
    );
  });
  const isOpen = useState("collapse-open", () => true);
  const isMobileOpen = useState("collapse-mobile-open", () => false);
  const header = computed(() => {
    return app.tairo.collapse?.navigation?.header;
  });
  const footer = computed(() => {
    return app.tairo.collapse?.navigation?.footer;
  });
  function toggle() {
    const { lg } = useTailwindBreakpoints();
    if (lg.value) {
      isOpen.value = !isOpen.value;
    } else {
      isMobileOpen.value = !isMobileOpen.value;
    }
  }
  return {
    toggle,
    menuItems,
    isOpen,
    isMobileOpen,
    header,
    footer
  };
}

const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "TairoCollapseNavigation",
  __ssrInlineRender: true,
  setup(__props) {
    const { isOpen, isMobileOpen, menuItems } = useCollapse();
    const app = useAppConfig();
    const startMenuItems = computed(
      () => menuItems.value?.filter(
        (sidebar) => !sidebar.position || sidebar.position === "start"
      )
    );
    const endMenuItems = computed(
      () => menuItems.value?.filter((sidebar) => sidebar.position === "end")
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoCollapseNavigationCollapseLinks = _sfc_main$n;
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["dark:bg-muted-800 border-muted-200 dark:border-muted-700 fixed start-0 top-0 z-[60] flex h-full flex-col border-r bg-white transition-all duration-300", [
          !unref(isOpen) ? "w-[80px]" : "w-[280px]",
          unref(isMobileOpen) ? "translate-x-0 lg:translate-x-0" : "-translate-x-full lg:translate-x-0"
        ]]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "header", {}, () => {
        if (unref(app).tairo.collapse?.navigation?.header?.component) {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(
            ("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(
              unref(app).tairo.collapse?.navigation?.header?.component
            )
          ), null, null), _parent);
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`<div class="${ssrRenderClass([!unref(isOpen) ? "px-4" : "px-6", "nui-slimscroll relative flex w-full grow flex-col overflow-y-auto py-6"])}">`);
      if (unref(startMenuItems)?.length) {
        _push(`<ul class="space-y-2"><!--[-->`);
        ssrRenderList(unref(startMenuItems), (item, index) => {
          _push(`<li>`);
          if (item?.component?.name) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(item?.component?.name)), item?.component?.props, null), _parent);
          } else if (item.children) {
            _push(ssrRenderComponent(_component_TairoCollapseNavigationCollapseLinks, {
              item,
              expanded: unref(isOpen),
              onClicked: ($event) => isOpen.value = true
            }, null, _parent));
          } else if (item.to) {
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: item.to,
              "exact-active-class": "!bg-primary-500/10 dark:!bg-primary-500/20 !text-primary-500 dark:!text-primary-500",
              class: ["nui-focus text-muted-500 dark:text-muted-400/80 hover:bg-muted-100 dark:hover:bg-muted-700/60 hover:text-muted-600 dark:hover:text-muted-200 flex cursor-pointer items-center gap-4 rounded-lg py-3 transition-colors duration-300", !unref(isOpen) ? "px-1 justify-center" : "px-4"]
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_Icon, {
                    name: item.icon.name,
                    class: item.icon.class
                  }, null, _parent2, _scopeId));
                  _push2(`<span class="${ssrRenderClass([!unref(isOpen) ? "hidden" : "block", "whitespace-nowrap font-sans text-sm"])}"${_scopeId}>${ssrInterpolate(item.name)}</span>`);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: item.icon.name,
                      class: item.icon.class
                    }, null, 8, ["name", "class"]),
                    createVNode("span", {
                      class: ["whitespace-nowrap font-sans text-sm", !unref(isOpen) ? "hidden" : "block"]
                    }, toDisplayString(item.name), 3)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else if (item.divider) {
            _push(`<div class="border-muted-200 dark:border-muted-700 my-3 h-px w-full border-t"></div>`);
          } else {
            _push(`<button class="${ssrRenderClass([!unref(isOpen) ? "px-1 justify-center" : "px-4", "nui-focus text-muted-500 dark:text-muted-400/80 hover:bg-muted-100 dark:hover:bg-muted-700/60 hover:text-muted-600 dark:hover:text-muted-200 flex w-full cursor-pointer items-center gap-4 rounded-lg py-3 transition-colors duration-300"])}">`);
            _push(ssrRenderComponent(_component_Icon, {
              name: item.icon.name,
              class: item.icon.class
            }, null, _parent));
            _push(`<span class="${ssrRenderClass([!unref(isOpen) ? "hidden" : "block", "whitespace-nowrap font-sans text-sm"])}">${ssrInterpolate(item.name)}</span></button>`);
          }
          _push(`</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mb-2 grow"></div>`);
      if (unref(endMenuItems)?.length) {
        _push(`<ul class="space-y-2"><!--[-->`);
        ssrRenderList(unref(endMenuItems), (item, index) => {
          _push(`<li>`);
          if (item?.component?.name) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(item?.component?.name)), item?.component?.props, null), _parent);
          } else if (item.children) {
            _push(ssrRenderComponent(_component_TairoCollapseNavigationCollapseLinks, {
              item,
              expanded: unref(isOpen),
              onClicked: ($event) => isOpen.value = true
            }, null, _parent));
          } else if (item.to) {
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: item.to,
              "exact-active-class": "!bg-primary-500/10 dark:!bg-primary-500/20 !text-primary-500 dark:!text-primary-500",
              class: ["nui-focus text-muted-500 dark:text-muted-400/80 hover:bg-muted-100 dark:hover:bg-muted-700/60 hover:text-muted-600 dark:hover:text-muted-200 flex cursor-pointer items-center gap-4 rounded-lg py-3 transition-colors duration-300", !unref(isOpen) ? "px-1 justify-center" : "px-4"]
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_Icon, {
                    name: item.icon.name,
                    class: item.icon.class
                  }, null, _parent2, _scopeId));
                  _push2(`<span class="${ssrRenderClass([!unref(isOpen) ? "hidden" : "block", "whitespace-nowrap font-sans text-sm"])}"${_scopeId}>${ssrInterpolate(item.name)}</span>`);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: item.icon.name,
                      class: item.icon.class
                    }, null, 8, ["name", "class"]),
                    createVNode("span", {
                      class: ["whitespace-nowrap font-sans text-sm", !unref(isOpen) ? "hidden" : "block"]
                    }, toDisplayString(item.name), 3)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else if (item.divider) {
            _push(`<div class="border-muted-200 dark:border-muted-700 my-3 h-px w-full border-t"></div>`);
          } else {
            _push(`<button class="${ssrRenderClass([!unref(isOpen) ? "px-1 justify-center" : "px-4", "nui-focus text-muted-500 dark:text-muted-400/80 hover:bg-muted-100 dark:hover:bg-muted-700/60 hover:text-muted-600 dark:hover:text-muted-200 flex w-full cursor-pointer items-center gap-4 rounded-lg py-3 transition-colors duration-300"])}">`);
            _push(ssrRenderComponent(_component_Icon, {
              name: item.icon.name,
              class: item.icon.class
            }, null, _parent));
            _push(`<span class="${ssrRenderClass([!unref(isOpen) ? "hidden" : "block", "whitespace-nowrap font-sans text-sm"])}">${ssrInterpolate(item.name)}</span></button>`);
          }
          _push(`</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      ssrRenderSlot(_ctx.$slots, "footer", {}, () => {
        if (unref(app).tairo.collapse?.navigation?.footer?.component) {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(
            ("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(
              unref(app).tairo.collapse?.navigation?.footer?.component
            )
          ), null, null), _parent);
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`</div>`);
    };
  }
});

const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-collapse/components/TairoCollapseNavigation.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};

const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "TairoCollapseBurger",
  __ssrInlineRender: true,
  setup(__props) {
    const { isOpen, isMobileOpen, toggle } = useCollapse();
    const { lg } = useTailwindBreakpoints();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: "flex h-10 w-10 items-center justify-center"
      }, _attrs))}><div class="${ssrRenderClass([[
        unref(isOpen) && unref(lg) ? "scale-90" : "",
        unref(isMobileOpen) && !unref(lg) ? "scale-90" : ""
      ], "relative h-5 w-5"])}"><span class="${ssrRenderClass([[
        unref(isOpen) && unref(lg) ? "top-1 max-w-[75%] -rotate-45 rtl:rotate-45" : "top-0.5",
        unref(isMobileOpen) && !unref(lg) ? "top-1 max-w-[75%] -rotate-45 rtl:rotate-45" : "top-0.5"
      ], "bg-primary-500 absolute block h-0.5 w-full transition-all duration-300"])}"></span><span class="${ssrRenderClass([[
        unref(isOpen) && unref(lg) ? "translate-x-4 opacity-0 rtl:-translate-x-4" : "",
        unref(isMobileOpen) && !unref(lg) ? "translate-x-4 opacity-0  rtl:-translate-x-4" : ""
      ], "bg-primary-500 absolute top-1/2 block h-0.5 w-full max-w-[50%] transition-all duration-300"])}"></span><span class="${ssrRenderClass([[
        unref(isOpen) && unref(lg) ? "bottom-1 max-w-[75%] rotate-45 rtl:-rotate-45" : "bottom-0",
        unref(isMobileOpen) && !unref(lg) ? "bottom-1 max-w-[75%] rotate-45 rtl:-rotate-45" : "bottom-0"
      ], "bg-primary-500 absolute block h-0.5 w-full transition-all duration-300"])}"></span></div></button>`);
    };
  }
});

const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-collapse/components/TairoCollapseBurger.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};

const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "TairoCollapseToolbar",
  __ssrInlineRender: true,
  props: {
    collapse: { type: Boolean, default: true },
    horizontalScroll: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const app = useAppConfig();
    const route = useRoute();
    const showNavBurger = computed(() => {
      return props.collapse && app.tairo.collapse?.toolbar?.showNavBurger;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoCollapseBurger = _sfc_main$l;
      const _component_BaseHeading = _sfc_main$p;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["relative z-50 mb-5 flex h-16 items-center gap-2", props.horizontalScroll && "pe-4 xl:pe-10"]
      }, _attrs))}>`);
      if (unref(showNavBurger)) {
        _push(ssrRenderComponent(_component_TairoCollapseBurger, { class: "-ms-3" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(app).tairo.collapse?.toolbar?.showTitle) {
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h1",
          size: "2xl",
          weight: "light",
          class: "text-muted-800 hidden dark:text-white md:block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                _push2(`${ssrInterpolate(unref(route).meta.title)}`);
              }, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "title", {}, () => [
                  createTextVNode(toDisplayString(unref(route).meta.title), 1)
                ])
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="ms-auto"></div><!--[-->`);
      ssrRenderList(unref(app).tairo.collapse?.toolbar?.tools, (tool) => {
        _push(`<!--[-->`);
        if (tool.component) {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(tool.component)), mergeProps({
            key: tool.component
          }, tool.props), null), _parent);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
    };
  }
});

const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-collapse/components/TairoCollapseToolbar.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};

function usePanels() {
  const app = useAppConfig();
  const panels = computed(
    () => app.tairo?.panels?.map((panel) => ({
      ...panel,
      position: panel.position ?? "left",
      overlay: panel.overlay ?? true
    })) ?? []
  );
  const currentName = useState("panels-current-name", () => "");
  const transitionFrom = useState("panels-transition-from", () => "left");
  const showOverlay = useState("panels-overlay", () => true);
  const currentProps = useState("panels-current-props", () => ({}));
  const current = computed(() => {
    if (!currentName.value) {
      return void 0;
    }
    return panels.value.find((panel) => panel.name === currentName.value);
  });
  function open(name, props) {
    const panel = panels.value.find(({ name: panelName }) => panelName === name);
    if (panel) {
      transitionFrom.value = panel.position;
      currentName.value = panel.name;
      showOverlay.value = panel.overlay;
      currentProps.value = defu(props ?? {}, panel.props ?? {});
    }
  }
  function close() {
    currentName.value = "";
  }
  return {
    panels,
    current,
    transitionFrom,
    currentProps,
    showOverlay,
    open,
    close
  };
}

const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "TairoPanels",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      panels,
      current,
      transitionFrom,
      currentProps,
      showOverlay,
      open,
      close
    } = usePanels();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      ssrRenderSlotInner(_ctx.$slots, "default", {
        panels: unref(panels),
        current: unref(current),
        transitionFrom: unref(transitionFrom),
        currentProps: unref(currentProps),
        showOverlay: unref(showOverlay),
        open: unref(open),
        close: unref(close)
      }, () => {
        ssrRenderSuspense(_push, {
          default: () => {
            if (unref(current)?.component) {
              ssrRenderVNode(_push, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(unref(current).component)), mergeProps(unref(currentProps), {
                class: ["fixed top-0 z-[100] h-full w-96", [unref(current).position === "left" ? "start-0" : "end-0"]]
              }), null), _parent);
            } else {
              _push(`<!---->`);
            }
          },
          _: 1
        });
      }, _push, _parent, null, true);
      _push(`<div class="${ssrRenderClass([
        unref(current) && unref(showOverlay) ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        "bg-muted-800/60 fixed start-0 top-0 z-[99] h-full w-full cursor-pointer transition-opacity duration-300"
      ])}"></div></div>`);
    };
  }
});

const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo/components/TairoPanels.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};

function useNinjaWindowScroll() {
  const x = ref(0);
  const y = ref(0);
  return { x, y };
}

const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "TairoCollapseCircularMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { y } = useNinjaWindowScroll();
    const app = useAppConfig();
    const isOpened = ref(false);
    const isScrolled = computed(() => {
      if (y.value < 60) {
        isOpened.value = false;
      }
      return y.value > 60;
    });
    const toolOffsets = [
      "translate-x-[-6.5em] rtl:translate-x-[6.5em] translate-y-[-0.25em]",
      "translate-x-[-5.75em] rtl:translate-x-[5.75em] translate-y-[3em]",
      "translate-x-[-3.15em] rtl:translate-x-[3.15em] translate-y-[5.5em]",
      "translate-x-[0em] translate-y-[6.5em]"
    ];
    const tools = computed(() => {
      return app.tairo.collapse?.circularMenu?.tools?.slice(0, 4) || [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["after:bg-primary-600 after:shadow-primary-500/50 dark:after:shadow-muted-800/10 fixed end-[1em] top-[0.6em] z-[90] transition-transform duration-300 after:absolute after:right-0 after:top-0 after:block after:h-12 after:w-12 after:rounded-full after:shadow-lg after:transition-transform after:duration-300 after:content-['']", [
          unref(isOpened) ? "after:ease-[cubic-bezier(0.68, 1.55, 0.265, 1)] after:scale-[5.5]" : "",
          unref(isScrolled) ? "" : "-translate-y-24"
        ]]
      }, _attrs))}><button type="button" class="bg-primary-500 shadow-primary-500/50 dark:shadow-muted-800/10 relative z-30 flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg"><span class="${ssrRenderClass([unref(isOpened) ? "scale-90 top-0" : "-top-0.5", "relative block h-3 w-3 transition-all duration-300"])}"><span class="${ssrRenderClass([unref(isOpened) ? "-rotate-45 top-1" : "top-0.5", "bg-muted-50 absolute block h-0.5 w-full transition-all duration-300"])}"></span><span class="${ssrRenderClass([unref(isOpened) ? "opacity-0 translate-x-4" : "", "bg-muted-50 absolute top-1/2 block h-0.5 w-full transition-all duration-300"])}"></span><span class="${ssrRenderClass([unref(isOpened) ? "rotate-45 bottom-1.5" : "bottom-0", "bg-muted-50 absolute block h-0.5 w-full transition-all duration-300"])}"></span></span></button><div><!--[-->`);
      ssrRenderList(unref(tools), (tool, idx) => {
        _push(`<!--[-->`);
        if (tool.component) {
          _push(`<div class="${ssrRenderClass([unref(isOpened) ? toolOffsets[idx] : "translate-x-0 translate-y-0", "absolute right-[0.2em] top-[0.2em] z-20 flex items-center justify-center transition-all duration-300"])}">`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(tool.component)), tool.props, null), _parent);
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});

const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-collapse/components/TairoCollapseCircularMenu.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};

const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "TairoCollapseLayout",
  __ssrInlineRender: true,
  props: {
    collapse: { type: Boolean, default: true },
    toolbar: { type: Boolean, default: true },
    circularMenu: { type: Boolean, default: true },
    condensed: { type: Boolean },
    horizontalScroll: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const app = useAppConfig();
    const { isOpen, isMobileOpen, toggle } = useCollapse();
    const collapseEnabled = computed(() => {
      return app.tairo.collapse?.navigation?.enabled !== false && props.collapse !== false;
    });
    const toolbarEnabled = computed(() => {
      return app.tairo.collapse?.toolbar?.enabled !== false && props.toolbar !== false;
    });
    const circularMenuEnabled = computed(() => {
      return app.tairo.collapse?.circularMenu?.enabled !== false && props.circularMenu !== false;
    });
    const mainClass = computed(() => {
      if (props.condensed) {
        return "bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden";
      }
      if (!collapseEnabled.value) {
        return "bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10";
      }
      const list = [
        "bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10"
      ];
      if (isOpen.value) {
        list.push("lg:max-w-[calc(100%_-_280px)] lg:ms-[280px]");
      } else {
        list.push("lg:max-w-[calc(100%_-_80px)] lg:ms-[80px]");
      }
      if (props.horizontalScroll) {
        list.push("!pe-0 xl:!pe-0");
      }
      return list;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoCollapseNavigation = _sfc_main$m;
      const _component_TairoCollapseToolbar = _sfc_main$k;
      const _component_TairoPanels = _sfc_main$j;
      const _component_TairoCollapseCircularMenu = _sfc_main$i;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-muted-100 dark:bg-muted-900 pb-20" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "navigation", {}, () => {
        if (unref(collapseEnabled)) {
          _push(ssrRenderComponent(_component_TairoCollapseNavigation, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div role="button" class="${ssrRenderClass([
          unref(isMobileOpen) ? "opacity-50 dark:opacity-75" : "opacity-0 pointer-events-none",
          "bg-muted-800 dark:bg-muted-900 fixed start-0 top-0 z-[59] block h-full w-full transition-opacity duration-300 lg:hidden"
        ])}"></div>`);
      }, _push, _parent);
      _push(`<div class="${ssrRenderClass(unref(mainClass))}"><div class="${ssrRenderClass([
        props.condensed && !props.horizontalScroll && "w-full",
        !props.condensed && props.horizontalScroll && "mx-auto w-full",
        !props.condensed && !props.horizontalScroll && "mx-auto w-full max-w-7xl"
      ])}">`);
      ssrRenderSlot(_ctx.$slots, "toolbar", {}, () => {
        if (unref(toolbarEnabled)) {
          _push(ssrRenderComponent(_component_TairoCollapseToolbar, {
            collapse: props.collapse,
            "horizontal-scroll": props.horizontalScroll
          }, {
            title: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, "toolbar-title", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, "toolbar-title")
                ];
              }
            }),
            _: 3
          }, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_TairoPanels, null, null, _parent));
      if (unref(circularMenuEnabled)) {
        _push(ssrRenderComponent(_component_TairoCollapseCircularMenu, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});

const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-collapse/components/TairoCollapseLayout.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};

function useSidebar() {
  const app = useAppConfig();
  const route = useRoute();
  const sidebars = computed(() => {
    if (app.tairo.sidebar?.navigation?.enabled === false || app.tairo.sidebar?.navigation?.items?.length === 0) {
      return [];
    }
    return app.tairo.sidebar?.navigation?.items;
  });
  const currentName = useState("sidebar-name", () => "");
  const isOpen = useState("sidebar-open", () => void 0);
  const hasSubsidebar = computed(() => {
    return sidebars.value?.some((sidebar) => sidebar.subsidebar?.component);
  });
  const current = computed(() => {
    if (!currentName.value) {
      return void 0;
    }
    return sidebars.value?.find(({ title }) => title === currentName.value);
  });
  function toggle() {
    if (!currentName.value && !isOpen.value) {
      if (!sidebars.value?.[0]?.title) {
        return;
      }
      currentName.value = sidebars.value[0].title;
    }
    isOpen.value = !isOpen.value;
  }
  function close(unselect = false) {
    isOpen.value = false;
    if (unselect) {
      currentName.value = "";
    }
  }
  function open(name) {
    currentName.value = name;
    isOpen.value = true;
  }
  function detect() {
    if (!app.tairo.sidebar?.navigation?.startOpen) {
      isOpen.value = false;
      return;
    }
    const item = sidebars.value?.find(
      (bar) => bar?.activePath && route.fullPath.startsWith(bar.activePath)
    );
    if (item) {
      currentName.value = item.title;
      {
        isOpen.value = Boolean(currentName.value);
      }
    }
    return;
  }
  function setup() {
    {
      detect();
      return;
    }
  }
  return {
    sidebars,
    hasSubsidebar,
    current,
    currentName,
    isOpen,
    toggle,
    close,
    open,
    detect,
    setup
  };
}

const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "TairoSidebarNavigationItem",
  __ssrInlineRender: true,
  props: {
    sidebar: {}
  },
  setup(__props) {
    const props = __props;
    const { currentName, isOpen } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-16 w-full items-center justify-center" }, _attrs))}><span>${ssrInterpolate(props.sidebar.order)}</span>`);
      if (props.sidebar.component) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(props.sidebar.component)), props.sidebar.props, null), _parent);
      } else if (props.sidebar.to && props.sidebar.icon) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: props.sidebar.to,
          class: "text-muted-400 flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300",
          "data-nui-tooltip-position": "right",
          "data-nui-tooltip": props.sidebar.title
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, props.sidebar.icon, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, props.sidebar.icon, null, 16)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else if (props.sidebar.icon) {
        _push(`<button type="button" class="${ssrRenderClass([
          unref(currentName) === props.sidebar.title ? "bg-primary-100 text-primary-500 dark:bg-primary-500/10" : "text-muted-400",
          "flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300"
        ])}" data-nui-tooltip-position="right"${ssrRenderAttr("data-nui-tooltip", props.sidebar.title)}>`);
        _push(ssrRenderComponent(_component_Icon, props.sidebar.icon, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});

const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TairoSidebarNavigationItem.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};

const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "TairoSidebarNavigation",
  __ssrInlineRender: true,
  props: {
    subsidebar: { type: Boolean, default: true },
    expanded: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const { isOpen, current, sidebars } = useSidebar();
    const startSidebars = computed(
      () => sidebars.value?.filter(
        (sidebar) => !sidebar.position || sidebar.position === "start"
      )
    );
    const endSidebars = computed(
      () => sidebars.value?.filter((sidebar) => sidebar.position === "end")
    );
    const subsidebarEnabled = computed(() => {
      return Boolean(
        props.subsidebar !== false && current.value?.subsidebar?.component
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoSidebarNavigationItem = _sfc_main$g;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pointer-events-none fixed start-0 top-0 z-[60] flex h-full xl:z-10" }, _attrs))}><div class="${ssrRenderClass([
        unref(isOpen) ? "" : "-translate-x-full rtl:translate-x-full xl:translate-x-0 rtl:xl:-translate-x-0",
        "border-muted-200 dark:border-muted-700 dark:bg-muted-800 pointer-events-auto relative z-20 flex h-full w-[80px] flex-col border-r bg-white transition-all duration-300"
      ])}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<div>`);
      ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(`<!--[-->`);
      ssrRenderList(unref(startSidebars), (item) => {
        _push(ssrRenderComponent(_component_TairoSidebarNavigationItem, {
          key: item.title,
          sidebar: item
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="mt-auto"><!--[-->`);
      ssrRenderList(unref(endSidebars), (item) => {
        _push(ssrRenderComponent(_component_TairoSidebarNavigationItem, {
          key: item.title,
          sidebar: item
        }, null, _parent));
      });
      _push(`<!--]-->`);
      ssrRenderSlot(_ctx.$slots, "end", {}, null, _push, _parent);
      _push(`</div></div>`);
      if (unref(subsidebarEnabled)) {
        _push(`<div class="${ssrRenderClass([
          unref(isOpen) ? "" : "rtl:translate-x-[calc(100%_+_80px)] translate-x-[calc(-100%_-_80px)]",
          "border-muted-200 dark:border-muted-700 dark:bg-muted-800 pointer-events-auto relative z-10 h-full w-[220px] border-r bg-white transition-all duration-300"
        ])}">`);
        ssrRenderSlot(_ctx.$slots, "subnav", {}, () => {
          if (unref(current)?.subsidebar?.component) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(unref(current).subsidebar?.component)), {
              key: unref(current)?.subsidebar?.component
            }, null), _parent);
          } else {
            _push(`<!---->`);
          }
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});

const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TairoSidebarNavigation.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};

const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "TairoSidebarBurger",
  __ssrInlineRender: true,
  setup(__props) {
    const { isOpen, toggle } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: "flex h-10 w-10 items-center justify-center"
      }, _attrs))}><div class="${ssrRenderClass([unref(isOpen) ? "scale-90" : "", "relative h-5 w-5"])}"><span class="${ssrRenderClass([
        unref(isOpen) ? "-rotate-45 rtl:rotate-45 max-w-[75%] top-1" : "top-0.5",
        "bg-primary-500 absolute block h-0.5 w-full transition-all duration-300"
      ])}"></span><span class="${ssrRenderClass([unref(isOpen) ? "opacity-0 translate-x-4 rtl:-translate-x-4" : "", "bg-primary-500 absolute top-1/2 block h-0.5 w-full max-w-[50%] transition-all duration-300"])}"></span><span class="${ssrRenderClass([
        unref(isOpen) ? "rotate-45 rtl:-rotate-45 max-w-[75%] bottom-1" : "bottom-0",
        "bg-primary-500 absolute block h-0.5 w-full transition-all duration-300"
      ])}"></span></div></button>`);
    };
  }
});

const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TairoSidebarBurger.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};

const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "TairoSidebarTools",
  __ssrInlineRender: true,
  setup(__props) {
    const app = useAppConfig();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-2" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(app).tairo.sidebar?.toolbar?.tools, (tool) => {
        _push(`<!--[-->`);
        if (tool.component) {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(tool.component)), mergeProps({
            key: tool.component
          }, tool.props), null), _parent);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
    };
  }
});

const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TairoSidebarTools.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};

const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "TairoSidebarToolbar",
  __ssrInlineRender: true,
  props: {
    sidebar: { type: Boolean, default: true },
    horizontalScroll: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const app = useAppConfig();
    const { hasSubsidebar } = useSidebar();
    const route = useRoute();
    const showNavBurger = computed(() => {
      return props.sidebar && app.tairo.sidebar?.toolbar?.showNavBurger && hasSubsidebar.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoSidebarBurger = _sfc_main$e;
      const _component_BaseHeading = _sfc_main$p;
      const _component_TairoSidebarTools = _sfc_main$d;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["relative z-50 mb-5 flex h-16 items-center gap-2", props.horizontalScroll && "pe-4 xl:pe-10"]
      }, _attrs))}>`);
      if (unref(showNavBurger)) {
        _push(ssrRenderComponent(_component_TairoSidebarBurger, { class: "-ms-3" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(app).tairo.sidebar?.toolbar?.showTitle) {
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h1",
          size: "2xl",
          weight: "light",
          class: "text-muted-800 hidden dark:text-white md:block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                _push2(`${ssrInterpolate(unref(route).meta.title)}`);
              }, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "title", {}, () => [
                  createTextVNode(toDisplayString(unref(route).meta.title), 1)
                ])
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="ms-auto"></div>`);
      _push(ssrRenderComponent(_component_TairoSidebarTools, { class: "h-16" }, null, _parent));
      _push(`</div>`);
    };
  }
});

const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TairoSidebarToolbar.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};

const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "TairoSidebarCircularMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { y } = useNinjaWindowScroll();
    const app = useAppConfig();
    const isOpened = ref(false);
    const isScrolled = computed(() => {
      if (y.value < 60) {
        isOpened.value = false;
      }
      return y.value > 60;
    });
    const toolOffsets = [
      "translate-x-[-6.5em] rtl:translate-x-[6.5em] translate-y-[-0.25em]",
      "translate-x-[-5.75em] rtl:translate-x-[5.75em] translate-y-[3em]",
      "translate-x-[-3.15em] rtl:translate-x-[3.15em] translate-y-[5.5em]",
      "translate-x-[0em] translate-y-[6.5em]"
    ];
    const tools = computed(() => {
      return app.tairo?.sidebar?.circularMenu?.tools?.slice(0, 4) || [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["after:bg-primary-600 after:shadow-primary-500/50 dark:after:shadow-muted-800/10 fixed end-[1em] top-[0.6em] z-[90] transition-transform duration-300 after:absolute after:end-0 after:top-0 after:block after:h-12 after:w-12 after:rounded-full after:shadow-lg after:transition-transform after:duration-300 after:content-['']", [
          unref(isOpened) ? "after:ease-[cubic-bezier(0.68, 1.55, 0.265, 1)] after:scale-[5.5]" : "",
          unref(isScrolled) ? "" : "-translate-y-24"
        ]]
      }, _attrs))}><button type="button" class="bg-primary-500 shadow-primary-500/50 dark:shadow-muted-800/10 relative z-30 flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg"><span class="${ssrRenderClass([unref(isOpened) ? "scale-90 top-0" : "-top-0.5", "relative block h-3 w-3 transition-all duration-300"])}"><span class="${ssrRenderClass([unref(isOpened) ? "-rotate-45 top-1" : "top-0.5", "bg-muted-50 absolute block h-0.5 w-full transition-all duration-300"])}"></span><span class="${ssrRenderClass([unref(isOpened) ? "opacity-0 translate-x-4" : "", "bg-muted-50 absolute top-1/2 block h-0.5 w-full transition-all duration-300"])}"></span><span class="${ssrRenderClass([unref(isOpened) ? "rotate-45 bottom-1.5" : "bottom-0", "bg-muted-50 absolute block h-0.5 w-full transition-all duration-300"])}"></span></span></button><div><!--[-->`);
      ssrRenderList(unref(tools), (tool, idx) => {
        _push(`<!--[-->`);
        if (tool.component) {
          _push(`<div class="${ssrRenderClass([unref(isOpened) ? toolOffsets[idx] : "translate-x-0 translate-y-0", "absolute end-[0.2em] top-[0.2em] z-20 flex items-center justify-center transition-all duration-300"])}">`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(tool.component)), tool.props, null), _parent);
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});

const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TairoSidebarCircularMenu.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};

const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "TairoSidebarLayout",
  __ssrInlineRender: true,
  props: {
    sidebar: { type: Boolean, default: true },
    subsidebar: { type: Boolean, default: true },
    toolbar: { type: Boolean, default: true },
    circularMenu: { type: Boolean, default: true },
    condensed: { type: Boolean },
    horizontalScroll: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const app = useAppConfig();
    const { setup, currentName, isOpen, toggle } = useSidebar();
    setup();
    onUnmounted(() => {
      currentName.value = "";
      isOpen.value = void 0;
    });
    const sidebarEnabled = computed(() => {
      return app.tairo.sidebar?.navigation?.enabled !== false && props.sidebar !== false;
    });
    const toolbarEnabled = computed(() => {
      return app.tairo.sidebar?.toolbar?.enabled !== false && props.toolbar !== false;
    });
    const circularMenuEnabled = computed(() => {
      return app.tairo.sidebar?.circularMenu?.enabled !== false && props.circularMenu !== false;
    });
    const wrapperClass = computed(() => {
      if (props.condensed) {
        return "bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden";
      }
      if (!sidebarEnabled.value) {
        return "bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10";
      }
      const list = [
        "bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10"
      ];
      if (isOpen.value) {
        list.push("xl:max-w-[calc(100%_-_300px)] xl:ms-[300px]");
      } else {
        list.push("xl:max-w-[calc(100%_-_80px)] xl:ms-[80px]");
      }
      if (props.horizontalScroll) {
        list.push("!pe-0 xl:!pe-0");
      }
      return list;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoSidebarNavigation = _sfc_main$f;
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_TairoSidebarToolbar = _sfc_main$c;
      const _component_TairoPanels = _sfc_main$j;
      const _component_TairoSidebarCircularMenu = _sfc_main$b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-muted-100 dark:bg-muted-900 pb-20" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "sidebar", {}, () => {
        if (unref(sidebarEnabled)) {
          _push(ssrRenderComponent(_component_TairoSidebarNavigation, {
            subsidebar: props.subsidebar
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (unref(app).tairo.sidebar?.navigation?.logo?.component) {
                  _push2(`<div class="flex h-16 w-full items-center justify-center"${_scopeId}>`);
                  ssrRenderSlot(_ctx.$slots, "logo", {}, () => {
                    _push2(ssrRenderComponent(_component_NuxtLink, {
                      to: "/",
                      class: "flex items-center justify-center"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(
                            ("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(
                              unref(app).tairo.sidebar?.navigation.logo.component
                            )
                          ), unref(app).tairo.sidebar?.navigation.logo.props, null), _parent3, _scopeId2);
                        } else {
                          return [
                            (openBlock(), createBlock(resolveDynamicComponent(
                              ("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(
                                unref(app).tairo.sidebar?.navigation.logo.component
                              )
                            ), unref(app).tairo.sidebar?.navigation.logo.props, null, 16))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent2, _scopeId));
                  }, _push2, _parent2, _scopeId);
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  unref(app).tairo.sidebar?.navigation?.logo?.component ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex h-16 w-full items-center justify-center"
                  }, [
                    renderSlot(_ctx.$slots, "logo", {}, () => [
                      createVNode(_component_NuxtLink, {
                        to: "/",
                        class: "flex items-center justify-center"
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(resolveDynamicComponent(
                            ("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(
                              unref(app).tairo.sidebar?.navigation.logo.component
                            )
                          ), unref(app).tairo.sidebar?.navigation.logo.props, null, 16))
                        ]),
                        _: 1
                      })
                    ])
                  ])) : createCommentVNode("", true)
                ];
              }
            }),
            _: 3
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div role="button" class="${ssrRenderClass([
          unref(isOpen) ? "opacity-50 dark:opacity-75" : "opacity-0 pointer-events-none",
          "bg-muted-800 dark:bg-muted-900 fixed start-0 top-0 z-[59] block h-full w-full transition-opacity duration-300 lg:hidden"
        ])}"></div>`);
      }, _push, _parent);
      _push(`<div class="${ssrRenderClass(unref(wrapperClass))}"><div class="${ssrRenderClass([
        props.condensed && !props.horizontalScroll && "w-full",
        !props.condensed && props.horizontalScroll && "mx-auto w-full",
        !props.condensed && !props.horizontalScroll && "mx-auto w-full max-w-7xl"
      ])}">`);
      ssrRenderSlot(_ctx.$slots, "toolbar", {}, () => {
        if (unref(toolbarEnabled)) {
          _push(ssrRenderComponent(_component_TairoSidebarToolbar, {
            sidebar: props.sidebar,
            "horizontal-scroll": props.horizontalScroll
          }, {
            title: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, "toolbar-title", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, "toolbar-title")
                ];
              }
            }),
            _: 3
          }, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`<main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div></div>`);
      _push(ssrRenderComponent(_component_TairoPanels, null, null, _parent));
      if (unref(circularMenuEnabled)) {
        _push(ssrRenderComponent(_component_TairoSidebarCircularMenu, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});

const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TairoSidebarLayout.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};

function useTopnav() {
  const route = useRoute();
  const app = useAppConfig();
  const menuItems = computed(() => {
    if (app.tairo.topnav?.navigation?.enabled === false || app.tairo.topnav?.navigation?.items?.length === 0) {
      return [];
    }
    return app.tairo.topnav?.navigation?.items?.map(
      (navigation) => ({
        ...navigation
      })
    );
  });
  const isMobileOpen = useState("collapse-open", () => false);
  const activeMenuItem = computed(() => {
    return menuItems.value?.find((item) => {
      if (item.activePath) {
        return route.path.startsWith(item.activePath);
      }
      if (item.to) {
        return route.path.startsWith(item.to.toString());
      }
      return false;
    });
  });
  const selectedMenuItem = useState(
    "topnav-selected-menu-item",
    () => activeMenuItem.value
  );
  watch(activeMenuItem, (item) => {
    selectedMenuItem.value = item;
  });
  return {
    menuItems,
    activeMenuItem,
    selectedMenuItem,
    isMobileOpen
  };
}

const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "TairoTopnavNavigation",
  __ssrInlineRender: true,
  props: {
    display: { default: "expanded-md" },
    position: { default: "absolute" }
  },
  setup(__props) {
    const props = __props;
    const { menuItems, isMobileOpen } = useTopnav();
    useAppConfig();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButtonClose = _sfc_main$F;
      const _component_BaseButton = _sfc_main$x;
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_BaseText = _sfc_main$D;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["dark:bg-muted-800 border-muted-200 dark:border-muted-700 left-0 top-0 z-40 w-full border-b bg-white transition-all duration-300", [
          props.position === "fixed" && "fixed",
          props.position === "absolute" && "absolute"
        ]]
      }, _attrs))}><nav class="${ssrRenderClass([[
        props.display === "condensed" && "w-full",
        props.display === "horizontal-scroll" && "mx-auto w-full pe-4",
        props.display === "expanded-sm" && "mx-auto w-full max-w-5xl px-4 lg:px-0",
        props.display === "expanded-md" && "mx-auto w-full max-w-6xl px-4 lg:px-0",
        props.display === "expanded-lg" && "mx-auto w-full max-w-7xl px-4 lg:px-0",
        props.display === "expanded-xl" && "mx-auto w-full px-4 lg:px-0"
      ], "relative"])}"><div class="flex w-full flex-col items-center justify-between md:h-16 md:flex-row"><div class="w-full grow md:w-auto">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><div class="${ssrRenderClass([unref(isMobileOpen) ? "flex" : "hidden", "dark:bg-muted-800 fixed start-0 top-0 z-20 w-full grow items-center bg-white p-3 md:static md:z-0 md:block md:w-auto md:bg-transparent md:p-0"])}"><div class="me-auto block md:hidden">`);
      _push(ssrRenderComponent(_component_BaseButtonClose, {
        color: "muted",
        shape: "full",
        onClick: ($event) => isMobileOpen.value = false
      }, null, _parent));
      _push(`</div>`);
      ssrRenderSlot(_ctx.$slots, "toolbar", {}, () => {
        _push(ssrRenderComponent(_component_BaseButton, {
          to: "#",
          color: "primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Get Started`);
            } else {
              return [
                createTextVNode("Get Started")
              ];
            }
          }),
          _: 1
        }, _parent));
      }, _push, _parent);
      _push(`</div></div></nav><div class="${ssrRenderClass([[
        props.display === "condensed" && "w-full",
        props.display === "horizontal-scroll" && "mx-auto w-full overflow-x-auto",
        props.display === "expanded-sm" && "mx-auto w-full max-w-5xl",
        props.display === "expanded-md" && "mx-auto w-full max-w-6xl",
        props.display === "expanded-lg" && "mx-auto w-full max-w-7xl",
        props.display === "expanded-xl" && "mx-auto w-full"
      ], "flex items-center"])}"><div class="flex overflow-x-auto lg:overflow-x-hidden"><!--[-->`);
      ssrRenderList(unref(menuItems), (item, index) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: index,
          to: item.to,
          class: "text-muted-400 hover:text-muted-500 dark:text-muted-500 dark:hover:text-muted-400 flex items-center justify-center border-b-2 border-transparent p-3 text-center transition-colors duration-300",
          "exact-active-class": "!border-primary-500 !text-muted-800 dark:!text-muted-100"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseText, { size: "sm" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseText, { size: "sm" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.name), 1)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});

const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-topnav/components/TairoTopnavNavigation.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};

const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "TairoTopnavCircularMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { y } = useNinjaWindowScroll();
    const app = useAppConfig();
    const isOpened = ref(false);
    const isScrolled = computed(() => {
      if (y.value < 60) {
        isOpened.value = false;
      }
      return y.value > 60;
    });
    const toolOffsets = [
      "translate-x-[-6.5em] rtl:translate-x-[6.5em] translate-y-[-0.25em]",
      "translate-x-[-5.75em] rtl:translate-x-[5.75em] translate-y-[3em]",
      "translate-x-[-3.15em] rtl:translate-x-[3.15em] translate-y-[5.5em]",
      "translate-x-[0em] translate-y-[6.5em]"
    ];
    const tools = computed(() => {
      return app.tairo.collapse?.circularMenu?.tools?.slice(0, 4) || [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["after:bg-primary-600 after:shadow-primary-500/50 dark:after:shadow-muted-800/10 fixed bottom-[0.6em] end-[1em] z-[90] rotate-90 transition-transform duration-300 after:absolute after:end-0 after:top-0 after:block after:h-12 after:w-12 after:rounded-full after:shadow-lg after:transition-transform after:duration-300 after:content-['']", [
          unref(isOpened) ? "after:ease-[cubic-bezier(0.68, 1.55, 0.265, 1)] after:scale-[5.5]" : "",
          unref(isScrolled) ? "" : "translate-y-24"
        ]]
      }, _attrs))}><button type="button" class="bg-primary-500 shadow-primary-500/50 dark:shadow-muted-800/10 relative z-30 flex h-12 w-12 -rotate-90 items-center justify-center rounded-full text-white shadow-lg"><span class="${ssrRenderClass([unref(isOpened) ? "scale-90 top-0" : "-top-0.5", "relative block h-3 w-3 transition-all duration-300"])}"><span class="${ssrRenderClass([unref(isOpened) ? "-rotate-45 top-1" : "top-0.5", "bg-muted-50 absolute block h-0.5 w-full transition-all duration-300"])}"></span><span class="${ssrRenderClass([unref(isOpened) ? "opacity-0 translate-x-4" : "", "bg-muted-50 absolute top-1/2 block h-0.5 w-full transition-all duration-300"])}"></span><span class="${ssrRenderClass([unref(isOpened) ? "rotate-45 bottom-1.5" : "bottom-0", "bg-muted-50 absolute block h-0.5 w-full transition-all duration-300"])}"></span></span></button><div><!--[-->`);
      ssrRenderList(unref(tools), (tool, idx) => {
        _push(`<!--[-->`);
        if (tool.component) {
          _push(`<div class="${ssrRenderClass([unref(isOpened) ? toolOffsets[idx] : "translate-x-0 translate-y-0", "absolute end-[0.2em] top-[0.2em] z-20 flex -rotate-90 items-center justify-center transition-all duration-300"])}">`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(tool.component)), tool.props, null), _parent);
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});

const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-topnav/components/TairoTopnavCircularMenu.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};

const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "TairoTopnavFooter",
  __ssrInlineRender: true,
  props: {
    display: { default: "expanded-lg" }
  },
  setup(__props) {
    const props = __props;
    const config = useAppConfig().tairo.topnav?.footer;
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$5;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "dark:bg-muted-900 border-muted-200 dark:border-muted-700 bg-muted-50 relative border-t" }, _attrs))}>`);
      if (unref(config)?.logoSeparator?.component) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          "aria-label": "Go to Homepage",
          class: "dark:bg-muted-900 bg-muted-50 absolute inset-x-0 -top-4 mx-auto flex h-9 w-14 items-center justify-center"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(
                ("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(
                  unref(config).logoSeparator.component
                )
              ), unref(config).logoSeparator.props, null), _parent2, _scopeId);
            } else {
              return [
                (openBlock(), createBlock(resolveDynamicComponent(
                  ("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(
                    unref(config).logoSeparator.component
                  )
                ), unref(config).logoSeparator.props, null, 16))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([[
        props.display === "expanded-sm" && "mx-auto w-full max-w-5xl",
        props.display === "expanded-md" && "mx-auto w-full max-w-6xl",
        props.display === "expanded-lg" && "mx-auto w-full max-w-7xl",
        props.display === "expanded-xl" && "mx-auto w-full"
      ], "ltablet:flex-row mx-auto flex flex-col items-center justify-between px-6 py-8 lg:flex-row"])}">`);
      if (unref(config)?.logo?.component) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          "aria-label": "Go to Homepage",
          class: "ltablet:w-1/5 block w-full lg:w-1/5"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(
                ("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(
                  unref(config).logo.component
                )
              ), unref(config).logo.props, null), _parent2, _scopeId);
            } else {
              return [
                (openBlock(), createBlock(resolveDynamicComponent(
                  ("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(
                    unref(config).logo.component
                  )
                ), unref(config).logo.props, null, 16))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<div class="ltablet:w-1/5 block w-full lg:w-1/5"></div>`);
      }
      _push(`<div class="ltablet:mt-0 ltablet:gap-6 mt-6 flex flex-wrap items-center justify-center gap-4 lg:mt-0 lg:gap-6"><!--[-->`);
      ssrRenderList(unref(config)?.links, (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.to,
          to: link.to,
          rel: link.rel,
          target: link.target,
          class: "text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors duration-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="text-muted-500 dark:text-muted-400 ltablet:w-1/5 ltablet:justify-end ltablet:mt-0 mt-6 flex w-full items-center justify-center text-sm lg:mt-0 lg:w-1/5 lg:justify-end">`);
      if (unref(config)?.copyright?.name && unref(config)?.copyright?.to) {
        _push(`<span class="inline-flex gap-1"><span>©</span>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(config).copyright.to,
          target: "_blank",
          rel: "noopener",
          class: "text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors duration-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(config).copyright.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(config).copyright.name), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        if (unref(config)?.copyright?.since) {
          _push(`<span>${ssrInterpolate(unref(config).copyright.since)}-${ssrInterpolate(unref(year))}.</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></footer>`);
    };
  }
});

const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-topnav/components/TairoTopnavFooter.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "TairoTopnavLayout",
  __ssrInlineRender: true,
  props: {
    topnav: { type: Boolean, default: true },
    toolbar: { type: Boolean, default: true },
    circularMenu: { type: Boolean, default: true },
    display: { default: "expanded-lg" }
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const config = useAppConfig().tairo.topnav;
    const { isMobileOpen } = useTopnav();
    const topnavEnabled = computed(() => {
      return config?.navigation?.enabled !== false && props.topnav !== false;
    });
    const toolbarEnabled = computed(() => {
      return config?.toolbar?.enabled !== false && props.toolbar !== false;
    });
    const circularMenuEnabled = computed(() => {
      return config?.circularMenu?.enabled !== false && props.circularMenu !== false;
    });
    const mainClass = computed(() => {
      if (props.display === "condensed") {
        return "bg-muted-50 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden";
      }
      if (!topnavEnabled.value) {
        return "bg-muted-50 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10";
      }
      const list = [
        "bg-muted-50 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10"
      ];
      if (props.display === "horizontal-scroll") {
        list.push("!pe-0 xl:!pe-0");
      }
      return list;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoTopnavNavigation = _sfc_main$9;
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_BaseHeading = _sfc_main$p;
      const _component_Icon = __nuxt_component_2;
      const _component_TairoPanels = _sfc_main$j;
      const _component_TairoTopnavCircularMenu = _sfc_main$8;
      const _component_TairoTopnavFooter = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="dark:bg-muted-900 bg-muted-50 pb-20">`);
      ssrRenderSlot(_ctx.$slots, "navigation", {}, () => {
        if (unref(topnavEnabled)) {
          _push(ssrRenderComponent(_component_TairoTopnavNavigation, {
            display: props.display,
            position: "fixed"
          }, {
            toolbar: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (unref(toolbarEnabled)) {
                  _push2(`<div${_scopeId}><div class="flex items-center justify-end gap-4 md:gap-2"${_scopeId}><!--[-->`);
                  ssrRenderList(unref(config)?.toolbar?.tools, (tool) => {
                    _push2(`<!--[-->`);
                    if (tool.component) {
                      ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(tool.component)), mergeProps({
                        key: tool.component
                      }, tool.props), null), _parent2, _scopeId);
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`<!--]-->`);
                  });
                  _push2(`<!--]--></div></div>`);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  unref(toolbarEnabled) ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode("div", { class: "flex items-center justify-end gap-4 md:gap-2" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(config)?.toolbar?.tools, (tool) => {
                        return openBlock(), createBlock(Fragment, null, [
                          tool.component ? (openBlock(), createBlock(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(tool.component)), mergeProps({
                            key: tool.component
                          }, tool.props), null, 16)) : createCommentVNode("", true)
                        ], 64);
                      }), 256))
                    ])
                  ])) : createCommentVNode("", true)
                ];
              }
            }),
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (unref(config)?.navigation?.logo?.component) {
                  _push2(`<div class="flex h-16 w-full items-center gap-x-4"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_NuxtLink, {
                    to: "/",
                    class: "flex items-center justify-center"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(
                          ("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(
                            unref(config)?.navigation.logo.component
                          )
                        ), unref(config)?.navigation.logo.props, null), _parent3, _scopeId2);
                      } else {
                        return [
                          (openBlock(), createBlock(resolveDynamicComponent(
                            ("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(
                              unref(config)?.navigation.logo.component
                            )
                          ), unref(config)?.navigation.logo.props, null, 16))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                  if (unref(config)?.toolbar?.showTitle) {
                    _push2(ssrRenderComponent(_component_BaseHeading, {
                      as: "h1",
                      size: "lg",
                      weight: "light",
                      class: "text-muted-800 hidden dark:text-white md:block"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                            _push3(`${ssrInterpolate(unref(route).meta.title)}`);
                          }, _push3, _parent3, _scopeId2);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "title", {}, () => [
                              createTextVNode(toDisplayString(unref(route).meta.title), 1)
                            ])
                          ];
                        }
                      }),
                      _: 3
                    }, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  if (unref(config)?.navigation?.header?.component) {
                    ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(
                      ("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(
                        unref(config)?.navigation?.header?.component
                      )
                    ), unref(config)?.navigation?.header?.props, null), _parent2, _scopeId);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`<div class="flex items-center justify-center md:hidden"${_scopeId}><button type="button"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_Icon, {
                    name: "lucide:menu",
                    class: "text-muted-400 h-6 w-6"
                  }, null, _parent2, _scopeId));
                  _push2(`</button></div></div>`);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  unref(config)?.navigation?.logo?.component ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex h-16 w-full items-center gap-x-4"
                  }, [
                    createVNode(_component_NuxtLink, {
                      to: "/",
                      class: "flex items-center justify-center"
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(
                          ("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(
                            unref(config)?.navigation.logo.component
                          )
                        ), unref(config)?.navigation.logo.props, null, 16))
                      ]),
                      _: 1
                    }),
                    unref(config)?.toolbar?.showTitle ? (openBlock(), createBlock(_component_BaseHeading, {
                      key: 0,
                      as: "h1",
                      size: "lg",
                      weight: "light",
                      class: "text-muted-800 hidden dark:text-white md:block"
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "title", {}, () => [
                          createTextVNode(toDisplayString(unref(route).meta.title), 1)
                        ])
                      ]),
                      _: 3
                    })) : createCommentVNode("", true),
                    unref(config)?.navigation?.header?.component ? (openBlock(), createBlock(resolveDynamicComponent(
                      ("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(
                        unref(config)?.navigation?.header?.component
                      )
                    ), mergeProps({ key: 1 }, unref(config)?.navigation?.header?.props), null, 16)) : createCommentVNode("", true),
                    createVNode("div", { class: "flex items-center justify-center md:hidden" }, [
                      createVNode("button", {
                        type: "button",
                        onClick: ($event) => isMobileOpen.value = true
                      }, [
                        createVNode(_component_Icon, {
                          name: "lucide:menu",
                          class: "text-muted-400 h-6 w-6"
                        })
                      ], 8, ["onClick"])
                    ])
                  ])) : createCommentVNode("", true)
                ];
              }
            }),
            _: 3
          }, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`<div class="${ssrRenderClass(unref(mainClass))}"><div class="${ssrRenderClass([[
        props.display === "condensed" && "w-full",
        props.display === "horizontal-scroll" && "mx-auto w-full overflow-x-auto",
        props.display === "expanded-sm" && "mx-auto w-full max-w-5xl",
        props.display === "expanded-md" && "mx-auto w-full max-w-6xl",
        props.display === "expanded-lg" && "mx-auto w-full max-w-7xl",
        props.display === "expanded-xl" && "mx-auto w-full"
      ], "pt-40 md:pt-36"])}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_TairoPanels, null, null, _parent));
      if (unref(circularMenuEnabled)) {
        _push(ssrRenderComponent(_component_TairoTopnavCircularMenu, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(config)?.footer?.enabled) {
        _push(ssrRenderComponent(_component_TairoTopnavFooter, {
          display: props.display
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});

const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-topnav/components/TairoTopnavLayout.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};

function useLayoutSwitcher() {
  const layouts = [
    {
      name: "sidebar",
      label: "Sidebar",
      component: _sfc_main$a
    },
    {
      name: "collapse",
      label: "Collapse",
      component: _sfc_main$h
    },
    {
      name: "topnav",
      label: "Top navigation",
      component: _sfc_main$6
    }
  ];
  const activeLayoutName = useState("layout-switcher-active", () => "sidebar");
  const activeLayout = computed(() => {
    return layouts.find((layout) => layout.name === activeLayoutName.value);
  });
  const activeLayoutComponent = computed(() => {
    return activeLayout.value?.component || _sfc_main$a;
  });
  return {
    layouts,
    activeLayout,
    activeLayoutName,
    activeLayoutComponent
  };
}

const EMPTY_COLOR = "0 0 0";
const colorToRgb = (color) => {
  if (!color) {
    return EMPTY_COLOR;
  }
  return chroma(color).rgb().map((v) => {
    if (Number.isNaN(v)) {
      return 0;
    }
    return Math.round(v);
  }).slice(0, 3).join(" ");
};
function switchColorShades(name, shades2) {
  Object.entries(shades2).forEach(([shade, color]) => {
    switchColor(name, shade, color);
  });
}
function switchColor(name, shade, color) {
  const rgb = colorToRgb(color);
  window.document.documentElement.style.setProperty(
    `--color-${name}-${shade}`,
    rgb
  );
}

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DemoAppLayoutSwitcher",
  __ssrInlineRender: true,
  setup(__props) {
    const { layouts, activeLayoutName } = useLayoutSwitcher();
    const route = useRoute();
    const isSwitcherOpen = useState("switcher-open", () => false);
    const currentPrimary = ref("violet");
    const currentMuted = ref("slate");
    watch([currentPrimary, currentMuted], closeModal);
    const canChangeLayout = computed(
      () => !route.meta.layout || route.meta.layout === "default"
    );
    const primaryPresets = [
      {
        name: "indigo",
        label: "Indigo",
        shades: colors.indigo,
        class: "bg-indigo-500"
      },
      {
        name: "sky",
        label: "Sky",
        shades: colors.sky,
        class: "bg-sky-500"
      },
      {
        name: "purple",
        label: "Purple",
        shades: colors.purple,
        class: "bg-purple-500"
      },
      {
        name: "violet",
        label: "Violet",
        shades: colors.violet,
        class: "bg-violet-500"
      },
      {
        name: "lime",
        label: "Lime",
        shades: colors.lime,
        class: "bg-lime-500"
      },
      {
        name: "teal",
        label: "Teal",
        shades: colors.teal,
        class: "bg-teal-500"
      },
      {
        name: "emerald",
        label: "Emerald",
        shades: colors.emerald,
        class: "bg-emerald-500"
      },
      {
        name: "rose",
        label: "Rose",
        shades: colors.rose,
        class: "bg-rose-500"
      },
      {
        name: "pink",
        label: "Pink",
        shades: colors.pink,
        class: "bg-pink-500"
      },
      {
        name: "yellow",
        label: "Yellow",
        shades: colors.yellow,
        class: "bg-yellow-500"
      },
      {
        name: "orange",
        label: "Orange",
        shades: colors.orange,
        class: "bg-orange-500"
      },
      {
        name: "mauve",
        label: "Custom",
        shades: {
          50: "#EEECF9",
          100: "#DCD8F3",
          200: "#B6AEE5",
          300: "#9488D8",
          400: "#6E5DCB",
          500: "#4E3CB9",
          600: "#3E2F92",
          700: "#302470",
          800: "#1F1849",
          900: "#100C27",
          950: "#080613"
        },
        class: "bg-mauve-500"
      }
    ];
    const mutedPresets = [
      {
        name: "gray",
        label: "Gray",
        shades: colors.gray,
        class: "bg-gray-300 dark:bg-gray-900"
      },
      {
        name: "slate",
        label: "Slate",
        shades: colors.slate,
        class: "bg-slate-300 dark:bg-slate-900"
      },
      {
        name: "stone",
        label: "Stone",
        shades: colors.stone,
        class: "bg-stone-300 dark:bg-stone-900"
      },
      {
        name: "zinc",
        label: "Zinc",
        shades: colors.zinc,
        class: "bg-zinc-300 dark:bg-zinc-900"
      },
      {
        name: "neutral",
        label: "Neutral",
        shades: colors.neutral,
        class: "bg-neutral-300 dark:bg-neutral-900"
      }
    ];
    function closeModal() {
      isSwitcherOpen.value = false;
    }
    function switchLayout(layout) {
      activeLayoutName.value = layout;
      closeModal();
    }
    function switchPrimary(color) {
      currentPrimary.value = color.name;
      switchColorShades("primary", color.shades);
    }
    function switchMuted(color) {
      currentMuted.value = color.name;
      switchColorShades("muted", color.shades);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoModal = _sfc_main$u;
      const _component_BaseButtonClose = _sfc_main$F;
      const _component_BaseHeading = _sfc_main$p;
      const _component_BaseParagraph = _sfc_main$o;
      const _component_BaseCard = _sfc_main$C;
      const _component_BaseText = _sfc_main$D;
      const _component_Icon = __nuxt_component_2;
      _push(ssrRenderComponent(_component_TairoModal, mergeProps({
        open: unref(isSwitcherOpen),
        size: unref(canChangeLayout) ? "2xl" : "sm",
        onClose: ($event) => isSwitcherOpen.value = false
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex w-full items-center justify-between p-4 md:p-6"${_scopeId}><h3 class="font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white"${_scopeId}> Theme configuration </h3>`);
            _push2(ssrRenderComponent(_component_BaseButtonClose, { onClick: closeModal }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex w-full items-center justify-between p-4 md:p-6" }, [
                createVNode("h3", { class: "font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white" }, " Theme configuration "),
                createVNode(_component_BaseButtonClose, { onClick: closeModal })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-4 pb-4 md:px-6 md:pb-6 max-h-[550px] overflow-y-auto nui-slimscroll"${_scopeId}><div class="grid grid-cols-12 gap-6"${_scopeId}>`);
            if (unref(canChangeLayout)) {
              _push2(`<div class="col-span-12 sm:col-span-7 flex flex-col gap-4"${_scopeId}><div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "sm",
                weight: "medium",
                class: "text-muted-900 dark:text-white"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Layout selection `);
                  } else {
                    return [
                      createTextVNode(" Layout selection ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "sm",
                class: "text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Select the layout you want to use for your application `);
                  } else {
                    return [
                      createTextVNode(" Select the layout you want to use for your application ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-muted-100 dark:bg-muted-700/40 rounded-xl"${_scopeId}><!--[-->`);
              ssrRenderList(unref(layouts), (layout) => {
                _push2(ssrRenderComponent(_component_BaseCard, {
                  key: layout.name,
                  role: "button",
                  shape: "curved",
                  class: ["p-2", unref(activeLayoutName) === layout.name && "!border-primary-500"],
                  onClick: ($event) => switchLayout(layout.name)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="bg-muted-50 dark:bg-muted-700/70 flex items-center justify-center rounded-lg py-6 sm:py-3"${_scopeId2}><img${ssrRenderAttr("src", `/img/illustrations/switcher/layout-${layout.name}-default.svg`)} class="${ssrRenderClass([
                        unref(activeLayoutName) === layout.name ? "opacity-100" : "opacity-60",
                        "block dark:hidden max-w-[110px] mx-auto transition-opacity duration-200"
                      ])}"${ssrRenderAttr("alt", `${layout.name} layout`)}${_scopeId2}><img${ssrRenderAttr("src", `/img/illustrations/switcher/layout-${layout.name}-default-dark.svg`)} class="${ssrRenderClass([
                        unref(activeLayoutName) === layout.name ? "opacity-100" : "opacity-60",
                        "hidden dark:block max-w-[110px] mx-auto transition-opacity duration-200"
                      ])}"${ssrRenderAttr("alt", `${layout.name} layout`)}${_scopeId2}></div><div class="flex items-center justify-between py-2"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseText, {
                        size: "xs",
                        class: [
                          "capitalize",
                          unref(activeLayoutName) === layout.name ? "text-muted-600 dark:text-muted-100" : "text-muted-400 dark:text-muted-500"
                        ]
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(layout.name)} Layout `);
                          } else {
                            return [
                              createTextVNode(toDisplayString(layout.name) + " Layout ", 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "ph:check-circle-duotone",
                        class: [
                          "w-5 h-5 text-success-500 transition-opacity duration-200",
                          unref(activeLayoutName) === layout.name ? "opacity-100" : "opacity-0"
                        ]
                      }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "bg-muted-50 dark:bg-muted-700/70 flex items-center justify-center rounded-lg py-6 sm:py-3" }, [
                          createVNode("img", {
                            src: `/img/illustrations/switcher/layout-${layout.name}-default.svg`,
                            class: [
                              "block dark:hidden max-w-[110px] mx-auto transition-opacity duration-200",
                              unref(activeLayoutName) === layout.name ? "opacity-100" : "opacity-60"
                            ],
                            alt: `${layout.name} layout`
                          }, null, 10, ["src", "alt"]),
                          createVNode("img", {
                            src: `/img/illustrations/switcher/layout-${layout.name}-default-dark.svg`,
                            class: [
                              "hidden dark:block max-w-[110px] mx-auto transition-opacity duration-200",
                              unref(activeLayoutName) === layout.name ? "opacity-100" : "opacity-60"
                            ],
                            alt: `${layout.name} layout`
                          }, null, 10, ["src", "alt"])
                        ]),
                        createVNode("div", { class: "flex items-center justify-between py-2" }, [
                          createVNode(_component_BaseText, {
                            size: "xs",
                            class: [
                              "capitalize",
                              unref(activeLayoutName) === layout.name ? "text-muted-600 dark:text-muted-100" : "text-muted-400 dark:text-muted-500"
                            ]
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(layout.name) + " Layout ", 1)
                            ]),
                            _: 2
                          }, 1032, ["class"]),
                          createVNode(_component_Icon, {
                            name: "ph:check-circle-duotone",
                            class: [
                              "w-5 h-5 text-success-500 transition-opacity duration-200",
                              unref(activeLayoutName) === layout.name ? "opacity-100" : "opacity-0"
                            ]
                          }, null, 8, ["class"])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="${ssrRenderClass([[unref(canChangeLayout) ? "sm:col-span-5" : ""], "col-span-12 flex flex-col gap-4"])}"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "medium",
              class: "text-muted-900 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Color selection `);
                } else {
                  return [
                    createTextVNode(" Color selection ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Make changes to the color palette `);
                } else {
                  return [
                    createTextVNode(" Make changes to the color palette ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="space-y-1"${_scopeId}><div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4"${_scopeId}><!--[-->`);
            ssrRenderList(primaryPresets, (color) => {
              _push2(`<div${_scopeId}><button type="button" class="${ssrRenderClass([[
                unref(currentPrimary) === color.name ? "ring-1 ring-primary-500 z-10 relative" : "ring-0"
              ], "group w-full flex items-center gap-3 p-2 rounded-lg hover:bg-muted-100 dark:hover:bg-muted-700/70 transition-colors duration-200"])}"${_scopeId}><span class="${ssrRenderClass([color.class, "block h-6 w-6 rounded-lg shrink-0"])}"${_scopeId}></span>`);
              _push2(ssrRenderComponent(_component_BaseText, { size: "sm" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(color.label)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(color.label), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</button></div>`);
            });
            _push2(`<!--]--></div><hr class="border-muted-200 dark:border-muted-700"${_scopeId}><div${_scopeId}><button type="button" class="group w-full flex items-center gap-3 p-2 rounded-lg"${_scopeId}><span class="block h-6 w-6 rounded-lg bg-muted-200 dark:bg-muted-900"${_scopeId}></span>`);
            _push2(ssrRenderComponent(_component_BaseText, { size: "sm" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Background shade`);
                } else {
                  return [
                    createTextVNode("Background shade")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</button><div class="flex items-center px-2 pt-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Pick a shade`);
                } else {
                  return [
                    createTextVNode("Pick a shade")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="ml-auto flex items-center justify-end gap-2"${_scopeId}><!--[-->`);
            ssrRenderList(mutedPresets, (color) => {
              _push2(`<button type="button" class="${ssrRenderClass([[
                color.class,
                unref(currentMuted) === color.name ? "ring-1 ring-primary-500" : "ring-0"
              ], "block h-6 w-6 rounded-full"])}"${ssrRenderAttr("data-nui-tooltip", color.label)}${_scopeId}></button>`);
            });
            _push2(`<!--]--></div></div></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "px-4 pb-4 md:px-6 md:pb-6 max-h-[550px] overflow-y-auto nui-slimscroll" }, [
                createVNode("div", { class: "grid grid-cols-12 gap-6" }, [
                  unref(canChangeLayout) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "col-span-12 sm:col-span-7 flex flex-col gap-4"
                  }, [
                    createVNode("div", null, [
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "sm",
                        weight: "medium",
                        class: "text-muted-900 dark:text-white"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Layout selection ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseParagraph, {
                        size: "sm",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Select the layout you want to use for your application ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-muted-100 dark:bg-muted-700/40 rounded-xl" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(layouts), (layout) => {
                        return openBlock(), createBlock(_component_BaseCard, {
                          key: layout.name,
                          role: "button",
                          shape: "curved",
                          class: ["p-2", unref(activeLayoutName) === layout.name && "!border-primary-500"],
                          onClick: ($event) => switchLayout(layout.name)
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "bg-muted-50 dark:bg-muted-700/70 flex items-center justify-center rounded-lg py-6 sm:py-3" }, [
                              createVNode("img", {
                                src: `/img/illustrations/switcher/layout-${layout.name}-default.svg`,
                                class: [
                                  "block dark:hidden max-w-[110px] mx-auto transition-opacity duration-200",
                                  unref(activeLayoutName) === layout.name ? "opacity-100" : "opacity-60"
                                ],
                                alt: `${layout.name} layout`
                              }, null, 10, ["src", "alt"]),
                              createVNode("img", {
                                src: `/img/illustrations/switcher/layout-${layout.name}-default-dark.svg`,
                                class: [
                                  "hidden dark:block max-w-[110px] mx-auto transition-opacity duration-200",
                                  unref(activeLayoutName) === layout.name ? "opacity-100" : "opacity-60"
                                ],
                                alt: `${layout.name} layout`
                              }, null, 10, ["src", "alt"])
                            ]),
                            createVNode("div", { class: "flex items-center justify-between py-2" }, [
                              createVNode(_component_BaseText, {
                                size: "xs",
                                class: [
                                  "capitalize",
                                  unref(activeLayoutName) === layout.name ? "text-muted-600 dark:text-muted-100" : "text-muted-400 dark:text-muted-500"
                                ]
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(layout.name) + " Layout ", 1)
                                ]),
                                _: 2
                              }, 1032, ["class"]),
                              createVNode(_component_Icon, {
                                name: "ph:check-circle-duotone",
                                class: [
                                  "w-5 h-5 text-success-500 transition-opacity duration-200",
                                  unref(activeLayoutName) === layout.name ? "opacity-100" : "opacity-0"
                                ]
                              }, null, 8, ["class"])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["class", "onClick"]);
                      }), 128))
                    ])
                  ])) : createCommentVNode("", true),
                  createVNode("div", {
                    class: ["col-span-12 flex flex-col gap-4", [unref(canChangeLayout) ? "sm:col-span-5" : ""]]
                  }, [
                    createVNode("div", null, [
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "sm",
                        weight: "medium",
                        class: "text-muted-900 dark:text-white"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Color selection ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseParagraph, {
                        size: "sm",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Make changes to the color palette ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "space-y-1" }, [
                      createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-x-4" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(primaryPresets, (color) => {
                          return createVNode("div", {
                            key: color.name
                          }, [
                            createVNode("button", {
                              type: "button",
                              class: ["group w-full flex items-center gap-3 p-2 rounded-lg hover:bg-muted-100 dark:hover:bg-muted-700/70 transition-colors duration-200", [
                                unref(currentPrimary) === color.name ? "ring-1 ring-primary-500 z-10 relative" : "ring-0"
                              ]],
                              onClick: () => switchPrimary(color)
                            }, [
                              createVNode("span", {
                                class: ["block h-6 w-6 rounded-lg shrink-0", color.class]
                              }, null, 2),
                              createVNode(_component_BaseText, { size: "sm" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(color.label), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ], 10, ["onClick"])
                          ]);
                        }), 64))
                      ]),
                      createVNode("hr", { class: "border-muted-200 dark:border-muted-700" }),
                      createVNode("div", null, [
                        createVNode("button", {
                          type: "button",
                          class: "group w-full flex items-center gap-3 p-2 rounded-lg"
                        }, [
                          createVNode("span", { class: "block h-6 w-6 rounded-lg bg-muted-200 dark:bg-muted-900" }),
                          createVNode(_component_BaseText, { size: "sm" }, {
                            default: withCtx(() => [
                              createTextVNode("Background shade")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "flex items-center px-2 pt-2" }, [
                          createVNode(_component_BaseText, {
                            size: "xs",
                            class: "text-muted-400"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Pick a shade")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "ml-auto flex items-center justify-end gap-2" }, [
                            (openBlock(), createBlock(Fragment, null, renderList(mutedPresets, (color) => {
                              return createVNode("button", {
                                key: color.name,
                                type: "button",
                                class: ["block h-6 w-6 rounded-full", [
                                  color.class,
                                  unref(currentMuted) === color.name ? "ring-1 ring-primary-500" : "ring-0"
                                ]],
                                "data-nui-tooltip": color.label,
                                onClick: () => switchMuted(color)
                              }, null, 10, ["data-nui-tooltip", "onClick"]);
                            }), 64))
                          ])
                        ])
                      ])
                    ])
                  ], 2)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});

const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoAppLayoutSwitcher.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};

const _wrapIf = (component, props, slots) => {
  props = props === true ? {} : props;
  return { default: () => props ? h(component, props, slots) : slots.default?.() };
};

const layouts = {
  default: () => import('./_nuxt/default-abebee35.mjs').then(m => m.default || m),
  landing: () => import('./_nuxt/landing-9033e8ce.mjs').then(m => m.default || m),
  sidebar: () => import('./_nuxt/sidebar-77af3c3d.mjs').then(m => m.default || m),
  collapse: () => import('./_nuxt/collapse-f681b1be.mjs').then(m => m.default || m),
  topnav: () => import('./_nuxt/topnav-8cc73e68.mjs').then(m => m.default || m),
  empty: () => import('./_nuxt/empty-1d4bfeab.mjs').then(m => m.default || m)
};

const LayoutLoader = /* #__PURE__ */ defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  async setup(props, context) {
    const LayoutComponent = await layouts[props.name]().then((r) => r.default || r);
    return () => h(LayoutComponent, props.layoutProps, context.slots);
  }
});
const __nuxt_component_3 = /* #__PURE__ */ defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const nuxtApp = useNuxtApp();
    const injectedRoute = inject(PageRouteSymbol);
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
    const layout = computed(() => unref(props.name) ?? route.meta.layout ?? "default");
    const layoutRef = ref();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    return () => {
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = route.meta.layoutTransition ?? appLayoutTransition;
      return _wrapIf(Transition, hasLayout && transitionProps, {
        default: () => h(Suspense, { suspensible: true, onResolve: () => {
          nextTick(done);
        } }, {
          default: () => h(
            // @ts-expect-error seems to be an issue in vue types
            LayoutProvider,
            {
              layoutProps: mergeProps(context.attrs, { ref: layoutRef }),
              key: layout.value,
              name: layout.value,
              shouldProvide: !props.name,
              hasTransition: !!transitionProps
            },
            context.slots
          )
        })
      }).default();
    };
  }
});
const LayoutProvider = /* #__PURE__ */ defineComponent({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean]
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    }
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) {
      provide(LayoutMetaSymbol, {
        isCurrent: (route) => name === (route.meta.layout ?? "default")
      });
    }
    return () => {
      if (!name || typeof name === "string" && !(name in layouts)) {
        return context.slots.default?.();
      }
      return h(
        // @ts-expect-error seems to be an issue in vue types
        LayoutLoader,
        { key: name, layoutProps: props.layoutProps, name },
        context.slots
      );
    };
  }
});

const __nuxt_component_4 = /* #__PURE__ */ defineComponent({
  name: "NuxtLoadingIndicator",
  props: {
    throttle: {
      type: Number,
      default: 200
    },
    duration: {
      type: Number,
      default: 2e3
    },
    height: {
      type: Number,
      default: 3
    },
    color: {
      type: [String, Boolean],
      default: "repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"
    }
  },
  setup(props, { slots }) {
    const indicator = useLoadingIndicator({
      duration: props.duration,
      throttle: props.throttle
    });
    const nuxtApp = useNuxtApp();
    const router = useRouter();
    globalMiddleware.unshift(indicator.start);
    router.onError(() => {
      indicator.finish();
    });
    router.beforeResolve((to, from) => {
      if (to === from || to.matched.every((comp, index) => comp.components && comp.components?.default === from.matched[index]?.components?.default)) {
        indicator.finish();
      }
    });
    router.afterEach((_to, _from, failure) => {
      if (failure) {
        indicator.finish();
      }
    });
    nuxtApp.hook("page:finish", indicator.finish);
    nuxtApp.hook("vue:error", indicator.finish);
    return () => h("div", {
      class: "nuxt-loading-indicator",
      style: {
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        pointerEvents: "none",
        width: "auto",
        height: `${props.height}px`,
        opacity: indicator.isLoading.value ? 1 : 0,
        background: props.color || void 0,
        backgroundSize: `${100 / indicator.progress.value * 100}% auto`,
        transform: `scaleX(${indicator.progress.value}%)`,
        transformOrigin: "left",
        transition: "transform 0.1s, height 0.4s, opacity 0.4s",
        zIndex: 999999
      }
    }, slots);
  }
});
function useLoadingIndicator(opts) {
  const progress = ref(0);
  const isLoading = ref(false);
  computed(() => 1e4 / opts.duration);
  let _timer = null;
  let _throttle = null;
  function start() {
    clear();
    progress.value = 0;
    if (opts.throttle && false) {
      _throttle = setTimeout(() => {
        isLoading.value = true;
      }, opts.throttle);
    } else {
      isLoading.value = true;
    }
  }
  function finish() {
    progress.value = 100;
    _hide();
  }
  function clear() {
    clearInterval(_timer);
    clearTimeout(_throttle);
    _timer = null;
    _throttle = null;
  }
  function _hide() {
    clear();
  }
  return {
    progress,
    isLoading,
    start,
    finish,
    clear
  };
}

const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => route.params[r.slice(1)]?.toString() || "");
};
const generateRouteKey = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => m.components?.default === routeProps.Component.type);
  const source = override ?? matchedRoute?.meta.key ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};

const RouteProvider = /* #__PURE__ */ defineComponent({
  name: "RouteProvider",
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key]
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});

const __nuxt_component_0 = /* #__PURE__ */ defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    inject(PageRouteSymbol, null);
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    let vnode;
    const done = nuxtApp.deferHydration();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            done();
            return;
          }
          const key = generateRouteKey(routeProps, props.pageKey);
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          vnode = _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive,
              h(Suspense, {
                suspensible: true,
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).finally(done));
                }
              }, {
                // @ts-expect-error seems to be an issue in vue types
                default: () => h(RouteProvider, {
                  key,
                  vnode: routeProps.Component,
                  route: routeProps.route,
                  renderKey: key,
                  trackRootNodes: hasTransition,
                  vnodeRef: pageRef
                })
              })
            )
          ).default();
          return vnode;
        }
      });
    };
  }
});
function _toArray(val) {
  return Array.isArray(val) ? val : val ? [val] : [];
}
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: _toArray(prop.onAfterLeave)
  }));
  return defu(..._props);
}

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const app = useAppConfig();
    useHead({
      title: () => route.meta?.title ?? "",
      titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - ${app.tairo.title}` : `${app.tairo.title}`;
      },
      htmlAttrs: {
        lang: "en",
        dir: "ltr"
      },
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.png"
        }
      ],
      meta: [
        { name: "description", content: () => route.meta.description ?? "The only workforce platform you will ever need" },
        {
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          name: "twitter:site",
          content: "@skillhub"
        },
        {
          name: "og:image:type",
          content: "image/png"
        },
        {
          name: "og:image:width",
          content: "1200"
        },
        {
          name: "og:image:height",
          content: "630"
        },
        {
          name: "og:image",
          content: `https://media.cssninja.io/embed/marketplace/product/wide.png?headline=${encodeURIComponent(
            route.meta.description || (route.meta.preview ? `${route.meta.preview?.title} - ${route.meta.preview?.description}` : "AI powered workforce manager")
          )}&url=${encodeURIComponent(
            "https://media.cssninja.io/content/products/logos/tairo-text-white.svg"
          )}&previewUrl=${encodeURIComponent(
            `https://tairo.cssninja.io${route.meta.preview?.src || "/img/screens/documentation-hub.png"}`
          )}`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VitePwaManifest = __nuxt_component_0$4;
      const _component_DemoAppSearch = _sfc_main$q;
      const _component_DemoAppLayoutSwitcher = _sfc_main$5;
      const _component_VueAxePopup = resolveComponent("VueAxePopup");
      const _component_NuxtLayout = __nuxt_component_3;
      const _component_NuxtLoadingIndicator = __nuxt_component_4;
      const _component_NuxtPage = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_VitePwaManifest, null, null, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_DemoAppSearch, null, null, _parent));
      _push(ssrRenderComponent(_component_DemoAppLayoutSwitcher, null, null, _parent));
      _push(ssrRenderComponent(_component_VueAxePopup, null, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLayout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLoadingIndicator, { color: "rgb(var(--color-primary-500))" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLoadingIndicator, { color: "rgb(var(--color-primary-500))" }),
              createVNode(_component_NuxtPage)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});

const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BasePlaceholderPage",
  __ssrInlineRender: true,
  props: {
    title: {},
    subtitle: { default: void 0 },
    imageSize: { default: "xs" }
  },
  setup(__props) {
    const props = __props;
    const sizeStyle = {
      xs: "nui-placeholder-xs",
      sm: "nui-placeholder-sm",
      md: "nui-placeholder-md",
      lg: "nui-placeholder-lg",
      xl: "nui-placeholder-xl"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$p;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-placeholder-page", sizeStyle[props.imageSize]]
      }, _attrs))}><div class="nui-placeholder-page-inner">`);
      if ("image" in _ctx.$slots) {
        _push(`<div class="nui-placeholder-page-img">`);
        ssrRenderSlot(_ctx.$slots, "image", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="nui-placeholder-page-content">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h4",
        weight: "medium",
        size: "xl",
        class: "nui-placeholder-page-title"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(props.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(props.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (props.subtitle) {
        _push(`<p class="nui-placeholder-page-subtitle">${ssrInterpolate(props.subtitle)}</p>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
});

const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@1.1.3_nuxt@3.8.0_rollup@2.79.1/node_modules/@shuriken-ui/nuxt/components/base/BasePlaceholderPage.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TairoError",
  __ssrInlineRender: true,
  props: {
    error: {}
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
        return "We couldn't find the page you were looking for, please contact a system administrator or try again later.";
      }
      return "An error has occured. If the problem persists, please contact a system administrator or try again later.";
    });
    const app = useAppConfig();
    const handleError = () => clearError({ redirect: "/" });
    ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BasePlaceholderPage = _sfc_main$3;
      const _component_BaseButton = _sfc_main$x;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pb-16" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BasePlaceholderPage, {
        title: unref(title),
        subtitle: unref(description),
        "image-size": "md",
        class: "relative !items-end"
      }, {
        image: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(app).tairo.error?.logo?.component) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(unref(app).tairo.error.logo.component)), unref(app).tairo.error.logo.props, null), _parent2, _scopeId);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(app).tairo.error?.logo?.component ? (openBlock(), createBlock(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(unref(app).tairo.error.logo.component)), mergeProps({ key: 0 }, unref(app).tairo.error.logo.props), null, 16)) : createCommentVNode("", true)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mt-4"${_scopeId}><div class="text-muted-400/20 dark:text-muted-400/10 absolute inset-x-0 top-1/3 -translate-y-1/2 text-[13rem] font-bold sm:text-[20rem]"${_scopeId}><span${_scopeId}>${ssrInterpolate(props.error?.statusCode)}</span></div><div class="mx-auto flex w-full max-w-xs items-center justify-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              shape: "curved",
              class: "mx-auto !h-12 w-full max-w-[160px] items-center gap-2",
              onClick: handleError
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, { name: "feather:arrow-left" }, null, _parent3, _scopeId2));
                  _push3(` Back to home `);
                } else {
                  return [
                    createVNode(_component_Icon, { name: "feather:arrow-left" }),
                    createTextVNode(" Back to home ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "mt-4" }, [
                createVNode("div", { class: "text-muted-400/20 dark:text-muted-400/10 absolute inset-x-0 top-1/3 -translate-y-1/2 text-[13rem] font-bold sm:text-[20rem]" }, [
                  createVNode("span", null, toDisplayString(props.error?.statusCode), 1)
                ]),
                createVNode("div", { class: "mx-auto flex w-full max-w-xs items-center justify-center gap-2" }, [
                  createVNode(_component_BaseButton, {
                    shape: "curved",
                    class: "mx-auto !h-12 w-full max-w-[160px] items-center gap-2",
                    onClick: handleError
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, { name: "feather:arrow-left" }),
                      createTextVNode(" Back to home ")
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});

const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo/components/TairoError.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "error",
  __ssrInlineRender: true,
  props: {
    error: {}
  },
  setup(__props) {
    const props = __props;
    const app = useAppConfig();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoSidebarLayout = _sfc_main$a;
      const _component_TairoError = _sfc_main$2;
      _push(ssrRenderComponent(_component_TairoSidebarLayout, mergeProps({ sidebar: false }, _attrs), {
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
            _push2(ssrRenderComponent(_component_TairoError, {
              error: props.error
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TairoError, {
                error: props.error
              }, null, 8, ["error"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});

const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-sidebar/error.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};

const _sfc_main = {
  __name: 'nuxt-root',
  __ssrInlineRender: true,
  setup(__props) {

const IslandRenderer = /* #__PURE__ */ defineAsyncComponent(() => import('./_nuxt/island-renderer-fc8b8e15.mjs').then(r => r.default || r))
  ;

const nuxtApp = useNuxtApp();
nuxtApp.deferHydration();

nuxtApp.ssrContext.url ;
const SingleRenderer = false    ;

// Inject default route (outside of pages) as active route
provide(PageRouteSymbol, useRoute());

// vue:setup hook
nuxtApp.hooks.callHookWith(hooks => hooks.map(hook => hook()), 'vue:setup');

// error handling
const error = useError();
onErrorCaptured((err, target, info) => {
  nuxtApp.hooks.callHook('vue:error', err, target, info).catch(hookError => console.error('[nuxt] Error in `vue:error` hook', hookError));
  {
    const p = nuxtApp.runWithContext(() => showError(err));
    onServerPrefetch(() => p);
    return false // suppress error from breaking render
  }
});

// Component islands context
const islandContext = nuxtApp.ssrContext.islandContext;

return (_ctx, _push, _parent, _attrs) => {
  ssrRenderSuspense(_push, {
    default: () => {
      if (unref(error)) {
        _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
      } else if (unref(islandContext)) {
        _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
      } else if (unref(SingleRenderer)) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
      } else {
        _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      }
    },
    _: 1
  });
}
}

};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("../node_modules/.pnpm/nuxt@3.8.0_@parcel+watcher@2.3.0_@types+node@20.8.9_eslint@8.49.0_rollup@2.79.1_typescript@5.2.2_vue-tsc@1.8.11/node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const RootComponent = _sfc_main;

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch$1.create({
    baseURL: baseURL()
  });
}
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(RootComponent);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.hooks.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    if (ssrContext?._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);

export { clearError as $, useNinjaMark as A, refDebounced as B, useTailwindBreakpoints as C, usePanels as D, useRequestEvent as E, useRuntimeConfig as F, useNuxtApp as G, useHead as H, toRef as I, useRoute as J, useAsyncData as K, queryContent as L, useMetaKey as M, useContentPreview as N, _sfc_main$u as O, useNinjaWindowScroll as P, _sfc_main$3 as Q, _sfc_main$t as R, fetchDefaults as S, useRequestFetch as T, _sfc_main$y as U, useClipboard as V, useWindowScroll as W, navigateTo as X, _sfc_main$a as Y, resolveComponentOrNative as Z, _sfc_main$p as _, useToaster as a, __nuxt_component_0 as a0, _sfc_main$h as a1, onClickOutside as a2, useCollapse as a3, useSidebar as a4, useNinjaToasterState as a5, useNinjaToasterProgress as a6, withContentBase as a7, encodeQueryParams as a8, addPrerenderPath as a9, shouldUseClientDB as aa, jsonStringify as ab, useContentDisabled as ac, defineStore as ad, _sfc_main$j as ae, _sfc_main$6 as af, get as ag, assertArray as ah, ensureArray as ai, omit as aj, sortList as ak, withoutKeys as al, apply as am, withKeys as an, createQuery as ao, _sfc_main$2 as ap, defineNuxtLink as aq, _sfc_main$o as b, createError as c, _sfc_main$x as d, entry$1 as default, __nuxt_component_0$5 as e, __nuxt_component_2 as f, _sfc_main$z as g, __nuxt_component_0$1 as h, _sfc_main$D as i, _sfc_main$C as j, useTailwindColors as k, _export_sfc as l, useAppConfig as m, useVModel as n, useNinjaId as o, useState as p, useIntersectionObserver as q, __nuxt_component_0$2 as r, _sfc_main$E as s, useNinjaButton as t, useRouter as u, useNow as v, useEventListener as w, onKeyStroke as x, _sfc_main$d as y, _sfc_main$F as z };
//# sourceMappingURL=server.mjs.map
