<template>
  <div class="container py-5" id="custom-cards">
    <h2 class="pb-2 border-bottom">Cards Example</h2>

    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">

      <div v-for="item in data" :key="item.id" class="col-4">
        <Card :data="item"/>
      </div>

    </div>
  </div>
</template>

<script>
import data from '@/data/data'

import Card from '@/components/Card'

export default {
  components: { Card },
  setup() {
    return { data }
  }
}
</script>

<style>

</style>