<template>
  <div>
    <detail-header></detail-header>
    <detail-banner></detail-banner>
    <div class="con"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
export default {
  name: 'Detail',
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
