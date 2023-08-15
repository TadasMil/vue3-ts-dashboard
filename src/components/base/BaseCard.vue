<script setup lang="ts" name="BaseCard">
import { useSlots } from 'vue'

import { ICardClasses, ICardPassThroughOptions } from '@/types/card'

const { pt } = defineProps<{
  pt?: ICardPassThroughOptions
}>()

const slots = useSlots()

const classes: ICardClasses = {
  root: 'card',
  header: 'card__header',
  body: 'card__body',
  title: 'card__title',
  subtitle: 'card__subtitle',
  content: 'card__content',
  footer: 'card__footer'
}

const cx = (key: keyof ICardClasses) => classes[key] || ''

const ptm = (key: keyof ICardPassThroughOptions) => {
  return {
    class: cx(key),
    ...pt?.[key]
  }
}
</script>

<template>
  <div :class="cx('root')" v-bind="ptm('root')">
    <div v-if="slots.header" :class="cx('header')" v-bind="ptm('header')">
      <slot name="header"></slot>
    </div>

    <div :class="cx('body')" v-bind="ptm('body')">
      <div v-if="slots.title" :class="cx('title')" v-bind="ptm('title')">
        <slot name="title"></slot>
      </div>

      <div v-if="slots.subtitle" :class="cx('subtitle')" v-bind="ptm('subtitle')">
        <slot name="subtitle"></slot>
      </div>

      <div :class="cx('content')" v-bind="ptm('content')">
        <slot name="content"></slot>
      </div>

      <div v-if="slots.footer" :class="cx('footer')" v-bind="ptm('footer')">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<style>
.card {
  background: #ffffff;
  color: #666666;
  border-radius: 10px;
  border: 1px solid var(--color-light-gray);
}

.card__body {
  padding: 20px;
}

.card__title {
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  margin-bottom: 16px;
  color: var(--color-tertiary);
}

.card__subtitle {
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #a6a6a6;
}

.card__footer {
  padding: 16px 0 0 0;
  color: var(--color-secondary);
}
</style>
