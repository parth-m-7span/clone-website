<template>
  <SwBody2 :content="message" class="p-8" />

  <div class="flex items-center border-t p-3 md:p-4 bg-gray-100">
    <div class="ml-4 overflow-hidden">
      <SwBody2 :content="name" class="leading-none mb-1" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
    name: String,
  },
};
</script>
