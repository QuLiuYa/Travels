<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe667;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe600;</span>
      输入城市/景点/游玩主题
      </div>
    <div class="header-right" @click="goCity">
      {{this.$store.state.city}}
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  methods: {
    goCity () {
      this.$router.push('/city')
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl'
.header
  display: flex
  height: $headerHeight
  background: $bgcolor
  color: #fff
  align-items: center
  text-align: center
  .header-left
    width: .64rem
    .back-icon
      font-size: .4rem
  .header-input
    flex: 1
    line-height: .64rem
    margin-left: .2rem
    padding-left: .2rem
    background: #fff
    border-radius: .1rem
    color: #ccc
    text-align: left
  .header-right
    min-width: 1.04rem
    padding 0 .1rem
    .arrow-icon
      font-size: .24rem
      margin-left: -.04rem
</style>
