<script setup lang="ts" name="UserDashboard">
import BasePage from '@/components/base/BasePage.vue'
import DashboardEmployeeSummary from '@/components/DashboardEmployeeSummary.vue'
import DashboardEmploymentSummary from '@/components/DashboardEmploymentSummary.vue'
import DashboardRecentActivity from '@/components/DashboardRecentActivity.vue'
import DashboardSmartphones from '@/components/DashboardSmartphones.vue'
import DashboardUpcomingSchedule from '@/components/DashboardUpcomingSchedule.vue'
</script>

<template>
  <BasePage title="Dashboard">
    <div class="user-dashboard">
      <main class="user-dashboard__main">
        <DashboardEmploymentSummary />
        <DashboardEmployeeSummary />
        <DashboardSmartphones />
      </main>

      <aside class="user-dashboard__aside">
        <DashboardRecentActivity />
        <DashboardUpcomingSchedule />
      </aside>
    </div>
  </BasePage>
</template>

<style scoped>
.user-dashboard {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 0 30px;
  margin-right: 50px;
}

.user-dashboard__main,
.user-dashboard__aside {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

@media (max-width: 1300px) {
  .user-dashboard {
    gap: 0 20px;
    margin-right: 30px;
  }
}

@media (max-width: 1200px) {
  .user-dashboard {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .user-dashboard__aside {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
}

@media (max-width: 834px) {
  .user-dashboard {
    margin: 0;
  }
}

@media (max-width: 600px) {
  .user-dashboard__aside {
    display: flex;
    flex-direction: column;
  }
}

@media (max-width: 390px) {
  .user-dashboard,
  .user-dashboard__aside {
    grid-template-columns: 1fr;
  }
}
</style>
