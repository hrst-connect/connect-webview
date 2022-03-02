<template>
  <div class="container-fluid">
    <Menu />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Menu from '@/components/menu'
import Footer from '@/components/footer'

export default {
  name: 'App',
  components: { Menu, Footer },
}
</script>

<style lang="scss">
// @import 'scss/custom.scss';
@import 'scss/bootstrap.scss';
</style>