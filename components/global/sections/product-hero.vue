<template>
  <SwSection :id="id">
    <SwContentContainer :no-top-space="true">
      <SwMobileSlideContainer :no-top-space="true">
        <div class="flex lg:flex-col gap-4 lg:gap-0">
          <template
            v-for="card in _cards"
            :key="`product-hero-${card.sw_cards_id}`"
          >
            <!-- LEFT -->
            <div
              class="flex flex-col-reverse lg:flex-row min-w-full h-full border lg:border-b-0 last:border-b lg:divide-x lg:border-l-0 lg:odd:flex-row-reverse"
            >
              <div class="lg:w-1/2 p-8 lg:p-12 lg:odd:border-l">
                <SwDisplay2 :content="card.title" />
                <SwBody2 v-if="card.description" :content="card.description" />
              </div>
              <!-- RIGHT -->
              <SwMediaContainer class="flex-1 border-b lg:border-b-0">
                <SwImage
                  width="400"
                  height="700"
                  :value="card.media"
                  sizes="sm:100vw xl:50vw"
                  class="h-full w-full object-cover aspect-4/3"
                />
              </SwMediaContainer>
            </div>
          </template>
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
    "cards.sw_cards_id.title",
    "cards.sw_cards_id.description",
    ...getMediaKeys("cards.sw_cards_id"),
  ],
});

const {
  metadata: { id },
} = data;

const _cards = data.cards.map(card => card.sw_cards_id);
</script>
