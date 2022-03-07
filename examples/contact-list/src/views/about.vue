<template>
  <div class="d-flex justify-content-center align-items-center" style="height: 90vh">
    <div class="d-flex flex-column text-center" style="width: 60em;">
      <!-- <div class="mb-3">
        <h1>会社情報</h1>
      </div> -->
      <div class="d-flex justify-content-center mb-3">
        <p class="fs-2">「人の能力を引き出し成長させる」ことで、人々を幸せにする</p>
      </div>
      <div class="d-flex flex-column justify-content-center mb-5 bg-danger text-light p-3 rounded">
        <span class="fs-3">最先端のテクノロジー、インフラストラクチャー、サービスによって</span>
        <span class="fs-3">新たなイノベーションを創造し、「人に能力を引き出し成長させる」</span>
        <span class="fs-3">ことで、人々を幸せにするというビジョンを持っています。</span>
      </div>
      <div class="d-flex justify-content-center">
        <img class="img-fluid m-2" src="@/assets/shooting_stars.jpg" width="400" loading="lazy">
        <img class="img-fluid m-2" src="@/assets/tomita.jpg" width="400" loading="lazy">
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'

export default {
  name: 'ContentAbout',
  setup() {
    onMounted(() => {
      if (typeof connect !== 'undefined') {
        // eslint-disable-next-line
        connect.speak("「人の能力を引き出し成長させる」ことで、人々を幸せにする");
      }
    })
  }
}
</script>
