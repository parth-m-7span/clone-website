<template>
  <NuxtLayout :style="colorVariables">
    <Sections :items="_sections" :page-id="id" />
  </NuxtLayout>
</template>

<script setup>
import { toRaw } from "vue";
import env from "../env.js";

const route = useRoute();

if (process.client && route.query && Object.keys(route.query).length !== 0) {
  /**
   * Store the tracking tag in session storage
   * This is used to track the user journey in the website.
   */
  sessionStorage.setItem("tracking-data", JSON.stringify(route.query));
}

const { siteUrl } = useAppConfig();
/**
 * Create a set of slugs to handle dynamic routes.
 * I.e. if the slug we receive is: /work/alike/hello
 * We need to create a set of slugs like:
 * - /work/alike/hello
 * - /work/alike/*
 * - /work/*
 *
 * The slug priorities are from top-to-bottom
 * The * represents the dynamic slug where * can be anything.
 *
 * The dynamic slugs needs to be handled at component level.
 * In case of blogs, a component will hit the blogs api with the slug and if not found,
 * the component will throw 404 error.
 */
const slugsFromRoute = toRaw(route).params.slug;
let slugs;
if (Array.isArray(slugsFromRoute)) {
  slugs = slugsFromRoute;
} else {
  slugs = [""];
}

const dynamicSlugs = slugs
  .reduce((value, _, index) => {
    value.push(
      "/" +
        slugs.slice(0, index + 1).join("/") +
        (index === slugs.length - 1 ? "" : "/*"),
    );
    return value;
  }, [])
  .reverse();

const { getItems } = useDirectusItems();
const { getThumbnail: img } = useDirectusFiles();

const { data, error } = await useAsyncData("hydrate", () => {
  return getItems({
    collection: "sw_pages",
    params: {
      fields: [
        "id",
        "path",
        "sections.item.id",
        "sections.collection",
        "sections.item.metadata.component.name",
        "color_primary.*",
        "color_secondary.*",
        "title",
        "description",
        "keywords",
        "og_image",
        "redirect_to.path",
        "status",
      ],
      filter: {
        path: {
          _in: dynamicSlugs,
        },
      },
    },
  });
}).catch(err => {
  console.error(err);
});

/**
 * First, check for errors and throw if page not found.
 */
if (error.value) {
  throw createError({
    statusCode: error.value.statusCode,
    statusMessage: error.value.message,
    fatal: false,
  });
} else if (data.value?.length === 0) {
  /**
   * Here "Data" variable refers to the number of pages that are found.
   * We're sending slug request to pages collection.
   * When collection does not have any result with the given slug,
   * we consider it as the page is not found.
   * Hence we create a manual 404 page error.
   */
  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
    fatal: false,
  });
}

/**
 * There may be multiple pages as we are having multiple query of paths for dynamic slugs.
 * We need to find the page by priority of the dynamicSlugs as the result will not respect the slug priority
 * The priority of paths:
 * 0 is highest
 * ....
 * n is lowest
 */
let page;
for (let i = 0; i < dynamicSlugs.length; i++) {
  page = data.value.find(page => {
    return page.path === dynamicSlugs[i];
  });
  if (page) {
    break;
  }
}

/**
 * To show draft pages in QA server
 * If Page is in draft mode and environment is not production , prepare data.
 */
if (!env.renderDraftPage && page.status === "draft") {
  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
    fatal: false,
  });
} else if (page.redirect_to) {
  navigateTo(page.redirect_to.path, { redirectCode: 301 });
}

/**
 * If Page is found, prepare data.
 */
const {
  sections,
  color_primary,
  color_secondary,
  id,
  title,
  description,
  keywords,
  og_image,
} = page;

/**
 * Prepare sections to render
 */
const _sections = sections.map(section => {
  const { item, collection } = section;
  return {
    collectionName: collection, // Fetch the section data from this collection
    itemId: item.id, // Use this ID to find the row from the above collection
    component: item.metadata.component.name, // The nuxt component to use when rendering data is mentioned in this key.
  };
});

/**
 * Prepare SEO Data
 */
const _og_image = og_image && img(og_image);
const _keywords = keywords && keywords.join(",");

useHead({
  title,
  meta: [
    { key: "locale", name: "locale", content: "en_US" },
    { key: "siteName", name: "site_name", content: "7Span.com" },
    { key: "type", name: "type", content: "website" },
    { key: "locale", name: "locale", content: "en_US" },
    { key: "description", name: "description", content: description },
    { key: "keywords", name: "keywords", content: _keywords },
    { key: "og:locale", name: "og:locale", content: "en_US" },
    { key: "og:siteName", name: "og:site_name", content: "7Span.com" },
    { key: "og:type", name: "og:type", content: "website" },
    { key: "og:url", name: "og:url", content: `${siteUrl}${page.path}` },
    { key: "og:title", name: "og:title", content: title + " | 7Span" },
    { key: "og:description", name: "og:description", content: description },
    { key: "og:image", property: "og:image", content: _og_image },
    { key: "og:image:alt", property: "og:image:alt", content: title },
    { key: "twitter:title", name: "twitter:title", content: title },
    {
      key: "twitter:description",
      name: "twitter:description",
      content: description,
    },
    { key: "twitter:image", name: "twitter:image", content: _og_image },
    { key: "twitter:image:alt", name: "twitter:image:alt", content: title },
  ],
});

/**
 * Set Page Colors
 */
const colorVariables = [
  ...prepareColorPalette("page-primary", color_primary),
  ...prepareColorPalette("page-secondary", color_secondary),
].join(";");
</script>
