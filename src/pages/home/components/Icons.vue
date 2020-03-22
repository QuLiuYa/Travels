<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img :src="item.iconUrl" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      // swiperOptions: {
      //   pagination: {
      //     el: '.swiper-pagination'
      //   }
      // }
      iconlist: [
        {
          id: 1,
          iconUrl: '//s.qunarzz.com/travel/travel_hy2/2019/gonglue.png',
          desc: '攻略'
        },
        {
          id: 2,
          iconUrl: '//s.qunarzz.com/travel/travel_hy2/2019/bitiyan.png',
          desc: '旅游榜单'
        },
        {
          id: 3,
          iconUrl: '//s.qunarzz.com/travel/travel_hy2/2019/jingdian.png',
          desc: '景点'
        },
        {
          id: 4,
          iconUrl: '//s.qunarzz.com/travel/travel_hy2/2019/zhusu.png',
          desc: '酒店'
        },
        {
          id: 5,
          iconUrl: '//s.qunarzz.com/travel/travel_hy2/2019/tesetiyan.png',
          desc: '玩乐'
        },
        {
          id: 6,
          iconUrl: '//s.qunarzz.com/travel/travel_hy2/2019/tesecai.png',
          desc: '美食'
        },
        {
          id: 7,
          iconUrl: '//s.qunarzz.com/travel/travel_hy2/2019/gouwu.png',
          desc: '购物'
        },
        {
          id: 8,
          iconUrl: '//s.qunarzz.com/travel/travel_hy2/2019/luxian.png',
          desc: '路线'
        },
        {
          id: 9,
          iconUrl: '//s.qunarzz.com/travel/travel_hy2/2019/youji.png',
          desc: '游记'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconlist.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl'
.icons >>> .swiper-container
  height 0
  padding-bottom 50%
.icon
  position relative
  overflow hidden
  float left
  width 25%
  height 0
  padding-bottom 25%
  .icon-img
    position absolute
    left 0
    right 0
    top 0
    bottom .44rem
    box-sizing border-box
    padding .1rem
    img
      height  100%
      display block
      margin 0 auto
  .icon-desc
    position absolute
    left 0
    right 0
    bottom 0
    line-height .44rem
    text-align center
    color #333
    $ellipsi()
</style>
