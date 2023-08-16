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
        class: 'recent-activity__header'
      },
      body: {
        class: 'recent-activity__body'
      },
      content: {
        class: 'recent-activity__content'
      },
      footer: {
        class: 'recent-activity__footer'
      }
    }"
  >
    <template #header> Recently Activity </template>
    <template #content>
      <p class="recent-activity__date">10.40 AM, Fri 10 Sept 2021</p>
      <p class="recent-activity__post">You Posted a New Job</p>
      <p class="recent-activity__description">
        Kindly check the requirements and terms of work and make sure everything is right.
      </p>
    </template>
    <template #footer>
      <p class="recent-activity__footer-text">Today you makes 12 Activity</p>
      <BaseButton color="primary">See All Activity</BaseButton>
    </template>
  </BaseCard>
</template>

<style>
.recent-activity {
  background-color: var(--color-tertiary);
  border: none;
}

.recent-activity__header {
  color: white;
  background-color: #1b204a;
  padding: 10px 10px 10px 24px;
  border-radius: inherit;
}

.recent-activity__body {
  padding: 26px 24px;
}

.recent-activity__content {
  color: var(--color-white);
  display: flex;
  flex-direction: column;
  gap: 6px 0;
}

.recent-activity__date {
  font-size: 10px;
  opacity: 0.6;
  font-family: var(--font-secondary);
}

.recent-activity__post {
  font-size: 18px;
}

.recent-activity__description {
  opacity: 0.8;
  font-size: 14px;
  font-family: var(--font-secondary);
  line-height: 20px;
  max-width: 340px;
}

.recent-activity__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-white);
}

@media (max-width: 834px) {
  .recent-activity__footer {
    flex-direction: column;
    align-items: start;
    gap: 18px 0;
  }
}
</style>
