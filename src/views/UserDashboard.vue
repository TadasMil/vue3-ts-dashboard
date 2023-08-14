<script setup lang="ts" name="UserDashboard">
import BasePage from '@/components/base/BasePage.vue'
</script>

<template>
  <BasePage title="Dashboard">
    <div class="main-content">
      <main>
        <div>hello</div>
      </main>

      <aside>
        <div>aside</div>
      </aside>
    </div>
  </BasePage>
</template>

<style scoped>
.main-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
</style>
