<template>

  <div class="backg">

  <div class="icon" v-on: click ="changeThemeSwitch">
    <img src="../assets/2.jpg">
  </div>

  <div class="options">
    <template v-if="ok">
      <select v-model="theme">
        <option v-for="item in themes">item</option>
    </template>
  </div>

  <div class="backgImg">
    <img v-bind: src = "theme">
  </div>

  </div>
</template>

<script>
  var backg = new Vue({
    e1: '#backg',
    data: {
      themes: ['./assets/2.jpg','./assets/3.jpg','./assets/4.jpg','./assets/5.jpg','./assets/6.jpg','./assets/1.jpg'],
      theme: './assets/2.jpg',
      option: false,
    },
    method:{
      changeThemeSwitch: function(){
        this.option = !this.option;
      }
    }
  })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .backgImg {
    position: static;
    left: 0px;
    top: 0px;
    z-index: -1;
  }
  .icon {
    position: static;
    right: 0px;
    bottom: 0px;
  }
</style>
