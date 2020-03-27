<template>
  <div>
    <div class="search">
      <input type="text" placeholder="请输入城市名称" class="search-input">
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
  height .72rem
  padding 0 .1rem
  background $bgcolor
  .search-input
    width 100%
    height .62rem
    padding .1rem
    box-sizing border-box
    border-radius .06rem
    text-align center
    color #666
</style>
