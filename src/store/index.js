import { createStore } from 'vuex';

import products from '@/store/modules/products';
import cart from '@/store/modules/cart';
import router from '@/router';

const store = createStore({
  modules: { products, cart },
  state () {
    return {
      isLoggedIn: false
    };
  },
  getters: {
    isAuthenticated (state) {
      return state.isLoggedIn;
    }
  },
  mutations: {
    login (state) {
      state.isLoggedIn = true;
    },
    logout (state) {
      state.isLoggedIn = false;
    }
  },
  actions: {
    login ({ commit }) {
      commit('login');
    },
    logout ({ commit }) {
      commit('logout');
      if (router.currentRoute.value.path === '/admin') {
        router.push('/products')
      }
    }
  }
});

export default store;

