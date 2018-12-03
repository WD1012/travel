<template>
  <div>
    <div class="commentDetial">推荐详情</div>
    <div v-for="item of detailList" :key="item.id" class="cfix box-commend">
      <img :src="item.detailUrl" alt="" class="detail-img">
      <div class="detail-right">
        <p class="detial-title">{{item.title}}</p>
        <p class="detail-desc">{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Detail',
    data (){
      return {
        detailList:[
          {
            id:'1',
            title:'尼桑',
            desc:'固定格式的格式的规范的归属感',
            detailUrl:'//img.58cdn.com.cn/olympia/img/index/sale_jiaju2.png'
          },
          {
            id:'2',
            title:'尼桑',
            desc:'固定格式的格式的规范的归属感',
            detailUrl:'//img.58cdn.com.cn/olympia/img/index/sale_jiaju2.png'
          },
          {
            id:'3',
            title:'尼桑',
            desc:'固定格式的格式的规范的归属感',
            detailUrl:'//img.58cdn.com.cn/olympia/img/index/sale_jiaju2.png'
          }
        ]
      }
    }
  }
</script>

<style>
  .commentDetial{
    padding:10px 25px;
    width:100%;
    font-size:26px;
    color:#333;
    background:#ccc;
  }
  .detail-img{
    float:left;
  }
  .detail-right{
    float: left;
  }
</style>
