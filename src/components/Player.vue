<template>

  <div class="player" >
    
      <!--播放页面全屏-->
      <div class="normal-player" >
        <!--背景 模糊-->
        <div class="background">
          <img src="https://y.gtimg.cn/music/photo_new/T002R300x300M00000371Ai74AcCch.jpg?max_age=2592000"  width="100%" height="100%" >
        </div>
        <!--顶部-->
        <div class="top clearfix">
          <div class="back" @click="back">
            <i class="iconfont icon-back"></i>
          </div>
          <h1 class="songtitle" >李白(Live)</h1>
          <h2 class="subtitle" >李荣浩/王俊凯</h2>
        </div>
         <!--中间cd部分-->
        <div class="middle" > 
	       <swiper :options="swiperOption" ref="mySwiper">
		    <swiper-slide>
		       <div class="middleimg" ref="middleimg">
	            <div class="cd-wrapper" ref="cdWrapper">
	              <div class="cd" >
	                <img src="https://y.gtimg.cn/music/photo_new/T002R300x300M00000371Ai74AcCch.jpg?max_age=2592000" class="image" :class="isPlaying ? 'play' :''">
	              </div>
	            </div>
	            <div class="playing-lyric-wrapper">
	              <div class="playing-lyric">
	                我认真学习了世俗眼光
	              </div>
	            </div>
	          </div>
		     </swiper-slide>

		     <swiper-slide>
	           <scroll class="middlelyric" ref="lyriclist" >
	            <div class="lyric-wrapper">
	              <div >
	                <p ref="lyricLine" 
	                  class="text" 
	                >
	                <pre>
	 李白 - 李荣浩
	词：李荣浩

	曲：李荣浩

	要是能重来 我要选李白

	要是能重来

	要是能重来 我要选李白

	要是能重来

	要是能重来 我要选李白

	要是能重来

	要是能重来 我要选李白

	要是能重来

	要是能重来 我要选李白

	要是能重来

	要是能重来 我要选李白

	要是能重来
  要是能重来 我要选李白

  要是能重来

  要是能重来 我要选李白

  要是能重来
	                </pre>
	             
	                </p>
	              </div>
	            </div>
	          </scroll>
		  </swiper-slide>

		  
		</swiper>
		
     </div>
     <!-- 底部控件操作 -->
       <div class="bottom">
         <div class="swiper-pagination"  slot="pagination"></div>
         
         <div class="probar clearfix">
         <span class="time1">00:00</span>
         <div class="linebar">
           <vue-slider  :options="sliderOption"  ref="slider" ></vue-slider >
         </div>
         <span class="time2">04:20</span>
         </div>
        
        <div class="operators">
            <div class="icon " >
              <i class="iconfont icon-random"></i>
            </div>
            <div class="icon" >
              <i class="iconfont  icon-prev" @click="prev" ></i>
            </div>
            <div class=" icon i-center" >
              <i class="iconfont"  @click="togglePlaying" :class="playIcon"></i>
            </div>
            <div class="icon i-right" >
              <i class="iconfont icon-next" @click="next"></i>
            </div>
            <div class="icon i-right">
              <i class="iconfont" :class="getlikeIcon" @click="toggleLike">
              </i>
            </div>
          </div>

       </div>

      
    </div>
   
    <audio :src="playready"  
    ref="audio" 
    autoplay
    >
    </audio>

  </div>
</template>

