<template>
  <SwSection :id="id">
    <SwContentContainer>
      <SwDisplay1 :content="title" />
      <SwBody1 :content="subtitle" />
      <SwBody2 v-if="description" :content="description" class="mt-6" />

      <SwMobileSlideContainer class="lg:mt-10">
        <div
          class="flex flex-nowrap gap-4 lg:border lg:bg-black lg:gap-px lg:grid lg:grid-cols-2"
        >
          <Card
            v-for="(service, index) in cards"
            :key="index"
            :title="service.sw_cards_id.title"
            :description="service.sw_cards_id.description"
            class="border snap-start bg-white w-4/5 flex-shrink-0 flex-grow lg:w-full lg:border-none"
            :class="{ 'lg:col-span-2': index == 0 && isOdd }"
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
    "metadata.id",
    "metadata.title",
    "metadata.subtitle",
    "metadata.description",
    "cards.sw_cards_id.title",
    "cards.sw_cards_id.description",
  ],
});

const {
  metadata: { id, title, subtitle, description },
  cards,
} = data;

const isOdd = computed(() => {
  return cards.length % 2 !== 0;
});
</script>

<style>
@media (min-width: 1024px) {
  .full-stack--cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .full-stack--cards .cards-odd:first-child {
    grid-column-start: 1;
    grid-column-end: 3;
    border-left: none !important;
  }

  .full-stack--cards .cards-even:nth-child(2) {
    border-top: none !important;
  }

  .full-stack--cards .cards-even:nth-child(3) {
    border-left: none !important;
  }

  .full-stack--cards .cards-odd:nth-child(odd),
  .full-stack--cards .cards-even:nth-child(even) {
    border-left: 1px solid black;
  }
}
</style>
