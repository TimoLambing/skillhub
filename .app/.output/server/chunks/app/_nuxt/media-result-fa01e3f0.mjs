const mediaResult = `<template>
  <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
    <BaseAutocomplete
      v-model="value"
      :items="people"
      :display-value="(item: Person) => item.name"
      :filter-items="filterItems"
      icon="ph:users-three"
      placeholder="Search..."
      label="Assignee"
      clearable
    />
  </div>
</template>

<script setup lang="ts">
interface Person {
  id: number
  name: string
  text: string
  media: string
}

const people = ref<Person[]>([
  {
    id: 1,
    name: 'Clarissa Perez',
    text: 'Sales Manager',
    media: '/img/avatars/19.svg',
  },
  {
    id: 2,
    name: 'Aaron Splatter',
    text: 'Project Manager',
    media: '/img/avatars/16.svg',
  },
  {
    id: 3,
    name: 'Mike Miller',
    text: 'UI/UX Designer',
    media: '/img/avatars/3.svg',
  },
  {
    id: 4,
    name: 'Benedict Kessler',
    text: 'Mobile Developer',
    media: '/img/avatars/22.svg',
  },
  {
    id: 5,
    name: 'Maya Rosselini',
    text: 'Product Manager',
    media: '/img/avatars/2.svg',
  },
])
const value = ref<Person>()

function filterItems(query?: string, items?: any[]) {
  if (!query || !items) {
    return items ?? []
  }

  // search by name or text
  return items.filter((item) => {
    const nameMatches = item?.name?.toLowerCase().includes(query.toLowerCase())
    const textMatches = item?.text?.toLowerCase().includes(query.toLowerCase())
    return nameMatches || textMatches
  })
}
<\/script>
`;

export { mediaResult as default };
//# sourceMappingURL=media-result-fa01e3f0.mjs.map
