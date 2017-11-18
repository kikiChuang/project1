<template>
  <div class="hello">
    <div class="backg">
      <div class="BGicon">
        <img src="/static/img/主题.png" v-on:click = "changeThemeSwitch">
      </div>
      <div class="options">
        <template v-if="option">
          <div class="lastBgI">
            <img src="/static/img/背景图片切换1.png" v-on:click = "subBgI">
          </div>
          <div class="nextBgI">
            <img src="/static/img/背景图片切换2.png" v-on:click = "incBgI">
          </div>
        </template>
      </div>
      <div class="backgImg">
        <img v-bind:src="themes[backgImgIndex]">
      </div>
    </div>

    <div class="list">
      <div class="Sicon">
        <img src="/static/img/列表.png" v-on:click = "showTheList">
      </div>
      <ul class="songs">
        <template v-if="List" v-for="(item, index) in songsList">
          <li> {{item.name}} - {{item.singer}}
            <a v-show="nEmpty" v-on:click = "deleteSong(index)">删除</a>
          </li>
          <br/>
        </template>
      </ul>
      <div class="textb" v-if="List">
        <img src="/static/img/textb.png">
      </div>
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

    <div class="input">
      <input placeholder="请添加歌曲" v-model="newSong" v-on:keyup.enter = "addNewSong">
    </div>
  </div>
</template>

<script>
  export default({
    name: 'HelloWorld',
    data () {
      return {
        themes: ['/static/img/1.jpg', '/static/img/2.jpg', '/static/img/3.jpg', '/static/img/4.jpg', '/static/img/5.jpg', '/static/img/6.jpg'],
        option: false,
        songsList: [
          {name: 'If you', singer: 'Bigbang'},
          {name: 'As if it is the last', singer: 'Black Pink'},
          {name: 'Playing with fire', singer: 'Black Pink'},
          {name: 'Again', singer: 'YUI'}
          ],
        List: false,
        nEmpty: true,
        songIndex: 0,
        backgImgIndex: 0,
        play: true,
        playIcon: '/static/img/播放图标.png',
        pauseIcon: '/static/img/暂停.png',
        newSong: ''
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
      },
      deleteSong: function(index){
          if(this.nEmpty == false)
          {
              return
          }
          if(this.songsList.length == 1)
          {
            this.songsList.push({name: '请添加歌曲', singer: '请添加歌曲'})
            this.nEmpty = false
          }
          this.songsList.splice(index,1)
          this.songIndex = this.songIndex % this.songsList.length
      },
      addNewSong: function(){
        this.songsList.push({name: this.newSong, singer: 'Unknown'})
        this.newSong = ''
        if(this.nEmpty == false){
          this.songsList.splice(0,1)
          this.nEmpty = true
        }
      },
      subBgI: function(){
          this.backgImgIndex = (this.backgImgIndex + 5) % 6
      },
      incBgI: function(){
          this.backgImgIndex = (this.backgImgIndex + 1) % 6
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
.songs {
  position:absolute;
  left: 0px;
  top: 70px;
  text-align: left;
  color: #FFFFFF;
  font-size: 14px;
  z-index:-1;
  }
.BGicon{
  position:fixed;
  bottom: 0px;
  right: 0px;
  width: 50px;
  height: 50px;
}
.BGicon img{
  display:block;
  outline:none;
  border:0;
  height:100%;
  width:100%;
}
.backgImg {
  width: 100%;
  height: 100%;
  left:0;
  top:0;
  z-index: -3;
  position: fixed;
}
.backgImg img{
  display: block;
  outline: none;
  border:0;
  height: 100%;
  width: 100%;
}
.Sicon{
  position:fixed;
  top: 0px;
  left:0px;
  width: 50px;
  height: 50px;
}
.Sicon img{
  display:block;
  outline:none;
  border:0;
  height:100%;
  width:100%;
}
.play{
  position:fixed;
  top: 50%;
  left: 50%;
  margin-top: -115px;
  margin-left: -115px;
  width:230px;
  height: 230px;
}
.play img{

  display: block;
  outline: none;
  border:0;
  height: 100%;
  width: 100%;
}
.nextButton{
  position:fixed;
  top: 50%;
  left: 70%;
  margin-top: -40px;
  margin-left: -75px;
  width:150px;
  height: 80px;
}
.nextButton img{
  display: block;
  outline: none;
  border:0;
  height: 100%;
  width: 100%;
}
.lastButton{
  position:fixed;
  top: 50%;
  left: 30%;
  margin-top: -40px;
  margin-left: -75px;
  width:150px;
  height: 80px;
}
.lastButton img{
  display: block;
  outline: none;
  border:0;
  height: 100%;
  width: 100%;
}
.input{
  position:fixed;
  top: 10px;
  right: 10px;
}
.text{
  position:fixed;
  top:10%;
  left:50%;
  height: 50px;
  width: 600px;
  margin-left:-300px;
}
.options{
  position:fixed;
  right: 0px;
  bottom: 50px;
}
.textb {
  width: 20%;
  height: 100%;
  left:0;
  top:0;
  z-index: -2;
  position: fixed;
}
.textb img{
  opacity: 0.6;
  display: block;
  outline: none;
  border:0;
  height: 100%;
  width: 100%;
}
.lastBgI{
  position:fixed;
  bottom: 10%;
  left: 50%;
  margin-left: -150px;
  width:50px;
  height: 50px;
}
.lastBgI img{
  display: block;
  outline: none;
  border:0;
  height: 100%;
  width: 100%;
}
.nextBgI{
  position:fixed;
  bottom: 10%;
  left: 50%;
  margin-left: 100px;
  width:50px;
  height: 50px;
}
.nextBgI img{
  display: block;
  outline: none;
  border:0;
  height: 100%;
  width: 100%;
}
</style>
