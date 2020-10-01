<template>
  <div class="circle-preloader">
    <i class="circle-preloader__spinner"></i>
    <app-overlay/>
  </div>
</template>

<script>
import AppOverlay from "@/components/service/AppOverlay";
export default {
  components: {
    AppOverlay,
  }
};
</script>

<style scoped>
.circle-preloader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
}

.circle-preloader__spinner {
  display: block;
  width: 100px;
  height: 100px;
  border: 4px solid #E9F6FF;
  border-bottom-color: #7BCBFD;
  border-radius: 50%;
  animation: spin .75s infinite linear;
  z-index: 25;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
