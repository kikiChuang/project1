<template>
  <div class="list">
  <div class="icon">
    <img src="../assets/菜单.png">
  </div>

  <div class="songs">
  <li v-for="item in songsList">
  {{item.name}} Singer:{{item.singer}}
  </li>
</template>

<script>
  var list = new Vue({
    data:{
    songsList: [
    {name: 'I knew you were trouble', singer: 'Taylor Swift'},
    {name: 'As if it is the last', singer: 'Black Pink'},
    {name: 'Playing with fire', singer: 'Black Pink'},
    {name: 'Again', singer: 'YUI'}
    ],
    
    }
  })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .icon {
    position: static;
    left: 0px;
    top: 0px;
  }
</style>
