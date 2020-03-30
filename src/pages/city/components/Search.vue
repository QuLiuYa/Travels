<template>
  <div>
    <div class="search">
      <input
        type="text"
        v-model="keyword"
        placeholder="请输入城市名称"
        class="search-input"
      />
    </div>
    <div class="search-content" v-show="keyword" ref="search">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="(item, i) in list"
          :key="i"
          @click="handleCityChange(item.name)"
        >
          {{ item.name }}
        </li>
        <li class="search-item border-bottom" v-show="isNoList">
          没有找到该城市
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityHeader',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    isNoList () {
      return !this.list.length
    }
  },
  methods: {
    handleCityChange (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const res = []
        for (const key in this.cities) {
          this.cities[key].forEach(item => {
            if (
              item.spell.indexOf(this.keyword) > -1 ||
              item.name.indexOf(this.keyword) > -1
            ) {
              res.push(item)
            }
          })
        }
        this.list = res
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
  height .72rem
  padding 0 .1rem
  background $bgcolor
  .search-input
    width 100%
    height .62rem
    padding .1rem
    box-sizing border-box
    border-radius .06rem
    text-align center
    color #666
.search-content
  position absolute
  overflow hidden
  z-index 1
  top 1.58rem
  left 0
  right 0
  bottom 0
  background #eee
  .search-item
    line-height .62rem
    padding-left .2rem
    background #fff
    color #666
</style>
