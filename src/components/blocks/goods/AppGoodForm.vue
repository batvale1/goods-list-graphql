<template>
  <form class="form" novalidate @submit.prevent>
    <div class="form__form-content">
      <p class="form__new-item-title">{{ title }}</p>
      <div class="form__form-group">
        <div class="form__input-wrapper">
          <app-input
            class="form__input"
            v-model.trim="$v.name.$model"
            :isError="submitted && $v.name.$dirty && !$v.name.required"
            placeholder="Введите наименование"
          >
            Наименование
          </app-input>
          <small
            class="form__error-text"
            v-if="submitted && $v.name.$dirty && !$v.name.required"
          >
            Поле обязательно к заполнению
          </small>
        </div>
      </div>
      <div class="form__form-group">
        <div class="form__input-wrapper">
          <app-input
            class="form__input"
            v-model.trim="$v.vendorCode.$model"
            :isError="submitted && $v.vendorCode.$dirty && !$v.vendorCode.required"
            placeholder="Введите артикул"
          >
            Артикул
          </app-input>
          <small
            class="form__error-text"
            v-if="submitted && $v.vendorCode.$dirty && !$v.vendorCode.required"
          >
            Поле обязательно к заполнению
          </small>
        </div>
      </div>
    </div>
    <div class="form__form-actions">
      <app-button @click.native="updateItem">Сохранить</app-button>
    </div>
    <AppNotification/>
  </form>
</template>

<script>
import { required } from 'vuelidate/lib/validators';
import AppButton from "@/components/ui/AppButton";
import AppNotification from "@/components/service/AppNotification";
import AppInput from "@/components/ui/AppInput";

export default {
  components: {AppNotification, AppButton, AppInput},
  data() {
    return {
      name: '',
      vendorCode: '',
      submitted: false,
    };
  },
  props: {
    id: {
      type: String,
      default: '',
    },
  },
  computed: {
    title() {
      return this.id ? 'Редактирование' : 'Создание'
    }
  },
  validations: {
    name: { required },
    vendorCode: { required },
  },
  methods: {
    updateItem() {
      this.submitted = true;

      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      if (this.id) {
        this.$store.dispatch('goods/goodsUpdate', {...this.$data, ...this.$props})
          .then(() => {
            this.$emit('submitted');
          })
          .catch(() => {
            this.$notify({
              group: 'ui-notification',
              title: 'Ошибка сохранения',
              text: 'Что-то пошло не так...',
              duration: 5000,
              type: 'error',
            });
          });
      } else {
        this.$store.dispatch('goods/goodsInsert', {...this.$data, ...this.$props})
            .then(() => {
              this.$emit('submitted');
            })
            .catch(() => {
              this.$notify({
                group: 'ui-notification',
                title: 'Ошибка сохранения',
                text: 'Что-то пошло не так...',
                duration: 5000,
                type: 'error',
              });
            });
      }
    },
  },
  created() {
    if (this.id) {
      const currentGood = this.$store.getters['goods/getGoods'].find(item => item.id === this.id);
      this.name = currentGood.name;
      this.vendorCode = currentGood.vendor_code;
    }
  },
};
</script>

<style scoped>
  .form__new-item-title {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: theme('colors.semantic.100');
  }

  .form__form-group {
    margin-top: 24px;
    display: flex;
    flex-wrap: wrap;
  }

  .form__input-wrapper {
    margin-left: 20px;
    width: 100%;
  }

  .form__input {
    width: 100%;
  }

  .form__input-wrapper:first-child {
    margin-left: 0;
  }

  .form__form-actions {
    margin-top: 35px;
    display: flex;
    justify-content: flex-end;
  }

  .form__error-text {
    color: red;
  }
</style>
