<template>
	 <!--播放页面小屏 底部-->
    <!-- <transition name="mini"> -->
    <div>
      <div class="mini-player" >

        <div class="iconmin">
          <img :class="isPlaying?'play':'pause'" src="http://p.qpic.cn/music_cover/0GgOOrIBQ14wNzmVraZQ5SoWeicm1uM0XJWqvrWRjU1ibs7HWic6R3Emw/600?n=1" width="40" height="40" >
        </div>
        <div class="text">
          <h2 class="name" >爷爷给你放首歌</h2>
          <p class="desc" >rack</p>
        </div>
        <div class="controlplay">
          <i class="iconfont" :class="playIcon" @click="togglePlaying"></i>
        </div>
        <div class="controllist"  @click="show">
          <i class="iconfont icon-playlist"></i>
        </div>
      </div>

   
    <div class="playlist"  ref="playlist"  v-show="showflag">
      <div class="list-wrapper">

        <div class="list-header clearfix">
          <h1 class="title">
            <i class="iconfont icon-xunhuanbofang"></i>
            <span class="text">顺序播放</span>
            <span class="clear" >
              <i class="iconfont icon-clear"></i>
            </span>
          </h1>
        </div>

        <div class="linelist">
	        <Scroll class="list-content"  ref="playlinescroll">
	        	
	        	<transition-group tag="ul" name="list">
	        	<!-- <ul class="playlistbox"> -->
	            <li 
	              class="item"
	              v-for="(item,index) in sequenceList"
	              :key="item.id"
	              ref="listItem"
	            >
	              <i class="current iconfont icon-play1"></i>
	              <span class="text"> {{item.name}} </span>
	              <span class="like">
	                <i class="iconfont icon-like"></i>
	              </span>
	              <span class="delete">
	                <i class="iconfont icon-delete"></i>
	              </span>
	            </li>
	          <!-- </ul>    -->
               </transition-group>
               
	        </Scroll>
        </div>

 		 <div class="list-operate">
          <div class="add" >
            <i class="iconfont icon-add"></i>
            <span class="text">添加歌曲到队列</span>
          </div>
         </div>
	     <div class="list-close" @click="hide()">
	        <span>关闭</span>
	     </div>

      </div>
    </div>
   </div>
  <!-- </transition> -->
</template>

 <script>
 import Scroll from '../components/Scroll';
   export default{
     data(){
     	return {
     		isPlaying:false,
     		sequenceList:[
     	     {name:'烟火',id:'200'},
     	     {name:'烟火',id:'201'},
     	     {name:'烟火',id:'202'},
     	     {name:'烟火',id:'203'},
     	     {name:'烟火',id:'204'},
     	     {name:'烟火',id:'205'},
     	     {name:'烟火',id:'206'},
     	     {name:'烟火',id:'207'},
     	     {name:'烟火',id:'208'},
     	     {name:'烟火',id:'209'},
     	     {name:'烟火',id:'210'}
     		],
     		showflag:true

     	}
     },
     methods:{
     	togglePlaying(){
         this.isPlaying=!this.isPlaying
         //localStorage.getItem('isPlaying')  
    	},
    	hide(){
    		this.showflag=false
    	},
    	show(){
    		this.showflag=true;
    		console.log(568)
    	}
     },
     computed:{
       playIcon(){
       	 return this.isPlaying ? 'icon-zanting' : 'icon-play1' 
       },
       showplaylist(){
       	 // this.$refs.playList.show()
       	 console.log(123)
       }
     },
     components:{
     	Scroll
     }

   }
 </script>

 <style type="text/css">	

 .mini-enter-active, .mini-leave-active{
    transition: all 0.4s
   }      
 .mini-enter, .mini-leave-to{
     opacity: 0
  }
 .lis-fade-enter-active, .list-leave-active{
 	transition: all 0.3s
 }  
 .list-enter, .list-leave-to{
  	 opacity: 0
  }
     


.mini-player {
    display: flex;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 180;
    width: 100%;
    height: 60px;
    background: #333;
    /*background: red;*/
}
.mini-player .controlplay{
   width: 30px;
   padding: 0 10px;
}
.mini-player .controllist{
   width: 30px;
   padding: 0 10px;
}
.mini-player .icon-play1{
  font-size: 40px;
  color: #ffcd32;
}
.mini-player .icon-zanting{
	font-size: 40px;
  color: #ffcd32;
}
.mini-player .icon-playlist{
	font-size: 40px;
  color: #ffcd32;
}
.mini-player .iconmin { 
    flex: 0 0 40px;
    width: 40px;
    padding: 0 10px 0 20px;
}


 .mini-player .iconmin img.pause {
    animation-play-state: paused;
}
 .mini-player .iconmin img.play {
    animation:rotate  5s linear infinite;
}

 .mini-player .iconmin img{
    border-radius: 50%;
}
 .mini-player .text{
    display: flex;  
    flex-direction: column; 
    justify-content:flex-start;
    flex: 1;
    line-height: 20px;
    overflow: hidden;
    text-align: left;
}
 .mini-player .text .name {
    margin-bottom: 2px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 14px;
    color: #fff;
}
 .mini-player .text .desc {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 12px;
    /*color: rgba(255,255,255,0.3);*/
    color: black;
}
 
