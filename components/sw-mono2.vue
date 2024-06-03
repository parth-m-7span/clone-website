<template>
  <div
    class="font-mono font-medium uppercase text-xl lg:text-3xl"
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

<style></style>
