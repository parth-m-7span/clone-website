<template>
  <EditorNestedlistItems
    :list-style="props.value.data.style"
    :items="props.value.data.items"
  />
</template>

<script setup>
const props = defineProps({
  value: {
    type: Object,
    default: () => {},
  },
});
</script>
