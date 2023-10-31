const rounded = '<template>\n  <BaseFocusLoop class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4">\n    <BaseCheckbox v-model="options.first" value="demo-rounded-1" label="Default" shape="rounded" />\n\n    <BaseCheckbox\n      v-model="options.second"\n      value="demo-rounded-2"\n      label="Muted"\n      shape="rounded"\n      color="muted"\n    />\n\n    <BaseCheckbox\n      v-model="options.third"\n      value="demo-rounded-3"\n      label="Primary"\n      shape="rounded"\n      color="primary"\n    />\n\n    <BaseCheckbox\n      v-model="options.fourth"\n      value="demo-rounded-4"\n      label="Info"\n      shape="rounded"\n      color="info"\n    />\n\n    <BaseCheckbox\n      v-model="options.fifth"\n      value="demo-rounded-5"\n      label="Success"\n      shape="rounded"\n      color="success"\n    />\n\n    <BaseCheckbox\n      v-model="options.sixth"\n      value="demo-rounded-6"\n      label="Warning"\n      shape="rounded"\n      color="warning"\n    />\n\n    <BaseCheckbox\n      v-model="options.seventh"\n      value="demo-rounded-2"\n      label="Danger"\n      shape="rounded"\n      color="danger"\n    />\n  </BaseFocusLoop>\n</template>\n\n<script setup lang="ts">\nconst options = reactive({\n  first: true,\n  second: true,\n  third: true,\n  fourth: true,\n  fifth: true,\n  sixth: true,\n  seventh: true,\n})\n<\/script>\n';

export { rounded as default };
//# sourceMappingURL=rounded-797a4142.mjs.map
