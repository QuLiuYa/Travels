<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">你的位置</div>
        <div class="button-list">
          <div class="button-wrap">
            <div class="button">{{ this.$store.state.city }}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrap" v-for="item in hotCities" :key="item.id">
            <div class="button" @click="handleCityChange(item.name)">
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) in cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <ul class="item-list">
          <li
            class="item border-bottom"
            v-for="tag in item"
            :key="tag.id"
            @click="handleCityChange(tag.name)"
          >
            {{ tag.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  methods: {
    handleCityChange (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    // 当触摸发生变化时
    letter () {
      if (this.letter) {
        let element = this.$refs[this.letter][0]
        // console.log(element)
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.border-topbottom
  &:before
    border-color #ccc
  &:after
    border-color #ccc
.border-bottom
  &:before
    border-color #ccc
.list
  position absolute
  overflow hidden
  top 1.58rem
  left 0
  right 0
  bottom 0
  .title
    line-height .44rem
    padding-left .2rem
    background #eee
    color #666
    font-size .26rem
  .button-list
    overflow hidden
    padding .1rem .6rem .1rem .1rem
    .button-wrap
      float left
      width 33.33%
      .button
        margin .1rem
        padding .1rem 0
        border .02rem solid #ccc
        border-radius .06rem
        text-align center
  .item-list
    .item
      line-height .76rem
      padding-left .2rem
</style>
