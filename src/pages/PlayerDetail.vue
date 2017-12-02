<template>
  <transition name="normal">
    <player></player>

  </transition>
</template>

<script>
  import Player from '../components/Player'
  export default {
     data(){
        return {

        }
     },
     components:{
        Player
     }

  }


</script>


<style type="text/css">
  .normal-enter-active, .normal-leave-active{
      transition: all 0.4s
   }
   .normal-enter, .normal-leave-to{
     opacity: 0
   }

</style>