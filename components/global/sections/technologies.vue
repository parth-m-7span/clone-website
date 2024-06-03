<template>
  <SwSection :id="id">
    <SwContentContainer>
      <SwDisplay1 :content="title" />
      <SwBody1 :content="subtitle" />

      <div class="mt-10 flex flex-col border lg:h-[80vh] lg:flex-row">
        <!-- MENU -->
        <div
          class="lg:scrollbar-left sticky top-0 bg-white flex overflow-auto overflow divide-x divide-black border-black lg:divide-x-0 lg:w-80 lg:flex-col lg:divide-y"
        >
          <div v-for="(technology, index) in techGroups" :key="index">
            <button
              class="h-16 px-6 whitespace-nowrap text-left w-full ring-inset ring-black hover:text-black lg:h-auto lg:py-6 lg:whitespace-normal"
              :class="{
                'border-b-0 bg-gray-100 text-black': activeTab == index,
                'border-b text-gray-600 hover:ring-3 lg:border-b-0 lg:border-r':
                  activeTab != index,
              }"
              @click="setIndex(index)"
            >
              <SwDisplay3 :content="technology.label" class="text-lg" />
            </button>
          </div>
        </div>

        <!-- CONTAINER -->
        <div class="w-full overflow-auto bg-gray-100 p-6 lg:p-12">
          <div
            class="bg-black grid grid-cols-1 border gap-px lg:grid lg:grid-cols-3"
          >
            <div
              v-for="(tech, techIndex) in techGroups[activeTab].technologies"
              :key="`${activeTab}-${techIndex}`"
            >
              <SwLink :link="tech.link">
                <SwTechnology :logo="tech.logo" :name="tech.name" />
              </SwLink>
            </div>
            <div
              v-for="n in blankBoxes(techGroups[activeTab].technologies, 3)"
              :key="`box-${n}`"
              class="bg-white hidden lg:block"
            ></div>
          </div>
        </div>
      </div>
      <SwLink
        v-if="button_primary"
        class="inline-block mt-12"
        :link="button_primary.link"
      >
        <SwButtonLink :label="button_primary.label" />
      </SwLink>
    </SwContentContainer>
  </SwSection>
</template>

<script setup>
const props = defineProps({
  ...defaultProps(),
});

const fields = [
  "metadata.title",
  "metadata.subtitle",
  "metadata.id",
  "technology_groups.sw_technology_groups_id.id",
  "technology_groups.sw_technology_groups_id.label",
  "technology_groups.sw_technology_groups_id.technologies.sw_technologies_id.name",
  // "technology_groups.sw_technology_groups_id.technologies.sw_technologies_id.logo.id",
  // "technology_groups.sw_technology_groups_id.technologies.sw_technologies_id.logo.filename_disk",
  // "technology_groups.sw_technology_groups_id.technologies.sw_technologies_id.logo.title",
  ...getMediaKeys(
    "technology_groups.sw_technology_groups_id.technologies.sw_technologies_id",
    "logo",
  ),
  ...getLinkKeys(
    "technology_groups.sw_technology_groups_id.technologies.sw_technologies_id",
  ),
  "button_primary.label",
  ...getLinkKeys("button_primary"),
];

const data = await useSectionData(props, {
  fields,
});

const {
  metadata: { title, subtitle, id },
  button_primary,
  technology_groups,
} = data;

const techGroups = technology_groups.map(item => {
  return {
    ...item.sw_technology_groups_id,
    technologies: item.sw_technology_groups_id.technologies.map(
      item => item.sw_technologies_id,
    ),
  };
});

const activeTab = ref(0);
const setIndex = id => {
  activeTab.value = id;
};
</script>
