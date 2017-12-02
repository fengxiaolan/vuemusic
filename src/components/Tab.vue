<template>
	<ul class="navlist">
	    <router-link tag="li" class="tab-item" to="/recommend">
	      <span class="tab-link">推荐</span>
	    </router-link>
	    <router-link tag="li" class="tab-item" to="/singer">
	      <span class="tab-link">歌手</span>
	    </router-link>
	    <router-link tag="li" class="tab-item" to="/rank">
	      <span class="tab-link">排行</span>
	    </router-link>
	    <router-link tag="li" class="tab-item" to="/search">
	      <span class="tab-link">搜索</span>
	    </router-link>
	</ul>

 </template>

 <script>
   export default{

   }

 </script>

 <style type="text/css">	
   .navlist{
   	 height: 44px;
   	 width: 100%;
   	 display: flex;
   	 justify-content:space-between;
     line-height: 44px;
   }
   .navlist li{
   	 flex:1;
   	 height: 44px;
   	 text-align: center;
   }
   .navlist li.router-link-active span{
     color: #ffcd32;
     line-height: 100%;
     border-bottom: 2px solid #ffcd32;
     padding-bottom: 5px;
   }
   
   .navlist li span{
   	 color: #909090;
   	 line-height: 100%;
     font-size: 14px;

   }

 </style>

