<template>
  <figure>
    <SwImage
      class="border w-full h-auto"
      :value="value"
      :width="value.width"
      :height="value.height"
    />
    <figcaption>{{ props.value.data.caption }}</figcaption>
  </figure>
</template>

<script setup>
const props = defineProps({
  value: {
    type: Object,
    default: () => {},
  },
});

const value = {
  title: props.value.data.file.title,
  id: props.value.data.file.fileId,
  filename_disk:
    props.value.data.file.fileId + "." + props.value.data.file.extension,
  width: props.value.data.file.width,
  height: props.value.data.file.height,
};
</script>
