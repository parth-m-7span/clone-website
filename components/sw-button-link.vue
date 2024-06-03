<template>
  <div class="cursor-pointer group inline-flex flex-col border-black">
    <span class="font-mono text-xl uppercase tracking-widest" v-html="label" />
    <span
      class="w-full h-[3px] bg-black group-hover:translate-x-4 transition-all"
    ></span>
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
