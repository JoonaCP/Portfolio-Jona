import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useDialog } from "../hooks/useDialog";

const SWIPE_DISTANCE = 50;

// Recorre las imágenes del proyecto; la grilla de atrás queda igual
function Lightbox({ images, index, onIndexChange, onClose }) {
  const dialogRef = useDialog(true, onClose);
  const touchStart = useRef(null);

  const image = images[index];
  const count = images.length;
  const hasSeveral = count > 1;

  const show = (next) => onIndexChange((next + count) % count);

  useEffect(() => {
    if (!hasSeveral) return;

    const onKeyDown = (e) => {
      if (e.key === "ArrowRight") onIndexChange((index + 1) % count);
      if (e.key === "ArrowLeft") onIndexChange((index - 1 + count) % count);
    };
    document.addEventListener("keydown", onKeyDown);

    // Deja listas las imágenes vecinas para que el cambio sea inmediato
    new Image().src = images[(index + 1) % count].src;
    new Image().src = images[(index - 1 + count) % count].src;

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [count, hasSeveral, images, index, onIndexChange]);

  const onTouchEnd = (e) => {
    if (!hasSeveral || touchStart.current === null) return;
    const distance = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(distance) >= SWIPE_DISTANCE) show(index + (distance < 0 ? 1 : -1));
    touchStart.current = null;
  };

  const navButtonClass =
    "px-3 py-2 text-white font-plus font-light text-sm hover:opacity-70 transition-opacity duration-300";

  return (
    <div ref={dialogRef} role="dialog" aria-modal="true" aria-label={image.alt}>
      <div className="fixed inset-0 z-modal bg-black bg-opacity-95" onClick={onClose} />

      <button
        onClick={onClose}
        className="fixed top-3 right-3 w-11 h-11 flex items-center justify-center bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-colors duration-300 text-white z-modal"
        aria-label="Close image"
      >
        <span className="block h-[2px] w-6 bg-white rotate-45 absolute" />
        <span className="block h-[2px] w-6 bg-white -rotate-45 absolute" />
      </button>

      <div className="fixed inset-x-0 top-16 bottom-16 z-modal flex items-center justify-center px-4 pointer-events-none">
        <motion.img
          key={image.src}
          src={image.src}
          alt={image.alt}
          className="max-w-full max-h-full object-contain pointer-events-auto select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          onTouchStart={(e) => {
            touchStart.current = e.touches[0].clientX;
          }}
          onTouchEnd={onTouchEnd}
        />
      </div>

      <div className="fixed inset-x-0 bottom-3 h-11 z-modal flex items-center justify-center gap-4 pointer-events-none [&>*]:pointer-events-auto">
        {hasSeveral ? (
          <>
            <button type="button" onClick={() => show(index - 1)} className={navButtonClass}>
              PREV
            </button>
            <p aria-live="polite" className="w-12 text-center text-white font-plus font-light text-sm">
              {index + 1} / {count}
            </p>
            <button type="button" onClick={() => show(index + 1)} className={navButtonClass}>
              NEXT
            </button>
          </>
        ) : (
          <p className="text-white text-sm font-plus font-light opacity-70">
            Press Esc or click outside to close
          </p>
        )}
      </div>
    </div>
  );
}

export default Lightbox;
