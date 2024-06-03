<template>
  <p v-html="props.value.data.text"></p>
</template>

<script setup>
const props = defineProps({
  value: {
    type: Object,
    default: () => {},
  },
});
</script>
