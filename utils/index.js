export const defaultProps = () => {
  return {
    collectionName: {
      type: String,
      required: true,
    },
    itemId: {
      type: String,
      required: true,
    },
  };
};

/**
 * Sets Color Variables
 */
const colorShades = [
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
];

export const setColorPalette = (name, palette) => {
  if (process.server) {
    return;
  }

  colorShades.forEach(shade => {
    document
      .querySelector(":root")
      .style.setProperty(`--color-${name}-${shade}`, palette[`_${shade}`]);
  });
};

// Returns the formatted date of blog created
export const formatDate = date => {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

export const getMediaKeys = (relationalKey, primaryKey = "media") => {
  const keys = [
    `${primaryKey}.id`,
    `${primaryKey}.width`,
    `${primaryKey}.height`,
    `${primaryKey}.title`,
    `${primaryKey}.type`,
    `${primaryKey}.filename_disk`,
  ];
  if (relationalKey) return keys.map(item => `${relationalKey}.${item}`);
  else return keys;
};

export const getMultipleMediaKeys = relationalKey => {
  const keys = [
    "media.directus_files_id.id",
    "media.directus_files_id.width",
    "media.directus_files_id.height",
    "media.directus_files_id.title",
    "media.directus_files_id.type",
    "media.directus_files_id.filename_disk",
  ];
  if (relationalKey) return keys.map(item => `${relationalKey}.${item}`);
  else return keys;
};

export const prepareColorPalette = (name, palette) => {
  return colorShades.map(shade => {
    return `--color-${name}-${shade}:${palette["_" + shade]}`;
  });
};

export const getLinkKeys = relationalKey => {
  const keys = ["link.url", "link.target", "link.page.path", "link.section"];

  if (relationalKey) return keys.map(item => `${relationalKey}.${item}`);
  else return keys;
};

export const getProjectKeys = relationalKey => {
  const keys = [
    "about.metadata.title",
    "about.metadata.subtitle",
    "about.metadata.description",
    "about.button_primary.link.page.path",
    "about.button_primary.link.section",
    "about.button_primary.link.url",
    "about.button_primary.link.target",
    "technologies.technologies.sw_technologies_id.name",
    "technologies.technologies.sw_technologies_id.color_primary.*",
    ...getLinkKeys(),
    ...getMediaKeys("screenshots.cards.sw_cards_id"),
  ];

  if (relationalKey) return keys.map(item => `${relationalKey}.${item}`);
  else return keys;
};

export const getPublishedFilter = () => {
  return {
    status: "published",
  };
};

export const blankBoxes = (items, cols) => {
  const available = items.length;
  const required = available % cols ? cols - (available % cols) : 0;
  return required;
};
