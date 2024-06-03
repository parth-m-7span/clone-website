<template>
  <div
    class="bg-white h-16 border-2 border-black justify-center inline-flex items-center px-8 cursor-pointer whitespace-nowrap ring-inset ring-black hover:ring-3 lg:h-24 lg:px-16"
  >
    <span class="font-mono text-xl uppercase tracking-widest" v-html="label" />
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: "Button",
  },
});
</script>
