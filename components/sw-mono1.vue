<template>
  <div class="font-mono font-medium text-3xl lg:text-5xl" v-html="content" />
</template>

<script setup>
defineProps({
  content: {
    type: String,
    default: null,
  },
});
</script>
