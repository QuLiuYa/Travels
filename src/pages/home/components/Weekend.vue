<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <div class="item-img-warp">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {
          id: '001',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1603/6d/2f67ae0659f41f.jpg_r_640x214_bf6cbd0b.jpg',
          title: '北京赏花好地方',
          desc: '乱花渐欲迷人眼，京城赏花大搜索'
        },
        {
          id: '002',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
          title: '京城周末撒欢',
          desc: '在帝都过周末，不仅仅是城中游！'
        },
        {
          id: '003',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg',
          title: '京城溜娃必去',
          desc: '德智体美劳全面发展的亲子日，这些地方该去看看…'
        }
      ]
    }
  },
  created () {

  },
  methods: {

  }
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl'
.title
  line-height 0.8rem
  margin-top 0.2rem
  color #333
  text-indent 0.2rem
  background #eee
.item-img-warp
  height 0
  padding-bottom 37.5%
  overflow hidden
  .item-img
    width 100%
.item-info
  margin-top 0.2rem
  padding 0 0.2rem 0.2rem
  min-width 0
  .item-title
    line-height 0.52rem
    font-size 0.28rem
    color #212121
    $ellipsi()
  .item-desc
    line-height 0.48rem
    font-size 12px
    color #616161
    $ellipsi()
</style>
