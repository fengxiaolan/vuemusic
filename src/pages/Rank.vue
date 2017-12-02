<template>
   <div class="rank clearfix" ref="rank">
     <Scroll class="rcontent" ref="rankscroll">
     	<ul class="toplist">
	        <li class="item" v-for="item in ranks" :key="item.key" >
	          <div class="topimg">
	            <img :src="item.img" width="100" height="100">
	          </div>
	          <ul class="songlist">
	            <li class="song" v-for="(song, index) in item.songlist" :key="new Date().getTime()">
	              <span> {{index + 1}} </span>
	              <span> {{song.songname}} - {{song.singername}} </span>
	            </li>
	          </ul>
	        </li>
      </ul>
     </Scroll>
   </div>
</template>

<script>
  import Scroll from '../components/Scroll';
  export default {
     data(){
     	return {
         /* ranks:[
            {img:'http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_4_300_209139931.jpg',key:'liu',songlist:[
              {songname:'项羽虞姬',singername:'毛不易'},
              {songname:'渡',singername:'薛之谦'},
              {songname:'戒烟',singername:'李荣浩'}
            ]},
            {img:'http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_26_300_207323048.jpg',key:'liu',songlist:[
              {songname:'像风一样',singername:'薛之谦'},
              {songname:'别',singername:'薛之谦'},
              {songname:'8000！',singername:'原唱'}
            ]},
            {img:'http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_26_300_207323048.jpg',key:'liu',songlist:[
              {songname:'像风一样',singername:'薛之谦'},
              {songname:'别',singername:'薛之谦'},
              {songname:'8000！',singername:'原唱'}
            ]},
            {img:'http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_26_300_207323048.jpg',key:'liu',songlist:[
              {songname:'像风一样',singername:'薛之谦'},
              {songname:'别',singername:'薛之谦'},
              {songname:'8000！',singername:'原唱'}
            ]},
            {img:'http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_26_300_207323048.jpg',key:'liu',songlist:[
              {songname:'像风一样',singername:'薛之谦'},
              {songname:'别',singername:'薛之谦'},
              {songname:'8000！',singername:'原唱'}
            ]},
            {img:'http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_26_300_207323048.jpg',key:'liu',songlist:[
              {songname:'像风一样',singername:'薛之谦'},
              {songname:'别',singername:'薛之谦'},
              {songname:'8000！',singername:'原唱'}
            ]}
          ]*/
          ranks:{data:""}
     	}
     },
     methods:{

     },
     components:{
     	Scroll
     },
     beforeCreate(){
      var _this=this;
      this.$http.get('/mock/hotsong.json').then(function(data){
            var json=data.ranks;
            _this.data=eval("(" + json +")");
            console.log(json)
          },function(response){
             console.info(response);
        })
     }


  }
</script>

<style type="text/css">

   .rank{
      position: fixed;
      width: 100%;
      top: 88px;
      bottom: 0;
      overflow: hidden;
    }
   .rank .rcontent{
      height: 100%;
      overflow: hidden;
    }
    .rank .toplist .item {
	    display: flex;
	    margin: 0 20px;
	    padding-top: 20px;
	    height: 100px;
	}
	.rank .toplist .item .topimg {
	    width: 100px;
	    height: 100px;
	}
	.rank .toplist .item .songlist {
	    flex: 1;
	    display: flex;
	    flex-direction: column;
	    /*justify-content: flex-start;*/
	    text-align: left;
	    padding: 12px 20px;
	    box-sizing:border-box;
	    height: 100px;
	    overflow: hidden;
	    background: #333;
	    color: rgba(255,255,255,0.3);
	    font-size: 12px;

	}
	.rank .toplist .item .songlist .song {
	    text-overflow: ellipsis;
	    overflow: hidden;
	    white-space: nowrap;
	    line-height: 26px;
	}
</style>