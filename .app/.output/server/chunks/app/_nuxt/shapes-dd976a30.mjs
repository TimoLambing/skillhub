const shapes = '<template>\n  <div class="grid gap-6 md:max-w-lg md:grid-cols-2">\n    <BaseInputFile v-model="first" shape="straight" label="Straight input" />\n\n    <BaseInputFile v-model="second" shape="rounded" label="Rounded input" />\n\n    <BaseInputFile v-model="third" shape="curved" label="Curved input" />\n\n    <BaseInputFile v-model="fourth" shape="full" label="Full input" />\n  </div>\n</template>\n\n<script setup lang="ts">\nconst first = ref<FileList | null>(null)\nconst second = ref<FileList | null>(null)\nconst third = ref<FileList | null>(null)\nconst fourth = ref<FileList | null>(null)\n<\/script>\n';

export { shapes as default };
//# sourceMappingURL=shapes-dd976a30.mjs.map
