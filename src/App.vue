<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/exam1">exam1</router-link> |
      <router-link to="/exam2">exam2</router-link> |
      <router-link to="/exam3">exam3</router-link> |
      <router-link to="/exam4">exam4</router-link> |
      <router-link to="/exam5">exam5</router-link> |
      <router-link to="/shop">shop</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
