<template>
  <SwSection v-if="data?.length" :id="id">
    <SwContentContainer no-top-space="">
      <SwDisplay1 :content="title" />
      <SwBody1 :content="subtitle" />

      <div v-if="!pending" class="mt-8 space-y-6 lg:mt-12">
        <SectionsArticleCard
          v-for="(article, index) in data"
          :key="index"
          :slug="article.slug"
          :image="article.cover"
          :title="article.title"
          :date-created="article.date_created"
          :first-name="article.author.first_name"
          :last-name="article.author.last_name"
          :tags="article.tags"
        />
      </div>
    </SwContentContainer>
  </SwSection>
</template>

<script setup>
const { blogProductKey } = useAppConfig();

const props = defineProps({
  ...defaultProps(),
});

const { getItems } = useDirectusItems();
const route = useRoute();
const slug = route.params.slug.at(-1);

const sectionData = await useSectionData(props, {
  fields: ["id", "metadata.title", "metadata.subtitle"],
});

const {
  metadata: { title, subtitle, id },
} = sectionData;

const { data, pending } = await useAsyncData("related-blogs", async () => {
  /**
   * First, get the list of tags by the slug
   */
  const tags = await getItems({
    collection: "bg_articles",
    params: {
      filter: {
        product: {
          id: blogProductKey,
        },
        slug,
      },
      fields: ["tags.bg_tags_id.label", "tags.bg_tags_id.slug"],
    },
  }).then(([{ tags }]) => {
    return tags.map(tag => tag.bg_tags_id.slug);
  });

  /**
   * Get related articles by tag slugs
   */
  return getItems({
    collection: "bg_articles",
    params: {
      filter: {
        product: {
          id: blogProductKey,
        },
        tags: {
          bg_tags_id: {
            slug: {
              _in: tags,
            },
          },
        },
        slug: {
          _neq: slug,
        },
      },
      fields: [
        "title",
        "slug",
        "date_created",
        "tags.bg_tags_id.label",
        "cover.id",
        "cover.filename_disk",
        "author.first_name",
        "author.last_name",
      ],
    },
  });
});
</script>
