// Las versiones se generan con `npm run images` a partir de source-images/
const WIDTHS = [640, 1280, 1920];

export const getImageUrl = (image, width = 1920) => {
  return `${import.meta.env.BASE_URL}images/${image}-${width}.webp`;
};

export const getImageSrcSet = (image) => {
  return WIDTHS.map((width) => `${getImageUrl(image, width)} ${width}w`).join(", ");
};
