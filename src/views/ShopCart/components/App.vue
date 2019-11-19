<template>
  <div id="app">
    <h1>购物车DEMO</h1>
    <hr>
    <h2>产品列表</h2>
    <ProductList/>
    <hr>
    <ShoppingCart/>
  </div>
</template>

<script>
  import ProductList from './ProductList.vue'
  import ShoppingCart from './ShoppingCart.vue'

  export default {
    components: { ProductList, ShoppingCart }
  }
</script>
