<template>
  <SwSection
    :id="id"
    class="text-center"
    :class="[is_dark ? 'bg-black' : 'bg-page-primary-500']"
  >
    <SwContentContainer>
      <SwDisplay1
        :content="title"
        class="mb-0"
        :class="{ 'text-white': is_dark }"
      />
      <SwBody1
        :content="subtitle"
        class="mb-8"
        :class="{ 'text-white': is_dark }"
      />

      <SwLink :link="button_primary.link">
        <SwButtonPrimary
          class="w-full md:w-auto"
          :label="button_primary.label"
          :is-dark="is_dark"
        />
      </SwLink>
    </SwContentContainer>

    <SvgRoad v-if="is_dark" class="w-full" />
    <SvgStairs v-else class="w-full" />
  </SwSection>
</template>

<script setup>
const props = defineProps({
  ...defaultProps(),
});

const data = await useSectionData(props, {
  fields: [
    "id",
    "metadata.title",
    "metadata.subtitle",
    "button_primary.label",
    ...getLinkKeys("button_primary"),
    "is_dark",
  ],
});

const {
  id,
  is_dark,
  metadata: { title, subtitle },
  button_primary,
} = data;
</script>
