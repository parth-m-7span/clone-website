<template>
  <textarea
    class="border p-5 w-full ring-inset ring-black outline-none focus:ring-4"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
defineEmits(["update:modelValue"]);
defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});
</script>
