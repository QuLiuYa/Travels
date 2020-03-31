<template>
  <div class="box">
    <div class="info">
      <div class="card border-bottom">
        <div class="item-card border-right">
          <div class="item-score">
            <span class="score">{{baseInfo.score}}</span>
            <span class="text">分</span>
            <span class="appraise">很棒</span>
            <span class="iconfont icon">&#xe6de;</span>
          </div>
          <div class="item-num">
            <span class="comment">{{baseInfo.comment}}条评论</span>
            <span>{{baseInfo.raider}}条攻略</span>
          </div>
        </div>
        <div class="item-card">
          <p class="item-title">景区介绍</p>
          <span class="item-text">开放时间、贴士</span>
          <span class="iconfont icon">&#xe6de;</span>
        </div>
      </div>
    </div>
    <div class="map">
      <span class="iconfont map-icon">&#xe613;</span>
      <span class="map-text">{{baseInfo.address}}</span>
      <span class="iconfont map-icon">&#xe6de;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info',
  props: {
    baseInfo: Object
  },
  data () {
    return {}
  },
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="stylus">
.box
  position relative
  top -.1rem
  border-radius .1rem .1rem 0 0
  background #fff
.info
  padding .2rem .2rem 0
  .card
    display flex
    padding-bottom .2rem
    .item-card
      flex 1
      position relative
      padding-right .2rem
      .item-score
        color #ff8300
        .score
          font-size .44rem
        .text
          font-size .28rem
          margin-right .2rem
        .appraise
          font-size .28rem
      .item-num
        line-height .44rem
        font-size .24rem
        color #9e9e9e
        .comment
          margin-right .2rem
      .item-title
        padding-left .3rem
        line-height .48rem
        font-size .32rem
      .item-text
        padding-left .3rem
        font-size .24rem
        color #9e9e9e
      .icon
        position absolute
        top 50%
        right .2rem
        transform translateY(-50%)
        color #9e9e9e
.map
  display flex
  padding .2rem
  line-height .52rem
  font-size .28rem
  .map-text
    flex 1
    margin 0 .2rem
  .map-icon
    color #9e9e9e
</style>
