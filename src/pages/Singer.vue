<template>
  <div class="singer clearfix" ref="singer">
      <Scroll class="scontent" ref="singerscroll" >
       
          <ul>
          <li v-for="(group,idx) in singers" class="list-group" :key="idx" ref="listGroup">
            <h2 class="list-group-title"> {{group.stitle}} </h2>
            <ul>
              <li class="list-group-item" v-for="item in group.singerinfo" :key="item.key" @click="selectItem(item)">
                <img class="avatar" :src="item.simg">
                <span class="name"> {{item.sname}} </span>
              </li>
            </ul>
          </li>
        </ul>
       <!-- 侧边栏 -->
        <div class="list-shortcut"  >
          <ul>
            <li class="asideitem" v-for="(item, index) in singers" 
              :data-index="index" 
              :key="new Date().getTime()"
              :class="{'current' :index=== index}"
            >
              {{item.stitle.substr(0,1)}}
            </li>
          </ul>
      </div>
      
       
    </Scroll>
    <router-view></router-view>
  </div> 
</template>

<script>
  import Scroll from '../components/Scroll';
  export default {
    data(){
      return {
        singers:[
          {stitle:'热门',singerinfo:[
            {simg:'https://y.gtimg.cn/music/photo_new/T001R150x150M000002J4UUk29y8BY.jpg?max_age=2592000',sname:'薛之谦',key:1},
            {simg:'https://y.gtimg.cn/music/photo_new/T001R150x150M0000025NhlN2yWrP4.jpg?max_age=2592000',sname:'周杰伦',key:2},
          ]},
          {stitle:'A',singerinfo:[
            {simg:'https://y.gtimg.cn/music/photo_new/T001R150x150M000002J4UUk29y8BY.jpg?max_age=2592000',sname:'艾伦.沃克',key:3},
            {simg:'https://y.gtimg.cn/music/photo_new/T001R150x150M0000025NhlN2yWrP4.jpg?max_age=2592000',sname:'Alin',key:4},
          ]},
          {stitle:'B',singerinfo:[
            {simg:'https://y.gtimg.cn/music/photo_new/T001R150x150M000002J4UUk29y8BY.jpg?max_age=2592000',sname:'艾伦.沃克',key:5},
            {simg:'https://y.gtimg.cn/music/photo_new/T001R150x150M0000025NhlN2yWrP4.jpg?max_age=2592000',sname:'Alin',key:6},
            {simg:'https://y.gtimg.cn/music/photo_new/T001R150x150M0000025NhlN2yWrP4.jpg?max_age=2592000',sname:'Alin',key:7},
            {simg:'https://y.gtimg.cn/music/photo_new/T001R150x150M0000025NhlN2yWrP4.jpg?max_age=2592000',sname:'Alin',key:8}
          ]},
          {stitle:'C',singerinfo:[
            {simg:'https://y.gtimg.cn/music/photo_new/T001R150x150M000002J4UUk29y8BY.jpg?max_age=2592000',sname:'艾伦.沃克',key:9},
            {simg:'https://y.gtimg.cn/music/photo_new/T001R150x150M0000025NhlN2yWrP4.jpg?max_age=2592000',sname:'Alin',key:10},
            {simg:'https://y.gtimg.cn/music/photo_new/T001R150x150M0000025NhlN2yWrP4.jpg?max_age=2592000',sname:'Alin',key:11},
            {simg:'https://y.gtimg.cn/music/photo_new/T001R150x150M0000025NhlN2yWrP4.jpg?max_age=2592000',sname:'Alin',key:12}
          ]},
          {stitle:'D',singerinfo:[
            {simg:'https://y.gtimg.cn/music/photo_new/T001R150x150M000002J4UUk29y8BY.jpg?max_age=2592000',sname:'薛之谦',key:1}
          ]},
          {stitle:'E',singerinfo:[
            {simg:'https://y.gtimg.cn/music/photo_new/T001R150x150M000002J4UUk29y8BY.jpg?max_age=2592000',sname:'薛之谦',key:1}
          ]},
          {stitle:'F',singerinfo:[
            {simg:'https://y.gtimg.cn/music/photo_new/T001R150x150M000002J4UUk29y8BY.jpg?max_age=2592000',sname:'薛之谦',key:1}
          ]},
          {stitle:'G',singerinfo:[
            {simg:'https://y.gtimg.cn/music/photo_new/T001R150x150M000002J4UUk29y8BY.jpg?max_age=2592000',sname:'薛之谦',key:1}
          ]},
          {stitle:'H',singerinfo:[
            {simg:'https://y.gtimg.cn/music/photo_new/T001R150x150M000002J4UUk29y8BY.jpg?max_age=2592000',sname:'薛之谦',key:1}
          ]},
          {stitle:'I',singerinfo:[
            {simg:'https://y.gtimg.cn/music/photo_new/T001R150x150M000002J4UUk29y8BY.jpg?max_age=2592000',sname:'薛之谦',key:1}
          ]},
          {stitle:'J',singerinfo:[
            {simg:'https://y.gtimg.cn/music/photo_new/T001R150x150M000002J4UUk29y8BY.jpg?max_age=2592000',sname:'薛之谦',key:1}
          ]},
          {stitle:'K',singerinfo:[
            {simg:'https://y.gtimg.cn/music/photo_new/T001R150x150M000002J4UUk29y8BY.jpg?max_age=2592000',sname:'薛之谦',key:1}
          ]},
          {stitle:'L',singerinfo:[
            {simg:'https://y.gtimg.cn/music/photo_new/T001R150x150M000002J4UUk29y8BY.jpg?max_age=2592000',sname:'薛之谦',key:1}
          ]},
          {stitle:'M',singerinfo:[
            {simg:'https://y.gtimg.cn/music/photo_new/T001R150x150M000002J4UUk29y8BY.jpg?max_age=2592000',sname:'薛之谦',key:1}
          ]},
          {stitle:'N',singerinfo:[
            {simg:'https://y.gtimg.cn/music/photo_new/T001R150x150M000002J4UUk29y8BY.jpg?max_age=2592000',sname:'薛之谦',key:1}
          ]},
          {stitle:'O',singerinfo:[
            {simg:'https://y.gtimg.cn/music/photo_new/T001R150x150M000002J4UUk29y8BY.jpg?max_age=2592000',sname:'薛之谦',key:1}
          ]},
          {stitle:'P',singerinfo:[
            {simg:'https://y.gtimg.cn/music/photo_new/T001R150x150M000002J4UUk29y8BY.jpg?max_age=2592000',sname:'薛之谦',key:1}
          ]},
          {stitle:'Q',singerinfo:[
            {simg:'https://y.gtimg.cn/music/photo_new/T001R150x150M000002J4UUk29y8BY.jpg?max_age=2592000',sname:'薛之谦',key:1}
          ]},
          {stitle:'R',singerinfo:[
            {simg:'https://y.gtimg.cn/music/photo_new/T001R150x150M000002J4UUk29y8BY.jpg?max_age=2592000',sname:'薛之谦',key:1}
          ]},
          {stitle:'S',singerinfo:[
            {simg:'https://y.gtimg.cn/music/photo_new/T001R150x150M000002J4UUk29y8BY.jpg?max_age=2592000',sname:'薛之谦',key:1}
          ]},
          {stitle:'T',singerinfo:[
            {simg:'https://y.gtimg.cn/music/photo_new/T001R150x150M000002J4UUk29y8BY.jpg?max_age=2592000',sname:'薛之谦',key:1}
          ]},
          {stitle:'U',singerinfo:[
            {simg:'https://y.gtimg.cn/music/photo_new/T001R150x150M000002J4UUk29y8BY.jpg?max_age=2592000',sname:'薛之谦',key:1}
          ]},
          {stitle:'V',singerinfo:[
            {simg:'https://y.gtimg.cn/music/photo_new/T001R150x150M000002J4UUk29y8BY.jpg?max_age=2592000',sname:'薛之谦',key:1}
          ]},
          {stitle:'W',singerinfo:[
            {simg:'https://y.gtimg.cn/music/photo_new/T001R150x150M000002J4UUk29y8BY.jpg?max_age=2592000',sname:'薛之谦',key:1}
          ]},
          {stitle:'X',singerinfo:[
            {simg:'https://y.gtimg.cn/music/photo_new/T001R150x150M000002J4UUk29y8BY.jpg?max_age=2592000',sname:'薛之谦',key:1}
          ]},
          {stitle:'Y',singerinfo:[
            {simg:'https://y.gtimg.cn/music/photo_new/T001R150x150M000002J4UUk29y8BY.jpg?max_age=2592000',sname:'薛之谦',key:1}
          ]},
          {stitle:'Z',singerinfo:[
            {simg:'https://y.gtimg.cn/music/photo_new/T001R150x150M000002J4UUk29y8BY.jpg?max_age=2592000',sname:'薛之谦',key:1}
          ]}

        ]
      }
    },
    methods:{
      refresh() {
        this.$refs.singerscroll.refresh()
      },
      selectItem(item){
        this.$router.push({
          path: `/singer/playerdetail`
        })
      }

    },
    components:{
       Scroll
    },
    computed:{

    }


  }
