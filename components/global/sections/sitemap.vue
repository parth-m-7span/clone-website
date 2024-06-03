<template>
  <SwSection>
    <SwContentContainer no-top-space>
      <SwDisplay1 :content="title" />

      <ul class="divide-y-2">
        <li v-for="page in pages" :key="page.id" class="py-3">
          <NuxtLink :to="page.path" target="_blank">
            <SwBody2 :content="page.title" />
            <SwBody3 class="text-gray-600 text-sm" :content="page.path" />
          </NuxtLink>
        </li>
      </ul>
    </SwContentContainer>
  </SwSection>
</template>

<script setup>
const { getItems } = useDirectusItems();

const props = defineProps({
  ...defaultProps(),
});
const pages = await getItems({
  collection: "sw_pages",
  params: {
    fields: ["id", "path", "title"],
    limit: -1,
  },
});

const data = await useSectionData(props, {
  fields: ["metadata.title"],
});

const {
  metadata: { title },
} = data;
</script>
