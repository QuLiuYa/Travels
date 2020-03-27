<template>
  <div>
    <div class="title">旅游推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <p class="item-price">{{item.price}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [
        {
          id: '001',
          imgUrl: 'https://imgs.qunarzz.com/p/tts0/1809/7c/1ff90b381595a302.jpg_r_480x320x90_9aab0341.jpg',
          title: '珠海-乌鲁木齐 8天跟团游',
          desc: '钜惠新疆♥全程0自费☞陆地头等舱❀豪华住宿丨游赛里木湖+天山天池+巴音布鲁克',
          price: '￥999'
        },
        {
          id: '002',
          imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vs_tts/e211cdcf-1d18-4201-8955-d376fc111ada.jpg_r_480x320x95_3dea5fe6.jpg',
          title: '珠海- 乌鲁木齐 8天跟团游',
          desc: '钜惠新疆♥全程0自费☞陆地头等舱❀豪华住宿丨游赛里木湖+天山天池+巴音布鲁克',
          price: '￥888'
        },
        {
          id: '003',
          imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vs_tts/5bf3c567-9fdb-460b-9f02-34be7445c9e8.jpg_r_480x320x95_ddae113a.jpg',
          title: '珠海-乌鲁木齐 8天跟团游',
          desc: '钜惠新疆♥全程0自费☞陆地头等舱❀豪华住宿丨游赛里木湖+天山天池+巴音布鲁克',
          price: '￥1111'
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
.item
  display flex
  height 1.8rem
  padding 0.1rem
  overflow hidden
  .item-img
    width 1.7rem
    height 1.7rem
  .item-info
    flex 1
    padding 0.1rem
    min-width 0
    .item-title
      line-height 0.54rem
      font-size 0.32rem
      font-weight 700
      color #000
      $ellipsi()
    .item-desc
      line-height 0.4rem
      color #ccc
      $ellipsi()
    .item-price
      line-height 0.6rem
      font-size 0.36rem
      color #ff7400
</style>
