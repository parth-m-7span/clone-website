<template>
  <SwSection :id="id">
    <SwContentContainer>
      <SwDisplay1 :content="title" tag="h1" />
      <SwBody1 :content="description" />
      <div
        class="relative mt-8 flex aspect-video w-full items-center justify-center border bg-gray-100 lg:mt-20"
      >
        <VideoPlayer :value="video_url" />
      </div>
    </SwContentContainer>
  </SwSection>
</template>

<script setup>
// Manually Importing component since auto import not working here
import VideoPlayer from "@/components/video-player.vue";
const props = defineProps({
  ...defaultProps(),
});

const data = await useSectionData(props, {
  fields: ["id", "metadata.title", "metadata.description", "video_url"],
});

const {
  id,
  video_url,
  metadata: { title, description },
} = data;
</script>
