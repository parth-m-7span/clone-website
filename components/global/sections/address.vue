<template>
  <SwSection
    :id="id"
    class="divide-y divide-black lg:grid lg:grid-cols-2 lg:divide-x lg:divide-y-0"
  >
    <SwContentContainer
      v-for="(card, index) in _cards"
      :key="index"
      no-top-space=""
      full-height=""
    >
      <div class="flex flex-col h-full">
        <SwBody1 weight="bold" :content="card.title" />
        <SwBody2 :content="card.description" class="mb-4" />

        <div class="mt-auto">
          <SwLink :link="card.button.link">
            <SwButtonLink :label="card.button.label" />
          </SwLink>
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
    "cards.sw_cards_id.title",
    "cards.sw_cards_id.description",
    "cards.sw_cards_id.button.label",
    ...getLinkKeys("cards.sw_cards_id.button"),
  ],
});

const { id, cards } = data;
const _cards = cards.map(item => item.sw_cards_id);
</script>
