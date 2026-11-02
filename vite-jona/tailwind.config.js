// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'can-hover': { raw: '(hover: hover)' }, // dispositivos con mouse
      },
      fontFamily: {
        plus: ['PlusJakarta', 'sans-serif'],
        migella: ['GloryMigella', 'cursive'],
      },
      colors: {
        darkBg: '#151515',
      },
      // Capas de la página, de abajo hacia arriba
      zIndex: {
        base: '10', // imágenes y contenido
        raised: '20', // líneas de la grilla sobre el contenido
        nav: '30',
        menu: '40',
        modal: '50', // panel lateral, modal de imagen y botón de menú
      },
    },
  },
  plugins: [],
};
