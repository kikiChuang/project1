<template>
  <div class="backg">
    <img src="../assets/2.jpg">
  </div>

  <div class="themebn">
    <img src="./assets/主题.png">

  </div>
</template>

<script>
  var songsList= [
    {name: 'I knew you were trouble', singer: 'Taylor Swift'},
    {name: 'As if it is the last', singer: 'Black Pink'},
    {name: 'Playing with fire', singer: 'Black Pink'},
    {name: 'Again', singer: 'YUI'}
  ]
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
