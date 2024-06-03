<template>
  <SwSection :id="id" class="grid gap-px bg-black md:grid-cols-2">
    <!-- CARD -->
    <div
      v-for="(card, index) in _cards"
      :key="index"
      class="flex gap-px"
      :class="{
        'flex-row-reverse md:flex-row': index % 2 == 0,
        'md:flex-row-reverse': index % 4 == 0 || index % 4 == 1,
      }"
    >
      <div
        class="flex aspect-square basis-2/4 flex-col items-center justify-center bg-primary-500"
      >
        <SwMono1 class="text-4xl lg:text-7xl" :content="card.title" />
        <SwMono2 class="uppercase" :content="card.description" />
      </div>
      <div class="basis-2/4 bg-white">
        <SwImage
          height="350"
          width="350"
          sizes="sm:50vw lg:400px"
          :value="card.media"
          class="aspect-square object-cover h-full w-full lg:grayscale lg:hover:grayscale-0"
        />
      </div>
    </div>
  </SwSection>
</template>

<script setup>
const props = defineProps({
  ...defaultProps(),
});

const data = await useSectionData(props, {
  fields: [
    "id",
    "cards.sw_cards_id.title",
    "cards.sw_cards_id.description",
    ...getMediaKeys("cards.sw_cards_id"),
    "cards.sw_cards_id.color._500",
  ],
});

const { id, cards } = data;

const _cards = cards.map(card => card.sw_cards_id);
</script>
