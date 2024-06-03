import { toRaw } from "vue";

export const useSectionData = (props, params) => {
  return useAsyncData(props.itemId, () => {
    const { getItemById } = useDirectusItems();
    return getItemById({
      collection: props.collectionName,
      id: props.itemId,
      params,
    });
  }).then(({ data: { value } }) => {
    return toRaw(value);
  });
};
