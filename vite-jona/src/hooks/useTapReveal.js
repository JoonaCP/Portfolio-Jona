import { useCallback, useState } from "react";

// Reemplaza el hover en pantallas táctiles: el primer toque revela el elemento y el segundo sigue de largo
export function useTapReveal() {
  const [revealed, setRevealed] = useState(null);

  const clear = useCallback(() => setRevealed(null), []);

  const reveal = (e, key) => {
    const isKeyboard = e.detail === 0;
    if (isKeyboard || revealed === key || window.matchMedia("(hover: hover)").matches) return;

    e.preventDefault();
    e.stopPropagation();
    setRevealed(key);
  };

  return { revealed, reveal, clear };
}
