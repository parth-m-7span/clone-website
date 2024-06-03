<template>
  <SwSection :id="id">
    <div class="flex overflow-auto whitespace-nowrap lg:pl-8">
      <SwNavItem
        v-for="(menu, index) in _nav"
        :key="index"
        :link="menu.link"
        :label="menu.label"
        :icon="menu.icon?.value"
      >
      </SwNavItem>
    </div>
  </SwSection>
</template>

<script setup>
const props = defineProps({
  ...defaultProps(),
});

const fields = [
  "id",
  "nav.sw_buttons_id.label",
  "nav.sw_buttons_id.icon.value",
  ...getLinkKeys("nav.sw_buttons_id"),
];

const data = await useSectionData(props, {
  fields,
});

const { id, nav } = data;

const _nav = nav.map(nav => nav.sw_buttons_id);
</script>
