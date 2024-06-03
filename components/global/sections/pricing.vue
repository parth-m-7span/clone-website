<template>
  <SwSection :id="id">
    <SwContentContainer>
      <SwDisplay1 :content="title" />
      <SwBody1 :content="subtitle" />

      <div
        class="mt-8 space-y-8 lg:mt-10 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-8"
      >
        <!-- CARD -->
        <div
          v-for="(card, index) in _cards"
          :key="index"
          class="border flex flex-col"
        >
          <!-- HEADER -->
          <div class="relative p-6">
            <SwImage width="64" height="70" class="h-16" :value="card.media" />
          </div>

          <!-- PRICE -->
          <div
            class="border-t h-full"
            :style="{ backgroundColor: card.color?._500 }"
          >
            <SwMono1 :content="card.title" class="pt-6 px-6" />
            <SwBadgeGroup
              class="mt-1 overflow-x-auto pl-6"
              :value="
                card.tags.map(tag => {
                  return {
                    label: tag.sw_tags_id.label,
                    color: tag.sw_tags_id.color,
                  };
                })
              "
            />

            <SwBody2 :content="card.description" class="mt-5 px-6 pb-6" />
          </div>
        </div>
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
    "id",
    "metadata.title",
    "metadata.subtitle",
    "cards.sw_cards_id.title",
    "cards.sw_cards_id.description",
    "cards.sw_cards_id.tags.sw_tags_id.label",
    "cards.sw_cards_id.tags.sw_tags_id.color.*",
    ...getMediaKeys("cards.sw_cards_id"),
    "cards.sw_cards_id.color._500",
    "cards.sw_cards_id.backdrop.id",
    "cards.sw_cards_id.backdrop.title",
  ],
});

const {
  id,
  metadata: { title, subtitle },
  cards,
} = data;

const _cards = cards.map(item => item.sw_cards_id);
</script>
