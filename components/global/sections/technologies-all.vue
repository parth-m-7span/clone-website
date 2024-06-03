<template>
  <SwSection :id="id">
    <div class="flex flex-col border lg:flex-row">
      <!-- MENU -->
      <div
        class="lg:scrollbar-left sticky top-0 lg:h-screen bg-white flex overflow-auto divide-x divide-black border-black lg:divide-x-0 lg:flex-col lg:divide-y"
      >
        <div v-for="(technology, index) in techGroups" :key="index">
          <a :href="`#${technology.id}`">
            <div
              class="p-6 xl:pl-20 whitespace-nowrap text-left w-full ring-inset ring-black hover:text-black lg:whitespace-normal"
              :class="{
                'border-b-0 bg-gray-100 text-black': activeTab == technology.id,
                'border-b text-gray-600 hover:ring-3 lg:border-b-0 lg:border-r':
                  activeTab != technology.id,
              }"
            >
              <SwDisplay3 :content="technology.label" class="text-lg" />
            </div>
          </a>
        </div>
      </div>

      <!-- CONTAINER -->
      <div class="lg:max-h-full overflow-y-auto w-full">
        <div
          v-for="(technology, index) in techGroups"
          :id="technology.id"
          ref="technologyRef"
          :key="index"
          v-element-visibility="
            $event => onElementVisibility($event, technology.id)
          "
          class="p-8 lg:p-20 border-b bg-gray-100"
        >
          <SwDisplay2 :content="technology.label" class="mb-6"></SwDisplay2>
          <div
            class="bg-black grid grid-cols-1 border gap-px lg:grid lg:grid-cols-4"
          >
            <div
              v-for="(tech, techIndex) in technology.technologies"
              :key="techIndex"
            >
              <SwLink :link="tech.link">
                <SwTechnology :logo="tech.logo" :name="tech.name" />
              </SwLink>
            </div>
            <div
              v-for="n in blankBoxes(technology.technologies, 4)"
              :key="`box-${n}`"
              class="bg-white hidden lg:block"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </SwSection>
</template>

<script setup>
import { vElementVisibility } from "@vueuse/components";
const props = defineProps({
  ...defaultProps(),
});
const activeTab = ref(null);
const onElementVisibility = (isVisible, id) => {
  if (isVisible) activeTab.value = id;
};

const fields = [
  "metadata.id",
  "technology_groups.sw_technology_groups_id.id",
  "technology_groups.sw_technology_groups_id.label",
  "technology_groups.sw_technology_groups_id.technologies.sw_technologies_id.name",
  ...getMediaKeys(
    "technology_groups.sw_technology_groups_id.technologies.sw_technologies_id",
    "logo",
  ),
  ...getLinkKeys(
    "technology_groups.sw_technology_groups_id.technologies.sw_technologies_id",
  ),
];

const data = await useSectionData(props, {
  fields,
});

const {
  metadata: { id },
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
</script>

<style scoped></style>
