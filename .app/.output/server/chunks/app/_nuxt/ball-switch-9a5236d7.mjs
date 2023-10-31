const ballSwitch = '<template>\n  <BaseFocusLoop class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4">\n    <BaseSwitchBall v-model="values.primary" label="Primary" color="primary" />\n\n    <BaseSwitchBall v-model="values.info" label="Info" color="info" />\n\n    <BaseSwitchBall v-model="values.success" label="Success" color="success" />\n\n    <BaseSwitchBall v-model="values.warning" label="Warning" color="warning" />\n\n    <BaseSwitchBall v-model="values.danger" label="Danger" color="danger" />\n  </BaseFocusLoop>\n</template>\n\n<script setup lang="ts">\nconst values = reactive({\n  primary: true,\n  info: true,\n  success: true,\n  warning: true,\n  danger: true,\n})\n<\/script>\n';

export { ballSwitch as default };
//# sourceMappingURL=ball-switch-9a5236d7.mjs.map
