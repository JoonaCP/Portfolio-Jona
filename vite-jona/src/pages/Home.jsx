import { motion } from "framer-motion";
import Carousel from "../components/Carousel";
import GridLines from "../components/GridLines";
import Navbar from "../components/Navbar";
import ResponsiveImage from "../components/ResponsiveImage";
import { usePageTitle } from "../hooks/usePageTitle";

const SLIDES = [
  { image: "img1", alt: "Interior render" },
  { image: "little", alt: "Little project" },
  { image: "retro", alt: "Retro project" },
  { image: "paris", alt: "Paris project" },
];

const STRIP_IMAGES = [
  { image: "hall/hall2", alt: "Hall project" },
  { image: "soho", alt: "Soho project" },
  { image: "img7", alt: "Exterior architectural render" },
];

function Home() {
  usePageTitle();

  return (
    <div className="relative min-h-screen bg-white dark:bg-darkBg transition-colors duration-500 overflow-hidden">
      {/* Navbar */}
      <Navbar />

      <main id="main">
        {/* ------------------ MOBILE ------------------ */}
        <div className="md:hidden relative w-full min-h-[max(100vh,640px)] overflow-hidden">
          {/* Líneas de la grilla MOBILE animadas */}
          <GridLines
            className="z-raised"
            horizontal={[
              { top: "67px", delay: 0 },
              { top: "248px", delay: 0.2 },
              { top: "529px", delay: 0.4 },
              { top: "578px", delay: 0.6 },
              { bottom: "30px", delay: 0.8 },
            ]}
            vertical={[
              { left: "60px", delay: 1 },
              { right: "60px", delay: 1.2 },
            ]}
          />

          {/* Título + tagline MOBILE */}
          <motion.div
            className="flex flex-col items-center justify-start pt-[81px] px-4 relative z-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            <h1 className="font-migella font-normal text-5xl text-center">
              <span className="block">JONATHAN</span>
              <span className="block mt-2">CALISTRO</span>
            </h1>
            <p className="font-plus text-base mt-6 text-center text-black dark:text-white">
              Architecture and Interior design
            </p>
          </motion.div>

          {/* Carrusel mobile */}
          <motion.div
            className="mt-4 relative z-base mx-[60px] h-[280px] overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <Carousel slides={SLIDES} sizes="100vw" />
          </motion.div>
        </div>

        {/* ------------------ TABLET Y DESKTOP ------------------ */}
        <div className="hidden md:block [container-type:inline-size]">
          {/* --u equivale a 1px de un diseño de 1920px; --row es el alto de fila, que llena las pantallas altas */}
          <div
            className="relative w-full"
            style={{
              "--u": "calc(100cqw / 1920)",
              "--row": "max(calc(var(--u) * 805), calc((100vh - 137px) / 2))",
              minHeight: "calc(137px + var(--row) * 2)",
            }}
          >
            {/* Líneas de la cuadrícula DESKTOP animadas */}
            <GridLines
              className="z-raised"
              horizontal={[
                { top: "67px", delay: 1 },
                { top: "calc(68px + var(--row))", delay: 1.2 },
                { bottom: "67px", delay: 1.4 },
              ]}
              vertical={[
                { left: "33.333%", delay: 0.6 },
                { left: "66.666%", delay: 0.8 },
              ]}
            />

            {/* Textos columna izquierda */}
            <motion.div
              className="absolute flex flex-col justify-between"
              style={{
                left: "0",
                width: "33.333%",
                top: "68px",
                height: "var(--row)",
                paddingInline: "calc(var(--u) * 32)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <h1
                className="font-migella font-normal leading-none"
                style={{ fontSize: "calc(var(--u) * 128)" }}
              >
                <span className="block">JONATHAN</span>
                <span className="block">CALISTRO</span>
              </h1>
              <p
                className="font-plus text-black dark:text-white mb-6"
                style={{ fontSize: "max(16px, calc(var(--u) * 33))" }}
              >
                Architecture and Interior design
              </p>
            </motion.div>

            {/* Carrusel central */}
            <motion.div
              className="absolute overflow-hidden z-base"
              style={{
                left: "33.333%",
                width: "33.333%",
                top: "68px",
                height: "var(--row)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              <Carousel slides={SLIDES} sizes="67vw" />
            </motion.div>

            {/* Imágenes columna izquierda - parte inferior */}
            <motion.div
              className="absolute flex flex-row overflow-hidden z-base"
              style={{
                left: "0",
                width: "33.333%",
                top: "calc(69px + var(--row))",
                bottom: "68px",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.1, duration: 0.8 }}
            >
              {STRIP_IMAGES.map(({ image, alt }) => (
                <div
                  key={image}
                  className="group flex-1 overflow-hidden transition-[flex-grow] duration-500 ease-in-out hover:flex-[2]"
                >
                  <ResponsiveImage
                    image={image}
                    alt={alt}
                    sizes="50vw"
                    className="w-full h-full object-cover transition-[filter] duration-500 ease-in-out filter can-hover:grayscale group-hover:grayscale-0"
                  />
                </div>
              ))}
            </motion.div>

            {/* Imagen derecha inferior */}
            <motion.div
              className="group absolute overflow-hidden z-base"
              style={{
                left: "66.666%",
                width: "33.334%",
                top: "calc(69px + var(--row))",
                bottom: "68px",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.8 }}
            >
              <ResponsiveImage
                image="woman"
                alt="Woman project"
                sizes="50vw"
                className="w-full h-full object-cover"
              />
              <div className="hidden can-hover:block absolute inset-0 bg-white dark:bg-darkBg transition-opacity duration-700 opacity-100 group-hover:opacity-0 pointer-events-none z-base"></div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
