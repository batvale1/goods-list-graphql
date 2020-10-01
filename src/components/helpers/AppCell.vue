<template>
  <div>
    <template v-if="jsx">
      <JSX :data="jsx"/>
    </template>
    <template v-else>
      {{ content }}
    </template>
  </div>
</template>
<script>
import JSX from '@/components/global/AppJSX.vue';

export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  components: {
    JSX,
  },
  computed: {
    jsx() {
      const { column } = this.data;
      if (column.cell && typeof column.cell === 'function') {
        return column.cell(this.data);
      }
      return null;
    },
    content() {
      const { column, formattedRow } = this.data;
      return formattedRow[column.field];
    },
  },
};
</script>
