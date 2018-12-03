<template>
  <div>
    <home-header></home-header>
    <Swiper></Swiper>
    <nav-middle></nav-middle>
    <detail></detail>
  </div>
</template>

<script>
  import HomeHeader from './../../components/header/Header.vue'
  import Swiper from './../../components/swiper/Swiper.vue'
  import NavMiddle from './../../components/nav/Nav.vue'
  import detail from './../../components/detail/Detail.vue'
  import axios from 'axios'

  export default {
    name: 'Home',
    components: {
      HomeHeader,
      Swiper,
      NavMiddle,
      detail
    },
    methods: {},
    mounted () {
      axios.get('/api/index.json').then((resolve,reject)=>{
        if(resolve){
          alert(12)
        }
      })
    }
  }
</script>

<style>
</style>
