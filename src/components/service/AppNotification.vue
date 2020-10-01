<template>
  <notifications
    group="ui-notification"
    class="ui-notification"
    :position="position"
  >
    <template slot="body" slot-scope="props">
      <div
        class="ui-notification__content"
        :class="[`ui-notification__content_type_${props.item.type}`]"
      >
        <div class="ui-notification__header">
          <img
            v-if="props.item.type === 'error'"
            :src="require('@/assets/svg/fail-http-icon.svg')"
            class="ui-notification__action-icon">
          <img v-else :src="require('@/assets/svg/success-http-icon.svg')" alt="" class="ui-notification__action-icon">
          <span class="ui-notification__title-text">{{ props.item.title }}</span>
        </div>
        <a class="close" @click="props.close">
          <i class="fa fa-fw fa-close"></i>
        </a>
        <div v-html="props.item.text">
        </div>
      </div>
    </template>
  </notifications>
</template>

<script>
export default {
  props: {
    position: {
      type: String,
      default: 'bottom right',
    },
  },
};
</script>

<style scoped>
  .ui-notification {
    margin: 20px;
  }

  .ui-notification__content {
    padding: 18px;
    background: #FFFFFF;
    box-sizing: border-box;
    border-radius: 4px;
    margin-top: 10px;
  }

  .ui-notification__content_type_error {
    border: 2px solid #FF4646;
  }

  .ui-notification__content_type_success {
    border: 1px solid #04C091;
  }

  .ui-notification__header {
    display: flex;
  }

  .ui-notification__action-icon {
    margin-right: 16px;
    margin-bottom: 16px;
  }
</style>
