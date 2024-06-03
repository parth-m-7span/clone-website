<template>
  <div
    class="font-display font-display-medium text-lg lg:text-2xl"
    v-html="content"
  />
</template>

<script setup>
defineProps({
  content: {
    type: String,
    default: null,
  },
});
</script>
