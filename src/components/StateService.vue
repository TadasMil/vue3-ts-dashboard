<script setup lang="ts" name="StateService">
import StateCardError from '@/components/StateCardError.vue'
import StateCardLoading from '@/components/StateCardLoading.vue'

import { IQueryState } from '@/types/query'

const { stateIs } = defineProps<{
  stateIs: (active: IQueryState) => boolean
}>()
</script>

<template>
  <slot name="loading" v-if="stateIs('LOADING')">
    <StateCardLoading />
  </slot>

  <slot name="error" v-else-if="stateIs('ERROR')">
    <StateCardError
      title="500"
      subtitle="Internal Server Error"
      message="Sorry, something went wrong."
    />
  </slot>

  <slot name="not_authorized" v-else-if="stateIs('NOT_AUTHORIZED')">
    <StateCardError title="403" subtitle="You are not authorized to access this information." />
  </slot>

  <slot name="not_found" v-else-if="stateIs('NOT_FOUND')">
    <StateCardError title="404" subtitle="The following data could not be found." />
  </slot>

  <slot name="no_results" v-else-if="stateIs('NO_RESULTS')">
    <StateCardError
      subtitle="Sorry, no results found."
      message="Please amend the search criteria or filter field to see all items."
    />
  </slot>

  <slot v-else-if="stateIs('IDLE')" />

  <p v-else class="bg-red-5 text-9xl text-white">State is not a valid state.</p>
</template>
