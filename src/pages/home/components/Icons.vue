<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img :src="item.iconUrl" alt />
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
  props: {
    list: {
      type: Array
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
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
  margin-top 0.2rem
  .icon-img
    position absolute
    left 0
    right 0
    top 0
    bottom 0.44rem
    box-sizing border-box
    padding 0.1rem
    img
      height 100%
      display block
      margin 0 auto
  .icon-desc
    position absolute
    left 0
    right 0
    bottom 0
    line-height 0.44rem
    text-align center
    color #333
    $ellipsi()
</style>
