<template>
  <div class="player">
  <div class="play">
    <img src="../assets/播放图标.png">
  </div>
  <div class="last">
    <img src="../assets/上一首.png">
  </div>
  <div class="next">
    <img src="../assets/下一首.png">
  </div>
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
  .play {
    position: static;
    left: 600px;
    top: 600px;
  }
  .last {
    position: static;
    left: 600px;
    top: 600px;
  }
  .next {
       position: static;
       left: 600px;
       top: 600px;
     }
</style>
