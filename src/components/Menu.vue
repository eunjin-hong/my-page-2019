<template>
  <div>
    <router-link to='/'>Home</router-link>
    <router-link to='/portfolio'>Portfolio</router-link>
    <router-link to='/about'>About</router-link>
    <router-link to='/resume'>Resume</router-link>
    <router-link to='/blog'>Blog</router-link>
    <router-link to='/contact'>Contact</router-link>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
