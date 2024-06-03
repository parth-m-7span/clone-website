<template>
  <SwSection
    :id="id"
    class="divide-y divide-black lg:grid lg:grid-cols-2 lg:divide-y-0 lg:divide-x"
  >
    <SwLink
      v-for="(card, index) in _cards"
      :key="index"
      :link="card.link"
      class="block ring-inset ring-black hover:ring-4"
    >
      <SwContentContainer no-top-space="">
        <SwBody2 weight="bold" :content="card.title" />
        <SwMono2 class="mt-1" :content="card.description" />
      </SwContentContainer>
    </SwLink>
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
    ...getLinkKeys("cards.sw_cards_id"),
  ],
});

const { id, cards } = data;
const _cards = cards.map(item => item.sw_cards_id);
</script>
