import { createStore } from 'vuex';

import products from '@/store/modules/products';
import cart from '@/store/modules/cart';

const store = createStore({
  modules: { products, cart },

});

export default store;

