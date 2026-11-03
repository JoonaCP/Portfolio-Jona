// Para agregar un proyecto: poné las fotos en source-images/<proyecto>/, corré `npm run images` y sumalo acá.
//
// Todos los proyectos usan la grilla de Works: 3 columnas hasta lg y 5 desde lg. El nombre y la
// descripción ocupan la celda 2 de la fila 1 (hasta lg) o la celda 3 de la fila 3 (desde lg);
// `nameLayout` y `descriptionLayout` los ubican en otras celdas, con la descripción por separado.
// `details` son los datos del proyecto: cada bloque tiene sus líneas y las celdas de su `layout`.
// En `gallery`, `layout` indica las celdas de cada imagen, dejando al menos una libre entre ellas;
// las que no arrancan en la primera columna suman `border-l`. Si no alcanzan las filas, agregá
// `rows: { small, large }`. `coverClass` corre el encuadre de la portada en Works.
export const DEFAULT_ROWS = { small: 5, large: 3 };

export const COVER_LAYOUT =
  "col-start-1 col-span-2 row-start-2 row-span-2 lg:row-start-1";

// Para portadas apaisadas, que en COVER_LAYOUT perderían demasiado de los costados
const WIDE_COVER_LAYOUT =
  "col-start-1 col-span-3 row-start-2 lg:col-span-4 lg:row-start-1 lg:row-span-2";

// Nombre y descripción al lado de COVER_LAYOUT, uno sobre otro
const TEXT_BESIDE_COVER = {
  nameLayout: "col-start-3 row-start-2 lg:row-start-1",
  descriptionLayout: "col-start-3 row-start-3 lg:row-start-2",
};

// Para un bloque de `details` al pie de su celda, con el mismo margen que tiene arriba
const ALIGN_BOTTOM = "self-end pb-2 md:pb-4 lg:pb-[1.5cqw]";

