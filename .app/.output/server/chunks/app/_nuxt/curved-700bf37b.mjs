const curved = '<template>\n  <BasePagination\n    :item-per-page="8"\n    :total-items="512"\n    :current-page="currentPage"\n    :max-links-displayed="5"\n    shape="curved"\n  />\n</template>\n\n<script setup lang="ts">\nconst route = useRoute()\nconst currentPage = computed(() => {\n  try {\n    return Number.parseInt(route.query.page as string) || 1\n  } catch {}\n  return 1\n})\n<\/script>\n';

export { curved as default };
//# sourceMappingURL=curved-700bf37b.mjs.map
