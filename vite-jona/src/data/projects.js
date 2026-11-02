// Para agregar un proyecto: poné la foto en source-images/, corré `npm run images` y sumalo acá.
//
// Todos los proyectos usan la grilla de Works: 3 columnas hasta lg y 5 desde lg. El nombre ocupa
// la celda 2 de la fila 1 (hasta lg) o la celda 3 de la fila 3 (desde lg).
// En `gallery`, `layout` indica las celdas de cada imagen, dejando al menos una libre entre ellas;
// las que no arrancan en la primera columna suman `border-l`. Si no alcanzan las filas, agregá
// `rows: { small, large }`.
export const DEFAULT_ROWS = { small: 5, large: 3 };

export const COVER_LAYOUT =
  "col-start-1 col-span-2 row-start-2 row-span-2 lg:row-start-1";

export const projects = [
  {
    name: "HALL",
    img: "hall/hall1",
    gallery: [
      {
        src: "hall/hall1",
        alt: "Hall lounge with a timber ceiling and tall windows facing a garden",
        layout: COVER_LAYOUT,
      },
      {
        src: "hall/hall2",
        alt: "Hall seen toward the garden through full-height windows",
        layout: "col-start-2 col-span-2 row-start-5 border-l lg:col-start-4 lg:row-start-2",
      },
    ],
  },
  {
    name: "KITCHEN",
    img: "kitchen/1",
    gallery: [
      {
        src: "kitchen/1",
        alt: "White kitchen island in front of a layered blue and sand feature wall, beside a slatted glass wall",
        layout: COVER_LAYOUT,
      },
      {
        src: "kitchen/2",
        alt: "Dark kitchen with a long dining table, pendant lights and a marble backsplash",
        layout: "col-start-2 col-span-2 row-start-5 border-l lg:col-start-4 lg:row-start-2",
      },
    ],
  },
  { name: "BROWN", img: "brown" },
  { name: "LITTLE", img: "little" },
  { name: "WOMAN", img: "woman" },
  { name: "SOHO", img: "soho" },
  { name: "SCANDI", img: "scandi" },
  { name: "RETRO", img: "retro" },
  { name: "PARIS", img: "paris" },
  { name: "TONS", img: "tons" },
  { name: "ZOOM", img: "zoom" },
  { name: "LIVING", img: "living" },
  { name: "MODERN SUIT", img: "modern" },
  { name: "GREY", img: "grey" },
  { name: "NEON", img: "neon" },
];

export const getProjectSlug = (name) => name.toLowerCase().replace(/\s+/g, "-");
