<template>
  <SwSection>
    <SwContentContainer>
      <SwDisplay1 :content="title" />
      <SwBody1 :content="subtitle" />
      <div class="w-full p-6 lg:p-0 border lg:border-0 mt-8 lg:mt-10">
        <div
          class="bg-black grid grid-cols-1 border gap-px lg:grid lg:grid-cols-5"
        >
          <SwLink
            v-for="(tech, index) in _technologies"
            :key="index"
            :link="tech.link"
          >
            <SwTechnology :logo="tech.logo" :name="tech.name" />
          </SwLink>
          <div
            v-for="n in blankBoxes(_technologies, 5)"
            :key="`box-${n}`"
            class="bg-white hidden lg:block"
          ></div>
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
const data = await useSectionData(props, {
  fields: [
    "metadata.title",
    "metadata.subtitle",
    "technologies.sw_technologies_id.name",
    ...getLinkKeys("technologies.sw_technologies_id"),
    ...getMediaKeys("technologies.sw_technologies_id", "logo"),
    "button_primary.label",
    ...getLinkKeys("button_primary"),
  ],
});

const {
  metadata: { title, subtitle },
  button_primary,
} = data;
const _technologies = data.technologies.map(tech => tech.sw_technologies_id);
</script>
