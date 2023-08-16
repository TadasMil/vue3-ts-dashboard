import { render } from '@testing-library/vue'
import { describe, expect, it, vi } from 'vitest'

import { useAsyncService } from './useAsyncService'

describe('useAsyncService', () => {
  beforeEach(() => {
    const TestComponent = {
      template: '<div >I am Custom component</div>'
    }

    render(TestComponent, {})
  })

  it('should set state to IDLE and populate data when serviceFn resolves with data', async () => {
    const mockData = { key: 'value' }
    const serviceFn = vi.fn().mockResolvedValue(mockData)

    const { data, state, executeQuery } = useAsyncService(serviceFn)

    await executeQuery()

    expect(data.value).toEqual(mockData)
    expect(state.value).toBe('IDLE')
  })

  it('should set state to NO_RESULTS when serviceFn resolves with empty array', async () => {
    const serviceFn = vi.fn().mockResolvedValue([])

    const { state, executeQuery } = useAsyncService(serviceFn)

    await executeQuery()

    expect(state.value).toBe('NO_RESULTS')
  })

  it('should set state to ERROR when serviceFn rejects with an unknown error', async () => {
    const serviceFn = vi.fn().mockRejectedValue(new Error('Some error'))

    const { state, executeQuery } = useAsyncService(serviceFn)

    await executeQuery()

    expect(state.value).toBe('ERROR')
  })

  it('should set state to NOT_AUTHORIZED when serviceFn rejects with a 403 error', async () => {
    const serviceFn = vi.fn().mockRejectedValue(new Error('403'))

    const { state, executeQuery } = useAsyncService(serviceFn)

    await executeQuery()

    expect(state.value).toBe('NOT_AUTHORIZED')
  })

  it('should set state to NOT_FOUND when serviceFn rejects with a 404 error', async () => {
    const serviceFn = vi.fn().mockRejectedValue(new Error('404'))

    const { state, executeQuery } = useAsyncService(serviceFn)

    await executeQuery()

    expect(state.value).toBe('NOT_FOUND')
  })
})
