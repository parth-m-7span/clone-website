<template>
  <SwSection :id="id">
    <SwContentContainer>
      <SwDisplay1 :content="title" />
      <SwBody1 :content="description" />

      <SwMobileSlideContainer>
        <div
          class="flex flex-nowrap gap-4 lg:bg-black lg:gap-px lg:grid lg:grid-cols-3 lg:border"
        >
          <SwLink
            v-for="(card, index) in _cards"
            :key="index"
            :link="card.link"
            class="border flex flex-col justify-between snap-start bg-white w-4/5 flex-shrink-0 lg:w-full lg:border-none"
          >
            <SwImage
              height="100"
              width="100"
              :value="card.media"
              class="p-6 w-fit"
            />
            <SwMono2
              :content="card.title"
              :style="{ backgroundColor: card.color?._500 }"
              class="px-6 py-4 uppercase border-t lg:py-8 h-full"
            />
          </SwLink>
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
    "metadata.description",
    "cards.sw_cards_id.title",
    ...getMediaKeys("cards.sw_cards_id"),
    "cards.sw_cards_id.color._500",
    ...getLinkKeys("cards.sw_cards_id"),
  ],
});

const {
  id,
  metadata: { title, description },
  cards,
} = data;

const _cards = cards.map(card => card.sw_cards_id);
</script>
