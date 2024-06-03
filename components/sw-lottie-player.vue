<template>
  <client-only>
    <lottie-player :src="src" autoplay loop />
  </client-only>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
