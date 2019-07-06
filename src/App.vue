<template>
  <v-app>
    
  <v-navigation-drawer app></v-navigation-drawer>
  <v-toolbar app></v-toolbar>
  <v-content>
    <Menu></Menu>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-content>
  <v-footer app></v-footer>
  </v-app>
</template>

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
