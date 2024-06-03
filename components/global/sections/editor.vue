<template>
  <SwSection :id="id">
    <SwContentContainer>
      <SwDisplay1 :content="title" />
      <SwBody1 v-if="subtitle" :content="subtitle" />
      <SwBody2 v-if="description" class="mt-4" :content="description" />

      <div class="border-px border-t mt-16" />
      <SwEditorRenderer class="mt-8 mx-auto" :blocks="content.blocks" />
    </SwContentContainer>
  </SwSection>
</template>

<script setup>
const props = defineProps({
  ...defaultProps(),
});

const data = await useSectionData(props, {
  fields: [
    "metadata.id",
    "metadata.title",
    "metadata.subtitle",
    "metadata.description",
    "content",
  ],
});

const {
  metadata: { id, title, subtitle, description },
  content,
} = data;
</script>
