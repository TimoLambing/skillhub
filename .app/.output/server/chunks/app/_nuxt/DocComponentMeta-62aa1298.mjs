import { l as _export_sfc, I as toRef, _ as _sfc_main$p, f as __nuxt_component_2, E as useRequestEvent, p as useState } from '../server.mjs';
import _sfc_main$1 from './TairoTocAnchor-4ae1eaf7.mjs';
import { _ as __nuxt_component_0 } from './AddonMarkdownRemark-e2bad1bc.mjs';
import { _ as _sfc_main$2 } from './BaseTag-734af285.mjs';
import { useSSRContext, defineComponent, withAsyncContext, mergeProps, unref, withCtx, createVNode, createTextVNode, computed, reactive } from 'vue';
import { N as kebabCase, O as upperFirst } from '../../nitro/node-server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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
import './BaseProse-1777d29c.mjs';
import './composables-f7cb2fae.mjs';
import 'rehype-sanitize';
import 'rehype-stringify';
import 'rehype-shikiji';

const excludedProps = ["modelValue", "modelModifiers"];
const useComponentsMetaState = () => useState("components-meta", () => ({}));
async function fetchComponentMeta(name) {
  const state = useComponentsMetaState();
  if (state.value[name]?.then) {
    await state.value[name];
    return state.value[name];
  }
  if (state.value[name]) {
    return state.value[name];
  }
  {
    const event = useRequestEvent();
    event.node.res.setHeader(
      "x-nitro-prerender",
      [
        event.node.res.getHeader("x-nitro-prerender"),
        `/api/component-meta/${name}.json`
      ].filter(Boolean).join(",")
    );
  }
  state.value[name] = $fetch(`/api/component-meta/${name}.json`).then(
    (meta) => {
      state.value[name] = meta;
    }
  );
  await state.value[name];
  return state.value[name];
}
async function useDocumentationMeta(_name) {
  const name = toRef(_name);
  const meta = await fetchComponentMeta(name.value);
  const model = computed(
    () => meta?.meta?.props?.find((prop) => prop.name === "modelValue")
  );
  const props = computed(
    () => meta?.meta?.props?.filter(
      (prop) => !excludedProps.includes(prop.name)
    )
  );
  const events = computed(
    () => meta?.meta?.events?.filter(
      (prop) => prop.name !== "update:modelValue"
    )
  );
  const slots = computed(() => meta?.meta?.slots);
  const exposed = computed(
    () => meta?.meta?.exposed.filter((item) => {
      const isProps = props.value?.findIndex((prop) => prop.name === item.name) >= 0;
      const isEvent = meta?.meta?.events?.findIndex(
        (event) => `on${event.name}`.toLowerCase() === item.name?.toLowerCase()
      ) >= 0;
      const isExcluded = item.name?.startsWith("$");
      const isModel = item.name === "modelValue";
      return !(isProps || isEvent || isExcluded || isModel);
    })
  );
  const noOptions = computed(() => {
    return !(props.value?.length || events.value?.length || slots.value?.length || exposed.value?.length) && model.value === void 0;
  });
  function renderNoOptions() {
    const code = ["```vue"];
    code.push(`<template>`);
    const oneline = [`  <${name.value} `, `/>`].join("");
    code.push(oneline);
    code.push(`</template>`);
    return code.join("\n");
  }
  function renderModel(prop) {
    const code = ["```vue"];
    code.push(`<script setup lang="ts">`);
    if (prop.type.length > 45) {
      code.push(
        [
          `// this type is generated to show you all possible values`,
          `type ${upperFirst(prop.name)}Data = ${prop.type.replace(/{ /g, "{\n ").replace(/; ([a-z])/g, ";\n $1").replace(/; /g, ";\n")}

const ${prop.name} = ref<${upperFirst(
            prop.name
          )}Data>(${prop.default || ""})`
        ].join("\n")
      );
    } else {
      code.push(
        [`const value = ref<${prop.type}>(${prop.default || ""})`].join("\n")
      );
    }
    code.push(`<\/script>`);
    code.push(``);
    code.push(`<template>`);
    const oneline = [`  <${name.value} `, `v-model="value" `, `/>`].join("");
    if (oneline.length > 55) {
      code.push(
        [
          ``,
          `<template>`,
          `  <${name.value}`,
          `    :${kebabCase(prop.name)}="${prop.name}"`,
          `  />`,
          `</template>`,
          "```"
        ].join("\n")
      );
    } else {
      code.push(oneline);
    }
    code.push(`</template>`);
    return code.join("\n");
  }
  function renderProperty(prop) {
    const code = ["```vue"];
    const defaultValue = !prop.default || prop.default === "undefined" ? "" : prop.default;
    code.push(`<script setup lang="ts">`);
    if (prop.type.length > 45) {
      code.push(
        [
          `// this type is generated to show you all possible values`,
          `type ${upperFirst(prop.name)}Data = ${prop.type.replace(/{ /g, "{\n ").replace(/; ([a-z])/g, ";\n $1").replace(/; /g, ";\n")}

const ${prop.name} = ref<${upperFirst(
            prop.name
          )}Data>(${defaultValue})`
        ].join("\n")
      );
    } else {
      code.push(
        [`const ${prop.name} = ref<${prop.type}>(${defaultValue})`].join("\n")
      );
    }
    code.push(`<\/script>`);
    code.push(``);
    code.push(`<template>`);
    const oneline = [
      `  <${name.value} `,
      `:${kebabCase(prop.name)}="${prop.name}" `,
      `/>`
    ].join("");
    if (oneline.length > 55) {
      code.push(
        [
          ``,
          `<template>`,
          `  <${name.value}`,
          `    :${kebabCase(prop.name)}="${prop.name}"`,
          `  />`,
          `</template>`,
          "```"
        ].join("\n")
      );
    } else {
      code.push(oneline);
    }
    code.push(`</template>`);
    return code.join("\n");
  }
  function renderSlot(slot) {
    const code = [];
    code.push("```vue");
    code.push(`<template>`);
    if (slot.type !== "{}") {
      code.push(`  <${name.value}>`);
      code.push(`    <template #${slot.name}="value">`);
      code.push(`      <!-- Use destruct to keep what you need -->`);
      code.push(`      <pre>{{ value }}</pre>`);
      code.push(`    </template>`);
    } else {
      code.push(`  <${name.value}>`);
      if (slot.name === "default") {
        code.push(`    <!-- Your content -->`);
      } else {
        code.push(`    <template #${slot.name}>`);
        code.push(`      <!-- Your content -->`);
        code.push(`    </template>`);
      }
    }
    code.push(`  </${name.value}>`);
    code.push(`</template>`);
    code.push("```");
    return code.join("\n");
  }
  function renderEvents(event) {
    const code = [];
    const handlerName = upperFirst(event.name).replace(
      /:([a-z])/g,
      (v) => v.replace(":", "").toUpperCase()
    );
    const handlerProps = event.type.startsWith("[") ? event.type.slice(1, -1) : event.type;
    code.push("```vue");
    code.push(`<script setup lang="ts">`);
    code.push(`function on${handlerName} (${handlerProps}) {`);
    code.push(`  // ...`);
    code.push(`}`);
    code.push(`<\/script>`);
    code.push(``);
    code.push(`<template>`);
    const oneline = [
      `  <${name.value} `,
      `@${event.name}="on${handlerName}" `,
      `/>`
    ].join("");
    if (oneline.length > 55) {
      code.push(`  <${name.value}`);
      code.push(`    @${event.name}="on${handlerName}"`);
      code.push(`  />`);
    } else {
      code.push(oneline);
    }
    code.push(`</template>`);
    code.push("```");
    return code.join("\n");
  }
  function renderExposed(prop) {
    const code = ["```vue"];
    code.push(`<script setup lang="ts">`);
    code.push(
      [
        `// this hold a ref to the component instance`,
        `const comp = ref()`,
        "",
        "watchEffect(() => {",
        `  // you can access all exposed properties with comp.value`,
        `  // like this: comp.value.${prop.name}`,
        `  console.log(comp.value.${prop.name})`,
        "})"
      ].join("\n")
    );
    code.push(`<\/script>`);
    code.push(``);
    code.push(`<template>`);
    const oneline = [`  <${name.value} `, `ref="comp" `, `/>`].join("");
    if (oneline.length > 55) {
      code.push(
        [
          ``,
          `<template>`,
          `  <${name.value}`,
          `    :${kebabCase(prop.name)}="${prop.name}"`,
          `  />`,
          `</template>`,
          "```"
        ].join("\n")
      );
    } else {
      code.push(oneline);
    }
    code.push(`</template>`);
    return code.join("\n");
  }
  return reactive({
    meta,
    model,
    props,
    events,
    slots,
    exposed,
    noOptions,
    renderModel,
    renderProperty,
    renderSlot,
    renderEvents,
    renderExposed,
    renderNoOptions
  });
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DocComponentMeta",
  __ssrInlineRender: true,
  props: {
    name: {}
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const docs = ([__temp, __restore] = withAsyncContext(() => useDocumentationMeta(() => props.name)), __temp = await __temp, __restore(), __temp);
    function wrapExternalLinks(string) {
      return string.replace(
        /https?:\/\/[^\s)]+/g,
        (url) => `<a class="text-primary-600 dark:text-primary-400 hover:underline" href="${url}" rel="noopener noreferrer" target="_blank">${url}</a>`
      );
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$p;
      const _component_TairoTocAnchor = _sfc_main$1;
      const _component_AddonMarkdownRemark = __nuxt_component_0;
      const _component_BaseTag = _sfc_main$2;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-muted-200 dark:border-muted-800 mb-10 border-b py-6" }, _attrs))} data-v-018ff848><div class="mb-4 flex items-center" data-v-018ff848>`);
      if (unref(docs).meta?.pascalName) {
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h2",
          size: "xl",
          anchor: "",
          weight: "medium",
          class: "text-muted-800 dark:text-white"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_TairoTocAnchor, {
                label: `<${unref(docs).meta?.pascalName}>`
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_TairoTocAnchor, {
                  label: `<${unref(docs).meta?.pascalName}>`
                }, null, 8, ["label"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="doc-markdown border-muted-200 divansition-shadow dark:border-muted-700 dark:bg-muted-800 hover:shadow-muted-300/30 dark:hover:shadow-muted-800/20 rounded-lg border bg-white duration-300 hover:shadow-lg" data-v-018ff848>`);
      if (unref(docs).noOptions) {
        _push(`<div class="mx-auto w-full" data-v-018ff848><div class="px-6 pb-2 pt-6" data-v-018ff848>`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h3",
          size: "md",
          weight: "semibold",
          class: "text-muted-800 dark:text-muted-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_TairoTocAnchor, {
                id: `${unref(docs)?.meta?.kebabName}-usage`,
                level: 3,
                prefix: "",
                suffix: "\xB6",
                label: "Basic usage"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_TairoTocAnchor, {
                  id: `${unref(docs)?.meta?.kebabName}-usage`,
                  level: 3,
                  prefix: "",
                  suffix: "\xB6",
                  label: "Basic usage"
                }, null, 8, ["id"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="p-6" data-v-018ff848><div class="font-alt w-full" data-v-018ff848><div class="border-muted-100 dark:border-muted-700 mb-6 grid grid-cols-1 gap-6 border-b pb-6 text-sm lg:grid-cols-12" data-v-018ff848><div class="col-span-1 lg:col-span-4" data-v-018ff848><div class="flex" data-v-018ff848><div class="text-muted-600 dark:text-muted-300 font-mono text-xs font-medium" data-v-018ff848><span data-v-018ff848>This component has no props</span></div></div></div><div class="col-span-1 lg:col-span-8" data-v-018ff848>`);
        _push(ssrRenderComponent(_component_AddonMarkdownRemark, {
          lines: false,
          class: "max-w-none",
          source: unref(docs).renderNoOptions()
        }, null, _parent));
        _push(`</div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(docs).model) {
        _push(`<div class="mx-auto w-full" data-v-018ff848><div class="px-6 pb-2 pt-6" data-v-018ff848>`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h3",
          size: "md",
          weight: "semibold",
          class: "text-muted-800 dark:text-muted-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_TairoTocAnchor, {
                id: `${unref(docs)?.meta?.kebabName}-model`,
                level: 3,
                prefix: "",
                suffix: "\xB6",
                label: "Model"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_TairoTocAnchor, {
                  id: `${unref(docs)?.meta?.kebabName}-model`,
                  level: 3,
                  prefix: "",
                  suffix: "\xB6",
                  label: "Model"
                }, null, 8, ["id"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="hidden lg:block" data-v-018ff848><div class="div-auto font-alt w-full" data-v-018ff848><div class="bg-muted-50 text-muted-400 dark:bg-muted-700 px-4 text-xs font-semibold uppercase" data-v-018ff848><div class="grid grid-cols-1 gap-6 px-2 py-4 lg:grid-cols-12" data-v-018ff848><div class="col-span-1 lg:col-span-3" data-v-018ff848><div class="text-left font-semibold" data-v-018ff848>Name</div></div><div class="col-span-1 lg:col-span-9" data-v-018ff848><div class="text-left font-semibold" data-v-018ff848>Type</div></div></div></div></div></div><div class="p-6" data-v-018ff848><div class="div-auto font-alt w-full" data-v-018ff848><div class="divide-muted-100 dark:divide-muted-700 space-y-12 divide-y text-sm" data-v-018ff848><div class="grid grid-cols-1 gap-6 lg:grid-cols-12" data-v-018ff848><div class="col-span-1 lg:col-span-3" data-v-018ff848><div class="flex" data-v-018ff848><div class="text-muted-800 dark:text-muted-100 font-medium" data-v-018ff848><span class="text-muted-800 dark:text-muted-100 font-mono font-medium" data-v-018ff848><code data-v-018ff848>v-model</code></span></div></div><div class="text-muted-400 whitespace-pre-wrap break-words text-left italic" data-v-018ff848>${ssrInterpolate(unref(docs).model.description)}</div>`);
        if (unref(docs).model.tags?.length > 0) {
          _push(`<div class="mt-3 space-y-2 break-words" data-v-018ff848><!--[-->`);
          ssrRenderList(unref(docs).model.tags, (tag) => {
            _push(`<div class="text-muted-400 text-xs" data-v-018ff848><p class="font-semibold" data-v-018ff848>@${ssrInterpolate(tag.name)}</p>`);
            if (tag.text) {
              _push(`<p class="block" data-v-018ff848>${wrapExternalLinks(tag.text)}</p>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(docs).model.required) {
          _push(ssrRenderComponent(_component_BaseTag, {
            color: "danger",
            size: "sm",
            flavor: "pastel",
            class: "my-2 font-mono"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Required `);
              } else {
                return [
                  createTextVNode(" Required ")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="col-span-1 lg:col-span-9" data-v-018ff848>`);
        _push(ssrRenderComponent(_component_AddonMarkdownRemark, {
          class: "inline-sample",
          lines: false,
          source: `\`\`\`ts
${unref(docs).model.type}
\`\`\``
        }, null, _parent));
        _push(`</div><div class="col-span-1 lg:col-span-9 lg:col-start-4" data-v-018ff848><details class="group" data-v-018ff848><summary class="nui-focus hover:bg-muted-100 text-muted-500 inline-flex cursor-pointer list-none items-center justify-center gap-2 rounded-lg px-2 py-1.5 font-sans text-[0.8rem] transition-all duration-100" data-v-018ff848><span class="inline group-open:hidden" data-v-018ff848>Show example</span><span class="hidden group-open:inline" data-v-018ff848>Hide example</span>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:chevron-down",
          class: "text-muted-400 h-4 w-4 transition-transform duration-200 group-open:rotate-180"
        }, null, _parent));
        _push(`</summary>`);
        _push(ssrRenderComponent(_component_AddonMarkdownRemark, {
          lines: false,
          class: "max-w-none",
          source: unref(docs).renderModel(unref(docs).model)
        }, null, _parent));
        _push(`</details></div></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(docs).props?.length > 0) {
        _push(`<div class="mx-auto w-full" data-v-018ff848><div class="px-6 pb-2 pt-6" data-v-018ff848>`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h3",
          size: "md",
          weight: "semibold",
          class: "text-muted-800 dark:text-muted-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_TairoTocAnchor, {
                id: `${unref(docs)?.meta?.kebabName}-properties`,
                level: 3,
                prefix: "",
                suffix: "\xB6",
                label: "Properties"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_TairoTocAnchor, {
                  id: `${unref(docs)?.meta?.kebabName}-properties`,
                  level: 3,
                  prefix: "",
                  suffix: "\xB6",
                  label: "Properties"
                }, null, 8, ["id"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="hidden lg:block" data-v-018ff848><div class="div-auto font-alt w-full" data-v-018ff848><div class="bg-muted-50 text-muted-400 dark:bg-muted-700 px-4 text-xs font-semibold uppercase" data-v-018ff848><div class="grid grid-cols-1 gap-6 px-2 py-4 lg:grid-cols-12" data-v-018ff848><div class="col-span-1 lg:col-span-3" data-v-018ff848><div class="text-left font-semibold" data-v-018ff848>Name</div></div><div class="col-span-1 lg:col-span-5" data-v-018ff848><div class="text-left font-semibold" data-v-018ff848>Type</div></div><div class="col-span-1 lg:col-span-4" data-v-018ff848><div class="text-left font-semibold" data-v-018ff848>Default</div></div></div></div></div></div><div class="p-6" data-v-018ff848><div class="font-alt w-full" data-v-018ff848><!--[-->`);
        ssrRenderList(unref(docs).props, (prop) => {
          _push(`<div class="border-muted-100 dark:border-muted-700 mb-6 grid grid-cols-1 gap-6 border-b pb-6 text-sm lg:grid-cols-12" data-v-018ff848><div class="col-span-1 lg:col-span-3" data-v-018ff848><div class="flex" data-v-018ff848><div class="text-muted-800 dark:text-muted-100 font-medium" data-v-018ff848><span class="text-muted-800 dark:text-muted-100 font-mono font-medium" data-v-018ff848><code data-v-018ff848>${ssrInterpolate(unref(kebabCase)(prop.name))}</code></span></div></div>`);
          if (prop.description) {
            _push(`<div class="text-muted-400 whitespace-pre-wrap break-words text-left italic" data-v-018ff848>${ssrInterpolate(prop.description)}</div>`);
          } else {
            _push(`<!---->`);
          }
          if (prop.tags?.length > 0) {
            _push(`<div class="mt-3 space-y-2 break-words" data-v-018ff848><!--[-->`);
            ssrRenderList(prop.tags, (tag) => {
              _push(`<div class="text-muted-400 text-xs" data-v-018ff848><p class="font-semibold" data-v-018ff848>@${ssrInterpolate(tag.name)}</p>`);
              if (tag.text) {
                _push(`<p class="block" data-v-018ff848>${wrapExternalLinks(tag.text)}</p>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div>`);
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<!---->`);
          }
          if (prop.required) {
            _push(ssrRenderComponent(_component_BaseTag, {
              color: "danger",
              size: "sm",
              flavor: "pastel",
              class: "my-2 font-mono"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(` Required `);
                } else {
                  return [
                    createTextVNode(" Required ")
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="col-span-1 lg:col-span-5" data-v-018ff848>`);
          _push(ssrRenderComponent(_component_AddonMarkdownRemark, {
            class: "inline-sample",
            lines: false,
            source: `\`\`\`ts
${prop.type}
\`\`\``
          }, null, _parent));
          _push(`</div><div class="col-span-1 lg:col-span-4" data-v-018ff848>`);
          _push(ssrRenderComponent(_component_AddonMarkdownRemark, {
            class: "inline-sample",
            lines: false,
            source: `\`\`\`ts
${!prop.default || prop.default === "undefined" ? "undefined" : prop.default}
\`\`\``
          }, null, _parent));
          _push(`</div><div class="col-span-1 lg:col-span-9 lg:col-start-4" data-v-018ff848><details class="group" data-v-018ff848><summary class="nui-focus hover:bg-muted-100 text-muted-500 inline-flex cursor-pointer list-none items-center justify-center gap-2 rounded-lg px-2 py-1.5 font-sans text-[0.8rem] transition-all duration-100" data-v-018ff848><span class="inline group-open:hidden" data-v-018ff848>Show example</span><span class="hidden group-open:inline" data-v-018ff848>Hide example</span>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:chevron-down",
            class: "text-muted-400 h-4 w-4 transition-transform duration-200 group-open:rotate-180"
          }, null, _parent));
          _push(`</summary>`);
          _push(ssrRenderComponent(_component_AddonMarkdownRemark, {
            lines: false,
            class: "max-w-none",
            source: unref(docs).renderProperty(prop)
          }, null, _parent));
          _push(`</details></div></div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(docs).events?.length > 0) {
        _push(`<div class="mx-auto mt-10 w-full" data-v-018ff848><div class="px-6 pb-2 pt-6" data-v-018ff848>`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h3",
          size: "md",
          weight: "semibold",
          class: "text-muted-800 dark:text-muted-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_TairoTocAnchor, {
                id: `${unref(docs)?.meta?.kebabName}-events`,
                level: 3,
                prefix: "",
                suffix: "\xB6",
                label: "Events"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_TairoTocAnchor, {
                  id: `${unref(docs)?.meta?.kebabName}-events`,
                  level: 3,
                  prefix: "",
                  suffix: "\xB6",
                  label: "Events"
                }, null, 8, ["id"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="hidden lg:block" data-v-018ff848><div class="div-auto font-alt w-full" data-v-018ff848><div class="bg-muted-50 text-muted-400 dark:bg-muted-700 px-4 text-xs font-semibold uppercase" data-v-018ff848><div class="grid grid-cols-1 gap-6 px-2 py-4 lg:grid-cols-12" data-v-018ff848><div class="col-span-1 lg:col-span-3" data-v-018ff848><div class="text-left font-semibold" data-v-018ff848>Name</div></div><div class="col-span-1 lg:col-span-9" data-v-018ff848><div class="text-left font-semibold" data-v-018ff848>Emitted Value Type</div></div></div></div></div></div><div class="p-6" data-v-018ff848><div class="div-auto font-alt w-full" data-v-018ff848><!--[-->`);
        ssrRenderList(unref(docs).events, (event) => {
          _push(`<div class="border-muted-100 dark:border-muted-700 mb-6 grid grid-cols-1 gap-6 border-b pb-6 text-sm lg:grid-cols-12" data-v-018ff848><div class="col-span-1 lg:col-span-3" data-v-018ff848><div class="flex items-center" data-v-018ff848><div class="text-muted-800 dark:text-muted-100 font-mono font-medium" data-v-018ff848><code data-v-018ff848>@${ssrInterpolate(event.name)}</code></div></div></div><div class="col-span-1 lg:col-span-9" data-v-018ff848>`);
          _push(ssrRenderComponent(_component_AddonMarkdownRemark, {
            class: "inline-sample max-w-none",
            lines: false,
            source: `\`\`\`ts
${(event.type.startsWith("[") ? event.type.slice(1, -1) : event.type).replace("value?: ", "")}
\`\`\``
          }, null, _parent));
          _push(`</div><div class="col-span-1 lg:col-span-9 lg:col-start-4" data-v-018ff848><details class="group" data-v-018ff848><summary class="nui-focus hover:bg-muted-100 text-muted-500 inline-flex cursor-pointer list-none items-center justify-center gap-2 rounded-lg px-2 py-1.5 font-sans text-[0.8rem] transition-all duration-100" data-v-018ff848><span class="inline group-open:hidden" data-v-018ff848>Show example</span><span class="hidden group-open:inline" data-v-018ff848>Hide example</span>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:chevron-down",
            class: "text-muted-400 h-4 w-4 transition-transform duration-200 group-open:rotate-180"
          }, null, _parent));
          _push(`</summary>`);
          _push(ssrRenderComponent(_component_AddonMarkdownRemark, {
            lines: false,
            class: "max-w-none",
            source: unref(docs).renderEvents(event)
          }, null, _parent));
          _push(`</details></div></div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(docs).slots?.length > 0) {
        _push(`<div class="mx-auto mt-10 w-full" data-v-018ff848><div class="px-6 pb-2 pt-6" data-v-018ff848>`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h3",
          size: "md",
          weight: "semibold",
          class: "text-muted-800 dark:text-muted-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_TairoTocAnchor, {
                id: `${unref(docs)?.meta?.kebabName}-slots`,
                level: 3,
                prefix: "",
                suffix: "\xB6",
                label: "Slots"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_TairoTocAnchor, {
                  id: `${unref(docs)?.meta?.kebabName}-slots`,
                  level: 3,
                  prefix: "",
                  suffix: "\xB6",
                  label: "Slots"
                }, null, 8, ["id"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="hidden lg:block" data-v-018ff848><div class="div-auto font-alt w-full" data-v-018ff848><div class="bg-muted-50 text-muted-400 dark:bg-muted-700 px-4 text-xs font-semibold uppercase" data-v-018ff848><div class="grid grid-cols-1 gap-6 px-2 py-4 lg:grid-cols-12" data-v-018ff848><div class="col-span-1 lg:col-span-3" data-v-018ff848><div class="text-left font-semibold" data-v-018ff848>Name</div></div><div class="col-span-1 lg:col-span-9" data-v-018ff848><div class="text-left font-semibold" data-v-018ff848>Slot Prop Type</div></div></div></div></div></div><div class="p-6" data-v-018ff848><div class="div-auto font-alt w-full" data-v-018ff848><!--[-->`);
        ssrRenderList(unref(docs).slots, (slot) => {
          _push(`<div class="border-muted-100 dark:border-muted-700 mb-6 grid grid-cols-1 gap-6 border-b pb-6 text-sm lg:grid-cols-12" data-v-018ff848><div class="col-span-1 lg:col-span-3" data-v-018ff848><div class="flex items-center" data-v-018ff848><div class="text-muted-800 dark:text-muted-100 font-mono font-medium" data-v-018ff848><code data-v-018ff848>#${ssrInterpolate(slot.name)}</code></div></div></div><div class="col-span-1 lg:col-span-9" data-v-018ff848>`);
          _push(ssrRenderComponent(_component_AddonMarkdownRemark, {
            class: "inline-sample max-w-none",
            lines: false,
            source: `\`\`\`ts
${slot.type}
\`\`\``
          }, null, _parent));
          _push(`</div><div class="col-span-1 lg:col-span-9 lg:col-start-4" data-v-018ff848><details class="group" data-v-018ff848><summary class="nui-focus hover:bg-muted-100 text-muted-500 inline-flex cursor-pointer list-none items-center justify-center gap-2 rounded-lg px-2 py-1.5 font-sans text-[0.8rem] transition-all duration-100" data-v-018ff848><span class="inline group-open:hidden" data-v-018ff848>Show example</span><span class="hidden group-open:inline" data-v-018ff848>Hide example</span>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:chevron-down",
            class: "text-muted-400 h-4 w-4 transition-transform duration-200 group-open:rotate-180"
          }, null, _parent));
          _push(`</summary>`);
          _push(ssrRenderComponent(_component_AddonMarkdownRemark, {
            lines: false,
            class: "max-w-none",
            source: unref(docs).renderSlot(slot)
          }, null, _parent));
          _push(`</details></div></div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(docs).exposed?.length > 0) {
        _push(`<div class="mx-auto mt-10 w-full" data-v-018ff848><div class="px-6 pb-2 pt-6" data-v-018ff848>`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h3",
          size: "md",
          weight: "semibold",
          class: "text-muted-800 dark:text-muted-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_TairoTocAnchor, {
                id: `${unref(docs)?.meta?.kebabName}-exposed`,
                level: 3,
                prefix: "",
                suffix: "\xB6",
                label: "Exposed"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_TairoTocAnchor, {
                  id: `${unref(docs)?.meta?.kebabName}-exposed`,
                  level: 3,
                  prefix: "",
                  suffix: "\xB6",
                  label: "Exposed"
                }, null, 8, ["id"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="hidden lg:block" data-v-018ff848><div class="div-auto font-alt w-full" data-v-018ff848><div class="bg-muted-50 text-muted-400 dark:bg-muted-700 px-4 text-xs font-semibold uppercase" data-v-018ff848><div class="grid grid-cols-1 gap-6 px-2 py-4 lg:grid-cols-12" data-v-018ff848><div class="col-span-1 lg:col-span-3" data-v-018ff848><div class="text-left font-semibold" data-v-018ff848>Name</div></div><div class="col-span-1 lg:col-span-9" data-v-018ff848><div class="text-left font-semibold" data-v-018ff848>Type</div></div></div></div></div></div><div class="p-6" data-v-018ff848><div class="div-auto font-alt w-full" data-v-018ff848><!--[-->`);
        ssrRenderList(unref(docs).exposed, (exposed) => {
          _push(`<div class="border-muted-100 dark:border-muted-700 mb-6 grid grid-cols-1 gap-6 border-b pb-6 text-sm lg:grid-cols-12" data-v-018ff848><div class="col-span-1 lg:col-span-3" data-v-018ff848><div class="flex items-center" data-v-018ff848><div class="text-muted-800 dark:text-muted-100 font-mono font-medium" data-v-018ff848><code data-v-018ff848>${ssrInterpolate(exposed.name)}</code></div></div><div class="text-muted-400 whitespace-pre-wrap break-words text-left italic" data-v-018ff848>${ssrInterpolate(exposed.description)}</div></div><div class="col-span-1 lg:col-span-9" data-v-018ff848>`);
          _push(ssrRenderComponent(_component_AddonMarkdownRemark, {
            class: "inline-sample max-w-none",
            lines: false,
            source: `\`\`\`ts
${exposed.type}
\`\`\``
          }, null, _parent));
          _push(`</div><div class="col-span-1 lg:col-span-9 lg:col-start-4" data-v-018ff848><details class="group" data-v-018ff848><summary class="nui-focus hover:bg-muted-100 text-muted-500 inline-flex cursor-pointer list-none items-center justify-center gap-2 rounded-lg px-2 py-1.5 font-sans text-[0.8rem] transition-all duration-100" data-v-018ff848><span class="inline group-open:hidden" data-v-018ff848>Show example</span><span class="hidden group-open:inline" data-v-018ff848>Hide example</span>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:chevron-down",
            class: "text-muted-400 h-4 w-4 transition-transform duration-200 group-open:rotate-180"
          }, null, _parent));
          _push(`</summary>`);
          _push(ssrRenderComponent(_component_AddonMarkdownRemark, {
            lines: false,
            class: "max-w-none",
            source: unref(docs).renderExposed(exposed)
          }, null, _parent));
          _push(`</details></div></div>`);
        });
        _push(`<!--]--></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/components/content/DocComponentMeta.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DocComponentMeta = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-018ff848"]]);

export { DocComponentMeta as default };
//# sourceMappingURL=DocComponentMeta-62aa1298.mjs.map
