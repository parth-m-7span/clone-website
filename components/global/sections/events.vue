<template>
  <SwSection :id="id">
    <SwContentContainer>
      <SwDisplay1 :content="title" />
      <SwBody1 :content="subtitle" />

      <SwMobileSlideContainer class="md:pr-8 lg:pr-0">
        <div
          class="flex flex-nowrap gap-4 lg:bg-black lg:mt-10 lg:grid lg:gap-px lg:border xl:grid-cols-2 2xl:mx-auto"
        >
          <div
            v-for="(event, index) in _cards"
            :key="index"
            class="flex min-w-[90%] items-stretch bg-white"
          >
            <div
              class="flex flex-col divide-y divide-black border lg:flex-row lg:divide-x lg:divide-y-0 lg:border-0"
            >
              <div class="w-full bg-gray-100 p-4 lg:w-2/5 xl:p-6">
                <SwImage
                  height="200"
                  width="200"
                  :value="event.media"
                  class="aspect-square h-full w-full border object-contain"
                  :alt="event.name"
                />
              </div>
              <div class="w-full space-y-2 p-4 lg:w-3/5 xl:p-6">
                <SwDisplay2 :content="event.title"></SwDisplay2>
                <SwBody2 :content="event.description" />
              </div>
            </div>
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
    "metadata.title",
    "metadata.id",
    "metadata.subtitle",
    "cards.sw_cards_id.title",
    "cards.sw_cards_id.description",
    ...getMediaKeys("cards.sw_cards_id"),
  ],
});

const {
  metadata: { title, subtitle, id },
  cards,
  button_primary,
} = data;

const _cards = cards.map(item => item.sw_cards_id);
</script>
