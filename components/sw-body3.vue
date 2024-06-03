<template>
  <div class="font-body text-sm font-medium" v-html="content" />
</template>

<script setup>
defineProps({
  content: {
    type: String,
    required: true,
  },
});
</script>
