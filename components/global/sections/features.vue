<template>
  <SwSection>
    <SwContentContainer>
      <SwDisplay1 :content="title" />
      <SwBody1 :content="subtitle" />

      <div class="mt-10 masonry-columns gap-0 p-px">
        <div
          v-for="(feature, index) in _cards"
          :key="index"
          class="break-inside-avoid border -ml-px bg-white p-8 xl:p-12"
          :class="{ '-mt-px': index != 0 }"
        >
          <SwDisplay2 :content="feature.title" />
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
  fields: ["metadata.title", "metadata.subtitle", "cards.sw_cards_id.title"],
});

const {
  metadata: { title, subtitle },
} = data;

const _cards = data.cards.map(card => card.sw_cards_id);
</script>

<style>
.masonry-columns {
  columns: 3 200px;
}
</style>
