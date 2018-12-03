<template>
  <div class="wapper">
    <swiper :options="swiperOption">
      <swiper-slide class="swiper-slide" v-for="item of swiperList" :key="item.id">
        <img :src="item.imgUrl" alt="" class="swiper-img">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Homeswiper',
  data () {
    return {
      swiperList:[
        {
          id:'1',
          imgUrl:'//a.58cdn.com.cn/app58/icons/dawangka114.jpg'
        },
        {
          id:'2',
          imgUrl:'//a.58cdn.com.cn/app58/icons/yaoqinghaoyou.png'
        }
      ],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: true,
        speed: 400,
        loop: true
      },
      swiperSlides: [1, 2]
    }
  },
  methods: {}
}
</script>

<style scoped>
  .wapper >>> .swiper-pagination-bullet-active{
    backgroud:#fff;
  }
  /*.wapper{*/
    /*width: 100%;*/
    /*height: 0;*/
    /*padding-bottom:62.25%;*/
  /*}*/
  /*.wapper .swiper-img{*/
    /*width: 100%;*/
  /*}*/
  .swiper-container{
    width: 750px;
  }
</style>
