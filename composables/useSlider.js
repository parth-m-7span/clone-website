import { ref, computed } from "vue";

export const useSlider = (items) => {
  const index = ref(0);

  const next = () => {
    if (index.value < items.length - 1) {
      index.value++;
    } else {
      index.value = 0;
    }
  };

  const prev = () => {
    if (index.value > 0) {
      index.value = index.value - 1;
    } else {
      index.value = items.length - 1;
    }
  };

  const active = computed(() => items[index.value]);

  return { active, next, prev, index };
};
