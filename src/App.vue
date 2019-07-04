<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>{{ $t("message") }}</div>
    <Menu></Menu>
    <router-view/>
  </div>
</template>

<script>
import Menu from '@/components/Menu'
export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
