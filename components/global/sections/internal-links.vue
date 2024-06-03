<template>
  <SwSection :id="id">
    <SwContentContainer>
      <SwDisplay1 :content="title" />
      <SwBody1 :content="subtitle" />

      <div
        class="bg-black grid grid-cols-1 border gap-px md:grid-cols-2 lg:grid-cols-3 mt-10"
      >
        <SwLink
          v-for="(tech, techIndex) in _cards"
          :key="techIndex"
          :link="tech.link"
          class="bg-white h-20 hover:shadow-xl lg:h-full px-6 py-8 group flex items-center justify-between w-full cursor-pointer"
        >
          <SwDisplay3 class="text-2xl" :content="tech.title" />
          <SwArrow class="duration-500" opacity-class="opacity-0" />
        </SwLink>
        <div
          v-for="n in blankBoxes(_cards, 3)"
          :key="`box-${n}`"
          class="bg-white hidden md:block lg:block"
        ></div>
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
    "metadata.id",
    "metadata.subtitle",
    "cards.sw_cards_id.title",
    "cards.sw_cards_id.description",
    "cards.sw_cards_id.link.*.*",
    ...getMediaKeys("cards.sw_cards_id"),
  ],
});

const {
  metadata: { title, subtitle, id },
  cards,
} = data;

const _cards = cards.map(item => item.sw_cards_id);
</script>
