<template>
  <div class="header cfix">
    <div class="header-left">
      <i class="iconfont icon-zuojiantou1"></i>
    </div>
    <div class="header-input">
      <i class="iconfont icon-sousuo"></i>
      <!--<input type="text"placeholder="输入城市/景点/热玩主题" class="search-input">-->
      输入城市/景点/热玩主题
    </div>
    <div class="header-right">
      <span>三亚</span>
      <i class="iconfont icon-jiantouarrow486"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  methods: {}
}
</script>

<style scoped>
  /*@import '~styles/basecolor.styl'*/
  .header{
    height: 86px;
    line-height: 86px;;
    width: 100%;
    background: #00bcd4;
    color:#fff;
    overflow: hidden;
  }
  .header-left{
    float: left;
    width:64px;
    text-align: center;
  }
  .header-input{
    float: left;
    margin-top:12px;
    padding:0 10px;
    height: 64px;
    line-height: 64px;
    width: 540px;
    background: #fff;
    border-radius:10px;
    color:#ccc;
  }
  .search-input{
    border:none;
    outline: none;
    width: 500px;
    /*height: 60px;*/
    /*line-height: 60px;*/
  }
  .header-right{
    float: right;
    width:124px;
    text-align: center;
  }
</style>
