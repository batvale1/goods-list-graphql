<template>
  <button
    :class="[
      'action-btn',
      `action-btn_type_${type}`,
    ]"
    @click="$emit('click')"
    type="button"
  />
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.action-btn {
  background: none;
  border: none;
  padding: 25px;
  margin: 0;
  cursor: pointer;
  stroke: white;
  width: 25px;
  height: 25px;
}

.action-btn:focus {
  outline: none;
}

.action-btn_type_edit {
  background-image: url('~@/assets/svg/edit-icon.svg');
  background-repeat: no-repeat;
  background-position: center;
}

.action-btn_type_delete {
  background-image: url('~@/assets/svg/delete-icon.svg');
  background-repeat: no-repeat;
  background-position: center;
}
</style>
