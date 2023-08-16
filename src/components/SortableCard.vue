<script setup lang="ts" name="SortableCard">
import Refresh from 'virtual:icons/mdi/Refresh'

import BaseButton from '@/components/base/BaseButton.vue'
import BaseCard from '@/components/base/BaseCard.vue'
import BaseSelectDropdown from '@/components/base/BaseSelectDropdown.vue'

import { IOption } from '@/types/selectDropdown'

const { title } = defineProps<{
  title: string
  modelValue: IOption | null
  sortOptions: IOption[]
}>()

const emit = defineEmits<{ refresh: [] }>()

const inputValue = defineModel<IOption | null>('modelValue', { default: null })
</script>

<template>
  <BaseCard
    :pt="{
      root: {
        class: 'sortable-card'
      },
      title: {
        class: 'sortable-card__title'
      },
      body: {
        class: 'sortable-card__body'
      },
      content: {
        class: 'sortable-card__content'
      }
    }"
  >
    <template #title>
      <p>{{ title }}</p>

      <div class="sortable-card__actions">
        <BaseSelectDropdown
          class="sortable-card__dropdown"
          v-model="inputValue"
          :options="sortOptions"
        />

        <div class="sortable-card__refresh-button">
          <BaseButton
            :icon="Refresh"
            color="highlight"
            data-testid="sortable-card-refresh"
            density="none"
            :size="20"
            @click="emit('refresh')"
          />
        </div>
      </div>
    </template>

    <template #content>
      <slot />
    </template>
  </BaseCard>
</template>

<style>
.sortable-card {
  height: 332px;
}

.sortable-card__body {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.sortable-card__actions {
  display: flex;
  gap: 0 5px;
  align-items: center;
}

.sortable-card__refresh-button {
  display: flex;
}

.sortable-card__content {
  flex-grow: 1;
  display: flex;
  gap: 10px 0;
  flex-direction: column;
  overflow-y: auto;
}

.sortable-card__title {
  display: flex;
  justify-content: space-between;
}
</style>
