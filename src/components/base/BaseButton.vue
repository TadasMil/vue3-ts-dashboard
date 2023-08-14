<script setup lang="ts" name="BaseButton">
import { computed } from 'vue'
import { RouteLocationRaw } from 'vue-router'

import BaseIcon from '@/components/base/BaseIcon.vue'

import { ButtonColor, ButtonDensity, ButtonRounded, ButtonVariant } from '@/types/button'
import { IconType } from '@/types/icons'

const {
  color = 'primary',
  icon,
  density = 'default',
  disabled,
  size,
  variant = 'default',
  href,
  to,
  rounded = 'sm'
} = defineProps<{
  icon?: IconType
  size?: number
  disabled?: boolean
  color?: ButtonColor
  density?: ButtonDensity
  variant?: ButtonVariant
  rounded?: ButtonRounded
  href?: string
  to?: RouteLocationRaw
}>()

const emit = defineEmits<{
  (e: 'click'): void
}>()

const tag = computed(() => {
  if (to) return 'router-link'
  if (href) return 'a'
  return 'button'
})

const classes = computed(() => [
  `btn-${color}`,
  `btn-density-${density}`,
  `btn-rounded-${rounded}`,
  `btn-variant-${icon ? 'icon' : variant ?? 'default'}`,
  { 'btn-inverted': icon },
  { 'btn-disabled': disabled }
])

const styles = computed(() => ({
  width: `${size}px`,
  height: `${size}px`
}))
</script>

<template>
  <component
    v-bind="$attrs"
    :is="tag"
    :to="to"
    :href="href"
    type="submit"
    :disabled="disabled"
    :class="[...classes, 'btn']"
    :style="styles"
    @click="emit('click')"
  >
    <BaseIcon v-if="icon" :icon="icon" :size="size" />
    <slot v-else />
  </component>
</template>

<style scoped>
.btn-primary {
  --btn-background: var(--color-primary);
  --btn-foreground: var(--color-white);
  --btn-background-hover: rgba(255, 151, 151, 0.2);
  --btn-background-active: 2px solid var(--color-primary-light);

  --btn-outlined-border: #ff9797;
  --btn-outlined-background: var(--color-white);
  --btn-outlined-background-hover: rgba(255, 151, 151, 0.2);
  --btn-outlined-active-border: var(--color-primary);

  --inverted-btn-foreground: var(--color-primary);
  --inverted-btn-foreground-hover: var(--color-primary-dark);
}

.btn-highlight {
  --btn-background: var(--color-highlight);
  --btn-foreground: var(--color-white);
  --btn-background-hover: rgba(178, 178, 178, 0.2);
  --btn-background-active: 2px solid var(--color-highlight-light);

  --btn-outlined-border: #989898;
  --btn-outlined-background: var(--color-white);
  --btn-outlined-background-hover: rgba(178, 178, 178, 0.2);
  --btn-outlined-active-border: var(--color-highlight);

  --inverted-btn-foreground: var(--color-highlight);
  --inverted-btn-foreground-hover: var(--color-highlight-dark);
}

/* 
TODO: Define styles for the remaining button colors from the color palette

.btn-tertiary {}
*/

.btn {
  background-color: var(--btn-background);
  color: var(--btn-foreground);
  border: 1px solid var(--btn-background);
  transition:
    background-color 0.3s,
    color 0.3s;
}

.btn.btn-variant-default {
  background-color: var(--btn-background);
  color: var(--btn-foreground);
}

.btn.btn-variant-default:hover {
  box-shadow: 0px 4px 12px 0px var(--btn-background-hover);
}

.btn.btn-variant-default:active {
  border: var(--btn-background-active);
}

.btn.btn-variant-outlined {
  color: var(--btn-background);
  border: 1px solid var(--btn-outlined-border);
  background-color: var(--btn-outlined-background);
}

.btn.btn-variant-outlined:hover {
  background-color: var(--btn-outlined-background-hover);
}

.btn.btn-variant-outlined:active {
  border: 1px solid var(--btn-outlined-active-border);
}

.btn.btn-variant-text {
  border: none;
  background-color: transparent;
  color: var(--inverted-btn-foreground);
}

.btn.btn-variant-text:hover {
  color: var(--inverted-btn-foreground-hover);
}

.btn.btn-inverted {
  border: none;
  background-color: transparent;
  color: var(--inverted-btn-foreground);
}

.btn.btn-inverted:hover {
  color: var(--inverted-btn-foreground-hover);
}

.btn-density-default {
  padding: 10px 15px;
}

.btn-density-comfortable {
  padding: 12px 18px;
}

.btn-density-compact {
  padding: 8px 12px;
}

.btn-density-none {
  padding: 0;
}

.btn-disabled {
  opacity: 0.6;
  pointer-events: none;
}

.btn-rounded-sm {
  border-radius: 4px;
}

.btn-rounded-md {
  border-radius: 8px;
}

.btn-rounded-lg {
  border-radius: 16px;
}
</style>
