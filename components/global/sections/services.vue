<template>
  <SwSection :id="id">
    <SwContentContainer>
      <SwDisplay1 :content="title" />
      <SwBody1 :content="subtitle" />

      <SwMobileSlideContainer>
        <div
          class="flex gap-4 lg:bg-black lg:border lg:grid lg:gap-px lg:grid-cols-3 lg:mt-10"
        >
          <div
            v-for="(card, index) in _cards"
            :key="index"
            class="flex-none w-3/4 border p-8 hover:shadow-xl hover:relative lg:flex lg:w-full lg:border-none lg:flex-col lg:justify-start lg:gap-2 lg:bg-white xl:p-10"
          >
            <SwDisplay2 :content="card.title" />
            <SwBody2
              :content="card.description"
              class="text-gray-600 pl-6 [&_ul]:list-disc"
            />
          </div>
          <div
            v-for="n in blankBoxes(_cards, 3)"
            :key="`box-${n}`"
            class="bg-white hidden lg:block"
          ></div>
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
    "metadata.subtitle",
    "metadata.id",
    "cards.sw_cards_id.title",
    "cards.sw_cards_id.description",
    "button_primary.label",
    ...getLinkKeys("button_primary"),
  ],
});

const {
  metadata: { title, subtitle, id },
  cards,
  button_primary,
} = data;

const _cards = cards.map(item => item.sw_cards_id);
</script>
