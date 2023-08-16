import { render } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'

import { STATES } from '@/constants/query'

import { IQueryState } from '@/types/query'

import '@testing-library/jest-dom'
import StateService from './StateService.vue'

describe('StateService.vue', () => {
  const testCases = [
    { state: STATES.LOADING, slot: 'loading' },
    { state: STATES.ERROR, slot: 'error' },
    { state: STATES.NOT_AUTHORIZED, slot: 'not_authorized' },
    { state: STATES.NOT_FOUND, slot: 'not_found' },
    { state: STATES.NO_RESULTS, slot: 'no_results' }
  ]

  testCases.forEach(({ state }) => {
    it(`renders ${state} component`, async () => {
      const { html } = render(StateService, {
        props: { stateIs: (s: IQueryState) => s === state }
      })

      expect(html()).toMatchSnapshot()
    })
  })

  testCases.forEach(({ state, slot }) => {
    it(`renders ${slot} slot when state is ${state}`, async () => {
      const { queryByTestId } = render(StateService, {
        props: { stateIs: (s: IQueryState) => s === state },
        slots: { [slot]: `<div data-testid="${slot}-slot"></div>` }
      })

      expect(queryByTestId(`${slot}-slot`)).toBeInTheDocument()
    })
  })

  it('renders error message for an invalid state', async () => {
    const { getByText } = render(StateService, {
      props: { stateIs: (state: IQueryState) => state === ('INVALID_STATE' as any) }
    })

    expect(getByText('State is not a valid state.')).toBeInTheDocument()
  })
})