@keyframes rotate{
	 0%{
	 	transform: rotate(0)
	 }   
    100%{
    	 transform: rotate(360deg)
    }    
}

/*列表*/

.playlist{
	position: fixed;
    left: 0;
    bottom: 0;
    top: 230px;
    width: 100%;
    background-color: #333;
    z-index: 200;
}
.playlist .list-wrapper{
    height: 100%;
	overflow: hidden;
    width: 100%;
}
.list-wrapper .list-header {
    padding: 20px 30px 10px 20px;
}
.playlist .list-wrapper .list-header .title{
	display: flex;
	align-items: center;
	width: 100%;
}
.playlist .list-wrapper .list-header .title .icon-xunhuanbofang{
    margin-right: 10px;
    font-size: 30px;
    color: rgba(255,205,49,0.5);
}
.playlist .list-wrapper .list-header .title .text{
    flex:1;
    font-size: 14px;
    color: rgba(255,255,255,0.5);
    overflow: hidden;
    text-align: left;
}
.playlist .list-wrapper .list-header .title .icon-clear
{
	font-size:22px;
	color: #666; 
}

.linelist{
	height: 240px;
    overflow: hidden;
    width: 100%;
}
.linelist .list-content {
	height: 100%;
	overflow: hidden;
}
.playlist .list-wrapper .list-content .item {
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0 30px 0 20px;
    overflow: hidden;
    color: rgba(255,255,255,0.3);
}
.playlist .list-wrapper .list-content .item .icon-delete{
	color: #ffcd32;
}
.playlist .list-wrapper .list-content .item .icon-like{
	color: #ffcd32;
}
 .playlist .list-wrapper .list-content .item .current {
    flex: 0 0 20px;
    width: 20px;
    font-size: 12px;
    color: rgba(255,205,49,0.5);
}
 .playlist .list-wrapper .list-content .item .icon-play1{
 	font-size: 16px;
 }
.playlist .list-wrapper .list-content .item .text {
    flex: 1;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 14px;
    color: rgba(255,255,255,0.3);
    text-align: left;
}
 .playlist .list-wrapper .list-content .item .like{
    position: relative;
    margin-right: 15px;
    font-size: 12px;
    color:}
 .playlist .list-wrapper .list-content .item .delete {
    position: relative;
    font-size: 12px;
    color: #ffcd32;
} 
.playlist .list-wrapper .list-operate {
    width: 140px;
    margin: 20px auto 20px auto;
}
.playlist .list-wrapper .list-operate .add {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    border: 1px solid rgba(255,255,255,0.5);
    border-radius: 100px;
    color: rgba(255,255,255,0.5);
}
.playlist .list-wrapper .list-operate .add .icon-add {
    margin-right: 5px;
    font-size: 10px;
}
 .playlist .list-wrapper .list-operate .add .text{
    font-size: 12px;
}
.playlist .list-wrapper .list-close {
    text-align: center;
    line-height: 50px;
    background: #222;
    font-size: 16px;
    color: rgba(255,255,255,0.5);
}



/*



.confirm[data-v-77a7a33e] {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 998;
    background-color: rgba(0,0,0,0.3);
}
.confirm .confirm-wrapper[data-v-77a7a33e] {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index: 999;
}
.confirm .confirm-wrapper .confirm-content[data-v-77a7a33e] {
    width: 270px;
    border-radius: 13px;
    background: #333;
}
.confirm .confirm-wrapper .confirm-content .text[data-v-77a7a33e] {
    padding: 19px 15px;
    line-height: 22px;
    text-align: center;
    font-size: 18px;
    color: rgba(255,255,255,0.5);
}
.confirm .confirm-wrapper .confirm-content .operate[data-v-77a7a33e] {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
    font-size: 18px;
}
.confirm .confirm-wrapper .confirm-content .operate .operate-btn.left[data-v-77a7a33e] {
    border-right: 1px solid rgba(0,0,0,0.3);
}

.confirm .confirm-wrapper .confirm-content .operate .operate-btn[data-v-77a7a33e] {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    line-height: 22px;
    padding: 10px 0;
    border-top: 1px solid rgba(0,0,0,0.3);
    color: rgba(255,255,255,0.3);
}*/

 </style>

