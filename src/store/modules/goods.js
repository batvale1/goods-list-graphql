import {
  goodsAction
} from "@/api/goods";

// initial state
const state = () => ({
  goods: [],
});

// getters
const getters = {
  getGoods: (state) => state.goods,
};

// mutations
const mutations = {
  goodsSet: (state, payload) => {
    state.goods = payload;
  },
  goodsUpdate: (state, payload) => {
    const item = state.goods.find(item => item.id === payload.id);
    if (item) {
      item.name = payload.name;
      item.vendor_code = payload.vendor_code;
    }
  },
};

// actions
const actions = {
  goodsGet: ({commit}, payload) => goodsAction({
    query: `query getGoods {
               products (
                limit: ${payload.limit},
                offset: ${payload.offset}
                ) {
                 id
                 name
                 prices {
                  price
                 }
                 series
                 vendor_code
                }
            }
            `,
  })
    .then((response) => {
      const { data } = response;
      const { data: dataGoods } = data;
      const { products } = dataGoods;
      commit('goodsSet', products);
    }),
  goodsUpdate: ({commit} , payload) => goodsAction({
    query: `mutation {
              update_products (
                where: {id: {_eq: "${payload.id}"}}
                _set: { name: "${payload.name}", series: "${payload.series}", vendor_code: "${payload.vendorCode}" }
              ) {
                returning {
                  id
                  name
                  prices {
                    price
                   }
                  series
                  vendor_code
                }
              }
            }`
  })
    .then((response) => {
      const { data } = response;
      const { data: dataGoods } = data;
      const { update_products } = dataGoods;
      const { returning } = update_products;
      commit('goodsUpdate', returning[0]);
    }),
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};