<template>
  <div class="group relative">
    <div
      class="flex gap-1 absolute items-center top-3 right-3 bg-gray-400 lg:opacity-0 lg:group-hover:opacity-100 rounded p-2"
    >
      <SwBody3 v-if="isCopied" content="Copied" class="text-gray-700" />
      <Icon
        v-if="isCopied"
        name="mdi:clipboard-check-outline"
        class="h-8 w-6"
      />
      <Icon
        v-if="!isCopied"
        name="mdi:clipboard-outline"
        class="h-8 w-6 lg:invisible lg:group-hover:visible cursor-pointer"
        @click="copyCode()"
      />
    </div>
    <pre>
    <code>{{ props.value.data.code }}</code>
  </pre>
  </div>
</template>

<script setup>
import { useClipboard } from "@vueuse/core";
const { copy } = useClipboard({ legacy: true });
const isCopied = ref(false);
const copyCode = () => {
  copy(props.value.data.code);
  isCopied.value = true;

  // timeout for disappearing message
  setTimeout(() => {
    isCopied.value = false;
  }, 2000);
};

const props = defineProps({
  value: {
    type: Object,
    default: () => {},
  },
});
</script>
