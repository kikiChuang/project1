import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  it('pause and play', () => {
    const Constructor = Vue.extend(HelloWorld);
    const vm = new Constructor().$mount();
    const play = vm.$el.querySelector('.play');
    const click = new window.Event('click')
    play.dispatchEvent(click);
    vm._watcher.run();
    expect(vm.play).to.equal(false);
  })
  it('nextSong', () => {
    const Constructor = Vue.extend(HelloWorld);
    const vm = new Constructor().$mount();
    const nextB = vm.$el.querySelector('#nextButton');
    const click = new window.Event('click')
    nextB.dispatchEvent(click);
    vm._watcher.run();
    expect(vm.songIndex).to.equal(1);
  })
  it('lastSong', () => {
    const Constructor = Vue.extend(HelloWorld);
    const vm = new Constructor().$mount();
    const nextB = vm.$el.querySelector('#lastButton');
    const click = new window.Event('click')
    nextB.dispatchEvent(click);
    vm._watcher.run();
    expect(vm.songIndex).to.equal(3);
  })
  it('add new song', () => {
    const Constructor = Vue.extend(HelloWorld);
    const vm = new Constructor().$mount();
    vm.addNewSong();
    vm._watcher.run();
    expect(vm.songsList.length).to.equal(5);
  })
  it('Slist', () => {
    const Constructor = Vue.extend(HelloWorld);
    const vm = new Constructor().$mount();
    const SList = vm.$el.querySelector('#Sicon');
    var e = new window.Event('click');
    SList.dispatchEvent(e);
    vm._watcher.run();
    expect(vm.List).to.equal(true);
  })
  it('Soption', () => {
    const Constructor = Vue.extend(HelloWorld);
    const vm = new Constructor().$mount();
    const BGicon = vm.$el.querySelector('#BGicon');
    var e = new window.Event('click');
    BGicon.dispatchEvent(e);
    vm._watcher.run();
    expect(vm.option).to.equal(true);
  })
  it('deleteSong', () => {
    const Constructor = Vue.extend(HelloWorld);
    const vm = new Constructor().$mount();
    const SList = vm.$el.querySelector('#Sicon');
    var e = new window.Event('click');
    SList.dispatchEvent(e);
    vm._watcher.run();
    expect(vm.List).to.equal(true);
    const delte = vm.$el.querySelector('a');
    delte.dispatchEvent(e);
    vm._watcher.run();
    expect(vm.songsList.length).to.equal(3);
  })
  it('lastBGimg', () => {
    const Constructor = Vue.extend(HelloWorld);
    const vm = new Constructor().$mount();
    const BGicon = vm.$el.querySelector('#BGicon');
    var e = new window.Event('click');
    BGicon.dispatchEvent(e);
    vm._watcher.run();
    expect(vm.option).to.equal(true);
    const BGimg = vm.$el.querySelector('#lastBgI');
    BGimg.dispatchEvent(e);
    vm._watcher.run();
    expect(vm.backgImgIndex).to.equal(5);
  })
  it('nextBGimg', () => {
    const Constructor = Vue.extend(HelloWorld);
    const vm = new Constructor().$mount();
    const BGicon = vm.$el.querySelector('#BGicon');
    var e = new window.Event('click');
    BGicon.dispatchEvent(e);
    vm._watcher.run();
    expect(vm.option).to.equal(true);
    const BGimg = vm.$el.querySelector('#nextBgI');
    BGimg.dispatchEvent(e);
    vm._watcher.run();
    expect(vm.backgImgIndex).to.equal(1);
  })
  it('deleteAllSong', () => {
    const Constructor = Vue.extend(HelloWorld);
    const vm = new Constructor().$mount();
    const SList = vm.$el.querySelector('#Sicon');
    var e = new window.Event('click');
    SList.dispatchEvent(e);
    vm._watcher.run();
    expect(vm.List).to.equal(true);
    const delte = vm.$el.querySelector('a');
    delte.dispatchEvent(e);
    vm._watcher.run();
    delte.dispatchEvent(e);
    vm._watcher.run();
    delte.dispatchEvent(e);
    vm._watcher.run();
    delte.dispatchEvent(e);
    vm._watcher.run();
    expect(vm.songsList.length).to.equal(1);
  })
  it('deleteAllSongThenDelete', () => {
    const Constructor = Vue.extend(HelloWorld);
    const vm = new Constructor().$mount();
    const SList = vm.$el.querySelector('#Sicon');
    var e = new window.Event('click');
    SList.dispatchEvent(e);
    vm._watcher.run();
    expect(vm.List).to.equal(true);
    const delte = vm.$el.querySelector('a');
    delte.dispatchEvent(e);
    vm._watcher.run();
    delte.dispatchEvent(e);
    vm._watcher.run();
    delte.dispatchEvent(e);
    vm._watcher.run();
    delte.dispatchEvent(e);
    vm._watcher.run();
    delte.dispatchEvent(e);
    vm._watcher.run();
    expect(vm.songsList.length).to.equal(1);
  })
  it('deleteAllSongThenAdd', () => {
    const Constructor = Vue.extend(HelloWorld);
    const vm = new Constructor().$mount();
    const SList = vm.$el.querySelector('#Sicon');
    var e = new window.Event('click');
    SList.dispatchEvent(e);
    vm._watcher.run();
    expect(vm.List).to.equal(true);
    const delte = vm.$el.querySelector('a');
    delte.dispatchEvent(e);
    vm._watcher.run();
    delte.dispatchEvent(e);
    vm._watcher.run();
    delte.dispatchEvent(e);
    vm._watcher.run();
    delte.dispatchEvent(e);
    vm._watcher.run();
    vm.addNewSong();
    vm._watcher.run();
    expect(vm.songsList.length).to.equal(1);
  })
})

