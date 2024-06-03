<template>
  <div
    class="font-body lg:text-xl [&_a]:underline"
    :class="weights[props.weight]"
    v-html="content"
  />
</template>

<script setup>
const props = defineProps({
  content: {
    type: [String],
    required: true,
  },
  weight: {
    type: String,
    default: "regular",
  },
});

const weights = {
  regular: "font-medium",
  bold: "font-bold",
};
</script>
