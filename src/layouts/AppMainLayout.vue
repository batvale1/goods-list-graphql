<template>
  <div class="app-main-layout">
    <header class="app-main-layout__header">
      <app-header/>
    </header>
    <main class="app-main-layout__main">
      <slot/>
    </main>
  </div>
</template>

<script>
import AppHeader from "@/components/shared/AppHeader";
export default {
  components: {AppHeader}
}
</script>

<style scoped>
  .app-main-layout {
    background-color: black;
    min-height: 100vh;
  }
</style>