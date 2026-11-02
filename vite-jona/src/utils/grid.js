// Grilla compartida por Works y los proyectos: 3 columnas hasta lg y 5 desde lg.
// Las posiciones van en porcentaje para coincidir siempre con las celdas.
const gridLinePositions = (count) =>
  Array.from({ length: count - 1 }, (_, i) => `${((i + 1) / count) * 100}%`);

export const rowLines = (rows) =>
  [...gridLinePositions(rows), "100%"].map((top, i) => ({ top, delay: 0.3 + i * 0.3 }));

export const columnLines = (columns) =>
  gridLinePositions(columns).map((left, i) => ({ left, delay: 0.5 + i * 0.3 }));

// 0.1em es lo que hay bajo la base de las letras: deja 20px fijos hasta el borde de la celda
export const CELL_NAME_CLASS =
  "text-black dark:text-white font-plus font-normal text-sm md:text-2xl lg:text-[length:2.5cqw] leading-none md:leading-none whitespace-nowrap text-center px-1 pt-2 pb-[calc(20px-0.1em)]";
