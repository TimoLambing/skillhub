const rounded = '<template>\n  <BasePagination\n    :item-per-page="8"\n    :total-items="512"\n    :current-page="currentPage"\n    :max-links-displayed="5"\n    shape="rounded"\n  />\n</template>\n\n<script setup lang="ts">\nconst route = useRoute()\nconst currentPage = computed(() => {\n  try {\n    return Number.parseInt(route.query.page as string) || 1\n  } catch {}\n  return 1\n})\n<\/script>\n';

export { rounded as default };
//# sourceMappingURL=rounded-012cf10f.mjs.map
