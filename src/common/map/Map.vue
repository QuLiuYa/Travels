<template>
  <div>
    <div class="header-fiexd">
      景点地图
      <div class="iconfont back-icon" @click="goBack">&#xe667;</div>
    </div>
    <baidu-map
      class="bd"
      :center="center"
      :zoom="zoom"
      ak="UHuInLWlh2qbtDWzvkmITLopP9fyjGj4"
    >
    </baidu-map>
  </div>
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
export default {
  name: 'Map',
  data () {
    return {
      center: { lng: 109.18855, lat: 30.435737 },
      zoom: 15
    }
  },
  mounted () {
  },
  methods: {
    handler ({ BMap, map }) {
      console.log(BMap, map)
      this.center.lng = 109.18855
      this.center.lat = 30.435737
      this.zoom = 15
    },
    goBack () {
      this.$router.go(-1)
    }
  },
  components: {
    BaiduMap
  }
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl'
.bd
  width 100%
  height 100vh
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
  .back-icon
    position absolute
    top 0
    left .2rem
    font-size .4rem
    color #fff
</style>
