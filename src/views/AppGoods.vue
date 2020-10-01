<template>
  <div>
    <app-container>
      <app-goods-list/>
    </app-container>
  </div>
</template>

<script>

import AppContainer from "@/components/shared/AppContainer";
import AppGoodsList from "@/components/blocks/goods/AppGoodsList";
export default {
  components: {
    AppContainer,
    AppGoodsList,
  },
  computed: {
    isPopupShown() {
      return true;
    },
  },
};
</script>

<style scoped></style>
