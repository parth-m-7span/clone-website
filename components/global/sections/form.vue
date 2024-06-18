<template>
  <SwSection :id="id" class="bg-black p-8 relative lg:p-20">
    <div v-if="!isFormSubmit" class="bg-white lg:flex">
      <SwContentContainer class="lg:w-1/2 pt-8" :no-top-space="true">
        <SwDisplay1 :content="title" />
        <SwBody1 :content="subtitle" />

        <div class="mt-6 flex lg:mt-12">
          <div class="relative">
            <SwLottiePlayer :src="src" />
          </div>
        </div>
      </SwContentContainer>

      <div class="px-8 pb-8 lg:p-20 lg:border-l lg:w-1/2">
        <component :is="component.name" @fromSubmit="handleFormSubmitEvent" />
      </div>
    </div>

    <SwContentContainer v-else class="bg-white">
      <SwDisplay1 :content="success_title" />

      <SwMobileSlideContainer>
        <div
          class="flex flex-nowrap gap-4 lg:bg-black lg:gap-px lg:grid lg:grid-cols-2 lg:border"
        >
          <SwLink
            v-for="(card, index) in _cards"
            :key="index"
            :link="card.link"
            class="border flex flex-col justify-between snap-start bg-white w-4/5 flex-shrink-0 lg:w-full lg:border-none"
          >
            <SwMono3
              :content="card.title"
              :style="{ backgroundColor: card.color?._500 }"
              class="px-6 py-4 uppercase border-t lg:py-8 h-full"
            />
            <SwMono2
              :content="card.description"
              class="px-6 py-4 uppercase border-t lg:py-8 h-full"
            />
          </SwLink>
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
    "metadata.title",
    "metadata.id",
    "component.name",
    "metadata.subtitle",
    "success_title",
    "success_cards.sw_cards_id.title",
    "success_cards.sw_cards_id.description",
    "success_cards.sw_cards_id.color._500",
    ...getMediaKeys(),
  ],
});

const {
  metadata: { title, subtitle, id },
  component,
  media,
  success_title,
  success_cards,
} = data;

const { getThumbnail: img } = useDirectusFiles();
const src = img(media.id);
const _cards = success_cards?.map(card => card.sw_cards_id);
const isFormSubmit = ref(false);
const handleFormSubmitEvent = event => {
  isFormSubmit.value = event;
  window.scrollTo({
    top: document.getElementById(id).offsetTop - 400,
    behavior: "smooth",
  });
};
</script>
script
