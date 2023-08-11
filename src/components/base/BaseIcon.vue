<script setup lang="ts" name="BaseIcon">
import { computed } from 'vue'

import { IconType } from '@/types/icons'

const { icon, size = 24 } = defineProps<{
  icon: IconType
  size?: number
}>()

const iconStyle = computed(() => {
  return {
    fontSize: `${size}px`
  }
})
</script>

<template>
  <component :is="icon" :style="iconStyle" />
</template>
