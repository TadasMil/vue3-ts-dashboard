import { describe, expect, it } from 'vitest'

import { useState } from './useState.js'

describe('useState', () => {
  it('should return a state', () => {
    const { state } = useState('foo')
    expect(state.value).toBe('foo')
  })

  it('should return a stateIs', () => {
    const { stateIs } = useState('foo')
    expect(stateIs.value('foo')).toBe(true)
  })

  it('should return a setState', () => {
    const { setState, state, stateIs } = useState('foo', 'bar')
    setState('bar')
    expect(setState).toBeInstanceOf(Function)
    expect(state.value).toBe('bar')
    expect(stateIs.value('bar')).toBe(true)
  })

  it('should return a STATES', () => {
    const { STATES } = useState('foo', 'bar')
    expect(STATES).toEqual({ foo: 'foo', bar: 'bar' })
  })

  it('should throw an error', () => {
    expect(() => useState('foo', 'bar').setState('baz')).toThrowError(
      'useState: Invalid state: baz, expected one of: foo, bar'
    )
  })
})
