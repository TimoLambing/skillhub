// ROLLUP_NO_REPLACE 
 const _5_firstApiRoute = "{\"parsed\":{\"_path\":\"/documentation/setup/first-api-route\",\"_dir\":\"setup\",\"_draft\":false,\"_partial\":false,\"_locale\":\"\",\"title\":\"Your first API route\",\"description\":\"\",\"body\":{\"type\":\"root\",\"children\":[{\"type\":\"element\",\"tag\":\"doc-component-demo\",\"props\":{\"title\":\"Define your first event handler\"},\"children\":[{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Similar to pages, you can define event handlers in your \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\".app/server/api\"}]},{\"type\":\"text\",\"value\":\" directory. These event handlers are automatically registered as API routes by Nitro.\"}]},{\"type\":\"element\",\"tag\":\"doc-heading\",\"props\":{\"label\":\"Hello world route\"},\"children\":[]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"We will create a \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"/api/hello\"}]},{\"type\":\"text\",\"value\":\" route that will return a greeting message.\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":[\"language-ts\"],\"code\":\"export default defineEventHandler((event) => {\\n  // get the query parameters from the event\\n  const query = getQuery(event)\\n  // extract the \\\"from\\\" query parameter\\n  const from = query.from || 'tairo'\\n\\n  return `Hello ${from}!`\\n})\\n\",\"filename\":\".app/server/api/hello.ts\",\"language\":\"ts\",\"meta\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"text\",\"value\":\"export default defineEventHandler((event) => {\\n  // get the query parameters from the event\\n  const query = getQuery(event)\\n  // extract the \\\"from\\\" query parameter\\n  const from = query.from || 'tairo'\\n\\n  return `Hello ${from}!`\\n})\\n\"}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"You can test your API route by visiting \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"http://localhost:3000/api/hello?from=world\"}]},{\"type\":\"text\",\"value\":\" in your browser or by using \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"curl\"}]},{\"type\":\"text\",\"value\":\":\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":[\"language-bash\"],\"code\":\"curl -i http://localhost:3000/api/hello?from=world\\n# Access-Control-Allow-Origin: *\\n# content-type: text/html\\n# date: Wed, 19 Apr 2023 18:03:31 GMT\\n# connection: close\\n# content-length: 12\\n#\\n# Hello world!\\n\",\"language\":\"bash\",\"meta\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"text\",\"value\":\"curl -i http://localhost:3000/api/hello?from=world\\n# Access-Control-Allow-Origin: *\\n# content-type: text/html\\n# date: Wed, 19 Apr 2023 18:03:31 GMT\\n# connection: close\\n# content-length: 12\\n#\\n# Hello world!\\n\"}]}]},{\"type\":\"element\",\"tag\":\"doc-heading\",\"props\":{\"label\":\"Dynamic routes\"},\"children\":[]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"You can also define dynamic routes by using the \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"[paramName]\"}]},{\"type\":\"text\",\"value\":\" syntax in either files or directories. For example, if you want to create a route that will have a dynamic \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"id\"}]},{\"type\":\"text\",\"value\":\" parameter, you can create a file named \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\".app/server/api/product/[id].ts\"}]},{\"type\":\"text\",\"value\":\" or a directory named \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"[id]\"}]},{\"type\":\"text\",\"value\":\" like \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\".app/server/api/product/[id]/index.ts\"}]},{\"type\":\"text\",\"value\":\".\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"In addition to parameters, you can add suffixes to your dynamic routes. For example, you can create a route that will only accept \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"POST\"}]},{\"type\":\"text\",\"value\":\" requests by creating a file ending with \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\".post.ts\"}]},{\"type\":\"text\",\"value\":\".\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":[\"language-ts\"],\"code\":\"export default defineEventHandler(await (event) => {\\n  // get the id parameters from the context\\n  const { id } = event.context.params\\n\\n  // read and parse the request body\\n  const body = await readBody(event)\\n\\n  // add the product to the cart (this is just an example)\\n  const cartItem = await addToCart(id, body.quantity)\\n\\n  // perform other actions ...\\n\\n  // returning an object will automatically set \\n  // the content-type: application/json header\\n  return cartItem\\n})\\n\",\"filename\":\".app/server/api/add-to-cart/[id\",\"language\":\"ts\",\"meta\":\".post.ts]\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"text\",\"value\":\"export default defineEventHandler(await (event) => {\\n  // get the id parameters from the context\\n  const { id } = event.context.params\\n\\n  // read and parse the request body\\n  const body = await readBody(event)\\n\\n  // add the product to the cart (this is just an example)\\n  const cartItem = await addToCart(id, body.quantity)\\n\\n  // perform other actions ...\\n\\n  // returning an object will automatically set \\n  // the content-type: application/json header\\n  return cartItem\\n})\\n\"}]}]},{\"type\":\"element\",\"tag\":\"hr\",\"props\":{\"id\":\"\"},\"children\":[]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Useful resources:\"}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"https://nuxt.com/docs/guide/directory-structure/server\",\"rel\":[\"nofollow\"]},\"children\":[{\"type\":\"text\",\"value\":\"Learn about server directory on nuxt.com\"}]}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"https://nitro.unjs.io/guide/routing\",\"rel\":[\"nofollow\"]},\"children\":[{\"type\":\"text\",\"value\":\"Learn about API Routes on nitro.unjs.io\"}]}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"https://github.com/unjs/h3#utilities\",\"rel\":[\"nofollow\"]},\"children\":[{\"type\":\"text\",\"value\":\"Discover h3 server utils on github.com\"}]}]}]}]},{\"type\":\"element\",\"tag\":\"doc-component-demo\",\"props\":{\"title\":\"Connect your data\",\":code\":\"false\"},\"children\":[{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Now that you have a page and an API route, you can connect them together. We will request the hello API route from the page created \"},{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"/documentation/setup/first-page\"},\"children\":[{\"type\":\"text\",\"value\":\"in the previous section\"}]},{\"type\":\"text\",\"value\":\" and display the result.\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":[\"language-vue\"],\"code\":\"<script setup lang=\\\"ts\\\">\\n// definePageMeta ...\\n\\n// create a reactive input value\\nconst input = ref('')\\n\\n// create a computed object that will be updated\\n// every time the input value changes\\nconst query = computed(() => ({ from: input.value }))\\n\\n// call our API route, it will be re-fetched\\n// every time the query object changes\\n// note that data type is detected automatically!\\nconst { data } = useFetch('/api/hello', {\\n  query,\\n})\\n</script>\\n\\n<template>\\n  <div class=\\\"max-w-lg\\\">\\n    <BaseCard class=\\\"p-6\\\">\\n      <!-- reactive input -->\\n      <BaseInput \\n        label=\\\"Your name\\\" \\n        v-model=\\\"input\\\"\\n      />\\n\\n      <!-- display the result -->\\n      <BaseParagraph class=\\\"mt-4 line-clamp-1 max-w-sm\\\">\\n        {{ data }}\\n      </BaseParagraph>\\n    </BaseCard>\\n  </div>\\n</template>\\n\",\"filename\":\".app/pages/index.vue\",\"language\":\"vue\",\"meta\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"text\",\"value\":\"<script setup lang=\\\"ts\\\">\\n// definePageMeta ...\\n\\n// create a reactive input value\\nconst input = ref('')\\n\\n// create a computed object that will be updated\\n// every time the input value changes\\nconst query = computed(() => ({ from: input.value }))\\n\\n// call our API route, it will be re-fetched\\n// every time the query object changes\\n// note that data type is detected automatically!\\nconst { data } = useFetch('/api/hello', {\\n  query,\\n})\\n</script>\\n\\n<template>\\n  <div class=\\\"max-w-lg\\\">\\n    <BaseCard class=\\\"p-6\\\">\\n      <!-- reactive input -->\\n      <BaseInput \\n        label=\\\"Your name\\\" \\n        v-model=\\\"input\\\"\\n      />\\n\\n      <!-- display the result -->\\n      <BaseParagraph class=\\\"mt-4 line-clamp-1 max-w-sm\\\">\\n        {{ data }}\\n      </BaseParagraph>\\n    </BaseCard>\\n  </div>\\n</template>\\n\"}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"We've seen that using the \"},{\"type\":\"element\",\"tag\":\"doc-linker\",\"props\":{\"to\":\"BaseInput\"},\"children\":[]},{\"type\":\"text\",\"value\":\", \"},{\"type\":\"element\",\"tag\":\"doc-linker\",\"props\":{\"to\":\"BaseCard\"},\"children\":[]},{\"type\":\"text\",\"value\":\" and \"},{\"type\":\"element\",\"tag\":\"doc-linker\",\"props\":{\"to\":\"BaseParagraph\"},\"children\":[]},{\"type\":\"text\",\"value\":\" components was very easy. You may also want to take a look at how we do \"},{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"/documentation/guides/form-validation\"},\"children\":[{\"type\":\"text\",\"value\":\"form validation\"}]},{\"type\":\"text\",\"value\":\" and explore form pages from the demo to learn more about how to build forms with Tairo.\"}]},{\"type\":\"element\",\"tag\":\"hr\",\"props\":{\"id\":\"_1\"},\"children\":[]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Useful resources:\"}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"https://nuxt.com/docs/getting-started/data-fetching\",\"rel\":[\"nofollow\"]},\"children\":[{\"type\":\"text\",\"value\":\"Read data fetching guide on nuxt.com\"}]}]}]}]},{\"type\":\"element\",\"tag\":\"doc-nav\",\"props\":{\"next\":\"/documentation/setup/add-a-layout\",\"prev\":\"/documentation/setup/first-page\"},\"children\":[]}],\"toc\":{\"title\":\"\",\"searchDepth\":2,\"depth\":2,\"links\":[]}},\"_type\":\"markdown\",\"_id\":\"content:documentation:10.setup:5.first-api-route.md\",\"_source\":\"content\",\"_file\":\"documentation/10.setup/5.first-api-route.md\",\"_extension\":\"md\"},\"hash\":\"hueKW6n9Mk\"}";

export { _5_firstApiRoute as default };
//# sourceMappingURL=5.first-api-route.mjs.map