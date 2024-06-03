<template>
  <div
    class="text-sm tracking-normal font-mono uppercase lg:tracking-widest lg:text-base"
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
