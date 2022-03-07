<template>
  <div class="d-flex justify-content-center align-items-center" style="height: 90vh">
    <div class="d-flex flex-column text-center" style="width: 60em;">
      <!-- <div class="mb-3">
        <h1>事業内容</h1>
      </div> -->
      <img class="img-fluid" src="@/assets/hapi-robo-grp.jpg" loading="lazy">
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'

export default {
  name: 'ContentProducts',
  setup() {
    onMounted(() => {
      if (typeof connect !== 'undefined') {
        // eslint-disable-next-line
        connect.speak("ロボットのバリューチェーンをトータルにカバー");
      }
    })
  }
}
</script>
