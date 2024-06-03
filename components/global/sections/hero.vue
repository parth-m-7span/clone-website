<template>
  <SwSection :id="id" class="relative">
    <div class="lg:flex" :class="{ 'flex-row-reverse': reverse }">
      <!-- LEFT -->
      <SwContentContainer class="lg:w-2/3" :no-top-space="true">
        <template v-if="icon">
          <SwImage
            v-if="icon.type.startsWith('image')"
            height="95"
            width="95"
            :value="icon"
            class="w-24 h-24 mb-8"
          />
          <div v-if="icon.type === 'application/json'" class="w-24 h-24 mb-8">
            <SwLottiePlayer :src="getThumbnail(icon.filename_disk)" />
          </div>
        </template>

        <SwDisplay1
          tag="h1"
          class="[&_strong]:from-page-primary-800 [&_strong]:to-page-primary-500 [&_strong]:bg-gradient-to-r [&_strong]:bg-clip-text [&_strong]:text-transparent [&_strong]:font-normal"
          :content="title"
        />
        <SwBody1 v-if="subtitle" :content="subtitle" class="mb-2" />

        <SwBody2 v-if="description" :content="description" />

        <div
          class="flex flex-col gap-y-2 mt-8 xl:flex-row lg:mt-12 lg:items-center"
        >
          <SwLink
            v-if="button_primary"
            :link="button_primary.link"
            class="w-full xl:w-auto"
          >
            <SwButtonPrimary
              :label="button_primary.label"
              class="w-full xl:w-auto"
            />
          </SwLink>
          <SwLink
            v-if="button_secondary"
            :link="button_secondary.link"
            class="w-full xl:w-auto"
          >
            <SwButtonSecondary
              :label="button_secondary.label"
              class="w-full xl:w-auto"
            />
          </SwLink>
        </div>
      </SwContentContainer>

      <!-- RIGHT -->
      <SwMediaContainer
        class="basis-1/2"
        :class="reverse ? 'md:border-r' : 'md:border-l border-t lg:border-t-0'"
      >
        <SwVideo v-if="video_url" :value="video_url" />
        <div v-else class="h-full w-full">
          <SwImage
            height="650"
            width="400"
            :value="media"
            sizes="sm:300px md:380px lg:450px"
            class="h-full w-full object-cover"
          />
        </div>
      </SwMediaContainer>
    </div>
  </SwSection>
</template>

<script setup>
const props = defineProps({
  ...defaultProps(),
});

const fields = [
  "metadata.id",
  "metadata.title",
  "metadata.subtitle",
  "metadata.description",
  "button_primary.label",
  ...getLinkKeys("button_primary"),
  "button_secondary.label",
  ...getLinkKeys("button_secondary"),
  "icon.id",
  "icon.filename_disk",
  "icon.title",
  "icon.type",
  ...getMediaKeys(),
  "reverse",
  "video_url",
];

const data = await useSectionData(props, {
  fields,
});
const { getThumbnail } = useDirectusFiles();

const {
  metadata: { title, subtitle, description, id },
  reverse,
  icon,
  media,
  button_primary,
  button_secondary,
  video_url,
} = data;
</script>
