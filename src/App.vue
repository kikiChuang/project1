<template>
  <div id="musicPlayer">

     <div class="backg">
       <div class="BGicon" v-on: click ="changeThemeSwitch">
         <img src="../assets/主题.png">
       </div>
       <div class="options">
        <template v-if="option">
           <select v-model="theme">
             <option v-for="item in themes">item</option>
           </select>
        </template>
       </div>
       <div class="backgImg">
         <img v-bind: src = "theme">
       </div>
     </div>

     <div class="list">
        <div class="Sicon" v-on: click = "showTheList">
          <img src="../assets/列表.png">
        </div>
        <div class="songs">
          <template v-if="List">
             <li v-for="item in songsList">
              {{item.name}} Singer:{{item.singer}}
               <div v-text="删除" v-on: click = "deleteTheSong(item.index)"></div>
             </li>
          </template>
        </div>
     </div>
  </div>

</template>

<script>
export default({
  e1: '#music-player',
  data: {
    themes: ['./assets/2.jpg', './assets/3.jpg', './assets/4.jpg', './assets/5.jpg', './assets/6.jpg', './assets/1.jpg'],
    theme: './assets/2.jpg',
    option: false,
    songsList: [
      {index: 0, name: 'I knew you were trouble', singer: 'Taylor Swift', show: true},
      {index: 1, name: 'As if it is the last', singer: 'Black Pink', show: true},
      {index: 2, name: 'Playing with fire', singer: 'Black Pink', show: true},
      {index: 3, name: 'Again', singer: 'YUI', show: true}
    ],
    List: false
  },
  method: {
    changeThemeSwitch: function () {
      this.option = !this.option
    },
    showTheList: function () {
      this.List = !this.List
    },
    deleteTheSong: function (index) {
      this.songsList[index].show = false
    }
  }
})
</script>

<style>

</style>
