<template>
  <SwSection :id="id">
    <SwContentContainer>
      <SwDisplay1 :content="title" />
      <SwBody1 :content="subtitle" />
      <SwLink class="group" :link="project?.link">
        <SwMobileSlideContainer>
          <div
            class="flex items-center flex-nowrap lg:grid lg:grid-cols-3 lg:border lg:divide-x lg:divide-black"
          >
            <template v-if="project.media">
              <SwMediaContainer
                v-for="media in project.media.slice(0, 3)"
                :key="`project-${media.id}`"
                size="md"
                class="flex-none w-3/4 border -ml-px lg:m-0 lg:w-full lg:border-0"
              >
                <div class="aspect-4/3">
                  <SwImage
                    width="750"
                    height="600"
                    sizes="sm:240px md:350px lg:430px"
                    :value="media"
                    class="w-full h-full"
                  />
                </div>
              </SwMediaContainer>
            </template>
          </div>
        </SwMobileSlideContainer>

        <!-- Provided static height for less whitespace and same height of the section irrespective of tags -->
        <div
          class="mt-8 lg:min-h-[233px] xl:min-h-[190px] lg:grid lg:grid-cols-2 lg:gap-8 lg:border-x lg:border-b lg:m-0 lg:p-12"
        >
          <!-- LEFT -->
          <div>
            <SwLinkArrow>
              <SwBody1 weight="bold" :content="project.about.metadata.title" />
            </SwLinkArrow>
            <SwBody2 :content="project.about.metadata.subtitle" />
          </div>

          <!-- RIGHT -->
          <SwBadgeGroup
            class="mt-4 lg:mt-0 self-start"
            :value="
              project.technologies.technologies.map(technology => {
                return {
                  label: technology.sw_technologies_id.name,
                  color: technology.sw_technologies_id.color_primary,
                };
              })
            "
          />
        </div>
      </SwLink>
      <SlideNavigation
        v-if="projects.length > 1"
        class="border-t -mx-8 -mb-8 mt-8 lg:m-0 lg:border lg:border-t-0"
        :button-label="button_primary.label"
        :button-link="button_primary.link"
        @prev="prev"
        @next="next"
      />
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
    "metadata.id",
    "button_primary.label",
    "button_primary.link.*.*",
    "projects.sw_projects_id.about.metadata.title",
    "projects.sw_projects_id.about.metadata.description",
    "projects.sw_projects_id.about.metadata.subtitle",
    ...getLinkKeys("projects.sw_projects_id.about.button_primary"),
    ...getLinkKeys("projects.sw_projects_id"),
    "projects.sw_projects_id.technologies.technologies.sw_technologies_id.name",
    "projects.sw_projects_id.technologies.technologies.sw_technologies_id.color_primary.*",
    ...getMediaKeys("projects.sw_projects_id.screenshots.cards.sw_cards_id"),
  ],
});

const {
  metadata: { title, subtitle, id },
  button_primary,
  projects,
} = data;

const { serialized: _projects } = useProject(projects);
const { active: project, next, prev } = useSlider(_projects);
</script>
