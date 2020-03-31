<template>
  <div class="detail">
    <detail-header :sightName="sightName"></detail-header>
    <detail-banner :bannerInfo="bannerInfo"></detail-banner>
    <detail-info :baseInfo="baseInfo"></detail-info>
    <detail-ticket :list="ticketList"></detail-ticket>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailInfo from './components/Info'
import DetailTicket from './components/Ticket'
export default {
  name: 'Detail',
  data () {
    return {
      sightName: '',
      bannerInfo: {},
      baseInfo: {},
      ticketList: []
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
          this.ticketList = res.data.ticket
        }
      })
    }
  },
  mounted () {
    this.getDetailInfo()
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailInfo,
    DetailTicket
  }
}
</script>

<style lang="stylus" scoped>
.detail
  background #f7f7f7
.con
  height 20rem
</style>
