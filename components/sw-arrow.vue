<template>
  <Icon
    name="mdi:arrow-top-right"
    class="shrink-0 transition-all group-hover:opacity-100 group-hover:rotate-45 group-hover:text-black group-hover:translate-x-2"
    :class="[sizeClass, opacityClass]"
  />
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "sm",
    },
    opacityClass: {
      type: String,
      default: "opacity-50",
    },
  },
  computed: {
    sizeClass () {
      if (this.size === "md") return "w-10 h-10";
      else return "w-6 h-6";
    },
  },
};
</script>
