import { Link } from "react-router-dom";
import GridLines from "../components/GridLines";
import Navbar from "../components/Navbar";
import ResponsiveImage from "../components/ResponsiveImage";
import { getProjectSlug, projects } from "../data/projects";
import { usePageTitle } from "../hooks/usePageTitle";
import { CELL_NAME_CLASS, columnLines, rowLines } from "../utils/grid";

function Works() {
  usePageTitle("Works");

  return (
    <div className="relative min-h-screen bg-white dark:bg-darkBg overflow-hidden transition-colors duration-500">
      <Navbar gridAligned centerLogo />

      <GridLines horizontal={[{ top: "67px", delay: 0 }]} className="z-raised" />

      {/* Las verticales recorren toda la página, cruzando la barra superior */}
      <GridLines vertical={columnLines(3)} className="z-raised lg:hidden" />
      <GridLines vertical={columnLines(5)} className="z-raised hidden lg:block" />

      <main id="main" className="py-[67px] [container-type:inline-size]">
        <h1 className="sr-only">Works</h1>

        <div className="relative grid grid-cols-3 lg:grid-cols-5">
          <GridLines horizontal={rowLines(5)} className="z-raised lg:hidden" />
          <GridLines horizontal={rowLines(3)} className="z-raised hidden lg:block" />

          {projects.map(({ name, img }) => (
            <Link
              key={name}
              to={`/works/${getProjectSlug(name)}`}
              className="group relative block aspect-[384/539] overflow-hidden focus-visible:[outline-offset:-4px]"
            >
              <ResponsiveImage
                image={img}
                alt=""
                sizes="(min-width: 1024px) 40vw, 60vw"
                className="w-full h-full object-cover"
              />
              {/* Con mouse tapa la imagen hasta el hover; en pantallas táctiles es solo el rótulo */}
              <div className="absolute inset-x-0 bottom-0 can-hover:top-0 flex items-end justify-center bg-white dark:bg-darkBg can-hover:group-hover:opacity-0 can-hover:group-focus-visible:opacity-0 transition-opacity duration-700 ease-in-out z-base">
                <p className={CELL_NAME_CLASS}>{name}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Works;
