<template>
  <SwSection :id="id">
    <SwContentContainer>
      <SwDisplay1 :content="title" />
      <SwBody1 :content="subtitle" />

      <div class="mt-8 border divide-y divide-black">
        <div
          v-for="(item, gIndex) in groups"
          :key="gIndex"
          class="lg:flex lg:items-stretch"
        >
          <SwDisplay3
            class="px-6 pt-6 lg:p-6 lg:border-r lg:w-[400px] lg:flex-grow-0 lg:flex-shrink-0"
            :content="item.label"
          />
          <SwBadgeGroup :value="item.items" class="px-4 pb-6 lg:p-6 mt-1" />
        </div>
      </div>
    </SwContentContainer>
  </SwSection>
</template>

<script setup>
const props = defineProps({
  ...defaultProps(),
});

const data = await useSectionData(props, {
  fields: [
    "metadata.id",
    "metadata.title",
    "metadata.subtitle",
    "technology_groups.sw_technology_groups_id.label",
    "technology_groups.sw_technology_groups_id.technologies.sw_technologies_id.name",
    "technology_groups.sw_technology_groups_id.technologies.sw_technologies_id.color_primary._100",
    "technology_groups.sw_technology_groups_id.technologies.sw_technologies_id.color_primary._900",
  ],
});

const {
  metadata: { id, title, subtitle },
  technology_groups,
} = data;

const groups = technology_groups.map(group => {
  return {
    label: group.sw_technology_groups_id.label,
    items: group.sw_technology_groups_id.technologies.map(item => {
      return {
        label: item.sw_technologies_id.name,
        color: item.sw_technologies_id.color_primary,
      };
    }),
  };
});
</script>
