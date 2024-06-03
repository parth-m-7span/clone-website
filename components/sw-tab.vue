<template>
  <div class="flex mt-6">
    <div class="flex">
      <SwImage
        height="70"
        width="70"
        :value="imageVal"
        class="w-fit aspect-square object-cover"
      />

      <div class="flex flex-col gap-2 lg:flex-row ml-4 lg:ml-0">
        <div
          class="flex lg:flex-col gap-2 items-center lg:gap-0 lg:items-start lg:m-auto lg:border-r lg:border-black lg:pl-2 lg:pr-6"
        >
          <span
            class="text-gray-400 uppercase text-xs lg:text-base font-bold font-mono"
          >
            Written by
          </span>
          <span
            class="text-black text-base lg:text-2xl font-display font-medium whitespace-nowrap"
          >
            {{ author }}
          </span>
        </div>
        <div
          class="flex lg:flex-col gap-2 items-center lg:gap-0 lg:items-start lg:m-auto lg:border-r lg:border-black lg:px-6"
        >
          <span
            class="text-gray-400 uppercase text-xs lg:text-base font-bold font-mono"
          >Published</span>
          <span
            class="text-black text-base lg:text-2xl font-display font-medium whitespace-nowrap"
          >{{ publishedDate }}</span>
        </div>
        <div class="lg:px-6 flex items-center gap-2">
          <SwBadgeGroup :value="tags" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  imageVal: [String, Object],
  author: String,
  publishedDate: String,
  tags: Array,
});
</script>
