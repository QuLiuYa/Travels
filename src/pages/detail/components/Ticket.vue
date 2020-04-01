<template>
  <div class="ticket">
    <div class="item" v-for="(item, i) in list" :key="i">
      <div class="title">
        <span class="iconfont icon">&#xe69a;</span>
        {{ item.title }}
      </div>
      <div v-for="(item2, i2) in item.children" :key="i2" class="second">
        <div class="s-title">{{ item2.title }}</div>
        <div class="item-price">
          <span class="money">￥</span>
          <span class="price">{{item2.price}}</span>
          <span class="text">起</span>
          <span class="iconfont price-icon">&#xe6e0;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ticket',
  props: {
    list: Array
  },
  data () {
    return {}
  },
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl'
.ticket
  margin-top .1rem
  .item
    padding 0 .1rem
    margin-top .2rem
    line-height .88rem
    font-size .32rem
    background #fff
    color #333
    .icon
      font-size .32rem
      color $bgcolor
    .second
      display flex
      line-height .8rem
      .s-title
        flex 1
        font-size .3rem
      .item-price
        font-size 0
        color #ff9800
        .money
          font-size .24rem
        .price
          font-size .4rem
        .text
          font-size .24rem
          color #9e9e9e
        .price-icon
          padding 0 .1rem .1rem 0
          font-size .24rem
          color #9e9e9e
</style>
