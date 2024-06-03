<template>
  <SwSection :id="id">
    <header
      class="h-16 pl-4 flex items-center justify-between bg-white lg:pl-12 lg:h-24"
    >
      <!-- Logo -->
      <NuxtLink to="/">
        <SwImage :value="logo" class="h-8 lg:h-12" width="140" height="48" />
      </NuxtLink>

      <!-- Navigation -->
      <NuxtLink
        class="h-full flex items-center justify-center px-8 border-l bg-page-primary-500 hover:ring-4 hover:ring-inset hover:ring-black"
        to="/contact"
      >
        <SwMono3 content="Get in Touch" />
      </NuxtLink>
    </header>
  </SwSection>
</template>

<script setup>
const props = defineProps({
  ...defaultProps(),
});

const data = await useSectionData(props, {
  fields: ["id", "logo.id", "logo.title", "logo.filename_disk"],
});

const id = data.id;
const logo = data.logo;
</script>

<style>
.nav-up {
  transform: translateY(-100%);
}

.nav-down {
  position: sticky;
  top: 0;
  z-index: 10;
  transform: translateY(0);
}
</style>
