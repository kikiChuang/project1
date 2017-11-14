<template>
  <div class="pages">
    <backg></backg>
    <menu></menu>
    <player></player>
  </div>
</template>

<script>
import backg from '../components/backg.vue'
import menu from '../components/menu.vue'
import player from '../components/player.vue'
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .themebn {
    position: static;
    left: 600px;
    top: -600px;
  }
  .backg {
    position: static;
    left: 0px;
    top: 0px;
    z-index: -1;
  }
</style>
