<template>
  <SwSection :id="id">
    <div class="lg:flex">
      <!-- Multiple breakpoints for responsive design based on content -->
      <SwContentContainer class="shrink-0 lg:w-7/12 xl:w-2/5" no-top-space="">
        <SwDisplay1 :content="title" />
        <SwBody1 :content="subtitle" />
      </SwContentContainer>

      <SwMediaContainer class="lg:border-l grow" :is-height-full="false">
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
            v-for="card in _cards"
            :key="card.id"
            class="group ring-black ring-inset hover:ring-3 lg:break-inside-avoid"
            itemscope
            itemprop="mainEntity"
            itemtype="https://schema.org/Question"
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
              <SwBody2 itemprop="text" :content="card.description" />
            </div>
          </details>
        </div>
      </SwMediaContainer>
    </div>
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
    "cards.sw_cards_id.id",
    "cards.sw_cards_id.title",
    "cards.sw_cards_id.description",
  ],
});

const {
  metadata: { title, subtitle, id },
  cards,
} = data;

const _cards = cards.map(item => item.sw_cards_id);
</script>
