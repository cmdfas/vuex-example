<template>
  <div class="cart">
    <h2>你的购物车</h2>
    <p v-show="!products.length"><i>请添加一些商品到购物车吧</i></p>
    <ul>
      <li
        v-for="product in products"
        :key="product.id">
        {{ product.title }} - {{ product.price }}元 x {{ product.quantity }}
      </li>
    </ul>
    <p>总额: {{ total }}元</p>
    <p><button :disabled="!products.length" @click="checkout(products)">清空购物车</button></p>
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus
    }),
    ...mapGetters('cart', {
      products: 'cartProducts',
      total: 'cartTotalPrice'
    })
  },
  methods: {
    checkout (products) {
      this.$store.dispatch('cart/checkout', products)
    }
  }
}
</script>
