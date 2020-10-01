<template>
  <div id="app">
    <app-main-layout>
      <router-view/>
    </app-main-layout>
  </div>
</template>

<script>
//
// import gql from "graphql-tag";
// const GET_GOODS = gql`
//   query getGoods {
//     goods {
//       id,
//       name
//     }
//   }
// `;


import AppMainLayout from "@/layouts/AppMainLayout";
export default {
  name: 'App',
  components: {AppMainLayout},
  // data() {
  //   return {
  //     goods: []
  //   }
  // },
  // apollo: {
  //   goods: {
  //     query: GET_GOODS
  //   }
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
