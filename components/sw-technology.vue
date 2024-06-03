<template>
  <div
    class="bg-white h-20 flex items-center w-full hover:relative hover:shadow-xl lg:flex-col lg:h-full lg:p-10"
  >
    <div class="w-20 p-4 lg:w-full lg:h-20 lg:p-0 lg:mb-4">
      <SwImage
        height="200"
        width="200"
        :value="logo"
        class="h-full w-full object-contain"
      />
    </div>
    <SwDisplay3 class="text-center" :content="name" />
  </div>
</template>

<script setup>
defineProps({
  logo: {
    type: Object,
    default: null,
  },
  name: {
    type: String,
    default: null,
  },
});
</script>
