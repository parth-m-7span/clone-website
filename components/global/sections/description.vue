<template>
  <div class="text-xl lg:text-3xl" v-html="content" />
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
  },
};
</script>
