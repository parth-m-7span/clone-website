<template>
  <div
    class="font-display text-2xl font-display-semibold lg:text-3xl"
    v-html="content"
  />
</template>

<script setup>
defineProps({
  content: {
    type: String,
    default: "",
  },
});
</script>
