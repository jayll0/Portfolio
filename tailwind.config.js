/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#00ff99',
        ink: '#05060a',
      },
      fontFamily: {
        display: ['Quattrocento', 'Georgia', 'serif'],
        body: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        shell: '1120px',
      },
    },
  },
  plugins: [],
}
