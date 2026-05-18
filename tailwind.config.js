export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 40px rgba(56, 189, 248, 0.14)',
        glass: '0 20px 80px rgba(10, 15, 30, 0.55)'
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at top, rgba(56,189,248,0.16), transparent 28%), radial-gradient(circle at 20% 40%, rgba(168,85,247,0.14), transparent 18%), radial-gradient(circle at 80% 20%, rgba(59,130,246,0.12), transparent 20%)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
