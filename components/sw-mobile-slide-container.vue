<template>
  <div
    class="-mx-8 pl-8 overflow-auto snap-x scroll-pl-8 lg:-mx-0 lg:pl-0 lg:overflow-visible"
    :class="{ 'mt-8': !noTopSpace }"
  >
    <ErrorHandler>
      <slot />
    </ErrorHandler>
  </div>
</template>

<script setup>
defineProps({
  noTopSpace: {
    type: Boolean,
    default: false,
  },
});
</script>
