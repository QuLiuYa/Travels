<template>
  <div class="swiper">
    <swiper :options="swiperOptions" v-if="showSwiper">
      <swiper-slide v-for="item in list" :key="item.id">
        <img class="swiperimg" :src="item.url" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: {
      type: Array
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style scoped lang="stylus">
.swiper >>> .swiper-pagination-bullet-active
  background #fff
.swiper
  overflow hidden
  width 100%
  height 0
  padding-bottom 53.4%
  .swiperimg
    width 100%
</style>
