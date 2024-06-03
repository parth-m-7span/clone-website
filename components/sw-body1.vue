<template>
  <div
    class="font-body text-xl lg:text-3xl [&_a]:underline"
    :class="weights[props.weight]"
    v-html="content"
  />
</template>

<script setup>
const weights = {
  regular: "font-medium",
  bold: "font-bold",
};

const props = defineProps({
  content: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    default: "regular",
  },
});
</script>

<style></style>
