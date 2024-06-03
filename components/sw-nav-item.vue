<template>
  <SwLink
    :link="link"
    class="flex justify-center items-center h-14 px-4 cursor-pointer whitespace-nowrap"
    :class="{ 'hover:ring-3 hover:ring-inset hover:ring-black': !active }"
  >
    <Icon v-if="icon" :name="icon" class="mr-2 w-6 h-6" />
    <SwMono3 :content="label" class="top-px relative" />
  </SwLink>
</template>

<script setup>
defineProps({
  link: {
    type: Object,
    default: () => {},
  },
  icon: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  active: {
    type: Boolean,
    default: false,
  },
});
</script>
