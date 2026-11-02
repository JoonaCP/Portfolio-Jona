import { useCallback, useMemo, useState } from "react";
import GridLines from "./GridLines";
import Lightbox from "./Lightbox";
import Navbar from "./Navbar";
import ResponsiveImage from "./ResponsiveImage";
import { getImageUrl } from "../utils/imageHelper";
import { CELL_NAME_CLASS, columnLines, rowLines } from "../utils/grid";

function ProjectGallery({ name, gallery, rows }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const closeLightbox = useCallback(() => setSelectedIndex(null), []);
  const lightboxImages = useMemo(
    () => gallery.map(({ src, alt }) => ({ src: getImageUrl(src), alt })),
    [gallery]
  );

  return (
    <div className="relative min-h-screen bg-white dark:bg-darkBg transition-colors duration-500 overflow-hidden">
      <Navbar gridAligned />

      <GridLines horizontal={[{ top: "67px", delay: 0 }]} className="z-base" />

      {/* Las verticales recorren toda la página, cruzando la barra superior */}
      <GridLines vertical={columnLines(3)} className="z-base lg:hidden" />
      <GridLines vertical={columnLines(5)} className="z-base hidden lg:block" />

      <main id="main" className="py-[67px] [container-type:inline-size]">
        {/* Misma grilla y proporción de celdas que Works */}
        <div
          className="relative grid grid-cols-3 lg:grid-cols-5 [grid-template-rows:repeat(var(--rows-small),calc(100cqw/3*539/384))] lg:[grid-template-rows:repeat(var(--rows-large),calc(20cqw*539/384))]"
          style={{ "--rows-small": rows.small, "--rows-large": rows.large }}
        >
          <GridLines horizontal={rowLines(rows.small)} className="z-base lg:hidden" />
          <GridLines horizontal={rowLines(rows.large)} className="z-base hidden lg:block" />

          <div className="relative z-raised flex items-end justify-center col-start-2 row-start-1 lg:col-start-3 lg:row-start-3">
            <h1 className={CELL_NAME_CLASS}>{name}</h1>
          </div>

          {gallery.map((image, i) => (
            // Opaca y con borde propio: las líneas de abajo nunca se ven a través de la foto
            <button
              key={image.src}
              type="button"
              aria-label={`Enlarge image: ${image.alt}`}
              className={`group relative z-raised block w-full overflow-hidden cursor-zoom-in bg-white dark:bg-darkBg border-t border-black dark:border-white focus-visible:[outline-offset:-4px] ${image.layout}`}
              onClick={() => setSelectedIndex(i)}
            >
              <ResponsiveImage
                image={image.src}
                alt=""
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.02]"
              />
            </button>
          ))}
        </div>
      </main>

      {selectedIndex !== null && (
        <Lightbox
          images={lightboxImages}
          index={selectedIndex}
          onIndexChange={setSelectedIndex}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
}

export default ProjectGallery;
