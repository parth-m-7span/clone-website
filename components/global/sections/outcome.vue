<template>
  <SwSection :id="id">
    <SwContentContainer>
      <SwDisplay1 :content="title" />
      <SwBody1 :content="subtitle" />
      <div class="mt-10">
        <template
          v-for="(outcome, index) in _outcomes"
          :key="`outcome-${index}`"
        >
          <SwImage
            v-if="outcome.media.type.startsWith('image')"
            :value="outcome.media"
            class="w-full h-full border"
            width="500"
            height="auto"
            sizes="sm:300px md:432px lg:700px xl:850px"
          />
          <div
            v-if="outcome.media.type.startsWith('video')"
            class="mt-4 border"
          >
            <VideoPlayer
              :value="`${bunnyCdnUrl}/${outcome.media.filename_disk}`"
              class="w-full h-full"
            />
          </div>

          <SwLottiePlayer
            v-if="outcome.media.type === 'application/json'"
            :src="getThumbnail(outcome.media.filename_disk)"
          />
        </template>
      </div>
    </SwContentContainer>
  </SwSection>
</template>

<script setup>
const { bunnyCdnUrl } = useAppConfig();

const props = defineProps({
  ...defaultProps(),
});

const data = await useSectionData(props, {
  fields: [
    "metadata.title",
    // "metadata.id",
    "metadata.subtitle",
    ...getMediaKeys("cards.sw_cards_id"),
  ],
});
const {
  id,
  metadata: { title, subtitle },
} = data;

const _outcomes = data.cards.map(outcome => outcome.sw_cards_id);
const { getThumbnail } = useDirectusFiles();
</script>
