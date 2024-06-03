<template>
  <SwSection :id="id">
    <SwContentContainer>
      <SwDisplay1 :content="title" />
      <SwBody1 :content="subtitle" />

      <SwMobileSlideContainer>
        <div
          class="flex flex-nowrap gap-4 lg:border lg:mt-10 lg:bg-black lg:gap-px lg:grid lg:grid-cols-12"
        >
          <Card
            v-for="(card, index) in _cards"
            :key="index"
            :title="card.title"
            :description="card.description"
            class="border bg-white w-4/5 snap-start flex-shrink-0 lg:w-full lg:border-none"
            :class="
              index == 3 || index == 4 ? 'lg:col-span-6' : 'lg:col-span-4'
            "
          />
        </div>
      </SwMobileSlideContainer>
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
    "cards.sw_cards_id.title",
    "cards.sw_cards_id.description",
  ],
});

const {
  id,
  metadata: { title, subtitle },
  cards,
} = data;

const _cards = cards.map((item) => item.sw_cards_id);
</script>
