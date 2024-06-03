<template>
  <SwSection :id="id" class="flex items-center overflow-auto pl-4 w-full">
    <SwLink
      v-for="(item, index) in _nav"
      :key="index"
      :link="item.link"
      class="h-14 px-5 flex items-center border-x-3 border-y-2 border-transparent hover:border-black"
    >
      <SwMono3
        :content="item.label"
        :class="platformColorClasses[item.label] || 'text-black'"
      />
    </SwLink>

    <button
      aria-label="Scroll to Top"
      class="group h-14 w-14 flex-none flex cursor-pointer items-center bg-black justify-center text-white ml-auto sticky right-0"
      @click="scrollToTop"
    >
      <Icon
        name="mdi:arrow-up"
        class="group-hover:-translate-y-1 group-hover:duration-200 w-6 h-6"
      />
    </button>
  </SwSection>
</template>

<script setup>
const props = defineProps({
  ...defaultProps(),
});

const data = await useSectionData(props, {
  fields: [
    "id",
    "nav.sw_buttons_id.label",
    ...getLinkKeys("nav.sw_buttons_id"),
  ],
});

const { nav, id } = data;
const _nav = nav.map(item => item.sw_buttons_id);

const platformColorClasses = {
  Twitter: "text-twitter",
  Dribbble: "text-dribbble",
  Behance: "text-behance",
  Youtube: "text-youtube",
  Facebook: "text-facebook",
  NPM: "text-npm",
  Github: "text-black",
  Instagram: "text-instagram",
  LinkedIn: "text-linkedin",
  Discord: "text-discord",
};

const scrollToTop = () => {
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
};
</script>

<style>
.text-instagram {
  background: -webkit-linear-gradient(
    360deg,
    #405de6 0%,
    #5851db 11.98%,
    #833ab4 22.92%,
    #c13584 37.5%,
    #e1306c 52.08%,
    #fd1d1d 65.1%,
    #f56040 77.08%,
    #fcaf45 88.54%,
    #ffdc80 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
