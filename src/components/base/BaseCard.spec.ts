import { render } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'

import '@testing-library/jest-dom'
import BaseCard from './BaseCard.vue'

describe('BaseCard.vue', () => {
  it('should render appropriate slot contents', () => {
    const { getByText } = render(BaseCard, {
      slots: {
        header: 'Advanced Card Header',
        title: 'Advanced Card',
        subtitle: 'Advanced subtitle',
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>',
        footer: 'Advanced Card Footer'
      }
    })

    expect(getByText('Advanced Card Header')).toBeInTheDocument()
    expect(getByText('Advanced Card')).toBeInTheDocument()
    expect(getByText('Advanced subtitle')).toBeInTheDocument()
    expect(
      getByText('Lorem ipsum dolor sit amet, consectetur adipisicing elit.')
    ).toBeInTheDocument()
    expect(getByText('Advanced Card Footer')).toBeInTheDocument()
  })
})
