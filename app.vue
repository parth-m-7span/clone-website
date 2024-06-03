<template>
  <div class="antialiased">
    <NuxtLoadingIndicator
      :throttle="0"
      :height="4"
      color="repeating-linear-gradient(to right,#000000 0%, var(--color-primary-500) 50%, #000000 100%)"
    />
    <CookieBanner />
    <NuxtPage />
  </div>
</template>

<script setup>
const { colorVariables } = await useSettings();
if (process.client) document.body.style = colorVariables;
</script>
