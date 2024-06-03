<template>
  <SwSection :id="id">
    <div class="lg:grid lg:grid-cols-2">
      <SwMediaContainer class="border-b lg:border-b-0 lg:border-r">
        <div class="w-full h-full bg-white flex items-center justify-center">
          <SwLottiePlayer :src="_media" />
        </div>
      </SwMediaContainer>

      <SwContentContainer full-height="" no-top-space="">
        <div class="h-full flex flex-col">
          <SwDisplay2 :content="title" />
          <SwBody2 :content="subtitle" />

          <div class="mt-4 text-primary-500">
            <SwMono3 :content="description" />
            <SwMono3
              v-if="error"
              :content="`${error.statusCode} : ${error.message}`"
            />
          </div>

          <div class="mt-auto">
            <SwLink :link="button_primary?.link">
              <SwButtonPrimary :label="button_primary?.label" />
            </SwLink>
          </div>
        </div>
      </SwContentContainer>
    </div>
  </SwSection>
</template>

<script setup>
const props = defineProps({
  ...defaultProps(),
});

const error = useError();

const fields = [
  "id",
  "metadata.title",
  "metadata.subtitle",
  "metadata.description",
  ...getMediaKeys(),
  "button_primary.label",
  ...getLinkKeys("button_primary"),
];

const data = await useSectionData(props, {
  fields,
});

const {
  id,
  metadata: { title, subtitle, description },
  media,
  button_primary,
} = data;

const { getThumbnail } = useDirectusFiles();
const _media = getThumbnail(media.id);
</script>
