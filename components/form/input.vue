<template>
  <input
    class="h-16 border px-5 w-full ring-inset ring-black outline-none focus:ring-4 lg:h-14"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
defineEmits(["update:modelValue"]);
defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },
});
</script>
