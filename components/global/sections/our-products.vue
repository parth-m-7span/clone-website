<template>
  <SwSection :id="id">
    <SwContentContainer>
      <SwDisplay1 :content="title" />
      <SwBody1 :content="subtitle" />

      <SwMobileSlideContainer>
        <div
          class="flex flex-nowrap gap-4 lg:grid lg:grid-cols-3 lg:gap-6 lg:mt-10"
        >
          <!-- ITEM -->

          <div
            v-for="(project, index) in _projects"
            :key="index"
            class="group border hover:shadow-xl flex-none w-3/4 md:w-[40%] lg:w-full"
          >
            <SwLink :link="project.about?.button_primary?.link">
              <SwMediaContainer size="md">
                <SwImage
                  height="250"
                  width="300"
                  sizes="sm:100vw xl:33vw"
                  :value="project.media ? project.media[0] : null"
                  class="aspect-4/3 w-full object-cover"
                />
              </SwMediaContainer>
              <div class="border-t p-6 lg:p-10">
                <SwLinkArrow v-if="project.about?.button_primary?.link">
                  <SwBody1
                    weight="bold"
                    :content="project.about.metadata.title"
                  />
                </SwLinkArrow>
                <SwBody1
                  v-else
                  weight="bold"
                  :content="project.about.metadata.title"
                />
                <SwBody2
                  class="mt-2"
                  :content="project.about.metadata.subtitle"
                />
              </div>
            </SwLink>
          </div>
        </div>
      </SwMobileSlideContainer>

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
    "id",
    "metadata.title",
    "metadata.subtitle",
    "projects.sw_projects_id.about.metadata.title",
    "projects.sw_projects_id.about.metadata.subtitle",
    ...getMediaKeys("projects.sw_projects_id.screenshots.cards.sw_cards_id"),
    ...getLinkKeys("projects.sw_projects_id.about.button_primary"),
    "button_primary.label",
    ...getLinkKeys("button_primary"),
  ],
});

const {
  id,
  metadata: { title, subtitle },
  projects,
  button_primary,
} = data;

const { serialized: _projects } = useProject(projects);
</script>
