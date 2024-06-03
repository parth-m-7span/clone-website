<template>
  <div v-bind="$attrs" :class="$options.classList" v-html="content"></div>
</template>

<script>
export default {
  classList: "font-display text-5xl font-display-semibold lg:text-7xl",
  props: {
    content: {
      type: String,
      required: true,
    },
  },
};
</script>
