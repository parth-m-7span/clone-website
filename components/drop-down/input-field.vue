<template>
  <div class="border px-5 h-14 bg-white">
    <div class="flex dropdown-container group transition-all">
      <select
        id="allwork"
        name="allwork"
        class="flex w-full py-3 mt-1 outline-none"
        :required="required"
        @change="$emit('update:modelValue', $event.target.value)"
      >
        <option value="" disabled selected hidden>
          {{ category }}
        </option>
        <option v-for="option in options" :key="option" :value="option.value">
          {{ option.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup>
defineEmits(["update:modelValue"]);
defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },
  required: {
    type: Boolean,
    default: false,
  },
  category: {
    type: String,
    default: "",
  },
  options: {
    type: Array,
    default: () => [],
  },
  option1: {
    type: String,
    default: "",
  },
  option2: {
    type: String,
    default: "",
  },
  option3: {
    type: String,
    default: "",
  },
  option4: {
    type: String,
    default: "",
  },
});
</script>
