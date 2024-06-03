<template>
  <SwSection :id="id">
    <div
      class="flex flex-col md:flex-row md:justify-between items-center font-display p-10"
    >
      <NuxtLink
        to="/"
        class="w-2/5 flex items-center justify-center md:justify-start lg:flex-none"
      >
        <SwImage
          :value="logo"
          class="h-10 inline-flex lg:h-12"
          width="140"
          height="48"
        />
      </NuxtLink>
      <div
        class="flex flex-col md:flex-row items-center text-sm text-black font-light gap-6 mt-4 md:mt-0 md:text-base 2xl:gap-10 2xl:text-2xl"
      >
        <SwBody3 :content="`Version: ${version}`" class="text-gray-600" />
        <SwLink
          v-for="(item, index) in _nav"
          :key="index"
          :link="item.link"
          class="text-gray-600 hover:text-black cursor-pointer"
        >
          <SwBody2 :content="item.label" />
        </SwLink>
      </div>
    </div>
  </SwSection>
</template>

<script setup>
import { version } from "../../../package.json";
const props = defineProps({
  ...defaultProps(),
});

const data = await useSectionData(props, {
  fields: [
    "id",
    "logo.id",
    "logo.title",
    "logo.filename_disk",
    "nav.sw_buttons_id.label",
    ...getLinkKeys("nav.sw_buttons_id"),
  ],
});

const { logo, id, nav } = data;
const _nav = nav.map(item => item.sw_buttons_id);
</script>
