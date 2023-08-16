<script setup lang="ts" name="DashboardUpcomingSchedule">
import BaseButton from '@/components/base/BaseButton.vue'
import SortableCard from '@/components/SortableCard.vue'
import UpcomingScheduleGroup from '@/components/UpcomingScheduleGroup.vue'

import { ISchedule } from '@/types/schedule'

const schedules: ISchedule[] = [
  {
    id: 2,
    priority: false,
    todo: 'Interview with candidates',
    timestamp: 1692112783000
  },
  {
    id: 3,
    priority: false,
    todo: 'Short meeting with product designer from IT Departement',
    timestamp: 1692192004000
  },
  {
    id: 1,
    priority: true,
    todo: 'Review candidate applications',
    timestamp: 1692184804000
  },
  {
    id: 4,
    priority: false,
    todo: 'Eat Pizza',
    timestamp: 1692192004000
  }
]

const prioritySchedules = schedules.filter((schedule) => schedule.priority)
const otherSchedules = schedules.filter((schedule) => !schedule.priority)
</script>

<template>
  <SortableCard title="Upcoming Schedule">
    <div class="flex-column-gap">
      <UpcomingScheduleGroup group="Priority" :schedules="prioritySchedules" />
      <UpcomingScheduleGroup group="Other" :schedules="otherSchedules" />
    </div>

    <template #footer>
      <BaseButton color="primary" variant="text">Create a New Schedule </BaseButton>
    </template>
  </SortableCard>
</template>
