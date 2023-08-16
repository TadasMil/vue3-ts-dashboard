<script setup lang="ts" name="UpcomingScheduleGroup">
import { formatTimestamp } from '@/utilities/dates'
import DotsHorizontal from 'virtual:icons/mdi/dots-horizontal'

import BaseButton from '@/components/base/BaseButton.vue'

import { ISchedule } from '@/types/schedule'

const { schedules } = defineProps<{
  group: string
  schedules: ISchedule[]
}>()
</script>

<template>
  <p class="schedule-group__label">{{ group }}</p>

  <div v-for="schedule in schedules" :key="schedule.id" class="schedule-group__box gray-box">
    <div>
      <p class="schedule-group__title">{{ schedule.todo }}</p>
      <p class="schedule-group__time">{{ formatTimestamp(schedule.timestamp) }}</p>
    </div>

    <BaseButton :icon="DotsHorizontal" color="highlight" :size="24" density="none" />
  </div>
</template>

<style scoped>
.schedule-group__label {
  color: var(--color-secondary);
  font-size: 12px;
}

.schedule-group__box {
  display: grid;
  align-items: center;
  gap: 16px;
  min-height: 64px;
  grid-template-columns: 1fr auto;
  justify-content: space-between;
}

.schedule-group__title {
  color: var(--secondary-title-color);
}

.schedule-group__time {
  font-size: 10px;
  padding-top: 6px;
  color: var(--color-secondary);
}
</style>
