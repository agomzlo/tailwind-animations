import { generatePluginCSS } from './utils'
import { describe, test, expect } from 'vitest'

describe('tailwind-animations plugins', async () => {
  test('use a predefined animation', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-fade-in">Hello</div>'
    })

    expect({ css }).toEqual({ css: '@keyframes fade-in{0%{opacity:0}100%{opacity:1}}.animate-fade-in{animation:fade-in 0.6s ease-in}' })
  })

  test('use a predefined animation delay', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-delay-100">Hello</div>'
    })

    expect({ css }).toEqual({ css: '.animate-delay-100{animation-delay:100ms}' })
  })

  test('use a custom animation delay', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-delay-[725ms]">Hello</div>'
    })

    expect({ css }).toEqual({ css: '.animate-delay-\\[725ms\\]{animation-delay:725ms}' })
  })

  test('use a predefined animation duration', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-duration-100">Hello</div>'
    })

    expect({ css }).toEqual({ css: '.animate-duration-100{animation-duration:100ms}' })
  })

  test('use a predefined named animation duration', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-duration-fast">Hello</div>'
    })

    expect({ css }).toEqual({ css: '.animate-duration-fast{animation-duration:200ms}' })
  })

  test('use a custom animation duration', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-duration-[725ms]">Hello</div>'
    })

    expect({ css }).toEqual({ css: '.animate-duration-\\[725ms\\]{animation-duration:725ms}' })
  })

  test('use a timing function animation', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-linear">Hello</div>'
    })

    expect({ css }).toEqual({ css: '.animate-linear{animation-timing-function:linear}' })
  })
})
