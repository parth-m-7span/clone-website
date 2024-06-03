<template>
  <div class="divide-y divide-black">
    <component
      :is="section.component"
      v-for="section in items"
      :key="`${pageId}--${section.itemId}`"
      :collection-name="section.collectionName"
      :item-id="section.itemId"
    />
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  pageId: {
    type: String,
    default: "",
  },
});
</script>
