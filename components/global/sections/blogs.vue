<template>
  <SwSection id="blogs">
    <div
      class="sticky top-0 z-50 flex w-full overflow-auto bg-white divide-x divide-black"
    >
      <SwNavItem
        class="flex-grow"
        label="All Articles"
        :class="{ 'border-b': activeTag }"
        :active="!activeTag"
        @click="onTagSelect(null)"
      />
      <SwNavItem
        v-for="(tag, index) in data.tags"
        :key="index"
        :label="tag.label"
        class="flex-grow"
        :active="activeTag == tag.slug"
        :class="{ 'border-b': activeTag != tag.slug }"
        @click="onTagSelect(tag.slug)"
      />
    </div>

    <SwContentContainer :no-top-space="true">
      <VList
        ref="blog-list"
        :per-page="limit"
        endpoint="bg_articles"
        :params="params"
        :request-handler="requestHandler"
        class="space-y-8"
      >
        <!-- LOADING -->
        <template #loading>
          <ShimmerArticle v-for="n in 8" :key="`shimmer-${n}`" />
        </template>

        <!-- NO ARTICLE FOUND -->
        <template #empty>
          <div class="p-64 text-center">
            <SwDisplay2 content="No Articles Found" />
          </div>
        </template>

        <!-- LISTING -->
        <template #default="{ items }">
          <SectionsArticleCard
            v-for="(article, index) in items"
            :key="index"
            :slug="article.slug"
            :image="article.cover"
            :title="article.title"
            :date-created="article.date_created"
            :first-name="article.author.first_name"
            :last-name="article.author.last_name"
            :tags="article.tags"
            @tag-selected="onTagSelect($event)"
          />
          <VListLoadMore v-slot="{ loadMore }" class="text-center">
            <SwButtonPrimary
              class="w-full md:w-auto"
              label="Load More"
              @click="loadMore()"
            />
          </VListLoadMore>
        </template>
      </VList>
    </SwContentContainer>
  </SwSection>
</template>

<script setup>
const router = useRouter();
const route = useRoute();
const BLOG_COUNT = 10;
const props = defineProps({
  ...defaultProps(),
});

const activeTag = computed(() => {
  return route.query?.tag;
});

const getActiveTagFiter = () => {
  /**
   * Directus API does not handle undefined values, therefore return undefined
   */
  if (activeTag.value) {
    return {
      tags: {
        bg_tags_id: {
          slug: activeTag.value,
        },
      },
    };
  } else return undefined;
};

const limit = ref(BLOG_COUNT);

const resetLimit = () => {
  limit.value = BLOG_COUNT;
};

const onTagSelect = tag => {
  resetLimit();
  router.push({ query: { tag } });
};

const params = computed(() => {
  return {
    fields: [
      "title",
      "date_created",
      "slug",
      "cover.id",
      "cover.width",
      "cover.filename_disk",
      "cover.title",
      "author.first_name",
      "author.last_name",
      "tags.bg_tags_id.label",
      "tags.bg_tags_id.slug",
    ],
    limit: limit.value,
    sort: ["-date_created"],
    filter: {
      ...getActiveTagFiter(),
      ...getPublishedFilter(),
    },
    page: 1,
  };
});

const requestHandler = data => {
  const { params, pagination } = data;
  params.page = pagination.page;
  return useDbArticles(params)
    .then(res => {
      return {
        items: res.data,
        response: res,
        count: res.meta.filter_count,
      };
    })
    .catch(error => {
      console.log("🚀 ~ file: blogs.vue:115 ~ vue-list error:", error);
      reject(error);
    });
};
const { getItems } = useDirectusItems();
const { blogProductKey } = useAppConfig();

const { data } = await useAsyncData(
  "articles",
  () => {
    // All the tags on the top
    return new Promise(async (resolve, reject) => {
      try {
        const { tags } = await useSectionData(props, {
          fields: [
            "id",
            "tags.bg_tags_id.id",
            "tags.bg_tags_id.label",
            "tags.bg_tags_id.slug",
          ],
          limit: -1,
        });

        // get blog counts of particular tags
        const tagCounts = await getItems({
          collection: "bg_articles_bg_tags",
          params: {
            fields: ["*.*"],
            filter: {
              bg_articles_id: {
                product: {
                  id: blogProductKey,
                },
                ...getPublishedFilter(),
              },
            },
            aggregate: { count: "*" },
            groupBy: ["bg_tags_id"],
          },
        });

        const _tags = tags
          .map(tag => {
            const tagCount = tagCounts.find(data => {
              return data.bg_tags_id === tag.bg_tags_id.id;
            });
            return { ...tag.bg_tags_id, count: tagCount?.count || 0 };
          })
          .sort((a, b) => b.count - a.count);

        resolve({
          tags: _tags,
        });
      } catch (error) {
        console.log("🚀 ~ file: blogs.vue:115 ~ error:", error);
        reject(error);
      }
    });
  },
  {
    watch: [activeTag, limit],
  },
);
</script>
