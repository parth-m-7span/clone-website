<template>
  <ErrorHandler>
    <div class="md:hidden p-8 bg-black">
      <SwMobileSlideContainer :no-top-space="true">
        <div class="flex flex-nowrap gap-3">
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="w-3/4 flex-none"
          >
            <SwImage
              :key="`mobile-card-${index}`"
              width="400"
              height="400"
              sizes="sm:100vw"
              class="aspect-square object-cover border-x border-black"
              :value="card.media"
            />
          </div>
        </div>
      </SwMobileSlideContainer>
    </div>

    <div class="bg-black md:block hidden w-full p-8 lg:p-20">
      <div class="grc-container">
        <div class="grc grc--a">
          <SwImage
            width="900"
            height="900"
            sizes="sm:100vw lg:900px"
            class="aspect-square w-full object-cover"
            :value="cards[0].media"
          />
        </div>
        <div class="grc grc--b">
          <SwImage
            width="600"
            height="600"
            sizes="sm:100vw lg:600px"
            class="aspect-square w-full object-cover"
            :value="cards[1].media"
          />
        </div>
        <div class="grc grc--c">
          <SwImage
            width="400"
            height="400"
            sizes="sm:100vw lg:400px"
            class="aspect-square w-full object-cover"
            :value="cards[2].media"
          />
        </div>
        <div class="grc grc--d">
          <SwImage
            width="300"
            height="300"
            sizes="sm:100vw lg:300px"
            class="aspect-square w-full object-cover"
            :value="cards[3].media"
          />
        </div>
        <div class="grc grc--e">
          <SwImage
            width="200"
            height="200"
            sizes="sm:100vw lg:200px"
            class="aspect-square w-full object-cover"
            :value="cards[4].media"
          />
        </div>
        <div class="grc grc--f">
          <SwImage
            width="150"
            height="150"
            sizes="sm:100vw lg:150px"
            class="aspect-square w-full object-cover"
            :value="cards[5].media"
          />
        </div>
        <div class="grc grc--g">
          <SwImage
            width="150"
            height="80"
            sizes="sm:100vw lg:150px"
            class="aspect-goldenratio-landscape w-full object-cover"
            :value="cards[6].media"
          />
        </div>
      </div>
    </div>
  </ErrorHandler>
</template>

<script setup>
const props = defineProps({
  ...defaultProps(),
});
const fields = [...getMediaKeys("cards.sw_cards_id")];

const data = await useSectionData(props, {
  fields,
});

const cards = data.cards.map(item => item.sw_cards_id);
</script>

<style lang="scss">
.grc-container {
  width: 100%;
  height: calc(var(--width) / 1.618);
  display: grid;
  grid-template-columns: 61.8% 9.02% 5.58% 23.6%;
  grid-template-rows: 61.8% 9.02% 5.58% 23.6%;
  grid-template-areas:
    "a b b b"
    "a e f c"
    "a e g c"
    "a d d c";
}

.grc {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  border: 4px solid black;
  position: relative;
  overflow: hidden;
  img {
    transition: all 0.3s ease 0s;
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
}

.grc--a {
  grid-area: a;
}

.grc--b {
  grid-area: b;
  &:after {
    left: auto;
    right: 0;
  }
}

.grc--c {
  grid-area: c;
  &:after {
    left: auto;
    right: 0;
    bottom: 0;
    top: auto;
  }
}

.grc--d {
  grid-area: d;
  &:after {
    bottom: 0;
    top: auto;
  }
}

.grc--e {
  grid-area: e;
}

.grc--f {
  grid-area: f;
  &:after {
    right: 0;
    left: auto;
  }
}

.grc--g {
  grid-area: g;
  &:after {
    display: none;
  }
}
</style>
