import { useEffect, useRef } from "react";

// Mientras está abierto: mueve el foco adentro, lo mantiene ahí, cierra con Esc y bloquea el scroll.
// `onClose` debe ser estable (useCallback).
export function useDialog(open, onClose) {
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;

    const previous = document.activeElement;
    const focusables = () => [...ref.current.querySelectorAll("a[href], button")];
    focusables()[0]?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key !== "Tab") return;

      const items = focusables();
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previous?.focus?.();
    };
  }, [open, onClose]);

  return ref;
}
