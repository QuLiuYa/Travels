<template>
  <div class="gallery" @click="handleGallreyClick">
    <div class="wraper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, i) in imgs" :key="i">
          <img class="gallery-img" :src="item" alt />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true // 修改swiper的父元素时，自动初始化swiper
      }
    }
  },
  methods: {
    handleGallreyClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
.gallery >>> .swiper-container
  overflow inherit
.gallery
  display flex
  flex-direction column
  justify-content center
  position fixed
  z-index 99
  top 0
  left 0
  right 0
  bottom 0
  background #000
  .wraper
    .gallery-img
      width 100%
      height 100%
    .swiper-pagination
      bottom -1rem
      color #fff
</style>
