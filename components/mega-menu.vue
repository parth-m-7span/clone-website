<template>
  <div
    class="fixed inset-0 z-50 flex h-screen justify-end bg-black bg-opacity-70 transition-all duration-300"
  >
    <div class="w-full bg-white lg:w-1/3">
      <div
        class="flex h-28 items-center justify-between border-b px-6 lg:px-10"
      >
        <Icon
          name="mdi:close"
          class="cursor-pointer text-3xl hover:text-primary-500"
          @click="closeMegaMenu"
        />
      </div>
      <div class="divide-y divide-black">
        <NuxtLink
          v-for="(item, index) in items"
          :key="index"
          :to="item.link"
          :target="item.target ? item.target : '_self'"
          class="group flex items-center justify-end px-6 py-4 lg:px-20 lg:py-6"
        >
          <SwDisplay2
            :content="item.label"
            class="text-right transition-all duration-300 group-hover:-translate-x-5"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const items = [
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Life",
    link: "/about",
  },
  {
    label: "Team",
    link: "/about",
  },

  {
    label: "Career",
    link: "https://7span.in/openings",
    target: "_blank",
  },
];

const emit = defineEmits(["close-menu"]);

const closeMegaMenu = () => {
  emit("close-menu", false);
};
</script>

<style lang="scss">
@keyframes rotation {
  from {
    transform: rotate(359deg);
  }

  to {
    transform: rotate(0deg);
  }
}

.anticlockwise {
  animation: rotation 8s infinite linear;
}
</style>
