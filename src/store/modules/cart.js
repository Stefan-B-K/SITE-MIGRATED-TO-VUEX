const state = {
  items: [],
  total: 0,
  qty: 0
};

const getters = {
  items(state) {
    return state.items
  },
  totalSum(state) {
    return state.total
  },
  quantity(state) {
    return state.qty
  }
};

const mutations = {
  addProductToCart (state, payload) {
    const productData = payload.product;
    const productInCartIndex = state.items.findIndex(
      (ci) => ci.productId === productData.id
    );

    if (productInCartIndex >= 0) {
      state.items[productInCartIndex].qty++;
    } else {
      const newItem = {
        productId: productData.id,
        title: productData.title,
        image: productData.image,
        price: productData.price,
        qty: 1
      };
      state.items.push(newItem);
    }
    state.qty++;
    state.total += productData.price;
  },

  removeProductFromCart (state, payload) {
    const prodId = payload.productId;
    const productInCartIndex = state.items.findIndex(
      (cartItem) => cartItem.productId === prodId
    );
    const prodData = state.items[productInCartIndex];
    state.items.splice(productInCartIndex, 1);
    state.qty -= prodData.qty;
    state.total -= prodData.price * prodData.qty;
  }
};

const actions = {
  addToCart ({ commit }, payload) {
    commit('addProductToCart', payload);
  },
  removeFromCart ({ commit }, payload) {
    commit('removeProductFromCart', payload);
  }
};

export default {
  namespaced: true,
  state, getters, actions, mutations
};