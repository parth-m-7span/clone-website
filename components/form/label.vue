<template>
  <SwBody2 :content="value" class="mb-1" :class="classes" />
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  optional: {
    type: Boolean,
    default: false,
  },
  value: {
    type: String,
    default: String,
  },
});

const classes = computed(() => {
  return (
    props.optional &&
    'after:content-["-OPTIONAL"] after:text-xs after:ml-2 after:font-mono after:tracking-widest after:text-gray-400 after:relative after:-top-px'
  );
});
</script>
