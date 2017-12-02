<template>
   <div class="recommend clearfix" ref="recommend">
   	<Scroll class="rcontent" ref="scroll" >
   	  <div>
      <swiper></swiper>
      
      <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li v-for="(item,idx) in discList" class="item" :key="idx" @click="selectItem(item)">
              <div class="rimg">
                <img width="60" height="60" :src="item.img">
              </div>
              <div class="text">
                <h2 class="name">{{item.title}}</h2>
                <p class="desc">{{item.info}}</p>
              </div>
            </li>
          </ul>
       </div>   

      </div>
    </Scroll>

    <router-view></router-view>
   </div>
</template>

<script>
  //加载轮播组件
  import Swiper from '../components/Swiper/Swiper';
  import Scroll from '../components/Scroll';
  
  export default {
   mounted(){
      
   },
   components:{
   	 Swiper,
   	 Scroll
   },
   data(){
   	return {
   		discList:[
        {img:'images/600.jpg',title:'金琳达',info:'韩系另类R/B | 邂逅于绮丽立虚幻的国境',id:100},
        {img:'images/600 (1).jpg',title:'Issac',info:'韩系另类R/B | 邂逅于绮丽立虚幻的国境',id:101},
        {img:'images/600 (2).jpg',title:'我是个讲道理的人',info:'韩系另类R/B | 邂逅于绮丽立虚幻的国境',id:102},
        {img:'images/600 (3).jpg',title:'焦糖玛七朵',info:'韩系另类R/B | 邂逅于绮丽立虚幻的国境',id:103},
        {img:'images/600 (4).jpg',title:'孤独的一点点患者',info:'韩系另类R/B | 邂逅于绮丽立虚幻的国境',id:104},
        {img:'images/600 (5).jpg',title:'金琳达',info:'韩系另类R/B | 邂逅于绮丽立虚幻的国境',id:105},
        {img:'images/600 (6).jpg',title:'三剑客',info:'韩系另类R/B | 邂逅于绮丽立虚幻的国境',id:106},
        {img:'images/600 (7).jpg',title:'金琳达',info:'韩系另类R/B | 邂逅于绮丽立虚幻的国***************境',id:107}
      ]
   	}
      
   },
   created(){
      this.loadData();
   },
   methods:{
   	  loadData() {
       //console.log("456")
      },
      selectItem(item) {
        this.$router.push({
          path: `/recommend/recommenddetail`
        })
      } 
    }


  }
</script>

<style type="text/css">
  .recommend{
	    position: fixed;
	    width: 100%;
	    top: 88px;
	    bottom: 0;
	    overflow: hidden;
    }
  .recommend .rcontent{
    	height: 100%;
    	overflow: hidden;
    }
	.recommend .recommend-list .list-title {
	    height: 65px;
	    line-height: 65px;
	    text-align: center;
	    font-size: 14px;
	    color: #ffcd32;
	}
  .rcontent .recommend-list .item {
    display: flex;
    box-sizing: border-box;
    align-items: center;
    padding: 0 20px 20px 20px;
    width: 100%;
  }

  .rcontent .recommend-list .item .rimg {
      flex: 0 0 60px;
      width: 60px;
      padding-right: 20px;
  }
  .rcontent .recommend-list .item .text{
      display: flex;
      flex-direction: column;
  /*    justify-content:center;*/
      flex: 1;
      line-height: 20px;
      overflow: hidden;
      font-size: 14px;
  }
  .rcontent .recommend-list .item .text .name {
      margin-bottom: 10px;
      color: #fff;
      text-align: left;
      font-size: 16px;
  }
  .rcontent .recommend-list .item .text .desc{
      color: rgba(255,255,255,0.3);
      text-align: left;
      font-size: 14px;
  }

    

</style>