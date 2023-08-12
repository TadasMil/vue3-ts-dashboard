<script setup lang="ts">
import { RouterView } from 'vue-router'

import BaseLayout from '@/components/base/BaseLayout.vue'
import SidebarNavigation from '@/components/SidebarNavigation.vue'
</script>

<template>
  <BaseLayout>
    <SidebarNavigation />

    <RouterView />
  </BaseLayout>
</template>

<style scoped></style>
