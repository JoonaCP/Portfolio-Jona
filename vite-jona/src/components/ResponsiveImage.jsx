import { getImageSrcSet, getImageUrl } from "../utils/imageHelper";

// `sizes` debe contemplar el recorte de object-cover: una foto apaisada en una celda
// vertical necesita más ancho que el de la celda.
function ResponsiveImage({ image, alt, sizes, className = "" }) {
  return (
    <img
      src={getImageUrl(image, 1280)}
      srcSet={getImageSrcSet(image)}
      sizes={sizes}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
    />
  );
}

export default ResponsiveImage;
