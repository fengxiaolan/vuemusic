<template>

    <ul class="song-list">
      <li 
        class="item" 
        v-for="(song, index) in songs"
        :key="song.key"
      >
        <div class="rank" style="display:none">
          <span></span>
        </div>
        <div class="songcon">
          <h2 class="name">{{song.name}}</h2>
          <p class="desc">{{song.desc}}</p>
        </div>
      </li>
    </ul>

</template>

<script>
 
  export default {
   data(){
      return {
      	songs:[
      	  {name:'Highway To Hell',desc:'AC/DC·Highway to hell',key:'1'},
      	  {name:'Highway To Hell',desc:'AC/DC·Highway to hell',key:'2'},
      	  {name:'Highway To Hell',desc:'AC/DC·Highway to hell',key:'3'},
      	  {name:'Highway To Hell',desc:'AC/DC·Highway to hell',key:'4'},
      	  {name:'Highway To Hell',desc:'AC/DC·Highway to hell',key:'5'},
      	  {name:'Highway To Hell',desc:'AC/DC·Highway to hell',key:'6'},
      	  {name:'Highway To Hell',desc:'AC/DC·Highway to hell',key:'7'},
      	  {name:'Highway To Hell',desc:'AC/DC·Highway to hell',key:'8'},
      	  {name:'Highway To Hell',desc:'AC/DC·Highway to hell',key:'9'},
      	  {name:'Highway To Hell',desc:'AC/DC·Highway to hell',key:'10'},
      	  {name:'Highway To Hell',desc:'AC/DC·Highway to hell',key:'11'},
      	  {name:'Highway To Hell',desc:'AC/DC·Highway to hell',key:'12'}
      	 ]
      }
   }

 
   


  }
</script>

<style type="text/css">
    .song-list .item{
    display: flex;
    align-items: center;
    box-sizing: border-box;
    height: 64px;
    font-size: 14px;
}
.song-list .item .rank{
    flex: 0 0 25px;
    width: 25px;
    margin-right: 30px;
    text-align: center;
}
.song-list .item .songcon {
    flex: 1;
    line-height: 20px;
    overflow: hidden;
    text-align: left;
}
.song-list .item .songcon .name{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #fff;
    font-size:16px;
}
.song-list .item .songcon .desc {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-top: 4px;
    color: rgba(255,255,255,0.3);
    font-size: 14px;
}
/*.music-list .list .song-list-wrapper {
  position: absolute;
  top: 44px;
  left: 0;
  width: 100%;
  display: none;
}*/
</style>
