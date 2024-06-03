import { toRaw } from "vue";

export const usePage = async slug => {
  const route = useRoute();

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
  let dynamicSlugs;
  if (slug) {
    dynamicSlugs = [slug];
  } else {
    const slugsFromRoute = toRaw(route).params.slug;
    let slugs;
    if (Array.isArray(slugsFromRoute)) {
      slugs = slugsFromRoute;
    } else {
      slugs = [""];
    }

    dynamicSlugs = slugs
      .reduce((value, _, index) => {
        value.push(
          "/" +
            slugs.slice(0, index + 1).join("/") +
            (index === slugs.length - 1 ? "" : "/*"),
        );
        return value;
      }, [])
      .reverse();
  }

  const { getItems } = useDirectusItems();
  const { getThumbnail: img } = useDirectusFiles();

  const { data, status, error } = await useAsyncData("hydrate", () => {
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
    });
  } else if (data.value.length === 0) {
    /**
     * Here "Data" variable refers to the number of pages that are found.
     * We're sending slug request to pages collection.
     * When collection does not have any result with the given slug,
     * we consider it as the page is not found.
     * Hence we create a manual 404 page error.
     */
    throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
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
    title: title + " | 7Span",
    meta: [
      { key: "description", name: "description", content: description },
      { key: "keywords", name: "keywords", content: _keywords },
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

  return {
    id,
    sections: _sections,
    status,
    colorVariables,
  };
};