export const projects = [
  {
    name: "HALL",
    img: "hall/hall1",
    description: "A timber-ceilinged lounge that opens onto the garden through full-height windows.",
    ...TEXT_BESIDE_COVER,
    details: [
      { lines: ["Created with:", "SketchUp and D5 Render", "Photoshop"], layout: "col-start-1 row-start-4 lg:row-start-3" },
      { lines: ["2026"], layout: "col-start-2 row-start-4 lg:row-start-3" },
    ],
    rows: { small: 6, large: 3 },
    gallery: [
      {
        src: "hall/hall1",
        alt: "Hall lounge with a timber ceiling and tall windows facing a garden",
        layout: COVER_LAYOUT,
      },
      {
        src: "hall/hall2",
        alt: "Hall seen toward the garden through full-height windows",
        layout: "col-start-2 col-span-2 row-start-5 row-span-2 border-l lg:col-start-4 lg:row-start-2",
      },
    ],
  },
  {
    name: "KITCHEN",
    img: "kitchen/1",
    description: "Two moods: a bright island against layered color and a dark, marble-lined dining kitchen.",
    ...TEXT_BESIDE_COVER,
    details: [
      { lines: ["Created with:", "SketchUp and D5 Render", "Photoshop"], layout: "col-start-1 row-start-4 lg:row-start-3" },
      { lines: ["2022"], layout: "col-start-2 row-start-4 lg:row-start-3" },
    ],
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
  {
    name: "BROWN",
    img: "brown/1",
    description: "An open living and dining room in dark concrete tones, warmed by terracotta and wood.",
    ...TEXT_BESIDE_COVER,
    details: [
      {
        lines: ["Created with:", "SketchUp and D5 Render", "Photoshop"],
        layout: `col-start-2 row-start-5 lg:col-start-4 lg:row-start-1 ${ALIGN_BOTTOM}`,
      },
      { lines: ["2026"], layout: `col-start-3 row-start-5 lg:col-start-5 lg:row-start-1 ${ALIGN_BOTTOM}` },
    ],
    rows: { small: 7, large: 3 },
    gallery: [
      {
        src: "brown/1",
        alt: "Wooden dining chairs at a table in front of dark cabinets and a terracotta backsplash",
        layout: "col-start-1 col-span-2 row-start-2 row-span-3 lg:row-start-1",
      },
      {
        src: "brown/2",
        alt: "Dim open living room with sheer curtains, a dark sofa, a terracotta rug and a kitchen at the back",
        layout: "col-start-2 col-span-2 row-start-6 row-span-2 border-l lg:col-start-4 lg:row-start-2",
      },
    ],
  },
  {
    name: "LITTLE",
    img: "little/1",
    description: "A small bedroom, with a closer look at the little details of its objects.",
    nameLayout: "col-start-1 row-start-2 lg:col-start-2 lg:row-start-1",
    descriptionLayout: "col-start-1 row-start-3 lg:col-start-2 lg:row-start-2",
    details: [
      {
        lines: ["Created with:", "SketchUp and D5 Render", "Photoshop"],
        layout: "col-start-2 row-start-4 lg:col-start-3 lg:row-start-3",
      },
      { lines: ["2023"], layout: "col-start-3 row-start-4 lg:col-start-4 lg:row-start-3" },
    ],
    rows: { small: 8, large: 5 },
    gallery: [
      {
        src: "little/1",
        alt: "Wood and white desk under a large window, with a task lamp, books and a potted fern",
        layout: "col-start-2 col-span-2 row-start-2 row-span-2 border-l lg:col-start-3 lg:col-span-3 lg:row-start-1",
      },
      {
        src: "little/2",
        alt: "Close view of the desk with a coffee cup and newspaper, below triangular wall art",
        layout: "col-start-1 col-span-2 row-start-5 row-span-2 lg:row-start-4",
      },
      {
        src: "little/3",
        alt: "Small bedroom with a low bed against a textured yellow wall and a desk beside the window",
        layout: "col-start-2 col-span-2 row-start-8 border-l lg:col-start-4 lg:row-start-4",
      },
    ],
  },
  {
    name: "WOMAN",
    img: "woman/1",
    description: "A sand-toned room of soft leather and sculpted timber screens, styled around a mannequin.",
    ...TEXT_BESIDE_COVER,
    details: [
      {
        lines: ["Created with:", "SketchUp and V-⁠Ray", "Photoshop"],
        layout: "col-start-2 row-start-6 lg:col-start-4 lg:row-start-3",
      },
      { lines: ["2026"], layout: "col-start-3 row-start-6 lg:col-start-5 lg:row-start-3" },
    ],
    rows: { small: 8, large: 5 },
    gallery: [
      {
        src: "woman/1",
        alt: "Tan leather sofa in front of a sculptural timber screen, beside a brass floor lamp and a mannequin",
        layout: COVER_LAYOUT,
      },
      {
        src: "woman/2",
        alt: "White room with a mannequin in a cream dress, a brass floor lamp and a tan sofa with dried palms",
        layout: "col-start-2 col-span-2 row-start-5 border-l lg:col-start-4 lg:row-start-2",
      },
      {
        src: "woman/3",
        alt: "Tan sofa against curving timber screens, with a mannequin and a globe floor lamp on the left",
        layout: "col-start-1 col-span-3 row-start-7 row-span-2 lg:col-start-3 lg:row-start-4 lg:border-l",
      },
    ],
  },
  {
    name: "SOHO",
    img: "soho/1",
    description: "A cognac leather sofa, herringbone floors and a woven wall piece set a relaxed, lived-in mood.",
    ...TEXT_BESIDE_COVER,
    details: [
      { lines: ["Created with:", "SketchUp and D5 Render", "Photoshop"], layout: "col-start-1 row-start-4 lg:row-start-3" },
      { lines: ["2026"], layout: "col-start-2 row-start-4 lg:row-start-3" },
    ],
    rows: { small: 7, large: 4 },
    gallery: [
      {
        src: "soho/1",
        alt: "Corner of a cognac leather sofa with a grey throw, next to potted plants on a herringbone floor",
        layout: COVER_LAYOUT,
      },
      {
        src: "soho/2",
        alt: "Cognac leather sofa below a large round woven wall piece, with small side tables on a grey rug",
        layout: "col-start-2 col-span-2 row-start-5 border-l lg:col-start-4 lg:row-start-2",
      },
      {
        src: "soho/3",
        alt: "Angled view of the leather sofa and round wall piece, with a pendant lamp near a tall window",
        layout: "col-start-1 col-span-2 row-start-7 lg:row-start-4",
      },
    ],
  },
  {
    name: "SCANDI",
    img: "scandi",
    description: "A bright kitchen with a timber roof, an arched alcove and patterned cement tiles.",
    ...TEXT_BESIDE_COVER,
    details: [
      {
        lines: ["Created with:", "SketchUp and D5 Render", "Photoshop"],
        layout: "col-start-2 row-start-4 lg:col-start-4 lg:row-start-2",
      },
      { lines: ["2024"], layout: "col-start-3 row-start-4 lg:col-start-5 lg:row-start-2" },
    ],
    rows: { small: 4, large: 3 },
    gallery: [
      {
        src: "scandi",
        alt: "Kitchen with a pitched timber roof and an arched alcove, a white dining set and patterned floor tiles",
        layout: COVER_LAYOUT,
      },
    ],
  },
  {
    name: "RETRO",
    img: "retro/1",
    description: "An apartment in mint and blush, where bold circles and striped rugs recall retro graphics.",
    nameLayout: "col-start-1 row-start-3 lg:col-start-2",
    descriptionLayout: "col-start-1 row-start-4 lg:col-start-2",
    details: [
      { lines: ["Created with:", "SketchUp and D5 Render", "Photoshop"], layout: "col-start-2 row-start-3 lg:col-start-3" },
      { lines: ["2024"], layout: "col-start-3 row-start-3 lg:col-start-4" },
    ],
    rows: { small: 12, large: 8 },
    gallery: [
      {
        src: "retro/1",
        alt: "Living room with a sectional sofa, mint wall circles, a round pendant and a striped rug",
        layout: WIDE_COVER_LAYOUT,
      },
      {
        src: "retro/2",
        alt: "Long living room with a blush and green media wall on the left and a view of hills through the window",
        layout: "col-start-2 col-span-2 row-start-4 border-l lg:col-start-3 lg:col-span-3",
      },
      {
        src: "retro/3",
        alt: "Blush and green media wall with lit shelves, facing a round green table and striped armchair",
        layout: "col-start-1 col-span-2 row-start-6",
      },
      {
        src: "retro/4",
        alt: "Home office with a dark desk in front of lit shelves, beside tall windows overlooking the city",
        layout: "col-start-2 col-span-2 row-start-8 border-l lg:col-start-4 lg:row-start-6",
      },
      {
        src: "retro/5",
        alt: "Bedroom with a grey bed below a mint half-circle wall piece, between wood panels and soft grey walls",
        layout: "col-start-1 col-span-2 row-start-10 lg:row-start-8",
      },
      {
        src: "retro/6",
        alt: "Bedroom with sage and grey bedding, an arched pool artwork and a slatted wood wall by the window",
        layout: "col-start-2 col-span-2 row-start-12 border-l lg:col-start-4 lg:row-start-8",
      },
    ],
  },
  {
    name: "PARIS",
    img: "paris/1",
    description: "A warm living room of cognac leather and brass, with the Eiffel Tower framed through the glass.",
    nameLayout: "col-start-1 row-start-1",
    descriptionLayout: "col-start-1 row-start-2",
    details: [
      { lines: ["Created with:", "SketchUp and V-⁠Ray", "Photoshop"], layout: "col-start-2 row-start-3 lg:col-start-3" },
      { lines: ["2023"], layout: "col-start-3 row-start-3 lg:col-start-4" },
    ],
    rows: { small: 6, large: 4 },
    gallery: [
      {
        src: "paris/1",
        alt: "Tan-walled living room with a leather sofa, a portrait artwork and a corner window facing the Eiffel Tower",
        layout: "col-start-2 col-span-2 row-start-2 border-l lg:col-span-4 lg:row-start-1 lg:row-span-2",
      },
      {
        src: "paris/2",
        alt: "Yellow flowers in a brass vase on a round wooden table, in front of the leather sofa",
        layout: "col-start-1 col-span-2 row-start-4",
      },
      {
        src: "paris/3",
        alt: "Leather sofa and dark armchair under an arc lamp, beside corner windows overlooking trees and towers",
        layout: "col-start-2 col-span-2 row-start-6 border-l lg:col-start-4 lg:row-start-4",
      },
    ],
  },
  {
    name: "TONS",
    img: "tons/1",
    description: "A calm bedroom in layered browns and greys, from wood panels to textured linens.",
    nameLayout: "col-start-3 row-start-1 lg:col-start-5",
    descriptionLayout: "col-start-3 row-start-2 lg:col-start-5",
    details: [
      { lines: ["Created with:", "SketchUp and D5 Render", "Photoshop"], layout: "col-start-1 row-start-4 lg:col-start-3" },
      { lines: ["2026"], layout: "col-start-1 row-start-5 lg:col-start-3" },
    ],
    rows: { small: 13, large: 8 },
    gallery: [
      {
        src: "tons/1",
        alt: "Bedroom with dark wood wardrobes, a bed with a rust throw, a planet artwork and a striped rug",
        layout: "col-start-1 col-span-2 row-start-2 lg:col-span-4 lg:row-start-1 lg:row-span-2",
      },
      {
        src: "tons/2",
        alt: "Close-up of grey and rust pillows on the bed, against a textured white wall",
        layout: "col-start-2 col-span-2 row-start-4 row-span-2 border-l lg:col-start-4",
      },
      {
        src: "tons/3",
        alt: "Bed with a rust throw and two gold table lamps, framed by wood panels and a planet artwork",
        layout: "col-start-1 col-span-2 row-start-7 lg:row-start-4",
      },
      {
        src: "tons/4",
        alt: "Detail of the headboard with grey and rust pillows and a knitted throw, against a wood panel",
        layout: "col-start-1 col-span-2 row-start-9 row-span-2 lg:row-start-6",
      },
      {
        src: "tons/5",
        alt: "Foot of the bed and a nightstand with a gold lamp and small plant, above a black and white rug",
        layout: "col-start-2 col-span-2 row-start-12 row-span-2 border-l lg:col-start-4 lg:row-start-7",
      },
    ],
  },
  {
    name: "ZOOM",
    img: "zoom/1",
    coverClass: "object-[80%_50%]",
    description: "A bedroom built into a wall of shelves, seen up close through its everyday objects.",
    nameLayout: "col-start-3 row-start-3",
    descriptionLayout: "col-start-3 row-start-4",
    details: [
      { lines: ["Created with:", "SketchUp and Enscape", "Photoshop"], layout: "col-start-1 row-start-3" },
      { lines: ["2021"], layout: "col-start-2 row-start-3" },
    ],
    rows: { small: 10, large: 6 },
    gallery: [
      {
        src: "zoom/1",
        alt: "Close-up of a yellow flip clock on a desk by a laptop and a book, with a window over a wooded landscape",
        layout: "col-start-1 col-span-3 row-start-2 lg:row-start-1 lg:row-span-2 [&_img]:object-[30%_50%]",
      },
      {
        src: "zoom/2",
        alt: "Wood armchair with a jacket draped over it, in front of tall shelves, with a brown dog sitting behind",
        layout: "col-start-1 col-span-2 row-start-4",
      },
      {
        src: "zoom/3",
        alt: "Low platform bed with open storage holding weights, against a wall of wooden shelves",
        layout: "col-start-2 col-span-2 row-start-6 border-l lg:col-start-4 lg:row-start-4",
      },
      {
        src: "zoom/4",
        alt: "Wood dresser with a lamp below a gold world map and two botanical prints, beside the bed",
        layout: "col-start-1 col-span-2 row-start-8 lg:row-start-6",
      },
      {
        src: "zoom/5",
        alt: "Full view of the bedroom with a platform bed set into shelves, a desk by the window and sunlight on the rug",
        layout: "col-start-1 col-span-3 row-start-10 lg:col-start-4 lg:col-span-2 lg:row-start-6 lg:border-l",
      },
    ],
  },
  {
    name: "LIVING",
    img: "living/1",
    description: "An open living, dining and kitchen space with white beams, soft neutrals and a fireplace.",
    nameLayout: "col-start-3 row-start-1 lg:col-start-5",
    descriptionLayout: "col-start-3 row-start-2 lg:col-start-5",
    details: [
      // ⁠ evita que V-Ray se corte en el guion
      { lines: ["Created with:", "SketchUp and V-⁠Ray", "Photoshop"], layout: "col-start-1 row-start-3" },
      { lines: ["2021"], layout: "col-start-2 row-start-3" },
    ],
    rows: { small: 6, large: 4 },
    gallery: [
      {
        src: "living/1",
        alt: "Living room with a wooden coffee table, armchairs and a lit fireplace, opening to a dining area",
        layout: "col-start-1 col-span-2 row-start-2 lg:col-span-4 lg:row-start-1 lg:row-span-2",
      },
      {
        src: "living/2",
        alt: "Round dining table with blush and grey chairs in a long room with white beams and curtained windows",
        layout: "col-start-1 col-span-2 row-start-4",
      },
      {
        src: "living/3",
        alt: "White kitchen with a dark island and bar stools, tall cabinets and built-in ovens",
        layout: "col-start-2 col-span-2 row-start-6 border-l lg:col-start-4 lg:row-start-4",
      },
    ],
  },
  {
    name: "MODERN SUITE",
    img: "modern-suite/1",
    description: "A light-filled living room in soft grey and oak, anchored by one bold black wall piece.",
    nameLayout: "col-start-1 row-start-1",
    descriptionLayout: "col-start-1 row-start-2",
    details: [
      { lines: ["Created with:", "SketchUp and D5 Render", "Photoshop"], layout: "col-start-2 row-start-3 lg:col-start-3" },
      { lines: ["2025"], layout: "col-start-3 row-start-3 lg:col-start-4" },
    ],
    rows: { small: 8, large: 6 },
    gallery: [
      {
        src: "modern-suite/1",
        alt: "White living room with a grey sofa and armchair, a tall plant, a low table and a round black wall light",
        layout: "col-start-2 col-span-2 row-start-2 border-l lg:col-span-4 lg:row-start-1 lg:row-span-2",
      },
      {
        src: "modern-suite/2",
        alt: "Nesting white and wood coffee tables with a plant and a white sculpture, in front of the grey sofa",
        layout: "col-start-2 col-span-2 row-start-4 border-l lg:col-start-1 lg:border-l-0",
      },
      {
        src: "modern-suite/3",
        alt: "Round black and brass wall light with a slatted section, on a white wall beside a hanging lamp",
        layout: "col-start-1 col-span-2 row-start-6 lg:col-start-4 lg:row-start-4 lg:border-l",
      },
      {
        src: "modern-suite/4",
        alt: "Grey sofa seen at an angle, with a triangular coffee table and a tall plant by the sheer curtains",
        layout: "col-start-1 col-span-3 row-start-8 lg:col-start-2 lg:row-start-6 lg:border-l",
      },
    ],
  },
  {
    name: "GREY",
    img: "grey/1",
    description: "A serene bedroom against charcoal walls, with sage linens and a sculptural floor lamp.",
    nameLayout: "col-start-3 row-start-1 lg:col-start-5",
    descriptionLayout: "col-start-3 row-start-2 lg:col-start-5",
    details: [
      { lines: ["Created with:", "SketchUp and V-⁠Ray", "Photoshop"], layout: "col-start-1 row-start-3" },
      { lines: ["2021"], layout: "col-start-2 row-start-3" },
    ],
    rows: { small: 7, large: 5 },
    gallery: [
      {
        src: "grey/1",
        alt: "Bed with sage pillows against a charcoal wall with line art, a fiddle-leaf plant and a figure-shaped lamp",
        layout: "col-start-1 col-span-2 row-start-2 lg:col-span-4 lg:row-start-1 lg:row-span-2",
      },
      {
        src: "grey/2",
        alt: "Bedroom seen at an angle, with a sage throw on the bed, a sculptural lamp and sheer curtains facing the city",
        layout: "col-start-2 col-span-2 row-start-4 border-l lg:col-start-1 lg:border-l-0",
      },
      {
        src: "grey/3",
        alt: "Bed beside a tall window and slatted wall, under a line art print and a string of glass pendant lights",
        layout: "col-start-1 col-span-3 row-start-6 row-span-2 lg:col-start-4 lg:col-span-2 lg:row-start-4 lg:border-l",
      },
    ],
  },
  {
    name: "NEON",
    img: "neon",
    description: "A marble-clad bathroom where a glowing geometric light stands out against dark stone.",
    nameLayout: "col-start-3 row-start-2 lg:col-start-4 lg:row-start-1",
    descriptionLayout: "col-start-3 row-start-3 lg:col-start-4 lg:row-start-2",
    details: [
      { lines: ["Created with:", "SketchUp and V-⁠Ray", "Photoshop"], layout: "col-start-1 row-start-4 lg:row-start-3" },
      { lines: ["2024"], layout: "col-start-2 row-start-4 lg:row-start-3" },
    ],
    rows: { small: 4, large: 3 },
    gallery: [
      {
        src: "neon",
        alt: "Dark marble bathroom with a white freestanding tub, a glass shower and a glowing geometric wall light",
        layout: COVER_LAYOUT,
      },
    ],
  },
];

export const getProjectSlug = (name) => name.toLowerCase().replace(/\s+/g, "-");
