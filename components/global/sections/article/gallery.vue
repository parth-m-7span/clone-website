<template>
  <div class="overflow-x-auto bg-black pl-8 py-8 md:pr-8 lg:p-20">
    <div class="overflow-x-auto space-y-px">
      <div class="flex gap-px h-40 md:h-full">
        <SwImage
          width="400"
          height="400"
          :value="media[0].directus_files_id"
          class="aspect-video md:w-3/5"
        />
        <SwImage
          width="400"
          height="400"
          :value="media[1].directus_files_id"
          class="aspect-3/4 md:w-1/5"
        />
        <div class="flex gap-px md:flex-col md:w-1/5">
          <SwImage
            width="400"
            height="400"
            :value="media[2].directus_files_id"
            class="aspect-4/3 md:h-1/2 max-w-none md:max-w-full"
          />
          <SwImage
            width="400"
            height="400"
            :value="media[3].directus_files_id"
            class="aspect-4/3 md:h-1/2 max-w-none md:max-w-full"
          />
        </div>
      </div>

      <div class="flex gap-px h-40 md:h-full">
        <div class="flex gap-px md:flex-col md:w-1/5">
          <SwImage
            width="400"
            height="400"
            :value="media[4].directus_files_id"
            class="aspect-4/3 md:h-1/2 max-w-none md:max-w-full"
          />
          <SwImage
            width="400"
            height="400"
            :value="media[5].directus_files_id"
            class="aspect-4/3 md:h-1/2 max-w-none md:max-w-full"
          />
        </div>
        <SwImage
          width="400"
          height="400"
          :value="media[6].directus_files_id"
          class="aspect-3/4 md:w-1/5"
        />
        <SwImage
          width="400"
          height="400"
          :value="media[7].directus_files_id"
          class="object-cover aspect-video md:w-3/5"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  ...defaultProps(),
});

const data = await useSectionData(props, {
  fields: [...getMultipleMediaKeys()],
});

const { media } = data;
</script>
