<template>
  <SwSection :id="id" class="lg:flex relative">
    <!-- LEFT -->
    <SwContentContainer class="lg:basis-1/2" :no-top-space="true">
      <SwDisplay1 :content="title" />
      <SwBody1 :content="subtitle" />
    </SwContentContainer>

    <!-- RIGHT -->
    <SwMediaContainer class="border-t lg:border-l lg:basis-1/2 lg:border-t-0">
      <div class="divide-y divide-black">
        <div
          v-for="(perk, index) in _cards"
          :key="index"
          class="flex items-center p-4 lg:p-6 bg-white"
        >
          <SwImage
            width="86"
            height="86"
            :value="perk.media"
            sizes="sm:24px md:44px"
            class="h-12 w-12 border lg:h-16 lg:w-16"
          />
          <SwBody2 class="pl-4 lg:pl-8" :content="perk.title" />
        </div>
      </div>
    </SwMediaContainer>
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
    ...getMediaKeys("cards.sw_cards_id"),
  ],
});

const {
  id,
  metadata: { title, subtitle },
  cards,
} = data;

const _cards = cards.map(item => item.sw_cards_id);
</script>
