<template>
  <div class="flex flex-nowrap gap-2 lg:flex-wrap items-center overflow-auto">
    <SwBadge
      v-for="(badge, index) in value"
      :key="index"
      :label="badge.label"
      :color="badge.color ? badge.color : null"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      required: true,
    },
  },
};
</script>
