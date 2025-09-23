/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // ← ESTA LÍNEA ES CRÍTICA
  theme: {
    extend: {
      colors: {
        'cisco-blue': '#1BA0D7',
        'cisco-navy': '#005073',
      },
    },
  },
  plugins: [],
}
