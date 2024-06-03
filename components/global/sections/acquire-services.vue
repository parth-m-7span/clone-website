<template>
  <SwSection>
    <SwContentContainer>
      <SwDisplay1 :content="title" />
      <SwBody1 :content="subtitle" />

      <SwMobileSlideContainer>
        <div class="flex flex-nowrap gap-8 lg:grid lg:grid-cols-3">
          <div
            v-for="(card, index) in _cards"
            :key="index"
            class="border flex flex-col w-4/5 flex-shrink-0 lg:w-full"
          >
            <SwImage
              height="100"
              width="100"
              :value="card.media"
              class="p-6 w-fit"
            />
            <SwBody2
              :content="card.title"
              :style="{ backgroundColor: card.color?._500 }"
              class="px-6 py-4 border-t lg:py-8 h-full"
            />
          </div>
        </div>
      </SwMobileSlideContainer>
      <div class="text-center mt-8 lg:mt-12">
        <SwLink :link="link">
          <SwButtonPrimary class="w-full md:w-auto" :label="label" />
        </SwLink>
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
    "cards.sw_cards_id.title",
    "cards.sw_cards_id.color._500",
    "button_primary.label",
    ...getLinkKeys("button_primary"),
    ...getMediaKeys("cards.sw_cards_id"),
  ],
});

const {
  metadata: { title, subtitle },
  cards,
  button_primary: { label, link },
} = data;

const _cards = cards.map(card => card.sw_cards_id);
</script>
