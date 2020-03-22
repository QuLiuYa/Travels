<template>
  <div class="swiper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item in swiperUrl" :key="item.id">
        <img class="swiperimg" :src="item.url" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      },
      swiperUrl: [
        {
          id: 1,
          url:
            'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/ea919c3fccdad801b2b00b65eab0e8ea.jpg_r_640x290x70_ce1d70ab.jpg'
        },
        {
          id: 2,
          url:
            'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/ca640246fde83729fb1dbb095ba0bfe1.jpg_r_640x290x70_4432d456.jpg'
        }
      ]
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
