<template>
  <div>
    <div class="banner" @click="handleGalleryClick">
      <img class="banner-img" :src="bannerInfo.bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-title">{{bannerInfo.sightName}}</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe6dd;</span></div>
      </div>
    </div>
    <gallery v-show="galleryIsShow" @close="handleCloseGallrey" :imgs="bannerInfo.gallaryImgs"></gallery>
  </div>
</template>

<script>
import Gallery from 'common/gallery/Gallery'
export default {
  name: 'DetailBanner',
  props: {
    bannerInfo: Object
  },
  components: {
    Gallery
  },
  data () {
    return {
      galleryIsShow: false
    }
  },
  methods: {
    handleGalleryClick () {
      this.galleryIsShow = true
    },
    handleCloseGallrey () {
      this.galleryIsShow = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position relative
  height 0
  padding-bottom 55%
  .banner-img
    width 100%
  .banner-info
    position absolute
    display flex
    left 0
    right 0
    bottom 0
    height .4rem
    line-height .4rem
    padding .1rem .2rem
    background-image linear-gradient(top, rgba(0, 0 , 0, 0), rgba(0, 0, 0, .8))
    color #fff
    .banner-title
      flex 1
      font-size .32rem
    .banner-number
      width 1.2rem
      border-radius .1rem
      background rgba(0 , 0 , 0, .5)
      text-align center
      font-size .24rem
      .banner-icon
        font-size .24rem
</style>
