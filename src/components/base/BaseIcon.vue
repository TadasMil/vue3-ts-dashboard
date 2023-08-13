<script setup lang="ts" name="BaseIcon">
import { computed } from 'vue'

import { IconType } from '@/types/icons'

const {
  icon,
  size = 24,
  color = 'tertiary'
} = defineProps<{
  icon: IconType
  size?: number
  color?: 'tertiary'
}>()

const iconStyle = computed(() => {
  return {
    width: `${size}px`,
    height: `${size}px`
  }
})

const colorClassMapping = {
  tertiary: 'icon-tertiary'
}

const classes = computed(() => {
  return colorClassMapping[color] || ''
})
</script>

<template>
  <component :is="icon" :style="iconStyle" :class="classes" />
</template>

<style scoped>
.icon-tertiary {
  color: var(--color-tertiary);
}

.icon-tertiary:hover {
  color: var(--color-secondary-dark);
}
</style>
