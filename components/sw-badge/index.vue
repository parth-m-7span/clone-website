<template>
  <div
    :style="{
      backgroundColor: color ? color._100 : _color._100,
      color: color ? color._900 : _color._200,
    }"
    class="px-3 py-1 rounded-full lg:px-5 lg:py-2"
  >
    <SwMono3 :content="label" class="whitespace-nowrap relative top-px" />
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: "",
  },
  color: {
    type: Object,
    default: () => ({
      _100: "#F5F5F5",
      _900: "#171717",
    }),
  },
});

const _color = {
  _100: "#F5F5F5",
  _900: "#171717",
};
</script>
