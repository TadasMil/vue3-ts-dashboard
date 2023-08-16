import { computed, Ref, ref } from 'vue'

export const useState = <T extends string>(...states: readonly T[]) => {
  const STATES: Record<T, T> = {} as Record<T, T>
  for (const arg of states) {
    STATES[arg] = arg
  }

  const state = ref<T>(STATES[states[0]]) as Ref<T>
  const stateIs = computed(() => (active: T) => state.value === active)
  const setState = (nextState: T) => {
    if (states.includes(nextState) === false) {
      const validStates = states.join(', ')
      throw new Error(`useState: Invalid state: ${nextState}, expected one of: ${validStates}`)
    }

    state.value = nextState
  }

  return {
    STATES,
    state,
    stateIs,
    setState
  }
}
