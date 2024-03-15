import customPlugin from 'tailwindcss/plugin.js'
import theme from './theme.js'

/** @type {import('tailwindcss/types/config').PluginCreator} */
const pluginCreator = (api) => {
  const { theme, matchUtilities, addUtilities } = api

  const animationUtilities = {
    'animate-delay': { css: 'animation-delay', values: theme('animationDelay') },
    'animate-duration': { css: 'animation-duration', values: theme('animationDuration') }
  }

  Object.entries(animationUtilities).forEach(([utility, { css, values }]) => {
    matchUtilities({
      [utility]: value => ({
        [css]: value
      })
    }, {
      values
    })
  })

  addUtilities({
    '.animate-ease': { animationTimingFunction: 'ease' },
    '.animate-ease-in': { animationTimingFunction: 'ease-in' },
    '.animate-ease-out': { animationTimingFunction: 'ease-out' },
    '.animate-ease-in-out': { animationTimingFunction: 'ease-in-out' },
    '.animate-linear': { animationTimingFunction: 'linear' }
  })
}
/** @type {import('tailwindcss/types/config').Config} */
const pluginConfig = { theme }

export default customPlugin(pluginCreator, pluginConfig)
