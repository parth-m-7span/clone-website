<template>
  <SwContentContainer :no-top-space="true">
    <div class="prose lg:prose-xl mx-auto">
      <slot name="before"></slot>

      <component
        :is="`editor-${block.type}`"
        v-for="block in blocks"
        :key="block.id"
        :value="block"
      />
    </div>
  </SwContentContainer>
</template>

<script setup>
defineProps({
  blocks: {
    type: Array,
    default: () => [],
  },
});
</script>
