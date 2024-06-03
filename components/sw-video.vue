<template>
  <video
    muted
    loop
    autoplay
    width="full"
    height="full"
    class="w-full h-full object-cover"
  >
    <source :src="value" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
  },
};
</script>
