import { fireEvent, render } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'

import '@testing-library/jest-dom'
import BaseSelectDropdown from './BaseSelectDropdown.vue'

describe('BaseSelectDropdown.vue', () => {
  const mockOptions = ['Option 1', 'Option 2']

  it('renders the default "Sort by" option', async () => {
    const { html } = render(BaseSelectDropdown, {
      props: {
        options: mockOptions
      }
    })

    expect(html()).toMatchSnapshot()
  })

  it('renders provided options and updates the model value when an option is selected', async () => {
    const { getByTestId } = render(BaseSelectDropdown, {
      props: {
        options: mockOptions
      }
    })

    const select = getByTestId('select-dropdown') as HTMLSelectElement

    const optionToSelect = mockOptions[0]

    await fireEvent.click(select, { target: { value: optionToSelect } })

    expect(select.value).toBe(optionToSelect)
  })
})
