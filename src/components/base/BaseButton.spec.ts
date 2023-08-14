import { h } from 'vue'
import { fireEvent, render } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'

import { ButtonColors, ButtonDensities, ButtonRoundeds, ButtonVariants } from '@/constants/button'

import BaseButton from './BaseButton.vue'

const colorCases = Object.values(ButtonColors)
const densityCases = Object.values(ButtonDensities)
const variantCases = Object.values(ButtonVariants)
const roundedCases = Object.values(ButtonRoundeds)

describe('BaseButton.vue', () => {
  colorCases.forEach((color) => {
    it(`should render button with appropriate color of ${color}`, () => {
      const { html } = render(BaseButton, {
        props: {
          color
        }
      })

      expect(html()).toMatchSnapshot()
    })

    it(`should render button with appropriate color of ${color} and disabled`, () => {
      const { html } = render(BaseButton, {
        props: {
          color,
          disabled: true
        }
      })

      expect(html()).toMatchSnapshot()
    })
  })

  densityCases.forEach((density) => {
    it(`should render button with appropriate density of ${density}`, () => {
      const { html } = render(BaseButton, {
        props: {
          density
        }
      })

      expect(html()).toMatchSnapshot()
    })
  })

  variantCases.forEach((variant) => {
    it(`should render button with appropriate variant of ${variant}`, () => {
      const { html } = render(BaseButton, {
        props: {
          variant
        }
      })

      expect(html()).toMatchSnapshot()
    })

    it(`should render button with appropriate variant of ${variant} and disabled`, () => {
      const { html } = render(BaseButton, {
        props: {
          variant,
          disabled: true
        }
      })

      expect(html()).toMatchSnapshot()
    })
  })

  roundedCases.forEach((rounded) => {
    it(`should render button with appropriate rounded of ${rounded}`, () => {
      const { html } = render(BaseButton, {
        props: {
          rounded
        }
      })

      expect(html()).toMatchSnapshot()
    })
  })

  it('should render icon button', () => {
    const { html } = render(BaseButton, {
      props: {
        icon: () => h('div')
      }
    })

    expect(html()).toMatchSnapshot()
  })

  it('should emit click event', async () => {
    const { getByRole, emitted } = render(BaseButton)

    const button = getByRole('button')

    await fireEvent.click(button)

    expect(emitted()).toHaveProperty('click')
  })

  it('should render router-link component', () => {
    const { html } = render(BaseButton, {
      props: {
        to: {
          name: 'MyPath'
        }
      }
    })

    expect(html()).toMatchSnapshot()
  })

  it('should render anchor component', () => {
    const { html } = render(BaseButton, {
      props: {
        href: '#'
      }
    })

    expect(html()).toMatchSnapshot()
  })
})
