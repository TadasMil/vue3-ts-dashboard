<script setup lang="ts" name="UserDashboard">
import { useQuery } from '@/composables/useQuery'

import { SmartphoneService } from '@/services/ProductService'

import BasePage from '@/components/base/BasePage.vue'
import DashboardEmployeeSummary from '@/components/DashboardEmployeeSummary.vue'
import DashboardEmploymentSummary from '@/components/DashboardEmploymentSummary.vue'
</script>

<template>
  <BasePage title="Dashboard">
    <div class="user-dashboard">
      <main class="user-dashboard__main">
        <DashboardEmploymentSummary />
        <DashboardEmployeeSummary />
      </main>

      <aside class="user-dashboard__aside">
        <div>aside</div>
      </aside>
    </div>
  </BasePage>
</template>

<style scoped>
.user-dashboard {
  display: grid;
  grid-template-columns: 3fr 2fr;
}

.user-dashboard__main {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
