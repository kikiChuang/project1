<template>
  <div class="hello">
    <div class="backg">
      <div class="BGicon">
        <img src="/static/img/主题.png" v-on:click = "changeThemeSwitch">
      </div>
      <div class="options">
        <template v-if="option">
          <select v-model="theme">
            <option v-for="item in themes">{{item}}</option>
          </select>
        </template>
      </div>
      <div class="backgImg">
        <img v-bind:src="theme">
      </div>
    </div>

    <div class="list">
      <div class="Sicon">
        <img src="/static/img/列表.png" v-on:click = "showTheList">
      </div>
      <ul class="songs">
        <template v-if="List">
          <li v-for="item in songsList">
            {{item.name}}
          </li>
        </template>
      </ul>
    </div>

  <div class="player">
    <div class="play" v-on:click = "swi">
        <img v-bind:src="play ? playIcon : pauseIcon">
    </div>
    <div class="text">
      {{songsList[songIndex].name}} - {{songsList[songIndex].singer}}
    </div>
    <div class="nextButton">
      <img src="/static/img/下一首.png" v-on:click = "next">
    </div>
    <div class="lastButton">
      <img src="/static/img/上一首.png" v-on:click = "last">
    </div>
  </div>
  </div>
</template>

<script>
  export default({
    name: 'HelloWorld',
    data () {
      return {
        themes: ['/static/img/2.jpg', '/static/img/3.jpg', '/static/img/4.jpg', '/static/img/5.jpg', '/static/img/6.jpg', '/static/img/1.jpg'],
        theme: '/static/img/2.jpg',
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
        playIcon: '/static/img/播放图标.png',
        pauseIcon: '/static/img/暂停.png'
      }
    },
    methods: {
      changeThemeSwitch: function () {
        this.option = !this.option
      },
      showTheList: function () {
        this.List = !this.List
      },
      swi: function () {
        this.play = !this.play;
      },
      next: function () {
        this.songIndex = (this.songIndex + 1 + this.songsList.length) % (this.songsList.length)
      },
      last: function () {
        this.songIndex = (this.songIndex - 1 + this.songsList.length) % (this.songsList.length)
      }
    }
  })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
