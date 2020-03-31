<template>
  <div>
    <router-link tag="div" to="/" class="header-back" v-show="showHeader">
      <div class="iconfont header-icon">&#xe667;</div>
    </router-link>
    <div class="header-fiexd" v-show="!showHeader" :style="opacityStyle">
      {{ sightName }}
      <router-link to="/" class="back">
        <div class="iconfont back-icon">&#xe667;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    sightName: String
  },
  data () {
    return {
      showHeader: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      // console.log('scroll')
      // console.log(document.documentElement.scrollTop)
      let top = document.documentElement.scrollTop
      if (top > 40) {
        let opacity = top / 180
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle.opacity = opacity
        this.showHeader = false
      } else {
        this.showHeader = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl'
.header-back
  position absolute
  left .1rem
  top .1rem
  width .72rem
  height .72rem
  z-index 1
  line-height .72rem
  border-radius 50%
  background rgba(0, 0, 0, .6)
  color #fff
  text-align center
  .header-icon
    font-size .36rem
.header-fiexd
  position fixed
  top 0
  left 0
  right 0
  z-index 1
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
