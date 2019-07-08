<template>
  <v-card>
    <v-responsive class="block introduction" :aspect-ratio="2.5/1">
      <h2 class="subtitle">{{ $t("home.introduction.title") }}</h2>
      <h3 class="content1 introduction-content">{{ $t("home.introduction.content") }}</h3>
    </v-responsive>
  </v-card>
</template>

<style lang="scss">
  .introduction-content {
    margin: 1em;
    padding: 0 2em;
  }
</style>
