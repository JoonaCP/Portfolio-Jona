import { motion, useReducedMotion } from "framer-motion";

const TRANSITION = { duration: 1.6, ease: [0.33, 0, 0.2, 1] };

// --reveal es hasta dónde llega lo visible; desde ahí, la imagen se funde en el 25% siguiente
const MASK = "linear-gradient(to bottom, #000 var(--reveal), transparent calc(var(--reveal) + 25%))";
const HIDDEN = { "--reveal": "-25%" };
const SHOWN = { "--reveal": "100%" };

// Descubre su contenido de arriba a abajo, con el borde difuminado.
// whenVisible: espera a entrar en pantalla, para las imágenes de más abajo en las páginas largas
function Reveal({ as = "div", delay = 0, whenVisible = false, style, ...props }) {
  const reducedMotion = useReducedMotion();
  const Element = motion[as];

  if (reducedMotion) return <Element style={style} {...props} />;

  const trigger = whenVisible
    ? { whileInView: SHOWN, viewport: { once: true } }
    : { animate: SHOWN };

  return (
    <Element
      initial={HIDDEN}
      transition={{ ...TRANSITION, delay }}
      style={{ ...style, maskImage: MASK, WebkitMaskImage: MASK }}
      {...trigger}
      {...props}
    />
  );
}

export default Reveal;
