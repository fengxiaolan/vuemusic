<template>  
	<swiper :options="swiperOption" ref="mySwiper">
	    <swiper-slide v-for="(banner,index) in banners" :key="banner.index">
	    	<a :href="banner.aurl" >
	         <img :src="banner.img">
	    	</a>
	    </swiper-slide>

    <div class="swiper-pagination"  slot="pagination"></div>
    
  </swiper>
</template>

<script type="text/javascript">

  import {swiper,swiperSlide } from 'vue-awesome-swiper'
  
  export default {
     data(){
       return {
          banners:[
          {img:'images/carousel1.jpg',aurl:"http://www.baidu.com"},
          {img:'images/carousel2.jpg',aurl:"http://www.baidu.com"}, 
          {img:'images/carousel3.jpg',aurl:"http://www.baidu.com"},
          {img:'images/carousel4.jpg',aurl:"http://www.baidu.com"},
          {img:'images/carousel5.jpg',aurl:"http://www.baidu.com"}
           ],
          swiperOption: {
            autoplay: 3000,
            initialSlide: 0,
            loop: true,
            direction:'horizontal',
            pagination: '.swiper-pagination',
            preventClicks : false
            // autoplayDisableOnInteraction : false

       }
     }
    },
    components: {
  	 swiper,
  	 swiperSlide
  	},
	 computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      //console.log('this is current swiper instance object', this.swiper)
      //this.swiper.slideTo(3, 1000, false)
    }

   }
</script>

<style type="text/css">
  .swiper-wrapper{
    /*height: 150px;*/
    background: #fff;
    width: 100%;
  }
  .swiper-slide img{
    height: 100%;
    width: 100%;
  }
   .swiper-container .swiper-pagination-bullet{
   	 width: 8px;
   	 height: 8px;
   	 background: #fff;
   }
	.swiper-container .swiper-pagination-bullet-active{
		  width: 20px;
	    border-radius: 5px;
	    background: rgba(255,255,255,0.9);
	}
</style>

