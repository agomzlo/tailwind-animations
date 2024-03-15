import animations from '@agomzlo11/tailwindcss-animations'
import theme from '../src/theme.js'

const { animation, animationDelay, animationDuration } = theme

const safelist = Object.keys(animation).map((key) => `animate-${key}`)
  .concat(Object.keys(animationDelay).map((key) => `animate-delay-${key}`))
  .concat(Object.keys(animationDuration).map((key) => `animate-duration-${key}`))

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {}
  },
  plugins: [animations],
  safelist
}
