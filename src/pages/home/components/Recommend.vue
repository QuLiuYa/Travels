<template>
  <div>
    <div class="title">旅游推荐</div>
    <ul>
      <router-link tag="li" class="item border-bottom" v-for="item in list" :key="item.id" :to="/detail/ + item.id">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <p class="item-price">{{item.price}}</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
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
  margin-top 0.2rem
  color #333
  text-indent 0.2rem
  background #eee
.item
  display flex
  height 1.8rem
  padding 0.1rem
  overflow hidden
  .item-img
    width 1.7rem
    height 1.7rem
  .item-info
    flex 1
    padding 0.1rem
    min-width 0
    .item-title
      line-height 0.54rem
      font-size 0.32rem
      font-weight 700
      color #000
      $ellipsi()
    .item-desc
      line-height 0.4rem
      color #ccc
      $ellipsi()
    .item-price
      line-height 0.6rem
      font-size 0.36rem
      color #ff7400
</style>
