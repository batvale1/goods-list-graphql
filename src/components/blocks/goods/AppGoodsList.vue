<template>
  <div class="goods-list">
    <h1 class="goods-list__heading">Goods List</h1>
    <v-wait for="my list is to load">
      <template slot="waiting">
        <AppPreloaderBlock/>
      </template>
      <app-table
        :background="false"
        class="goods-list__table"
        :columns="columns"
        :rows="list"
      />
    </v-wait>
    <div class="goods-list__actions">
      <app-button class="goods-list__nav-btn" @click.native="prevPage" :disabled="currentPage === 0">Назад</app-button>
      <app-button class="goods-list__nav-btn" @click.native="nextPage" :disabled="list.length === 0">Вперед</app-button>
    </div>
    <AppPopup
        v-if="detailPopupShown"
        size="content"
        @closing-popup="closeFormItem"
    >
      <app-good-form
        :id="currentItemId"
        @submitted="closeFormItem(true)"
      />
    </AppPopup>
    <AppNotification/>
  </div>
</template>

<script type="text/jsx">
import AppButton from "@/components/ui/AppButton";
import AppTable from "@/components/tables/AppTable";
import AppActionBtn from "@/components/ui/AppActionBtn";
import AppPreloaderBlock from "@/components/service/AppPreloaderBlock";
import AppGoodForm from "@/components/blocks/goods/AppGoodForm";
import AppPopup from "@/components/service/AppPopup";
import AppNotification from "@/components/service/AppNotification";
export default {
  data() {
    return {
      detailPopupShown: false,
      currentItemId: null,
      limit: 5,
      offset: 0,
      currentPage: 0,
      columns: [
        {
          label: 'Наименование',
          field: 'name',
          cell: ({ row }) => <span>
            {row.name}
          </span>,
          thClass: 'low-priority',
        },
        {
          label: 'Артикул',
          field: 'vendor_code',
          cell: ({ row }) => <span>
            {row.vendor_code}
          </span>,
          thClass: 'low-priority',
        },
        {
          label: 'Серия',
          field: 'series',
          cell: ({ row }) => <span>
            {row.series}
          </span>,
          thClass: 'low-priority',
        },
        {
          label: 'Цена',
          field: 'price',
          cell: ({ row }) => <span>
            {parseInt(row.prices[row.prices.length - 1].price)}
          </span>,
          thClass: 'low-priority',
        },
        {
          label: '',
          field: 'action',
          cell: ({ row }) => <app-action-btn type="edit"
              onClick={() => { this.openDetailFormItem(row); }}
          />,
        },
      ],
    };
  },
  components: {
    AppPopup,
    AppGoodForm,
    AppPreloaderBlock,
    AppActionBtn,
    AppTable,
    AppButton,
    AppNotification,
  },
  computed: {
    list() {
      return this.$store.getters['goods/getGoods'];
    },
  },
  methods: {
    openDetailFormItem({ id }) {
      this.currentItemId = id;
      this.detailPopupShown = !this.detailPopupShown;
    },
    closeFormItem(success) {
      this.detailPopupShown = !this.detailPopupShown;
      if (success) {
        this.$notify({
          group: 'ui-notification',
          title: 'Данные успешно сохранены',
          duration: 5000,
          type: 'success',
        });
      }
    },
    async nextPage() {
      this.currentPage++;
      this.offset = this.limit * this.currentPage;
      await this.fetchGoods();
    },
    async prevPage() {
      this.currentPage--;
      this.offset = this.limit * this.currentPage;
      await this.fetchGoods();
    },
    async fetchGoods() {
      this.$wait.start('my list is to load');
      await this.$store.dispatch('goods/goodsGet', {limit: this.limit, offset: this.offset});
      this.$wait.end('my list is to load');
    }
  },
  async created() {
    await this.fetchGoods();
  },
};
</script>

<style scoped>
.goods-list {
  padding: 30px;
}

.goods-list__heading {
  font-weight: 900;
  font-size: 60px;
  line-height: 73px;
  text-align: center;
  color: #fff;
  margin-bottom: 30px;
}

.goods-list__list {
  list-style: none;
  margin: 0 0 30px 0;
  padding: 0;
  position: relative;
}

.goods-list__item {
  margin-bottom: 10px;
}

.goods-list__button {
  width: 150px;
  margin-bottom: 30px;
  text-transform: uppercase;
  font-weight: 700;
}

.goods-list__actions {
  display: flex;
  justify-content: space-between;
}

.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 0.8s;
  opacity: 0;
  position: absolute;
  left: 0;
  right: 0;
}

.goods-list__nav-btn {
  flex-basis: 150px;
  margin-right: 20px;
  margin-top: 20px;
}

.goods-list__nav-btn:last-of-type {
  margin-right: 0;
}

.slide-move {
  transition: transform 0.8s;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}

</style>
