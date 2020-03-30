<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      this.$http('/api/index.json')
        .then(res => {
          res = res.data
          // console.log(res)
          if (res.ret && res.data) {
            this.swiperList = res.data.swiperList
            this.iconList = res.data.iconlist
            this.recommendList = res.data.recommendList
            this.weekendList = res.data.weekendList
          }
        })
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style scoped >
</style>
