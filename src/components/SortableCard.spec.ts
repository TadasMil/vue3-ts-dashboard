import { fireEvent, render } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'

import '@testing-library/jest-dom'
import SortableCard from './SortableCard.vue'

describe('SortableCard.vue', () => {
  it('should render title', () => {
    const { getByText } = render(SortableCard, {
      props: {
        title: 'My Card',
        modelValue: null,
        sortOptions: []
      }
    })

    expect(getByText('My Card')).toBeInTheDocument()
  })

  it('should emit refresh event', async () => {
    const { getByTestId, emitted } = render(SortableCard, {
      props: {
        title: 'My Card',
        modelValue: null,
        sortOptions: []
      }
    })

    const refreshButton = getByTestId('sortable-card-refresh')

    await fireEvent.click(refreshButton)

    expect(emitted()).toHaveProperty('refresh')
  })
})
