<template>
  <div class="border lg:flex">
    <!-- MEDIA -->
    <SwMediaContainer class="lg:w-[400px] flex-none" size="md">
      <SwImage
        :value="image ? image : null"
        height="full"
        width="full"
        sizes="sm:100vw xl:33vw"
        class="aspect-4/3 w-full object-cover"
      />
    </SwMediaContainer>

    <!-- CONTENT -->
    <div class="border-t p-6 lg:border-t-0 lg:border-l lg:p-12">
      <NuxtLink :to="`/blog/${slug}`">
        <SwBody1
          weight="bold"
          :content="title"
          class="hover:underline cursor-pointer"
        />
      </NuxtLink>

      <div class="flex gap-2 text-gray-500 mt-4">
        <SwMono3 :content="formatDate(dateCreated)" />
        <SwMono3 content="/" />
        <SwMono3 :content="author()" />
      </div>

      <div
        v-if="tags.length"
        class="flex gap-3 mt-1 overflow-auto lg:mt-4 lg:flex-wrap lg:items-center"
      >
        <SwBadge
          v-for="(tag, tagIndex) in tags"
          :key="tagIndex"
          class="hover:!bg-gray-200 cursor-pointer"
          :label="tag.bg_tags_id.label"
          @click="emit('tag-selected', tag.bg_tags_id.slug)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  slug: {
    type: String,
    default: "",
  },
  image: {
    type: Object,
    default: () => {},
  },
  title: {
    type: String,
    default: "",
  },
  dateCreated: {
    type: String,
    default: "",
  },
  firstName: {
    type: String,
    default: "",
  },

  lastName: {
    type: String,
    default: "",
  },

  tags: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["tag-selected"]);

// Returns the full name of the author
const author = () => {
  return `${props.firstName} ${props.lastName}`;
};
</script>
