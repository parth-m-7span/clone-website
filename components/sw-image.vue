<template>
  <NuxtImg
    v-if="value"
    provider="bunnyCdn"
    loading="lazy"
    :src="value.filename_disk ? value.filename_disk : value.id"
    :alt="alt || value?.title"
    densities="x1 x2"
    quality="80"
    format="webp"
  />
  <img v-else-if="url" :src="url" />
  <div v-else class="bg-white">
    <div
      class="bg-[url('/images/logo.svg')] bg-no-repeat bg-contain bg-center h-full w-full opacity-10 grayscale"
    />
  </div>
</template>

<script setup>
/**
 * Responsive Size. when sm:50vw, then 320px image will be requested.
 *   screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    }
 */
defineProps({
  value: {
    type: Object,
    default: () => null,
  },
  url: {
    type: String,
    default: null,
  },
  alt: {
    type: String,
    default: null,
  },
});
</script>
