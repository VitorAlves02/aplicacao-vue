<template>
    <transition name="pagina">
      <router-view></router-view>
    </transition>
</template>

<script>

export default {

  

}
  
</script>

<style>

  * {
    padding:0;
    margin:0;
    border:0
  }

  body{
    background-image: url("./assets/imgs/fundo1.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    color:white;
    }

  .pagina-enter-active, .pagina-leave-active {
    transition: opacity .3s
  }
  .pagina-enter, .pagina-leave-active {
    opacity: 0
  }

</style>

