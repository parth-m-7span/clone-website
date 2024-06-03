<template>
  <div class="bg-gray-100" :class="classes[size]">
    <div
      class="border w-full"
      :class="{
        'h-full': isHeightFull,
      }"
    >
      <ErrorHandler>
        <slot />
      </ErrorHandler>
    </div>
  </div>
</template>

<script setup>
defineProps({
  size: {
    type: String,
    default: "lg",
  },

  isHeightFull: {
    type: Boolean,
    default: true,
  },
});

const classes = {
  lg: "p-8 lg:p-12",
  md: "p-4 lg:p-6",
};
</script>
