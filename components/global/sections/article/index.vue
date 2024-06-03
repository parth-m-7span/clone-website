<template>
  <SwSection :id="id">
    <DbArticle>
      <!-- HERO -->
      <SwContentContainer :no-top-space="true">
        <DbArticleTitle
          as="h1"
          class="font-display text-5xl font-display-semibold lg:text-7xl"
        />
        <SwTab
          :image-val="author.avatar"
          :author="`${author.first_name} ${author.last_name}`"
          :published-date="formatDate(date_created)"
          :tags="_tags"
        />
        <SwBody2 :content="summary" class="mt-6 text-justify" />
      </SwContentContainer>

      <!-- COVER -->

      <div v-if="cover" class="relative border-y overflow-hidden bg-black">
        <div class="md:py-20 md:px-48">
          <DbArticleCoverImage
            class="relative z-10 aspect-video w-full object-cover article-cover"
          />
        </div>
      </div>
      <div v-else class="border-b"></div>

      <!-- SECTIONS -->
      <DbArticleSections>
        <template #default="{ data }">
          <div
            v-for="section in data.sections"
            :key="`${section.item.id}`"
            class="bg-white"
          >
            <SwContentContainer :no-top-space="true">
              <EjRenderer
                v-if="section.item && section.item.content"
                :blocks="section.item.content.blocks"
                class="prose lg:prose-xl mx-auto"
              />
            </SwContentContainer>
          </div>
        </template>
      </DbArticleSections>
    </DbArticle>
  </SwSection>
</template>

<script setup>
const { blogProductKey } = useAppConfig();

defineProps({
  ...defaultProps(),
});

const { getItems } = useDirectusItems();
const route = useRoute();

const { data, error } = await useAsyncData("article", () => {
  return getItems({
    collection: "bg_articles",
    params: {
      filter: {
        product: {
          id: blogProductKey,
        },
        slug: route.params.slug.at(-1),
      },
      fields: [
        "id",
        "title",
        "date_created",
        "author.first_name",
        "author.last_name",
        "author.avatar",
        "author.avatar.id",
        "author.avatar.filename_disk",
        "tags.bg_tags_id.label",
        "tags.bg_tags_id.slug",
        "cover.id",
        "cover.filename_disk",
        "summary",
        "sections.item.id",
        "sections.collection",
        "sections.item.metadata.component.name",
        "seo_description",
      ],
    },
  });
});

if (error.value) {
  throw createError({
    statusCode: error.value.statusCode,
    statusMessage: error.value.message,
  });
} else if (data.value.length === 0) {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
}

const {
  id,
  title,
  date_created,
  cover,
  tags,
  summary,
  author,
  seo_description,
} = data.value[0];

/**
 * Prepare SEO Data
 */
const { bunnyCdnUrl, siteUrl } = useAppConfig();
const _og_image = `${bunnyCdnUrl}/${cover.filename_disk}`;
const _keywords = "";

useHead({
  title: title + " | 7Span",
  meta: [
    { key: "locale", name: "locale", content: "en_US" },
    { key: "siteName", name: "site_name", content: "7Span.com" },
    { key: "type", name: "type", content: "website" },
    { key: "locale", name: "locale", content: "en_US" },
    { key: "description", name: "description", content: seo_description },
    { key: "keywords", name: "keywords", content: _keywords },
    { key: "og:image", property: "og:image", content: _og_image },
    { key: "og:image:alt", property: "og:image:alt", content: title },
    { key: "og:locale", name: "og:locale", content: "en_US" },
    { key: "og:siteName", name: "og:site_name", content: "7Span.com" },
    { key: "og:type", name: "og:type", content: "website" },
    {
      key: "og:url",
      name: "og:url",
      content: `${siteUrl}/blog/${route.params.slug.at(-1)}`,
    },
    { key: "og:title", name: "og:title", content: title + " | 7Span" },
    { key: "og:description", name: "og:description", content: seo_description },
    {
      key: "twitter:description",
      name: "twitter:description",
      content: seo_description,
    },
    { key: "twitter:title", name: "twitter:title", content: title },
    { key: "twitter:image", name: "twitter:image", content: cover },
    { key: "twitter:image:alt", name: "twitter:image:alt", content: title },
  ],
});

const _tags = tags.map(tag => tag.bg_tags_id);
</script>

<style lang="scss">
.article-cover img {
  @apply w-full;
}
</style>
