<template>
  <div>
    <div class="d-flex justify-content-between mt-2">
      <div>
        <router-link class="fs-5 fw-bold text-decoration-none text-dark" :to="{ name: 'home' }">ハピロボ会社案内</router-link>
        <!-- <a class="fs-5 fw-bold text-decoration-none text-dark" href="#"></a> -->
      </div>
      
      <div>
        <a href="#" data-bs-toggle="modal" data-bs-target="#video-modal">
          <img src="@/assets/logo.png">
        </a>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="video-modal" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <!-- <video class="img-fluid" autoplay loop muted loading="lazy">
            <source src="@/assets/flight_indoor.mp4#t=41">
          </video> -->
          <div class="modal-body">
            <p>Show video</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopPage',
}
</script>
