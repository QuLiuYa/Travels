<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet'
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl'
.list
  position absolute
  display flex
  flex-direction column
  justify-content center
  width .4rem
  top 1.58rem
  right 0
  bottom 0
  .item
    line-height .4rem
    color $bgcolor
    text-align center
</style>
