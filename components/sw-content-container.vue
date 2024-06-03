<template>
  <div
    class="px-8 pb-8 pt-20 lg:px-20 lg:pb-20"
    :class="{ 'lg:pt-20': noTopSpace, 'lg:pt-36': !noTopSpace }"
  >
    <div :class="{ contents: fullHeight, 'sticky top-20': !fullHeight }">
      <ErrorHandler>
        <slot />
      </ErrorHandler>
    </div>
  </div>
</template>

<script setup>
defineProps({
  noTopSpace: {
    type: Boolean,
    default: false,
  },
  fullHeight: {
    type: Boolean,
    default: false,
  },
});
</script>
