<template>
  <div class="overlay" @click="$emit('close')"></div>
</template>

<script>
export default {};
</script>

<style scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: .6;
    z-index: 20;
    background-color: #000;
  }
</style>
