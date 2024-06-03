import { encodeParam } from "ufo";
import { createOperationsGenerator } from "#image";

const operationsGenerator = createOperationsGenerator({
  keyMap: {
    width: "width",
    height: "height",
    quality: "quality",
  },
  joinWith: "&",
  formatter: (key, val) => encodeParam(key) + "=" + encodeParam(val),
});

export const getImage = (src, { modifiers = {} } = {}) => {
  const imageId = src.replace("/", "");
  const params = operationsGenerator(modifiers);

  const { bunnyCdnUrl } = useAppConfig();

  return {
    url: params
      ? `${bunnyCdnUrl}/${imageId}?${params}`
      : `${bunnyCdnUrl}/${imageId}`,
  };
};

export const validateDomains = true;
export const supportsAlias = true;
