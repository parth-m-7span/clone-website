<template>
  <div class="border px-5 py-4 h-14 bg-white">
    <div class="flex dropdown-container group transition-all">
      <select id="allwork" name="allwork" class="flex w-full">
        <option value="" disabled selected hidden>{{ category }}</option>
        <option>{{ option1 }}</option>
        <option>{{ option2 }}</option>
        <option>{{ option3 }}</option>
        <option>{{ option4 }}</option>
      </select>
    </div>
  </div>
</template>

<script setup>
defineProps({
  category: {
    type: String,
    default: "",
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
