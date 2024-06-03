<template>
  <SwSection :id="id">
    <SwContentContainer>
      <SwDisplay1 :content="title" />
      <SwBody1 :content="subtitle" />

      <SwMobileSlideContainer>
        <div
          class="flex flex-nowrap gap-4 lg:grid lg:grid-cols-8 lg:bg-black lg:gap-0 lg:gap-x-px lg:border lg:mt-10"
        >
          <div
            v-for="expert in _cards"
            :key="expert"
            class="bg-white w-[70%] flex-none border sm:w-[45%] md:w-[35%] lg:w-auto lg:border-0"
          >
            <div class="flex aspect-square items-center p-8 shine group">
              <SwImage
                width="295"
                height="295"
                :value="expert.media"
                class="w-full aspect-square relative transition-all group-hover:scale-125"
              />
            </div>
          </div>
          <div
            v-for="n in blankBoxes(_cards, 3)"
            :key="`box-${n}`"
            class="bg-white hidden lg:block"
          ></div>
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
    "id",
    "metadata.title",
    "metadata.subtitle",
    ...getMediaKeys("cards.sw_cards_id"),
  ],
});

const {
  id,
  metadata: { title, subtitle },
  cards,
} = data;

const _cards = cards.map(card => card.sw_cards_id);
</script>

<style lang="scss">
.shine {
  position: relative;
  overflow: hidden;

  &::before {
    background: linear-gradient(
      to right,
      fade_out(#fff, 1) 0%,
      fade_out(#fff, 0.7) 100%
    );
    content: "";
    display: block;
    height: 100%;
    left: -75%;
    position: absolute;
    top: 0;
    transform: skewX(-25deg);
    width: 50%;
    z-index: 2;
  }

  &:hover,
  &:focus {
    &::before {
      animation: shine 0.85s;
    }
  }

  @keyframes shine {
    100% {
      left: 125%;
    }
  }
}
</style>
