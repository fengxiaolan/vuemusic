<template>
  
  <transition name="slide">
    <div>
    <music-lists></music-lists>
    <player-min></player-min>
    </div>
  </transition>
 
</template>

<script>
  import MusicLists from '../components/MusicLists';
  import PlayerMin from '../components/PlayerMin'; //进度条
  

  export default {
     data(){
     	return {

     	}
     },
     components:{
     	MusicLists,
      PlayerMin
      
     }

  }


</script>


<style type="text/css">
  .slide-enter-active, .slide-leave-active{
    transition: all .3s;    
  }
  .slide-enter, .slide-leave-to{
    transform: translate3d(100%, 0, 0);
  }

</style>