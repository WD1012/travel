<template>
  <div>
    <swiper  class="box cfix">
      <swiper-slide v-for="(page,index) of pagearr" :key="index">
        <div v-for="items of page" :key="items.id" class="nav-box">
          <img :src="items.navUrl" alt="" class="nav-img"/>
          <p class="nav-desc">{{items.title}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'NavMiddle',
  data () {
    return {
      navList:[
        {
          id :'1',
          title :'招聘',
          navUrl :'//img.58cdn.com.cn/olympia/img/index/sale_jiaju2.png'
        },
        {
          id :'2',
          title :'招聘',
          navUrl :'//img.58cdn.com.cn/olympia/img/index/sale_jiaju2.png'
        },
        {
          id :'3',
          title:'招聘',
          navUrl:'//img.58cdn.com.cn/olympia/img/index/sale_jiaju2.png'
        },
        {
          id :'4',
          title :'招聘',
          navUrl :'//img.58cdn.com.cn/olympia/img/index/sale_jiaju2.png'
        },
        {
          id :'5',
          title :'招聘',
          navUrl :'//img.58cdn.com.cn/olympia/img/index/sale_jiaju2.png'
        },
        {
          id :'6',
          title :'招聘',
          navUrl :'//img.58cdn.com.cn/olympia/img/index/sale_jiaju2.png'
        },
        {
          id :'7',
          title :'招聘',
          navUrl :'//img.58cdn.com.cn/olympia/img/index/sale_jiaju2.png'
        },
        {
          id :'8',
          title :'招聘',
          navUrl :'//img.58cdn.com.cn/olympia/img/index/sale_jiaju2.png'
        },
        {
          id :'9',
          title :'招聘',
          navUrl :'//img.58cdn.com.cn/olympia/img/index/sale_jiaju2.png'
        }
      ]
    }
  },
  computed:{
    pagearr (){
      var pagearr = []
      this.navList.forEach((pageitem,index)=>{
        var page = Math.floor(index/8)
        if(!pagearr[page]){
          pagearr[page] =[]
        }
        pagearr[page].push(pageitem)
      })
      return pagearr
    }
  }
}
</script>

<style>
  .box{
    padding:20px 0;
  }
  .nav-box{
    float: left;
    width: 25%;
    text-align: center;
  }
  .nav-img{
    margin:0 auto;
  }
  .nav-desc{
    margin-top:6px;
  }
</style>
