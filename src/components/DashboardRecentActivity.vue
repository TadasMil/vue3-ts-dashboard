<script setup lang="ts" name="DashboardRecentActivity">
import BaseButton from '@/components/base/BaseButton.vue'
import BaseCard from '@/components/base/BaseCard.vue'
</script>

<template>
  <BaseCard
    :pt="{
      root: {
        class: 'recent-activity'
      },
      header: {
        class: 'recent-activity-header'
      },
      body: {
        class: 'recent-activity-body'
      },
      content: {
        class: 'recent-activity-content'
      },
      footer: {
        class: 'recent-activity-footer'
      }
    }"
  >
    <template #header> Recently Activity </template>
    <template #content>
      <p class="date">10.40 AM, Fri 10 Sept 2021</p>
      <p class="post">You Posted a New Job</p>
      <p class="description">
        Kindly check the requirements and terms of work and make sure everything is right.
      </p>
    </template>
    <template #footer>
      <p>Today you makes 12 Activity</p>
      <BaseButton color="primary">See All Activity</BaseButton>
    </template>
  </BaseCard>
</template>

<style>
.recent-activity {
  background-color: var(--color-tertiary);
  border: none;
}

.recent-activity-header {
  color: white;
  background-color: #1b204a;
  padding: 10px 10px 10px 24px;
  border-radius: inherit;
}

.recent-activity-body {
  padding: 26px 24px;
}

.recent-activity-content {
  color: var(--color-white);
  display: flex;
  flex-direction: column;
  gap: 6px 0;
}

.date {
  font-size: 10px;
  opacity: 0.6;
  font-family: var(--font-secondary);
}

.post {
  font-size: 18px;
}

.description {
  opacity: 0.8;
  font-size: 14px;
  font-family: var(--font-secondary);
  line-height: 20px;
  max-width: 340px;
}

.recent-activity-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-white);
}
</style>
