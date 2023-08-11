<script setup lang="ts">
import { RouterView } from 'vue-router'

import BaseLayout from '@/components/base/BaseLayout.vue'
import NavigationSideMenu from '@/components/NavigationSideMenu.vue'
</script>

<template>
  <BaseLayout>
    <NavigationSideMenu />

    <RouterView />
  </BaseLayout>
</template>

<style scoped></style>
