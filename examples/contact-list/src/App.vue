<template>
  <div class="container-fluid">
    <Menu />
    <router-view />
  </div>
</template>

<script>
import Menu from '@/components/menu'

export default {
  name: 'App',
  components: { Menu },
}
</script>

<style lang="scss">
// @import 'scss/custom.scss';
@import 'scss/bootstrap.scss';
</style>