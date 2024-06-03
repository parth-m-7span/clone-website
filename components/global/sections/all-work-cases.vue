<template>
  <SwSection>
    <SwContentContainer>
      <SwDisplay1 :content="data.title" />
      <SwBody1 :content="data.subtitle" />

      <template
        v-for="(project, index) in data.projects"
        :key="`project-${index}`"
      >
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

          <div
            class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:border-x lg:border-b lg:m-0 lg:p-12"
          >
            <!-- LEFT -->
            <div>
              <SwLinkArrow>
                <SwBody1
                  weight="bold"
                  :content="project.about.metadata.title"
                />
              </SwLinkArrow>
              <SwBody2 :content="project.about.metadata.subtitle" />
            </div>

            <!-- RIGHT -->
            <SwBadgeGroup
              class="mt-4 lg:mt-0 self-center"
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
      </template>
      <div v-if="data.isMore" class="text-center mt-8">
        <SwButtonPrimary
          class="w-full md:w-auto"
          label="Load More"
          @click="limit = limit + INTERVAL"
        />
      </div>
    </SwContentContainer>
  </SwSection>
</template>

<script setup>
const PROJECT_COUNT = 3;
const limit = ref(PROJECT_COUNT);
const INTERVAL = 3;

const { getItems } = useDirectusItems();

const props = defineProps({
  ...defaultProps(),
});
const { data } = await useAsyncData(
  "case-study",
  () => {
    return new Promise(async resolve => {
      const {
        metadata: { title, subtitle },
      } = await useSectionData(props, {
        fields: ["metadata.title", "metadata.subtitle"],
      });

      const _total = await getItems({
        collection: "sw_projects",
        params: {
          filter: {
            ...getPublishedFilter(),
          },
          aggregate: { count: "*" },
        },
      });
      const total = _total[0].count;

      const projects = await getItems({
        collection: "sw_projects",
        params: {
          fields: [...getProjectKeys()],
          limit: limit.value,
          filter: {
            ...getPublishedFilter(),
          },
        },
      });

      // eslint-disable-next-line no-unneeded-ternary
      const moreProjects = total === projects.length ? false : true;

      const _projects = projects.map(project => {
        const _media = [];
        if (project.screenshots) {
          project.screenshots.cards.forEach(card => {
            _media.push({
              ...card.sw_cards_id.media,
            });
          });
        }

        return {
          ...project,
          media: _media,
        };
      });

      resolve({
        title,
        subtitle,
        projects: _projects,
        isMore: moreProjects,
      });
    });
  },
  {
    watch: [limit],
  },
);
</script>
