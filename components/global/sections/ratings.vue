<template>
  <SwSection :id="id">
    <div class="bg-white lg:flex lg:items-stretch">
      <div class="px-8 pt-12 lg:p-12 lg:border-r lg:max-w-xs">
        <SwBody1 weight="bold" :content="title" />
      </div>

      <div
        class="flex mt-2 items-center px-8 pb-8 overflow-auto gap-4 lg:gap-0 lg:p-0 lg:mt-0 lg:items-stretch lg:divide-x lg:divide-black lg:flex-grow"
      >
        <div
          v-for="(card, index) in _cards"
          :key="index"
          class="border p-8 flex flex-col items-center justify-center w-2/3 flex-none sm:w-[40%] lg:w-[30%] lg:border-0 lg:flex-grow xl:w-auto"
        >
          <SwImage
            width="120"
            height="80"
            :value="card.media"
            class="h-10 w-24 object-contain"
          />

          <div class="flex items-center text-amber-500 mt-2">
            <Icon
              v-for="n in fullStars(card.ratings)"
              :key="n"
              class="w-6 h-6"
              name="mdi:star"
            />

            <Icon
              v-if="isHalfStar(card.ratings)"
              class="w-6 h-6"
              name="mdi:star-half-full"
            />
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

const fullStars = ratings => {
  const roundedStars = Math.round(ratings * 2) / 2;
  const fullStar = parseInt(roundedStars);
  return fullStar;
};

const isHalfStar = ratings => {
  return !Number.isInteger(Math.round(ratings * 2) / 2);
};

const data = await useSectionData(props, {
  fields: [
    "metadata.id",
    "metadata.title",
    ...getMediaKeys("cards.sw_cards_id"),
    "cards.sw_cards_id.description",
  ],
});
const {
  metadata: { id, title },
  cards,
} = data;

const _cards = cards
  .map(item => item.sw_cards_id)
  .map(item => {
    return {
      media: item.media,
      // Ratings are wrapped inside p tag as they're coming from card description.
      ratings: parseFloat(item.description.replace(/<[^>]+>/g, "")),
    };
  });
</script>
