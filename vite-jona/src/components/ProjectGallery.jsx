import { useCallback, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import GridLines from "./GridLines";
import Lightbox from "./Lightbox";
import Navbar from "./Navbar";
import { Underline } from "./NavLinks";
import ResponsiveImage from "./ResponsiveImage";
import { getProjectSlug } from "../data/projects";
import { getImageUrl } from "../utils/imageHelper";
import {
  CELL_DESCRIPTION_CLASS,
  CELL_DETACHED_DESCRIPTION_CLASS,
  CELL_NAME_CLASS,
  columnLines,
  rowLines,
} from "../utils/grid";

function ProjectLink({ label, name, className }) {
  return (
    <Link
      to={`/works/${getProjectSlug(name)}`}
      className={`group relative justify-self-center self-center flex flex-col items-center leading-tight whitespace-nowrap text-black dark:text-white font-plus font-light text-sm md:text-base lg:text-lg xl:text-xl ${className}`}
    >
      <span>{label}</span>
      <span>{name}</span>
      <Underline />
    </Link>
  );
}

function ProjectGallery({
  name,
  description,
  nameLayout = "col-start-2 row-start-1 lg:col-start-3 lg:row-start-3",
  descriptionLayout,
  gallery,
  rows,
  previous,
  next,
}) {
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

      <main id="main" className="pt-[67px] [container-type:inline-size]">
        {/* Misma grilla y proporción de celdas que Works */}
        <div
          className="relative grid grid-cols-3 lg:grid-cols-5 [grid-template-rows:repeat(var(--rows-small),calc(100cqw/3*539/384))] lg:[grid-template-rows:repeat(var(--rows-large),calc(20cqw*539/384))]"
          style={{ "--rows-small": rows.small, "--rows-large": rows.large }}
        >
          <GridLines horizontal={rowLines(rows.small)} className="z-base lg:hidden" />
          <GridLines horizontal={rowLines(rows.large)} className="z-base hidden lg:block" />

          <div className={`relative z-raised flex flex-col items-center justify-end ${nameLayout}`}>
            {description && !descriptionLayout && <p className={CELL_DESCRIPTION_CLASS}>{description}</p>}
            <h1 className={CELL_NAME_CLASS}>{name}</h1>
          </div>

          {description && descriptionLayout && (
            <p className={`relative z-raised ${CELL_DETACHED_DESCRIPTION_CLASS} ${descriptionLayout}`}>{description}</p>
          )}

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

        <nav aria-label="Projects" className="relative z-raised grid grid-cols-3 lg:grid-cols-5 h-[67px]">
          <ProjectLink label="PREVIOUS" name={previous} className="col-start-1" />
          <ProjectLink label="NEXT" name={next} className="col-start-3 lg:col-start-5" />
        </nav>
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
