const thinSwitch = '<template>\n  <BaseFocusLoop class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4">\n    <BaseSwitchThin v-model="values.primary" label="Primary" color="primary" />\n\n    <BaseSwitchThin v-model="values.info" label="Info" color="info" />\n\n    <BaseSwitchThin v-model="values.success" label="Success" color="success" />\n\n    <BaseSwitchThin v-model="values.warning" label="Warning" color="warning" />\n\n    <BaseSwitchThin v-model="values.danger" label="Danger" color="danger" />\n  </BaseFocusLoop>\n</template>\n\n<script setup lang="ts">\nconst values = reactive({\n  primary: true,\n  info: true,\n  success: true,\n  warning: true,\n  danger: true,\n})\n<\/script>\n';

export { thinSwitch as default };
//# sourceMappingURL=thin-switch-c77f7002.mjs.map
