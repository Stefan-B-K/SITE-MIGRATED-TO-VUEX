import { products } from '../default'

export default {
  namespaced: true,
  state: { ...products },
  getters: {
    products: state => state.products
  }
}