<template>
   <div class="search" ref="search">

       <div class="search-wrapper">
       	<div class="search-box">
       		<i class="iconfont icon-search3"></i>
       		 <input  placeholder="搜索歌曲、歌手" class="sbox">
       		  <i class="iconfont icon-dismiss" ></i>
       		</div>
       	</div>
       
       <div class="hotscroll">
	   <Scroll class="scontent clearfix" ref="searchscroll">
           <div class="hot-key">
	          <h1 class="htitle">热门搜索</h1>
	          <ul class="hotkey">
	            <li class="item" 
	              v-for="item in hotkey" 
	              :key="item.n"
	            >
	              <span>{{item.k}}</span>
	            </li>
	          </ul>
	        </div>
             
	   </Scroll>
      </div>
   </div>
</template>

<script>
  import Scroll from '../components/Scroll';
  export default {
    data(){
      return {
         hotkey:[{k: "无条件 ", n: 85228},
          {k: "双世宠妃 ", n: 81282}, 
          {k: "从前慢 ", n: 78055}, 
          {k: "王俊凯 ", n: 70432},
          {k: "李宇春 ", n: 65388},
          {k: "林忆莲 ", n: 60861},
          {k: "悟空传 ", n: 59666},
          {k: "淘汰 ", n: 43617},
          {k: "TIME ", n: 39694},
          {k: "紫 ", n: 26260},
          {k: "九张机 ", n: 25309}
          ]
      }
    },
    components:{
     	Scroll
    }


  }
</script>

<style type="text/css">
 .search-wrapper{
 	height: 40px;
 	margin:20px;
 }
 .search-wrapper .search-box{
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    padding: 0 6px;
    height: 40px;
    background: #333;
    border-radius: 6px;
 }
 .search-box .sbox {
    flex: 1;
    margin: 0 5px;
    line-height: 20px;
    background: #333;
    color: #fff;
    font-size: 14px;
   /* outline-width:1px ;
    outline-style:solid ;
    outline-color:#f8bc2b;*/
}
.icon-search3,.icon-dismiss{
	color: #222;
	font-size: 20px;
}

	
	.hotscroll{
		position: fixed;
	    top: 178px;
	    bottom: 0;
	    width: 100%;
	}
	.hotscroll .scontent{
		overflow: hidden;
		height: 100%;
	}
	.scontent .hot-key {
       margin: 0 20px 20px 20px;
	}
	.scontent .hot-key .htitle {
	    margin-bottom: 20px;
	    font-size: 14px;
	    color: rgba(255,255,255,0.5);
	    width: 100%;
	    text-align: left;
	}
	.scontent .hot-key .hotkey{
		text-align: left;
	}
	.scontent .hot-key .item {
	    display: inline-block;
	    padding: 5px 10px;
	    margin: 0 20px 10px 0;
	    border-radius: 6px;
	    background: #333;
	    font-size: 14px;
	    color: rgba(255,255,255,0.3);
	}

</style>


