<template>
  <button
    :class="{
      'bg-primary-500 text-black  outline-primary-500 ': isDark,
      'text-white bg-black outline-black': !isDark,
    }"
    class="h-16 justify-center inline-flex items-center px-8 whitespace-nowrap cursor-pointer outline-offset-4 hover:outline hover:outline-4 lg:h-24 lg:px-16"
  >
    <span
      class="font-mono md:text-xl uppercase tracking-widest"
      v-html="label"
    />
  </button>
</template>

<script setup>
defineProps({
  isDark: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: "Button",
  },
});
</script>
