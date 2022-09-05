<template>
  <div>
    <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg text-decoration-none"
      :style="data.background" 
      @click="onClick(data)">
      <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
        <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{{ data.title }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const gotoLocation = (name) => {
      console.debug(`Going to: ${name}`)
      if (typeof connect !== 'undefined') {
        connect.gotoLocation(name)
      }
    }

    const onClick = (data) => {
      gotoLocation(data.locationName)
      connect.setCallBtn('dwtoMUO3P0L3SfHNmWmf')
      connect.showCallBtn()
      connect.toast('Loading')
      window.location.href = data.url // Note: switching webview context should be the last step
    }

    return { onClick }
  }
}
</script>

<style>
.card-cover {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
</style>