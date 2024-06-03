<template>
  <svg
    width="79"
    height="79"
    viewBox="0 0 79 79"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M39.3614 46.8995C44.1664 46.8995 48.0616 43.0043 48.0616 38.1993C48.0616 33.3943 44.1664 29.499 39.3614 29.499C34.5564 29.499 30.6611 33.3943 30.6611 38.1993C30.6611 43.0043 34.5564 46.8995 39.3614 46.8995Z"
      :fill="circle"
    />
    <path
      d="M39.3626 26.1857L53.6139 1.5H25.1113L39.3626 26.1857Z"
      :fill="triangles"
    />
    <path
      d="M30.0232 30.6404L19.8113 4.02734L1.86914 26.1811L30.0232 30.6404Z"
      :fill="triangles"
    />
    <path
      d="M27.6085 40.6971L0.5 31.8877L6.42474 59.773L27.6085 40.6971Z"
      :fill="triangles"
    />
    <path
      d="M33.9076 48.9062L10.0029 64.4298L35.3983 77.371L33.9076 48.9062Z"
      :fill="triangles"
    />
    <path
      d="M44.2498 49.1748L41.2686 77.5262L67.3105 65.9287L44.2498 49.1748Z"
      :fill="triangles"
    />
    <path
      d="M50.9688 41.3102L71.1238 61.4652L78.5014 33.9326L50.9688 41.3102Z"
      :fill="triangles"
    />
    <path
      d="M49.083 31.1406L77.4302 28.1594L60.6764 5.09863L49.083 31.1406Z"
      :fill="triangles"
    />
  </svg>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  isDark: {
    type: Boolean,
    default: false,
  },
});

const triangles = computed(() => {
  return props.isDark
    ? "var(--color-primary-500)"
    : "var(--color-page-primary-900)";
});

const circle = computed(() => {
  return props.isDark
    ? "var(--color-secondary-500)"
    : "var(--color-page-primary-900)";
});
</script>
