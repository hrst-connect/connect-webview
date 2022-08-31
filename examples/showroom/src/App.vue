<template>
  <nav class="navbar navbar-expand-lg fixed-bottom navbar-light bg-light">
    <div class="container-fluid">
      <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <div v-for="item in data" :key="item.id">
            <button class="btn btn-dark p-3 mx-2 fs-3" @click="call(item.resourcePoolId)">{{ item.title }}</button>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <router-view/>
</template>

<script>
import { onMounted } from 'vue'
import data from '@/data/call'

export default {
  setup() {
    
    onMounted(() => {
      if (typeof connect !== 'undefined') {
        connect.hideHomeBtn();
        connect.hideCallBtn();
      }
    })

    const call = (resourcePoolId) => {
      console.debug(`Calling: ${resourcePoolId}`)
      if (typeof connect !== 'undefined') {
        connect.call(resourcePoolId)
      }
    }

    return { data, call }
  },
}
</script>

<style>
/* html, body {
  background-color: black;
} */
</style>