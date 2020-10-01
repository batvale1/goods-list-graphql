<template>
  <div class="custom-table">
    <VueGoodTable
      :columns="columns"
      :rows="rows"
      :row-style-class="rowStyleClass"
      :sort-options="sortOptions"
      :styleClass="styleClass"
      @on-row-click="($event) => $emit('on-row-click', $event)"
      mode="remote">
      <template v-slot:table-row="props">
        <AppCell :data="props"/>
      </template>
      <template v-slot:emptystate>
        <div></div>
      </template>
    </VueGoodTable>
  </div>
</template>
<script>
import { VueGoodTable } from 'vue-good-table';
import AppCell from "@/components/helpers/AppCell";

export default {
  props: {
    columns: {
      type: Array,
      required: true,
    },
    rows: {
      type: Array,
      required: false,
      default: () => [],
    },
    rowStyleClass: {
      type: Function,
      required: false,
    },
    sortOptions: {
      type: Object,
      required: false,
      default: () => {},
    },
    background: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    AppCell,
    VueGoodTable,
  },
  computed: {
    styleClass() {
      let styleClass = 'table';
      if (!this.background) {
        styleClass += ' table_background_none';
      }
      return styleClass;
    },
  },
};
</script>

<style>
  .table {
    border-collapse: collapse;
    background-color: #fff;
    width: 100%;
    max-width: 100%;
    table-layout: auto;
  }

  .table_background_none {
    background-color: initial;
  }

  .custom-table .vgt-responsive {
    overflow: initial;
  }

  .table th {
    font-weight: 600;
    font-size: 12px;
    line-height: 12px;
    text-align: left;
    color: #fff;
    padding: 15px 10px;
  }

  .table td {
    text-align: left;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #fff;
    padding: 18px 10px;
  }

  .table tr {
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }

  .table .low-priority {
    font-weight: 600;
    font-size: 12px;
    color: #ccc;
  }
</style>
