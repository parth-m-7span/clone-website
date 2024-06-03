<template>
  <SwSection>
    <div class="bg-white">
      <SwEditorRenderer class="mx-auto" :blocks="content.blocks" />
    </div>
  </SwSection>
</template>

<script setup>
const props = defineProps({
  ...defaultProps(),
});

const data = await useSectionData(props, {
  fields: ["content"],
});

const { content } = data;
</script>
