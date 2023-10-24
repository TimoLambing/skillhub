const e=`<template>
  <div class="flex items-end">
    <BaseDropdown flavor="button" label="Dropdown" orientation="start" header-label="My Team">
      <BaseDropdownItem to="#" title="Lana Jensen" text="Software Engineer">
        <template #start>
          <BaseAvatar src="/img/avatars/4.svg" size="xs" />
        </template>
      </BaseDropdownItem>

      <BaseDropdownItem to="#" title="Shawn Miller" text="Product Manager">
        <template #start>
          <BaseAvatar src="/img/avatars/3.svg" size="xs" />
        </template>
      </BaseDropdownItem>

      <BaseDropdownItem to="#" title="John Marynski" text="Sales Manager">
        <template #start>
          <BaseAvatar src="/img/avatars/18.svg" size="xs" />
        </template>
      </BaseDropdownItem>

      <BaseDropdownDivider />

      <BaseDropdownItem to="#" title="Garry Porter" text="CEO - Founder">
        <template #start>
          <BaseAvatar src="/img/avatars/6.svg" size="xs" />
        </template>
      </BaseDropdownItem>
    </BaseDropdown>
  </div>
</template>
`;export{e as default};
