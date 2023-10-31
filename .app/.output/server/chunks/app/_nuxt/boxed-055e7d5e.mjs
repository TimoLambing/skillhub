const boxed = `<template>
  <div class="w-full max-w-sm">
    <BaseTabs
      type="box"
      model-value="team"
      :tabs="[
        {
          label: 'Team',
          value: 'team',
        },
        {
          label: 'Projects',
          value: 'projects',
        },
        {
          label: 'Tasks',
          value: 'tasks',
        },
      ]"
    >
      <template #tab="{ activeValue }">
        <p v-if="activeValue === 'team'" class="font-sans text-sm text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid
          tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times.
        </p>

        <p
          v-else-if="activeValue === 'projects'"
          class="font-sans text-sm text-gray-500 dark:text-gray-400"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid
          tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime
          contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.
        </p>

        <p
          v-else-if="activeValue === 'tasks'"
          class="font-sans text-sm text-gray-500 dark:text-gray-400"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid
          tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime
          contra.
        </p>
      </template>
    </BaseTabs>
  </div>
</template>
`;

export { boxed as default };
//# sourceMappingURL=boxed-055e7d5e.mjs.map