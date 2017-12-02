<template>
   <div>
      
   </div>
</template>

<script>
  import vueSlider from 'vue-slider-component'; //进度条

 
  export default {
   mounted(){
   	 this.$nextTick(()=>{
	   	  this.recommendscroll=new BScroll(this.$refs.recommend, {
		  click: true,
		  bounce:true,
		  preventDefault:true
		});
   	 })
   	  
     },
   components:{
   	 
   },
   data(){
   	 return  {
   	 	value:0,
   	 	width: 'auto',// 组件宽度
		height: 150,// 组件高度
   	 	direction: "horizontal",// 组件方向
		dotSize: 8,// 滑块大小
		speed: 0.5// 动画速度
   	 }// <vue-slider></vue-slider>
   }

 
   


  }
</script>

<style type="text/css">
    .recommend{
	    position: fixed;
	    width: 100%;
	    top: 88px;
	    bottom: 0;
    }
    .recommend .content{
    	height: 100%;
    	overflow: hidden;
    }
/**/
.recommend .content .recommend-list .list-title[data-v-6fda9723] {
    height: 65px;
    line-height: 65px;
    text-align: center;
    font-size: 14px;
    color: #ffcd32;
}





    

</style>