<template>
  <SwSection :id="id" class="lg:flex lg:items-stretch">
    <SwContentContainer
      full-height
      class="flex-none lg:odd:border-l lg:w-1/2"
      no-top-space
    >
      <div class="flex flex-col h-full">
        <SwDisplay1 :content="title" />
        <SwBody1 :content="subtitle" />
        <SwBody2 :content="description" class="mt-4" />

        <SwLink
          v-if="button_primary"
          class="inline-block mt-auto pt-12"
          :link="link"
        >
          <SwButtonLink :label="button_primary.label" />
        </SwLink>
      </div>
    </SwContentContainer>

    <div
      class="lg:w-1/2 lg:flex-none lg:even:border-l overflow-auto border-t lg:border-t-0"
    >
      <div class="bg-gray-100 h-full">
        <div class="p-8 h-full lg:p-12">
          <div
            class="h-full grid bg-black gap-px border"
            :class="{
              'lg:grid-cols-2': _technologies.length == 2,
              'lg:grid-cols-2 lg:grid-rows-2':
                _technologies.length == 3 || _technologies.length == 4,
              'lg:grid-cols-6 lg:grid-rows-2': _technologies.length == 5,
              'lg:grid-cols-3 lg:grid-rows-2': _technologies.length == 6,
            }"
          >
            <div
              v-for="item in _technologies"
              :key="item.name"
              :class="{
                'lg:last:col-span-2': _technologies.length == 3,
                'lg:col-span-2 lg:[&:nth-child(4)]:col-span-3 lg:[&:nth-child(5)]:col-span-3':
                  _technologies.length == 5,
              }"
            >
              <SwLink v-if="item.link" :link="item.link">
                <SwTechnology :logo="item.logo" :name="item.name" />
              </SwLink>
              <SwTechnology v-else :logo="item.logo" :name="item.name" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </SwSection>
</template>

<script setup>
const props = defineProps({
  ...defaultProps(),
});

const fields = [
  "metadata.id",
  "metadata.title",
  "metadata.subtitle",
  "metadata.description",
  "technologies.sw_technologies_id.name",
  ...getLinkKeys("technologies.sw_technologies_id"),
  "technologies.sw_technologies_id.logo.id",
  "technologies.sw_technologies_id.logo.filename_disk",
  "technologies.sw_technologies_id.logo.title",
  "technologies.sw_technologies_id.id",
  "button_primary.label",
  ...getLinkKeys("button_primary"),
];

const data = await useSectionData(props, {
  fields,
});

const {
  metadata: { id, title, subtitle, description },
  button_primary,
  technologies,
} = data;

const _technologies = technologies.map(
  technology => technology.sw_technologies_id,
);
</script>
