<template>
  <SwSection>
    <SwContentContainer>
      <SwDisplay1 :content="title" />
      <SwBody1 :content="subtitle" />
    </SwContentContainer>
    <div class="lg:flex border-t">
      <SwMediaContainer class="lg:border-r grow" :is-height-full="false">
        <div
          class="bg-white divide-y divide-black"
          itemscope
          itemtype="https://schema.org/FAQPage"
        >
          <!--
            NOTE: The below section contains schema.org config
            REF: https://developers.google.com/search/docs/appearance/structured-data/faqpage
          -->
          <details
            v-for="(card, index) in _cards"
            :id="card.id"
            ref="details"
            :key="card.id"
            class="group ring-black ring-inset hover:ring-3 lg:break-inside-avoid"
            itemscope
            itemprop="mainEntity"
            itemtype="https://schema.org/Question"
            @click="toggle($event, index)"
          >
            <!-- TITLE -->
            <summary
              class="p-4 cursor-pointer flex justify-between lg:px-8 lg:py-6"
            >
              <SwBody2
                itemprop="name"
                weight="bold"
                class="mr-2"
                :content="card.title"
              />

              <!-- ICON -->
              <div class="group-open:hidden">
                <Icon class="w-6 h-6" name="mdi:plus" />
              </div>
              <div class="hidden group-open:block">
                <Icon class="w-6 h-6" name="mdi:minus" />
              </div>
            </summary>

            <!-- CONTENT -->
            <div
              itemscope
              itemprop="acceptedAnswer"
              itemtype="https://schema.org/Answer"
              class="px-4 pb-4 lg:px-8 lg:pb-8"
            >
              <!-- Dynamic Image Mobile view -->
              <div class="lg:hidden h-32 w-32">
                <SwImage
                  class="aspect-square"
                  :value="card.media"
                  width="128"
                  height="128"
                />
              </div>

              <SwBody2 itemprop="text" :content="card.description" />
            </div>
          </details>
        </div>
      </SwMediaContainer>

      <!-- Dynamic Image Desktop view -->
      <div class="hidden lg:block w-1/3 flex-shrink-0 p-20">
        <SwImage
          width="320"
          height="320"
          class="sticky top-0 max-h-80 max-w-80 aspect-square"
          :value="_cards[activeIndex].media"
        />
      </div>
    </div>
  </SwSection>
</template>

<script setup>
const details = ref(null);
const activeIndex = ref(0);

const toggle = (element, index) => {
  // Close all other cards if one clicked
  activeIndex.value = index;
  details.value.forEach(target => {
    if (target !== element) target.removeAttribute("open");
  });
};

onMounted(() => {
  details.value[0].setAttribute("open", "");
});

const props = defineProps({
  ...defaultProps(),
});

const data = await useSectionData(props, {
  fields: [
    "id",
    "metadata.title",
    "metadata.subtitle",
    ...getMediaKeys("cards.sw_cards_id"),
    "cards.sw_cards_id.id",
    "cards.sw_cards_id.title",
    "cards.sw_cards_id.description",
  ],
});

const {
  metadata: { title, subtitle },
  cards,
} = data;

const _cards = cards.map(item => item.sw_cards_id);
</script>
