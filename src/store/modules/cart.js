import { cart } from '../default';

export default {
  namespaced: true,
  state: { ...cart },
  getters: {
    items: state => state.items,
    totalSum: state => state.total.toFixed(2),
    quantity: state => state.qty
  },
  mutations: {
    set(state, payload) {
      const index = state.items.findIndex(el => el.id === payload.product.id)
      const item = index !== -1 ? state.items[index] : null
      
      if (payload.remove) {
        state.qty -= item.qty;
        state.total -= item.price * item.qty;
        state.items = state.items.filter(el => el.id !== payload.product.id)
        return
      }

      const realIndex = item ? index : state.items.length
      const qty = item ? item.qty + 1 : 1
      const total = payload.product.price * qty.toFixed(2)
      state.items[realIndex] = {
          ...payload.product,
          qty: qty,
          total: total
      }
      state.qty++;
      state.total += payload.product.price;
    },
  },
  actions: {
    addToCart ({ commit }, product) {
      commit('set', { product });
    },
    removeFromCart({ commit }, product) {
      commit('set', { product, remove: true });
    }
  }
}