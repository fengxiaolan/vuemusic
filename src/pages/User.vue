<template>
	<div class="user" ref="user">

		<div class="back" @click="back">
        <i class="iconfont icon-back"></i>
    </div>
     
     <div class="switchwapper">
     <ul class="switches"  >
      <li class="switch-item" 
        v-for="(item,index) in switches"
        :key="item.index"
        @click="switchItem(index)"
        :class="{'active':currentIndex === index}"
      >
        <span>{{item}} </span>
      </li>
    </ul>
    </div>

    <div class="play-btn" ref="playBtn" >
        <i class="iconfont icon-play"></i>
        <span class="text">随机播放全部</span>
    </div>
    
    <div class="likelist">
      <Scroll class="likecontent" ref="likescroll" v-if="currentIndex==0">
        <div>
          <song-list></song-list>
         <!--  暂没有收藏歌曲 -->
         </div>
      </Scroll>
      
       <Scroll class="historycontent" ref="historyscroll" v-if="currentIndex==1">
        <div>
          <song-list></song-list>
         </div>
      </Scroll>
    </div>



	</div>
</template>

<script>
  import SongList from '../components/SongList'
  import Scroll from '../components/Scroll'
   export default {
   	  data(){
   	  	return {
          currentIndex: 0,
          switches:['我喜欢的','最近听的'] 
   	  	}
   	  },
      components:{
        Scroll,
        SongList
      },
      computed:{

      },
      methods:{
        back(){
           this.$router.back()
        },
        switchItem(index) {
          this.currentIndex = index
        }
      }

   }
</script>

<style>
	.user {
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 100;
    width: 100%;
    background: #222;
  }
 .icon-play1,.icon-back{
   color: #ffcd32;
 }
 .icon-back{
   font-size: 24px;
   padding: 9px;
   display: block;
 }

.back {
    position: absolute;
    top: 2px;
    left: 2px;
    z-index: 50;
}
.user .switchwapper  {
    margin: 10px 0 30px 0;
}
.user .switchwapper .switches{
    display: flex;
    align-items: center;
    width: 240px;
    margin: 0 auto;
    border: 1px solid #333;
    border-radius: 5px;
}
.user .switchwapper .switches .switch-item {
    flex: 1;
    padding: 6px;
    text-align: center;
    font-size: 14px;
    color: rgba(255,255,255,0.3);
}
.user .switchwapper .switches .switch-item.active{
    background: #333;
    color: #fff;
}

.user .play-btn {
    box-sizing: border-box;
    width: 135px;
    padding: 7px 0;
    margin: 0 auto;
    text-align: center;
    border: 1px solid rgba(255,255,255,0.5);
    color: rgba(255,255,255,0.5);
    border-radius: 100px;
}
.user .play-btn .icon-play{
    display: inline-block;
    vertical-align: middle;
    margin-right: 6px;
    font-size: 18px;
    color: rgba(255,255,255,0.3);
}
.user .play-btn .text{
    display: inline-block;
    vertical-align: middle;
    font-size: 12px;
}

.likelist{
   position: absolute;
  top: 120px;
  bottom: 0;
  width: 100%;
}
.likelist .likecontent{
   height: 100%;
   overflow: hidden;
   padding: 20px 30px;
}
.likelist .historycontent{
   height: 100%;
   overflow: hidden;
   padding: 20px 30px;
}
</style>