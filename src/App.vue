<template>
  <div id="musicPlayer">

     <div class="backg">
       <div class="BGicon">
         <img src="../assets/主题.png" v-on: click = "changeThemeSwitch">
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
        <div class="Sicon">
          <img src="../assets/列表.png" v-on: click = "showTheList">
        </div>
        <div class="songs">
          <template v-if="List">
             <li v-for="item in songsList">
              {{item.name}}
             </li>
          </template>
        </div>
     </div>

    <div class="player">
      <div class="play">
        <img src="../assets/播放图标.png" v-if="play" v-on:click = "pause()">
        <img src="../assets/暂停.png" v-if="pause" v-on: click = "conti()">
      </div>
      <div class="text">
        {{songsList[songIndex].name}} {{songsList[songIndex].singer}}
      </div>
      <div class="nextButton">
        <img src="../assets/下一首.png" v-on:click = "next()">
      </div>
      <div class="lastButton">
        <img src="../assets/上一首.png" v-on:click = "last()">
      </div>
    </div>
  </div>

</template>

<script>
export default({
  e1: '#musicPlayer',
  data: {
    themes: ['./assets/2.jpg', './assets/3.jpg', './assets/4.jpg', './assets/5.jpg', './assets/6.jpg', './assets/1.jpg'],
    theme: './assets/2.jpg',
    option: false,
    songsList: [
      {index: 0, name: 'I knew you were trouble', singer: 'Taylor Swift'},
      {index: 1, name: 'As if it is the last', singer: 'Black Pink'},
      {index: 2, name: 'Playing with fire', singer: 'Black Pink'},
      {index: 3, name: 'Again', singer: 'YUI'}
    ],
    List: false,
    songIndex: 0,
    play: true,
    pause: false
  },
  method: {
    changeThemeSwitch: function () {
      this.option = !this.option
    },
    showTheList: function () {
      this.List = !this.List
    },
    pause: function () {
      this.play = false
      this.pause = true
    },
    conti: function () {
      this.play = true
      this.pause = false
    },
    next: function () {
      this.songIndex = (this.songIndex + 1) % (this.songsList.length)
    },
    last: function () {
      this.songIndex = (this.songIndex - 1) % (this.songsList.length)
    }
  }
})
</script>

<style>

</style>
