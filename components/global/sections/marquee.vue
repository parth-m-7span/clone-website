<template>
  <SwSection
    :id="id"
    class="marquee-container py-12 lg:py-24"
    :class="{
      'bg-page-primary-500 text-page-primary-900': !is_dark,
      'bg-black text-white': is_dark,
    }"
  >
    <div class="marquee">
      <div v-for="n in 2" :key="`marquee-${n}`" class="marquee__group">
        <div
          v-for="i in 3"
          :key="`marquee-item-${i}`"
          class="flex items-center"
        >
          <SvgSun :is-dark="is_dark" class="mr-4 md:mr-6" />
          <SwMono2 :content="title" />
        </div>
      </div>
    </div>
  </SwSection>
</template>

<script setup>
const props = defineProps({
  ...defaultProps(),
});

const data = await useSectionData(props, {
  fields: ["id", "metadata.title", "metadata.description", "is_dark"],
});

const {
  id,
  metadata: { title },
  is_dark,
} = data;
</script>

<style>
.marquee-container {
  --space: 160px;
  display: grid;
  align-content: center;
  gap: var(--space);
  width: 100%;
}

.marquee {
  --duration: 30s;
  --gap: var(--space);

  display: flex;
  overflow: hidden;
  user-select: none;
  gap: var(--gap);
}
.marquee__group {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: var(--gap);
  min-width: 100%;
  animation: scroll var(--duration) linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% - var(--gap)));
  }
}
</style>
