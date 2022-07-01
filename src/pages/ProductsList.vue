<template>
  <section>
    <ul>
      <product-item v-for="prod in products" @addToCart="addToCart" :key="prod.id" :product="prod" />
    </ul>
  </section>
</template>


<script>
import  { mapGetters, mapActions } from 'vuex'
import ProductItem from '../components/products/ProductItem.vue';

export default {
  components: {
    ProductItem,
  },
  computed: {
    ...mapGetters('products', ['products'])
  },
  methods: {
    ...mapActions({
      addToCart: 'cart/addToCart'
    }),
  },
};
</script>


<style scoped>
  ul {
    list-style: none;
    margin: 2rem auto;
    padding: 0;
    max-width: 40rem;
  }
</style>