<template>
  <template v-if="props.link?.page">
    <NuxtLink :to="props.link.page.path" :target="props.link.target">
      <slot />
    </NuxtLink>
  </template>

  <template v-else-if="props.link?.url">
    <a :href="props.link.url" target="_blank">
      <slot />
    </a>
  </template>

  <template v-else-if="props.link?.section">
    <a :href="`#${props.link.section}`">
      <slot />
    </a>
  </template>

  <span v-else>
    <slot />
  </span>
</template>

<script setup>
const props = defineProps({
  link: {
    type: Object,
    default: () => {},
  },
});
</script>
