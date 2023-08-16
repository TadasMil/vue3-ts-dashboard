<script setup lang="ts" name="DashboardSmartphones">
import { useProductSort } from '@/composables/useProductSort'
import { useQuery } from '@/composables/useQuery'

import { SmartphoneService } from '@/services/ProductService'

import BaseButton from '@/components/base/BaseButton.vue'
import DashboardProduct from '@/components/DashboardProduct.vue'
import SortableCard from '@/components/SortableCard.vue'
import StateService from '@/components/StateService.vue'

import { IPhone, IProduct } from '@/types/products'

const { state, data, executeQuery } = useQuery(() =>
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
    :onRefresh="onRefresh"
  >
    <StateService :state="state">
      <div class="flex-column-gap">
        <DashboardProduct v-for="phone in sortedPhones" :key="phone.id" v-bind="phone" />
      </div>
    </StateService>

    <template #footer>
      <BaseButton color="primary" variant="text"> See All Announcement </BaseButton>
    </template>
  </SortableCard>
</template>
