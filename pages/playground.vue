<template>
  <div class="w-full p-10 space-y-5">
    <h1 v-html="title"></h1>
    <div v-html="subtitle"></div>
    <div v-html="description"></div>
  </div>
</template>
<script setup>
const name = ref("John Doe");
import { toRaw } from "vue";
const fields = [
  "metadata.id",
  "metadata.title",
  "metadata.subtitle",
  "metadata.description",
];

const {
  metadata: { title, subtitle, description, id },
} = await useAsyncData("about-hero-section", () => {
  const { getItemById } = useDirectusItems();
  return getItemById({
    collection: "sw_sections_hero",
    id: "387e9102-17a4-4572-9c13-6dc40d1ef17d",
    params: {
      fields,
    },
  });
}).then(({ data: { value } }) => {
  return toRaw(value);
});

// const {
//   metadata: { title, subtitle, description, id },
//   reverse,
//   icon,
//   media,
//   button_primary,
//   button_secondary,
//   video_url,
// } = data;
</script>