<script type="text/javascript">
  import Scroll from '../components/Scroll';
  import {swiper,swiperSlide } from 'vue-awesome-swiper';
  import vueSlider from 'vue-slider-component'; //进度条      
  import PlayerMin from '../components/PlayerMin'; //进度条


  export default {
    data(){
    	return {
          isPlaying:false,
          isLike:false,
          currentAudio:9,
    		  swiperOption: {
            initialSlide: 0,
            direction:'horizontal',
            pagination: '.swiper-pagination',
            preventClicks : false,
            speed:300,
            autoplayStopOnLast:true
            // autoplayDisableOnInteraction : false
           },
           sliderOption:{
           	 value:0,
    	   	 	 width: '65%',// 组件宽度
    			   height: 30,// 组件高度
    	   	 	 direction: "horizontal",// 组件方向
    			   dotSize: 16,// 滑块大小
    			   speed: 0.3,// 动画速度
    			   clickable:true,
    			   stopPropagation:true,
    			   tooltip:null,
    			   bgStyle:{
    			   	 'backgroundColor':'#333',
    			   	  'color':'#333'
    			   },
    			   processStyle:{
    			     "backgroundColor": "#ffcd32",
    			   	 'color':'#ffcd32'
    			   },
    			   tooltipStyle: {
    			   	"backgroundColor": "#666",
              "borderColor": "#666"
    			   },
             sliderStyle:
              {
                "backgroundColor": "#f05b72"
              }

           }, 
           audioUrl:[
            {asrc:'http://ws.stream.qqmusic.qq.com/107192538.m4a?fromtag=46',id:'107192538'},
            {asrc:'http://ws.stream.qqmusic.qq.com/5106429.m4a?fromtag=46',id:'5106429'},
            {asrc:'http://ws.stream.qqmusic.qq.com/102425546.m4a?fromtag=46',id:'102425546'},
            {asrc:'http://ws.stream.qqmusic.qq.com/5016168.m4a?fromtag=46',id:'5016168'},
            {asrc:'http://ws.stream.qqmusic.qq.com/205004626.m4a?fromtag=46',id:'205004626'},
            {asrc:'http://ws.stream.qqmusic.qq.com/107902821.m4a?fromtag=46',id:'107902821'},
            {asrc:'http://ws.stream.qqmusic.qq.com/4830342.m4a?fromtag=46',id:'4830342'},
            {asrc:'http://ws.stream.qqmusic.qq.com/1313990.m4a?fromtag=46',id:'1313990'},
            {asrc:'http://ws.stream.qqmusic.qq.com/1313988.m4a?fromtag=46',id:'1313988'},
            {asrc:'http://ws.stream.qqmusic.qq.com/101813361.m4a?fromtag=46',id:'101813361'},
            {asrc:'http://ws.stream.qqmusic.qq.com/107192078.m4a?fromtag=46',id:'107192078'},
            {asrc:'http://ws.stream.qqmusic.qq.com/680280.m4a?fromtag=46',id:'680280'},
            {asrc:'http://ws.stream.qqmusic.qq.com/449205.m4a?fromtag=46',id:'449205'},
            {asrc:'http://ws.stream.qqmusic.qq.com/101369814.m4a?fromtag=46',id:'101369814'}
            
           ]
           
           	  
    	}
    },
    methods:{
    	back(){
    	  this.$router.back()
    	},
    	togglePlaying(){
        this.isPlaying=!this.isPlaying;
        localStorage.setItem('isPlaying',this.isPlaying)
    	},
    	toggleLike(){
    		this.isLike=!this.isLike
    	},
      prev(){
         this.currentAudio--;
         if(this.currentAudio==1){
           this.currentAudio=this.audioUrl.length
         }
      },
      next(){
         this.currentAudio++;
         if(this.currentAudio==this.audioUrl.length){
           this.currentAudio=0
         }
      }
       
    },
    components:{
    	Scroll,
    	swiper,
  	  swiperSlide,
  	  vueSlider,
      PlayerMin
    },

    computed:{
      playIcon() {
        return this.isPlaying ? 'icon-zanting' : 'icon-play1'
      },
      getlikeIcon(){
      	return this.isLike ? 'icon-like' : 'icon-favorite'
      },
      playready(){
       /* if(this.isPlaying){
          return this.audioUrl[this.currentAudio].asrc
           console.log(this.audioUrl[this.currentAudio].asrc)
          
        }*/
      //console.log(this.isPlaying)
      console.log(this.audioUrl[this.currentAudio].asrc)
      return this.isPlaying ? this.audioUrl[this.currentAudio].asrc :"";
      }
     
      /*next(){
        if(!this.audioUrl.length){
          return this.currentAudio++
        }
      },
      prev(){
        if(!this.audioUrl.length){
          return this.currentAudio--
        }
      },
   */ 
    /* ,next(){   
          return this.$refs.audio.currentAudio+1
      },
      prev(){
         return this.$refs.audio.currentAudio-1
      }*/

     } ,
    mounted(){
      this.$nextTick(function(){

      })
    },
    watched:{
      
    }





  }
</script>

<style type="text/css">
@keyframes rotate{
   0%{
    transform: rotate(0)
   }   
   100%{
       transform: rotate(360deg)
   }    
}

 .player{
 	position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 150;
    background: #222;
    height: 100%;
    width: 100%;
 }
  .player .normal-player{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 150;
    background: #222;
}
.player .normal-player .background{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.6;
    filter: blur(20px);  /*给图像设置高斯模糊*/
}

