<template>
  <div class="Header">
  </div>
  <router-view class="px-4 py-4"/>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.Header{
  background: black;
  height: 50px;
}

nav {
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
