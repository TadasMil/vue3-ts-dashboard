<script setup lang="ts" name="DashboardSmartphones">
import { useProductSort } from '@/composables/useProductSort'
import { useQuery } from '@/composables/useQuery'

import { SmartphoneService } from '@/services/ProductService'

import DashboardProduct from '@/components/DashboardProduct.vue'
import SortableCard from '@/components/SortableCard.vue'
import StateService from '@/components/StateService.vue'

import { IPhone, IProduct } from '@/types/products'

const { stateIs, data, executeQuery } = useQuery(() =>
  new SmartphoneService<IProduct<IPhone>>().getAll()
)

const { sortedProducts: sortedPhones, sortOptions, sortOption } = useProductSort(data)

const onRefresh = () => {
  sortOption.value = null

  executeQuery()
}
</script>

<template>
  <SortableCard
    title="Smartphones"
    v-model="sortOption"
    :sortOptions="sortOptions"
    @refresh="onRefresh"
  >
    <StateService :stateIs="stateIs">
      <DashboardProduct v-for="phone in sortedPhones" :key="phone.id" v-bind="phone" />
    </StateService>
  </SortableCard>
</template>
