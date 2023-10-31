// ROLLUP_NO_REPLACE 
 const _20_troubleshooting = "{\"parsed\":{\"_path\":\"/documentation/guides/troubleshooting\",\"_dir\":\"guides\",\"_draft\":false,\"_partial\":false,\"_locale\":\"\",\"title\":\"Troubleshooting\",\"description\":\"\",\"body\":{\"type\":\"root\",\"children\":[{\"type\":\"element\",\"tag\":\"doc-component-demo\",\"props\":{\"title\":\"Understanding the project stack\"},\"children\":[{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Nuxt is a framework that combines a set of tools and libraries to create applications. It's important to know what tools are used in order to understand how to solve potential issues.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"It uses Vite as a development tool, and Rollup to build the production version of your app.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"We highly encourage you to both read their troubleshooting guides, as they might be able to help you to solve your issue.\"}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"https://vitejs.dev/guide/troubleshooting.html\",\"rel\":[\"nofollow\"]},\"children\":[{\"type\":\"text\",\"value\":\"Vite's troubleshooting guide\"}]},{\"type\":\"text\",\"value\":\": contains common issues with the development server (ex: requests stalled, hot reloading, etc.)\"}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"https://rollupjs.org/troubleshooting/\",\"rel\":[\"nofollow\"]},\"children\":[{\"type\":\"text\",\"value\":\"Rollup's troubleshooting guide\"}]},{\"type\":\"text\",\"value\":\": contains common issues with the production build (ex: memory issues, tree-shaking, etc.)\"}]}]},{\"type\":\"element\",\"tag\":\"hr\",\"props\":{\"id\":\"\"},\"children\":[]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Useful resources:\"}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"https://vitejs.dev/guide/troubleshooting.html\",\"rel\":[\"nofollow\"]},\"children\":[{\"type\":\"text\",\"value\":\"Read troubleshooting guide on vitejs.dev\"}]}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"https://rollupjs.org/troubleshooting/\",\"rel\":[\"nofollow\"]},\"children\":[{\"type\":\"text\",\"value\":\"Read troubleshooting guide on rollupjs.org\"}]}]}]}]},{\"type\":\"element\",\"tag\":\"doc-component-demo\",\"props\":{\"title\":\"Enable CLI debug\"},\"children\":[{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"If you encounter issues that you can't solve, you can start the project in debug mode. This will enable the verbose mode of Nuxt, which will output more information in the console.\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":[\"language-bash\"],\"code\":\"# Enable Nuxt debug mode\\nDEBUG=1 pnpm dev # or pnpm build\\n\",\"language\":\"bash\",\"meta\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"text\",\"value\":\"# Enable Nuxt debug mode\\nDEBUG=1 pnpm dev # or pnpm build\\n\"}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Vite also has a debug mode, which can be enabled by setting the \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"DEBUG\"}]},{\"type\":\"text\",\"value\":\" environment variable to \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"vite:*\"}]},{\"type\":\"text\",\"value\":\".\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":[\"language-bash\"],\"code\":\"# Enable Nuxt & Vite debug mode\\nDEBUG=vite:* pnpm dev # or pnpm build\\n\",\"language\":\"bash\",\"meta\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"text\",\"value\":\"# Enable Nuxt & Vite debug mode\\nDEBUG=vite:* pnpm dev # or pnpm build\\n\"}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"You can send those logs to us on our \"},{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"https://cssninja.io/faq/support\",\"rel\":[\"nofollow\"]},\"children\":[{\"type\":\"text\",\"value\":\"support portal\"}]},{\"type\":\"text\",\"value\":\" if you need help!\"}]}]},{\"type\":\"element\",\"tag\":\"doc-component-demo\",\"props\":{\"title\":\"Increase the memory limit\"},\"children\":[{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"When the documentation layer is enabled, or when building the full demo, you may need to increase the memory limit of Node.js. This is because the documentation layer uses \"},{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"https://github.com/nuxtlabs/nuxt-component-meta\",\"rel\":[\"nofollow\"]},\"children\":[{\"type\":\"text\",\"value\":\"nuxt-component-meta\"}]},{\"type\":\"text\",\"value\":\" to generate the components documentation. When building the demo, Rollup will also \"},{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"https://rollupjs.org/troubleshooting/#error-javascript-heap-out-of-memory\",\"rel\":[\"nofollow\"]},\"children\":[{\"type\":\"text\",\"value\":\"use a lot of memory\"}]},{\"type\":\"text\",\"value\":\" to bundle the project.\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":[\"language-bash\"],\"code\":\"# Increase the memory limit to 8GB\\nNODE_OPTIONS=--max-old-space-size=8192 pnpm demo:build\\n\",\"language\":\"bash\",\"meta\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"text\",\"value\":\"# Increase the memory limit to 8GB\\nNODE_OPTIONS=--max-old-space-size=8192 pnpm demo:build\\n\"}]}]}]},{\"type\":\"element\",\"tag\":\"doc-component-demo\",\"props\":{\"title\":\"Use step-by-step debugger\"},\"children\":[{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"You can use the \"},{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"https://code.visualstudio.com/docs/editor/debugging#_launch-configurations\",\"rel\":[\"nofollow\"]},\"children\":[{\"type\":\"text\",\"value\":\"VS Code debugger\"}]},{\"type\":\"text\",\"value\":\" to debug your application. This is useful when you want to inspect the state of your application at a specific time.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Tairo has a pre-configured launch configuration for VS Code. You can use it by clicking on the \\\"Run and Debug\\\" button in the sidebar, and then selecting \\\"fullstack: nuxt\\\" in the dropdown.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Then you can define breakpoints in your code, and start the debugger. The debugger will stop at the breakpoints you defined, and you will be able to inspect the state of your application.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"In addition to the breakpoints, you can also use the \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"debugger\"}]},{\"type\":\"text\",\"value\":\" keyword in your code to stop the execution of your application. This is useful when you want to inspect the state of your application at a specific time.\"}]},{\"type\":\"element\",\"tag\":\"hr\",\"props\":{\"id\":\"_1\"},\"children\":[]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Useful resources:\"}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"https://nuxt.com/docs/guide/going-further/debugging#debugging-in-your-ide\",\"rel\":[\"nofollow\"]},\"children\":[{\"type\":\"text\",\"value\":\"Read Debugging Guide on nuxt.com\"}]}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"https://vuejs.org/guide/extras/reactivity-in-depth.html#reactivity-debugging\",\"rel\":[\"nofollow\"]},\"children\":[{\"type\":\"text\",\"value\":\"Read Reactivity Debugging on vuejs.org\"}]}]}]}]},{\"type\":\"element\",\"tag\":\"doc-component-demo\",\"props\":{\"title\":\"Use Nuxt devtools\"},\"children\":[{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"You can install the \"},{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"https://devtools.nuxt.com/\",\"rel\":[\"nofollow\"]},\"children\":[{\"type\":\"text\",\"value\":\"Nuxt devtools\"}]},{\"type\":\"text\",\"value\":\" which provide a set of tools to inspect your application. This is useful when you want to inspect the state of your application at a specific time, inspect components, pages, etc.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"First you need to install the \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"@nuxt/devtools\"}]},{\"type\":\"text\",\"value\":\" package in your project:\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":[\"language-bash\"],\"code\":\"pnpm --filter tairo-quickstarter install --dev @nuxt/devtools\\n\",\"language\":\"bash\",\"meta\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"text\",\"value\":\"pnpm --filter tairo-quickstarter install --dev @nuxt/devtools\\n\"}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Then simply enable the devtools in your \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\".app/nuxt.config.ts\"}]},{\"type\":\"text\",\"value\":\" file:\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":[\"language-ts\"],\"code\":\"export default defineNuxtConfig({\\n  devtools: { enabled: true },\\n})\\n\",\"filename\":\".app/nuxt.config.ts\",\"language\":\"ts\",\"meta\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"text\",\"value\":\"export default defineNuxtConfig({\\n  devtools: { enabled: true },\\n})\\n\"}]}]},{\"type\":\"element\",\"tag\":\"hr\",\"props\":{\"id\":\"_2\"},\"children\":[]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Useful resources:\"}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"https://nuxt.com/docs/guide/going-further/debugging#debugging-in-your-ide\",\"rel\":[\"nofollow\"]},\"children\":[{\"type\":\"text\",\"value\":\"Read Debugging Guide on nuxt.com\"}]}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"https://vuejs.org/guide/extras/reactivity-in-depth.html#reactivity-debugging\",\"rel\":[\"nofollow\"]},\"children\":[{\"type\":\"text\",\"value\":\"Read Reactivity Debugging on vuejs.org\"}]}]}]}]}],\"toc\":{\"title\":\"\",\"searchDepth\":2,\"depth\":2,\"links\":[]}},\"_type\":\"markdown\",\"_id\":\"content:documentation:50.guides:20.troubleshooting.md\",\"_source\":\"content\",\"_file\":\"documentation/50.guides/20.troubleshooting.md\",\"_extension\":\"md\"},\"hash\":\"OVzyawFcGi\"}";

export { _20_troubleshooting as default };
//# sourceMappingURL=20.troubleshooting.mjs.map