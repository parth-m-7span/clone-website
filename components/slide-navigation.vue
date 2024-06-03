<template>
  <div class="flex h-14 items-stretch">
    <button
      aria-label="Previous"
      class="aspect-square flex-none flex items-center justify-center hover:ring-3 ring-inset ring-black"
      @click="emit('prev')"
    >
      <Icon name="mdi:arrow-left" class="w-6 h-6" />
    </button>
    <SwLink
      class="flex-grow flex justify-center items-center border-x hover:ring-3 ring-inset ring-black px-4 text-center"
      :link="buttonLink"
    >
      <SwMono3 class="leading-none relative top-px" :content="buttonLabel" />
    </SwLink>
    <button
      aria-label="Next"
      class="aspect-square flex-none flex items-center justify-center hover:ring-3 ring-inset ring-black"
      @click="emit('next')"
    >
      <Icon name="mdi:arrow-right" class="w-6 h-6" />
    </button>
  </div>
</template>

<script setup>
defineProps({
  buttonLink: {
    type: Object,
    default: () => {},
  },
  buttonLabel: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["prev", "next"]);
</script>
