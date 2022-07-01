<template>
  <section>
    <h2>Your Cart</h2>
    <h3>Total Amount: <base-badge mode="elegant">${{ + totalSum }}</base-badge>
    </h3>
    <ul>
      <cart-item v-for="item in items" @remove="remove" :key="item.id" :product="item" />
    </ul>
  </section>
</template>


<script>
import  { mapGetters, mapActions } from 'vuex';
import CartItem from '../components/cart/CartItem.vue';

export default {
  components: {
    CartItem,
  },
  computed: {
    ...mapGetters({
        totalSum: 'cart/totalSum',
        items: 'cart/items'
      })
  },
  methods: {
    ...mapActions({ remove: 'cart/removeFromCart' })
  }
};
</script>


<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
}

h2 {
  color: #292929;
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 1rem;
}

h3 {
 text-align: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>