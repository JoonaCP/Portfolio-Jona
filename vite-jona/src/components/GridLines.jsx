import { motion } from "framer-motion";

const TRANSITION = { duration: 1.2, ease: [0.76, 0, 0.24, 1] };

function GridLine({ axis, delay = 0, className, style }) {
  return (
    <motion.div
      className={`absolute bg-black dark:bg-white ${className}`}
      style={style}
      initial={{ [axis]: 0 }}
      animate={{ [axis]: 1 }}
      transition={{ ...TRANSITION, delay }}
    />
  );
}

// Cada línea es { delay, ...posición }, por ejemplo { top: "67px", delay: 0.2 }
function GridLines({ horizontal = [], vertical = [], className = "" }) {
  return (
    <div aria-hidden="true" className={`absolute inset-0 pointer-events-none ${className}`}>
      {horizontal.map(({ delay, ...style }, i) => (
        <GridLine
          key={`h-${i}`}
          axis="scaleX"
          delay={delay}
          className="left-0 right-0 h-[1px] origin-left"
          style={style}
        />
      ))}
      {vertical.map(({ delay, ...style }, i) => (
        <GridLine
          key={`v-${i}`}
          axis="scaleY"
          delay={delay}
          className="top-0 bottom-0 w-[1px] origin-top"
          style={style}
        />
      ))}
    </div>
  );
}

export default GridLines;
