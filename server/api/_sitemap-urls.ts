const { directusUrl } = useAppConfig();

export default defineEventHandler(async () => {
  const pagesUrl = directusUrl + "/items/sw_pages";

  const pages = await $fetch(pagesUrl, {
    params: {
      limit: -1,
      filter: {
        status: "published",
      },
    },
  }).then(res => res.data);

  const data = [...pages]
    .filter(p => {
      /**
       * Remove * pages from the sitemap
       * The * represents the dynamic slug where * can be anything.
       */
      return !p.path.includes("/*");
    })
    .map(p => ({ loc: p.path, lastmod: p.date_updated }));

  return data;
});
