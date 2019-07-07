<template>
  <v-app>
  <v-content>
    <Menu></Menu>
    <router-view></router-view>
  </v-content>
  <v-footer></v-footer>
  </v-app>
</template>

<style lang="scss">
@import '@/styles/index.scss';
</style>

<script>
import Menu from '@/components/Menu';

export default {
  components: {
    Menu
  },
  data () {
    return {
      //
    }
  }
}
</script>
