<template>
  <SwSection>
    <div class="md:bg-black">
      <SwContentContainer :no-top-space="true">
        <div class="bg-white">
          <SwEditorRenderer class="mx-auto" :blocks="content.blocks" />
        </div>
      </SwContentContainer>
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