/*img.play {
    animation:rotate  5s linear infinite;
}*/
.player .normal-player .top{
    position: relative;
    margin-bottom: 25px;
}
.player .normal-player .top .back{
    position: absolute;
    top: 0;
    left: 6px;
    z-index: 50;
}
.player .normal-player .top .back .icon-back {
    display: block;
    padding: 9px;
    font-size: 22px;
    color: #ffcd32;
    transform: rotate(-90deg);
}

.player .normal-player .top .songtitle{
    width: 100%;
    margin: 0 auto;
    line-height: 40px;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 18px;
    color: #fff;
}
.player .normal-player .top .subtitle {
    line-height: 20px;
    height: 20px;
    text-align: center;
    font-size: 14px;
    color: #fff;
    width: 100%;
}
.player .normal-player .middle{
    position: fixed;
    width: 100%;
    top: 80px;
    bottom: 170px;
    white-space: nowrap;
    font-size: 0;
    overflow: hidden;
}
.player .normal-player .middle .swiper-container{
	height: 100%;
 
}
.player .normal-player .middle .swiper-container .swiper-wrapper{
   background: transparent;

}
.player .normal-player .middle .middleimg{
    display: inline-block;
    vertical-align: top;
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 80%;
}
.player .normal-player .middle .middleimg .cd-wrapper {
    position: absolute;
    left: 10%;
    top: 0;
    width: 80%;
    height: 100%;
}
.player .normal-player .middle .middleimg .cd-wrapper .cd.pause {
    animation-play-state: paused;
}

.player .normal-player .middle .middleimg .cd-wrapper .cd{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 10px solid rgba(255,255,255,0.1);
    border-radius: 50%;
}
.player .normal-player .middle .middleimg .cd-wrapper .cd .image{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.player .normal-player .middle .middleimg .cd-wrapper .cd .play{
   animation:rotate 8s linear infinite;
   border: 8px solid rgba(255,255,255,0.5);
}

.player .normal-player .middle .playing-lyric-wrapper{
	width: 80%;
	margin: 30px auto 0;
	
}
.player .normal-player .middle .playing-lyric-wrapper .playing-lyric{
	height: 20px;
 	line-height: 20px;
 	font-size: 14px;
 	color:rgba(255,255,255,0.5);
}
.swiper-pagination-bullets{
	width: 100%;
	/*text-align:center;*/
}
.swiper-pagination-bullet{
   display: inline-block;
   vertical-align: middle;
   margin: 0 4px;
   width: 8px;
   height: 8px;
   border-radius: 50%;
   background: rgba(255,255,255,0.5);
   /*margin: 0 auto;*/
}
.swiper-pagination-bullet-active{
	width:20px;
	border-radius:5px;
	background: rgba(255,255,255,0.8); 
}

.player .normal-player .middle .middlelyric {
    display: inline-block;
    vertical-align: top;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.player .normal-player .middle .middlelyric .lyric-wrapper {
    width: 80%;
    margin: 0 auto;
    overflow: hidden;
    text-align: center;
}
.player .normal-player .middle .middlelyric .lyric-wrapper .text {
    line-height: 32px;
    color: rgba(255,255,255,0.5);
    font-size: 14px;

}

/*底部*/

.player .normal-player .bottom{
    position: absolute;
    bottom: 50px;
    width: 100%;
    text-align: center;

}
.player .normal-player .bottom .probar{
	  height: 30px;
    margin-top: 18px;
    width:100%;
    padding: 10px 20px;

}
.player .normal-player .bottom .probar .time1,
.player .normal-player .bottom .probar .time2{
	display:block;
	float: left;
	color: #fff;
    font-size: 12px;
    width: 30px;
    line-height: 25px;
}
.player .normal-player .bottom .probar .linebar{
	width: 68%;
	height: 30px;
	float: left;
	margin: 0 3px ;
}

.player .normal-player .bottom .operators {
    display: flex;
    align-items: center;
}
.player .normal-player .bottom .operators .icon{
    flex: 1;
    color: #ffcd32;
}
.player .normal-player .bottom .operators .iconfont{
	font-size: 40px;
}
.player .normal-player .bottom .operators .icon-play1{
	font-size: 56px;
}
.player .normal-player .bottom .operators .icon-zanting{
  font-size: 56px;
}
.player .normal-player .bottom .operators .icon-favorite{
  color: red;
}

@keyframes rotate{
	 0%{
	 	transform: rotate(0)
	 }   
    100%{
    	 transform: rotate(360deg)
    }    
}
   
</style>