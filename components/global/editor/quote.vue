<template>
  <figure>
    <blockquote>
      {{ props.value.data.text }}
    </blockquote>
    <figcaption v-if="props.value.data.caption">
      {{ props.value.data.caption }}
    </figcaption>
  </figure>
</template>

<script setup>
const props = defineProps({
  value: {
    type: Object,
    default: () => {},
  },
});
</script>
