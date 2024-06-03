<template>
  <SwSection :id="id">
    <SwContentContainer>
      <SwDisplay1 :content="title" />
      <SwBody1 :content="subtitle" />

      <div class="mt-8 grid gap-px border bg-black md:grid-cols-2 lg:mt-10">
        <SwLink
          v-for="(card, index) in _cards"
          :key="index"
          class="group flex w-full items-center bg-white p-8"
          :link="card.button?.link"
          :class="{ 'ring-inset ring-black hover:ring-4': card.button?.link }"
        >
          <Icon
            v-if="card.button?.icon?.value"
            :name="card.button?.icon?.value"
            class="mr-3 h-8 w-8"
          />
          <SwDisplay3 :content="card.title" />
          <SwArrow
            v-if="card.button?.link"
            class="ml-auto hover:block lg:invisible lg:group-hover:visible"
          />
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
    "id",
    "metadata.title",
    "metadata.subtitle",
    "cards.sw_cards_id.title",
    ...getLinkKeys("cards.sw_cards_id.button"),
    "cards.sw_cards_id.button.icon.value",
  ],
});

const {
  id,
  metadata: { title, subtitle },
  cards,
} = data;
const _cards = cards.map(item => item.sw_cards_id);
</script>
