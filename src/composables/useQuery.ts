import { onMounted, Ref, ref } from 'vue'

import { STATES } from '@/constants/state'

import { IQueryState } from '@/types/query'

import { useState } from './useState'

export const useQuery = <T>(serviceFn: () => Promise<T>) => {
  const { state, stateIs, setState } = useState<IQueryState>(
    ...(Object.keys(STATES) as IQueryState[])
  )

  const data = ref<T | null>(null) as Ref<T>

  const executeQuery = async () => {
    setState('LOADING')

    try {
      const result = await serviceFn()

      if (Array.isArray(result)) {
        if (result.length > 0) {
          data.value = result

          setState('IDLE')
        } else {
          setState('NO_RESULTS')
        }
      } else if (result) {
        data.value = result

        setState('IDLE')
      } else {
        setState('NO_RESULTS')
      }
    } catch (err) {
      const errorMessage = (err as Error).message

      if (errorMessage === '403') {
        setState('NOT_AUTHORIZED')
      } else if (errorMessage === '404') {
        setState('NOT_FOUND')
      } else {
        setState('ERROR')
      }
    }
  }

  onMounted(() => {
    executeQuery()
  })

  return {
    data,
    state,
    stateIs,

    executeQuery
  }
}
