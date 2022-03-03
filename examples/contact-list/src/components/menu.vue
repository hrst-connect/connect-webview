<template>
  <div>
    <div class="d-flex justify-content-between mt-2">
      <div class="d-flex justify-content-start">
        <router-link class="fs-5 fw-bold text-decoration-none text-dark mx-2 my-2" :to="{ name: 'home' }">
          <img src="@/assets/hrst_logo.png" loading="lazy">
        </router-link>
        <router-link class="fs-5 fw-bold text-decoration-none text-dark mx-2 my-3" :to="{ name: 'about' }">会社情報</router-link>
        <router-link class="fs-5 fw-bold text-decoration-none text-dark mx-2 my-3" :to="{ name: 'business' }">事業内容</router-link>
      </div>
      
      <div>
        <a href="#" data-bs-toggle="modal" data-bs-target="#video-modal">
          <img src="@/assets/temi_logo.jpg" width=150>
        </a>
      </div>
    </div>

    <!-- Modal -->
    <div id="video-modal" class="modal fade" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <video id="temi-video" class="img-fluid" loading="lazy">
            <source src="@/assets/temi_video_jp.mp4">
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'

export default {
  name: 'TopPage',
  setup() {
    onMounted(() => {
      let videoModal = document.getElementById('video-modal')
      let temiVideo = document.getElementById('temi-video')
      videoModal.addEventListener('shown.bs.modal', () => {
        console.log('shown')
        temiVideo.play();
      })

      videoModal.addEventListener('hidden.bs.modal', () => {
        console.log('hidden')
        temiVideo.pause();
        temiVideo.currentTime = 0;
      })

      temiVideo.onended = () => {
        videoModal.hide()
      }
    })

    
    return { }
  }
}
</script>
