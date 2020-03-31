<template>
  <div>
    <detail-header :sightName="sightName"></detail-header>
    <detail-banner :bannerInfo="bannerInfo"></detail-banner>
    <div class="con"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
export default {
  name: 'Detail',
  data () {
    return {
      sightName: '',
      bannerInfo: {},
      baseInfo: {}
    }
  },
  methods: {
    getDetailInfo () {
      this.$http('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(res => {
        res = res.data
        console.log(res)
        if (res.ret && res.data) {
          this.sightName = res.data.banner.sightName
          this.bannerInfo = res.data.banner
          this.baseInfo = res.data.baseInfo
        }
      })
    }
  },
  mounted () {
    this.getDetailInfo()
  },
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>

<style lang="stylus" scoped>
.con
  height 20rem
</style>
