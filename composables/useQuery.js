const queries = {
  projects: [
    "name",
    "description",
    "logo.id",
    "logo.title",
    "logo.filename_disk",
    ...getMultipleMediaKeys(),
  ],
};

export const useQuery = (collection, path) => {
  return queries[collection].map(key => `${path}.${key}`);
};
