<template>
  <button :class="['button', `button_theme_${theme}`]" type="submit" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      default: 'light',
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
};
</script>

<style scoped>
.button {
  height: 50px;
  box-sizing: border-box;
  padding: 0 25px;
  background-color: #000;
  color: white;
  font-size: 18px;
  border-radius: 4px;
  border: none;
}

.button:focus {
  outline: none;
}

.button:hover {
  cursor: pointer;
}

.button_theme_light {
  background-color: #2c3e50;
  color: #fff;
}

.button_theme_dark {
  background-color: #000;
  color: #fff;
}

.button:disabled {
  cursor: not-allowed;
  opacity: .7;
}
</style>
