<template>
  <div class="p-8 lg:p-12 hover:shadow-xl hover:z-10 hover:relative">
    <SwBody1 class="mb-1" weight="bold" :content="title" />
    <SwBody2 v-if="description" :content="description" />
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ""
  },
  description: {
    type: String,
    default: ""
  }
})
</script>
