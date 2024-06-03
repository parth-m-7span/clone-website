<template>
  <SwSection :id="id" class="bg-black p-8 relative lg:p-20">
    <div class="bg-white lg:flex">
      <SwContentContainer class="lg:w-1/2 pt-8" :no-top-space="true">
        <SwDisplay1 :content="title" />
        <SwBody1 :content="subtitle" />

        <div class="mt-6 flex lg:mt-12">
          <div class="relative">
            <SwLottiePlayer :src="src" />
          </div>
        </div>
      </SwContentContainer>

      <div class="px-8 pb-8 lg:p-20 lg:border-l lg:w-1/2">
        <component :is="component.name" />
      </div>
    </div>
  </SwSection>
</template>

<script setup>
const props = defineProps({
  ...defaultProps(),
});

const data = await useSectionData(props, {
  fields: [
    "metadata.title",
    "metadata.id",
    "component.name",
    "metadata.subtitle",
    ...getMediaKeys(),
  ],
});

const {
  metadata: { title, subtitle, id },
  component,
  media,
} = data;

const { getThumbnail: img } = useDirectusFiles();
const src = img(media.id);
</script>
