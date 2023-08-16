<script setup lang="ts" name="BaseSelectDropdown" generic="T extends IOption">
import ArrowDown from 'virtual:icons/mdi/chevron-down'

import { IOption } from '@/types/selectDropdown'

const { options } = defineProps<{
  options: T[]
  modelValue: T | null
}>()

const inputValue = defineModel<T | null>('modelValue', { default: null })
</script>

<template>
  <div class="base-dropdown">
    <select v-model="inputValue" class="base-dropdown__select" data-testid="select-dropdown">
      <option :value="null" selected disabled hidden>Sort by</option>

      <option
        v-for="option in options"
        :key="option.id"
        :value="option"
        data-testid="select-dropdown-option"
      >
        {{ option.name }}
      </option>
    </select>

    <ArrowDown class="base-dropdown__arrow" />
  </div>
</template>

<style scoped>
.base-dropdown {
  display: flex;
  width: 145px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid #efefef;
  background: #fff;
  position: relative;
}

.base-dropdown__select {
  width: 100%;
  border: none;
  padding: 6px;
  background: transparent;
  padding-right: 24px;
  color: var(--color-secondary);

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.base-dropdown__select:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(21, 156, 228, 0.4);
  border-radius: 4px;
}

.base-dropdown__arrow {
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: var(--color-highlight);
}
</style>
