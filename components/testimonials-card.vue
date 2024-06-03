<template>
  <SwBody2 :content="message" class="p-8" />

  <!-- AUTHOR -->
  <div class="flex items-center border-t p-3 md:p-4 bg-gray-100">
    <!-- PHOTO -->
    <div class="aspect-square w-16 flex-none lg:w-20">
      <SwImage
        height="200"
        width="200"
        :value="photo"
        class="w-full h-full border"
      />
    </div>

    <!-- DEtAILS -->
    <div class="ml-4 overflow-hidden">
      <SwBody2 weight="bold" :content="name" class="leading-none lg:-mb-1" />
      <SwBody3
        :content="designation + ' @' + companyName"
        class="text-gray-600 whitespace-nowrap overflow-hidden overflow-ellipsis relative"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
    name: String,
    designation: String,
    companyName: String,
    photo: {
      type: Object,
    },
  },
};
</script>
