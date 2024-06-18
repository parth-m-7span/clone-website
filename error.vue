<template>
  <NuxtLayout>
    <Sections :items="sections" :page-id="id" />
  </NuxtLayout>
</template>

<script setup>
const props = defineProps({
  error: {
    type: Object,
    default: () => {},
  },
});
await useSettings();
console.error("error", props.error);
const { sections, id } = await usePage("/error");
</script>
