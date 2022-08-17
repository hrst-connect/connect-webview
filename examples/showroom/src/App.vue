<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <div v-for="item in data" :key="item.id">
            <button class="btn btn-dark mx-2 fs-3" @click="call(item.resourcePoolId)">{{ item.title }}</button>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <router-view/>
</template>

<script>
import data from '@/data/call'

export default {
  setup() {
    
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