<template>
  <div class="commonet">
    <h2 class="title border-bottom">用户评论</h2>
    <ul>
      <li class="item border-bottom" v-for="(item, i) in list" :key="i">
        <div class="item-top">
          <span class="star">⭐⭐⭐⭐⭐</span>
          <span class="user">{{item.userName}}</span>
          <span class="time">{{item.times}}</span>
        </div>
        <p class="item-comment">{{item.context}}</p>
        <div class="item-img">
          <img class="pic" :src="img" alt="" v-for="(img, index) in item.pics" :key="index">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Comment',
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
.border-bottom
  &before
    border-color #ccc
.commonet
  background #fff
.title
  position relative
  padding 0 .2rem
  height .88rem
  margin-top .2rem
  background: #fff
  color #333
  font-size .3rem
  line-height .88rem
  text-indent .2rem
  &:before
    content: "\0020";
    position: absolute;
    top: .15rem;
    left: .2rem;
    width: .06rem;
    height: .4rem;
    background: #1ba9ba;
    border-radius: .04rem;
.item
  padding .1rem
  .item-top
    display flex
    line-height .6rem
    font-size .24rem
    color #212121
    .star
      flex 1
  .item-comment
    line-height .42rem
    font-size .26rem
    color #616161
  .item-img
    overflow hidden
    margin .2rem 0 .1rem
    .pic
      float left
      width 33.33%
      padding .07rem
      box-sizing border-box
</style>
