<template>
  <!-- Card -->
  <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" 
    :style="data.background" 
    @click="showDetails">
    <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
      <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{{ data.title }}</h2>
      <ul class="d-flex list-unstyled mt-auto">
        <li class="me-auto">
          <span class="fs-3"><i :class="data.icon"></i></span>
        </li>
        <li class="d-flex align-items-center me-3">
          <div class="fs-10">
            <span>More details</span>
          </div>
        </li>
      </ul>
    </div>
  </div>

  <!-- Modal -->
  <div ref="modalRef" class="modal fade" tabindex="-1">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="h-100 p-5 bg-light">
          <h2>More details</h2>
          <div class="row gx-5 mb-2">
            <div class="col-8">
              <p>{{ data.body }}</p>
              <button class="btn btn-outline-dark" type="button" @click="readBody"><i class="fas fa-volume-up me-2"></i>Read it!</button>
            </div>
            <div class="col-4">
              <!-- <img :src="require('@/assets/images/photo-bicycle.jpg')" class="img-fluid"> -->
              <img :src="data.image" class="img-fluid">
            </div>
          </div>
          <button class="btn btn-dark me-2" type="button" @click="gotoLocation"><i class="fas fa-map-marker-alt me-2"></i>Take me there!</button>
          <button class="btn btn-danger" type="button" @click="callExpert"><i class="fas fa-phone me-2"></i>Talk to an Expert</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
import { ref, onMounted } from 'vue'

export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const modalRef = ref(null)
    let modal

    const showDetails = () => {
      modal.show()
    }

    const readBody = () => {
      console.debug(`Read text: ${props.body}`)
      if (typeof connect !== 'undefined') {
        connect.say(props.body)
      }
    }

    const gotoLocation = () => {
      console.debug(`Going to: ${props.locationName}`)
      if (typeof connect !== 'undefined') {
        connect.goto(props.locationName)
      }
    }

    const callExpert = () => {
      console.debug(`Calling: ${props.resourcePoolId}`)
      if (typeof connect !== 'undefined') {
        connect.call(props.resourcePoolId)
      }
    }

    onMounted(() => {
      const options = {
        keyboard: true,
        focus: true,
      }
      modal = new Modal(modalRef.value, options)
    })

    return { modalRef, showDetails, readBody, gotoLocation, callExpert }
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