</script>

<style type="text/css">
   .singer{
      position: fixed;
      width: 100%;
      top: 88px;
      bottom: 0;
      overflow: hidden;
    }
  .singer .scontent{
      height: 100%;
      overflow: hidden;
    }
    .scontent .list-group{
      width: 100%;
      padding-bottom: 30px;
    }
   .scontent .list-group .list-group-title {
    height: 30px;
    line-height: 30px;
    padding-left: 20px;
    font-size: 12px;
    color: rgba(255,255,255,0.5);
    background: #333;
    text-align: left;
}
.scontent .list-group .list-group-item {
    display: flex;
    align-items: center;
    padding: 20px 0 0 30px;
}
.scontent .list-group .list-group-item .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.scontent .list-group .list-group-item .name {
    margin-left: 20px;
    color: rgba(255,255,255,0.5);
    font-size: 14px;
}

/*侧边栏*/
.scontent .list-shortcut {
    position: fixed;
    z-index: 30;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    padding: 20px 0;
    border-radius: 10px;
    text-align: center;
    background: rgba(0,0,0,0.3);
    font-family: Helvetica;
}
.scontent .list-shortcut .asideitem{
    padding: 3px;
    line-height: 1;
    color: rgba(255,255,255,0.5);
    font-size: 12px;
}
.scontent .list-shortcut .current {
    color: #ffcd32;
}

</style>

 