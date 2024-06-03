<template>
  <SwSection>
    <SwContentContainer>
      <SwDisplay1 :content="title" />
      <SwBody1 :content="subtitle" />

      <div class="border mt-8">
        <div class="lg:flex">
          <SwMediaContainer
            :key="`unicorn-${project.id}`"
            class="aspect-4/3 lg:w-1/2 lg:border-r xl:w-2/5"
            size="md"
          >
            <SwImage
              :value="
                project.photographs.length ? project.photographs[0] : null
              "
              width="400"
              height="400"
              sizes="sm:100vw xl:40vw"
              class="w-full h-full object-cover"
              alt="image"
            />
          </SwMediaContainer>
          <div class="flex flex-col border-t flex-1 lg:border-t-0">
            <div class="p-8 lg:p-12 flex-grow">
              <div class="h-full">
                <SwImage
                  :key="`unicorn-logo-${project.id}`"
                  width="64"
                  height="64"
                  :value="project.about.icon"
                  class="h-16 w-auto max-w-full"
                />
                <SwBody2
                  class="mt-8"
                  :content="project.about.metadata.description"
                />
              </div>
            </div>
            <div>
              <SlideNavigation
                class="border-t"
                :button-label="button_primary.label"
                :button-link="button_primary.link"
                @prev="prev"
                @next="next"
              />
            </div>
          </div>
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
    "metadata.title",
    "metadata.subtitle",
    "projects.sw_projects_id.about.metadata.title",
    "projects.sw_projects_id.about.metadata.subtitle",
    "projects.sw_projects_id.about.metadata.description",
    "projects.sw_projects_id.about.icon.id",
    "projects.sw_projects_id.about.icon.filename_disk",
    "projects.sw_projects_id.about.icon.width",
    "projects.sw_projects_id.about.icon.height",
    "projects.sw_projects_id.about.icon.title",
    "button_primary.label",
    ...getLinkKeys("button_primary"),
    "projects.sw_projects_id.id",
    ...getMediaKeys("projects.sw_projects_id.photographs.cards.sw_cards_id"),
  ],
});

const {
  metadata: { title, subtitle },
  projects,
  button_primary,
} = data;

const { serialized: _projects } = useProject(projects);
const { active: project, next, prev } = useSlider(_projects);
</script>
