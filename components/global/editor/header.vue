<template>
  <component :is="tag">
    <span v-html="props.value.data.text"> </span>
  </component>
</template>

<script setup>
const props = defineProps({
  value: {
    type: Object,
    default: () => {},
  },
});

const tag = `h${props.value.data.level}`;
</script>
