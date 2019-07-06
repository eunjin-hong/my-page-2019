<template>
  <div>
    <v-card>
      <v-responsive class="main" :aspect-ratio="16/9">
        <h2 class="quote">
          {{ $t("home.main.quote") }}
        </h2>
        <h1 class="title">
          {{ $t("home.main.title") }}
        </h1>
      </v-responsive>
    </v-card>
  </div>
</template>
<style lang="scss">
  
  .main:before {
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: url('../../assets/images/home-main.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: grayscale(100%) brightness(40%);
    z-index: -1; 
  }
  .quote {
    vertical-align: middle;
    color: lightgray;
  }
</style>
