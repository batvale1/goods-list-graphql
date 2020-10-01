<template>
  <AppLabel class="input">
    <slot />
    <span class="input__wrapper">
      <input
        :value="value"
        @input="$emit('input', $event.target.value)"
        :placeholder="placeholder"
        :type="type"
        class="input__field"
        :class="{ 'error': isError }"
      />
    </span>
  </AppLabel>
</template>

<script>
import AppLabel from "@/components/ui/AppLabel";
export default {
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: [String, Number],
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    isError: {
      type: Boolean,
      default: false,
    },
    errorText: {
      type: String,
      default: '',
    },
  },
  components: {
    AppLabel,
  }
};
</script>

<style scoped>
  .input {
    text-align: start;
  }
  .input__wrapper {
    position: relative;
    display: flex;
    background-color: #fff;
    margin-top: 5px;
  }

  .input__field {
    width: 100%;
    padding: 15px;
    outline: none;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .error {
    border: 2px solid #ff4646;
  }
</style>