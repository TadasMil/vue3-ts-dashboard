<script setup lang="ts" name="DashboardEmployeeSummary">
import BaseCard from '@/components/base/BaseCard.vue'

const employeeSummary = [
  {
    image: 'total-employees',
    title: 'Total Employees',
    count: 216,
    men: 120,
    women: 96,
    pastMonth: 2
  },
  {
    image: 'talent-requests',
    title: 'Talent Request',
    count: 16,
    men: 6,
    women: 10,
    pastMonth: 5
  }
]
</script>

<template>
  <div class="employee-summary">
    <BaseCard
      v-for="(card, index) in employeeSummary"
      :key="index"
      :pt="{
        root: {
          class: 'employee-summary__card'
        },
        body: {
          class: 'employee-summary__card-body'
        },
        content: {
          class: 'employee-summary__card-content'
        }
      }"
    >
      <template #title> {{ card.title }} </template>

      <template #content>
        <p>{{ card.count }}</p>
        <img :src="`/images/${card.image}.png`" :alt="card.image" class="employee-summary__image" />
      </template>

      <template #footer>
        <div class="employee-summary__footer">
          <div class="employee-summary__footer-genders">
            <p class="employee-summary__gender">{{ card.men }} Men</p>
            <p class="employee-summary__gender">{{ card.women }} Women</p>
          </div>

          <p class="employee-summary__percentage">+{{ card.pastMonth }}% Past month</p>
        </div>
      </template>
    </BaseCard>
  </div>
</template>

<style>
.employee-summary {
  display: flex;
  gap: 20px;
}

.employee-summary__card {
  flex: 1;
}

.employee-summary__card-content {
  font-size: 48px;
  display: flex;
  justify-content: space-between;
  color: var(--color-tertiary);
}

.employee-summary__image {
  margin-top: -20px;
}

.employee-summary__footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 12px;
}

.employee-summary__footer-genders {
  display: flex;
  flex-direction: column;
  gap: 4px 0;
}

.employee-summary__gender {
  line-height: 18px;
}

.employee-summary__percentage {
  background-color: #ffefe7;
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
}

@media (max-width: 650px) {
  .employee-summary {
    flex-direction: column;
  }
}
</style>
