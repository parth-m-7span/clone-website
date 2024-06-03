<template>
  <main class="bg-white">
    <slot />
  </main>
</template>
<script setup>
const route = useRoute();
useHead(() => ({
  link: [
    {
      rel: "canonical",
      href: "https://7span.com" + route.path,
    },
  ],
}));
</script>
