<template>
  <NuxtLayout>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
      recusandae rerum odit, provident nam, impedit quis enim delectus veritatis
      quos ratione obcaecati ducimus nobis iusto repellendus sunt facere?
      Perspiciatis, aspernatur?
    </p>
    <!-- <Sections :items="sections" :page-id="id" /> -->
  </NuxtLayout>
</template>

<script setup>
const props = defineProps({
  error: {
    type: Object,
    default: () => {},
  },
});
// useSettings();
console.error("error", props.error);
// const { sections, id } = await usePage("/error");
// await useSettings();
</script>
