module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { navy: '#0b0b0c', deep: '#111111', panel: '#161616', ice: '#d4af37', ice2: '#e8c961', chrome: '#f2f1ec' },
    fontFamily: { display: ['var(--font-display)', 'system-ui', 'sans-serif'], body: ['var(--font-body)', 'system-ui', 'sans-serif'] },
  } },
  plugins: [],
};
