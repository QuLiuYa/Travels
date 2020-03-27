<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item in list" :key="item.id">
        <div class="item-img-warp">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: {
      type: Array
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl'
.title
  line-height 0.8rem
  color #333
  text-indent 0.2rem
  background #eee
.item-img-warp
  height 0
  padding-bottom 37.5%
  overflow hidden
  .item-img
    width 100%
.item-info
  margin-top 0.2rem
  padding 0 0.2rem 0.2rem
  min-width 0
  .item-title
    line-height 0.52rem
    font-size 0.28rem
    color #212121
    $ellipsi()
  .item-desc
    line-height 0.48rem
    font-size 12px
    color #616161
    $ellipsi()
</style>
