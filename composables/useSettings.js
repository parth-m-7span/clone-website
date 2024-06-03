export const useSettings = async () => {
  /**
   * Get Settings
   */

  const { getItems } = useDirectusItems();
  const { getThumbnail } = useDirectusFiles();

  const { data } = await useAsyncData("settings", () => {
    return getItems({
      collection: "sw_settings",
      params: {
        fields: [
          "company_name",
          "company_legal_name",
          "logo_primary",
          "color_primary.*",
          "color_secondary.*",
          "ratings",
          "reviews_count",
        ],
      },
    }).then(res => {
      return res;
    });
  });

  const {
    color_primary,
    color_secondary,
    company_legal_name,
    logo_primary,
    ratings,
    reviews_count,
  } = data.value;

  const logo = getThumbnail(logo_primary);

  /**
   * Set Site Colors
   */
  const colorVariables = [
    ...prepareColorPalette("primary", color_primary),
    ...prepareColorPalette("secondary", color_secondary),
  ].join(";");

  // setColorPalette("primary", color_primary);
  // setColorPalette("secondary", color_secondary);

  /**
   * Set Schema
   */
  useSchemaOrg([
    defineOrganization({
      name: company_legal_name,
      logo,
      sameAs: ["https://twitter.com/7SpanHQ"],
      aggregateRating: {
        ratingValue: ratings,
        reviewCount: reviews_count,
      },
    }),
  ]);

  return {
    colorVariables,
  };
};
