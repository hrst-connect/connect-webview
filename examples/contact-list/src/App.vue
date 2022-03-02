<template>
  <div class="container-fluid">
    <Menu />

    <!-- Content -->
    <Home />
    <Directory />

    <Footer />
  </div>
</template>

<script>
import Menu from '@/components/menu'
import Footer from '@/components/footer'
import Home from '@/components/home'
import Directory from '@/components/directory'

export default {
  name: 'App',
  components: { Menu, Footer, Home, Directory },
  setup() {
    return { }
  }
}
</script>

<style lang="scss">
// @import 'scss/custom.scss';
@import 'scss/bootstrap.scss';
</style>