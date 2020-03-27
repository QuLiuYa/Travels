<template>
  <div class="header">
    城市选择
    <router-link to="/" class="back">
      <div class="iconfont back-icon">&#xe667;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  position relative
  height $headerHeight
  line-height $headerHeight
  text-align center
  color #fff
  background $bgcolor
  .back
    color #fff
    .back-icon
      position absolute
      top 0
      left .2rem
      font-size .4rem
</style>
