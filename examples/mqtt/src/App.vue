<template>
  <div>
    <video v-if="videoSrc" class="vertical-center" autoplay muted loop>
      <source :src="videoSrc" type="video/mp4">
    </video>

    <p v-show="error" style="color: white">{{ error }}</p>
    <p v-show="resp" style="color: white">{{ resp }}</p>
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue'

import mqtt from '@/composables/mqtt'
import robot from '@/composables/robot'

export default {
  setup() {
    const videoSrc = ref(null)

    onMounted(() => {
      if (robot.getId()) {
        mqtt.init(robot.getId())
      }
    })

    watch(mqtt.message, () => {
      const command = mqtt.message.value.command
      const action = mqtt.message.value.action
      const payload = mqtt.message.value.payload

      switch (command) {
        case 'move':
          switch (action) {
            case 'turn_by':
              robot.turn(payload.angle)
              break
            case 'tilt_by':
              robot.tilt(payload.angle)
              break
            default:
              break
          }
          break;

        case 'waypoint':
          robot.gotoLocation(payload.location)
          break;

        case 'tts':
          robot.speak(payload.utterance)
          break;

        case 'media':
          switch (action) {
            case 'video':
              videoSrc.value = payload.url
              break
            default:
              break
          }
          break;

        default:
          break;
      }
    })

    return {
      error: robot.error,
      resp: robot.resp,
      videoSrc,
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
