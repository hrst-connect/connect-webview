<template>
  <div>
    <video v-if="videoSrc" class="vertical-center" autoplay muted loop>
      <source :src="videoSrc" type="video/mp4">
    </video>

    <button type="button" @click="initDance">Init</button>
    <button type="button" @click="startDance">Start</button>

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

    onMounted(() => {
      if (robot.getId()) {
        mqtt.init(robot.getId())
      }
    })

    const initDance = () => {
      music.loop = false
      music.currentTime = 0
      music.play()
      music.pause()
    }

    const startDance = async (playAudio) => {
      dance()

      if (playAudio) {
        console.log(`Play Audio: ${playAudio}`)
        music.play()
      }
    }

    watch(mqtt.message, () => {
      const command = mqtt.message.value.command
      // const action = mqtt.message.value.action
      const payload = mqtt.message.value.payload

      console.log(payload.master)
      const playAudio = payload.master
      if (command === 'dance') {
        startDance(playAudio)
      } else if (command === 'stop') {
        // @TODO end script! Route to another page?
      }
    })

    return {
      error: robot.error,
      resp: robot.resp,
      videoSrc,
      initDance,
      startDance,
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
</style>
