<template>
  <div>
    <video v-if="videoSrc" class="vertical-center" autoplay muted loop>
      <source :src="videoSrc" type="video/mp4">
    </video>

    <div class="vertical-center">
      <button type="button" class="btn btn-primary btn-circle btn-xl border border-5 shadow" @click="toggleDance(true)">
        <svg v-show="!isPlaying" xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
          <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
        </svg>
        <svg v-show="isPlaying" xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-stop-fill" viewBox="0 0 16 16">
          <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z"/>
        </svg>
      </button>
    </div>

      <p v-show="error" style="color: white">{{ error }}</p>
      <p v-show="resp" style="color: white">{{ resp }}</p>
  </div>
</template>

<script>
import { onMounted, ref, watch } from 'vue'

import mqtt from '@/composables/mqtt'
import robot from '@/composables/robot'
import dance from '@/composables/dance'

export default {
  setup() {
    const videoSrc = ref(null)
    const music = new Audio(require('@/assets/mj-billy-jean.mp3'));
    
    const isPlaying = ref(true)

    onMounted(() => {
      if (robot.getId()) {
        mqtt.init(robot.getId())
      }
    })

    const toggleDance = async (playAudio) => {
      if (isPlaying.value) {
        console.log('Stop')
        music.pause()
      } else {
        console.log('Play')
        music.currentTime = 0
        if (playAudio) {
          console.log(`Play Audio: ${playAudio}`)
          music.play()
        }

        dance()
      }
      isPlaying.value = !isPlaying.value
    }

    watch(mqtt.message, () => {
      const command = mqtt.message.value.command
      // const action = mqtt.message.value.action
      const payload = mqtt.message.value.payload

      console.log(payload.master)
      const playAudio = payload.master
      if (command === 'dance') {
        toggleDance(playAudio)
      } else if (command === 'stop') {
        // @TODO end script! Route to another page?
      }
    })

    return {
      error: robot.error,
      resp: robot.resp,
      videoSrc,
      toggleDance, isPlaying,
    }
  }
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: black;
}
</style>

<style scoped>
.vertical-center {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: black;
}

.btn-circle.btn-xl { 
  width: 200px; 
  height: 200px; 
  padding: 20px 20px; 
  border-radius: 50px; 
  text-align: center; 
}

.btn-primary {
  color: white;
  background-color: #1f9ad3;
  border-color: #1f9ad3
}

.btn-primary:hover {
  color: white;
  background-color: #1660a7;
  border-color: #1660a7;
}
</style>
