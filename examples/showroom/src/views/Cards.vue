<template>
  <div class="container-fluid py-5" id="custom-cards">
    <h2 class="text-center">必要なボタンを押してください。​</h2>

    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div v-for="item in data" :key="item.id" class="col-3">
        <Card :data="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import data from '@/data/cars'

import Card from '@/components/Card'

export default {
  components: { Card },
  setup() {
    return { data }
  }
}
</script>
