<template>
  <div class="popup" :class="[`popup_position_${position}`, `popup_size_${size}`]">
    <div class="popup__wrapper" :class="[`popup__wrapper_size_${size}`]">
      <div class="popup__popup-inner" :class="[`popup__popup-inner_size_${size}`]">
        <slot></slot>
        <img
          v-if="showCloseBtn"
          src="@/assets/svg/close-window.svg"
          alt="Закрыть"
          class="popup__close"
          @click="togglePopup"
        />
      </div>
    </div>
    <app-overlay @close="togglePopup"/>
  </div>
</template>

<script>
import AppOverlay from "@/components/service/AppOverlay";

export default {
  props: {
    size: {
      type: String,
      default: 'full-screen',
    },
    position: {
      type: String,
      default: 'center',
    },
    showCloseBtn: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    togglePopup() {
      this.$emit('closing-popup');
    },
  },
  components: {
    AppOverlay
  }
};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  display: block;
  padding: 0 20px;
  z-index: 1025
}

.popup__wrapper {
  min-height: calc(100% - 100px);
  display: flex;
  align-items: center;
}

.popup__wrapper_size_full-screen {
  height: 100%;
}

.popup_size_full-screen {
  padding: 0;
}

.popup__popup-inner {
  background-color: #fff;
  border-radius: 3px;
  max-width: 500px;
  margin: 50px auto;
  padding: 35px;
  position: relative;
  display: grid;
  z-index: 1030;
}

.popup__popup-inner_size_full-screen {
  max-width: initial;
  width: 100%;
  height: 100%;
  margin: 0;
  display: block;
  padding: 0;
  overflow: auto;
}

.popup__popup-inner_size_m {
  min-width: 762px;
  min-height: 524px;
  box-sizing: border-box;
}

.popup__popup-inner_size_s {
  min-width: 564px;
  min-height: 260px;
  box-sizing: border-box;
}

.popup__popup-inner_size_content {
  min-width: 564px;
  min-height: initial;
  box-sizing: border-box;
}

.popup__close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
</style>
