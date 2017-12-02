<template>
  <div class="header">
    <div class="titicon"></div>
    <h1 class="title">DaDa Music</h1>
    <router-link tag="div" class="mine" to="/user">
      <i class="iconfont icon-mine"></i>
    </router-link>
  </div>
</template>

<script>
  export default {

  }
</script>

<style type="text/css">
	 .header {
	  width: 100%;
	  height: 44px;
	  text-align: center;
	   }

	.titicon {
	  height: 32px;
	  width: 30px;
	  float: left;
	  background: url(logor.png) no-repeat;
	  background-size: 30px 32px;
	  margin-left: 32%;
	  margin-top: 6px; }

	.title {
	  float: left;
	  font-size: 18px;
	  color: #ffcd32;
	  margin-left: 8px;
	  line-height: 44px; }

	.mine {
	  width:44px;
	  height: 44px;
	  float: right; 
	  text-align: center;
	  padding: 12px;
	  box-sizing:border-box;
	}
	.icon-mine{
		font-size: 20px;
		color: #ffcd32;
	}

	

</style>