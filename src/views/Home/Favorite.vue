<template>
    <v-responsive class="block favorite" :aspect-ratio="16/6">
    <v-container justify-space-around>
      <v-layout class="favorite-layout" row>
          <v-flex class="text-xs-center favorite-flex" v-for="i in 3" :key="`4${i}`" xs4>
            <img class="icon"  :src="require(`../../assets/images/favorite${i}.png`)" />
            <h3 class="content1">{{ $t( `home.favorite.${i}.title` ) }}</h3>
            <h4 class="content2 favorite-content">{{ $t( `home.favorite.${i}.content` ) }}</h4>
          </v-flex>
        </v-layout>
    </v-container>

    </v-responsive>
</template>
<style lang="scss">
  @media only screen and (max-width: 600px){
    .favorite-layout{
      flex-direction: column !important;
    }
    .favorite-flex{
      max-width: 100% !important;
    }
  }
  .favorite-content{
    margin: 2em;
  }
</style>
