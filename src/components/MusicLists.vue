<template>
  <div class="music-list">
    <!--返回上一层-->
    <div class="back" @click="back">
      <i class="iconfont icon-back"></i>
    </div>
    <!--歌曲信息-->
    <h1 class="title">来来来！爷爷放点音乐给你听</h1>
    <div class="bg-image" :style="[bgStyle]"  ref="bgImage">
      <div class="play-wrapper">
        <div ref="playBtn"  class="play" >
          <i class="iconfont icon-play"></i>
          <span class="text">随机播放全部</span>
        </div>
      </div>
    </div>
    <!--滑动辅助层-->
    <!-- <div class="bg-layer" ref="layer"></div> -->
    <!--歌曲列表-->
    <scroll class="list" ref="list"
    >
      <div class="song-list-wrapper">
        <song-list></song-list>
      </div>
    </scroll>


  </div>
</template>

<script>
  import Scroll from '../components/Scroll';
  import SongList from '../components/SongList';
  export default {  
    data() {
      return {
        bgStyle:{
            backgroundImage: "url(http://p.qpic.cn/music_cover/0GgOOrIBQ14wNzmVraZQ5SoWeicm1uM0XJWqvrWRjU1ibs7HWic6R3Emw/600?n=1)",
            backgroundSize:'cover',
            paddingTop: '70%',
            height: '0px',
            transform: "scale(1)",
            zIndex: 0
        }
      }
    },
    computed: {

    },
    created() {

    },
    mounted() {
     
    },
    methods: {
      back() {
        this.$router.back()
      }
    },
    components: {
      Scroll,
      SongList
    }
  }
</script>

<style  rel="text/css">
  .music-list {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #222;
    height: 100%;
    width: 100%
}
.music-list .back {
    position: absolute;
    top: 0;
    left: 6px;
    z-index: 50;
}
.music-list .back .icon-back{
    display: block;
    padding: 10px;
    font-size: 22px;
    color: #ffcd32;
}
.music-list .title {
    position: absolute;
    top: 0;
    left: 10%;
    z-index: 40;
    width: 80%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    line-height: 45px;
    font-size: 18px;
    color: #fff;
    text-align: center;
}

.music-list .bg-image .play-wrapper {
    position: absolute;
    bottom: 20px;
    z-index: 50;
    width: 100%;
}
.music-list .bg-image .play-wrapper .play {
    box-sizing: border-box;
    width: 135px;
    padding: 7px 0;
    margin: 0 auto;
    text-align: center;
    border: 1px solid #ffcd32;
    color: #ffcd32;
    border-radius: 100px;
    font-size: 0;
}
.music-list .bg-image .play-wrapper .play .icon-play {
    display: inline-block;
    vertical-align: middle;
    margin-right: 6px;
    font-size: 18px;
}
.music-list .bg-image .play-wrapper .play .text {
    display: inline-block;
    vertical-align: middle;
    font-size: 12px;
}

.music-list .list{
    position: fixed;
    top: 263px;
    bottom: 0;
    width: 100%;
    background: #222;
}
/*.music-list .bg-layer {
    position: relative;
    top: 44px;
    background: #222;
}*/
.music-list .list .song-list-wrapper {
    padding: 20px 30px;
    background: #222;
}

</style>

